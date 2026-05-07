// Module 0x12fcd
// Args: _0x50760a, _0x2e119b, _0x4e53e5

export default (_0x50760a, _0x2e119b, _0x4e53e5) => {
                'use strict';
                const _0x4c46ee = a0_0x6932;
                var _0x4c61c6 = this && this['__importDefault'] || function(_0x2bca13) {
                    return _0x2bca13 && _0x2bca13['__esModule'] ? _0x2bca13 : {
                        'default': _0x2bca13
                    };
                };
                Object['defineProperty'](_0x2e119b, '__esModule', {
                    'value': !0x0
                }), _0x2e119b['CardInformationPanel'] = void 0x0;
                const _0x42b58e = _0x4e53e5(0x16c14),
                    _0x53219b = _0x4c61c6(_0x4e53e5(0xccae)),
                    _0x3bbd79 = _0x4c61c6(_0x4e53e5(0x15dd)),
                    _0x228170 = _0x4c61c6(_0x4e53e5(0x3107)),
                    _0x4b8863 = _0x4c61c6(_0x4e53e5(0x5f07)),
                    _0x3c9349 = _0x4c61c6(_0x4e53e5(0x5103)),
                    _0x5a0495 = _0x4c61c6(_0x4e53e5(0xc42e)),
                    _0x317b7e = _0x4c61c6(_0x4e53e5(0x15866)),
                    _0x37164d = _0x4c61c6(_0x4e53e5(0x9b68)),
                    _0x2914a9 = _0x4c61c6(_0x4e53e5(0x4d17)),
                    _0x5d446e = _0x4c61c6(_0x4e53e5(0x54e3));
                class _0x230e6b extends Phaser['GameObjects']['Container'] {
                    constructor(_0x22cb33, _0x24ebf1, _0xf41a97, _0x474230, _0x4c9a0f) {
                        const _0x3886ba = _0x4c46ee;
                        super(_0x22cb33, _0x24ebf1, _0xf41a97), this[_0x3886ba(0x11c2)] = _0x37164d[_0x3886ba(0xd2c)]['T06_SARABANDE'], this['setScale'](_0x3c9349[_0x3886ba(0xd2c)][_0x3886ba(0x15db)]);
                        var _0x442490 = _0x474230;
                        this[_0x3886ba(0x1634)] = 0.5 * _0x474230;
                        var _0x97bf6b = {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x442490,
                            'height': _0x4c9a0f
                        };
                        this['Background'] = new _0x42b58e[(_0x3886ba(0x1a31))](this[_0x3886ba(0x6d2)], _0x53219b[_0x3886ba(0xd2c)]['CardsBackground'], _0x97bf6b), this['myName'] = new Phaser['GameObjects'][(_0x3886ba(0x1ae9))](this[_0x3886ba(0x6d2)], this[_0x3886ba(0x1634)], 0x10, _0x4b8863['default'][_0x3886ba(0x1f1)][_0x3886ba(0xb10)]('stageConfirm_name'), {})[_0x3886ba(0x8a2)](0x1)['setOrigin'](0.5)[_0x3886ba(0xb34)](0xffff00), this[_0x3886ba(0x9e7)] = new Phaser['GameObjects'][(_0x3886ba(0x1ae9))](this[_0x3886ba(0x6d2)], this[_0x3886ba(0x1634)], 0x24, _0x4b8863['default'][_0x3886ba(0x1f1)][_0x3886ba(0xb10)]('stageConfirm_description'), {
                            'align': 'center'
                        })[_0x3886ba(0x8a2)](0x1)[_0x3886ba(0x15fb)](_0x474230 - 0x10)['setOrigin'](0.5, 0x0), this[_0x3886ba(0x168d)] = [], this[_0x3886ba(0x6e4)](this['arcanaType']), this[_0x3886ba(0x18bd)]([this['Background'], this[_0x3886ba(0xc89)], this[_0x3886ba(0x9e7)]]);
                    } ['AssignData'](_0x1f77cc) {
                        const _0x3761f4 = _0x4c46ee;
                        var _0x1c6a33;
                        if (this[_0x3761f4(0x11c2)] = _0x1f77cc, _0x317b7e[_0x3761f4(0xd2c)][this[_0x3761f4(0x11c2)]]) {
                            _0x1c6a33 = _0x317b7e['default'][this[_0x3761f4(0x11c2)]];
                            for (let _0x20b110 = 0x0; _0x20b110 < this['mySprites'][_0x3761f4(0xed9)]; _0x20b110++) {
                                const _0x569564 = this['mySprites'][_0x20b110];
                                this[_0x3761f4(0x6d2)][_0x3761f4(0x3fe)][_0x3761f4(0x393)](_0x569564), _0x569564[_0x3761f4(0x1831)](), _0x569564[_0x3761f4(0xfa4)](), _0x569564[_0x3761f4(0x16ca)](), this[_0x3761f4(0x168d)][_0x20b110] = null;
                            }
                            if (this[_0x3761f4(0xc89)]['text'] = _0x1c6a33[_0x3761f4(0x18d6)] && !_0x1c6a33['hidden'] ? _0x1c6a33[_0x3761f4(0x226)] : '???', this['myDesc']['text'] = _0x1c6a33[_0x3761f4(0x18d6)] && !_0x1c6a33['hidden'] ? _0x1c6a33['description'] : '???', _0x4b8863['default']['Lang']['scaleToMaxFast'](this[_0x3761f4(0xc89)], !0x1, 0x12c), this[_0x3761f4(0x168d)] = [], _0x1c6a33[_0x3761f4(0x18d6)]) {
                                if (this[_0x3761f4(0x11c2)] === _0x37164d[_0x3761f4(0xd2c)]['T10_BEGINNING']) {
                                    let _0x4d6a7e = [],
                                        _0x58eb53 = _0x3bbd79[_0x3761f4(0xd2c)][_0x4b8863['default'][_0x3761f4(0x1043)][_0x3761f4(0x14d8)]['SelectedCharacter']][0x0],
                                        _0x3e670b = [];
                                    if (_0x58eb53[_0x3761f4(0xfc9)] != _0x5d446e['default'][_0x3761f4(0xbc4)] && _0x3e670b['push'](_0x58eb53[_0x3761f4(0xfc9)]), _0x58eb53['startingWeapon'] === _0x5d446e['default']['CANDYBOX'] && _0x4b8863[_0x3761f4(0xd2c)]['Core'][_0x3761f4(0x506)][_0x3761f4(0xed9)] > 0x0 && (_0x3e670b = [_0x4b8863['default'][_0x3761f4(0x1043)][_0x3761f4(0x506)][0x0][_0x3761f4(0x14e)]]), _0x58eb53[_0x3761f4(0x19b4)] && (_0x3e670b = _0x3e670b[_0x3761f4(0x16d)](_0x58eb53['exWeapons'])), _0x4d6a7e = _0x4d6a7e['concat'](_0x3e670b), _0x58eb53[_0x3761f4(0xfc9)] === _0x5d446e['default'][_0x3761f4(0x122e)]) _0x4d6a7e[_0x3761f4(0x1564)](_0x5d446e[_0x3761f4(0xd2c)][_0x3761f4(0xe7c)]), _0x4d6a7e['push'](_0x5d446e['default']['TRIASSO3']);
                                    else
                                        for (let _0x3433a5 = 0x0; _0x3433a5 < _0x3e670b['length']; _0x3433a5++) {
                                            const _0x8db62 = _0x228170[_0x3761f4(0xd2c)][_0x3e670b[_0x3433a5]][0x0];
                                            _0x8db62[_0x3761f4(0x1065)] && _0x4d6a7e[_0x3761f4(0x1564)](_0x8db62[_0x3761f4(0x1065)]);
                                        }
                                    _0x4d6a7e = _0x4d6a7e[_0x3761f4(0x16d)](_0x1c6a33['weapons']), _0x4d6a7e = [...new Set(_0x4d6a7e)];
                                    let _0x32bcda = 0x18 + this['centerX'] - 0x30 * _0x4d6a7e[_0x3761f4(0xed9)] * 0.5;
                                    for (let _0x1d87dc = 0x0; _0x1d87dc < _0x4d6a7e['length']; _0x1d87dc++) {
                                        let _0x38737f = _0x228170[_0x3761f4(0xd2c)][_0x4d6a7e[_0x1d87dc]];
                                        if (!_0x38737f) continue;
                                        _0x38737f = _0x228170[_0x3761f4(0xd2c)][_0x4d6a7e[_0x1d87dc]][0x0];
                                        let _0x1d14df = new Phaser['GameObjects']['Sprite'](this['scene'], _0x32bcda + 0x30 * _0x1d87dc, 0x78, _0x38737f['texture'], _0x38737f['frameName'])[_0x3761f4(0x8a2)](0x2);
                                        this[_0x3761f4(0x168d)]['push'](_0x1d14df);
                                    }
                                } else {
                                    let _0x313b94 = 0x18 + this[_0x3761f4(0x1634)] - 0x30 * (_0x1c6a33['weapons']['length'] + _0x1c6a33['items'][_0x3761f4(0xed9)]) * 0.5,
                                        _0x4dc9f4 = 0x0,
                                        _0x50db63 = 0x0;
                                    for (_0x4dc9f4 = 0x0; _0x4dc9f4 < _0x1c6a33[_0x3761f4(0x1f3)]['length']; _0x4dc9f4++) {
                                        const _0x4d9917 = _0x1c6a33['weapons'][_0x4dc9f4];
                                        let _0x566288 = _0x228170[_0x3761f4(0xd2c)][_0x4d9917];
                                        if (!_0x566288) continue;
                                        _0x566288 = _0x228170[_0x3761f4(0xd2c)][_0x4d9917][0x0];
                                        let _0x49cf0d = _0x566288[_0x3761f4(0x8e3)],
                                            _0x297dc8 = new Phaser['GameObjects'][(_0x3761f4(0xa97))](this[_0x3761f4(0x6d2)], _0x313b94 + 0x30 * _0x4dc9f4, 0x78, _0x566288['texture'], _0x49cf0d)[_0x3761f4(0x8a2)](0x2);
                                        this['mySprites'][_0x3761f4(0x1564)](_0x297dc8);
                                    }
                                    for (_0x50db63 = 0x0; _0x50db63 < _0x1c6a33['items'][_0x3761f4(0xed9)]; _0x50db63++) {
                                        const _0x592e01 = _0x1c6a33['items'][_0x50db63];
                                        let _0xe7e0c8 = _0x2914a9[_0x3761f4(0xd2c)][_0x592e01],
                                            _0x504d51 = new Phaser[(_0x3761f4(0xbf2))]['Sprite'](this[_0x3761f4(0x6d2)], _0x313b94 + 0x30 * (_0x4dc9f4 + _0x50db63), 0x78, _0xe7e0c8['texture'], _0xe7e0c8[_0x3761f4(0x8e3)])['setScale'](0x2);
                                        this['mySprites']['push'](_0x504d51);
                                    }
                                    if (this[_0x3761f4(0x168d)][_0x3761f4(0xed9)] >= 0xb) {
                                        let _0x1556ce = Math[_0x3761f4(0x1084)](0x30 * this[_0x3761f4(0x168d)][_0x3761f4(0xed9)], 0x1e0),
                                            _0x522cf1 = _0x1556ce / this[_0x3761f4(0x168d)][_0x3761f4(0xed9)],
                                            _0x4abea1 = 0x18 + this[_0x3761f4(0x1634)] - 0.5 * _0x1556ce;
                                        for (let _0x2e5262 = 0x0; _0x2e5262 < this['mySprites'][_0x3761f4(0xed9)]; _0x2e5262++) this['mySprites'][_0x2e5262]['x'] = _0x4abea1 + _0x522cf1 * _0x2e5262;
                                    }
                                }
                                if (this['arcanaType'] === _0x37164d[_0x3761f4(0xd2c)][_0x3761f4(0x166e)]) {
                                    let _0x13f892 = _0x4b8863[_0x3761f4(0xd2c)][_0x3761f4(0x1043)][_0x3761f4(0x133f)]['filter'](_0x38d6cf => _0x38d6cf[_0x3761f4(0xeb5)] === _0x5a0495[_0x3761f4(0xd2c)][_0x3761f4(0x17b3)]);
                                    _0x13f892 = _0x13f892[_0x3761f4(0x1919)](_0x291779 => _0x291779[_0x3761f4(0x15f6)]);
                                    let _0x181ac3 = [...new Set(_0x13f892)],
                                        _0x297723 = Math['min'](0x30 * _0x181ac3[_0x3761f4(0xed9)], 0x1e0),
                                        _0x3a15a5 = 0x18 + this[_0x3761f4(0x1634)] - 0.5 * _0x297723,
                                        _0xa2bf1 = _0x297723 / _0x181ac3['length'];
                                    for (let _0x32bb0a = 0x0; _0x32bb0a < _0x181ac3['length']; _0x32bb0a++) {
                                        let _0x3cb1ab = _0x228170['default'][_0x181ac3[_0x32bb0a]];
                                        if (!_0x3cb1ab) continue;
                                        _0x3cb1ab = _0x228170[_0x3761f4(0xd2c)][_0x181ac3[_0x32bb0a]][0x0];
                                        let _0x2ceaba = new Phaser['GameObjects'][(_0x3761f4(0xa97))](this[_0x3761f4(0x6d2)], _0x3a15a5 + _0xa2bf1 * _0x32bb0a, 0x78, _0x3cb1ab['texture'], _0x3cb1ab[_0x3761f4(0x8e3)])[_0x3761f4(0x8a2)](0x2);
                                        this['mySprites'][_0x3761f4(0x1564)](_0x2ceaba);
                                    }
                                }
                                this[_0x3761f4(0x18bd)](this['mySprites']);
                            }
                        }
                    } ['Show']() {
                        const _0x3c14ed = _0x4c46ee;
                        this['scale'] = 0x0, this[_0x3c14ed(0x6d2)][_0x3c14ed(0x12a1)][_0x3c14ed(0x18bd)]({
                            'targets': this,
                            'scale': 0x1,
                            'duration': 0xc8
                        });
                    }
                }
                _0x2e119b['CardInformationPanel'] = _0x230e6b, _0x2e119b['default'] = _0x230e6b;
            };
