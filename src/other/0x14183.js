// Module 0x14183
// Args: _0x2e1013, _0x1a2e8b

export default (_0x2e1013, _0x1a2e8b) => {
                'use strict';
                const _0x45eda4 = a0_0x6932;
                Object['defineProperty'](_0x1a2e8b, '__esModule', {
                    'value': !0x0
                }), _0x1a2e8b['default'] = class {
                    constructor(_0x388f93) {
                        const _0x34633e = _0x45eda4;
                        this[_0x34633e(0x6d2)] = _0x388f93, this['value'] = 0x0;
                    } ['onEnable'](_0x3733af) {
                        const _0x282a12 = _0x45eda4;
                        this['callback'] = _0x3733af, this[_0x282a12(0xa05)]['removeAllListeners'](), this[_0x282a12(0xa05)][_0x282a12(0x76d)](), this[_0x282a12(0x6d2)]['input']['setDraggable'](this['box'], !0x0), this[_0x282a12(0x6d2)]['input']['on']('drag', this[_0x282a12(0x2a2)]['bind'](this)), this[_0x282a12(0x6d2)][_0x282a12(0x1331)]['on']('dragend', this[_0x282a12(0x1842)][_0x282a12(0xf7e)](this));
                    } ['onDisable']() {
                        const _0x16a2f5 = _0x45eda4;
                        this['box'][_0x16a2f5(0x1331)] && (this['scene']['input'][_0x16a2f5(0x1172)](this['box'], !0x1), this['scene']['input'][_0x16a2f5(0x16cf)]('drag', this[_0x16a2f5(0x2a2)]['bind'](this)), this[_0x16a2f5(0x6d2)]['input'][_0x16a2f5(0x16cf)]('dragend', this[_0x16a2f5(0x1842)][_0x16a2f5(0xf7e)](this))), this['box'][_0x16a2f5(0xb7c)]();
                    } ['manualLeft']() {
                        const _0x3482e1 = _0x45eda4;
                        this[_0x3482e1(0xb81)] = Math[_0x3482e1(0x1981)](this['value'] - 0.1, 0x0), this['box']['x'] = this['bounds'][_0x3482e1(0xf42)] + this[_0x3482e1(0x42e)][_0x3482e1(0x173c)] * this[_0x3482e1(0xb81)], this['callback'] && this['callback'](this['value']);
                    } ['manualRight']() {
                        const _0x1a0530 = _0x45eda4;
                        this[_0x1a0530(0xb81)] = Math[_0x1a0530(0x1084)](this['value'] + 0.1, 0x1), this['box']['x'] = this[_0x1a0530(0x42e)][_0x1a0530(0xf42)] + this[_0x1a0530(0x42e)][_0x1a0530(0x173c)] * this[_0x1a0530(0xb81)], this['callback'] && this['callback'](this['value']);
                    } ['onDrag'](_0x50922e, _0x36fcd8, _0x49613f, _0xb6d80a) {
                        const _0x1fcb6d = _0x45eda4;
                        if (_0x36fcd8 != this[_0x1fcb6d(0xa05)]) return;
                        _0x49613f <= this[_0x1fcb6d(0x42e)][_0x1fcb6d(0xf42)] ? _0x49613f = this['bounds']['left'] : _0x49613f >= this[_0x1fcb6d(0x42e)][_0x1fcb6d(0x15d9)] && (_0x49613f = this[_0x1fcb6d(0x42e)][_0x1fcb6d(0x15d9)]), _0x36fcd8['x'] = _0x49613f;
                        let _0x36ef06 = _0x36fcd8['x'] - this[_0x1fcb6d(0x42e)]['left'];
                        this[_0x1fcb6d(0xb81)] = _0x36ef06 / this['bounds'][_0x1fcb6d(0x173c)];
                    } ['onDrop'](_0x1942ec, _0x59ba45, _0x2bf68f, _0x9ca864) {
                        const _0x3f52d1 = _0x45eda4;
                        _0x59ba45 == this['box'] && this['callback'] && this[_0x3f52d1(0x1717)](this[_0x3f52d1(0xb81)]);
                    } ['onDestroy']() {
                        const _0x5892e4 = _0x45eda4;
                        this['onDisable'](), this[_0x5892e4(0x1717)] = null;
                    }
                };
            };
