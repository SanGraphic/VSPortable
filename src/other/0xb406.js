// Module 0xb406
// Args: _0x142ac7, _0x121ab7, _0x9ade4e

export default (_0x142ac7, _0x121ab7, _0x9ade4e) => {
                'use strict';
                const _0x2fbed6 = a0_0x6932;
                var _0xefcb68 = this && this['__importDefault'] || function(_0x99c96a) {
                    const _0x3a60ff = _0x2fbed6;
                    return _0x99c96a && _0x99c96a[_0x3a60ff(0x16f1)] ? _0x99c96a : {
                        'default': _0x99c96a
                    };
                };
                Object['defineProperty'](_0x121ab7, '__esModule', {
                    'value': !0x0
                });
                const _0x4a4a98 = _0xefcb68(_0x9ade4e(0x5f07)),
                    _0x48197e = _0x9ade4e(0x18304),
                    _0x2463bf = _0xefcb68(_0x9ade4e(0x1fd7));
                class _0x3badc7 extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0x3bdead, _0x356325, _0x54aeae) {
                        const _0x1e4aa9 = _0x2fbed6;
                        super(_0x3bdead['scene'], _0x356325, _0x54aeae, 'vfx', 'WhiteDot.png'), this[_0x1e4aa9(0x177d)] = !0x1, this[_0x1e4aa9(0x187a)] = !0x1, this[_0x1e4aa9(0x161a)] = 0x1, this[_0x1e4aa9(0x1133)] = 0x1, this[_0x1e4aa9(0x1732)] = new Phaser['Geom'][(_0x1e4aa9(0xf29))](), this[_0x1e4aa9(0x66b)] = !0x1, this[_0x1e4aa9(0xb78)] = 0x0, this['duration'] = 0x12c, this[_0x1e4aa9(0x617)] = 0x32, this[_0x1e4aa9(0xbaa)] = 0x0, this['arcRadius'] = 0xfa, this[_0x1e4aa9(0x7cd)] = 0xffff00, this['pool'] = _0x3bdead, this[_0x1e4aa9(0x1732)] = new Phaser[(_0x1e4aa9(0x10d2))][(_0x1e4aa9(0xf29))](), this['setVisible'](!0x1), this[_0x1e4aa9(0x1761)] = this['scene'][_0x1e4aa9(0x18bd)][_0x1e4aa9(0x1791)]('vfx'), this['pfxEmitter2'] = this[_0x1e4aa9(0x1761)]['createEmitter']({
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
                            'on': !0x1
                        }), this['pfxEmitter'] = this[_0x1e4aa9(0x1761)][_0x1e4aa9(0x14c0)]({
                            'frame': ['_blur3.png', 'HitCloud2.png'],
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
                        }), this['well'] = this[_0x1e4aa9(0x1761)][_0x1e4aa9(0x1386)]({
                            'x': this['x'],
                            'y': this['y'] - 0x14,
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        }), this[_0x1e4aa9(0x7cd)] = Phaser['Math'][_0x1e4aa9(0x82a)][_0x1e4aa9(0x198c)]([0xffff, 0xb7192, 0xd4e6f]), this['GroundFx'] = this[_0x1e4aa9(0x6d2)][_0x1e4aa9(0x18bd)]['circle'](0x0, 0x0, 0x1, this['color'])[_0x1e4aa9(0xf8e)](0.5)['setAlpha'](0.4)[_0x1e4aa9(0x183f)](!0x1)[_0x1e4aa9(0x11c7)](_0x48197e[_0x1e4aa9(0x10fc)]['ADD']), this[_0x1e4aa9(0x119c)] = this[_0x1e4aa9(0x6d2)]['add'][_0x1e4aa9(0x568)](0.5 * this[_0x1e4aa9(0x6d2)]['renderer'][_0x1e4aa9(0x173c)], 0.5 * this[_0x1e4aa9(0x6d2)][_0x1e4aa9(0x12f9)][_0x1e4aa9(0x140e)] - 0x30, 'UI', 'ExclamationMark.png')['setScale'](0x0)['setOrigin'](0.5, 0x1)[_0x1e4aa9(0xb4a)](0x2328), this[_0x1e4aa9(0x10ba)] = this['scene']['add']['sprite'](0.5 * this['scene']['renderer']['width'], 0.5 * this['scene'][_0x1e4aa9(0x12f9)][_0x1e4aa9(0x140e)] - 0x30, 'vfx', 'Star_0.png')[_0x1e4aa9(0x8a2)](0x2)[_0x1e4aa9(0xf8e)](0.5, 0x1)[_0x1e4aa9(0xb4a)](0x2328)['setAngle'](0xf), this[_0x1e4aa9(0xc4b)] = this['scene'][_0x1e4aa9(0x18bd)]['circle'](0x0, 0x0, 0x1, this['color'])[_0x1e4aa9(0xf8e)](0.5)[_0x1e4aa9(0xdab)](0.4)[_0x1e4aa9(0x183f)](!0x1)[_0x1e4aa9(0x11c7)](_0x48197e['BlendModes']['ADD']), this['trail'] = this[_0x1e4aa9(0x6d2)][_0x1e4aa9(0x18bd)][_0x1e4aa9(0x523)]({
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
                        let _0x3050f3 = this[_0x1e4aa9(0x10ba)][_0x1e4aa9(0x183e)][_0x1e4aa9(0x1756)]('vfx', {
                            'start': 0x0,
                            'end': 0x12,
                            'zeroPad': 0x0,
                            'prefix': 'Star_',
                            'suffix': '.png'
                        });
                        this[_0x1e4aa9(0x10ba)][_0x1e4aa9(0x183e)][_0x1e4aa9(0x6a8)]({
                            'key': 'explode',
                            'frames': _0x3050f3,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        });
                    } ['OnTeleportOnCull']() {} ['setDepthPlease'](_0x5365b1) {
                        const _0x552001 = _0x2fbed6;
                        this['setDepth'](_0x5365b1), this[_0x552001(0x919)]['setDepth'](_0x5365b1), this[_0x552001(0x1761)][_0x552001(0xb4a)](_0x5365b1);
                    } ['OnRecycle']() {
                        const _0x32e5f4 = _0x2fbed6;
                        this['StarSprite']['setFrame']('Star_0.png'), this[_0x32e5f4(0x10ba)][_0x32e5f4(0x35a)] = !0x1, this['arcRadius'] = 0.5 * this['scene'][_0x32e5f4(0x12f9)]['width'], this[_0x32e5f4(0x66b)] = !0x1, this[_0x32e5f4(0xc4b)]['x'] = this['x'], this[_0x32e5f4(0xc4b)]['y'] = this['y'], this[_0x32e5f4(0x119c)]['x'] = this['x'], this['WarningSprite']['y'] = this['y'] - 0x10, this[_0x32e5f4(0x119c)]['setScale'](0x0), this[_0x32e5f4(0xc4b)][_0x32e5f4(0xe71)] = 0x0, this[_0x32e5f4(0xc4b)]['setVisible'](!0x0), this['color'] = Phaser[_0x32e5f4(0x24f)]['RND'][_0x32e5f4(0x198c)]([0xffff, 0xb7192, 0xd4e6f]), _0x4a4a98[_0x32e5f4(0xd2c)]['Sound'][_0x32e5f4(0x7f6)](_0x2463bf[_0x32e5f4(0xd2c)]['Pizza'], {
                            'volume': 0.9,
                            'detune': 0x1f4 * Math[_0x32e5f4(0x9ad)](),
                            'rate': 0x1
                        }, 0x96, 0x2), this['scene']['tweens']['add']({
                            'targets': this[_0x32e5f4(0x119c)],
                            'scale': 0x1,
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x1d533e = _0x32e5f4;
                                this['scene']['tweens'][_0x1d533e(0x18bd)]({
                                    'targets': this['WarningSprite'],
                                    'scale': 0x0,
                                    'duration': 0xc8,
                                    'delay': 0xc8
                                });
                            }
                        }), this[_0x32e5f4(0x6d2)][_0x32e5f4(0x12a1)]['add']({
                            'targets': this['GroundWarning'],
                            'alpha': 0.2,
                            'scale': this[_0x32e5f4(0x161a)],
                            'duration': 0x1f4,
                            'yoyo': !0x0,
                            'repeat': 0x1
                        }), this[_0x32e5f4(0xbaa)] = 0xb4, this['arcTween'] = this['scene'][_0x32e5f4(0x12a1)]['add']({
                            'targets': this,
                            'arcAngle': 0x168,
                            'duration': 0x1f4,
                            'delay': 0x5dc,
                            'onStart': () => {
                                const _0xb9d0e3 = _0x32e5f4;
                                this['trail']['setVisible'](!0x0), this['StarSprite'][_0xb9d0e3(0x35a)] = !0x0, this['StarSprite']['x'] = this['x'] - this[_0xb9d0e3(0x14bb)] + Math[_0xb9d0e3(0xd7e)](Phaser[_0xb9d0e3(0x24f)][_0xb9d0e3(0x54d)](this[_0xb9d0e3(0xbaa)])) * this[_0xb9d0e3(0x14bb)], this[_0xb9d0e3(0x10ba)]['y'] = this['y'] + Math[_0xb9d0e3(0xc80)](Phaser['Math']['DegToRad'](this['arcAngle'])) * this[_0xb9d0e3(0x14bb)];
                            },
                            'onComplete': () => {
                                this['Explode']();
                            }
                        }), this['trail']['x'] = this['x'] - 0x2 * this['arcRadius'], this['trail']['y'] = this['y'] - this[_0x32e5f4(0x14bb)], this[_0x32e5f4(0x3b8)][_0x32e5f4(0xe71)] = 0x1, this[_0x32e5f4(0xe71)] = 0x1, this['trail']['depth'] = 0xbb8;
                    } ['Explode']() {
                        const _0x14f149 = _0x2fbed6;
                        this['StarSprite'][_0x14f149(0x183e)]['stop'](), this['StarSprite'][_0x14f149(0x183e)][_0x14f149(0x902)]('explode'), this[_0x14f149(0x66b)] = !0x0, this['setActive'](!0x0), this[_0x14f149(0x8a2)](this[_0x14f149(0x161a)]), this['circleArea']['x'] = this['x'], this[_0x14f149(0x1732)]['y'] = this['y'], this[_0x14f149(0x1732)][_0x14f149(0x161a)] = this[_0x14f149(0x161a)], this['hasHit'] = !0x1, this[_0x14f149(0xc05)]['x'] = this['x'], this[_0x14f149(0xc05)]['y'] = this['y'] - 0x14, this[_0x14f149(0xb8c)][_0x14f149(0x726)](this['x'], this['y']), this['pfxEmitter'][_0x14f149(0x1aa2)](), this[_0x14f149(0xb0d)]['setPosition'](this['x'], this['y']), this[_0x14f149(0xb0d)][_0x14f149(0x1aa2)](), _0x4a4a98[_0x14f149(0xd2c)][_0x14f149(0x1043)][_0x14f149(0x14d8)]['FlashingVFXEnabled'] && (this[_0x14f149(0x919)][_0x14f149(0x726)](this['x'], this['y'])[_0x14f149(0x183f)](!0x0)['radius'] = 0x1), this[_0x14f149(0x1581)] && (this[_0x14f149(0x1581)]['stop'](), this[_0x14f149(0x1581)] = null), this['despawnTimer'] = this['scene'][_0x14f149(0x12a1)]['add']({
                            'targets': this['GroundFx'],
                            'radius': this[_0x14f149(0x161a)],
                            'duration': 0x96,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        }), this[_0x14f149(0x6d2)]['tweens'][_0x14f149(0x18bd)]({
                            'targets': this[_0x14f149(0x3b8)],
                            'alpha': 0x0,
                            'duration': 0x64
                        }), _0x4a4a98['default']['Sound'][_0x14f149(0x7f6)](_0x2463bf[_0x14f149(0xd2c)][_0x14f149(0x15f1)], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math[_0x14f149(0x9ad)]() - 0.5)
                        }, 0x96, 0x3);
                    } ['DeSpawn']() {
                        const _0x49007f = _0x2fbed6;
                        this['setActive'](!0x1), this[_0x49007f(0xb8c)]['stop'](), this[_0x49007f(0xb0d)]['stop'](), this[_0x49007f(0xc82)]['Return'](this), this[_0x49007f(0x66b)] = !0x1, this[_0x49007f(0x3b8)]['visible'] = !0x1, this[_0x49007f(0x1581)] && (this[_0x49007f(0x1581)][_0x49007f(0x1a34)](), this[_0x49007f(0x1581)] = null), this[_0x49007f(0x919)][_0x49007f(0x183f)](!0x1), this['trail']['clear']();
                    } ['Init'](_0x539b55 = -0x3e8, _0x4808bd = -0x3e8) {
                        const _0x2785bd = _0x2fbed6;
                        this[_0x2785bd(0x726)](_0x539b55, _0x4808bd), this[_0x2785bd(0x5ce)]();
                    } ['die']() {
                        this['visible'] = !0x1;
                    } ['Update'](_0xa671fe = 0x0) {
                        const _0x567eb4 = _0x2fbed6;
                        if (this['hasHit']) return;
                        this[_0x567eb4(0x66b)] && this[_0x567eb4(0x1732)][_0x567eb4(0x1780)](_0x4a4a98['default'][_0x567eb4(0x1043)][_0x567eb4(0x10f6)]['x'], _0x4a4a98[_0x567eb4(0xd2c)]['Core'][_0x567eb4(0x10f6)]['y']) && (this[_0x567eb4(0x2e9)] = !0x0, _0x4a4a98[_0x567eb4(0xd2c)][_0x567eb4(0x1043)][_0x567eb4(0x10f6)][_0x567eb4(0x1112)](this['damage']));
                        let _0xf7d2b5 = Math[_0x567eb4(0xdeb)](_0xa671fe / 0x10);
                        for (let _0x2890da = 0x0; _0x2890da < _0xf7d2b5; _0x2890da++) this[_0x567eb4(0x12fc)]();
                    } ['clearPositions']() {
                        this['positions'] = [];
                    } ['trailUpdate']() {
                        const _0x239a58 = _0x2fbed6;
                        this[_0x239a58(0x3b8)][_0x239a58(0x159)](), this[_0x239a58(0x3b8)]['beginPath'](), this['trail']['lineStyle'](0x4, this[_0x239a58(0x7cd)], 0.5), this[_0x239a58(0x3b8)][_0x239a58(0x167e)](this[_0x239a58(0x14bb)], this['arcRadius'], this['arcRadius'], Phaser['Math'][_0x239a58(0x54d)](0xb4), Phaser[_0x239a58(0x24f)][_0x239a58(0x54d)](this[_0x239a58(0xbaa)]), !0x1), this[_0x239a58(0x3b8)][_0x239a58(0x194f)](), this['trail'][_0x239a58(0xfcb)](), this['trail']['lineStyle'](0x2, this['color'], 0.8), this[_0x239a58(0x3b8)][_0x239a58(0x167e)](this['arcRadius'], this['arcRadius'], this[_0x239a58(0x14bb)], Phaser[_0x239a58(0x24f)][_0x239a58(0x54d)](0xb4), Phaser[_0x239a58(0x24f)][_0x239a58(0x54d)](this['arcAngle']), !0x1), this[_0x239a58(0x3b8)]['strokePath'](), this['trail'][_0x239a58(0xba4)] = _0x48197e[_0x239a58(0x10fc)]['ADD'], this[_0x239a58(0x10ba)]['x'] = this['x'] - this['arcRadius'] + Math['cos'](Phaser['Math']['DegToRad'](this['arcAngle'])) * this[_0x239a58(0x14bb)], this[_0x239a58(0x10ba)]['y'] = this['y'] + Math['sin'](Phaser[_0x239a58(0x24f)]['DegToRad'](this[_0x239a58(0xbaa)])) * this['arcRadius'];
                    }
                }
                _0x121ab7['default'] = _0x3badc7;
            };
