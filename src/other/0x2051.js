// Module 0x2051
// Args: _0x3e9a4b, _0x36f2b1, _0x1512be

export default (_0x3e9a4b, _0x36f2b1, _0x1512be) => {
                'use strict';
                const _0x59acbe = a0_0x6932;
                var _0x5c2b35 = this && this['__importDefault'] || function(_0x509194) {
                    return _0x509194 && _0x509194['__esModule'] ? _0x509194 : {
                        'default': _0x509194
                    };
                };
                Object['defineProperty'](_0x36f2b1, '__esModule', {
                    'value': !0x0
                });
                const _0x22cc51 = _0x5c2b35(_0x1512be(0x169b4)),
                    _0x481314 = _0x1512be(0x12a38);
                class _0x5ee338 extends Phaser['Scene'] {
                    constructor() {
                        const _0x5259e0 = _0x59acbe;
                        super({
                            'key': _0x22cc51['default'][_0x5259e0(0xdee)]
                        }), this[_0x5259e0(0x122a)] = !0x1, this[_0x5259e0(0xc56)] = !0x1, this[_0x5259e0(0x638)] = !0x0;
                    } ['preload']() {} ['create']() {
                        const _0x1de98e = _0x59acbe;
                        _0x481314['Integration']['isDesktop']() && (this[_0x1de98e(0x184)] = this[_0x1de98e(0x1331)]['keyboard'][_0x1de98e(0x1aac)](Phaser['Input'][_0x1de98e(0xa19)][_0x1de98e(0x10f8)][_0x1de98e(0x13f3)]), this[_0x1de98e(0x184)]['on']('down', () => {
                            this['isAltDown'] = !0x0;
                        }), this[_0x1de98e(0x184)]['on']('up', () => {
                            this['isAltDown'] = !0x1;
                        }), this[_0x1de98e(0x18a5)] = this['input']['keyboard']['addKey'](Phaser[_0x1de98e(0xd70)]['Keyboard']['KeyCodes']['ENTER']), this[_0x1de98e(0x18a5)]['on']('down', (_0x2a8565, _0xf6162e) => {
                            const _0x4d824e = _0x1de98e;
                            this[_0x4d824e(0x122a)] && (this['isAltDown'] = !0x1, this['ToggleFullScreen']() && (this[_0x4d824e(0x122a)] = !0x1));
                        }), this['f11key'] = this['input']['keyboard']['addKey'](Phaser[_0x1de98e(0xd70)]['Keyboard'][_0x1de98e(0x10f8)][_0x1de98e(0xd4a)]), this['f11key']['on']('down', () => {
                            const _0x3c047c = _0x1de98e;
                            this[_0x3c047c(0xe1f)]();
                        }));
                    } ['gimmeAbeat'](_0x3f51d3, _0x420f07) {
                        const _0x1e6041 = _0x59acbe;
                        clearInterval(this[_0x1e6041(0xefe)]), this[_0x1e6041(0x16ce)] = _0x420f07, this['beatEvent'] = setInterval(() => {
                            const _0x34766d = _0x1e6041;
                            this[_0x34766d(0x16ce)] && this[_0x34766d(0x16ce)]();
                        }, _0x3f51d3);
                    } ['clearBeat']() {
                        const _0x1c489c = _0x59acbe;
                        clearInterval(this[_0x1c489c(0xefe)]);
                    } ['ToggleFullScreen']() {
                        const _0x4bf5f7 = _0x59acbe;
                        return !!this[_0x4bf5f7(0x638)] && (this['canToggleFullscreen'] = !0x1, this['time']['addEvent']({
                            'delay': 0xc8,
                            'callback': () => {
                                const _0x23ff59 = _0x4bf5f7;
                                this[_0x23ff59(0x638)] = !0x0;
                            }
                        }), this['isFullScreen'] = !this[_0x4bf5f7(0xc56)], _0x481314['Integration'][_0x4bf5f7(0x12bb)](this[_0x4bf5f7(0xc56)]), !0x0);
                    }
                }
                _0x36f2b1['default'] = _0x5ee338;
            };
