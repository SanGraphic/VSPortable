// Module 0x4858
// Args: _0x59454f, _0x3abf52, _0x5d6a37

export default (_0x59454f, _0x3abf52, _0x5d6a37) => {
                'use strict';
                const _0x2b8d2c = a0_0x6932;
                var _0x14a6d9 = this && this['__importDefault'] || function(_0x3170c6) {
                    const _0x11eb7b = _0x2b8d2c;
                    return _0x3170c6 && _0x3170c6[_0x11eb7b(0x16f1)] ? _0x3170c6 : {
                        'default': _0x3170c6
                    };
                };
                Object['defineProperty'](_0x3abf52, '__esModule', {
                    'value': !0x0
                }), _0x3abf52['OptionTextToggle'] = void 0x0;
                const _0x364afa = _0x14a6d9(_0x5d6a37(0x5f07));
                _0x3abf52['OptionTextToggle'] = class {
                    constructor(_0x5decf1) {
                        this['scene'] = _0x5decf1;
                    } ['onEnable'](_0x63def0) {
                        const _0x31702d = _0x2b8d2c;
                        this[_0x31702d(0x1717)] = _0x63def0, this['box'][_0x31702d(0x596)](), this['box']['setInteractive'](), this['box']['on']('pointerdown', this['onToggle'][_0x31702d(0xf7e)](this));
                    } ['onDisable']() {
                        const _0x5d3982 = _0x2b8d2c;
                        this[_0x5d3982(0xa05)][_0x5d3982(0xb7c)](), this[_0x5d3982(0xa05)]['off']('pointerdown', this[_0x5d3982(0xec8)]['bind'](this));
                    } ['onDestroy']() {
                        const _0x91d562 = _0x2b8d2c;
                        this[_0x91d562(0x216)](), this['callback'] = null;
                    } ['onToggle']() {
                        const _0x144a01 = _0x2b8d2c;
                        this[_0x144a01(0x1717)] && (this['value'] = !this[_0x144a01(0xb81)], this['toggleTxt'][_0x144a01(0x758)] = this['value'] ? this['text1'] : this[_0x144a01(0x1d6)], _0x364afa[_0x144a01(0xd2c)][_0x144a01(0x1f1)][_0x144a01(0x14a8)](this['toggleTxt'], !0x1, 0x5f), this['box'][_0x144a01(0xe75)] = this[_0x144a01(0x1987)][_0x144a01(0xe75)], this[_0x144a01(0x1717)](this[_0x144a01(0xb81)]));
                    }
                };
            };
