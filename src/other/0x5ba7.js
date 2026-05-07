// Module 0x5ba7
// Args: _0x5aa8d9, _0x4995ec, _0x230bf1

export default (_0x5aa8d9, _0x4995ec, _0x230bf1) => {
                'use strict';
                const _0x57d428 = a0_0x6932;
                var _0x14011e = this && this['__importDefault'] || function(_0x1bd77e) {
                    return _0x1bd77e && _0x1bd77e['__esModule'] ? _0x1bd77e : {
                        'default': _0x1bd77e
                    };
                };
                Object['defineProperty'](_0x4995ec, '__esModule', {
                    'value': !0x0
                });
                const _0x2d37f0 = _0x14011e(_0x230bf1(0xd1a1)),
                    _0x1ea724 = _0x14011e(_0x230bf1(0x5f07)),
                    _0x344601 = _0x14011e(_0x230bf1(0x9bda)),
                    _0x4f860f = _0x14011e(_0x230bf1(0xc42e)),
                    _0x356ceb = _0x14011e(_0x230bf1(0x1229)),
                    _0x28ba43 = _0x14011e(_0x230bf1(0x1bf7)),
                    _0x2bdf87 = _0x14011e(_0x230bf1(0x1715a)),
                    _0x210856 = _0x14011e(_0x230bf1(0xc8fd)),
                    _0x130f08 = _0x14011e(_0x230bf1(0xe956)),
                    _0x44ac63 = _0x14011e(_0x230bf1(0x54e3)),
                    _0x40bdce = _0x14011e(_0x230bf1(0x1545b)),
                    _0x5e3888 = _0x14011e(_0x230bf1(0x13de8));
                _0x4995ec['default'] = class {
                    constructor(_0x118dea, _0x3f5c7b) {
                        const _0x36e94e = _0x57d428;
                        this[_0x36e94e(0x13f4)] = 0x0, this[_0x36e94e(0xa3f)] = 0x1f4, this['playDiamond_active'] = !0x1, this[_0x36e94e(0x1a61)] = 0xea60, this[_0x36e94e(0xb9d)] = 0x0, this[_0x36e94e(0x10a2)] = 0x0, this[_0x36e94e(0x6d2)] = _0x118dea, this[_0x36e94e(0x707)] = _0x3f5c7b, this['shootingStarsManager'] = new _0x210856['default'](this['scene'], this['stage']), this[_0x36e94e(0x321)] = new _0x130f08['default'](this[_0x36e94e(0x6d2)], this[_0x36e94e(0x707)]);
                    } ['TriggerEvent'](_0x2df02c) {
                        const _0x37d935 = _0x57d428;
                        let _0x55da70 = _0x2df02c['eventType'],
                            _0x25614c = _0x2df02c['delay'],
                            _0x2f67ca = _0x2df02c[_0x37d935(0xd71)],
                            _0xa8e0d = _0x2df02c[_0x37d935(0x12a4)],
                            _0x4a2d0a = _0x2df02c[_0x37d935(0x5ef)],
                            _0x311acc = _0x2df02c[_0x37d935(0x191b)],
                            _0xe78f08 = _0x2df02c['moreY'],
                            _0x150450 = _0x2df02c[_0x37d935(0x19b8)];
                        return _0x25614c ? (_0x1ea724['default'][_0x37d935(0x1043)]['scene']['time']['addEvent']({
                            'delay': _0x25614c,
                            'loop': !0x1,
                            'repeat': _0xa8e0d,
                            'callback': () => {
                                const _0x40b7ec = _0x37d935;
                                this[_0x40b7ec(0x576)](_0x55da70, _0x2f67ca, _0x4a2d0a, _0x311acc, _0xe78f08, _0x150450);
                            }
                        })['name'] = 'trigger event', !0x1) : this['TriggerSwitchEvent'](_0x55da70, _0x2f67ca, _0x4a2d0a, _0x311acc, _0xe78f08, _0x150450);
                    } ['TriggerSwitchEvent'](_0x397864, _0x451eae, _0x3e337b = 0x0, _0x3afd97 = 0x0, _0x388bf5, _0x5a5639 = 0x0) {
                        const _0x24e215 = _0x57d428;
                        var _0x5ce5d5;
                        switch (_0x397864) {
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x8eb)]:
                                return this['PlayEraseEnemies'](), !0x0;
                            case _0x356ceb[_0x24e215(0xd2c)]['CYCLE_COMPLETE']:
                                return this[_0x24e215(0xd5e)](), !0x0;
                        }
                        if ((_0x397864 != _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x8eb)] || _0x397864 != _0x356ceb[_0x24e215(0xd2c)]['CYCLE_COMPLETE'] || _0x397864 != _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0xaf9)]) && _0x1ea724[_0x24e215(0xd2c)][_0x24e215(0x1043)][_0x24e215(0x1a91)]['length'] > this[_0x24e215(0xa3f)]) return !0x1;
                        var _0x209add = null === (_0x5ce5d5 = _0x1ea724[_0x24e215(0xd2c)][_0x24e215(0x1043)]['Player']) || void 0x0 === _0x5ce5d5 ? void 0x0 : _0x5ce5d5[_0x24e215(0x17b9)];
                        if (void 0x0 === _0x209add && (_0x209add = 0x1), _0x451eae && 0x64 * Math['random']() > _0x451eae * (0x1 / _0x209add)) return !0x1;
                        switch (_0x397864) {
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x8eb)]:
                                this['PlayEraseEnemies']();
                                break;
                            case _0x356ceb['default']['CYCLE_COMPLETE']:
                                this[_0x24e215(0xd5e)]();
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)]['STALKER']:
                                this['PlayStalker'](_0x3e337b, _0x3afd97);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)]['SLEEPER']:
                                this[_0x24e215(0x10a7)](_0x3e337b, _0x3afd97);
                                break;
                            case _0x356ceb['default'][_0x24e215(0x10de)]:
                                this[_0x24e215(0x2bf)](_0x3e337b);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)]['JELLY_WALL']:
                                this[_0x24e215(0x1529)](_0x3e337b, _0x3afd97, _0x388bf5);
                                break;
                            case _0x356ceb['default'][_0x24e215(0x322)]:
                                this['PlayCircle'](_0x3e337b);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x1580)]:
                                this[_0x24e215(0x1ff)](_0x3e337b);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x1a75)]:
                                this[_0x24e215(0x18b)](_0x3e337b);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)]['MEDUSA_SWARM']:
                                this[_0x24e215(0x19fa)](_0x3e337b, _0x3afd97, _0x388bf5);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0xbd6)]:
                                this['PlayMedusaWall'](_0x3e337b, _0x3afd97, _0x388bf5);
                                break;
                            case _0x356ceb['default']['SHADE_BOMB_RED']:
                                this['PlayShadeBomb'](_0x3e337b, 'red', _0x3afd97);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x167d)]:
                                this[_0x24e215(0x1683)](_0x3e337b, _0x3afd97, _0x388bf5);
                                break;
                            case _0x356ceb['default'][_0x24e215(0x12c5)]:
                                this['PlayPileAssault'](_0x3e337b, _0x3afd97, _0x388bf5, _0x5a5639);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x1479)]:
                                this[_0x24e215(0x17f3)](_0x3e337b, _0x3afd97, _0x344601[_0x24e215(0xd2c)]['MIGNO_3_5SWARM']);
                                break;
                            case _0x356ceb['default'][_0x24e215(0x1d1)]:
                                this[_0x24e215(0x17f3)](_0x3e337b, _0x3afd97, _0x344601[_0x24e215(0xd2c)][_0x24e215(0x3cd)]);
                                break;
                            case _0x356ceb['default']['ECTO_SWARM']:
                                this[_0x24e215(0x17f3)](_0x3e337b, _0x3afd97, _0x344601[_0x24e215(0xd2c)][_0x24e215(0x1223)]);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x17d4)]:
                                this[_0x24e215(0x19fa)](_0x3e337b, _0x3afd97, _0x388bf5);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)]['GENERIC_SWARM']:
                                this[_0x24e215(0x17f3)](_0x3e337b, _0x3afd97, _0x388bf5);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x10bc)]:
                                this['PlayDragonStream'](_0x3e337b, _0x3afd97, _0x388bf5, _0x5a5639);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0xbf7)]:
                                this[_0x24e215(0x133e)](_0x3e337b, _0x3afd97, _0x388bf5, _0x5a5639);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)]['TWINS_PILES']:
                                this['PlaySkullPilePile'](_0x3e337b, _0x3afd97, _0x388bf5, _0x5a5639);
                                break;
                            case _0x356ceb['default'][_0x24e215(0x704)]:
                                this[_0x24e215(0xb9f)](_0x3e337b, _0x3afd97, _0x388bf5, _0x5a5639);
                                break;
                            case _0x356ceb['default'][_0x24e215(0x49f)]:
                                this['PlayCircle'](_0x3e337b, _0x3afd97, _0x344601[_0x24e215(0xd2c)][_0x24e215(0x1459)], 0.7);
                                break;
                            case _0x356ceb['default'][_0x24e215(0xfe2)]:
                                this['PlaySwarm'](_0x3e337b, _0x3afd97, _0x344601[_0x24e215(0xd2c)]['IMP']);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x114b)]:
                                this['PlaySwarm'](_0x3e337b, _0x3afd97, _0x388bf5);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x9eb)]:
                                this['ShootStars'](_0x3e337b, _0x3afd97, _0x388bf5, _0x5a5639);
                                break;
                            case _0x356ceb['default']['SHOOTING_STAR2']:
                                this[_0x24e215(0x295)](_0x3e337b, _0x3afd97, _0x388bf5, _0x5a5639);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x13d5)]:
                                this['PlayVerticalSwarm'](_0x3e337b, _0x3afd97, _0x388bf5);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)]['GENERIC_CIRCLE']:
                                this['PlayCircle'](_0x3e337b, _0x3afd97, _0x388bf5, _0x5a5639);
                                break;
                            case _0x356ceb['default'][_0x24e215(0x1739)]:
                                this[_0x24e215(0x19e9)](_0x3e337b, _0x3afd97, _0x388bf5, _0x5a5639);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0xe59)]:
                                this['PlayDiamond_Square'](_0x3e337b, _0x3afd97, _0x388bf5, _0x5a5639);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)]['DIAMOND_ROAD']:
                                this[_0x24e215(0xb9b)](_0x3e337b, _0x3afd97, _0x388bf5, _0x5a5639);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x77e)]:
                                this['PlayDiamond_Concrete'](_0x3e337b, _0x3afd97, _0x388bf5, _0x5a5639);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x9ce)]:
                                this['PlayDiamond_RandomPattern'](_0x3e337b, _0x3afd97, _0x388bf5, _0x5a5639);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x13b0)]:
                                this[_0x24e215(0x1628)]();
                                break;
                            case _0x356ceb['default'][_0x24e215(0x1a87)]:
                                this[_0x24e215(0x898)]();
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x4a7)]:
                                this['fnChicken']();
                                break;
                            case _0x356ceb['default'][_0x24e215(0x1907)]:
                                this['fnGoldFever']();
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x17d9)]:
                                this['fnPassive']();
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x1270)]:
                                this[_0x24e215(0xd77)]();
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x69a)]:
                                this['fn_Nduja']();
                                break;
                            case _0x356ceb['default']['LUCK_BOOST']:
                                this[_0x24e215(0x1118)]();
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)]['CURSE_BOOST']:
                                this[_0x24e215(0x190a)]();
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)]['ULTRA_WAVE']:
                                this[_0x24e215(0xc50)]();
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)]['SUMMON_MOLISE']:
                                this['fnSummonMolise']();
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)]['SUMMON_NIGHT']:
                                this['fnSummonNight']();
                                break;
                            case _0x356ceb['default'][_0x24e215(0x9b4)]:
                                this[_0x24e215(0x1713)]();
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)]['CANDYBOX']:
                                this['fnCandybox']();
                                break;
                            case _0x356ceb['default'][_0x24e215(0x14ca)]:
                                this[_0x24e215(0x1798)](_0x3e337b);
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x815)]:
                                this['fnCrabFest']();
                                break;
                            case _0x356ceb[_0x24e215(0xd2c)][_0x24e215(0x1075)]:
                                this[_0x24e215(0x18c6)]();
                        }
                        return !0x0;
                    } ['Update'](_0x8a09a3) {
                        const _0x38fc8f = _0x57d428;
                        if (this[_0x38fc8f(0x1688)]['Update'](_0x8a09a3), this['shootingStarsManager2']['Update'](_0x8a09a3), this['playDiamond_active']) {
                            let _0xf97d2a = 0x20,
                                _0x4e2fb8 = 0x20,
                                _0x33574f = this[_0x38fc8f(0xc2a)][0x0][_0x38fc8f(0xed9)] - 0x1,
                                _0x5cf2b2 = this[_0x38fc8f(0xc2a)]['length'] - 0x1,
                                _0x5176e3 = Math['round']((_0x1ea724[_0x38fc8f(0xd2c)][_0x38fc8f(0x1043)][_0x38fc8f(0x10f6)]['x'] - this[_0x38fc8f(0x120a)]) / _0xf97d2a),
                                _0x43ed85 = Math[_0x38fc8f(0x893)]((_0x1ea724[_0x38fc8f(0xd2c)][_0x38fc8f(0x1043)]['Player']['y'] - this[_0x38fc8f(0x1561)]) / _0x4e2fb8);
                            if (this[_0x38fc8f(0xb9d)] != _0x5176e3 || this[_0x38fc8f(0x10a2)] != _0x43ed85) {
                                this[_0x38fc8f(0xb9d)] = _0x5176e3, this['playDiamond_playerAtGridPrevY'] = _0x43ed85;
                                var _0x656203 = this['stage']['pools']['find'](_0x50f1b0 => _0x50f1b0[_0x38fc8f(0xe49)] === _0x344601[_0x38fc8f(0xd2c)][_0x38fc8f(0x54a)]);
                                _0x656203 || (_0x656203 = new _0x2d37f0['default'](this[_0x38fc8f(0x6d2)], _0x344601[_0x38fc8f(0xd2c)]['EX_DIAMOND']), this[_0x38fc8f(0x707)]['pools']['push'](_0x656203)), _0x656203[_0x38fc8f(0x151c)] = !0x1;
                                let _0x54b5bf = Math['round'](Math[_0x38fc8f(0x1084)](Math[_0x38fc8f(0x1981)](_0x5176e3 - 0xf, 0x0), _0x33574f)),
                                    _0x1c37f4 = Math[_0x38fc8f(0x893)](Math['min'](Math['max'](_0x43ed85 - 0xf, 0x0), _0x5cf2b2)),
                                    _0x44c84c = Math[_0x38fc8f(0x893)](Math[_0x38fc8f(0x1084)](Math['max'](_0x54b5bf + 0x1e, 0x0), _0x33574f)),
                                    _0x49b010 = Math['round'](Math[_0x38fc8f(0x1084)](Math[_0x38fc8f(0x1981)](_0x1c37f4 + 0x1e, 0x0), _0x5cf2b2));
                                for (let _0xa29060 = 0x0; _0xa29060 < _0x5cf2b2; _0xa29060++)
                                    for (let _0x4f8d9f = 0x0; _0x4f8d9f < _0x33574f; _0x4f8d9f++) _0xa29060 < _0x1c37f4 || _0xa29060 > _0x49b010 || _0x4f8d9f < _0x54b5bf || _0x4f8d9f > _0x44c84c ? -0x1 == this[_0x38fc8f(0xc2a)][_0xa29060][_0x4f8d9f] && (this[_0x38fc8f(0xc2a)][_0xa29060][_0x4f8d9f] = 0x0, this['playDiamond_enemyGrid'][_0xa29060][_0x4f8d9f] && (this['playDiamond_enemyGrid'][_0xa29060][_0x4f8d9f]['gridX'] == _0x4f8d9f && this['playDiamond_enemyGrid'][_0xa29060][_0x4f8d9f][_0x38fc8f(0x936)] == _0xa29060 && this['playDiamond_enemyGrid'][_0xa29060][_0x4f8d9f][_0x38fc8f(0x14fb)](), this[_0x38fc8f(0xb31)][_0xa29060][_0x4f8d9f] = null, this[_0x38fc8f(0x13f4)] -= 0x1)) : 0x0 == this['playDiamond_grid'][_0xa29060][_0x4f8d9f] && (this[_0x38fc8f(0xc2a)][_0xa29060][_0x4f8d9f] = -0x1, this[_0x38fc8f(0xb31)][_0xa29060][_0x4f8d9f] = _0x656203[_0x38fc8f(0xada)](this['playDiamond_gridStartX'] + _0xf97d2a * _0x4f8d9f, this[_0x38fc8f(0x1561)] + _0x4e2fb8 * _0xa29060), this[_0x38fc8f(0xb31)][_0xa29060][_0x4f8d9f][_0x38fc8f(0xb8e)] = this['playDiamond_duratiion'], this['playDiamond_enemyGrid'][_0xa29060][_0x4f8d9f][_0x38fc8f(0xc66)] = _0x4f8d9f, this[_0x38fc8f(0xb31)][_0xa29060][_0x4f8d9f]['gridY'] = _0xa29060, this['spawned'] += 0x1);
                            }
                        }
                    } ['ShootStars'](_0x5ca670, _0x15df0a, _0x46d482, _0x235d29) {
                        const _0x4807c2 = _0x57d428;
                        this[_0x4807c2(0x1688)]['AimRandom'](_0x15df0a, _0x46d482, _0x235d29);
                    } ['ShootStars2'](_0x50bb53, _0x29803e, _0x2a18c3, _0x1f48ea) {
                        const _0x11f727 = _0x57d428;
                        this[_0x11f727(0x321)]['AimRandom'](_0x29803e, _0x2a18c3, _0x1f48ea);
                    } ['PlayJellyfish'](_0x475cdc, _0x5c05f8 = 0x50, _0x5cec5e = _0x344601['default']['JELLYFISH']) {
                        const _0x10a6e1 = _0x57d428;
                        _0x475cdc = _0x475cdc || 0xea60;
                        var _0x1e85f8 = this['stage'][_0x10a6e1(0x19e1)]['find'](_0x31dea0 => _0x31dea0[_0x10a6e1(0xe49)] === _0x5cec5e);
                        _0x1e85f8 || (_0x1e85f8 = new _0x2d37f0[(_0x10a6e1(0xd2c))](this[_0x10a6e1(0x6d2)], _0x5cec5e), this[_0x10a6e1(0x707)][_0x10a6e1(0x19e1)]['push'](_0x1e85f8)), _0x1e85f8[_0x10a6e1(0x151c)] = !0x1;
                        let _0x49a7eb = 0x2 * Math['PI'] * Math[_0x10a6e1(0x9ad)](),
                            _0x2fb728 = new Array();
                        for (let _0x2d7faf = 0x0; _0x2d7faf < _0x5c05f8; _0x2d7faf++) {
                            let _0x3078c0 = _0x1ea724[_0x10a6e1(0xd2c)][_0x10a6e1(0x1043)]['Player']['x'] + 0.6 * Math[_0x10a6e1(0xd7e)](_0x49a7eb) * (0.9 * this[_0x10a6e1(0x6d2)][_0x10a6e1(0x12f9)]['width']),
                                _0x1bbddb = _0x1ea724['default'][_0x10a6e1(0x1043)][_0x10a6e1(0x10f6)]['y'] + 0.6 * Math['sin'](_0x49a7eb) * (0.9 * this[_0x10a6e1(0x6d2)]['renderer']['height']);
                            _0x49a7eb += Math['PI'] / 0x28;
                            let _0x40789e = _0x1e85f8[_0x10a6e1(0xada)](_0x3078c0, _0x1bbddb);
                            _0x40789e['isCullable'] = !0x1, _0x2fb728[_0x10a6e1(0x1564)](_0x40789e), this['spawned']++;
                        }
                        _0x1ea724[_0x10a6e1(0xd2c)][_0x10a6e1(0x1043)]['scene'][_0x10a6e1(0x915)]['addEvent']({
                            'delay': _0x475cdc,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x45510c = _0x10a6e1;
                                this[_0x45510c(0x13f4)] -= _0x5c05f8, _0x2fb728[_0x45510c(0x858)](_0x1245d7 => {
                                    const _0x54774a = _0x45510c;
                                    _0x1245d7[_0x54774a(0xdae)] || (_0x1245d7['isCullable'] = !0x0, _0x1245d7['Disappear']());
                                });
                            }
                        })[_0x10a6e1(0x226)] = 'Jellyfish disappear';
                    } ['PlayPolterRoulette'](_0x58b9a5 = 0xea60, _0x24b5dd = 0x32, _0x1843a5 = _0x344601['default']['POLTER_DEST'], _0x3ba7a4 = 0x1) {
                        const _0x160565 = _0x57d428;
                        var _0x1a9db2 = this['stage']['pools'][_0x160565(0x1e6)](_0x36aff7 => _0x36aff7['enemyType'] === _0x1843a5);
                        _0x1a9db2 || (_0x1a9db2 = new _0x2d37f0[(_0x160565(0xd2c))](this['scene'], _0x1843a5), this[_0x160565(0x707)][_0x160565(0x19e1)][_0x160565(0x1564)](_0x1a9db2)), _0x1a9db2[_0x160565(0x151c)] = !0x1;
                        let _0x5cf508 = 0x2 * Math['PI'] * Math['random'](),
                            _0x7d72df = new Array(),
                            _0x590e0f = [];
                        for (let _0x28792d = 0x0; _0x28792d < _0x3ba7a4; _0x28792d++) _0x590e0f[_0x160565(0x1564)](Math['floor'](Math[_0x160565(0x9ad)]() * _0x24b5dd));
                        let _0x544f93 = 0x0;
                        for (let _0x13c1c4 = 0x0; _0x13c1c4 < _0x24b5dd; _0x13c1c4++) {
                            let _0x4927a1 = _0x1ea724[_0x160565(0xd2c)]['Core'][_0x160565(0x10f6)]['x'] + 0.6 * Math['cos'](_0x5cf508) * (0.85 * this[_0x160565(0x6d2)][_0x160565(0x12f9)]['width']),
                                _0x4913ee = _0x1ea724[_0x160565(0xd2c)]['Core'][_0x160565(0x10f6)]['y'] + 0.6 * Math['sin'](_0x5cf508) * (0.85 * this[_0x160565(0x6d2)]['renderer']['height']);
                            if (_0x5cf508 += Math['PI'] / (0.5 * _0x24b5dd), !_0x1ea724[_0x160565(0xd2c)][_0x160565(0x1043)]['Stage'][_0x160565(0xbef)] || !_0x1ea724['default'][_0x160565(0x1043)]['Stage']['tilingTileset']['isPointWithinCollisionLayer'](_0x4927a1, _0x4913ee)) {
                                if (-0x1 === _0x590e0f[_0x160565(0x1303)](_0x13c1c4)) {
                                    let _0x45a30e = _0x1a9db2[_0x160565(0xada)](_0x4927a1, _0x4913ee);
                                    _0x45a30e['isCullable'] = !0x1, _0x7d72df['push'](_0x45a30e), _0x544f93++, this[_0x160565(0x13f4)]++;
                                } else _0x1ea724[_0x160565(0xd2c)]['Core']['MakeDestructible'](_0x1ea724['default']['Core']['Stage'][_0x160565(0x1083)], _0x4927a1, _0x4913ee);
                            }
                        }
                        _0x1ea724[_0x160565(0xd2c)][_0x160565(0x1043)][_0x160565(0x6d2)][_0x160565(0x915)]['addEvent']({
                            'delay': _0x58b9a5,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x17248c = _0x160565;
                                this[_0x17248c(0x13f4)] -= _0x544f93, _0x7d72df[_0x17248c(0x858)](_0x27edc6 => {
                                    const _0x2ccf0c = _0x17248c;
                                    _0x27edc6[_0x2ccf0c(0xdae)] || (_0x27edc6['isCullable'] = !0x0, _0x27edc6[_0x2ccf0c(0xe00)]());
                                });
                            }
                        })[_0x160565(0x226)] = 'POLTER disappear';
                    } ['PlayCircle'](_0x4a6fbc, _0x2dde45 = 0x64, _0x2e6e0a = _0x344601['default']['FLOWER'], _0x100082 = 0.9) {
                        const _0x3a274a = _0x57d428;
                        _0x4a6fbc = _0x4a6fbc || 0xea60;
                        var _0x5dc065 = this['stage']['pools']['find'](_0x5a86d5 => _0x5a86d5[_0x3a274a(0xe49)] === _0x2e6e0a);
                        _0x5dc065 || (_0x5dc065 = new _0x2d37f0[(_0x3a274a(0xd2c))](this[_0x3a274a(0x6d2)], _0x2e6e0a), this[_0x3a274a(0x707)]['pools'][_0x3a274a(0x1564)](_0x5dc065)), _0x5dc065[_0x3a274a(0x151c)] = !0x1;
                        let _0x523631 = 0x2 * Math['PI'] * Math[_0x3a274a(0x9ad)](),
                            _0x31423c = new Array();
                        for (let _0x4172a7 = 0x0; _0x4172a7 < _0x2dde45; _0x4172a7++) {
                            let _0x2f3344 = _0x1ea724[_0x3a274a(0xd2c)][_0x3a274a(0x1043)]['Player']['x'] + 0.8 * Math[_0x3a274a(0xd7e)](_0x523631) * (this[_0x3a274a(0x6d2)][_0x3a274a(0x12f9)]['width'] * _0x100082),
                                _0x15288e = _0x1ea724[_0x3a274a(0xd2c)][_0x3a274a(0x1043)][_0x3a274a(0x10f6)]['y'] + 0.8 * Math[_0x3a274a(0xc80)](_0x523631) * (this[_0x3a274a(0x6d2)][_0x3a274a(0x12f9)][_0x3a274a(0x140e)] * _0x100082);
                            _0x523631 += Math['PI'] / (0.5 * _0x2dde45);
                            let _0x2bad20 = _0x5dc065['SpawnAt'](_0x2f3344, _0x15288e);
                            _0x2bad20['isCullable'] = !0x1, _0x31423c[_0x3a274a(0x1564)](_0x2bad20), this[_0x3a274a(0x13f4)]++;
                        }
                        _0x1ea724[_0x3a274a(0xd2c)][_0x3a274a(0x1043)][_0x3a274a(0x6d2)][_0x3a274a(0x915)]['addEvent']({
                            'delay': _0x4a6fbc,
                            'loop': !0x1,
                            'callback': () => {
                                _0x31423c['forEach'](_0x5ac214 => {
                                    const _0x5eaa77 = a0_0x6932;
                                    this['spawned']--, _0x5ac214['isDead'] || (_0x5ac214['isCullable'] = !0x0, _0x5ac214['Disappear']());
                                });
                            }
                        })[_0x3a274a(0x226)] = 'flower disappear';
                    } ['SpawnInSteps'](_0x4f19f5, _0x343653 = 0x18, _0x25c205 = _0x344601['default']['EX_AXE_BAT3'], _0x232bfd = 0.9) {
                        const _0xde45c1 = _0x57d428;
                        _0x4f19f5 = _0x4f19f5 || 0x2710;
                        var _0x1b99e4 = this[_0xde45c1(0x707)]['pools']['find'](_0x111bc7 => _0x111bc7['enemyType'] === _0x25c205);
                        _0x1b99e4 || (_0x1b99e4 = new _0x2d37f0['default'](this[_0xde45c1(0x6d2)], _0x25c205), this[_0xde45c1(0x707)]['pools'][_0xde45c1(0x1564)](_0x1b99e4));
                        let _0x113e67 = new Array();
                        _0x1b99e4[_0xde45c1(0x151c)] = !0x1;
                        let _0x4b7306 = 0x0;
                        _0x1ea724[_0xde45c1(0xd2c)][_0xde45c1(0x1043)][_0xde45c1(0x6d2)][_0xde45c1(0x915)][_0xde45c1(0x12b8)]({
                            'delay': _0x4f19f5 / _0x343653,
                            'loop': !0x1,
                            'repeat': _0x343653,
                            'callback': () => {
                                const _0x192fd7 = _0xde45c1;
                                let _0x9a4fa = this[_0x192fd7(0x6d2)]['renderer'][_0x192fd7(0x173c)] / _0x343653,
                                    _0x1ca236 = _0x1ea724['default'][_0x192fd7(0x1043)]['Player']['x'] - 0.5 * this[_0x192fd7(0x6d2)]['renderer']['width'],
                                    _0xd7d779 = _0x1ea724[_0x192fd7(0xd2c)]['Core'][_0x192fd7(0x10f6)]['y'] + 0x30 + 0.5 * this[_0x192fd7(0x6d2)]['renderer']['height'],
                                    _0xb55a17 = _0x1ca236 + _0x9a4fa * _0x4b7306,
                                    _0x2e45c1 = _0x1b99e4['SpawnAt'](_0xb55a17, _0xd7d779);
                                this[_0x192fd7(0x13f4)]++, _0x4b7306++, _0x113e67['push'](_0x2e45c1);
                            }
                        }), _0x1ea724['default']['Core'][_0xde45c1(0x6d2)][_0xde45c1(0x915)][_0xde45c1(0x12b8)]({
                            'delay': _0x4f19f5 + 0x7530,
                            'loop': !0x1,
                            'callback': () => {
                                this['spawned'] -= _0x343653, _0x113e67['forEach'](_0xa5c1a1 => {
                                    const _0x2c080a = a0_0x6932;
                                    _0xa5c1a1['isDead'] || (_0xa5c1a1['isCullable'] = !0x0, _0xa5c1a1['Disappear']());
                                });
                            }
                        });
                    } ['PlayBatSwarm'](_0x25959e) {
                        const _0x315491 = _0x57d428;
                        _0x25959e = _0x25959e || 0x2710;
                        var _0x595ca3 = this[_0x315491(0x707)][_0x315491(0x19e1)]['find'](_0x2daa98 => _0x2daa98['enemyType'] === _0x344601['default'][_0x315491(0x2c6)]);
                        _0x595ca3 || (_0x595ca3 = new _0x2d37f0['default'](this[_0x315491(0x6d2)], _0x344601['default']['BATSWARM']), this['stage'][_0x315491(0x19e1)]['push'](_0x595ca3)), _0x595ca3['enabled'] = !0x1;
                        let _0x22619d = 0x2 * Math['PI'] * Math['random'](),
                            _0x6271db = new Array();
                        for (let _0x22715b = 0x0; _0x22715b < 0x32; _0x22715b++) {
                            let _0x893474 = _0x1ea724['default']['Core']['Player']['x'] + 0.8 * Math[_0x315491(0xd7e)](_0x22619d) * (0.9 * this['scene'][_0x315491(0x12f9)]['width']),
                                _0x155fb3 = _0x1ea724[_0x315491(0xd2c)]['Core']['Player']['y'] + 0.8 * Math['sin'](_0x22619d) * (0.9 * this['scene']['renderer']['height']);
                            _0x22619d += Math['PI'] / 0x1f4;
                            let _0x395cc3 = _0x595ca3['SpawnAt'](_0x893474, _0x155fb3);
                            _0x395cc3['isCullable'] = !0x1, _0x6271db[_0x315491(0x1564)](_0x395cc3), this[_0x315491(0x13f4)]++;
                        }
                        _0x1ea724['default']['Core']['scene']['time'][_0x315491(0x12b8)]({
                            'delay': _0x25959e,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x21cc6c = _0x315491;
                                _0x6271db[_0x21cc6c(0x858)](_0xbbf444 => {
                                    const _0x157767 = _0x21cc6c;
                                    this['spawned']--, _0xbbf444[_0x157767(0xdae)] || (_0xbbf444['isCullable'] = !0x0, _0xbbf444['Disappear']());
                                });
                            }
                        })[_0x315491(0x226)] = 'batswarm disappear';
                    } ['PlayDragonStream'](_0x5a974, _0x2ec4b1 = 0xc, _0x4416a1 = _0x344601['default']['XLDRAGON1_FLAG'], _0x185673 = 0x4) {
                        const _0xa07b83 = _0x57d428;
                        _0x5a974 = _0x5a974 || 0xea60;
                        var _0x5a3a07 = this['stage'][_0xa07b83(0x19e1)]['find'](_0x3cbe10 => _0x3cbe10[_0xa07b83(0xe49)] === _0x4416a1);
                        _0x5a3a07 || (_0x5a3a07 = new _0x2d37f0[(_0xa07b83(0xd2c))](this[_0xa07b83(0x6d2)], _0x4416a1), this[_0xa07b83(0x707)][_0xa07b83(0x19e1)]['push'](_0x5a3a07)), _0x5a3a07[_0xa07b83(0x151c)] = !0x1;
                        let _0x10fcf6 = new Array();
                        var _0x216c2f = _0x1ea724['default']['Core'][_0xa07b83(0x10f6)]['lastFacedDirection'][_0xa07b83(0x1650)](Phaser['Math'][_0xa07b83(0x1551)]['UP']) >= 0x0 ? _0x1ea724['default'][_0xa07b83(0x1043)][_0xa07b83(0x17c7)]['rectOuter']['y'] : _0x1ea724[_0xa07b83(0xd2c)]['Core'][_0xa07b83(0x17c7)][_0xa07b83(0x11e4)]['y'] + _0x1ea724['default'][_0xa07b83(0x1043)][_0xa07b83(0x17c7)][_0xa07b83(0x11e4)][_0xa07b83(0x140e)];
                        _0x216c2f += _0x1ea724['default'][_0xa07b83(0x1043)][_0xa07b83(0x10f6)]['y'];
                        let _0x47002c = Math[_0xa07b83(0xe07)](_0x5a974 / _0x2ec4b1),
                            _0x181a9f = 0x0;
                        _0x1ea724[_0xa07b83(0xd2c)][_0xa07b83(0x1043)]['scene'][_0xa07b83(0x915)][_0xa07b83(0x12b8)]({
                            'delay': _0x47002c,
                            'repeat': _0x2ec4b1,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x1430b2 = _0xa07b83;
                                let _0x598ea3 = _0x181a9f % 0x2 == 0x0 ? _0x1ea724[_0x1430b2(0xd2c)][_0x1430b2(0x1043)]['Stage']['rectOuter']['x'] : _0x1ea724[_0x1430b2(0xd2c)][_0x1430b2(0x1043)]['Stage'][_0x1430b2(0x11e4)]['x'] + _0x1ea724[_0x1430b2(0xd2c)]['Core']['Stage']['rectOuter']['width'];
                                _0x181a9f++;
                                for (let _0x1f26e7 = 0x0; _0x1f26e7 < _0x185673; _0x1f26e7++) {
                                    let _0x495534 = _0x1ea724[_0x1430b2(0xd2c)][_0x1430b2(0x1043)][_0x1430b2(0x10f6)]['x'] + _0x598ea3,
                                        _0x46cc3d = _0x216c2f + 0x8 * (_0x1f26e7 - 0.5 * _0x185673),
                                        _0x1e79a4 = _0x5a3a07[_0x1430b2(0xada)](_0x495534, _0x46cc3d);
                                    _0x1e79a4 && (_0x1e79a4[_0x1430b2(0x177d)] = !0x1, _0x1e79a4['speed'] = 1.5 * _0x1e79a4[_0x1430b2(0x78e)], _0x10fcf6[_0x1430b2(0x1564)](_0x1e79a4), this[_0x1430b2(0x13f4)]++);
                                }
                            }
                        }), _0x1ea724[_0xa07b83(0xd2c)][_0xa07b83(0x1043)][_0xa07b83(0x6d2)][_0xa07b83(0x915)][_0xa07b83(0x12b8)]({
                            'delay': _0x5a974,
                            'loop': !0x1,
                            'callback': () => {
                                _0x10fcf6['forEach'](_0x4123c8 => {
                                    const _0x2ce8d7 = a0_0x6932;
                                    this['spawned']--, _0x4123c8['isDead'] || (_0x4123c8['isCullable'] = !0x0, _0x4123c8['Disappear']());
                                });
                            }
                        })['name'] = 'dragonstream disappear';
                    } ['PlaySkeleStream'](_0x2e3bc0, _0x75bef9 = 0xc, _0x31fd2f = _0x344601['default']['XLDRAGON3_FLAG'], _0x2d4c61 = 0x4) {
                        const _0x3eafa3 = _0x57d428;
                        _0x2e3bc0 = _0x2e3bc0 || 0x4e20;
                        var _0x42956d = this[_0x3eafa3(0x707)][_0x3eafa3(0x19e1)]['find'](_0x4cd07e => _0x4cd07e[_0x3eafa3(0xe49)] === _0x31fd2f);
                        _0x42956d || (_0x42956d = new _0x2d37f0['default'](this['scene'], _0x31fd2f), this['stage']['pools'][_0x3eafa3(0x1564)](_0x42956d)), _0x42956d[_0x3eafa3(0x151c)] = !0x1;
                        let _0x15b3c8 = new Array();
                        var _0x21a3ac = 0.5 * (_0x1ea724['default'][_0x3eafa3(0x1043)]['Player'][_0x3eafa3(0x115d)][_0x3eafa3(0x1650)](Phaser['Math'][_0x3eafa3(0x1551)]['UP']) >= 0x0 ? _0x1ea724[_0x3eafa3(0xd2c)][_0x3eafa3(0x1043)][_0x3eafa3(0x17c7)][_0x3eafa3(0x11e4)]['y'] : _0x1ea724[_0x3eafa3(0xd2c)][_0x3eafa3(0x1043)][_0x3eafa3(0x17c7)]['rectOuter']['y'] + _0x1ea724[_0x3eafa3(0xd2c)]['Core'][_0x3eafa3(0x17c7)][_0x3eafa3(0x11e4)]['height']);
                        _0x21a3ac += _0x1ea724[_0x3eafa3(0xd2c)]['Core']['Player']['y'];
                        for (let _0x3deb8c = 0x0; _0x3deb8c < _0x2d4c61; _0x3deb8c++) {
                            let _0x50acd9 = _0x3deb8c % 0x2 == 0x0 ? _0x1ea724[_0x3eafa3(0xd2c)][_0x3eafa3(0x1043)][_0x3eafa3(0x17c7)][_0x3eafa3(0x11e4)]['x'] : _0x1ea724[_0x3eafa3(0xd2c)][_0x3eafa3(0x1043)]['Stage'][_0x3eafa3(0x11e4)]['x'] + _0x1ea724[_0x3eafa3(0xd2c)][_0x3eafa3(0x1043)][_0x3eafa3(0x17c7)]['rectOuter']['width'],
                                _0x2f842d = _0x1ea724['default'][_0x3eafa3(0x1043)][_0x3eafa3(0x10f6)]['x'] + _0x50acd9,
                                _0xf8c09 = _0x21a3ac + 0x8 * (_0x3deb8c - 0.5 * _0x2d4c61),
                                _0x46b9fe = _0x42956d['SpawnAt'](_0x2f842d, _0xf8c09);
                            _0x46b9fe[_0x3eafa3(0x177d)] = !0x1, _0x15b3c8['push'](_0x46b9fe), this[_0x3eafa3(0x13f4)]++;
                        }
                        _0x1ea724['default'][_0x3eafa3(0x1043)][_0x3eafa3(0x6d2)][_0x3eafa3(0x915)][_0x3eafa3(0x12b8)]({
                            'delay': _0x2e3bc0,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x21b0e2 = _0x3eafa3;
                                _0x15b3c8[_0x21b0e2(0x858)](_0x34fdb4 => {
                                    const _0x59f22f = _0x21b0e2;
                                    this['spawned']--, _0x34fdb4['isDead'] || (_0x34fdb4['isCullable'] = !0x0, _0x34fdb4[_0x59f22f(0xe00)]());
                                });
                            }
                        })['name'] = 'PlaySkeleStream disappear';
                    } ['PlaySkullPilePile'](_0x105b4b, _0x57bba = 0x1, _0x4b640f = _0x344601['default']['PILE4_SCALED'], _0x264f94 = 0xc) {
                        const _0x1b20d5 = _0x57d428;
                        _0x105b4b = _0x105b4b || 0x7530;
                        var _0x2c6b13 = this[_0x1b20d5(0x707)][_0x1b20d5(0x19e1)][_0x1b20d5(0x1e6)](_0x3b193a => _0x3b193a[_0x1b20d5(0xe49)] === _0x4b640f);
                        _0x2c6b13 || (_0x2c6b13 = new _0x2d37f0[(_0x1b20d5(0xd2c))](this['scene'], _0x4b640f), this[_0x1b20d5(0x707)]['pools'][_0x1b20d5(0x1564)](_0x2c6b13)), _0x2c6b13[_0x1b20d5(0x151c)] = !0x1;
                        let _0x57341a = new Array();
                        _0x1ea724[_0x1b20d5(0xd2c)]['Core']['Player'][_0x1b20d5(0x115d)]['dot'](Phaser[_0x1b20d5(0x24f)][_0x1b20d5(0x1551)]['UP']);
                        var _0x3b12b9 = _0x1ea724['default']['Core']['Player']['y'] + 1.5 * this['scene'][_0x1b20d5(0x12f9)]['height'];
                        let _0x17138a = 0x3 * _0x1ea724['default']['Core'][_0x1b20d5(0x17c7)][_0x1b20d5(0x11e4)][_0x1b20d5(0x140e)] / 0x22,
                            _0x37f562 = 0x3 * this[_0x1b20d5(0x6d2)]['renderer'][_0x1b20d5(0x140e)] / _0x17138a;
                        for (let _0x5c3cd6 = 0x0; _0x5c3cd6 < _0x57bba; _0x5c3cd6++) {
                            let _0x4df769 = 0x0;
                            _0x1ea724['default'][_0x1b20d5(0x1043)][_0x1b20d5(0x6d2)][_0x1b20d5(0x915)][_0x1b20d5(0x12b8)]({
                                'delay': 0x1e,
                                'repeat': _0x17138a - 0x1,
                                'loop': !0x1,
                                'callback': () => {
                                    const _0x1b1497 = _0x1b20d5;
                                    let _0xd4e7d = 0.65 * (_0x4df769 % 0x2 == 0x0 ? _0x1ea724['default'][_0x1b1497(0x1043)]['Stage']['rectOuter']['x'] - 0x20 * _0x5c3cd6 : _0x1ea724['default']['Core']['Stage']['rectOuter']['x'] + _0x1ea724['default']['Core'][_0x1b1497(0x17c7)]['rectOuter'][_0x1b1497(0x173c)] + 0x20 * _0x5c3cd6),
                                        _0x5c79d1 = _0x1ea724[_0x1b1497(0xd2c)]['Core'][_0x1b1497(0x10f6)]['x'] + _0xd4e7d,
                                        _0x15dd08 = 0x10 * _0x5c3cd6 + _0x3b12b9 - _0x37f562 * _0x4df769,
                                        _0x515b96 = _0x2c6b13[_0x1b1497(0xada)](_0x5c79d1, _0x15dd08);
                                    _0x515b96[_0x1b1497(0x177d)] = !0x1, _0x515b96['speed'] = 0x0, _0x57341a[_0x1b1497(0x1564)](_0x515b96), this[_0x1b1497(0x13f4)]++, _0x4df769++;
                                }
                            });
                        }
                        _0x1ea724['default']['Core']['scene']['time']['addEvent']({
                            'delay': _0x105b4b,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x3e3967 = _0x1b20d5;
                                _0x57341a[_0x3e3967(0x858)](_0x28ab8c => {
                                    const _0x6553dd = _0x3e3967;
                                    this[_0x6553dd(0x13f4)]--, _0x28ab8c[_0x6553dd(0xdae)] || (_0x28ab8c[_0x6553dd(0x177d)] = !0x0, _0x28ab8c[_0x6553dd(0xe00)]());
                                });
                            }
                        })[_0x1b20d5(0x226)] = 'PlaySkullPilePile disappear';
                    } ['PlayMedusaSwarm'](_0x42ba86, _0x2b8927 = 0x1, _0x58a904 = _0x344601['default']['MEDUSA1']) {
                        const _0x5ce484 = _0x57d428;
                        _0x42ba86 = _0x42ba86 || 0x3a98;
                        var _0x955686 = this[_0x5ce484(0x707)][_0x5ce484(0x19e1)]['find'](_0x2fea27 => _0x2fea27[_0x5ce484(0xe49)] === _0x58a904);
                        _0x955686 || (_0x955686 = new _0x2d37f0[(_0x5ce484(0xd2c))](this['scene'], _0x58a904), this['stage'][_0x5ce484(0x19e1)][_0x5ce484(0x1564)](_0x955686)), _0x955686[_0x5ce484(0x151c)] = !0x1;
                        let _0x2a1e78 = new Array();
                        var _0x5ac345 = Math[_0x5ce484(0x9ad)]() < 0.5 ? _0x1ea724[_0x5ce484(0xd2c)]['Core']['Stage']['rectOuter']['x'] : _0x1ea724[_0x5ce484(0xd2c)]['Core'][_0x5ce484(0x17c7)][_0x5ce484(0x11e4)]['x'] + _0x1ea724[_0x5ce484(0xd2c)]['Core'][_0x5ce484(0x17c7)][_0x5ce484(0x11e4)][_0x5ce484(0x173c)];
                        for (let _0x1e6f66 = 0x0; _0x1e6f66 < _0x2b8927; _0x1e6f66++) {
                            let _0x39ea14 = _0x1ea724[_0x5ce484(0xd2c)][_0x5ce484(0x1043)][_0x5ce484(0x10f6)]['x'] + _0x5ac345,
                                _0x3e9f4d = _0x1ea724['default'][_0x5ce484(0x1043)][_0x5ce484(0x10f6)]['y'] + 0x8 * (_0x1e6f66 - 0.5 * _0x2b8927),
                                _0x21eb26 = _0x955686[_0x5ce484(0xada)](_0x39ea14, _0x3e9f4d);
                            _0x21eb26['isCullable'] = !0x1, _0x2a1e78['push'](_0x21eb26), this['spawned']++;
                        }
                        _0x1ea724[_0x5ce484(0xd2c)][_0x5ce484(0x1043)][_0x5ce484(0x6d2)]['time'][_0x5ce484(0x12b8)]({
                            'delay': _0x42ba86,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x28af25 = _0x5ce484;
                                _0x2a1e78[_0x28af25(0x858)](_0x381b1e => {
                                    const _0x510666 = _0x28af25;
                                    this[_0x510666(0x13f4)]--, _0x381b1e['isDead'] || (_0x381b1e['isCullable'] = !0x0, _0x381b1e[_0x510666(0xe00)]());
                                });
                            }
                        })[_0x5ce484(0x226)] = 'medusaswarm disappear';
                    } ['PlayVerticalSwarm'](_0x133d49, _0x24dcf3 = 0x1, _0x25900e = _0x344601['default']['XLSWORDIAN_V'], _0x46aef2 = 0x1) {
                        const _0x16692d = _0x57d428;
                        _0x133d49 = _0x133d49 || 0x3a98;
                        var _0x516864 = this[_0x16692d(0x707)]['pools']['find'](_0x717abf => _0x717abf[_0x16692d(0xe49)] === _0x25900e);
                        _0x516864 || (_0x516864 = new _0x2d37f0['default'](this['scene'], _0x25900e), this[_0x16692d(0x707)]['pools']['push'](_0x516864)), _0x516864[_0x16692d(0x151c)] = !0x1;
                        let _0x2de548 = new Array();
                        var _0x5cc26f = _0x1ea724['default']['Core'][_0x16692d(0x17c7)][_0x16692d(0x11e4)][_0x16692d(0x173c)] / _0x24dcf3;
                        for (let _0x33e51d = 0x0; _0x33e51d < _0x24dcf3; _0x33e51d++) {
                            let _0x4bb522 = _0x1ea724[_0x16692d(0xd2c)]['Core']['Player']['x'] - 0.5 * _0x1ea724[_0x16692d(0xd2c)][_0x16692d(0x1043)][_0x16692d(0x17c7)]['rectOuter'][_0x16692d(0x173c)] + _0x5cc26f * _0x33e51d,
                                _0x394bf2 = _0x1ea724['default'][_0x16692d(0x1043)][_0x16692d(0x10f6)]['y'] - 0.5 * _0x1ea724['default'][_0x16692d(0x1043)][_0x16692d(0x17c7)][_0x16692d(0x11e4)][_0x16692d(0x140e)],
                                _0xc0ea7 = _0x516864['SpawnAt'](_0x4bb522, _0x394bf2);
                            _0xc0ea7[_0x16692d(0x177d)] = !0x1, _0x2de548['push'](_0xc0ea7), this['spawned']++;
                        }
                        _0x1ea724[_0x16692d(0xd2c)][_0x16692d(0x1043)]['scene'][_0x16692d(0x915)][_0x16692d(0x12b8)]({
                            'delay': _0x133d49,
                            'loop': !0x1,
                            'callback': () => {
                                _0x2de548['forEach'](_0x27d287 => {
                                    const _0x146e23 = a0_0x6932;
                                    this['spawned']--, _0x27d287['isDead'] || (_0x27d287['isCullable'] = !0x0, _0x27d287['Disappear']());
                                });
                            }
                        })['name'] = 'vertical swarm disappear';
                    } ['PlayMedusaWall'](_0x359480, _0x206fb0 = 0x1, _0x21084b = _0x344601['default']['MEDUSA1']) {
                        const _0x3c5af1 = _0x57d428;
                        if (!_0x1ea724['default']['Core']['Stage'][_0x3c5af1(0x139c)]) return void this[_0x3c5af1(0x19fa)](_0x359480, _0x206fb0, _0x21084b);
                        _0x359480 = _0x359480 || 0x3a98;
                        var _0x4a14de = this['stage']['pools']['find'](_0xb93038 => _0xb93038[_0x3c5af1(0xe49)] === _0x21084b);
                        _0x4a14de || (_0x4a14de = new _0x2d37f0['default'](this[_0x3c5af1(0x6d2)], _0x21084b), this[_0x3c5af1(0x707)][_0x3c5af1(0x19e1)][_0x3c5af1(0x1564)](_0x4a14de)), _0x4a14de['enabled'] = !0x1;
                        let _0x192f65 = new Array();
                        var _0x5c0b9d = Math['random']() < 0.5 ? _0x1ea724[_0x3c5af1(0xd2c)]['Core'][_0x3c5af1(0x17c7)][_0x3c5af1(0x11e4)]['x'] : _0x1ea724[_0x3c5af1(0xd2c)][_0x3c5af1(0x1043)]['Stage']['rectOuter']['x'] + _0x1ea724[_0x3c5af1(0xd2c)][_0x3c5af1(0x1043)][_0x3c5af1(0x17c7)][_0x3c5af1(0x11e4)][_0x3c5af1(0x173c)],
                            _0x5b0cff = _0x1ea724[_0x3c5af1(0xd2c)][_0x3c5af1(0x1043)][_0x3c5af1(0x17c7)][_0x3c5af1(0x86b)][_0x3c5af1(0xed9)] - 0x1;
                        if (!(_0x1ea724['default']['Core'][_0x3c5af1(0x17c7)]['EnemySpanwersLocations'][_0x3c5af1(0xed9)] <= 0x0)) {
                            for (let _0x57ba6b = 0x0; _0x57ba6b < _0x206fb0; _0x57ba6b++) {
                                let _0x23c2ed = _0x1ea724[_0x3c5af1(0xd2c)][_0x3c5af1(0x1043)]['Player']['x'] + _0x5c0b9d,
                                    _0x3a3a10 = _0x1ea724['default']['Core'][_0x3c5af1(0x17c7)][_0x3c5af1(0x86b)][_0x57ba6b % _0x5b0cff]['y'],
                                    _0x384e71 = _0x4a14de['SpawnAt'](_0x23c2ed, _0x3a3a10);
                                _0x384e71[_0x3c5af1(0x177d)] = !0x1, _0x192f65[_0x3c5af1(0x1564)](_0x384e71), this['spawned']++;
                            }
                            _0x1ea724[_0x3c5af1(0xd2c)]['Core'][_0x3c5af1(0x6d2)]['time']['addEvent']({
                                'delay': _0x359480,
                                'loop': !0x1,
                                'callback': () => {
                                    _0x192f65['forEach'](_0x24048b => {
                                        this['spawned']--, _0x24048b['isDead'] || (_0x24048b['isCullable'] = !0x0, _0x24048b['Disappear']());
                                    });
                                }
                            })[_0x3c5af1(0x226)] = 'medusaswarm disappear';
                        }
                    } ['PlayGhostSwarm'](_0x1a3fa6) {
                        const _0x2f8565 = _0x57d428;
                        _0x1a3fa6 = _0x1a3fa6 || 0x2710;
                        var _0x19d3c4 = this[_0x2f8565(0x707)][_0x2f8565(0x19e1)][_0x2f8565(0x1e6)](_0x3eb604 => _0x3eb604[_0x2f8565(0xe49)] === _0x344601['default'][_0x2f8565(0x128d)]);
                        _0x19d3c4 || (_0x19d3c4 = new _0x2d37f0[(_0x2f8565(0xd2c))](this['scene'], _0x344601['default']['GHOSTSWARM']), this['stage']['pools'][_0x2f8565(0x1564)](_0x19d3c4)), _0x19d3c4[_0x2f8565(0x151c)] = !0x1;
                        let _0x5edec0 = 0x2 * Math['PI'] * Math[_0x2f8565(0x9ad)](),
                            _0x1a9e19 = new Array();
                        for (let _0x504c40 = 0x0; _0x504c40 < 0x14; _0x504c40++) {
                            let _0x28307f = _0x1ea724['default'][_0x2f8565(0x1043)]['Player']['x'] + 0.8 * Math[_0x2f8565(0xd7e)](_0x5edec0) * (0.9 * this['scene']['renderer']['width']),
                                _0x2e9dde = _0x1ea724['default'][_0x2f8565(0x1043)]['Player']['y'] + 0.8 * Math['sin'](_0x5edec0) * (0.9 * this['scene'][_0x2f8565(0x12f9)][_0x2f8565(0x140e)]);
                            _0x5edec0 += Math['PI'] / 0x1f4;
                            let _0x3fe950 = _0x19d3c4[_0x2f8565(0xada)](_0x28307f, _0x2e9dde);
                            _0x3fe950[_0x2f8565(0x177d)] = !0x1, _0x1a9e19['push'](_0x3fe950), this[_0x2f8565(0x13f4)]++;
                        }
                        _0x1ea724['default'][_0x2f8565(0x1043)][_0x2f8565(0x6d2)][_0x2f8565(0x915)]['addEvent']({
                            'delay': _0x1a3fa6,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x167b0e = _0x2f8565;
                                _0x1a9e19[_0x167b0e(0x858)](_0x2aed21 => {
                                    const _0x4983ed = _0x167b0e;
                                    this['spawned']--, _0x2aed21[_0x4983ed(0xdae)] || (_0x2aed21['isCullable'] = !0x0, _0x2aed21[_0x4983ed(0xe00)]());
                                });
                            }
                        })['name'] = 'ghostswarm disappear';
                    } ['PlayShadeBomb'](_0x1c55b0, _0x58eb3a, _0x20f077 = 0x1) {
                        const _0x42429a = _0x57d428;
                        _0x1c55b0 = _0x1c55b0 || 0xea60;
                        let _0x1bbb79 = 'red' === _0x58eb3a ? _0x344601[_0x42429a(0xd2c)]['SHADERED'] : _0x344601['default'][_0x42429a(0x1456)];
                        var _0x2d1b79 = this[_0x42429a(0x707)]['pools'][_0x42429a(0x1e6)](_0x57d7d2 => _0x57d7d2['enemyType'] === _0x1bbb79);
                        _0x2d1b79 || (_0x2d1b79 = new _0x2d37f0[(_0x42429a(0xd2c))](this[_0x42429a(0x6d2)], _0x1bbb79), this[_0x42429a(0x707)]['pools']['push'](_0x2d1b79)), _0x2d1b79['enabled'] = !0x1;
                        let _0x6dfbca = new Array();
                        for (let _0x351d7a = 0x0; _0x351d7a < _0x20f077; _0x351d7a++) {
                            let _0x53cdc2 = 0x2 * Math['PI'] * Math[_0x42429a(0x9ad)](),
                                _0xb838cf = _0x1ea724['default']['Core'][_0x42429a(0x10f6)]['x'] + 0.8 * Math[_0x42429a(0xd7e)](_0x53cdc2) * (0.9 * this[_0x42429a(0x6d2)]['renderer']['width']),
                                _0x2fe50d = _0x1ea724[_0x42429a(0xd2c)]['Core'][_0x42429a(0x10f6)]['y'] + 0.8 * Math[_0x42429a(0xc80)](_0x53cdc2) * (0.9 * this['scene'][_0x42429a(0x12f9)][_0x42429a(0x140e)]);
                            _0x53cdc2 += Math['PI'] / 0x1f4;
                            let _0x1654c6 = _0x2d1b79['SpawnAt'](_0xb838cf, _0x2fe50d);
                            _0x1654c6[_0x42429a(0x177d)] = !0x1, _0x6dfbca[_0x42429a(0x1564)](_0x1654c6), this['spawned']++;
                        }
                        _0x1ea724['default'][_0x42429a(0x1043)]['scene']['time']['addEvent']({
                            'delay': _0x1c55b0,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x195b09 = _0x42429a;
                                _0x6dfbca[_0x195b09(0x858)](_0x5483d1 => {
                                    const _0x13022d = _0x195b09;
                                    this[_0x13022d(0x13f4)]--, _0x5483d1[_0x13022d(0xdae)] || (_0x5483d1[_0x13022d(0x177d)] = !0x0, _0x5483d1['Disappear']());
                                });
                            }
                        })[_0x42429a(0x226)] = 'shadebomb disappear';
                    } ['PlaySkullSwarm'](_0x1f22fd, _0x5a7bbd = 0x1, _0x285648 = _0x344601['default']['SKULL2_SWARM']) {
                        const _0x252ddc = _0x57d428;
                        _0x1f22fd = _0x1f22fd || 0x3a98;
                        var _0x1204d3 = this[_0x252ddc(0x707)]['pools'][_0x252ddc(0x1e6)](_0xdcd722 => _0xdcd722['enemyType'] === _0x285648);
                        _0x1204d3 || (_0x1204d3 = new _0x2d37f0[(_0x252ddc(0xd2c))](this['scene'], _0x285648), this[_0x252ddc(0x707)][_0x252ddc(0x19e1)][_0x252ddc(0x1564)](_0x1204d3)), _0x1204d3[_0x252ddc(0x151c)] = !0x1;
                        let _0x50642f = 0x2 * Math['PI'] * Math[_0x252ddc(0x9ad)](),
                            _0x1f54c5 = new Array();
                        for (let _0x54d9a8 = 0x0; _0x54d9a8 < _0x5a7bbd; _0x54d9a8++) {
                            let _0x38ea45 = _0x1ea724[_0x252ddc(0xd2c)][_0x252ddc(0x1043)][_0x252ddc(0x10f6)]['x'] + 0.8 * Math[_0x252ddc(0xd7e)](_0x50642f) * (0.9 * this['scene']['renderer'][_0x252ddc(0x173c)]),
                                _0x51ee2f = _0x1ea724['default'][_0x252ddc(0x1043)]['Player']['y'] + 0.8 * Math['sin'](_0x50642f) * (0.9 * this[_0x252ddc(0x6d2)]['renderer'][_0x252ddc(0x140e)]);
                            _0x50642f += Math['PI'] / 0x32;
                            let _0x2daf68 = _0x1204d3['SpawnAt'](_0x38ea45, _0x51ee2f);
                            _0x2daf68['isCullable'] = !0x1, _0x1f54c5['push'](_0x2daf68), this[_0x252ddc(0x13f4)]++;
                        }
                        _0x1ea724[_0x252ddc(0xd2c)]['Core']['scene'][_0x252ddc(0x915)][_0x252ddc(0x12b8)]({
                            'delay': _0x1f22fd,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x18a1b6 = _0x252ddc;
                                _0x1f54c5[_0x18a1b6(0x858)](_0x10a7fa => {
                                    const _0x25f0ed = _0x18a1b6;
                                    this[_0x25f0ed(0x13f4)]--, _0x10a7fa[_0x25f0ed(0xdae)] || (_0x10a7fa[_0x25f0ed(0x177d)] = !0x0, _0x10a7fa['Disappear']());
                                });
                            }
                        })[_0x252ddc(0x226)] = 'skull2 disappear';
                    } ['PlayPileAssault'](_0x5603dc, _0x4be786 = 0x32, _0x4a476b = _0x344601['default']['PILE1'], _0x476b08 = 0.7) {
                        const _0x390295 = _0x57d428;
                        _0x5603dc = _0x5603dc || 0x7530;
                        var _0x47ebc9 = this[_0x390295(0x707)][_0x390295(0x19e1)][_0x390295(0x1e6)](_0x2bcf8f => _0x2bcf8f[_0x390295(0xe49)] === _0x4a476b);
                        _0x47ebc9 || (_0x47ebc9 = new _0x2d37f0[(_0x390295(0xd2c))](this['scene'], _0x4a476b), this['stage'][_0x390295(0x19e1)]['push'](_0x47ebc9)), _0x47ebc9['enabled'] = !0x1;
                        let _0xbd351b = 0x2 * Math['PI'] * Math['random'](),
                            _0x4030d2 = new Array(),
                            _0x155f2f = 0.5 * _0x4be786;
                        for (let _0x15f81f = 0x0; _0x15f81f < _0x4be786; _0x15f81f++) {
                            let _0x316298 = _0x1ea724[_0x390295(0xd2c)]['Core'][_0x390295(0x10f6)]['x'] + Math['cos'](_0xbd351b) * _0x476b08 * (0.9 * this['scene'][_0x390295(0x12f9)][_0x390295(0x173c)]),
                                _0xdcaa8c = _0x1ea724['default'][_0x390295(0x1043)]['Player']['y'] + Math[_0x390295(0xc80)](_0xbd351b) * _0x476b08 * (0.9 * this['scene'][_0x390295(0x12f9)][_0x390295(0x140e)]);
                            _0xbd351b += Math['PI'] / _0x155f2f;
                            let _0x2b4044 = _0x47ebc9[_0x390295(0xada)](_0x316298, _0xdcaa8c);
                            _0x2b4044['isCullable'] = !0x1, _0x4030d2['push'](_0x2b4044), this['spawned']++;
                        }
                        _0x1ea724['default'][_0x390295(0x1043)][_0x390295(0x6d2)]['time']['addEvent']({
                            'delay': _0x5603dc,
                            'loop': !0x1,
                            'callback': () => {
                                this['spawned'] -= _0x4be786, _0x4030d2['forEach'](_0x408e23 => {
                                    const _0x2bec96 = a0_0x6932;
                                    _0x408e23['isDead'] || (_0x408e23['isCullable'] = !0x0, _0x408e23['Disappear']());
                                });
                            }
                        })['name'] = 'pile assault disappear';
                    } ['PlaySwarm'](_0x14b0a6, _0xd2ced1 = 0x32, _0x585418 = _0x344601['default']['BATSWARM'], _0x2f67a8 = 0.9) {
                        const _0x1279e5 = _0x57d428;
                        _0x14b0a6 = _0x14b0a6 || 0x2710;
                        var _0x3adb7d = this['stage']['pools'][_0x1279e5(0x1e6)](_0x3c1a0e => _0x3c1a0e['enemyType'] === _0x585418);
                        _0x3adb7d || (_0x3adb7d = new _0x2d37f0[(_0x1279e5(0xd2c))](this[_0x1279e5(0x6d2)], _0x585418), this[_0x1279e5(0x707)][_0x1279e5(0x19e1)][_0x1279e5(0x1564)](_0x3adb7d)), _0x3adb7d['enabled'] = !0x1;
                        let _0x5a0783 = 0x2 * Math['PI'] * Math[_0x1279e5(0x9ad)](),
                            _0x5a7db2 = new Array();
                        for (let _0x36272f = 0x0; _0x36272f < _0xd2ced1; _0x36272f++) {
                            let _0x79873 = _0x1ea724[_0x1279e5(0xd2c)]['Core'][_0x1279e5(0x10f6)]['x'] + 0.8 * Math['cos'](_0x5a0783) * (this['scene']['renderer'][_0x1279e5(0x173c)] * _0x2f67a8),
                                _0x35a188 = _0x1ea724[_0x1279e5(0xd2c)]['Core'][_0x1279e5(0x10f6)]['y'] + 0.8 * Math[_0x1279e5(0xc80)](_0x5a0783) * (this[_0x1279e5(0x6d2)][_0x1279e5(0x12f9)]['height'] * _0x2f67a8);
                            _0x5a0783 += Math['PI'] / 0x1f4;
                            let _0x42386c = _0x3adb7d[_0x1279e5(0xada)](_0x79873, _0x35a188);
                            _0x42386c[_0x1279e5(0x177d)] = !0x1, _0x5a7db2[_0x1279e5(0x1564)](_0x42386c), this[_0x1279e5(0x13f4)]++;
                        }
                        _0x1ea724['default'][_0x1279e5(0x1043)][_0x1279e5(0x6d2)][_0x1279e5(0x915)]['addEvent']({
                            'delay': _0x14b0a6,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x275c73 = _0x1279e5;
                                this[_0x275c73(0x13f4)] -= _0xd2ced1, _0x5a7db2[_0x275c73(0x858)](_0x5003aa => {
                                    const _0x141aa9 = _0x275c73;
                                    _0x5003aa['isDead'] || (_0x5003aa[_0x141aa9(0x177d)] = !0x0, _0x5003aa[_0x141aa9(0xe00)]());
                                });
                            }
                        })[_0x1279e5(0x226)] = 'swarm disappear';
                    } ['PlaySwarmAt'](_0x4d4284, _0x31e4da = 0x32, _0x4a0876 = _0x344601['default']['BATSWARM'], _0x47b2d3, _0x30d3eb) {
                        const _0x44c087 = _0x57d428;
                        _0x4d4284 = _0x4d4284 || 0x2710;
                        var _0x20524c = this[_0x44c087(0x707)][_0x44c087(0x19e1)][_0x44c087(0x1e6)](_0x701bfe => _0x701bfe[_0x44c087(0xe49)] === _0x4a0876);
                        _0x20524c || (_0x20524c = new _0x2d37f0[(_0x44c087(0xd2c))](this['scene'], _0x4a0876), this[_0x44c087(0x707)][_0x44c087(0x19e1)][_0x44c087(0x1564)](_0x20524c)), _0x20524c['enabled'] = !0x1;
                        let _0x2d0f81 = new Array();
                        for (let _0x137c2a = 0x0; _0x137c2a < _0x31e4da; _0x137c2a++) {
                            let _0x10ae4d = _0x20524c['SpawnAt'](_0x47b2d3, _0x30d3eb);
                            _0x10ae4d[_0x44c087(0x177d)] = !0x1, _0x2d0f81['push'](_0x10ae4d), this[_0x44c087(0x13f4)]++;
                        }
                        _0x1ea724[_0x44c087(0xd2c)]['Core'][_0x44c087(0x6d2)][_0x44c087(0x915)][_0x44c087(0x12b8)]({
                            'delay': _0x4d4284,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x24fa10 = _0x44c087;
                                this[_0x24fa10(0x13f4)] -= _0x31e4da, _0x2d0f81[_0x24fa10(0x858)](_0x4abc5b => {
                                    const _0x5492ee = _0x24fa10;
                                    _0x4abc5b['isDead'] || (_0x4abc5b['isCullable'] = !0x0, _0x4abc5b[_0x5492ee(0xe00)]());
                                });
                            }
                        })[_0x44c087(0x226)] = 'swarm disappear';
                    } ['PlayStalker'](_0x1c0352, _0x2dab19 = 0x1) {
                        const _0x2fa7e4 = _0x57d428;
                        _0x1c0352 = _0x1c0352 || 0xea60;
                        var _0x550515 = this['stage']['pools'][_0x2fa7e4(0x1e6)](_0x77a6a7 => _0x77a6a7['enemyType'] === _0x344601['default'][_0x2fa7e4(0x1567)]);
                        _0x550515 || (_0x550515 = new _0x2d37f0['default'](this['scene'], _0x344601[_0x2fa7e4(0xd2c)][_0x2fa7e4(0x1567)]), this['stage'][_0x2fa7e4(0x19e1)][_0x2fa7e4(0x1564)](_0x550515)), _0x550515[_0x2fa7e4(0x151c)] = !0x1;
                        let _0x31804c = 0x2 * Math['PI'] * Math['random'](),
                            _0x46585d = _0x1ea724[_0x2fa7e4(0xd2c)]['Core'][_0x2fa7e4(0x10f6)]['x'] + 0.8 * Math['cos'](_0x31804c) * (0.9 * this['scene']['renderer'][_0x2fa7e4(0x173c)]),
                            _0x2ce186 = _0x1ea724[_0x2fa7e4(0xd2c)][_0x2fa7e4(0x1043)]['Player']['y'] + 0.8 * Math['sin'](_0x31804c) * (0.9 * this[_0x2fa7e4(0x6d2)]['renderer'][_0x2fa7e4(0x140e)]);
                        _0x31804c += Math['PI'] / 0x1f4;
                        let _0x2dcb42 = _0x550515['SpawnAt'](_0x46585d, _0x2ce186);
                        _0x2dcb42[_0x2fa7e4(0x177d)] = !0x1, _0x2dab19 && _0x2dcb42[_0x2fa7e4(0xddc)](_0x2dab19), _0x1ea724['default'][_0x2fa7e4(0x1043)]['scene'][_0x2fa7e4(0x915)][_0x2fa7e4(0x12b8)]({
                            'delay': _0x1c0352,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x57d566 = _0x2fa7e4;
                                _0x2dcb42[_0x57d566(0xdae)] || (_0x2dcb42['isCullable'] = !0x0, _0x2dcb42[_0x57d566(0xe00)]());
                            }
                        })[_0x2fa7e4(0x226)] = 'stalker disappear';
                    } ['PlayDrowner'](_0xf293ff) {
                        const _0x3d4caf = _0x57d428;
                        _0xf293ff = _0xf293ff || 0xea60;
                        var _0x4e0396 = this[_0x3d4caf(0x707)]['pools']['find'](_0x2b8740 => _0x2b8740[_0x3d4caf(0xe49)] === _0x344601[_0x3d4caf(0xd2c)][_0x3d4caf(0x1a51)]);
                        _0x4e0396 || (_0x4e0396 = new _0x2d37f0[(_0x3d4caf(0xd2c))](this['scene'], _0x344601['default']['BOSS_XLDROWNER']), this['stage']['pools'][_0x3d4caf(0x1564)](_0x4e0396)), _0x4e0396[_0x3d4caf(0x151c)] = !0x1, Math['PI'], Math[_0x3d4caf(0x9ad)]();
                        let _0x495c69 = _0x1ea724[_0x3d4caf(0xd2c)]['Core'][_0x3d4caf(0x10f6)]['x'],
                            _0x3986bf = _0x1ea724['default']['Core'][_0x3d4caf(0x10f6)]['y'] + this['scene'][_0x3d4caf(0x12f9)][_0x3d4caf(0x140e)],
                            _0x5c5da8 = _0x4e0396['SpawnAt'](_0x495c69, _0x3986bf);
                        _0x5c5da8[_0x3d4caf(0x177d)] = !0x1, _0x1ea724['default'][_0x3d4caf(0x1043)][_0x3d4caf(0x6d2)][_0x3d4caf(0x915)][_0x3d4caf(0x12b8)]({
                            'delay': _0xf293ff,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x319686 = _0x3d4caf;
                                _0x5c5da8[_0x319686(0xdae)] || (_0x5c5da8['isCullable'] = !0x0, _0x5c5da8[_0x319686(0x112f)] = !0x0, _0x5c5da8['Disappear']());
                            }
                        })['name'] = 'drowner disappear';
                    } ['PlaySleeper'](_0x1beff9, _0x1fd8a5 = 0x1) {
                        const _0x1570c7 = _0x57d428;
                        _0x1beff9 = _0x1beff9 || 0xea60;
                        var _0x4d3564 = this['stage']['pools'][_0x1570c7(0x1e6)](_0x374bea => _0x374bea[_0x1570c7(0xe49)] === _0x344601['default']['BOSS_XLBLINDER']);
                        _0x4d3564 || (_0x4d3564 = new _0x2d37f0[(_0x1570c7(0xd2c))](this[_0x1570c7(0x6d2)], _0x344601[_0x1570c7(0xd2c)]['BOSS_XLBLINDER']), this['stage'][_0x1570c7(0x19e1)][_0x1570c7(0x1564)](_0x4d3564)), _0x4d3564[_0x1570c7(0x151c)] = !0x1;
                        let _0x19816b = 0x2 * Math['PI'] * Math[_0x1570c7(0x9ad)](),
                            _0x2dd87e = _0x1ea724[_0x1570c7(0xd2c)]['Core'][_0x1570c7(0x10f6)]['x'] + 0.8 * Math[_0x1570c7(0xd7e)](_0x19816b) * (0.9 * this['scene'][_0x1570c7(0x12f9)][_0x1570c7(0x173c)]),
                            _0x4eac18 = _0x1ea724['default']['Core'][_0x1570c7(0x10f6)]['y'] + 0.8 * Math[_0x1570c7(0xc80)](_0x19816b) * (0.9 * this['scene']['renderer']['height']);
                        _0x19816b += Math['PI'] / 0x1f4;
                        let _0x2b7607 = _0x4d3564[_0x1570c7(0xada)](_0x2dd87e, _0x4eac18);
                        _0x2b7607[_0x1570c7(0x177d)] = !0x1, _0x1fd8a5 && _0x2b7607['MulSpeed'](_0x1fd8a5), _0x1ea724[_0x1570c7(0xd2c)][_0x1570c7(0x1043)][_0x1570c7(0x6d2)]['time'][_0x1570c7(0x12b8)]({
                            'delay': _0x1beff9,
                            'loop': !0x1,
                            'callback': () => {
                                _0x2b7607['isDead'] || (_0x2b7607['isCullable'] = !0x0, _0x2b7607['Disappear']());
                            }
                        })['name'] = 'sleeper disappear';
                    } ['PlayEraseEnemies']() {
                        const _0x4cbb06 = _0x57d428;
                        _0x1ea724[_0x4cbb06(0xd2c)]['Core'][_0x4cbb06(0x14d8)][_0x4cbb06(0x49c)] && new _0x28ba43[(_0x4cbb06(0xd2c))](this['scene'])['Play']();
                        for (let _0x186bcb = 0x0; _0x186bcb < _0x1ea724['default']['Core']['Enemies']['length']; _0x186bcb++) {
                            const _0x4b11a4 = _0x1ea724[_0x4cbb06(0xd2c)][_0x4cbb06(0x1043)]['Enemies'][_0x186bcb];
                            _0x4b11a4['res_Rosary'] || _0x4b11a4[_0x4cbb06(0xe00)]();
                        }
                        _0x1ea724['default'][_0x4cbb06(0x1043)]['BGMan'][_0x4cbb06(0x1674)] = !0x1;
                        let _0xda2a8c = 0x0;
                        _0x1ea724[_0x4cbb06(0xd2c)]['Core'][_0x4cbb06(0x6d2)][_0x4cbb06(0x915)]['addEvent']({
                            'delay': 0x64,
                            'repeat': 0x14,
                            'callback': () => {
                                const _0x3872ab = _0x4cbb06;
                                _0xda2a8c += 0.05, _0xda2a8c = Math[_0x3872ab(0x1084)](_0xda2a8c, 0x1), _0x1ea724['default'][_0x3872ab(0x1043)]['BGMan']['bgtile'][_0x3872ab(0xb34)](_0x2bdf87[_0x3872ab(0xd2c)]['LerpColor'](0xffffff, 0x880000, _0xda2a8c));
                            }
                        });
                    } ['PlayCycleComplete']() {
                        const _0x4da3d8 = _0x57d428;
                        _0x1ea724[_0x4da3d8(0xd2c)][_0x4da3d8(0x1043)]['PlayerOptions'][_0x4da3d8(0x1708)] ? _0x1ea724['default']['Core']['Stage']['OnCycleComplete']() : this['PlayEraseEnemies']();
                    } ['PlayDiamond_Square'](_0x5460a3, _0x2fcaee = 0x1, _0x23ff43 = 0x0, _0x143f1f = _0x344601['default']['EX_DIAMOND']) {
                        const _0x41376c = _0x57d428;
                        _0x143f1f || (_0x143f1f = _0x344601[_0x41376c(0xd2c)]['EX_DIAMOND']), _0x5460a3 = _0x5460a3 || 0x7530;
                        var _0x1df64a = this[_0x41376c(0x707)][_0x41376c(0x19e1)]['find'](_0xed816d => _0xed816d['enemyType'] === _0x143f1f);
                        _0x1df64a || (_0x1df64a = new _0x2d37f0[(_0x41376c(0xd2c))](this['scene'], _0x143f1f), this[_0x41376c(0x707)][_0x41376c(0x19e1)][_0x41376c(0x1564)](_0x1df64a)), _0x1df64a[_0x41376c(0x151c)] = !0x1;
                        for (let _0x15fea0 = 0x0; _0x15fea0 < _0x2fcaee; _0x15fea0++) {
                            let _0x1d2d2c = 0xe + 0x2 * _0x15fea0,
                                _0x2ee0ef = 0.5 * _0x1d2d2c;
                            this['scene'][_0x41376c(0x915)][_0x41376c(0x12b8)]({
                                'delay': 0x1e,
                                'callback': () => {
                                    const _0x461dad = _0x41376c;
                                    let _0xaad0ed = _0x1ea724['default']['Core']['Player']['x'] - 0x20 * _0x2ee0ef + 0x10,
                                        _0xf315e5 = _0x1ea724[_0x461dad(0xd2c)]['Core']['Player']['y'] - 0x20 * _0x2ee0ef + 0x18;
                                    for (let _0x3808a1 = 0x0; _0x3808a1 < _0x1d2d2c; _0x3808a1++) _0x1df64a[_0x461dad(0xada)](_0xaad0ed + 0x20 * _0x3808a1, _0xf315e5);
                                    for (let _0x5b471e = 0x0; _0x5b471e < _0x1d2d2c; _0x5b471e++) _0x1df64a['SpawnAt'](_0xaad0ed + 0x20 * _0x5b471e, _0xf315e5 + 0x20 * (_0x1d2d2c - 0x1));
                                    for (let _0x2a3e4d = 0x1; _0x2a3e4d < _0x1d2d2c - 0x1; _0x2a3e4d++) _0x1df64a['SpawnAt'](_0xaad0ed, _0xf315e5 + 0x20 * _0x2a3e4d);
                                    for (let _0x42be41 = 0x1; _0x42be41 < _0x1d2d2c - 0x1; _0x42be41++) _0x1df64a['SpawnAt'](_0xaad0ed + 0x20 * (_0x1d2d2c - 0x1), _0xf315e5 + 0x20 * _0x42be41);
                                }
                            });
                        }
                    } ['PlayDiamond_Road'](_0x1397df, _0x4c726b = 0x1, _0x862d42 = _0x344601['default']['EX_DIAMOND'], _0x5764f5 = 0x0) {
                        const _0x536e25 = _0x57d428;
                        _0x5764f5 || (_0x862d42 = _0x344601[_0x536e25(0xd2c)]['EX_DIAMOND']), _0x1397df = _0x1397df || 0x7530;
                        var _0x160081 = this[_0x536e25(0x707)][_0x536e25(0x19e1)][_0x536e25(0x1e6)](_0x2934b5 => _0x2934b5['enemyType'] === _0x862d42);
                        _0x160081 || (_0x160081 = new _0x2d37f0[(_0x536e25(0xd2c))](this[_0x536e25(0x6d2)], _0x862d42), this[_0x536e25(0x707)]['pools'][_0x536e25(0x1564)](_0x160081)), _0x160081[_0x536e25(0x151c)] = !0x1;
                        for (let _0x3eda5d = 0x0; _0x3eda5d < _0x4c726b; _0x3eda5d++) {
                            let _0x97a8de = 0x30,
                                _0x6094f7 = 0.5 * _0x97a8de,
                                _0x1bc729 = 0x4 + _0x3eda5d;
                            this['scene'][_0x536e25(0x915)][_0x536e25(0x12b8)]({
                                'delay': 0x1e,
                                'callback': () => {
                                    const _0x3a679d = _0x536e25;
                                    let _0x578701 = _0x1ea724['default']['Core'][_0x3a679d(0x10f6)]['x'] - 0x20 * _0x1bc729 + 0x10,
                                        _0xa2547c = _0x1ea724[_0x3a679d(0xd2c)][_0x3a679d(0x1043)]['Player']['x'] + 0x20 * _0x1bc729 + 0x10,
                                        _0x176429 = _0x1ea724[_0x3a679d(0xd2c)][_0x3a679d(0x1043)]['Player']['y'] - 0x20 * _0x6094f7 + 0x18;
                                    for (let _0x239497 = 0x1; _0x239497 < _0x97a8de; _0x239497++) {
                                        let _0x4125f0 = _0x176429 + 0x20 * _0x239497;
                                        _0x160081[_0x3a679d(0xada)](_0x578701, _0x4125f0), _0x160081['SpawnAt'](_0xa2547c, _0x4125f0);
                                    }
                                }
                            });
                        }
                    } ['PlayDiamond_Concrete'](_0x42ac7d, _0x2eb1b6 = 0x0, _0x428210 = _0x344601['default']['EX_DIAMOND'], _0x33ff6b = 0x0) {
                        const _0x3ef732 = _0x57d428;
                        _0x33ff6b || (_0x428210 = _0x344601['default']['EX_DIAMOND']), _0x42ac7d = _0x42ac7d || 0xea60;
                        var _0xf0e6ec = this[_0x3ef732(0x707)]['pools']['find'](_0x20e517 => _0x20e517[_0x3ef732(0xe49)] === _0x428210);
                        _0xf0e6ec || (_0xf0e6ec = new _0x2d37f0['default'](this['scene'], _0x428210), this['stage'][_0x3ef732(0x19e1)]['push'](_0xf0e6ec)), _0xf0e6ec[_0x3ef732(0x151c)] = !0x1;
                        let _0x1bc8ed = (_0x2eb1b6 || _0x1ea724['default']['Core'][_0x3ef732(0x10f6)]['x']) - 0xe0 + 0x10,
                            _0x538204 = (_0x33ff6b || _0x1ea724['default']['Core']['Player']['y']) - 0xe0 + 0xc;
                        for (let _0x583d35 = 0x0; _0x583d35 < 0xe; _0x583d35++)
                            for (let _0x513369 = 0x0; _0x513369 < 0xe; _0x513369++) _0xf0e6ec['SpawnAt'](_0x1bc8ed + 0x20 * _0x513369, _0x538204 + 0x20 * _0x583d35);
                    } ['PlayDiamond_RandomPattern'](_0x4a6e21, _0x4123c4 = 0x0, _0x1a8a56 = _0x344601['default']['EX_DIAMOND'], _0x1baf9f = 0x0) {
                        const _0xb85d55 = _0x57d428;
                        this['PlayDiamond_RandomPatternClear']();
                        let _0x4e3abe = new _0x5e3888[(_0xb85d55(0xd2c))]();
                        this[_0xb85d55(0xb31)] = [];
                        for (let _0x2b90d3 = 0x0; _0x2b90d3 < 0x64; _0x2b90d3++) {
                            this[_0xb85d55(0xb31)][_0xb85d55(0x1564)]([]);
                            for (let _0x4e5f1c = 0x0; _0x4e5f1c < 0x64; _0x4e5f1c++) this['playDiamond_enemyGrid'][_0x2b90d3][_0xb85d55(0x1564)](null);
                        }
                        this[_0xb85d55(0x120a)] = _0x1ea724[_0xb85d55(0xd2c)][_0xb85d55(0x1043)][_0xb85d55(0x10f6)]['x'] - 0x640, this['playDiamond_gridStartY'] = _0x1ea724[_0xb85d55(0xd2c)][_0xb85d55(0x1043)][_0xb85d55(0x10f6)]['y'] - 0x640, this['playDiamond_grid'] = _0x4e3abe[_0xb85d55(0x1170)](0x64, 0x64), this[_0xb85d55(0x12b0)] = !0x0, this[_0xb85d55(0x1a61)] = _0x4a6e21, this[_0xb85d55(0x19a2)] = _0x1ea724[_0xb85d55(0xd2c)][_0xb85d55(0x1043)][_0xb85d55(0x6d2)][_0xb85d55(0x915)][_0xb85d55(0x12b8)]({
                            'delay': _0x4a6e21,
                            'callback': () => {
                                const _0x1d34d3 = _0xb85d55;
                                this[_0x1d34d3(0xf98)]();
                            }
                        });
                    } ['PlayDiamond_RandomPatternClear']() {
                        const _0x34b4e9 = _0x57d428;
                        if (this[_0x34b4e9(0x12b0)] = !0x1, this[_0x34b4e9(0x19a2)] && this['playDiamond_disappearTimer']['destroy'](), this[_0x34b4e9(0xb31)]) {
                            for (let _0x22809d = 0x0; _0x22809d < this[_0x34b4e9(0xb31)]['length']; _0x22809d++)
                                for (let _0x169dfc = 0x0; _0x169dfc < this['playDiamond_enemyGrid'][_0x22809d]['length']; _0x169dfc++) this['playDiamond_enemyGrid'][_0x22809d][_0x169dfc] && (this['playDiamond_enemyGrid'][_0x22809d][_0x169dfc]['gridX'] == _0x169dfc && this[_0x34b4e9(0xb31)][_0x22809d][_0x169dfc]['gridY'] == _0x22809d && this[_0x34b4e9(0xb31)][_0x22809d][_0x169dfc][_0x34b4e9(0xe00)](), this['playDiamond_enemyGrid'][_0x22809d][_0x169dfc] = null, this['spawned'] -= 0x1);
                        }
                    } ['PlayDiamond_RandomPatternStatic'](_0x12f844, _0x49fcf5 = 0x0, _0x1429c1 = 0x0, _0x560a6e = _0x344601['default']['EX_DIAMOND']) {
                        const _0x23898e = _0x57d428;
                        let _0x476651 = new _0x5e3888['default']()['generateGrid'](0x64, 0x64);
                        _0x560a6e || (_0x560a6e = _0x344601['default']['EX_DIAMOND']), _0x12f844 = _0x12f844 || 0x7530;
                        var _0x218339 = this[_0x23898e(0x707)]['pools'][_0x23898e(0x1e6)](_0x5c0490 => _0x5c0490['enemyType'] === _0x560a6e);
                        _0x218339 || (_0x218339 = new _0x2d37f0[(_0x23898e(0xd2c))](this['scene'], _0x560a6e), this['stage'][_0x23898e(0x19e1)][_0x23898e(0x1564)](_0x218339)), _0x218339['enabled'] = !0x1;
                        let _0x5bf325 = _0x1ea724['default']['Core'][_0x23898e(0x10f6)]['x'] - 0x640 + 0x10,
                            _0x348bc5 = _0x1ea724[_0x23898e(0xd2c)][_0x23898e(0x1043)]['Player']['y'] - 0x640 - 0x18;
                        for (let _0x430589 = 0x0; _0x430589 < 0x64; _0x430589++)
                            for (let _0x5b03f7 = 0x0; _0x5b03f7 < 0x64; _0x5b03f7++) 0x0 == _0x476651[_0x430589][_0x5b03f7] && _0x218339['SpawnAt'](_0x5bf325 + 0x20 * _0x5b03f7, _0x348bc5 + 0x20 * _0x430589);
                    } ['fnRosary']() {
                        const _0x1256a4 = _0x57d428;
                        _0x1ea724[_0x1256a4(0xd2c)]['Core'][_0x1256a4(0xccb)](_0x1ea724['default']['Core'][_0x1256a4(0x10f6)]['x'], _0x1ea724[_0x1256a4(0xd2c)][_0x1256a4(0x1043)]['Player']['y'], _0x4f860f[_0x1256a4(0xd2c)]['ROSARY']), _0x1ea724['default']['Core']['GizmoManager']['ShowHighlightAt'](_0x1ea724[_0x1256a4(0xd2c)]['Core']['Player']['x'], _0x1ea724['default'][_0x1256a4(0x1043)][_0x1256a4(0x10f6)]['y']);
                    } ['fnPet']() {
                        const _0x1001ad = _0x57d428;
                        _0x1ea724[_0x1001ad(0xd2c)][_0x1001ad(0x1043)][_0x1001ad(0x1a99)](), _0x1ea724[_0x1001ad(0xd2c)]['Core'][_0x1001ad(0x503)]['ShowHighlightAt'](_0x1ea724[_0x1001ad(0xd2c)][_0x1001ad(0x1043)][_0x1001ad(0x10f6)]['x'], _0x1ea724['default'][_0x1001ad(0x1043)][_0x1001ad(0x10f6)]['y']);
                    } ['fnChicken']() {
                        const _0x589d64 = _0x57d428,
                            _0x5aa007 = 0x2 * Math['PI'] / 0xc;
                        for (let _0x39e184 = 0x0; _0x39e184 < 0xc; _0x39e184++) {
                            let _0x564862 = _0x1ea724['default'][_0x589d64(0x1043)][_0x589d64(0x10f6)]['x'] + 0xaf * Math[_0x589d64(0xc80)](_0x5aa007 * _0x39e184),
                                _0x2a8b4c = _0x1ea724[_0x589d64(0xd2c)]['Core']['Player']['y'] + 0xaf * Math['cos'](_0x5aa007 * _0x39e184);
                            _0x1ea724['default']['Core'][_0x589d64(0xccb)](_0x564862, _0x2a8b4c, _0x4f860f[_0x589d64(0xd2c)][_0x589d64(0x1a43)]);
                        }
                        _0x1ea724['default'][_0x589d64(0x1043)]['GizmoManager'][_0x589d64(0xf96)](_0x1ea724['default'][_0x589d64(0x1043)]['Player']['x'], _0x1ea724[_0x589d64(0xd2c)][_0x589d64(0x1043)]['Player']['y']);
                    } ['fnGoldFever']() {
                        const _0x33085c = _0x57d428;
                        _0x1ea724[_0x33085c(0xd2c)]['Core']['TriggerGoldFever'](0x2710), _0x1ea724[_0x33085c(0xd2c)][_0x33085c(0x1043)][_0x33085c(0x6d2)]['time'][_0x33085c(0x12b8)]({
                            'delay': 0xbb8,
                            'loop': !0x1,
                            'repeat': 0x2,
                            'callback': () => {
                                const _0x1cba2e = _0x33085c;
                                _0x1ea724[_0x1cba2e(0xd2c)][_0x1cba2e(0x1043)][_0x1cba2e(0x84e)]();
                            }
                        }), _0x1ea724['default']['Core'][_0x33085c(0x503)]['ShowHighlightAt'](_0x1ea724[_0x33085c(0xd2c)]['Core'][_0x33085c(0x10f6)]['x'], _0x1ea724['default'][_0x33085c(0x1043)]['Player']['y']);
                    } ['fnPassive']() {
                        const _0x8aedff = _0x57d428;
                        let _0x39a782 = [_0x44ac63['default'][_0x8aedff(0xc48)], _0x44ac63[_0x8aedff(0xd2c)]['AREA'], _0x44ac63['default'][_0x8aedff(0x85a)], _0x44ac63[_0x8aedff(0xd2c)]['COOLDOWN'], _0x44ac63['default']['CURSE'], _0x44ac63['default'][_0x8aedff(0xcf7)], _0x44ac63['default']['GREED'], _0x44ac63[_0x8aedff(0xd2c)][_0x8aedff(0x805)], _0x44ac63['default'][_0x8aedff(0x1a11)], _0x44ac63[_0x8aedff(0xd2c)][_0x8aedff(0x8f3)], _0x44ac63['default'][_0x8aedff(0x7f8)], _0x44ac63[_0x8aedff(0xd2c)][_0x8aedff(0x128b)], _0x44ac63[_0x8aedff(0xd2c)][_0x8aedff(0x1a7b)], _0x44ac63[_0x8aedff(0xd2c)][_0x8aedff(0x2c9)], _0x44ac63[_0x8aedff(0xd2c)]['REVIVAL'], _0x44ac63['default'][_0x8aedff(0x142d)], _0x44ac63['default']['PANDORA']],
                            _0x2827ef = Phaser[_0x8aedff(0x24f)]['RND']['pick'](_0x39a782),
                            _0x23c762 = _0x1ea724[_0x8aedff(0xd2c)][_0x8aedff(0x1043)][_0x8aedff(0x10f6)]['x'],
                            _0x1edccf = _0x1ea724['default']['Core'][_0x8aedff(0x10f6)]['y'] + 0.45 * this[_0x8aedff(0x6d2)][_0x8aedff(0x12f9)]['height'];
                        _0x1ea724[_0x8aedff(0xd2c)][_0x8aedff(0x1043)][_0x8aedff(0x13f8)](_0x23c762, _0x1edccf, _0x4f860f['default'][_0x8aedff(0x17b3)], _0x2827ef), _0x1ea724['default']['Core'][_0x8aedff(0x503)]['ShowHighlightAt'](_0x23c762, _0x1edccf);
                    } ['fn_Lights']() {
                        const _0x49fea1 = _0x57d428;
                        _0x1ea724[_0x49fea1(0xd2c)]['Core'][_0x49fea1(0x10f3)](0x1);
                    } ['fn_Nduja']() {
                        const _0x29b186 = _0x57d428;
                        _0x1ea724[_0x29b186(0xd2c)][_0x29b186(0x1043)]['MakePickup'](_0x1ea724[_0x29b186(0xd2c)]['Core'][_0x29b186(0x10f6)]['x'], _0x1ea724[_0x29b186(0xd2c)][_0x29b186(0x1043)][_0x29b186(0x10f6)]['y'], _0x4f860f[_0x29b186(0xd2c)][_0x29b186(0x3cc)]), _0x1ea724[_0x29b186(0xd2c)]['Core'][_0x29b186(0x503)][_0x29b186(0xf96)](_0x1ea724[_0x29b186(0xd2c)]['Core']['Player']['x'], _0x1ea724['default']['Core']['Player']['y']);
                    } ['fnClover']() {
                        const _0x5ac4dd = _0x57d428,
                            _0x5b572f = 0x2 * Math['PI'] / (0x5 / 0x3),
                            _0x44e446 = 0.5 * this['scene']['renderer']['width'];
                        for (let _0x44aef9 = 0x0; _0x44aef9 < 0x5; _0x44aef9++) {
                            let _0x2cc9d2 = _0x1ea724[_0x5ac4dd(0xd2c)][_0x5ac4dd(0x1043)][_0x5ac4dd(0x10f6)]['x'] + Math['sin'](_0x5b572f * _0x44aef9) * _0x44e446,
                                _0x3b1a96 = _0x1ea724['default']['Core']['Player']['y'] + Math['cos'](_0x5b572f * _0x44aef9) * _0x44e446,
                                _0x1fc6fb = _0x1ea724['default']['Core'][_0x5ac4dd(0xccb)](_0x2cc9d2, _0x3b1a96, _0x4f860f['default']['CLOVER']);
                            _0x1fc6fb[_0x5ac4dd(0x12a8)] = !0x0, _0x1fc6fb['time'] = 0x1;
                        }
                        _0x1ea724['default'][_0x5ac4dd(0x1043)][_0x5ac4dd(0x503)]['ShowHighlightAt'](_0x1ea724[_0x5ac4dd(0xd2c)][_0x5ac4dd(0x1043)][_0x5ac4dd(0x10f6)]['x'], _0x1ea724[_0x5ac4dd(0xd2c)][_0x5ac4dd(0x1043)]['Player']['y']);
                    } ['fnSkull']() {} ['fnUltraWave']() {
                        const _0x4d517f = _0x57d428;
                        let _0x21db8b = _0x1ea724['default'][_0x4d517f(0x1043)][_0x4d517f(0x17c7)][_0x4d517f(0x15cf)];
                        _0x1ea724['default']['Core']['Stage'][_0x4d517f(0x15cf)] = _0x40bdce[_0x4d517f(0xd2c)][_0x4d517f(0x45d)], _0x1ea724[_0x4d517f(0xd2c)]['Core'][_0x4d517f(0x6d2)][_0x4d517f(0x915)]['addEvent']({
                            'delay': 0x7530,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x1aa653 = _0x4d517f;
                                _0x1ea724[_0x1aa653(0xd2c)][_0x1aa653(0x1043)][_0x1aa653(0x17c7)]['spawnType'] = _0x21db8b;
                            }
                        });
                    } ['fnSummonMolise']() {
                        const _0x342f45 = _0x57d428;
                        let _0x8633be = _0x1ea724[_0x342f45(0xd2c)]['Core'][_0x342f45(0x17c7)][_0x342f45(0x15cf)];
                        _0x1ea724[_0x342f45(0xd2c)][_0x342f45(0x1043)]['Stage']['spawnType'] = _0x40bdce[_0x342f45(0xd2c)][_0x342f45(0x45d)], _0x1ea724['default'][_0x342f45(0x1043)][_0x342f45(0x17c7)]['enemies'] = [_0x344601['default']['MOLISANO_BELLO'], _0x344601['default']['MOLISANO_FAGIOLO'], _0x344601[_0x342f45(0xd2c)][_0x342f45(0x98f)], _0x344601[_0x342f45(0xd2c)][_0x342f45(0xbcf)], _0x344601['default']['MOLISANO_VECCHIO']], _0x1ea724['default'][_0x342f45(0x1043)][_0x342f45(0x17c7)][_0x342f45(0x11d3)] = 0x1f4, _0x1ea724['default'][_0x342f45(0x1043)]['Stage']['maximum'] = 0x1f4, _0x1ea724[_0x342f45(0xd2c)]['Core']['Stage']['frequency'] = 0x64, _0x1ea724[_0x342f45(0xd2c)]['Core']['Stage'][_0x342f45(0x4e1)](), _0x1ea724[_0x342f45(0xd2c)][_0x342f45(0x1043)][_0x342f45(0x6d2)]['time']['addEvent']({
                            'delay': 0x7530,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x63ab4d = _0x342f45;
                                _0x1ea724['default']['Core'][_0x63ab4d(0x17c7)][_0x63ab4d(0x15cf)] = _0x8633be;
                            }
                        });
                    } ['fnSummonNight']() {
                        const _0x59b541 = _0x57d428;
                        let _0x2318c4 = _0x1ea724[_0x59b541(0xd2c)]['Core']['Stage'][_0x59b541(0x15cf)];
                        _0x1ea724[_0x59b541(0xd2c)]['Core'][_0x59b541(0x17c7)][_0x59b541(0x15cf)] = _0x40bdce['default']['TILED'], _0x1ea724['default']['Core']['Stage']['enemies'] = [_0x344601['default'][_0x59b541(0x18bc)], _0x344601['default'][_0x59b541(0x1341)], _0x344601['default'][_0x59b541(0x169d)], _0x344601[_0x59b541(0xd2c)]['BAT6'], _0x344601[_0x59b541(0xd2c)][_0x59b541(0x2c6)], _0x344601['default'][_0x59b541(0x245)]], _0x1ea724['default'][_0x59b541(0x1043)][_0x59b541(0x17c7)]['updateNormalEnemyPoolsOnly'](), _0x1ea724[_0x59b541(0xd2c)][_0x59b541(0x1043)][_0x59b541(0x6d2)][_0x59b541(0x915)][_0x59b541(0x12b8)]({
                            'delay': 0x7530,
                            'loop': !0x1,
                            'callback': () => {
                                _0x1ea724['default']['Core']['Stage']['spawnType'] = _0x2318c4;
                            }
                        });
                    } ['fnMinuteOfPanic']() {
                        const _0x3490e3 = _0x57d428;
                        let _0x30bfa3 = _0x1ea724['default']['Core']['Stage'][_0x3490e3(0x15cf)];
                        _0x1ea724[_0x3490e3(0xd2c)][_0x3490e3(0x1043)][_0x3490e3(0x17c7)][_0x3490e3(0x15cf)] = _0x40bdce['default']['TILED'], _0x1ea724['default']['Core']['Stage'][_0x3490e3(0x1837)] = _0x1ea724[_0x3490e3(0xd2c)][_0x3490e3(0x1043)]['Stage'][_0x3490e3(0x1837)][_0x3490e3(0x16d)]([_0x344601[_0x3490e3(0xd2c)][_0x3490e3(0x74d)], _0x344601['default']['POLTER'], _0x344601['default']['POLTER_GEM']]), _0x1ea724['default']['Core']['Stage'][_0x3490e3(0x11d3)] += 0x32, _0x1ea724[_0x3490e3(0xd2c)][_0x3490e3(0x1043)]['Stage']['updateNormalEnemyPoolsOnly'](), _0x1ea724[_0x3490e3(0xd2c)]['Core'][_0x3490e3(0x6d2)][_0x3490e3(0x915)][_0x3490e3(0x12b8)]({
                            'delay': 0x7530,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x6f6242 = _0x3490e3;
                                _0x1ea724[_0x6f6242(0xd2c)][_0x6f6242(0x1043)][_0x6f6242(0x17c7)][_0x6f6242(0x15cf)] = _0x30bfa3;
                            }
                        });
                    } ['fnCandybox']() {
                        const _0xbe0d41 = _0x57d428;
                        let _0x1c2a31 = _0x1ea724['default'][_0xbe0d41(0x1043)][_0xbe0d41(0x10f6)]['x'],
                            _0x39ebf2 = _0x1ea724['default']['Core'][_0xbe0d41(0x10f6)]['y'] + 0.45 * this[_0xbe0d41(0x6d2)][_0xbe0d41(0x12f9)][_0xbe0d41(0x140e)];
                        _0x1ea724[_0xbe0d41(0xd2c)][_0xbe0d41(0x1043)][_0xbe0d41(0x13f8)](_0x1c2a31, _0x39ebf2, _0x4f860f[_0xbe0d41(0xd2c)][_0xbe0d41(0x17b3)], _0x44ac63['default'][_0xbe0d41(0x1b07)])[_0xbe0d41(0x1439)] = !0x1, _0x1ea724[_0xbe0d41(0xd2c)]['Core'][_0xbe0d41(0x503)][_0xbe0d41(0xf96)](_0x1c2a31, _0x39ebf2);
                    } ['fnHighGravity'](_0x141e45) {
                        const _0x166f93 = _0x57d428;
                        _0x1ea724['default']['Core']['scene']['physics']['world']['gravity']['y'] = 0xc8, _0x1ea724[_0x166f93(0xd2c)][_0x166f93(0x1043)][_0x166f93(0x6d2)]['time']['addEvent']({
                            'delay': 0.5 * _0x141e45,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x3d8836 = _0x166f93;
                                _0x1ea724['default'][_0x3d8836(0x1043)]['scene'][_0x3d8836(0x1585)]['world'][_0x3d8836(0xaf6)]['y'] = -0xc8;
                            }
                        }), _0x1ea724[_0x166f93(0xd2c)][_0x166f93(0x1043)]['scene'][_0x166f93(0x915)]['addEvent']({
                            'delay': _0x141e45,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x4a697c = _0x166f93;
                                _0x1ea724[_0x4a697c(0xd2c)]['Core'][_0x4a697c(0x6d2)]['physics']['world']['gravity']['y'] = 0x0;
                            }
                        });
                    } ['fnCrabFest']() {
                        const _0x3f79e5 = _0x57d428;
                        let _0x51b23a = _0x1ea724['default']['Core']['Stage'][_0x3f79e5(0x15cf)];
                        _0x1ea724[_0x3f79e5(0xd2c)][_0x3f79e5(0x1043)]['Stage']['spawnType'] = _0x40bdce['default'][_0x3f79e5(0x45d)], _0x1ea724[_0x3f79e5(0xd2c)]['Core']['Stage'][_0x3f79e5(0x1837)]['push'](_0x344601['default']['MOON_CRABBINO']), _0x1ea724[_0x3f79e5(0xd2c)][_0x3f79e5(0x1043)][_0x3f79e5(0x17c7)][_0x3f79e5(0x11d3)] += 0x32, _0x1ea724[_0x3f79e5(0xd2c)][_0x3f79e5(0x1043)][_0x3f79e5(0x17c7)]['updateNormalEnemyPoolsOnly'](), _0x1ea724['default'][_0x3f79e5(0x1043)][_0x3f79e5(0x6d2)][_0x3f79e5(0x915)]['addEvent']({
                            'delay': 0x7530,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x18563a = _0x3f79e5;
                                _0x1ea724[_0x18563a(0xd2c)]['Core']['Stage'][_0x18563a(0x15cf)] = _0x51b23a;
                            }
                        });
                    } ['fnRemoveWalls']() {
                        const _0x11e0f5 = _0x57d428;
                        _0x1ea724['default']['Core'][_0x11e0f5(0x17c7)][_0x11e0f5(0x17cf)] = [];
                        for (let _0x472e9f = 0x0; _0x472e9f < _0x1ea724[_0x11e0f5(0xd2c)]['Core']['Stage'][_0x11e0f5(0xbef)][_0x11e0f5(0x730)][_0x11e0f5(0xed9)]; _0x472e9f++) {
                            const _0x13a2a0 = _0x1ea724['default'][_0x11e0f5(0x1043)]['Stage'][_0x11e0f5(0xbef)]['layerContainers'][_0x472e9f];
                            this['scene'][_0x11e0f5(0x12a1)][_0x11e0f5(0x18bd)]({
                                'targets': _0x13a2a0[_0x11e0f5(0x1629)],
                                'alpha': 0x0,
                                'duration': 0x3e8,
                                'onComplete': () => {
                                    const _0xc956d3 = _0x11e0f5;
                                    let _0x31bfa1 = _0x1ea724[_0xc956d3(0xd2c)][_0xc956d3(0x1043)]['Stage'][_0xc956d3(0xbef)]['maps'];
                                    _0x1ea724[_0xc956d3(0xd2c)]['Core'][_0xc956d3(0x17c7)][_0xc956d3(0x15cf)] = _0x40bdce['default'][_0xc956d3(0xae7)];
                                    for (let _0x3b19d4 = 0x0; _0x3b19d4 < _0x31bfa1['length']; _0x3b19d4++) {
                                        const _0x10fc65 = _0x31bfa1[_0x3b19d4];
                                        for (let _0x1d0bc9 = 0x0; _0x1d0bc9 < _0x10fc65[_0xc956d3(0x1629)]['length']; _0x1d0bc9++) {
                                            const _0x1aa2e5 = _0x10fc65['layers'][_0x1d0bc9];
                                            'Floor' !== _0x1aa2e5[_0xc956d3(0x226)] && ('FloorOverlay' !== _0x1aa2e5['name'] && _0x10fc65['getTilesWithin'](0x0, 0x0, 0x40, 0x40, {}, _0x1aa2e5[_0xc956d3(0x226)])[_0xc956d3(0x858)](_0x1dc6c5 => {
                                                const _0x2b620d = _0xc956d3;
                                                _0x10fc65[_0x2b620d(0x1ec)](_0x1dc6c5);
                                            }));
                                        }
                                    }
                                }
                            });
                        }
                    }
                };
            };
