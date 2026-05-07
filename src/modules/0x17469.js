// Module 0x17469
// Args: _0x44b7bb, _0x304a93, _0x4badc5

export default (_0x44b7bb, _0x304a93, _0x4badc5) => {
                'use strict';
                const _0x4285c6 = a0_0x6932;
                var _0x408cff = this && this['__importDefault'] || function(_0x2d5e8a) {
                    return _0x2d5e8a && _0x2d5e8a['__esModule'] ? _0x2d5e8a : {
                        'default': _0x2d5e8a
                    };
                };
                Object['defineProperty'](_0x304a93, '__esModule', {
                    'value': !0x0
                }), _0x304a93['B_Misspell_True'] = void 0x0;
                const _0x5b3028 = _0x408cff(_0x4badc5(0xa14d)),
                    _0x38e0eb = _0x408cff(_0x4badc5(0x5f07)),
                    _0x4cc0b9 = _0x408cff(_0x4badc5(0x1fd7)),
                    _0x868e13 = _0x408cff(_0x4badc5(0x5103)),
                    _0x157f1b = _0x4badc5(0x18304);
                class _0x1c45b8 extends _0x5b3028['default'] {
                    constructor(_0x290aff, _0xfe1bfe, _0x6093dd, _0x470091, _0x1a41f7) {
                        const _0x1b81e6 = _0x4285c6;
                        super(_0x290aff, _0xfe1bfe, _0x6093dd, 'vfx', 'WhiteDot.png', _0x470091, _0x1a41f7), this['radius'] = 0x10, this['isPlayerFacing'] = !0x0, this['GroundFx'] = this[_0x1b81e6(0x6d2)][_0x1b81e6(0x18bd)][_0x1b81e6(0x4f6)](0x0, 0x0, 0x1, Phaser[_0x1b81e6(0x24f)][_0x1b81e6(0x82a)][_0x1b81e6(0x198c)]([0xff0000, 0xff6600, 0xff4400]))['setOrigin'](0.5)['setAlpha'](0.2)[_0x1b81e6(0x183f)](!0x0)[_0x1b81e6(0x11c7)](_0x157f1b['BlendModes'][_0x1b81e6(0x1811)]), this[_0x1b81e6(0x183f)](!0x1), this['PfxEmitter'] = this[_0x1b81e6(0x6d2)][_0x1b81e6(0x18bd)][_0x1b81e6(0x1791)]('vfx'), this[_0x1b81e6(0x125b)][_0x1b81e6(0x14c0)]({
                            'frame': ['PfxRed.png', 'PfxYellow.png'],
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
                        }), this['PfxEmitter']['createEmitter']({
                            'frame': ['Flame2.png', 'PfxYellow.png'],
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
                        }), this[_0x1b81e6(0xa7c)] = !0x0;
                    } ['OnRecycle']() {
                        const _0x51cf3d = _0x4285c6;
                        var _0x3cb881;
                        super[_0x51cf3d(0x5ce)](), this[_0x51cf3d(0xcf9)]['setCircle'](0x1), this[_0x51cf3d(0x8a2)](_0x868e13[_0x51cf3d(0xd2c)][_0x51cf3d(0x15db)] * this['weapon']['PArea']), this['setTintFill'](0xff0000), this['y'] -= 0x18, this['isPlayerFacing'] ? this[_0x51cf3d(0x429)]() : this[_0x51cf3d(0x1794)](), this['body']['velocity']['x'] += 0x64 * Math[_0x51cf3d(0xc80)](this[_0x51cf3d(0x19c4)]), this[_0x51cf3d(0xcf9)][_0x51cf3d(0xf4e)]['y'] += 0x64 * Math[_0x51cf3d(0xd7e)](this[_0x51cf3d(0x19c4)]), _0x38e0eb[_0x51cf3d(0xd2c)][_0x51cf3d(0x1267)]['PlaySound'](_0x4cc0b9[_0x51cf3d(0xd2c)][_0x51cf3d(0x9f3)], {
                            'detune': -0x64 * this[_0x51cf3d(0x19c4)],
                            'volume': 0x1,
                            'rate': 0x2
                        }, 0xc8, 0x1), this[_0x51cf3d(0x919)][_0x51cf3d(0xdab)](0x1)[_0x51cf3d(0x8a2)](0x0), this[_0x51cf3d(0xdab)](0x1)['setScale'](0x0), null === (_0x3cb881 = this[_0x51cf3d(0xd35)]) || void 0x0 === _0x3cb881 || _0x3cb881[_0x51cf3d(0x1a34)](), this['ScaleTween'] = this[_0x51cf3d(0x6d2)][_0x51cf3d(0x12a1)]['add']({
                            'targets': [this[_0x51cf3d(0x919)], this],
                            'alpha': 0x0,
                            'scale': this[_0x51cf3d(0x161a)] * this[_0x51cf3d(0x4a1)]['PArea'],
                            'duration': this[_0x51cf3d(0x4a1)][_0x51cf3d(0x16c3)],
                            'ease': 'Linear',
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['Update']() {
                        const _0x55e919 = _0x4285c6;
                        this[_0x55e919(0x919)][_0x55e919(0xf01)](this), this['PfxEmitter'][_0x55e919(0x108b)](this['x'], this['y']);
                    }
                }
                _0x304a93['B_Misspell_True'] = _0x1c45b8, _0x304a93['default'] = _0x1c45b8;
            };
