// Module 0xa85f
// Args: _0x38d677, _0x37926c, _0x3c43ca

export default (_0x38d677, _0x37926c, _0x3c43ca) => {
                'use strict';
                const _0x2b96ed = a0_0x6932;
                var _0x48fbe2 = this && this['__importDefault'] || function(_0x2979cd) {
                    return _0x2979cd && _0x2979cd['__esModule'] ? _0x2979cd : {
                        'default': _0x2979cd
                    };
                };
                Object['defineProperty'](_0x37926c, '__esModule', {
                    'value': !0x0
                }), _0x37926c['CollectionSecretInput'] = void 0x0;
                const _0xf1075b = _0x3c43ca(0x16c14),
                    _0x345ac1 = _0x48fbe2(_0x3c43ca(0x15dd)),
                    _0x4205c4 = _0x48fbe2(_0x3c43ca(0x16800)),
                    _0x301f75 = _0x48fbe2(_0x3c43ca(0x1852a)),
                    _0x473af0 = _0x48fbe2(_0x3c43ca(0xc450)),
                    _0x5e030c = _0x48fbe2(_0x3c43ca(0x5103)),
                    _0x13d7d3 = _0x48fbe2(_0x3c43ca(0xccae)),
                    _0x63cb5b = _0x48fbe2(_0x3c43ca(0x5f07)),
                    _0x4b305b = _0x48fbe2(_0x3c43ca(0x23cb)),
                    _0x1f4cbc = _0x48fbe2(_0x3c43ca(0xdfbc)),
                    _0x44b587 = _0x48fbe2(_0x3c43ca(0xf676)),
                    _0xba7325 = _0x48fbe2(_0x3c43ca(0x1fd7)),
                    _0x5be91e = _0x48fbe2(_0x3c43ca(0x118dd));
                class _0x1ac6ad extends Phaser['GameObjects']['Container'] {
                    constructor(_0x5d712b, _0x42e3a3, _0x44b780, _0x3b0147, _0x510133, _0x4a1c41) {
                        const _0x32a573 = _0x2b96ed;
                        super(_0x5d712b, _0x42e3a3, _0x44b780), this[_0x32a573(0x156c)] = _0x3b0147, this[_0x32a573(0x190d)] = _0x510133, this[_0x32a573(0x1669)] = _0x4a1c41, this['inputBitmapTextScaleOffsetY'] = -0x50, this[_0x32a573(0x81b)] = '', this['pfxEmitter'] = [], this[_0x32a573(0xf6a)] = 0x28, this[_0x32a573(0x30d)] = !0x1, this['inputEnabled'] = !0x0, this[_0x32a573(0x8a2)](_0x5e030c['default'][_0x32a573(0x15db)]), this['inputBackground'] = new Phaser[(_0x32a573(0xbf2))]['Image'](this[_0x32a573(0x6d2)], 0x2f8, 0x15e, 'UI', 'whiteDot.png')['setOrigin'](0.5)[_0x32a573(0x8a2)](0x15e, 0x32), this[_0x32a573(0xe62)][_0x32a573(0xb34)](0x2c3055), this[_0x32a573(0x6d2)][_0x32a573(0x18bd)][_0x32a573(0x1a88)](this[_0x32a573(0xe62)]), this[_0x32a573(0xdce)](), this['inputBitmapTextY'] = this['inputBackground']['y'] - 0x3, this[_0x32a573(0x616)] = new Phaser['GameObjects'][(_0x32a573(0x1660))](this['scene'], this[_0x32a573(0xe62)]['x'], this[_0x32a573(0x14fe)], 'runeFont', this[_0x32a573(0xc57)](this['inputBitmapTextValue']), 0x78, 0x0)[_0x32a573(0xf8e)](0.5, 0.5)['setScrollFactor'](0x0), _0x63cb5b[_0x32a573(0xd2c)]['Lang']['scaleToMaxFast'](this['inputBitmapText'], !0x0, 0x14a), this['inputBitmapText']['y'] = this[_0x32a573(0x14fe)] + this[_0x32a573(0x147d)] * this[_0x32a573(0x616)]['scale'], this[_0x32a573(0x6d2)]['add'][_0x32a573(0x1a88)](this['inputBitmapText']), this[_0x32a573(0x6a4)] = new _0xf1075b[(_0x32a573(0x1a31))](this[_0x32a573(0x6d2)], _0x13d7d3[_0x32a573(0xd2c)]['SelectionHighlight'], {
                            'x': this[_0x32a573(0xe62)]['x'],
                            'y': this[_0x32a573(0xe62)]['y'],
                            'width': 0x168,
                            'height': 0x3c
                        }), this[_0x32a573(0x6a4)]['setOrigin'](0.5)['setScale'](_0x5e030c[_0x32a573(0xd2c)]['PixelScale']), this[_0x32a573(0x6a4)][_0x32a573(0x183f)](!0x1), this[_0x32a573(0x18bd)](this['inputHighlight']), this[_0x32a573(0x6d2)][_0x32a573(0x1331)]['keyboard']['on']('keydown', this[_0x32a573(0xb9a)], this), this[_0x32a573(0x16f5)] = new _0x4b305b['default'](this[_0x32a573(0x6d2)], -0x64, -0x64, 0x0, 0x0, {
                            'placeholder': '',
                            'align': 'center',
                            'fontFamily': 'Arial, Helvetica, sans-serif',
                            'color': '#ffffff',
                            'backgroundColor': 'black'
                        }), this['tempInput'][_0x32a573(0x35a)] = !0x1, this[_0x32a573(0xcd2)] = new _0x44b587[(_0x32a573(0xd2c))](this['scene'], 0x0, 0x0, this), this['scene'][_0x32a573(0x18bd)][_0x32a573(0x1a88)](this[_0x32a573(0xcd2)]), this[_0x32a573(0x2d9)]();
                    } ['keyPress'](_0x41658a) {
                        const _0x1a4e2c = _0x2b96ed;
                        (this[_0x1a4e2c(0x30d)] || this[_0x1a4e2c(0xcd2)]['keyboardEnabled']) && this['inputEnabled'] && ('Delete' != _0x41658a[_0x1a4e2c(0x1381)] && 'Backspace' != _0x41658a[_0x1a4e2c(0x1381)] || this[_0x1a4e2c(0x89a)](), 0x1 == _0x41658a[_0x1a4e2c(0x1381)]['length'] && this['addToInputText'](this[_0x1a4e2c(0x99e)]()), _0x63cb5b['default']['Sound']['PlaySound'](_0xba7325[_0x1a4e2c(0xd2c)]['LittleHit'], {
                            'volume': 0.5,
                            'detune': 0x64 * (Math[_0x1a4e2c(0x9ad)]() - 0.5)
                        }, 0x96, 0x3));
                    } ['addToInputText'](_0x4ee6df) {
                        const _0x38a054 = _0x2b96ed;
                        this['inputBitmapTextValue'][_0x38a054(0xed9)] > this[_0x38a054(0xf6a)] && (this['inputBitmapTextValue'] = ''), this[_0x38a054(0x81b)] += _0x4ee6df, this[_0x38a054(0x616)]['text'] = this[_0x38a054(0xc57)](this[_0x38a054(0x81b)]), _0x63cb5b['default'][_0x38a054(0x1f1)][_0x38a054(0x14a8)](this['inputBitmapText'], !0x0, 0x14a), this['inputBitmapText']['y'] = this[_0x38a054(0x14fe)] + this[_0x38a054(0x147d)] * this[_0x38a054(0x616)][_0x38a054(0x7cb)];
                        let _0x2436d9 = this['inputBitmapTextValue']['length'] - 0x1,
                            _0x1758ac = this['inputBitmapText']['x'] - 0.5 * this[_0x38a054(0x616)]['width'] + this['inputBitmapText']['_bounds']['characters'][0x2 * _0x2436d9]['x'] * this[_0x38a054(0x616)][_0x38a054(0x7cb)] + 0xa;
                        this['pfxEmitter'][_0x2436d9]['explode'](0xa, _0x1758ac, 0x172), this[_0x38a054(0x1669)][_0x38a054(0xc5c)](_0x1758ac, this['inputBitmapText']['y']), this['scene']['cameras'][_0x38a054(0x4cd)]['shake'](0x96, 0.005);
                    } ['removeFromInputText']() {
                        const _0x19b7e0 = _0x2b96ed;
                        this['inputBitmapTextValue']['length'] > 0x0 && (this[_0x19b7e0(0x81b)] = this['inputBitmapTextValue']['slice'](0x0, -0x1)), this[_0x19b7e0(0x616)][_0x19b7e0(0x758)] = this[_0x19b7e0(0xc57)](this['inputBitmapTextValue']), _0x63cb5b[_0x19b7e0(0xd2c)]['Lang']['scaleToMaxFast'](this['inputBitmapText'], !0x0, 0x14a), this['inputBitmapText']['y'] = this[_0x19b7e0(0x14fe)] + this['inputBitmapTextScaleOffsetY'] * this['inputBitmapText'][_0x19b7e0(0x7cb)], this['scene']['cameras'][_0x19b7e0(0x4cd)][_0x19b7e0(0x185e)](0x96, 0.005);
                    } ['clearInputText']() {
                        const _0x265409 = _0x2b96ed;
                        this[_0x265409(0x81b)] = '', this[_0x265409(0x616)][_0x265409(0x758)] = this[_0x265409(0xc57)](this['inputBitmapTextValue']), _0x63cb5b[_0x265409(0xd2c)][_0x265409(0x1f1)][_0x265409(0x14a8)](this[_0x265409(0x616)], !0x0, 0x14a), this[_0x265409(0x616)]['y'] = this[_0x265409(0x14fe)] + this[_0x265409(0x147d)] * this[_0x265409(0x616)]['scale'];
                    } ['formatInputText'](_0x22f6e5) {
                        const _0x1d79ab = _0x2b96ed;
                        if (_0x22f6e5[_0x1d79ab(0xed9)] < 0x8) {
                            let _0xc925d3 = 0x8 - _0x22f6e5['length'];
                            for (let _0x546a0a = 0x0; _0x546a0a < _0xc925d3; _0x546a0a++) _0x22f6e5 += '-';
                        }
                        let _0x28a50d = '';
                        for (let _0x44655c = 0x0; _0x44655c < _0x22f6e5[_0x1d79ab(0xed9)]; _0x44655c++) _0x28a50d += _0x44655c < _0x22f6e5[_0x1d79ab(0xed9)] - 0x1 ? _0x22f6e5[_0x44655c] + ' ' : _0x22f6e5[_0x44655c], 0x0 != _0x44655c && _0x44655c % Math[_0x1d79ab(0x893)](this['MAX_CHARACTER'] / 0x2) == 0x0 && (_0x28a50d += '\n');
                        return _0x28a50d;
                    } ['getRandomChar']() {
                        let _0x494111 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        return _0x494111['charAt'](Math['floor'](Math['random']() * _0x494111['length']));
                    } ['HandleCheats']() {
                        const _0x34e41b = _0x2b96ed;
                        let _0x125390 = {};
                        _0x125390['a'] = Phaser['Input']['Keyboard']['KeyCodes']['A'], _0x125390['b'] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)]['KeyCodes']['B'], _0x125390['c'] = Phaser['Input'][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['C'], _0x125390['d'] = Phaser['Input'][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['D'], _0x125390['e'] = Phaser[_0x34e41b(0xd70)]['Keyboard'][_0x34e41b(0x10f8)]['E'], _0x125390['f'] = Phaser[_0x34e41b(0xd70)]['Keyboard'][_0x34e41b(0x10f8)]['F'], _0x125390['g'] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['G'], _0x125390['h'] = Phaser[_0x34e41b(0xd70)]['Keyboard']['KeyCodes']['H'], _0x125390['i'] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['I'], _0x125390['j'] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)]['KeyCodes']['J'], _0x125390['k'] = Phaser['Input'][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['K'], _0x125390['l'] = Phaser[_0x34e41b(0xd70)]['Keyboard'][_0x34e41b(0x10f8)]['L'], _0x125390['m'] = Phaser['Input'][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['M'], _0x125390['n'] = Phaser['Input']['Keyboard'][_0x34e41b(0x10f8)]['N'], _0x125390['o'] = Phaser['Input'][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['O'], _0x125390['p'] = Phaser[_0x34e41b(0xd70)]['Keyboard']['KeyCodes']['P'], _0x125390['q'] = Phaser[_0x34e41b(0xd70)]['Keyboard'][_0x34e41b(0x10f8)]['Q'], _0x125390['r'] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)]['KeyCodes']['R'], _0x125390['s'] = Phaser['Input'][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['S'], _0x125390['t'] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['T'], _0x125390['u'] = Phaser[_0x34e41b(0xd70)]['Keyboard'][_0x34e41b(0x10f8)]['U'], _0x125390['v'] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['V'], _0x125390['w'] = Phaser['Input']['Keyboard'][_0x34e41b(0x10f8)]['W'], _0x125390['x'] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['X'], _0x125390['y'] = Phaser['Input'][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['Y'], _0x125390['z'] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['Z'], _0x125390[0x0] = Phaser[_0x34e41b(0xd70)]['Keyboard'][_0x34e41b(0x10f8)][_0x34e41b(0xc53)], _0x125390[0x1] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)][_0x34e41b(0x10f8)][_0x34e41b(0x1b14)], _0x125390[0x2] = Phaser['Input']['Keyboard'][_0x34e41b(0x10f8)][_0x34e41b(0x67a)], _0x125390[0x3] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)]['KeyCodes'][_0x34e41b(0x15b7)], _0x125390[0x4] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)][_0x34e41b(0x10f8)]['FOUR'], _0x125390[0x5] = Phaser[_0x34e41b(0xd70)]['Keyboard']['KeyCodes']['FIVE'], _0x125390[0x6] = Phaser['Input'][_0x34e41b(0xa19)][_0x34e41b(0x10f8)][_0x34e41b(0x18fd)], _0x125390[0x7] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)][_0x34e41b(0x10f8)][_0x34e41b(0x3bb)], _0x125390[0x8] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)][_0x34e41b(0x10f8)][_0x34e41b(0x149)], _0x125390[0x9] = Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)][_0x34e41b(0x10f8)][_0x34e41b(0xcb5)], _0x125390['-'] = Phaser[_0x34e41b(0xd70)]['Keyboard'][_0x34e41b(0x10f8)]['MINUS'];
                        for (const _0x27ce5c in _0x4205c4[_0x34e41b(0xd2c)]) {
                            let _0x4296dd = _0x4205c4[_0x34e41b(0xd2c)][_0x27ce5c];
                            if (_0x4296dd && _0x4296dd[_0x34e41b(0x173b)]) {
                                let _0x5c6e75 = _0x4296dd['spell'][_0x34e41b(0xb85)]()['replace'](/\s/g, ''),
                                    _0x158652 = [];
                                for (let _0x3fd20d = 0x0; _0x3fd20d < _0x5c6e75[_0x34e41b(0xed9)]; _0x3fd20d++) _0x158652['push'](_0x125390[_0x5c6e75['charAt'](_0x3fd20d)]);
                                let _0x217cdf = new _0x5be91e['default'](this['scene']['input'][_0x34e41b(0x1340)], _0x158652, {
                                    'resetOnMatch': !0x0,
                                    'maxKeyDelay': 0x7530
                                });
                                _0x217cdf['manager']['off'](Phaser['Input']['Keyboard']['Events']['ANY_KEY_DOWN'], _0x217cdf['onKeyDown']), _0x217cdf[_0x34e41b(0x9c8)]['on'](Phaser['Input'][_0x34e41b(0xa19)]['Events'][_0x34e41b(0x59b)], _0x217cdf[_0x34e41b(0x1144)][_0x34e41b(0xf7e)](_0x217cdf)), _0x217cdf[_0x34e41b(0x5a3)] = _0x27ce5c;
                            }
                        }
                        this[_0x34e41b(0x6d2)][_0x34e41b(0x1331)][_0x34e41b(0x1340)]['on'](Phaser[_0x34e41b(0xd70)][_0x34e41b(0xa19)]['Events']['COMBO_MATCH'], (_0x4f625f, _0x54287d, _0x181102, _0x1d5e7f, _0xa70ee4) => {
                            const _0x57c24b = _0x34e41b;
                            if ((this[_0x57c24b(0x30d)] || this[_0x57c24b(0xcd2)]['keyboardEnabled']) && this['inputEnabled'] && _0x4f625f[_0x57c24b(0x5a3)]) {
                                if (_0x4f625f['type'] == _0x301f75[_0x57c24b(0xd2c)][_0x57c24b(0x262)]) {
                                    var _0x2cd374 = _0x345ac1[_0x57c24b(0xd2c)][_0x1f4cbc['default']['PANINI']];
                                    if (!_0x2cd374[0x0] || _0x2cd374[0x0][_0x57c24b(0x187)]) return !0x1;
                                }
                                if (_0x4f625f[_0x57c24b(0x5a3)] == _0x301f75[_0x57c24b(0xd2c)]['Tramezzini']) {
                                    var _0x40a0f1 = _0x345ac1[_0x57c24b(0xd2c)][_0x1f4cbc[_0x57c24b(0xd2c)][_0x57c24b(0x302)]];
                                    if (!_0x40a0f1[0x0] || _0x40a0f1[0x0][_0x57c24b(0x187)]) return !0x1;
                                }(_0x473af0[_0x57c24b(0xd2c)][_0x57c24b(0x120c)](_0x4f625f['type']) || _0x4205c4[_0x57c24b(0xd2c)][_0x4f625f['type']]['isModifier']) && (this[_0x57c24b(0x1547)](), this[_0x57c24b(0x156c)](_0x4f625f['type']));
                            }
                        });
                    } ['onInputFocued']() {
                        const _0x29532d = _0x2b96ed;
                        this['inputFocused'] = !0x0;
                        let _0x4c5a27 = _0x63cb5b['default'][_0x29532d(0x1043)]['SceneManager'][_0x29532d(0x7ec)];
                        _0x4c5a27['UI_grid']['SelectAt'](0x2, 0x1), _0x4c5a27['UI_selected'] = this['inputBackground'], this[_0x29532d(0x6a4)]['setVisible'](!0x0), _0x4c5a27[_0x29532d(0x1475)](!0x1), _0x4c5a27[_0x29532d(0xdef)] = !0x0;
                    } ['onInputBlured']() {
                        const _0x11c5c9 = _0x2b96ed;
                        this['inputFocused'] = !0x1, this[_0x11c5c9(0x6a4)][_0x11c5c9(0x183f)](!0x1);
                    } ['createParticles']() {
                        const _0x1a2c90 = _0x2b96ed;
                        for (let _0x2b7786 = 0x0; _0x2b7786 < this['MAX_CHARACTER'] + 0x1; _0x2b7786++) {
                            let _0x169805 = this[_0x1a2c90(0x6d2)]['add'][_0x1a2c90(0x1791)]('vfx');
                            this[_0x1a2c90(0xb8c)][_0x1a2c90(0x1564)](_0x169805[_0x1a2c90(0x14c0)]({
                                'frame': ['_runes_02.png', '_runes_03.png', '_runes_04.png', '_runes_05.png', '_runes_06.png'],
                                'x': 0x0,
                                'y': 0x0,
                                'lifespan': 0x1f4,
                                'rotate': {
                                    'min': 0x0,
                                    'max': 0x168
                                },
                                'angle': {
                                    'min': 0xf0,
                                    'max': 0x136
                                },
                                'speed': {
                                    'min': 0x32,
                                    'max': 0x96
                                },
                                'quantity': 0x1,
                                'scale': {
                                    'start': 0.5,
                                    'end': 0x1
                                },
                                'alpha': {
                                    'start': 0x1,
                                    'end': 0x0
                                },
                                'frequency': -0x1,
                                'on': !0x1
                            }));
                        }
                    } ['destroy']() {
                        const _0x42a6ad = _0x2b96ed;
                        for (let _0x2aeca4 = 0x0; _0x2aeca4 < this[_0x42a6ad(0xb8c)]['length']; _0x2aeca4++) this[_0x42a6ad(0xb8c)][_0x2aeca4] && this[_0x42a6ad(0xb8c)][_0x2aeca4]['stop']();
                        _0x63cb5b[_0x42a6ad(0xd2c)][_0x42a6ad(0x1043)][_0x42a6ad(0x69e)]['UI_overlayScene'][_0x42a6ad(0xdef)] = !0x1;
                    }
                }
                _0x37926c['CollectionSecretInput'] = _0x1ac6ad, _0x37926c['default'] = _0x1ac6ad;
            };
