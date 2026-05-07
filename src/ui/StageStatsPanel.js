// Module 0x94cf
// Args: _0x2cd02e, _0x2204b0, _0x26d65c

export default (_0x2cd02e, _0x2204b0, _0x26d65c) => {
                'use strict';
                const _0x14b11a = a0_0x6932;
                var _0x502d55 = this && this['__importDefault'] || function(_0x342a2e) {
                    return _0x342a2e && _0x342a2e['__esModule'] ? _0x342a2e : {
                        'default': _0x342a2e
                    };
                };
                Object['defineProperty'](_0x2204b0, '__esModule', {
                    'value': !0x0
                }), _0x2204b0['StageStatsPanel'] = void 0x0;
                const _0x2f8076 = _0x26d65c(0x16c14),
                    _0x2bca9a = _0x502d55(_0x26d65c(0x14639)),
                    _0x5e3538 = _0x502d55(_0x26d65c(0x5103)),
                    _0x3e4af8 = _0x502d55(_0x26d65c(0x5f07)),
                    _0x520186 = _0x502d55(_0x26d65c(0x18645));
                class _0x1bf682 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x170540, _0x5f564e, _0x347b90, _0x36a1d2, _0x597bf3, _0x4db119) {
                        const _0x353019 = _0x14b11a;
                        super(_0x170540, _0x5f564e, _0x347b90), this[_0x353019(0x19c5)] = [{
                            'name': 'TimeLimit',
                            'tint': 0xffffff,
                            'display': 'stageSelection_TimeLimit',
                            'value': 0x1,
                            'default': 0x1,
                            'type': 'time',
                            'icon': 'TimeToken.png',
                            'valueTextObject': null,
                            'nameTextObject': null,
                            'iconObject': null
                        }, {
                            'name': 'ClockSpeed',
                            'tint': 0xffffff,
                            'display': 'stageSelection_ClockSpeed',
                            'value': 'x1',
                            'default': 'x1',
                            'type': 'fixed',
                            'icon': 'TimeToken2.png',
                            'valueTextObject': null,
                            'nameTextObject': null,
                            'iconObject': null
                        }, {
                            'name': 'PlayerPxSpeed',
                            'tint': 0xffffff,
                            'display': 'stageSelection_PlayerPxSpeed',
                            'value': 0x1,
                            'default': 0x1,
                            'type': 'percentage1',
                            'icon': 'Wing.png',
                            'valueTextObject': null,
                            'nameTextObject': null,
                            'iconObject': null
                        }, {
                            'type': 'newLine'
                        }, {
                            'name': 'GoldMultiplier',
                            'tint': 0xffff00,
                            'display': 'stageSelection_GoldMultiplier',
                            'value': 0x1,
                            'default': 0x1,
                            'type': 'percentage1',
                            'icon': 'CoinGold.png',
                            'valueTextObject': null,
                            'nameTextObject': null,
                            'iconObject': null
                        }, {
                            'name': 'LuckBonus',
                            'tint': 0xffff00,
                            'display': 'stageSelection_LuckBonus',
                            'value': 0x0,
                            'default': 0x0,
                            'type': 'percentage',
                            'icon': 'Clover2.png',
                            'valueTextObject': null,
                            'nameTextObject': null,
                            'iconObject': null
                        }, {
                            'name': 'XPBonus',
                            'tint': 0xffff00,
                            'display': 'stageSelection_XPBonus',
                            'value': '--',
                            'default': '--',
                            'type': 'fixed',
                            'icon': 'GemBlue.png',
                            'valueTextObject': null,
                            'nameTextObject': null,
                            'iconObject': null
                        }, {
                            'type': 'newLine'
                        }, {
                            'name': 'EnemyHealthMultiplier',
                            'tint': 0x992200,
                            'display': 'stageSelection_EnemyHealth',
                            'value': 0x1,
                            'default': 0x1,
                            'type': 'percentage1',
                            'icon': 'HeartMini.png',
                            'valueTextObject': null,
                            'nameTextObject': null,
                            'iconObject': null
                        }, {
                            'type': 'newLine'
                        }, {
                            'type': 'newLine'
                        }, {
                            'name': 'tips',
                            'tint': 0xffffff,
                            'display': '--',
                            'value': '--',
                            'default': '--',
                            'type': 'text',
                            'icon': 'SkullToken.png',
                            'valueTextObject': null,
                            'nameTextObject': null,
                            'iconObject': null
                        }, {
                            'type': 'newLine'
                        }, {
                            'type': 'newLine'
                        }], this[_0x353019(0x707)] = _0x4db119, this[_0x353019(0x8a2)](_0x5e3538['default']['PixelScale']);
                        var _0x42f974 = {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x36a1d2,
                            'height': 0x20 + 0x10 * (this[_0x353019(0x19c5)][_0x353019(0xed9)] - 0x1)
                        };
                        for (let _0x322b61 = 0x0; _0x322b61 < this['myListOfStats'][_0x353019(0xed9)]; _0x322b61++) {
                            const _0x5c61dc = this['myListOfStats'][_0x322b61];
                            if ('newLine' === _0x5c61dc['type']) continue;
                            let _0x158066 = new Phaser[(_0x353019(0xbf2))][(_0x353019(0x1951))](this[_0x353019(0x6d2)], 0x6, 0x10 + 0x10 * _0x322b61, 'items', _0x5c61dc[_0x353019(0x148f)])[_0x353019(0xf8e)](0x0, 0.5)[_0x353019(0x8a2)](_0x5e3538[_0x353019(0xd2c)][_0x353019(0x15db)]),
                                _0x1cc661 = new Phaser[(_0x353019(0xbf2))][(_0x353019(0x1ae9))](this['scene'], 0x18, 0x10 + 0x10 * _0x322b61, '', {})[_0x353019(0xf8e)](0x0, 0.5)['setScale'](_0x5e3538['default'][_0x353019(0x15db)])[_0x353019(0x15fb)](_0x36a1d2 - 0x1c),
                                _0xf0ede1 = new Phaser['GameObjects']['Text'](this['scene'], 0xbe, 0x10 + 0x10 * _0x322b61, '', {})[_0x353019(0xf8e)](0x1, 0.5)[_0x353019(0x8a2)](_0x5e3538[_0x353019(0xd2c)][_0x353019(0x15db)]);
                            this[_0x353019(0x18bd)](_0x158066), this[_0x353019(0x18bd)](_0x1cc661), this[_0x353019(0x18bd)](_0xf0ede1), _0x5c61dc[_0x353019(0x84f)] = _0x158066, _0x5c61dc['nameTextObject'] = _0x1cc661, _0x5c61dc[_0x353019(0x1256)] = _0xf0ede1;
                        }
                        this[_0x353019(0x14b7)] = new _0x2f8076['NineSlice'](this['scene'], {
                            'sourceKey': 'UI',
                            'sourceFrame': 'frame1_c2.png',
                            'sourceLayout': {
                                'width': 0xc,
                                'height': 0xc
                            }
                        }, _0x42f974), this[_0x353019(0x720)](this['Background'], 0x0), this['AssignData'](this[_0x353019(0x707)]);
                    } ['Open']() {
                        const _0x1ada88 = _0x14b11a;
                        this['scaleY'] = 0x0, this['OnEnterTween'] = this['scene'][_0x1ada88(0x12a1)]['add']({
                            'targets': this,
                            'scaleY': 0x1,
                            'duration': 0x96
                        });
                    } ['OnClick']() {} ['AssignData'](_0x1cede0) {
                        const _0x144b9c = _0x14b11a;
                        this[_0x144b9c(0x707)] = _0x1cede0;
                        var _0x4f1c36 = _0x2bca9a[_0x144b9c(0xd2c)][this['stage']];
                        if (void 0x0 === _0x4f1c36) return;
                        _0x4f1c36 = _0x2bca9a['default'][this[_0x144b9c(0x707)]][0x0];
                        let _0x33bbd3 = !0x1,
                            _0x3376ec = _0x3e4af8[_0x144b9c(0xd2c)]['Core'][_0x144b9c(0x14d8)]['SelectedInverse'];
                        try {
                            _0x33bbd3 = _0x3e4af8[_0x144b9c(0xd2c)]['Core']['PlayerOptions']['SelectedHyper'] && _0x2bca9a[_0x144b9c(0xd2c)][this['stage']][0x0]['hyper'][_0x144b9c(0x18d6)];
                        } catch (_0x89357) {}
                        let _0x5cc6ee = _0x2bca9a[_0x144b9c(0xd2c)][this[_0x144b9c(0x707)]][0x0][_0x144b9c(0x18d6)],
                            _0x5ed74 = JSON[_0x144b9c(0x57d)](JSON[_0x144b9c(0x152b)](_0x2bca9a['default'][this['stage']][0x0]['mods']));
                        if (_0x33bbd3) {
                            let _0x57f655 = _0x2bca9a['default'][this['stage']][0x0][_0x144b9c(0x1a57)];
                            if (_0x57f655)
                                for (let _0x3358e7 = 0x0; _0x3358e7 < this['myListOfStats']['length']; _0x3358e7++) {
                                    const _0x12f2a5 = this[_0x144b9c(0x19c5)][_0x3358e7];
                                    'TimeLimit' != _0x12f2a5['name'] && _0x57f655['hasOwnProperty'](_0x12f2a5[_0x144b9c(0x226)]) && (_0x5ed74[_0x144b9c(0x2cf)](_0x12f2a5['name']) ? _0x5ed74[_0x12f2a5['name']] += _0x57f655[_0x12f2a5[_0x144b9c(0x226)]] : _0x5ed74[_0x12f2a5['name']] = _0x57f655[_0x12f2a5['name']]);
                                }
                        }
                        if (_0x3376ec) {
                            let _0x188a6c = _0x2bca9a[_0x144b9c(0xd2c)][this[_0x144b9c(0x707)]][0x0]['inverse'];
                            if (_0x188a6c)
                                for (let _0x4fdba6 = 0x0; _0x4fdba6 < this[_0x144b9c(0x19c5)]['length']; _0x4fdba6++) {
                                    const _0x4c2464 = this['myListOfStats'][_0x4fdba6];
                                    'TimeLimit' != _0x4c2464['name'] && _0x188a6c['hasOwnProperty'](_0x4c2464['name']) && (_0x5ed74[_0x144b9c(0x2cf)](_0x4c2464['name']) ? _0x5ed74[_0x4c2464[_0x144b9c(0x226)]] += _0x188a6c[_0x4c2464[_0x144b9c(0x226)]] : _0x5ed74[_0x4c2464[_0x144b9c(0x226)]] = _0x188a6c[_0x4c2464['name']]);
                                }
                        }
                        _0x5ed74['tips'] = _0x2bca9a[_0x144b9c(0xd2c)][this[_0x144b9c(0x707)]][0x0][_0x144b9c(0x45e)];
                        let _0x4fc220 = 0x0;
                        for (let _0x2ad866 = 0x0; _0x2ad866 < this['myListOfStats']['length']; _0x2ad866++) {
                            const _0x37b3a0 = this[_0x144b9c(0x19c5)][_0x2ad866];
                            if (_0x5ed74['hasOwnProperty'](_0x37b3a0['name'])) {
                                if (_0x37b3a0[_0x144b9c(0xb81)] = _0x5ed74[_0x37b3a0['name']], _0x37b3a0[_0x144b9c(0xb81)] == _0x37b3a0[_0x144b9c(0xd2c)] || !_0x5cc6ee) {
                                    _0x37b3a0[_0x144b9c(0xbee)]['text'] = _0x3e4af8['default'][_0x144b9c(0x1f1)]['getLang'](_0x37b3a0[_0x144b9c(0x526)]), _0x37b3a0['valueTextObject'][_0x144b9c(0x758)] = '--', _0x37b3a0[_0x144b9c(0x1256)][_0x144b9c(0x19b0)] = 0xffffff, _0x37b3a0[_0x144b9c(0xbee)][_0x144b9c(0x19b0)] = 0xffffff;
                                    continue;
                                }
                                if ('ClockSpeed' === _0x37b3a0[_0x144b9c(0x226)] && (_0x37b3a0[_0x144b9c(0xb81)] = _0x3e4af8[_0x144b9c(0xd2c)][_0x144b9c(0x1043)][_0x144b9c(0x14d8)]['SelectedHurry'] ? 'x2' : 'x1', _0x37b3a0['tint'] = _0x3e4af8[_0x144b9c(0xd2c)][_0x144b9c(0x1043)][_0x144b9c(0x14d8)][_0x144b9c(0x126c)] ? 0xffff : 0xffffff), 'XPBonus' === _0x37b3a0[_0x144b9c(0x226)]) {
                                    let _0x3f50b8 = _0x5ed74[_0x37b3a0['name']] + (_0x3e4af8[_0x144b9c(0xd2c)][_0x144b9c(0x1043)][_0x144b9c(0x14d8)]['SelectedHurry'] ? 0.25 : 0x0);
                                    _0x37b3a0[_0x144b9c(0xb81)] = '--', _0x3f50b8 < 0x1 ? _0x37b3a0['value'] = '-' + 0x64 * (0x1 - _0x3f50b8) + '%' : _0x3f50b8 > 0x1 && (_0x37b3a0['value'] = '+' + 0x64 * (_0x3f50b8 - 0x1) + '%'), _0x37b3a0[_0x144b9c(0x19b0)] = _0x3e4af8[_0x144b9c(0xd2c)][_0x144b9c(0x1043)][_0x144b9c(0x14d8)][_0x144b9c(0x126c)] ? 0xffff : 0xffffff;
                                }
                                _0x4fc220++, _0x37b3a0['nameTextObject']['text'] = _0x3e4af8[_0x144b9c(0xd2c)]['Lang']['getLang'](_0x37b3a0['display']), _0x37b3a0['nameTextObject'][_0x144b9c(0x19b0)] = _0x37b3a0[_0x144b9c(0x19b0)], _0x37b3a0[_0x144b9c(0x1256)]['text'] = this[_0x144b9c(0x178)](_0x37b3a0), _0x37b3a0[_0x144b9c(0x1256)][_0x144b9c(0x19b0)] = _0x37b3a0['tint'], 'text' === _0x37b3a0[_0x144b9c(0x5a3)] && (_0x37b3a0[_0x144b9c(0xbee)][_0x144b9c(0x758)] = _0x37b3a0[_0x144b9c(0xb81)] ? _0x37b3a0['value'] : '--', _0x37b3a0['valueTextObject'][_0x144b9c(0x758)] = ''), 'tips' != _0x37b3a0[_0x144b9c(0x226)] && _0x3e4af8[_0x144b9c(0xd2c)]['Lang']['scaleToMaxFast'](_0x37b3a0['nameTextObject'], !0x1, 0x78);
                            }
                        }
                        if (0x0 === _0x4fc220) {
                            let _0x276757 = this[_0x144b9c(0x19c5)][0x0];
                            _0x276757['nameTextObject'][_0x144b9c(0x758)] = _0x5cc6ee ? 'No modifiers' : '???', _0x276757['nameTextObject'][_0x144b9c(0x19b0)] = 0xffffff;
                        }
                    } ['GetStatDisplayTextValue'](_0x5875b6) {
                        const _0x4593da = _0x14b11a;
                        switch (_0x5875b6[_0x4593da(0x5a3)]) {
                            case 'flat': {
                                let _0x574c4c = (_0x5875b6['value'] >= 0x0 ? '+' : '') + _0x5875b6[_0x4593da(0xb81)][_0x4593da(0x1969)](0x2);
                                return '+0' === _0x574c4c ? '-' : _0x574c4c;
                            }
                            case 'percentage1': {
                                let _0x296977 = (_0x5875b6['value'] >= 0x1 ? '+' : '') + Math['round'](0x64 * (_0x5875b6['value'] - 0x1)) + '%';
                                return '+0%' === _0x296977 ? '-' : _0x296977;
                            }
                            case 'fixed':
                            case 'text':
                                return _0x5875b6[_0x4593da(0xb81)];
                            case 'time':
                                return _0x520186['default']['FormatTime'](_0x5875b6['value']);
                            case 'percentage': {
                                let _0x4ae472 = (_0x5875b6['value'] >= 0x0 ? '+' : '') + Math[_0x4593da(0x893)](0x64 * _0x5875b6['value']) + '%';
                                return '+0%' === _0x4ae472 ? '-' : _0x4ae472;
                            }
                            default:
                                return '';
                        }
                    }
                }
                _0x2204b0['StageStatsPanel'] = _0x1bf682, _0x2204b0['default'] = _0x1bf682;
            };
