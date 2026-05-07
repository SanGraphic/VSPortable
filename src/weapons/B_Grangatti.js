// Module 0x1446c
// Args: _0x43af9b, _0x3a924e, _0x46fb62

export default (_0x43af9b, _0x3a924e, _0x46fb62) => {
                'use strict';
                const _0x27d771 = a0_0x6932;
                var _0xed78dc = this && this['__importDefault'] || function(_0x4ad03b) {
                    const _0x57d0d0 = a0_0x6932;
                    return _0x4ad03b && _0x4ad03b['__esModule'] ? _0x4ad03b : {
                        'default': _0x4ad03b
                    };
                };
                Object['defineProperty'](_0x3a924e, '__esModule', {
                    'value': !0x0
                }), _0x3a924e['B_Grangatti'] = void 0x0;
                const _0x41e1bb = _0xed78dc(_0x46fb62(0xa14d)),
                    _0x4d0d43 = _0xed78dc(_0x46fb62(0x5f07)),
                    _0x2aba98 = _0xed78dc(_0x46fb62(0x1fd7));
                class _0x3522e2 extends _0x41e1bb['default'] {
                    constructor(_0x51f9e0, _0x40a60b, _0x4092a1, _0x4a55c4, _0x4bac1c) {
                        const _0x2cce83 = _0x27d771;
                        super(_0x51f9e0, _0x40a60b, _0x4092a1, 'vfx', 'eye.png', _0x4a55c4, _0x4bac1c), this['explosionCircle'] = new Phaser[(_0x2cce83(0x10d2))]['Circle'](0x0, 0x0, 0x18), this[_0x2cce83(0x125b)] = this['scene']['add'][_0x2cce83(0x1791)]('vfx'), this[_0x2cce83(0x125b)][_0x2cce83(0x14c0)]({
                            'frame': ['SmokeB1.png', 'SmokeB2.png', 'SmokeB3.png', 'SmokeB4.png', 'SmokeB5.png', 'SmokeB6.png'],
                            'angle': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'quantity': 0x1,
                            'lifespan': 0x2ee,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x2cce83(0x806)]
                            },
                            'on': !0x1
                        }), new Phaser[(_0x2cce83(0x10d2))]['Circle'](0x0, 0x0, 0x60), this[_0x2cce83(0x15ef)] = this['scene']['add']['particles']('vfx'), this['PfxEmitter2'][_0x2cce83(0x14c0)]({
                            'frame': ['SmokeB1.png', 'SmokeB2.png', 'SmokeB3.png', 'SmokeB4.png', 'SmokeB5.png', 'SmokeB6.png'],
                            'angle': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'quantity': 0x1,
                            'lifespan': 0x2ee,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'emitZone': {
                                'type': 'edge',
                                'source': this[_0x2cce83(0x806)],
                                'quantity': 0x30,
                                'yoyo': !0x1
                            },
                            'on': !0x1
                        }), this['defaultSpeed'] = this[_0x2cce83(0xb1f)], this[_0x2cce83(0x1234)] = this['weapon'], this['aimVec'] = new Phaser[(_0x2cce83(0x24f))][(_0x2cce83(0x1551))](), this['summon'] = this[_0x2cce83(0x6d2)]['add']['sprite'](0x0, 0x0, 'vfx', 'summon.png')[_0x2cce83(0x183f)](!0x1);
                        let _0x5aea3c = this[_0x2cce83(0x183e)]['generateFrameNames']('vfx', {
                            'start': 0x0,
                            'end': 0x1d,
                            'zeroPad': 0x0,
                            'prefix': 'eyeanim_',
                            'suffix': '.png'
                        });
                        this['anims'][_0x2cce83(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x5aea3c,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), this[_0x2cce83(0x183e)][_0x2cce83(0x902)]('idle');
                        let _0x267ec4 = new Phaser[(_0x2cce83(0x10d2))][(_0x2cce83(0x92e))](0x0, 0x0, this['scene']['renderer'][_0x2cce83(0x173c)], this['scene'][_0x2cce83(0x12f9)]['height']);
                        this['ellipsePoints'] = _0x267ec4[_0x2cce83(0x10f9)](0x5);
                    } ['OnRecycle']() {
                        const _0x3dd302 = _0x27d771;
                        var _0x7608c, _0x2cae76, _0x27b8ba;
                        super[_0x3dd302(0x5ce)](), null === (_0x7608c = this[_0x3dd302(0x2e4)]) || void 0x0 === _0x7608c || _0x7608c[_0x3dd302(0x1a34)](), null === (_0x2cae76 = this[_0x3dd302(0x1e5)]) || void 0x0 === _0x2cae76 || _0x2cae76[_0x3dd302(0x1a34)](), null === (_0x27b8ba = this['onExpireAlphaTween']) || void 0x0 === _0x27b8ba || _0x27b8ba[_0x3dd302(0x1a34)](), this['visible'] = !0x0, this[_0x3dd302(0x177d)] = !0x1, this['originX'] = 0.5, this[_0x3dd302(0x564)] = 0.5, this['setScale'](0x1), this['body'][_0x3dd302(0xdf6)](0xe), this[_0x3dd302(0x8a2)](this['weapon'][_0x3dd302(0x5f5)]), this[_0x3dd302(0xe71)] = 0.7, this[_0x3dd302(0x147c)][_0x3dd302(0x8a2)](0x0)[_0x3dd302(0x183f)](!0x0)['setAlpha'](0x1), this[_0x3dd302(0x19b0)] = 0xffffff, this[_0x3dd302(0xb1f)] = this[_0x3dd302(0x246)], this['summonTween'] = this['scene']['tweens'][_0x3dd302(0x18bd)]({
                            'targets': this[_0x3dd302(0x147c)],
                            'scale': this[_0x3dd302(0x4a1)]['PArea'],
                            'alpha': 0x0,
                            'duration': 0x3e8
                        }), this[_0x3dd302(0x1e5)] = this[_0x3dd302(0x6d2)][_0x3dd302(0x12a1)][_0x3dd302(0x18bd)]({
                            'targets': this,
                            'scale': this['weapon'][_0x3dd302(0x5f5)],
                            'duration': 0x12c,
                            'onStart': () => {
                                const _0x33d0f7 = _0x3dd302;
                                this[_0x33d0f7(0x3a8)] = 0x0, this[_0x33d0f7(0x1721)] = 0x0;
                            }
                        });
                        let _0x492e3d = 0x2 * Math['PI'] * Math['random']();
                        this['x'] += Math[_0x3dd302(0xd7e)](_0x492e3d) * this['scene'][_0x3dd302(0x12f9)]['width'] * 0.45, this['y'] += Math['sin'](_0x492e3d) * this[_0x3dd302(0x6d2)]['renderer'][_0x3dd302(0x140e)] * 0.45, this['summon']['x'] = this['x'], this['summon']['y'] = this['y'] + 0x18, this[_0x3dd302(0x6dc)] = 0x1, this['save_vel_y'] = 0x1, this[_0x3dd302(0x19ed)](), this[_0x3dd302(0x6d2)][_0x3dd302(0x915)]['removeEvent'](this[_0x3dd302(0xaad)]), this['chooseTimer'] = this[_0x3dd302(0x6d2)][_0x3dd302(0x915)][_0x3dd302(0x12b8)]({
                            'callback': () => {
                                const _0x3692fe = _0x3dd302;
                                this[_0x3692fe(0x16b3)]();
                            },
                            'delay': 0x5dc / this['weapon'][_0x3dd302(0x712)],
                            'repeat': -0x1
                        }), this[_0x3dd302(0x6d2)][_0x3dd302(0x915)][_0x3dd302(0x17fb)](this['expireTimer']), this['expireTimer'] = this['scene']['time']['addEvent']({
                            'callback': () => {
                                const _0x1d0e2c = _0x3dd302;
                                this[_0x1d0e2c(0x19fc)]();
                            },
                            'delay': this[_0x3dd302(0x4a1)]['PDuration']
                        }), _0x4d0d43[_0x3dd302(0xd2c)][_0x3dd302(0x1043)][_0x3dd302(0x6d2)]['time']['removeEvent'](this[_0x3dd302(0x8b9)]), this[_0x3dd302(0x8b9)] = _0x4d0d43['default'][_0x3dd302(0x1043)]['scene']['time'][_0x3dd302(0x12b8)]({
                            'delay': this[_0x3dd302(0x4a1)][_0x3dd302(0xcd5)],
                            'loop': !0x0,
                            'callback': () => {
                                const _0x21f83a = _0x3dd302;
                                this[_0x21f83a(0x990)] = [];
                            }
                        }), _0x4d0d43[_0x3dd302(0xd2c)][_0x3dd302(0x1267)][_0x3dd302(0x7f6)](_0x2aba98[_0x3dd302(0xd2c)][_0x3dd302(0x9ca)], {
                            'detune': -0x3e8,
                            'volume': 0.2
                        }, 0xc8, 0xc);
                    } ['Bounce'](_0x56c1e1) {
                        const _0x419877 = _0x27d771;
                        this['body'] === _0x56c1e1 && (this[_0x419877(0x6dc)] *= -0x1, this[_0x419877(0xc8f)] *= -0x1);
                    } ['onExpireTimer']() {
                        const _0xa1d0d3 = _0x27d771;
                        this[_0xa1d0d3(0x636)] = this[_0xa1d0d3(0x6d2)][_0xa1d0d3(0x12a1)][_0xa1d0d3(0x18bd)]({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x12c,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['OnHasHitWall'](_0x285a7a) {
                        const _0x3e8270 = _0x27d771;
                        this['save_vel_x'] *= _0x285a7a[_0x3e8270(0x18c9)] || _0x285a7a[_0x3e8270(0x1429)] ? -0x1 : 0x1, this['save_vel_y'] *= _0x285a7a[_0x3e8270(0x10d7)] || _0x285a7a[_0x3e8270(0x3da)] ? -0x1 : 0x1;
                    } ['TargetPlayer']() {
                        const _0x59db94 = _0x27d771;
                        let _0x43ecb2 = _0x4d0d43[_0x59db94(0xd2c)][_0x59db94(0x1043)][_0x59db94(0x10f6)],
                            _0x21f65c = new Phaser[(_0x59db94(0x24f))][(_0x59db94(0x1551))](0x0, 0x0);
                        _0x21f65c['x'] = _0x43ecb2['x'] - this['x'], _0x21f65c['y'] = _0x43ecb2['y'] - this['y'], _0x21f65c['normalize'](), this['aimVec']['x'] = this['TrueSpeed'] * _0x21f65c['x'], this['aimVec']['y'] = this[_0x59db94(0xfbb)] * _0x21f65c['y'];
                    } ['ChooseTarget']() {
                        const _0x36a9dd = _0x27d771;
                        let _0x1820c0, _0x335e68 = _0x4d0d43[_0x36a9dd(0xd2c)][_0x36a9dd(0x1043)][_0x36a9dd(0x13b2)][_0x36a9dd(0x3fe)][_0x36a9dd(0x10c5)];
                        if (_0x335e68[_0x36a9dd(0xed9)] <= 0x0) {
                            let _0xa660e2 = Phaser[_0x36a9dd(0x24f)][_0x36a9dd(0x82a)][_0x36a9dd(0x198c)](this[_0x36a9dd(0x1b13)]);
                            _0x1820c0 = {
                                'x': _0x4d0d43['default']['Core'][_0x36a9dd(0x10f6)]['x'] + _0xa660e2['x'],
                                'y': _0x4d0d43['default'][_0x36a9dd(0x1043)]['Player']['y'] + _0xa660e2['y']
                            };
                        } else _0x1820c0 = this['scene']['physics']['closest'](this, _0x335e68);
                        if (!_0x1820c0) return;
                        let _0x462d26 = new Phaser[(_0x36a9dd(0x24f))]['Vector2'](0x0, 0x0);
                        _0x462d26['x'] = _0x1820c0['x'] - this['x'], _0x462d26['y'] = _0x1820c0['y'] - this['y'], _0x462d26['normalize'](), this[_0x36a9dd(0x9dc)]['x'] = this[_0x36a9dd(0xfbb)] * _0x462d26['x'], this['aimVec']['y'] = this['TrueSpeed'] * _0x462d26['y'];
                    } ['Update']() {
                        const _0x2cc2a5 = _0x27d771;
                        this['indexInWeapon'] < 0x6 && (this['PfxEmitter'][_0x2cc2a5(0x108b)](this['x'], this['y']), this[_0x2cc2a5(0x15ef)][_0x2cc2a5(0x108b)](this['x'], this['y'])), this['depth'] = this['y'] - _0x4d0d43[_0x2cc2a5(0xd2c)]['Core'][_0x2cc2a5(0x10f6)]['y'] - 0x20, this[_0x2cc2a5(0x125b)]['depth'] = this[_0x2cc2a5(0x16c6)] - 0x1, this[_0x2cc2a5(0x15ef)][_0x2cc2a5(0x16c6)] = this[_0x2cc2a5(0x16c6)] + 0x1, this['setVelocity'](this['aimVec']['x'] * this['save_vel_x'], this['aimVec']['y'] * this[_0x2cc2a5(0xc8f)]), this[_0x2cc2a5(0x4d4)] = this['body'][_0x2cc2a5(0xf4e)]['x'] < 0x0, this[_0x2cc2a5(0x147c)]['x'] = this['x'], this[_0x2cc2a5(0x147c)]['y'] = this['y'] + 0x18;
                    } ['DeSpawn']() {
                        const _0x24003c = _0x27d771;
                        _0x4d0d43['default'][_0x24003c(0x1043)]['scene']['time'][_0x24003c(0x17fb)](this['HitboxTimer']), this[_0x24003c(0x183f)](!0x1), super[_0x24003c(0x14fb)]();
                    }
                }
                _0x3a924e['B_Grangatti'] = _0x3522e2, _0x3a924e['default'] = _0x3522e2;
            };
