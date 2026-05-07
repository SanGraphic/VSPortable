// Module 0x10c7
// Args: _0x47f56d, _0x3752c1, _0x5e2cd3

export default (_0x47f56d, _0x3752c1, _0x5e2cd3) => {
                'use strict';
                const _0x595147 = a0_0x6932;
                var _0x4993e4 = this && this['__importDefault'] || function(_0x43858e) {
                    const _0x13e573 = _0x595147;
                    return _0x43858e && _0x43858e[_0x13e573(0x16f1)] ? _0x43858e : {
                        'default': _0x43858e
                    };
                };
                Object['defineProperty'](_0x3752c1, '__esModule', {
                    'value': !0x0
                });
                const _0x3d98c6 = _0x4993e4(_0x5e2cd3(0x1fd7)),
                    _0x1a2dde = _0x4993e4(_0x5e2cd3(0x5f07)),
                    _0x171457 = _0x4993e4(_0x5e2cd3(0x138b2));
                class _0xc6dd2c extends _0x171457['default'] {
                    constructor(_0x56a783, _0x1b849b, _0x47d1ac, _0x10984d) {
                        const _0x4afa7c = _0x595147;
                        super(_0x56a783, _0x1b849b, _0x47d1ac, _0x10984d), this[_0x4afa7c(0x6a1)] = 'CEye_i01.png', this[_0x4afa7c(0x94b)] = 'CEyeRed_i01.png', this[_0x4afa7c(0xcbf)] = 'CEgg_i01.png', this[_0x4afa7c(0x14b4)] = 'CEggRed_i01.png', this[_0x4afa7c(0xbe3)] = 'Wing_i01.png', this[_0x4afa7c(0x51a)] = [0xffffff], this[_0x4afa7c(0x1510)] = 0x3a98, this[_0x4afa7c(0xb93)] = this[_0x4afa7c(0x6d2)][_0x4afa7c(0x18bd)][_0x4afa7c(0x105b)](_0x1b849b, _0x47d1ac, 'enemiesM', this[_0x4afa7c(0xbe3)]), this[_0x4afa7c(0xdfe)] = this[_0x4afa7c(0x6d2)][_0x4afa7c(0x18bd)][_0x4afa7c(0x105b)](_0x1b849b, _0x47d1ac, 'enemiesM', this[_0x4afa7c(0xbe3)]), this['eye'] = this['scene'][_0x4afa7c(0x18bd)][_0x4afa7c(0x105b)](_0x1b849b, _0x47d1ac, 'enemiesM', this['frameName_EyeBlue']);
                        let _0x262a71 = this['anims'][_0x4afa7c(0x1756)]('enemiesM', {
                            'start': 0x1,
                            'end': 0x5,
                            'zeroPad': 0x0,
                            'prefix': this[_0x4afa7c(0xbe3)][_0x4afa7c(0xa0d)]('1.png', ''),
                            'suffix': '.png'
                        });
                        this[_0x4afa7c(0xb93)]['anims'][_0x4afa7c(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x262a71,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        }), this[_0x4afa7c(0xdfe)][_0x4afa7c(0x183e)][_0x4afa7c(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x262a71,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        }), _0x262a71 = this['anims'][_0x4afa7c(0x1756)]('enemiesM', {
                            'start': 0x1,
                            'end': 0x5,
                            'zeroPad': 0x0,
                            'prefix': this[_0x4afa7c(0x6a1)]['replace']('1.png', ''),
                            'suffix': '.png'
                        }), this[_0x4afa7c(0x669)]['anims']['create']({
                            'key': 'blue',
                            'frames': _0x262a71,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        }), _0x262a71 = this[_0x4afa7c(0x183e)][_0x4afa7c(0x1756)]('enemiesM', {
                            'start': 0x1,
                            'end': 0x5,
                            'zeroPad': 0x0,
                            'prefix': this[_0x4afa7c(0x94b)]['replace']('1.png', ''),
                            'suffix': '.png'
                        }), this[_0x4afa7c(0x669)]['anims'][_0x4afa7c(0x6a8)]({
                            'key': 'red',
                            'frames': _0x262a71,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        }), _0x262a71 = this[_0x4afa7c(0x183e)][_0x4afa7c(0x1756)]('enemiesM', {
                            'start': 0x1,
                            'end': 0x5,
                            'zeroPad': 0x0,
                            'prefix': this[_0x4afa7c(0x14b4)]['replace']('1.png', ''),
                            'suffix': '.png'
                        }), this[_0x4afa7c(0x183e)]['create']({
                            'key': 'idle_red',
                            'frames': _0x262a71,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        }), this['wingL'][_0x4afa7c(0x183e)]['play']('idle'), this['wingR'][_0x4afa7c(0x183e)][_0x4afa7c(0x902)]('idle'), this['eye']['anims']['play']('blue'), this[_0x4afa7c(0x187a)] = !0x0, this['isBlue'] = !0x0, this[_0x4afa7c(0x160d)] = _0x1a2dde[_0x4afa7c(0xd2c)]['Core']['scene']['add'][_0x4afa7c(0x105b)](0x0, 0x0, 'vfx', 'corridor_bg.png')[_0x4afa7c(0x183f)](!0x1)['setDepth'](-_0x1a2dde['default'][_0x4afa7c(0x1043)]['scene'][_0x4afa7c(0x12f9)][_0x4afa7c(0x140e)]), this['corridorLight'] = _0x1a2dde[_0x4afa7c(0xd2c)][_0x4afa7c(0x1043)][_0x4afa7c(0x6d2)]['add']['sprite'](0x0, 0x0, 'vfx', 'corridor_light.png')['setVisible'](!0x1)[_0x4afa7c(0xb4a)](-_0x1a2dde[_0x4afa7c(0xd2c)][_0x4afa7c(0x1043)][_0x4afa7c(0x6d2)]['renderer'][_0x4afa7c(0x140e)]);
                    } ['TurnBlue']() {
                        const _0x12076c = _0x595147;
                        this['isDead'] || (this[_0x12076c(0xe32)] = !0x0, this[_0x12076c(0xba3)] = !0x1, this[_0x12076c(0x80b)] = !0x1, this[_0x12076c(0x669)][_0x12076c(0x183e)]['play']('blue'), this['anims'][_0x12076c(0x902)]('idle'), this[_0x12076c(0x8a2)](1.2), _0x1a2dde[_0x12076c(0xd2c)][_0x12076c(0x1043)]['CommonVFXManager'][_0x12076c(0x17aa)]['emitParticleAt'](this['x'], this['y']));
                    } ['TurnRed']() {
                        const _0x5863a0 = _0x595147;
                        this[_0x5863a0(0xdae)] || (this[_0x5863a0(0xe32)] = !0x1, this[_0x5863a0(0xba3)] = !0x0, this[_0x5863a0(0x669)][_0x5863a0(0x183e)]['play']('red'), this['anims'][_0x5863a0(0x902)]('idle_red'), this['setScale'](1.2), _0x1a2dde[_0x5863a0(0xd2c)][_0x5863a0(0x1043)][_0x5863a0(0x5a6)][_0x5863a0(0x11d9)][_0x5863a0(0x108b)](this['x'], this['y']));
                    } ['OnRecycle']() {
                        const _0x353deb = _0x595147;
                        super[_0x353deb(0x5ce)](), this[_0x353deb(0x137b)](), this[_0x353deb(0xb93)][_0x353deb(0x35a)] = !0x0, this[_0x353deb(0xdfe)][_0x353deb(0x35a)] = !0x0, this[_0x353deb(0x669)]['visible'] = !0x0, this[_0x353deb(0xf8e)](0.5), this[_0x353deb(0xdfe)][_0x353deb(0xf8e)](-0.2, 0.5), this['wingL']['setOrigin'](1.2, 0.5), this['wingL']['setFlipX'](!0x0), this[_0x353deb(0x19b0)] = 0xffffff, this['wingL'][_0x353deb(0x3a8)] = this['wingR'][_0x353deb(0x3a8)] = this['eye'][_0x353deb(0x3a8)] = this[_0x353deb(0x3a8)], this['wingL'][_0x353deb(0x1721)] = this[_0x353deb(0xdfe)][_0x353deb(0x1721)] = this[_0x353deb(0x669)][_0x353deb(0x1721)] = this[_0x353deb(0x1721)], this['infiniteCorridorTime'] = 0x0;
                    } ['Update'](_0x3a4f3a = 0x0) {
                        const _0x534024 = _0x595147;
                        super[_0x534024(0xa9f)](_0x3a4f3a), this[_0x534024(0xdae)] || (this[_0x534024(0x137b)](), this[_0x534024(0x9b5)](0x0), this[_0x534024(0x669)]['setFlipX'](this['_currentDirection']['x'] < 0x0), this['infiniteCorridorTime'] += _0x3a4f3a, this[_0x534024(0x1549)] > this[_0x534024(0x1510)] && (this[_0x534024(0x1549)] = 0x0, this[_0x534024(0x261)] = !0x1, this['CastInfiniteCorridor']()), this['corridorBG']['x'] = this['x'], this[_0x534024(0x12d7)]['x'] = this['x'], this[_0x534024(0x160d)]['y'] = this['y'], this['corridorLight']['y'] = this['y']);
                    } ['UpdateSprites']() {
                        const _0x125be5 = _0x595147;
                        this[_0x125be5(0xb93)][_0x125be5(0x3a8)] = this[_0x125be5(0xdfe)]['scaleX'] = this['eye'][_0x125be5(0x3a8)] = this['scaleX'], this['wingL'][_0x125be5(0x1721)] = this[_0x125be5(0xdfe)][_0x125be5(0x1721)] = this[_0x125be5(0x669)][_0x125be5(0x1721)] = this['scaleY'], this['wingL']['x'] = this['wingR']['x'] = this['eye']['x'] = this['x'], this['wingL']['y'] = this['wingR']['y'] = this[_0x125be5(0x669)]['y'] = this['y'], this['setDepth'](0.5 * this['scene'][_0x125be5(0x12f9)][_0x125be5(0x140e)]), this['eye'][_0x125be5(0x16c6)] = this['depth'] + 0x1, this[_0x125be5(0xdfe)]['depth'] = this[_0x125be5(0x16c6)] - 0x1, this['wingL'][_0x125be5(0x16c6)] = this[_0x125be5(0x16c6)] - 0x1;
                    } ['Disappear']() {
                        const _0x2e0fe3 = _0x595147;
                        super[_0x2e0fe3(0xe00)](), this['wingL']['visible'] = !0x1, this[_0x2e0fe3(0xdfe)][_0x2e0fe3(0x35a)] = !0x1, this['eye'][_0x2e0fe3(0x35a)] = !0x1;
                    } ['Die']() {
                        const _0x1b4678 = _0x595147;
                        super[_0x1b4678(0x14f3)](), this[_0x1b4678(0x17c8)] = this[_0x1b4678(0x6d2)]['tweens'][_0x1b4678(0x18bd)]({
                            'targets': [this['wingL'], this[_0x1b4678(0xdfe)], this[_0x1b4678(0x669)]],
                            'scale': 0x0,
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x381391 = _0x1b4678;
                                this['wingL'][_0x381391(0x35a)] = !0x1, this[_0x381391(0xdfe)][_0x381391(0x35a)] = !0x1, this[_0x381391(0x669)]['visible'] = !0x1;
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x565532 = _0x595147;
                        super[_0x565532(0x14fb)](), this['wingL'][_0x565532(0x35a)] = !0x1, this[_0x565532(0xdfe)]['visible'] = !0x1, this[_0x565532(0x669)][_0x565532(0x35a)] = !0x1;
                    } ['CastInfiniteCorridor']() {
                        const _0x2c9963 = _0x595147;
                        var _0x46e5e7, _0x10989d, _0x517db4;
                        let _0x4afe03 = _0x1a2dde[_0x2c9963(0xd2c)][_0x2c9963(0x1043)][_0x2c9963(0x14d8)][_0x2c9963(0x49c)] ? 0x1 : 0.2,
                            _0x498326 = _0x1a2dde['default'][_0x2c9963(0x1043)][_0x2c9963(0x14d8)]['FlashingVFXEnabled'] ? 0.75 : 0x0;
                        this[_0x2c9963(0x160d)]['setVisible'](!0x0), this[_0x2c9963(0x12d7)][_0x2c9963(0x183f)](!0x0), this[_0x2c9963(0x160d)][_0x2c9963(0x8a2)](0x0), this[_0x2c9963(0x160d)][_0x2c9963(0xdab)](0x0), this[_0x2c9963(0x12d7)]['setScale'](0x0), this[_0x2c9963(0x12d7)]['setAlpha'](_0x498326), null === (_0x46e5e7 = this[_0x2c9963(0x9dd)]) || void 0x0 === _0x46e5e7 || _0x46e5e7[_0x2c9963(0x1a34)](), this[_0x2c9963(0x9dd)] = this['scene'][_0x2c9963(0x12a1)][_0x2c9963(0x18bd)]({
                            'targets': this['corridorBG'],
                            'scale': this[_0x2c9963(0x6d2)][_0x2c9963(0x12f9)][_0x2c9963(0x173c)] / 0x80,
                            'duration': 0x3e8,
                            'alpha': _0x4afe03,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut',
                            'onUpdate': () => {
                                const _0x4f86d9 = _0x2c9963;
                                if (!this['damageDone'] && new Phaser[(_0x4f86d9(0x10d2))]['Circle'](this['x'], this['y'], 0x40 * this['corridorBG'][_0x4f86d9(0x7cb)])['contains'](_0x1a2dde['default']['Core'][_0x4f86d9(0x10f6)]['x'], _0x1a2dde[_0x4f86d9(0xd2c)][_0x4f86d9(0x1043)]['Player']['y'])) {
                                    if (this['damageDone'] = !0x0, _0x1a2dde[_0x4f86d9(0xd2c)][_0x4f86d9(0x1043)][_0x4f86d9(0x10f6)][_0x4f86d9(0x44b)]) return !0x1;
                                    if (_0x1a2dde['default'][_0x4f86d9(0x1043)]['Player']['shields'] > 0x0) {
                                        _0x1a2dde[_0x4f86d9(0xd2c)][_0x4f86d9(0x1043)][_0x4f86d9(0x10f6)][_0x4f86d9(0x17bc)] -= 0x1;
                                        let _0xb1f887 = 0.5 * _0x1a2dde[_0x4f86d9(0xd2c)][_0x4f86d9(0x1043)][_0x4f86d9(0x10f6)]['hp'];
                                        return _0x1a2dde[_0x4f86d9(0xd2c)]['Core']['Player'][_0x4f86d9(0x404)](0xffffbb, _0x1a2dde['default'][_0x4f86d9(0x1043)][_0x4f86d9(0x10f6)]['shieldInvulTime'], !0x1), _0x1a2dde[_0x4f86d9(0xd2c)][_0x4f86d9(0x1043)][_0x4f86d9(0x6d2)]['events']['emit']('Player_LostShield', _0xb1f887), !0x1;
                                    }
                                    _0x1a2dde['default'][_0x4f86d9(0x1043)][_0x4f86d9(0x10f6)]['hp'] *= 0.5, _0x1a2dde['default'][_0x4f86d9(0x1043)]['Player'][_0x4f86d9(0x404)](), _0x1a2dde[_0x4f86d9(0xd2c)]['Core']['PlayerUI'][_0x4f86d9(0xa9f)]();
                                }
                            },
                            'onComplete': () => {
                                const _0x1ad0a1 = _0x2c9963;
                                this['corridorBG']['setVisible'](!0x1), this[_0x1ad0a1(0x12d7)]['setVisible'](!0x1);
                            }
                        }), _0x1a2dde[_0x2c9963(0xd2c)]['Sound'][_0x2c9963(0x7f6)](_0x3d98c6['default'][_0x2c9963(0x8bb)], {
                            'volume': 0.9,
                            'rate': 0x1,
                            'detune': 0x1f4
                        }, 0x190, 0x1), null === (_0x10989d = this[_0x2c9963(0x12f8)]) || void 0x0 === _0x10989d || _0x10989d['stop'](), this['ICangleTween'] = this[_0x2c9963(0x6d2)][_0x2c9963(0x12a1)][_0x2c9963(0x18bd)]({
                            'targets': this[_0x2c9963(0x160d)],
                            'angle': -0x5a0,
                            'duration': 0x7d0
                        }), null === (_0x517db4 = this['IClightTween']) || void 0x0 === _0x517db4 || _0x517db4[_0x2c9963(0x1a34)](), this['IClightTween'] = this[_0x2c9963(0x6d2)]['tweens']['add']({
                            'targets': this[_0x2c9963(0x12d7)],
                            'scale': this['scene'][_0x2c9963(0x12f9)]['width'] / 0x80,
                            'duration': 0x3e8,
                            'alpha': _0x4afe03,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        });
                    }
                }
                _0x3752c1['default'] = _0xc6dd2c;
            };
