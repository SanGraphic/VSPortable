// Module 0x17260
// Args: _0x381795, _0x42078b, _0x3978a4

export default (_0x381795, _0x42078b, _0x3978a4) => {
                'use strict';
                const _0x3dc0b5 = a0_0x6932;
                var _0x382a9f = this && this['__importDefault'] || function(_0x101dd1) {
                    const _0x16b574 = a0_0x6932;
                    return _0x101dd1 && _0x101dd1['__esModule'] ? _0x101dd1 : {
                        'default': _0x101dd1
                    };
                };
                Object['defineProperty'](_0x42078b, '__esModule', {
                    'value': !0x0
                }), _0x42078b['SoundManager'] = void 0x0;
                const _0x50dace = _0x382a9f(_0x3978a4(0x15dd)),
                    _0x11e553 = _0x382a9f(_0x3978a4(0xefc8)),
                    _0x4d4987 = _0x382a9f(_0x3978a4(0x14639)),
                    _0x1cdd3c = _0x382a9f(_0x3978a4(0xe648)),
                    _0xdb79a3 = _0x382a9f(_0x3978a4(0x148f5)),
                    _0x528e68 = _0x382a9f(_0x3978a4(0x1fd7)),
                    _0x5b3b20 = _0x382a9f(_0x3978a4(0x5f07));
                class _0x234279 {
                    constructor(_0x3ce743, _0x4bd4ad) {
                        const _0x12e4ae = a0_0x6932;
                        this['isFocused'] = !0x0, this['soundLibrary'] = {}, this['musicLibrary'] = {}, this['Game'] = _0x3ce743, this['scene'] = _0x4bd4ad, this['Game']['events']['addListener'](Phaser['Core']['Events']['FOCUS'], this['onFocus'], this), this['Game']['events']['addListener'](Phaser['Core']['Events']['BLUR'], this['onBlur'], this);
                        for (let _0x248f16 in _0x528e68['default']) this['soundLibrary'][_0x248f16] = {
                            'instances': 0x0
                        };
                        for (let _0x11fdaf in _0xdb79a3['default']) this['musicLibrary'][_0x11fdaf] = {
                            'instance': null
                        };
                    } ['onFocus']() {
                        const _0xb6128a = a0_0x6932;
                        this['isFocused'] = !0x0;
                    } ['onBlur']() {
                        this['isFocused'] = !0x1;
                    } ['PlayMusic'](_0x56ee5f, _0x39ac8d = null) {
                        const _0x3fe0a6 = _0x3dc0b5;
                        if (_0x56ee5f !== _0xdb79a3[_0x3fe0a6(0xd2c)][_0x3fe0a6(0xa8c)]) {
                            var _0x18889b = this['musicLibrary'][_0x56ee5f][_0x3fe0a6(0x93f)];
                            _0x18889b || (_0x18889b = this['musicLibrary'][_0x56ee5f]['instance'] = this[_0x3fe0a6(0x6d2)]['sound']['add'](_0x56ee5f[_0x3fe0a6(0xcc6)]())), this[_0x3fe0a6(0x140d)] = _0x56ee5f, _0x18889b[_0x3fe0a6(0xc4d)] = _0x39ac8d['volume'], _0x39ac8d[_0x3fe0a6(0x1378)] && (_0x39ac8d[_0x3fe0a6(0x1378)] *= _0x5b3b20['default']['Core'][_0x3fe0a6(0x14d8)][_0x3fe0a6(0xd93)]), _0x18889b[_0x3fe0a6(0x902)](_0x39ac8d), this['currentBGMObj'] = _0x18889b;
                        }
                    } ['StopMusic'](_0x121bf1) {
                        const _0x423b4e = _0x3dc0b5;
                        if (_0x121bf1 !== _0xdb79a3[_0x423b4e(0xd2c)]['NONE']) {
                            var _0x7d8339 = this[_0x423b4e(0x1a24)][_0x121bf1][_0x423b4e(0x93f)];
                            _0x7d8339 && _0x7d8339['stop']();
                        }
                    } ['FadeMusic'](_0x5a42b2, _0x5e8306, _0x56986f) {
                        const _0x174326 = _0x3dc0b5;
                        if (_0x5a42b2 !== _0xdb79a3[_0x174326(0xd2c)][_0x174326(0xa8c)]) {
                            var _0x22ece1 = this[_0x174326(0x1a24)][_0x5a42b2][_0x174326(0x93f)];
                            _0x22ece1 && (0x0 == _0x5b3b20[_0x174326(0xd2c)][_0x174326(0x1043)][_0x174326(0x14d8)]['MusicVolume'] ? _0x22ece1[_0x174326(0x1378)] = 0x0 : _0x56986f > 0x0 ? this['scene']['tweens']['add']({
                                'targets': _0x22ece1,
                                'volume': _0x5e8306 * _0x5b3b20[_0x174326(0xd2c)]['Core'][_0x174326(0x14d8)][_0x174326(0xd93)],
                                'duration': _0x56986f
                            }) : _0x22ece1['volume'] = _0x5e8306 * _0x5b3b20[_0x174326(0xd2c)]['Core'][_0x174326(0x14d8)][_0x174326(0xd93)], _0x22ece1['currentVolume'] = _0x5e8306);
                        }
                    } ['PlaySound'](_0x19aeda, _0x1b45bd = null, _0x4d459d = 0x0, _0x3c11ae = 0x0) {
                        const _0x306edb = _0x3dc0b5;
                        if (0x0 != _0x5b3b20[_0x306edb(0xd2c)]['Core']['PlayerOptions'][_0x306edb(0x1366)]) {
                            if (_0x4d459d > 0x0 && _0x3c11ae > 0x0) {
                                if (this[_0x306edb(0x511)][_0x19aeda]['instances'] >= _0x3c11ae) return;
                                this[_0x306edb(0x6d2)]['time'][_0x306edb(0x12b8)]({
                                    'delay': _0x4d459d,
                                    'callback': () => this[_0x306edb(0x511)][_0x19aeda][_0x306edb(0x533)]--,
                                    'callbackScope': this
                                }), this['soundLibrary'][_0x19aeda][_0x306edb(0x533)]++;
                            }
                            return _0x1b45bd || (_0x1b45bd = {}), _0x1b45bd ? _0x1b45bd['volume'] ? _0x1b45bd[_0x306edb(0x1378)] *= 0.5 : _0x1b45bd[_0x306edb(0x1378)] = 0.1 : _0x1b45bd = {
                                'volume': 0.1
                            }, _0x1b45bd[_0x306edb(0x1378)] *= _0x5b3b20[_0x306edb(0xd2c)][_0x306edb(0x1043)][_0x306edb(0x14d8)][_0x306edb(0x1366)], _0x1b45bd['volume'] *= _0x5b3b20['default']['Core']['SFXVolumeFactor'], this[_0x306edb(0x6d2)][_0x306edb(0xf1d)][_0x306edb(0x902)](_0x19aeda, _0x1b45bd);
                        }
                    } ['UpdateMusicVolume'](_0x3d82ac, _0xa4668f = 0x0) {
                        const _0x2aaa69 = _0x3dc0b5;
                        var _0x3a7c51 = this[_0x2aaa69(0x1a24)][_0x3d82ac]['instance'];
                        _0x3a7c51 && (_0x3a7c51['volume'] = _0x3a7c51[_0x2aaa69(0xc4d)] * _0xa4668f);
                    } ['StopSound'](_0x2d8e4e) {
                        const _0x442170 = _0x3dc0b5;
                        this['scene'][_0x442170(0xf1d)][_0x442170(0x3c1)](_0x2d8e4e);
                    } ['SetupAndPlayBGM_Banger'](_0x52a665 = !0x0) {
                        const _0xb78a9e = _0x3dc0b5;
                        _0x5b3b20[_0xb78a9e(0xd2c)]['Sound']['StopMusic'](_0x5b3b20['default'][_0xb78a9e(0x1043)][_0xb78a9e(0x1239)]), _0x5b3b20[_0xb78a9e(0xd2c)]['Core']['CurrentBGM'] = _0x5b3b20['default'][_0xb78a9e(0x1043)][_0xb78a9e(0x14d8)][_0xb78a9e(0x5d3)];
                        let _0x1b8894 = {
                                'rate': 0x1,
                                'detune': 0x0
                            },
                            _0x2408df = _0x11e553[_0xb78a9e(0xd2c)][_0x5b3b20['default']['Core'][_0xb78a9e(0x1239)]];
                        _0x2408df && (_0x5b3b20[_0xb78a9e(0xd2c)][_0xb78a9e(0x1043)]['PlayerOptions'][_0xb78a9e(0x280)] === _0x1cdd3c[_0xb78a9e(0xd2c)]['Hyper'] ? _0x2408df['hyperMod'] && (_0x1b8894[_0xb78a9e(0x15fe)] = _0x2408df[_0xb78a9e(0xb1e)]['rate'], _0x1b8894[_0xb78a9e(0x1692)] = _0x2408df[_0xb78a9e(0xb1e)][_0xb78a9e(0x1692)]) : _0x5b3b20[_0xb78a9e(0xd2c)]['Core'][_0xb78a9e(0x14d8)][_0xb78a9e(0x280)] === _0x1cdd3c[_0xb78a9e(0xd2c)][_0xb78a9e(0x1106)] && _0x2408df[_0xb78a9e(0x1373)] && (_0x1b8894[_0xb78a9e(0x15fe)] = _0x2408df[_0xb78a9e(0x1373)]['rate'], _0x1b8894['detune'] = _0x2408df[_0xb78a9e(0x1373)][_0xb78a9e(0x1692)])), _0x5b3b20['default']['Sound'][_0xb78a9e(0x12e1)](_0x5b3b20[_0xb78a9e(0xd2c)]['Core'][_0xb78a9e(0x1239)], {
                            'volume': 0.3,
                            'loop': _0x52a665,
                            'rate': _0x1b8894['rate'],
                            'detune': _0x1b8894[_0xb78a9e(0x1692)]
                        });
                    } ['SetupAndPlayBGM_Normal']() {
                        const _0x5381e3 = _0x3dc0b5;
                        let _0x167e93 = !0x1,
                            _0x1e63e0 = _0x50dace[_0x5381e3(0xd2c)][_0x5b3b20[_0x5381e3(0xd2c)][_0x5381e3(0x1043)]['PlayerOptions'][_0x5381e3(0x1188)]];
                        if (_0x1e63e0 && _0x1e63e0[0x0] && _0x1e63e0[0x0]['bgm'] && (_0x167e93 = !0x0, _0x5b3b20[_0x5381e3(0xd2c)][_0x5381e3(0x1043)]['CurrentBGM'] = _0x1e63e0[0x0]['bgm'], _0x5b3b20['default'][_0x5381e3(0x1267)]['PlayMusic'](_0x5b3b20['default'][_0x5381e3(0x1043)][_0x5381e3(0x1239)], {
                                'volume': 0.3,
                                'loop': !0x0,
                                'rate': 0x1,
                                'detune': 0x0
                            })), !_0x167e93) {
                            if (_0x5b3b20[_0x5381e3(0xd2c)][_0x5381e3(0x1043)][_0x5381e3(0x14d8)][_0x5381e3(0x10fd)])(_0x5dbfc7 = _0x4d4987[_0x5381e3(0xd2c)][_0x5b3b20[_0x5381e3(0xd2c)][_0x5381e3(0x1043)]['PlayerOptions'][_0x5381e3(0x1856)]][0x0][_0x5381e3(0x1a57)])['BGM_ignoreModsForNewSoundtrack'] && _0x5b3b20[_0x5381e3(0xd2c)]['Core'][_0x5381e3(0x14d8)]['StreamSafeEnabled'] ? _0x5b3b20['default'][_0x5381e3(0x1267)]['PlayMusic'](_0x5b3b20['default']['Core'][_0x5381e3(0x1239)], {
                                'volume': 0.3,
                                'loop': !0x0,
                                'rate': 0x1,
                                'detune': 0x0
                            }) : _0x5b3b20[_0x5381e3(0xd2c)][_0x5381e3(0x1043)][_0x5381e3(0x14d8)][_0x5381e3(0xd6d)] ? _0x5b3b20[_0x5381e3(0xd2c)]['Sound']['PlayMusic'](_0x5b3b20['default'][_0x5381e3(0x1043)][_0x5381e3(0x1239)], {
                                'volume': 0.3,
                                'loop': !0x0,
                                'rate': _0x5dbfc7[_0x5381e3(0x2e1)],
                                'detune': _0x5dbfc7[_0x5381e3(0xb2f)]
                            }) : _0x5b3b20[_0x5381e3(0xd2c)]['Sound'][_0x5381e3(0x12e1)](_0x5b3b20['default'][_0x5381e3(0x1043)]['CurrentBGM'], {
                                'volume': 0.3,
                                'loop': !0x0,
                                'rate': _0x5dbfc7[_0x5381e3(0x1362)],
                                'detune': _0x5dbfc7['BGM_detune']
                            });
                            else {
                                var _0x5dbfc7;
                                (_0x5dbfc7 = _0x4d4987[_0x5381e3(0xd2c)][_0x5b3b20[_0x5381e3(0xd2c)]['Core']['PlayerOptions'][_0x5381e3(0x1856)]][0x0]['mods'])['BGM_detune'] ? _0x5b3b20['default'][_0x5381e3(0x1267)][_0x5381e3(0x12e1)](_0x5b3b20['default']['Core'][_0x5381e3(0x1239)], {
                                    'volume': 0.3,
                                    'loop': !0x0,
                                    'rate': _0x5dbfc7['BGM_rate'],
                                    'detune': _0x5dbfc7[_0x5381e3(0x116b)]
                                }): _0x5b3b20['default']['Sound']['PlayMusic'](_0x5b3b20[_0x5381e3(0xd2c)][_0x5381e3(0x1043)][_0x5381e3(0x1239)], {
                                    'volume': 0.3,
                                    'loop': !0x0,
                                    'rate': 0x1,
                                    'detune': 0x0
                                });
                            }
                        }
                    }
                }
                _0x42078b['SoundManager'] = _0x234279, _0x42078b['default'] = _0x234279;
            };
