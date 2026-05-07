// Module 0x1e1f
// Args: _0x4009ae, _0x1a6eab, _0x5a1a7d

export default (_0x4009ae, _0x1a6eab, _0x5a1a7d) => {
                'use strict';
                const _0x3b1109 = a0_0x6932;
                var _0x174fd7 = this && this['__importDefault'] || function(_0x336704) {
                    const _0x1e81fb = a0_0x6932;
                    return _0x336704 && _0x336704['__esModule'] ? _0x336704 : {
                        'default': _0x336704
                    };
                };
                Object['defineProperty'](_0x1a6eab, '__esModule', {
                    'value': !0x0
                }), _0x1a6eab['W_Hellfire'] = void 0x0;
                const _0x3f656f = _0x174fd7(_0x5a1a7d(0xe49a)),
                    _0x750381 = _0x174fd7(_0x5a1a7d(0x54e3)),
                    _0x572102 = _0x174fd7(_0x5a1a7d(0x5f07)),
                    _0x50311c = _0x174fd7(_0x5a1a7d(0x1fd7)),
                    _0x18ec73 = _0x174fd7(_0x5a1a7d(0x9b68));
                class _0x985177 extends _0x3f656f['default'] {
                    constructor(_0x42e677) {
                        const _0x49c182 = _0x3b1109;
                        super(_0x42e677), this[_0x49c182(0xdfc)] = _0x750381[_0x49c182(0xd2c)][_0x49c182(0x1167)];
                    } ['Fire']() {
                        const _0x5ae44c = _0x3b1109;
                        this[_0x5ae44c(0x18a7)] = Phaser[_0x5ae44c(0x24f)][_0x5ae44c(0x82a)][_0x5ae44c(0x198c)](_0x572102[_0x5ae44c(0xd2c)]['Core'][_0x5ae44c(0x1718)][_0x5ae44c(0x3fe)][_0x5ae44c(0x10c5)]), _0x572102[_0x5ae44c(0xd2c)]['Sound'][_0x5ae44c(0x7f6)](_0x50311c['default'][_0x5ae44c(0x9ca)], {
                            'detune': 0x0,
                            'volume': 0.2
                        }, 0xc8, 0xa), super[_0x5ae44c(0x1754)]();
                    } ['CheckArcanas']() {
                        const _0xa5d369 = _0x3b1109;
                        _0x572102[_0xa5d369(0xd2c)][_0xa5d369(0x1043)]['Arcanas'][_0xa5d369(0x15e7)][_0xa5d369(0x1303)](_0x18ec73[_0xa5d369(0xd2c)][_0xa5d369(0x299)]) > -0x1 && _0x572102['default']['Core'][_0xa5d369(0x1884)]['FireExplosionWeapon'] && (_0x572102[_0xa5d369(0xd2c)][_0xa5d369(0x1043)]['Arcanas'][_0xa5d369(0xe86)]['power'] = 0.5 * this[_0xa5d369(0x31f)]), _0x572102['default'][_0xa5d369(0x1043)][_0xa5d369(0x1884)][_0xa5d369(0x15e7)][_0xa5d369(0x1303)](_0x18ec73['default'][_0xa5d369(0xf63)]) > -0x1 && (this['bonusBounces'] = 0x1), super['CheckArcanas']();
                    } ['onSecondaryBulletOverlapsEnemy'](_0x54a9b7, _0x4b52f7) {
                        const _0x5b36f3 = _0x3b1109;
                        var _0x445468 = _0x4b52f7;
                        if (!_0x445468[_0x5b36f3(0xdae)] && !_0x54a9b7['HasAlreadyHitObject'](_0x445468)) {
                            let _0x492131 = 0.5 * this[_0x5b36f3(0xaae)];
                            _0x445468[_0x5b36f3(0x1112)](_0x492131, this['hitVFX'], this[_0x5b36f3(0x1992)], this[_0x5b36f3(0x14e)]), this[_0x5b36f3(0xb3d)] += _0x492131;
                        }
                    }
                    get['PBounces']() {
                        return this['bonusBounces'] + this['bounces'];
                    }
                }
                _0x1a6eab['W_Hellfire'] = _0x985177, _0x1a6eab['default'] = _0x985177;
            };
