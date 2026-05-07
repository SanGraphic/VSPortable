// Module 0x18540
// Args: _0x167a1f, _0x287fed, _0x3dfc2e

export default (_0x167a1f, _0x287fed, _0x3dfc2e) => {
                'use strict';
                const _0x3f5e31 = a0_0x6932;
                var _0x206445 = this && this['__importDefault'] || function(_0x2d1342) {
                    const _0x48a1a0 = _0x3f5e31;
                    return _0x2d1342 && _0x2d1342[_0x48a1a0(0x16f1)] ? _0x2d1342 : {
                        'default': _0x2d1342
                    };
                };
                Object['defineProperty'](_0x287fed, '__esModule', {
                    'value': !0x0
                });
                const _0x361e44 = _0x206445(_0x3dfc2e(0x5f07));
                class _0x28f09 extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0xa767e8, _0x230122, _0x1f6206) {
                        const _0x4725af = _0x3f5e31;
                        super(_0xa767e8, _0x230122, _0x1f6206, 'vfx', 'WhiteDot.png'), this['radius'] = 0x1e, this[_0x4725af(0xdbb)] = 0x1, this[_0x4725af(0x35a)] = !0x1, _0xa767e8[_0x4725af(0x1585)][_0x4725af(0x18bd)]['existing'](this), this[_0x4725af(0x8a2)](_0x361e44['default'][_0x4725af(0x1043)][_0x4725af(0x10f6)][_0x4725af(0x7cb)]), this[_0x4725af(0xcf9)]['setCircle'](this[_0x4725af(0x161a)], -this[_0x4725af(0x161a)], -this[_0x4725af(0x161a)]), this['percentage'] = 0x1;
                    } ['RefreshSize']() {
                        const _0x4a8054 = _0x3f5e31;
                        this[_0x4a8054(0xcf9)][_0x4a8054(0xdf6)](this[_0x4a8054(0x161a)], -this[_0x4a8054(0x161a)], -this['radius']);
                    } ['Update']() {
                        const _0x564ab5 = _0x3f5e31;
                        this[_0x564ab5(0xf01)](_0x361e44[_0x564ab5(0xd2c)][_0x564ab5(0x1043)]['Player']), this['y'] -= 0xc;
                    }
                }
                _0x287fed['default'] = _0x28f09;
            };
