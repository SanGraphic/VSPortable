// Module 0xef44
// Args: _0x30adde, _0x3283eb, _0x5391f5

export default (_0x30adde, _0x3283eb, _0x5391f5) => {
                'use strict';
                const _0x313d8e = a0_0x6932;
                var _0x5b1c24 = this && this['__importDefault'] || function(_0x11485a) {
                    const _0x553a24 = _0x313d8e;
                    return _0x11485a && _0x11485a[_0x553a24(0x16f1)] ? _0x11485a : {
                        'default': _0x11485a
                    };
                };
                Object['defineProperty'](_0x3283eb, '__esModule', {
                    'value': !0x0
                });
                const _0xba5d26 = _0x5b1c24(_0x5391f5(0x5f07)),
                    _0x152de3 = _0x5391f5(0x18304),
                    _0x27bcda = _0x5b1c24(_0x5391f5(0x1fd7));
                class _0x319c53 extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0x42e7cb, _0x5e997f, _0x4e7e30) {
                        const _0x5e4006 = _0x313d8e;
                        super(_0x42e7cb[_0x5e4006(0x6d2)], _0x5e997f, _0x4e7e30, 'vfx', 'WhiteDot.png'), this['isCullable'] = !0x1, this['isTeleportOnCull'] = !0x1, this['radius'] = 0x1, this[_0x5e4006(0x1133)] = 0x1, this[_0x5e4006(0x1732)] = new Phaser[(_0x5e4006(0x10d2))][(_0x5e4006(0xf29))](), this[_0x5e4006(0x66b)] = !0x1, this[_0x5e4006(0xb78)] = 0x0, this['duration'] = 0x12c, this['maxPositions'] = 0x32, this[_0x5e4006(0xbaa)] = 0x0, this['arcRadius'] = 0xfa, this[_0x5e4006(0x7cd)] = 0xffff00, this['pool'] = _0x42e7cb, this[_0x5e4006(0x1732)] = new Phaser['Geom']['Circle'](), this['setVisible'](!0x1), this[_0x5e4006(0x1761)] = this['scene'][_0x5e4006(0x18bd)]['particles']('vfx'), this['pfxEmitter2'] = this[_0x5e4006(0x1761)][_0x5e4006(0x14c0)]({
                            'frame': ['Star_0.png', 'Star2.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0xb4,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x64,
                                'max': 0xc8
                            },
                            'quantity': 0x2,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x2,
                            'alpha': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'tint': 0xff4444,
                            'on': !0x1
                        }), this['pfxEmitter'] = this['particlesManager'][_0x5e4006(0x14c0)]({
                            'frame': ['_blur.png', 'HitSmoke2.png'],
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
                                'min': 0x50,
                                'max': 0x78
                            },
                            'quantity': 0x2,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x2,
                            'blendMode': 'ADD',
                            'on': !0x1
                        }), this['well'] = this[_0x5e4006(0x1761)]['createGravityWell']({
                            'x': this['x'],
                            'y': this['y'] - 0x14,
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        }), this['color'] = Phaser['Math'][_0x5e4006(0x82a)][_0x5e4006(0x198c)]([0x920909, 0x920c22, 0x993200]), this[_0x5e4006(0x919)] = this['scene'][_0x5e4006(0x18bd)]['circle'](0x0, 0x0, 0x1, this[_0x5e4006(0x7cd)])[_0x5e4006(0xf8e)](0.5)[_0x5e4006(0xdab)](0.4)[_0x5e4006(0x183f)](!0x1)[_0x5e4006(0x11c7)](_0x152de3[_0x5e4006(0x10fc)]['ADD']), this[_0x5e4006(0x119c)] = this['scene']['add'][_0x5e4006(0x568)](0.5 * this[_0x5e4006(0x6d2)][_0x5e4006(0x12f9)]['width'], 0.5 * this[_0x5e4006(0x6d2)][_0x5e4006(0x12f9)][_0x5e4006(0x140e)] - 0x30, 'UI', 'ExclamationMark.png')['setScale'](0x0)[_0x5e4006(0xf8e)](0.5, 0x1)['setDepth'](0x2328), this['StarSprite'] = this[_0x5e4006(0x6d2)][_0x5e4006(0x18bd)]['sprite'](0.5 * this[_0x5e4006(0x6d2)]['renderer']['width'], 0.5 * this[_0x5e4006(0x6d2)][_0x5e4006(0x12f9)][_0x5e4006(0x140e)] - 0x30, 'vfx', 'Star_0.png')['setScale'](0x2)['setOrigin'](0.5, 0x1)[_0x5e4006(0xb4a)](0x2328)[_0x5e4006(0x9b5)](0xf)['setTint'](0xff0000), this[_0x5e4006(0xc4b)] = this[_0x5e4006(0x6d2)]['add'][_0x5e4006(0x4f6)](0x0, 0x0, 0x1, this['color'])[_0x5e4006(0xf8e)](0.5)['setAlpha'](0.4)[_0x5e4006(0x183f)](!0x1)[_0x5e4006(0x11c7)](_0x152de3['BlendModes']['ADD']), this['trail'] = this[_0x5e4006(0x6d2)]['add'][_0x5e4006(0x523)]({
                            'x': 0x0,
                            'y': 0x0,
                            'lineStyle': {
                                'width': 0x1,
                                'color': 0xff0000,
                                'alpha': 0x1
                            },
                            'fillStyle': {
                                'color': 0xff0000,
                                'alpha': 0x1
                            }
                        });
                        let _0x577f67 = this['StarSprite'][_0x5e4006(0x183e)][_0x5e4006(0x1756)]('vfx', {
                            'start': 0x0,
                            'end': 0x12,
                            'zeroPad': 0x0,
                            'prefix': 'Star_',
                            'suffix': '.png'
                        });
                        this[_0x5e4006(0x10ba)][_0x5e4006(0x183e)][_0x5e4006(0x6a8)]({
                            'key': 'explode',
                            'frames': _0x577f67,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        });
                    } ['OnTeleportOnCull']() {} ['setDepthPlease'](_0x53884f) {
                        const _0x20142c = _0x313d8e;
                        this[_0x20142c(0xb4a)](_0x53884f), this[_0x20142c(0x919)][_0x20142c(0xb4a)](_0x53884f), this['particlesManager']['setDepth'](_0x53884f);
                    } ['OnRecycle']() {
                        const _0x328fc5 = _0x313d8e;
                        this[_0x328fc5(0x10ba)][_0x328fc5(0x381)]('Star_0.png'), this[_0x328fc5(0x10ba)]['visible'] = !0x1, this[_0x328fc5(0x14bb)] = 0.5 * this[_0x328fc5(0x6d2)][_0x328fc5(0x12f9)]['width'], this[_0x328fc5(0x66b)] = !0x1, this[_0x328fc5(0xc4b)]['x'] = this['x'], this[_0x328fc5(0xc4b)]['y'] = this['y'], this[_0x328fc5(0x119c)]['x'] = this['x'], this['WarningSprite']['y'] = this['y'] - 0x10, this[_0x328fc5(0x119c)]['setScale'](0x0), this[_0x328fc5(0xc4b)][_0x328fc5(0xe71)] = 0x0, this['GroundWarning'][_0x328fc5(0x183f)](!0x0), this[_0x328fc5(0x7cd)] = Phaser['Math']['RND'][_0x328fc5(0x198c)]([0x920909, 0x920c12, 0x990200]), _0xba5d26[_0x328fc5(0xd2c)][_0x328fc5(0x1267)][_0x328fc5(0x7f6)](_0x27bcda[_0x328fc5(0xd2c)][_0x328fc5(0x6cf)], {
                            'volume': 0.9,
                            'detune': 0x1f4 * Math[_0x328fc5(0x9ad)](),
                            'rate': 0x1
                        }, 0x96, 0x2), this[_0x328fc5(0x6d2)]['tweens']['add']({
                            'targets': this[_0x328fc5(0x119c)],
                            'scale': 0x1,
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x3adacc = _0x328fc5;
                                this['scene'][_0x3adacc(0x12a1)][_0x3adacc(0x18bd)]({
                                    'targets': this['WarningSprite'],
                                    'scale': 0x0,
                                    'duration': 0xc8,
                                    'delay': 0xc8
                                });
                            }
                        }), this[_0x328fc5(0x6d2)][_0x328fc5(0x12a1)][_0x328fc5(0x18bd)]({
                            'targets': this['GroundWarning'],
                            'alpha': 0.2,
                            'scale': this['radius'],
                            'duration': 0x1f4,
                            'yoyo': !0x0,
                            'repeat': 0x1
                        }), this['arcAngle'] = 0xb4, this[_0x328fc5(0x2f0)] = this['scene'][_0x328fc5(0x12a1)][_0x328fc5(0x18bd)]({
                            'targets': this,
                            'arcAngle': 0x168,
                            'duration': 0x1f4,
                            'delay': 0x5dc,
                            'onStart': () => {
                                const _0x2f22e5 = _0x328fc5;
                                this['trail'][_0x2f22e5(0x183f)](!0x0), this['StarSprite'][_0x2f22e5(0x35a)] = !0x0, this[_0x2f22e5(0x10ba)]['x'] = this['x'] + this[_0x2f22e5(0x14bb)] - Math[_0x2f22e5(0xd7e)](Phaser['Math']['DegToRad'](this['arcAngle'])) * this[_0x2f22e5(0x14bb)], this['StarSprite']['y'] = this['y'] + Math['sin'](Phaser[_0x2f22e5(0x24f)][_0x2f22e5(0x54d)](this[_0x2f22e5(0xbaa)])) * this['arcRadius'];
                            },
                            'onComplete': () => {
                                const _0x141e8a = _0x328fc5;
                                this[_0x141e8a(0x69d)]();
                            }
                        }), this[_0x328fc5(0x3b8)]['x'] = this['x'] + 0x2 * this[_0x328fc5(0x14bb)], this['trail']['y'] = this['y'] - this['arcRadius'], this[_0x328fc5(0x3b8)][_0x328fc5(0xe71)] = 0x1, this[_0x328fc5(0xe71)] = 0x1, this[_0x328fc5(0x3b8)]['depth'] = 0xbb8;
                    } ['Explode']() {
                        const _0x3fd592 = _0x313d8e;
                        this['StarSprite'][_0x3fd592(0x183e)]['stop'](), this['StarSprite'][_0x3fd592(0x183e)][_0x3fd592(0x902)]('explode'), this['exploding'] = !0x0, this['setActive'](!0x0), this['setScale'](this['radius']), this[_0x3fd592(0x1732)]['x'] = this['x'], this[_0x3fd592(0x1732)]['y'] = this['y'], this[_0x3fd592(0x1732)][_0x3fd592(0x161a)] = this['radius'], this['hasHit'] = !0x1, this[_0x3fd592(0xc05)]['x'] = this['x'], this[_0x3fd592(0xc05)]['y'] = this['y'] - 0x14, this[_0x3fd592(0xb8c)]['setPosition'](this['x'], this['y']), this[_0x3fd592(0xb8c)]['start'](), this[_0x3fd592(0xb0d)]['setPosition'](this['x'], this['y']), this[_0x3fd592(0xb0d)]['start'](), _0xba5d26['default'][_0x3fd592(0x1043)]['PlayerOptions']['FlashingVFXEnabled'] && (this['GroundFx']['setPosition'](this['x'], this['y'])[_0x3fd592(0x183f)](!0x0)[_0x3fd592(0x161a)] = 0x1), this[_0x3fd592(0x1581)] && (this[_0x3fd592(0x1581)]['stop'](), this[_0x3fd592(0x1581)] = null), this[_0x3fd592(0x1581)] = this[_0x3fd592(0x6d2)][_0x3fd592(0x12a1)][_0x3fd592(0x18bd)]({
                            'targets': this[_0x3fd592(0x919)],
                            'radius': this[_0x3fd592(0x161a)],
                            'duration': 0x96,
                            'onComplete': () => {
                                const _0x239910 = _0x3fd592;
                                this[_0x239910(0x14fb)]();
                            }
                        }), this[_0x3fd592(0x6d2)][_0x3fd592(0x12a1)]['add']({
                            'targets': this[_0x3fd592(0x3b8)],
                            'alpha': 0x0,
                            'duration': 0x64
                        }), _0xba5d26['default'][_0x3fd592(0x1267)][_0x3fd592(0x7f6)](_0x27bcda['default'][_0x3fd592(0x15f1)], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math[_0x3fd592(0x9ad)]() - 0.5)
                        }, 0x96, 0x3);
                    } ['DeSpawn']() {
                        const _0x315dd = _0x313d8e;
                        this[_0x315dd(0x111e)](!0x1), this[_0x315dd(0xb8c)][_0x315dd(0x1a34)](), this[_0x315dd(0xb0d)][_0x315dd(0x1a34)](), this[_0x315dd(0xc82)]['Return'](this), this[_0x315dd(0x66b)] = !0x1, this['trail']['visible'] = !0x1, this[_0x315dd(0x1581)] && (this[_0x315dd(0x1581)][_0x315dd(0x1a34)](), this[_0x315dd(0x1581)] = null), this['GroundFx']['setVisible'](!0x1), this[_0x315dd(0x3b8)][_0x315dd(0x159)]();
                    } ['Init'](_0xf11e2e = -0x3e8, _0x18e7c6 = -0x3e8) {
                        const _0x25382a = _0x313d8e;
                        this[_0x25382a(0x726)](_0xf11e2e, _0x18e7c6), this[_0x25382a(0x5ce)]();
                    } ['die']() {
                        const _0x472f77 = _0x313d8e;
                        this[_0x472f77(0x35a)] = !0x1;
                    } ['Update'](_0x208e13 = 0x0) {
                        const _0x27724d = _0x313d8e;
                        if (this[_0x27724d(0x2e9)]) return;
                        this['exploding'] && this[_0x27724d(0x1732)]['contains'](_0xba5d26[_0x27724d(0xd2c)]['Core']['Player']['x'], _0xba5d26[_0x27724d(0xd2c)]['Core'][_0x27724d(0x10f6)]['y']) && (this['hasHit'] = !0x0, _0xba5d26[_0x27724d(0xd2c)]['Core'][_0x27724d(0x10f6)]['GetDamaged'](this['damage']));
                        let _0x1e78a7 = Math[_0x27724d(0xdeb)](_0x208e13 / 0x10);
                        for (let _0x3caf7c = 0x0; _0x3caf7c < _0x1e78a7; _0x3caf7c++) this['trailUpdate']();
                    } ['clearPositions']() {
                        this['positions'] = [];
                    } ['trailUpdate']() {
                        const _0x2f831b = _0x313d8e;
                        this[_0x2f831b(0x3b8)]['clear'](), this['trail']['beginPath'](), this[_0x2f831b(0x3b8)][_0x2f831b(0x191d)](0x4, this[_0x2f831b(0x7cd)], 0.5), this[_0x2f831b(0x3b8)][_0x2f831b(0x167e)](this[_0x2f831b(0x14bb)], this[_0x2f831b(0x14bb)], this['arcRadius'], Phaser['Math']['DegToRad'](0xb4), Phaser[_0x2f831b(0x24f)][_0x2f831b(0x54d)](this[_0x2f831b(0xbaa)]), !0x1), this[_0x2f831b(0x3b8)]['strokePath'](), this[_0x2f831b(0x3b8)]['beginPath'](), this[_0x2f831b(0x3b8)]['lineStyle'](0x2, this['color'], 0.8), this['trail'][_0x2f831b(0x167e)](this[_0x2f831b(0x14bb)], this['arcRadius'], this['arcRadius'], Phaser[_0x2f831b(0x24f)][_0x2f831b(0x54d)](0xb4), Phaser[_0x2f831b(0x24f)]['DegToRad'](this['arcAngle']), !0x1), this[_0x2f831b(0x3b8)][_0x2f831b(0x194f)](), this[_0x2f831b(0x3b8)][_0x2f831b(0xba4)] = _0x152de3[_0x2f831b(0x10fc)]['ADD'], this[_0x2f831b(0x3b8)][_0x2f831b(0x8a2)](-0x1, 0x1), this['StarSprite']['x'] = this['x'] + this['arcRadius'] - Math['cos'](Phaser['Math'][_0x2f831b(0x54d)](this[_0x2f831b(0xbaa)])) * this[_0x2f831b(0x14bb)], this[_0x2f831b(0x10ba)]['y'] = this['y'] + Math[_0x2f831b(0xc80)](Phaser[_0x2f831b(0x24f)][_0x2f831b(0x54d)](this['arcAngle'])) * this[_0x2f831b(0x14bb)];
                    }
                }
                _0x3283eb['default'] = _0x319c53;
            };
