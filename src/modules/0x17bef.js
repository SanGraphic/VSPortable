// Module 0x17bef
// Args: _0x2b7dfc, _0x3e62d7, _0x6c688e

export default (_0x2b7dfc, _0x3e62d7, _0x6c688e) => {
                'use strict';
                const _0x5acc88 = a0_0x6932;
                var _0xddb558 = this && this['__importDefault'] || function(_0xfe52ad) {
                    const _0x804f6c = _0x5acc88;
                    return _0xfe52ad && _0xfe52ad[_0x804f6c(0x16f1)] ? _0xfe52ad : {
                        'default': _0xfe52ad
                    };
                };
                Object['defineProperty'](_0x3e62d7, '__esModule', {
                    'value': !0x0
                }), _0x3e62d7['B_Ophion'] = void 0x0;
                const _0x2eef43 = _0xddb558(_0x6c688e(0xa14d)),
                    _0x51639e = _0xddb558(_0x6c688e(0x5f07)),
                    _0x7a43da = _0xddb558(_0x6c688e(0x1fd7));
                class _0x1a32a3 extends _0x2eef43['default'] {
                    constructor(_0xc67061, _0x441dca, _0x546e96, _0x3d5f08, _0x586c1a) {
                        const _0x2994e1 = _0x5acc88;
                        super(_0xc67061, _0x441dca, _0x546e96, 'vfx', 'bubbleSphere2.png', _0x3d5f08, _0x586c1a), this[_0x2994e1(0xb1f)] = 0x2, this['exploRadius'] = 0x10, this[_0x2994e1(0x1a63)] = 0x1f4, this['Explo2DUration'] = 0x64, this[_0x2994e1(0xd02)] = 0xc8, this['TrueWeapon'] = this['weapon'], this[_0x2994e1(0x35a)] = !0x1, this[_0x2994e1(0x1555)] = _0x51639e['default'][_0x2994e1(0x1043)][_0x2994e1(0x6d2)][_0x2994e1(0x18bd)][_0x2994e1(0x105b)](0x0, 0x0, 'vfx', '_OPBubble.png'), this['SnakeSprite'] = _0x51639e[_0x2994e1(0xd2c)][_0x2994e1(0x1043)][_0x2994e1(0x6d2)]['add']['sprite'](0x0, 0x0, 'vfx', 'Ophion0000.png');
                        let _0x5bd27d = this[_0x2994e1(0xc97)]['anims']['generateFrameNames']('vfx', {
                            'start': 0x0,
                            'end': 0x1f,
                            'zeroPad': 0x4,
                            'prefix': 'Ophion',
                            'suffix': '.png'
                        });
                        this[_0x2994e1(0xc97)][_0x2994e1(0x183e)][_0x2994e1(0x6a8)]({
                            'key': 'loop',
                            'frames': _0x5bd27d,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), this[_0x2994e1(0xc97)]['anims']['play']('loop'), this[_0x2994e1(0x1234)] = this[_0x2994e1(0x4a1)], this[_0x2994e1(0x1761)] = this[_0x2994e1(0x6d2)][_0x2994e1(0x18bd)][_0x2994e1(0x1791)]('vfx'), this[_0x2994e1(0x806)] = new Phaser['Geom'][(_0x2994e1(0xf29))](0x0, 0x0, this[_0x2994e1(0x9db)]), this[_0x2994e1(0x3de)] = this[_0x2994e1(0x1761)][_0x2994e1(0x14c0)]({
                            'frame': ['OPpfx.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x1f4,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x32,
                                'max': 0x50
                            },
                            'quantity': 0x1,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'alpha': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'blendMode': 'NORMAL',
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x2994e1(0x806)]
                            },
                            'on': !0x1
                        }), this[_0x2994e1(0xf1e)] = this[_0x2994e1(0x1761)][_0x2994e1(0x14c0)]({
                            'frame': ['OPpfx2.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x1f4,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x32,
                                'max': 0x50
                            },
                            'quantity': 0x1,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'alpha': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'blendMode': 'NORMAL',
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x2994e1(0x806)]
                            },
                            'on': !0x1
                        });
                        let _0x879c48 = -this['scene'][_0x2994e1(0x12f9)]['height'];
                        this[_0x2994e1(0xc97)][_0x2994e1(0xb4a)](_0x879c48 - 0x2), this['particlesManager'][_0x2994e1(0xb4a)](_0x879c48 - 0x1), this[_0x2994e1(0x1555)][_0x2994e1(0xb4a)](_0x879c48);
                    } ['OnRecycle']() {
                        const _0x3d53ca = _0x5acc88;
                        super[_0x3d53ca(0x5ce)](), this[_0x3d53ca(0x8a2)](0x1), this['body'][_0x3d53ca(0xdf6)](0x18, -0xc, -0xc), this['body']['enable'] = !0x0, this[_0x3d53ca(0x183f)](!0x1), this[_0x3d53ca(0x149e)] = !0x1, this['explosionCircle'] = new Phaser[(_0x3d53ca(0x10d2))]['Circle'](0x0, 0x0, this['exploRadius'] * this[_0x3d53ca(0x4a1)][_0x3d53ca(0x5f5)]), this[_0x3d53ca(0xf1e)][_0x3d53ca(0x152)]({
                            'type': 'random',
                            'source': this[_0x3d53ca(0x806)]
                        }), this[_0x3d53ca(0x3de)][_0x3d53ca(0x1070)](0x1 + Math['floor'](this['weapon']['level'] / 0x3)), this['purpleEmitter1'][_0x3d53ca(0x152)]({
                            'type': 'random',
                            'source': this[_0x3d53ca(0x806)]
                        }), this['purpleEmitter2'][_0x3d53ca(0x1070)](0x1 + Math['floor'](this['weapon'][_0x3d53ca(0x5e3)] / 0x3)), this['AimForRandomEnemy'](), _0x51639e['default']['Core']['scene']['time']['removeEvent'](this['HitboxTimer']), this['HitboxTimer'] = _0x51639e['default'][_0x3d53ca(0x1043)]['scene']['time']['addEvent']({
                            'delay': this[_0x3d53ca(0x4a1)][_0x3d53ca(0xcd5)],
                            'loop': !0x0,
                            'callback': () => {
                                const _0x140ffc = _0x3d53ca;
                                this[_0x140ffc(0x990)] = [];
                            }
                        });
                    } ['OnHasHitAnObject'](_0x297f11) {
                        const _0x3c8e21 = _0x5acc88;
                        this[_0x3c8e21(0x69d)]();
                    } ['Explode']() {
                        const _0x21ae44 = _0x5acc88;
                        var _0x36eb19, _0x1f2d3d, _0x5e76d3;
                        if (this[_0x21ae44(0x149e)]) return;
                        _0x51639e['default'][_0x21ae44(0x1267)][_0x21ae44(0x7f6)](_0x7a43da[_0x21ae44(0xd2c)][_0x21ae44(0x1437)], {
                            'detune': -0xc8 * this[_0x21ae44(0x19c4)],
                            'volume': 0.3
                        }, 0xc8, 0x6), 0x1 === this['indexInWeapon'] && _0x51639e['default']['Sound']['PlaySound'](_0x7a43da[_0x21ae44(0xd2c)]['Ophion2'], {
                            'volume': 0.3
                        }, 0xc8, 0x2), this[_0x21ae44(0x149e)] = !0x0, this[_0x21ae44(0xcf9)]['velocity']['x'] = 0x0, this[_0x21ae44(0xcf9)]['velocity']['y'] = 0x0, this[_0x21ae44(0xc97)]['x'] = this[_0x21ae44(0x1555)]['x'] = this['x'], this['SnakeSprite']['y'] = this['DisplaySprite']['y'] = this['y'], this['purpleEmitter1'][_0x21ae44(0x726)](this['x'], this['y']), this[_0x21ae44(0x3de)][_0x21ae44(0x726)](this['x'], this['y']);
                        let _0x11bec7 = 0x2 * this[_0x21ae44(0x4a1)][_0x21ae44(0x5f5)];
                        null === (_0x36eb19 = this['SnakeTween']) || void 0x0 === _0x36eb19 || _0x36eb19[_0x21ae44(0x1a34)](), this[_0x21ae44(0x51f)] = this[_0x21ae44(0x6d2)]['tweens'][_0x21ae44(0x18bd)]({
                            'targets': this[_0x21ae44(0xc97)],
                            'scale': 0x1,
                            'alpha': 0.65,
                            'duration': this['Explo1DUration'],
                            'onStart': () => {
                                const _0x449402 = _0x21ae44;
                                this[_0x449402(0xc97)]['setAlpha'](0x0), this[_0x449402(0xc97)][_0x449402(0x8a2)](0x0);
                            }
                        }), null === (_0x1f2d3d = this[_0x21ae44(0xa56)]) || void 0x0 === _0x1f2d3d || _0x1f2d3d[_0x21ae44(0x1a34)](), null === (_0x5e76d3 = this[_0x21ae44(0x11cc)]) || void 0x0 === _0x5e76d3 || _0x5e76d3['stop'](), this['displayScaleTween'] = this['scene']['tweens'][_0x21ae44(0x18bd)]({
                            'targets': [this, this[_0x21ae44(0x1555)]],
                            'scale': _0x11bec7,
                            'alpha': 0.65,
                            'duration': this[_0x21ae44(0x1a63)],
                            'onStart': () => {
                                const _0x12088f = _0x21ae44;
                                this[_0x12088f(0x8a2)](0x0), this['DisplaySprite'][_0x12088f(0x8a2)](0x0);
                            },
                            'onComplete': () => {
                                const _0x4a4be3 = _0x21ae44;
                                this['purpleEmitter1'][_0x4a4be3(0x1aa2)](), this[_0x4a4be3(0x3de)][_0x4a4be3(0x1aa2)](), this[_0x4a4be3(0x11cc)] = this['scene'][_0x4a4be3(0x12a1)]['add']({
                                    'targets': this[_0x4a4be3(0x1555)],
                                    'scale': 0.9 * _0x11bec7,
                                    'duration': 0x64,
                                    'yoyo': !0x0,
                                    'repeat': -0x1
                                });
                            }
                        }), _0x51639e[_0x21ae44(0xd2c)]['Core'][_0x21ae44(0x6d2)][_0x21ae44(0x915)]['removeEvent'](this[_0x21ae44(0x187c)]), this[_0x21ae44(0x187c)] = _0x51639e[_0x21ae44(0xd2c)][_0x21ae44(0x1043)]['scene']['time']['addEvent']({
                            'delay': this[_0x21ae44(0x4a1)]['PDuration'],
                            'loop': !0x1,
                            'callback': () => {
                                this['Implode']();
                            }
                        });
                    } ['Implode']() {
                        const _0x1cab5c = _0x5acc88;
                        var _0xff2dc8;
                        this[_0x1cab5c(0xf1e)][_0x1cab5c(0x1a34)](), this[_0x1cab5c(0x3de)][_0x1cab5c(0x1a34)](), null === (_0xff2dc8 = this['ImplosionTween']) || void 0x0 === _0xff2dc8 || _0xff2dc8[_0x1cab5c(0x1a34)](), this[_0x1cab5c(0x155e)] = this[_0x1cab5c(0x6d2)]['tweens']['add']({
                            'targets': [this, this[_0x1cab5c(0x1555)]],
                            'scale': 0x0,
                            'alpha': 0x1,
                            'duration': this['Explo2DUration'],
                            'onStart': () => {},
                            'onComplete': () => {
                                const _0x1f288d = _0x1cab5c;
                                this[_0x1f288d(0x159b)]();
                            }
                        });
                    } ['Explode2']() {
                        const _0x149d1d = _0x5acc88;
                        var _0x2b2492, _0x9ccb36, _0x1cd96c, _0xa9fe5a;
                        _0x51639e['default'][_0x149d1d(0x1267)][_0x149d1d(0x7f6)](_0x7a43da['default'][_0x149d1d(0x16ae)], {
                            'detune': -0xc8 * this[_0x149d1d(0x19c4)],
                            'volume': 0.3
                        }, 0x1f4, 0x6), null === (_0x2b2492 = this[_0x149d1d(0x51f)]) || void 0x0 === _0x2b2492 || _0x2b2492[_0x149d1d(0x1a34)](), null === (_0x9ccb36 = this['displayScaleTween']) || void 0x0 === _0x9ccb36 || _0x9ccb36[_0x149d1d(0x1a34)](), null === (_0x1cd96c = this[_0x149d1d(0x11cc)]) || void 0x0 === _0x1cd96c || _0x1cd96c[_0x149d1d(0x1a34)](), this[_0x149d1d(0x131f)]['PfxEmitter']['emitParticleAt'](this['x'], this['y'], 0x3c);
                        let _0x51ea9b = 0x4 * this['weapon'][_0x149d1d(0x5f5)];
                        null === (_0xa9fe5a = this['ExplosionTween']) || void 0x0 === _0xa9fe5a || _0xa9fe5a[_0x149d1d(0x1a34)](), this['ExplosionTween'] = this['scene']['tweens'][_0x149d1d(0x18bd)]({
                            'targets': [this, this[_0x149d1d(0xc97)]],
                            'scale': _0x51ea9b,
                            'alpha': 0x0,
                            'duration': this[_0x149d1d(0xd02)],
                            'onStart': () => {
                                this['SnakeSprite']['setAlpha'](0x1);
                            },
                            'onComplete': () => {
                                const _0x51627b = _0x149d1d;
                                this[_0x51627b(0xb21)]();
                            }
                        }), this[_0x149d1d(0x6d2)][_0x149d1d(0x12a1)][_0x149d1d(0x18bd)]({
                            'targets': this['DisplaySprite'],
                            'scale': _0x51ea9b,
                            'alpha': 0x1,
                            'duration': this[_0x149d1d(0xd02)],
                            'onStart': () => {
                                const _0x45e4b4 = _0x149d1d;
                                this[_0x45e4b4(0x1555)][_0x45e4b4(0xdab)](0x0);
                            },
                            'onComplete': () => {
                                const _0x1f7596 = _0x149d1d;
                                this[_0x1f7596(0x1555)][_0x1f7596(0xdab)](0x0);
                            }
                        }), this['scene'][_0x149d1d(0x12a1)]['add']({
                            'delay': this['Explo3DUration'],
                            'targets': this['DisplaySprite'],
                            'alpha': 0x0,
                            'duration': this[_0x149d1d(0xd02)],
                            'onStart': () => {
                                const _0x5eac02 = _0x149d1d;
                                this[_0x5eac02(0x1555)][_0x5eac02(0xdab)](0x0);
                            },
                            'onComplete': () => {
                                const _0x3c2819 = _0x149d1d;
                                this[_0x3c2819(0x14fb)]();
                            }
                        });
                    } ['Update']() {} ['Disable']() {
                        const _0x39e5ad = _0x5acc88;
                        this[_0x39e5ad(0xcf9)]['enable'] = !0x1;
                    } ['DeSpawn']() {
                        const _0x1b51c0 = _0x5acc88;
                        0x1 === this[_0x1b51c0(0x19c4)] && _0x51639e[_0x1b51c0(0xd2c)]['Sound']['StopSound'](_0x7a43da[_0x1b51c0(0xd2c)]['Ophion2']), this['purpleEmitter1'][_0x1b51c0(0x1a34)](), this[_0x1b51c0(0x3de)]['stop'](), super['DeSpawn']();
                    }
                }
                _0x3e62d7['B_Ophion'] = _0x1a32a3, _0x3e62d7['default'] = _0x1a32a3;
            };
