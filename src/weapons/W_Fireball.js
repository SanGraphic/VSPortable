// Module 0xa894
// Args: _0x47c03b, _0xb607b1, _0x86c997

export default (_0x47c03b, _0xb607b1, _0x86c997) => {
                'use strict';
                const _0x11d0e1 = a0_0x6932;
                var _0x5af772 = this && this['__importDefault'] || function(_0x48f42f) {
                    const _0x5e31fa = _0x11d0e1;
                    return _0x48f42f && _0x48f42f[_0x5e31fa(0x16f1)] ? _0x48f42f : {
                        'default': _0x48f42f
                    };
                };
                Object['defineProperty'](_0xb607b1, '__esModule', {
                    'value': !0x0
                }), _0xb607b1['W_Fireball'] = void 0x0;
                const _0x1e5c5c = _0x5af772(_0x86c997(0x5f07)),
                    _0x26ed2d = _0x5af772(_0x86c997(0x54e3)),
                    _0x4e7a1c = _0x5af772(_0x86c997(0xe49a)),
                    _0x16292e = _0x5af772(_0x86c997(0x1fd7)),
                    _0x57b7cd = _0x5af772(_0x86c997(0x9b68));
                class _0x3287e6 extends _0x4e7a1c['default'] {
                    constructor(_0x291902) {
                        const _0xad5ea8 = _0x11d0e1;
                        super(_0x291902), this['explosionType'] = _0x26ed2d[_0xad5ea8(0xd2c)][_0xad5ea8(0x1167)];
                    } ['Fire']() {
                        const _0x17387d = _0x11d0e1;
                        this['target'] = Phaser[_0x17387d(0x24f)]['RND'][_0x17387d(0x198c)](_0x1e5c5c['default'][_0x17387d(0x1043)][_0x17387d(0x1a91)]), _0x1e5c5c[_0x17387d(0xd2c)]['Sound'][_0x17387d(0x7f6)](_0x16292e[_0x17387d(0xd2c)][_0x17387d(0x9ca)], {
                            'detune': 0x0,
                            'volume': 0.2
                        }, 0xc8, 0xa), super[_0x17387d(0x1754)]();
                    } ['CheckArcanas']() {
                        const _0x34007a = _0x11d0e1;
                        _0x1e5c5c['default'][_0x34007a(0x1043)][_0x34007a(0x1884)]['ActiveArcanas'][_0x34007a(0x1303)](_0x57b7cd[_0x34007a(0xd2c)]['T19_FIRE']) > -0x1 && _0x1e5c5c[_0x34007a(0xd2c)][_0x34007a(0x1043)]['Arcanas'][_0x34007a(0xe86)] && (_0x1e5c5c[_0x34007a(0xd2c)][_0x34007a(0x1043)][_0x34007a(0x1884)][_0x34007a(0xe86)][_0x34007a(0x31f)] = 0.5 * this['power']), _0x1e5c5c[_0x34007a(0xd2c)][_0x34007a(0x1043)][_0x34007a(0x1884)][_0x34007a(0x15e7)][_0x34007a(0x1303)](_0x57b7cd[_0x34007a(0xd2c)][_0x34007a(0xf63)]) > -0x1 && (this[_0x34007a(0x1985)] = 0x3), super[_0x34007a(0x1ce)]();
                    } ['onSecondaryBulletOverlapsEnemy'](_0x154803, _0x4b3a5c) {
                        const _0x2fb528 = _0x11d0e1;
                        var _0x131977 = _0x4b3a5c;
                        if (!_0x131977['isDead'] && !_0x154803['HasAlreadyHitObject'](_0x131977)) {
                            let _0x2e947 = 0.5 * this[_0x2fb528(0xaae)];
                            _0x131977['GetDamaged'](_0x2e947, this[_0x2fb528(0x347)], this[_0x2fb528(0x1992)], this[_0x2fb528(0x14e)]), this['stats_inflictedDamage'] += _0x2e947;
                        }
                    }
                    get['PBounces']() {
                        const _0x22ce6c = _0x11d0e1;
                        return this[_0x22ce6c(0x1985)] + this['bounces'];
                    }
                }
                _0xb607b1['W_Fireball'] = _0x3287e6, _0xb607b1['default'] = _0x3287e6;
            };
