// Module 0x8e78
// Args: _0x2072ff, _0x12fae4, _0x4a221b

export default (_0x2072ff, _0x12fae4, _0x4a221b) => {
                'use strict';
                const _0x24cfba = a0_0x6932;
                var _0x13470b = this && this['__importDefault'] || function(_0x9c76ed) {
                    return _0x9c76ed && _0x9c76ed['__esModule'] ? _0x9c76ed : {
                        'default': _0x9c76ed
                    };
                };
                Object['defineProperty'](_0x12fae4, '__esModule', {
                    'value': !0x0
                }), _0x12fae4['B_Guns3'] = void 0x0;
                const _0x1059ad = _0x13470b(_0x4a221b(0xa14d)),
                    _0x934754 = _0x13470b(_0x4a221b(0x5103));
                class _0x51836a extends _0x1059ad['default'] {
                    constructor(_0x3ec551, _0x51259c, _0x391a1b, _0x566c6a, _0x46437a, _0x3ffca8 = 'HitRed1.png') {
                        super(_0x3ec551, _0x51259c, _0x391a1b, 'vfx', _0x3ffca8, _0x566c6a, _0x46437a);
                    } ['OnRecycle']() {
                        const _0x49a4f6 = _0x24cfba;
                        super[_0x49a4f6(0x5ce)](), this[_0x49a4f6(0x8a2)](0x1), this[_0x49a4f6(0xcf9)]['setCircle'](0xa), this[_0x49a4f6(0x183f)](!0x1), this['setScale'](this[_0x49a4f6(0x4a1)][_0x49a4f6(0x5f5)]);
                    } ['SetTarget'](_0x39bcb1) {
                        const _0x25d739 = _0x24cfba;
                        this[_0x25d739(0x6d2)][_0x25d739(0x1585)][_0x25d739(0x18fc)](_0x39bcb1, 0xa * _0x934754[_0x25d739(0xd2c)]['ProjectileSpeed'], this[_0x25d739(0xcf9)][_0x25d739(0xf4e)]);
                    } ['OnHasHitAnObject'](_0x46c332) {
                        _0x46c332['isDead'] || (this['penetrating']--, this['penetrating'] <= 0x0 && this['DeSpawn']());
                    }
                }
                _0x12fae4['B_Guns3'] = _0x51836a, _0x12fae4['default'] = _0x51836a;
            };
