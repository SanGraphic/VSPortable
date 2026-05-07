// Module 0x16676
// Args: _0x14c9da, _0x91ed08, _0x50fab0

export default (_0x14c9da, _0x91ed08, _0x50fab0) => {
                'use strict';
                const _0x11ca59 = a0_0x6932;
                var _0x38ae2a = this && this['__importDefault'] || function(_0x48cef4) {
                    const _0x3cc597 = a0_0x6932;
                    return _0x48cef4 && _0x48cef4['__esModule'] ? _0x48cef4 : {
                        'default': _0x48cef4
                    };
                };
                Object['defineProperty'](_0x91ed08, '__esModule', {
                    'value': !0x0
                });
                const _0x123446 = _0x38ae2a(_0x50fab0(0x15abc)),
                    _0x18da2e = _0x38ae2a(_0x50fab0(0x9bda)),
                    _0x51a01c = _0x38ae2a(_0x50fab0(0x2248)),
                    _0x2b59c9 = _0x38ae2a(_0x50fab0(0x1fd7)),
                    _0x1456dc = _0x38ae2a(_0x50fab0(0x42e7)),
                    _0x39d3e7 = _0x38ae2a(_0x50fab0(0x5f07)),
                    _0x2724ed = _0x38ae2a(_0x50fab0(0x1166a)),
                    _0x20f5b8 = _0x38ae2a(_0x50fab0(0xd1a1));
                class _0x79536a extends _0x2724ed['default'] {
                    constructor(_0x5eec35, _0x12690f, _0x523f31, _0x480b8a) {
                        const _0x3f9d0c = _0x11ca59;
                        super(_0x5eec35, _0x12690f, _0x523f31, _0x480b8a), this[_0x3f9d0c(0x8a0)] = {
                            'x': 0x15,
                            'y': 0xa
                        }, this['backOffset'] = {
                            'x': 0x4,
                            'y': 0x16
                        }, this['headOffset'] = {
                            'x': -0x1a,
                            'y': -0x15
                        }, this[_0x3f9d0c(0x1369)] = {
                            'x': 0x2c,
                            'y': 0xa
                        }, this[_0x3f9d0c(0xe14)] = {
                            'x': 0x3d,
                            'y': 0x16
                        }, this[_0x3f9d0c(0xf9a)] = {
                            'x': 0x34,
                            'y': -0x15
                        }, this[_0x3f9d0c(0x1a03)] = 0x1, this[_0x3f9d0c(0x1469)] = 0x50, this['spinnnDelay'] = 0x3a98, this[_0x3f9d0c(0x598)] = 0x0, this['SummonDelay'] = 0xbb8, this['_defaultSpeed'] = _0x123446[_0x3f9d0c(0xd2c)][this[_0x3f9d0c(0xe49)]][0x0]['speed'], this['frontArm'] || (this['frontArm'] = this['scene'][_0x3f9d0c(0x18bd)][_0x3f9d0c(0x105b)](_0x12690f, _0x523f31, 'moonspellChars', 'Gash_arm_i01.png')), this['backArm'] || (this['backArm'] = this[_0x3f9d0c(0x6d2)]['add']['sprite'](_0x12690f, _0x523f31, 'moonspellChars', 'Gash_arm_i01.png')), this[_0x3f9d0c(0x949)] || (this[_0x3f9d0c(0x949)] = this[_0x3f9d0c(0x6d2)][_0x3f9d0c(0x18bd)]['sprite'](_0x12690f, _0x523f31, 'moonspellChars', 'Gash_head_i01.png')), this['frontArm'][_0x3f9d0c(0xf8e)](0.85, 0xd / 0x3c), this[_0x3f9d0c(0x1380)][_0x3f9d0c(0xf8e)](0.85, 0xd / 0x3c), this[_0x3f9d0c(0x949)]['setOrigin'](0x0, 0x0);
                        const _0x43c98e = this[_0x3f9d0c(0x183e)]['generateFrameNames']('moonspellChars', {
                                'start': 0x1,
                                'end': 0x5,
                                'zeroPad': 0x2,
                                'prefix': 'Gash_arm_i',
                                'suffix': '.png'
                            }),
                            _0x3d0ee3 = this[_0x3f9d0c(0x183e)]['generateFrameNames']('moonspellChars', {
                                'start': 0x0,
                                'end': 0x1d,
                                'zeroPad': 0x0,
                                'prefix': 'Gash_arm_',
                                'suffix': '.png'
                            });
                        this[_0x3f9d0c(0x1318)]['anims']['create']({
                            'key': 'idle',
                            'frames': _0x43c98e,
                            'frameRate': 0x18,
                            'repeat': -0x1
                        }), this[_0x3f9d0c(0x1380)][_0x3f9d0c(0x183e)]['create']({
                            'key': 'idle',
                            'frames': _0x43c98e,
                            'frameRate': 0x18,
                            'repeat': -0x1
                        }), this[_0x3f9d0c(0x1318)][_0x3f9d0c(0x183e)]['create']({
                            'key': 'die',
                            'frames': _0x3d0ee3,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        }), this[_0x3f9d0c(0x1380)][_0x3f9d0c(0x183e)][_0x3f9d0c(0x6a8)]({
                            'key': 'die',
                            'frames': _0x3d0ee3,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        });
                        const _0x336dbd = this['anims']['generateFrameNames']('moonspellChars', {
                                'start': 0x1,
                                'end': 0x5,
                                'zeroPad': 0x2,
                                'prefix': 'Gash_head_i',
                                'suffix': '.png'
                            }),
                            _0x3e4ac1 = this[_0x3f9d0c(0x183e)]['generateFrameNames']('moonspellChars', {
                                'start': 0x0,
                                'end': 0x1d,
                                'zeroPad': 0x0,
                                'prefix': 'Gash_head_',
                                'suffix': '.png'
                            });
                        this[_0x3f9d0c(0x949)]['anims'][_0x3f9d0c(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x336dbd,
                            'frameRate': 0x18,
                            'repeat': -0x1
                        }), this[_0x3f9d0c(0x949)]['anims'][_0x3f9d0c(0x6a8)]({
                            'key': 'die',
                            'frames': _0x3e4ac1,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        });
                    } ['OnRecycle']() {
                        const _0x3855af = _0x11ca59;
                        super['OnRecycle'](), this[_0x3855af(0x1a03)] = 0x1, this[_0x3855af(0x187a)] = !0x0, this[_0x3855af(0x657)] = !0x1, this[_0x3855af(0x598)] = 0x0, this[_0x3855af(0x1318)][_0x3855af(0x183f)](!0x0), this['backArm'][_0x3855af(0x183f)](!0x0), this[_0x3855af(0x949)][_0x3855af(0x183f)](!0x0), this[_0x3855af(0x1318)][_0x3855af(0x183e)][_0x3855af(0x902)]('idle'), this['backArm'][_0x3855af(0x183e)]['play']('idle'), this[_0x3855af(0x949)]['anims'][_0x3855af(0x902)]('idle'), this[_0x3855af(0x1318)][_0x3855af(0x8a2)](this['scale']), this[_0x3855af(0x1380)][_0x3855af(0x8a2)](this['scale']), this['head'][_0x3855af(0x8a2)](this[_0x3855af(0x7cb)]), this[_0x3855af(0x1318)][_0x3855af(0x9b5)](0x0), this['backArm'][_0x3855af(0x9b5)](0x0), this[_0x3855af(0x6d2)]['time']['removeEvent'](this[_0x3855af(0xbb2)]), this[_0x3855af(0xbb2)] = this[_0x3855af(0x6d2)]['time'][_0x3855af(0x12b8)]({
                            'callback': this[_0x3855af(0x1406)]['bind'](this),
                            'delay': this['spinnnDelay'],
                            'repeat': -0x1
                        });
                    } ['PlayDeathAnimations']() {
                        const _0x93f45d = _0x11ca59;
                        this[_0x93f45d(0x1318)] && this['frontArm'][_0x93f45d(0x183e)]['play']('die'), this[_0x93f45d(0x1380)] && this['backArm']['anims'][_0x93f45d(0x902)]('die'), this['head'] && this[_0x93f45d(0x949)][_0x93f45d(0x183e)]['play']('die');
                    } ['AndSpinnn']() {
                        const _0x58b7c3 = _0x11ca59;
                        var _0x58ace1, _0x5a7d22, _0x54f340, _0x2b7412;
                        null === (_0x58ace1 = this[_0x58b7c3(0x1122)]) || void 0x0 === _0x58ace1 || _0x58ace1['stop'](), this[_0x58b7c3(0x1122)] = this['scene'][_0x58b7c3(0x18bd)][_0x58b7c3(0x99a)]({
                            'targets': this['backArm'],
                            'angle': -0x167,
                            'duration': 0x1f4,
                            'repeat': 0x13
                        }), null === (_0x5a7d22 = this['ArmsSpinTween2']) || void 0x0 === _0x5a7d22 || _0x5a7d22[_0x58b7c3(0x1a34)](), this[_0x58b7c3(0x1638)] = this[_0x58b7c3(0x6d2)]['add']['tween']({
                            'targets': this[_0x58b7c3(0x1318)],
                            'angle': 0x167,
                            'duration': 0x1f4,
                            'repeat': 0x13
                        }), null === (_0x54f340 = this['SpeedTween']) || void 0x0 === _0x54f340 || _0x54f340[_0x58b7c3(0x1a34)](), this[_0x58b7c3(0x11e0)] = this[_0x58b7c3(0x6d2)]['add'][_0x58b7c3(0x99a)]({
                            'targets': this,
                            'speedMul': 0x7,
                            'duration': 0x7d0
                        }), null === (_0x2b7412 = this[_0x58b7c3(0x479)]) || void 0x0 === _0x2b7412 || _0x2b7412['stop'](), this[_0x58b7c3(0x479)] = this[_0x58b7c3(0x6d2)]['add'][_0x58b7c3(0x99a)]({
                            'targets': this,
                            'speedMul': 0x1,
                            'duration': 0x7d0,
                            'delay': 0x1f40
                        });
                    } ['AndSummon']() {
                        const _0x350004 = _0x11ca59;
                        this[_0x350004(0x1393)]();
                    } ['Die']() {
                        const _0x1f3f0a = _0x11ca59;
                        super[_0x1f3f0a(0x14f3)](), this['PlayDeathAnimations'](), this['MakeTreasureChest']();
                    } ['MakeTreasureChest']() {
                        const _0x20d60d = _0x11ca59;
                        if (this['hasLostTreasure']) return;
                        this['hasLostTreasure'] = !0x0;
                        let _0x5ae406 = [_0x51a01c['default']['EVOLUTION'], _0x51a01c['default']['EXISTING_ANY'], _0x51a01c[_0x20d60d(0xd2c)]['EXISTING_ANY'], _0x51a01c[_0x20d60d(0xd2c)]['EXISTING_ANY'], _0x51a01c[_0x20d60d(0xd2c)]['EXISTING_ANY']],
                            _0x175925 = new _0x1456dc[(_0x20d60d(0xd2c))]([0.1, 0x1, 0x64], _0x5ae406);
                        _0x39d3e7['default']['Core']['Stage'][_0x20d60d(0xab4)](_0x175925), _0x39d3e7[_0x20d60d(0xd2c)][_0x20d60d(0x1043)][_0x20d60d(0x2ce)](this['x'], this['y'], _0x175925);
                    } ['Disappear']() {
                        const _0x5aac69 = _0x11ca59;
                        super[_0x5aac69(0xe00)](), this['PlayDeathAnimations']();
                    } ['DeSpawn']() {
                        const _0x23daf9 = _0x11ca59;
                        var _0x50cb16, _0x158590, _0x3562af, _0x1400ef;
                        this['scene'][_0x23daf9(0x915)][_0x23daf9(0x17fb)](this[_0x23daf9(0xbb2)]), null === (_0x50cb16 = this[_0x23daf9(0x1122)]) || void 0x0 === _0x50cb16 || _0x50cb16['stop'](), null === (_0x158590 = this['ArmsSpinTween2']) || void 0x0 === _0x158590 || _0x158590[_0x23daf9(0x1a34)](), null === (_0x3562af = this[_0x23daf9(0x11e0)]) || void 0x0 === _0x3562af || _0x3562af[_0x23daf9(0x1a34)](), null === (_0x1400ef = this['SpeedTween2']) || void 0x0 === _0x1400ef || _0x1400ef[_0x23daf9(0x1a34)](), this[_0x23daf9(0x1318)]['setVisible'](!0x1), this[_0x23daf9(0x1380)][_0x23daf9(0x183f)](!0x1), this['head'][_0x23daf9(0x183f)](!0x1), super['DeSpawn']();
                    } ['Update'](_0x404916) {
                        const _0x2f78eb = _0x11ca59;
                        this[_0x2f78eb(0x78e)] = Math['min'](this['_defaultSpeed'] * this[_0x2f78eb(0x1a03)], 0x1f4), super['Update'](_0x404916), this[_0x2f78eb(0xd96)] = 0x0;
                        let _0x4b65c4 = this[_0x2f78eb(0x4d4)] ? -0x1 : 0x1,
                            _0x30f745 = this['x'] - 0x1f * this[_0x2f78eb(0x3a8)],
                            _0x239d6f = this['y'] - 0x31 * this[_0x2f78eb(0x1721)];
                        this[_0x2f78eb(0x1318)]['setScale'](this[_0x2f78eb(0x7cb)] * _0x4b65c4, this[_0x2f78eb(0x7cb)]), this['backArm'][_0x2f78eb(0x8a2)](this['scale'] * _0x4b65c4, this['scale']), this[_0x2f78eb(0x949)][_0x2f78eb(0xb8d)](this['flipX']);
                        let _0x5a133e = this['flipX'] ? this[_0x2f78eb(0x1369)]['x'] : this['frontOffset']['x'];
                        this[_0x2f78eb(0x1318)]['x'] = _0x30f745 + _0x5a133e * this[_0x2f78eb(0x3a8)], this[_0x2f78eb(0x1318)]['y'] = _0x239d6f + this['frontOffset']['y'] * this[_0x2f78eb(0x1721)], this[_0x2f78eb(0x1318)][_0x2f78eb(0x16c6)] = this[_0x2f78eb(0x16c6)] + 0x2;
                        let _0x2cc371 = this['flipX'] ? this[_0x2f78eb(0xe14)]['x'] : this[_0x2f78eb(0x722)]['x'];
                        this[_0x2f78eb(0x1380)]['x'] = _0x30f745 + _0x2cc371 * this[_0x2f78eb(0x3a8)], this['backArm']['y'] = _0x239d6f + this[_0x2f78eb(0x722)]['y'] * this[_0x2f78eb(0x1721)], this['backArm'][_0x2f78eb(0x16c6)] = this[_0x2f78eb(0x16c6)] - 0x1;
                        let _0x4d1be5 = this[_0x2f78eb(0x4d4)] ? this[_0x2f78eb(0xf9a)]['x'] : this['headOffset']['x'];
                        this[_0x2f78eb(0x949)]['x'] = _0x30f745 + _0x4d1be5 * this['scaleX'], this[_0x2f78eb(0x949)]['y'] = _0x239d6f + this['headOffset']['y'] * this[_0x2f78eb(0x1721)], this['head']['depth'] = this['depth'] + 0x1, this[_0x2f78eb(0x598)] += _0x404916, this['SummonTime'] >= this[_0x2f78eb(0xb6e)] && (this[_0x2f78eb(0xe55)](), this[_0x2f78eb(0x598)] = 0x0), this[_0x2f78eb(0xb6e)] = 0x1388 + this['hp'] / this['maxHp'] * 0x61a8;
                    } ['SingleWarning'](_0x4fd8b1) {
                        const _0xc04e27 = _0x11ca59;
                        let _0x16a682 = this[_0xc04e27(0x6d2)]['add'][_0xc04e27(0x568)](_0x4fd8b1, this['scene']['renderer'][_0xc04e27(0x140e)], 'UI', 'ExclamationMark.png')['setScrollFactor'](0x0)['setScale'](0x0)['setOrigin'](0.5, 0x1)[_0xc04e27(0xb4a)](0x2328);
                        _0x39d3e7['default']['Sound'][_0xc04e27(0x7f6)](_0x2b59c9['default']['Pizza'], {
                            'volume': 0.9,
                            'detune': 0x1f4 * Math[_0xc04e27(0x9ad)](),
                            'rate': 0x1
                        }, 0x96, 0x2), this[_0xc04e27(0x6d2)][_0xc04e27(0x12a1)][_0xc04e27(0x18bd)]({
                            'targets': _0x16a682,
                            'scale': 0x1,
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x4be5c7 = _0xc04e27;
                                this[_0x4be5c7(0x6d2)]['tweens'][_0x4be5c7(0x18bd)]({
                                    'targets': _0x16a682,
                                    'scale': 0x0,
                                    'duration': 0xc8,
                                    'delay': 0xc8
                                });
                            }
                        });
                    } ['RedWarning']() {
                        const _0x3d8604 = _0x11ca59;
                        let _0x1768c2 = this['scene']['add']['image'](0x0, this[_0x3d8604(0x6d2)][_0x3d8604(0x12f9)][_0x3d8604(0x140e)], 'vfx', 'WhiteLine.png')['setScrollFactor'](0x0)['setScale'](this['scene']['renderer'][_0x3d8604(0x173c)], 0x1)[_0x3d8604(0xf8e)](0x0, 0x1)['setDepth'](0x2328)['setAlpha'](0.25)['setTint'](0xff0000);
                        this[_0x3d8604(0x6d2)][_0x3d8604(0x12a1)][_0x3d8604(0x18bd)]({
                            'targets': _0x1768c2,
                            'alpha': 0.5,
                            'duration': 0xc8,
                            'repeat': 0x3,
                            'yoyo': !0x0,
                            'onComplete': () => {
                                const _0x3dfdaa = _0x3d8604;
                                this[_0x3dfdaa(0x6d2)]['tweens']['add']({
                                    'targets': _0x1768c2,
                                    'alpha': 0x0,
                                    'duration': 0x64
                                });
                            }
                        });
                    } ['DrownerWarning']() {
                        const _0x931c45 = _0x11ca59;
                        this[_0x931c45(0x1673)](), this[_0x931c45(0xfe3)](0.25 * this['scene'][_0x931c45(0x12f9)]['width']), this[_0x931c45(0x6d2)][_0x931c45(0x915)][_0x931c45(0x12b8)]({
                            'delay': 0xc8,
                            'callback': () => {
                                const _0x2f8b5a = _0x931c45;
                                this[_0x2f8b5a(0xfe3)](0.5 * this[_0x2f8b5a(0x6d2)]['renderer'][_0x2f8b5a(0x173c)]);
                            }
                        }), this[_0x931c45(0x6d2)][_0x931c45(0x915)][_0x931c45(0x12b8)]({
                            'delay': 0x190,
                            'callback': () => {
                                const _0x3e55a4 = _0x931c45;
                                this[_0x3e55a4(0xfe3)](0.75 * this[_0x3e55a4(0x6d2)]['renderer'][_0x3e55a4(0x173c)]);
                            }
                        }), this['scene']['time'][_0x931c45(0x12b8)]({
                            'delay': 0x3e8,
                            'callback': () => {
                                const _0x2fb49d = _0x931c45;
                                this['SkeletonPool'] || (this[_0x2fb49d(0x11c8)] = new _0x20f5b8[(_0x2fb49d(0xd2c))](this[_0x2fb49d(0x6d2)], _0x18da2e[_0x2fb49d(0xd2c)]['MS_EVILSPIRIT']));
                                let _0x1931af = this['scene'][_0x2fb49d(0x12f9)][_0x2fb49d(0x173c)] / 0x20,
                                    _0x966e85 = 0x20 * Math[_0x2fb49d(0xe07)](_0x1931af),
                                    _0x53c955 = _0x39d3e7[_0x2fb49d(0xd2c)][_0x2fb49d(0x1043)]['Player']['x'] - 0.5 * this['scene'][_0x2fb49d(0x12f9)][_0x2fb49d(0x173c)],
                                    _0x2fb45f = _0x39d3e7[_0x2fb49d(0xd2c)][_0x2fb49d(0x1043)]['Player']['y'] + 0x30 + 0.5 * this[_0x2fb49d(0x6d2)]['renderer']['height'];
                                for (let _0x56d3c2 = 0x0; _0x56d3c2 < this[_0x2fb49d(0x1469)]; _0x56d3c2++) {
                                    let _0x197735 = _0x1931af * _0x56d3c2,
                                        _0x4d1ced = _0x53c955 + _0x197735 % _0x966e85,
                                        _0x55da4e = _0x2fb45f + 0x30 * Math[_0x2fb49d(0xe07)](_0x197735 / _0x966e85);
                                    this[_0x2fb49d(0x11c8)][_0x2fb49d(0xada)](_0x4d1ced, _0x55da4e);
                                }
                            }
                        });
                    }
                }
                _0x91ed08['default'] = _0x79536a;
            };
