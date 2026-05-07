// Module 0xdcc
// Args: _0x24332d, _0x8b02f7, _0x4c6a09

export default (_0x24332d, _0x8b02f7, _0x4c6a09) => {
                'use strict';
                const _0x185b67 = a0_0x6932;
                var _0x58b891 = this && this['__importDefault'] || function(_0x4102a1) {
                    return _0x4102a1 && _0x4102a1['__esModule'] ? _0x4102a1 : {
                        'default': _0x4102a1
                    };
                };
                Object['defineProperty'](_0x8b02f7, '__esModule', {
                    'value': !0x0
                }), _0x8b02f7['Prop_FoscariSeal3'] = void 0x0;
                const _0x3d80fa = _0x58b891(_0x4c6a09(0xa05)),
                    _0x213d70 = _0x58b891(_0x4c6a09(0xdfbc)),
                    _0x3bff26 = _0x58b891(_0x4c6a09(0x1fd7)),
                    _0x35e10b = _0x58b891(_0x4c6a09(0x54e3)),
                    _0x2fbaad = _0x58b891(_0x4c6a09(0x5f07)),
                    _0x28e827 = _0x58b891(_0x4c6a09(0x13fb9)),
                    _0x1acc8a = _0x58b891(_0x4c6a09(0x3988));
                class _0x1a1ef5 extends _0x28e827['default'] {
                    constructor(_0xf4ad7d, _0x174461, _0x3d534d, _0x421306) {
                        const _0xadff34 = _0x185b67;
                        super(_0xf4ad7d, _0x174461, _0x3d534d, _0x421306), this['alreadyDestroyed'] = !0x1, this[_0xadff34(0xf27)] = null;
                        var _0x16a84d = _0x3d80fa[_0xadff34(0xd2c)][this['destructibleType']];
                        const _0x2b8dd0 = this[_0xadff34(0x183e)]['generateFrameNames'](_0x16a84d[_0xadff34(0xacb)], {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x0,
                            'prefix': _0x16a84d['frameName'],
                            'suffix': '.png'
                        });
                        this[_0xadff34(0x183e)]['remove']('idle'), this[_0xadff34(0x183e)][_0xadff34(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x2b8dd0,
                            'frameRate': 0x4,
                            'repeat': -0x1
                        });
                        const _0x4ab681 = this['anims']['generateFrameNames'](_0x16a84d['textureName'], {
                            'start': 0x0,
                            'end': 0x13,
                            'zeroPad': 0x0,
                            'prefix': _0x16a84d[_0xadff34(0x8e3)] + 'd_',
                            'suffix': '.png'
                        });
                        this['anims'][_0xadff34(0x6a8)]({
                            'key': 'destroy',
                            'frames': _0x4ab681,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        }), this['setOrigin'](0.5), this[_0xadff34(0x1ac7)] = !0x1;
                    } ['OnRecycle']() {
                        const _0x5e6ae3 = _0x185b67;
                        var _0x34eb67;
                        super['OnRecycle'](), this[_0x5e6ae3(0xcf9)]['setCircle'](0x26, 0x0, 0x20), this[_0x5e6ae3(0x16c6)] = 0x7d0, null === (_0x34eb67 = this['floatTween']) || void 0x0 === _0x34eb67 || _0x34eb67['stop'](), this[_0x5e6ae3(0x781)] = this[_0x5e6ae3(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'y': this['y'] - 0x8,
                            'duration': 0x3e8,
                            'ease': 'Sine.easeInOut',
                            'loop': -0x1,
                            'yoyo': !0x0
                        }), _0x2fbaad[_0x5e6ae3(0xd2c)]['Core'][_0x5e6ae3(0x14d8)][_0x5e6ae3(0x1188)] === _0x213d70['default'][_0x5e6ae3(0x157f)] && (this[_0x5e6ae3(0x3be)] || (this[_0x5e6ae3(0x3be)] = new _0x1acc8a['default'](), _0x2fbaad['default'][_0x5e6ae3(0x1043)]['MapTokens'][_0x5e6ae3(0x1564)](this['MapToken'])), this['MapToken']['x'] = this['x'], this['MapToken']['y'] = this['y']);
                    } ['GetDamaged'](_0x54ae63, _0x2fd632, _0x596268, _0x1bed67) {
                        const _0x38d8b3 = _0x185b67;
                        if (!this[_0x38d8b3(0xdae)] && _0x2fbaad['default'][_0x38d8b3(0x1043)]['PlayerOptions']['SelectedCharacter'] == _0x213d70[_0x38d8b3(0xd2c)][_0x38d8b3(0x157f)] && _0x1bed67 == _0x35e10b[_0x38d8b3(0xd2c)][_0x38d8b3(0x478)]) {
                            if (!(Math['abs'](this['x'] - _0x2fbaad[_0x38d8b3(0xd2c)]['Core']['Player']['x']) < 0.45 * this[_0x38d8b3(0x6d2)][_0x38d8b3(0x12f9)][_0x38d8b3(0x173c)] && Math[_0x38d8b3(0x19db)](this['y'] - _0x2fbaad[_0x38d8b3(0xd2c)][_0x38d8b3(0x1043)]['Player']['y']) < 0.45 * this['scene'][_0x38d8b3(0x12f9)][_0x38d8b3(0x140e)])) return;
                            this['hp'] -= _0x54ae63, this['hp'] <= 0x0 ? (this[_0x38d8b3(0xdae)] = !0x0, this['OnDestroyed']()) : this[_0x38d8b3(0x404)]();
                        }
                    } ['DeSpawn']() {
                        const _0x99834b = _0x185b67;
                        this[_0x99834b(0xb34)](0xffffff);
                    } ['OnDestroyed']() {
                        const _0x5f377b = _0x185b67;
                        if (!this[_0x5f377b(0x1ac7)]) {
                            _0x3d80fa['default'][this[_0x5f377b(0x1083)]][_0x5f377b(0x541)] += 0x1, this['alreadyDestroyed'] = !0x0, this['setVisible'](!0x0), this[_0x5f377b(0xf84)]();
                            for (let _0x28ee0d = 0x0; _0x28ee0d < _0x2fbaad['default'][_0x5f377b(0x1043)][_0x5f377b(0x1a91)][_0x5f377b(0xed9)]; _0x28ee0d++) _0x2fbaad['default'][_0x5f377b(0x1043)][_0x5f377b(0x1a91)][_0x28ee0d][_0x5f377b(0xe00)]();
                            _0x2fbaad['default'][_0x5f377b(0x1267)][_0x5f377b(0x1099)](_0x2fbaad['default']['Core'][_0x5f377b(0x1239)], 0x0, 0x5dc), _0x2fbaad[_0x5f377b(0xd2c)]['Core'][_0x5f377b(0x64c)](this['x'], this['y']), _0x2fbaad['default'][_0x5f377b(0x1043)][_0x5f377b(0x378)] = !0x1, _0x2fbaad['default'][_0x5f377b(0x1043)][_0x5f377b(0x106c)] = !0x1, _0x2fbaad['default']['Core']['PlayerUI']['ToggleHealthBar'](!0x1), _0x2fbaad['default']['Core'][_0x5f377b(0x6d2)]['time'][_0x5f377b(0x17fb)](_0x2fbaad['default'][_0x5f377b(0x1043)]['tickerEvent']), _0x2fbaad['default']['Core'][_0x5f377b(0x6d2)]['time']['removeEvent'](_0x2fbaad['default']['Core']['Stage']['SpawnTimer']), _0x2fbaad[_0x5f377b(0xd2c)]['Core'][_0x5f377b(0x10f6)][_0x5f377b(0xf90)](0x7530), _0x2fbaad[_0x5f377b(0xd2c)][_0x5f377b(0x1043)][_0x5f377b(0x10f6)]['restoreTint'](), this[_0x5f377b(0x6d2)][_0x5f377b(0x915)][_0x5f377b(0x12b8)]({
                                'delay': 0x64,
                                'callback': () => {
                                    const _0x9d23eb = _0x5f377b;
                                    _0x2fbaad[_0x9d23eb(0xd2c)][_0x9d23eb(0x1043)][_0x9d23eb(0x10f6)][_0x9d23eb(0xc83)]();
                                }
                            }), this[_0x5f377b(0x6d2)]['tweens']['add']({
                                'targets': this[_0x5f377b(0x6d2)][_0x5f377b(0x1793)]['main'],
                                'scrollX': this['scene'][_0x5f377b(0x1793)][_0x5f377b(0x4cd)][_0x5f377b(0x956)] - (_0x2fbaad['default'][_0x5f377b(0x1043)]['Player']['x'] - this['x']),
                                'scrollY': this['scene']['cameras'][_0x5f377b(0x4cd)]['scrollY'] - (_0x2fbaad[_0x5f377b(0xd2c)][_0x5f377b(0x1043)][_0x5f377b(0x10f6)]['y'] - this['y']),
                                'duration': 0x7d0,
                                'onComplete': () => {
                                    const _0x596b2b = _0x5f377b;
                                    _0x2fbaad[_0x596b2b(0xd2c)][_0x596b2b(0x1267)]['PlaySound'](_0x3bff26[_0x596b2b(0xd2c)]['Crystal12'], {
                                        'volume': 0.5,
                                        'detune': -0x258 * Math[_0x596b2b(0x9ad)]()
                                    }), _0x2fbaad[_0x596b2b(0xd2c)][_0x596b2b(0x1043)][_0x596b2b(0x69e)][_0x596b2b(0x35f)](), this[_0x596b2b(0x94d)](), this[_0x596b2b(0x183e)][_0x596b2b(0x1a34)](), this['setScale'](0x2), this['anims'][_0x596b2b(0x902)]('destroy'), this[_0x596b2b(0x6d2)][_0x596b2b(0x1793)][_0x596b2b(0x4cd)][_0x596b2b(0x1168)](this, !0x1, 0.1, 0.1);
                                }
                            }), this['scene'][_0x5f377b(0x12a1)][_0x5f377b(0x18bd)]({
                                'targets': _0x2fbaad[_0x5f377b(0xd2c)][_0x5f377b(0x1043)],
                                'SFXVolumeFactor': 0.1,
                                'duration': 0x9c4
                            }), this['scene'][_0x5f377b(0x915)][_0x5f377b(0x12b8)]({
                                'delay': 0x1388,
                                'callback': () => {
                                    const _0x411bcd = _0x5f377b;
                                    this['destroyedCallback'] && this[_0x411bcd(0xf27)]();
                                }
                            });
                        }
                    } ['SaveProgress']() {
                        const _0x277945 = _0x185b67;
                        _0x2fbaad['default'][_0x277945(0x1043)][_0x277945(0x14d8)][_0x277945(0x3ab)](), _0x2fbaad[_0x277945(0xd2c)][_0x277945(0x1043)]['PlayerOptions'][_0x277945(0xf8f)]();
                    } ['ShakeEarth']() {
                        const _0xf6d734 = _0x185b67;
                        this[_0xf6d734(0x94d)](0x271);
                    } ['ScreenShake'](_0x59c17b = 0x6) {
                        const _0x10f954 = _0x185b67;
                        this[_0x10f954(0x6d2)][_0x10f954(0x12a1)]['add']({
                            'targets': this['scene'][_0x10f954(0x1793)][_0x10f954(0x4cd)]['followOffset'],
                            'x': 0x2,
                            'duration': 0x10,
                            'yoyo': !0x0,
                            'repeat': _0x59c17b,
                            'onStart': () => {
                                const _0xf62f2a = _0x10f954;
                                this[_0xf62f2a(0x6d2)][_0xf62f2a(0x1793)][_0xf62f2a(0x4cd)][_0xf62f2a(0x86c)]['x'] = -0x2;
                            },
                            'onComplete': () => {
                                const _0x1941b7 = _0x10f954;
                                this['scene'][_0x1941b7(0x1793)][_0x1941b7(0x4cd)]['setFollowOffset'](0x0, 0x0);
                            }
                        });
                    }
                }
                _0x8b02f7['Prop_FoscariSeal3'] = _0x1a1ef5, _0x8b02f7['default'] = _0x1a1ef5;
            };
