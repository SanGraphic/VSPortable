// Module 0x11ac
// Args: _0xe18b52, _0x53c312, _0x31961a

export default (_0xe18b52, _0x53c312, _0x31961a) => {
                'use strict';
                const _0x36e632 = a0_0x6932;
                var _0x255838 = this && this['__importDefault'] || function(_0x308f9b) {
                    const _0x2c21db = _0x36e632;
                    return _0x308f9b && _0x308f9b[_0x2c21db(0x16f1)] ? _0x308f9b : {
                        'default': _0x308f9b
                    };
                };
                Object['defineProperty'](_0x53c312, '__esModule', {
                    'value': !0x0
                }), _0x53c312['CharLevelPanel'] = void 0x0;
                const _0x388a26 = _0x31961a(0x16c14),
                    _0x13cf50 = _0x255838(_0x31961a(0x15dd)),
                    _0x59be69 = _0x255838(_0x31961a(0x14639)),
                    _0xd8d3d4 = _0x255838(_0x31961a(0x5103)),
                    _0x191008 = _0x255838(_0x31961a(0x5f07));
                class _0xcdd295 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x8e3e82, _0x74a1dd, _0xf8616b, _0x2286c4, _0x361ae9, _0x5e9b5a) {
                        const _0x262c2e = _0x36e632;
                        super(_0x8e3e82, _0x74a1dd, _0xf8616b), this[_0x262c2e(0x288)] = [], this[_0x262c2e(0xcdf)] = _0x5e9b5a, this[_0x262c2e(0x8a2)](_0xd8d3d4[_0x262c2e(0xd2c)][_0x262c2e(0x15db)]);
                        let _0xfc9b6 = 0x0;
                        for (const _0x51de1d in _0x59be69[_0x262c2e(0xd2c)]) {
                            let _0x3bcf35 = _0x59be69[_0x262c2e(0xd2c)][_0x51de1d][0x0];
                            if (null == _0x3bcf35 || _0x3bcf35['hidden'] || !_0x3bcf35[_0x262c2e(0x18d6)] || !_0x3bcf35[_0x262c2e(0xf74)]) continue;
                            let _0x3106b4 = new Phaser[(_0x262c2e(0xbf2))]['Image'](this['scene'], 0x14, 0x19 * (_0xfc9b6 + 0x1), 'UI', 'menu_checkbox_16_bg.png')[_0x262c2e(0xf8e)](0.5)[_0x262c2e(0x8a2)](_0xd8d3d4[_0x262c2e(0xd2c)][_0x262c2e(0x15db)]),
                                _0x32427b = new Phaser[(_0x262c2e(0xbf2))]['Image'](this[_0x262c2e(0x6d2)], 0x14, _0x3106b4['y'], 'UI', 'menu_checkbox_16_checkmark.png')['setOrigin'](0.5)[_0x262c2e(0x8a2)](_0xd8d3d4[_0x262c2e(0xd2c)][_0x262c2e(0x15db)])['setVisible'](!0x1);
                            this[_0x262c2e(0x288)][_0x262c2e(0x1564)](_0x32427b);
                            let _0x5a50b9 = _0x3bcf35[_0x262c2e(0x18d6)] ? _0x3bcf35[_0x262c2e(0x1061)] : _0x191008[_0x262c2e(0xd2c)]['Lang']['getLang']('stageSelectionPanel_?'),
                                _0x466f6c = new Phaser['GameObjects'][(_0x262c2e(0x1ae9))](this[_0x262c2e(0x6d2)], 0x2d, _0x3106b4['y'], _0x5a50b9, {})[_0x262c2e(0xf8e)](0x0, 0.5)['setScale'](_0xd8d3d4[_0x262c2e(0xd2c)][_0x262c2e(0x15db)]);
                            _0x191008['default'][_0x262c2e(0x1f1)][_0x262c2e(0x14a8)](_0x466f6c, !0x1, 0x78), this[_0x262c2e(0x18bd)](_0x3106b4), this['add'](_0x32427b), this[_0x262c2e(0x18bd)](_0x466f6c), _0xfc9b6 += 0x1;
                        }
                        var _0x24fd53 = {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x2286c4,
                            'height': 0x19 * (_0xfc9b6 + 0x1)
                        };
                        this['Background'] = new _0x388a26[(_0x262c2e(0x1a31))](this[_0x262c2e(0x6d2)], {
                            'sourceKey': 'UI',
                            'sourceFrame': 'frame1_c2.png',
                            'sourceLayout': {
                                'width': 0xc,
                                'height': 0xc
                            }
                        }, _0x24fd53), this[_0x262c2e(0x720)](this[_0x262c2e(0x14b7)], 0x0), this['AssignData'](this[_0x262c2e(0xcdf)]);
                    } ['Open']() {
                        const _0x3440b9 = _0x36e632;
                        this['scaleY'] = 0x0, this[_0x3440b9(0xd9b)] = this[_0x3440b9(0x6d2)][_0x3440b9(0x12a1)]['add']({
                            'targets': this,
                            'scaleY': 0x1,
                            'duration': 0x96
                        });
                    } ['OnClick']() {} ['AssignData'](_0x3557f6) {
                        const _0xc1c880 = _0x36e632;
                        var _0x18710d = _0x13cf50[_0xc1c880(0xd2c)][_0x3557f6];
                        if (null == _0x18710d || null == _0x18710d[0x0]) return void this['ticks']['forEach'](_0x55e2ce => {
                            _0x55e2ce['setVisible'](!0x1);
                        });
                        _0x18710d = _0x18710d[0x0];
                        let _0x38c01d = 0x0;
                        for (const _0x31cd6e in _0x59be69['default']) {
                            let _0x447abe = _0x59be69[_0xc1c880(0xd2c)][_0x31cd6e][0x0];
                            null != _0x447abe && !_0x447abe[_0xc1c880(0x187)] && _0x447abe[_0xc1c880(0x18d6)] && _0x447abe['validForCharcaterData'] && (this[_0xc1c880(0x288)][_0x38c01d][_0xc1c880(0x183f)](_0x18710d[_0xc1c880(0x6e0)]['indexOf'](_0x31cd6e) > -0x1), _0x38c01d += 0x1);
                        }
                    }
                }
                _0x53c312['CharLevelPanel'] = _0xcdd295, _0x53c312['default'] = _0xcdd295;
            };
