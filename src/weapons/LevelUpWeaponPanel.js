// Module 0x15db6
// Args: _0x31a836, _0x3ef2c1, _0x10cfa

export default (_0x31a836, _0x3ef2c1, _0x10cfa) => {
                'use strict';
                const _0x194ff6 = a0_0x6932;
                var _0x106352 = this && this['__importDefault'] || function(_0x4bad97) {
                    const _0x24c1f0 = _0x194ff6;
                    return _0x4bad97 && _0x4bad97[_0x24c1f0(0x16f1)] ? _0x4bad97 : {
                        'default': _0x4bad97
                    };
                };
                Object['defineProperty'](_0x3ef2c1, '__esModule', {
                    'value': !0x0
                }), _0x3ef2c1['LevelUpWeaponPanel'] = void 0x0;
                const _0x1b1a97 = _0x10cfa(0x16c14),
                    _0x4b473e = _0x106352(_0x10cfa(0x4d17)),
                    _0x4afce5 = _0x106352(_0x10cfa(0x3107)),
                    _0x62e873 = _0x106352(_0x10cfa(0x5103)),
                    _0x2f3af6 = _0x106352(_0x10cfa(0x5f07));
                class _0x33dda3 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x1402bd, _0x128ea8, _0x5dc22e, _0x1095a7, _0x3b3f17) {
                        const _0x34c094 = _0x194ff6;
                        super(_0x1402bd, _0x128ea8, _0x5dc22e), this[_0x34c094(0x176c)] = 0x0, this['setScale'](_0x62e873['default'][_0x34c094(0x15db)]);
                        var _0x9b8c2f = {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x1095a7,
                            'height': _0x3b3f17
                        };
                        this['evoIconsOffset'] = 0.7 * _0x1095a7, this[_0x34c094(0x14b7)] = new _0x1b1a97[(_0x34c094(0x1a31))](this[_0x34c094(0x6d2)], {
                            'sourceKey': 'UI',
                            'sourceFrame': 'frame1_c2.png',
                            'sourceLayout': {
                                'width': 0xc,
                                'height': 0xc
                            }
                        }, _0x9b8c2f), this[_0x34c094(0x1a7c)] = new Phaser[(_0x34c094(0xbf2))][(_0x34c094(0x1951))](this[_0x34c094(0x6d2)], 0x4, 0x4, 'UI', 'frameB.png')[_0x34c094(0xf8e)](0x0, 0x0)['setScale'](0x2), this[_0x34c094(0xa73)] = new Phaser[(_0x34c094(0xbf2))][(_0x34c094(0x1951))](this['scene'], 0x1c, 0x1c, '', '')[_0x34c094(0xf8e)](0.5)[_0x34c094(0x8a2)](0x2), this['myName'] = new Phaser[(_0x34c094(0xbf2))][(_0x34c094(0x1ae9))](this['scene'], 0x50, 0x6, _0x2f3af6[_0x34c094(0xd2c)]['Lang'][_0x34c094(0xb10)]('weapon_name'), {})['setScale'](0x1), this['myNextLevel'] = new Phaser[(_0x34c094(0xbf2))]['Text'](this[_0x34c094(0x6d2)], this['evoIconsOffset'], 0x6, _0x2f3af6[_0x34c094(0xd2c)][_0x34c094(0x1f1)][_0x34c094(0xb10)]('weapon_level'), {})[_0x34c094(0x8a2)](0x1), this[_0x34c094(0x233)] = new Phaser[(_0x34c094(0xbf2))]['Text'](this[_0x34c094(0x6d2)], 0xa, 0x3c, _0x2f3af6[_0x34c094(0xd2c)][_0x34c094(0x1f1)][_0x34c094(0xb10)]('weapon_description'), {}), this[_0x34c094(0xa75)] = new Phaser['GameObjects'][(_0x34c094(0x1ae9))](this[_0x34c094(0x6d2)], this[_0x34c094(0x176c)], 0x1c, 'evo: ', {
                            'color': 'orange'
                        })[_0x34c094(0x8a2)](0x1), this['descriptionWrap'] = 0.9 * _0x1095a7, this['myDescription']['setWordWrapWidth'](0.9 * _0x1095a7)['setScale'](0x1), this[_0x34c094(0x171c)] = [], this['add']([this['Background'], this[_0x34c094(0x1a7c)], this[_0x34c094(0xa73)], this[_0x34c094(0xc89)], this['myEvolve'], this['myNextLevel'], this[_0x34c094(0x233)]]);
                    } ['ClearData']() {
                        const _0x201374 = _0x194ff6;
                        for (let _0x535eb5 = 0x0; _0x535eb5 < this[_0x201374(0x171c)][_0x201374(0xed9)]; _0x535eb5++) this[_0x201374(0x171c)][_0x535eb5][_0x201374(0x183f)](!0x1);
                    } ['AssignData'](_0x218e65, _0x2e6b11) {
                        const _0x330753 = _0x194ff6;
                        this[_0x330753(0x15f6)] = _0x218e65;
                        var _0x2173c3 = _0x4afce5['default'][_0x218e65][0x0];
                        this['myName'][_0x330753(0x758)] = _0x2173c3[_0x330753(0x226)], this['myNextLevel'][_0x330753(0x758)] = _0x2f3af6[_0x330753(0xd2c)]['Lang']['getLang']('weapon_new'), this[_0x330753(0x1187)]['setTint'](0xffff00), this['myDescription']['text'] = _0x2173c3[_0x330753(0x1146)], this['myIcon']['setTexture'](_0x2173c3[_0x330753(0x174d)], _0x2173c3[_0x330753(0x8e3)]), this[_0x330753(0x14b7)][_0x330753(0xb34)](_0x2173c3[_0x330753(0xdf4)] ? 0xffff00 : 0xffffff), this['myEvolve']['setVisible'](!0x1);
                        let _0x540aa3 = _0x2173c3['evoInto'] ? _0x4afce5['default'][_0x2173c3['evoInto']] : null,
                            _0x5ee79d = !!_0x540aa3 && _0x540aa3[0x0][_0x330753(0xb36)];
                        if (_0x2173c3[_0x330753(0xf91)] && _0x5ee79d)
                            for (let _0x4d1171 = 0x0; _0x4d1171 < _0x2173c3[_0x330753(0xf91)][_0x330753(0xed9)]; _0x4d1171++) {
                                const _0x45226d = _0x2173c3['evoSynergy'][_0x4d1171];
                                if (_0x2f3af6['default'][_0x330753(0x1043)]['Weapons']['findIndex'](_0x45a0b6 => _0x45a0b6[_0x330753(0x14e)] === _0x45226d) < 0x0) continue;
                                if (_0x2f3af6['default'][_0x330753(0x1043)]['Weapons'][_0x330753(0x5ae)](_0x1aa1e0 => _0x1aa1e0[_0x330753(0x14e)] === _0x218e65) >= 0x0) continue;
                                let _0x1d98a9 = _0x4afce5['default'][_0x45226d];
                                if (_0x1d98a9 && (_0x1d98a9 = _0x4afce5[_0x330753(0xd2c)][_0x45226d][0x0], _0x1d98a9['seen'])) {
                                    let _0x451679 = new Phaser[(_0x330753(0xbf2))][(_0x330753(0x1951))](this[_0x330753(0x6d2)], this[_0x330753(0x176c)] + 0x2a + 0x10 * _0x4d1171, 0x1c, _0x1d98a9[_0x330753(0x174d)], _0x1d98a9['frameName'])['setOrigin'](0x0);
                                    this[_0x330753(0x171c)][_0x330753(0x1564)](_0x451679), this[_0x330753(0x18bd)](_0x451679), this['myEvolve'][_0x330753(0x183f)](!0x0);
                                }
                            }
                        if (_0x2e6b11 > 0x0) {
                            _0x2173c3 = _0x4afce5[_0x330753(0xd2c)][_0x218e65][_0x2e6b11], this[_0x330753(0x1187)][_0x330753(0x758)] = _0x2f3af6['default'][_0x330753(0x1f1)]['getLang']('weapon_level_') + (_0x2e6b11 + 0x1)['toString'](), this[_0x330753(0x1187)][_0x330753(0xbb3)]();
                            var _0x293206 = _0x2f3af6[_0x330753(0xd2c)]['Lang'][_0x330753(0xb10)]('weapon_bonus_');
                            for (const _0x15b907 in _0x2173c3) _0x293206 += _0x15b907 + ' ';
                            this['myDescription']['text'] = _0x293206, this['myDescription'][_0x330753(0x758)] = _0x33dda3[_0x330753(0xce7)](_0x2173c3, _0x218e65, _0x4afce5[_0x330753(0xd2c)][_0x218e65][0x0]['isPowerUp']), this[_0x330753(0xa75)][_0x330753(0x183f)](!0x1);
                        }
                        _0x2f3af6[_0x330753(0xd2c)][_0x330753(0x1f1)][_0x330753(0x14a8)](this[_0x330753(0x233)], !0x1, 0x15e);
                    } ['AssignLimitBreakData'](_0x1ff0ef) {
                        const _0x11e903 = _0x194ff6;
                        this[_0x11e903(0x17c6)] = _0x1ff0ef, this['weaponType'] = _0x1ff0ef[_0x11e903(0x15f6)];
                        var _0xcbcea8 = _0x4afce5['default'][this['weaponType']][0x0];
                        let _0x169a41 = _0x2f3af6['default']['Core'][_0x11e903(0x506)][_0x11e903(0x1e6)](_0x4336ef => _0x4336ef[_0x11e903(0x14e)] == _0x1ff0ef[_0x11e903(0x15f6)]);
                        this['myName'][_0x11e903(0x758)] = _0xcbcea8['name'], this[_0x11e903(0x1187)][_0x11e903(0x758)] = _0x2f3af6['default'][_0x11e903(0x1f1)]['getLang']('weapon_limit_break_') + (_0x169a41['limitBreakLevel'] + _0x169a41['level'] + 0x1)['toString'](), this[_0x11e903(0x1187)]['setTint'](0xffff00), this[_0x11e903(0x233)]['text'] = _0xcbcea8[_0x11e903(0x1146)], this['myIcon'][_0x11e903(0x994)](_0xcbcea8['texture'], _0xcbcea8[_0x11e903(0x8e3)]), this['Background'][_0x11e903(0xb34)](_0xcbcea8[_0x11e903(0xdf4)] ? 0xffff00 : 0xffffff), this[_0x11e903(0xa75)][_0x11e903(0x183f)](!0x1);
                        let _0x13c7b5 = _0xcbcea8['evoInto'] ? _0x4afce5['default'][_0xcbcea8['evoInto']] : null,
                            _0x4b4ac5 = !!_0x13c7b5 && _0x13c7b5[0x0]['seen'];
                        if (_0xcbcea8[_0x11e903(0xf91)] && _0x4b4ac5)
                            for (let _0x2747f9 = 0x0; _0x2747f9 < _0xcbcea8['evoSynergy'][_0x11e903(0xed9)]; _0x2747f9++) {
                                const _0x3f213a = _0xcbcea8['evoSynergy'][_0x2747f9];
                                if (_0x2f3af6[_0x11e903(0xd2c)]['Core'][_0x11e903(0x506)][_0x11e903(0x5ae)](_0x46ade1 => _0x46ade1['bulletType'] === _0x3f213a) < 0x0) continue;
                                if (_0x2f3af6[_0x11e903(0xd2c)][_0x11e903(0x1043)][_0x11e903(0x506)]['findIndex'](_0x53d728 => _0x53d728[_0x11e903(0x14e)] === this[_0x11e903(0x15f6)]) >= 0x0) continue;
                                let _0x3655f1 = _0x4afce5['default'][_0x3f213a];
                                if (_0x3655f1 && (_0x3655f1 = _0x4afce5[_0x11e903(0xd2c)][_0x3f213a][0x0], _0x3655f1[_0x11e903(0xb36)])) {
                                    let _0x4d12f8 = new Phaser[(_0x11e903(0xbf2))][(_0x11e903(0x1951))](this['scene'], this[_0x11e903(0x176c)] + 0x2a + 0x10 * _0x2747f9, 0x1c, _0x3655f1[_0x11e903(0x174d)], _0x3655f1['frameName'])[_0x11e903(0xf8e)](0x0);
                                    this['evoSprites']['push'](_0x4d12f8), this['add'](_0x4d12f8), this[_0x11e903(0xa75)][_0x11e903(0x183f)](!0x0);
                                }
                            }
                        this['myNextLevel'][_0x11e903(0xbb3)](), this[_0x11e903(0x233)][_0x11e903(0x758)] = _0x33dda3['ParseLimitBreakUpInfo'](_0x1ff0ef[_0x11e903(0x1998)]), this[_0x11e903(0xa75)]['setVisible'](!0x1), _0x2f3af6[_0x11e903(0xd2c)]['Lang'][_0x11e903(0x14a8)](this[_0x11e903(0x233)], !0x1, 0x15e);
                    } ['AssignItemData'](_0x87630e) {
                        const _0x37dbc8 = _0x194ff6;
                        this[_0x37dbc8(0x15f6)] = _0x87630e;
                        var _0x5ca104 = _0x4b473e['default'][_0x87630e];
                        this['myName'][_0x37dbc8(0x758)] = _0x5ca104[_0x37dbc8(0x226)], this[_0x37dbc8(0x1187)][_0x37dbc8(0x758)] = '', this[_0x37dbc8(0x233)]['text'] = _0x5ca104[_0x37dbc8(0x1146)], this['myIcon']['setTexture'](_0x5ca104['texture'], _0x5ca104[_0x37dbc8(0x8e3)]), this[_0x37dbc8(0xa75)]['setVisible'](!0x1), _0x5ca104[_0x37dbc8(0x139e)] && (this[_0x37dbc8(0x233)]['text'] += ' ' + _0x5ca104['tips'], this['Background']['setTint'](0xffff00)), _0x2f3af6[_0x37dbc8(0xd2c)][_0x37dbc8(0x1f1)]['scaleToMaxFast'](this['myDescription'], !0x1, 0x15e);
                    }
                    static['ParseLevelUpInfo'](_0x19b3cf, _0x438d9d, _0x57ade2) {
                        const _0x5209d6 = _0x194ff6;
                        var _0x4cb2e7 = '';
                        let _0x43321d = _0x4afce5[_0x5209d6(0xd2c)][_0x438d9d][0x0];
                        for (const _0x426768 in _0x19b3cf) switch (_0x426768) {
                            default:
                            case 'repeatInterval':
                                break;
                            case 'power':
                                _0x4cb2e7 += _0x57ade2 ? _0x2f3af6[_0x5209d6(0xd2c)][_0x5209d6(0x1f1)]['getLang']('weaponLevelUp_damageAll', [(0x64 * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x0)]) : _0x2f3af6[_0x5209d6(0xd2c)][_0x5209d6(0x1f1)]['getLang']('weaponLevelUp_damage', [(0xa * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x0)]);
                                break;
                            case 'area':
                                _0x4cb2e7 += (_0x57ade2 ? _0x2f3af6[_0x5209d6(0xd2c)]['Lang'][_0x5209d6(0xb10)]('weaponLevelUp_all') : '') + _0x2f3af6[_0x5209d6(0xd2c)]['Lang']['getLang']('weaponLevelUp_area', [(0x64 * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x0)]);
                                break;
                            case 'speed':
                                _0x4cb2e7 += (_0x57ade2 ? _0x2f3af6[_0x5209d6(0xd2c)][_0x5209d6(0x1f1)][_0x5209d6(0xb10)]('weaponLevelUp_all') : '') + _0x2f3af6[_0x5209d6(0xd2c)][_0x5209d6(0x1f1)]['getLang']('weaponLevelUp_speed', [(0x64 * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x0)]);
                                break;
                            case 'amount':
                                _0x4cb2e7 += (_0x57ade2 ? _0x2f3af6['default'][_0x5209d6(0x1f1)][_0x5209d6(0xb10)]('weaponLevelUp_all') : '') + (Number['parseInt'](_0x19b3cf[_0x426768]) > 0x1 ? _0x2f3af6['default'][_0x5209d6(0x1f1)][_0x5209d6(0xb10)]('weaponLevelUp_projectiles', [_0x19b3cf[_0x426768][_0x5209d6(0x1969)](0x0)]) : _0x2f3af6[_0x5209d6(0xd2c)][_0x5209d6(0x1f1)][_0x5209d6(0xb10)]('weaponLevelUp_projectile', [_0x19b3cf[_0x426768][_0x5209d6(0x1969)](0x0)]));
                                break;
                            case 'penetrating':
                                _0x4cb2e7 += (_0x57ade2 ? _0x2f3af6[_0x5209d6(0xd2c)]['Lang'][_0x5209d6(0xb10)]('weaponLevelUp_all') : '') + (Number['parseInt'](_0x19b3cf[_0x426768]) > 0x1 ? _0x2f3af6['default'][_0x5209d6(0x1f1)][_0x5209d6(0xb10)]('weaponLevelUp_enemies', [_0x19b3cf[_0x426768][_0x5209d6(0x1969)](0x0)]) : _0x2f3af6[_0x5209d6(0xd2c)][_0x5209d6(0x1f1)][_0x5209d6(0xb10)]('weaponLevelUp_enemy', [_0x19b3cf[_0x426768]['toFixed'](0x0)]));
                                break;
                            case 'charges':
                                _0x4cb2e7 += Number[_0x5209d6(0xb5d)](_0x19b3cf[_0x426768]) > 0x1 ? _0x2f3af6[_0x5209d6(0xd2c)]['Lang'][_0x5209d6(0xb10)]('weaponLevelUp_charges', [_0x19b3cf[_0x426768]]) : _0x2f3af6['default'][_0x5209d6(0x1f1)]['getLang']('weaponLevelUp_charge', [_0x19b3cf[_0x426768]]);
                                break;
                            case 'duration':
                                _0x4cb2e7 += _0x57ade2 ? _0x2f3af6['default'][_0x5209d6(0x1f1)]['getLang']('weaponLevelUp_effectPerc', [(0x64 * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x0)]) : _0x2f3af6[_0x5209d6(0xd2c)][_0x5209d6(0x1f1)][_0x5209d6(0xb10)]('weaponLevelUp_effect', [(0.001 * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x1)]);
                                break;
                            case 'cooldown':
                                _0x4cb2e7 += (_0x57ade2 ? _0x2f3af6[_0x5209d6(0xd2c)][_0x5209d6(0x1f1)]['getLang']('weaponLevelUp_all') : '') + _0x2f3af6['default'][_0x5209d6(0x1f1)][_0x5209d6(0xb10)]('weaponLevelUp_cooldownPerc', [(-0x64 * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x1)]);
                                break;
                            case 'interval':
                                _0x4cb2e7 += (_0x57ade2 ? _0x2f3af6[_0x5209d6(0xd2c)]['Lang'][_0x5209d6(0xb10)]('weaponLevelUp_all') : '') + (_0x19b3cf[_0x426768] < 0x0 ? _0x2f3af6[_0x5209d6(0xd2c)][_0x5209d6(0x1f1)][_0x5209d6(0xb10)]('weaponLevelUp_cooldown', [(-0.001 * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x1)]) : _0x2f3af6[_0x5209d6(0xd2c)][_0x5209d6(0x1f1)][_0x5209d6(0xb10)]('weaponLevelUp_cooldownIncreased', [(0.001 * _0x19b3cf[_0x426768])['toFixed'](0x1)]));
                                break;
                            case 'maxHp':
                                _0x4cb2e7 += _0x2f3af6[_0x5209d6(0xd2c)]['Lang']['getLang']('weaponLevelUp_health', [(0x64 * _0x19b3cf[_0x426768])['toFixed'](0x0)]);
                                break;
                            case 'growth':
                                _0x4cb2e7 += _0x19b3cf[_0x426768] < 0x0 ? _0x2f3af6[_0x5209d6(0xd2c)][_0x5209d6(0x1f1)][_0x5209d6(0xb10)]('weaponLevelUp_xpDecreased', [(0x64 * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x0)]) : _0x2f3af6[_0x5209d6(0xd2c)][_0x5209d6(0x1f1)]['getLang']('weaponLevelUp_xp', [(0x64 * _0x19b3cf[_0x426768])['toFixed'](0x0)]);
                                break;
                            case 'moveSpeed':
                                _0x4cb2e7 += _0x2f3af6[_0x5209d6(0xd2c)]['Lang']['getLang']('weaponLevelUp_movement', [(0x64 * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x0)]);
                                break;
                            case 'magnet':
                                _0x4cb2e7 += _0x2f3af6['default'][_0x5209d6(0x1f1)]['getLang']('weaponLevelUp_range', [(0x64 * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x0)]);
                                break;
                            case 'luck':
                                _0x4cb2e7 += _0x2f3af6['default'][_0x5209d6(0x1f1)][_0x5209d6(0xb10)]('weaponLevelUp_luck', [(0x64 * _0x19b3cf[_0x426768])['toFixed'](0x0)]);
                                break;
                            case 'regen':
                                _0x4cb2e7 += _0x2f3af6['default'][_0x5209d6(0x1f1)]['getLang']('weaponLevelUp_recovery', [_0x19b3cf[_0x426768]['toFixed'](0x1)]);
                                break;
                            case 'greed':
                                _0x4cb2e7 += _0x2f3af6[_0x5209d6(0xd2c)]['Lang'][_0x5209d6(0xb10)]('weaponLevelUp_value', [(0x64 * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x0)]);
                                break;
                            case 'armor':
                                _0x4cb2e7 += _0x2f3af6['default']['Lang'][_0x5209d6(0xb10)]('weaponLevelUp_reduceDamage', [_0x19b3cf[_0x426768]]);
                                break;
                            case 'shieldInvulTime':
                                _0x4cb2e7 += _0x2f3af6['default']['Lang'][_0x5209d6(0xb10)]('weaponLevelUp_shield', [(0.001 * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x1)]);
                                break;
                            case 'revivals':
                                _0x4cb2e7 += _0x2f3af6[_0x5209d6(0xd2c)]['Lang']['getLang']('weaponLevelUp_revivals', [_0x19b3cf[_0x426768]]);
                                break;
                            case 'curse':
                                _0x4cb2e7 += _0x2f3af6['default']['Lang'][_0x5209d6(0xb10)]('weaponLevelUp_curse', [(0x64 * _0x19b3cf[_0x426768])[_0x5209d6(0x1969)](0x0)]);
                                break;
                            case 'customDesc':
                                _0x4cb2e7 += _0x2f3af6[_0x5209d6(0xd2c)]['Lang']['textSubstitution'](_0x43321d['customDescValue'], [_0x19b3cf[_0x426768][_0x5209d6(0x1969)](0x0)]) + '\n';
                                break;
                            case 'customOverride':
                                _0x4cb2e7 = _0x2f3af6['default'][_0x5209d6(0x1f1)][_0x5209d6(0xcfc)](_0x43321d['customOverrideValue'], [_0x19b3cf[_0x426768]['toFixed'](0x0)]) + '\n';
                                break;
                            case 'desc':
                                _0x4cb2e7 += _0x19b3cf[_0x426768] + '\n';
                                break;
                            case 'override':
                                _0x4cb2e7 = _0x19b3cf[_0x426768] + '\n';
                        }
                        return _0x4cb2e7;
                    }
                    static['ParseLimitBreakUpInfo'](_0xe7b58) {
                        const _0x5b0361 = _0x194ff6;
                        var _0x4ad004 = '';
                        for (const _0x4cd5aa in _0xe7b58) switch (_0x4cd5aa) {
                            default:
                            case 'repeatInterval':
                                break;
                            case 'power':
                                _0x4ad004 += _0x2f3af6[_0x5b0361(0xd2c)]['Lang']['getLang']('limitBreak_might', [(0xa * _0xe7b58[_0x4cd5aa])[_0x5b0361(0x1969)](0x0)]);
                                break;
                            case 'area':
                                _0x4ad004 += _0x2f3af6[_0x5b0361(0xd2c)][_0x5b0361(0x1f1)]['getLang']('limitBreak_area', [(0x64 * _0xe7b58[_0x4cd5aa])[_0x5b0361(0x1969)](0x0)]);
                                break;
                            case 'speed':
                                _0x4ad004 += _0x2f3af6['default']['Lang'][_0x5b0361(0xb10)]('limitBreak_speed', [(0x64 * _0xe7b58[_0x4cd5aa])['toFixed'](0x0)]);
                                break;
                            case 'amount':
                                _0x4ad004 += _0x2f3af6[_0x5b0361(0xd2c)][_0x5b0361(0x1f1)][_0x5b0361(0xb10)]('limitBreak_amount', [_0xe7b58[_0x4cd5aa]['toFixed'](0x0)]);
                                break;
                            case 'penetrating':
                                _0x4ad004 += _0x2f3af6['default']['Lang'][_0x5b0361(0xb10)]('limitBreak_passes', [_0xe7b58[_0x4cd5aa][_0x5b0361(0x1969)](0x0)]);
                                break;
                            case 'duration':
                                _0x4ad004 += _0x2f3af6['default'][_0x5b0361(0x1f1)][_0x5b0361(0xb10)]('limitBreak_duration', [_0xe7b58[_0x4cd5aa][_0x5b0361(0x1969)](0x0)]);
                                break;
                            case 'cooldown':
                                _0x4ad004 += _0x2f3af6[_0x5b0361(0xd2c)][_0x5b0361(0x1f1)]['getLang']('limitBreak_cooldown', [(-0x64 * _0xe7b58[_0x4cd5aa])[_0x5b0361(0x1969)](0x1)]);
                                break;
                            case 'critChance':
                                _0x4ad004 += _0x2f3af6[_0x5b0361(0xd2c)][_0x5b0361(0x1f1)][_0x5b0361(0xb10)]('limitBreak_critical', [(0x64 * _0xe7b58[_0x4cd5aa])['toFixed'](0x1)]);
                                break;
                            case 'chance':
                                _0x4ad004 += _0x2f3af6[_0x5b0361(0xd2c)]['Lang'][_0x5b0361(0xb10)]('limitBreak_chance', [(0x64 * _0xe7b58[_0x4cd5aa])[_0x5b0361(0x1969)](0x1)]);
                                break;
                            case 'desc':
                                _0x4ad004 += _0xe7b58[_0x4cd5aa] + '\n';
                                break;
                            case 'override':
                                _0x4ad004 = _0xe7b58[_0x4cd5aa] + '\n';
                        }
                        return _0x4ad004;
                    }
                }
                _0x3ef2c1['LevelUpWeaponPanel'] = _0x33dda3, _0x3ef2c1['default'] = _0x33dda3;
            };
