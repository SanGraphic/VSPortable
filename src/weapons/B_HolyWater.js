// Module 0x1220c
// Args: _0x5d09ec, _0x1fdf0b, _0x3ddada

export default (_0x5d09ec, _0x1fdf0b, _0x3ddada) => {
                'use strict';
                const _0x20f67e = a0_0x6932;
                var _0x16d27a = this && this['__importDefault'] || function(_0x3c51f0) {
                    return _0x3c51f0 && _0x3c51f0['__esModule'] ? _0x3c51f0 : {
                        'default': _0x3c51f0
                    };
                };
                Object['defineProperty'](_0x1fdf0b, '__esModule', {
                    'value': !0x0
                }), _0x1fdf0b['B_HolyWater'] = void 0x0;
                const _0x4cb388 = _0x16d27a(_0x3ddada(0xa14d)),
                    _0x25c254 = _0x3ddada(0x18304),
                    _0x4387b9 = _0x16d27a(_0x3ddada(0x5f07)),
                    _0x18ccf1 = _0x16d27a(_0x3ddada(0x1fd7)),
                    _0x582202 = _0x16d27a(_0x3ddada(0x5103));
                class _0x51becd extends _0x4cb388['default'] {
                    constructor(_0x1bc65b, _0x4b1345, _0x411a09, _0xe856a1, _0x4bef59) {
                        const _0x32b5bd = _0x20f67e;
                        super(_0x1bc65b, _0x4b1345, _0x411a09, 'items', 'HolyWater.png', _0xe856a1, _0x4bef59), this['radius'] = 0x10, this['exploRadius'] = 0x8, this[_0x32b5bd(0x186d)] = !0x1, this['_currentDirection'] = new Phaser[(_0x32b5bd(0x24f))][(_0x32b5bd(0x1551))](0x0, 0x0), this['_speed'] = 0x2, this['explosionCircle'] = new Phaser['Geom'][(_0x32b5bd(0xf29))](0x0, 0x0, this[_0x32b5bd(0x9db)]), this[_0x32b5bd(0x919)] = this[_0x32b5bd(0x6d2)][_0x32b5bd(0x18bd)][_0x32b5bd(0x4f6)](0x0, 0x0, this['radius'], 0xff)['setOrigin'](0.5)['setAlpha'](0.2)[_0x32b5bd(0x183f)](!0x1)['setBlendMode'](_0x25c254['BlendModes'][_0x32b5bd(0x1811)]), this[_0x32b5bd(0x1150)] = this[_0x32b5bd(0x6d2)][_0x32b5bd(0x18bd)][_0x32b5bd(0x1791)]('vfx'), this['PfxEmitter1'] = this[_0x32b5bd(0x1150)]['createEmitter']({
                            'frame': ['ProjectileFlameHoly.png', 'ProjectileFlameBlue.png'],
                            'speed': {
                                'min': 0x1,
                                'max': 0x1
                            },
                            'quantity': 0x1,
                            'rotate': {
                                'min': 0x5a,
                                'max': 0x5a
                            },
                            'lifespan': 0x258,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': _0x582202[_0x32b5bd(0xd2c)][_0x32b5bd(0x15db)] / 0x4,
                                'end': _0x582202['default']['PixelScale']
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x32b5bd(0x806)]
                            },
                            'on': !0x1
                        }), this['PfxEmitter2'] = this[_0x32b5bd(0x1150)][_0x32b5bd(0x14c0)]({
                            'frame': ['ProjectileFlameHoly.png', 'ProjectileFlameBlue.png'],
                            'speed': {
                                'min': 0x1,
                                'max': 0x1
                            },
                            'quantity': 0x1,
                            'rotate': {
                                'min': 0x5a,
                                'max': 0x5a
                            },
                            'lifespan': 0x258,
                            'alpha': {
                                'start': 0.2,
                                'end': 0x0
                            },
                            'scale': {
                                'start': _0x582202['default'][_0x32b5bd(0x15db)] / 0x4,
                                'end': _0x582202['default'][_0x32b5bd(0x15db)] / 0x2
                            },
                            'blendMode': _0x25c254[_0x32b5bd(0x10fc)][_0x32b5bd(0x1811)],
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x32b5bd(0x806)]
                            },
                            'on': !0x1
                        }), this['PfxEmitterExplosionManager'] = this['scene'][_0x32b5bd(0x18bd)]['particles']('vfx'), this['PfxEmitterExplosionManager']['createEmitter']({
                            'frame': ['HitCloud2.png'],
                            'quantity': 0x1,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'lifespan': 0x96,
                            'alpha': {
                                'start': 0x1,
                                'end': 0.5
                            },
                            'scale': {
                                'start': _0x582202['default'][_0x32b5bd(0x15db)] / 0x4,
                                'end': 0x2 * _0x582202[_0x32b5bd(0xd2c)][_0x32b5bd(0x15db)]
                            },
                            'on': !0x1
                        }), this['PfxEmitterExplosionManager'][_0x32b5bd(0x14c0)]({
                            'frame': ['HitCloud1.png'],
                            'quantity': 0x3,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'lifespan': 0x96,
                            'alpha': {
                                'start': 0x1,
                                'end': 0.5
                            },
                            'scale': {
                                'start': _0x582202[_0x32b5bd(0xd2c)]['PixelScale'] / 0x4,
                                'end': _0x582202[_0x32b5bd(0xd2c)][_0x32b5bd(0x15db)]
                            },
                            'on': !0x1
                        }), this[_0x32b5bd(0x6bd)] = this[_0x32b5bd(0x6d2)][_0x32b5bd(0x12a1)][_0x32b5bd(0x18bd)]({
                            'targets': this,
                            'angle': 0x168,
                            'duration': 0x258,
                            'ease': 'Linear',
                            'repeat': -0x1
                        });
                    } ['OnRecycle']() {
                        const _0x583250 = _0x20f67e;
                        super[_0x583250(0x5ce)](), this[_0x583250(0xb1f)] = 0x2, this[_0x583250(0xcf9)][_0x583250(0xdf6)](this[_0x583250(0x161a)], -0.5 * this['radius'], -0.5 * this['radius']), this['setScale'](_0x582202['default'][_0x583250(0x15db)]), this[_0x583250(0x183f)](!0x0), this['isBroken'] = !0x1, this['body'][_0x583250(0x543)] = !0x1, this[_0x583250(0x177d)] = !0x1, _0x4387b9['default'][_0x583250(0x1043)]['scene'][_0x583250(0x915)][_0x583250(0x17fb)](this['HitboxTimer']), _0x4387b9['default'][_0x583250(0x1043)]['scene']['time'][_0x583250(0x17fb)](this[_0x583250(0x12a3)]), this[_0x583250(0x806)] = new Phaser[(_0x583250(0x10d2))][(_0x583250(0xf29))](0x0, 0x0, this[_0x583250(0x9db)] * this[_0x583250(0x4a1)][_0x583250(0x5f5)] * 0x3), this['PfxEmitter1']['setEmitZone']({
                            'type': 'random',
                            'source': this[_0x583250(0x806)]
                        }), this[_0x583250(0xf12)]['setQuantity'](0x1 + Math['floor'](this['weapon'][_0x583250(0x5e3)] / 0x3)), this[_0x583250(0x15ef)]['setEmitZone']({
                            'type': 'random',
                            'source': this[_0x583250(0x806)]
                        }), this['PfxEmitter2'][_0x583250(0x1070)](0x1 + Math[_0x583250(0xe07)](this[_0x583250(0x4a1)][_0x583250(0x5e3)] / 0x3));
                        var _0x26e2ad = new Phaser['Math']['Vector2'](_0x4387b9[_0x583250(0xd2c)][_0x583250(0x1043)]['Player']['x'], _0x4387b9[_0x583250(0xd2c)]['Core'][_0x583250(0x10f6)]['y']);
                        this['x'] = _0x26e2ad['x'] + (Math['random']() - 0.5) * this[_0x583250(0x6d2)][_0x583250(0x12f9)][_0x583250(0x173c)] * 0.5, this['y'] = _0x26e2ad['y'] - 0.6 * this['scene'][_0x583250(0x12f9)]['height'];
                        const _0x5d7403 = this[_0x583250(0x4a1)],
                            _0x881e6d = _0x5d7403['GetAngle'](),
                            _0x2bffa1 = _0x5d7403[_0x583250(0x16b6)]();
                        if (_0x26e2ad['x'] += Math['cos'](_0x881e6d) * _0x2bffa1, _0x26e2ad['y'] += Math[_0x583250(0xc80)](_0x881e6d) * _0x2bffa1, this[_0x583250(0x4a1)]['PAmount'] < 0x4 && 0x0 == this[_0x583250(0x19c4)]) {
                            var _0x14de5b = this[_0x583250(0x6d2)]['physics']['closest'](_0x4387b9['default'][_0x583250(0x1043)][_0x583250(0x10f6)], _0x4387b9[_0x583250(0xd2c)]['Core'][_0x583250(0x1a91)]);
                            _0x14de5b && (_0x26e2ad['x'] = _0x14de5b['x'], _0x26e2ad['y'] = _0x14de5b['y']);
                        }
                        this[_0x583250(0xb4a)](this['y'] - _0x4387b9['default'][_0x583250(0x1043)][_0x583250(0x10f6)]['y'] + this['scene'][_0x583250(0x12f9)][_0x583250(0x140e)]), this['PositionTween'] && this['scene']['tweens']['remove'](this['PositionTween']), this['PositionTween'] = this[_0x583250(0x6d2)][_0x583250(0x12a1)][_0x583250(0x18bd)]({
                            'targets': this,
                            'x': _0x26e2ad['x'],
                            'y': _0x26e2ad['y'],
                            'duration': 0x2ee,
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x41b114 = _0x583250;
                                this[_0x41b114(0xca7)]();
                            }
                        });
                    } ['Break']() {
                        const _0x577358 = _0x20f67e;
                        this[_0x577358(0x186d)] || (this['isBroken'] = !0x0, this[_0x577358(0x183f)](!0x1), this['setVelocity'](0x0, 0x0), this[_0x577358(0x990)] = [], this['body'][_0x577358(0x543)] = !0x0, this['GroundFx'][_0x577358(0x726)](this['x'], this['y'])[_0x577358(0x183f)](!0x0)[_0x577358(0x8a2)](_0x582202['default'][_0x577358(0x15db)] * this[_0x577358(0x4a1)]['PArea'])[_0x577358(0xf8e)](0.5), this[_0x577358(0x8a2)](_0x582202[_0x577358(0xd2c)]['PixelScale'] * this['weapon'][_0x577358(0x5f5)]), this['HitboxTimer'] = _0x4387b9[_0x577358(0xd2c)][_0x577358(0x1043)]['scene'][_0x577358(0x915)][_0x577358(0x12b8)]({
                            'delay': this['weapon'][_0x577358(0xcd5)],
                            'loop': !0x0,
                            'callback': () => {
                                this['objectsHit'] = [];
                            }
                        }), this['HitboxTimer'][_0x577358(0x226)] = 'HW Hitbox', this[_0x577358(0x12a3)] = _0x4387b9['default'][_0x577358(0x1043)][_0x577358(0x6d2)]['time'][_0x577358(0x12b8)]({
                            'delay': this['weapon'][_0x577358(0x16c3)],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x5535f5 = _0x577358;
                                this['GroundFx']['setVisible'](!0x1), _0x4387b9[_0x5535f5(0xd2c)]['Core'][_0x5535f5(0x6d2)][_0x5535f5(0x915)]['removeEvent'](this['HitboxTimer']), _0x4387b9[_0x5535f5(0xd2c)][_0x5535f5(0x1043)][_0x5535f5(0x6d2)]['time'][_0x5535f5(0x17fb)](this['ExpireTimer']), this[_0x5535f5(0x14fb)]();
                            }
                        }), this[_0x577358(0x12a3)][_0x577358(0x226)] = 'HW Expire', this['PfxEmitterExplosionManager'][_0x577358(0x108b)](this['x'], this['y']), this[_0x577358(0x1150)][_0x577358(0xb4a)](this['y'] - _0x4387b9['default']['Core'][_0x577358(0x10f6)]['y'] - 0.5 * this[_0x577358(0x6d2)][_0x577358(0x12f9)][_0x577358(0x140e)]), this[_0x577358(0x919)][_0x577358(0xb4a)](this['y'] - _0x4387b9[_0x577358(0xd2c)]['Core'][_0x577358(0x10f6)]['y'] - 0.5 * this[_0x577358(0x6d2)]['renderer']['height']), _0x4387b9['default'][_0x577358(0x1267)][_0x577358(0x7f6)](_0x18ccf1[_0x577358(0xd2c)][_0x577358(0x8d7)], {
                            'detune': -0xc8 - -0x32 * this['indexInWeapon'],
                            'volume': 0.35,
                            'rate': 0x2
                        }, 0xc8, 0xc));
                    } ['Update']() {
                        const _0x2233c7 = _0x20f67e;
                        this[_0x2233c7(0x186d)] && this[_0x2233c7(0x1150)]['emitParticleAt'](this['x'], this['y']);
                    } ['DeSpawn']() {
                        const _0x3acd27 = _0x20f67e;
                        this['isCullable'] = !0x0, _0x4387b9[_0x3acd27(0xd2c)]['Core'][_0x3acd27(0x6d2)][_0x3acd27(0x915)]['removeEvent'](this['HitboxTimer']), _0x4387b9['default']['Core'][_0x3acd27(0x6d2)]['time']['removeEvent'](this[_0x3acd27(0x12a3)]), this[_0x3acd27(0x919)][_0x3acd27(0x183f)](!0x1), super[_0x3acd27(0x14fb)]();
                    }
                }
                _0x1fdf0b['B_HolyWater'] = _0x51becd, _0x1fdf0b['default'] = _0x51becd;
            };
