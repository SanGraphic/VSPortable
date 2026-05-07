// Module 0x16cf2
// Args: _0x40b938, _0x2191fd, _0x25e366

export default (_0x40b938, _0x2191fd, _0x25e366) => {
                'use strict';
                const _0x6cbcee = a0_0x6932;
                var _0x3b219a = this && this['__importDefault'] || function(_0x5eefda) {
                    const _0x4cf5f7 = a0_0x6932;
                    return _0x5eefda && _0x5eefda['__esModule'] ? _0x5eefda : {
                        'default': _0x5eefda
                    };
                };
                Object['defineProperty'](_0x2191fd, '__esModule', {
                    'value': !0x0
                }), _0x2191fd['CharDetailsPanel'] = void 0x0;
                const _0x21bef6 = _0x25e366(0x16c14),
                    _0x3bcb08 = _0x3b219a(_0x25e366(0x15dd)),
                    _0x533772 = _0x3b219a(_0x25e366(0xdfbc)),
                    _0x5aaf12 = _0x3b219a(_0x25e366(0xc42e)),
                    _0x291ee3 = _0x3b219a(_0x25e366(0x5103)),
                    _0x591469 = _0x3b219a(_0x25e366(0xccae)),
                    _0x141f2b = _0x3b219a(_0x25e366(0x5f07));
                class _0x405580 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x56913c, _0x1bacbd, _0x4477df, _0x151b3a, _0x2fea9b, _0x3b9d47) {
                        const _0x3bb08e = _0x6cbcee;
                        super(_0x56913c, _0x1bacbd, _0x4477df), this[_0x3bb08e(0xcdf)] = _0x3b9d47, this[_0x3bb08e(0x8a2)](_0x291ee3['default'][_0x3bb08e(0x15db)]), this[_0x3bb08e(0x884)] = _0x141f2b[_0x3bb08e(0xd2c)]['Core'][_0x3bb08e(0x14d8)]['CollectedItems']['indexOf'](_0x5aaf12[_0x3bb08e(0xd2c)][_0x3bb08e(0x16e3)]) > -0x1, this[_0x3bb08e(0x14b7)] = new _0x21bef6[(_0x3bb08e(0x1a31))](this[_0x3bb08e(0x6d2)], _0x591469['default']['PanelBackground'], {
                            'x': 0x0,
                            'y': 0x0,
                            'width': 0xc8,
                            'height': 0x68
                        });
                        let _0x40808b = 56.25,
                            _0x2ba7b7 = 143.75;
                        this[_0x3bb08e(0x1add)] = new Phaser[(_0x3bb08e(0xbf2))][(_0x3bb08e(0x1ae9))](this[_0x3bb08e(0x6d2)], _0x40808b, 0x18, 'MAX\nWEAPONS', {
                            'align': 'center'
                        })[_0x3bb08e(0xf8e)](0.5, 0.5)['setScale'](0x1), this[_0x3bb08e(0x510)] = new Phaser[(_0x3bb08e(0xbf2))]['Image'](this[_0x3bb08e(0x6d2)], _0x40808b, 0x44, 'UI', 'menu_checkbox_24_bg.png')['setOrigin'](0.5, 0.5)[_0x3bb08e(0x8a2)](0x2), this[_0x3bb08e(0xa3d)] = new Phaser['GameObjects'][(_0x3bb08e(0x1ae9))](this[_0x3bb08e(0x6d2)], _0x40808b, 0x44, '6', {
                            'align': 'center'
                        })[_0x3bb08e(0xf8e)](0.5, 0.5)['setScale'](0x2), this['EGGS_text'] = new Phaser[(_0x3bb08e(0xbf2))][(_0x3bb08e(0x1ae9))](this[_0x3bb08e(0x6d2)], _0x2ba7b7, 0x18, 'EGGS', {
                            'align': 'center'
                        })[_0x3bb08e(0xf8e)](0.5, 0.5)[_0x3bb08e(0x8a2)](0x1), this[_0x3bb08e(0x18f1)] = new Phaser[(_0x3bb08e(0xbf2))][(_0x3bb08e(0x1951))](this['scene'], _0x2ba7b7, 0x44, 'UI', 'menu_checkbox_24_bg.png')[_0x3bb08e(0xf8e)](0.5, 0.5)[_0x3bb08e(0x8a2)](0x2), this[_0x3bb08e(0xd3a)] = new Phaser['GameObjects'][(_0x3bb08e(0x1951))](this['scene'], _0x2ba7b7, 0x44, 'UI', 'yes16.png')['setOrigin'](0.5, 0.5)['setScale'](0x2), this[_0x3bb08e(0x6e4)](this['char']), this[_0x3bb08e(0x18bd)]([this[_0x3bb08e(0x14b7)], this[_0x3bb08e(0x3ea)], this['EGGS_box'], this['EGGS_toggle'], this[_0x3bb08e(0x510)], this[_0x3bb08e(0x1add)], this[_0x3bb08e(0xa3d)]]);
                    } ['Open']() {
                        const _0x493b71 = _0x6cbcee;
                        this['scaleY'] = 0x0, this['OnEnterTween'] = this[_0x493b71(0x6d2)][_0x493b71(0x12a1)]['add']({
                            'targets': this,
                            'scaleY': 0x1,
                            'duration': 0x96
                        });
                    } ['OnClick']() {} ['AssignData'](_0x39af7e) {
                        const _0x5b8cd8 = _0x6cbcee;
                        this['char'] = _0x39af7e, _0x3bcb08[_0x5b8cd8(0xd2c)][this['char']] ? _0x3bcb08[_0x5b8cd8(0xd2c)][this[_0x5b8cd8(0xcdf)]][0x0] : _0x3bcb08['default'][_0x533772[_0x5b8cd8(0xd2c)][_0x5b8cd8(0x13d8)]][0x0], _0x141f2b[_0x5b8cd8(0xd2c)][_0x5b8cd8(0x1043)][_0x5b8cd8(0x14d8)]['EggData'][this['char']] && _0x141f2b[_0x5b8cd8(0xd2c)]['Core']['PlayerOptions'][_0x5b8cd8(0x3fd)][this[_0x5b8cd8(0xcdf)]];
                        let _0x51fdd5 = _0x141f2b[_0x5b8cd8(0xd2c)][_0x5b8cd8(0x1043)]['PlayerOptions']['CollectedItems']['indexOf'](_0x5aaf12['default']['RELIC_GOLDENEGG']) > -0x1,
                            _0x4dcf2f = _0x141f2b[_0x5b8cd8(0xd2c)][_0x5b8cd8(0x1043)][_0x5b8cd8(0x14d8)]['CollectedItems'][_0x5b8cd8(0x1303)](_0x5aaf12[_0x5b8cd8(0xd2c)]['RELIC_NOSEGLASSES']) > -0x1;
                        this['Background'][_0x5b8cd8(0xb34)](0xffffff), this[_0x5b8cd8(0x18f1)]['setVisible'](_0x51fdd5), this['EGGS_text']['setVisible'](_0x51fdd5), this[_0x5b8cd8(0xd3a)][_0x5b8cd8(0x183f)](_0x51fdd5 && _0x141f2b[_0x5b8cd8(0xd2c)]['Core'][_0x5b8cd8(0x14d8)]['SelectedGoldenEggs']), this[_0x5b8cd8(0x510)][_0x5b8cd8(0x183f)](_0x4dcf2f), this[_0x5b8cd8(0x1add)]['setVisible'](_0x4dcf2f), this[_0x5b8cd8(0xa3d)]['setVisible'](_0x4dcf2f), this['UpdateWeaponTextDisplay']();
                    } ['UpdateWeaponTextDisplay']() {
                        const _0x1a4df8 = _0x6cbcee;
                        let _0x7d0f78 = _0x141f2b[_0x1a4df8(0xd2c)][_0x1a4df8(0x1043)][_0x1a4df8(0x14d8)]['CollectedItems'][_0x1a4df8(0x1303)](_0x5aaf12['default'][_0x1a4df8(0x16e3)]) > -0x1;
                        this['EGGS_toggle']['setVisible'](_0x7d0f78 && _0x141f2b[_0x1a4df8(0xd2c)][_0x1a4df8(0x1043)]['PlayerOptions']['SelectedGoldenEggs']), this[_0x1a4df8(0xa3d)]['text'] = _0x141f2b[_0x1a4df8(0xd2c)]['Core']['PlayerOptions']['SelectedMaxWeapons']['toString']();
                    }
                }
                _0x2191fd['CharDetailsPanel'] = _0x405580, _0x2191fd['default'] = _0x405580;
            };
