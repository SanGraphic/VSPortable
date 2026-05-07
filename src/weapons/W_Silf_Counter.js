// Module 0x17c85
// Args: _0x4e0982, _0x3441e2, _0x107b2d

export default (_0x4e0982, _0x3441e2, _0x107b2d) => {
                'use strict';
                const _0x373e9f = a0_0x6932;
                var _0xbdb401 = this && this['__importDefault'] || function(_0x554cbe) {
                    const _0x5567c8 = a0_0x6932;
                    return _0x554cbe && _0x554cbe['__esModule'] ? _0x554cbe : {
                        'default': _0x554cbe
                    };
                };
                Object['defineProperty'](_0x3441e2, '__esModule', {
                    'value': !0x0
                }), _0x3441e2['W_Silf_Counter'] = void 0x0;
                const _0x5bb782 = _0xbdb401(_0x107b2d(0x9b68)),
                    _0x135ecb = _0xbdb401(_0x107b2d(0x54e3)),
                    _0x19ede2 = _0xbdb401(_0x107b2d(0x5103)),
                    _0x7f2a6a = _0xbdb401(_0x107b2d(0x5f07)),
                    _0x4e4c56 = _0xbdb401(_0x107b2d(0x13a8e));
                class _0x1bd550 extends _0x4e4c56['default'] {
                    constructor() {
                        const _0x191f72 = _0x373e9f;
                        super(...arguments), this['SecondaryOvarlapDamageType'] = _0x135ecb[_0x191f72(0xd2c)]['CURSE'], this[_0x191f72(0xa76)] = new Array(), this[_0x191f72(0x8f8)] = 0x96, this['totalTime'] = 0x0, this[_0x191f72(0x124c)] = 0x0, this[_0x191f72(0x196b)] = 0x32, this['blockFire'] = !0x1, this[_0x191f72(0x14a5)] = 0x0, this[_0x191f72(0x1adc)] = 0x1, this['rayDuration'] = 0x1f4, this[_0x191f72(0x70d)] = new Phaser[(_0x191f72(0x24f))][(_0x191f72(0x1551))](0x0, 0x0), this[_0x191f72(0x1a07)] = _0x19ede2['default']['PlayerPxSpeed'] / 1.178571428571429, this[_0x191f72(0x13e)] = 0x88ffff, this['spriteName'] = 'ProjectileBird_C2.png', this[_0x191f72(0x134e)] = 0x18;
                    }
                    get['OffsetX']() {
                        const _0x3f1684 = _0x373e9f;
                        return _0x7f2a6a[_0x3f1684(0xd2c)]['Core']['Player'][_0x3f1684(0x4d4)] ? 0x24 : -0x24;
                    } ['SetTargetZonePosition'](_0x106ab7) {
                        const _0x2a9df0 = _0x373e9f;
                        this[_0x2a9df0(0x1013)]['x'] = _0x7f2a6a['default'][_0x2a9df0(0x1043)]['Player']['x'] + Math[_0x2a9df0(0xd7e)](_0x106ab7) * this['damageZoneDistance'], this['targetZone']['y'] = _0x7f2a6a[_0x2a9df0(0xd2c)][_0x2a9df0(0x1043)]['Player']['y'] + Math[_0x2a9df0(0xc80)](_0x106ab7) * this['damageZoneDistance'];
                    } ['SetDamageZoneZonePosition'](_0x282b3a) {
                        const _0x34b7ca = _0x373e9f;
                        this[_0x34b7ca(0xb44)]['x'] = _0x7f2a6a[_0x34b7ca(0xd2c)][_0x34b7ca(0x1043)]['Player']['x'] + Math['cos'](_0x282b3a) * this[_0x34b7ca(0x8f8)], this['damageZone']['y'] = _0x7f2a6a[_0x34b7ca(0xd2c)]['Core']['Player']['y'] + Math[_0x34b7ca(0xc80)](_0x282b3a) * this['damageZoneDistance'];
                    } ['GetSpriteNames'](_0x19fe5f) {
                        const _0x173e37 = _0x373e9f;
                        return this['sprite']['anims'][_0x173e37(0x1756)]('vfx', {
                            'start': 0x1,
                            'end': 0x2,
                            'zeroPad': 0x0,
                            'prefix': 'ProjectileBird_C',
                            'suffix': '.png'
                        });
                    } ['CheckArcanas']() {
                        const _0x19bb5a = _0x373e9f;
                        _0x7f2a6a['default'][_0x19bb5a(0x1043)][_0x19bb5a(0x1884)][_0x19bb5a(0x15e7)][_0x19bb5a(0x1303)](_0x5bb782[_0x19bb5a(0xd2c)][_0x19bb5a(0x172d)]) > -0x1 && (this[_0x19bb5a(0x10e8)] = 0.25);
                    }
                }
                _0x3441e2['W_Silf_Counter'] = _0x1bd550, _0x3441e2['default'] = _0x1bd550;
            };
