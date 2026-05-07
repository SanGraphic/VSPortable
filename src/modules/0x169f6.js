// Module 0x169f6
// Args: _0x1da544, _0x4dd281, _0x40176f

export default (_0x1da544, _0x4dd281, _0x40176f) => {
                'use strict';
                const _0x16e90c = a0_0x6932;
                var _0xc966e3 = this && this['__importDefault'] || function(_0x35e542) {
                    const _0x2ea754 = _0x16e90c;
                    return _0x35e542 && _0x35e542[_0x2ea754(0x16f1)] ? _0x35e542 : {
                        'default': _0x35e542
                    };
                };
                Object['defineProperty'](_0x4dd281, '__esModule', {
                    'value': !0x0
                }), _0x4dd281['Prop_FoscariSeal2'] = void 0x0;
                const _0x4a0eeb = _0xc966e3(_0x40176f(0xa05)),
                    _0x502a04 = _0xc966e3(_0x40176f(0x148f5)),
                    _0x54e715 = _0xc966e3(_0x40176f(0xdfbc)),
                    _0x30766d = _0xc966e3(_0x40176f(0x1fd7)),
                    _0x5b8ebf = _0xc966e3(_0x40176f(0x54e3)),
                    _0x1b469c = _0xc966e3(_0x40176f(0x5f07)),
                    _0x3145f8 = _0xc966e3(_0x40176f(0x13fb9)),
                    _0x43ff5e = _0xc966e3(_0x40176f(0x3988));
                class _0x5ab2fe extends _0x3145f8['default'] {
                    constructor(_0xbd3055, _0x207de7, _0x18f3d3, _0x46a4e1) {
                        const _0xa2111 = _0x16e90c;
                        super(_0xbd3055, _0x207de7, _0x18f3d3, _0x46a4e1), this[_0xa2111(0x1ac7)] = !0x1, this[_0xa2111(0xf27)] = null;
                        var _0x499841 = _0x4a0eeb[_0xa2111(0xd2c)][this['destructibleType']];
                        const _0x405a19 = this['anims']['generateFrameNames'](_0x499841['textureName'], {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x0,
                            'prefix': _0x499841['frameName'],
                            'suffix': '.png'
                        });
                        this['anims'][_0xa2111(0x393)]('idle'), this['anims'][_0xa2111(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x405a19,
                            'frameRate': 0x4,
                            'repeat': -0x1
                        });
                        const _0x4d75cd = this['anims'][_0xa2111(0x1756)](_0x499841[_0xa2111(0xacb)], {
                            'start': 0x0,
                            'end': 0x13,
                            'zeroPad': 0x0,
                            'prefix': _0x499841['frameName'] + 'd_',
                            'suffix': '.png'
                        });
                        this[_0xa2111(0x183e)]['create']({
                            'key': 'destroy',
                            'frames': _0x4d75cd,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        }), this[_0xa2111(0xf8e)](0.5), this[_0xa2111(0x1ac7)] = !0x1;
                    } ['OnRecycle']() {
                        const _0x1936a2 = _0x16e90c;
                        var _0x3ec6dd;
                        super[_0x1936a2(0x5ce)](), this[_0x1936a2(0xcf9)][_0x1936a2(0xdf6)](0x26, 0x0, 0x20), this[_0x1936a2(0x16c6)] = _0x1b469c[_0x1936a2(0xd2c)][_0x1936a2(0x1043)][_0x1936a2(0x6d2)]['renderer']['height'], null === (_0x3ec6dd = this[_0x1936a2(0x781)]) || void 0x0 === _0x3ec6dd || _0x3ec6dd[_0x1936a2(0x1a34)](), this[_0x1936a2(0x781)] = this['scene'][_0x1936a2(0x12a1)]['add']({
                            'targets': this,
                            'y': this['y'] - 0x8,
                            'duration': 0x3e8,
                            'ease': 'Sine.easeInOut',
                            'loop': -0x1,
                            'yoyo': !0x0
                        }), _0x1b469c['default'][_0x1936a2(0x1043)][_0x1936a2(0x14d8)]['SelectedCharacter'] === _0x54e715['default']['VICTOR'] && (this['MapToken'] || (this[_0x1936a2(0x3be)] = new _0x43ff5e[(_0x1936a2(0xd2c))](), _0x1b469c[_0x1936a2(0xd2c)][_0x1936a2(0x1043)][_0x1936a2(0xc85)][_0x1936a2(0x1564)](this['MapToken'])), this[_0x1936a2(0x3be)]['x'] = this['x'], this['MapToken']['y'] = this['y']);
                    } ['GetDamaged'](_0x3e3d9e, _0x4772be, _0x51481e, _0xbe5b15) {
                        const _0x522161 = _0x16e90c;
                        if (!this[_0x522161(0xdae)] && _0x1b469c['default'][_0x522161(0x1043)][_0x522161(0x14d8)][_0x522161(0x1188)] == _0x54e715[_0x522161(0xd2c)]['VICTOR'] && _0xbe5b15 == _0x5b8ebf['default'][_0x522161(0xd4c)]) {
                            if (!(Math[_0x522161(0x19db)](this['x'] - _0x1b469c['default']['Core']['Player']['x']) < 0.45 * this[_0x522161(0x6d2)][_0x522161(0x12f9)][_0x522161(0x173c)] && Math[_0x522161(0x19db)](this['y'] - _0x1b469c[_0x522161(0xd2c)]['Core']['Player']['y']) < 0.45 * this['scene'][_0x522161(0x12f9)][_0x522161(0x140e)])) return;
                            this['hp'] -= _0x3e3d9e, this['hp'] <= 0x0 ? (this['isDead'] = !0x0, this['OnDestroyed']()) : this[_0x522161(0x404)]();
                        }
                    } ['DeSpawn']() {
                        this['setTint'](0xffffff);
                    } ['OnDestroyed']() {
                        const _0x5baefe = _0x16e90c;
                        if (this[_0x5baefe(0x1ac7)]) return;
                        _0x4a0eeb[_0x5baefe(0xd2c)][this['destructibleType']][_0x5baefe(0x541)] += 0x1, this[_0x5baefe(0x1ac7)] = !0x0, this[_0x5baefe(0x183f)](!0x0), this[_0x5baefe(0xf84)]();
                        for (let _0x55225f = 0x0; _0x55225f < _0x1b469c['default'][_0x5baefe(0x1043)]['Enemies']['length']; _0x55225f++) _0x1b469c[_0x5baefe(0xd2c)]['Core'][_0x5baefe(0x1a91)][_0x55225f][_0x5baefe(0xe00)]();
                        _0x1b469c[_0x5baefe(0xd2c)][_0x5baefe(0x1267)][_0x5baefe(0x1099)](_0x1b469c['default']['Core']['CurrentBGM'], 0x0, 0x5dc), this[_0x5baefe(0x6d2)][_0x5baefe(0x1793)][_0x5baefe(0x4cd)][_0x5baefe(0x52c)](), _0x1b469c['default']['Core']['canInterrupt'] = !0x1, _0x1b469c[_0x5baefe(0xd2c)][_0x5baefe(0x1043)][_0x5baefe(0x106c)] = !0x1, _0x1b469c['default']['Core']['PlayerUI']['ToggleHealthBar'](!0x1), _0x1b469c['default'][_0x5baefe(0x1043)]['scene']['time'][_0x5baefe(0x17fb)](_0x1b469c[_0x5baefe(0xd2c)][_0x5baefe(0x1043)][_0x5baefe(0x55c)]), _0x1b469c['default'][_0x5baefe(0x1043)]['scene']['time'][_0x5baefe(0x17fb)](_0x1b469c[_0x5baefe(0xd2c)]['Core'][_0x5baefe(0x17c7)]['SpawnTimer']), _0x1b469c[_0x5baefe(0xd2c)]['Core']['Player']['SetInvulForMilliSeconds'](0x7530), _0x1b469c[_0x5baefe(0xd2c)][_0x5baefe(0x1043)][_0x5baefe(0x10f6)][_0x5baefe(0xc83)](), this[_0x5baefe(0x6d2)][_0x5baefe(0x915)][_0x5baefe(0x12b8)]({
                            'delay': 0x64,
                            'callback': () => {
                                const _0x67427b = _0x5baefe;
                                _0x1b469c[_0x67427b(0xd2c)][_0x67427b(0x1043)][_0x67427b(0x10f6)]['restoreTint']();
                            }
                        }), this['scene']['tweens'][_0x5baefe(0x18bd)]({
                            'targets': this[_0x5baefe(0x6d2)][_0x5baefe(0x1793)][_0x5baefe(0x4cd)],
                            'scrollX': this[_0x5baefe(0x6d2)][_0x5baefe(0x1793)][_0x5baefe(0x4cd)][_0x5baefe(0x956)] - (_0x1b469c[_0x5baefe(0xd2c)]['Core'][_0x5baefe(0x10f6)]['x'] - this['x']),
                            'scrollY': this[_0x5baefe(0x6d2)][_0x5baefe(0x1793)][_0x5baefe(0x4cd)]['scrollY'] - (_0x1b469c[_0x5baefe(0xd2c)][_0x5baefe(0x1043)][_0x5baefe(0x10f6)]['y'] - this['y']),
                            'duration': 0x7d0,
                            'onComplete': () => {
                                const _0x19eb1a = _0x5baefe;
                                _0x1b469c[_0x19eb1a(0xd2c)][_0x19eb1a(0x1267)][_0x19eb1a(0x7f6)](_0x30766d['default'][_0x19eb1a(0x15f)], {
                                    'volume': 0.5,
                                    'detune': -0x258 * Math[_0x19eb1a(0x9ad)]()
                                }), _0x1b469c[_0x19eb1a(0xd2c)]['Core'][_0x19eb1a(0x69e)]['FrameFreeze'](), this['ScreenShake'](), this['anims'][_0x19eb1a(0x1a34)](), this['setScale'](0x2), this[_0x19eb1a(0x183e)][_0x19eb1a(0x902)]('destroy'), this['scene'][_0x19eb1a(0x1793)][_0x19eb1a(0x4cd)][_0x19eb1a(0x1168)](this, !0x1, 0.1, 0.1);
                            }
                        }), this['scene']['time'][_0x5baefe(0x12b8)]({
                            'delay': 0x1388,
                            'callback': () => {
                                const _0x1eca92 = _0x5baefe;
                                _0x1b469c[_0x1eca92(0xd2c)]['Sound'][_0x1eca92(0x12e1)](_0x502a04['default'][_0x1eca92(0x197f)], {
                                    'volume': 1.5,
                                    'rate': 0.25
                                }), this['ScreenShake'](312.5);
                            }
                        }), this['scene'][_0x5baefe(0x915)]['addEvent']({
                            'delay': 0x1b58,
                            'callback': () => {
                                const _0x3ca6a2 = _0x5baefe;
                                this[_0x3ca6a2(0x6d2)][_0x3ca6a2(0x12a1)][_0x3ca6a2(0x18bd)]({
                                    'targets': this['scene'][_0x3ca6a2(0x1793)]['main'],
                                    'scrollX': this[_0x3ca6a2(0x6d2)][_0x3ca6a2(0x1793)][_0x3ca6a2(0x4cd)]['scrollX'] - (this['x'] - _0x1b469c['default']['Core']['Player']['x']),
                                    'scrollY': this['scene'][_0x3ca6a2(0x1793)]['main']['scrollY'] - (this['y'] - _0x1b469c[_0x3ca6a2(0xd2c)][_0x3ca6a2(0x1043)][_0x3ca6a2(0x10f6)]['y']),
                                    'duration': 0x1f4,
                                    'onComplete': () => {
                                        const _0x53f4bc = _0x3ca6a2;
                                        this['scene'][_0x53f4bc(0x1793)][_0x53f4bc(0x4cd)]['startFollow'](_0x1b469c['default']['Core'][_0x53f4bc(0x10f6)]);
                                    }
                                });
                            }
                        }), this[_0x5baefe(0x6d2)][_0x5baefe(0x915)]['addEvent']({
                            'delay': 0x2710,
                            'callback': () => {
                                const _0x1ac0d6 = _0x5baefe;
                                this[_0x1ac0d6(0xf27)] && this[_0x1ac0d6(0xf27)](), _0x1b469c[_0x1ac0d6(0xd2c)]['Core']['canInterrupt'] = !0x0, _0x1b469c['default'][_0x1ac0d6(0x1043)]['canPause'] = !0x0, _0x1b469c['default'][_0x1ac0d6(0x1043)][_0x1ac0d6(0x141a)][_0x1ac0d6(0x12ff)](!0x0), _0x1b469c[_0x1ac0d6(0xd2c)][_0x1ac0d6(0x1043)][_0x1ac0d6(0xd83)](), _0x1b469c['default'][_0x1ac0d6(0x1043)]['Stage'][_0x1ac0d6(0x25e)]();
                            }
                        });
                        let _0x6a234e = _0x1b469c['default'][_0x5baefe(0x1043)]['MapTokens']['indexOf'](this[_0x5baefe(0x3be)]); - 0x1 != _0x6a234e && _0x1b469c['default']['Core'][_0x5baefe(0xc85)][_0x5baefe(0x16ea)](_0x6a234e, 0x1);
                    } ['SaveProgress']() {
                        const _0x4ff11a = _0x16e90c;
                        _0x1b469c['default'][_0x4ff11a(0x1043)]['PlayerOptions'][_0x4ff11a(0x3ab)](), _0x1b469c['default']['Core']['PlayerOptions']['SaveRunBackup']();
                    } ['ScreenShake'](_0x1a3756 = 0x6) {
                        const _0xb7ece = _0x16e90c;
                        this[_0xb7ece(0x6d2)][_0xb7ece(0x12a1)][_0xb7ece(0x18bd)]({
                            'targets': this['scene'][_0xb7ece(0x1793)][_0xb7ece(0x4cd)]['followOffset'],
                            'x': 0x2,
                            'duration': 0x10,
                            'yoyo': !0x0,
                            'repeat': _0x1a3756,
                            'onStart': () => {
                                const _0x2316db = _0xb7ece;
                                this['scene'][_0x2316db(0x1793)][_0x2316db(0x4cd)][_0x2316db(0x86c)]['x'] = -0x2;
                            },
                            'onComplete': () => {
                                const _0x1af00b = _0xb7ece;
                                this[_0x1af00b(0x6d2)]['cameras'][_0x1af00b(0x4cd)][_0x1af00b(0x188c)](0x0, 0x0);
                            }
                        });
                    }
                }
                _0x4dd281['Prop_FoscariSeal2'] = _0x5ab2fe, _0x4dd281['default'] = _0x5ab2fe;
            };
