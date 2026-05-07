// Module 0x1753d
// Args: _0x5406de, _0x35f0b3, _0x3c6ef5

export default (_0x5406de, _0x35f0b3, _0x3c6ef5) => {
                'use strict';
                const _0x534d21 = a0_0x6932;
                var _0x2e820e = this && this['__importDefault'] || function(_0x4c0582) {
                    return _0x4c0582 && _0x4c0582['__esModule'] ? _0x4c0582 : {
                        'default': _0x4c0582
                    };
                };
                Object['defineProperty'](_0x35f0b3, '__esModule', {
                    'value': !0x0
                }), _0x35f0b3['W_MirageRobe'] = void 0x0;
                const _0x1a847d = _0x2e820e(_0x3c6ef5(0x1fd7)),
                    _0x585be1 = _0x2e820e(_0x3c6ef5(0x54e3)),
                    _0x4658ad = _0x2e820e(_0x3c6ef5(0x5f07)),
                    _0x29693b = _0x2e820e(_0x3c6ef5(0xe49a));
                class _0x575ab2 extends _0x29693b['default'] {
                    constructor(_0x3fa879) {
                        const _0x342aec = _0x534d21;
                        super(_0x3fa879), this['collides'] = !0x0, this['explosionType'] = _0x585be1[_0x342aec(0xd2c)]['COLDEXPLOSION'], this[_0x342aec(0x8ee)] = _0x4658ad[_0x342aec(0xd2c)]['Core'][_0x342aec(0x6d2)][_0x342aec(0x18bd)][_0x342aec(0x568)](0x0, 0x0, 'vfx', 'sPFX_ring_64.png')['setOrigin'](0.5, 0x1)[_0x342aec(0xb34)](0xff, 0xff, 0xe0e0ff, 0xe0e0ff)['setAlpha'](0x0)[_0x342aec(0xb4a)](-0x1);
                    } ['Fire']() {
                        const _0x5ebe4d = _0x534d21;
                        var _0x756d7e, _0x1bd2af;
                        super[_0x5ebe4d(0x1754)](), _0x4658ad[_0x5ebe4d(0xd2c)][_0x5ebe4d(0x1267)][_0x5ebe4d(0x7f6)](_0x1a847d[_0x5ebe4d(0xd2c)]['Clones'], {
                            'volume': 0.3,
                            'detune': 0x3e8 * (Math['random']() - 0.25)
                        }, 0x64, 0x8);
                        let _0xb11197 = Math[_0x5ebe4d(0x1084)](this['PArea'], 0x1);
                        null === (_0x756d7e = this[_0x5ebe4d(0x9ea)]) || void 0x0 === _0x756d7e || _0x756d7e['stop'](), null === (_0x1bd2af = this['ringTween']) || void 0x0 === _0x1bd2af || _0x1bd2af[_0x5ebe4d(0x1a34)](), this['ringTween'] = _0x4658ad[_0x5ebe4d(0xd2c)]['Core'][_0x5ebe4d(0x6d2)][_0x5ebe4d(0x12a1)][_0x5ebe4d(0x18bd)]({
                            'targets': this[_0x5ebe4d(0x8ee)],
                            'alpha': 0.5,
                            'scale': 1.25 * _0xb11197,
                            'duration': 0x96,
                            'onStart': () => {
                                const _0x51cabd = _0x5ebe4d;
                                this['ringSprite']['x'] = _0x4658ad['default']['Core'][_0x51cabd(0x10f6)]['x'], this[_0x51cabd(0x8ee)]['y'] = _0x4658ad[_0x51cabd(0xd2c)]['Core'][_0x51cabd(0x10f6)]['y'], this['ringSprite'][_0x51cabd(0x8a2)](0x0), this['ringSprite']['alpha'] = 0x1;
                            },
                            'onComplete': () => {
                                const _0x17d86b = _0x5ebe4d;
                                var _0x540e1c;
                                null === (_0x540e1c = this[_0x17d86b(0x9ea)]) || void 0x0 === _0x540e1c || _0x540e1c[_0x17d86b(0x1a34)](), this['ringTween2'] = _0x4658ad['default'][_0x17d86b(0x1043)][_0x17d86b(0x6d2)]['tweens']['add']({
                                    'targets': this[_0x17d86b(0x8ee)],
                                    'alpha': 0x0,
                                    'duration': 0x64,
                                    'onStart': () => {
                                        const _0x5b74e5 = _0x17d86b;
                                        this['ringSprite'][_0x5b74e5(0xe71)] = 0.5;
                                    },
                                    'onComplete': () => {
                                        const _0x47ea98 = _0x17d86b;
                                        this['ringSprite'][_0x47ea98(0xe71)] = 0x0;
                                    }
                                });
                            },
                            'onUpdate': () => {
                                const _0x36ae9f = _0x5ebe4d;
                                this[_0x36ae9f(0x8ee)]['x'] = _0x4658ad['default'][_0x36ae9f(0x1043)]['Player']['x'], this['ringSprite']['y'] = _0x4658ad[_0x36ae9f(0xd2c)][_0x36ae9f(0x1043)]['Player']['y'];
                            }
                        });
                    } ['OnStart']() {
                        const _0x43c96d = _0x534d21;
                        super[_0x43c96d(0xec7)](), this[_0x43c96d(0x1a2)] && _0x4658ad[_0x43c96d(0xd2c)]['Core']['scene']['physics'][_0x43c96d(0x18bd)][_0x43c96d(0xe6e)](this['pool'], this[_0x43c96d(0xc82)]);
                    } ['onBulletOverlapsEnemy'](_0x2d07e8, _0x4d8598) {
                        const _0x241f91 = _0x534d21;
                        var _0x2ab64e = _0x4d8598;
                        if (!_0x2ab64e[_0x241f91(0xdae)] && !_0x2d07e8[_0x241f91(0x1738)](_0x2ab64e) && (_0x2ab64e[_0x241f91(0x1112)](this[_0x241f91(0xaae)], this[_0x241f91(0x347)], this['knockback'], this['bulletType']), this[_0x241f91(0xb3d)] += this[_0x241f91(0xaae)], this['chance'] > 0x0)) {
                            let _0x48363e = this[_0x241f91(0x433)][this[_0x241f91(0x11c9)] % this[_0x241f91(0x433)][_0x241f91(0xed9)]];
                            this[_0x241f91(0x11c9)]++, _0x48363e < this[_0x241f91(0xd71)] * _0x4658ad['default'][_0x241f91(0x1043)][_0x241f91(0x10f6)]['PLuck'] && this[_0x241f91(0x155a)](_0x2d07e8['x'], _0x2d07e8['y']);
                        }
                    }
                    get['SecondaryPPower']() {
                        const _0x3c9b46 = _0x534d21;
                        return this[_0x3c9b46(0xaae)];
                    }
                }
                _0x35f0b3['W_MirageRobe'] = _0x575ab2, _0x35f0b3['default'] = _0x575ab2;
            };
