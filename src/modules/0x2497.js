// Module 0x2497
// Args: _0x573bdf, _0x44245f, _0x19f83b

export default (_0x573bdf, _0x44245f, _0x19f83b) => {
                'use strict';
                const _0x133b9a = a0_0x6932;
                var _0x12da61 = this && this['__importDefault'] || function(_0x4be87a) {
                    const _0x431b58 = a0_0x6932;
                    return _0x4be87a && _0x4be87a['__esModule'] ? _0x4be87a : {
                        'default': _0x4be87a
                    };
                };
                Object['defineProperty'](_0x44245f, '__esModule', {
                    'value': !0x0
                }), _0x44245f['B_NightSword'] = void 0x0;
                const _0x3d0214 = _0x12da61(_0x19f83b(0xa14d)),
                    _0x59b89d = _0x12da61(_0x19f83b(0x5f07)),
                    _0x370db2 = _0x12da61(_0x19f83b(0x1fd7)),
                    _0x4eea8a = _0x12da61(_0x19f83b(0x5103)),
                    _0x10bac2 = _0x19f83b(0x18304);
                class _0x401747 extends _0x3d0214['default'] {
                    constructor(_0x454697, _0x7e2f72, _0x49b31e, _0x27133, _0x26df4c) {
                        const _0x5b0359 = _0x133b9a;
                        super(_0x454697, _0x7e2f72, _0x49b31e, 'vfx', 'nightSword.png', _0x27133, _0x26df4c), this['trueWeapon'] = this[_0x5b0359(0x4a1)];
                        var _0x52deb3 = new Phaser[(_0x5b0359(0x10d2))][(_0x5b0359(0xb64))](-0x10, -0x80, 0x20, 0x100);
                        this[_0x5b0359(0x125b)] = this[_0x5b0359(0x6d2)][_0x5b0359(0x18bd)]['particles']('vfx')[_0x5b0359(0x14c0)]({
                            'frame': ['WhiteDot.png'],
                            'quantity': 0xa,
                            'lifespan': 0x1f4,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'angle': {
                                'min': 0xe1,
                                'max': 0x13b
                            },
                            'blendMode': _0x10bac2[_0x5b0359(0x10fc)][_0x5b0359(0x1811)],
                            'speed': {
                                'min': 0x4b,
                                'max': 0x7d
                            },
                            'scale': {
                                'start': 0x2 * _0x4eea8a['default'][_0x5b0359(0x15db)],
                                'end': 0x0
                            },
                            'gravityY': -0x258,
                            'tint': {
                                'start': 0xff0000,
                                'end': 0xff00ff
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': _0x52deb3
                            },
                            'on': !0x1
                        });
                    } ['Init'](_0x5b6276 = -0x3e8, _0x508c54 = -0x3e8) {
                        const _0x5e52c1 = _0x133b9a;
                        super['Init'](_0x5b6276, _0x508c54), this[_0x5e52c1(0x8a2)](0x0), this[_0x5e52c1(0x11c7)](_0x10bac2[_0x5e52c1(0x10fc)][_0x5e52c1(0x1811)]), this[_0x5e52c1(0xb4a)](0xf0);
                    } ['OnRecycle']() {
                        const _0x17b1f4 = _0x133b9a;
                        super[_0x17b1f4(0x5ce)](), this[_0x17b1f4(0x125b)][_0x17b1f4(0x1a34)]();
                    } ['DeSpawn']() {
                        const _0x730586 = _0x133b9a;
                        super[_0x730586(0x14fb)](), this[_0x730586(0x125b)][_0x730586(0x1a34)]();
                    } ['SetNullTarget']() {
                        const _0x40463a = _0x133b9a;
                        this[_0x40463a(0x14fb)]();
                    } ['SetTarget'](_0x20f979) {
                        const _0x312ea9 = _0x133b9a;
                        var _0x45b302, _0x1d8f4c;
                        let _0x29d130 = this['indexInWeapon'] % 0x6,
                            _0x5366fd = this[_0x312ea9(0x1234)][_0x312ea9(0x4c4)] && 0x5 === _0x29d130;
                        if (!_0x20f979) return void this[_0x312ea9(0x14fb)]();
                        _0x29d130 < 0x5 ? _0x59b89d[_0x312ea9(0xd2c)][_0x312ea9(0x1267)]['PlaySound'](_0x370db2['default'][_0x312ea9(0x1a1f)], {
                            'detune': 0xc8 * _0x29d130,
                            'volume': 0.4 * this[_0x312ea9(0x1234)][_0x312ea9(0x1378)],
                            'rate': 0x1
                        }, 0x64, 0x5) : _0x5366fd && _0x59b89d[_0x312ea9(0xd2c)]['Sound']['PlaySound'](_0x370db2[_0x312ea9(0xd2c)]['Crystal8'], {
                            'detune': 0x4b0,
                            'volume': 0x1 * this[_0x312ea9(0x1234)][_0x312ea9(0x1378)],
                            'rate': 0x1
                        }, 0x12c, 0x1), this['x'] = _0x20f979['x'] + this[_0x312ea9(0x1234)]['fireX'][_0x29d130], this['y'] = _0x20f979['y'];
                        let _0x4a4c3c = _0x5366fd ? 0x96 : 0x64;
                        this[_0x312ea9(0x381)](_0x5366fd ? 'nightSwordCrit.png' : 'nightSword.png'), this[_0x312ea9(0xdab)](_0x5366fd ? 0.5 : 0.75), this['setOrigin'](0.5, _0x5366fd ? 0x1 : 0.5), this[_0x312ea9(0x9b5)](this['trueWeapon'][_0x312ea9(0x390)][_0x29d130]), this[_0x312ea9(0xb4a)](this[_0x312ea9(0x6d2)][_0x312ea9(0x12f9)][_0x312ea9(0x140e)]), null === (_0x45b302 = this[_0x312ea9(0x99a)]) || void 0x0 === _0x45b302 || _0x45b302[_0x312ea9(0x1a34)](), this[_0x312ea9(0x99a)] = this[_0x312ea9(0x6d2)]['tweens'][_0x312ea9(0x18bd)]({
                            'targets': this,
                            'scaleY': 0x0,
                            'scaleX': 0.5,
                            'duration': _0x4a4c3c,
                            'ease': 'Linear',
                            'onStart': () => {
                                const _0x400012 = _0x312ea9;
                                this[_0x400012(0x8a2)](0.5 * (_0x5366fd ? 0x2 : 0x1), this['trueWeapon'][_0x400012(0x5f5)] * (_0x5366fd ? 0x2 : 0x1)), _0x5366fd && (this[_0x400012(0x125b)]['setPosition'](this['x'], this['y']), this['PfxEmitter']['start']());
                            },
                            'onComplete': () => {
                                const _0x230249 = _0x312ea9;
                                _0x5366fd && this[_0x230249(0x125b)]['stop']();
                            }
                        }), null === (_0x1d8f4c = this[_0x312ea9(0x15fa)]) || void 0x0 === _0x1d8f4c || _0x1d8f4c['stop'](), this[_0x312ea9(0x15fa)] = this[_0x312ea9(0x6d2)][_0x312ea9(0x12a1)]['add']({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear',
                            'delay': 0x64,
                            'onComplete': () => {
                                const _0x5b9104 = _0x312ea9;
                                this[_0x5b9104(0x14fb)]();
                            }
                        });
                    }
                }
                _0x44245f['B_NightSword'] = _0x401747, _0x44245f['default'] = _0x401747;
            };
