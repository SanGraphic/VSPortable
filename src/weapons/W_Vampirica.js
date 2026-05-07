// Module 0xd684
// Args: _0x3b8d2c, _0x37d016, _0x2070cd

export default (_0x3b8d2c, _0x37d016, _0x2070cd) => {
                'use strict';
                const _0x1ea473 = a0_0x6932;
                var _0x4b4884 = this && this['__importDefault'] || function(_0x4e399c) {
                    return _0x4e399c && _0x4e399c['__esModule'] ? _0x4e399c : {
                        'default': _0x4e399c
                    };
                };
                Object['defineProperty'](_0x37d016, '__esModule', {
                    'value': !0x0
                }), _0x37d016['W_Vampirica'] = void 0x0;
                const _0x21e01a = _0x4b4884(_0x2070cd(0x9b68)),
                    _0x25c669 = _0x4b4884(_0x2070cd(0x5f07)),
                    _0xea6802 = _0x4b4884(_0x2070cd(0xe49a));
                class _0x5d728d extends _0xea6802['default'] {
                    constructor(_0x301521) {
                        const _0x4a5410 = _0x1ea473;
                        super(_0x301521), this[_0x4a5410(0x6fe)] = !0x0, this[_0x4a5410(0x5fd)] = 0x3e8;
                    } ['CheckArcanas']() {
                        const _0x1f75b4 = _0x1ea473;
                        _0x25c669['default'][_0x1f75b4(0x1043)][_0x1f75b4(0x1884)][_0x1f75b4(0x15e7)]['indexOf'](_0x21e01a['default'][_0x1f75b4(0x954)]) > -0x1 && (this['canCrit'] = !0x0), super['CheckArcanas']();
                    } ['onBulletOverlapsEnemy'](_0x5ef0da, _0x5eb775) {
                        const _0xfaa0ab = _0x1ea473;
                        var _0x4ae699 = _0x5eb775;
                        if (_0x4ae699['isDead']) return;
                        let _0x30190c = Math['random']() < this['critChance'] * _0x25c669[_0xfaa0ab(0xd2c)]['Core'][_0xfaa0ab(0x10f6)][_0xfaa0ab(0x17b9)] ? this[_0xfaa0ab(0x891)] * _0x25c669[_0xfaa0ab(0xd2c)][_0xfaa0ab(0x1043)][_0xfaa0ab(0x1884)]['CritMul'] : 0x1;
                        if (_0x30190c > 0x1 && this[_0xfaa0ab(0x6fe)] && (this['canHeal'] = !0x1, _0x25c669[_0xfaa0ab(0xd2c)]['Core'][_0xfaa0ab(0x10f6)][_0xfaa0ab(0x7b2)](0x8, !0x0), this[_0xfaa0ab(0xdd9)] = _0x25c669[_0xfaa0ab(0xd2c)][_0xfaa0ab(0x1043)][_0xfaa0ab(0x6d2)]['time']['addEvent']({
                                'delay': this[_0xfaa0ab(0x5fd)],
                                'loop': !0x1,
                                'callback': () => {
                                    this['canHeal'] = !0x0;
                                }
                            })), !_0x5ef0da[_0xfaa0ab(0x1738)](_0x4ae699)) {
                            let _0x59b6f8 = this['PPower'] * _0x30190c;
                            _0x4ae699['GetDamaged'](_0x59b6f8, this[_0xfaa0ab(0x347)], this['knockback'], this[_0xfaa0ab(0x14e)]), this['stats_inflictedDamage'] += _0x59b6f8;
                        }
                    }
                }
                _0x37d016['W_Vampirica'] = _0x5d728d, _0x37d016['default'] = _0x5d728d;
            };
