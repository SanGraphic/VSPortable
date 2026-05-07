var window = globalThis;
var self = globalThis;

// Base APIs
var performance = { now: function() { return Date.now(); } };
var navigator = { userAgent: 'VSportPS2/1.0', platform: 'PS2', languages: ['en'], onLine: true };
var location = { href: 'cdrom0:\\', search: '', hash: '', pathname: '/', protocol: 'file:' };
var innerWidth = 640, innerHeight = 448, devicePixelRatio = 1;
var screen = { width: 640, height: 448, availWidth: 640, availHeight: 448 };

var localStorage = { getItem: function(){ return null; }, setItem: function(){}, removeItem: function(){}, clear: function(){} };
var sessionStorage = localStorage;

function setTimeout(cb, ms) { cb(); return 0; }
function setInterval(cb, ms) { return 0; }
function clearTimeout() {}
function clearInterval() {}

function requestAnimationFrame(cb) {
    // Basic Input Polling Loop inside RAF
    pollPad();
    cb(Date.now());
    __draw('FLIP');
    return 0;
}

// Input Mapping
var _padState = 0;
var _keyMap = {
    0x10: 'ArrowUp',
    0x40: 'ArrowDown',
    0x80: 'ArrowLeft',
    0x20: 'ArrowRight',
    0x4000: 'Enter', // Cross
    0x2000: 'Escape' // Circle
};

function pollPad() {
    var newState = __get_pad_state();
    var changed = newState ^ _padState;
    if (changed) {
        for (var bit in _keyMap) {
            if (changed & bit) {
                var type = (newState & bit) ? 'keydown' : 'keyup';
                dispatchEvent(new CustomEvent(type, { key: _keyMap[bit] }));
            }
        }
    }
    _padState = newState;
}

function dispatchEvent(evt) {
    if (window._listeners && window._listeners[evt.type]) {
        window._listeners[evt.type].forEach(function(cb) { cb(evt); });
    }
}

window._listeners = {};
window.addEventListener = function(evt, cb) {
    if (!this._listeners[evt]) this._listeners[evt] = [];
    this._listeners[evt].push(cb);
};

// DOM Mocks
function Image() { 
    var self = this; 
    setTimeout(function(){ if(self.onload) self.onload(); }, 1); 
}
var document = {
    readyState: 'complete',
    documentElement: { style: {} },
    body: { style: {}, appendChild: function(c){return c;}, addEventListener: function(){} },
    createElement: function(tag) {
        if (tag === 'canvas') return { 
            getContext: function() { return { 
                fillRect: function(x,y,w,h) { __draw('FILL ' + x + ' ' + y + ' ' + w + ' ' + h); },
                clearRect: function() { __draw('CLEAR'); },
                drawImage: function(){},
                measureText: function(){ return {width:10}; },
                fillText: function(){}
            }; },
            style: {}, addEventListener: function(){}
        };
        if (tag === 'img') return new Image();
        return { style: {} };
    },
    getElementById: function() { return null; },
    querySelector: function() { return null; },
    addEventListener: function(evt, cb) { if(evt === 'DOMContentLoaded') cb(); }
};

class CustomEvent {
    constructor(type, detail) { this.type = type; this.key = detail.key; }
}
