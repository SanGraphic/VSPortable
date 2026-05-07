// Module 0xd2aa
// Args: _0x4637b0, _0x427370, _0x2e8684

export default (_0x4637b0, _0x427370, _0x2e8684) => {
                'use strict';
                const _0x3275c6 = a0_0x6932;
                var _0x3ac11a = this && this['__importDefault'] || function(_0x4d1b7b) {
                    return _0x4d1b7b && _0x4d1b7b['__esModule'] ? _0x4d1b7b : {
                        'default': _0x4d1b7b
                    };
                };
                Object['defineProperty'](_0x427370, '__esModule', {
                    'value': !0x0
                });
                const _0x119695 = _0x3ac11a(_0x2e8684(0x5f07)),
                    _0x3979bd = _0x2e8684(0x18304),
                    _0x214632 = _0x3ac11a(_0x2e8684(0x1fd7));
                class _0xd7c1ac extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0x32ef98, _0x49422b, _0xaa62dd) {
                        const _0x7a5f73 = _0x3275c6;
                        super(_0x32ef98[_0x7a5f73(0x6d2)], _0x49422b, _0xaa62dd, 'vfx', 'WhiteDot.png'), this[_0x7a5f73(0x177d)] = !0x1, this[_0x7a5f73(0x187a)] = !0x1, this[_0x7a5f73(0x161a)] = 0x1, this['damage'] = 0x1, this[_0x7a5f73(0x1732)] = new Phaser[(_0x7a5f73(0x10d2))]['Circle'](), this['pool'] = _0x32ef98, this[_0x7a5f73(0x1732)] = new Phaser[(_0x7a5f73(0x10d2))]['Circle'](), this['setVisible'](!0x1), this[_0x7a5f73(0x1761)] = this[_0x7a5f73(0x6d2)][_0x7a5f73(0x18bd)][_0x7a5f73(0x1791)]('vfx'), this['pfxEmitter2'] = this['particlesManager'][_0x7a5f73(0x14c0)]({
                            'frame': ['HitCloud1.png', 'HitCloud2.png'],
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
                            'quantity': 0x4,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x4,
                            'alpha': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'on': !0x1,
                            'tint': {
                                'onEmit': (_0x3b9526, _0x270977, _0x181de1) => this['onEmitcustomTint'](_0x3b9526, _0x270977, _0x181de1)
                            }
                        }), this['pfxEmitter'] = this[_0x7a5f73(0x1761)][_0x7a5f73(0x14c0)]({
                            'frame': ['PfxLine2.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x0
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x50,
                                'max': 0x64
                            },
                            'quantity': 0x1,
                            'scaleX': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scaleY': {
                                'start': 0x5,
                                'end': 0x0
                            },
                            'alpha': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'blendMode': 'ADD',
                            'on': !0x1
                        }), this['well'] = this['particlesManager']['createGravityWell']({
                            'x': this['x'],
                            'y': this['y'] - 0x14,
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        }), this['GroundFx'] = this['scene'][_0x7a5f73(0x18bd)][_0x7a5f73(0x4f6)](0x0, 0x0, 0x1, 0x88ccff)[_0x7a5f73(0xf8e)](0.5)['setAlpha'](0.4)[_0x7a5f73(0x183f)](!0x1)[_0x7a5f73(0x11c7)](_0x3979bd['BlendModes'][_0x7a5f73(0x1811)]), this[_0x7a5f73(0x1412)] = this['scene']['add']['sprite'](0x0, 0x0, 'vfx', 'sPFX_ring_64.png')['setAlpha'](0x1)['setVisible'](!0x1)['setBlendMode'](_0x3979bd['BlendModes'][_0x7a5f73(0x1811)]);
                    } ['onEmitcustomTint'](_0x5b1978, _0xbaa88a, _0x1663dc) {
                        const _0x1b4457 = _0x3275c6;
                        return Phaser[_0x1b4457(0x24f)][_0x1b4457(0x82a)][_0x1b4457(0x198c)]([0xff8888, 0xff88ff, 0xff88ff, 0xffff88]);
                    } ['OnTeleportOnCull']() {} ['setDepthPlease'](_0x58d40b) {
                        const _0x2ef816 = _0x3275c6;
                        this[_0x2ef816(0xb4a)](_0x58d40b), this['GroundFx']['setDepth'](_0x58d40b), this['particlesManager'][_0x2ef816(0xb4a)](_0x58d40b);
                    } ['OnRecycle']() {
                        const _0x4bfd77 = _0x3275c6;
                        this[_0x4bfd77(0x111e)](!0x0), this[_0x4bfd77(0x8a2)](this[_0x4bfd77(0x161a)]), this[_0x4bfd77(0x1412)]['x'] = this['x'], this[_0x4bfd77(0x1412)]['y'] = this['y'], this['ringSPrite']['setVisible'](!0x0)['setScale'](0x4), this[_0x4bfd77(0x6d2)][_0x4bfd77(0x12a1)]['add']({
                            'targets': this[_0x4bfd77(0x1412)],
                            'scale': 0x0,
                            'duration': 0x78,
                            'onComplete': () => {
                                const _0x207925 = _0x4bfd77;
                                this[_0x207925(0x1412)]['setVisible'](!0x1), this[_0x207925(0x69d)]();
                            }
                        });
                    } ['Explode']() {
                        const _0x318730 = _0x3275c6;
                        this['circleArea']['x'] = this['x'], this[_0x318730(0x1732)]['y'] = this['y'], this[_0x318730(0x1732)][_0x318730(0x161a)] = this[_0x318730(0x161a)], this[_0x318730(0x2e9)] = !0x1, this[_0x318730(0xc05)]['x'] = this['x'], this['well']['y'] = this['y'] - 0x14, this[_0x318730(0xb8c)][_0x318730(0x726)](this['x'], this['y']), this['pfxEmitter'][_0x318730(0x1aa2)](), this[_0x318730(0xb0d)][_0x318730(0x726)](this['x'], this['y']), this['pfxEmitter2'][_0x318730(0x1aa2)](), _0x119695['default']['Core'][_0x318730(0x14d8)]['FlashingVFXEnabled'] && (this['GroundFx'][_0x318730(0x726)](this['x'], this['y'])[_0x318730(0x183f)](!0x0)[_0x318730(0x161a)] = 0x1), this['despawnTimer'] && (this[_0x318730(0x1581)]['stop'](), this['despawnTimer'] = null), this[_0x318730(0x1581)] = this[_0x318730(0x6d2)]['tweens'][_0x318730(0x18bd)]({
                            'targets': this['GroundFx'],
                            'radius': this['radius'],
                            'duration': 0x78,
                            'onComplete': () => {
                                const _0x1fa3a5 = _0x318730;
                                this[_0x1fa3a5(0x14fb)]();
                            }
                        }), _0x119695[_0x318730(0xd2c)]['Sound'][_0x318730(0x7f6)](_0x214632[_0x318730(0xd2c)]['Explosion'], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math['random']() - 0.5)
                        }, 0x96, 0x3);
                    } ['DeSpawn']() {
                        const _0x2de45c = _0x3275c6;
                        this['setActive'](!0x1), this['pfxEmitter'][_0x2de45c(0x1a34)](), this[_0x2de45c(0xb0d)]['stop'](), this[_0x2de45c(0xc82)][_0x2de45c(0x4ed)](this), this[_0x2de45c(0x1581)] && (this[_0x2de45c(0x1581)]['stop'](), this['despawnTimer'] = null), this[_0x2de45c(0x919)][_0x2de45c(0x183f)](!0x1);
                    } ['Init'](_0x3c908c = -0x3e8, _0x304a8a = -0x3e8) {
                        const _0x51bc2b = _0x3275c6;
                        this[_0x51bc2b(0x726)](_0x3c908c, _0x304a8a), this['OnRecycle']();
                    } ['die']() {
                        this['visible'] = !0x1;
                    }
                }
                _0x427370['default'] = _0xd7c1ac;
            };
