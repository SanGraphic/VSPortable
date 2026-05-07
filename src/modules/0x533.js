// Module 0x533
// Args: _0x53c1d4, _0x1dc3d6, _0x13fcf

export default (_0x53c1d4, _0x1dc3d6, _0x13fcf) => {
                'use strict';
                const _0x10d2dd = a0_0x6932;
                var _0x1749e5 = this && this['__importDefault'] || function(_0xdb4920) {
                    const _0x86a37 = a0_0x6932;
                    return _0xdb4920 && _0xdb4920['__esModule'] ? _0xdb4920 : {
                        'default': _0xdb4920
                    };
                };
                Object['defineProperty'](_0x1dc3d6, '__esModule', {
                    'value': !0x0
                });
                const _0x5a731a = _0x1749e5(_0x13fcf(0x15abc)),
                    _0x566370 = _0x1749e5(_0x13fcf(0x136b9)),
                    _0x2f494a = _0x1749e5(_0x13fcf(0x54e3)),
                    _0x4316a6 = _0x1749e5(_0x13fcf(0x1166a));
                class _0x57626d extends _0x4316a6['default'] {
                    constructor() {
                        const _0x31b3d6 = _0x10d2dd;
                        super(...arguments), this[_0x31b3d6(0x14c7)] = 0x1, this[_0x31b3d6(0x5ef)] = 0x157c;
                    } ['OnRecycle']() {
                        const _0x40e433 = _0x10d2dd;
                        super[_0x40e433(0x5ce)](), this['setScale'](0x0), this[_0x40e433(0x16ef)] = !0x1, this['lifetime'] = 0x1;
                        let _0x2b289b = _0x5a731a[_0x40e433(0xd2c)][this[_0x40e433(0xe49)]][0x0];
                        this['power'] = _0x2b289b['power'], this['tint'] = _0x2b289b[_0x40e433(0x19b0)] ? _0x2b289b['tint'] : 0xffffff, this[_0x40e433(0xd9b)] ? this[_0x40e433(0xd9b)]['restart']() : this[_0x40e433(0xd9b)] = this['scene']['tweens'][_0x40e433(0x18bd)]({
                            'targets': this,
                            'scale': 0x1,
                            'duration': 0x64
                        }), this[_0x40e433(0x15de)] ? this[_0x40e433(0x15de)][_0x40e433(0x1374)]() : this['OnLifetimeTween'] = this[_0x40e433(0x6d2)]['tweens'][_0x40e433(0x18bd)]({
                            'targets': this,
                            'lifetime': 0x0,
                            'duration': 0x64,
                            'delay': this[_0x40e433(0x5ef)],
                            'onComplete': () => {
                                this['Disappear']();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x1bcdf5 = _0x10d2dd;
                        var _0x20f268, _0x5bd050, _0x328479;
                        this[_0x1bcdf5(0x16ef)] || (this[_0x1bcdf5(0x16ef)] = !0x0, null === (_0x20f268 = this['ScaleTween']) || void 0x0 === _0x20f268 || _0x20f268[_0x1bcdf5(0x1a34)], null === (_0x5bd050 = this[_0x1bcdf5(0xd9b)]) || void 0x0 === _0x5bd050 || _0x5bd050['stop'], null === (_0x328479 = this['OnLifetimeTween']) || void 0x0 === _0x328479 || _0x328479[_0x1bcdf5(0x1a34)], super[_0x1bcdf5(0x14fb)]());
                    } ['DeathTween'](_0x3bdf54 = !0x1) {
                        const _0x4e45d9 = _0x10d2dd;
                        var _0x56d681, _0x54f195;
                        null === (_0x56d681 = this['OnLifetimeTween']) || void 0x0 === _0x56d681 || _0x56d681[_0x4e45d9(0x1a34)](), this['ScaleTween'] ? (null === (_0x54f195 = this['ScaleTween']) || void 0x0 === _0x54f195 || _0x54f195[_0x4e45d9(0x1a34)](), this[_0x4e45d9(0xd35)][_0x4e45d9(0x1374)]()) : this[_0x4e45d9(0xd35)] = this['scene'][_0x4e45d9(0x12a1)][_0x4e45d9(0x18bd)]({
                            'targets': this,
                            'scale': 0x0,
                            'duration': 0x64,
                            'onComplete': () => {
                                const _0x5ee8e4 = _0x4e45d9;
                                this[_0x5ee8e4(0x14fb)]();
                            }
                        });
                    } ['OnPlayerOverlap']() {
                        const _0x33b703 = _0x10d2dd;
                        var _0x322d03;
                        super['OnPlayerOverlap'](), this[_0x33b703(0xdae)] || (null === (_0x322d03 = this['OnLifetimeTween']) || void 0x0 === _0x322d03 || _0x322d03[_0x33b703(0x1a34)], this[_0x33b703(0xdae)] = !0x0, this['DeathTween']());
                    } ['GetDamaged'](_0x5aedb5 = 0x1, _0x280ef9 = _0x566370['default']['DEFAULT'], _0x5db9bb = 0x1, _0x210a25 = _0x2f494a['default']['VOID']) {
                        const _0x1ce1b5 = _0x10d2dd;
                        this['hp'] -= _0x5aedb5, this['hp'] <= 0x0 ? this['Die']() : this[_0x1ce1b5(0x25d)] = _0x5db9bb;
                    } ['Disappear']() {
                        const _0x44cb72 = _0x10d2dd;
                        var _0x587f64;
                        this[_0x44cb72(0xdae)] || (null === (_0x587f64 = this[_0x44cb72(0x15de)]) || void 0x0 === _0x587f64 || _0x587f64['stop'], this[_0x44cb72(0xdae)] = !0x0, this[_0x44cb72(0x2b8)]());
                    } ['Die']() {
                        const _0x408b39 = _0x10d2dd;
                        var _0x580709;
                        this[_0x408b39(0xdae)] || (null === (_0x580709 = this[_0x408b39(0x15de)]) || void 0x0 === _0x580709 || _0x580709['stop'], this[_0x408b39(0xdae)] = !0x0, this[_0x408b39(0x2b8)]());
                    }
                }
                _0x1dc3d6['default'] = _0x57626d;
            };
