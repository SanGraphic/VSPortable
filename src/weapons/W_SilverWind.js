// Module 0xf6a6
// Args: _0xb80ee, _0x594dc5, _0x26f3e4

export default (_0xb80ee, _0x594dc5, _0x26f3e4) => {
                'use strict';
                const _0x22104e = a0_0x6932;
                var _0x1c8802 = this && this['__importDefault'] || function(_0x10dae7) {
                    const _0x12cb5c = a0_0x6932;
                    return _0x10dae7 && _0x10dae7['__esModule'] ? _0x10dae7 : {
                        'default': _0x10dae7
                    };
                };
                Object['defineProperty'](_0x594dc5, '__esModule', {
                    'value': !0x0
                }), _0x594dc5['W_SilverWind'] = void 0x0;
                const _0x57e97b = _0x1c8802(_0x26f3e4(0x9b68)),
                    _0x3afc4c = _0x1c8802(_0x26f3e4(0xc42e)),
                    _0x441e65 = _0x1c8802(_0x26f3e4(0x54e3)),
                    _0x4369a9 = _0x1c8802(_0x26f3e4(0x5f07)),
                    _0x11f364 = _0x1c8802(_0x26f3e4(0xe49a));
                class _0xe685fd extends _0x11f364['default'] {
                    constructor(_0x37d6c6) {
                        const _0xd15359 = _0x22104e;
                        super(_0x37d6c6), this[_0xd15359(0x1007)] = !0x1, this['explosionType'] = _0x441e65[_0xd15359(0xd2c)]['RAYEXPLOSION'];
                    }
                    get['PPower']() {
                        const _0x575310 = _0x22104e;
                        return super['PPower'] + _0x4369a9[_0x575310(0xd2c)][_0x575310(0x1043)][_0x575310(0x1884)]['bloodlineArmorValue'];
                    } ['CheckArcanas']() {
                        const _0x403f44 = _0x22104e;
                        _0x4369a9[_0x403f44(0xd2c)][_0x403f44(0x1043)]['Arcanas'][_0x403f44(0x15e7)][_0x403f44(0x1303)](_0x57e97b[_0x403f44(0xd2c)][_0x403f44(0x6be)]) > -0x1 && (this['explodeOnExpire'] = !0x0), super[_0x403f44(0x1ce)]();
                    } ['onBulletOverlapsEnemy'](_0x49f33f, _0x5f2fa7) {
                        const _0x1f6136 = _0x22104e;
                        var _0x429fd6 = _0x5f2fa7;
                        if (!_0x429fd6['isDead'] && !_0x49f33f[_0x1f6136(0x1738)](_0x429fd6) && (_0x429fd6['GetDamaged'](this[_0x1f6136(0xaae)], this['hitVFX'], this[_0x1f6136(0x1992)], this[_0x1f6136(0x14e)]), this[_0x1f6136(0xb3d)] += this[_0x1f6136(0xaae)], _0x429fd6['isDead'])) {
                            let _0x24ffc8 = this[_0x1f6136(0x433)][this['critIndex'] % this[_0x1f6136(0x433)][_0x1f6136(0xed9)]];
                            if (this['critIndex']++, _0x24ffc8 <= this['chance'] * _0x4369a9[_0x1f6136(0xd2c)]['Core']['Player'][_0x1f6136(0x17b9)]) {
                                let _0x50be8f = _0x4369a9['default']['Core'][_0x1f6136(0xccb)](_0x429fd6['x'], _0x429fd6['y'], _0x3afc4c['default']['LITTLEHEART']);
                                _0x50be8f[_0x1f6136(0x12a8)] = !0x0, _0x50be8f['time'] = 0x1, _0x50be8f[_0x1f6136(0x1378)] = 0.1;
                            }
                        }
                    }
                }
                _0x594dc5['W_SilverWind'] = _0xe685fd, _0x594dc5['default'] = _0xe685fd;
            };
