/**
 * V-Native HAL (Hardware Abstraction Layer) for Node.js
 * Provides all browser globals the game bundle expects.
 * Replace this file's platform-specific sections per target.
 */


// ─── Window / Document stubs ─────────────────────────────────────────────────
function buildHAL(ctx) {
    // Track which renderer Phaser picks
    let rendererType = 'unknown';

    const canvasEl = {
        width: 960,
        height: 540,
        style: {},
        addEventListener: () => {},
        removeEventListener: () => {},
        getContext(type) {
            rendererType = type;
            console.log(`[HAL] Phaser requested context: "${type}"`);
            if (type === '2d') return build2DContext();
            if (type === 'webgl' || type === 'webgl2') return buildWebGLStub();
            return null;
        },
        getBoundingClientRect: () => ({ left: 0, top: 0, width: 960, height: 540 }),
        parentNode: null,
        parentElement: null,
    };

    const document = {
        createElement(tag) {
            if (tag === 'canvas') return canvasEl;
            return { style: {}, addEventListener: () => {}, appendChild: () => {} };
        },
        getElementById: () => null,
        querySelector: () => null,
        querySelectorAll: () => [],
        addEventListener: () => {},
        removeEventListener: () => {},
        body: { appendChild: () => {}, style: {} },
        head: { appendChild: () => {} },
        documentElement: { style: {}, addEventListener: () => {}, ontouchstart: undefined },
        location: { href: 'file://vsport', search: '' },
        readyState: 'complete',
        hidden: false,
        visibilityState: 'visible',
        dispatchEvent: () => {},
    };
    canvasEl.parentNode = document.body;
    canvasEl.parentElement = document.body;

    const window = {
        document,
        window: null,     // set below
        location: document.location,
        navigator: { userAgent: 'VSportNative/1.0', platform: 'Win32' },
        screen: { width: 960, height: 540 },
        innerWidth: 960,
        innerHeight: 540,
        devicePixelRatio: 1,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => {},
        requestAnimationFrame(cb) {
            // Run at ~60fps using setImmediate for now
            setImmediate(() => cb(Date.now()));
        },
        cancelAnimationFrame: () => {},
        setTimeout,
        clearTimeout,
        setInterval,
        clearInterval,
        performance: { now: () => Date.now() },
        localStorage: buildLocalStorage(),
        sessionStorage: buildLocalStorage(),
        URL: { createObjectURL: () => '', revokeObjectURL: () => {} },
        Blob: class Blob {},
        fetch: buildFetch(),
        XMLHttpRequest: buildXHR(),
        Image: buildImageStub(),
        Audio: buildAudioStub(),
        AudioContext: buildAudioContextStub(),
        WebGLRenderingContext: {},
        console,
        _getRendererType: () => rendererType,
    };
    window.window = window;

    return { window, document };
}

// ─── Canvas 2D stub ──────────────────────────────────────────────────────────
function build2DContext() {
    console.log('[HAL] 2D Canvas context created.');
    // Minimal stub — all ops are no-ops for now
    return {
        fillStyle: '#000', strokeStyle: '#000', globalAlpha: 1,
        font: '10px sans-serif', textAlign: 'left',
        save: () => {}, restore: () => {}, translate: () => {},
        scale: () => {}, rotate: () => {}, transform: () => {},
        fillRect: () => {}, strokeRect: () => {}, clearRect: () => {},
        fillText: () => {}, strokeText: () => {},
        drawImage: () => {}, putImageData: () => {},
        getImageData: (x,y,w,h) => ({ data: new Uint8ClampedArray(w*h*4), width: w, height: h }),
        createImageData: (w,h) => ({ data: new Uint8ClampedArray(w*h*4), width: w, height: h }),
        createLinearGradient: () => ({ addColorStop: () => {} }),
        createRadialGradient: () => ({ addColorStop: () => {} }),
        createPattern: () => ({}),
        beginPath: () => {}, closePath: () => {}, moveTo: () => {}, lineTo: () => {},
        arc: () => {}, rect: () => {}, clip: () => {}, fill: () => {}, stroke: () => {},
        setTransform: () => {}, resetTransform: () => {},
        measureText: (t) => ({ width: t.length * 6 }),
        canvas: { width: 960, height: 540 },
    };
}

// ─── WebGL stub ──────────────────────────────────────────────────────────────
function buildWebGLStub() {
    console.log('[HAL] WebGL context created (stub — will use SDL2 on real targets).');
    const gl = {};
    const handler = { get: (t, p) => typeof t[p] !== 'undefined' ? t[p] : () => null };
    return new Proxy(gl, handler);
}

// ─── LocalStorage ────────────────────────────────────────────────────────────
function buildLocalStorage() {
    const store = {};
    return {
        getItem: (k) => store[k] ?? null,
        setItem: (k, v) => { store[k] = String(v); },
        removeItem: (k) => { delete store[k]; },
        clear: () => { Object.keys(store).forEach(k => delete store[k]); },
        key: (i) => Object.keys(store)[i] ?? null,
        get length() { return Object.keys(store).length; },
    };
}

// ─── Fetch / XHR (file-based) ────────────────────────────────────────────────
function buildFetch() {
    const fs = require('fs');
    const path = require('path');
    const ROOT = path.join(__dirname, '.webpack/renderer');
    return (url) => {
        const filePath = path.join(ROOT, url.replace(/^\.?\//, ''));
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, (err, data) => {
                if (err) return reject(err);
                resolve({
                    ok: true, status: 200,
                    arrayBuffer: () => Promise.resolve(data.buffer),
                    json: () => Promise.resolve(JSON.parse(data.toString())),
                    text: () => Promise.resolve(data.toString()),
                });
            });
        });
    };
}

function buildXHR() {
    const fs = require('fs');
    const path = require('path');
    const ROOT = path.join(__dirname, '.webpack/renderer');
    return class XMLHttpRequest {
        constructor() { this.readyState = 0; this.status = 0; this.response = null; }
        open(method, url) { this._url = url; this.readyState = 1; }
        send() {
            const filePath = path.join(ROOT, this._url.replace(/^\.?\//, ''));
            try {
                this.response = fs.readFileSync(filePath);
                this.status = 200; this.readyState = 4;
                if (this.onload) this.onload();
            } catch(e) {
                this.status = 404; this.readyState = 4;
                if (this.onerror) this.onerror(e);
            }
        }
        setRequestHeader() {}
        addEventListener(evt, cb) { this['on'+evt] = cb; }
    };
}

// ─── Image / Audio stubs ─────────────────────────────────────────────────────
function buildImageStub() {
    return class Image {
        constructor() { this.width = 0; this.height = 0; }
        set src(v) {
            // On real targets: load from disc via HAL
            setTimeout(() => { if (this.onload) this.onload(); }, 0);
        }
    };
}

function buildAudioStub() {
    return class Audio {
        constructor() {}
        play() { return Promise.resolve(); }
        pause() {}
    };
}

function buildAudioContextStub() {
    return class AudioContext {
        constructor() { this.currentTime = 0; this.destination = {}; }
        createBufferSource() { return { connect: ()=>{}, start: ()=>{}, stop: ()=>{} }; }
        createGain() { return { connect: ()=>{}, gain: { value: 1 } }; }
        decodeAudioData(buf, cb) { if (cb) cb({}); return Promise.resolve({}); }
        resume() { return Promise.resolve(); }
    };
}

module.exports = { buildHAL };
