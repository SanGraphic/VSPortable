// Module 0xdb09
// Args: _0x35cf63, _0xfa2517, _0x5634d1

export default (_0x35cf63, _0xfa2517, _0x5634d1) => {
                'use strict';
                const _0x4cebc6 = a0_0x6932;
                var _0x2961cb = this && this['__importDefault'] || function(_0x323a9c) {
                    const _0xb1ffb2 = a0_0x6932;
                    return _0x323a9c && _0x323a9c['__esModule'] ? _0x323a9c : {
                        'default': _0x323a9c
                    };
                };
                Object['defineProperty'](_0xfa2517, '__esModule', {
                    'value': !0x0
                }), _0xfa2517['B_Victory'] = void 0x0;
                const _0x2eebbb = _0x2961cb(_0x5634d1(0xa14d)),
                    _0x548da6 = _0x2961cb(_0x5634d1(0x5f07)),
                    _0x24666e = _0x2961cb(_0x5634d1(0x1fd7)),
                    _0x9cb1da = _0x2961cb(_0x5634d1(0x5103)),
                    _0x57072e = _0x5634d1(0x18304);
                class _0x20c71e extends _0x2eebbb['default'] {
                    constructor(_0x1916d6, _0x30c665, _0x557d5b, _0x522caf, _0x20ebe1) {
                        const _0xefc68a = _0x4cebc6;
                        super(_0x1916d6, _0x30c665, _0x557d5b, 'vfx', 'victory.png', _0x522caf, _0x20ebe1), this['trueWeapon'] = this[_0xefc68a(0x4a1)];
                        var _0x1feab7 = new Phaser[(_0xefc68a(0x10d2))]['Rectangle'](-0x10, -0x80, 0x20, 0x100);
                        this['PfxEmitter'] = this[_0xefc68a(0x6d2)][_0xefc68a(0x18bd)][_0xefc68a(0x1791)]('vfx')['createEmitter']({
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
                            'blendMode': _0x57072e['BlendModes'][_0xefc68a(0x1811)],
                            'speed': {
                                'min': 0x4b,
                                'max': 0x7d
                            },
                            'scale': {
                                'start': 0x2 * _0x9cb1da[_0xefc68a(0xd2c)][_0xefc68a(0x15db)],
                                'end': 0x0
                            },
                            'gravityY': -0x258,
                            'tint': 0x88ff,
                            'emitZone': {
                                'type': 'random',
                                'source': _0x1feab7
                            },
                            'on': !0x1
                        });
                    } ['Init'](_0x41f73e = -0x3e8, _0x876837 = -0x3e8) {
                        const _0x547a3b = _0x4cebc6;
                        super['Init'](_0x41f73e, _0x876837), this[_0x547a3b(0x8a2)](0x0), this[_0x547a3b(0x11c7)](_0x57072e['BlendModes']['ADD']), this[_0x547a3b(0xb4a)](0xf0);
                    } ['OnRecycle']() {
                        const _0x14b39d = _0x4cebc6;
                        super[_0x14b39d(0x5ce)](), this['PfxEmitter'][_0x14b39d(0x1a34)]();
                    } ['DeSpawn']() {
                        const _0x19d481 = _0x4cebc6;
                        super['DeSpawn'](), this[_0x19d481(0x125b)][_0x19d481(0x1a34)]();
                    } ['SetNullTarget']() {
                        const _0x48e9eb = _0x4cebc6;
                        this[_0x48e9eb(0x14fb)]();
                    } ['SetTarget'](_0x4336e8) {
                        const _0x22cee9 = _0x4cebc6;
                        var _0x2b11d2, _0x43e27e;
                        let _0x28c03a = this[_0x22cee9(0x19c4)] % 0x6,
                            _0x5da48c = this[_0x22cee9(0x1234)][_0x22cee9(0x4c4)] && 0x5 === _0x28c03a;
                        if (!_0x4336e8) return void this['DeSpawn']();
                        _0x28c03a < 0x5 ? _0x548da6[_0x22cee9(0xd2c)][_0x22cee9(0x1267)][_0x22cee9(0x7f6)](_0x24666e[_0x22cee9(0xd2c)]['Victory1'], {
                            'detune': 0xc8 * _0x28c03a,
                            'volume': 0.4,
                            'rate': 0x1
                        }, 0x64, 0x5) : _0x5da48c && _0x548da6['default']['Sound'][_0x22cee9(0x7f6)](_0x24666e['default'][_0x22cee9(0x672)], {
                            'detune': 0x4b0,
                            'volume': 0x1,
                            'rate': 0x1
                        }, 0x12c, 0x1), this['x'] = _0x4336e8['x'] + this[_0x22cee9(0x1234)]['fireX'][_0x28c03a], this['y'] = _0x4336e8['y'];
                        let _0x4cc95c = _0x5da48c ? 0x96 : 0x64;
                        this['setFrame'](_0x5da48c ? 'victoryCrit.png' : 'victory.png'), this[_0x22cee9(0xdab)](_0x5da48c ? 0.5 : 0.75), this[_0x22cee9(0x9b5)](this[_0x22cee9(0x1234)]['fireAngles'][_0x28c03a]), this[_0x22cee9(0xb4a)](this[_0x22cee9(0x6d2)]['renderer']['height']), null === (_0x2b11d2 = this['tween']) || void 0x0 === _0x2b11d2 || _0x2b11d2[_0x22cee9(0x1a34)](), this[_0x22cee9(0x99a)] = this[_0x22cee9(0x6d2)][_0x22cee9(0x12a1)][_0x22cee9(0x18bd)]({
                            'targets': this,
                            'scaleY': 0x0,
                            'scaleX': 0.5,
                            'duration': _0x4cc95c,
                            'ease': 'Linear',
                            'onStart': () => {
                                this['setScale'](0.5 * (_0x5da48c ? 0x2 : 0x1), this['trueWeapon']['PArea'] * (_0x5da48c ? 0x2 : 0x1)), _0x5da48c && (this['PfxEmitter']['setPosition'](this['x'], this['y']), this['PfxEmitter']['start']());
                            },
                            'onComplete': () => {
                                const _0x50cfdc = _0x22cee9;
                                _0x5da48c && this['PfxEmitter'][_0x50cfdc(0x1a34)]();
                            }
                        }), null === (_0x43e27e = this['tween2']) || void 0x0 === _0x43e27e || _0x43e27e[_0x22cee9(0x1a34)](), this['tween2'] = this[_0x22cee9(0x6d2)][_0x22cee9(0x12a1)]['add']({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear',
                            'delay': 0x64,
                            'onComplete': () => {
                                const _0x23ac8a = _0x22cee9;
                                this[_0x23ac8a(0x14fb)]();
                            }
                        });
                    }
                }
                _0xfa2517['B_Victory'] = _0x20c71e, _0xfa2517['default'] = _0x20c71e;
            };
