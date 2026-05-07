// Module 0xf8d5
// Args: _0x54b7c5, _0x522dbc, _0x50ef03

export default (_0x54b7c5, _0x522dbc, _0x50ef03) => {
                'use strict';
                const _0x2998ab = a0_0x6932;
                var _0xd23392 = this && this['__importDefault'] || function(_0x4ba59e) {
                    const _0xed6f8e = _0x2998ab;
                    return _0x4ba59e && _0x4ba59e[_0xed6f8e(0x16f1)] ? _0x4ba59e : {
                        'default': _0x4ba59e
                    };
                };
                Object['defineProperty'](_0x522dbc, '__esModule', {
                    'value': !0x0
                }), _0x522dbc['LimitBreakManager'] = void 0x0;
                const _0x196417 = _0xd23392(_0x50ef03(0x5f07)),
                    _0x1b095a = _0xd23392(_0x50ef03(0x785e)),
                    _0x18ef53 = _0x50ef03(0xce11);
                class _0x4b6398 {
                    constructor() {
                        const _0x57aee5 = _0x2998ab;
                        this['levelUpOptions'] = 0x3, this[_0x57aee5(0xa2b)] = new Array(), this['ExcludedWeapons'] = new Array(), this[_0x57aee5(0x11f6)] = new Array(), this[_0x57aee5(0x1033)] = new Array(), this[_0x57aee5(0x1755)] = 0x0, this[_0x57aee5(0x1032)] = new Array(), this['GetAllUsedTimes'] = 0x0, this[_0x57aee5(0x58d)] = 0x0, this[_0x57aee5(0xea9)]();
                    } ['GetLevelUpOptions']() {
                        const _0x39f976 = _0x2998ab;
                        return Math['random']() > 0x1 / _0x196417['default'][_0x39f976(0x1043)]['Player']['PLuck'] ? this[_0x39f976(0x1275)] + 0x1 : this[_0x39f976(0x1275)];
                    } ['HasAnythingInStore']() {
                        const _0x3566cb = _0x2998ab;
                        return this[_0x3566cb(0x1032)][_0x3566cb(0xed9)] > 0x0;
                    } ['calculateWeights']() {
                        const _0x23eca6 = _0x2998ab;
                        this['accumulatedWeight'] = 0x0, this[_0x23eca6(0x1032)] = new Array();
                        let _0x26e9a5 = _0x196417[_0x23eca6(0xd2c)][_0x23eca6(0x1043)]['Weapons'][_0x23eca6(0x9d4)](_0x3b3422 => !_0x3b3422[_0x23eca6(0xc1c)]);
                        for (let _0x4c6718 = 0x0; _0x4c6718 < _0x26e9a5['length']; _0x4c6718++) {
                            let _0xc0d11c = _0x26e9a5[_0x4c6718];
                            if (this['ExcludedWeapons'][_0x23eca6(0x1303)](_0xc0d11c[_0x23eca6(0x14e)]) > -0x1) continue;
                            const _0xae3ac = _0x1b095a['default'][_0xc0d11c['bulletType']];
                            for (let _0x3a192d = 0x0; _0x3a192d < _0xae3ac[_0x23eca6(0xed9)]; _0x3a192d++) {
                                const _0x4349e1 = _0xae3ac[_0x3a192d];
                                this[_0x23eca6(0x1755)] += _0x4349e1[_0x23eca6(0x18cc)], this[_0x23eca6(0x1032)]['push'](new _0x18ef53['WeightedLimitBreak'](_0xc0d11c[_0x23eca6(0x14e)], this[_0x23eca6(0x1755)], _0x4349e1, _0x4c6718 + '-' + _0x3a192d));
                            }
                        }
                    } ['GetLimitBreakBonuses']() {
                        const _0x26b343 = _0x2998ab;
                        for (var _0x24755f = new Array(), _0x5abf83 = 0x0, _0x55c62e = this[_0x26b343(0x13a8)](); _0x24755f[_0x26b343(0xed9)] < _0x55c62e && _0x5abf83 < 0x4;) {
                            _0x5abf83++;
                            var _0xad10e2 = this[_0x26b343(0x1a4)]();
                            void 0x0 !== _0xad10e2 && (_0x24755f[_0x26b343(0x1e6)](_0x37f3f0 => _0x37f3f0['id'] === _0xad10e2['id']) || _0x24755f[_0x26b343(0x1564)](_0xad10e2));
                        }
                        return _0x24755f;
                    } ['GetRandomWeightedWeapon']() {
                        const _0x40889a = _0x2998ab;
                        var _0x121332 = 0x0,
                            _0x4915bc = new Array();
                        let _0x12cc2b = _0x196417[_0x40889a(0xd2c)][_0x40889a(0x1043)][_0x40889a(0x506)][_0x40889a(0x9d4)](_0x50d7a7 => !_0x50d7a7[_0x40889a(0xc1c)]);
                        for (let _0x244068 = 0x0; _0x244068 < _0x12cc2b[_0x40889a(0xed9)]; _0x244068++) {
                            let _0xc52e6 = _0x12cc2b[_0x244068];
                            if (this[_0x40889a(0x12fe)]['indexOf'](_0xc52e6['bulletType']) > -0x1) continue;
                            const _0x1c3b95 = _0x1b095a[_0x40889a(0xd2c)][_0xc52e6[_0x40889a(0x14e)]];
                            if (_0x1c3b95)
                                for (let _0x7c236c = 0x0; _0x7c236c < _0x1c3b95[_0x40889a(0xed9)]; _0x7c236c++) {
                                    const _0x14145c = _0x1c3b95[_0x7c236c];
                                    let _0x50122f = !0x1;
                                    if (_0x14145c['max']) {
                                        for (let _0x2c7201 in _0x14145c) 'max' != _0x2c7201 && 'rarity' != _0x2c7201 && _0xc52e6[_0x2c7201] >= _0x14145c[_0x40889a(0x1981)] && (_0x50122f = !0x0);
                                    }
                                    _0x50122f || (_0x121332 += _0x14145c['rarity'], _0x4915bc['push'](new _0x18ef53[(_0x40889a(0x424))](_0xc52e6['bulletType'], _0x121332, _0x14145c, _0x244068 + '-' + _0x7c236c)));
                                }
                        }
                        var _0x39ecc8 = Math['random']() * _0x121332;
                        return _0x4915bc['find'](_0x424b67 => _0x424b67['weight'] >= _0x39ecc8);
                    } ['hasLimitBreaks']() {
                        const _0x5c8d89 = _0x2998ab;
                        let _0x5078a0 = _0x196417[_0x5c8d89(0xd2c)][_0x5c8d89(0x1043)]['Weapons'][_0x5c8d89(0x9d4)](_0x380523 => !_0x380523[_0x5c8d89(0xc1c)]);
                        for (let _0x1b6d0e = 0x0; _0x1b6d0e < _0x5078a0['length']; _0x1b6d0e++) {
                            let _0x4489c3 = _0x5078a0[_0x1b6d0e];
                            if (this[_0x5c8d89(0x12fe)]['indexOf'](_0x4489c3[_0x5c8d89(0x14e)]) > -0x1) continue;
                            const _0xcbec50 = _0x1b095a[_0x5c8d89(0xd2c)][_0x4489c3['bulletType']];
                            if (_0xcbec50)
                                for (let _0x552f51 = 0x0; _0x552f51 < _0xcbec50[_0x5c8d89(0xed9)]; _0x552f51++) {
                                    const _0x1636fd = _0xcbec50[_0x552f51];
                                    if (!_0x1636fd[_0x5c8d89(0x1981)]) return !0x0;
                                    for (let _0x17ca2c in _0x1636fd)
                                        if ('max' != _0x17ca2c && 'rarity' != _0x17ca2c && _0x4489c3[_0x17ca2c] < _0x1636fd[_0x5c8d89(0x1981)]) return !0x0;
                                }
                        }
                        return !0x1;
                    }
                }
                _0x522dbc['LimitBreakManager'] = _0x4b6398, _0x522dbc['default'] = _0x4b6398;
            };
