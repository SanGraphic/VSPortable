// Module 0xe3ce
// Args: _0x262b49, _0x174014, _0x43075c

export default (_0x262b49, _0x174014, _0x43075c) => {
                'use strict';
                const _0x4f45c0 = a0_0x6932;
                var _0x4edec6 = this && this['__importDefault'] || function(_0x1587d0) {
                    return _0x1587d0 && _0x1587d0['__esModule'] ? _0x1587d0 : {
                        'default': _0x1587d0
                    };
                };
                Object['defineProperty'](_0x174014, '__esModule', {
                    'value': !0x0
                }), _0x174014['B_Cherry'] = void 0x0;
                const _0x5aa604 = _0x4edec6(_0x43075c(0xa14d)),
                    _0x3f98ca = _0x4edec6(_0x43075c(0x5f07)),
                    _0x3f3c63 = _0x4edec6(_0x43075c(0x1fd7)),
                    _0x18cc3b = _0x4edec6(_0x43075c(0x5103)),
                    _0x345c2d = _0x43075c(0x18304);
                class _0x2836de extends _0x5aa604['default'] {
                    constructor(_0x3d5805, _0x3cdea4, _0x11b513, _0x27f244, _0x1d9c26) {
                        const _0x7f4c9b = _0x4f45c0;
                        super(_0x3d5805, _0x3cdea4, _0x11b513, 'items', 'Cherry.png', _0x27f244, _0x1d9c26), this[_0x7f4c9b(0x6dc)] = -0x1, this['save_vel_y'] = -0x1, this[_0x7f4c9b(0x998)] = 0x1, this[_0x7f4c9b(0xa21)] = !0x0, this[_0x7f4c9b(0x10a0)] = this[_0x7f4c9b(0x6d2)][_0x7f4c9b(0x18bd)][_0x7f4c9b(0x105b)](0x0, 0x0, 'vfx', 'sPFX_ring_64.png')[_0x7f4c9b(0x183f)](!0x1), this['rainbow'] = this['scene']['add'][_0x7f4c9b(0x105b)](0x0, 0x0, 'vfx', 's_pfx_rainbow_64.png')['setVisible'](!0x1), this[_0x7f4c9b(0xa0a)] = this[_0x7f4c9b(0x6d2)][_0x7f4c9b(0x18bd)][_0x7f4c9b(0x105b)](0x0, 0x0, 'vfx', 'fuzzA.png')[_0x7f4c9b(0x183f)](!0x1), this[_0x7f4c9b(0x9dc)] = new Phaser[(_0x7f4c9b(0x24f))][(_0x7f4c9b(0x1551))](), this['AngleTween'] = this['scene'][_0x7f4c9b(0x12a1)]['add']({
                            'targets': this,
                            'angle': 0x167,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'repeat': -0x1
                        }), this['particles'] = this[_0x7f4c9b(0x6d2)]['add'][_0x7f4c9b(0x1791)]('vfx'), this['animatedParticles'] = this['scene'][_0x7f4c9b(0x18bd)][_0x7f4c9b(0x1791)]('cherryBomb0'), this[_0x7f4c9b(0x68f)] = this['particles'][_0x7f4c9b(0x14c0)]({
                            'frame': ['_blur.png', '_blur2.png', '_blur3.png'][_0x1d9c26 % 0x3],
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0x320,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'alpha': {
                                'start': 0x0,
                                'end': 0x1,
                                'ease': 'Expo.easeOut'
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x10
                            },
                            'speed': {
                                'min': 0x32,
                                'max': 0x64
                            },
                            'quantity': 0x40,
                            'scale': {
                                'start': 0x2,
                                'end': 0x0
                            },
                            'frequency': 0x40,
                            'blendMode': 'ADD',
                            'on': !0x1
                        }), this['fwEmitter2'] = this[_0x7f4c9b(0x456)][_0x7f4c9b(0x14c0)]({
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0x4b0,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'alpha': {
                                'start': 0x0,
                                'end': 0x1,
                                'ease': 'Expo.easeOut'
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x1f
                            },
                            'speed': {
                                'min': 0x32,
                                'max': 0x64
                            },
                            'quantity': 0x40,
                            'scale': {
                                'start': 0x2,
                                'end': 0.1
                            },
                            'frequency': 0x40,
                            'tint': {
                                'onEmit': (_0x4ceeea, _0x45d130, _0x131fc2) => this[_0x7f4c9b(0x1942)](_0x4ceeea, _0x45d130, _0x131fc2)
                            },
                            'blendMode': 'ADD',
                            'on': !0x1
                        }), this[_0x7f4c9b(0x131f)] = this[_0x7f4c9b(0x4a1)];
                    } ['onEmitcustomTint'](_0x34738c, _0x5a4e68, _0x30bff7) {
                        const _0x4d5006 = _0x4f45c0;
                        return Phaser['Math']['RND'][_0x4d5006(0x198c)]([0xff8888, 0xff88ff, 0xff88ff, 0xffff88]);
                    } ['onEmitcustomTint2'](_0x12e8fd, _0x3d6cbb, _0x45b378) {
                        const _0x343a59 = _0x4f45c0;
                        return Phaser[_0x343a59(0x24f)]['RND']['pick']([0x4444ff, 0xff44ff, 0xff44ff, 0xff4444]);
                    } ['OnRecycle']() {
                        const _0xdc0927 = _0x4f45c0;
                        var _0x5bb92a;
                        super[_0xdc0927(0x5ce)](), this['body']['setCircle'](0x8), this[_0xdc0927(0xcf9)][_0xdc0927(0x543)] = !0x0, this[_0xdc0927(0xa21)] = !0x0, this['setVisible'](!0x0), this['setFrame']('Cherry.png'), this[_0xdc0927(0x131f)][_0xdc0927(0x9aa)] && (this[_0xdc0927(0x68f)]['setFrame']([
                            ['2Spell3Blue.png', '2Spell4Blue.png'],
                            ['2Spell3Purple.png', '2Spell4Purple.png'],
                            ['2Spell3Red.png', '2Spell4Red.png']
                        ][this[_0xdc0927(0x19c4)] % 0x3]), this[_0xdc0927(0x68f)][_0xdc0927(0x8a2)]({
                            'start': 0x3,
                            'end': 0x0
                        }), this['fwEmitter2'][_0xdc0927(0xb34)]({
                            'onEmit': (_0x35635d, _0x2a7832, _0x5d6f51) => this[_0xdc0927(0x1102)](_0x35635d, _0x2a7832, _0x5d6f51)
                        })), _0x3f98ca[_0xdc0927(0xd2c)]['Core'][_0xdc0927(0x9c3)] && this['setFrame']('pumpkin.png'), this[_0xdc0927(0xdab)](0x1), this['setScale'](_0x18cc3b[_0xdc0927(0xd2c)][_0xdc0927(0x15db)] * this[_0xdc0927(0x4a1)][_0xdc0927(0x5f5)] * 0.5), this['setBounce'](0x1, 0x1), this['fwEmitter']['setQuantity'](0x8 + 0x4 * Math['floor'](this[_0xdc0927(0x4a1)][_0xdc0927(0x5e3)] / 0x3)), this[_0xdc0927(0x68f)][_0xdc0927(0xb43)]({
                            'min': 0x32 * this['weapon'][_0xdc0927(0x5f5)],
                            'max': 0x64 * this[_0xdc0927(0x4a1)]['PArea']
                        }), this['fwEmitter2']['setQuantity'](0x8 + 0x8 * Math['floor'](this[_0xdc0927(0x4a1)]['level'] / 0x3)), this['fwEmitter2']['setSpeed']({
                            'min': 0x5 * this[_0xdc0927(0x4a1)][_0xdc0927(0x5f5)],
                            'max': 0xa * this[_0xdc0927(0x4a1)]['PArea']
                        });
                        var _0x586a8f = new Phaser[(_0xdc0927(0x10d2))]['Circle'](0x0, 0x0, 0x8 * this['weapon'][_0xdc0927(0x5f5)] * 0x8);
                        this[_0xdc0927(0xfe0)][_0xdc0927(0x152)]({
                            'type': 'random',
                            'source': _0x586a8f
                        }), this['isCullable'] = !0x1, _0x3f98ca[_0xdc0927(0xd2c)][_0xdc0927(0x1043)][_0xdc0927(0x6d2)]['time'][_0xdc0927(0x17fb)](this['ExpireTimer']), this['save_vel_x'] = 0x1, this[_0xdc0927(0xc8f)] = 0x1, this[_0xdc0927(0xfb9)](this[_0xdc0927(0x9dc)]), this['setVelocity'](this[_0xdc0927(0x9dc)]['x'], this[_0xdc0927(0x9dc)]['y']), null === (_0x5bb92a = this[_0xdc0927(0x11e0)]) || void 0x0 === _0x5bb92a || _0x5bb92a['stop'](), this[_0xdc0927(0x998)] = 0x1, this[_0xdc0927(0x11e0)] = this[_0xdc0927(0x6d2)][_0xdc0927(0x12a1)]['add']({
                            'targets': this,
                            'bombDeceleration': 0x0,
                            'delay': 0.25 * this['weapon'][_0xdc0927(0x16c3)],
                            'duration': 0.75 * this[_0xdc0927(0x4a1)]['PDuration'],
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x703b45 = _0xdc0927;
                                this[_0x703b45(0x1630)]();
                            }
                        }), _0x3f98ca['default']['Sound'][_0xdc0927(0x7f6)](_0x3f3c63['default'][_0xdc0927(0xfcc)], {
                            'detune': -0x64 * this[_0xdc0927(0x19c4)],
                            'volume': 0.45
                        }, 0xc8, 0xa);
                    } ['TryDetonate']() {
                        const _0x4afc24 = _0x4f45c0;
                        var _0x46e773;
                        if (Math['random']() < this['weapon']['chance'] * _0x3f98ca[_0x4afc24(0xd2c)]['Core']['Player'][_0x4afc24(0x17b9)]) {
                            _0x3f98ca['default'][_0x4afc24(0x1043)][_0x4afc24(0x14d8)][_0x4afc24(0x49c)] ? (this['setVisible'](!0x0), this[_0x4afc24(0x381)]('blurBlack.png')) : this[_0x4afc24(0x183f)](!0x1), this['fwEmitter2']['setPosition'](this['x'], this['y']), this['fwEmitter2'][_0x4afc24(0x1aa2)](), this[_0x4afc24(0x10a0)]['setVisible'](!0x0)['setScale'](0x0)['setAlpha'](0x1)[_0x4afc24(0x9b5)](0x0)[_0x4afc24(0x726)](this['x'], this['y']), _0x3f98ca[_0x4afc24(0xd2c)][_0x4afc24(0x1043)]['PlayerOptions']['FlashingVFXEnabled'] ? (this[_0x4afc24(0xeb4)][_0x4afc24(0x183f)](!0x0)['setScale'](0x0)[_0x4afc24(0xdab)](0.75)['setAngle'](0x0)[_0x4afc24(0x726)](this['x'], this['y'])[_0x4afc24(0x11c7)](_0x345c2d['BlendModes'][_0x4afc24(0x1811)]), this[_0x4afc24(0xa0a)][_0x4afc24(0x183f)](!0x0)[_0x4afc24(0x8a2)](0x0)[_0x4afc24(0xdab)](0x1)['setAngle'](0x0)['setPosition'](this['x'], this['y'])) : this['ring']['setAlpha'](0.5);
                            const _0x1f426b = Math[_0x4afc24(0x1981)](0x3, this[_0x4afc24(0x4a1)]['level']) / 0x8;
                            this[_0x4afc24(0x1995)] = this['scene']['tweens'][_0x4afc24(0x18bd)]({
                                'targets': [this['ring']],
                                'scale': 0x4 * _0x1f426b,
                                'angle': 0x168,
                                'duration': 0x64
                            }), this[_0x4afc24(0x15fa)] = this['scene'][_0x4afc24(0x12a1)]['add']({
                                'targets': [this[_0x4afc24(0x10a0)], this['rays']],
                                'delay': 0x64,
                                'alpha': 0x0,
                                'duration': 0x64
                            }), this['tween3'] = this['scene'][_0x4afc24(0x12a1)]['add']({
                                'targets': [this[_0x4afc24(0xa0a)]],
                                'scale': 0x3 * _0x1f426b,
                                'duration': 0x64
                            }), this['tween4'] = this['scene'][_0x4afc24(0x12a1)]['add']({
                                'targets': [this[_0x4afc24(0xeb4)]],
                                'scale': 0x5 * _0x1f426b,
                                'alpha': 0x0,
                                'angle': 0x168,
                                'duration': 0x1f4
                            }), _0x3f98ca['default'][_0x4afc24(0x1267)]['PlaySound'](_0x3f3c63['default'][_0x4afc24(0xae9)], {
                                'volume': 0.5,
                                'detune': 0x64 * this['indexInWeapon'] - 0x1f4
                            }, 0x96, 0x3), _0x3f98ca['default'][_0x4afc24(0x1267)]['PlaySound'](_0x3f3c63[_0x4afc24(0xd2c)]['Whistle'], {
                                'volume': 0.1,
                                'detune': 0x64 * this[_0x4afc24(0x19c4)],
                                'rate': 1.5
                            }, 0x96, 0x3), this['tween5'] = _0x3f98ca[_0x4afc24(0xd2c)]['Core']['scene'][_0x4afc24(0x12a1)]['add']({
                                'targets': this,
                                'scale': 0x8 * this[_0x4afc24(0x4a1)]['PArea'],
                                'alpha': 0.1,
                                'duration': 0x78,
                                'onComplete': () => {
                                    const _0x264212 = _0x4afc24;
                                    this['fwEmitter'][_0x264212(0x1a34)](), this['fwEmitter2'][_0x264212(0x1a34)](), this[_0x264212(0xcf9)][_0x264212(0x543)] = !0x1;
                                }
                            }), this['tween6'] = _0x3f98ca[_0x4afc24(0xd2c)][_0x4afc24(0x1043)][_0x4afc24(0x6d2)][_0x4afc24(0x12a1)]['add']({
                                'targets': this,
                                'alpha': 0.1,
                                'duration': 0x64,
                                'delay': 0xc8,
                                'onStart': () => {
                                    const _0x1cab9a = _0x4afc24;
                                    _0x3f98ca['default'][_0x1cab9a(0x1043)][_0x1cab9a(0x14d8)]['FlashingVFXEnabled'] && (this[_0x1cab9a(0x68f)][_0x1cab9a(0x726)](this['x'], this['y']), this['fwEmitter'][_0x1cab9a(0x1aa2)]());
                                },
                                'onComplete': () => {
                                    const _0x452aad = _0x4afc24;
                                    this['fwEmitter'][_0x452aad(0x1a34)](), this[_0x452aad(0xfe0)][_0x452aad(0x1a34)](), this[_0x452aad(0x14fb)]();
                                }
                            });
                        } else null === (_0x46e773 = this['ScaleTween']) || void 0x0 === _0x46e773 || _0x46e773['stop'](), this[_0x4afc24(0xd35)] = this['scene']['tweens']['add']({
                            'targets': this,
                            'scale': 0x0,
                            'duration': 0x12c,
                            'ease': 'Linear',
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['Bounce'](_0x12f105) {
                        this['body'] === _0x12f105 && (this['objectsHit'] = []);
                    } ['OnHasHitAnObject'](_0x56577b) {
                        const _0x2e2603 = _0x4f45c0;
                        if (!_0x56577b[_0x2e2603(0xdae)]) {
                            if (!this[_0x2e2603(0xa21)]) return;
                            this[_0x2e2603(0x6dc)] *= -0x1, this[_0x2e2603(0xc8f)] *= -0x1, this['objectsHit'] = [], this[_0x2e2603(0xa21)] = !0x1, this[_0x2e2603(0x6d2)][_0x2e2603(0x915)]['removeEvent'](this['BounceTimer']), this['BounceTimer'] = this['scene']['time']['addEvent']({
                                'delay': 0x3c,
                                'callback': () => {
                                    const _0x5adef3 = _0x2e2603;
                                    this[_0x5adef3(0xa21)] = !0x0;
                                }
                            });
                        }
                    } ['OnHasHitWall'](_0x5d6a40) {
                        const _0x46ea19 = _0x4f45c0;
                        this['save_vel_x'] *= _0x5d6a40[_0x46ea19(0x18c9)] || _0x5d6a40['faceLeft'] ? -0x1 : 0x1, this['save_vel_y'] *= _0x5d6a40['faceTop'] || _0x5d6a40[_0x46ea19(0x3da)] ? -0x1 : 0x1, this['objectsHit'] = [];
                    } ['Update']() {
                        const _0x14f879 = _0x4f45c0;
                        this[_0x14f879(0x19c8)](this[_0x14f879(0x9dc)]['x'] * this[_0x14f879(0x6dc)] * this['bombDeceleration'], this['aimVec']['y'] * this[_0x14f879(0xc8f)] * this[_0x14f879(0x998)]);
                    } ['DeSpawn']() {
                        const _0x34728f = _0x4f45c0;
                        this[_0x34728f(0x177d)] = !0x0, _0x3f98ca[_0x34728f(0xd2c)][_0x34728f(0x1043)]['scene'][_0x34728f(0x915)][_0x34728f(0x17fb)](this[_0x34728f(0x12a3)]), this['fwEmitter'][_0x34728f(0x1a34)](), this[_0x34728f(0xfe0)]['stop'](), super[_0x34728f(0x14fb)]();
                    }
                }
                _0x174014['B_Cherry'] = _0x2836de, _0x174014['default'] = _0x2836de;
            };
