// Module 0xc1d1
// Args: _0x20a6cb, _0x12760b, _0x5413e0

export default (_0x20a6cb, _0x12760b, _0x5413e0) => {
                'use strict';
                const _0x1abfc7 = a0_0x6932;
                var _0x3eb2c4 = this && this['__importDefault'] || function(_0x2cfa15) {
                    return _0x2cfa15 && _0x2cfa15['__esModule'] ? _0x2cfa15 : {
                        'default': _0x2cfa15
                    };
                };
                Object['defineProperty'](_0x12760b, '__esModule', {
                    'value': !0x0
                }), _0x12760b['B_Sire'] = void 0x0;
                const _0x30a7a6 = _0x3eb2c4(_0x5413e0(0xa14d)),
                    _0x916563 = _0x3eb2c4(_0x5413e0(0x5f07)),
                    _0x3c16ca = _0x3eb2c4(_0x5413e0(0x136b9)),
                    _0x783715 = _0x3eb2c4(_0x5413e0(0x1fd7)),
                    _0x48dfee = _0x3eb2c4(_0x5413e0(0x54e3));
                class _0x133143 extends _0x30a7a6['default'] {
                    constructor(_0x48c29, _0x2ec99e, _0x8bca01, _0x5aab6e, _0x2c7497) {
                        const _0x111eec = _0x1abfc7;
                        super(_0x48c29, _0x2ec99e, _0x8bca01, 'vfx', 'Rings3.png', _0x5aab6e, _0x2c7497), this[_0x111eec(0xf7c)] = ['Gem6.png', 'Gem7.png', 'Gem10.png'], this[_0x111eec(0x95b)] = [-0x8, 0x8, -0x10, 0x10], this[_0x111eec(0xf01)](_0x916563[_0x111eec(0xd2c)][_0x111eec(0x1043)]['Player']), this[_0x111eec(0x1234)] = this['weapon'], this[_0x111eec(0x35a)] = !0x1, this[_0x111eec(0x118c)] = this[_0x111eec(0x1234)][_0x111eec(0x118c)], this['rt'] = this[_0x111eec(0x1234)]['rt'], this[_0x111eec(0x1aa0)] = 0.8 * Math[_0x111eec(0x1084)](this[_0x111eec(0x6d2)][_0x111eec(0x12f9)][_0x111eec(0x173c)], this[_0x111eec(0x6d2)][_0x111eec(0x12f9)][_0x111eec(0x140e)]), this[_0x111eec(0x1234)]['outer'][_0x111eec(0x652)](0xffffff, 0xffff00, 0xffff00, 0xffffff), this[_0x111eec(0x1234)][_0x111eec(0xcdb)][_0x111eec(0x652)](0xffffff, 0xffff00, 0xffff00, 0xffffff);
                    } ['OnRecycle']() {
                        const _0x502770 = _0x1abfc7;
                        super['OnRecycle'](), this['body'][_0x502770(0x543)] = !0x1, this[_0x502770(0x177d)] = !0x1, _0x916563[_0x502770(0xd2c)]['Sound']['PlaySound'](_0x783715['default'][_0x502770(0x1520)], {
                            'volume': 1.3
                        });
                        let _0x52b987 = 0xbb8,
                            _0x351430 = [0x0, -0x1f4, -0xc8, -0x1f4];
                        for (let _0x34f063 = 0x0; _0x34f063 < 0x8; _0x34f063++) this[_0x502770(0x6d2)][_0x502770(0x915)]['addEvent']({
                            'delay': _0x52b987,
                            'callback': () => this[_0x502770(0x5cb)](_0x783715[_0x502770(0xd2c)]['MoonBeat'], _0x34f063, _0x351430[_0x34f063 % _0x351430[_0x502770(0xed9)]], 0x2ee)
                        }), _0x52b987 += 0x2ee;
                        for (let _0x5b1dc2 = 0x0; _0x5b1dc2 < 0x4; _0x5b1dc2++) this[_0x502770(0x6d2)][_0x502770(0x915)][_0x502770(0x12b8)]({
                            'delay': _0x52b987,
                            'callback': () => this['EraseRandomEnemy'](_0x783715['default'][_0x502770(0x109c)], _0x5b1dc2, _0x351430[_0x5b1dc2 % _0x351430[_0x502770(0xed9)]], 0x177)
                        }), _0x52b987 += 0x177;
                        for (let _0x350215 = 0x0; _0x350215 < 0x8; _0x350215++) this[_0x502770(0x6d2)][_0x502770(0x915)][_0x502770(0x12b8)]({
                            'delay': _0x52b987,
                            'callback': () => this['EraseRandomEnemy'](_0x783715['default'][_0x502770(0x109c)], _0x350215, _0x351430[_0x350215 % _0x351430[_0x502770(0xed9)]], 0xc8)
                        }), _0x52b987 += 0xc8;
                        this[_0x502770(0x6d2)][_0x502770(0x915)][_0x502770(0x12b8)]({
                            'delay': _0x52b987,
                            'callback': () => this['DrawSymbol']()
                        });
                    } ['EraseRandomEnemy'](_0x2dd898, _0x487c54 = 0x0, _0x8b3ac5 = 0x0, _0x35775b) {
                        const _0x34acac = _0x1abfc7;
                        var _0x446246 = this['scene'][_0x34acac(0x1585)]['closest'](_0x916563['default'][_0x34acac(0x1043)]['Player'], _0x916563[_0x34acac(0xd2c)][_0x34acac(0x1043)]['Enemies']['filter'](_0x4a021c => !_0x4a021c['isDead']));
                        _0x446246 && this[_0x34acac(0x1234)][_0x34acac(0x217)][_0x34acac(0xada)](_0x446246['x'], _0x446246['y'], 0x0, 0xa), _0x916563[_0x34acac(0xd2c)][_0x34acac(0x1267)][_0x34acac(0x7f6)](_0x2dd898, {
                            'volume': 0.5,
                            'detune': _0x8b3ac5
                        }), this[_0x34acac(0xeb3)](_0x446246, _0x487c54);
                        let _0x1019c3 = _0x35775b / 0x3;
                        _0x916563[_0x34acac(0xd2c)]['Core'][_0x34acac(0x14d8)]['FlashingVFXEnabled'] && this[_0x34acac(0x1234)][_0x34acac(0x149b)](_0x1019c3, 0.6, 0.6, this);
                    } ['MoonDamage'](_0x25f819, _0x3a5a0b = 0x0) {
                        const _0x4ddb1d = _0x1abfc7;
                        if (!_0x25f819) return;
                        if (_0x25f819[_0x4ddb1d(0x1935)]) return;
                        _0x25f819['GetDamaged'](Math[_0x4ddb1d(0x1981)](0x42, _0x25f819[_0x4ddb1d(0xd2e)]), _0x3c16ca[_0x4ddb1d(0xd2c)][_0x4ddb1d(0xa8c)], 0x0, _0x48dfee[_0x4ddb1d(0xd2c)][_0x4ddb1d(0xf20)]);
                        let _0x2cb62e = this['weapon']['amount'],
                            _0x4f5140 = _0x916563[_0x4ddb1d(0xd2c)]['Core']['MakeGem'](_0x25f819['x'] + this['offsets'][_0x3a5a0b % this['offsets']['length']], _0x25f819['y'] + 0x10, _0x2cb62e);
                        _0x4f5140 && _0x4f5140[_0x4ddb1d(0x381)](this['frames'][_0x3a5a0b % this['frames']['length']]), this[_0x4ddb1d(0x4a1)][_0x4ddb1d(0xb3d)] += _0x25f819['maxHp'];
                    } ['DrawSymbol']() {
                        const _0x18025c = _0x1abfc7;
                        this[_0x18025c(0x1234)][_0x18025c(0x86a)](), this[_0x18025c(0x1234)]['HideSeal'](this), this['trueWeapon']['rt'][_0x18025c(0x159)](), this['trueWeapon'][_0x18025c(0xcdb)]['setScale'](this['globalScale'] / 0x100), this['trueWeapon']['outer'][_0x18025c(0x8a2)](this['globalScale'] / 0x100), this['trueWeapon'][_0x18025c(0x101a)][_0x18025c(0x8a2)](this['globalScale'] / 0x10), this['scene'][_0x18025c(0x915)][_0x18025c(0x12b8)]({
                            'delay': 0x64,
                            'callback': () => {
                                const _0x1dcd9e = _0x18025c;
                                this[_0x1dcd9e(0x28b)]();
                            }
                        }), this['rt']['draw'](this['trueWeapon'][_0x18025c(0x101a)]), this['rt'][_0x18025c(0x4a6)](this['trueWeapon'][_0x18025c(0xae0)]), this['rt'][_0x18025c(0x4a6)](this['trueWeapon']['inner']), this[_0x18025c(0x118c)][_0x18025c(0xf01)](_0x916563[_0x18025c(0xd2c)]['Core']['Player']), this[_0x18025c(0x2d7)](), _0x916563[_0x18025c(0xd2c)]['Sound'][_0x18025c(0x7f6)](_0x783715['default'][_0x18025c(0xe18)], {
                            'volume': 0.9,
                            'rate': 0x2
                        }), _0x916563[_0x18025c(0xd2c)][_0x18025c(0x1267)]['PlaySound'](_0x783715['default'][_0x18025c(0x1110)], {
                            'volume': 1.3
                        });
                    } ['EraseEnemies']() {
                        const _0x15832b = _0x1abfc7;
                        for (let _0x58b800 = 0x0; _0x58b800 < _0x916563[_0x15832b(0xd2c)][_0x15832b(0x1043)][_0x15832b(0x1a91)][_0x15832b(0xed9)]; _0x58b800++) {
                            const _0x48499f = _0x916563[_0x15832b(0xd2c)]['Core'][_0x15832b(0x1a91)][_0x58b800];
                            if (!_0x48499f['res_Rosary'] && _0x916563[_0x15832b(0xd2c)][_0x15832b(0x1043)][_0x15832b(0x1554)][_0x15832b(0x185)](_0x48499f)) {
                                _0x48499f[_0x15832b(0x1112)](Math[_0x15832b(0x1981)](0x42, _0x48499f[_0x15832b(0xd2e)]), _0x3c16ca[_0x15832b(0xd2c)][_0x15832b(0xa8c)], 0x0, _0x48dfee['default'][_0x15832b(0xf20)]);
                                let _0x2217a2 = _0x916563['default']['Core'][_0x15832b(0x665)](_0x48499f['x'] + this[_0x15832b(0x95b)][_0x58b800 % this[_0x15832b(0x95b)][_0x15832b(0xed9)]], _0x48499f['y'] + 0x10, 0x1);
                                _0x2217a2 && _0x2217a2['setFrame'](this[_0x15832b(0xf7c)][_0x58b800 % this[_0x15832b(0xf7c)][_0x15832b(0xed9)]]), this[_0x15832b(0x4a1)]['stats_inflictedDamage'] += _0x48499f['maxHp'];
                            }
                        }
                    } ['Update']() {
                        const _0x20638a = _0x1abfc7;
                        this['canvas']['copyPosition'](_0x916563[_0x20638a(0xd2c)]['Core'][_0x20638a(0x10f6)]);
                    } ['Shatter']() {
                        const _0x5ed27d = _0x1abfc7;
                        let _0x5bf3d1 = this[_0x5ed27d(0x118c)];
                        _0x5bf3d1[_0x5ed27d(0x1d9)] && (_0x5bf3d1[_0x5ed27d(0x1d9)]['stop'](), _0x5bf3d1['task'] = null), _0x5bf3d1['shatter'](), this[_0x5ed27d(0x6d2)][_0x5ed27d(0x12f9)][_0x5ed27d(0x173c)], _0x5bf3d1[_0x5ed27d(0xe71)] = 0x1, _0x5bf3d1[_0x5ed27d(0x3a8)] = 0x1, _0x5bf3d1[_0x5ed27d(0x1d9)] = this[_0x5ed27d(0x6d2)]['tweens'][_0x5ed27d(0x18bd)]({
                            'targets': _0x5bf3d1[_0x5ed27d(0x441)],
                            'alpha': 0x0,
                            'angle': function() {
                                return 0x168 * Math['random']() - 0x5a;
                            },
                            'x': function() {
                                const _0xae863c = _0x5ed27d;
                                return 1.5 * (Math[_0xae863c(0x9ad)]() - 0.5);
                            },
                            'y': function() {
                                const _0x3041f3 = _0x5ed27d;
                                return 1.2 * (Math[_0x3041f3(0x9ad)]() - 0.5);
                            },
                            'ease': 'Sine.easeInOut',
                            'duration': 0x3e8,
                            'delay': 0x96,
                            'repeat': 0x0,
                            'yoyo': !0x0,
                            'onYoyo': () => {
                                const _0x574f65 = _0x5ed27d;
                                _0x916563[_0x574f65(0xd2c)][_0x574f65(0x1043)]['TurnOnVacuum'](), _0x5bf3d1[_0x574f65(0x3a8)] = -0x1;
                            },
                            'onComplete': () => {
                                const _0x1d3092 = _0x5ed27d;
                                _0x5bf3d1[_0x1d3092(0x1a6c)](), this['DeSpawn'](), this[_0x1d3092(0x6d2)][_0x1d3092(0x12a1)][_0x1d3092(0x18bd)]({
                                    'targets': _0x5bf3d1,
                                    'alpha': 0x0,
                                    'duration': 0x1f4,
                                    'ease': 'Sine.easeInOut'
                                });
                            }
                        }), _0x5bf3d1[_0x5ed27d(0x1a21)]();
                    } ['Init'](_0x4abb3f = -0x3e8, _0x1566c8 = -0x3e8) {
                        const _0x1e75f6 = _0x1abfc7;
                        this['setPosition'](_0x4abb3f, _0x1566c8), this['scene']['physics'][_0x1e75f6(0x18bd)]['existing'](this);
                    }
                }
                _0x12760b['B_Sire'] = _0x133143, _0x12760b['default'] = _0x133143;
            };
