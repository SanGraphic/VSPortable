// Module 0x8fbf
// Args: _0xaaa59, _0x1767de, _0x584dcc

export default (_0xaaa59, _0x1767de, _0x584dcc) => {
                'use strict';
                const _0x3b19dc = a0_0x6932;
                var _0x502eaa = this && this['__importDefault'] || function(_0x4e16a8) {
                    const _0x45139c = a0_0x6932;
                    return _0x4e16a8 && _0x4e16a8['__esModule'] ? _0x4e16a8 : {
                        'default': _0x4e16a8
                    };
                };
                Object['defineProperty'](_0x1767de, '__esModule', {
                    'value': !0x0
                });
                const _0x1549c2 = _0x502eaa(_0x584dcc(0x5f07)),
                    _0x144284 = _0x584dcc(0x18304),
                    _0x2284e0 = _0x502eaa(_0x584dcc(0x1fd7));
                class _0x406687 extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0x2da841, _0x876195, _0x7777dc) {
                        const _0x46cd64 = _0x3b19dc;
                        super(_0x2da841[_0x46cd64(0x6d2)], _0x876195, _0x7777dc, 'vfx', '_OPBubble.png'), this[_0x46cd64(0x177d)] = !0x1, this['isTeleportOnCull'] = !0x1, this['damage'] = 0x1, this['duration'] = 0xfa, this[_0x46cd64(0x1121)] = 0x1f4, this['Explo1DUration'] = 0x1f4, this['Explo2DUration'] = 0x64, this['Explo3DUration'] = 0xc8, this[_0x46cd64(0xc82)] = _0x2da841, this['setVisible'](!0x1)['setAlpha'](0.2), this['GroundFx'] = this['scene']['add'][_0x46cd64(0x4f6)](0x0, 0x0, 0x1, 0xff0000)[_0x46cd64(0xf8e)](0.5)[_0x46cd64(0xdab)](0x0)['setVisible'](!0x1)['setBlendMode'](_0x144284[_0x46cd64(0x10fc)]['ADD']), this[_0x46cd64(0xe6e)] = new Phaser['Geom']['Circle'](0x0, 0x0, 0x1), this['SnakeSprite'] = _0x1549c2['default'][_0x46cd64(0x1043)][_0x46cd64(0x6d2)]['add']['sprite'](0x0, 0x0, 'vfx', 'Ophion0000.png')[_0x46cd64(0x183f)](!0x1);
                        let _0x59d0f9 = this['SnakeSprite']['anims'][_0x46cd64(0x1756)]('vfx', {
                            'start': 0x0,
                            'end': 0x1f,
                            'zeroPad': 0x4,
                            'prefix': 'Ophion',
                            'suffix': '.png'
                        });
                        this['SnakeSprite'][_0x46cd64(0x183e)][_0x46cd64(0x6a8)]({
                            'key': 'loop',
                            'frames': _0x59d0f9,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), this[_0x46cd64(0xc97)][_0x46cd64(0x183e)]['play']('loop');
                    } ['OnTeleportOnCull']() {} ['SetExplosionSize'](_0x295226, _0x25cb8b, _0x3a520c) {
                        const _0x1e85cc = _0x3b19dc;
                        this[_0x1e85cc(0x919)]['x'] = this['x'] = this[_0x1e85cc(0xe6e)]['x'] = _0x295226, this[_0x1e85cc(0x919)]['y'] = this['y'] = this[_0x1e85cc(0xe6e)]['y'] = _0x25cb8b, this[_0x1e85cc(0x919)]['radius'] = this['collider']['radius'] = _0x3a520c;
                    } ['SetExplosionDamage'](_0x3d19c6, _0x59df73, _0x2eebda) {
                        const _0x4b8590 = _0x3b19dc;
                        this[_0x4b8590(0x1133)] = _0x3d19c6, this['duration'] = _0x59df73, this[_0x4b8590(0x1121)] = _0x2eebda;
                    } ['OnRecycle']() {
                        const _0x3123ea = _0x3b19dc;
                        this[_0x3123ea(0x919)]['setScale'](0x1), this[_0x3123ea(0x919)][_0x3123ea(0xf8e)](0.5), this[_0x3123ea(0x8a2)](0x0), this[_0x3123ea(0xc97)][_0x3123ea(0x8a2)](0x0), this['GroundFx'][_0x3123ea(0x16c6)] = 0x1, this['activateDamage'] = !0x1, this[_0x3123ea(0x2e9)] = !0x1, _0x1549c2['default'][_0x3123ea(0x1043)][_0x3123ea(0x6d2)][_0x3123ea(0x915)][_0x3123ea(0x17fb)](this[_0x3123ea(0x8b9)]), this[_0x3123ea(0x8b9)] = _0x1549c2[_0x3123ea(0xd2c)][_0x3123ea(0x1043)]['scene'][_0x3123ea(0x915)]['addEvent']({
                            'delay': this[_0x3123ea(0x1121)],
                            'loop': !0x0,
                            'callback': () => {
                                this['hasHit'] = !0x1;
                            }
                        }), this[_0x3123ea(0x6d2)][_0x3123ea(0x12a1)][_0x3123ea(0x18bd)]({
                            'targets': this[_0x3123ea(0x919)],
                            'alpha': 0.5,
                            'yoyo': !0x0,
                            'repeat': 0x2,
                            'duration': 0x12c,
                            'onStart': () => {
                                this['GroundFx']['setVisible'](!0x0);
                            },
                            'onComplete': () => {
                                const _0xb877f7 = _0x3123ea;
                                this[_0xb877f7(0x69d)]();
                            }
                        }), this['despawnTimer'] && (this[_0x3123ea(0x1581)][_0x3123ea(0x1a34)](), this[_0x3123ea(0x1581)] = null), _0x1549c2[_0x3123ea(0xd2c)][_0x3123ea(0x1267)][_0x3123ea(0x7f6)](_0x2284e0['default'][_0x3123ea(0x6cf)], {
                            'volume': 0.9,
                            'detune': 0x1f4 * Math['random'](),
                            'rate': 0x1
                        }, 0x96, 0x2);
                    } ['Explode']() {
                        const _0x2ed45a = _0x3b19dc;
                        var _0x590a44, _0x5e884a, _0x959c19;
                        _0x1549c2['default']['Sound'][_0x2ed45a(0x7f6)](_0x2284e0[_0x2ed45a(0xd2c)]['Explosion'], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math['random']() - 0.5)
                        }, 0x96, 0x3), this['setVisible'](!0x0), this[_0x2ed45a(0xc97)][_0x2ed45a(0x183f)](!0x0), this['SnakeSprite']['x'] = this['x'], this['SnakeSprite']['y'] = this['y'], null === (_0x590a44 = this[_0x2ed45a(0x51f)]) || void 0x0 === _0x590a44 || _0x590a44[_0x2ed45a(0x1a34)](), this[_0x2ed45a(0x51f)] = this[_0x2ed45a(0x6d2)][_0x2ed45a(0x12a1)][_0x2ed45a(0x18bd)]({
                            'targets': this['SnakeSprite'],
                            'scale': 0x1,
                            'alpha': 0.65,
                            'duration': this['Explo1DUration'],
                            'onStart': () => {
                                const _0x26e057 = _0x2ed45a;
                                this[_0x26e057(0xc97)][_0x26e057(0xdab)](0x0), this[_0x26e057(0xc97)][_0x26e057(0x8a2)](0x0);
                            }
                        }), null === (_0x5e884a = this[_0x2ed45a(0xa56)]) || void 0x0 === _0x5e884a || _0x5e884a[_0x2ed45a(0x1a34)](), null === (_0x959c19 = this[_0x2ed45a(0x11cc)]) || void 0x0 === _0x959c19 || _0x959c19['stop'](), this[_0x2ed45a(0xa56)] = this[_0x2ed45a(0x6d2)][_0x2ed45a(0x12a1)]['add']({
                            'targets': this,
                            'scale': 0x2,
                            'alpha': 0.65,
                            'duration': this[_0x2ed45a(0x1a63)],
                            'onStart': () => {
                                const _0x5e2577 = _0x2ed45a;
                                this[_0x5e2577(0x8a2)](0x0);
                            },
                            'onComplete': () => {
                                const _0x5d11b7 = _0x2ed45a;
                                this[_0x5d11b7(0x1a20)] = !0x0, this[_0x5d11b7(0x11cc)] = this[_0x5d11b7(0x6d2)][_0x5d11b7(0x12a1)][_0x5d11b7(0x18bd)]({
                                    'targets': this,
                                    'scale': 0.9,
                                    'duration': 0x64,
                                    'yoyo': !0x0,
                                    'repeat': -0x1
                                });
                            }
                        }), this['despawnTimer'] = this[_0x2ed45a(0x6d2)]['tweens'][_0x2ed45a(0x18bd)]({
                            'targets': this['GroundFx'],
                            'nothing': 0x1,
                            'duration': this['duration'],
                            'onStart': () => {},
                            'onComplete': () => {
                                const _0x310d47 = _0x2ed45a;
                                this[_0x310d47(0x198f)]();
                            }
                        });
                    } ['Implode']() {
                        const _0x58b0bd = _0x3b19dc;
                        var _0x4e2d6a;
                        null === (_0x4e2d6a = this['ImplosionTween']) || void 0x0 === _0x4e2d6a || _0x4e2d6a[_0x58b0bd(0x1a34)](), this['ImplosionTween'] = this[_0x58b0bd(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'scale': 0x0,
                            'alpha': 0x1,
                            'duration': this[_0x58b0bd(0xd6e)],
                            'onStart': () => {},
                            'onComplete': () => {
                                const _0x16e319 = _0x58b0bd;
                                this[_0x16e319(0x159b)]();
                            }
                        });
                    } ['Explode2']() {
                        const _0x2a893e = _0x3b19dc;
                        var _0x4903d2, _0x134964, _0x5d39fc, _0x4ccb3e;
                        _0x1549c2[_0x2a893e(0xd2c)]['Sound']['PlaySound'](_0x2284e0[_0x2a893e(0xd2c)]['Explosion'], {
                            'volume': 0.5,
                            'detune': 0x1f4 * Math[_0x2a893e(0x9ad)]()
                        }, 0x96, 0x3), null === (_0x4903d2 = this[_0x2a893e(0x51f)]) || void 0x0 === _0x4903d2 || _0x4903d2[_0x2a893e(0x1a34)](), null === (_0x134964 = this[_0x2a893e(0xa56)]) || void 0x0 === _0x134964 || _0x134964[_0x2a893e(0x1a34)](), null === (_0x5d39fc = this[_0x2a893e(0x11cc)]) || void 0x0 === _0x5d39fc || _0x5d39fc['stop'](), null === (_0x4ccb3e = this[_0x2a893e(0x143d)]) || void 0x0 === _0x4ccb3e || _0x4ccb3e[_0x2a893e(0x1a34)](), this['ExplosionTween'] = this[_0x2a893e(0x6d2)][_0x2a893e(0x12a1)]['add']({
                            'targets': [this, this[_0x2a893e(0xc97)]],
                            'scale': 0x4,
                            'alpha': 0x0,
                            'duration': this[_0x2a893e(0xd02)],
                            'onStart': () => {
                                const _0xc08a80 = _0x2a893e;
                                this[_0xc08a80(0xc97)][_0xc08a80(0xdab)](0x1);
                            },
                            'onComplete': () => {
                                const _0x3b827e = _0x2a893e;
                                this[_0x3b827e(0x1a20)] = !0x1;
                            }
                        }), this[_0x2a893e(0x6d2)][_0x2a893e(0x12a1)]['add']({
                            'targets': this,
                            'scale': 0x4,
                            'alpha': 0x1,
                            'duration': this[_0x2a893e(0xd02)],
                            'onStart': () => {
                                const _0x1fb365 = _0x2a893e;
                                this[_0x1fb365(0xdab)](0x0);
                            },
                            'onComplete': () => {
                                const _0x244e33 = _0x2a893e;
                                this[_0x244e33(0xdab)](0x0);
                            }
                        }), this[_0x2a893e(0x6d2)]['tweens'][_0x2a893e(0x18bd)]({
                            'delay': this['Explo3DUration'],
                            'targets': this,
                            'alpha': 0x0,
                            'duration': this['Explo3DUration'],
                            'onStart': () => {
                                this['setAlpha'](0x0);
                            },
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x3ef332 = _0x3b19dc;
                        this[_0x3ef332(0x111e)](!0x1), this[_0x3ef332(0xc82)]['Return'](this), this[_0x3ef332(0x1a20)] = !0x1, this[_0x3ef332(0x1581)] && (this['despawnTimer']['stop'](), this[_0x3ef332(0x1581)] = null), _0x1549c2[_0x3ef332(0xd2c)]['Core'][_0x3ef332(0x6d2)][_0x3ef332(0x915)][_0x3ef332(0x17fb)](this['HitboxTimer']), this[_0x3ef332(0x919)][_0x3ef332(0x183f)](!0x1), this[_0x3ef332(0x183f)](!0x1), this[_0x3ef332(0xc97)][_0x3ef332(0x183f)](!0x1);
                    } ['Init'](_0x5e78ee = -0x3e8, _0x412105 = -0x3e8) {
                        const _0x1cc22a = _0x3b19dc;
                        this[_0x1cc22a(0x726)](_0x5e78ee, _0x412105), this['OnRecycle']();
                    } ['die']() {} ['Update'](_0x3cf860 = 0x0) {
                        const _0x31748b = _0x3b19dc;
                        this['hasHit'] || this[_0x31748b(0x1a20)] && (this['collider']['x'] = this['x'], this['collider']['y'] = this['y'], this[_0x31748b(0xe6e)]['contains'](_0x1549c2['default'][_0x31748b(0x1043)]['Player']['x'], _0x1549c2[_0x31748b(0xd2c)]['Core'][_0x31748b(0x10f6)]['y']) && (this['hasHit'] = !0x0, _0x1549c2[_0x31748b(0xd2c)][_0x31748b(0x1043)][_0x31748b(0x10f6)][_0x31748b(0x1112)](this['damage'])));
                    }
                }
                _0x1767de['default'] = _0x406687;
            };
