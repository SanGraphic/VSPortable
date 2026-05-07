// Module 0x7e1d
// Args: _0x33ceaa, _0x58585f, _0x524455

export default (_0x33ceaa, _0x58585f, _0x524455) => {
                'use strict';
                const _0x551574 = a0_0x6932;
                var _0x3f7932 = this && this['__importDefault'] || function(_0x3bcf5e) {
                    return _0x3bcf5e && _0x3bcf5e['__esModule'] ? _0x3bcf5e : {
                        'default': _0x3bcf5e
                    };
                };
                Object['defineProperty'](_0x58585f, '__esModule', {
                    'value': !0x0
                }), _0x58585f['B_Whip'] = void 0x0;
                const _0x4d1a82 = _0x3f7932(_0x524455(0xa14d)),
                    _0x56bf13 = _0x3f7932(_0x524455(0x5f07)),
                    _0x77d6a8 = _0x3f7932(_0x524455(0x1fd7)),
                    _0x28c7a6 = _0x3f7932(_0x524455(0x5103));
                class _0x486a3f extends _0x4d1a82['default'] {
                    constructor(_0x9c7310, _0xfec51a, _0x513847, _0x4ef18b, _0x446425) {
                        const _0x58835c = _0x551574;
                        super(_0x9c7310, _0xfec51a, _0x513847, 'vfx', 'slash.png', _0x4ef18b, _0x446425), this[_0x58835c(0x140c)] = 0x0;
                    } ['Init'](_0x5af13a = -0x3e8, _0x20097f = -0x3e8) {
                        const _0x387471 = _0x551574;
                        super[_0x387471(0x658)](_0x5af13a, _0x20097f), this[_0x387471(0x8a2)](0x0), this[_0x387471(0x140c)] = this[_0x387471(0x4a1)]['PArea'], this[_0x387471(0x99a)] = this[_0x387471(0x6d2)][_0x387471(0x12a1)][_0x387471(0x18bd)]({
                            'targets': this,
                            'scale': _0x28c7a6[_0x387471(0xd2c)][_0x387471(0x15db)] * this['weapon']['PArea'],
                            'duration': 0x64,
                            'ease': 'Linear'
                        });
                    } ['OnRecycle']() {
                        const _0x12c05f = _0x551574;
                        var _0x5a069f;
                        super[_0x12c05f(0x5ce)](), this[_0x12c05f(0xe71)] = 0x1, this['tween'] && (this[_0x12c05f(0x140c)] != this['weapon'][_0x12c05f(0x5f5)] && (this[_0x12c05f(0x99a)][_0x12c05f(0x1a34)](), this[_0x12c05f(0x6d2)][_0x12c05f(0x12a1)]['remove'](this[_0x12c05f(0x99a)]), this[_0x12c05f(0x8a2)](0x0), this[_0x12c05f(0x99a)] = this[_0x12c05f(0x6d2)]['tweens'][_0x12c05f(0x18bd)]({
                            'targets': this,
                            'scale': _0x28c7a6['default'][_0x12c05f(0x15db)] * this['weapon'][_0x12c05f(0x5f5)],
                            'duration': 0x64,
                            'ease': 'Linear'
                        })), this[_0x12c05f(0x99a)]['restart']()), null === (_0x5a069f = this['tween2']) || void 0x0 === _0x5a069f || _0x5a069f[_0x12c05f(0x1a34)](), this[_0x12c05f(0x15fa)] = this[_0x12c05f(0x6d2)][_0x12c05f(0x12a1)][_0x12c05f(0x18bd)]({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear',
                            'delay': 0x64,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                        const _0x4c8609 = _0x56bf13['default']['Core']['Player']['flipX'] ? this[_0x12c05f(0x19c4)] % 0x2 != 0x1 : this['indexInWeapon'] % 0x2 == 0x1;
                        this['x'] += _0x4c8609 ? -0x40 : 0x40, this['y'] -= 0x10, this['y'] -= 0x10 * this[_0x12c05f(0x19c4)], this[_0x12c05f(0x293)](this['indexInWeapon'] % 0x2 == 0x1), this['setFlipX'](_0x4c8609), _0x56bf13[_0x12c05f(0xd2c)]['Sound']['PlaySound'](_0x77d6a8[_0x12c05f(0xd2c)][_0x12c05f(0x1a2c)], {
                            'detune': -0x64 * this['indexInWeapon'],
                            'volume': 1.7,
                            'rate': 0x2
                        });
                    }
                }
                _0x58585f['B_Whip'] = _0x486a3f, _0x58585f['default'] = _0x486a3f;
            };
