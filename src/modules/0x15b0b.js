// Module 0x15b0b
// Args: _0x3decc6, _0x5478e0, _0x3b05d3

export default (_0x3decc6, _0x5478e0, _0x3b05d3) => {
                'use strict';
                const _0x45a21d = a0_0x6932;
                var _0xb25923 = this && this['__importDefault'] || function(_0x421bb9) {
                    const _0x10037c = _0x45a21d;
                    return _0x421bb9 && _0x421bb9[_0x10037c(0x16f1)] ? _0x421bb9 : {
                        'default': _0x421bb9
                    };
                };
                Object['defineProperty'](_0x5478e0, '__esModule', {
                    'value': !0x0
                }), _0x5478e0['B_Misspell_True2'] = void 0x0;
                const _0x56effc = _0xb25923(_0x3b05d3(0xa14d)),
                    _0x73f5c2 = _0xb25923(_0x3b05d3(0x5f07)),
                    _0xb9c390 = _0xb25923(_0x3b05d3(0x1fd7)),
                    _0x30215f = _0xb25923(_0x3b05d3(0x5103)),
                    _0x5f295b = _0x3b05d3(0x18304);
                class _0x5e7fa2 extends _0x56effc['default'] {
                    constructor(_0x11c51f, _0x7785b7, _0x17f752, _0x3cc786, _0xf96159) {
                        const _0x18f8f0 = _0x45a21d;
                        super(_0x11c51f, _0x7785b7, _0x17f752, 'vfx', 'WhiteDot.png', _0x3cc786, _0xf96159), this[_0x18f8f0(0x161a)] = 0x10, this['isPlayerFacing'] = !0x0, this[_0x18f8f0(0x919)] = this['scene'][_0x18f8f0(0x18bd)]['circle'](0x0, 0x0, 0x1, Phaser[_0x18f8f0(0x24f)]['RND'][_0x18f8f0(0x198c)]([0x0, 0x222222, 0x442222]))[_0x18f8f0(0xf8e)](0.5)['setAlpha'](0.2)[_0x18f8f0(0x183f)](!0x0)['setBlendMode'](_0x5f295b['BlendModes']['NORMAL']), this[_0x18f8f0(0x183f)](!0x1), this[_0x18f8f0(0x125b)] = this['scene'][_0x18f8f0(0x18bd)]['particles']('vfx'), this[_0x18f8f0(0x125b)]['createEmitter']({
                            'frame': ['PfxRed.png', 'PfxGrayInverted.png'],
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'quantity': 0x1,
                            'lifespan': 0x64,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x1
                        }), this[_0x18f8f0(0x125b)][_0x18f8f0(0x14c0)]({
                            'frame': ['Flame3.png', 'PfxGray.png'],
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0xb4,
                                'steps': 0x10
                            },
                            'quantity': 0x1,
                            'lifespan': 0x64,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x0,
                                'end': 0x2
                            },
                            'on': !0x1
                        }), this['isPlayerFacing'] = !0x0;
                    } ['OnRecycle']() {
                        const _0x2895bc = _0x45a21d;
                        var _0x119990;
                        super[_0x2895bc(0x5ce)](), this[_0x2895bc(0xcf9)][_0x2895bc(0xdf6)](0x1), this[_0x2895bc(0x8a2)](_0x30215f['default'][_0x2895bc(0x15db)] * this[_0x2895bc(0x4a1)][_0x2895bc(0x5f5)]), this[_0x2895bc(0x652)](0xff0000), this['y'] -= 0x18, this[_0x2895bc(0xa7c)] ? (this['ApplyPlayerFacingVelocity'](), _0x73f5c2['default']['Sound'][_0x2895bc(0x7f6)](_0xb9c390[_0x2895bc(0xd2c)][_0x2895bc(0x9f3)], {
                            'detune': -0x64 * this['indexInWeapon'],
                            'volume': 0x1,
                            'rate': 0x2
                        }, 0xc8, 0x1)) : this['ApplyInversePlayerFacingVelocity'](), this['body']['velocity']['x'] += 0x64 * Math['sin'](this[_0x2895bc(0x19c4)]), this['body'][_0x2895bc(0xf4e)]['y'] += 0x64 * Math[_0x2895bc(0xd7e)](this['indexInWeapon']), this['GroundFx'][_0x2895bc(0xdab)](0x1)[_0x2895bc(0x8a2)](0x0), this[_0x2895bc(0xdab)](0x1)[_0x2895bc(0x8a2)](0x0), null === (_0x119990 = this['ScaleTween']) || void 0x0 === _0x119990 || _0x119990['stop'](), this[_0x2895bc(0xd35)] = this['scene']['tweens'][_0x2895bc(0x18bd)]({
                            'targets': [this[_0x2895bc(0x919)], this],
                            'alpha': 0x0,
                            'scale': this[_0x2895bc(0x161a)] * this['weapon'][_0x2895bc(0x5f5)],
                            'duration': this[_0x2895bc(0x4a1)][_0x2895bc(0x16c3)],
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x4411a4 = _0x2895bc;
                                this[_0x4411a4(0x14fb)]();
                            }
                        });
                    } ['Update']() {
                        const _0x40ae4e = _0x45a21d;
                        this['GroundFx'][_0x40ae4e(0xf01)](this), this[_0x40ae4e(0x125b)][_0x40ae4e(0x108b)](this['x'], this['y']);
                    }
                }
                _0x5478e0['B_Misspell_True2'] = _0x5e7fa2, _0x5478e0['default'] = _0x5e7fa2;
            };
