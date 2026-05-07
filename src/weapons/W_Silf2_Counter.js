// Module 0x82eb
// Args: _0x1a64e9, _0x33869a, _0x108482

export default (_0x1a64e9, _0x33869a, _0x108482) => {
                'use strict';
                const _0x14dff1 = a0_0x6932;
                var _0x32d4a9 = this && this['__importDefault'] || function(_0x11752) {
                    return _0x11752 && _0x11752['__esModule'] ? _0x11752 : {
                        'default': _0x11752
                    };
                };
                Object['defineProperty'](_0x33869a, '__esModule', {
                    'value': !0x0
                }), _0x33869a['W_Silf2_Counter'] = void 0x0;
                const _0x1763b7 = _0x32d4a9(_0x108482(0x54e3)),
                    _0x244773 = _0x32d4a9(_0x108482(0x5103)),
                    _0x1ce73f = _0x32d4a9(_0x108482(0x5f07)),
                    _0xdbadfd = _0x32d4a9(_0x108482(0x13a8e));
                class _0x498559 extends _0xdbadfd['default'] {
                    constructor() {
                        const _0x57b681 = _0x14dff1;
                        super(...arguments), this['SecondaryOvarlapDamageType'] = _0x1763b7['default']['CURSE'], this[_0x57b681(0xa76)] = new Array(), this['damageZoneDistance'] = 0x96, this[_0x57b681(0xb78)] = 0x0, this[_0x57b681(0x124c)] = 0x0, this[_0x57b681(0x196b)] = 0x32, this[_0x57b681(0x1a40)] = !0x1, this[_0x57b681(0x14a5)] = 0x0, this[_0x57b681(0x1adc)] = 0x1, this[_0x57b681(0x6c5)] = 0x1f4, this[_0x57b681(0x70d)] = new Phaser['Math']['Vector2'](0x0, 0x0), this[_0x57b681(0x1a07)] = _0x244773[_0x57b681(0xd2c)]['PlayerPxSpeed'] / 1.178571428571429, this[_0x57b681(0x13e)] = 0xffff88, this[_0x57b681(0x4f0)] = 'ProjectileBird_C5.png', this[_0x57b681(0x134e)] = 0x18;
                    }
                    get['OffsetX']() {
                        const _0x60e8da = _0x14dff1;
                        return _0x1ce73f[_0x60e8da(0xd2c)][_0x60e8da(0x1043)]['Player']['flipX'] ? -0x24 : 0x24;
                    } ['SetTargetZonePosition'](_0x48c867) {
                        const _0xa556d3 = _0x14dff1;
                        this['targetZone']['x'] = _0x1ce73f[_0xa556d3(0xd2c)]['Core'][_0xa556d3(0x10f6)]['x'] + Math[_0xa556d3(0xd7e)](-_0x48c867) * this[_0xa556d3(0x8f8)], this['targetZone']['y'] = _0x1ce73f[_0xa556d3(0xd2c)][_0xa556d3(0x1043)]['Player']['y'] + Math['sin'](-_0x48c867) * this[_0xa556d3(0x8f8)];
                    } ['SetDamageZoneZonePosition'](_0x8f2fde) {
                        const _0x3a4a99 = _0x14dff1;
                        this[_0x3a4a99(0xb44)]['x'] = _0x1ce73f['default'][_0x3a4a99(0x1043)]['Player']['x'] + Math[_0x3a4a99(0xd7e)](-_0x8f2fde) * this[_0x3a4a99(0x8f8)], this['damageZone']['y'] = _0x1ce73f[_0x3a4a99(0xd2c)][_0x3a4a99(0x1043)][_0x3a4a99(0x10f6)]['y'] + Math[_0x3a4a99(0xc80)](-_0x8f2fde) * this[_0x3a4a99(0x8f8)];
                    } ['GetSpriteNames'](_0x52c87b) {
                        const _0x2f75d9 = _0x14dff1;
                        return this[_0x2f75d9(0x105b)]['anims'][_0x2f75d9(0x1756)]('vfx', {
                            'start': 0x4,
                            'end': 0x5,
                            'zeroPad': 0x0,
                            'prefix': 'ProjectileBird_C',
                            'suffix': '.png'
                        });
                    } ['CheckArcanas']() {}
                }
                _0x33869a['W_Silf2_Counter'] = _0x498559, _0x33869a['default'] = _0x498559;
            };
