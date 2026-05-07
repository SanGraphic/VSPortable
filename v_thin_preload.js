// API Stripper Configuration
const STRIP_CONFIG = {
    webgl: false,
    audio: false,
    fetch: false,       
    xhr: false,         
    localStorage: false,
    indexedDB: false,
    workers: false
};

console.log('[STRIPPER] Preload script running. Aggressive API stripping enabled.');

window.onerror = function(msg, url, line, col, error) {
    console.log('[BROWSER-ERROR]', msg, '@ line:', line, 'col:', col);
    if (error && error.stack) {
        console.log(error.stack);
    }
};

if (STRIP_CONFIG.webgl) {
    const _getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(type, ...args) {
        if (type === 'webgl' || type === 'experimental-webgl' || type === 'webgl2') {
            console.log('[STRIPPER] Blocked WebGL context request');
            return null;
        }
        return _getContext.apply(this, [type, ...args]);
    };
    window.WebGLRenderingContext = undefined;
    window.WebGL2RenderingContext = undefined;

    // Phaser 3 WebGL plugins (like RexPixelationPostFx) crash when WebGL is disabled
    // because CanvasRenderer does not have `pipelines`. We shim it on Object.prototype.
    Object.defineProperty(Object.prototype, 'pipelines', {
        get: function() {
            if (!this._mockPipelines) {
                this._mockPipelines = { 
                    addPostPipeline: function(){ console.log('[STRIPPER] Mocked addPostPipeline'); },
                    get: function(name){ return null; },
                    getPostPipeline: function(name){ 
                        return { resetFromJSON: function() { return this; }, name: '' }; 
                    }
                };
            }
            return this._mockPipelines;
        },
        set: function(v) {
            Object.defineProperty(this, 'pipelines', { value: v, writable: true, configurable: true, enumerable: true });
        },
        configurable: true
    });

    // The game checks for 'OES_standard_derivatives' via getExtension, which doesn't exist in Canvas mode.
    Object.defineProperty(Object.prototype, 'getExtension', {
        value: function(ext) {
            console.log('[STRIPPER] Mocked getExtension:', ext);
            return null;
        },
        writable: true,
        configurable: true
    });
}

if (STRIP_CONFIG.audio) {
    // To keep it functional but "thin", we strip WebAudio to force HTML5 Audio fallback.
    // This allows real sound to play using simple <audio> tags without the complex WebAudio graph.
    window.AudioContext = undefined;
    window.webkitAudioContext = undefined;
    console.log('[STRIPPER] Disabled WebAudio to force HTML5 Audio fallback.');
}

if (STRIP_CONFIG.fetch) {
    window.fetch = undefined;
}

if (STRIP_CONFIG.xhr) {
    window.XMLHttpRequest = undefined;
}

if (STRIP_CONFIG.localStorage) {
    Object.defineProperty(window, 'localStorage', { value: undefined, configurable: true, writable: true });
}

if (STRIP_CONFIG.indexedDB) {
    window.indexedDB = undefined;
}

if (STRIP_CONFIG.workers) {
    window.Worker = undefined;
    window.SharedArrayBuffer = undefined;
}

console.log('[STRIPPER] Environment prepared.');
