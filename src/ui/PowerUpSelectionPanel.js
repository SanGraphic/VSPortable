// Module 0xb026
// Args: _0x51c3d7, _0x536965, _0x5cc78a

export default (_0x51c3d7, _0x536965, _0x5cc78a) => {
                'use strict';
                const _0x405b0d = a0_0x6932;
                var _0x3c4d57 = this && this['__importDefault'] || function(_0x166626) {
                    const _0xfcd300 = _0x405b0d;
                    return _0x166626 && _0x166626[_0xfcd300(0x16f1)] ? _0x166626 : {
                        'default': _0x166626
                    };
                };
                Object['defineProperty'](_0x536965, '__esModule', {
                    'value': !0x0
                }), _0x536965['PowerUpSelectionPanel'] = void 0x0;
                const _0x55fbe1 = _0x5cc78a(0x16c14),
                    _0x406fd6 = _0x3c4d57(_0x5cc78a(0xb6a1)),
                    _0xabff2c = _0x3c4d57(_0x5cc78a(0x16729)),
                    _0x1a2552 = _0x3c4d57(_0x5cc78a(0x5103)),
                    _0xd84758 = _0x3c4d57(_0x5cc78a(0x5f07));
                class _0x567c23 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x2c07fb, _0x2067c4, _0x183682, _0x28eddd, _0x2030d0, _0x4df3cc) {
                        const _0x240a7a = _0x405b0d;
                        super(_0x2c07fb, _0x2067c4, _0x183682), this['power'] = _0x4df3cc, this['setScale'](_0x1a2552[_0x240a7a(0xd2c)][_0x240a7a(0x15db)]);
                        var _0x17c1fd = {
                                'x': 0x0,
                                'y': 0x0,
                                'width': _0x28eddd,
                                'height': _0x2030d0
                            },
                            _0x17c1c2 = 0.5 * _0x28eddd;
                        this[_0x240a7a(0x14b7)] = new _0x55fbe1[(_0x240a7a(0x1a31))](this['scene'], {
                            'sourceKey': 'UI',
                            'sourceFrame': 'frame1_c2.png',
                            'sourceLayout': {
                                'width': 0xc,
                                'height': 0xc
                            }
                        }, _0x17c1fd), this['myIconBG'] = new Phaser['GameObjects']['Image'](this['scene'], _0x17c1c2, _0x17c1c2, 'UI', 'frameD.png')[_0x240a7a(0xf8e)](0.5)['setScale'](0x2 * _0x1a2552['default'][_0x240a7a(0x15db)]), this['myWeaponIcon'] = new Phaser[(_0x240a7a(0xbf2))][(_0x240a7a(0x1951))](this[_0x240a7a(0x6d2)], _0x17c1c2, _0x17c1c2, 'items', '')['setOrigin'](0.5)[_0x240a7a(0x8a2)](0x2 * _0x1a2552[_0x240a7a(0xd2c)][_0x240a7a(0x15db)]), this[_0x240a7a(0xc89)] = new Phaser[(_0x240a7a(0xbf2))][(_0x240a7a(0x1ae9))](this[_0x240a7a(0x6d2)], _0x17c1c2, 0x6, _0xd84758[_0x240a7a(0xd2c)]['Lang']['getLang']('powerupSelection_name'), {})[_0x240a7a(0xf8e)](0.5, 0x0)[_0x240a7a(0x8a2)](_0x1a2552[_0x240a7a(0xd2c)]['PixelScale']), _0x406fd6[_0x240a7a(0xd2c)][this['power']];
                        var _0x445f72 = _0x406fd6[_0x240a7a(0xd2c)][this['power']][0x0];
                        this[_0x240a7a(0x13c3)] = new Phaser['GameObjects'][(_0x240a7a(0x11dc))](this['scene']), this['myLevelsChecks'] = new Phaser['GameObjects'][(_0x240a7a(0x11dc))](this['scene']);
                        let _0x6080e1 = _0x445f72[_0x240a7a(0x8cd)] > 0x5;
                        if (_0x6080e1)
                            for (let _0x138744 = 0x0; _0x138744 < _0x445f72[_0x240a7a(0x8cd)]; _0x138744++) {
                                let _0x180753 = 0x5,
                                    _0x53eeb0 = 0x8 * _0x138744 % (0x8 * _0x180753),
                                    _0x3b0ce0 = _0x17c1c2 + 0x26 + 0x8 * Math[_0x240a7a(0xe07)](_0x138744 / _0x180753);
                                this[_0x240a7a(0x13c3)][_0x240a7a(0x18bd)](new Phaser[(_0x240a7a(0xbf2))][(_0x240a7a(0x1951))](this['scene'], _0x53eeb0, _0x3b0ce0, 'UI', 'menu_checkbox_16_bg.png')[_0x240a7a(0xf8e)](0.5)['setScale'](0.5)), this[_0x240a7a(0xf7d)][_0x240a7a(0x18bd)](new Phaser['GameObjects']['Image'](this[_0x240a7a(0x6d2)], _0x53eeb0, _0x3b0ce0, 'UI', 'menu_checkbox_16_checkmark.png')['setOrigin'](0.5)['setScale'](0.5)['setVisible'](!0x0));
                            } else {
                                for (let _0x51931c = 0x0; _0x51931c < _0x445f72[_0x240a7a(0x8cd)]; _0x51931c++) this['myLevelsBG'][_0x240a7a(0x18bd)](new Phaser['GameObjects'][(_0x240a7a(0x1951))](this['scene'], 0x10 * _0x51931c, _0x17c1c2 + 0x26, 'UI', 'menu_checkbox_16_bg.png')['setOrigin'](0.5)[_0x240a7a(0x8a2)](_0x1a2552['default']['PixelScale'])), this[_0x240a7a(0xf7d)]['add'](new Phaser[(_0x240a7a(0xbf2))]['Image'](this['scene'], 0x10 * _0x51931c, _0x17c1c2 + 0x26, 'UI', 'menu_checkbox_16_checkmark.png')[_0x240a7a(0xf8e)](0.5)['setScale'](_0x1a2552[_0x240a7a(0xd2c)]['PixelScale'])[_0x240a7a(0x183f)](!0x0));
                            }
                        var _0x4de91b = _0x17c1c2 - (_0x6080e1 ? 1.75 : 0x8) * (_0x445f72[_0x240a7a(0x8cd)] - 0x1);
                        this[_0x240a7a(0x13c3)]['x'] = _0x4de91b, this['myLevelsChecks']['x'] = _0x4de91b, _0x6080e1 && (this[_0x240a7a(0x13c3)]['y'] -= 0x2, this[_0x240a7a(0xf7d)]['y'] -= 0x2), this[_0x240a7a(0x6e4)](this['power']), this[_0x240a7a(0x18bd)]([this[_0x240a7a(0x14b7)], this['myIconBG'], this[_0x240a7a(0x74e)], this['myName']]), this['add'](this['myLevelsBG']), this['add'](this['myLevelsChecks']), this['_events'] = {}, this[_0x240a7a(0x18ef)][_0x240a7a(0x18f7)] = {}, this[_0x240a7a(0x18ef)][_0x240a7a(0x18f7)]['fn'] = () => {
                            const _0x1cd12e = _0x240a7a;
                            this[_0x1cd12e(0x18fb)]();
                        };
                    } ['OnClick']() {} ['AssignData'](_0x4c90a5) {
                        const _0x58c0c7 = _0x405b0d;
                        var _0x2b7fc5;
                        this['power'] = _0x4c90a5, _0x406fd6[_0x58c0c7(0xd2c)][this[_0x58c0c7(0x31f)]] ? _0x2b7fc5 = _0x406fd6['default'][this['power']][0x0] : (this['power'] = _0xabff2c['default']['MIGHT'], _0x2b7fc5 = _0x406fd6[_0x58c0c7(0xd2c)][_0xabff2c['default'][_0x58c0c7(0x128b)]][0x0]);
                        var _0x2d3ae3 = _0x2b7fc5['level'];
                        this[_0x58c0c7(0xc89)][_0x58c0c7(0x758)] = _0x2b7fc5[_0x58c0c7(0x226)], this[_0x58c0c7(0xc89)][_0x58c0c7(0xb34)](_0x2d3ae3 > 0x0 ? 0xffffff : 0x444444), _0xd84758['default']['Lang'][_0x58c0c7(0x14a8)](this[_0x58c0c7(0xc89)], !0x1, 0x64), this[_0x58c0c7(0x74e)][_0x58c0c7(0x994)](_0x2b7fc5[_0x58c0c7(0x174d)], _0x2b7fc5[_0x58c0c7(0x8e3)]), this[_0x58c0c7(0x1a7c)][_0x58c0c7(0x381)](_0x2b7fc5[_0x58c0c7(0xda3)] ? 'frameE.png' : 'frameD.png'), _0x406fd6['default'][this[_0x58c0c7(0x31f)]], _0x2d3ae3 < _0x2b7fc5['unlockedRank'] ? this[_0x58c0c7(0x14b7)][_0x58c0c7(0xb34)](0xffffff) : _0x2b7fc5[_0x58c0c7(0xd40)] ? this['Background']['setTint'](0xcccc88) : this[_0x58c0c7(0x14b7)][_0x58c0c7(0xb34)](0x888888);
                        for (let _0x4aa880 = 0x0; _0x4aa880 < _0x2b7fc5[_0x58c0c7(0x8cd)]; _0x4aa880++) this['myLevelsChecks']['getAt'](_0x4aa880)['setVisible'](_0x4aa880 < _0x2d3ae3);
                    }
                }
                _0x536965['PowerUpSelectionPanel'] = _0x567c23, _0x536965['default'] = _0x567c23;
            };
