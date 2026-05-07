// Module 0x25d9
// Args: _0x2e304a, _0x50e1b6, _0x39b990

export default (_0x2e304a, _0x50e1b6, _0x39b990) => {
                'use strict';
                const _0x2d83bd = a0_0x6932;
                var _0x74e07a = this && this['__importDefault'] || function(_0x25ffd4) {
                    return _0x25ffd4 && _0x25ffd4['__esModule'] ? _0x25ffd4 : {
                        'default': _0x25ffd4
                    };
                };
                Object['defineProperty'](_0x50e1b6, '__esModule', {
                    'value': !0x0
                });
                const _0x5dd883 = _0x74e07a(_0x39b990(0x5f07)),
                    _0x1ff73f = _0x39b990(0x18304),
                    _0x532704 = _0x74e07a(_0x39b990(0x1fd7));
                class _0x198cc2 extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0x66d951, _0xd56552, _0x272c5a) {
                        const _0x528c61 = _0x2d83bd;
                        super(_0x66d951[_0x528c61(0x6d2)], _0xd56552, _0x272c5a, 'vfx', 'WhiteDot.png'), this['isCullable'] = !0x1, this['isTeleportOnCull'] = !0x1, this[_0x528c61(0x5ef)] = 0x12c, this['radius'] = 0x1e, this[_0x528c61(0x1133)] = 0x0, this[_0x528c61(0x1732)] = new Phaser[(_0x528c61(0x10d2))]['Circle'](), this['pool'] = _0x66d951, this[_0x528c61(0x1732)] = new Phaser['Geom'][(_0x528c61(0xf29))](), this['setVisible'](!0x1), this['particlesManager'] = this[_0x528c61(0x6d2)][_0x528c61(0x18bd)][_0x528c61(0x1791)]('vfx'), this['pfxEmitter2'] = this[_0x528c61(0x1761)]['createEmitter']({
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
                        }), this[_0x528c61(0xb8c)] = this['particlesManager']['createEmitter']({
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
                            'quantity': 0x2,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'blendMode': 'ADD',
                            'on': !0x1
                        }), this[_0x528c61(0xc05)] = this[_0x528c61(0x1761)]['createGravityWell']({
                            'x': this['x'],
                            'y': this['y'] - 0x14,
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        }), this['GroundFx'] = this['scene'][_0x528c61(0x18bd)]['circle'](0x0, 0x0, 0x1, 0xff)['setOrigin'](0.5)[_0x528c61(0xdab)](0x1)['setVisible'](!0x1)['setBlendMode'](_0x1ff73f[_0x528c61(0x10fc)][_0x528c61(0x1811)]);
                    } ['OnTeleportOnCull']() {} ['setDepthPlease'](_0x578f6b) {
                        const _0x5f092b = _0x2d83bd;
                        this[_0x5f092b(0xb4a)](_0x578f6b), this[_0x5f092b(0x919)][_0x5f092b(0xb4a)](_0x578f6b), this[_0x5f092b(0x1761)][_0x5f092b(0xb4a)](_0x578f6b);
                    } ['OnRecycle']() {
                        const _0x11b2a4 = _0x2d83bd;
                        this[_0x11b2a4(0x111e)](!0x0), this['setScale'](this[_0x11b2a4(0x161a)]), this['circleArea']['x'] = this['x'], this[_0x11b2a4(0x1732)]['y'] = this['y'], this[_0x11b2a4(0x1732)][_0x11b2a4(0x161a)] = this[_0x11b2a4(0x161a)], this[_0x11b2a4(0x2e9)] = !0x1, this[_0x11b2a4(0x1581)] && (this[_0x11b2a4(0x1581)]['stop'](), this['despawnTimer'] = null), this['despawnTimer'] = this[_0x11b2a4(0x6d2)][_0x11b2a4(0x12a1)][_0x11b2a4(0x18bd)]({
                            'targets': this['GroundFx'],
                            'radius': this['radius'],
                            'duration': 0x78,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x2f77b8 = _0x2d83bd;
                        this['setActive'](!0x1), this['pfxEmitter']['stop'](), this['pfxEmitter2'][_0x2f77b8(0x1a34)](), this['pool']['Return'](this), this[_0x2f77b8(0x1581)] && (this['despawnTimer']['stop'](), this[_0x2f77b8(0x1581)] = null), this['GroundFx'][_0x2f77b8(0x183f)](!0x1);
                    } ['Init'](_0x197978 = -0x3e8, _0x4ca8a7 = -0x3e8) {
                        const _0x520754 = _0x2d83bd;
                        this['setPosition'](_0x197978, _0x4ca8a7), this[_0x520754(0x5ce)]();
                    } ['die']() {
                        const _0x427fff = _0x2d83bd;
                        this[_0x427fff(0x35a)] = !0x1;
                    } ['Update'](_0x12eb82 = 0x0) {
                        const _0x1b7afd = _0x2d83bd;
                        this['hasHit'] || this[_0x1b7afd(0x1732)][_0x1b7afd(0x1780)](_0x5dd883[_0x1b7afd(0xd2c)][_0x1b7afd(0x1043)]['Player']['x'], _0x5dd883[_0x1b7afd(0xd2c)]['Core'][_0x1b7afd(0x10f6)]['y']) && (this['hasHit'] = !0x0, _0x5dd883[_0x1b7afd(0xd2c)]['Core'][_0x1b7afd(0x10f6)]['slowTime'] += this['duration'], _0x5dd883['default'][_0x1b7afd(0x1043)]['Player'][_0x1b7afd(0x404)](0xff, 0x1e, !0x1), this['OnHit']());
                    } ['OnHit']() {
                        const _0x5416af = _0x2d83bd;
                        this[_0x5416af(0xc05)]['x'] = this['x'], this[_0x5416af(0xc05)]['y'] = this['y'] - 0x14, this[_0x5416af(0xb8c)][_0x5416af(0x726)](this['x'], this['y']), this['pfxEmitter'][_0x5416af(0x1aa2)](), this[_0x5416af(0xb0d)][_0x5416af(0x726)](this['x'], this['y']), this['pfxEmitter2']['start'](), _0x5dd883['default']['Core'][_0x5416af(0x14d8)][_0x5416af(0x49c)] && (this['GroundFx'][_0x5416af(0x726)](this['x'], this['y'])['setVisible'](!0x0)['radius'] = 0x1), this[_0x5416af(0x1581)] && (this['despawnTimer'][_0x5416af(0x1a34)](), this['despawnTimer'] = null), this[_0x5416af(0x1581)] = this[_0x5416af(0x6d2)]['tweens'][_0x5416af(0x18bd)]({
                            'targets': this[_0x5416af(0x919)],
                            'radius': this['radius'],
                            'duration': 0x78,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        }), _0x5dd883[_0x5416af(0xd2c)][_0x5416af(0x1267)]['PlaySound'](_0x532704[_0x5416af(0xd2c)][_0x5416af(0x15f1)], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math[_0x5416af(0x9ad)]() - 0.5)
                        }, 0x96, 0x3);
                    }
                }
                _0x50e1b6['default'] = _0x198cc2;
            };
