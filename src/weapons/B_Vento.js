// Module 0xe4d
// Args: _0x189692, _0x238fc1, _0x3c8c53

export default (_0x189692, _0x238fc1, _0x3c8c53) => {
                'use strict';
                const _0x533f96 = a0_0x6932;
                var _0x5e2d15 = this && this['__importDefault'] || function(_0xaab0d1) {
                    const _0x40435d = a0_0x6932;
                    return _0xaab0d1 && _0xaab0d1['__esModule'] ? _0xaab0d1 : {
                        'default': _0xaab0d1
                    };
                };
                Object['defineProperty'](_0x238fc1, '__esModule', {
                    'value': !0x0
                }), _0x238fc1['B_Vento'] = void 0x0;
                const _0x13a5d5 = _0x5e2d15(_0x3c8c53(0xa14d)),
                    _0x8c0995 = _0x5e2d15(_0x3c8c53(0x5f07)),
                    _0x459ebb = _0x5e2d15(_0x3c8c53(0x1fd7)),
                    _0x5dd0e7 = _0x5e2d15(_0x3c8c53(0x5103));
                class _0x1a1b2a extends _0x13a5d5['default'] {
                    constructor(_0x4bf83f, _0x153056, _0x4146dd, _0x430c7a, _0x30a771) {
                        const _0x3f00b1 = _0x533f96;
                        super(_0x4bf83f, _0x153056, _0x4146dd, 'vfx', 'petal5.png', _0x430c7a, _0x30a771), this['previousArea'] = 0x0, this['color'] = [0xccffff, 0xfffff, 0x44ccff];
                        const _0xd81cd7 = this[_0x3f00b1(0x183e)]['generateFrameNames']('vfx', {
                            'start': 0x1,
                            'end': 0x5,
                            'zeroPad': 0x0,
                            'prefix': 'petal',
                            'suffix': '.png'
                        });
                        this[_0x3f00b1(0x183e)][_0x3f00b1(0x6a8)]({
                            'key': 'strike',
                            'frames': _0xd81cd7,
                            'frameRate': 0x3c
                        }), this['setOrigin'](0x0, 0.5);
                    }
                    get['TrueSpeed']() {
                        const _0x4aaea6 = _0x533f96;
                        let _0x13b848 = this[_0x4aaea6(0x4a1)][_0x4aaea6(0x712)];
                        return _0x13b848 <= 0x1 ? 0x0 : (_0x13b848 -= 0x1, _0x13b848 * _0x5dd0e7[_0x4aaea6(0xd2c)][_0x4aaea6(0x5d1)] * this[_0x4aaea6(0xb1f)]);
                    } ['Init'](_0x5a4a95 = -0x3e8, _0xcb3e96 = -0x3e8) {
                        const _0x3da7f9 = _0x533f96;
                        super['Init'](_0x5a4a95, _0xcb3e96), this[_0x3da7f9(0x8a2)](0x0), this[_0x3da7f9(0x140c)] = this[_0x3da7f9(0x4a1)][_0x3da7f9(0x5f5)], this['tween'] = this[_0x3da7f9(0x6d2)]['tweens'][_0x3da7f9(0x18bd)]({
                            'targets': this,
                            'scale': _0x5dd0e7[_0x3da7f9(0xd2c)][_0x3da7f9(0x15db)] * this[_0x3da7f9(0x4a1)]['PArea'],
                            'duration': 0x64,
                            'ease': 'Linear'
                        });
                    } ['OnRecycle']() {
                        const _0x4dc7a8 = _0x533f96;
                        var _0x5af579, _0x3a95e6;
                        super[_0x4dc7a8(0x5ce)](), this['alpha'] = 0.5, this[_0x4dc7a8(0x183e)][_0x4dc7a8(0x902)]('strike'), this[_0x4dc7a8(0x19b0)] = this[_0x4dc7a8(0x7cd)][this['indexInWeapon'] % 0x3], null === (_0x5af579 = this['tween']) || void 0x0 === _0x5af579 || _0x5af579[_0x4dc7a8(0x1a34)](), this['setScale'](0x0), this[_0x4dc7a8(0x99a)] = this['scene']['tweens']['add']({
                            'targets': this,
                            'scale': this['weapon']['PArea'],
                            'duration': 0xc8,
                            'yoyo': !0x0,
                            'ease': 'Linear'
                        }), null === (_0x3a95e6 = this[_0x4dc7a8(0x15fa)]) || void 0x0 === _0x3a95e6 || _0x3a95e6[_0x4dc7a8(0x1a34)](), this[_0x4dc7a8(0x15fa)] = this['scene'][_0x4dc7a8(0x12a1)][_0x4dc7a8(0x18bd)]({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': this['weapon'][_0x4dc7a8(0x16c3)],
                            'ease': 'Linear',
                            'delay': 0x64,
                            'onComplete': () => {
                                const _0x2fefd7 = _0x4dc7a8;
                                this[_0x2fefd7(0x14fb)]();
                            }
                        }), this[_0x4dc7a8(0x4d4)] = _0x8c0995['default'][_0x4dc7a8(0x1043)]['Player'][_0x4dc7a8(0x4d4)], _0x8c0995[_0x4dc7a8(0xd2c)][_0x4dc7a8(0x1043)][_0x4dc7a8(0x69e)][_0x4dc7a8(0x13be)]['_lastNonZeroVelocity']['x'], this[_0x4dc7a8(0x16d4)] = -0x8 * (_0x8c0995['default'][_0x4dc7a8(0x1043)][_0x4dc7a8(0x10f6)]['flipX'] ? 0x1 : -0x1), this[_0x4dc7a8(0x154a)] = -0x10, this[_0x4dc7a8(0x612)] = _0x8c0995[_0x4dc7a8(0xd2c)][_0x4dc7a8(0x1043)][_0x4dc7a8(0x10f6)][_0x4dc7a8(0x4d4)] ? 0x1 : 0x0, this['flipY'] = this[_0x4dc7a8(0x19c4)] % 0x2 == (this[_0x4dc7a8(0x4d4)] ? 0x0 : 0x1), this[_0x4dc7a8(0x154a)] = -0x10 - [0x0, 0x5, -0x5, 1.5, -2.5, 0xa, -0xa, 7.5, -7.5, 0xf, -0xf, 12.5, -12.5][this['indexInWeapon'] % 0xd], this[_0x4dc7a8(0xd96)] = [0x0, 0x5, -0x5, 1.5, -2.5, 0xa, -0xa, 7.5, -7.5, 0xf, -0xf, 12.5, -12.5][this[_0x4dc7a8(0x19c4)] % 0x6], this[_0x4dc7a8(0xb1f)] = 0x1, this[_0x4dc7a8(0xcf9)]['velocity']['x'] = (this['flipX'] ? -0x1 : 0x1) * this[_0x4dc7a8(0xfbb)] + _0x8c0995[_0x4dc7a8(0xd2c)]['Core'][_0x4dc7a8(0x10f6)][_0x4dc7a8(0xcf9)]['velocity']['x'], this['x'] = _0x8c0995['default'][_0x4dc7a8(0x1043)]['Player']['x'] + this[_0x4dc7a8(0x16d4)], this['y'] = _0x8c0995[_0x4dc7a8(0xd2c)][_0x4dc7a8(0x1043)]['Player']['y'] + this[_0x4dc7a8(0x154a)], _0x8c0995['default']['Sound'][_0x4dc7a8(0x7f6)](_0x459ebb[_0x4dc7a8(0xd2c)][_0x4dc7a8(0x1a2c)], {
                            'detune': 0x64 * this['indexInWeapon'],
                            'volume': 1.7,
                            'rate': 0x2
                        });
                    } ['Update'](_0x53b529) {}
                }
                _0x238fc1['B_Vento'] = _0x1a1b2a, _0x238fc1['default'] = _0x1a1b2a;
            };
