// Module 0xdeff
// Args: _0x501eb1, _0x29cd40, _0xca3c71

export default (_0x501eb1, _0x29cd40, _0xca3c71) => {
                'use strict';
                const _0x545faf = a0_0x6932;
                var _0x1c32e5 = this && this['__importDefault'] || function(_0x4561d2) {
                    const _0x22706d = _0x545faf;
                    return _0x4561d2 && _0x4561d2[_0x22706d(0x16f1)] ? _0x4561d2 : {
                        'default': _0x4561d2
                    };
                };
                Object['defineProperty'](_0x29cd40, '__esModule', {
                    'value': !0x0
                }), _0x29cd40['W_Luminaire'] = void 0x0;
                const _0x46d45f = _0x1c32e5(_0xca3c71(0xe49a)),
                    _0x42f88a = _0x1c32e5(_0xca3c71(0x54e3)),
                    _0x190aad = _0x1c32e5(_0xca3c71(0x5f07)),
                    _0x1d6058 = _0xca3c71(0x18304),
                    _0x210f43 = _0x1c32e5(_0xca3c71(0xc42e)),
                    _0x29de09 = _0x1c32e5(_0xca3c71(0x50ae)),
                    _0x2b5f49 = _0x1c32e5(_0xca3c71(0x9b68));
                class _0x5d9224 extends _0x46d45f['default'] {
                    constructor(_0x28f54d) {
                        const _0x2da69e = _0x545faf;
                        super(_0x28f54d), this[_0x2da69e(0x9fd)] = [], this[_0x2da69e(0xb6f)] = null, this['frames'] = ['Gem6.png', 'Gem7.png', 'Gem10.png'], this[_0x2da69e(0xb6f)] = null, this['rectangle'] = new Phaser['Geom']['Rectangle'](0x0, 0x0, 0.85 * _0x190aad['default'][_0x2da69e(0x1043)][_0x2da69e(0x6d2)]['renderer']['width'], 0.85 * _0x190aad['default'][_0x2da69e(0x1043)]['scene'][_0x2da69e(0x12f9)]['height']), this[_0x2da69e(0x174)] = 0x0, this[_0x2da69e(0x194d)] = !0x1;
                    } ['Update'](_0x229a9b) {
                        const _0x288cc6 = _0x545faf;
                        if (super['Update'](_0x229a9b), !this[_0x288cc6(0x194d)]) {
                            this['IsInitialised'] = !0x0, this['doilies'] = [];
                            let _0x19fee0 = 0.5 * _0x190aad['default'][_0x288cc6(0x1043)]['scene'][_0x288cc6(0x12f9)]['width'],
                                _0x3f2a7d = 0x0,
                                _0x376315 = _0x190aad['default'][_0x288cc6(0x1043)][_0x288cc6(0x6d2)];
                            for (let _0x8e6b0f = 0x1; _0x8e6b0f <= 0x9; _0x8e6b0f++) {
                                let _0x538e31 = _0x376315[_0x288cc6(0x18bd)][_0x288cc6(0x568)](_0x19fee0, _0x3f2a7d, 'vfx', 'doi0' + _0x8e6b0f + '.png');
                                _0x538e31[_0x288cc6(0xd87)](0x0), _0x538e31[_0x288cc6(0xf8e)](0.5), _0x538e31[_0x288cc6(0x11c7)](_0x1d6058['BlendModes'][_0x288cc6(0x82f)]), _0x538e31[_0x288cc6(0xdab)](0.05), _0x538e31['setDepth'](-0x7ce), _0x538e31['setTint'](0xffffff, 0xffffdd, 0xffffff, 0xffddff), this[_0x288cc6(0x9fd)][_0x288cc6(0x1564)](_0x538e31);
                            }
                            _0x376315[_0x288cc6(0x12a1)][_0x288cc6(0x18bd)]({
                                'targets': this[_0x288cc6(0x9fd)],
                                'alpha': 0.15,
                                'ease': 'Sine.easeInOut',
                                'scale': _0x376315[_0x288cc6(0x12a1)][_0x288cc6(0x29e)](0.25, {
                                    'start': 0x2
                                }),
                                'delay': _0x376315['tweens'][_0x288cc6(0x29e)](0x320, {}),
                                'duration': 0xfa0,
                                'repeat': -0x1,
                                'yoyo': !0x0
                            }), _0x376315[_0x288cc6(0x12a1)]['add']({
                                'targets': this[_0x288cc6(0x9fd)],
                                'angle': 0x167,
                                'delay': _0x376315[_0x288cc6(0x12a1)][_0x288cc6(0x29e)](0x8, {}),
                                'duration': 0x2710,
                                'repeat': -0x1
                            });
                            let _0x3c3987 = new Phaser[(_0x288cc6(0x10d2))]['Rectangle'](0x0, 0x0, _0x376315[_0x288cc6(0x12f9)]['width'], _0x376315[_0x288cc6(0x12f9)][_0x288cc6(0x140e)]);
                            this[_0x288cc6(0x1761)] = _0x376315[_0x288cc6(0x18bd)]['particles']('vfx'), this[_0x288cc6(0xb8c)] = this['particlesManager']['createEmitter']({
                                'frame': ['Beam.png'],
                                'x': 0x0,
                                'y': 0x0,
                                'lifespan': 0x7d0,
                                'rotate': {
                                    'min': 0x0,
                                    'max': 0x0
                                },
                                'quantity': 0x1,
                                'scaleX': {
                                    'start': 0x3,
                                    'end': 0x0
                                },
                                'scaleY': {
                                    'start': 0x32,
                                    'end': 0x32
                                },
                                'alpha': {
                                    'start': 0.25,
                                    'end': 0x0
                                },
                                'emitZone': {
                                    'type': 'random',
                                    'source': _0x3c3987
                                },
                                'frequency': 0x190,
                                'blendMode': 'ADD',
                                'on': !0x0
                            }), this[_0x288cc6(0xb8c)][_0x288cc6(0xd87)](0x0);
                        }
                    } ['Fire']() {
                        const _0x50b12b = _0x545faf;
                        super[_0x50b12b(0x1754)](), _0x190aad[_0x50b12b(0xd2c)]['Core'][_0x50b12b(0x14d8)][_0x50b12b(0x49c)] ? this['pfxEmitter']['start']() : this['pfxEmitter'][_0x50b12b(0x1a34)](), Phaser[_0x50b12b(0x24f)][_0x50b12b(0x82a)][_0x50b12b(0xeec)](_0x29de09[_0x50b12b(0xd2c)][_0x50b12b(0x3e3)]), this['firingCounter']++, this[_0x50b12b(0x17a9)]['x'] = _0x190aad[_0x50b12b(0xd2c)][_0x50b12b(0x1043)][_0x50b12b(0x10f6)]['x'] - 0.5 * this[_0x50b12b(0x17a9)]['width'], this['rectangle']['y'] = _0x190aad[_0x50b12b(0xd2c)][_0x50b12b(0x1043)][_0x50b12b(0x10f6)]['y'] - 0.5 * this['rectangle'][_0x50b12b(0x140e)];
                        let _0x290500 = this[_0x50b12b(0x942)],
                            _0x35fd9c = _0x190aad[_0x50b12b(0xd2c)]['Core']['pickupPool']['children']['entries'][_0x50b12b(0x9d4)](_0x4bf0d3 => _0x4bf0d3['itemType'] === _0x210f43[_0x50b12b(0xd2c)]['COIN'] || _0x4bf0d3['itemType'] === _0x210f43[_0x50b12b(0xd2c)][_0x50b12b(0x1143)] || _0x4bf0d3[_0x50b12b(0xeb5)] === _0x210f43['default'][_0x50b12b(0x13f5)]),
                            _0x20542a = (_0x290500 + Math[_0x50b12b(0x1947)](_0x35fd9c[_0x50b12b(0xed9)])) / _0x35fd9c[_0x50b12b(0xed9)];
                        for (let _0x1417d1 = 0x0; _0x1417d1 < _0x35fd9c[_0x50b12b(0xed9)]; _0x1417d1++) _0x35fd9c[_0x1417d1]['Bless'](_0x20542a);
                        let _0x46d707 = _0x190aad[_0x50b12b(0xd2c)]['Core'][_0x50b12b(0x123b)][_0x50b12b(0x3fe)][_0x50b12b(0x10c5)],
                            _0x487c31 = (_0x290500 + Math['log'](_0x46d707['length'])) / _0x46d707[_0x50b12b(0xed9)];
                        if (_0x190aad[_0x50b12b(0xd2c)][_0x50b12b(0x1043)][_0x50b12b(0x14d8)]['FlashingVFXEnabled']) {
                            for (let _0x5db878 = 0x0; _0x5db878 < _0x46d707['length']; _0x5db878++) _0x46d707[_0x5db878][_0x50b12b(0x15ec)](_0x487c31, _0x5db878);
                        } else {
                            for (let _0x153a05 = 0x0; _0x153a05 < _0x46d707[_0x50b12b(0xed9)]; _0x153a05++) _0x46d707[_0x153a05][_0x50b12b(0x77d)](_0x487c31);
                        }
                    } ['CheckArcanas']() {
                        const _0x4f52b7 = _0x545faf;
                        if (null === this[_0x4f52b7(0xb6f)])
                            for (let _0x53df75 = 0x0; _0x53df75 < _0x190aad[_0x4f52b7(0xd2c)][_0x4f52b7(0x1043)][_0x4f52b7(0x1884)]['ActiveArcanas'][_0x4f52b7(0xed9)]; _0x53df75++) {
                                const _0x46cf73 = _0x190aad['default'][_0x4f52b7(0x1043)][_0x4f52b7(0x1884)][_0x4f52b7(0x15e7)][_0x53df75];
                                _0x46cf73 === _0x2b5f49['default'][_0x4f52b7(0x299)] ? (this[_0x4f52b7(0xb6f)] = _0x2b5f49[_0x4f52b7(0xd2c)]['T19_FIRE'], this[_0x4f52b7(0xdfc)] = _0x42f88a['default'][_0x4f52b7(0x1167)], _0x190aad['default'][_0x4f52b7(0x1043)]['Arcanas'][_0x4f52b7(0xe86)] && (_0x190aad[_0x4f52b7(0xd2c)][_0x4f52b7(0x1043)][_0x4f52b7(0x1884)]['FireExplosionWeapon'][_0x4f52b7(0x31f)] = 0.5 * this[_0x4f52b7(0x31f)])) : _0x46cf73 === _0x2b5f49[_0x4f52b7(0xd2c)]['T14_JEWELS'] ? (this[_0x4f52b7(0xb6f)] = _0x2b5f49['default'][_0x4f52b7(0x172d)], this['freezeChance'] = 0.25) : _0x46cf73 === _0x2b5f49['default'][_0x4f52b7(0x6be)] && (this[_0x4f52b7(0xb6f)] = _0x2b5f49['default'][_0x4f52b7(0x6be)], this[_0x4f52b7(0xdfc)] = _0x42f88a[_0x4f52b7(0xd2c)][_0x4f52b7(0x3e7)], this[_0x4f52b7(0x1007)] = !0x0);
                            }
                        super[_0x4f52b7(0x1ce)]();
                    } ['CleanUp']() {
                        const _0x7e3cbb = _0x545faf;
                        super[_0x7e3cbb(0xdb0)]();
                        for (let _0x297a40 = 0x0; _0x297a40 < this['doilies']['length']; _0x297a40++) this[_0x7e3cbb(0x9fd)][_0x297a40][_0x7e3cbb(0x183f)](!0x1);
                        this[_0x7e3cbb(0xb8c)] && this['pfxEmitter'][_0x7e3cbb(0x1a34)]();
                    }
                }
                _0x29cd40['W_Luminaire'] = _0x5d9224, _0x29cd40['default'] = _0x5d9224;
            };
