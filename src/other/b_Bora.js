// Module 0xbbe
// Args: _0xb1a6c9, _0x307648, _0x2a1bd0

export default (_0xb1a6c9, _0x307648, _0x2a1bd0) => {
                'use strict';
                const _0x17898d = a0_0x6932;
                var _0x1c02b0 = this && this['__importDefault'] || function(_0x325b76) {
                    const _0x2423ac = _0x17898d;
                    return _0x325b76 && _0x325b76[_0x2423ac(0x16f1)] ? _0x325b76 : {
                        'default': _0x325b76
                    };
                };
                Object['defineProperty'](_0x307648, '__esModule', {
                    'value': !0x0
                }), _0x307648['b_Bora'] = void 0x0;
                const _0x59f47b = _0x1c02b0(_0x2a1bd0(0xa14d)),
                    _0x494e7e = _0x2a1bd0(0x18304),
                    _0x1497e9 = _0x1c02b0(_0x2a1bd0(0x5f07)),
                    _0x444e7c = _0x1c02b0(_0x2a1bd0(0x1fd7)),
                    _0x38b7dc = _0x1c02b0(_0x2a1bd0(0x5103));
                class _0x41a65c extends _0x59f47b['default'] {
                    constructor(_0x362b29, _0x15b8d1, _0x5cb9b0, _0x139be5, _0x3492a2) {
                        const _0x15835a = _0x17898d;
                        super(_0x362b29, _0x15b8d1, _0x5cb9b0, 'items', 'Water2.png', _0x139be5, _0x3492a2), this[_0x15835a(0x161a)] = 0x10, this['exploRadius'] = 0x8, this['isBroken'] = !0x1, this['groundFxAlpha'] = 0.2, this[_0x15835a(0x70d)] = new Phaser[(_0x15835a(0x24f))][(_0x15835a(0x1551))](0x0, 0x0), this[_0x15835a(0xb1f)] = 0x2, this['explosionCircle'] = new Phaser[(_0x15835a(0x10d2))][(_0x15835a(0xf29))](0x0, 0x0, this[_0x15835a(0x9db)]), this['GroundFx'] = this['scene']['add'][_0x15835a(0x4f6)](0x0, 0x0, this['radius'], 0x88ff)[_0x15835a(0xf8e)](0.5)[_0x15835a(0xdab)](this[_0x15835a(0x11f3)])[_0x15835a(0x183f)](!0x1)[_0x15835a(0x11c7)](_0x494e7e[_0x15835a(0x10fc)]['ADD']), this[_0x15835a(0x1150)] = this[_0x15835a(0x6d2)]['add'][_0x15835a(0x1791)]('vfx'), this[_0x15835a(0xf12)] = this[_0x15835a(0x1150)][_0x15835a(0x14c0)]({
                            'frame': ['ProjectileFlameHoly2.png', 'ProjectileFlameBlue2.png'],
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
                                'start': _0x38b7dc[_0x15835a(0xd2c)]['PixelScale'] / 0x4,
                                'end': _0x38b7dc[_0x15835a(0xd2c)][_0x15835a(0x15db)]
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x15835a(0x806)]
                            },
                            'on': !0x1
                        }), this['PfxEmitter2'] = this[_0x15835a(0x1150)][_0x15835a(0x14c0)]({
                            'frame': ['ProjectileFlameHoly2.png', 'ProjectileFlameBlue2.png'],
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
                                'start': _0x38b7dc[_0x15835a(0xd2c)][_0x15835a(0x15db)] / 0x4,
                                'end': _0x38b7dc['default']['PixelScale'] / 0x2
                            },
                            'blendMode': _0x494e7e[_0x15835a(0x10fc)][_0x15835a(0x1811)],
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x15835a(0x806)]
                            },
                            'on': !0x1
                        }), this['PfxEmitterExplosionManager'] = this[_0x15835a(0x6d2)][_0x15835a(0x18bd)]['particles']('vfx'), this[_0x15835a(0x178e)][_0x15835a(0x14c0)]({
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
                                'start': _0x38b7dc[_0x15835a(0xd2c)]['PixelScale'] / 0x4,
                                'end': 0x2 * _0x38b7dc['default'][_0x15835a(0x15db)]
                            },
                            'on': !0x1
                        }), this[_0x15835a(0x178e)][_0x15835a(0x14c0)]({
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
                                'start': _0x38b7dc['default']['PixelScale'] / 0x4,
                                'end': _0x38b7dc['default']['PixelScale']
                            },
                            'on': !0x1
                        }), this['AngleTween'] = this[_0x15835a(0x6d2)]['tweens'][_0x15835a(0x18bd)]({
                            'targets': this,
                            'angle': 0x168,
                            'duration': 0x258,
                            'ease': 'Linear',
                            'repeat': -0x1
                        });
                    } ['OnRecycle']() {
                        const _0x922a1d = _0x17898d;
                        var _0x50bace;
                        this[_0x922a1d(0x183f)](!0x1), super[_0x922a1d(0x5ce)](), this['_speed'] = 0x2, this[_0x922a1d(0xcf9)][_0x922a1d(0xdf6)](this[_0x922a1d(0x161a)], -0.5 * this[_0x922a1d(0x161a)], -0.5 * this[_0x922a1d(0x161a)]), null === (_0x50bace = this[_0x922a1d(0x12c0)]) || void 0x0 === _0x50bace || _0x50bace[_0x922a1d(0x1a34)](), this['setScale'](_0x38b7dc['default']['PixelScale']), this[_0x922a1d(0x183f)](!0x0), this['isBroken'] = !0x1, this[_0x922a1d(0xcf9)][_0x922a1d(0x543)] = !0x1, this['isCullable'] = !0x1, _0x1497e9['default'][_0x922a1d(0x1043)][_0x922a1d(0x6d2)][_0x922a1d(0x915)][_0x922a1d(0x17fb)](this['HitboxTimer']), _0x1497e9[_0x922a1d(0xd2c)][_0x922a1d(0x1043)][_0x922a1d(0x6d2)][_0x922a1d(0x915)]['removeEvent'](this[_0x922a1d(0x12a3)]), this['explosionCircle'] = new Phaser[(_0x922a1d(0x10d2))][(_0x922a1d(0xf29))](0x0, 0x0, this[_0x922a1d(0x9db)] * this['weapon']['PArea'] * 0x3), this[_0x922a1d(0xf12)]['setEmitZone']({
                            'type': 'random',
                            'source': this[_0x922a1d(0x806)]
                        }), this[_0x922a1d(0xf12)][_0x922a1d(0x1070)](0x1 + Math[_0x922a1d(0xe07)](this['weapon'][_0x922a1d(0x5e3)] / 0x3)), this['PfxEmitter2']['setEmitZone']({
                            'type': 'random',
                            'source': this['explosionCircle']
                        }), this['PfxEmitter2'][_0x922a1d(0x1070)](0x1 + Math[_0x922a1d(0xe07)](this['weapon'][_0x922a1d(0x5e3)] / 0x3));
                        var _0x1902c4 = new Phaser[(_0x922a1d(0x24f))][(_0x922a1d(0x1551))](_0x1497e9[_0x922a1d(0xd2c)]['Core'][_0x922a1d(0x10f6)]['x'], _0x1497e9['default'][_0x922a1d(0x1043)]['Player']['y']);
                        this['x'] = _0x1902c4['x'] + (Math[_0x922a1d(0x9ad)]() - 0.5) * this['scene'][_0x922a1d(0x12f9)]['width'] * 0.5, this['y'] = _0x1902c4['y'] - 0.6 * this['scene']['renderer'][_0x922a1d(0x140e)];
                        let _0xc0ab14 = this[_0x922a1d(0x4a1)][_0x922a1d(0x1b6)]();
                        if (_0x1902c4['x'] += _0xc0ab14['x'], _0x1902c4['y'] += _0xc0ab14['y'], this['weapon'][_0x922a1d(0x942)] < 0x4 && 0x0 == this[_0x922a1d(0x19c4)]) {
                            var _0x1ed2ed = this[_0x922a1d(0x6d2)]['physics']['closest'](_0x1497e9['default'][_0x922a1d(0x1043)]['Player'], _0x1497e9[_0x922a1d(0xd2c)][_0x922a1d(0x1043)]['Enemies']);
                            _0x1ed2ed && (_0x1902c4['x'] = _0x1ed2ed['x'], _0x1902c4['y'] = _0x1ed2ed['y']);
                        }
                        this['setDepth'](this['y'] - _0x1497e9['default'][_0x922a1d(0x1043)]['Player']['y'] + this[_0x922a1d(0x6d2)][_0x922a1d(0x12f9)][_0x922a1d(0x140e)]), this[_0x922a1d(0x50d)] && this[_0x922a1d(0x6d2)][_0x922a1d(0x12a1)][_0x922a1d(0x393)](this[_0x922a1d(0x50d)]), this['PositionTween'] = this[_0x922a1d(0x6d2)]['tweens'][_0x922a1d(0x18bd)]({
                            'targets': this,
                            'x': _0x1902c4['x'],
                            'y': _0x1902c4['y'],
                            'duration': 0x12c,
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x2aeff6 = _0x922a1d;
                                this[_0x2aeff6(0xca7)]();
                            }
                        });
                    } ['Break']() {
                        const _0x3b93f6 = _0x17898d;
                        var _0x5b2df0, _0x9747f2;
                        this['isBroken'] || (this['isBroken'] = !0x0, this[_0x3b93f6(0x183f)](!0x1), this[_0x3b93f6(0x19c8)](0x0, 0x0), this['objectsHit'] = [], this['body'][_0x3b93f6(0x543)] = !0x0, this[_0x3b93f6(0x919)][_0x3b93f6(0x726)](this['x'], this['y'])[_0x3b93f6(0x183f)](!0x0)[_0x3b93f6(0x8a2)](0x0)['setOrigin'](0.5)['setAlpha'](this[_0x3b93f6(0x11f3)]), null === (_0x5b2df0 = this[_0x3b93f6(0x272)]) || void 0x0 === _0x5b2df0 || _0x5b2df0[_0x3b93f6(0x1a34)](), this[_0x3b93f6(0x272)] = _0x1497e9['default'][_0x3b93f6(0x1043)][_0x3b93f6(0x6d2)]['tweens']['add']({
                            'targets': this[_0x3b93f6(0x919)],
                            'scale': _0x38b7dc['default']['PixelScale'] * this[_0x3b93f6(0x4a1)][_0x3b93f6(0x5f5)],
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x2ffcbd = _0x3b93f6;
                                var _0x1d3903;
                                let _0x345c97 = _0x1497e9[_0x2ffcbd(0xd2c)]['Core']['Player'][_0x2ffcbd(0x1205)] > 0x1 ? _0x1497e9[_0x2ffcbd(0xd2c)][_0x2ffcbd(0x1043)][_0x2ffcbd(0x10f6)][_0x2ffcbd(0x1205)] : 0x1,
                                    _0x25a7cf = Math[_0x2ffcbd(0x1084)](0xc, _0x345c97 * _0x38b7dc['default'][_0x2ffcbd(0x15db)] * this[_0x2ffcbd(0x4a1)]['PArea'] * this['weapon'][_0x2ffcbd(0x712)]);
                                null === (_0x1d3903 = this['growTween']) || void 0x0 === _0x1d3903 || _0x1d3903[_0x2ffcbd(0x1a34)](), this[_0x2ffcbd(0x12c0)] = this[_0x2ffcbd(0x6d2)]['tweens']['add']({
                                    'targets': [this, this[_0x2ffcbd(0x919)]],
                                    'scale': _0x25a7cf,
                                    'duration': this['weapon']['PDuration'] - 0xc8
                                });
                            }
                        }), this['setScale'](_0x38b7dc[_0x3b93f6(0xd2c)][_0x3b93f6(0x15db)] * this[_0x3b93f6(0x4a1)][_0x3b93f6(0x5f5)]), this[_0x3b93f6(0x8b9)] = _0x1497e9[_0x3b93f6(0xd2c)][_0x3b93f6(0x1043)][_0x3b93f6(0x6d2)][_0x3b93f6(0x915)]['addEvent']({
                            'delay': this[_0x3b93f6(0x4a1)][_0x3b93f6(0xcd5)],
                            'loop': !0x0,
                            'callback': () => {
                                this['objectsHit'] = [];
                            }
                        }), this[_0x3b93f6(0x8b9)][_0x3b93f6(0x226)] = 'HW Hitbox', null === (_0x9747f2 = this[_0x3b93f6(0xce5)]) || void 0x0 === _0x9747f2 || _0x9747f2[_0x3b93f6(0x1a34)](), this[_0x3b93f6(0xce5)] = _0x1497e9['default']['Core'][_0x3b93f6(0x6d2)][_0x3b93f6(0x12a1)]['add']({
                            'targets': this['GroundFx'],
                            'alpha': 0x0,
                            'delay': 0.8 * this['weapon'][_0x3b93f6(0x16c3)],
                            'duration': 0.2 * this[_0x3b93f6(0x4a1)][_0x3b93f6(0x16c3)]
                        }), this[_0x3b93f6(0x12a3)] = _0x1497e9[_0x3b93f6(0xd2c)][_0x3b93f6(0x1043)]['scene'][_0x3b93f6(0x915)][_0x3b93f6(0x12b8)]({
                            'delay': this[_0x3b93f6(0x4a1)]['PDuration'],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x36878d = _0x3b93f6;
                                this['GroundFx'][_0x36878d(0x183f)](!0x1), _0x1497e9['default'][_0x36878d(0x1043)][_0x36878d(0x6d2)][_0x36878d(0x915)][_0x36878d(0x17fb)](this['HitboxTimer']), _0x1497e9[_0x36878d(0xd2c)]['Core'][_0x36878d(0x6d2)][_0x36878d(0x915)][_0x36878d(0x17fb)](this['ExpireTimer']), this['DeSpawn']();
                            }
                        }), this['ExpireTimer'][_0x3b93f6(0x226)] = 'HW Expire', this[_0x3b93f6(0x178e)]['emitParticleAt'](this['x'], this['y']), this['PfxEmitterManager']['setDepth'](this['y'] - _0x1497e9[_0x3b93f6(0xd2c)][_0x3b93f6(0x1043)][_0x3b93f6(0x10f6)]['y'] - 0.5 * this[_0x3b93f6(0x6d2)]['renderer']['height']), this[_0x3b93f6(0x919)][_0x3b93f6(0xb4a)](this['y'] - _0x1497e9[_0x3b93f6(0xd2c)]['Core']['Player']['y'] - 0.5 * this[_0x3b93f6(0x6d2)][_0x3b93f6(0x12f9)][_0x3b93f6(0x140e)]), _0x1497e9['default'][_0x3b93f6(0x1267)][_0x3b93f6(0x7f6)](_0x444e7c['default'][_0x3b93f6(0x8d7)], {
                            'detune': -0xc8 - -0x32 * this['indexInWeapon'],
                            'volume': 0.35,
                            'rate': 0x2
                        }, 0xc8, 0xc));
                    } ['Update']() {
                        const _0x2e04f6 = _0x17898d;
                        if (this['isBroken']) {
                            this[_0x2e04f6(0x1150)]['emitParticleAt'](this['x'], this['y']), this['_currentDirection']['x'] = _0x1497e9[_0x2e04f6(0xd2c)][_0x2e04f6(0x1043)][_0x2e04f6(0x10f6)]['x'] - this['x'], this['_currentDirection']['y'] = _0x1497e9['default'][_0x2e04f6(0x1043)][_0x2e04f6(0x10f6)]['y'] - this['y'], this['_currentDirection'][_0x2e04f6(0x183b)]();
                            let _0x6012ce = _0x1497e9[_0x2e04f6(0xd2c)]['Core'][_0x2e04f6(0x10f6)][_0x2e04f6(0x1205)] > 0x1 ? _0x1497e9['default'][_0x2e04f6(0x1043)][_0x2e04f6(0x10f6)][_0x2e04f6(0x1205)] : 0x1;
                            this['setVelocity'](0xf * _0x6012ce * this[_0x2e04f6(0x4a1)]['PSpeed'] * this[_0x2e04f6(0x70d)]['x'], 0xf * _0x6012ce * this[_0x2e04f6(0x4a1)]['PSpeed'] * this['_currentDirection']['y']), this[_0x2e04f6(0x919)]['x'] = this['x'], this[_0x2e04f6(0x919)]['y'] = this['y'];
                        }
                    } ['DeSpawn']() {
                        const _0x30dcbc = _0x17898d;
                        this[_0x30dcbc(0x177d)] = !0x0, _0x1497e9[_0x30dcbc(0xd2c)]['Core']['scene'][_0x30dcbc(0x915)][_0x30dcbc(0x17fb)](this[_0x30dcbc(0x8b9)]), _0x1497e9['default']['Core']['scene'][_0x30dcbc(0x915)][_0x30dcbc(0x17fb)](this[_0x30dcbc(0x12a3)]), super['DeSpawn']();
                    }
                }
                _0x307648['b_Bora'] = _0x41a65c, _0x307648['default'] = _0x41a65c;
            };
