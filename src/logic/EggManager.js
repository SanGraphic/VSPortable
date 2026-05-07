// Module 0xf623
// Args: _0x1b4bc6, _0xb0db8d, _0x3316f7

export default (_0x1b4bc6, _0xb0db8d, _0x3316f7) => {
                'use strict';
                const _0x4269a4 = a0_0x6932;
                var _0x4200a7 = this && this['__importDefault'] || function(_0x4a92d8) {
                    return _0x4a92d8 && _0x4a92d8['__esModule'] ? _0x4a92d8 : {
                        'default': _0x4a92d8
                    };
                };
                Object['defineProperty'](_0xb0db8d, '__esModule', {
                    'value': !0x0
                }), _0xb0db8d['EggManager'] = void 0x0;
                const _0x1c1ad8 = _0x4200a7(_0x3316f7(0x4d17)),
                    _0xcf2576 = _0x4200a7(_0x3316f7(0xc42e)),
                    _0x1a8d79 = _0x4200a7(_0x3316f7(0x5f07));
                class _0x32e710 {
                    constructor() {
                        const _0x37b82f = _0x4269a4;
                        this[_0x37b82f(0x105d)] = [{
                            'name': 'maxHp',
                            'value': 0x1
                        }, {
                            'name': 'armor',
                            'value': 0.1
                        }, {
                            'name': 'regen',
                            'value': 0.1
                        }, {
                            'name': 'moveSpeed',
                            'value': 0.01
                        }, {
                            'name': 'power',
                            'value': 0.01
                        }, {
                            'name': 'cooldown',
                            'value': -0.005
                        }, {
                            'name': 'area',
                            'value': 0.01
                        }, {
                            'name': 'speed',
                            'value': 0.01
                        }, {
                            'name': 'duration',
                            'value': 0.01
                        }, {
                            'name': 'amount',
                            'value': 0.1
                        }, {
                            'name': 'luck',
                            'value': 0.01
                        }, {
                            'name': 'growth',
                            'value': 0.01
                        }, {
                            'name': 'greed',
                            'value': 0.01
                        }, {
                            'name': 'curse',
                            'value': 0.01
                        }, {
                            'name': 'magnet',
                            'value': 0.3
                        }, {
                            'name': 'revivals',
                            'value': 0.1
                        }, {
                            'name': 'rerolls',
                            'value': 0.1
                        }, {
                            'name': 'skips',
                            'value': 0.2
                        }, {
                            'name': 'banish',
                            'value': 0.2
                        }];
                    } ['AddGoldenEgg']() {
                        const _0x3269f7 = _0x4269a4;
                        let _0x5bd68c = _0x1a8d79[_0x3269f7(0xd2c)][_0x3269f7(0x1043)][_0x3269f7(0x14d8)][_0x3269f7(0x3fd)];
                        void 0x0 === _0x5bd68c[_0x1a8d79[_0x3269f7(0xd2c)]['Core']['PlayerOptions'][_0x3269f7(0x1188)]] && (_0x5bd68c[_0x1a8d79[_0x3269f7(0xd2c)]['Core'][_0x3269f7(0x14d8)][_0x3269f7(0x1188)]] = {});
                        let _0x38e3c4 = _0x5bd68c[_0x1a8d79[_0x3269f7(0xd2c)][_0x3269f7(0x1043)]['PlayerOptions']['SelectedCharacter']],
                            _0x50c3c8 = this['PickRandomAttribute']();
                        return void 0x0 === _0x38e3c4[_0x50c3c8[_0x3269f7(0x226)]] && (_0x38e3c4[_0x50c3c8['name']] = 0x0), _0x38e3c4[_0x50c3c8['name']] += _0x50c3c8[_0x3269f7(0xb81)], void 0x0 === _0x38e3c4[_0x3269f7(0x532)] && (_0x38e3c4['total'] = 0x0), _0x38e3c4['total']++, void 0x0 === _0x5bd68c['total'] && (_0x5bd68c[_0x3269f7(0x532)] = 0x0), _0x5bd68c['total']++, void 0x0 === _0x1a8d79[_0x3269f7(0xd2c)][_0x3269f7(0x1043)][_0x3269f7(0x14d8)][_0x3269f7(0x1481)][_0x3269f7(0x1e6)](_0x2bdd24 => _0x2bdd24 === _0xcf2576[_0x3269f7(0xd2c)][_0x3269f7(0x16e3)]) && (_0x1c1ad8['default'][_0xcf2576[_0x3269f7(0xd2c)][_0x3269f7(0x16e3)]][_0x3269f7(0xb36)] = !0x0, _0x1a8d79['default']['Core'][_0x3269f7(0x14d8)]['CollectedItems']['push'](_0xcf2576[_0x3269f7(0xd2c)][_0x3269f7(0x16e3)])), _0x50c3c8;
                    } ['PickRandomAttribute']() {
                        const _0x45a687 = _0x4269a4;
                        return Phaser[_0x45a687(0x24f)]['RND'][_0x45a687(0x198c)](this['attributes']);
                    } ['ApplyBonuses']() {
                        const _0x4bc284 = _0x4269a4;
                        let _0x41c48e = _0x1a8d79['default'][_0x4bc284(0x1043)][_0x4bc284(0x14d8)][_0x4bc284(0x3fd)];
                        if (void 0x0 === _0x41c48e[_0x1a8d79['default'][_0x4bc284(0x1043)]['PlayerOptions'][_0x4bc284(0x1188)]]) return;
                        let _0xe5b1a8 = _0x41c48e[_0x1a8d79['default'][_0x4bc284(0x1043)]['PlayerOptions']['SelectedCharacter']],
                            _0x226e67 = _0x1a8d79[_0x4bc284(0xd2c)]['Core'][_0x4bc284(0x10f6)],
                            _0x439172 = _0x1a8d79[_0x4bc284(0xd2c)][_0x4bc284(0x1043)][_0x4bc284(0x17fc)];
                        _0x226e67[_0x4bc284(0x31f)] += _0xe5b1a8[_0x4bc284(0x31f)] || 0x0, _0x226e67[_0x4bc284(0x1702)] += _0xe5b1a8['area'] || 0x0, _0x226e67[_0x4bc284(0x78e)] += _0xe5b1a8[_0x4bc284(0x78e)] || 0x0, _0x226e67[_0x4bc284(0xe0e)] += _0xe5b1a8[_0x4bc284(0xe0e)] || 0x0, _0x226e67[_0x4bc284(0x5ef)] += _0xe5b1a8[_0x4bc284(0x5ef)] || 0x0, _0x226e67[_0x4bc284(0x1205)] += _0xe5b1a8[_0x4bc284(0x1205)] || 0x0, _0x226e67['growth'] += _0xe5b1a8['growth'] || 0x0, _0x226e67[_0x4bc284(0x7d2)] += _0xe5b1a8[_0x4bc284(0x7d2)] || 0x0, _0x226e67['maxHp'] += _0xe5b1a8[_0x4bc284(0xd2e)] || 0x0, _0x226e67[_0x4bc284(0xe2c)] += _0xe5b1a8['regen'] || 0x0, _0x226e67['greed'] += _0xe5b1a8[_0x4bc284(0x14ab)] || 0x0, _0x226e67[_0x4bc284(0x173f)] += _0xe5b1a8['curse'] || 0x0, _0x439172['radius'] += _0xe5b1a8['magnet'] || 0x0, _0x226e67[_0x4bc284(0x9b8)] += Math[_0x4bc284(0xe07)](_0xe5b1a8[_0x4bc284(0x9b8)]) || 0x0, _0x226e67[_0x4bc284(0x8d0)] += Math[_0x4bc284(0xe07)](_0xe5b1a8[_0x4bc284(0x8d0)]) || 0x0, _0x226e67[_0x4bc284(0x206)] += Math[_0x4bc284(0xe07)](_0xe5b1a8['rerolls']) || 0x0, _0x226e67[_0x4bc284(0x12ad)] += Math[_0x4bc284(0xe07)](_0xe5b1a8['skips']) || 0x0, _0x226e67['banish'] += Math[_0x4bc284(0xe07)](_0xe5b1a8['banish']) || 0x0, _0x226e67['revivals'] += Math[_0x4bc284(0xe07)](_0xe5b1a8[_0x4bc284(0x14e0)]) || 0x0;
                    } ['RemoveAllSpecificEggs'](_0x26c02c) {
                        const _0xebe41b = _0x4269a4;
                        let _0x45c348 = _0x1a8d79[_0xebe41b(0xd2c)][_0xebe41b(0x1043)][_0xebe41b(0x14d8)][_0xebe41b(0x3fd)];
                        if (void 0x0 === _0x45c348[_0x1a8d79['default']['Core'][_0xebe41b(0x14d8)]['SelectedCharacter']]) return;
                        let _0x64ce7e = _0x45c348[_0x1a8d79[_0xebe41b(0xd2c)][_0xebe41b(0x1043)]['PlayerOptions'][_0xebe41b(0x1188)]],
                            _0x3e47c3 = this[_0xebe41b(0x105d)][_0xebe41b(0x1e6)](_0x3ac791 => _0x3ac791[_0xebe41b(0x226)] === _0x26c02c),
                            _0x12d801 = !0x1;
                        if (!_0x3e47c3) return _0x3e47c3;
                        let _0x122eb5 = 0x0;
                        if (void 0x0 !== _0x64ce7e[_0x3e47c3['name']] && 0x0 != _0x64ce7e[_0x3e47c3[_0xebe41b(0x226)]]) {
                            if ('cooldown' != _0x3e47c3[_0xebe41b(0x226)]) {
                                for (; _0x64ce7e[_0x3e47c3[_0xebe41b(0x226)]] > 0x0;) _0x64ce7e[_0x3e47c3['name']] -= _0x3e47c3[_0xebe41b(0xb81)], _0x122eb5++, _0x12d801 = !0x0;
                                _0x64ce7e[_0x3e47c3[_0xebe41b(0x226)]] < 0x0 && (_0x64ce7e[_0x3e47c3['name']] = 0x0);
                            } else {
                                for (; _0x64ce7e[_0x3e47c3['name']] < 0x0;) _0x64ce7e[_0x3e47c3['name']] += _0x3e47c3[_0xebe41b(0xb81)], _0x122eb5++, _0x12d801 = !0x0;
                                _0x64ce7e[_0x3e47c3[_0xebe41b(0x226)]] > 0x0 && (_0x64ce7e[_0x3e47c3[_0xebe41b(0x226)]] = 0x0);
                            }
                        }
                        return _0x12d801 && void 0x0 !== _0x64ce7e['total'] && (_0x64ce7e[_0xebe41b(0x532)] > 0x0 && (_0x64ce7e[_0xebe41b(0x532)] -= _0x122eb5, _0x64ce7e[_0xebe41b(0x532)] < 0x0 && (_0x64ce7e['total'] = 0x0)), void 0x0 !== _0x45c348['total'] && (_0x45c348[_0xebe41b(0x532)] -= _0x122eb5)), _0x3e47c3;
                    } ['RemoveRandomEgg']() {
                        const _0x4fd7a5 = _0x4269a4;
                        let _0x3ce351 = _0x1a8d79['default'][_0x4fd7a5(0x1043)][_0x4fd7a5(0x14d8)][_0x4fd7a5(0x3fd)];
                        if (void 0x0 === _0x3ce351[_0x1a8d79[_0x4fd7a5(0xd2c)]['Core'][_0x4fd7a5(0x14d8)][_0x4fd7a5(0x1188)]]) return;
                        let _0x11f1c5 = _0x3ce351[_0x1a8d79[_0x4fd7a5(0xd2c)]['Core'][_0x4fd7a5(0x14d8)]['SelectedCharacter']],
                            _0xbbbddb = this[_0x4fd7a5(0x1149)](),
                            _0x8b31f0 = !0x1;
                        return void 0x0 !== _0x11f1c5[_0xbbbddb[_0x4fd7a5(0x226)]] && 0x0 != _0x11f1c5[_0xbbbddb[_0x4fd7a5(0x226)]] && (_0x11f1c5[_0xbbbddb[_0x4fd7a5(0x226)]] -= _0xbbbddb[_0x4fd7a5(0xb81)], _0x8b31f0 = !0x0, 'cooldown' != _0xbbbddb[_0x4fd7a5(0x226)] && _0x11f1c5[_0xbbbddb[_0x4fd7a5(0x226)]] < 0x0 && (_0x11f1c5[_0xbbbddb['name']] = 0x0)), _0x8b31f0 && void 0x0 !== _0x11f1c5[_0x4fd7a5(0x532)] && (_0x11f1c5['total'] > 0x0 && (_0x11f1c5[_0x4fd7a5(0x532)] -= 0x1, _0x11f1c5[_0x4fd7a5(0x532)] < 0x0 && (_0x11f1c5[_0x4fd7a5(0x532)] = 0x0)), void 0x0 !== _0x3ce351[_0x4fd7a5(0x532)] && (_0x3ce351[_0x4fd7a5(0x532)] -= 0x1)), _0xbbbddb;
                    } ['RemoveAllEggs']() {
                        const _0x2491fa = _0x4269a4;
                        let _0x42527e = _0x1a8d79['default']['Core'][_0x2491fa(0x14d8)][_0x2491fa(0x3fd)];
                        void 0x0 !== _0x42527e[_0x1a8d79[_0x2491fa(0xd2c)][_0x2491fa(0x1043)]['PlayerOptions']['SelectedCharacter']] && (_0x42527e[_0x1a8d79[_0x2491fa(0xd2c)]['Core']['PlayerOptions'][_0x2491fa(0x1188)]] = {}, _0x42527e[_0x1a8d79[_0x2491fa(0xd2c)]['Core'][_0x2491fa(0x14d8)][_0x2491fa(0x1188)]][_0x2491fa(0x532)] = 0x0);
                    } ['RemoveBonuses']() {
                        const _0x36ebd6 = _0x4269a4;
                        let _0x44aabf = _0x1a8d79[_0x36ebd6(0xd2c)]['Core'][_0x36ebd6(0x14d8)][_0x36ebd6(0x3fd)];
                        if (void 0x0 === _0x44aabf[_0x1a8d79['default'][_0x36ebd6(0x1043)]['PlayerOptions'][_0x36ebd6(0x1188)]]) return 0x0;
                        let _0x5df525 = _0x44aabf[_0x1a8d79['default'][_0x36ebd6(0x1043)][_0x36ebd6(0x14d8)][_0x36ebd6(0x1188)]],
                            _0x4ef0e7 = _0x1a8d79[_0x36ebd6(0xd2c)][_0x36ebd6(0x1043)][_0x36ebd6(0x10f6)],
                            _0x1d4b28 = _0x1a8d79[_0x36ebd6(0xd2c)][_0x36ebd6(0x1043)]['Magnet'];
                        return _0x4ef0e7['power'] -= _0x5df525[_0x36ebd6(0x31f)] || 0x0, _0x4ef0e7[_0x36ebd6(0x1702)] -= _0x5df525[_0x36ebd6(0x1702)] || 0x0, _0x4ef0e7['speed'] -= _0x5df525[_0x36ebd6(0x78e)] || 0x0, _0x4ef0e7[_0x36ebd6(0xe0e)] -= _0x5df525[_0x36ebd6(0xe0e)] || 0x0, _0x4ef0e7['duration'] -= _0x5df525[_0x36ebd6(0x5ef)] || 0x0, _0x4ef0e7[_0x36ebd6(0x1205)] -= _0x5df525['moveSpeed'] || 0x0, _0x4ef0e7[_0x36ebd6(0x7fc)] -= _0x5df525[_0x36ebd6(0x7fc)] || 0x0, _0x4ef0e7['luck'] -= _0x5df525['luck'] || 0x0, _0x4ef0e7[_0x36ebd6(0xd2e)] -= _0x5df525[_0x36ebd6(0xd2e)] || 0x0, _0x4ef0e7['regen'] -= _0x5df525['regen'] || 0x0, _0x4ef0e7[_0x36ebd6(0x14ab)] -= _0x5df525[_0x36ebd6(0x14ab)] || 0x0, _0x4ef0e7[_0x36ebd6(0x173f)] -= _0x5df525[_0x36ebd6(0x173f)] || 0x0, _0x1d4b28['radius'] -= _0x5df525[_0x36ebd6(0x242)] || 0x0, _0x4ef0e7['amount'] -= Math[_0x36ebd6(0xe07)](_0x5df525[_0x36ebd6(0x9b8)]) || 0x0, _0x4ef0e7[_0x36ebd6(0x8d0)] -= Math[_0x36ebd6(0xe07)](_0x5df525[_0x36ebd6(0x8d0)]) || 0x0, _0x4ef0e7['rerolls'] -= Math[_0x36ebd6(0xe07)](_0x5df525[_0x36ebd6(0x206)]) || 0x0, _0x4ef0e7[_0x36ebd6(0x12ad)] -= Math['floor'](_0x5df525['skips']) || 0x0, _0x4ef0e7[_0x36ebd6(0xc8e)] -= Math[_0x36ebd6(0xe07)](_0x5df525[_0x36ebd6(0xc8e)]) || 0x0, _0x4ef0e7[_0x36ebd6(0x14e0)] -= Math['floor'](_0x5df525[_0x36ebd6(0x14e0)]) || 0x0, _0x5df525['total'];
                    } ['ShowResultAt'](_0x23cff2, _0x5d86ec, _0x5d5969, _0x3a74fd = -0x10, _0x228df4 = -0x10, _0x5de620 = null) {
                        const _0x1e1c4a = _0x4269a4;
                        let _0x58dc35 = _0x23cff2['x'] + _0x3a74fd + Math[_0x1e1c4a(0x9ad)]() * _0x3a74fd,
                            _0x461ddf = _0x23cff2['y'] + _0x228df4 + Math[_0x1e1c4a(0x9ad)]() * _0x228df4,
                            _0x591a36 = _0x5d5969['add'][_0x1e1c4a(0x568)](_0x58dc35, _0x461ddf, 'items', this['lookUpFrame'](_0x5d86ec['name']))[_0x1e1c4a(0x8a2)](0x2)[_0x1e1c4a(0xb4a)](0xc1c),
                            _0x4d08ad = _0x5d5969['add'][_0x1e1c4a(0x758)](_0x58dc35 + 0x20, _0x461ddf, (_0x5d86ec['value'] > 0x0 ? '+' : '') + _0x5d86ec[_0x1e1c4a(0xb81)], {})['setOrigin'](0x0, 0.5)[_0x1e1c4a(0x8a2)](0x2)['setTint'](_0x5de620 || Phaser[_0x1e1c4a(0x24f)][_0x1e1c4a(0x82a)][_0x1e1c4a(0x198c)]([0xffff00, 0xff00, 0xffff]))[_0x1e1c4a(0x1804)](0x2, 0x2, '#000', 0x2, !0x0, !0x0)['setDepth'](0xc1c);
                        _0x5d5969['tweens']['add']({
                            'targets': [_0x591a36, _0x4d08ad],
                            'alpha': 0x0,
                            'y': _0x591a36['y'] - 0x14,
                            'duration': 0x7d0,
                            'onComplete': () => {
                                const _0x29bbe6 = _0x1e1c4a;
                                _0x5d5969[_0x29bbe6(0x3fe)][_0x29bbe6(0x393)](_0x591a36), _0x5d5969['children']['remove'](_0x4d08ad);
                            }
                        });
                    } ['ShowIconAt'](_0x3cfe43, _0x10ec73, _0x14c440, _0x4df5f1 = -0x10, _0x33a060 = -0x10, _0x2d0f6b = null) {
                        const _0x54b8e2 = _0x4269a4;
                        let _0x30d138 = _0x3cfe43['x'] + _0x4df5f1 + Math['random']() * _0x4df5f1,
                            _0x9b95bb = _0x3cfe43['y'] + _0x33a060 + Math[_0x54b8e2(0x9ad)]() * _0x33a060,
                            _0x57ef59 = _0x14c440['add']['image'](_0x30d138, _0x9b95bb, 'items', this[_0x54b8e2(0x19b5)](_0x10ec73['name']))[_0x54b8e2(0x8a2)](0x2)['setDepth'](0xc1c),
                            _0x18a1b0 = _0x14c440[_0x54b8e2(0x18bd)][_0x54b8e2(0x758)](_0x30d138 + 0x20, _0x9b95bb, (_0x10ec73[_0x54b8e2(0xb81)] > 0x0 ? '+' : '') + _0x10ec73[_0x54b8e2(0xb81)], {})['setOrigin'](0x0, 0.5)[_0x54b8e2(0x8a2)](0x2)[_0x54b8e2(0xb34)](_0x2d0f6b || Phaser[_0x54b8e2(0x24f)]['RND']['pick']([0xffff00, 0xff00, 0xffff]))[_0x54b8e2(0x1804)](0x2, 0x2, '#000', 0x2, !0x0, !0x0)[_0x54b8e2(0xb4a)](0xc1c);
                        _0x14c440['tweens']['add']({
                            'targets': [_0x57ef59, _0x18a1b0],
                            'alpha': 0x0,
                            'y': _0x57ef59['y'] - 0x14,
                            'duration': 0x7d0,
                            'onComplete': () => {
                                const _0x1aef5f = _0x54b8e2;
                                _0x14c440[_0x1aef5f(0x3fe)]['remove'](_0x57ef59), _0x14c440['children'][_0x1aef5f(0x393)](_0x18a1b0);
                            }
                        });
                    } ['lookUpFrame'](_0x47e798) {
                        const _0x576b10 = _0x4269a4;
                        switch (_0x47e798) {
                            case 'maxHp':
                                return 'HeartBlack.png';
                            case 'armor':
                                return 'ArmorIron.png';
                            case 'regen':
                                return 'HeartRuby.png';
                            case 'moveSpeed':
                                return 'Wing.png';
                            case 'power':
                                return 'Leaf.png';
                            case 'cooldown':
                                return 'Book2.png';
                            case 'area':
                                return 'Candelabra.png';
                            case 'speed':
                                return 'Gauntlet.png';
                            case 'duration':
                                return 'EmblemEye.png';
                            case 'amount':
                                return 'Ring.png';
                            case 'luck':
                                return 'Clover.png';
                            case 'growth':
                                return 'Crown.png';
                            case 'greed':
                                return 'Mask.png';
                            case 'curse':
                                return 'Curse.png';
                            case 'magnet':
                                return 'OrbGlow.png';
                            case 'revivals':
                                return 'Tiramisu.png';
                            case 'rerolls':
                                return 'Dice.png';
                            case 'skips':
                                return 'Skip.png';
                            case 'banish':
                                return 'Banish.png';
                            case _0xcf2576['default'][_0x576b10(0x1a43)]:
                                return 'Roast.png';
                            case _0xcf2576[_0x576b10(0xd2c)][_0x576b10(0x1a10)]:
                                return 'CoinGold.png';
                            default:
                                return _0x47e798;
                        }
                    }
                }
                _0xb0db8d['EggManager'] = _0x32e710, _0xb0db8d['default'] = _0x32e710;
            };
