// Module 0x18590
// Args: _0xb73f5c, _0x3607f8, _0x398747

export default (_0xb73f5c, _0x3607f8, _0x398747) => {
                'use strict';
                const _0x5e2e44 = a0_0x6932;
                var _0x17a0ca = this && this['__importDefault'] || function(_0x2c4bcc) {
                    const _0x2f0d10 = _0x5e2e44;
                    return _0x2c4bcc && _0x2c4bcc[_0x2f0d10(0x16f1)] ? _0x2c4bcc : {
                        'default': _0x2c4bcc
                    };
                };
                Object['defineProperty'](_0x3607f8, '__esModule', {
                    'value': !0x0
                });
                const _0x2113c8 = _0x17a0ca(_0x398747(0x5f07)),
                    _0x3e7577 = _0x17a0ca(_0x398747(0x166d5)),
                    _0x4f06a7 = _0x17a0ca(_0x398747(0xc42e));
                class _0x21f418 extends _0x3e7577['default'] {
                    constructor(_0x309fff, _0x237a2e, _0x10be45) {
                        const _0x349cae = _0x5e2e44;
                        super(_0x309fff, _0x237a2e, _0x10be45, _0x4f06a7['default'][_0x349cae(0x1240)]), _0x2113c8['default']['Core']['scene']['add']['existing'](this);
                        const _0x21259c = this['anims'][_0x349cae(0x1756)]('items', {
                            'start': 0x0,
                            'end': 0x3,
                            'zeroPad': 0x0,
                            'prefix': 'goldenFinger',
                            'suffix': '.png'
                        });
                        this[_0x349cae(0x183e)][_0x349cae(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x21259c,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        });
                    } ['OnRecycle']() {
                        const _0x3d4a19 = _0x5e2e44;
                        super[_0x3d4a19(0x5ce)](), this['anims']['play']('idle');
                    } ['Update']() {
                        const _0x278d1d = _0x5e2e44;
                        super['Update'](), this[_0x278d1d(0xb4a)](0x9 + this['y'] - _0x2113c8[_0x278d1d(0xd2c)][_0x278d1d(0x1043)][_0x278d1d(0x10f6)]['y']);
                    } ['GetTaken']() {
                        const _0x3125d8 = _0x5e2e44;
                        this[_0x3125d8(0x210)] || (_0x2113c8[_0x3125d8(0xd2c)][_0x3125d8(0x1043)][_0x3125d8(0x14d8)][_0x3125d8(0x9f7)][_0x3125d8(0x1564)](this['itemType']), this['SetSeenItem'](this[_0x3125d8(0xeb5)]), super[_0x3125d8(0x437)](), _0x2113c8[_0x3125d8(0xd2c)][_0x3125d8(0x1043)]['Player'][_0x3125d8(0x192d)]['ActivateGoldFinger']());
                    }
                }
                _0x3607f8['default'] = _0x21f418;
            };
