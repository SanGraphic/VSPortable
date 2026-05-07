// Module 0xb68b
// Args: _0x57a400, _0x25d277, _0x1a81a2

export default (_0x57a400, _0x25d277, _0x1a81a2) => {
                'use strict';
                const _0x21f48e = a0_0x6932;
                var _0xdfefb = this && this['__importDefault'] || function(_0xecb6a0) {
                    return _0xecb6a0 && _0xecb6a0['__esModule'] ? _0xecb6a0 : {
                        'default': _0xecb6a0
                    };
                };
                Object['defineProperty'](_0x25d277, '__esModule', {
                    'value': !0x0
                }), _0x25d277['HitVFX'] = void 0x0;
                const _0x52863e = _0xdfefb(_0x1a81a2(0xd195)),
                    _0xeb7824 = _0xdfefb(_0x1a81a2(0x136b9)),
                    _0xa7d03a = _0xdfefb(_0x1a81a2(0x5103));
                class _0x4becb7 {
                    constructor(_0x5dfcf8, _0x4b2e37, _0x130138 = 0x0, _0x289ff8 = 0x0) {
                        const _0xcff320 = _0x21f48e;
                        this[_0xcff320(0x8e3)] = 'item_236.png', this['isCullable'] = !0x0, this[_0xcff320(0x187a)] = !0x1, this[_0xcff320(0x351)] = null, this[_0xcff320(0x6d2)] = _0x5dfcf8, this['pool'] = _0x4b2e37, this[_0xcff320(0x1ab5)] = this[_0xcff320(0x6d2)][_0xcff320(0x18bd)][_0xcff320(0x105b)](_0x130138 + 0x8, _0x289ff8 - 0x40, 'vfx', 'HitStar2.png'), this[_0xcff320(0x1849)] = this[_0xcff320(0x6d2)][_0xcff320(0x18bd)]['sprite'](_0x130138, _0x289ff8 - 0x20, 'vfx', 'Shockwave3.png'), this[_0xcff320(0x1ab5)][_0xcff320(0x8a2)](0.25 * _0xa7d03a[_0xcff320(0xd2c)][_0xcff320(0x15db)]), this[_0xcff320(0x1849)][_0xcff320(0x8a2)](0.25 * _0xa7d03a['default'][_0xcff320(0x15db)]), this[_0xcff320(0x1995)] = this[_0xcff320(0x6d2)]['tweens']['add']({
                            'targets': this['hitSprite'],
                            'scaleX': 0.75 * _0xa7d03a[_0xcff320(0xd2c)][_0xcff320(0x15db)],
                            'scaleY': 1.5 * _0xa7d03a[_0xcff320(0xd2c)][_0xcff320(0x15db)],
                            'angle': 0xb4,
                            'duration': 0x5a,
                            'ease': 'Linear'
                        }), this['tween2'] = this[_0xcff320(0x6d2)][_0xcff320(0x12a1)][_0xcff320(0x18bd)]({
                            'targets': this[_0xcff320(0x1849)],
                            'scaleX': _0xa7d03a[_0xcff320(0xd2c)][_0xcff320(0x15db)],
                            'scaleY': _0xa7d03a[_0xcff320(0xd2c)][_0xcff320(0x15db)],
                            'duration': 0x5a,
                            'delay': 0x1e,
                            'ease': 'Linear'
                        }), this[_0xcff320(0x1ab5)]['setVisible'](!0x1), this[_0xcff320(0x1849)][_0xcff320(0x183f)](!0x1);
                    } ['OnTeleportOnCull']() {} ['setPosition'](_0x5cc407, _0x1df392) {
                        const _0x3db6b5 = _0x21f48e;
                        this[_0x3db6b5(0x1ab5)]['setPosition'](_0x5cc407 + 0x2, _0x1df392 - 0x10), this['impactSprite'][_0x3db6b5(0x726)](_0x5cc407, _0x1df392 - 0x8);
                    } ['Init']() {
                        const _0x44554b = _0x21f48e;
                        this['hitSprite'][_0x44554b(0x183f)](!0x1), this['impactSprite'][_0x44554b(0x183f)](!0x1);
                    } ['OnRecycle'](_0x286b14 = _0xeb7824['default']['DEFAULT']) {
                        const _0x387460 = _0x21f48e;
                        if (this[_0x387460(0x1ab5)]['setScale'](0.25 * _0xa7d03a['default'][_0x387460(0x15db)])[_0x387460(0x9b5)](0x0)['setVisible'](!0x0), this['impactSprite']['setScale'](0.25 * _0xa7d03a[_0x387460(0xd2c)][_0x387460(0x15db)])[_0x387460(0x9b5)](0x0)['setVisible'](!0x0), _0x286b14 != _0xeb7824['default'][_0x387460(0xa8c)]) {
                            var _0x3b38b1 = _0x52863e['default'][_0x286b14];
                            this['hitSprite']['setFrame'](_0x3b38b1[_0x387460(0x169e)]), this[_0x387460(0x1849)]['setFrame'](_0x3b38b1[_0x387460(0x12f0)]);
                        }
                        this['Play']();
                    } ['DeSpawn']() {
                        const _0x20e451 = _0x21f48e;
                        this['hitSprite'][_0x20e451(0x183f)](!0x1), this['impactSprite']['setVisible'](!0x1), this[_0x20e451(0xc82)][_0x20e451(0x4ed)](this);
                    } ['Play']() {
                        const _0x570417 = _0x21f48e;
                        this[_0x570417(0x1995)][_0x570417(0x1374)](), this['tween2']['restart'](), this['scene']['time'][_0x570417(0x12b8)]({
                            'delay': 0x78,
                            'callback': this[_0x570417(0x14fb)],
                            'callbackScope': this
                        });
                    }
                }
                _0x25d277['HitVFX'] = _0x4becb7, _0x25d277['default'] = _0x4becb7;
            };
