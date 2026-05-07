// Module 0xe199
// Args: _0x5e96b4, _0x4b0f1, _0x313fa4

export default (_0x5e96b4, _0x4b0f1, _0x313fa4) => {
                'use strict';
                const _0x558192 = a0_0x6932;
                var _0x117868 = this && this['__importDefault'] || function(_0x8a6c60) {
                    return _0x8a6c60 && _0x8a6c60['__esModule'] ? _0x8a6c60 : {
                        'default': _0x8a6c60
                    };
                };
                Object['defineProperty'](_0x4b0f1, '__esModule', {
                    'value': !0x0
                }), _0x4b0f1['CharStatsPanel'] = void 0x0;
                const _0x131528 = _0x313fa4(0x16c14),
                    _0x847cd3 = _0x117868(_0x313fa4(0x15dd)),
                    _0x4c99fa = _0x117868(_0x313fa4(0xb6a1)),
                    _0x2aa380 = _0x117868(_0x313fa4(0x16729)),
                    _0xefd452 = _0x117868(_0x313fa4(0x5103)),
                    _0x5dbd2b = _0x117868(_0x313fa4(0x5f07));
                class _0x2e3531 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x5cfcbf, _0x3dccc0, _0xc8c145, _0x1b4cb4, _0x4aaa3a, _0x308101) {
                        const _0x574282 = _0x558192;
                        super(_0x5cfcbf, _0x3dccc0, _0xc8c145), this['myListOfStats'] = [{
                            'name': 'maxHp',
                            'powerupType': _0x2aa380[_0x574282(0xd2c)]['MAXHEALTH'],
                            'value': 0x64,
                            'type': 'health'
                        }, {
                            'name': 'regen',
                            'powerupType': _0x2aa380[_0x574282(0xd2c)][_0x574282(0x2c9)],
                            'value': 0x0,
                            'type': 'percentagePerSecond'
                        }, {
                            'name': 'armor',
                            'powerupType': _0x2aa380[_0x574282(0xd2c)]['ARMOR'],
                            'value': 0x0,
                            'type': 'flat'
                        }, {
                            'name': 'moveSpeed',
                            'powerupType': _0x2aa380['default'][_0x574282(0x1a7b)],
                            'value': 0x1,
                            'type': 'percentage1'
                        }, {
                            'type': 'newLine'
                        }, {
                            'name': 'power',
                            'powerupType': _0x2aa380[_0x574282(0xd2c)]['MIGHT'],
                            'value': 0x1,
                            'type': 'percentage1',
                            'omni': !0x0
                        }, {
                            'name': 'speed',
                            'powerupType': _0x2aa380['default'][_0x574282(0x142d)],
                            'value': 0x1,
                            'type': 'percentage1',
                            'omni': !0x0
                        }, {
                            'name': 'duration',
                            'powerupType': _0x2aa380[_0x574282(0xd2c)]['DURATION'],
                            'value': 0x1,
                            'type': 'percentage1',
                            'omni': !0x0
                        }, {
                            'name': 'area',
                            'powerupType': _0x2aa380['default']['AREA'],
                            'value': 0x1,
                            'type': 'percentage1',
                            'omni': !0x0
                        }, {
                            'type': 'newLine'
                        }, {
                            'name': 'cooldown',
                            'powerupType': _0x2aa380['default'][_0x574282(0xebc)],
                            'value': 0x1,
                            'type': 'percentage1'
                        }, {
                            'name': 'amount',
                            'powerupType': _0x2aa380[_0x574282(0xd2c)]['AMOUNT'],
                            'value': 0x0,
                            'type': 'flat'
                        }, {
                            'name': 'revivals',
                            'powerupType': _0x2aa380['default'][_0x574282(0x855)],
                            'value': 0x0,
                            'type': 'flat'
                        }, {
                            'name': 'magnet',
                            'powerupType': _0x2aa380['default']['MAGNET'],
                            'value': 0x0,
                            'type': 'percentagePlusOne'
                        }, {
                            'type': 'newLine'
                        }, {
                            'name': 'luck',
                            'powerupType': _0x2aa380[_0x574282(0xd2c)]['LUCK'],
                            'value': 0x1,
                            'type': 'percentage1'
                        }, {
                            'name': 'growth',
                            'powerupType': _0x2aa380[_0x574282(0xd2c)]['GROWTH'],
                            'value': 0x1,
                            'type': 'percentage1'
                        }, {
                            'name': 'greed',
                            'powerupType': _0x2aa380['default']['GREED'],
                            'value': 0x1,
                            'type': 'percentage1'
                        }, {
                            'name': 'curse',
                            'powerupType': _0x2aa380['default'][_0x574282(0x18d1)],
                            'value': 0x1,
                            'type': 'percentage1'
                        }, {
                            'type': 'newLine'
                        }, {
                            'name': 'rerolls',
                            'powerupType': _0x2aa380[_0x574282(0xd2c)][_0x574282(0x19fd)],
                            'value': 0x0,
                            'type': 'flat'
                        }, {
                            'name': 'skips',
                            'powerupType': _0x2aa380['default'][_0x574282(0x1119)],
                            'value': 0x0,
                            'type': 'flat'
                        }, {
                            'name': 'banish',
                            'powerupType': _0x2aa380[_0x574282(0xd2c)]['BANISH'],
                            'value': 0x0,
                            'type': 'flat'
                        }], this[_0x574282(0xcdf)] = _0x308101, this[_0x574282(0x8a2)](_0xefd452[_0x574282(0xd2c)]['PixelScale']);
                        for (let _0x11862c = 0x0; _0x11862c < this[_0x574282(0x19c5)]['length']; _0x11862c++) {
                            const _0x1a2d68 = this['myListOfStats'][_0x11862c];
                            if ('newLine' === _0x1a2d68['type']) continue;
                            if (void 0x0 === _0x4c99fa[_0x574282(0xd2c)][_0x1a2d68['powerupType']]) continue;
                            let _0x4ae0e0 = _0x4c99fa['default'][_0x1a2d68[_0x574282(0x1ae6)]][0x0],
                                _0x2acf62 = new Phaser[(_0x574282(0xbf2))][(_0x574282(0x1951))](this['scene'], 0x6, 0x10 + 0x10 * _0x11862c, _0x4ae0e0[_0x574282(0x174d)], _0x4ae0e0[_0x574282(0x8e3)])[_0x574282(0xf8e)](0x0, 0.5)[_0x574282(0x8a2)](_0xefd452[_0x574282(0xd2c)]['PixelScale']),
                                _0x12b26e = new Phaser[(_0x574282(0xbf2))][(_0x574282(0x1ae9))](this['scene'], 0x18, 0x10 + 0x10 * _0x11862c, _0x4ae0e0['name'], {})[_0x574282(0xf8e)](0x0, 0.5)['setScale'](_0xefd452[_0x574282(0xd2c)][_0x574282(0x15db)]),
                                _0x567d80 = new Phaser[(_0x574282(0xbf2))][(_0x574282(0x1ae9))](this[_0x574282(0x6d2)], 0xba, 0x10 + 0x10 * _0x11862c, _0x4ae0e0[_0x574282(0xb81)], {})['setOrigin'](0x1, 0.5)[_0x574282(0x8a2)](_0xefd452[_0x574282(0xd2c)][_0x574282(0x15db)]);
                            _0x5dbd2b[_0x574282(0xd2c)][_0x574282(0x1f1)]['scaleToMaxFast'](_0x12b26e, !0x1, 0x78), this[_0x574282(0x18bd)](_0x2acf62), this['add'](_0x12b26e), this[_0x574282(0x18bd)](_0x567d80), _0x1a2d68[_0x574282(0x1256)] = _0x567d80;
                        }
                        var _0x50258d = {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x1b4cb4,
                            'height': 0x20 + 0x10 * (this['myListOfStats'][_0x574282(0xed9)] - 0x1)
                        };
                        this['Background'] = new _0x131528['NineSlice'](this[_0x574282(0x6d2)], {
                            'sourceKey': 'UI',
                            'sourceFrame': 'frame1_c2.png',
                            'sourceLayout': {
                                'width': 0xc,
                                'height': 0xc
                            }
                        }, _0x50258d), this[_0x574282(0x720)](this[_0x574282(0x14b7)], 0x0), this['AssignData'](this['char']);
                    } ['Open']() {
                        const _0x100fd1 = _0x558192;
                        this[_0x100fd1(0x1721)] = 0x0, this[_0x100fd1(0xd9b)] = this[_0x100fd1(0x6d2)][_0x100fd1(0x12a1)][_0x100fd1(0x18bd)]({
                            'targets': this,
                            'scaleY': 0x1,
                            'duration': 0x96
                        });
                    } ['OnClick']() {} ['AssignData'](_0xdf1644) {
                        const _0x55693e = _0x558192;
                        var _0x32e1b4;
                        this['char'] = _0xdf1644;
                        var _0x2fec9d = _0x847cd3['default'][this[_0x55693e(0xcdf)]],
                            _0x47f140 = _0x5dbd2b[_0x55693e(0xd2c)][_0x55693e(0x1043)]['PlayerOptions'][_0x55693e(0x3fd)][this['char']];
                        if (void 0x0 !== _0x2fec9d) {
                            _0x2fec9d = _0x847cd3[_0x55693e(0xd2c)][this[_0x55693e(0xcdf)]][0x0];
                            for (let _0x3cd4b7 = 0x0; _0x3cd4b7 < this['myListOfStats']['length']; _0x3cd4b7++) {
                                const _0x4b4814 = this['myListOfStats'][_0x3cd4b7];
                                if (_0x2fec9d[_0x55693e(0x2cf)](_0x4b4814['name'])) {
                                    _0x4b4814[_0x55693e(0xb81)] = _0x2fec9d[_0x4b4814['name']], _0x47f140 && _0x5dbd2b[_0x55693e(0xd2c)]['Core'][_0x55693e(0x14d8)][_0x55693e(0x18b1)] && _0x47f140['hasOwnProperty'](_0x4b4814[_0x55693e(0x226)]) && ('magnet' === _0x4b4814[_0x55693e(0x226)] ? _0x4b4814[_0x55693e(0xb81)] += _0x47f140[_0x4b4814[_0x55693e(0x226)]] / 0x1e : _0x4b4814['value'] += _0x47f140[_0x4b4814['name']]);
                                    let _0x5c3eea = !0x1;
                                    _0x4b4814[_0x55693e(0x831)] && (_0x5c3eea = this['CheckForOmni'](_0x4b4814));
                                    var _0x1a7e49 = _0x4c99fa[_0x55693e(0xd2c)][_0x4b4814[_0x55693e(0x1ae6)]];
                                    if (void 0x0 !== _0x1a7e49) {
                                        let _0x1cc0b6 = _0x4c99fa[_0x55693e(0xd2c)][_0x4b4814['powerupType']][0x0];
                                        for (let _0x5395ad = 0x0; _0x5395ad < _0x1cc0b6[_0x55693e(0x5e3)]; _0x5395ad++)
                                            if (void 0x0 !== _0x1a7e49[_0x5395ad] && _0x1cc0b6['active'] && void 0x0 !== _0x1a7e49[_0x5395ad][_0x4b4814['name']]) {
                                                if (_0x4b4814['powerupType'] === _0x2aa380['default']['MAXHEALTH']) {
                                                    let _0x50e945 = _0x2fec9d[_0x4b4814[_0x55693e(0x226)]],
                                                        _0x41d67c = _0x1a7e49[_0x5395ad][_0x4b4814[_0x55693e(0x226)]];
                                                    _0x4b4814['value'] += _0x50e945 * _0x41d67c, _0x5c3eea = !0x0;
                                                } else _0x4b4814[_0x55693e(0xb81)] += _0x1a7e49[_0x5395ad][_0x4b4814['name']], _0x5c3eea = !0x0;
                                            }
                                    }
                                    null === (_0x32e1b4 = _0x4b4814[_0x55693e(0x1256)]) || void 0x0 === _0x32e1b4 || (_0x32e1b4[_0x55693e(0x758)] = this[_0x55693e(0x178)](_0x4b4814)), _0x4b4814[_0x55693e(0x1256)] && _0x4b4814[_0x55693e(0x1256)][_0x55693e(0xb34)](_0x5c3eea ? 0xffff00 : 0xffffff);
                                }
                            }
                        }
                    } ['CheckForOmni'](_0x394f85) {
                        const _0x436363 = _0x558192;
                        let _0x2ef3b7 = !0x1,
                            _0x1665ca = _0x4c99fa['default'][_0x2aa380[_0x436363(0xd2c)][_0x436363(0x957)]];
                        if (void 0x0 !== _0x1665ca && _0x1665ca[0x0][_0x436363(0xd40)]) {
                            let _0x4344e7 = _0x1665ca[0x0];
                            for (let _0xf2d4ba = 0x0; _0xf2d4ba < _0x4344e7['level']; _0xf2d4ba++) {
                                if (void 0x0 === _0x1665ca[_0xf2d4ba]) return !0x1;
                                void 0x0 !== _0x1665ca[_0xf2d4ba][_0x394f85[_0x436363(0x226)]] && (_0x394f85[_0x436363(0xb81)] += _0x1665ca[_0xf2d4ba][_0x394f85[_0x436363(0x226)]], _0x2ef3b7 = !0x0);
                            }
                        }
                        return _0x2ef3b7;
                    } ['AssignPlayer'](_0x5f3e12) {
                        const _0xb986f9 = _0x558192;
                        var _0x92c8eb, _0xc72cfe, _0x3f395e;
                        for (let _0x59c23a = 0x0; _0x59c23a < this[_0xb986f9(0x19c5)]['length']; _0x59c23a++) {
                            const _0x5d1d9e = this[_0xb986f9(0x19c5)][_0x59c23a];
                            _0x5f3e12['hasOwnProperty'](_0x5d1d9e['name']) ? (_0x5d1d9e[_0xb986f9(0xb81)] = _0x5f3e12[_0x5d1d9e[_0xb986f9(0x226)]], 'cooldown' === _0x5d1d9e[_0xb986f9(0x226)] && (_0x5d1d9e[_0xb986f9(0xb81)] += _0x5dbd2b['default']['Core']['Arcanas'][_0xb986f9(0x981)]), 'power' === _0x5d1d9e[_0xb986f9(0x226)] && (_0x5d1d9e[_0xb986f9(0xb81)] = _0x5d1d9e['value'] + _0x5dbd2b[_0xb986f9(0xd2c)]['Core'][_0xb986f9(0x1884)][_0xb986f9(0x18f8)] + _0x5dbd2b[_0xb986f9(0xd2c)][_0xb986f9(0x1043)][_0xb986f9(0x1884)]['bloodlineDamage']), null === (_0x92c8eb = _0x5d1d9e[_0xb986f9(0x1256)]) || void 0x0 === _0x92c8eb || (_0x92c8eb[_0xb986f9(0x758)] = this[_0xb986f9(0x178)](_0x5d1d9e)), null === (_0xc72cfe = _0x5d1d9e['valueTextObject']) || void 0x0 === _0xc72cfe || _0xc72cfe['setTint'](0xffffff)) : 'magnet' === _0x5d1d9e[_0xb986f9(0x226)] && (null === (_0x3f395e = _0x5d1d9e[_0xb986f9(0x1256)]) || void 0x0 === _0x3f395e || (_0x3f395e[_0xb986f9(0x758)] = _0x5dbd2b['default']['Core'][_0xb986f9(0x17fc)][_0xb986f9(0x161a)][_0xb986f9(0x1969)]()));
                        }
                    } ['GetStatDisplayTextValue'](_0x5b7e7d) {
                        const _0x5a988c = _0x558192;
                        switch (_0x5b7e7d['type']) {
                            case 'health':
                                return _0x5b7e7d[_0x5a988c(0xb81)][_0x5a988c(0x1969)]();
                            case 'flat': {
                                let _0x59a942 = (_0x5b7e7d[_0x5a988c(0xb81)] >= 0x0 ? '+' : '') + Math['floor'](_0x5b7e7d['value']);
                                return '+0' === _0x59a942 ? '-' : _0x59a942;
                            }
                            case 'percentagePerSecond': {
                                let _0xfd71d6 = _0x5b7e7d[_0x5a988c(0xb81)]['toFixed'](0x1);
                                return '0.0' === _0xfd71d6 ? '-' : _0xfd71d6;
                            }
                            case 'percentage1': {
                                let _0xd11d63 = (_0x5b7e7d['value'] >= 0x1 ? '+' : '') + Math['round'](0x64 * (_0x5b7e7d['value'] - 0x1)) + '%';
                                return '+0%' === _0xd11d63 ? '-' : _0xd11d63;
                            }
                            case 'percentagePlusOne': {
                                let _0x4de6d0 = (_0x5b7e7d['value'] + 0x1 >= 0x1 ? '+' : '') + Math[_0x5a988c(0x893)](0x64 * _0x5b7e7d[_0x5a988c(0xb81)]) + '%';
                                return '+0%' === _0x4de6d0 ? '-' : _0x4de6d0;
                            }
                            default:
                                return '';
                        }
                    }
                }
                _0x4b0f1['CharStatsPanel'] = _0x2e3531, _0x4b0f1['default'] = _0x2e3531;
            };
