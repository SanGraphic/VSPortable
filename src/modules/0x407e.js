// Module 0x407e
// Args: _0x3b4b80, _0x1ab430, _0x2444c2

export default (_0x3b4b80, _0x1ab430, _0x2444c2) => {
                'use strict';
                const _0x3851a1 = a0_0x6932;
                var _0x1b8689 = this && this['__importDefault'] || function(_0x57ec03) {
                    return _0x57ec03 && _0x57ec03['__esModule'] ? _0x57ec03 : {
                        'default': _0x57ec03
                    };
                };
                Object['defineProperty'](_0x1ab430, '__esModule', {
                    'value': !0x0
                }), _0x1ab430['B_PrismaticMissile'] = void 0x0;
                const _0x59bd87 = _0x1b8689(_0x2444c2(0xa14d)),
                    _0x1a6cce = _0x1b8689(_0x2444c2(0x5f07)),
                    _0x3d6561 = _0x2444c2(0x18304),
                    _0x191d87 = _0x1b8689(_0x2444c2(0x1fd7)),
                    _0x4bf755 = _0x1b8689(_0x2444c2(0x7c1)),
                    _0x1ecb09 = _0x1b8689(_0x2444c2(0x9b68));
                class _0x3bddad extends _0x59bd87['default'] {
                    constructor(_0x17b741, _0x25a6c9, _0x4016ec, _0x5bf1f3, _0x3a7874) {
                        const _0x5eb205 = _0x3851a1;
                        super(_0x17b741, _0x25a6c9, _0x4016ec, 'vfx', 'HitWhite1.png', _0x5bf1f3, _0x3a7874), this[_0x5eb205(0xc9f)] = [], this['maxPositions'] = 0x64, this[_0x5eb205(0xb28)] = 0x5dc, this[_0x5eb205(0x11d5)] = 0x5dc, this['trailAlpha'] = 0x1, this[_0x5eb205(0x867)] = 'Gradient3_4px.png', this['frameNameImpact'] = 'HitWhite1.png', this['startingAlpha'] = 0.5, this['trailBlend'] = _0x3d6561[_0x5eb205(0x10fc)]['ADD'], this[_0x5eb205(0x9db)] = 0x10, this['colors'] = [0xff0000, 0xffa500, 0xffff00, 0x8000, 0xff, 0x4b0082, 0xee82ee], this[_0x5eb205(0x1031)] = 0x2 * Math['PI'] / 0x7, this[_0x5eb205(0x161a)] = 0x40, this[_0x5eb205(0xb1f)] = 0x0, this[_0x5eb205(0xe71)] = this['startingAlpha'], this[_0x5eb205(0x1234)] = this['weapon'], this[_0x5eb205(0x919)] = this[_0x5eb205(0x6d2)]['add'][_0x5eb205(0x4f6)](0x0, 0x0, 0x1, 0xff)['setOrigin'](0.5)['setAlpha'](0.1)[_0x5eb205(0x183f)](!0x1)[_0x5eb205(0x11c7)](_0x3d6561[_0x5eb205(0x10fc)]['ADD'])[_0x5eb205(0xb4a)](-this[_0x5eb205(0x6d2)][_0x5eb205(0x12f9)][_0x5eb205(0x140e)]), this[_0x5eb205(0x1761)] = this[_0x5eb205(0x6d2)]['add'][_0x5eb205(0x1791)]('vfx'), this[_0x5eb205(0x806)] = new Phaser['Geom']['Circle'](0x0, 0x0, this['exploRadius']), this[_0x5eb205(0xb8c)] = this[_0x5eb205(0x1761)]['createEmitter']({
                            'frame': ['HitSmokeA.png', 'HitSmokeA2.png'],
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
                            'alpha': {
                                'start': 0.25,
                                'end': 0x0
                            },
                            'frequency': 0x1,
                            'blendMode': 'ADD',
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x5eb205(0x806)]
                            },
                            'on': !0x1
                        }), this['well'] = this['particlesManager']['createGravityWell']({
                            'x': this['x'],
                            'y': this['y'] - 0x14,
                            'power': 0x2,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        });
                    } ['MakeTrail']() {
                        const _0x14028f = _0x3851a1;
                        this['trail'] = new _0x4bf755[(_0x14028f(0xd2c))](this['scene'], 0x0, 0x0, 'vfx', this[_0x14028f(0x867)], 0x18, !0x0)[_0x14028f(0xb4a)](0x1)[_0x14028f(0x183f)](!0x1)['setBlendMode'](this[_0x14028f(0x14e7)]), this[_0x14028f(0x3b8)][_0x14028f(0x1807)] = this, this[_0x14028f(0x6d2)][_0x14028f(0x18bd)]['existing'](this['trail']);
                    } ['SetTrailTextureFromIndex']() {
                        const _0x945250 = _0x3851a1;
                        let _0x357f6c = '';
                        switch (this['indexInWeapon']) {
                            case 0x0:
                                _0x357f6c = 'PrismA.png', this['pfxEmitter'][_0x945250(0x381)](['HitSmokeA.png', 'HitSmokeA2.png']);
                                break;
                            case 0x1:
                                _0x357f6c = 'PrismB.png', this['pfxEmitter'][_0x945250(0x381)](['HitSmokeB.png', 'HitSmokeB2.png']);
                                break;
                            case 0x2:
                                _0x357f6c = 'PrismC.png', this[_0x945250(0xb8c)][_0x945250(0x381)](['HitSmokeC.png', 'HitSmokeC2.png']);
                                break;
                            case 0x3:
                                _0x357f6c = 'PrismD.png', this[_0x945250(0xb8c)]['setFrame'](['HitSmokeD.png', 'HitSmokeD2.png']);
                                break;
                            case 0x4:
                                _0x357f6c = 'PrismE.png', this[_0x945250(0xb8c)]['setFrame'](['HitSmokeE.png', 'HitSmokeE2.png']);
                                break;
                            case 0x5:
                                _0x357f6c = 'PrismF.png', this['pfxEmitter']['setFrame'](['HitSmokeF.png', 'HitSmokeF2.png']);
                                break;
                            case 0x6:
                                _0x357f6c = 'PrismG.png', this['pfxEmitter']['setFrame'](['HitSmokeG.png', 'HitSmokeG2.png']);
                        }
                        this[_0x945250(0x3b8)]['setTexture']('vfx', _0x357f6c), this['trail'][_0x945250(0x1a2f)](), this[_0x945250(0x919)]['setFillStyle'](this[_0x945250(0x1a0b)][this['indexInWeapon']], 0x1);
                    } ['onEmitcustomTint'](_0x325f69, _0x1e34a7, _0x57ccdf) {
                        return this['colors'][this['indexInWeapon']];
                    } ['OnRecycle']() {
                        const _0x5b7218 = _0x3851a1;
                        var _0x11f3d2, _0x3958ea, _0x14bcff, _0x1c33b6;
                        super[_0x5b7218(0x5ce)](), this[_0x5b7218(0x8a2)](0x1), this['body'][_0x5b7218(0xdf6)](0x10), this[_0x5b7218(0xcf9)][_0x5b7218(0x543)] = !0x1, this['isCullable'] = !0x1, this['fallDuration'] = Math[_0x5b7218(0x1981)](0x1f4, this['defaultFallDuration'] / this[_0x5b7218(0x4a1)]['PSpeed']), this[_0x5b7218(0xa4e)] = this[_0x5b7218(0x1031)] * (this['indexInWeapon'] + 0.5 * this[_0x5b7218(0x1234)][_0x5b7218(0x11b0)]), this[_0x5b7218(0xd57)] = this[_0x5b7218(0x1234)][_0x5b7218(0x11b0)] % 0x2 == 0x0 ? 0.25 : -0.25;
                        let _0x466019 = Math[_0x5b7218(0xd7e)](this[_0x5b7218(0xa4e)]) * this[_0x5b7218(0x161a)],
                            _0x18f1ad = Math[_0x5b7218(0xc80)](this['startingAngle']) * this[_0x5b7218(0x161a)];
                        this['x'] += _0x466019, this['y'] += _0x18f1ad, this[_0x5b7218(0x11c3)] = this['x'] = _0x1a6cce['default']['Core']['Player']['x'], this[_0x5b7218(0x187e)] = this['y'] = _0x1a6cce[_0x5b7218(0xd2c)][_0x5b7218(0x1043)][_0x5b7218(0x10f6)]['y'] - this['scene']['renderer'][_0x5b7218(0x140e)], this['target'] = {}, this[_0x5b7218(0x18a7)]['x'] = this['x'], this[_0x5b7218(0x18a7)]['y'] = _0x1a6cce[_0x5b7218(0xd2c)]['Core'][_0x5b7218(0x10f6)]['y'], this['setVisible'](!0x1), this[_0x5b7218(0x3b8)] || this['MakeTrail'](), this[_0x5b7218(0x1054)](), this[_0x5b7218(0x15c)] = 0x0, this['trail']['reset'](), this[_0x5b7218(0x3b8)]['clearPositions'](), this[_0x5b7218(0x3b8)]['setVisible'](!0x0), this['trail']['setAlpha'](_0x1a6cce[_0x5b7218(0xd2c)][_0x5b7218(0x1043)][_0x5b7218(0x14d8)][_0x5b7218(0x49c)] ? 0x1 : 0.2), _0x1a6cce['default'][_0x5b7218(0x1267)]['PlaySound'](_0x191d87[_0x5b7218(0xd2c)][_0x5b7218(0xbd4)], {
                            'detune': -0x1f4 - -0x64 * this[_0x5b7218(0x19c4)],
                            'volume': 0.15
                        }, 0x12c, 0x7), null === (_0x11f3d2 = this[_0x5b7218(0x281)]) || void 0x0 === _0x11f3d2 || _0x11f3d2[_0x5b7218(0x1a34)](), null === (_0x3958ea = this[_0x5b7218(0x1b03)]) || void 0x0 === _0x3958ea || _0x3958ea['stop'](), this['radius'] = 0x0, this[_0x5b7218(0x919)][_0x5b7218(0x8a2)](0x0), null === (_0x14bcff = this[_0x5b7218(0x660)]) || void 0x0 === _0x14bcff || _0x14bcff[_0x5b7218(0x1a34)](), this['scaleTween'] = this['scene'][_0x5b7218(0x12a1)]['add']({
                            'targets': this,
                            'scale': this[_0x5b7218(0x4a1)][_0x5b7218(0x5f5)],
                            'alpha': 0x0,
                            'duration': 0x78,
                            'delay': this[_0x5b7218(0x11d5)],
                            'onComplete': () => {
                                const _0x1161a2 = _0x5b7218;
                                this[_0x1161a2(0x14fb)]();
                            }
                        }), null === (_0x1c33b6 = this[_0x5b7218(0x691)]) || void 0x0 === _0x1c33b6 || _0x1c33b6['stop'](), _0x1a6cce[_0x5b7218(0xd2c)]['Core'][_0x5b7218(0x14d8)]['FlashingVFXEnabled'] && (this[_0x5b7218(0x691)] = this['scene'][_0x5b7218(0x12a1)][_0x5b7218(0x18bd)]({
                            'targets': this['GroundFx'],
                            'scale': 0x20 * this[_0x5b7218(0x4a1)][_0x5b7218(0x5f5)],
                            'duration': 0x78,
                            'delay': this[_0x5b7218(0x11d5)],
                            'yoyo': !0x0,
                            'onStart': () => {
                                const _0x45cbd9 = _0x5b7218;
                                this[_0x45cbd9(0x919)]['x'] = this['x'], this['GroundFx']['y'] = this['y'], this[_0x45cbd9(0x919)]['setVisible'](!0x0), this['pfxEmitter']['setPosition'](this['x'], this['y']), this['pfxEmitter']['start']();
                            },
                            'onComplete': () => {
                                const _0x39c5a1 = _0x5b7218;
                                this['GroundFx'][_0x39c5a1(0x183f)](!0x1), this[_0x39c5a1(0xb8c)]['stop']();
                            },
                            'onStop': () => {
                                const _0x1c9fa4 = _0x5b7218;
                                this[_0x1c9fa4(0x919)][_0x1c9fa4(0x183f)](!0x1), this['pfxEmitter']['stop']();
                            }
                        }));
                        let _0x4869e0 = this['weapon']['PArea'],
                            _0x42f211 = 0x40 + (_0x4869e0 > 0x1 ? 0x10 * (_0x4869e0 - 0x1) : 0x0);
                        this['scene'][_0x5b7218(0x12a1)]['add']({
                            'targets': this,
                            'startingY': this[_0x5b7218(0x18a7)]['y'],
                            'radius': _0x42f211,
                            'duration': this[_0x5b7218(0x11d5)],
                            'onComplete': () => {
                                const _0x1d0fd3 = _0x5b7218;
                                var _0x175fd0;
                                this[_0x1d0fd3(0xcf9)][_0x1d0fd3(0x543)] = !0x0, null === (_0x175fd0 = this[_0x1d0fd3(0x1b03)]) || void 0x0 === _0x175fd0 || _0x175fd0[_0x1d0fd3(0x1a34)](), this[_0x1d0fd3(0x1b03)] = this[_0x1d0fd3(0x6d2)][_0x1d0fd3(0x12a1)][_0x1d0fd3(0x18bd)]({
                                    'targets': this['trail'],
                                    'alpha': 0x0,
                                    'duration': 0x64
                                }), _0x1a6cce['default']['Core']['PlayerOptions']['FlashingVFXEnabled'] || this[_0x1d0fd3(0x183f)](!0x1);
                            }
                        });
                    } ['BeforeDespawn']() {
                        const _0x40a0fc = _0x3851a1;
                        this['weapon'][_0x40a0fc(0x1007)] && this['weapon'][_0x40a0fc(0x155a)](this['x'], this['y']), this['trail']['setVisible'](!0x1), this[_0x40a0fc(0x3b8)][_0x40a0fc(0xdab)](0x0), this[_0x40a0fc(0xcf9)][_0x40a0fc(0x543)] = !0x1, this[_0x40a0fc(0x8a2)](0x0), this['setVisible'](!0x1), this[_0x40a0fc(0x6d2)]['time']['addEvent']({
                            'delay': 0x3e8,
                            'callback': () => {
                                const _0x309e92 = _0x40a0fc;
                                this[_0x309e92(0x14fb)]();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x93633 = _0x3851a1;
                        this[_0x93633(0x1234)][_0x93633(0xb6f)] === _0x1ecb09['default'][_0x93633(0x6be)] && this[_0x93633(0x1234)]['explodeOnExpire'] && this['trueWeapon'][_0x93633(0x155a)](this['x'], this['y']), super['DeSpawn']();
                    } ['SetTarget'](_0x186f49) {
                        super['SetTarget'](_0x186f49);
                    } ['Update'](_0x51b12c) {
                        const _0x5e0fc3 = _0x3851a1;
                        this[_0x5e0fc3(0x3b8)]['trailUpdate'](), this[_0x5e0fc3(0x15c)]++, this[_0x5e0fc3(0x15c)] >= 0x2 && (this[_0x5e0fc3(0x3b8)][_0x5e0fc3(0x183f)](!0x0), this[_0x5e0fc3(0xdab)](0x1), this[_0x5e0fc3(0x3b8)][_0x5e0fc3(0x111e)](!0x0)), this[_0x5e0fc3(0xa4e)] += this[_0x5e0fc3(0xd57)];
                        let _0x2628ca = Math[_0x5e0fc3(0xd7e)](this[_0x5e0fc3(0xa4e)]) * this['radius'],
                            _0x1f3db2 = Math[_0x5e0fc3(0xc80)](this['startingAngle']) * this['radius'];
                        this['x'] = this[_0x5e0fc3(0x11c3)] + _0x2628ca, this['y'] = this[_0x5e0fc3(0x187e)] + _0x1f3db2, this['well']['x'] = this['x'], this['well']['y'] = this['y'] - 0x28;
                    } ['OnHasHitAnObject'](_0x5dc492) {
                        const _0x395df0 = _0x3851a1;
                        _0x5dc492[_0x395df0(0xdae)] || (this['trueWeapon']['firstArcana'] === _0x1ecb09['default'][_0x395df0(0x299)] ? this[_0x395df0(0x4a1)]['SpawnExplosionAt'](this['x'], this['y'], 0x1, 0x0) : this[_0x395df0(0x1234)]['firstArcana'] === _0x1ecb09[_0x395df0(0xd2c)]['T14_JEWELS'] && this['TryFreeze'](_0x5dc492));
                    }
                }
                _0x1ab430['B_PrismaticMissile'] = _0x3bddad, _0x1ab430['default'] = _0x3bddad;
            };
