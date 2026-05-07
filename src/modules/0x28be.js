// Module 0x28be
// Args: _0x2e38f5, _0x1f6fb7, _0x17e2a1

export default (_0x2e38f5, _0x1f6fb7, _0x17e2a1) => {
                'use strict';
                const _0x44bc6a = a0_0x6932;
                var _0x499473 = this && this['__importDefault'] || function(_0x288e01) {
                    const _0x29b5cb = a0_0x6932;
                    return _0x288e01 && _0x288e01['__esModule'] ? _0x288e01 : {
                        'default': _0x288e01
                    };
                };
                Object['defineProperty'](_0x1f6fb7, '__esModule', {
                    'value': !0x0
                }), _0x1f6fb7['Prop_FoscariSeal1'] = void 0x0;
                const _0x27cc05 = _0x499473(_0x17e2a1(0xa05)),
                    _0x109292 = _0x499473(_0x17e2a1(0x14639)),
                    _0x3ab8ed = _0x499473(_0x17e2a1(0xe648)),
                    _0x5f5213 = _0x499473(_0x17e2a1(0x148f5)),
                    _0x1f2b57 = _0x499473(_0x17e2a1(0xdfbc)),
                    _0x37dc8d = _0x499473(_0x17e2a1(0x1fd7)),
                    _0x17e133 = _0x499473(_0x17e2a1(0x3fe3)),
                    _0x2e8872 = _0x499473(_0x17e2a1(0x54e3)),
                    _0x2a0a41 = _0x499473(_0x17e2a1(0xc450)),
                    _0xacc1a9 = _0x499473(_0x17e2a1(0x5f07)),
                    _0x483b47 = _0x17e2a1(0x12a38),
                    _0x174836 = _0x499473(_0x17e2a1(0x13fb9)),
                    _0x39a5e4 = _0x499473(_0x17e2a1(0x3988));
                class _0x3e8e00 extends _0x174836['default'] {
                    constructor(_0x37f6ea, _0x17075d, _0x24cd60, _0x2a8a4c) {
                        const _0x57f4ba = _0x44bc6a;
                        super(_0x37f6ea, _0x17075d, _0x24cd60, _0x2a8a4c), this[_0x57f4ba(0x1ac7)] = !0x1;
                        var _0x2dc307 = _0x27cc05[_0x57f4ba(0xd2c)][this['destructibleType']];
                        const _0x3615d1 = this['anims'][_0x57f4ba(0x1756)](_0x2dc307['textureName'], {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x0,
                            'prefix': _0x2dc307[_0x57f4ba(0x8e3)],
                            'suffix': '.png'
                        });
                        this['anims']['remove']('idle'), this[_0x57f4ba(0x183e)]['create']({
                            'key': 'idle',
                            'frames': _0x3615d1,
                            'frameRate': 0x4,
                            'repeat': -0x1
                        });
                        const _0x308be5 = this['anims'][_0x57f4ba(0x1756)](_0x2dc307['textureName'], {
                            'start': 0x0,
                            'end': 0x13,
                            'zeroPad': 0x0,
                            'prefix': _0x2dc307['frameName'] + 'd_',
                            'suffix': '.png'
                        });
                        this[_0x57f4ba(0x183e)]['create']({
                            'key': 'destroy',
                            'frames': _0x308be5,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        }), this[_0x57f4ba(0xf8e)](0.5), this[_0x57f4ba(0x1ac7)] = !0x1;
                        let _0x4888ee = this[_0x57f4ba(0x6d2)]['renderer'][_0x57f4ba(0x140e)],
                            _0x1b5309 = this['scene']['renderer'][_0x57f4ba(0x173c)];
                        this['sDarkness'] = this['scene']['add']['sprite'](0x0, 0x0, 'vfx', 'blackDot.png')[_0x57f4ba(0xf8e)](0x0)[_0x57f4ba(0xd87)](0x0)['setScale'](_0x1b5309, _0x4888ee)['setAlpha'](0x0)[_0x57f4ba(0xb4a)](0x1771), this[_0x57f4ba(0x1614)] = this[_0x57f4ba(0x6d2)]['add'][_0x57f4ba(0x105b)](0x0, 0x0, 'vfx', 'fog.png')['setOrigin'](0x0)[_0x57f4ba(0xd87)](0x0)['setScale'](_0x1b5309 / 0xa0, _0x4888ee / 0x64)['setAlpha'](0x0)['setDepth'](0xbb9);
                    } ['OnRecycle']() {
                        const _0x1ed988 = _0x44bc6a;
                        var _0x125b77;
                        super[_0x1ed988(0x5ce)](), this[_0x1ed988(0xcf9)]['setCircle'](0x26, 0x0, 0x20), this[_0x1ed988(0x16c6)] = _0xacc1a9[_0x1ed988(0xd2c)]['Core'][_0x1ed988(0x6d2)][_0x1ed988(0x12f9)][_0x1ed988(0x140e)], null === (_0x125b77 = this[_0x1ed988(0x781)]) || void 0x0 === _0x125b77 || _0x125b77['stop'](), this['floatTween'] = this[_0x1ed988(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'y': this['y'] - 0x8,
                            'duration': 0x3e8,
                            'ease': 'Sine.easeInOut',
                            'loop': -0x1,
                            'yoyo': !0x0
                        }), _0xacc1a9['default'][_0x1ed988(0x1043)][_0x1ed988(0x14d8)][_0x1ed988(0x1188)] === _0x1f2b57['default'][_0x1ed988(0xe80)] && (this['MapToken'] || (this['MapToken'] = new _0x39a5e4[(_0x1ed988(0xd2c))](), _0xacc1a9['default'][_0x1ed988(0x1043)][_0x1ed988(0xc85)]['push'](this[_0x1ed988(0x3be)])), this[_0x1ed988(0x3be)]['x'] = this['x'], this[_0x1ed988(0x3be)]['y'] = this['y']);
                    } ['GetDamaged'](_0x2ffbca, _0x1335a0, _0x298b58, _0x364d29) {
                        const _0x2e131c = _0x44bc6a;
                        if (!this['isDead'] && _0xacc1a9[_0x2e131c(0xd2c)]['Core'][_0x2e131c(0x14d8)]['SelectedCharacter'] == _0x1f2b57[_0x2e131c(0xd2c)][_0x2e131c(0xe80)] && _0x364d29 == _0x2e8872['default']['FLASHARROW2']) {
                            if (!(Math['abs'](this['x'] - _0xacc1a9[_0x2e131c(0xd2c)]['Core'][_0x2e131c(0x10f6)]['x']) < 0.45 * this['scene']['renderer'][_0x2e131c(0x173c)] && Math[_0x2e131c(0x19db)](this['y'] - _0xacc1a9[_0x2e131c(0xd2c)][_0x2e131c(0x1043)]['Player']['y']) < 0.45 * this[_0x2e131c(0x6d2)][_0x2e131c(0x12f9)][_0x2e131c(0x140e)])) return;
                            this['hp'] -= _0x2ffbca, this['hp'] <= 0x0 ? (this[_0x2e131c(0xdae)] = !0x0, this['OnDestroyed']()) : this[_0x2e131c(0x404)]();
                        }
                    } ['DeSpawn']() {
                        const _0x12b2c6 = _0x44bc6a;
                        this[_0x12b2c6(0xb34)](0xffffff);
                    } ['OnDestroyed']() {
                        const _0x4195b8 = _0x44bc6a;
                        if (!this[_0x4195b8(0x1ac7)]) {
                            for (_0x27cc05['default'][this[_0x4195b8(0x1083)]][_0x4195b8(0x541)] += 0x1, this['alreadyDestroyed'] = !0x0, this['setVisible'](!0x0), this[_0x4195b8(0xf84)](), _0xacc1a9[_0x4195b8(0xd2c)][_0x4195b8(0x1043)][_0x4195b8(0x378)] = !0x1, _0xacc1a9['default'][_0x4195b8(0x1043)][_0x4195b8(0x106c)] = !0x1, this['playerWeapons'] = [], _0xacc1a9[_0x4195b8(0xd2c)]['Core'][_0x4195b8(0x2ee)] = []; _0xacc1a9[_0x4195b8(0xd2c)][_0x4195b8(0x1043)][_0x4195b8(0x506)][_0x4195b8(0xed9)] > 0x0;) {
                                let _0x1ee02f = _0xacc1a9[_0x4195b8(0xd2c)][_0x4195b8(0x1043)][_0x4195b8(0x506)][_0x4195b8(0xcfe)]();
                                _0x1ee02f['CleanUp'](), this['playerWeapons'][_0x4195b8(0x1564)](_0x1ee02f), _0xacc1a9['default'][_0x4195b8(0x1043)]['FoscariEventWeapons'][_0x4195b8(0x1564)](_0x1ee02f[_0x4195b8(0x14e)]);
                            }
                            for (; _0xacc1a9['default'][_0x4195b8(0x1043)][_0x4195b8(0x164d)]['length'] > 0x0;) {
                                let _0xa850f6 = _0xacc1a9['default'][_0x4195b8(0x1043)][_0x4195b8(0x164d)]['pop']();
                                _0xa850f6[_0x4195b8(0xdb0)](), this['playerWeapons'][_0x4195b8(0x1564)](_0xa850f6);
                            }
                            _0xacc1a9[_0x4195b8(0xd2c)]['Core'][_0x4195b8(0x6d2)][_0x4195b8(0x915)][_0x4195b8(0x17fb)](_0xacc1a9[_0x4195b8(0xd2c)][_0x4195b8(0x1043)][_0x4195b8(0x55c)]), _0xacc1a9[_0x4195b8(0xd2c)][_0x4195b8(0x1043)]['scene'][_0x4195b8(0x915)]['removeEvent'](_0xacc1a9['default']['Core'][_0x4195b8(0x17c7)][_0x4195b8(0x11ff)]);
                            for (let _0x3e8049 = 0x0; _0x3e8049 < _0xacc1a9[_0x4195b8(0xd2c)]['Core'][_0x4195b8(0x1a91)][_0x4195b8(0xed9)]; _0x3e8049++) _0xacc1a9['default'][_0x4195b8(0x1043)][_0x4195b8(0x1a91)][_0x3e8049][_0x4195b8(0xe00)]();
                            _0xacc1a9[_0x4195b8(0xd2c)][_0x4195b8(0x1043)]['PlayerUI'][_0x4195b8(0x12ff)](!0x1), _0xacc1a9[_0x4195b8(0xd2c)][_0x4195b8(0x1267)][_0x4195b8(0x1099)](_0xacc1a9[_0x4195b8(0xd2c)][_0x4195b8(0x1043)][_0x4195b8(0x1239)], 0x0, 0x5dc), _0xacc1a9[_0x4195b8(0xd2c)][_0x4195b8(0x1043)][_0x4195b8(0x64c)](this['x'], this['y']), _0xacc1a9[_0x4195b8(0xd2c)][_0x4195b8(0x1043)]['Player']['SetInvulForMilliSeconds'](0x7530), _0xacc1a9['default'][_0x4195b8(0x1043)][_0x4195b8(0x10f6)]['restoreTint'](), this['scene'][_0x4195b8(0x915)][_0x4195b8(0x12b8)]({
                                'delay': 0x64,
                                'callback': () => {
                                    const _0x1fde2f = _0x4195b8;
                                    _0xacc1a9[_0x1fde2f(0xd2c)][_0x1fde2f(0x1043)][_0x1fde2f(0x10f6)][_0x1fde2f(0xc83)]();
                                }
                            }), this[_0x4195b8(0x6d2)]['tweens'][_0x4195b8(0x18bd)]({
                                'targets': this[_0x4195b8(0x6d2)][_0x4195b8(0x1793)][_0x4195b8(0x4cd)],
                                'scrollX': this[_0x4195b8(0x6d2)][_0x4195b8(0x1793)][_0x4195b8(0x4cd)][_0x4195b8(0x956)] - (_0xacc1a9[_0x4195b8(0xd2c)][_0x4195b8(0x1043)]['Player']['x'] - this['x']),
                                'scrollY': this[_0x4195b8(0x6d2)][_0x4195b8(0x1793)][_0x4195b8(0x4cd)]['scrollY'] - (_0xacc1a9['default'][_0x4195b8(0x1043)]['Player']['y'] - this['y']),
                                'duration': 0x7d0,
                                'onComplete': () => {
                                    const _0x127fb1 = _0x4195b8;
                                    _0xacc1a9['default'][_0x127fb1(0x1267)][_0x127fb1(0x7f6)](_0x37dc8d[_0x127fb1(0xd2c)][_0x127fb1(0x15f)], {
                                        'volume': 0.5,
                                        'detune': -0x258 * Math[_0x127fb1(0x9ad)]()
                                    }), _0xacc1a9['default'][_0x127fb1(0x1043)][_0x127fb1(0x69e)][_0x127fb1(0x35f)](), this[_0x127fb1(0x94d)](), this['anims']['stop'](), this[_0x127fb1(0x8a2)](0x2), this[_0x127fb1(0x183e)]['play']('destroy'), this[_0x127fb1(0x6d2)][_0x127fb1(0x1793)]['main']['startFollow'](this, !0x1, 0.1, 0.1);
                                }
                            }), this[_0x4195b8(0x6d2)][_0x4195b8(0x915)][_0x4195b8(0x12b8)]({
                                'delay': 0x1388,
                                'callback': () => {
                                    this['ShakeEarth']();
                                }
                            }), this[_0x4195b8(0x6d2)][_0x4195b8(0x915)][_0x4195b8(0x12b8)]({
                                'delay': 0x1770,
                                'callback': () => {
                                    const _0x50d80d = _0x4195b8;
                                    this[_0x50d80d(0x15e6)]();
                                }
                            }), this['scene']['time'][_0x4195b8(0x12b8)]({
                                'delay': 0x3a98,
                                'callback': () => {
                                    this['ChangeStage']();
                                }
                            });
                        }
                    } ['SaveProgress']() {
                        const _0x15598d = _0x44bc6a;
                        let _0x20789b = _0x17e133[_0x15598d(0xd2c)]['FOSCARI2']; - 0x1 == _0xacc1a9['default']['Core']['PlayerOptions']['UnlockedStages'][_0x15598d(0x1303)](_0x20789b) && _0xacc1a9[_0x15598d(0xd2c)][_0x15598d(0x1043)][_0x15598d(0x14d8)][_0x15598d(0x2d3)][_0x15598d(0x1564)](_0x20789b), _0x109292[_0x15598d(0xd2c)][_0x20789b][0x0]['unlocked'] = !0x0, _0x109292[_0x15598d(0xd2c)][_0x20789b][0x0]['hidden'] = !0x1, _0x2a0a41[_0x15598d(0xd2c)][_0x15598d(0x107d)]();
                        const _0x319a25 = _0x2a0a41[_0x15598d(0xd2c)][_0x15598d(0x651)]();
                        _0xacc1a9[_0x15598d(0xd2c)][_0x15598d(0x1043)][_0x15598d(0x14d8)]['Save'](), _0xacc1a9[_0x15598d(0xd2c)][_0x15598d(0x1043)]['PlayerOptions'][_0x15598d(0xf8f)](), _0x483b47[_0x15598d(0x116e)][_0x15598d(0xf18)](_0x319a25);
                    } ['ShakeEarth']() {
                        const _0x3634c5 = _0x44bc6a;
                        this[_0x3634c5(0x94d)](0x271);
                    } ['RemoveWater']() {
                        const _0x3c8aa8 = _0x44bc6a;
                        _0xacc1a9['default']['Sound'][_0x3c8aa8(0x12e1)](_0x5f5213[_0x3c8aa8(0xd2c)]['TheEndIndeed'], {
                            'volume': 1.5,
                            'rate': 0.25
                        }), this[_0x3c8aa8(0x14cd)] && this[_0x3c8aa8(0x6d2)]['tweens'][_0x3c8aa8(0x18bd)]({
                            'targets': this[_0x3c8aa8(0x14cd)],
                            'alpha': 0x0,
                            'scale': 0x8,
                            'duration': 0xfa0
                        });
                    } ['ChangeStage']() {
                        const _0x1e90c8 = _0x44bc6a;
                        _0xacc1a9[_0x1e90c8(0xd2c)]['Sound'][_0x1e90c8(0x7f6)](_0x37dc8d['default'][_0x1e90c8(0x77c)], {
                            'volume': 0.5
                        }), this[_0x1e90c8(0x1614)]['setVisible'](!0x0), this[_0x1e90c8(0x647)]['setVisible'](!0x0), this['scene'][_0x1e90c8(0x12a1)][_0x1e90c8(0x18bd)]({
                            'targets': [this['sFog'], this['sDarkness']],
                            'alpha': 0x1,
                            'duration': 0x1f4
                        }), this['scene'][_0x1e90c8(0x1793)]['main'][_0x1e90c8(0x52c)](), this['scene']['tweens'][_0x1e90c8(0x18bd)]({
                            'targets': this[_0x1e90c8(0x6d2)][_0x1e90c8(0x1793)][_0x1e90c8(0x4cd)],
                            'scrollY': this[_0x1e90c8(0x6d2)][_0x1e90c8(0x1793)][_0x1e90c8(0x4cd)][_0x1e90c8(0xfe7)] + 0x400,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0x537c1e = _0x1e90c8;
                                _0xacc1a9[_0x537c1e(0xd2c)][_0x537c1e(0x1043)][_0x537c1e(0x14d8)][_0x537c1e(0x1856)] = _0x17e133['default']['FOSCARI2'], _0xacc1a9['default'][_0x537c1e(0x1043)][_0x537c1e(0x14d8)]['SelectedBGM'] = _0x5f5213['default'][_0x537c1e(0x8ba)], _0xacc1a9[_0x537c1e(0xd2c)]['Core']['PlayerOptions']['SelectedBGMMod'] = _0x3ab8ed[_0x537c1e(0xd2c)][_0x537c1e(0x16cb)];
                                let _0xefb552 = !0x1;
                                _0xacc1a9['default'][_0x537c1e(0x1043)][_0x537c1e(0x141a)][_0x537c1e(0x12ff)](_0xefb552), _0xacc1a9[_0x537c1e(0xd2c)]['Core']['PlayerUI'][_0x537c1e(0xd00)](_0xefb552), _0xacc1a9[_0x537c1e(0xd2c)][_0x537c1e(0x1043)][_0x537c1e(0x1273)]['ToggleAll'](_0xefb552), this[_0x537c1e(0x6d2)]['time']['addEvent']({
                                    'delay': 0x1388,
                                    'callback': () => {
                                        const _0x56eb68 = _0x537c1e;
                                        _0xacc1a9['default'][_0x56eb68(0x1043)][_0x56eb68(0x69e)][_0x56eb68(0x1ae3)]();
                                    }
                                });
                            }
                        });
                    } ['ScreenShake'](_0x2af662 = 0x6) {
                        const _0x1ba83 = _0x44bc6a;
                        this[_0x1ba83(0x6d2)]['tweens'][_0x1ba83(0x18bd)]({
                            'targets': this['scene'][_0x1ba83(0x1793)]['main'][_0x1ba83(0x86c)],
                            'x': 0x2,
                            'duration': 0x10,
                            'yoyo': !0x0,
                            'repeat': _0x2af662,
                            'onStart': () => {
                                const _0x27f6a7 = _0x1ba83;
                                this['scene'][_0x27f6a7(0x1793)][_0x27f6a7(0x4cd)][_0x27f6a7(0x86c)]['x'] = -0x2;
                            },
                            'onComplete': () => {
                                const _0x217d56 = _0x1ba83;
                                this[_0x217d56(0x6d2)]['cameras'][_0x217d56(0x4cd)]['setFollowOffset'](0x0, 0x0);
                            }
                        });
                    }
                }
                _0x1f6fb7['Prop_FoscariSeal1'] = _0x3e8e00, _0x1f6fb7['default'] = _0x3e8e00;
            };
