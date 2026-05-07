// Module 0x123bc
// Args: _0x575628, _0x801501, _0x601ddb

export default (_0x575628, _0x801501, _0x601ddb) => {
                'use strict';
                const _0x23db6d = a0_0x6932;
                var _0x33c792 = this && this['__importDefault'] || function(_0x453903) {
                    const _0x3deaa8 = a0_0x6932;
                    return _0x453903 && _0x453903['__esModule'] ? _0x453903 : {
                        'default': _0x453903
                    };
                };
                Object['defineProperty'](_0x801501, '__esModule', {
                    'value': !0x0
                }), _0x801501['B_FireExplosion'] = void 0x0;
                const _0x1a2a2c = _0x33c792(_0x601ddb(0xa14d)),
                    _0x3313df = _0x33c792(_0x601ddb(0x5f07)),
                    _0x1ee1b7 = _0x601ddb(0x18304),
                    _0x59fc2c = _0x33c792(_0x601ddb(0x1fd7));
                class _0x22b26e extends _0x1a2a2c['default'] {
                    constructor(_0x6f4939, _0x3386ab, _0x39172f, _0x21c613, _0x49237d) {
                        const _0x1f1dab = _0x23db6d;
                        super(_0x6f4939, _0x3386ab, _0x39172f, 'vfx', 'WhiteDot.png', _0x21c613, _0x49237d), this[_0x1f1dab(0x1732)] = new Phaser['Geom'][(_0x1f1dab(0xf29))](), this['radius'] = 0x20, this[_0x1f1dab(0x9db)] = 0x10, this['pool'] = _0x6f4939, this[_0x1f1dab(0x1732)] = new Phaser[(_0x1f1dab(0x10d2))]['Circle'](), this[_0x1f1dab(0x183f)](!0x1), this['particlesManager'] = this['scene']['add']['particles']('vfx'), this[_0x1f1dab(0x806)] = new Phaser[(_0x1f1dab(0x10d2))][(_0x1f1dab(0xf29))](0x0, 0x0, this['exploRadius']), this[_0x1f1dab(0xb0d)] = this[_0x1f1dab(0x1761)][_0x1f1dab(0x14c0)]({
                            'frame': ['Smoke1.png', 'Smoke2.png'],
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
                        }), this[_0x1f1dab(0xb8c)] = this[_0x1f1dab(0x1761)]['createEmitter']({
                            'frame': ['HitSmoke1.png', 'HitSmoke2.png'],
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
                                'source': this['explosionCircle']
                            },
                            'on': !0x1
                        }), this[_0x1f1dab(0xc05)] = this[_0x1f1dab(0x1761)][_0x1f1dab(0x1386)]({
                            'x': this['x'],
                            'y': this['y'] - 0x14,
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        }), this['GroundFx'] = this[_0x1f1dab(0x6d2)][_0x1f1dab(0x18bd)]['circle'](0x0, 0x0, 0x1, 0xff0000)[_0x1f1dab(0xf8e)](0.5)[_0x1f1dab(0xdab)](0.4)['setVisible'](!0x1)['setBlendMode'](_0x1ee1b7['BlendModes'][_0x1f1dab(0x1811)]);
                    } ['OnTeleportOnCull']() {} ['setDepthPlease'](_0x3650f7) {
                        const _0x3e84f3 = _0x23db6d;
                        this[_0x3e84f3(0xb4a)](_0x3650f7), this[_0x3e84f3(0x919)][_0x3e84f3(0xb4a)](_0x3650f7), this[_0x3e84f3(0x1761)]['setDepth'](_0x3650f7);
                    } ['OnRecycle']() {
                        const _0x5e2ff4 = _0x23db6d;
                        var _0x2e4479;
                        this[_0x5e2ff4(0x8a2)](this[_0x5e2ff4(0x161a)] * this[_0x5e2ff4(0x4a1)]['PArea']), this[_0x5e2ff4(0xcf9)]['setCircle'](0x1, -0.5, -0.5), this['setScale'](0x1), this['circleArea']['x'] = this['x'], this['circleArea']['y'] = this['y'], this[_0x5e2ff4(0x1732)][_0x5e2ff4(0x161a)] = this['radius'], this['objectsHit'] = [], this[_0x5e2ff4(0x806)] = new Phaser[(_0x5e2ff4(0x10d2))][(_0x5e2ff4(0xf29))](0x0, 0x0, this[_0x5e2ff4(0x9db)] * this[_0x5e2ff4(0x4a1)]['PArea']), this['pfxEmitter'][_0x5e2ff4(0x8a2)]({
                            'start': 0.5 * this['weapon']['PArea'],
                            'end': 0x0
                        }), this['pfxEmitter2'][_0x5e2ff4(0x8a2)]({
                            'start': 0.5 * this[_0x5e2ff4(0x4a1)][_0x5e2ff4(0x5f5)],
                            'end': 0x0
                        }), this['pfxEmitter']['setEmitZone']({
                            'type': 'random',
                            'source': this['explosionCircle']
                        }), this[_0x5e2ff4(0xb0d)]['setEmitZone']({
                            'type': 'random',
                            'source': this['explosionCircle']
                        }), this[_0x5e2ff4(0xc05)]['x'] = this['x'], this[_0x5e2ff4(0xc05)]['y'] = this['y'] + 0x14, this[_0x5e2ff4(0xb8c)]['setPosition'](this['x'], this['y']), this['pfxEmitter'][_0x5e2ff4(0x1aa2)](), this[_0x5e2ff4(0xb0d)][_0x5e2ff4(0x726)](this['x'], this['y']), this[_0x5e2ff4(0xb0d)][_0x5e2ff4(0x1aa2)](), this[_0x5e2ff4(0x919)][_0x5e2ff4(0x726)](this['x'], this['y']), this[_0x5e2ff4(0x919)][_0x5e2ff4(0x161a)] = 0x1, this[_0x5e2ff4(0x919)][_0x5e2ff4(0xe71)] = 0.2, this[_0x5e2ff4(0x919)][_0x5e2ff4(0x183f)](_0x3313df[_0x5e2ff4(0xd2c)]['Core']['PlayerOptions'][_0x5e2ff4(0x49c)]), this[_0x5e2ff4(0x6b9)] && (this['despawnTween']['stop'](), this[_0x5e2ff4(0x6b9)] = null), null === (_0x2e4479 = this['despawnTween']) || void 0x0 === _0x2e4479 || _0x2e4479[_0x5e2ff4(0x1a34)](), this['despawnTween'] = this[_0x5e2ff4(0x6d2)][_0x5e2ff4(0x12a1)][_0x5e2ff4(0x18bd)]({
                            'targets': [this[_0x5e2ff4(0x919)], this],
                            'scale': this[_0x5e2ff4(0x161a)] * this[_0x5e2ff4(0x4a1)]['PArea'],
                            'alpha': 0x0,
                            'duration': 0x78,
                            'onComplete': () => {
                                const _0x248b82 = _0x5e2ff4;
                                this[_0x248b82(0x14fb)]();
                            },
                            'onStart': () => {
                                const _0x1e2080 = _0x5e2ff4;
                                this['setActive'](!0x0), this['body'][_0x1e2080(0x543)] = !0x0;
                            }
                        }), _0x3313df[_0x5e2ff4(0xd2c)][_0x5e2ff4(0x1267)][_0x5e2ff4(0x7f6)](_0x59fc2c[_0x5e2ff4(0xd2c)][_0x5e2ff4(0x3b6)], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math[_0x5e2ff4(0x9ad)]() - 0.5)
                        }, 0x96, 0x3);
                    } ['DeSpawn']() {
                        const _0x306bab = _0x23db6d;
                        this[_0x306bab(0xcf9)]['enable'] = !0x1, this[_0x306bab(0x111e)](!0x1), this[_0x306bab(0xb8c)]['stop'](), this['pfxEmitter2'][_0x306bab(0x1a34)](), this['pool'][_0x306bab(0x4ed)](this), this[_0x306bab(0x6b9)] && (this[_0x306bab(0x6b9)][_0x306bab(0x1a34)](), this[_0x306bab(0x6b9)] = null), this['GroundFx']['setVisible'](!0x1);
                    }
                }
                _0x801501['B_FireExplosion'] = _0x22b26e, _0x801501['default'] = _0x22b26e;
            };
