// Module 0x29d2
// Args: _0x38ad5f, _0x1aa9ce, _0x586a06

export default (_0x38ad5f, _0x1aa9ce, _0x586a06) => {
                'use strict';
                const _0x16dd12 = a0_0x6932;
                var _0x50db82 = this && this['__importDefault'] || function(_0x29316e) {
                    return _0x29316e && _0x29316e['__esModule'] ? _0x29316e : {
                        'default': _0x29316e
                    };
                };
                Object['defineProperty'](_0x1aa9ce, '__esModule', {
                    'value': !0x0
                }), _0x1aa9ce['W_HeavenSword'] = void 0x0;
                const _0x270e4d = _0x50db82(_0x586a06(0x9b68)),
                    _0x24a955 = _0x50db82(_0x586a06(0x5f07)),
                    _0x2ce019 = _0x50db82(_0x586a06(0xe49a));
                class _0x50931b extends _0x2ce019['default'] {
                    constructor(_0x4316c5) {
                        super(_0x4316c5);
                    } ['onBulletOverlapsEnemy'](_0x4e059a, _0x3422bc) {
                        const _0x497480 = _0x16dd12;
                        var _0xe7e535 = _0x3422bc;
                        if (_0xe7e535[_0x497480(0xdae)]) return;
                        let _0x3bfcbd = Math['random']() < this['critChance'] * _0x24a955[_0x497480(0xd2c)][_0x497480(0x1043)][_0x497480(0x10f6)]['PLuck'] ? this['critMul'] * _0x24a955[_0x497480(0xd2c)][_0x497480(0x1043)][_0x497480(0x1884)]['CritMul'] : 0x1;
                        if (!_0x4e059a['HasAlreadyHitObject'](_0xe7e535)) {
                            let _0x4fb527 = this[_0x497480(0xaae)] * _0x3bfcbd;
                            _0xe7e535[_0x497480(0x1112)](_0x4fb527, this['hitVFX'], this[_0x497480(0x1992)], this['bulletType']), this['stats_inflictedDamage'] += _0x4fb527;
                        }
                    } ['CheckArcanas']() {
                        const _0xa28dd6 = _0x16dd12;
                        _0x24a955[_0xa28dd6(0xd2c)][_0xa28dd6(0x1043)][_0xa28dd6(0x1884)][_0xa28dd6(0x15e7)][_0xa28dd6(0x1303)](_0x270e4d[_0xa28dd6(0xd2c)]['T11_PEARLS']) > -0x1 && (this[_0xa28dd6(0x1985)] = 0x2), super['CheckArcanas']();
                    }
                    get['PBounces']() {
                        const _0x55c127 = _0x16dd12;
                        return this[_0x55c127(0x1985)] + this['bounces'];
                    }
                }
                _0x1aa9ce['W_HeavenSword'] = _0x50931b, _0x1aa9ce['default'] = _0x50931b;
            };
