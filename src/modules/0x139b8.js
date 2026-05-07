// Module 0x139b8
// Args: _0x6a4f21, _0x4e31df, _0x2675ed

export default (_0x6a4f21, _0x4e31df, _0x2675ed) => {
                'use strict';
                const _0x283609 = a0_0x6932;
                var _0x3cd189 = this && this['__importDefault'] || function(_0x266654) {
                    const _0x4fe5a2 = _0x283609;
                    return _0x266654 && _0x266654[_0x4fe5a2(0x16f1)] ? _0x266654 : {
                        'default': _0x266654
                    };
                };
                Object['defineProperty'](_0x4e31df, '__esModule', {
                    'value': !0x0
                }), _0x4e31df['B_CherryStarExplosion'] = void 0x0;
                const _0x59de9a = _0x3cd189(_0x2675ed(0xa14d)),
                    _0xccfe3d = _0x3cd189(_0x2675ed(0x5f07)),
                    _0x538f36 = _0x3cd189(_0x2675ed(0x1fd7)),
                    _0x3d8009 = _0x2675ed(0x18304);
                class _0x5966ca extends _0x59de9a['default'] {
                    constructor(_0x472fd9, _0x42b93a, _0x50efcf, _0x1087ba, _0x1ac539) {
                        const _0x39c36f = _0x283609;
                        super(_0x472fd9, _0x42b93a, _0x50efcf, 'items', 'Cherry.png', _0x1087ba, _0x1ac539), this[_0x39c36f(0x998)] = 0x1, this['alreadyRecycled'] = !0x1, this[_0x39c36f(0x10a0)] = this[_0x39c36f(0x6d2)][_0x39c36f(0x18bd)][_0x39c36f(0x105b)](0x0, 0x0, 'vfx', 'sPFX_ring_64.png')[_0x39c36f(0x183f)](!0x1), this[_0x39c36f(0xeb4)] = this[_0x39c36f(0x6d2)][_0x39c36f(0x18bd)][_0x39c36f(0x105b)](0x0, 0x0, 'vfx', 's_pfx_rainbow_64.png')['setVisible'](!0x1), this[_0x39c36f(0xa0a)] = this[_0x39c36f(0x6d2)][_0x39c36f(0x18bd)]['sprite'](0x0, 0x0, 'vfx', 'fuzzA.png')['setVisible'](!0x1), this[_0x39c36f(0x1791)] = this['scene']['add']['particles']('vfx'), this['fwEmitter'] = this[_0x39c36f(0x1791)][_0x39c36f(0x14c0)]({
                            'frame': ['_blur.png', '_blur2.png', '_blur3.png'][_0x1ac539 % 0x3],
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0x320,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'alpha': {
                                'start': 0x0,
                                'end': 0x1,
                                'ease': 'Expo.easeOut'
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x32,
                                'max': 0x64
                            },
                            'quantity': 0x40,
                            'scale': {
                                'start': 0x3,
                                'end': 0x0
                            },
                            'frequency': 0x40,
                            'blendMode': 'ADD',
                            'on': !0x1
                        });
                    } ['onEmitcustomTint2'](_0x293495, _0x126457, _0x5f134a) {
                        const _0x4b26e4 = _0x283609;
                        return Phaser[_0x4b26e4(0x24f)][_0x4b26e4(0x82a)][_0x4b26e4(0x198c)]([0x4444ff, 0xff44ff, 0xff44ff, 0xff4444]);
                    } ['OnRecycle']() {
                        const _0x1a9398 = _0x283609;
                        this[_0x1a9398(0x771)] || (this['alreadyRecycled'] = !0x0, super['OnRecycle'](), this[_0x1a9398(0xcf9)][_0x1a9398(0xdf6)](0x8), this['body'][_0x1a9398(0x543)] = !0x0, this[_0x1a9398(0x183f)](!0x1), this[_0x1a9398(0x68f)]['setFrame']([
                            ['2Spell3Blue.png', '2Spell4Blue.png'],
                            ['2Spell3Purple.png', '2Spell4Purple.png'],
                            ['2Spell3Red.png', '2Spell4Red.png']
                        ][this[_0x1a9398(0x19c4)] % 0x3]), this[_0x1a9398(0xdab)](0x1), this[_0x1a9398(0x8a2)](this['weapon']['PArea']), this[_0x1a9398(0x68f)][_0x1a9398(0xb43)]({
                            'min': 0x32 * this[_0x1a9398(0x4a1)][_0x1a9398(0x5f5)],
                            'max': 0x64 * this[_0x1a9398(0x4a1)][_0x1a9398(0x5f5)]
                        }), this['isCullable'] = !0x1, this[_0x1a9398(0x508)]());
                    } ['Detonate']() {
                        const _0x18dc99 = _0x283609;
                        this[_0x18dc99(0x10a0)][_0x18dc99(0x183f)](!0x0)['setScale'](0x0)[_0x18dc99(0xdab)](0x1)[_0x18dc99(0x9b5)](0x0)[_0x18dc99(0x726)](this['x'], this['y']), _0xccfe3d['default'][_0x18dc99(0x1043)]['PlayerOptions'][_0x18dc99(0x49c)] ? (this[_0x18dc99(0xeb4)][_0x18dc99(0x183f)](!0x0)[_0x18dc99(0x8a2)](0x0)['setAlpha'](0.75)['setAngle'](0x0)['setPosition'](this['x'], this['y'])['setBlendMode'](_0x3d8009['BlendModes'][_0x18dc99(0x1811)]), this['rays'][_0x18dc99(0x183f)](!0x0)['setScale'](0x0)['setAlpha'](0x1)['setAngle'](0x0)[_0x18dc99(0x726)](this['x'], this['y'])) : this[_0x18dc99(0x10a0)][_0x18dc99(0xdab)](0.5), this[_0x18dc99(0x1995)] = this['scene'][_0x18dc99(0x12a1)][_0x18dc99(0x18bd)]({
                            'targets': [this[_0x18dc99(0x10a0)]],
                            'scale': 0x4,
                            'angle': 0x168,
                            'duration': 0x64
                        }), this['tween2'] = this[_0x18dc99(0x6d2)]['tweens'][_0x18dc99(0x18bd)]({
                            'targets': [this['ring'], this[_0x18dc99(0xa0a)]],
                            'delay': 0x64,
                            'alpha': 0x0,
                            'duration': 0x64
                        }), this['tween3'] = this[_0x18dc99(0x6d2)]['tweens']['add']({
                            'targets': [this['rays']],
                            'scale': 0x3,
                            'duration': 0x64
                        }), this[_0x18dc99(0xdf9)] = this[_0x18dc99(0x6d2)][_0x18dc99(0x12a1)]['add']({
                            'targets': [this[_0x18dc99(0xeb4)]],
                            'scale': 0x5,
                            'alpha': 0x0,
                            'angle': 0x168,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0x111996 = _0x18dc99;
                                this[_0x111996(0x14fb)]();
                            }
                        }), _0xccfe3d[_0x18dc99(0xd2c)]['Sound']['PlaySound'](_0x538f36[_0x18dc99(0xd2c)]['Explosion2'], {
                            'volume': 0.5,
                            'detune': 0x64 * this['indexInWeapon'] - 0x1f4
                        }, 0x96, 0x3), _0xccfe3d[_0x18dc99(0xd2c)][_0x18dc99(0x1267)][_0x18dc99(0x7f6)](_0x538f36[_0x18dc99(0xd2c)][_0x18dc99(0xe74)], {
                            'volume': 0.1,
                            'detune': 0x64 * this[_0x18dc99(0x19c4)],
                            'rate': 1.5
                        }, 0x96, 0x3), this['tween5'] = _0xccfe3d['default'][_0x18dc99(0x1043)][_0x18dc99(0x6d2)][_0x18dc99(0x12a1)][_0x18dc99(0x18bd)]({
                            'targets': this,
                            'scale': 0x8 * this[_0x18dc99(0x4a1)][_0x18dc99(0x5f5)],
                            'alpha': 0.1,
                            'duration': 0x78,
                            'onComplete': () => {
                                const _0x3dd0da = _0x18dc99;
                                this['fwEmitter'][_0x3dd0da(0x1a34)](), this[_0x3dd0da(0xcf9)][_0x3dd0da(0x543)] = !0x1;
                            }
                        }), this['tween6'] = _0xccfe3d[_0x18dc99(0xd2c)]['Core']['scene'][_0x18dc99(0x12a1)][_0x18dc99(0x18bd)]({
                            'targets': this,
                            'alpha': 0.1,
                            'duration': 0x64,
                            'delay': 0xc8,
                            'onStart': () => {
                                const _0x13c527 = _0x18dc99;
                                _0xccfe3d[_0x13c527(0xd2c)]['Core'][_0x13c527(0x14d8)]['FlashingVFXEnabled'] && (this[_0x13c527(0x68f)][_0x13c527(0x726)](this['x'], this['y']), this['fwEmitter'][_0x13c527(0x1aa2)]());
                            },
                            'onComplete': () => {
                                const _0x396f94 = _0x18dc99;
                                this['fwEmitter'][_0x396f94(0x1a34)]();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x5cde93 = _0x283609;
                        this['alreadyRecycled'] = !0x1, this[_0x5cde93(0x177d)] = !0x0, this['fwEmitter']['stop'](), super[_0x5cde93(0x14fb)]();
                    }
                }
                _0x4e31df['B_CherryStarExplosion'] = _0x5966ca, _0x4e31df['default'] = _0x5966ca;
            };
