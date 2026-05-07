// Module 0x3884
// Args: _0x18f022, _0x3b8233, _0x40c147

export default (_0x18f022, _0x3b8233, _0x40c147) => {
                'use strict';
                const _0x49f50a = a0_0x6932;
                var _0x4bf74c = this && this['__importDefault'] || function(_0x389ac8) {
                    return _0x389ac8 && _0x389ac8['__esModule'] ? _0x389ac8 : {
                        'default': _0x389ac8
                    };
                };
                Object['defineProperty'](_0x3b8233, '__esModule', {
                    'value': !0x0
                }), _0x3b8233['DatGUIInitialWeapons'] = void 0x0;
                const _0x550981 = _0x4bf74c(_0x40c147(0x136b9)),
                    _0x2eaea9 = _0x4bf74c(_0x40c147(0x54e3)),
                    _0x55a23e = _0x4bf74c(_0x40c147(0x3107)),
                    _0x2e3d8c = _0x4bf74c(_0x40c147(0x5f07)),
                    _0xf0d1da = _0x4bf74c(_0x40c147(0x2b0d));
                class _0x553fb7 extends _0xf0d1da['default'] {
                    constructor() {
                        const _0x32c6b5 = _0x49f50a;
                        super(), this[_0x32c6b5(0x1ad)] = [], this[_0x32c6b5(0x1460)] = [], this['weaponObj'] = {};
                        for (const _0x3f5250 in _0x2eaea9['default']) this[_0x32c6b5(0x1ad)]['push'](_0x2eaea9[_0x32c6b5(0xd2c)][_0x3f5250]);
                        for (const _0x358f2c in _0x550981['default']) this['hitVFXType']['push'](_0x550981['default'][_0x358f2c]);
                        this[_0x32c6b5(0x484)]['filePath'] = '_BASEWEAPONDATA', this[_0x32c6b5(0xaa4)]['name'] = 'base weapon', this[_0x32c6b5(0x15d9)] = '900px', this[_0x32c6b5(0x6a8)]();
                    } ['assignData']() {
                        const _0x160589 = _0x49f50a;
                        this[_0x160589(0x198)][_0x160589(0x11df)] = _0x2e3d8c['default'][_0x160589(0x1043)][_0x160589(0x10f6)]['startingWeapon'], this['weaponObj']['weapon'] = _0x2e3d8c['default'][_0x160589(0x1043)]['Player']['startingWeapon'], this[_0x160589(0x1a3c)][_0x160589(0x18bd)](this['weaponObj'], 'weapon', this['weaponList'])[_0x160589(0x1781)](this[_0x160589(0x1946)][_0x160589(0xf7e)](this)), this[_0x160589(0x1490)]();
                    } ['quickUpdate']() {
                        const _0x1c8fad = _0x49f50a;
                        let _0x3c534d = this[_0x1c8fad(0x81a)](_0x2e3d8c[_0x1c8fad(0xd2c)][_0x1c8fad(0x1043)][_0x1c8fad(0x506)], _0x2e3d8c['default']['Core']['Player'][_0x1c8fad(0xfc9)]);
                        _0x3c534d && (this[_0x1c8fad(0x198)][_0x2e3d8c['default'][_0x1c8fad(0x1043)][_0x1c8fad(0x10f6)]['startingWeapon']] = _0x3c534d['level']), this[_0x1c8fad(0x1a3c)][_0x1c8fad(0x19a)]();
                    } ['setupWeapon']() {
                        const _0x5dd9da = _0x49f50a;
                        this['weaponsDataFolder'] = this[_0x5dd9da(0x1a3c)][_0x5dd9da(0x61c)]('data'), this[_0x5dd9da(0x472)] = [{
                            'name': 'poolLimit',
                            'min': 0x0,
                            'max': 0x1f4,
                            'step': 0x1
                        }, {
                            'name': 'interval',
                            'min': 0x0,
                            'max': 0x186a0,
                            'step': 0x1
                        }, {
                            'name': 'repeatInterval',
                            'min': 0x0,
                            'max': 0x1f4,
                            'step': 0x1
                        }, {
                            'name': 'power',
                            'min': 0x0,
                            'max': 0x64,
                            'step': 0x1
                        }, {
                            'name': 'area',
                            'min': 0x0,
                            'max': 0x64,
                            'step': 0x1
                        }, {
                            'name': 'speed',
                            'min': 0x0,
                            'max': 0x64,
                            'step': 0x1
                        }, {
                            'name': 'amount',
                            'min': 0x0,
                            'max': 0x64,
                            'step': 0x1
                        }, {
                            'name': 'penetrating',
                            'min': 0x0,
                            'max': 0x64,
                            'step': 0x1
                        }, {
                            'name': 'duration',
                            'min': 0x0,
                            'max': 0x186a0,
                            'step': 0x1
                        }, {
                            'name': 'critChance',
                            'min': 0x0,
                            'max': 0x1,
                            'step': 0.1
                        }, {
                            'name': 'critMul',
                            'min': 0x0,
                            'max': 0x64,
                            'step': 0x1
                        }, {
                            'name': 'chance',
                            'min': 0x0,
                            'max': 0x1,
                            'step': 0.1
                        }, {
                            'name': 'bounces',
                            'min': 0x0,
                            'max': 0x64,
                            'step': 0x1
                        }, {
                            'name': 'knockback',
                            'min': 0x0,
                            'max': 0x64,
                            'step': 0x1
                        }, {
                            'name': 'hitsWalls'
                        }, {
                            'name': 'hitVFX'
                        }];
                        for (const _0x2af491 in this[_0x5dd9da(0x472)]) {
                            let _0x53871d = this[_0x5dd9da(0x472)][_0x2af491][_0x5dd9da(0x226)],
                                _0x2f6282 = this[_0x5dd9da(0x472)][_0x2af491],
                                _0x15724c = _0x55a23e[_0x5dd9da(0xd2c)][this['weaponObj'][_0x5dd9da(0x4a1)]][0x0];
                            if (null != _0x15724c[_0x53871d]) {
                                let _0x494e5c;
                                _0x494e5c = 'hitsWalls' == _0x53871d ? this[_0x5dd9da(0x11f1)]['add'](_0x15724c, 'hitsWalls') : 'hitVFX' == _0x53871d ? this['weaponsDataFolder']['add'](_0x15724c, 'hitVFX', this[_0x5dd9da(0x1460)]) : this['weaponsDataFolder'][_0x5dd9da(0x18bd)](_0x15724c, _0x53871d, _0x2f6282['min'], _0x2f6282[_0x5dd9da(0x1981)], _0x2f6282['step']), _0x494e5c[_0x5dd9da(0x1781)](this[_0x5dd9da(0x16ed)][_0x5dd9da(0xf7e)](this));
                            }
                        }
                    } ['inActiveWeapons'](_0x4b5871, _0x5daca2) {
                        const _0xb08c15 = _0x49f50a;
                        for (const _0x17cfd6 in _0x4b5871)
                            if (_0x4b5871[_0x17cfd6][_0xb08c15(0x14e)] == _0x5daca2) return _0x4b5871[_0x17cfd6];
                        return null;
                    } ['onChangeWeapon']() {
                        const _0x557694 = _0x49f50a;
                        let _0x3c2b52 = this['weaponObj'][_0x557694(0x4a1)],
                            _0x32bd82 = this[_0x557694(0x198)][_0x557694(0x11df)];
                        _0x2e3d8c['default']['Core']['RemoveWeapon'](_0x32bd82), this[_0x557694(0x198)]['previousWeapon'] = this[_0x557694(0x198)][_0x557694(0x4a1)];
                        let _0x4eaa7b = _0x2e3d8c[_0x557694(0xd2c)][_0x557694(0x1043)][_0x557694(0x506)]['find'](_0x426b7b => _0x426b7b[_0x557694(0x14e)] === _0x3c2b52);
                        _0x4eaa7b || (_0x2e3d8c[_0x557694(0xd2c)][_0x557694(0x1043)][_0x557694(0x1961)](_0x3c2b52), _0x4eaa7b = _0x2e3d8c['default'][_0x557694(0x1043)][_0x557694(0x506)][_0x557694(0x1e6)](_0xeb8d51 => _0xeb8d51[_0x557694(0x14e)] === _0x3c2b52)), _0x4eaa7b['MakeLevelOne'](), this[_0x557694(0x1a3c)]['removeFolder'](this['weaponsDataFolder']), this['setupWeapon'](), _0x2e3d8c[_0x557694(0xd2c)]['Core']['SceneManager']['PauseStatsScene'][_0x557694(0x180c)]();
                    } ['dataUpdate']() {
                        const _0x3aecb4 = _0x49f50a;
                        let _0x19656b = this[_0x3aecb4(0x198)]['weapon'],
                            _0x440046 = _0x2e3d8c['default']['Core']['Weapons'][_0x3aecb4(0x1e6)](_0x542915 => _0x542915[_0x3aecb4(0x14e)] === _0x19656b);
                        if (_0x440046) {
                            for (const _0x584565 in this[_0x3aecb4(0x472)]) {
                                let _0x2bfd63 = this['weaponsStatData'][_0x584565][_0x3aecb4(0x226)];
                                _0x440046[_0x2bfd63] = _0x55a23e['default'][this['weaponObj'][_0x3aecb4(0x4a1)]][0x0][_0x2bfd63];
                            }
                            _0x440046[_0x3aecb4(0xf64)]();
                        }
                        _0x2e3d8c[_0x3aecb4(0xd2c)][_0x3aecb4(0x1043)][_0x3aecb4(0x69e)]['PauseStatsScene']['quickUpdate']();
                    } ['save']() {
                        const _0x355bdc = _0x49f50a;
                        this[_0x355bdc(0x16b7)](_0x55a23e[_0x355bdc(0xd2c)]);
                    } ['load']() {
                        const _0x421b83 = _0x49f50a;
                        let _0x3cf51e = this[_0x421b83(0xb06)]();
                        for (const _0xc20a1 in _0x3cf51e) _0x55a23e[_0x421b83(0xd2c)][_0xc20a1] = _0x3cf51e[_0xc20a1];
                        this[_0x421b83(0x1a3c)][_0x421b83(0x16ca)](), this['create'](), this[_0x421b83(0x16ed)](), this[_0x421b83(0x582)]();
                    }
                }
                _0x3b8233['DatGUIInitialWeapons'] = _0x553fb7, _0x3b8233['default'] = _0x553fb7;
            };
