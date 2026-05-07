// Module 0x47c3
// Args: _0x3d1e38, _0x2cfeca, _0x51fd70

export default (_0x3d1e38, _0x2cfeca, _0x51fd70) => {
                'use strict';
                const _0x559dd4 = a0_0x6932;
                var _0x2e4dea = this && this['__importDefault'] || function(_0x1f7474) {
                    const _0x19d48c = _0x559dd4;
                    return _0x1f7474 && _0x1f7474[_0x19d48c(0x16f1)] ? _0x1f7474 : {
                        'default': _0x1f7474
                    };
                };
                Object['defineProperty'](_0x2cfeca, '__esModule', {
                    'value': !0x0
                }), _0x2cfeca['W_FlashArrow'] = void 0x0;
                const _0x41ac5b = _0x2e4dea(_0x51fd70(0xe49a)),
                    _0x7efc0a = _0x2e4dea(_0x51fd70(0x5f07)),
                    _0x375490 = _0x2e4dea(_0x51fd70(0x9b68));
                class _0x49518e extends _0x41ac5b['default'] {
                    constructor(_0x184afc) {
                        const _0x2ddc0a = _0x559dd4;
                        super(_0x184afc), this['bonusBounces'] = 0x0, this[_0x2ddc0a(0x1985)] = 0x0;
                    }
                    get['PPower']() {
                        const _0xf31b1c = _0x559dd4;
                        let _0x1e87d2 = this[_0xf31b1c(0x31f)] * this[_0xf31b1c(0x942)];
                        return _0x7efc0a[_0xf31b1c(0xd2c)]['Core'][_0xf31b1c(0x10f6)][_0xf31b1c(0x947)] ? Math[_0xf31b1c(0x1084)](0xa, (_0x7efc0a[_0xf31b1c(0xd2c)][_0xf31b1c(0x1043)]['Arcanas'][_0xf31b1c(0x18f8)] + _0x7efc0a[_0xf31b1c(0xd2c)]['Core']['Player'][_0xf31b1c(0x31f)]) * _0x7efc0a['default']['Core']['Player']['sineMight']['value']) * _0x1e87d2 + _0x7efc0a[_0xf31b1c(0xd2c)]['Core'][_0xf31b1c(0x1884)][_0xf31b1c(0x1117)] : Math[_0xf31b1c(0x1084)](0xa, _0x7efc0a[_0xf31b1c(0xd2c)][_0xf31b1c(0x1043)][_0xf31b1c(0x1884)][_0xf31b1c(0x18f8)] + _0x7efc0a['default'][_0xf31b1c(0x1043)]['Player'][_0xf31b1c(0x31f)]) * _0x1e87d2 + _0x7efc0a['default']['Core'][_0xf31b1c(0x1884)]['bloodlineDamage'];
                    } ['OnStart']() {
                        const _0x58fb86 = _0x559dd4;
                        super['OnStart'](), this[_0x58fb86(0x520)](), this[_0x58fb86(0xdda)] = !0x0;
                    } ['PlayNextRangedAnim']() {
                        const _0x2bd9e0 = _0x559dd4;
                        _0x7efc0a[_0x2bd9e0(0xd2c)]['Core'][_0x2bd9e0(0x6d2)][_0x2bd9e0(0x915)]['removeEvent'](this['RangedAnimEvent']), this[_0x2bd9e0(0x15d1)] = _0x7efc0a[_0x2bd9e0(0xd2c)][_0x2bd9e0(0x1043)][_0x2bd9e0(0x6d2)][_0x2bd9e0(0x915)][_0x2bd9e0(0x12b8)]({
                            'delay': this[_0x2bd9e0(0x170c)] - 0x78,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x230542 = _0x2bd9e0;
                                _0x7efc0a[_0x230542(0xd2c)]['Core'][_0x230542(0x10f6)][_0x230542(0x628)]();
                            }
                        });
                    } ['Fire']() {
                        const _0xa503e2 = _0x559dd4;
                        this[_0xa503e2(0x970)](_0x7efc0a['default']['Core'][_0xa503e2(0x10f6)]['x'], _0x7efc0a['default']['Core'][_0xa503e2(0x10f6)]['y'], 0x0, this[_0xa503e2(0x18a7)]), this[_0xa503e2(0x520)](), this[_0xa503e2(0x162d)] != this[_0xa503e2(0x170c)] && (this['lastFiringInterval'] = this[_0xa503e2(0x170c)], this[_0xa503e2(0x839)]());
                    } ['Millionaire']() {} ['CheckArcanas']() {
                        const _0x417f1a = _0x559dd4;
                        if (_0x7efc0a[_0x417f1a(0xd2c)][_0x417f1a(0x1043)]['Arcanas']['ActiveArcanas']['indexOf'](_0x375490['default']['T07_IRON_BLUE']) > -0x1) {
                            this[_0x417f1a(0x3d8)] = 0xffff, this['bounces'] = 0x3;
                            for (let _0x4bf863 = 0x0; _0x4bf863 < this['wallsColliders']['length']; _0x4bf863++) {
                                const _0x2b1d2c = this[_0x417f1a(0x885)][_0x4bf863];
                                _0x7efc0a[_0x417f1a(0xd2c)]['Core'][_0x417f1a(0x6d2)]['physics']['world'][_0x417f1a(0x107c)](_0x2b1d2c);
                            }
                            this['hitsWalls'] = !0x1;
                        }
                        super[_0x417f1a(0x1ce)]();
                    } ['onBulletOverlapsEnemy'](_0x40073c, _0x4047e0) {
                        const _0x6c9733 = _0x559dd4;
                        return this[_0x6c9733(0xdda)] ? this[_0x6c9733(0x1152)](_0x40073c, _0x4047e0) : super['onBulletOverlapsEnemy'](_0x40073c, _0x4047e0);
                    }
                }
                _0x2cfeca['W_FlashArrow'] = _0x49518e, _0x2cfeca['default'] = _0x49518e;
            };
