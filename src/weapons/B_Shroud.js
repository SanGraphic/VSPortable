// Module 0x16767
// Args: _0x482451, _0x1a17b9, _0x3f1324

export default (_0x482451, _0x1a17b9, _0x3f1324) => {
                'use strict';
                const _0x381482 = a0_0x6932;
                var _0x250ebb = this && this['__importDefault'] || function(_0x46554c) {
                    const _0x572ddb = a0_0x6932;
                    return _0x46554c && _0x46554c['__esModule'] ? _0x46554c : {
                        'default': _0x46554c
                    };
                };
                Object['defineProperty'](_0x1a17b9, '__esModule', {
                    'value': !0x0
                }), _0x1a17b9['B_Shroud'] = void 0x0;
                const _0x4f71bb = _0x250ebb(_0x3f1324(0xa14d)),
                    _0x1c062b = _0x250ebb(_0x3f1324(0x5f07)),
                    _0xa47bc = _0x3f1324(0x18304),
                    _0xc6d4c2 = _0x250ebb(_0x3f1324(0x5103));
                class _0x3ffa98 extends _0x4f71bb['default'] {
                    constructor(_0xba8985, _0x1e2f07, _0xe3bf0f, _0x15c37a, _0x72ccb0) {
                        const _0x3d1337 = _0x381482;
                        super(_0xba8985, _0x1e2f07, _0xe3bf0f, 'vfx', 'Rings4.png', _0x15c37a, _0x72ccb0), this[_0x3d1337(0x161a)] = 0x10, this[_0x3d1337(0xf01)](_0x1c062b[_0x3d1337(0xd2c)][_0x3d1337(0x1043)]['Player']), this[_0x3d1337(0x6c9)] = this['scene']['add'][_0x3d1337(0x105b)](0x0, 0x0, 'vfx', 'bubblevb.png')[_0x3d1337(0xf8e)](0.5, 0.75)[_0x3d1337(0xdab)](0x0), this[_0x3d1337(0x1234)] = this['weapon'], this[_0x3d1337(0xf8e)](0.5, 0.75);
                    } ['OnRecycle']() {
                        const _0x166279 = _0x381482;
                        var _0x27493d;
                        super['OnRecycle'](), this[_0x166279(0x8a2)](0x1), this['body'][_0x166279(0xdf6)](this[_0x166279(0x161a)]), this[_0x166279(0x8a2)](0x0), this[_0x166279(0xdab)](0.5), this[_0x166279(0x183f)](!0x1), this[_0x166279(0x6c9)]['setBlendMode'](_0xa47bc[_0x166279(0x10fc)][_0x166279(0x1811)]), _0x1c062b[_0x166279(0xd2c)][_0x166279(0x1043)]['scene'][_0x166279(0x915)][_0x166279(0x17fb)](this['ExpireTimer']), this[_0x166279(0x6c9)]['setAlpha'](0x1), this['bubble']['setScale'](0x0), null === (_0x27493d = this['scaleTween']) || void 0x0 === _0x27493d || _0x27493d[_0x166279(0x1a34)](), this[_0x166279(0x660)] = _0x1c062b[_0x166279(0xd2c)][_0x166279(0x1043)]['scene']['tweens'][_0x166279(0x18bd)]({
                            'targets': [this, this[_0x166279(0x6c9)]],
                            'scale': 0x2 * _0xc6d4c2['default'][_0x166279(0x15db)] * this['weapon']['PArea'],
                            'alpha': 0x0,
                            'duration': 0x190,
                            'onComplete': () => {
                                const _0x49cc1a = _0x166279;
                                this[_0x49cc1a(0x14fb)]();
                            }
                        });
                        let _0x49aa9f = 0x2 * this[_0x166279(0x161a)] * this[_0x166279(0x4a1)][_0x166279(0x5f5)];
                        this[_0x166279(0x1234)]['InversionVFX'](_0x49aa9f, 0xc8, _0x49aa9f * (0x1 - this[_0x166279(0x564)]));
                    } ['Update']() {
                        const _0x2c0f3d = _0x381482;
                        this[_0x2c0f3d(0xf01)](_0x1c062b['default']['Core'][_0x2c0f3d(0x10f6)]), this[_0x2c0f3d(0x6c9)]['x'] = this['x'], this['bubble']['y'] = this['y'];
                    }
                }
                _0x1a17b9['B_Shroud'] = _0x3ffa98, _0x1a17b9['default'] = _0x3ffa98;
            };
