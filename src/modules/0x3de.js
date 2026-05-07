// Module 0x3de
// Args: _0x5bc408, _0x5d6582, _0x534a9c

export default (_0x5bc408, _0x5d6582, _0x534a9c) => {
                'use strict';
                const _0x50d83d = a0_0x6932;
                var _0x3afa6f = this && this['__importDefault'] || function(_0x43197f) {
                    const _0x494254 = _0x50d83d;
                    return _0x43197f && _0x43197f[_0x494254(0x16f1)] ? _0x43197f : {
                        'default': _0x43197f
                    };
                };
                Object['defineProperty'](_0x5d6582, '__esModule', {
                    'value': !0x0
                }), _0x5d6582['CharStatsEggPanel'] = void 0x0;
                const _0x3c7eb4 = _0x534a9c(0x16c14),
                    _0x1401d0 = _0x3afa6f(_0x534a9c(0x4d17)),
                    _0x3f4d19 = _0x3afa6f(_0x534a9c(0xc42e)),
                    _0x4b6529 = _0x3afa6f(_0x534a9c(0x5103)),
                    _0x488e6f = _0x3afa6f(_0x534a9c(0x5f07));
                class _0x1fc722 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x568fb3, _0x566cd8, _0x5692b4, _0x4964f6, _0x163b68, _0x3e0c92) {
                        const _0xb6f989 = _0x50d83d;
                        super(_0x568fb3, _0x566cd8, _0x5692b4), this['myListOfStats'] = [{
                            'name': 'total',
                            'powerupType': _0x3f4d19[_0xb6f989(0xd2c)]['RELIC_GOLDENEGG'],
                            'value': 0x0,
                            'type': 'amount'
                        }], this[_0xb6f989(0xcdf)] = _0x3e0c92, this[_0xb6f989(0x8a2)](_0x4b6529[_0xb6f989(0xd2c)]['PixelScale']);
                        for (let _0x4ba7cf = 0x0; _0x4ba7cf < this['myListOfStats']['length']; _0x4ba7cf++) {
                            const _0x17cd05 = this[_0xb6f989(0x19c5)][_0x4ba7cf];
                            if ('newLine' === _0x17cd05['type']) continue;
                            let _0x5b2c71 = _0x1401d0[_0xb6f989(0xd2c)][_0x17cd05['powerupType']];
                            if (void 0x0 === _0x5b2c71) continue;
                            _0x5b2c71 = _0x1401d0[_0xb6f989(0xd2c)][_0x17cd05['powerupType']];
                            let _0x2423dc = new Phaser['GameObjects'][(_0xb6f989(0x1951))](this['scene'], 0x6, 0x10 + 0x10 * _0x4ba7cf, _0x5b2c71['texture'], _0x5b2c71[_0xb6f989(0x8e3)])['setOrigin'](0x0, 0.5)['setScale'](_0x4b6529['default']['PixelScale']),
                                _0x85e1b9 = new Phaser[(_0xb6f989(0xbf2))][(_0xb6f989(0x1ae9))](this[_0xb6f989(0x6d2)], 0x18, 0x10 + 0x10 * _0x4ba7cf, _0x5b2c71['name'], {})['setOrigin'](0x0, 0.5)['setScale'](_0x4b6529[_0xb6f989(0xd2c)][_0xb6f989(0x15db)]),
                                _0x5bbfc0 = new Phaser[(_0xb6f989(0xbf2))][(_0xb6f989(0x1ae9))](this[_0xb6f989(0x6d2)], 0xba, 0x10 + 0x10 * _0x4ba7cf, '0', {})['setOrigin'](0x1, 0.5)[_0xb6f989(0x8a2)](_0x4b6529['default'][_0xb6f989(0x15db)]);
                            _0x488e6f['default'][_0xb6f989(0x1f1)]['scaleToMaxFast'](_0x85e1b9, !0x1, 0x78), this['add'](_0x2423dc), this['add'](_0x85e1b9), this['add'](_0x5bbfc0), _0x17cd05[_0xb6f989(0x1256)] = _0x5bbfc0;
                        }
                        var _0x56f81e = {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x4964f6,
                            'height': 0x20 + 0x10 * (this['myListOfStats'][_0xb6f989(0xed9)] - 0x1)
                        };
                        this['Background'] = new _0x3c7eb4['NineSlice'](this[_0xb6f989(0x6d2)], {
                            'sourceKey': 'UI',
                            'sourceFrame': 'frame1_c2.png',
                            'sourceLayout': {
                                'width': 0xc,
                                'height': 0xc
                            }
                        }, _0x56f81e), this[_0xb6f989(0x720)](this[_0xb6f989(0x14b7)], 0x0), this[_0xb6f989(0x6e4)](this['char']);
                    } ['Open']() {
                        const _0x436b63 = _0x50d83d;
                        this['scaleY'] = 0x0, this[_0x436b63(0xd9b)] = this[_0x436b63(0x6d2)][_0x436b63(0x12a1)]['add']({
                            'targets': this,
                            'scaleY': 0x1,
                            'duration': 0x96
                        });
                    } ['OnClick']() {} ['AssignData'](_0xa4991b) {
                        const _0x2fa5cf = _0x50d83d;
                        var _0x5745e9;
                        this[_0x2fa5cf(0xcdf)] = _0xa4991b;
                        let _0xe84437 = 0x0;
                        _0xe84437 = void 0x0 === _0x488e6f[_0x2fa5cf(0xd2c)]['Core'][_0x2fa5cf(0x14d8)][_0x2fa5cf(0x3fd)][this[_0x2fa5cf(0xcdf)]] ? 0x0 : _0x488e6f[_0x2fa5cf(0xd2c)][_0x2fa5cf(0x1043)][_0x2fa5cf(0x14d8)][_0x2fa5cf(0x3fd)][this['char']]['total'];
                        for (let _0xd0bb77 = 0x0; _0xd0bb77 < this[_0x2fa5cf(0x19c5)]['length']; _0xd0bb77++) {
                            const _0x290230 = this[_0x2fa5cf(0x19c5)][_0xd0bb77];
                            _0x290230[_0x2fa5cf(0xb81)] = _0xe84437, null === (_0x5745e9 = _0x290230[_0x2fa5cf(0x1256)]) || void 0x0 === _0x5745e9 || (_0x5745e9[_0x2fa5cf(0x758)] = this['GetStatDisplayTextValue'](_0x290230));
                        }
                    } ['AssignPlayer'](_0x1c4df7) {
                        const _0x4cd4a4 = _0x50d83d;
                        this['AssignData'](_0x1c4df7[_0x4cd4a4(0x7fd)]);
                    } ['GetStatDisplayTextValue'](_0xa63d99) {
                        const _0x746323 = _0x50d83d;
                        switch (_0xa63d99[_0x746323(0x5a3)]) {
                            case 'amount': {
                                let _0x169d09 = _0xa63d99['value'][_0x746323(0x1969)]();
                                return '+0' === _0x169d09 ? '-' : _0x169d09;
                            }
                            case 'flat': {
                                let _0xf122b = (_0xa63d99[_0x746323(0xb81)] >= 0x0 ? '+' : '') + _0xa63d99[_0x746323(0xb81)][_0x746323(0x1969)]();
                                return '+0' === _0xf122b ? '-' : _0xf122b;
                            }
                            default:
                                return '';
                        }
                    }
                }
                _0x5d6582['CharStatsEggPanel'] = _0x1fc722, _0x5d6582['default'] = _0x1fc722;
            };
