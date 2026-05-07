// Module 0xbd84
// Args: _0xce5a91, _0x3b3c33, _0x3b8796

export default (_0xce5a91, _0x3b3c33, _0x3b8796) => {
                'use strict';
                const _0x3c26ce = a0_0x6932;
                var _0x19af78 = this && this['__importDefault'] || function(_0x33678b) {
                    const _0x475a25 = _0x3c26ce;
                    return _0x33678b && _0x33678b[_0x475a25(0x16f1)] ? _0x33678b : {
                        'default': _0x33678b
                    };
                };
                Object['defineProperty'](_0x3b3c33, '__esModule', {
                    'value': !0x0
                }), _0x3b3c33['B_Gatti'] = void 0x0;
                const _0x10defb = _0x19af78(_0x3b8796(0xa14d)),
                    _0x596994 = _0x19af78(_0x3b8796(0x5f07)),
                    _0x49eeb2 = _0x19af78(_0x3b8796(0x1fd7)),
                    _0x12748e = _0x19af78(_0x3b8796(0xc42e));
                class _0x4a3abf extends _0x10defb['default'] {
                    constructor(_0x3491ae, _0x4c2193, _0x2ac044, _0x16ca9c, _0x479156) {
                        const _0x473c87 = _0x3c26ce;
                        super(_0x3491ae, _0x4c2193, _0x2ac044, 'vfx', 'Cat.png', _0x16ca9c, _0x479156), this[_0x473c87(0x467)] = 0x1, this[_0x473c87(0x125b)] = this[_0x473c87(0x6d2)][_0x473c87(0x18bd)][_0x473c87(0x1791)]('vfx'), this['PfxEmitter'][_0x473c87(0x14c0)]({
                            'frame': ['PfxHoly1.png', 'PfxHoly2.png'],
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'quantity': 0x1,
                            'lifespan': 0x12c,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x1
                        }), this[_0x473c87(0x246)] = this['_speed'], this[_0x473c87(0x1234)] = this[_0x473c87(0x4a1)], this[_0x473c87(0x9dc)] = new Phaser['Math'][(_0x473c87(0x1551))](), this[_0x473c87(0x147c)] = this[_0x473c87(0x6d2)][_0x473c87(0x18bd)][_0x473c87(0x105b)](0x0, 0x0, 'vfx', 'summon.png')[_0x473c87(0x183f)](!0x1), this[_0x473c87(0x13e7)] = !0x1;
                    } ['OnRecycle']() {
                        const _0x4f4412 = _0x3c26ce;
                        var _0x265480, _0x21f550, _0x15eac2;
                        if (super[_0x4f4412(0x5ce)](), !this['isInitialised']) {
                            let _0xcba0cc = Phaser[_0x4f4412(0x24f)][_0x4f4412(0x82a)][_0x4f4412(0x198c)](this['trueWeapon'][_0x4f4412(0x632)]),
                                _0x608fef = this[_0x4f4412(0x183e)][_0x4f4412(0x1756)]('vfx', {
                                    'start': 0x1,
                                    'end': 0x4,
                                    'zeroPad': 0x0,
                                    'prefix': _0xcba0cc,
                                    'suffix': '.png'
                                });
                            this['anims'][_0x4f4412(0x6a8)]({
                                'key': 'idle',
                                'frames': _0x608fef,
                                'frameRate': 0x8,
                                'repeat': -0x1
                            }), this[_0x4f4412(0x183e)]['play']('idle'), this['isInitialised'] = !0x0;
                        }
                        null === (_0x265480 = this[_0x4f4412(0x2e4)]) || void 0x0 === _0x265480 || _0x265480[_0x4f4412(0x1a34)](), null === (_0x21f550 = this[_0x4f4412(0x1e5)]) || void 0x0 === _0x21f550 || _0x21f550['stop'](), null === (_0x15eac2 = this[_0x4f4412(0x636)]) || void 0x0 === _0x15eac2 || _0x15eac2[_0x4f4412(0x1a34)](), this[_0x4f4412(0x35a)] = !0x0, this[_0x4f4412(0x177d)] = !0x1, this[_0x4f4412(0x183e)]['play']({
                            'key': 'idle',
                            'frameRate': 0xc * this['weapon'][_0x4f4412(0x712)]
                        }), this['setScale'](0x1 * this['scaleModifier']), this['body']['setCircle'](0x8), this[_0x4f4412(0x8a2)](this[_0x4f4412(0x4a1)]['PArea'] * this['scaleModifier']), this[_0x4f4412(0xe71)] = 0x1, this[_0x4f4412(0x147c)][_0x4f4412(0x8a2)](0x0)[_0x4f4412(0x183f)](!0x0)[_0x4f4412(0xdab)](0x1), this[_0x4f4412(0x19b0)] = 0xffffff, this['_speed'] = this['defaultSpeed'], this['summonTween'] = this['scene']['tweens']['add']({
                            'targets': this['summon'],
                            'scale': this['weapon']['PArea'],
                            'alpha': 0x0,
                            'duration': 0x3e8
                        }), this[_0x4f4412(0x1e5)] = this['scene']['tweens'][_0x4f4412(0x18bd)]({
                            'targets': this,
                            'scale': this[_0x4f4412(0x4a1)][_0x4f4412(0x5f5)] * this[_0x4f4412(0x467)],
                            'duration': 0x12c,
                            'onStart': () => {
                                const _0x192ba5 = _0x4f4412;
                                this[_0x192ba5(0x3a8)] = 0x0, this[_0x192ba5(0x1721)] = 0x0;
                            }
                        });
                        let _0x1ba460 = 0x2 * Math['PI'] * Math['random']();
                        this['x'] += Math[_0x4f4412(0xd7e)](_0x1ba460) * this[_0x4f4412(0x6d2)][_0x4f4412(0x12f9)][_0x4f4412(0x173c)] * 0.45, this['y'] += Math[_0x4f4412(0xc80)](_0x1ba460) * this[_0x4f4412(0x6d2)][_0x4f4412(0x12f9)]['height'] * 0.45, this[_0x4f4412(0x147c)]['x'] = this['x'], this['summon']['y'] = this['y'] + 0x18, this['save_vel_x'] = 0x1, this['save_vel_y'] = 0x1, this[_0x4f4412(0x19ed)](), this[_0x4f4412(0x6d2)]['time']['removeEvent'](this['chooseTimer']), this[_0x4f4412(0xaad)] = this['scene']['time']['addEvent']({
                            'callback': () => {
                                const _0x27d085 = _0x4f4412;
                                this[_0x27d085(0x16b3)]();
                            },
                            'delay': 0x5dc / this['weapon']['PSpeed'],
                            'repeat': -0x1
                        }), this[_0x4f4412(0x6d2)]['time'][_0x4f4412(0x17fb)](this['expireTimer']), this['expireTimer'] = this[_0x4f4412(0x6d2)][_0x4f4412(0x915)][_0x4f4412(0x12b8)]({
                            'callback': () => {
                                this['onExpireTimer']();
                            },
                            'delay': this['weapon'][_0x4f4412(0x16c3)]
                        }), _0x596994[_0x4f4412(0xd2c)]['Sound'][_0x4f4412(0x7f6)](_0x49eeb2['default'][_0x4f4412(0x9ca)], {
                            'detune': 0x3e8,
                            'volume': 0.2
                        }, 0xc8, 0xc);
                    } ['Bounce'](_0x4e1f7a) {
                        const _0x289f91 = _0x3c26ce;
                        this[_0x289f91(0xcf9)] === _0x4e1f7a && (this[_0x289f91(0x6dc)] *= -0x1, this[_0x289f91(0xc8f)] *= -0x1);
                    } ['onExpireTimer']() {
                        const _0x2c2313 = _0x3c26ce;
                        this['onExpireAlphaTween'] = this[_0x2c2313(0x6d2)][_0x2c2313(0x12a1)][_0x2c2313(0x18bd)]({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x12c,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['OnHasHitWall'](_0x258652) {
                        const _0x19393c = _0x3c26ce;
                        this[_0x19393c(0x6dc)] *= _0x258652[_0x19393c(0x18c9)] || _0x258652[_0x19393c(0x1429)] ? -0x1 : 0x1, this[_0x19393c(0xc8f)] *= _0x258652['faceTop'] || _0x258652[_0x19393c(0x3da)] ? -0x1 : 0x1;
                    } ['TargetPlayer']() {
                        const _0x30547b = _0x3c26ce;
                        let _0x1c86c3 = _0x596994[_0x30547b(0xd2c)][_0x30547b(0x1043)][_0x30547b(0x10f6)],
                            _0x1cfbe2 = new Phaser[(_0x30547b(0x24f))][(_0x30547b(0x1551))](0x0, 0x0);
                        _0x1cfbe2['x'] = _0x1c86c3['x'] - this['x'], _0x1cfbe2['y'] = _0x1c86c3['y'] - this['y'], _0x1cfbe2[_0x30547b(0x183b)](), this[_0x30547b(0x9dc)]['x'] = this[_0x30547b(0xfbb)] * _0x1cfbe2['x'], this[_0x30547b(0x9dc)]['y'] = this['TrueSpeed'] * _0x1cfbe2['y'];
                    } ['ChooseTarget']() {
                        const _0x3688f9 = _0x3c26ce;
                        let _0x1e345b, _0x44f8ed = _0x596994[_0x3688f9(0xd2c)][_0x3688f9(0x1043)]['PickupGroup']['children']['entries'][_0x3688f9(0x9d4)](_0x4cca98 => _0x4cca98['itemType'] === _0x12748e['default']['ROAST'] || _0x4cca98[_0x3688f9(0xeb5)] === _0x12748e[_0x3688f9(0xd2c)][_0x3688f9(0x3cc)]);
                        if (_0x44f8ed[_0x3688f9(0xed9)] <= 0x0) {
                            let _0x5dc4bc = this[_0x3688f9(0x4a1)]['critChancesArray'][this['weapon'][_0x3688f9(0x11c9)]++ % this['weapon'][_0x3688f9(0x433)]['length']];
                            if (_0x5dc4bc < 0.2) return this['TargetPlayer']();
                            _0x5dc4bc < 0.25 ? _0x1e345b = {
                                'x': _0x596994['default'][_0x3688f9(0x1043)][_0x3688f9(0x10f6)]['x'] + 0xc8,
                                'y': _0x596994['default'][_0x3688f9(0x1043)]['Player']['y']
                            } : _0x5dc4bc < 0.5 ? _0x1e345b = {
                                'x': _0x596994['default'][_0x3688f9(0x1043)][_0x3688f9(0x10f6)]['x'] - 0xc8,
                                'y': _0x596994['default'][_0x3688f9(0x1043)][_0x3688f9(0x10f6)]['y']
                            } : _0x5dc4bc < 0.75 ? _0x1e345b = {
                                'x': _0x596994[_0x3688f9(0xd2c)]['Core'][_0x3688f9(0x10f6)]['x'],
                                'y': _0x596994[_0x3688f9(0xd2c)]['Core']['Player']['y'] + 0xc8
                            } : _0x5dc4bc < 0x1 && (_0x1e345b = {
                                'x': _0x596994['default'][_0x3688f9(0x1043)][_0x3688f9(0x10f6)]['x'],
                                'y': _0x596994['default'][_0x3688f9(0x1043)]['Player']['y'] - 0xc8
                            });
                        } else _0x1e345b = this['scene'][_0x3688f9(0x1585)][_0x3688f9(0xfc4)](this, _0x44f8ed);
                        if (!_0x1e345b) return;
                        let _0x471da0 = new Phaser['Math'][(_0x3688f9(0x1551))](0x0, 0x0);
                        _0x471da0['x'] = this['x'] - _0x1e345b['x'], _0x471da0['y'] = this['y'] - _0x1e345b['y'], _0x471da0[_0x3688f9(0x183b)](), this['aimVec']['x'] = this[_0x3688f9(0xfbb)] * _0x471da0['x'], this[_0x3688f9(0x9dc)]['y'] = this[_0x3688f9(0xfbb)] * _0x471da0['y'];
                    } ['Update']() {
                        const _0x2a1ccf = _0x3c26ce;
                        this[_0x2a1ccf(0x19c8)](this[_0x2a1ccf(0x9dc)]['x'] * this['save_vel_x'], this[_0x2a1ccf(0x9dc)]['y'] * this[_0x2a1ccf(0xc8f)]), this[_0x2a1ccf(0x4d4)] = this[_0x2a1ccf(0xcf9)]['velocity']['x'] < 0x0, this[_0x2a1ccf(0x147c)]['x'] = this['x'], this[_0x2a1ccf(0x147c)]['y'] = this['y'] + 0x18;
                    } ['DeSpawn']() {
                        this['setVisible'](!0x1), super['DeSpawn']();
                    }
                }
                _0x3b3c33['B_Gatti'] = _0x4a3abf, _0x3b3c33['default'] = _0x4a3abf;
            };
