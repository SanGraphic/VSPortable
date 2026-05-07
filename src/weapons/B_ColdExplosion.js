// Module 0x5bf4
// Args: _0xa979ef, _0x2d8f41, _0x350fca

export default (_0xa979ef, _0x2d8f41, _0x350fca) => {
                'use strict';
                const _0x46a8db = a0_0x6932;
                var _0x233ebf = this && this['__importDefault'] || function(_0x19d288) {
                    return _0x19d288 && _0x19d288['__esModule'] ? _0x19d288 : {
                        'default': _0x19d288
                    };
                };
                Object['defineProperty'](_0x2d8f41, '__esModule', {
                    'value': !0x0
                }), _0x2d8f41['B_ColdExplosion'] = void 0x0;
                const _0xb2ee33 = _0x233ebf(_0x350fca(0xa14d)),
                    _0x6ad2c0 = _0x233ebf(_0x350fca(0x5f07)),
                    _0x24923d = _0x350fca(0x18304),
                    _0x468dc4 = _0x233ebf(_0x350fca(0x1fd7));
                class _0x2c762d extends _0xb2ee33['default'] {
                    constructor(_0x1c6659, _0x3593df, _0x59f3eb, _0x3f1cdd, _0x181fd7) {
                        const _0x5a2120 = _0x46a8db;
                        super(_0x1c6659, _0x3593df, _0x59f3eb, 'vfx', 'WhiteDot.png', _0x3f1cdd, _0x181fd7), this['circleArea'] = new Phaser[(_0x5a2120(0x10d2))]['Circle'](), this[_0x5a2120(0x161a)] = 0x20, this[_0x5a2120(0x9db)] = 0x10, this['pool'] = _0x1c6659, this[_0x5a2120(0x1732)] = new Phaser[(_0x5a2120(0x10d2))]['Circle'](), this['setVisible'](!0x1), this['particlesManager'] = this[_0x5a2120(0x6d2)][_0x5a2120(0x18bd)]['particles']('vfx'), this['explosionCircle'] = new Phaser[(_0x5a2120(0x10d2))]['Circle'](0x0, 0x0, this[_0x5a2120(0x9db)]), this[_0x5a2120(0xb0d)] = this[_0x5a2120(0x1761)]['createEmitter']({
                            'frame': ['feedback-5.png', 'feedback-4.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x1f4,
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
                            'quantity': 0x1,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'alpha': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this['explosionCircle']
                            },
                            'on': !0x1
                        }), this[_0x5a2120(0xb8c)] = this[_0x5a2120(0x1761)][_0x5a2120(0x14c0)]({
                            'frame': ['feedback-5.png', 'feedback-4.png'],
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
                            'frequency': 0x1,
                            'blendMode': 'ADD',
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x5a2120(0x806)]
                            },
                            'on': !0x1
                        }), this['well'] = this['particlesManager']['createGravityWell']({
                            'x': this['x'],
                            'y': this['y'] - 0x14,
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        }), this[_0x5a2120(0x919)] = this[_0x5a2120(0x6d2)]['add']['circle'](0x0, 0x0, 0x1, 0xff)['setOrigin'](0.5)['setAlpha'](0.4)[_0x5a2120(0x183f)](!0x1)[_0x5a2120(0x11c7)](_0x24923d[_0x5a2120(0x10fc)][_0x5a2120(0x1811)]);
                    } ['OnTeleportOnCull']() {} ['setDepthPlease'](_0x40de37) {
                        const _0x5e800e = _0x46a8db;
                        this['setDepth'](_0x40de37), this['GroundFx']['setDepth'](_0x40de37), this['particlesManager'][_0x5e800e(0xb4a)](_0x40de37);
                    } ['OnRecycle']() {
                        const _0x37dfe8 = _0x46a8db;
                        var _0x449914;
                        this[_0x37dfe8(0x111e)](!0x0), this[_0x37dfe8(0x8a2)](this['radius'] * this[_0x37dfe8(0x4a1)]['PArea']), this[_0x37dfe8(0xcf9)]['setCircle'](0x1, -0.5, -0.5), this[_0x37dfe8(0x8a2)](0x1), this[_0x37dfe8(0x1732)]['x'] = this['x'], this[_0x37dfe8(0x1732)]['y'] = this['y'], this[_0x37dfe8(0x1732)]['radius'] = this[_0x37dfe8(0x161a)], this[_0x37dfe8(0x990)] = [], this[_0x37dfe8(0x806)] = new Phaser['Geom'][(_0x37dfe8(0xf29))](0x0, 0x0, this[_0x37dfe8(0x9db)] * this[_0x37dfe8(0x4a1)][_0x37dfe8(0x5f5)]), this[_0x37dfe8(0xb8c)][_0x37dfe8(0x8a2)]({
                            'start': 0.5 * this[_0x37dfe8(0x4a1)]['PArea'],
                            'end': 0x0
                        }), this['pfxEmitter2']['setScale']({
                            'start': 0.5 * this['weapon'][_0x37dfe8(0x5f5)],
                            'end': 0x0
                        }), this[_0x37dfe8(0xb8c)]['setEmitZone']({
                            'type': 'random',
                            'source': this['explosionCircle']
                        }), this[_0x37dfe8(0xb0d)][_0x37dfe8(0x152)]({
                            'type': 'random',
                            'source': this['explosionCircle']
                        }), this[_0x37dfe8(0xc05)]['x'] = this['x'], this[_0x37dfe8(0xc05)]['y'] = this['y'] + 0x14, this['pfxEmitter']['setPosition'](this['x'], this['y']), this[_0x37dfe8(0xb8c)]['start'](), this[_0x37dfe8(0xb0d)][_0x37dfe8(0x726)](this['x'], this['y']), this[_0x37dfe8(0xb0d)]['start'](), this[_0x37dfe8(0x919)][_0x37dfe8(0x726)](this['x'], this['y']), this[_0x37dfe8(0x919)]['radius'] = 0x1, this[_0x37dfe8(0x919)]['alpha'] = 0.2, this[_0x37dfe8(0x919)]['setVisible'](_0x6ad2c0['default'][_0x37dfe8(0x1043)][_0x37dfe8(0x14d8)]['FlashingVFXEnabled']), this[_0x37dfe8(0x6b9)] && (this[_0x37dfe8(0x6b9)][_0x37dfe8(0x1a34)](), this['despawnTween'] = null), null === (_0x449914 = this['despawnTween']) || void 0x0 === _0x449914 || _0x449914[_0x37dfe8(0x1a34)](), this['despawnTween'] = this[_0x37dfe8(0x6d2)][_0x37dfe8(0x12a1)][_0x37dfe8(0x18bd)]({
                            'targets': [this['GroundFx'], this],
                            'scale': this[_0x37dfe8(0x161a)] * this[_0x37dfe8(0x4a1)][_0x37dfe8(0x5f5)],
                            'alpha': 0x0,
                            'duration': 0x78,
                            'onComplete': () => {
                                const _0x2003e5 = _0x37dfe8;
                                this[_0x2003e5(0x14fb)]();
                            }
                        }), _0x6ad2c0[_0x37dfe8(0xd2c)][_0x37dfe8(0x1267)][_0x37dfe8(0x7f6)](_0x468dc4[_0x37dfe8(0xd2c)][_0x37dfe8(0x3b6)], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math[_0x37dfe8(0x9ad)]() - 0.5)
                        }, 0x96, 0x3);
                    } ['DeSpawn']() {
                        const _0x232beb = _0x46a8db;
                        this['setActive'](!0x1), this['pfxEmitter']['stop'](), this[_0x232beb(0xb0d)]['stop'](), this[_0x232beb(0xc82)][_0x232beb(0x4ed)](this), this[_0x232beb(0x6b9)] && (this['despawnTween'][_0x232beb(0x1a34)](), this[_0x232beb(0x6b9)] = null), this[_0x232beb(0x919)]['setVisible'](!0x1);
                    }
                }
                _0x2d8f41['B_ColdExplosion'] = _0x2c762d, _0x2d8f41['default'] = _0x2c762d;
            };
