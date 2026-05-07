// Module 0x12103
// Args: _0x4f23a7, _0x160143, _0x2ed300

export default (_0x4f23a7, _0x160143, _0x2ed300) => {
                'use strict';
                const _0x39bef1 = a0_0x6932;
                var _0x4537ef = this && this['__importDefault'] || function(_0x28540c) {
                    const _0x5addcf = a0_0x6932;
                    return _0x28540c && _0x28540c['__esModule'] ? _0x28540c : {
                        'default': _0x28540c
                    };
                };
                Object['defineProperty'](_0x160143, '__esModule', {
                    'value': !0x0
                }), _0x160143['B_GemCannon'] = void 0x0;
                const _0x46f2b9 = _0x4537ef(_0x2ed300(0xa14d)),
                    _0xe8e66f = _0x4537ef(_0x2ed300(0x5f07)),
                    _0x1bb55e = _0x4537ef(_0x2ed300(0x1fd7));
                class _0x50e616 extends _0x46f2b9['default'] {
                    constructor(_0xcc174c, _0x483e3d, _0x2fcafd, _0x45d6f2, _0x4179c3) {
                        const _0x4ca0d6 = _0x39bef1;
                        super(_0xcc174c, _0x483e3d, _0x2fcafd, 'items', 'GemBlue.png', _0x45d6f2, _0x4179c3), this[_0x4ca0d6(0x125b)] = this[_0x4ca0d6(0x6d2)][_0x4ca0d6(0x18bd)][_0x4ca0d6(0x1791)]('vfx'), this['PfxEmitter'][_0x4ca0d6(0x14c0)]({
                            'frame': ['PfxColor1.png', 'PfxColor2.png'],
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'quantity': 0x1,
                            'lifespan': 0x12c,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x1
                        });
                    } ['OnHasHitAnObject'](_0x3b2c58) {
                        const _0x5f0c70 = _0x39bef1;
                        _0x3b2c58['isDead'] || (this['penetrating']--, this['penetrating'] <= 0x0 && this[_0x5f0c70(0x14fb)]());
                    } ['OnRecycle']() {
                        const _0x4dcd10 = _0x39bef1;
                        super[_0x4dcd10(0x5ce)](), this['body'][_0x4dcd10(0xdf6)](0x8), this['setScale'](0x1), this['x'] += (Math[_0x4dcd10(0x9ad)]() - 0.5) * this['indexInWeapon'] * 0xa, this['y'] += (Math[_0x4dcd10(0x9ad)]() - 0.5) * this[_0x4dcd10(0x19c4)] * 0xa, this[_0x4dcd10(0xbc8)]();
                        let _0x150e89 = this['weapon']['volume'] ? this['weapon']['volume'] : 0.15;
                        this[_0x4dcd10(0xd96)] -= 0x5a, _0xe8e66f[_0x4dcd10(0xd2c)][_0x4dcd10(0x1267)]['PlaySound'](_0x1bb55e[_0x4dcd10(0xd2c)][_0x4dcd10(0x9ca)], {
                            'detune': -0x64 * this['indexInWeapon'],
                            'volume': _0x150e89
                        }, 0xc8, 0xc), this[_0x4dcd10(0x381)](this[_0x4dcd10(0x4a1)]['gemFrame']);
                    } ['Update']() {
                        this['PfxEmitter']['emitParticleAt'](this['x'], this['y']);
                    }
                }
                _0x160143['B_GemCannon'] = _0x50e616, _0x160143['default'] = _0x50e616;
            };
