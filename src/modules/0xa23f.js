// Module 0xa23f
// Args: _0x15fc3f, _0x5c7544, _0x3460c2

export default (_0x15fc3f, _0x5c7544, _0x3460c2) => {
                'use strict';
                const _0x450666 = a0_0x6932;
                var _0x26d9df = this && this['__importDefault'] || function(_0x14d730) {
                    const _0x20b234 = _0x450666;
                    return _0x14d730 && _0x14d730[_0x20b234(0x16f1)] ? _0x14d730 : {
                        'default': _0x14d730
                    };
                };
                Object['defineProperty'](_0x5c7544, '__esModule', {
                    'value': !0x0
                }), _0x5c7544['W_Cart'] = void 0x0;
                const _0x2941c2 = _0x26d9df(_0x3460c2(0xe49a)),
                    _0x132ab1 = _0x26d9df(_0x3460c2(0x54e3)),
                    _0x3b8f14 = _0x26d9df(_0x3460c2(0x5f07));
                class _0x40ecd7 extends _0x2941c2['default'] {
                    constructor(_0x2f4903) {
                        super(_0x2f4903);
                    }
                    get['PAmount']() {
                        return 0x1;
                    }
                    get['PPower']() {
                        const _0x294cd3 = _0x450666;
                        return _0x3b8f14[_0x294cd3(0xd2c)]['Core'][_0x294cd3(0x10f6)][_0x294cd3(0x31f)] * this[_0x294cd3(0x31f)] * (0x1 + 0x2 * Math['random']());
                    }
                    get['PInterval']() {
                        const _0x150b27 = _0x450666;
                        let _0x3c2e28 = Math[_0x150b27(0x1981)](0.1, _0x3b8f14[_0x150b27(0xd2c)]['Core']['Player'][_0x150b27(0xe0e)]) * this[_0x150b27(0x1d8)];
                        return Math['max'](_0x3c2e28, 0x2710);
                    } ['onBulletOverlapsEnemy'](_0x33fb12, _0x1cb4d0) {
                        const _0x99fdf7 = _0x450666;
                        var _0x7fbff4 = _0x1cb4d0;
                        _0x7fbff4['isDead'] || _0x33fb12[_0x99fdf7(0x1738)](_0x7fbff4) || (_0x7fbff4['GetDamaged'](this[_0x99fdf7(0xaae)], this['hitVFX'], this['knockback'], _0x132ab1['default']['CART']), this[_0x99fdf7(0xb3d)] += this[_0x99fdf7(0xaae)]);
                    } ['ResetFiringTimer']() {
                        const _0x535765 = _0x450666;
                        this['firingTimer'] && this[_0x535765(0x19b7)][_0x535765(0x16ca)]();
                    }
                }
                _0x5c7544['W_Cart'] = _0x40ecd7, _0x5c7544['default'] = _0x40ecd7;
            };
