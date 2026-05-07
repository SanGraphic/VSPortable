// Module 0x146f2
// Args: _0x39635b, _0x3c1542, _0x473b91

export default (_0x39635b, _0x3c1542, _0x473b91) => {
                'use strict';
                const _0x2e4204 = a0_0x6932;
                var _0x364d66 = this && this['__importDefault'] || function(_0x318157) {
                    return _0x318157 && _0x318157['__esModule'] ? _0x318157 : {
                        'default': _0x318157
                    };
                };
                Object['defineProperty'](_0x3c1542, '__esModule', {
                    'value': !0x0
                }), _0x3c1542['DatGUIWeapons'] = void 0x0;
                const _0x362a16 = _0x364d66(_0x473b91(0x15dd)),
                    _0x1a8d9a = _0x364d66(_0x473b91(0x54e3)),
                    _0x3b925c = _0x364d66(_0x473b91(0x3107)),
                    _0x6acdd = _0x364d66(_0x473b91(0x5f07)),
                    _0x328621 = _0x364d66(_0x473b91(0x2b0d));
                class _0x5461db extends _0x328621['default'] {
                    constructor() {
                        const _0x44a000 = _0x2e4204;
                        super(), this[_0x44a000(0x1ad)] = [], this[_0x44a000(0x198)] = {};
                        for (const _0x1dd7af in _0x1a8d9a['default']) this['weaponList'][_0x44a000(0x1564)](_0x1a8d9a['default'][_0x1dd7af]);
                        this[_0x44a000(0x484)]['filePath'] = '_WEAPONDATA', this['datGUIParams'][_0x44a000(0x226)] = 'weapon', this[_0x44a000(0x15d9)] = '0px', this['create']();
                    } ['assignData']() {
                        const _0x5ee90a = _0x2e4204;
                        for (const _0xc71ac3 in _0x3b925c[_0x5ee90a(0xd2c)]) {
                            this[_0x5ee90a(0x198)][_0xc71ac3] = 0x0;
                            let _0x4d460d = this['inActiveWeapons'](_0x6acdd[_0x5ee90a(0xd2c)][_0x5ee90a(0x1043)][_0x5ee90a(0x506)], _0xc71ac3);
                            _0x4d460d && (this['weaponObj'][_0xc71ac3] = _0x4d460d['level']), this[_0x5ee90a(0x1a3c)][_0x5ee90a(0x18bd)](this[_0x5ee90a(0x198)], _0xc71ac3, 0x0, _0x3b925c['default'][_0xc71ac3][_0x5ee90a(0xed9)], 0x1)[_0x5ee90a(0x1781)](this[_0x5ee90a(0x16ed)][_0x5ee90a(0xf7e)](this));
                        }
                        super[_0x5ee90a(0x582)]();
                    } ['quickUpdate']() {
                        const _0x31585f = _0x2e4204;
                        for (const _0x2b62bf in _0x3b925c['default']) {
                            let _0x2ef037 = this[_0x31585f(0x81a)](_0x6acdd['default'][_0x31585f(0x1043)]['Weapons'], _0x2b62bf);
                            _0x2ef037 && (this[_0x31585f(0x198)][_0x2b62bf] = _0x2ef037[_0x31585f(0x5e3)]);
                        }
                        this['datGUI'][_0x31585f(0x19a)]();
                    } ['inActiveWeapons'](_0x26c801, _0x5aa07d) {
                        for (const _0x15b178 in _0x26c801)
                            if (_0x26c801[_0x15b178]['bulletType'] == _0x5aa07d) return _0x26c801[_0x15b178];
                        return null;
                    } ['dataUpdate']() {
                        const _0x30c318 = _0x2e4204;
                        _0x362a16['default'][_0x6acdd[_0x30c318(0xd2c)]['Core'][_0x30c318(0x14d8)][_0x30c318(0x1188)]][0x0];
                        for (const _0x395c1f in this['weaponObj']) {
                            let _0x260aae = _0x6acdd['default'][_0x30c318(0x1043)][_0x30c318(0x506)]['find'](_0x643b4e => _0x643b4e['bulletType'] === _0x395c1f);
                            if (_0x260aae) {
                                switch (_0x395c1f) {
                                    case _0x1a8d9a['default'][_0x30c318(0x7f8)]:
                                        _0x6acdd[_0x30c318(0xd2c)]['Core']['Player']['maxHp'] -= this['accumulativeStat'](_0x1a8d9a['default']['MAXHEALTH'], _0x260aae[_0x30c318(0x5e3)], 'maxHp');
                                        break;
                                    case _0x1a8d9a['default'][_0x30c318(0x18d1)]:
                                        _0x6acdd[_0x30c318(0xd2c)][_0x30c318(0x1043)][_0x30c318(0x10f6)]['curse'] -= this['accumulativeStat'](_0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0x18d1)], _0x260aae['level'], 'curse');
                                        break;
                                    case _0x1a8d9a['default'][_0x30c318(0x128b)]:
                                        _0x6acdd['default']['Core']['Player'][_0x30c318(0x31f)] -= this[_0x30c318(0xc6f)](_0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0x128b)], _0x260aae[_0x30c318(0x5e3)], 'power');
                                        break;
                                    case _0x1a8d9a[_0x30c318(0xd2c)]['AREA']:
                                        _0x6acdd['default']['Core']['Player']['area'] -= this[_0x30c318(0xc6f)](_0x1a8d9a['default'][_0x30c318(0x634)], _0x260aae['level'], 'area');
                                        break;
                                    case _0x1a8d9a['default'][_0x30c318(0x142d)]:
                                        _0x6acdd[_0x30c318(0xd2c)][_0x30c318(0x1043)]['Player'][_0x30c318(0x78e)] -= this[_0x30c318(0xc6f)](_0x1a8d9a['default']['SPEED'], _0x260aae[_0x30c318(0x5e3)], 'speed');
                                        break;
                                    case _0x1a8d9a[_0x30c318(0xd2c)]['COOLDOWN']:
                                        _0x6acdd['default'][_0x30c318(0x1043)][_0x30c318(0x10f6)][_0x30c318(0xe0e)] -= this[_0x30c318(0xc6f)](_0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0xebc)], _0x260aae[_0x30c318(0x5e3)], 'cooldown');
                                        break;
                                    case _0x1a8d9a[_0x30c318(0xd2c)]['AMOUNT']:
                                        _0x6acdd['default']['Core'][_0x30c318(0x10f6)][_0x30c318(0x9b8)] -= this['accumulativeStat'](_0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0xc48)], _0x260aae[_0x30c318(0x5e3)], 'amount');
                                        break;
                                    case _0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0x1a7b)]:
                                        _0x6acdd[_0x30c318(0xd2c)]['Core'][_0x30c318(0x10f6)]['moveSpeed'] -= this['accumulativeStat'](_0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0x1a7b)], _0x260aae[_0x30c318(0x5e3)], 'moveSpeed');
                                        break;
                                    case _0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0x805)]:
                                        _0x6acdd['default']['Core']['Player'][_0x30c318(0x7fc)] -= this[_0x30c318(0xc6f)](_0x1a8d9a['default'][_0x30c318(0x805)], _0x260aae[_0x30c318(0x5e3)], 'growth');
                                        break;
                                    case _0x1a8d9a['default'][_0x30c318(0x1a11)]:
                                        _0x6acdd[_0x30c318(0xd2c)][_0x30c318(0x1043)][_0x30c318(0x10f6)]['luck'] -= this[_0x30c318(0xc6f)](_0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0x1a11)], _0x260aae[_0x30c318(0x5e3)], 'luck');
                                        break;
                                    case _0x1a8d9a[_0x30c318(0xd2c)]['ARMOR']:
                                        _0x6acdd[_0x30c318(0xd2c)]['Core'][_0x30c318(0x10f6)][_0x30c318(0x8d0)] -= this[_0x30c318(0xc6f)](_0x1a8d9a['default'][_0x30c318(0x85a)], _0x260aae['level'], 'armor');
                                        break;
                                    case _0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0xcf7)]:
                                        _0x6acdd['default']['Core']['Player']['duration'] -= this[_0x30c318(0xc6f)](_0x1a8d9a['default'][_0x30c318(0xcf7)], _0x260aae[_0x30c318(0x5e3)], 'duration');
                                        break;
                                    case _0x1a8d9a[_0x30c318(0xd2c)]['GREED']:
                                        _0x6acdd[_0x30c318(0xd2c)][_0x30c318(0x1043)]['Player'][_0x30c318(0x14ab)] -= this[_0x30c318(0xc6f)](_0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0x1263)], _0x260aae[_0x30c318(0x5e3)], 'greed');
                                        break;
                                    case _0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0x2c9)]:
                                        _0x6acdd['default']['Core']['Player'][_0x30c318(0xe2c)] -= this['accumulativeStat'](_0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0x2c9)], _0x260aae['level'], 'regen');
                                        break;
                                    case _0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0x855)]:
                                        _0x6acdd['default']['Core'][_0x30c318(0x10f6)][_0x30c318(0x14e0)] -= this[_0x30c318(0xc6f)](_0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0x855)], _0x260aae[_0x30c318(0x5e3)], 'revivals');
                                        break;
                                    case _0x1a8d9a[_0x30c318(0xd2c)]['MAGNET']:
                                        break;
                                    case _0x1a8d9a[_0x30c318(0xd2c)][_0x30c318(0x957)]:
                                        _0x6acdd[_0x30c318(0xd2c)]['Core'][_0x30c318(0x10f6)][_0x30c318(0x31f)] -= this['accumulativeStat'](_0x1a8d9a['default']['PANDORA'], _0x260aae[_0x30c318(0x5e3)], 'power'), _0x6acdd[_0x30c318(0xd2c)][_0x30c318(0x1043)][_0x30c318(0x10f6)][_0x30c318(0x78e)] -= this['accumulativeStat'](_0x1a8d9a[_0x30c318(0xd2c)]['PANDORA'], _0x260aae[_0x30c318(0x5e3)], 'speed'), _0x6acdd[_0x30c318(0xd2c)][_0x30c318(0x1043)]['Player'][_0x30c318(0x5ef)] -= this['accumulativeStat'](_0x1a8d9a['default'][_0x30c318(0x957)], _0x260aae[_0x30c318(0x5e3)], 'duration'), _0x6acdd['default'][_0x30c318(0x1043)]['Player'][_0x30c318(0x1702)] -= this['accumulativeStat'](_0x1a8d9a[_0x30c318(0xd2c)]['PANDORA'], _0x260aae[_0x30c318(0x5e3)], 'area'), _0x6acdd['default'][_0x30c318(0x1043)]['Player'][_0x30c318(0x173f)] -= this[_0x30c318(0xc6f)](_0x1a8d9a[_0x30c318(0xd2c)]['PANDORA'], _0x260aae[_0x30c318(0x5e3)], 'curse');
                                }
                                if (0x0 == this[_0x30c318(0x198)][_0x395c1f]) _0x6acdd['default']['Core'][_0x30c318(0x1ac8)](_0x395c1f);
                                else {
                                    _0x260aae[_0x30c318(0xf64)]();
                                    for (let _0x2387ef = 0x0; _0x2387ef < this['weaponObj'][_0x395c1f] - 0x1; _0x2387ef++) _0x260aae[_0x30c318(0x2ab)]();
                                }
                            } else this[_0x30c318(0x198)][_0x395c1f] > 0x0 && _0x6acdd['default']['Core'][_0x30c318(0x1961)](_0x395c1f);
                        }
                        _0x6acdd['default'][_0x30c318(0x1043)][_0x30c318(0x69e)][_0x30c318(0x13f6)][_0x30c318(0x180c)]();
                    } ['accumulativeStat'](_0x4c8296, _0x5106a2, _0x4e0b5e) {
                        const _0x2423fd = _0x2e4204;
                        let _0x573e43 = 0x0;
                        for (let _0xc382c8 = 0x0; _0xc382c8 < _0x5106a2; _0xc382c8++) _0x3b925c['default'][_0x4c8296] && _0x3b925c['default'][_0x4c8296][_0xc382c8] && _0x3b925c[_0x2423fd(0xd2c)][_0x4c8296][_0xc382c8][_0x4e0b5e] && (_0x573e43 += _0x3b925c[_0x2423fd(0xd2c)][_0x4c8296][_0xc382c8][_0x4e0b5e]);
                        return _0x573e43;
                    } ['save']() {
                        this['saveJson'](_0x3b925c['default']);
                    } ['load']() {
                        const _0x1089f2 = _0x2e4204;
                        let _0x30126d = this[_0x1089f2(0xb06)]();
                        for (const _0x11fb4c in _0x30126d) _0x3b925c[_0x1089f2(0xd2c)][_0x11fb4c] = _0x30126d[_0x11fb4c];
                        this['datGUI']['destroy'](), this['create'](), this['dataUpdate'](), this['assignData']();
                    }
                }
                _0x3c1542['DatGUIWeapons'] = _0x5461db, _0x3c1542['default'] = _0x5461db;
            };
