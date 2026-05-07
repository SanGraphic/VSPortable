const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { getQuickJS } = require('quickjs-emscripten');

const BUNDLE_DIR = path.join(__dirname, '.webpack/renderer');

async function main() {
    console.log('[HOST] Initializing Clean QuickJS Environment...');
    const QuickJS = await getQuickJS();
    const vm = QuickJS.newContext();

    // --- 1. NATIVE WINDOW IPC ---
    console.log('[HOST] Launching v_window.exe...');
    const nativeWindow = spawn(path.join(__dirname, 'v_window.exe'));
    nativeWindow.stdout.on('data', d => process.stdout.write('[NATIVE] ' + d.toString()));
    nativeWindow.stderr.on('data', d => process.stderr.write('[NATIVE ERROR] ' + d.toString()));
    
    vm.newFunction('__draw', (cmdHandle) => {
        const cmd = vm.getString(cmdHandle);
        if (cmd === 'CLEAR') {
            nativeWindow.stdin.write('CLEAR\n');
        } else if (cmd === 'FLIP') {
            nativeWindow.stdin.write('FLIP\n');
        } else if (cmd.startsWith('FILL ')) {
            const parts = cmd.split(' ');
            if (parts.length >= 6) {
                const color = parts.slice(5).join(' ');
                nativeWindow.stdin.write(`FILL ${parts[1]} ${parts[2]} ${parts[3]} ${parts[4]} ${color}\n`);
            }
        }
    }).consume(fn => vm.setProp(vm.global, '__draw', fn));

    // --- 2. TIMER BRIDGES ---
    let _intervals = {};
    vm.newFunction('setTimeout', (cb, ms) => {
        const msVal = ms ? Number(vm.dump(ms)) : 0;
        const cbDup = cb.dup();
        setTimeout(() => {
            const res = vm.callFunction(cbDup, vm.undefined, []);
            if (res && res.error) {
                console.error('[HOST] setTimeout Error:', vm.dump(res.error));
                res.error.dispose();
            } else if (res && res.value) {
                res.value.dispose();
            }
            cbDup.dispose();
        }, msVal);
        return vm.newNumber(0);
    }).consume(fn => vm.setProp(vm.global, 'setTimeout', fn));

    vm.newFunction('setInterval', (cb, ms) => {
        const msVal = ms ? Number(vm.dump(ms)) : 16;
        const cbDup = cb.dup();
        const id = setInterval(() => {
            const res = vm.callFunction(cbDup, vm.undefined, []);
            if (res && res.error) {
                console.error('[HOST] setInterval Error:', vm.dump(res.error));
                res.error.dispose();
            } else if (res && res.value) {
                res.value.dispose();
            }
        }, msVal);
        _intervals[id] = cbDup;
        return vm.newNumber(id);
    }).consume(fn => vm.setProp(vm.global, 'setInterval', fn));

    vm.newFunction('clearTimeout', () => vm.undefined).consume(fn => vm.setProp(vm.global, 'clearTimeout', fn));
    vm.newFunction('clearInterval', (idHandle) => {
        const id = Number(vm.dump(idHandle));
        clearInterval(id);
        if (_intervals[id]) {
            _intervals[id].dispose();
            delete _intervals[id];
        }
        return vm.undefined;
    }).consume(fn => vm.setProp(vm.global, 'clearInterval', fn));

    // --- 3. CONSOLE BRIDGE ---
    const consoleHandle = vm.newObject();
    for (const method of ['log', 'warn', 'error', 'info', 'debug']) {
        vm.newFunction(method, (...args) => {
            console[method]('[QJS]', ...args.map(a => {
                try { return vm.dump(a); } catch(e) { return '?'; }
            }));
        }).consume(fn => vm.setProp(consoleHandle, method, fn));
    }
    vm.setProp(vm.global, 'console', consoleHandle);
    consoleHandle.dispose();

    // --- 4. BROWSER GLOBALS (CLEAN) ---
    const browserGlobalsCode = `
        var window = globalThis;
        var self = globalThis;

        // Base APIs
        var performance = { now: function() { return Date.now(); } };
        var navigator = { userAgent: 'VSportNative/1.0', platform: 'Win32', languages: ['en'], onLine: true };
        var location = { href: 'file://vsport', search: '', hash: '', pathname: '/', protocol: 'file:' };
        var innerWidth = 960, innerHeight = 540, devicePixelRatio = 1;
        var screen = { width: 960, height: 540, availWidth: 960, availHeight: 540 };

        var localStorage = { getItem: function(){ return null; }, setItem: function(){}, removeItem: function(){}, clear: function(){} };
        var sessionStorage = localStorage;

        function Blob() {}
        var URL = { createObjectURL: function(){ return ''; }, revokeObjectURL: function(){} };

        var _rafId = 0;
        function requestAnimationFrame(cb) {
            setTimeout(function() {
                cb(Date.now());
                __draw('FLIP');
            }, 16);
            return ++_rafId;
        }
        function cancelAnimationFrame(id) { clearTimeout(id); }

        // DOM Classes
        function HTMLElement() {}
        function Element() {}
        function Node() {}
        function EventTarget() {}
        function Event() {}
        function CustomEvent() {}
        function HTMLCanvasElement() {}
        function HTMLImageElement() {}
        function HTMLVideoElement() {}
        function CanvasRenderingContext2D() {}
        function WebGLRenderingContext() {}

        class XMLHttpRequest {
            constructor() { this.responseType = ''; this.status = 200; this.response = null; this.responseText = '{}'; }
            open(method, url) { this.url = url; }
            setRequestHeader() {}
            overrideMimeType() {}
            send() {
                var self = this;
                setTimeout(function() {
                    if (self.responseType === 'arraybuffer') {
                        self.response = new ArrayBuffer(0);
                    } else if (self.responseType === 'json') {
                        self.response = {};
                    }
                    if (self.onload) self.onload();
                }, 10);
            }
        }

        // Mock Image
        function Image() {
            var self = this;
            setTimeout(function() {
                if (self.onload) self.onload();
            }, 50);
        }

        // Mock Canvas
        var _canvasEl = {
            width: 960, height: 540,
            style: {}, dataset: {}, className: '',
            appendChild: function(c){ return c; },
            removeChild: function(){},
            insertBefore: function(c){ return c; },
            addEventListener: function(){},
            removeEventListener: function(){},
            getBoundingClientRect: function() { return { left:0, top:0, width:960, height:540, right:960, bottom:540 }; },
            getContext: function(type) {
                console.log('[HAL] Requested Context:', type);
                if (type === 'webgl' || type === 'webgl2' || type === 'experimental-webgl') return null; // Force Canvas2D fallback
                
                return {
                    canvas: _canvasEl,
                    clearRect: function(x,y,w,h) { __draw('CLEAR'); },
                    fillRect: function(x,y,w,h) { __draw('FILL ' + x + ' ' + y + ' ' + w + ' ' + h + ' ' + (this.fillStyle||'#000')); },
                    drawImage: function(){},
                    save: function(){}, restore: function(){}, beginPath: function(){},
                    moveTo: function(){}, lineTo: function(){}, stroke: function(){}, fill: function(){},
                    setTransform: function(){}, scale: function(){}, translate: function(){},
                    measureText: function() { return { width: 10 }; },
                    fillText: function(){},
                    getImageData: function() { return { data: new Uint8ClampedArray(4) }; },
                    putImageData: function(){},
                    createImageData: function() { return { data: new Uint8ClampedArray(4) }; }
                };
            }
        };

        // Minimal Document
        var document = {
            readyState: 'complete',
            documentElement: { style: {}, getBoundingClientRect: function() { return _canvasEl.getBoundingClientRect(); } },
            head: { appendChild: function(c){ return c; } },
            body: { 
                style: {}, 
                appendChild: function(c){ return c; }, 
                getBoundingClientRect: function() { return _canvasEl.getBoundingClientRect(); },
                addEventListener: function(){} 
            },
            createElement: function(tag) {
                if (tag === 'canvas') return _canvasEl;
                if (tag === 'img') return new Image();
                if (tag === 'audio') return new window.Audio();
                return { 
                    style: {}, 
                    setAttribute: function(){}, 
                    appendChild: function(){},
                    getBoundingClientRect: function() { return _canvasEl.getBoundingClientRect(); } 
                };
            },
            getElementById: function(id) {
                if (id === 'phaser-game' || id === 'canvas') return _canvasEl;
                if (id === 'body') return document.body;
                return { style: {}, getBoundingClientRect: function() { return _canvasEl.getBoundingClientRect(); } };
            },
            getElementsByTagName: function(tag) {
                if (tag === 'head') return [document.head];
                if (tag === 'body') return [document.body];
                return [];
            },
            querySelector: function(sel) {
                if (sel === '#phaser-game' || sel === 'canvas') return _canvasEl;
                return { style: {}, getBoundingClientRect: function() { return _canvasEl.getBoundingClientRect(); } };
            },
            addEventListener: function(evt, cb) { if(evt==='DOMContentLoaded') setTimeout(cb, 0); }
        };

        // Global Events
        var _listeners = {};
        window.addEventListener = function(evt, cb) {
            if (!_listeners[evt]) _listeners[evt] = [];
            _listeners[evt].push(cb);
            if (evt === 'load' || evt === 'DOMContentLoaded') setTimeout(cb, 0);
        };
        window.removeEventListener = function(){};

        // --- STRIPPER SHIMS ---
        
        // 1. Phaser WebGL Pipeline prototype shims (required even if Canvas)
        Object.defineProperty(Object.prototype, 'pipelines', {
            get: function() {
                if (!this._mockPipelines) {
                    this._mockPipelines = { 
                        addPostPipeline: function(){},
                        get: function(){ return null; },
                        getPostPipeline: function(){ return { resetFromJSON: function(){ return this; }, name: '' }; }
                    };
                }
                return this._mockPipelines;
            },
            set: function(v) { Object.defineProperty(this, 'pipelines', { value: v, writable: true, configurable: true, enumerable: true }); },
            configurable: true
        });

        // 2. WebGL Extensions mock
        Object.defineProperty(Object.prototype, 'getExtension', { value: function(){ return null; }, writable: true, configurable: true });

        // 3. Audio Mocks
        class MockAudioParam {
            constructor(val) { this.value = val; }
            setValueAtTime() {} linearRampToValueAtTime() {} exponentialRampToValueAtTime() {} setTargetAtTime() {}
        }

        class MockAudioContext {
            constructor() {
                this.state = 'running';
                this.currentTime = 0;
                this.destination = { connect: function(){} };
            }
            createBufferSource() { 
                return { 
                    connect: function(){}, disconnect: function(){}, start: function(){}, stop: function(){},
                    playbackRate: new MockAudioParam(1), detune: new MockAudioParam(0), buffer: null, loop: false
                }; 
            }
            createGain() { return { connect: function(){}, disconnect: function(){}, gain: new MockAudioParam(1) }; }
            createDynamicsCompressor() { return { threshold: {value:0}, knee: {value:0}, ratio: {value:1}, attack: {value:0}, release: {value:0}, connect: function(){} }; }
            createBiquadFilter() { return { type: 'lowpass', frequency: {value:0}, Q: {value:0}, gain: {value:0}, connect: function(){} }; }
            decodeAudioData(data, cb) {
                const buf = { duration: 1, length: 44100, sampleRate: 44100, numberOfChannels: 2, getChannelData: function(){ return new Float32Array(44100); } };
                if (cb) setTimeout(function(){ cb(buf); }, 0);
                return Promise.resolve(buf);
            }
            resume() { return Promise.resolve(); }
        }

        window.AudioContext = MockAudioContext;
        window.webkitAudioContext = MockAudioContext;
        window.Audio = function() {
            return { play: function(){ return Promise.resolve(); }, pause: function(){}, canPlayType: function(){ return 'probably'; }, load: function(){}, style: {} };
        };
        window.HTMLAudioElement = window.Audio;

    `;

    console.log('[HOST] Injecting globals...');
    const shimRes = vm.evalCode(browserGlobalsCode, 'shim.js');
    if (shimRes.error) {
        console.error('[HOST] Globals injection failed:', vm.dump(shimRes.error));
        process.exit(1);
    }
    shimRes.value.dispose();

    // --- 5. BUNDLE LOADING ---
    console.log('[HOST] Loading vendors bundle...');
    const vendors = fs.readFileSync(path.join(BUNDLE_DIR, 'vendors.bundle.beautified.js'), 'utf8');
    const vendorsRes = vm.evalCode(vendors, 'vendors.js');
    if (vendorsRes.error) {
        console.error('[HOST] Vendors Error:', vm.dump(vendorsRes.error));
        process.exit(1);
    }
    vendorsRes.value.dispose();

    console.log('[HOST] Loading main bundle...');
    const mainSrc = fs.readFileSync(path.join(BUNDLE_DIR, 'main.bundle.beautified.js'), 'utf8');
    const mainRes = vm.evalCode(mainSrc, 'main.js');
    if (mainRes.error) {
        console.error('[HOST] Main Error:', vm.dump(mainRes.error));
        process.exit(1);
    }
    mainRes.value.dispose();

    console.log('[HOST] Game booted! Entering main loop...');

    // --- 6. EVENT LOOP ---
    setInterval(() => {
        try {
            if (vm.runtime.hasPendingJob()) {
                const jobRes = vm.runtime.executePendingJobs();
                if (jobRes && jobRes.error) {
                    console.error('[HOST] Unhandled Promise Rejection:', vm.dump(jobRes.error));
                    jobRes.error.dispose();
                }
            }
        } catch (e) {
            console.error('[HOST] Event Loop Error:', e);
        }
    }, 16);

    process.on('SIGINT', () => {
        console.log('[HOST] Shutting down...');
        vm.dispose();
        nativeWindow.kill();
        process.exit(0);
    });
}

main().catch(console.error);
