// Module 0x4990
// Args: _0x312920, _0x11dc5a, _0x23a9d9

export default (_0x312920, _0x11dc5a, _0x23a9d9) => {
                'use strict';
                const _0x49d067 = a0_0x6932;
                var _0x4731e6 = this && this['__importDefault'] || function(_0x180c24) {
                    const _0x141607 = _0x49d067;
                    return _0x180c24 && _0x180c24[_0x141607(0x16f1)] ? _0x180c24 : {
                        'default': _0x180c24
                    };
                };
                Object['defineProperty'](_0x11dc5a, '__esModule', {
                    'value': !0x0
                }), _0x11dc5a['B_Spellstrike'] = void 0x0;
                const _0x177565 = _0x4731e6(_0x23a9d9(0xa14d)),
                    _0x5be75a = _0x4731e6(_0x23a9d9(0x5f07)),
                    _0x4c4eaf = _0x4731e6(_0x23a9d9(0x1fd7));
                class _0x2292da extends _0x177565['default'] {
                    constructor(_0x2c6f60, _0x769fb3, _0xd81301, _0x137720, _0x24a785) {
                        const _0x975e83 = _0x49d067;
                        super(_0x2c6f60, _0x769fb3, _0xd81301, 'vfx', '2Strike1.png', _0x137720, _0x24a785), this[_0x975e83(0x1045)] = new Phaser['Geom'][(_0x975e83(0xf29))](0x0, 0x0, 0x10), this['PfxEmitter'] = this['scene'][_0x975e83(0x18bd)]['particles']('vfx'), this['emitter1'] = this[_0x975e83(0x125b)]['createEmitter']({
                            'frame': ['2Spell1.png', '2Spell2.png'],
                            'speed': {
                                'min': 0x32,
                                'max': 0x96
                            },
                            'quantity': 0x1,
                            'lifespan': {
                                'min': 0x12c,
                                'max': 0x2bc
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'min': 0x1,
                                'max': 0x2
                            },
                            'on': !0x1,
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x975e83(0x1045)]
                            }
                        }), this[_0x975e83(0x81e)] = this[_0x975e83(0x125b)]['createEmitter']({
                            'frame': ['2Spell3.png', '2Spell4.png'],
                            'speed': 0x0,
                            'quantity': 0x1,
                            'lifespan': {
                                'min': 0x96,
                                'max': 0x12c
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x0,
                                'end': 0x2,
                                'ease': 'Quint.easeOut'
                            },
                            'on': !0x1,
                            'emitZone': {
                                'type': 'random',
                                'source': this['emitZone']
                            }
                        });
                    } ['OnRecycle']() {
                        const _0x479863 = _0x49d067;
                        var _0x5b49cf, _0x2d86c5;
                        super[_0x479863(0x5ce)](), this[_0x479863(0xcf9)][_0x479863(0x543)] = !0x1, this[_0x479863(0xb8d)](this['x'] > _0x5be75a['default']['Core']['Player']['x']), null === (_0x5b49cf = this[_0x479863(0x16fc)]) || void 0x0 === _0x5b49cf || _0x5b49cf[_0x479863(0x1a34)](), this[_0x479863(0x16fc)] = this[_0x479863(0x6d2)][_0x479863(0x12a1)]['add']({
                            'targets': this,
                            'scale': 0x2,
                            'duration': 0x50,
                            'ease': 'Bounce.easeOut',
                            'onStart': () => {
                                const _0x35d5e1 = _0x479863;
                                this[_0x35d5e1(0x8a2)](0x0), this[_0x35d5e1(0x183f)](!0x0);
                            },
                            'onComplete': () => {
                                this['setVisible'](!0x1), this['DeSpawn']();
                            }
                        }), null === (_0x2d86c5 = this[_0x479863(0x2c7)]) || void 0x0 === _0x2d86c5 || _0x2d86c5[_0x479863(0x1a34)](), this['emitterTween'] = this[_0x479863(0x6d2)]['tweens'][_0x479863(0x18bd)]({
                            'targets': this['emitZone'],
                            'radius': 0x40,
                            'duration': 0x50,
                            'onStart': () => {
                                this['emitZone']['radius'] = 0x20;
                            },
                            'onUpdate': () => {
                                const _0x24be70 = _0x479863;
                                this[_0x24be70(0x121b)][_0x24be70(0x152)]({
                                    'type': 'random',
                                    'source': this['emitZone']
                                }), this['emitter2'][_0x24be70(0x152)]({
                                    'type': 'random',
                                    'source': this[_0x24be70(0x1045)]
                                }), this[_0x24be70(0x121b)][_0x24be70(0x108b)](this['x'], this['y'], 0x4), this[_0x24be70(0x81e)]['emitParticleAt'](this['x'], this['y'], 0x2);
                            }
                        });
                        let _0x59fd2c = this['weapon'][_0x479863(0x1378)] ? this[_0x479863(0x4a1)][_0x479863(0x1378)] : 0.15;
                        _0x5be75a['default'][_0x479863(0x1267)]['PlaySound'](_0x4c4eaf['default'][_0x479863(0x184a)], {
                            'detune': -0x64 * this[_0x479863(0x19c4)],
                            'volume': _0x59fd2c
                        }, 0xc8, 0x4);
                    } ['Update'](_0x42b67e) {
                        const _0x19bc71 = _0x49d067;
                        this[_0x19bc71(0x125b)]['setDepth'](this['depth'] - 0x1);
                    }
                }
                _0x11dc5a['B_Spellstrike'] = _0x2292da, _0x11dc5a['default'] = _0x2292da;
            };
