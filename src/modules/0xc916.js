// Module 0xc916
// Args: _0x1d8675, _0x14306b, _0x23bcca

export default (_0x1d8675, _0x14306b, _0x23bcca) => {
                'use strict';
                const _0xed78c8 = a0_0x6932;
                var _0x108506 = this && this['__importDefault'] || function(_0xabbea) {
                    const _0x41dbb5 = a0_0x6932;
                    return _0xabbea && _0xabbea['__esModule'] ? _0xabbea : {
                        'default': _0xabbea
                    };
                };
                Object['defineProperty'](_0x14306b, '__esModule', {
                    'value': !0x0
                }), _0x14306b['W_Diamond'] = void 0x0;
                const _0x45b1b9 = _0x108506(_0x23bcca(0x9b68)),
                    _0x170915 = _0x108506(_0x23bcca(0x54e3)),
                    _0x2602ed = _0x108506(_0x23bcca(0x5f07)),
                    _0x166816 = _0x108506(_0x23bcca(0xe49a));
                class _0x3f8306 extends _0x166816['default'] {
                    constructor(_0x33c9c8) {
                        const _0x19703b = a0_0x6932;
                        super(_0x33c9c8), this['SecondaryOvarlapDamageType'] = _0x170915['default']['CURSE'], this['explodeOnExpire'] = !0x1, this['explosionType'] = _0x170915['default']['RAYEXPLOSION'];
                    } ['Fire']() {
                        const _0x5196ee = _0xed78c8;
                        this['target'] = Phaser[_0x5196ee(0x24f)]['RND'][_0x5196ee(0x198c)](_0x2602ed[_0x5196ee(0xd2c)]['Core']['Enemies']), super[_0x5196ee(0x1754)]();
                    } ['CheckArcanas']() {
                        const _0xc2003e = _0xed78c8;
                        _0x2602ed[_0xc2003e(0xd2c)][_0xc2003e(0x1043)][_0xc2003e(0x1884)][_0xc2003e(0x15e7)][_0xc2003e(0x1303)](_0x45b1b9['default']['T02_TWILIGHT']) > -0x1 && (this['explodeOnExpire'] = !0x0), _0x2602ed['default']['Core']['Arcanas']['ActiveArcanas'][_0xc2003e(0x1303)](_0x45b1b9[_0xc2003e(0xd2c)][_0xc2003e(0x172d)]) > -0x1 && (this['freezeChance'] = 0.25), super[_0xc2003e(0x1ce)]();
                    } ['onBulletOverlapsEnemy'](_0x20f7f4, _0x51a989) {
                        const _0x387719 = _0xed78c8;
                        var _0x42b115 = _0x51a989;
                        _0x42b115[_0x387719(0xdae)] || _0x20f7f4['HasAlreadyHitObject'](_0x42b115) || (_0x42b115[_0x387719(0x1112)](this[_0x387719(0xaae)], this[_0x387719(0x347)], this[_0x387719(0x1992)], this['bulletType']), this[_0x387719(0xb3d)] += this['PPower']);
                    }
                }
                _0x14306b['W_Diamond'] = _0x3f8306, _0x14306b['default'] = _0x3f8306;
            };
