// Module 0x3d3
// Args: _0x48de43, _0x7db2ae, _0x41935c

export default (_0x48de43, _0x7db2ae, _0x41935c) => {
                'use strict';
                const _0x447b2e = a0_0x6932;
                var _0x2ad30b = this && this['__importDefault'] || function(_0x521041) {
                    const _0x3f77ba = _0x447b2e;
                    return _0x521041 && _0x521041[_0x3f77ba(0x16f1)] ? _0x521041 : {
                        'default': _0x521041
                    };
                };
                Object['defineProperty'](_0x7db2ae, '__esModule', {
                    'value': !0x0
                }), _0x7db2ae['BanishedPanel'] = void 0x0;
                const _0x2a62d5 = _0x41935c(0x16c14),
                    _0x4450de = _0x2ad30b(_0x41935c(0x3107)),
                    _0x42f6eb = _0x2ad30b(_0x41935c(0x5103)),
                    _0x3a1f78 = _0x2ad30b(_0x41935c(0x5f07));
                class _0x4a6f48 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x2c1da7, _0x2501dd, _0x589cbd, _0x2ad9f5, _0x3b1942) {
                        const _0x24bd97 = _0x447b2e;
                        super(_0x2c1da7, _0x2501dd, _0x589cbd), this[_0x24bd97(0x19f2)] = [], this['setScale'](0x0, _0x42f6eb[_0x24bd97(0xd2c)][_0x24bd97(0x15db)]);
                        let _0x1c795a = 0x23,
                            _0x143309 = _0x3a1f78[_0x24bd97(0xd2c)]['Core']['LevelUpFactory']['BanishedWeapons'][_0x24bd97(0xed9)],
                            _0x8205e3 = _0x3a1f78['default'][_0x24bd97(0x1043)][_0x24bd97(0x7a8)]['BanishedWeapons'][_0x24bd97(0xed9)] * _0x1c795a + 0x14;
                        _0x8205e3 > _0x2ad9f5 && (_0x8205e3 = _0x2ad9f5, _0x1c795a = (_0x2ad9f5 - 0x14) / _0x3a1f78['default']['Core'][_0x24bd97(0x7a8)]['BanishedWeapons'][_0x24bd97(0xed9)], _0x143309 = (_0x2ad9f5 - 0x14) / 0x23 - 0x1);
                        let _0x3a3ad1 = new Phaser['GameObjects']['Container'](this[_0x24bd97(0x6d2)]);
                        for (let _0x1fc780 = 0x0; _0x1fc780 < _0x3a1f78['default'][_0x24bd97(0x1043)]['LevelUpFactory']['BanishedWeapons']['length']; _0x1fc780++) _0x3a3ad1['add'](this[_0x24bd97(0xe41)](_0x3a1f78['default']['Core'][_0x24bd97(0x7a8)]['BanishedWeapons'][_0x1fc780], _0x1c795a * _0x1fc780, 0x0));
                        if (_0x3a3ad1['x'] = 0.5 * -_0x8205e3 + 0.5 * _0x1c795a + 0xa, this['add'](_0x3a3ad1), _0x3a1f78[_0x24bd97(0xd2c)]['Core'][_0x24bd97(0x7a8)]['BanishedWeapons'][_0x24bd97(0xed9)] <= 0xb) {
                            this['crosses'] = [];
                            let _0x4d5a7a = new Phaser['GameObjects']['Container'](this[_0x24bd97(0x6d2)]);
                            for (let _0x5cd1f8 = 0x0; _0x5cd1f8 < _0x143309; _0x5cd1f8++) {
                                let _0x5696fc = this['createCrossIcon'](0x23 * _0x5cd1f8, 0x0);
                                _0x5696fc['alpha'] = 0.6, _0x4d5a7a[_0x24bd97(0x18bd)](_0x5696fc), this['crosses'][_0x24bd97(0x1564)](_0x5696fc), this[_0x24bd97(0x6d2)]['tweens'][_0x24bd97(0x18bd)]({
                                    'targets': _0x5696fc,
                                    'alpha': 0.25,
                                    'duration': 0x4b0,
                                    'delay': 0xc8 * _0x5cd1f8,
                                    'yoyo': !0x0,
                                    'repeat': -0x1
                                });
                            }
                            _0x4d5a7a['x'] = 0.5 * -_0x8205e3 + 17.5 + 0xa, this['add'](_0x4d5a7a);
                        }
                        var _0x14a518 = {
                            'x': 0.5 * -_0x8205e3,
                            'y': 0.5 * -_0x3b1942,
                            'width': _0x8205e3,
                            'height': _0x3b1942
                        };
                        this[_0x24bd97(0x14b7)] = new _0x2a62d5[(_0x24bd97(0x1a31))](this[_0x24bd97(0x6d2)], {
                            'sourceKey': 'UI',
                            'sourceFrame': 'frame1_c5.png',
                            'sourceLayout': {
                                'width': 0xc,
                                'height': 0xc
                            }
                        }, _0x14a518), this[_0x24bd97(0x720)](this['Background'], 0x0);
                    } ['createWeaponIcon'](_0x2726dd, _0x3593ce, _0x1d49ac = 0x0) {
                        const _0x377065 = _0x447b2e;
                        if (_0x4450de[_0x377065(0xd2c)][_0x2726dd]) {
                            let _0x42bffd = _0x4450de[_0x377065(0xd2c)][_0x2726dd][0x0];
                            return new Phaser[(_0x377065(0xbf2))]['Image'](this['scene'], _0x3593ce, _0x1d49ac, _0x42bffd[_0x377065(0x174d)], _0x42bffd[_0x377065(0x8e3)])['setOrigin'](0.5)['setScale'](0x2 * _0x42f6eb[_0x377065(0xd2c)][_0x377065(0x15db)]);
                        }
                        return new Phaser[(_0x377065(0xbf2))]['Image'](this['scene'], _0x3593ce, _0x1d49ac, 'items', 'QuestionMark.png')[_0x377065(0xf8e)](0.5)[_0x377065(0x8a2)](0x1 * _0x42f6eb[_0x377065(0xd2c)][_0x377065(0x15db)]);
                    } ['createCrossIcon'](_0x288a26, _0x497109 = 0x0) {
                        const _0x580d73 = _0x447b2e;
                        return new Phaser['GameObjects'][(_0x580d73(0x1951))](this[_0x580d73(0x6d2)], _0x288a26, _0x497109, 'UI', 'no16.png')[_0x580d73(0xf8e)](0.5)['setScale'](0x2 * _0x42f6eb[_0x580d73(0xd2c)][_0x580d73(0x15db)]);
                    } ['Open']() {
                        const _0x17339b = _0x447b2e;
                        this['setScale'](0x0), this[_0x17339b(0xd9b)] = this[_0x17339b(0x6d2)][_0x17339b(0x12a1)]['add']({
                            'targets': this,
                            'scale': 0x1,
                            'duration': 0xc8
                        });
                    } ['OnClick']() {}
                }
                _0x7db2ae['BanishedPanel'] = _0x4a6f48, _0x7db2ae['default'] = _0x4a6f48;
            };
