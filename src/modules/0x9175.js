// Module 0x9175
// Args: _0x86f444, _0xfce1b8, _0x5369f3

export default (_0x86f444, _0xfce1b8, _0x5369f3) => {
                'use strict';
                const _0xa8bb4f = a0_0x6932;
                var _0x3e05a5 = this && this['__importDefault'] || function(_0x5f160a) {
                    const _0x5ea3d9 = a0_0x6932;
                    return _0x5f160a && _0x5f160a['__esModule'] ? _0x5f160a : {
                        'default': _0x5f160a
                    };
                };
                Object['defineProperty'](_0xfce1b8, '__esModule', {
                    'value': !0x0
                });
                const _0x91a1c5 = _0x3e05a5(_0x5369f3(0x1fd7)),
                    _0x5bfdb1 = _0x3e05a5(_0x5369f3(0x54e3)),
                    _0x35f16c = _0x3e05a5(_0x5369f3(0x5f07)),
                    _0x5b05de = _0x3e05a5(_0x5369f3(0xa021));
                class _0x1090b9 extends _0x5b05de['default'] {
                    ['OnRecycle']() {
                        const _0x5efbd7 = _0xa8bb4f;
                        super[_0x5efbd7(0x5ce)](), this['isIdle'] = !0x0, this['isSpinning'] = !0x1, this[_0x5efbd7(0x3c3)] = 0.5 * this[_0x5efbd7(0x6d2)]['renderer']['height'] - 0x18, this[_0x5efbd7(0x1b8)] = 0.5 * Math['PI'], this['setOrigin'](0.5), this[_0x5efbd7(0x15a1)] = !0x0, this[_0x5efbd7(0x10e6)] = !0x1, this['runningTweenValue'] = -0x1, this['isCullable'] = !0x1, this['isMaddener'] = !0x0, this[_0x5efbd7(0x16c6)] = 0x2710, this['rosaried'] = !0x1;
                    } ['StopAllTimers']() {
                        const _0xf08ac3 = _0xa8bb4f;
                        var _0x6b93c2, _0x20606d;
                        null === (_0x6b93c2 = this[_0xf08ac3(0x2db)]) || void 0x0 === _0x6b93c2 || _0x6b93c2['stop'](), null === (_0x20606d = this[_0xf08ac3(0x1ba)]) || void 0x0 === _0x20606d || _0x20606d['stop']();
                    } ['Update'](_0x564781) {
                        const _0x428ea0 = _0xa8bb4f;
                        this['speed'] = 0x0, super['Update'](_0x564781), this['isSpinning'] ? (this['x'] = _0x35f16c[_0x428ea0(0xd2c)]['Core']['Player']['x'] - Math['cos'](this[_0x428ea0(0x1b8)]) * this[_0x428ea0(0x3c3)], this['y'] = _0x35f16c[_0x428ea0(0xd2c)][_0x428ea0(0x1043)]['Player']['y'] - Math['sin'](this['spinAngle']) * this['spinRadius']) : this[_0x428ea0(0x10e6)] ? (this['x'] = _0x35f16c[_0x428ea0(0xd2c)]['Core'][_0x428ea0(0x10f6)]['x'] + (0.5 * this['scene'][_0x428ea0(0x12f9)][_0x428ea0(0x173c)] + 0x30) * this[_0x428ea0(0x6ac)], this['y'] = _0x35f16c['default']['Core'][_0x428ea0(0x10f6)]['y'] + this[_0x428ea0(0x3c3)] - 0x30) : this['isPursuing'] && (this['x'] = _0x35f16c[_0x428ea0(0xd2c)][_0x428ea0(0x1043)][_0x428ea0(0x10f6)]['x'] - 0.25 * this['scene'][_0x428ea0(0x12f9)][_0x428ea0(0x173c)] + 0x30 * this['runningTweenValue'], this['y'] = _0x35f16c['default'][_0x428ea0(0x1043)]['Player']['y']), this['depth'] = 0x2710;
                    } ['Spinnn']() {
                        const _0x309f43 = _0xa8bb4f;
                        this[_0x309f43(0x15a1)] = !0x0, this['spinningTween'] = this[_0x309f43(0x6d2)][_0x309f43(0x12a1)][_0x309f43(0x18bd)]({
                            'targets': this,
                            'spinAngle': 2.5 * Math['PI'],
                            'duration': 0xbe0,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut',
                            'repeat': 0x3
                        });
                    } ['StartLowerScreenMotion']() {
                        const _0x49d14a = _0xa8bb4f;
                        this[_0x49d14a(0x15a1)] = !0x1, this['lowerScreenTween'] = this['scene'][_0x49d14a(0x12a1)][_0x49d14a(0x18bd)]({
                            'targets': this,
                            'x': this['x'] + 0.5 * this[_0x49d14a(0x6d2)][_0x49d14a(0x12f9)][_0x49d14a(0x173c)] + 0xc8,
                            'duration': 0x3e8,
                            'onComplete': () => {
                                const _0x5d0ded = _0x49d14a;
                                this[_0x5d0ded(0x10e6)] = !0x0, this['scene'][_0x5d0ded(0x12a1)]['add']({
                                    'targets': this,
                                    'runningTweenValue': 0x1,
                                    'yoyo': !0x0,
                                    'duration': 0xfa0,
                                    'repeat': 0x3
                                });
                            }
                        });
                    } ['StartPursuit']() {
                        const _0x182c65 = _0xa8bb4f;
                        this['isRunning'] = !0x1, this[_0x182c65(0x6ac)] = -0x1, this['scene'][_0x182c65(0x12a1)][_0x182c65(0x18bd)]({
                            'targets': this,
                            'x': _0x35f16c[_0x182c65(0xd2c)]['Core'][_0x182c65(0x10f6)]['x'] - 0.25 * this[_0x182c65(0x6d2)]['renderer']['width'] + 0x30 * this['runningTweenValue'],
                            'y': _0x35f16c['default'][_0x182c65(0x1043)][_0x182c65(0x10f6)]['y'],
                            'duration': 0xc8,
                            'onComplete': () => {
                                this['isPursuing'] = !0x0;
                            }
                        });
                    } ['StartKill']() {
                        const _0xdd35cf = _0xa8bb4f;
                        this['isPursuing'] = !0x1, this[_0xdd35cf(0x6d2)][_0xdd35cf(0x12a1)][_0xdd35cf(0x18bd)]({
                            'targets': this,
                            'x': _0x35f16c[_0xdd35cf(0xd2c)]['Core'][_0xdd35cf(0x10f6)]['x'] - 0x190,
                            'y': _0x35f16c['default'][_0xdd35cf(0x1043)]['Player']['y'],
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x807ce1 = _0xdd35cf;
                                this['setScrollFactor'](0x0), this['x'] = -0x30, this['y'] = 0.5 * this[_0x807ce1(0x6d2)][_0x807ce1(0x12f9)][_0x807ce1(0x140e)], this['ExecuteKill']();
                            }
                        });
                    } ['ExecuteKill']() {
                        const _0x2fe6dc = _0xa8bb4f;
                        this[_0x2fe6dc(0x15ab)] = this[_0x2fe6dc(0x6d2)][_0x2fe6dc(0x12a1)][_0x2fe6dc(0x18bd)]({
                            'targets': this,
                            'x': 0.5 * this[_0x2fe6dc(0x6d2)]['renderer']['width'],
                            'y': 0.5 * this[_0x2fe6dc(0x6d2)][_0x2fe6dc(0x12f9)]['height'],
                            'duration': 0x7d0,
                            'onComplete': () => {
                                const _0x224472 = _0x2fe6dc;
                                _0x35f16c['default'][_0x224472(0x1043)][_0x224472(0x10f6)]['isDead'] || (_0x35f16c[_0x224472(0xd2c)][_0x224472(0x1043)][_0x224472(0x10f6)]['hp'] = 0x0, _0x35f16c['default'][_0x224472(0x1043)]['Player'][_0x224472(0x14f3)](), _0x35f16c[_0x224472(0xd2c)]['Core'][_0x224472(0x92a)]());
                            }
                        });
                    } ['GetDamaged'](_0x1ecb39, _0x1c3970, _0x484503, _0x3c461b) {
                        const _0x1e9752 = _0xa8bb4f;
                        var _0x4fe4e6;
                        if (_0x3c461b === _0x5bfdb1['default'][_0x1e9752(0x13b0)] && !this[_0x1e9752(0x1aa4)]) return this[_0x1e9752(0x1aa4)] = !0x0, this[_0x1e9752(0x183e)]['play']('idle'), this['SingleWarning'](this['x'] + 0x20, this['y'] - 0x10), this['isSpinning'] = !0x1, this[_0x1e9752(0x11cb)] = !0x1, null === (_0x4fe4e6 = this[_0x1e9752(0x15ab)]) || void 0x0 === _0x4fe4e6 || _0x4fe4e6[_0x1e9752(0x1a34)](), void this[_0x1e9752(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'x': this['x'] - this[_0x1e9752(0x6d2)]['renderer'][_0x1e9752(0x173c)],
                            'duration': 0x7d0,
                            'delay': 0xbb8
                        });
                        super[_0x1e9752(0x1112)](_0x1ecb39, _0x1c3970, _0x484503, _0x3c461b);
                    } ['SingleWarning'](_0x44ba58, _0x5cb410) {
                        const _0x3b7d5d = _0xa8bb4f;
                        let _0x221aa1 = this[_0x3b7d5d(0x6d2)]['add'][_0x3b7d5d(0x568)](_0x44ba58, _0x5cb410, 'UI', 'ExclamationMark.png')[_0x3b7d5d(0x8a2)](0x0)[_0x3b7d5d(0xf8e)](0.5, 0x1)['setDepth'](0x2328);
                        this[_0x3b7d5d(0x6d2)]['tweens'][_0x3b7d5d(0x18bd)]({
                            'targets': _0x221aa1,
                            'scale': 0x1,
                            'duration': 0xc8,
                            'delay': 0x3e8,
                            'onStart': () => {
                                const _0x6ed09b = _0x3b7d5d;
                                _0x35f16c[_0x6ed09b(0xd2c)][_0x6ed09b(0x1267)][_0x6ed09b(0x7f6)](_0x91a1c5['default'][_0x6ed09b(0x6cf)], {
                                    'volume': 0.9,
                                    'detune': 0x4b0,
                                    'rate': 0x1
                                }, 0x96, 0x2);
                            },
                            'onComplete': () => {
                                const _0x34f685 = _0x3b7d5d;
                                this['scene'][_0x34f685(0x12a1)][_0x34f685(0x18bd)]({
                                    'targets': _0x221aa1,
                                    'scale': 0x0,
                                    'duration': 0xc8,
                                    'delay': 0xc8
                                });
                            }
                        });
                    }
                }
                _0xfce1b8['default'] = _0x1090b9;
            };
