// Module 0x359f
// Args: _0x1862da, _0x4922b2, _0x113300

export default (_0x1862da, _0x4922b2, _0x113300) => {
                'use strict';
                const _0x3f6aab = a0_0x6932;
                var _0xcefdf5 = this && this['__importDefault'] || function(_0x531c9a) {
                    const _0xbfab7d = _0x3f6aab;
                    return _0x531c9a && _0x531c9a[_0xbfab7d(0x16f1)] ? _0x531c9a : {
                        'default': _0x531c9a
                    };
                };
                Object['defineProperty'](_0x4922b2, '__esModule', {
                    'value': !0x0
                }), _0x4922b2['B_Bubble'] = void 0x0;
                const _0x581674 = _0xcefdf5(_0x113300(0xa14d)),
                    _0x37dfa2 = _0xcefdf5(_0x113300(0x5f07)),
                    _0x470a6e = _0xcefdf5(_0x113300(0x1fd7));
                class _0x4610f1 extends _0x581674['default'] {
                    constructor(_0x2a08e7, _0x50458c, _0x1ad1be, _0x29b3b6, _0x2b228f) {
                        const _0x15cc1a = _0x3f6aab;
                        super(_0x2a08e7, _0x50458c, _0x1ad1be, 'vfx', 'circle8.png', _0x29b3b6, _0x2b228f), this[_0x15cc1a(0x6dc)] = -0x1, this[_0x15cc1a(0xc8f)] = -0x1, this[_0x15cc1a(0x998)] = 0x1, this[_0x15cc1a(0xa21)] = !0x0, this['bounceAreaMod'] = 0x1, this[_0x15cc1a(0x161a)] = 0x8, this[_0x15cc1a(0x9dc)] = new Phaser['Math']['Vector2'](), this[_0x15cc1a(0x183f)](!0x1);
                    } ['SetColor'](_0x59dde3) {
                        const _0x2b1bf7 = _0x3f6aab;
                        let _0x259e78 = Phaser[_0x2b1bf7(0x24f)]['RND']['pick'](['HitBlue1.png', 'HitBlue2.png', 'HitCloud1.png', 'bubble.png', 'bubble.png', 'bubble.png']);
                        this[_0x2b1bf7(0x381)](_0x259e78);
                    } ['OnRecycle']() {
                        const _0x523550 = _0x3f6aab;
                        var _0x5dd5fe, _0x339d48;
                        super[_0x523550(0x5ce)](), this[_0x523550(0x177d)] = !0x1, this[_0x523550(0x8a2)](0x1), this[_0x523550(0xcf9)]['setCircle'](0xa, 0x1, 0x1), this[_0x523550(0xcf9)][_0x523550(0x543)] = !0x0, this[_0x523550(0x990)] = [], this[_0x523550(0x183f)](!0x0), this['setScale'](0x0), this[_0x523550(0x177d)] = !0x0, this['save_vel_x'] = 0x1, this['save_vel_y'] = 0x1, this[_0x523550(0xfb9)](this[_0x523550(0x9dc)]), this[_0x523550(0x19c8)](this[_0x523550(0x9dc)]['x'] * this['weapon']['PSpeed'], this[_0x523550(0x9dc)]['y'] * this[_0x523550(0x4a1)][_0x523550(0x712)]), _0x37dfa2[_0x523550(0xd2c)]['Sound'][_0x523550(0x7f6)](_0x470a6e['default']['Bubbles'], {
                            'detune': 0x32 * this[_0x523550(0x19c4)],
                            'volume': 0.4
                        }, 0x64, 0xc), null === (_0x5dd5fe = this[_0x523550(0x11e0)]) || void 0x0 === _0x5dd5fe || _0x5dd5fe[_0x523550(0x1a34)](), this['bombDeceleration'] = 0x1, this[_0x523550(0x11e0)] = this[_0x523550(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'bombDeceleration': 0x0,
                            'delay': 0.25 * this[_0x523550(0x4a1)][_0x523550(0x16c3)],
                            'duration': 0.75 * this[_0x523550(0x4a1)]['PDuration'],
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x1966f6 = _0x523550;
                                this[_0x1966f6(0x14e3)]();
                            }
                        }), null === (_0x339d48 = this[_0x523550(0x1995)]) || void 0x0 === _0x339d48 || _0x339d48['stop'](), this[_0x523550(0x1995)] = this[_0x523550(0x6d2)][_0x523550(0x12a1)][_0x523550(0x18bd)]({
                            'targets': this,
                            'scaleX': this[_0x523550(0x4a1)]['PArea'],
                            'scaleY': this[_0x523550(0x4a1)]['PArea'],
                            'duration': 0xfa,
                            'onStart': () => {
                                const _0x332a75 = _0x523550;
                                this[_0x332a75(0xe71)] = 0.65, this[_0x332a75(0x183f)](!0x0), this[_0x332a75(0x3a8)] = 0x0, this['scaleY'] = 0x0, this[_0x332a75(0xa21)] = !0x1;
                            },
                            'onComplete': () => {
                                const _0x345902 = _0x523550;
                                this[_0x345902(0xa21)] = !0x0;
                            }
                        });
                    } ['FadeOut']() {
                        const _0x224297 = _0x3f6aab;
                        this[_0x224297(0x6d2)][_0x224297(0x12a1)]['add']({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['Bounce'](_0x22d361) {
                        this['body'];
                    } ['decelerate']() {
                        const _0x4500d4 = _0x3f6aab;
                        this['save_vel_x'] = 0x0, this[_0x4500d4(0xc8f)] = 0x0;
                    } ['JustBounce']() {
                        const _0x4deb63 = _0x3f6aab;
                        this['canBounce'] && (this[_0x4deb63(0x6dc)] *= -0x1, this[_0x4deb63(0xc8f)] *= -0x1);
                    } ['Update'](_0x40ebfd) {
                        const _0x211e69 = _0x3f6aab;
                        this[_0x211e69(0x19c8)](this[_0x211e69(0x9dc)]['x'] * this[_0x211e69(0x6dc)], this['aimVec']['y'] * this[_0x211e69(0xc8f)]), this[_0x211e69(0x16c6)] = -this[_0x211e69(0x6d2)][_0x211e69(0x12f9)][_0x211e69(0x140e)];
                    } ['DeSpawn']() {
                        const _0x53c968 = _0x3f6aab;
                        var _0x8768b9, _0x4d03d1, _0x480611;
                        null === (_0x8768b9 = this['SpeedTween']) || void 0x0 === _0x8768b9 || _0x8768b9['stop'](), null === (_0x4d03d1 = this['tween1']) || void 0x0 === _0x4d03d1 || _0x4d03d1[_0x53c968(0x1a34)](), null === (_0x480611 = this[_0x53c968(0x15fa)]) || void 0x0 === _0x480611 || _0x480611[_0x53c968(0x1a34)](), this[_0x53c968(0x3a8)] = 0x0, this['scaleY'] = 0x0, this[_0x53c968(0x183f)](!0x1), this[_0x53c968(0xcf9)]['enable'] = !0x1, super['DeSpawn']();
                    } ['OnHasHitWall'](_0x24beec) {
                        const _0x76d2c0 = _0x3f6aab;
                        this[_0x76d2c0(0x1d7)]();
                    }
                }
                _0x4922b2['B_Bubble'] = _0x4610f1, _0x4922b2['default'] = _0x4610f1;
            };
