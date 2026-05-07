// Module 0x15475
// Args: _0x171014, _0x975c26, _0x50e668

export default (_0x171014, _0x975c26, _0x50e668) => {
                'use strict';
                const _0x218a47 = a0_0x6932;
                var _0x4f60fb = this && this['__importDefault'] || function(_0x16ecb5) {
                    const _0x2038dc = a0_0x6932;
                    return _0x16ecb5 && _0x16ecb5['__esModule'] ? _0x16ecb5 : {
                        'default': _0x16ecb5
                    };
                };
                Object['defineProperty'](_0x975c26, '__esModule', {
                    'value': !0x0
                }), _0x975c26['B_Spellstream'] = void 0x0;
                const _0x3c7782 = _0x4f60fb(_0x50e668(0xa14d)),
                    _0x2858af = _0x4f60fb(_0x50e668(0x5f07)),
                    _0x113d4d = _0x4f60fb(_0x50e668(0x1fd7));
                class _0x62a285 extends _0x3c7782['default'] {
                    constructor(_0x35c5a2, _0x3c2fcf, _0x5f15e9, _0x13bf27, _0x3ca18c) {
                        const _0x6e7195 = _0x218a47;
                        super(_0x35c5a2, _0x3c2fcf, _0x5f15e9, 'vfx', 'WhiteDot.png', _0x13bf27, _0x3ca18c), this[_0x6e7195(0x1929)] = !0x1, this[_0x6e7195(0x117b)] = 0x0, this[_0x6e7195(0x10e3)] = 0x0, this['deceleration'] = 0x0, this[_0x6e7195(0x2fe)] = 0x2ee, this[_0x6e7195(0x9dc)] = new Phaser['Math'][(_0x6e7195(0x1551))](), this[_0x6e7195(0x1045)] = new Phaser[(_0x6e7195(0x10d2))]['Circle'](0x0, 0x0, 0x10), this[_0x6e7195(0x125b)] = this['scene']['add'][_0x6e7195(0x1791)]('vfx'), this['emitter1'] = this['PfxEmitter'][_0x6e7195(0x14c0)]({
                            'frame': ['2Spell1.png', '2Spell2.png'],
                            'speed': 0x0,
                            'quantity': 0x1,
                            'lifespan': {
                                'min': 0x12c,
                                'max': 0x2bc
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'min': 0x1,
                                'max': 0x2
                            },
                            'on': !0x1,
                            'emitZone': {
                                'type': 'random',
                                'source': this['emitZone']
                            }
                        }), this['emitter2'] = this[_0x6e7195(0x125b)][_0x6e7195(0x14c0)]({
                            'frame': ['2Spell3.png', '2Spell4.png'],
                            'speed': 0x0,
                            'quantity': 0x1,
                            'lifespan': {
                                'min': 0x64,
                                'max': 0xc8
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x0,
                                'end': 0x2,
                                'ease': 'Quint.easeOut'
                            },
                            'on': !0x1,
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x6e7195(0x1045)]
                            }
                        });
                    } ['OnRecycle']() {
                        const _0x301fbf = _0x218a47;
                        var _0x2b0ba1, _0x21cb9c, _0x14bf81;
                        super['OnRecycle'](), this[_0x301fbf(0x177d)] = !0x1, this[_0x301fbf(0x183f)](!0x1), this[_0x301fbf(0x8a2)](0x1), this['body']['setCircle'](0x1, -0.5, -0.5), this[_0x301fbf(0xcf9)][_0x301fbf(0x543)] = !0x0, this[_0x301fbf(0x871)] = 0x2, this['x'] += 0x8 * this['weapon']['GetChanceFromArray'](), this['y'] -= 0xc, this[_0x301fbf(0xfb9)](this[_0x301fbf(0x9dc)]), this[_0x301fbf(0x19c8)](this['aimVec']['x'], this['aimVec']['y']);
                        let _0x262c9b = this[_0x301fbf(0x4a1)]['PDuration'] < this[_0x301fbf(0x2fe)];
                        null === (_0x2b0ba1 = this['scaleTween']) || void 0x0 === _0x2b0ba1 || _0x2b0ba1['stop'](), this['scaleTween'] = this[_0x301fbf(0x6d2)]['tweens'][_0x301fbf(0x18bd)]({
                            'targets': this,
                            'scale': 0x10 * (0x1 + this[_0x301fbf(0x4a1)]['PArea']),
                            'duration': this[_0x301fbf(0x2fe)],
                            'onComplete': () => {
                                _0x262c9b && this['DeSpawn']();
                            },
                            'onStart': () => {
                                const _0x1ac6cf = _0x301fbf;
                                this[_0x1ac6cf(0x8a2)](0x1);
                            }
                        }), _0x262c9b || (null === (_0x21cb9c = this[_0x301fbf(0x88b)]) || void 0x0 === _0x21cb9c || _0x21cb9c['stop'](), this[_0x301fbf(0x88b)] = this[_0x301fbf(0x6d2)][_0x301fbf(0x12a1)]['addCounter']({
                            'from': 0x0,
                            'to': 0x1,
                            'duration': this[_0x301fbf(0x4a1)][_0x301fbf(0x16c3)],
                            'onComplete': () => {
                                const _0x427f98 = _0x301fbf;
                                this[_0x427f98(0x14fb)]();
                            }
                        })), null === (_0x14bf81 = this[_0x301fbf(0x1980)]) || void 0x0 === _0x14bf81 || _0x14bf81[_0x301fbf(0x1a34)](), this['speedTween'] = this[_0x301fbf(0x6d2)][_0x301fbf(0x12a1)]['add']({
                            'targets': this,
                            'deceleration': -0.75,
                            'duration': this['setDuration'],
                            'ease': 'Sine.easeInOut',
                            'onStart': () => {
                                const _0x4d9aaa = _0x301fbf;
                                this[_0x4d9aaa(0x871)] = 0x2;
                            }
                        }), _0x2858af['default']['Sound'][_0x301fbf(0x7f6)](_0x113d4d['default'][_0x301fbf(0x1d4)], {
                            'volume': 0.4
                        }, 0x96, 0x1);
                    } ['Update'](_0x86ffbe) {
                        const _0x17e5c6 = _0x218a47;
                        let _0x3bb7b9 = Math[_0x17e5c6(0x1084)](0xa0, 0.25 * this[_0x17e5c6(0x7cb)]);
                        this['emitZone'][_0x17e5c6(0x161a)] = this[_0x17e5c6(0x7cb)], this[_0x17e5c6(0x121b)]['setEmitZone']({
                            'type': 'random',
                            'source': this[_0x17e5c6(0x1045)]
                        }), this[_0x17e5c6(0x81e)][_0x17e5c6(0x152)]({
                            'type': 'random',
                            'source': this[_0x17e5c6(0x1045)]
                        }), this[_0x17e5c6(0x121b)]['emitParticleAt'](this['x'], this['y'], _0x3bb7b9), this[_0x17e5c6(0x81e)]['emitParticleAt'](this['x'], this['y'], 0.5 * _0x3bb7b9), this['setVelocity'](this['aimVec']['x'] * this['deceleration'], this['aimVec']['y'] * this['deceleration']);
                    } ['DeSpawn']() {
                        const _0x2b7b80 = _0x218a47;
                        var _0x3c36d3, _0x32194c, _0x18c041;
                        null === (_0x3c36d3 = this['durationTween']) || void 0x0 === _0x3c36d3 || _0x3c36d3[_0x2b7b80(0x1a34)](), null === (_0x32194c = this[_0x2b7b80(0x1980)]) || void 0x0 === _0x32194c || _0x32194c[_0x2b7b80(0x1a34)](), null === (_0x18c041 = this[_0x2b7b80(0x660)]) || void 0x0 === _0x18c041 || _0x18c041['stop'](), super[_0x2b7b80(0x14fb)]();
                    }
                }
                _0x975c26['B_Spellstream'] = _0x62a285, _0x975c26['default'] = _0x62a285;
            };
