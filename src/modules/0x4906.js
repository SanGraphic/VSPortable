// Module 0x4906
// Args: _0x5314b8, _0x28a3d0, _0x31c9a4

export default (_0x5314b8, _0x28a3d0, _0x31c9a4) => {
                'use strict';
                const _0x3f3f84 = a0_0x6932;
                var _0x31edca = this && this['__importDefault'] || function(_0x37a56b) {
                    const _0xfc41ed = _0x3f3f84;
                    return _0x37a56b && _0x37a56b[_0xfc41ed(0x16f1)] ? _0x37a56b : {
                        'default': _0x37a56b
                    };
                };
                Object['defineProperty'](_0x28a3d0, '__esModule', {
                    'value': !0x0
                }), _0x28a3d0['B_Trapano'] = void 0x0;
                const _0x215706 = _0x31edca(_0x31c9a4(0xa14d)),
                    _0x5ae255 = _0x31edca(_0x31c9a4(0x5f07)),
                    _0x5ca335 = _0x31edca(_0x31c9a4(0x1fd7)),
                    _0xb21277 = _0x31c9a4(0x18304);
                class _0x4ce516 extends _0x215706['default'] {
                    constructor(_0x3e324b, _0x42ad19, _0x5bae1f, _0x461e03, _0x578d90) {
                        const _0x42b29a = _0x3f3f84;
                        super(_0x3e324b, _0x42ad19, _0x5bae1f, 'vfx', 'circle8.png', _0x461e03, _0x578d90), this['save_vel_x'] = -0x1, this[_0x42b29a(0xc8f)] = -0x1, this['bombDeceleration'] = 0x1, this[_0x42b29a(0xa21)] = !0x0, this['bounceAreaMod'] = 0x1, this['radius'] = 0x8, this[_0x42b29a(0x47f)] = 1.5, this[_0x42b29a(0xc9f)] = [], this[_0x42b29a(0x617)] = 0x32, this[_0x42b29a(0x7cd)] = 0x220022, this[_0x42b29a(0xa6d)] = 0x0, this[_0x42b29a(0x1653)] = [_0x5ca335['default'][_0x42b29a(0x148a)], _0x5ca335[_0x42b29a(0xd2c)]['STEP2'], _0x5ca335[_0x42b29a(0xd2c)][_0x42b29a(0x6b6)], _0x5ca335[_0x42b29a(0xd2c)][_0x42b29a(0xfa3)]], this[_0x42b29a(0x492)] = 0x3e8 / 0x3c, this['totalTime'] = 0x0, this['trail'] = this['scene']['add'][_0x42b29a(0x523)]({
                            'x': 0x0,
                            'y': 0x0,
                            'lineStyle': {
                                'width': 0x1,
                                'color': 0xff0000,
                                'alpha': 0x1
                            },
                            'fillStyle': {
                                'color': 0xff0000,
                                'alpha': 0x1
                            }
                        }), this['color'] = [0x0, 0x222222, 0x444444][_0x578d90 % 0x3], this[_0x42b29a(0x919)] = this[_0x42b29a(0x6d2)][_0x42b29a(0x18bd)][_0x42b29a(0x4f6)](0x0, 0x0, this[_0x42b29a(0x161a)], 0x440000)[_0x42b29a(0xf8e)](0.5)[_0x42b29a(0xdab)](0.5)['setVisible'](!0x0)[_0x42b29a(0x11c7)](_0xb21277['BlendModes'][_0x42b29a(0x1811)]), this[_0x42b29a(0x183f)](!0x1), this[_0x42b29a(0x58c)] = new Phaser[(_0x42b29a(0x24f))][(_0x42b29a(0x1551))](), this[_0x42b29a(0x9dc)] = new Phaser[(_0x42b29a(0x24f))][(_0x42b29a(0x1551))](), this[_0x42b29a(0x75e)] = this['scene'][_0x42b29a(0x18bd)][_0x42b29a(0x105b)](this['x'], this['x'], 'items', 'trapano.png')[_0x42b29a(0x8a2)](0x0)['setOrigin'](0.5, 0x1)['setAngle'](-0x2d), this[_0x42b29a(0x6bd)] = this['scene'][_0x42b29a(0x12a1)][_0x42b29a(0x18bd)]({
                            'targets': this['spikeSprite'],
                            'angle': 0x2d,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'delay': 0x1f4 * Math['random']() + 0xef * _0x578d90
                        });
                        let _0x5d4465 = this[_0x42b29a(0x183e)][_0x42b29a(0x1756)]('vfx', {
                            'start': 0x1,
                            'end': 0xa,
                            'zeroPad': 0x0,
                            'prefix': 'trapano',
                            'suffix': '.png'
                        });
                        this[_0x42b29a(0x75e)]['anims'][_0x42b29a(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x5d4465,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), this[_0x42b29a(0x75e)][_0x42b29a(0x183e)][_0x42b29a(0x902)]('idle'), this[_0x42b29a(0xa6d)] = 0x0;
                    } ['onEmitcustomTint'](_0x49c383, _0x144c20, _0x1d198d) {
                        const _0x37669b = _0x3f3f84;
                        return Phaser['Math'][_0x37669b(0x82a)][_0x37669b(0x198c)]([0xff8888, 0x88ff88, 0x88ff88, 0xffff88]);
                    } ['OnRecycle']() {
                        const _0x19f807 = _0x3f3f84;
                        var _0x58b69e, _0x2e529e;
                        super[_0x19f807(0x5ce)](), this[_0x19f807(0x177d)] = !0x1, this[_0x19f807(0x14b0)] = !0x1, this[_0x19f807(0x3b8)][_0x19f807(0x159)](), this[_0x19f807(0x3b8)][_0x19f807(0xdab)](0x1), this[_0x19f807(0x75e)][_0x19f807(0x9b5)](-0x2d), this['AngleTween']['play'](), this['trail']['x'] = this['x'] - _0x5ae255['default'][_0x19f807(0x1043)][_0x19f807(0x10f6)]['x'], this['trail']['y'] = this['y'] - _0x5ae255[_0x19f807(0xd2c)][_0x19f807(0x1043)][_0x19f807(0x10f6)]['y'], this[_0x19f807(0x3b8)]['alpha'] = 0x1, this['clearPositions'](), this['setScale'](0x1), this['body'][_0x19f807(0xdf6)](0x8, -0x4, -0x4), this['body'][_0x19f807(0x543)] = !0x0, this['objectsHit'] = [], this[_0x19f807(0x1a7f)] = !0x1, this['spikeSprite']['setVisible'](!0x0), this['GroundFx'][_0x19f807(0x183f)](!0x0), this[_0x19f807(0x183f)](!0x1), this[_0x19f807(0x39a)] = 0x1, this['setAlpha'](0x1), this['spikeSprite']['setAlpha'](0x1), this[_0x19f807(0x919)][_0x19f807(0xdab)](0.5), this['save_vel_x'] = 0x1, this['save_vel_y'] = 0x1, this[_0x19f807(0x9dc)]['x'] = 0x0, this['aimVec']['y'] = 0x0, this['previousVector']['x'] = _0x5ae255[_0x19f807(0xd2c)][_0x19f807(0x1043)]['Player'][_0x19f807(0xcf9)][_0x19f807(0xf4e)]['x'], this[_0x19f807(0x58c)]['y'] = _0x5ae255['default'][_0x19f807(0x1043)]['Player']['body'][_0x19f807(0xf4e)]['y'], this[_0x19f807(0x58c)]['normalize'](), this[_0x19f807(0x19c8)](0x0, 0x0), null === (_0x58b69e = this['SpeedTween']) || void 0x0 === _0x58b69e || _0x58b69e[_0x19f807(0x1a34)](), this['spikeSprite']['x'] = this['x'], this[_0x19f807(0x75e)]['y'] = this['y'] + 0x8, this['spikeSprite'][_0x19f807(0xd96)] = 0x0, this[_0x19f807(0x919)]['x'] = this['x'], this[_0x19f807(0x919)]['y'] = this['y'], this[_0x19f807(0x3a8)] = this[_0x19f807(0x919)][_0x19f807(0x3a8)] = 0x0, this[_0x19f807(0x1721)] = this[_0x19f807(0x919)][_0x19f807(0x1721)] = 0x0, null === (_0x2e529e = this['tween1']) || void 0x0 === _0x2e529e || _0x2e529e[_0x19f807(0x1a34)](), this['tween1'] = this['scene'][_0x19f807(0x12a1)]['add']({
                            'targets': [this, this[_0x19f807(0x75e)]],
                            'scale': this['weapon']['PArea'],
                            'duration': 0x12c,
                            'onStart': () => {
                                const _0x20874f = _0x19f807;
                                this[_0x20874f(0x3a8)] = 0x0, this['scaleY'] = 0x0, this[_0x20874f(0x75e)]['scaleX'] = 0x0, this['spikeSprite'][_0x20874f(0x1721)] = 0x0, this[_0x20874f(0x919)]['scaleX'] = 0x0, this['GroundFx']['scaleY'] = 0x0;
                            }
                        }), this[_0x19f807(0x6d2)]['tweens'][_0x19f807(0x18bd)]({
                            'targets': this[_0x19f807(0x919)],
                            'scale': 1.1 * this[_0x19f807(0x4a1)]['PArea'],
                            'duration': 0x12c,
                            'yoyo': !0x0
                        }), _0x5ae255['default']['Core']['scene'][_0x19f807(0x915)][_0x19f807(0x17fb)](this['HitboxTimer']), this['HitboxTimer'] = _0x5ae255[_0x19f807(0xd2c)]['Core'][_0x19f807(0x6d2)]['time'][_0x19f807(0x12b8)]({
                            'delay': this['weapon']['hitBoxDelay'],
                            'loop': !0x0,
                            'callback': () => {
                                this['objectsHit'] = [];
                            }
                        }), this[_0x19f807(0xa6d)] = 0x0, _0x5ae255[_0x19f807(0xd2c)][_0x19f807(0x1043)][_0x19f807(0x6d2)][_0x19f807(0x915)][_0x19f807(0x17fb)](this['ExpireTimer']), this[_0x19f807(0x12a3)] = _0x5ae255['default']['Core'][_0x19f807(0x6d2)]['time'][_0x19f807(0x12b8)]({
                            'delay': this[_0x19f807(0x4a1)]['PDuration'],
                            'loop': !0x0,
                            'callback': () => {
                                const _0x36204a = _0x19f807;
                                this[_0x36204a(0x14e3)]();
                            }
                        });
                    } ['FadeOut']() {
                        const _0x13b918 = _0x3f3f84;
                        this[_0x13b918(0x14b0)] || (this[_0x13b918(0x14b0)] = !0x0, this[_0x13b918(0x6d2)]['tweens'][_0x13b918(0x18bd)]({
                            'targets': [this['spikeSprite'], this, this[_0x13b918(0x919)], this['trail']],
                            'alpha': 0x0,
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x14d5af = _0x13b918;
                                this[_0x14d5af(0x14fb)]();
                            }
                        }), this[_0x13b918(0x4a1)][_0x13b918(0x1007)] && this[_0x13b918(0x4a1)][_0x13b918(0x155a)](this['x'], this['y']));
                    } ['Update'](_0x1cee22) {
                        const _0x5f3da7 = _0x3f3f84;
                        if (this[_0x5f3da7(0x16c6)] = this[_0x5f3da7(0x919)][_0x5f3da7(0x16c6)] = -this[_0x5f3da7(0x6d2)][_0x5f3da7(0x12f9)][_0x5f3da7(0x140e)], this['spikeSprite'][_0x5f3da7(0x16c6)] = this['y'] - _0x5ae255[_0x5f3da7(0xd2c)][_0x5f3da7(0x1043)][_0x5f3da7(0x10f6)]['y'] - 0x1, this[_0x5f3da7(0x75e)]['x'] = this['x'], this[_0x5f3da7(0x75e)]['y'] = this['y'], this['isYeeted']) {
                            this['trail']['setDepth'](this['y'] - _0x5ae255[_0x5f3da7(0xd2c)]['Core'][_0x5f3da7(0x10f6)]['y'] + 0.5 * this[_0x5f3da7(0x6d2)][_0x5f3da7(0x12f9)][_0x5f3da7(0x140e)]);
                            let _0x1c6d6f = Math[_0x5f3da7(0xdeb)](_0x1cee22 / 0x10);
                            for (let _0x38c44b = 0x0; _0x38c44b < _0x1c6d6f; _0x38c44b++) this[_0x5f3da7(0x12fc)]();
                        } else {
                            if (this[_0x5f3da7(0xa6d)] += _0x1cee22, 0x0 === _0x5ae255[_0x5f3da7(0xd2c)]['Core'][_0x5f3da7(0x10f6)]['body'][_0x5f3da7(0xf4e)]['x'] && 0x0 === _0x5ae255[_0x5f3da7(0xd2c)][_0x5f3da7(0x1043)]['Player']['body'][_0x5f3da7(0xf4e)]['y']) {
                                if (0x0 === this['previousVector']['x'] && 0x0 === this[_0x5f3da7(0x58c)]['y']) return;
                                this[_0x5f3da7(0x13d)](), this['isYeeted'] = !0x0;
                            } else this['isYeeted'] || (this['previousVector']['x'] = _0x5ae255['default']['Core'][_0x5f3da7(0x10f6)]['body'][_0x5f3da7(0xf4e)]['x'], this[_0x5f3da7(0x58c)]['y'] = _0x5ae255[_0x5f3da7(0xd2c)]['Core'][_0x5f3da7(0x10f6)]['body']['velocity']['y'], this['weapon']['PSpeed'] > 0x1 && (this[_0x5f3da7(0x9dc)]['x'] = this[_0x5f3da7(0x9dc)]['x'] - 0.002 * (_0x5ae255[_0x5f3da7(0xd2c)][_0x5f3da7(0x1043)][_0x5f3da7(0x10f6)][_0x5f3da7(0xcf9)]['velocity']['x'] - this['aimVec']['x']), this[_0x5f3da7(0x9dc)]['y'] = this[_0x5f3da7(0x9dc)]['y'] - 0.002 * (_0x5ae255[_0x5f3da7(0xd2c)][_0x5f3da7(0x1043)][_0x5f3da7(0x10f6)][_0x5f3da7(0xcf9)][_0x5f3da7(0xf4e)]['y'] - this['aimVec']['y']), this['setVelocity'](this[_0x5f3da7(0x9dc)]['x'] * this[_0x5f3da7(0x4a1)]['PSpeed'], this[_0x5f3da7(0x9dc)]['y'] * this['weapon'][_0x5f3da7(0x712)])));
                        }
                    } ['Yeet']() {
                        const _0x5ec842 = _0x3f3f84;
                        let _0x427d48 = this['AngleFromVelocityRadians'](this['previousVector']);
                        this[_0x5ec842(0xd96)] = Phaser[_0x5ec842(0x24f)][_0x5ec842(0x1470)](_0x427d48), this['setVelocity'](0x0, 0x0);
                        let _0x5c16da = 0x96 * this[_0x5ec842(0x4a1)]['PArea'];
                        this[_0x5ec842(0x6d2)][_0x5ec842(0x12a1)]['add']({
                            'targets': [this],
                            'x': this['x'] + _0x5c16da * Math['cos'](_0x427d48),
                            'y': this['y'] + _0x5c16da * Math['sin'](_0x427d48),
                            'duration': 0x96,
                            'delay': 0x32 * this['indexInWeapon'],
                            'ease': 'Sine.easeInOut',
                            'onStart': () => {
                                const _0x28ad78 = _0x5ec842;
                                this[_0x28ad78(0x6bd)][_0x28ad78(0x1a34)](), this[_0x28ad78(0x75e)][_0x28ad78(0xd96)] = this['angle'] + 0x5a, _0x5ae255[_0x28ad78(0xd2c)][_0x28ad78(0x1267)][_0x28ad78(0x7f6)](_0x5ca335[_0x28ad78(0xd2c)][_0x28ad78(0xfcc)], {
                                    'detune': -0xc8 - -0xc8 * this[_0x28ad78(0x19c4)],
                                    'volume': 0.45
                                }, 0xc8, 0xa);
                            },
                            'onComplete': () => {
                                const _0x550f4e = _0x5ec842;
                                this[_0x550f4e(0x14e3)]();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x2f623c = _0x3f3f84;
                        var _0x316429, _0x554809, _0x182f0c;
                        _0x5ae255[_0x2f623c(0xd2c)][_0x2f623c(0x1043)][_0x2f623c(0x6d2)]['time'][_0x2f623c(0x17fb)](this['ExpireTimer']), _0x5ae255['default'][_0x2f623c(0x1043)][_0x2f623c(0x6d2)]['time']['removeEvent'](this['HitboxTimer']), null === (_0x316429 = this[_0x2f623c(0x11e0)]) || void 0x0 === _0x316429 || _0x316429['stop'](), null === (_0x554809 = this['tween1']) || void 0x0 === _0x554809 || _0x554809[_0x2f623c(0x1a34)](), null === (_0x182f0c = this[_0x2f623c(0x15fa)]) || void 0x0 === _0x182f0c || _0x182f0c['stop'](), this[_0x2f623c(0x75e)][_0x2f623c(0x183f)](!0x1), this[_0x2f623c(0x3a8)] = 0x0, this[_0x2f623c(0x1721)] = 0x0, this[_0x2f623c(0x919)][_0x2f623c(0x183f)](!0x1), this[_0x2f623c(0x183f)](!0x1), this[_0x2f623c(0xcf9)]['enable'] = !0x1, super['DeSpawn']();
                    } ['clearPositions']() {
                        this['positions'] = [];
                    } ['trailUpdate']() {
                        const _0x5b8f2a = _0x3f3f84,
                            _0x53e6ad = Math[_0x5b8f2a(0xdeb)](this[_0x5b8f2a(0x4a1)][_0x5b8f2a(0x5f5)]);
                        if (this['active']) this[_0x5b8f2a(0xc9f)][_0x5b8f2a(0x2f9)]([this['x'], this['y']]), this['positions'][_0x5b8f2a(0xed9)] > this[_0x5b8f2a(0x617)] && this[_0x5b8f2a(0xc9f)]['pop']();
                        else {
                            if (this[_0x5b8f2a(0xc9f)]['length'] > this['maxPositions'] - 0xa) {
                                for (var _0x402f3f = 0x0; _0x402f3f < this['positions'][_0x5b8f2a(0xed9)]; _0x402f3f++) _0x402f3f > this[_0x5b8f2a(0x617)] - 0xa && this[_0x5b8f2a(0xc9f)][_0x5b8f2a(0x16ea)](_0x402f3f, 0x1);
                            }
                            this['positions'][_0x5b8f2a(0xed9)] > 0x1 ? (this[_0x5b8f2a(0xc9f)][_0x5b8f2a(0x2f9)]([this['x'], this['y']]), this[_0x5b8f2a(0xc9f)]['pop']()) : this[_0x5b8f2a(0x138f)]();
                        }
                        for (var _0x402f3f of (this[_0x5b8f2a(0x3b8)]['clear'](), this['trail']['beginPath'](), Array(this[_0x5b8f2a(0xc9f)][_0x5b8f2a(0xed9)])[_0x5b8f2a(0x204)]())) 0x0 != _0x402f3f && (this[_0x5b8f2a(0x3b8)][_0x5b8f2a(0x191d)](_0x53e6ad, 0x0, 0x1), this['trail'][_0x5b8f2a(0xebe)](this[_0x5b8f2a(0xc9f)][_0x402f3f - 0x1][0x0], this['positions'][_0x402f3f - 0x1][0x1]), this[_0x5b8f2a(0x3b8)]['lineTo'](this[_0x5b8f2a(0xc9f)][_0x402f3f][0x0], this['positions'][_0x402f3f][0x1]));
                        this[_0x5b8f2a(0x3b8)][_0x5b8f2a(0x13c1)](), this[_0x5b8f2a(0x3b8)][_0x5b8f2a(0x194f)](), this[_0x5b8f2a(0x3b8)][_0x5b8f2a(0xfcb)]();
                        for (let _0x325400 = 0x0; _0x325400 < 0x32; _0x325400++) 0x0 != _0x325400 && this[_0x5b8f2a(0xc9f)][_0x325400] && this[_0x5b8f2a(0xc9f)][_0x325400 - 0x1] && (this[_0x5b8f2a(0x3b8)]['lineStyle'](0.5 * _0x53e6ad, 0x444444, 0x1 / (_0x325400 / 0x14)), this['trail']['moveTo'](this[_0x5b8f2a(0xc9f)][_0x325400 - 0x1][0x0], this['positions'][_0x325400 - 0x1][0x1]), this[_0x5b8f2a(0x3b8)]['lineTo'](this['positions'][_0x325400][0x0], this[_0x5b8f2a(0xc9f)][_0x325400][0x1]));
                        this['trail'][_0x5b8f2a(0x13c1)](), this['trail']['strokePath']();
                    }
                }
                _0x28a3d0['B_Trapano'] = _0x4ce516, _0x28a3d0['default'] = _0x4ce516;
            };
