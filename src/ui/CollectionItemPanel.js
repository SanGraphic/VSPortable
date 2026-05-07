// Module 0x852d
// Args: _0x55de11, _0x37d710, _0x118b23

export default (_0x55de11, _0x37d710, _0x118b23) => {
                'use strict';
                const _0x1228e6 = a0_0x6932;
                var _0x141170 = this && this['__importDefault'] || function(_0x176ec4) {
                    const _0x587c22 = _0x1228e6;
                    return _0x176ec4 && _0x176ec4[_0x587c22(0x16f1)] ? _0x176ec4 : {
                        'default': _0x176ec4
                    };
                };
                Object['defineProperty'](_0x37d710, '__esModule', {
                    'value': !0x0
                }), _0x37d710['CollectionItemPanel'] = void 0x0;
                const _0x484887 = _0x141170(_0x118b23(0xc42e)),
                    _0x683c7b = _0x141170(_0x118b23(0x4d17)),
                    _0x4e0fdf = _0x141170(_0x118b23(0x5103));
                class _0x359e5a extends Phaser['GameObjects']['Container'] {
                    constructor(_0x547b79, _0x34bd14, _0x31d7ca, _0x3297b2) {
                        const _0x4e7f5e = _0x1228e6;
                        super(_0x547b79, _0x34bd14, _0x31d7ca), this['power'] = _0x484887[_0x4e7f5e(0xd2c)]['COIN'], this[_0x4e7f5e(0x27d)] = 'Item', this['power'] = _0x3297b2, this[_0x4e7f5e(0x8a2)](_0x4e0fdf[_0x4e7f5e(0xd2c)]['PixelScale']), this[_0x4e7f5e(0x1a7c)] = new Phaser[(_0x4e7f5e(0xbf2))]['Image'](this[_0x4e7f5e(0x6d2)], 0x20, 0x20, 'UI', 'frameC.png')[_0x4e7f5e(0xf8e)](0.5)['setScale'](0x2 * _0x4e0fdf['default'][_0x4e7f5e(0x15db)]), this['myWeaponIcon'] = new Phaser['GameObjects'][(_0x4e7f5e(0x1951))](this['scene'], 0x20, 0x20, 'items', '')[_0x4e7f5e(0xf8e)](0.5)['setScale'](0x2 * _0x4e0fdf[_0x4e7f5e(0xd2c)][_0x4e7f5e(0x15db)]), this[_0x4e7f5e(0x59f)] = new Phaser['GameObjects'][(_0x4e7f5e(0x1951))](this['scene'], 0x20, 0x20, 'UI', 'no16.png')[_0x4e7f5e(0xdab)](0.65)['setOrigin'](0.5)[_0x4e7f5e(0x8a2)](0x2 * _0x4e0fdf[_0x4e7f5e(0xd2c)][_0x4e7f5e(0x15db)])['setVisible'](!0x1), this[_0x4e7f5e(0x18bd)](this[_0x4e7f5e(0x1a7c)]), this[_0x4e7f5e(0x18bd)](this['myWeaponIcon']), this[_0x4e7f5e(0x18bd)](this[_0x4e7f5e(0x59f)]), this[_0x4e7f5e(0x6e4)](this[_0x4e7f5e(0x31f)]), this['_events'] = {}, this['_events']['pointerdown'] = {}, this[_0x4e7f5e(0x18ef)][_0x4e7f5e(0x18f7)]['fn'] = () => {
                            const _0x120553 = _0x4e7f5e;
                            this[_0x120553(0x18fb)]();
                        };
                    } ['AssignData'](_0x5ec321) {
                        const _0x2e963d = _0x1228e6;
                        this['power'] = _0x5ec321;
                        var _0xb5e18 = _0x683c7b['default'][this[_0x2e963d(0x31f)]];
                        let _0x4e8180 = _0xb5e18[_0x2e963d(0x12db)] ? 'frameF.png' : 'frameC.png';
                        if (_0xb5e18['seen'] ? (this['myWeaponIcon'][_0x2e963d(0x994)](_0xb5e18['texture'], _0xb5e18[_0x2e963d(0x8e3)])[_0x2e963d(0x8a2)](0x2 * _0x4e0fdf[_0x2e963d(0xd2c)]['PixelScale']), this[_0x2e963d(0x1a7c)]['setAlpha'](0x1)[_0x2e963d(0x8a2)](0x2 * _0x4e0fdf['default']['PixelScale'])['setFrame'](_0x4e8180)) : (this[_0x2e963d(0x74e)]['setTexture']('items', 'QuestionMark.png')[_0x2e963d(0x8a2)](_0x4e0fdf[_0x2e963d(0xd2c)]['PixelScale']), this[_0x2e963d(0x1a7c)][_0x2e963d(0xdab)](0.5)[_0x2e963d(0x8a2)](1.6 * _0x4e0fdf['default'][_0x2e963d(0x15db)])['setFrame'](_0x4e8180)), _0xb5e18[_0x2e963d(0x95f)] && this[_0x2e963d(0x1a7c)][_0x2e963d(0x381)](_0xb5e18[_0x2e963d(0x95f)]), _0x5ec321 === _0x484887['default']['RELIC_YELLOW']) {
                            if (Math[_0x2e963d(0x9ad)]() > 0x1 / 0xffff) return;
                            let _0x30a9df = this[_0x2e963d(0x6d2)][_0x2e963d(0x18bd)][_0x2e963d(0x523)]({
                                    'lineStyle': {
                                        'width': 0x2,
                                        'color': 0xdddd00
                                    }
                                }),
                                _0xd1a331 = new Phaser[(_0x2e963d(0x10d2))]['Polygon'](),
                                _0x571126 = [],
                                _0x22361d = 0x8;
                            for (let _0x3b7d37 = 0x0; _0x3b7d37 < 0x11; _0x3b7d37++) {
                                let _0x3b8842 = _0x3b7d37 * (Math['PI'] / 0x11);
                                var _0x531e8e = 0x10 * Math['sin'](0x2 * _0x3b8842 % Math['PI']);
                                _0x571126[_0x2e963d(0x1564)](0x10 + Math[_0x2e963d(0xd7e)](Math['random']() * _0x3b8842) * (_0x22361d + _0x531e8e)), _0x571126['push'](0x10 + Math[_0x2e963d(0xc80)](Math[_0x2e963d(0x9ad)]() * _0x3b8842) * (_0x22361d + _0x531e8e)), _0xd1a331['setTo'](_0x571126), _0x30a9df[_0x2e963d(0x159)](), _0x30a9df['strokePoints'](_0xd1a331['points']);
                            }
                            this['add'](_0x30a9df), this[_0x2e963d(0x6d2)]['time'][_0x2e963d(0x12b8)]({
                                'delay': 0x2328,
                                'callback': () => {
                                    _0x30a9df['setVisible'](!0x1);
                                }
                            });
                        }
                    } ['Seal']() {
                        const _0x217c1d = _0x1228e6;
                        this['myIconBG'][_0x217c1d(0xdab)](0.1), this['mySealedIcon'][_0x217c1d(0x183f)](!0x0);
                    } ['Unseal']() {
                        const _0x299287 = _0x1228e6;
                        this['myIconBG'][_0x299287(0xdab)](0x1), this['mySealedIcon'][_0x299287(0x183f)](!0x1);
                    } ['OnClick']() {}
                }
                _0x37d710['CollectionItemPanel'] = _0x359e5a, _0x37d710['default'] = _0x359e5a;
            };
