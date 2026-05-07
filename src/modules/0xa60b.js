// Module 0xa60b
// Args: _0x465016, _0x515437, _0x25285b

export default (_0x465016, _0x515437, _0x25285b) => {
                'use strict';
                const _0x2c045f = a0_0x6932;
                var _0xfa7f3b = this && this['__importDefault'] || function(_0x4376e6) {
                    return _0x4376e6 && _0x4376e6['__esModule'] ? _0x4376e6 : {
                        'default': _0x4376e6
                    };
                };
                Object['defineProperty'](_0x515437, '__esModule', {
                    'value': !0x0
                }), _0x515437['B_Flower'] = void 0x0;
                const _0x471039 = _0xfa7f3b(_0x25285b(0xa14d)),
                    _0x22aeb4 = _0xfa7f3b(_0x25285b(0x5f07)),
                    _0x582e18 = _0xfa7f3b(_0x25285b(0x1fd7)),
                    _0x4759f4 = _0x25285b(0x18304);
                class _0x34f089 extends _0x471039['default'] {
                    constructor(_0x45ac8c, _0x11f2f0, _0x398d77, _0x259376, _0x2c6bd8) {
                        const _0x2c05b2 = _0x2c045f;
                        super(_0x45ac8c, _0x11f2f0, _0x398d77, 'vfx', 'circle8.png', _0x259376, _0x2c6bd8), this[_0x2c05b2(0x6dc)] = -0x1, this['save_vel_y'] = -0x1, this[_0x2c05b2(0x998)] = 0x1, this['canBounce'] = !0x0, this[_0x2c05b2(0x39a)] = 0x1, this[_0x2c05b2(0x161a)] = 0x8, this['maxBounceAreaMod'] = 1.5, this[_0x2c05b2(0x1653)] = [_0x582e18[_0x2c05b2(0xd2c)][_0x2c05b2(0x148a)], _0x582e18['default']['STEP2'], _0x582e18[_0x2c05b2(0xd2c)][_0x2c05b2(0x6b6)], _0x582e18['default'][_0x2c05b2(0xfa3)]], this[_0x2c05b2(0xb78)] = 0x0, this['GroundFx'] = this[_0x2c05b2(0x6d2)][_0x2c05b2(0x18bd)][_0x2c05b2(0x4f6)](0x0, 0x0, this[_0x2c05b2(0x161a)], 0xff00)['setOrigin'](0.5)[_0x2c05b2(0xdab)](0.1)[_0x2c05b2(0x183f)](!0x0)['setBlendMode'](_0x4759f4[_0x2c05b2(0x10fc)]['ADD']), this[_0x2c05b2(0x183f)](!0x1), this['aimVec'] = new Phaser['Math'][(_0x2c05b2(0x1551))](), this['particles'] = this['scene'][_0x2c05b2(0x18bd)]['particles']('vfx');
                        var _0x3e214d = this[_0x2c05b2(0x6d2)][_0x2c05b2(0x18bd)]['particles']('dusting0');
                        this[_0x2c05b2(0x68f)] = this['particles'][_0x2c05b2(0x14c0)]({
                            'frame': ['_blur.png', '_blur2.png'][_0x2c6bd8 % 0x2],
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0x320,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'alpha': {
                                'start': 0x0,
                                'end': 0x1,
                                'ease': 'Expo.easeOut'
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x32,
                                'max': 0x64
                            },
                            'quantity': 0x10,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x10,
                            'blendMode': 'ADD',
                            'on': !0x1
                        }), this[_0x2c05b2(0xfe0)] = _0x3e214d['createEmitter']({
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0x258,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'alpha': {
                                'start': 0x0,
                                'end': 0x1,
                                'ease': 'Expo.easeOut'
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x1f
                            },
                            'speed': {
                                'min': 0x96,
                                'max': 0xc8
                            },
                            'quantity': 0x1,
                            'scale': {
                                'start': 0x2,
                                'end': 0.1
                            },
                            'frequency': 0x1,
                            'tint': {
                                'onEmit': (_0x2208f2, _0x5a958d, _0x2730f5) => this[_0x2c05b2(0x1942)](_0x2208f2, _0x5a958d, _0x2730f5)
                            },
                            'blendMode': 'ADD',
                            'on': !0x1
                        }), this[_0x2c05b2(0xcee)] = [];
                        for (let _0x59490c = 0x0; _0x59490c <= 0x58; _0x59490c++) {
                            const _0x537224 = _0x59490c['toString']();
                            this[_0x2c05b2(0xcee)][_0x2c05b2(0x1564)]('fl' + _0x537224[_0x2c05b2(0x7e1)](0x2, '0') + '.png');
                        }
                        this[_0x2c05b2(0x12ea)] = this['particles']['createEmitter']({
                            'frame': {
                                'frames': this[_0x2c05b2(0xcee)]
                            },
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0x7d0,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'alpha': {
                                'start': 0x0,
                                'end': 0x1
                            },
                            'speed': {
                                'min': 0x1,
                                'max': 0x2
                            },
                            'quantity': 0x1,
                            'scale': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'on': !0x1
                        });
                        let _0x464f3f = this['flowerNames'];
                        if (_0x22aeb4['default'][_0x2c05b2(0x1043)]['IsHalloween']) {
                            _0x464f3f = [];
                            for (let _0x247e1f = 0x1; _0x247e1f <= 0x6; _0x247e1f++) _0x464f3f[_0x2c05b2(0x1564)]('Ecto' + _0x247e1f + '.png');
                        }
                        this['flowerSprite'] = this['scene']['add'][_0x2c05b2(0x105b)](this['x'], this['x'], 'vfx', Phaser['Math'][_0x2c05b2(0x82a)]['pick'](_0x464f3f))[_0x2c05b2(0x8a2)](0x0)[_0x2c05b2(0xf8e)](0.5, 0x1)[_0x2c05b2(0x9b5)](-0x2d), this[_0x2c05b2(0x6bd)] = this['scene'][_0x2c05b2(0x12a1)]['add']({
                            'targets': this['flowerSprite'],
                            'angle': 0x2d,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'repeat': -0x1,
                            'yoyo': !0x0
                        });
                    } ['onEmitcustomTint'](_0x527983, _0x4d64d7, _0xb76686) {
                        const _0x3fbb54 = _0x2c045f;
                        return Phaser['Math'][_0x3fbb54(0x82a)][_0x3fbb54(0x198c)]([0xff8888, 0x88ff88, 0x88ff88, 0xffff88]);
                    } ['OnRecycle']() {
                        const _0x103dde = _0x2c045f;
                        var _0x763e1b, _0x2141a2, _0x801989;
                        super['OnRecycle'](), this[_0x103dde(0x177d)] = !0x1, this[_0x103dde(0x8a2)](0x1), this[_0x103dde(0xcf9)][_0x103dde(0xdf6)](0x8, -0x4, -0x4), this[_0x103dde(0xcf9)][_0x103dde(0x543)] = !0x0, this[_0x103dde(0xb78)] = 0x0, this[_0x103dde(0x990)] = [];
                        var _0x1fffc7 = new Phaser[(_0x103dde(0x10d2))][(_0x103dde(0xf29))](0x0, 0x0, 0x8 * this[_0x103dde(0x4a1)][_0x103dde(0x5f5)]);
                        this[_0x103dde(0xfe0)]['setEmitZone']({
                            'type': 'random',
                            'source': _0x1fffc7
                        }), this['flowerSprite'][_0x103dde(0x183f)](!0x0), this['GroundFx']['setVisible'](!0x0), this[_0x103dde(0x183f)](!0x1), this['bounceAreaMod'] = 0x1, this[_0x103dde(0xdab)](0x1), this['GroundFx']['setAlpha'](0.1), this['setBounce'](1.1, 1.1), this[_0x103dde(0xa21)] = !0x1, this[_0x103dde(0x68f)][_0x103dde(0xb43)]({
                            'min': 0x32 * this['weapon'][_0x103dde(0x5f5)],
                            'max': 0x64 * this[_0x103dde(0x4a1)][_0x103dde(0x5f5)]
                        }), _0x1fffc7 = new Phaser['Geom']['Circle'](0x0, 0x0, 0x8 * this[_0x103dde(0x4a1)]['PArea'] * 0x8), this[_0x103dde(0x177d)] = !0x0, this['save_vel_x'] = 0x1, this[_0x103dde(0xc8f)] = 0x1, this['aimVec']['x'] = -0x1 * _0x22aeb4[_0x103dde(0xd2c)]['Core'][_0x103dde(0x10f6)]['body']['velocity']['x'], this[_0x103dde(0x9dc)]['y'] = -0x1 * _0x22aeb4[_0x103dde(0xd2c)]['Core']['Player'][_0x103dde(0xcf9)][_0x103dde(0xf4e)]['y'], this[_0x103dde(0x19c8)](this['aimVec']['x'] * this[_0x103dde(0x4a1)]['PSpeed'], this[_0x103dde(0x9dc)]['y'] * this['weapon'][_0x103dde(0x712)]), null === (_0x763e1b = this[_0x103dde(0x11e0)]) || void 0x0 === _0x763e1b || _0x763e1b[_0x103dde(0x1a34)](), this['bombDeceleration'] = 0x1, this[_0x103dde(0x11e0)] = this[_0x103dde(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'bombDeceleration': 0x0,
                            'delay': 0.25 * this['weapon']['PDuration'],
                            'duration': 0.75 * this['weapon']['PDuration'],
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x31a0d5 = _0x103dde;
                                this[_0x31a0d5(0x14e3)]();
                            }
                        }), this[_0x103dde(0x19c4)] < 0x4 && _0x22aeb4['default'][_0x103dde(0x1267)][_0x103dde(0x7f6)](this['soundArray'][this['indexInWeapon'] % 0x4], {
                            'detune': 0xc8 * this['indexInWeapon'],
                            'volume': 0.05 - 0.01 * this[_0x103dde(0x19c4)],
                            'rate': 0x1
                        }, 0xc8, 0xa), this['flowerSprite']['scaleX'] = 0x0, this[_0x103dde(0x9d5)]['scaleY'] = 0x0, this[_0x103dde(0x9d5)]['alpha'] = 0x1, this[_0x103dde(0x9d5)][_0x103dde(0x183f)](!0x0), this[_0x103dde(0xc7f)] = 0x1, this[_0x103dde(0x9d5)]['x'] = this['x'], this[_0x103dde(0x9d5)]['y'] = this['y'] + 0x8 * this[_0x103dde(0xac3)]();
                        let _0x3d59b6 = this['MyScale']();
                        this[_0x103dde(0x3a8)] = 0x0, this[_0x103dde(0x1721)] = 0x0, null === (_0x2141a2 = this[_0x103dde(0x1995)]) || void 0x0 === _0x2141a2 || _0x2141a2[_0x103dde(0x1a34)](), this[_0x103dde(0x1995)] = this['scene'][_0x103dde(0x12a1)][_0x103dde(0x18bd)]({
                            'targets': this,
                            'scaleY': _0x3d59b6,
                            'duration': 0x1f4,
                            'ease': 'Back.easeOut',
                            'onStart': () => {
                                const _0x251bbb = _0x103dde;
                                this['scaleX'] = 0x0, this['scaleY'] = 0x0, this[_0x251bbb(0x9d5)][_0x251bbb(0x3a8)] = 0x0, this['flowerSprite']['scaleY'] = 0x0;
                            }
                        }), null === (_0x801989 = this[_0x103dde(0x15fa)]) || void 0x0 === _0x801989 || _0x801989['stop'](), this[_0x103dde(0x15fa)] = this[_0x103dde(0x6d2)][_0x103dde(0x12a1)]['add']({
                            'targets': this,
                            'scaleX': _0x3d59b6,
                            'duration': 0x258,
                            'ease': 'Back.easeOut',
                            'onComplete': () => {
                                const _0x15b1b8 = _0x103dde;
                                this[_0x15b1b8(0xa21)] = !0x0, this['scene'][_0x15b1b8(0x12a1)][_0x15b1b8(0x18bd)]({
                                    'targets': this,
                                    'scaleAfterBounceMod': Math[_0x15b1b8(0x1981)](0x1, _0x22aeb4['default']['Core']['Player']['moveSpeed']),
                                    'duration': Math['max'](0x1f4, this[_0x15b1b8(0x4a1)][_0x15b1b8(0x16c3)] - 0x258)
                                });
                            }
                        }), _0x22aeb4['default']['Core'][_0x103dde(0x6d2)][_0x103dde(0x915)][_0x103dde(0x17fb)](this['HitboxTimer']), this[_0x103dde(0x8b9)] = _0x22aeb4['default'][_0x103dde(0x1043)][_0x103dde(0x6d2)]['time'][_0x103dde(0x12b8)]({
                            'delay': this[_0x103dde(0x4a1)][_0x103dde(0xcd5)],
                            'loop': !0x0,
                            'callback': () => {
                                this['objectsHit'] = [];
                            }
                        });
                    } ['FadeOut']() {
                        const _0x205681 = _0x2c045f;
                        this[_0x205681(0x6d2)]['tweens'][_0x205681(0x18bd)]({
                            'targets': [this[_0x205681(0x9d5)], this, this['GroundFx']],
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0x8e1e20 = _0x205681;
                                this[_0x8e1e20(0x14fb)]();
                            }
                        });
                    } ['Bounce'](_0x421f87) {
                        const _0x29df8f = _0x2c045f;
                        this[_0x29df8f(0xcf9)] === _0x421f87 && (this[_0x29df8f(0x990)] = [], this['fwEmitter2'][_0x29df8f(0x108b)](this['x'], this['y']));
                    } ['JustBounce']() {
                        const _0x588ff5 = _0x2c045f;
                        this['canBounce'] && (this[_0x588ff5(0x39a)] > this[_0x588ff5(0x47f)] || (this[_0x588ff5(0x6dc)] *= -0x1, this['save_vel_y'] *= -0x1, this['canBounce'] = !0x1, this[_0x588ff5(0x6d2)]['time'][_0x588ff5(0x17fb)](this['BounceTimer']), this[_0x588ff5(0x20d)] = this[_0x588ff5(0x6d2)][_0x588ff5(0x915)]['addEvent']({
                            'delay': 0x3c,
                            'callback': () => {
                                const _0x4c3dc2 = _0x588ff5;
                                this[_0x4c3dc2(0xa21)] = !0x0;
                            }
                        })));
                    } ['SizeUp']() {
                        const _0x397c4d = _0x2c045f;
                        this[_0x397c4d(0xa21)] && (this['canBounce'] = !0x1, this[_0x397c4d(0xfe0)][_0x397c4d(0x108b)](this['x'], this['y']), this[_0x397c4d(0x6d2)][_0x397c4d(0x915)]['removeEvent'](this['BounceTimer']), this[_0x397c4d(0x20d)] = this[_0x397c4d(0x6d2)][_0x397c4d(0x915)][_0x397c4d(0x12b8)]({
                            'delay': 0x3c,
                            'callback': () => {
                                const _0x2a50a1 = _0x397c4d;
                                this[_0x2a50a1(0xa21)] = !0x0;
                            }
                        }));
                    } ['OnHasHitWall'](_0x5a6421) {
                        const _0xe822d3 = _0x2c045f;
                        this[_0xe822d3(0x6dc)] *= _0x5a6421['faceRight'] || _0x5a6421[_0xe822d3(0x1429)] ? -0x1 : 0x1, this[_0xe822d3(0xc8f)] *= _0x5a6421['faceTop'] || _0x5a6421[_0xe822d3(0x3da)] ? -0x1 : 0x1, this['objectsHit'] = [];
                    } ['Update'](_0x8fd4b6) {
                        const _0x1fdddb = _0x2c045f;
                        if (this[_0x1fdddb(0x19c8)](this['aimVec']['x'] * this['save_vel_x'] * this[_0x1fdddb(0x998)], this['aimVec']['y'] * this[_0x1fdddb(0xc8f)] * this[_0x1fdddb(0x998)]), this[_0x1fdddb(0xa21)]) {
                            let _0x1d86ec = this[_0x1fdddb(0xac3)]();
                            this[_0x1fdddb(0x3a8)] = _0x1d86ec, this['scaleY'] = _0x1d86ec;
                        }
                        this['depth'] = this['GroundFx']['depth'] = -this['scene'][_0x1fdddb(0x12f9)]['height'], this['flowerSprite']['depth'] = this['y'] - _0x22aeb4[_0x1fdddb(0xd2c)]['Core'][_0x1fdddb(0x10f6)]['y'] - 0x1, this['particles']['depth'] = this[_0x1fdddb(0x16c6)] - 0x1, this[_0x1fdddb(0x919)]['x'] = this['flowerSprite']['x'] = this['x'], this['GroundFx']['y'] = this[_0x1fdddb(0x9d5)]['y'] = this['y'], this[_0x1fdddb(0x919)][_0x1fdddb(0x3a8)] = this['scaleX'], this[_0x1fdddb(0x919)][_0x1fdddb(0x1721)] = this[_0x1fdddb(0x1721)], this[_0x1fdddb(0x9d5)]['scaleX'] = 0.65 * this[_0x1fdddb(0x3a8)], this[_0x1fdddb(0x9d5)]['scaleY'] = 0.65 * this[_0x1fdddb(0x1721)], this[_0x1fdddb(0x9d5)]['y'] = this['y'] + 0x8 * this[_0x1fdddb(0x1721)];
                    } ['MyScale']() {
                        const _0x38aa7b = _0x2c045f;
                        return this['weapon'][_0x38aa7b(0x5f5)] * this[_0x38aa7b(0x39a)] * this[_0x38aa7b(0xc7f)];
                    } ['DeSpawn']() {
                        const _0x46f27f = _0x2c045f;
                        var _0x160fa9, _0x186509, _0x1fa739;
                        null === (_0x160fa9 = this[_0x46f27f(0x11e0)]) || void 0x0 === _0x160fa9 || _0x160fa9[_0x46f27f(0x1a34)](), this['fwEmitter']['stop'](), null === (_0x186509 = this['tween1']) || void 0x0 === _0x186509 || _0x186509[_0x46f27f(0x1a34)](), null === (_0x1fa739 = this[_0x46f27f(0x15fa)]) || void 0x0 === _0x1fa739 || _0x1fa739[_0x46f27f(0x1a34)](), this[_0x46f27f(0x9d5)][_0x46f27f(0x183f)](!0x1), this['scaleX'] = 0x0, this[_0x46f27f(0x1721)] = 0x0, this[_0x46f27f(0x919)][_0x46f27f(0x183f)](!0x1), this['setVisible'](!0x1), this['body']['enable'] = !0x1, this[_0x46f27f(0x4a1)]['explodeOnExpire'] && this[_0x46f27f(0x4a1)]['SpawnExplosionAt'](this['x'], this['y']), super['DeSpawn']();
                    }
                }
                _0x515437['B_Flower'] = _0x34f089, _0x515437['default'] = _0x34f089;
            };
