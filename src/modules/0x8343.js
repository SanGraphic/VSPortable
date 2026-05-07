// Module 0x8343
// Args: _0x3ed128, _0x40d35d, _0x2a17d4

export default (_0x3ed128, _0x40d35d, _0x2a17d4) => {
                'use strict';
                const _0x49bf7b = a0_0x6932;
                var _0xa6af8e = this && this['__importDefault'] || function(_0x1bc1cd) {
                    return _0x1bc1cd && _0x1bc1cd['__esModule'] ? _0x1bc1cd : {
                        'default': _0x1bc1cd
                    };
                };
                Object['defineProperty'](_0x40d35d, '__esModule', {
                    'value': !0x0
                }), _0x40d35d['B_BoneGiant'] = void 0x0;
                const _0x1e9e1f = _0xa6af8e(_0x2a17d4(0xa14d)),
                    _0x276398 = _0xa6af8e(_0x2a17d4(0x5f07)),
                    _0x3add93 = _0xa6af8e(_0x2a17d4(0x1fd7));
                class _0x39039f extends _0x1e9e1f['default'] {
                    constructor(_0x3915e5, _0xa012b9, _0x273318, _0x37d8c6, _0x2bd514) {
                        const _0x3a9311 = _0x49bf7b;
                        super(_0x3915e5, _0xa012b9, _0x273318, 'vfx', 'Gash_arm_i01.png', _0x37d8c6, _0x2bd514), this['bouncePositions'] = new Array(), this[_0x3a9311(0x6dc)] = 0x0, this[_0x3a9311(0xc8f)] = 0x0, this['posHistory'] = new Array(), this[_0x3a9311(0x1192)] = 0x0, this[_0x3a9311(0x624)] = 0x2, this[_0x3a9311(0x183f)](!0x1), this[_0x3a9311(0x19eb)] = new Phaser[(_0x3a9311(0x24f))][(_0x3a9311(0x1551))](0x0, 0x0), this['scene'][_0x3a9311(0x1585)]['world']['on']('worldbounds', this[_0x3a9311(0x1851)], this), this['displaySprite'] = this['scene'][_0x3a9311(0x18bd)][_0x3a9311(0x105b)](_0xa012b9, _0x273318, 'characters', 'Gash_arm_i01.png'), this[_0x3a9311(0x1967)]['setOrigin'](0xb / 0x3c, 0xd / 0x3c);
                        const _0x1a8ad6 = this['displaySprite'][_0x3a9311(0x183e)]['generateFrameNames']('characters', {
                            'start': 0x1,
                            'end': 0x5,
                            'zeroPad': 0x2,
                            'prefix': 'Gash_arm_i',
                            'suffix': '.png'
                        });
                        this['displaySprite'][_0x3a9311(0x183e)][_0x3a9311(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x1a8ad6,
                            'frameRate': 0x18,
                            'repeat': -0x1
                        }), this[_0x3a9311(0x1967)]['anims']['play']('idle');
                        let _0x43d9ac = 0xe0e0ff;
                        this[_0x3a9311(0xbbc)] = new Array();
                        for (let _0x1a7135 = 0x0; _0x1a7135 < this['maxHistory']; _0x1a7135++) {
                            this['posHistory'][_0x3a9311(0x1564)](new Phaser['Math'][(_0x3a9311(0x1551))](_0xa012b9, _0x273318));
                            var _0x5b3792 = this[_0x3a9311(0x6d2)][_0x3a9311(0x18bd)][_0x3a9311(0x568)](0x0, 0x0, this[_0x3a9311(0x174d)]['key'], this[_0x3a9311(0x670)][_0x3a9311(0x226)])[_0x3a9311(0x183f)](!0x1)[_0x3a9311(0xb34)](_0x43d9ac, 0xff, _0x43d9ac, 0xff)[_0x3a9311(0xdab)](0.65 - 0.25 * _0x1a7135);
                            this[_0x3a9311(0xbbc)][_0x3a9311(0x1564)](_0x5b3792);
                        }
                    } ['Attach']() {
                        const _0x11f95c = _0x49bf7b;
                        var _0x23a7d4;
                        _0x276398['default']['Sound'][_0x11f95c(0x7f6)](_0x3add93['default'][_0x11f95c(0xfcc)], {
                            'rate': 0.3 + 0.1 * this[_0x11f95c(0x19c4)],
                            'volume': 0.45
                        }, 0xc8, 0xa), null === (_0x23a7d4 = this[_0x11f95c(0x19b3)]) || void 0x0 === _0x23a7d4 || _0x23a7d4['stop'](), this[_0x11f95c(0x19b3)] = this[_0x11f95c(0x6d2)][_0x11f95c(0x12a1)]['add']({
                            'targets': this,
                            'x': this[_0x11f95c(0x19eb)]['x'],
                            'y': this[_0x11f95c(0x19eb)]['y'],
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x268b54 = _0x11f95c;
                                this[_0x268b54(0x1503)]();
                            }
                        });
                    } ['OnAttached']() {
                        const _0x49082e = _0x49bf7b;
                        var _0xe41072, _0x5395fa;
                        null === (_0xe41072 = this['AngleTween']) || void 0x0 === _0xe41072 || _0xe41072[_0x49082e(0x1a34)](), this[_0x49082e(0x1967)][_0x49082e(0xd96)] = 0x0, this['displaySprite']['angle'] = 0x0, this[_0x49082e(0x1967)]['setOrigin'](0xb / 0x3c, 0xd / 0x3c), this[_0x49082e(0x1967)]['x'] = this[_0x49082e(0x19eb)]['x'], this['displaySprite']['y'] = this['anchorPosition']['y'], this['x'] = this['displaySprite']['x'], this['y'] = this[_0x49082e(0x1967)]['y'], this[_0x49082e(0x15a1)] = !0x1, this[_0x49082e(0x488)] = !0x0, null === (_0x5395fa = this['ScaleTween']) || void 0x0 === _0x5395fa || _0x5395fa['stop'](), this['setScale'](0x1), this['setVelocity'](0x0, 0x0), this[_0x49082e(0x9b5)](0x0);
                    } ['Detach'](_0xf12362) {
                        const _0x4f8a63 = _0x49bf7b;
                        var _0x30766c;
                        _0x276398[_0x4f8a63(0xd2c)][_0x4f8a63(0x1267)][_0x4f8a63(0x7f6)](_0x3add93['default'][_0x4f8a63(0xfcc)], {
                            'detune': -0x64 * (0xa + this[_0x4f8a63(0x19c4)]),
                            'volume': 0.45
                        }, 0xc8, 0xa), null === (_0x30766c = this[_0x4f8a63(0x6bd)]) || void 0x0 === _0x30766c || _0x30766c['stop'](), this[_0x4f8a63(0x6bd)] = this['scene'][_0x4f8a63(0x12a1)]['add']({
                            'targets': this[_0x4f8a63(0x1967)],
                            'angle': this[_0x4f8a63(0xd96)] + _0xf12362,
                            'duration': 0x3e8,
                            'repeat': -0x1
                        }), this[_0x4f8a63(0x15a1)] = !0x1, this[_0x4f8a63(0x488)] = !0x1, this[_0x4f8a63(0x1967)][_0x4f8a63(0xf8e)](0.5), this['objectsHit'] = [], this[_0x4f8a63(0xbc8)]();
                    } ['OnRecycle']() {
                        const _0x225de9 = _0x49bf7b;
                        var _0x3ac413;
                        super[_0x225de9(0x5ce)](), this[_0x225de9(0xcf9)][_0x225de9(0xdf6)](0xe, 0xe, 0xe), this['setVisible'](!0x1), this['canBounce'] = !0x0, this[_0x225de9(0x8a2)](0x1), this['setBounce'](1.1, 1.1), this['isCullable'] = !0x1, this[_0x225de9(0x488)] = !0x1, this['isSpinning'] = !0x1, this[_0x225de9(0x193c)](!0x0, 0x1, 0x1), this[_0x225de9(0xcf9)]['setBoundsRectangle'](_0x276398['default']['Core']['Player']['WorldBoxCollider']), this['body']['onWorldBounds'] = !0x0, this[_0x225de9(0x1967)][_0x225de9(0x8a2)](0x1), this['AimForRandomEnemy'](), null === (_0x3ac413 = this[_0x225de9(0xd35)]) || void 0x0 === _0x3ac413 || _0x3ac413['stop'](), this['ScaleTween'] = this[_0x225de9(0x6d2)][_0x225de9(0x12a1)][_0x225de9(0x18bd)]({
                            'targets': this['displaySprite'],
                            'scale': 0x0,
                            'duration': 0x64,
                            'delay': this[_0x225de9(0x4a1)][_0x225de9(0x16c3)],
                            'ease': 'Linear',
                            'onStart': () => {
                                const _0x4cea7e = _0x225de9;
                                this[_0x4cea7e(0x1967)]['setScale'](0x1);
                            },
                            'onComplete': () => {
                                const _0xa3949e = _0x225de9;
                                this[_0xa3949e(0x14fb)]();
                            }
                        });
                    } ['Bounce'](_0x3e94f6) {
                        const _0x2468ea = _0x49bf7b;
                        this[_0x2468ea(0xcf9)] === _0x3e94f6 && (this[_0x2468ea(0x990)] = []);
                    } ['OnHasHitAnObject'](_0x5f0a90) {
                        const _0x2eca9a = _0x49bf7b;
                        if (!_0x5f0a90[_0x2eca9a(0xdae)]) {
                            if (!this[_0x2eca9a(0xa21)]) return;
                            if (this[_0x2eca9a(0x488)]) return;
                            this[_0x2eca9a(0xa21)] = !0x1, this['scene'][_0x2eca9a(0x915)]['removeEvent'](this['BounceTimer']), this['BounceTimer'] = this[_0x2eca9a(0x6d2)][_0x2eca9a(0x915)][_0x2eca9a(0x12b8)]({
                                'delay': 0x1e,
                                'callback': () => {
                                    const _0x3950ff = _0x2eca9a;
                                    this[_0x3950ff(0xa21)] = !0x0;
                                }
                            }), this[_0x2eca9a(0x19c8)](-1.1 * this['body'][_0x2eca9a(0xf4e)]['x'], -1.1 * this[_0x2eca9a(0xcf9)][_0x2eca9a(0xf4e)]['y']), this['objectsHit'] = [];
                        }
                    } ['OnHasHitWall'](_0x2aba87) {
                        const _0x24e0a1 = _0x49bf7b;
                        this['isAttached'] || (this[_0x24e0a1(0x6dc)] *= _0x2aba87['faceRight'] || _0x2aba87[_0x24e0a1(0x1429)] ? -0x1 : 0x1, this[_0x24e0a1(0xc8f)] *= _0x2aba87[_0x24e0a1(0x10d7)] || _0x2aba87['faceBottom'] ? -0x1 : 0x1, this['setVelocity'](this['save_vel_x'], this[_0x24e0a1(0xc8f)]), this[_0x24e0a1(0x990)] = []);
                    } ['Update']() {
                        const _0x3bdb85 = _0x49bf7b;
                        if (this['isSpinning']) return this[_0x3bdb85(0x1967)]['x'] = this['anchorPosition']['x'], this[_0x3bdb85(0x1967)]['y'] = this[_0x3bdb85(0x19eb)]['y'], this['x'] = this[_0x3bdb85(0x1967)]['x'], this['y'] = this[_0x3bdb85(0x1967)]['y'], this['AdjustBodyOffset'](), void this[_0x3bdb85(0x78f)](!0x1);
                        this['isAttached'] ? (this['displaySprite']['x'] = this[_0x3bdb85(0x19eb)]['x'], this['displaySprite']['y'] = this[_0x3bdb85(0x19eb)]['y'], this['x'] = this['displaySprite']['x'], this['y'] = this[_0x3bdb85(0x1967)]['y'], this[_0x3bdb85(0x11d2)](), this[_0x3bdb85(0x78f)](!0x1)) : (this['save_vel_x'] = 0x0 == this['body'][_0x3bdb85(0xf4e)]['x'] ? this[_0x3bdb85(0x6dc)] : this[_0x3bdb85(0xcf9)][_0x3bdb85(0xf4e)]['x'], this[_0x3bdb85(0xc8f)] = 0x0 == this[_0x3bdb85(0xcf9)][_0x3bdb85(0xf4e)]['y'] ? this[_0x3bdb85(0xc8f)] : this['body'][_0x3bdb85(0xf4e)]['y'], this['displaySprite'][_0x3bdb85(0xf01)](this), this[_0x3bdb85(0x78f)](!0x0));
                    } ['UpdateGhosts'](_0x54c879) {
                        const _0x33e4de = _0x49bf7b;
                        this[_0x33e4de(0x1192)] < this[_0x33e4de(0x624)] - 0x1 ? this[_0x33e4de(0x1192)]++ : this[_0x33e4de(0x1192)] = 0x0;
                        for (let _0x4b9ff3 = 0x0; _0x4b9ff3 < this['ghosts']['length']; _0x4b9ff3++) {
                            var _0x36782e = this[_0x33e4de(0x24a)][this['getHistoryIndex'](_0x4b9ff3)],
                                _0xd4e044 = this['ghosts'][_0x4b9ff3];
                            _0xd4e044['angle'] = this[_0x33e4de(0x1967)][_0x33e4de(0xd96)], _0xd4e044['x'] = _0x36782e['x'], _0xd4e044['y'] = _0x36782e['y'], _0xd4e044[_0x33e4de(0x7cb)] = this[_0x33e4de(0x1967)][_0x33e4de(0x7cb)], _0xd4e044[_0x33e4de(0x35a)] = _0x54c879;
                        }
                        this['posHistory'][this['historyIndex']]['x'] = this['x'], this[_0x33e4de(0x24a)][this['historyIndex']]['y'] = this['y'];
                    } ['getHistoryIndex'](_0x4f5d75) {
                        const _0x28d8a0 = _0x49bf7b;
                        return this[_0x28d8a0(0x1192)] + _0x4f5d75 >= this[_0x28d8a0(0x624)] ? this['historyIndex'] + _0x4f5d75 - this[_0x28d8a0(0x624)] : this['historyIndex'] + _0x4f5d75;
                    } ['DeSpawn']() {
                        const _0x1dc07e = _0x49bf7b;
                        this[_0x1dc07e(0x177d)] = !0x0;
                        for (let _0x57b34e = 0x0; _0x57b34e < this['ghosts'][_0x1dc07e(0xed9)]; _0x57b34e++) this[_0x1dc07e(0xbbc)][_0x57b34e][_0x1dc07e(0x183f)](!0x1);
                        super[_0x1dc07e(0x14fb)]();
                    } ['AdjustBodyOffset']() {
                        const _0x405eba = _0x49bf7b;
                        let _0x53b1f7 = this[_0x405eba(0x1967)][_0x405eba(0x7cb)] > 0x0 ? this[_0x405eba(0x1967)]['angle'] : this[_0x405eba(0x1967)][_0x405eba(0xd96)] + 0xb4,
                            _0x112418 = Phaser[_0x405eba(0x24f)][_0x405eba(0x54d)](_0x53b1f7),
                            _0x14bc41 = Math['cos'](_0x112418),
                            _0x36235d = Math[_0x405eba(0xc80)](_0x112418);
                        this[_0x405eba(0x1967)][_0x405eba(0x7cb)] > 0x0 ? (this['x'] = this[_0x405eba(0x1967)]['x'] - 0x1c * _0x36235d + 0x24 * _0x14bc41, this['y'] = this['displaySprite']['y'] + 0x1c * _0x14bc41 + 0x24 * _0x36235d) : (this['x'] = this[_0x405eba(0x1967)]['x'] + (0x1c * _0x36235d + 0x24 * _0x14bc41), this['y'] = this[_0x405eba(0x1967)]['y'] - (0x1c * _0x14bc41 - 0x24 * _0x36235d));
                    } ['Spinnn'](_0x67ee50, _0x5e5bb2, _0x5f3d88) {
                        const _0x1ab28d = _0x49bf7b;
                        var _0x239e9f;
                        this[_0x1ab28d(0x15a1)] = !0x0, this[_0x1ab28d(0x488)] = !0x1, _0x276398['default'][_0x1ab28d(0x1267)]['PlaySound'](_0x3add93[_0x1ab28d(0xd2c)]['Shot'], {
                            'rate': 0.2,
                            'volume': 0.2
                        }, 0xc8, 0xa), null === (_0x239e9f = this[_0x1ab28d(0x6bd)]) || void 0x0 === _0x239e9f || _0x239e9f[_0x1ab28d(0x1a34)](), this[_0x1ab28d(0x6bd)] = _0x276398[_0x1ab28d(0xd2c)][_0x1ab28d(0x1043)]['scene']['add']['tween']({
                            'targets': this[_0x1ab28d(0x1967)],
                            'angle': this['angle'] + _0x67ee50,
                            'duration': _0x5e5bb2,
                            'repeat': _0x5f3d88,
                            'onRepeat': () => {
                                const _0x5abbe6 = _0x1ab28d;
                                _0x276398['default']['Sound'][_0x5abbe6(0x7f6)](_0x3add93[_0x5abbe6(0xd2c)][_0x5abbe6(0xfcc)], {
                                    'rate': 0.2,
                                    'volume': 0.2
                                }, 0xc8, 0xa);
                            }
                        });
                    }
                }
                _0x40d35d['B_BoneGiant'] = _0x39039f, _0x40d35d['default'] = _0x39039f;
            };
