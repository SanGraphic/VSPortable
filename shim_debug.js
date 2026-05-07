// ── Core globals ──────────────────────────────────────────────────────────────
var _halCallbacks = {};
var _rafId = 0;

// Window / self / global alias — must set on globalThis directly
globalThis.window = globalThis;
globalThis.self = globalThis;
var window = globalThis;
var self = globalThis;

// Event system on window (globalThis)
var _eventListeners = {};
globalThis.addEventListener = function(type, cb) {
    if (!_eventListeners[type]) _eventListeners[type] = [];
    _eventListeners[type].push(cb);
    // Fire 'load' immediately since we have no real page lifecycle
    if (type === 'load' || type === 'DOMContentLoaded') {
        setTimeout(cb, 0);
    }
};
globalThis.removeEventListener = function(type, cb) {
    if (_eventListeners[type]) _eventListeners[type] = _eventListeners[type].filter(function(f){ return f !== cb; });
};
globalThis.dispatchEvent = function() {};
globalThis.alert = function(msg) { console.log('[ALERT]', String(msg)); };
globalThis.confirm = function() { return true; };
globalThis.prompt = function() { return ''; };

// Navigator
var navigator = {
    userAgent: 'VSportNative/1.0',
    platform: 'Win32',
    maxTouchPoints: 0,
    language: 'en',
    languages: ['en'],
    onLine: true,
    geolocation: null,
    mediaDevices: null,
};

// Screen / size
var innerWidth = 960;
var innerHeight = 540;
var devicePixelRatio = 1;
var screen = { width: 960, height: 540, availWidth: 960, availHeight: 540 };

// Location
var location = { href: 'file://vsport', search: '', hash: '', pathname: '/', protocol: 'file:' };

// Performance
var performance = { now: function() { return Date.now(); }, mark: function(){}, measure: function(){} };

// Document
var _canvasEl = {
    width: 960, height: 540,
    style: {},
    dataset: {},
    className: '',
    parentNode: null,
    parentElement: null,
    addEventListener: function() {},
    removeEventListener: function() {},
    getBoundingClientRect: function() { return { left:0, top:0, width:960, height:540, right:960, bottom:540 }; },
    getContext: function(type) {
        console.log('[HAL] Phaser getContext:', type);
        globalThis.__phaserRenderer = type;
        // Return null for webgl to force Canvas2D fallback
        if (type === 'webgl' || type === 'webgl2' || type === 'experimental-webgl') return null;
        return _buildCtx(type);
    },
    setAttribute: function() {},
    getAttribute: function() { return null; },
    focus: function() {},
    blur: function() {},
};

var document = {
    readyState: 'complete',
    hidden: false,
    visibilityState: 'visible',
    documentElement: { 
        style: {}, className: '', 
        addEventListener: function(){}, 
        setAttribute: function(){},
        getElementsByTagName: function(){ return []; },
    },
    body: { 
        style: {}, 
        appendChild: function(el){ return el; }, 
        removeChild: function(){},
        insertBefore: function(el){ return el; },
        addEventListener: function(){},
        getElementsByTagName: function(){ return []; },
        className: '',
    },
    head: { 
        appendChild: function(el){ return el; },
        getElementsByTagName: function(){ return []; },
    },
    location: location,
    createElement: function(tag) {
        if (tag === 'canvas') return _canvasEl;
        var el = { 
            style: {}, type: '', innerHTML: '', className: '', id: '', href: '',
            addEventListener: function(){}, 
            removeEventListener: function(){}, 
            appendChild: function(c){ return c; },
            removeChild: function(){},
            insertBefore: function(c){ return c; },
            setAttribute: function(){}, 
            getAttribute: function(){ return null; },
            getElementsByTagName: function(){ return []; },
        };
        if (tag === 'style') el.innerHTML = '';
        if (tag === 'script') { setTimeout(function(){ if(el.onload) el.onload(); }, 0); }
        return el;
    },
    getElementById: function() { return null; },
    querySelector: function(sel) {
        if (sel === '#phaser-game' || sel === 'canvas') return _canvasEl;
        return null;
    },
    querySelectorAll: function() { return []; },
    getElementsByTagName: function(tag) {
        if (tag === 'head') return [document.head];
        if (tag === 'body') return [document.body];
        return [];
    },
    getElementsByClassName: function() { return []; },
    addEventListener: function() {},
    removeEventListener: function() {},
    createElementNS: function(ns, tag) { return document.createElement(tag); },
    createTextNode: function(t) { return { nodeValue: t, textContent: t }; },
    dispatchEvent: function() {},
    createComment: function() { return {}; },
    hasFocus: function() { return true; },
};
_canvasEl.parentNode = document.body;
_canvasEl.parentElement = document.body;

// WebGL stubs (so 'in window' checks pass)
function WebGLRenderingContext() {}
function WebGL2RenderingContext() {}
function WebGLBuffer() {}
function WebGLTexture() {}
function WebGLProgram() {}
function WebGLShader() {}
function WebGLUniformLocation() {}
function WebGLFramebuffer() {}
function HTMLCanvasElement() {}
function HTMLImageElement() {}
function HTMLVideoElement() {}
function HTMLAudioElement() {}
function HTMLElement() {}
function Element() {}
function Node() {}
function EventTarget() {}
function Event() {}
function CustomEvent() {}
function MouseEvent() {}
function KeyboardEvent() {}
function TouchEvent() {}
function PointerEvent() {}
function ImageData() {}
function ImageBitmap() {}
var Worker = null;
var SharedArrayBuffer = null;
var OffscreenCanvas = null;
var importScripts = null;

// Canvas 2D context — emits native draw commands
function _buildCtx(type) {
    if (type === '2d') {
        var _fill = '#000000';
        var _alpha = 1;
        var _transforms = [];
        var _tx = 0, _ty = 0; // simple translation tracking
        var ctx = {
            fillStyle: '#000000', strokeStyle: '#000000', globalAlpha: 1,
            font: '10px sans-serif', textAlign: 'left', textBaseline: 'top',
            globalCompositeOperation: 'source-over',
            canvas: _canvasEl,
            save: function(){ _transforms.push({tx:_tx,ty:_ty}); },
            restore: function(){ var t=_transforms.pop(); if(t){_tx=t.tx;_ty=t.ty;} },
            translate: function(x,y){ _tx+=x; _ty+=y; },
            scale: function(){}, rotate: function(){},
            transform: function(){}, setTransform: function(a,b,c,d,e,f){ _tx=e||0; _ty=f||0; },
            resetTransform: function(){ _tx=0; _ty=0; },
            fillRect: function(x,y,w,h) {
                var c = ctx.fillStyle;
                __draw('FILL '+(x+_tx|0)+' '+(y+_ty|0)+' '+(w|0)+' '+(h|0)+' '+c);
            },
            strokeRect: function(){},
            clearRect: function(x,y,w,h) {
                if(x===0 && y===0 && w>=960 && h>=540) __draw('CLEAR');
                else __draw('FILL '+(x+_tx|0)+' '+(y+_ty|0)+' '+(w|0)+' '+(h|0)+' #000000');
            },
            fillText: function(){},
            strokeText: function(){},
            drawImage: function(img, sx, sy, sw, sh, dx, dy, dw, dh) {
                if (!img || !img._id) return;
                var id = img._id;
                if (arguments.length >= 9) {
                    __draw('BLIT ' + id + ' ' + (sx|0) + ' ' + (sy|0) + ' ' + (sw|0) + ' ' + (sh|0) + ' ' + (dx+_tx|0) + ' ' + (dy+_ty|0) + ' ' + (dw|0) + ' ' + (dh|0));
                } else if (arguments.length >= 5) {
                    __draw('BLIT ' + id + ' 0 0 ' + img.width + ' ' + img.height + ' ' + (sx+_tx|0) + ' ' + (sy+_ty|0) + ' ' + (sw|0) + ' ' + (sh|0));
                } else if (arguments.length >= 3) {
                    __draw('BLIT ' + id + ' 0 0 ' + img.width + ' ' + img.height + ' ' + (sx+_tx|0) + ' ' + (sy+_ty|0) + ' ' + img.width + ' ' + img.height);
                }
            },
            putImageData: function(){},
            getImageData: function(x,y,w,h){ return { data: new Uint8Array(w*h*4), width:w, height:h }; },
            createImageData: function(w,h){ return { data: new Uint8Array(w*h*4), width:w, height:h }; },
            createLinearGradient: function(){ return { addColorStop: function(){} }; },
            createRadialGradient: function(){ return { addColorStop: function(){} }; },
            createPattern: function(){ return {}; },
            beginPath: function(){}, closePath: function(){},
            moveTo: function(){}, lineTo: function(){}, arc: function(){},
            rect: function(){}, clip: function(){}, fill: function(){}, stroke: function(){},
            measureText: function(t){ return { width: t.length * 6 }; },
            isPointInPath: function(){ return false; },
            setLineDash: function(){}, getLineDash: function(){ return []; },
        };
        return ctx;
    }
    // WebGL: return a Proxy so any property access returns a no-op
    var glStub = {};
    return new Proxy(glStub, {
        get: function(t, p) {
            if (p in t) return t[p];
            if (p === 'canvas') return _canvasEl;
            if (typeof p === 'string' && p.startsWith('WEBGL')) return 0;
            return function() { return null; };
        }
    });
}

// requestAnimationFrame — fires callback then flips the native window
function requestAnimationFrame(cb) {
    setTimeout(function() {
        cb(Date.now());
        __draw('FLIP');
    }, 16);
    return ++_rafId;
}
function cancelAnimationFrame(id) { clearTimeout(id); }

// LocalStorage
var localStorage = (function() {
    var s = {};
    return {
        getItem: function(k) { return s[k] !== undefined ? s[k] : null; },
        setItem: function(k, v) { s[k] = String(v); },
        removeItem: function(k) { delete s[k]; },
        clear: function() { s = {}; },
    };
})();
var sessionStorage = localStorage;

// URL / Blob
var URL = { createObjectURL: function(){ return ''; }, revokeObjectURL: function(){} };
function Blob() {}

// Audio
function Audio() {}
Audio.prototype.play = function() { return Promise.resolve(); };
Audio.prototype.pause = function() {};
function AudioContext() {
    this.currentTime = 0;
    this.destination = { connect: function(){} };
    this.state = 'running';
}
AudioContext.prototype.createBufferSource = function() {
    return { connect: function(){}, start: function(){}, stop: function(){}, buffer: null, loop: false };
};
AudioContext.prototype.createGain = function() {
    return { connect: function(){}, gain: { value: 1 } };
};
AudioContext.prototype.createDynamicsCompressor = function() {
    return { connect: function(){}, threshold: {value:0}, knee: {value:0}, ratio: {value:1}, attack: {value:0}, release: {value:0} };
};
AudioContext.prototype.decodeAudioData = function(buf, cb) { if(cb) cb({}); return Promise.resolve({}); };
AudioContext.prototype.resume = function() { return Promise.resolve(); };
var webkitAudioContext = AudioContext;

// Image
var _imgIdCounter = 0;
function Image() { 
    this.width = 0; 
    this.height = 0; 
    this._id = ++_imgIdCounter; 
    this._listeners = { load: [], error: [] };
}
Image.prototype.addEventListener = function(type, cb) {
    if (this._listeners[type]) this._listeners[type].push(cb);
};
Image.prototype.removeEventListener = function(type, cb) {
    if (this._listeners[type]) this._listeners[type] = this._listeners[type].filter(function(f){ return f !== cb; });
};
Object.defineProperty(Image.prototype, 'src', {
    set: function(v) { 
        var self = this; 
        this._src = v;
        setTimeout(function(){ 
            try {
                var filePath = String(v).replace(/^\.?\//, '').replace(/^file:\/\/vsport\/?/, '');
                var data = __readFile(String(v));
                var view = new DataView(data);
                if (view.getUint32(0) === 0x89504E47) { // \x89PNG
                    self.width = view.getUint32(16);
                    self.height = view.getUint32(20);
                }
                __draw('LOAD ' + self._id + ' ' + filePath);
                if (self.onload) self.onload();
                self._listeners.load.forEach(function(cb){ cb(); });
            } catch(e) { 
                console.log('[SHIM] Image load error for ' + v + ':', e.message); 
                if (self.onerror) self.onerror(e);
                self._listeners.error.forEach(function(cb){ cb(e); });
            }
        }, 0); 
    }
});

// fetch (sync file read via injected __readFile)
function fetch(url) {
    try {
        var data = __readFile(String(url));
        return Promise.resolve({
            ok: true, status: 200,
            arrayBuffer: function() { return Promise.resolve(data); },
            json: function() { return Promise.resolve(JSON.parse(String.fromCharCode.apply(null, new Uint8Array(data)))); },
            text: function() { return Promise.resolve(String.fromCharCode.apply(null, new Uint8Array(data))); },
        });
    } catch(e) {
        return Promise.reject(e);
    }
}

// XMLHttpRequest
function XMLHttpRequest() { this.readyState = 0; this.status = 0; this.response = null; }
XMLHttpRequest.prototype.open = function(m, url) { this._url = url; this.readyState = 1; };
XMLHttpRequest.prototype.send = function() {
    try {
        this.response = __readFile(String(this._url));
        this.status = 200; this.readyState = 4;
        if (this.onload) this.onload();
        if (this.onreadystatechange) this.onreadystatechange();
    } catch(e) {
        this.status = 404; this.readyState = 4;
        if (this.onerror) this.onerror(e);
    }
};
XMLHttpRequest.prototype.setRequestHeader = function() {};
XMLHttpRequest.prototype.addEventListener = function(e, cb) { this['on'+e] = cb; };
XMLHttpRequest.prototype.abort = function() {};
var XDomainRequest = XMLHttpRequest;

// Console passthrough
console.log('[SHIM] Browser globals ready.');
`