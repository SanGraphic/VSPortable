// Module 0xeac3
// Args: _0x2b7e8b, _0xe4fcd1, _0x44be7a

export default (_0x2b7e8b, _0xe4fcd1, _0x44be7a) => {
                'use strict';
                const _0x3a205d = a0_0x6932;
                var _0x367719 = this && this['__importDefault'] || function(_0x51fc24) {
                    const _0x5b2117 = a0_0x6932;
                    return _0x51fc24 && _0x51fc24['__esModule'] ? _0x51fc24 : {
                        'default': _0x51fc24
                    };
                };
                Object['defineProperty'](_0xe4fcd1, '__esModule', {
                    'value': !0x0
                }), _0xe4fcd1['LevelUpFactory'] = void 0x0;
                const _0x1d1203 = _0x367719(_0x44be7a(0x5f07)),
                    _0x50b5bb = _0x367719(_0x44be7a(0x54e3)),
                    _0x14204c = _0x367719(_0x44be7a(0x3107)),
                    _0x2f763c = _0x367719(_0x44be7a(0xce11)),
                    _0xaef1dd = _0x367719(_0x44be7a(0xc42e)),
                    _0x175814 = _0x367719(_0x44be7a(0x4d17));
                class _0x4355cb {
                    constructor() {
                        const _0x200595 = _0x3a205d;
                        this[_0x200595(0x89d)] = 0x5, this[_0x200595(0x1a84)] = 0x5, this['previousXPfactor'] = 0x5, this['chanceForExistingPowerUp'] = 0.3, this[_0x200595(0x1275)] = 0x3, this['maxTrueWeapons'] = 0x6, this[_0x200595(0x167f)] = 0x6, this[_0x200595(0xa2b)] = new Array(), this[_0x200595(0x12fe)] = new Array(), this['SpecialWeapons'] = new Array(), this['BanishedWeapons'] = new Array(), this[_0x200595(0x1755)] = 0x0, this['WeightedStore'] = new Array();
                    } ['BanishSealedWeapons']() {
                        const _0x289588 = _0x3a205d;
                        for (let _0x190937 = 0x0; _0x190937 < _0x1d1203['default']['Core'][_0x289588(0x14d8)][_0x289588(0xaaf)]['length']; _0x190937++) {
                            const _0x3323ea = _0x1d1203['default'][_0x289588(0x1043)][_0x289588(0x14d8)]['SealedWeapons'][_0x190937]; - 0x1 === this[_0x289588(0x1033)][_0x289588(0x1303)](_0x3323ea) && (this[_0x289588(0x455)](_0x3323ea), this[_0x289588(0x1033)][_0x289588(0x1564)](_0x3323ea));
                        }
                    } ['CalculateXPfactor']() {
                        const _0x33bfa6 = _0x3a205d;
                        let _0x45ec49 = this['defaultXPfactor'] + 1.5 * Math[_0x33bfa6(0xe07)](_0x1d1203[_0x33bfa6(0xd2c)][_0x33bfa6(0x1043)]['Player']['level'] / 0x14);
                        _0x45ec49 = Math[_0x33bfa6(0x1084)](_0x45ec49, 0x8);
                        let _0x73f4a1 = this[_0x33bfa6(0x89d)] + 1.5 * Math['floor']((_0x1d1203[_0x33bfa6(0xd2c)][_0x33bfa6(0x1043)][_0x33bfa6(0x10f6)][_0x33bfa6(0x5e3)] - 0x1) / 0x14);
                        _0x73f4a1 = Math[_0x33bfa6(0x1084)](_0x73f4a1, 0x8), this[_0x33bfa6(0x1a84)] = _0x45ec49 * _0x1d1203['default'][_0x33bfa6(0x1043)]['Player'][_0x33bfa6(0x5e3)] * _0x1d1203['default'][_0x33bfa6(0x1043)][_0x33bfa6(0x10f6)]['level'], this[_0x33bfa6(0x863)] = _0x73f4a1 * (_0x1d1203['default'][_0x33bfa6(0x1043)][_0x33bfa6(0x10f6)][_0x33bfa6(0x5e3)] - 0x1) * (_0x1d1203['default'][_0x33bfa6(0x1043)][_0x33bfa6(0x10f6)]['level'] - 0x1);
                    }
                    get['XpRequiredToLevelUp']() {
                        const _0xe94c96 = _0x3a205d;
                        return this[_0xe94c96(0x1a84)];
                    }
                    get['PreviousXpRequiredToLevelUp']() {
                        const _0x17c453 = _0x3a205d;
                        return this[_0x17c453(0x863)];
                    } ['GetLevelUpOptions']() {
                        const _0x3e1db6 = _0x3a205d;
                        return Math[_0x3e1db6(0x9ad)]() > 0x1 / _0x1d1203[_0x3e1db6(0xd2c)][_0x3e1db6(0x1043)][_0x3e1db6(0x10f6)][_0x3e1db6(0x17b9)] ? this[_0x3e1db6(0x1275)] + 0x1 : this[_0x3e1db6(0x1275)];
                    }
                    get['ChanceForExistingPowerUp']() {
                        const _0x58c9c2 = _0x3a205d;
                        return (_0x1d1203[_0x58c9c2(0xd2c)]['Core'][_0x58c9c2(0x10f6)][_0x58c9c2(0x5e3)] % 0x2 == 0x0 ? 0x2 : 0x1) * this['chanceForExistingPowerUp'] + 0x1 - 0x1 / _0x1d1203['default'][_0x58c9c2(0x1043)]['Player']['PLuck'];
                    } ['HasPowerupsInStore']() {
                        const _0x4b51e9 = _0x3a205d;
                        return this[_0x4b51e9(0x1032)]['length'] > 0x0;
                    } ['Init']() {
                        const _0x4bfaa8 = _0x3a205d;
                        this[_0x4bfaa8(0xe6d)]();
                        for (const _0x5a369c in _0x14204c[_0x4bfaa8(0xd2c)]) {
                            _0x14204c[_0x4bfaa8(0xd2c)][_0x5a369c][0x0]['isEvolution'] ? this['DoExclude'](_0x5a369c) : _0x14204c[_0x4bfaa8(0xd2c)][_0x5a369c][0x0][_0x4bfaa8(0x10dd)] ? (0x0 === _0x14204c[_0x4bfaa8(0xd2c)][_0x5a369c][0x0][_0x4bfaa8(0x18cc)] || _0x14204c['default'][_0x5a369c][0x0]['isSpecialOnly']) && this[_0x4bfaa8(0x455)](_0x5a369c) : this['DoExclude'](_0x5a369c);
                            for (const _0x31baab in _0x14204c[_0x4bfaa8(0xd2c)][_0x5a369c]) this['WeaponStore']['push'](_0x5a369c);
                        }
                        this[_0x4bfaa8(0xea9)]();
                    } ['GetRemainingWeaponsAndPowerUps']() {
                        const _0x310b36 = _0x3a205d;
                        for (var _0x58233b = new Array(), _0x244c3d = 0x0; _0x244c3d < this[_0x310b36(0xa2b)][_0x310b36(0xed9)]; _0x244c3d++) {
                            var _0xffe1ff = this[_0x310b36(0xa2b)][_0x244c3d];
                            this[_0x310b36(0x12fe)][_0x310b36(0x1303)](_0xffe1ff) > -0x1 || _0x58233b['indexOf'](_0xffe1ff) > -0x1 || _0x58233b[_0x310b36(0x1564)](_0xffe1ff);
                        }
                        return _0x58233b;
                    } ['GetExistingNotMaxedWeapons']() {
                        const _0x5aca2d = _0x3a205d;
                        var _0x4a5396 = _0x1d1203[_0x5aca2d(0xd2c)]['Core'][_0x5aca2d(0x506)][_0x5aca2d(0x1919)](_0x2932bb => _0x2932bb['bulletType']),
                            _0x842b94 = new Array();
                        for (let _0x13126d = 0x0; _0x13126d < _0x4a5396['length']; _0x13126d++) {
                            const _0x52aded = _0x4a5396[_0x13126d]; - 0x1 !== this[_0x5aca2d(0xa2b)][_0x5aca2d(0x1303)](_0x52aded) && (this['ExcludedWeapons']['indexOf'](_0x52aded) > -0x1 || _0x4a5396[_0x5aca2d(0x1303)](_0x52aded) > -0x1 || _0x842b94[_0x5aca2d(0x1564)](_0x52aded));
                        }
                        return _0x842b94;
                    } ['PullRemainingPowerUp']() {
                        const _0x131fa5 = _0x3a205d;
                        var _0x52de03, _0x52d27d = 0x0,
                            _0x5467a3 = new Array();
                        for (const _0xfd7d0e in _0x14204c[_0x131fa5(0xd2c)]) {
                            if (this[_0x131fa5(0x12fe)]['indexOf'](_0xfd7d0e) > -0x1) continue;
                            var _0x4608ab = _0x14204c[_0x131fa5(0xd2c)][_0xfd7d0e][0x0];
                            if (!_0x4608ab[_0x131fa5(0xc1c)]) continue;
                            let _0x52e550 = _0x4608ab[_0x131fa5(0xa43)] ? _0x1d1203[_0x131fa5(0xd2c)]['Core'][_0x131fa5(0x10f6)][_0x131fa5(0x17b9)] : 0x1;
                            _0x52d27d += _0x4608ab[_0x131fa5(0x18cc)] * _0x52e550, _0x4608ab[_0x131fa5(0x18cc)] > 0x0 && _0x5467a3['push'](new _0x2f763c[(_0x131fa5(0xd2c))](_0xfd7d0e, _0x52d27d));
                        }
                        var _0x3e0ccc = Math['random']() * _0x52d27d;
                        return null === (_0x52de03 = _0x5467a3['find'](_0x223a0b => _0x223a0b[_0x131fa5(0xb68)] >= _0x3e0ccc)) || void 0x0 === _0x52de03 ? void 0x0 : _0x52de03['weaponType'];
                    } ['PullExistingRemainingWeapon'](_0xf56c91 = !0x0) {
                        const _0x2eaa73 = _0x3a205d;
                        var _0x3a2bc7, _0x49dd2d = 0x0,
                            _0xf5a7d8 = new Array(),
                            _0x30acfe = _0x1d1203[_0x2eaa73(0xd2c)][_0x2eaa73(0x1043)][_0x2eaa73(0x506)]['map'](_0x1b5524 => _0x1b5524['bulletType']);
                        for (let _0xb9e5fb = 0x0; _0xb9e5fb < _0x30acfe['length']; _0xb9e5fb++) {
                            const _0x247a08 = _0x30acfe[_0xb9e5fb];
                            if (this['ExcludedWeapons'][_0x2eaa73(0x1303)](_0x247a08) > -0x1) continue;
                            var _0x1a2e13 = _0x14204c['default'][_0x247a08][0x0];
                            if (!_0xf56c91 && _0x1a2e13[_0x2eaa73(0xc1c)]) continue;
                            let _0x2681c9 = _0x1a2e13[_0x2eaa73(0xa43)] ? _0x1d1203['default']['Core'][_0x2eaa73(0x10f6)]['PLuck'] : 0x1;
                            _0x49dd2d += _0x1a2e13[_0x2eaa73(0x18cc)] * _0x2681c9, _0x1a2e13[_0x2eaa73(0x18cc)] > 0x0 && _0xf5a7d8[_0x2eaa73(0x1564)](new _0x2f763c['default'](_0x247a08, _0x49dd2d));
                        }
                        var _0x410138 = Math['random']() * _0x49dd2d;
                        return null === (_0x3a2bc7 = _0xf5a7d8['find'](_0x5bde25 => _0x5bde25[_0x2eaa73(0xb68)] >= _0x410138)) || void 0x0 === _0x3a2bc7 ? void 0x0 : _0x3a2bc7[_0x2eaa73(0x15f6)];
                    } ['PullExisting'](_0x4297f5) {
                        const _0x19867c = _0x3a205d;
                        var _0x41c623;
                        return null === (_0x41c623 = this['WeightedStore'][_0x19867c(0x1e6)](_0x1066d8 => _0x1066d8['weaponType'] == _0x4297f5)) || void 0x0 === _0x41c623 ? void 0x0 : _0x41c623['weaponType'];
                    } ['PullEvolution']() {
                        const _0x2fd2e5 = _0x3a205d;
                        var _0x5d95c8 = 0x0,
                            _0x435313 = new Array();
                        let _0x470d9c = this[_0x2fd2e5(0x11f6)][_0x2fd2e5(0x1303)](_0x50b5bb['default'][_0x2fd2e5(0x917)]);
                        _0x470d9c > -0x1 && this['SpecialWeapons']['splice'](_0x470d9c, 0x1), this['SpecialWeapons'][_0x2fd2e5(0x858)](_0x37e086 => {
                            const _0x25a628 = _0x2fd2e5;
                            if (_0x14204c['default'][_0x37e086]) {
                                var _0x1fcbd4 = _0x14204c['default'][_0x37e086][0x0];
                                if (_0x1fcbd4[_0x25a628(0xdf4)] && _0x1fcbd4[_0x25a628(0x18cc)] > 0x0) {
                                    let _0x4da0e8 = _0x1fcbd4[_0x25a628(0x1326)],
                                        _0x5783e7 = _0x1fcbd4[_0x25a628(0xbc5)],
                                        _0xff4a29 = _0x1d1203[_0x25a628(0xd2c)][_0x25a628(0x1043)]['Weapons'],
                                        _0x1547a8 = !0x0;
                                    if (_0x4da0e8)
                                        for (let _0x48ff1f = 0x0; _0x48ff1f < _0x4da0e8['length']; _0x48ff1f++) {
                                            const _0x581c87 = _0x4da0e8[_0x48ff1f];
                                            if (!_0xff4a29['find'](_0x5c4556 => _0x5c4556['bulletType'] === _0x581c87)) {
                                                _0x1547a8 = !0x1;
                                                break;
                                            }
                                        }
                                    if (_0x5783e7)
                                        for (let _0x9b0f1e = 0x0; _0x9b0f1e < _0x5783e7[_0x25a628(0xed9)]; _0x9b0f1e++) {
                                            const _0x3d194e = _0x5783e7[_0x9b0f1e];
                                            let _0x605f13 = Object[_0x25a628(0x204)](_0x14204c['default'][_0x3d194e])['length'];
                                            if (!_0xff4a29[_0x25a628(0x1e6)](_0x4825b4 => _0x4825b4['bulletType'] === _0x3d194e && _0x4825b4[_0x25a628(0x5e3)] >= _0x605f13)) {
                                                _0x1547a8 = !0x1;
                                                break;
                                            }
                                        }
                                    _0x1547a8 && (_0x5d95c8 += _0x1fcbd4[_0x25a628(0x18cc)], _0x435313[_0x25a628(0x1564)](new _0x2f763c['default'](_0x37e086, _0x5d95c8)));
                                }
                            }
                        });
                        var _0x554284 = Math[_0x2fd2e5(0x9ad)]() * _0x5d95c8;
                        if (_0x470d9c > -0x1) {
                            let _0x2ad3c1 = 0.01 * _0x1d1203[_0x2fd2e5(0xd2c)]['Core'][_0x2fd2e5(0x10f6)]['luck'];
                            if (Math['random']() <= _0x2ad3c1) return _0x50b5bb['default'][_0x2fd2e5(0x917)];
                            this['SpecialWeapons'][_0x2fd2e5(0x1564)](_0x50b5bb['default']['CANDYBOX2']);
                        }
                        var _0x33b2c0 = _0x435313[_0x2fd2e5(0x1e6)](_0x451fd4 => _0x451fd4['weight'] >= _0x554284);
                        return _0x33b2c0 && this[_0x2fd2e5(0x11f6)]['splice'](this['SpecialWeapons'][_0x2fd2e5(0x5ae)](_0x58d1db => _0x58d1db == (null == _0x33b2c0 ? void 0x0 : _0x33b2c0[_0x2fd2e5(0x15f6)])), 0x1), this[_0x2fd2e5(0xea9)](), null == _0x33b2c0 ? void 0x0 : _0x33b2c0[_0x2fd2e5(0x15f6)];
                    } ['calculateWeights']() {
                        const _0x568767 = _0x3a205d;
                        this['accumulatedWeight'] = 0x0, this[_0x568767(0x1032)] = new Array();
                        for (const _0x2fabce in _0x14204c[_0x568767(0xd2c)]) {
                            if (this[_0x568767(0x12fe)]['indexOf'](_0x2fabce) > -0x1) continue;
                            if (this['SpecialWeapons']['indexOf'](_0x2fabce) > -0x1) continue;
                            const _0xffbc6 = _0x14204c['default'][_0x2fabce][0x0];
                            if (_0xffbc6['isPowerUp']) {
                                if (!_0x1d1203[_0x568767(0xd2c)]['Core']['Weapons']['find'](_0x7ba87a => _0x7ba87a[_0x568767(0x14e)] === _0x2fabce) && _0x1d1203[_0x568767(0xd2c)][_0x568767(0x1043)][_0x568767(0x506)][_0x568767(0x9d4)](_0x11c83d => 0x1 == _0x11c83d[_0x568767(0xc1c)])['length'] >= this['maxPowerUpWeapons']) continue;
                            } else {
                                if (!_0x1d1203['default']['Core'][_0x568767(0x506)][_0x568767(0x1e6)](_0x52943c => _0x52943c[_0x568767(0x14e)] === _0x2fabce) && _0x1d1203[_0x568767(0xd2c)][_0x568767(0x1043)][_0x568767(0x506)]['filter'](_0x359c6f => 0x1 != _0x359c6f['isPowerUp'])[_0x568767(0xed9)] >= this[_0x568767(0x459)]) continue;
                            }
                            let _0x43e83a = _0xffbc6[_0x568767(0xa43)] ? _0x1d1203['default'][_0x568767(0x1043)]['Player'][_0x568767(0x17b9)] : 0x1;
                            this[_0x568767(0x1755)] += _0xffbc6['rarity'] * _0x43e83a, _0xffbc6[_0x568767(0x18cc)] > 0x0 && this[_0x568767(0x1032)][_0x568767(0x1564)](new _0x2f763c['default'](_0x2fabce, this[_0x568767(0x1755)]));
                        }
                    } ['CalculateWeightsWithExclusions'](_0x1e4928) {
                        const _0x1a1ab0 = _0x3a205d;
                        this['accumulatedWeight'] = 0x0, this['WeightedStore'] = new Array();
                        for (const _0x3c436d in _0x14204c[_0x1a1ab0(0xd2c)]) {
                            if (this['ExcludedWeapons']['indexOf'](_0x3c436d) > -0x1) continue;
                            if (this['SpecialWeapons'][_0x1a1ab0(0x1303)](_0x3c436d) > -0x1) continue;
                            if (_0x1e4928[_0x1a1ab0(0x1303)](_0x3c436d) > -0x1) continue;
                            const _0x1b0b75 = _0x14204c[_0x1a1ab0(0xd2c)][_0x3c436d][0x0];
                            if (_0x1b0b75[_0x1a1ab0(0xc1c)]) {
                                if (!_0x1d1203[_0x1a1ab0(0xd2c)]['Core'][_0x1a1ab0(0x506)][_0x1a1ab0(0x1e6)](_0x49783d => _0x49783d['bulletType'] === _0x3c436d) && _0x1d1203[_0x1a1ab0(0xd2c)][_0x1a1ab0(0x1043)][_0x1a1ab0(0x506)]['filter'](_0x278ca7 => 0x1 == _0x278ca7[_0x1a1ab0(0xc1c)])[_0x1a1ab0(0xed9)] >= this['maxPowerUpWeapons']) continue;
                            } else {
                                if (!_0x1d1203['default']['Core'][_0x1a1ab0(0x506)]['find'](_0x52b5d => _0x52b5d[_0x1a1ab0(0x14e)] === _0x3c436d) && _0x1d1203[_0x1a1ab0(0xd2c)]['Core']['Weapons']['filter'](_0x5c6457 => 0x1 != _0x5c6457['isPowerUp'])['length'] >= this['maxTrueWeapons']) continue;
                            }
                            let _0x517cad = _0x1b0b75[_0x1a1ab0(0xa43)] ? _0x1d1203['default'][_0x1a1ab0(0x1043)][_0x1a1ab0(0x10f6)][_0x1a1ab0(0x17b9)] : 0x1;
                            this[_0x1a1ab0(0x1755)] += _0x1b0b75['rarity'] * _0x517cad, _0x1b0b75['rarity'] > 0x0 && this['WeightedStore']['push'](new _0x2f763c['default'](_0x3c436d, this[_0x1a1ab0(0x1755)]));
                        }
                    } ['GetRandomWeightedWeaponOrPowerup']() {
                        const _0x5236d4 = _0x3a205d;
                        var _0x54eb87, _0x5e9dbe = Math[_0x5236d4(0x9ad)]() * this[_0x5236d4(0x1755)];
                        return null === (_0x54eb87 = this[_0x5236d4(0x1032)][_0x5236d4(0x1e6)](_0x50e077 => _0x50e077[_0x5236d4(0xb68)] >= _0x5e9dbe)) || void 0x0 === _0x54eb87 ? void 0x0 : _0x54eb87[_0x5236d4(0x15f6)];
                    } ['GetRandomWeightedWeapon']() {
                        const _0x56ed7d = _0x3a205d;
                        var _0x57f20a, _0x47406c = 0x0,
                            _0x4832e6 = new Array();
                        for (const _0x3b1061 in _0x14204c[_0x56ed7d(0xd2c)]) {
                            if (this[_0x56ed7d(0x12fe)][_0x56ed7d(0x1303)](_0x3b1061) > -0x1) continue;
                            var _0x4fd07f = _0x14204c[_0x56ed7d(0xd2c)][_0x3b1061][0x0];
                            if (_0x4fd07f['isPowerUp']) continue;
                            let _0x176913 = _0x4fd07f[_0x56ed7d(0xa43)] ? _0x1d1203['default']['Core'][_0x56ed7d(0x10f6)][_0x56ed7d(0x17b9)] : 0x1;
                            _0x47406c += _0x4fd07f[_0x56ed7d(0x18cc)] * _0x176913, _0x4fd07f['rarity'] > 0x0 && _0x4832e6[_0x56ed7d(0x1564)](new _0x2f763c['default'](_0x3b1061, _0x47406c));
                        }
                        var _0x3ddb85 = Math[_0x56ed7d(0x9ad)]() * _0x47406c;
                        return null === (_0x57f20a = _0x4832e6[_0x56ed7d(0x1e6)](_0x17e226 => _0x17e226['weight'] >= _0x3ddb85)) || void 0x0 === _0x57f20a ? void 0x0 : _0x57f20a[_0x56ed7d(0x15f6)];
                    } ['GetLevelUpPowerups']() {
                        const _0x406775 = _0x3a205d;
                        var _0x19cb7e = new Array(),
                            _0x435965 = 0x0,
                            _0x3717fb = this[_0x406775(0x10ab)]();
                        _0x3717fb && _0x19cb7e[_0x406775(0x1564)](_0x3717fb), (_0x3717fb = this[_0x406775(0x10ab)]()) && _0x19cb7e[_0x406775(0x1303)](_0x3717fb) <= -0x1 && _0x19cb7e[_0x406775(0x1564)](_0x3717fb);
                        for (var _0x3a267a = this['GetLevelUpOptions'](), _0x54bf3f = _0x1d1203[_0x406775(0xd2c)][_0x406775(0x1043)]['Weapons'][_0x406775(0x9d4)](_0x34e5fb => 0x1 != _0x34e5fb[_0x406775(0xc1c)])[_0x406775(0xed9)]; _0x19cb7e['length'] < _0x3a267a && _0x435965 < 0x3e8;) {
                            var _0x3f1cad;
                            _0x435965++, void 0x0 !== (_0x3f1cad = _0x1d1203[_0x406775(0xd2c)]['Core'][_0x406775(0x10f6)]['level'] <= 0x3 && _0x54bf3f < this['maxTrueWeapons'] ? this[_0x406775(0x1a4)]() : this['GetRandomWeightedWeaponOrPowerup']()) && _0x19cb7e[_0x406775(0x1303)](_0x3f1cad) <= -0x1 && _0x19cb7e['push'](_0x3f1cad);
                        }
                        return _0x19cb7e[_0x406775(0x1394)](), _0x19cb7e;
                    } ['RerollLevelUpPowerups'](_0x2d4755) {
                        const _0x209b3a = _0x3a205d;
                        var _0x2ba316 = new Array(),
                            _0x5a3244 = 0x0,
                            _0x1709e9 = this['GetRandomExistingWeapon']();
                        _0x1709e9 && _0x2ba316['push'](_0x1709e9);
                        var _0x4dc1a7 = this[_0x209b3a(0x13a8)]();
                        for (this['CalculateWeightsWithExclusions'](_0x2d4755); _0x2ba316[_0x209b3a(0xed9)] < _0x4dc1a7 && _0x5a3244 < 0x3e8;) {
                            var _0x3480be;
                            _0x5a3244++, void 0x0 !== (_0x3480be = this[_0x209b3a(0x686)]()) && _0x2ba316['indexOf'](_0x3480be) <= -0x1 && _0x2ba316[_0x209b3a(0x1564)](_0x3480be);
                        }
                        return _0x2ba316['reverse'](), _0x2ba316;
                    } ['GetLevelUpItems']() {
                        const _0x19c0a9 = _0x3a205d;
                        var _0x5e0dd0 = new Array();
                        return _0x5e0dd0['push'](_0xaef1dd['default'][_0x19c0a9(0xfa0)]), _0x5e0dd0[_0x19c0a9(0x1564)](_0xaef1dd[_0x19c0a9(0xd2c)][_0x19c0a9(0x1a43)]), _0x175814[_0x19c0a9(0xd2c)][_0xaef1dd['default']['COINBAG2']]['pickedupAmount'] >= 0x64 && (_0x5e0dd0[_0x19c0a9(0x1564)](_0xaef1dd[_0x19c0a9(0xd2c)][_0x19c0a9(0x641)]), _0x5e0dd0['push'](_0xaef1dd['default'][_0x19c0a9(0xe92)])), _0x5e0dd0['reverse'](), _0x5e0dd0;
                    } ['DoExclude'](_0x232a4f) {
                        this['ExcludedWeapons']['push'](_0x232a4f);
                    } ['RemoveFromExcluded'](_0x4627e5) {
                        const _0x350b73 = _0x3a205d;
                        var _0x3196a2 = this[_0x350b73(0x12fe)][_0x350b73(0x1e6)](_0x4c7432 => _0x4c7432 === _0x4627e5);
                        if (_0x3196a2) {
                            var _0x3aaff7 = this['ExcludedWeapons'][_0x350b73(0x1303)](_0x3196a2);
                            _0x3aaff7 > -0x1 && this['ExcludedWeapons']['splice'](_0x3aaff7, 0x1);
                        }
                    } ['RemoveFromStore'](_0x20d435) {
                        const _0x42445b = _0x3a205d;
                        let _0x13340e = this[_0x42445b(0xa2b)]['indexOf'](_0x20d435);
                        _0x13340e >= 0x0 && this['WeaponStore'][_0x42445b(0x16ea)](_0x13340e, 0x1), -0x1 === this['WeaponStore'][_0x42445b(0x1303)](_0x20d435) && this[_0x42445b(0x455)](_0x20d435), this[_0x42445b(0xea9)]();
                    } ['RemoveFromSpecialWeapons'](_0x44d285) {
                        const _0x1a6701 = _0x3a205d;
                        let _0x45c87c = this[_0x1a6701(0x11f6)][_0x1a6701(0x1303)](_0x44d285);
                        _0x45c87c >= 0x0 && this['SpecialWeapons']['splice'](_0x45c87c, 0x1);
                    } ['Banish'](_0x55a023) {
                        this['DoExclude'](_0x55a023), this['BanishedWeapons']['push'](_0x55a023), this['calculateWeights']();
                    } ['GetRandomExistingWeapon']() {
                        const _0x1e683e = _0x3a205d;
                        var _0x1ec335;
                        if (Math[_0x1e683e(0x9ad)]() <= this['ChanceForExistingPowerUp'])
                            for (var _0x516603 = _0x1d1203[_0x1e683e(0xd2c)][_0x1e683e(0x1043)][_0x1e683e(0x506)]['map'](_0x4397dd => _0x4397dd[_0x1e683e(0x14e)]); _0x516603[_0x1e683e(0xed9)] > 0x0;) {
                                var _0x5047d6;
                                _0x5047d6 = Math['random']() > 0.5 ? _0x516603[0x0] : _0x516603[Math[_0x1e683e(0xe07)](Math['random']() * _0x516603['length'])];
                                var _0x2c94a2 = null === (_0x1ec335 = _0x1d1203[_0x1e683e(0xd2c)]['Core']['Weapons'][_0x1e683e(0x1e6)](_0x3cb7d9 => _0x3cb7d9[_0x1e683e(0x14e)] === _0x5047d6)) || void 0x0 === _0x1ec335 ? void 0x0 : _0x1ec335[_0x1e683e(0x5e3)];
                                if (_0x2c94a2 || (_0x2c94a2 = 0x0), 2.5 * (_0x2c94a2 + 0x1) > _0x1d1203['default']['Core'][_0x1e683e(0x10f6)]['level']) _0x516603['splice'](_0x516603[_0x1e683e(0x1303)](_0x5047d6), 0x1);
                                else {
                                    if (-0x1 != this['BanishedWeapons'][_0x1e683e(0x1303)](_0x5047d6)) _0x516603[_0x1e683e(0x16ea)](_0x516603[_0x1e683e(0x1303)](_0x5047d6), 0x1);
                                    else {
                                        if (-0x1 != this['WeaponStore'][_0x1e683e(0x1303)](_0x5047d6)) return _0x5047d6;
                                        _0x516603['splice'](_0x516603['indexOf'](_0x5047d6), 0x1);
                                    }
                                }
                            }
                        return null;
                    } ['AddLateWeapon'](_0x37ca54) {
                        const _0x1ceef4 = _0x3a205d;
                        if (!_0x1d1203[_0x1ceef4(0xd2c)]['Core'][_0x1ceef4(0x506)]['find'](_0x475335 => _0x475335[_0x1ceef4(0x14e)] === _0x37ca54) && !this[_0x1ceef4(0x1033)][_0x1ceef4(0x1e6)](_0x2199b4 => _0x2199b4 === _0x37ca54)) {
                            this[_0x1ceef4(0x11f6)][_0x1ceef4(0x1564)](_0x37ca54);
                            var _0x535cdd = this['ExcludedWeapons'][_0x1ceef4(0x1e6)](_0x1b362d => _0x1b362d === _0x37ca54);
                            if (_0x535cdd) {
                                var _0x22221b = this[_0x1ceef4(0x12fe)][_0x1ceef4(0x1303)](_0x535cdd);
                                _0x22221b > -0x1 && this['ExcludedWeapons'][_0x1ceef4(0x16ea)](_0x22221b, 0x1);
                            }
                            this[_0x1ceef4(0xea9)]();
                        }
                    } ['GetSpecialWeapon'](_0x380419) {
                        const _0x17ec68 = _0x3a205d;
                        var _0x377f32 = this[_0x17ec68(0x11f6)][_0x17ec68(0x1303)](_0x380419);
                        return _0x377f32 > -0x1 ? (this[_0x17ec68(0x11f6)][_0x17ec68(0x16ea)](_0x377f32, 0x1), _0x380419) : null;
                    }
                }
                _0xe4fcd1['LevelUpFactory'] = _0x4355cb, _0xe4fcd1['default'] = _0x4355cb;
            };
