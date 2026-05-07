// Module 0xabae
// Args: _0x376e1f, _0x607293, _0x28ef79

export default (_0x376e1f, _0x607293, _0x28ef79) => {
                'use strict';
                const _0x463a69 = a0_0x6932;
                var _0x1c2575 = this && this['__importDefault'] || function(_0x33f247) {
                    const _0x50594f = _0x463a69;
                    return _0x33f247 && _0x33f247[_0x50594f(0x16f1)] ? _0x33f247 : {
                        'default': _0x33f247
                    };
                };
                Object['defineProperty'](_0x607293, '__esModule', {
                    'value': !0x0
                }), _0x607293['StageRelicsPanel'] = void 0x0;
                const _0x365ce9 = _0x28ef79(0x16c14),
                    _0x2d32c4 = _0x1c2575(_0x28ef79(0x4d17)),
                    _0x5cb7b6 = _0x1c2575(_0x28ef79(0x14639)),
                    _0xc5a6b0 = _0x1c2575(_0x28ef79(0xc42e)),
                    _0x4e7fa0 = _0x1c2575(_0x28ef79(0x5103)),
                    _0x1cd2c9 = _0x1c2575(_0x28ef79(0x5f07));
                class _0x1a714e extends Phaser['GameObjects']['Container'] {
                    constructor(_0x2cdde9, _0x140551, _0x87a851, _0xfff2cf, _0x546fd9, _0x5edf70) {
                        const _0xe807f = _0x463a69;
                        super(_0x2cdde9, _0x140551, _0x87a851), this['panelWidth'] = 0x0, this['stage'] = _0x5edf70, this[_0xe807f(0x11ba)] = _0xfff2cf, this['setScale'](_0x4e7fa0[_0xe807f(0xd2c)]['PixelScale']);
                        var _0x33dc73 = {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0xfff2cf,
                            'height': _0x546fd9
                        };
                        this[_0xe807f(0x14b7)] = new _0x365ce9[(_0xe807f(0x1a31))](this['scene'], {
                            'sourceKey': 'UI',
                            'sourceFrame': 'frame1_c2.png',
                            'sourceLayout': {
                                'width': 0xc,
                                'height': 0xc
                            }
                        }, _0x33dc73), this[_0xe807f(0x720)](this[_0xe807f(0x14b7)], 0x0), this[_0xe807f(0x1752)] = new Phaser['GameObjects']['Text'](this[_0xe807f(0x6d2)], 0.5 * _0xfff2cf, 0xf, _0x1cd2c9[_0xe807f(0xd2c)]['Lang'][_0xe807f(0xb10)]('stageSelection_relicsToFind'), {})['setOrigin'](0.5, 0.5), _0x1cd2c9['default']['Lang']['scaleToMaxFast'](this[_0xe807f(0x1752)], !0x1, _0xfff2cf - 0x1c), this[_0xe807f(0x18bd)](this[_0xe807f(0x1752)]), this['relicContainer'] = new Phaser[(_0xe807f(0xbf2))][(_0xe807f(0x11dc))](this['scene'], 0.5 * _0xfff2cf, 0x2d), this[_0xe807f(0x18bd)](this['relicContainer']), this[_0xe807f(0x6e4)](this['stage']);
                    } ['Open']() {
                        const _0x5db421 = _0x463a69;
                        this[_0x5db421(0x1721)] = 0x0, this[_0x5db421(0xd9b)] = this['scene']['tweens']['add']({
                            'targets': this,
                            'scaleY': 0x1,
                            'duration': 0x96
                        });
                    } ['OnClick']() {} ['AssignData'](_0x4a5d32) {
                        const _0x145aa2 = _0x463a69;
                        this[_0x145aa2(0x707)] = _0x4a5d32;
                        var _0x31667f = _0x5cb7b6[_0x145aa2(0xd2c)][this['stage']];
                        if (void 0x0 !== _0x31667f) {
                            if (_0x31667f = _0x5cb7b6[_0x145aa2(0xd2c)][this[_0x145aa2(0x707)]][0x0], this[_0x145aa2(0x10a4)]['removeAll'](!0x0), _0x31667f[_0x145aa2(0x18d6)] && (_0x31667f[_0x145aa2(0x1276)] && _0x31667f[_0x145aa2(0x1276)]['length'] > 0x0 || _0x31667f['yellowRelics'] && _0x31667f[_0x145aa2(0x1850)][_0x145aa2(0xed9)] > 0x0)) {
                                this['Background'][_0x145aa2(0x183f)](!0x0), this[_0x145aa2(0x1752)][_0x145aa2(0x183f)](!0x0);
                                let _0x3230e5 = 0x23,
                                    _0x1aa590 = 0x14,
                                    _0x1ae0a6 = 0x0;
                                _0x31667f[_0x145aa2(0x1276)] && (_0x1ae0a6 += _0x31667f[_0x145aa2(0x1276)]['length']), _0x1cd2c9['default'][_0x145aa2(0x1043)][_0x145aa2(0x14d8)]['CollectedItems'][_0x145aa2(0x1303)](_0xc5a6b0[_0x145aa2(0xd2c)][_0x145aa2(0x1579)]) > -0x1 && (_0x1ae0a6 += _0x31667f['yellowRelics'][_0x145aa2(0xed9)]);
                                let _0x109ff7 = (_0x1ae0a6 - 0x1) * _0x3230e5;
                                if (_0x109ff7 > this[_0x145aa2(0x11ba)] && (_0x109ff7 = this[_0x145aa2(0x11ba)], _0x3230e5 = (this['panelWidth'] - _0x1aa590) / _0x1ae0a6), _0x31667f['relics'] && _0x31667f[_0x145aa2(0x1276)]['length'] > 0x0)
                                    for (let _0x2504a1 = 0x0; _0x2504a1 < _0x31667f['relics'][_0x145aa2(0xed9)]; _0x2504a1++) {
                                        let _0x26ed6c = _0x31667f['relics'][_0x2504a1],
                                            _0x54d86b = this[_0x145aa2(0xbf6)](_0x26ed6c, _0x3230e5 * _0x2504a1, 0x0);
                                        this[_0x145aa2(0x10a4)][_0x145aa2(0x18bd)](_0x54d86b), _0x1cd2c9[_0x145aa2(0xd2c)]['Core'][_0x145aa2(0x14d8)][_0x145aa2(0x1481)][_0x145aa2(0x1303)](_0x26ed6c) > -0x1 && (_0x54d86b[_0x145aa2(0xdab)](0.5), this['relicContainer'][_0x145aa2(0x18bd)](this['createTickIcon'](_0x54d86b['x'], _0x54d86b['y'])));
                                    }
                                if (_0x31667f[_0x145aa2(0x1850)] && _0x31667f[_0x145aa2(0x1850)][_0x145aa2(0xed9)] > 0x0 && _0x1cd2c9['default'][_0x145aa2(0x1043)]['PlayerOptions'][_0x145aa2(0x1481)]['indexOf'](_0xc5a6b0['default']['RELIC_YELLOW']) > -0x1)
                                    for (let _0x58429e = 0x0; _0x58429e < _0x31667f[_0x145aa2(0x1850)]['length']; _0x58429e++) {
                                        let _0x282dba = _0x31667f[_0x145aa2(0x1850)][_0x58429e],
                                            _0x2e7ea3 = this[_0x145aa2(0xbf6)](_0x282dba, _0x3230e5 * (_0x58429e + _0x31667f[_0x145aa2(0x1276)][_0x145aa2(0xed9)]), 0x0);
                                        this['relicContainer']['add'](_0x2e7ea3), _0x1cd2c9['default']['Core'][_0x145aa2(0x14d8)][_0x145aa2(0x1481)]['indexOf'](_0x282dba) > -0x1 && (_0x2e7ea3[_0x145aa2(0xdab)](0.5), this[_0x145aa2(0x10a4)]['add'](this[_0x145aa2(0x1642)](_0x2e7ea3['x'], _0x2e7ea3['y'])));
                                    }
                                this['relicContainer']['x'] = 0.5 * this[_0x145aa2(0x11ba)] - 0.5 * _0x109ff7;
                            } else this[_0x145aa2(0x14b7)][_0x145aa2(0x183f)](!0x1), this[_0x145aa2(0x1752)]['setVisible'](!0x1);
                        }
                    } ['createRelicIcon'](_0x3be78e, _0x59eb44, _0x10c296 = 0x0) {
                        const _0x169940 = _0x463a69;
                        if (_0x2d32c4[_0x169940(0xd2c)][_0x3be78e]) {
                            let _0x5d0d76 = _0x2d32c4[_0x169940(0xd2c)][_0x3be78e];
                            return new Phaser[(_0x169940(0xbf2))]['Image'](this[_0x169940(0x6d2)], _0x59eb44, _0x10c296, _0x5d0d76[_0x169940(0x174d)], _0x5d0d76[_0x169940(0x8e3)])[_0x169940(0xf8e)](0.5)[_0x169940(0x8a2)](0x2 * _0x4e7fa0['default']['PixelScale']);
                        }
                        return new Phaser['GameObjects'][(_0x169940(0x1951))](this['scene'], _0x59eb44, _0x10c296, 'items', 'QuestionMark.png')[_0x169940(0xf8e)](0.5)['setScale'](0x1 * _0x4e7fa0[_0x169940(0xd2c)]['PixelScale']);
                    } ['createTickIcon'](_0x1ab799, _0x695f4 = 0x0) {
                        const _0xe984fa = _0x463a69;
                        return new Phaser['GameObjects']['Image'](this['scene'], _0x1ab799, _0x695f4, 'UI', 'yes16.png')[_0xe984fa(0xf8e)](0.5)[_0xe984fa(0x8a2)](0x2 * _0x4e7fa0[_0xe984fa(0xd2c)]['PixelScale']);
                    }
                }
                _0x607293['StageRelicsPanel'] = _0x1a714e, _0x607293['default'] = _0x1a714e;
            };
