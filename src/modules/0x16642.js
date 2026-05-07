// Module 0x16642
// Args: _0x1ced49, _0x4811f8, _0x1d3372

export default (_0x1ced49, _0x4811f8, _0x1d3372) => {
                'use strict';
                const _0x2b13da = a0_0x6932;
                var _0x4ab36f = this && this['__importDefault'] || function(_0x399bac) {
                    const _0x243ae4 = a0_0x6932;
                    return _0x399bac && _0x399bac['__esModule'] ? _0x399bac : {
                        'default': _0x399bac
                    };
                };
                Object['defineProperty'](_0x4811f8, '__esModule', {
                    'value': !0x0
                });
                const _0x26b2e4 = _0x4ab36f(_0x1d3372(0x5f07)),
                    _0x59362b = _0x1d3372(0x18304),
                    _0xb49f12 = _0x4ab36f(_0x1d3372(0x1fd7));
                class _0x25cabf extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0xa66892, _0x426035, _0x42a7fb) {
                        const _0x48082d = _0x2b13da;
                        super(_0xa66892[_0x48082d(0x6d2)], _0x426035, _0x42a7fb, 'vfx', 'WhiteDot.png'), this[_0x48082d(0x177d)] = !0x1, this[_0x48082d(0x187a)] = !0x1, this['radius'] = 0x1, this[_0x48082d(0x1133)] = 0x1, this[_0x48082d(0x1732)] = new Phaser[(_0x48082d(0x10d2))]['Circle'](), this[_0x48082d(0xc82)] = _0xa66892, this[_0x48082d(0x1732)] = new Phaser[(_0x48082d(0x10d2))][(_0x48082d(0xf29))](), this[_0x48082d(0x183f)](!0x1), this['particlesManager'] = this[_0x48082d(0x6d2)]['add'][_0x48082d(0x1791)]('vfx'), this[_0x48082d(0xb0d)] = this[_0x48082d(0x1761)]['createEmitter']({
                            'frame': ['Smoke1.png', 'Smoke2.png'],
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
                            'on': !0x1
                        }), this['pfxEmitter'] = this[_0x48082d(0x1761)][_0x48082d(0x14c0)]({
                            'frame': ['HitSmoke1.png', 'HitSmoke2.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
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
                            'quantity': 0x4,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x2,
                            'blendMode': 'ADD',
                            'on': !0x1
                        }), this[_0x48082d(0xc05)] = this[_0x48082d(0x1761)][_0x48082d(0x1386)]({
                            'x': this['x'],
                            'y': this['y'] - 0x14,
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        }), this[_0x48082d(0x919)] = this[_0x48082d(0x6d2)][_0x48082d(0x18bd)][_0x48082d(0x4f6)](0x0, 0x0, 0x1, 0xff0000)[_0x48082d(0xf8e)](0.5)['setAlpha'](0.4)['setVisible'](!0x1)['setBlendMode'](_0x59362b['BlendModes'][_0x48082d(0x1811)]);
                    } ['OnTeleportOnCull']() {} ['setDepthPlease'](_0x58ac5b) {
                        const _0x191b4e = _0x2b13da;
                        this[_0x191b4e(0xb4a)](_0x58ac5b), this[_0x191b4e(0x919)]['setDepth'](_0x58ac5b), this[_0x191b4e(0x1761)][_0x191b4e(0xb4a)](_0x58ac5b);
                    } ['OnRecycle']() {
                        const _0xe31e58 = _0x2b13da;
                        this['setActive'](!0x0), this[_0xe31e58(0x8a2)](this[_0xe31e58(0x161a)]), this['circleArea']['x'] = this['x'], this['circleArea']['y'] = this['y'], this['circleArea'][_0xe31e58(0x161a)] = this[_0xe31e58(0x161a)], this['hasHit'] = !0x1, this[_0xe31e58(0xc05)]['x'] = this['x'], this['well']['y'] = this['y'] - 0x14, this[_0xe31e58(0xb8c)][_0xe31e58(0x726)](this['x'], this['y']), this[_0xe31e58(0xb8c)][_0xe31e58(0x1aa2)](), this[_0xe31e58(0xb0d)][_0xe31e58(0x726)](this['x'], this['y']), this['pfxEmitter2'][_0xe31e58(0x1aa2)](), _0x26b2e4[_0xe31e58(0xd2c)]['Core'][_0xe31e58(0x14d8)]['FlashingVFXEnabled'] && (this[_0xe31e58(0x919)][_0xe31e58(0x726)](this['x'], this['y'])[_0xe31e58(0x183f)](!0x0)['radius'] = 0x1), this[_0xe31e58(0x1581)] && (this['despawnTimer'][_0xe31e58(0x1a34)](), this['despawnTimer'] = null), this['despawnTimer'] = this['scene'][_0xe31e58(0x12a1)][_0xe31e58(0x18bd)]({
                            'targets': this['GroundFx'],
                            'radius': this[_0xe31e58(0x161a)],
                            'duration': 0x78,
                            'onComplete': () => {
                                const _0x571773 = _0xe31e58;
                                this[_0x571773(0x14fb)]();
                            }
                        }), _0x26b2e4[_0xe31e58(0xd2c)]['Sound'][_0xe31e58(0x7f6)](_0xb49f12['default']['Explosion'], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math[_0xe31e58(0x9ad)]() - 0.5)
                        }, 0x96, 0x3);
                    } ['DeSpawn']() {
                        const _0x1f39b9 = _0x2b13da;
                        this['setActive'](!0x1), this['pfxEmitter'][_0x1f39b9(0x1a34)](), this[_0x1f39b9(0xb0d)]['stop'](), this[_0x1f39b9(0xc82)]['Return'](this), this[_0x1f39b9(0x1581)] && (this[_0x1f39b9(0x1581)][_0x1f39b9(0x1a34)](), this['despawnTimer'] = null), this[_0x1f39b9(0x919)]['setVisible'](!0x1);
                    } ['Init'](_0x1530f0 = -0x3e8, _0xd96bf7 = -0x3e8) {
                        this['setPosition'](_0x1530f0, _0xd96bf7), this['OnRecycle']();
                    } ['die']() {
                        this['visible'] = !0x1;
                    } ['Update'](_0x21a49b = 0x0) {
                        const _0x47043f = _0x2b13da;
                        this['hasHit'] || this[_0x47043f(0x1732)][_0x47043f(0x1780)](_0x26b2e4[_0x47043f(0xd2c)][_0x47043f(0x1043)][_0x47043f(0x10f6)]['x'], _0x26b2e4['default'][_0x47043f(0x1043)][_0x47043f(0x10f6)]['y']) && (this['hasHit'] = !0x0, _0x26b2e4['default'][_0x47043f(0x1043)]['Player'][_0x47043f(0x1112)](this['damage']));
                    }
                }
                _0x4811f8['default'] = _0x25cabf;
            };
