// Module 0x796b
// Args: _0x31ebd7, _0x3f3237, _0x40f6cd

export default (_0x31ebd7, _0x3f3237, _0x40f6cd) => {
                'use strict';
                const _0x3944f1 = a0_0x6932;
                var _0x49576f = this && this['__importDefault'] || function(_0x3646f2) {
                    const _0xbe97f = _0x3944f1;
                    return _0x3646f2 && _0x3646f2[_0xbe97f(0x16f1)] ? _0x3646f2 : {
                        'default': _0x3646f2
                    };
                };
                Object['defineProperty'](_0x3f3237, '__esModule', {
                    'value': !0x0
                });
                const _0x2fc438 = _0x49576f(_0x40f6cd(0x148f5)),
                    _0x3d2864 = _0x49576f(_0x40f6cd(0x1fd7)),
                    _0x383763 = _0x49576f(_0x40f6cd(0x54e3)),
                    _0x4e01e2 = _0x49576f(_0x40f6cd(0x5103)),
                    _0x1030cf = _0x49576f(_0x40f6cd(0x5f07)),
                    _0x2c6746 = _0x49576f(_0x40f6cd(0x869f));
                class _0x2e886c extends _0x2c6746['default'] {
                    ['AfterFullInitialization']() {
                        const _0x73c028 = _0x3944f1;
                        super[_0x73c028(0x7ed)](), this[_0x73c028(0x17a)] = this[_0x73c028(0x1786)]['bind'](this), _0x1030cf[_0x73c028(0xd2c)][_0x73c028(0x1043)]['OnCoinPickup']['push'](this['OnCoinPickupCallback']), this[_0x73c028(0x65d)] = _0x1030cf[_0x73c028(0xd2c)]['Core']['Weapons']['find'](_0x4f743c => _0x4f743c[_0x73c028(0x14e)] === _0x383763[_0x73c028(0xd2c)]['STIGRANGATTI']), this[_0x73c028(0x65d)] && (this['hungerWeapon']['goldChance'] = 0.165), this[_0x73c028(0xf9d)] = 1.25;
                    } ['OnQuit']() {
                        const _0x4aae1c = _0x3944f1;
                        _0x1030cf['default'][_0x4aae1c(0x1267)]['StopMusic'](_0x2fc438[_0x4aae1c(0xd2c)][_0x4aae1c(0x1afb)]), clearTimeout(this[_0x4aae1c(0x1037)]), clearTimeout(this[_0x4aae1c(0xfbd)]), clearTimeout(this['timeout3']);
                    } ['LevelUp']() {
                        const _0x3d0ff3 = _0x3944f1;
                        super[_0x3d0ff3(0x2ab)](), this[_0x3d0ff3(0x65d)] && this['hungerWeapon'][_0x3d0ff3(0x965)] < 0.65 && (this['hungerWeapon'][_0x3d0ff3(0x965)] += 0.005), 0x1e === this['level'] && this['scene']['time']['addEvent']({
                            'callback': () => {
                                const _0x44cdb5 = _0x3d0ff3;
                                _0x1030cf['default'][_0x44cdb5(0x1267)][_0x44cdb5(0x1099)](_0x1030cf[_0x44cdb5(0xd2c)]['Core']['CurrentBGM'], 0x0, 0x1f4), this[_0x44cdb5(0x1037)] = setTimeout(() => {
                                    const _0x598876 = _0x44cdb5;
                                    _0x1030cf[_0x598876(0xd2c)][_0x598876(0x1043)][_0x598876(0x4fa)](0x2710), _0x1030cf[_0x598876(0xd2c)]['Core'][_0x598876(0x6d2)]['time'][_0x598876(0x12b8)]({
                                        'callback': () => {
                                            const _0x1cdbc3 = _0x598876;
                                            _0x1030cf['default'][_0x1cdbc3(0x1043)][_0x1cdbc3(0x4fa)](0x2710);
                                        },
                                        'delay': 0x1388,
                                        'repeat': 0x3
                                    }), _0x1030cf[_0x598876(0xd2c)][_0x598876(0x1043)][_0x598876(0x84e)](), _0x1030cf['default'][_0x598876(0x1267)][_0x598876(0x19ba)](_0x1030cf['default']['Core'][_0x598876(0x1239)]);
                                }, 0x1f4), this['timeout2'] = setTimeout(() => {
                                    const _0x54b621 = _0x44cdb5;
                                    _0x1030cf[_0x54b621(0xd2c)]['Sound']['PlayMusic'](_0x2fc438[_0x54b621(0xd2c)]['BGM_HB'], {
                                        'volume': 0.4,
                                        'loop': !0x1,
                                        'rate': 0x1,
                                        'detune': 0x0
                                    });
                                }, 0x258), this['timeout3'] = setTimeout(() => {
                                    const _0x9ddc07 = _0x44cdb5;
                                    _0x1030cf['default'][_0x9ddc07(0x1267)][_0x9ddc07(0x19ba)](_0x2fc438[_0x9ddc07(0xd2c)]['BGM_HB']), _0x1030cf[_0x9ddc07(0xd2c)][_0x9ddc07(0x1267)]['SetupAndPlayBGM_Banger']();
                                }, 0x7918);
                            },
                            'delay': 0xc8
                        });
                    } ['OnCoinPickup'](_0x24e64a) {
                        const _0x802a5d = _0x3944f1;
                        _0x24e64a *= _0x4e01e2[_0x802a5d(0xd2c)]['GoldMultiplier'], _0x1030cf['default']['Core']['Player'] && (_0x24e64a *= _0x1030cf[_0x802a5d(0xd2c)][_0x802a5d(0x1043)][_0x802a5d(0x10f6)]['PGreed']), _0x1030cf[_0x802a5d(0xd2c)]['Core'][_0x802a5d(0x10f6)][_0x802a5d(0xec0)](_0x24e64a * _0x1030cf[_0x802a5d(0xd2c)]['Core'][_0x802a5d(0x10f6)]['PGrowth']), _0x1030cf['default'][_0x802a5d(0x1267)][_0x802a5d(0x7f6)](_0x3d2864[_0x802a5d(0xd2c)]['Gem'], {
                            'volume': 0.1
                        }, 0x1, 0x1), _0x1030cf[_0x802a5d(0xd2c)][_0x802a5d(0x1043)]['PlayerUI']['Update'](), _0x1030cf[_0x802a5d(0xd2c)][_0x802a5d(0x1043)][_0x802a5d(0x7fa)]();
                    }
                }
                _0x3f3237['default'] = _0x2e886c;
            };
