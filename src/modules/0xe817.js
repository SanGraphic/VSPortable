// Module 0xe817
// Args: _0x175888, _0x2af031, _0x3dd583

export default (_0x175888, _0x2af031, _0x3dd583) => {
                'use strict';
                const _0x2e8a80 = a0_0x6932;
                var _0x5bfa27 = this && this['__importDefault'] || function(_0x9d8931) {
                    return _0x9d8931 && _0x9d8931['__esModule'] ? _0x9d8931 : {
                        'default': _0x9d8931
                    };
                };
                Object['defineProperty'](_0x2af031, '__esModule', {
                    'value': !0x0
                }), _0x2af031['W_Spellstrom'] = void 0x0;
                const _0x4ca75b = _0x5bfa27(_0x3dd583(0xe49a)),
                    _0x111df4 = _0x5bfa27(_0x3dd583(0x54e3)),
                    _0x757d2d = _0x5bfa27(_0x3dd583(0x5f07)),
                    _0x4f72dc = _0x5bfa27(_0x3dd583(0x1fd7)),
                    _0x43ebf2 = _0x3dd583(0x18304);
                class _0x26b054 extends _0x4ca75b['default'] {
                    constructor(_0x53e207) {
                        const _0x19c4e5 = _0x2e8a80;
                        super(_0x53e207), this[_0x19c4e5(0x161a)] = 0x0, this['angleValue'] = 0x0, this['singularityTime'] = 0x0, this['doingSingularity'] = !0x1, this[_0x19c4e5(0x1a73)] = 0x0, this['hasBullets'] = !0x1, this['totalDamageCalculated'] = !0x1, this[_0x19c4e5(0x124f)] = !0x1, this[_0x19c4e5(0x1045)] = new Phaser[(_0x19c4e5(0x10d2))]['Circle'](0x0, 0x0, 0x10), this[_0x19c4e5(0x125b)] = _0x757d2d['default']['Core'][_0x19c4e5(0x6d2)][_0x19c4e5(0x18bd)][_0x19c4e5(0x1791)]('vfx'), this[_0x19c4e5(0x121b)] = this[_0x19c4e5(0x125b)][_0x19c4e5(0x14c0)]({
                            'frame': ['2Spell1.png', '2Spell2.png'],
                            'speed': 0x0,
                            'quantity': 0x1,
                            'lifespan': {
                                'min': 0xbb8,
                                'max': 0x1b58
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'min': 0x1,
                                'max': 0x2
                            },
                            'on': !0x1,
                            'blendMode': _0x43ebf2[_0x19c4e5(0x10fc)]['ADD'],
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x19c4e5(0x1045)]
                            }
                        }), this[_0x19c4e5(0x81e)] = this[_0x19c4e5(0x125b)][_0x19c4e5(0x14c0)]({
                            'frame': ['2Spell3.png', '2Spell4.png'],
                            'speed': 0x0,
                            'quantity': 0x1,
                            'lifespan': {
                                'min': 0x3e8,
                                'max': 0x7d0
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x0,
                                'end': 0x2,
                                'ease': 'Quint.easeOut'
                            },
                            'on': !0x1,
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x19c4e5(0x1045)]
                            }
                        }), this['well1'] = this[_0x19c4e5(0x125b)][_0x19c4e5(0x1386)]({
                            'x': 0x0,
                            'y': 0x0,
                            'power': 0x1,
                            'epsilon': 0xc8,
                            'gravity': 0x190
                        }), this[_0x19c4e5(0x127a)] = this['PfxEmitter'][_0x19c4e5(0x1386)]({
                            'x': 0x0,
                            'y': 0x0,
                            'power': 0x1,
                            'epsilon': 0xc8,
                            'gravity': 0x190
                        }), this['circleEmitZone'] = new Phaser['Geom'][(_0x19c4e5(0xf29))](0x0, 0x0, 0xc8), this[_0x19c4e5(0x15b5)] = _0x757d2d['default'][_0x19c4e5(0x1043)][_0x19c4e5(0x6d2)][_0x19c4e5(0x18bd)]['particles']('vfx'), this[_0x19c4e5(0x1265)] = this[_0x19c4e5(0x15b5)][_0x19c4e5(0x14c0)]({
                            'frame': {
                                'frames': ['2Spell1.png', '2Spell2.png', '2Spell3.png'],
                                'cycle': !0x1
                            },
                            'x': 0.5 * _0x757d2d[_0x19c4e5(0xd2c)]['Core']['scene']['renderer'][_0x19c4e5(0x173c)],
                            'y': 0.5 * _0x757d2d[_0x19c4e5(0xd2c)]['Core'][_0x19c4e5(0x6d2)][_0x19c4e5(0x12f9)]['height'],
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'lifespan': 0x5dc,
                            'blendMode': 'ADD',
                            'emitZone': {
                                'type': 'edge',
                                'source': this[_0x19c4e5(0x289)],
                                'quantity': 0x78,
                                'yoyo': !0x1
                            },
                            'on': !0x0
                        }), this[_0x19c4e5(0x1265)][_0x19c4e5(0xd87)](0x0), this['singularityTime'] = 0x0, this['doingSingularity'] = !0x1, this['skipEmitUpdate'] = !0x1, this[_0x19c4e5(0x75a)] = !0x1;
                    }
                    get['SingularityPower']() {
                        const _0x3ef2a7 = _0x2e8a80;
                        let _0x14218c = (this['power'] + 0.001 * this[_0x3ef2a7(0x16c3)] + this[_0x3ef2a7(0x712)] + this['PArea']) * this[_0x3ef2a7(0x942)];
                        return _0x14218c += 0.5 * this[_0x3ef2a7(0x1a73)], _0x757d2d[_0x3ef2a7(0xd2c)]['Core']['Player'][_0x3ef2a7(0x947)] ? Math['min'](0xa, (_0x757d2d[_0x3ef2a7(0xd2c)][_0x3ef2a7(0x1043)]['Arcanas']['silentMight'] + _0x757d2d[_0x3ef2a7(0xd2c)][_0x3ef2a7(0x1043)][_0x3ef2a7(0x10f6)][_0x3ef2a7(0x31f)]) * _0x757d2d['default'][_0x3ef2a7(0x1043)]['Player'][_0x3ef2a7(0x947)][_0x3ef2a7(0xb81)]) * _0x14218c + _0x757d2d[_0x3ef2a7(0xd2c)]['Core'][_0x3ef2a7(0x1884)]['bloodlineDamage'] : Math['min'](0xa, _0x757d2d['default'][_0x3ef2a7(0x1043)][_0x3ef2a7(0x1884)]['silentMight'] + _0x757d2d[_0x3ef2a7(0xd2c)]['Core'][_0x3ef2a7(0x10f6)]['power']) * _0x14218c + _0x757d2d['default'][_0x3ef2a7(0x1043)]['Arcanas'][_0x3ef2a7(0x1117)];
                    }
                    get['SingularityDelay']() {
                        const _0x2e50bf = _0x2e8a80;
                        return 0x4e20 + 0x4e20 * Math[_0x2e50bf(0x1981)](0.1, _0x757d2d[_0x2e50bf(0xd2c)]['Core']['Arcanas'][_0x2e50bf(0x981)] + _0x757d2d[_0x2e50bf(0xd2c)]['Core'][_0x2e50bf(0x10f6)]['cooldown']);
                    } ['stats_getDPS']() {
                        const _0x14e20d = _0x2e8a80;
                        let _0x52e928 = (this['Weapon_String']['stats_inflictedDamage'] + this[_0x14e20d(0x72d)][_0x14e20d(0xb3d)] + this['Weapon_Strike'][_0x14e20d(0xb3d)] + this[_0x14e20d(0xb3d)]) / (this['stats_lifetime'] / 0x3e8);
                        return _0x52e928 = _0x52e928 || 0x0, _0x52e928;
                    } ['CalculateTotalDamage']() {
                        const _0x24b0f8 = _0x2e8a80;
                        if (!this[_0x24b0f8(0x75a)]) {
                            let _0x6d5def = this[_0x24b0f8(0x1107)]['stats_inflictedDamage'] + this[_0x24b0f8(0x72d)][_0x24b0f8(0xb3d)] + this['Weapon_Strike']['stats_inflictedDamage'] + this[_0x24b0f8(0xb3d)];
                            this['stats_inflictedDamage'] = _0x6d5def, this[_0x24b0f8(0x75a)] = !0x0;
                        }
                        return this[_0x24b0f8(0xb3d)];
                    } ['Update'](_0x5e5090) {
                        const _0x5cb1ab = _0x2e8a80;
                        super[_0x5cb1ab(0xa9f)](_0x5e5090), this[_0x5cb1ab(0x124f)] || (this['InitBullets'](), this['hasBullets'] = !0x0), this[_0x5cb1ab(0xfab)] += _0x5e5090, this[_0x5cb1ab(0xfab)] > this['SingularityDelay'] && (this['DoSingularity'](), this[_0x5cb1ab(0xfab)] = 0x0), this[_0x5cb1ab(0x1107)] && this['Weapon_String'][_0x5cb1ab(0xa9f)](_0x5e5090), this['Weapon_Stream'] && this[_0x5cb1ab(0x72d)][_0x5cb1ab(0xa9f)](_0x5e5090), this[_0x5cb1ab(0xc3a)] && this['Weapon_Strike'][_0x5cb1ab(0xa9f)](_0x5e5090), this['doingSingularity'] || (this[_0x5cb1ab(0x161a)] = Math['min'](0.4 * _0x757d2d[_0x5cb1ab(0xd2c)]['Core'][_0x5cb1ab(0x6d2)]['renderer'][_0x5cb1ab(0x173c)], 0.4 * _0x757d2d[_0x5cb1ab(0xd2c)][_0x5cb1ab(0x1043)][_0x5cb1ab(0x6d2)][_0x5cb1ab(0x12f9)]['height']), this['emitZone'][_0x5cb1ab(0x161a)] = 0.8 * this[_0x5cb1ab(0x161a)], this[_0x5cb1ab(0x289)]['radius'] = this[_0x5cb1ab(0x161a)], this[_0x5cb1ab(0x125b)]['setDepth'](-_0x757d2d['default'][_0x5cb1ab(0x1043)]['scene']['renderer']['height'])), this[_0x5cb1ab(0x14e8)] += 0.001 * _0x5e5090;
                        let _0x3d2388 = Math['cos'](this['angleValue']) * this['radius'],
                            _0x423f8d = Math['sin'](this['angleValue']) * this[_0x5cb1ab(0x161a)];
                        this['well1']['x'] = _0x757d2d[_0x5cb1ab(0xd2c)][_0x5cb1ab(0x1043)]['Player']['x'] + _0x3d2388, this[_0x5cb1ab(0x1313)]['y'] = _0x757d2d['default'][_0x5cb1ab(0x1043)]['Player']['y'] + _0x423f8d, this[_0x5cb1ab(0x127a)]['x'] = _0x757d2d['default']['Core']['Player']['x'] - _0x3d2388, this['well2']['y'] = _0x757d2d[_0x5cb1ab(0xd2c)][_0x5cb1ab(0x1043)]['Player']['y'] - _0x423f8d, this[_0x5cb1ab(0x1313)][_0x5cb1ab(0x226)] = 'WELL UNO', this[_0x5cb1ab(0x127a)]['name'] = 'DUE DUE', this[_0x5cb1ab(0x4b8)] || (this[_0x5cb1ab(0x121b)][_0x5cb1ab(0x11c7)](_0x43ebf2['BlendModes']['NORMAL']), this['emitter2']['setBlendMode'](_0x43ebf2['BlendModes']['NORMAL']), this[_0x5cb1ab(0x121b)]['setEmitZone']({
                            'type': 'random',
                            'source': this['emitZone']
                        }), this['emitter2']['setEmitZone']({
                            'type': 'random',
                            'source': this[_0x5cb1ab(0x1045)]
                        }), this['emitter1'][_0x5cb1ab(0x108b)](_0x757d2d['default'][_0x5cb1ab(0x1043)][_0x5cb1ab(0x10f6)]['x'], _0x757d2d[_0x5cb1ab(0xd2c)][_0x5cb1ab(0x1043)][_0x5cb1ab(0x10f6)]['y'], 0x8), this[_0x5cb1ab(0x81e)][_0x5cb1ab(0x108b)](_0x757d2d['default'][_0x5cb1ab(0x1043)][_0x5cb1ab(0x10f6)]['x'], _0x757d2d['default'][_0x5cb1ab(0x1043)][_0x5cb1ab(0x10f6)]['y'], 0x8)), this[_0x5cb1ab(0x1265)]['setPosition'](0.5 * _0x757d2d[_0x5cb1ab(0xd2c)][_0x5cb1ab(0x1043)][_0x5cb1ab(0x6d2)][_0x5cb1ab(0x12f9)]['width'], 0.5 * _0x757d2d[_0x5cb1ab(0xd2c)][_0x5cb1ab(0x1043)][_0x5cb1ab(0x6d2)]['renderer']['height']);
                    } ['InitBullets']() {
                        const _0x4487df = _0x2e8a80;
                        this[_0x4487df(0x15ff)] = this[_0x4487df(0xc82)]['SpawnAt'](this[_0x4487df(0x1313)]['x'], this[_0x4487df(0x1313)]['y'], this, 0x0), this[_0x4487df(0x15ff)][_0x4487df(0x1a6d)](this['well1']), this[_0x4487df(0x2e8)] = this['pool'][_0x4487df(0xada)](this[_0x4487df(0x127a)]['y'], this[_0x4487df(0x127a)]['y'], this, 0x1), this[_0x4487df(0x2e8)][_0x4487df(0x1a6d)](this['well2']);
                    } ['Fire']() {} ['DoSingularity']() {
                        const _0x1c9716 = _0x2e8a80;
                        var _0x58e687, _0x106ca2;
                        this[_0x1c9716(0x1970)] = !0x0, this[_0x1c9716(0x94d)](), _0x757d2d[_0x1c9716(0xd2c)][_0x1c9716(0x1267)][_0x1c9716(0x7f6)](_0x4f72dc['default']['SpellStrom'], {
                            'volume': 0x1,
                            'rate': 0x1
                        }, 0x190, 0x3), _0x757d2d[_0x1c9716(0xd2c)][_0x1c9716(0x1267)]['PlaySound'](_0x4f72dc[_0x1c9716(0xd2c)]['SpellStrom'], {
                            'volume': 0x1,
                            'rate': 0.6
                        }, 0x190, 0x3), _0x757d2d['default']['Sound'][_0x1c9716(0x7f6)](_0x4f72dc['default'][_0x1c9716(0x46a)], {
                            'volume': 0x1,
                            'rate': 0.2
                        }, 0x190, 0x3), null === (_0x58e687 = this['singularityTween']) || void 0x0 === _0x58e687 || _0x58e687[_0x1c9716(0x1a34)](), this[_0x1c9716(0x19f6)] = _0x757d2d[_0x1c9716(0xd2c)][_0x1c9716(0x1043)][_0x1c9716(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'radius': 0x1,
                            'duration': 0x1388,
                            'onUpdate': () => {},
                            'onComplete': () => {
                                const _0xf845f = _0x1c9716;
                                this[_0xf845f(0x170e)]();
                            }
                        });
                        let _0x2cc760 = Math['min'](0.4 * _0x757d2d['default'][_0x1c9716(0x1043)][_0x1c9716(0x6d2)][_0x1c9716(0x12f9)][_0x1c9716(0x173c)], 0.4 * _0x757d2d['default']['Core']['scene']['renderer'][_0x1c9716(0x140e)]);
                        null === (_0x106ca2 = this['restoreTween']) || void 0x0 === _0x106ca2 || _0x106ca2[_0x1c9716(0x1a34)](), this[_0x1c9716(0x3cb)] = _0x757d2d['default']['Core'][_0x1c9716(0x6d2)][_0x1c9716(0x12a1)][_0x1c9716(0x18bd)]({
                            'targets': this,
                            'radius': _0x2cc760,
                            'duration': 0xc8,
                            'delay': 0x1388,
                            'onStart': () => {
                                const _0x57579f = _0x1c9716;
                                this['ScreenShake'](), _0x757d2d[_0x57579f(0xd2c)]['Sound'][_0x57579f(0x7f6)](_0x4f72dc[_0x57579f(0xd2c)][_0x57579f(0x184a)], {
                                    'rate': 0.5,
                                    'volume': 0x1
                                }, 0xc8, 0x4), _0x757d2d[_0x57579f(0xd2c)][_0x57579f(0x1267)][_0x57579f(0x7f6)](_0x4f72dc[_0x57579f(0xd2c)]['SpellStrike'], {
                                    'rate': 0.4,
                                    'volume': 0x1
                                }, 0xc8, 0x4), this[_0x57579f(0x1a73)]++;
                            },
                            'onComplete': () => {
                                const _0x29bd6e = _0x1c9716;
                                this[_0x29bd6e(0x28a)](this['SingularityPower']), this[_0x29bd6e(0x1970)] = !0x1;
                            },
                            'onUpdate': () => {
                                const _0x855c8e = _0x1c9716;
                                this['PfxEmitter']['setDepth'](_0x757d2d[_0x855c8e(0xd2c)][_0x855c8e(0x1043)][_0x855c8e(0x6d2)][_0x855c8e(0x12f9)]['height']), this['emitter1'][_0x855c8e(0x108b)](_0x757d2d['default'][_0x855c8e(0x1043)][_0x855c8e(0x10f6)]['x'], _0x757d2d['default']['Core'][_0x855c8e(0x10f6)]['y'], 0x50), this[_0x855c8e(0x81e)]['emitParticleAt'](_0x757d2d[_0x855c8e(0xd2c)][_0x855c8e(0x1043)][_0x855c8e(0x10f6)]['x'], _0x757d2d['default']['Core']['Player']['y'], 0x50);
                            }
                        });
                    } ['ExplodeSingularity']() {
                        const _0xbc2da6 = _0x2e8a80;
                        var _0x4ef4d8;
                        this[_0xbc2da6(0x4b8)] = !0x0;
                        let _0x4f5065 = new Phaser['Geom'][(_0xbc2da6(0xb64))](0.5 * -_0x757d2d['default'][_0xbc2da6(0x1043)][_0xbc2da6(0x6d2)]['renderer'][_0xbc2da6(0x173c)], -0x5, _0x757d2d[_0xbc2da6(0xd2c)][_0xbc2da6(0x1043)][_0xbc2da6(0x6d2)]['renderer'][_0xbc2da6(0x173c)], 0xa);
                        this[_0xbc2da6(0x121b)][_0xbc2da6(0x152)]({
                            'type': 'random',
                            'source': _0x4f5065
                        }), this[_0xbc2da6(0x81e)]['setEmitZone']({
                            'type': 'random',
                            'source': _0x4f5065
                        }), this[_0xbc2da6(0x121b)]['setBlendMode'](_0x43ebf2['BlendModes']['ADD']), this['emitter2'][_0xbc2da6(0x11c7)](_0x43ebf2[_0xbc2da6(0x10fc)][_0xbc2da6(0x1811)]);
                        let _0x427b39 = 0.5 * _0x757d2d[_0xbc2da6(0xd2c)]['Core'][_0xbc2da6(0x6d2)]['renderer']['width'];
                        null === (_0x4ef4d8 = this[_0xbc2da6(0x2f1)]) || void 0x0 === _0x4ef4d8 || _0x4ef4d8[_0xbc2da6(0x1a34)](), this[_0xbc2da6(0x2f1)] = _0x757d2d[_0xbc2da6(0xd2c)][_0xbc2da6(0x1043)][_0xbc2da6(0x6d2)][_0xbc2da6(0x12a1)][_0xbc2da6(0x3a0)]({
                            'from': 0x0,
                            'to': 0x1,
                            'duration': 0xc8,
                            'onUpdate': () => {
                                const _0x41097b = _0xbc2da6;
                                _0x4f5065['x'] = -_0x427b39 * this[_0x41097b(0x2f1)][_0x41097b(0x170f)](), _0x4f5065[_0x41097b(0x173c)] = _0x757d2d[_0x41097b(0xd2c)]['Core']['scene']['renderer']['width'] * this[_0x41097b(0x2f1)]['getValue'](), this[_0x41097b(0x121b)][_0x41097b(0x108b)](_0x757d2d[_0x41097b(0xd2c)]['Core']['Player']['x'], _0x757d2d['default'][_0x41097b(0x1043)]['Player']['y'], 0xa0), this['emitter2'][_0x41097b(0x108b)](_0x757d2d[_0x41097b(0xd2c)]['Core'][_0x41097b(0x10f6)]['x'], _0x757d2d['default'][_0x41097b(0x1043)]['Player']['y'], 0xa0);
                            },
                            'onComplete': () => {
                                const _0x2c11e1 = _0xbc2da6;
                                this[_0x2c11e1(0x4b8)] = !0x1;
                            }
                        });
                    } ['OnStart']() {
                        const _0x1527f0 = _0x2e8a80;
                        if (super['OnStart'](), this[_0x1527f0(0x1107)] = _0x757d2d[_0x1527f0(0xd2c)][_0x1527f0(0x1043)]['WeaponFactory']['GetWeapon'](_0x111df4['default']['SPELL_STRING']), this[_0x1527f0(0x1107)]) {
                            for (this[_0x1527f0(0x1107)][_0x1527f0(0x174e)] = !0x0; this[_0x1527f0(0x1107)][_0x1527f0(0x5e3)] < 0x6;) this[_0x1527f0(0x1107)][_0x1527f0(0x2ab)]();
                            this[_0x1527f0(0x1107)][_0x1527f0(0xb11)]([this[_0x1527f0(0x1313)], this['well2']]), this['Weapon_String']['power'] += 0x1;
                        }
                        if (this[_0x1527f0(0x72d)] = _0x757d2d[_0x1527f0(0xd2c)]['Core'][_0x1527f0(0x825)][_0x1527f0(0xc12)](_0x111df4[_0x1527f0(0xd2c)]['SPELL_STREAM']), this['Weapon_Stream']) {
                            for (this[_0x1527f0(0x72d)][_0x1527f0(0x174e)] = !0x0; this[_0x1527f0(0x72d)][_0x1527f0(0x5e3)] < 0x6;) this[_0x1527f0(0x72d)][_0x1527f0(0x2ab)]();
                            this[_0x1527f0(0x72d)]['speed'] += 0x1, this['Weapon_Stream'][_0x1527f0(0x5ef)] += 0x1f4, this[_0x1527f0(0x72d)][_0x1527f0(0x1702)] += 0.5;
                        }
                        if (this[_0x1527f0(0xc3a)] = _0x757d2d['default'][_0x1527f0(0x1043)][_0x1527f0(0x825)][_0x1527f0(0xc12)](_0x111df4[_0x1527f0(0xd2c)][_0x1527f0(0x119b)]), this[_0x1527f0(0xc3a)]) {
                            for (this['Weapon_Strike'][_0x1527f0(0x174e)] = !0x0; this['Weapon_Strike'][_0x1527f0(0x5e3)] < 0x6;) this[_0x1527f0(0xc3a)][_0x1527f0(0x2ab)]();
                            this[_0x1527f0(0xc3a)]['amount'] += 0x2;
                        }
                        let _0x230b03 = _0x757d2d[_0x1527f0(0xd2c)][_0x1527f0(0x1043)]['RemovedWeapons'][_0x1527f0(0x1e6)](_0x4e6bb8 => _0x4e6bb8[_0x1527f0(0x14e)] === _0x111df4[_0x1527f0(0xd2c)]['SPELL_STRING']),
                            _0x3edc4c = _0x757d2d[_0x1527f0(0xd2c)]['Core']['RemovedWeapons'][_0x1527f0(0x1e6)](_0x4acd2f => _0x4acd2f['bulletType'] === _0x111df4['default'][_0x1527f0(0x156)]),
                            _0x3d6fbc = _0x757d2d[_0x1527f0(0xd2c)][_0x1527f0(0x1043)]['RemovedWeapons']['find'](_0x4b77ae => _0x4b77ae['bulletType'] === _0x111df4[_0x1527f0(0xd2c)]['SPELL_STRIKE']);
                        _0x230b03 && this[_0x1527f0(0x147e)](_0x230b03, this[_0x1527f0(0x1107)]), _0x3edc4c && this[_0x1527f0(0x147e)](_0x3edc4c, this[_0x1527f0(0x72d)]), _0x3d6fbc && this[_0x1527f0(0x147e)](_0x3d6fbc, this[_0x1527f0(0xc3a)]), _0x757d2d['default'][_0x1527f0(0x1267)][_0x1527f0(0x7f6)](_0x4f72dc[_0x1527f0(0xd2c)][_0x1527f0(0x46a)], {
                            'volume': 0x2
                        }, 0x190, 0x1), this[_0x1527f0(0x94d)]();
                    } ['ScreenShake']() {
                        const _0x5d8fb5 = _0x2e8a80;
                        _0x757d2d['default']['Core'][_0x5d8fb5(0x14d8)]['ScreenShakeEnabled'] && _0x757d2d['default'][_0x5d8fb5(0x1043)]['scene'][_0x5d8fb5(0x12a1)]['add']({
                            'targets': _0x757d2d['default']['Core'][_0x5d8fb5(0x6d2)][_0x5d8fb5(0x1793)][_0x5d8fb5(0x4cd)]['followOffset'],
                            'x': 0x3,
                            'duration': 0x18,
                            'yoyo': !0x0,
                            'repeat': 0xc,
                            'onStart': () => {
                                const _0x2b6cb8 = _0x5d8fb5;
                                _0x757d2d['default'][_0x2b6cb8(0x1043)][_0x2b6cb8(0x6d2)][_0x2b6cb8(0x1793)][_0x2b6cb8(0x4cd)]['followOffset']['x'] = -0x3;
                            },
                            'onComplete': () => {
                                const _0x520590 = _0x5d8fb5;
                                _0x757d2d['default']['Core'][_0x520590(0x6d2)][_0x520590(0x1793)][_0x520590(0x4cd)][_0x520590(0x188c)](0x0, 0x0);
                            }
                        });
                    } ['CleanUp']() {
                        const _0x2d66bc = _0x2e8a80;
                        var _0x49c45f, _0x1f2f00;
                        this['firingTimer'] && this['firingTimer']['destroy'](), null === (_0x49c45f = this['pool']) || void 0x0 === _0x49c45f || _0x49c45f[_0x2d66bc(0x13f4)]['forEach'](_0x154779 => {
                            const _0x5c3458 = _0x2d66bc;
                            _0x154779[_0x5c3458(0x14fb)]();
                        }), null === (_0x1f2f00 = this['secondaryPool']) || void 0x0 === _0x1f2f00 || _0x1f2f00['spawned'][_0x2d66bc(0x858)](_0xfa9223 => {
                            const _0x4caa0b = _0x2d66bc;
                            _0xfa9223[_0x4caa0b(0x14fb)]();
                        }), this[_0x2d66bc(0x72d)]['CleanUp'](), this[_0x2d66bc(0xc3a)][_0x2d66bc(0xdb0)](), this[_0x2d66bc(0x1107)][_0x2d66bc(0xdb0)](), this['emitter1'][_0x2d66bc(0x1a34)](), this[_0x2d66bc(0x81e)][_0x2d66bc(0x1a34)](), this['fixedCircleEmitter'][_0x2d66bc(0x1a34)](), this['BulletA'] && this['BulletA'][_0x2d66bc(0x14fb)](), this['BulletB'] && this['BulletB'][_0x2d66bc(0x14fb)]();
                    }
                }
                _0x2af031['W_Spellstrom'] = _0x26b054, _0x2af031['default'] = _0x26b054;
            };
