// Module 0x182a4
// Args: _0x58a6e7, _0x2975a6, _0x330a64

export default (_0x58a6e7, _0x2975a6, _0x330a64) => {
                'use strict';
                const _0x1a25d9 = a0_0x6932;
                var _0x25a23f = this && this['__importDefault'] || function(_0x1e1a8a) {
                    const _0x35c4e9 = a0_0x6932;
                    return _0x1e1a8a && _0x1e1a8a['__esModule'] ? _0x1e1a8a : {
                        'default': _0x1e1a8a
                    };
                };
                Object['defineProperty'](_0x2975a6, '__esModule', {
                    'value': !0x0
                });
                const _0x26bdd4 = _0x330a64(0x18304),
                    _0x2dcd5c = _0x25a23f(_0x330a64(0xc42e)),
                    _0x248dcf = _0x25a23f(_0x330a64(0x1fd7)),
                    _0x2d4946 = _0x25a23f(_0x330a64(0x54e3)),
                    _0x5def85 = _0x25a23f(_0x330a64(0x5f07)),
                    _0x298ff2 = _0x25a23f(_0x330a64(0x17995));
                class _0x209224 extends _0x298ff2['default'] {
                    constructor() {
                        const _0x26fc56 = a0_0x6932;
                        super(...arguments), this['hasSecondAnim'] = !0x1, this['finalThreshold'] = 0x2710, this['spinnnDelay'] = 0x3a98, this['inv_frontOffset'] = {
                            'x': 0x15,
                            'y': 0xa
                        }, this['inv_backOffset'] = {
                            'x': 0x4,
                            'y': 0x16
                        }, this['inv_headOffset'] = {
                            'x': -0x1a,
                            'y': -0x15
                        }, this['frontOffset'] = {
                            'x': 0x2c,
                            'y': 0xa
                        }, this['backOffset'] = {
                            'x': 0x3d,
                            'y': 0x16
                        }, this['headOffset'] = {
                            'x': 0x34,
                            'y': -0x15
                        }, this['AreArmsDetached'] = !0x1;
                    } ['Update'](_0x262588) {
                        const _0x1901ef = a0_0x6932;
                        if (super['Update'](_0x262588), !this['isMorphed']) return;
                        this['angle'] = 0x0, this['flipX'];
                        let _0x3665fd = this['x'] - 0x1f * this['scaleX'],
                            _0x4f9faf = this['y'] - 0x31 * this['scaleY'];
                        this['head']['setFlipX'](this['flipX']);
                        let _0x3a3bb6 = this['flipX'] ? this['inv_headOffset']['x'] : this['headOffset']['x'];
                        this['head']['x'] = _0x3665fd + _0x3a3bb6 * this['scaleX'], this['head']['y'] = _0x4f9faf + this['headOffset']['y'] * this['scaleY'], this['head']['depth'] = this['depth'] + 0x1;
                    } ['LevelUp']() {
                        const _0x3d9795 = _0x1a25d9;
                        if (super[_0x3d9795(0x2ab)](), this[_0x3d9795(0x5e3)] >= 0x50) {
                            if (_0x5def85[_0x3d9795(0xd2c)]['Core']['PlayerOptions'][_0x3d9795(0x1707)]['indexOf'](_0x2dcd5c[_0x3d9795(0xd2c)]['RELIC_MALACHITE']) > -0x1) return;
                            _0x5def85['default'][_0x3d9795(0x1043)]['PlayerOptions'][_0x3d9795(0x1481)][_0x3d9795(0x1303)](_0x2dcd5c[_0x3d9795(0xd2c)]['RELIC_MALACHITE']) > -0x1 && this[_0x3d9795(0x106b)]();
                        }
                    } ['MakeLevelOne']() {
                        const _0x7caf04 = _0x1a25d9;
                        super[_0x7caf04(0xf64)](), this['AreArmsDetached'] = !0x1, this[_0x7caf04(0x1279)] = !0x1, this[_0x7caf04(0x23d)] = !0x1, this[_0x7caf04(0x101f)] = 0x2, this['AmountBonus'] = 0x1, this[_0x7caf04(0x81d)] = 0x64, this['sparkSprite'] || (this['sparkSprite'] = this[_0x7caf04(0x6d2)]['add'][_0x7caf04(0x568)](this['x'], this['y'], 'vfx', 'blurredSharpStar.png')[_0x7caf04(0xdab)](0x0)['setScale'](0x0)[_0x7caf04(0x11c7)](_0x26bdd4[_0x7caf04(0x10fc)][_0x7caf04(0x1811)])[_0x7caf04(0xb4a)](this['scene'][_0x7caf04(0x12f9)][_0x7caf04(0x140e)])), this[_0x7caf04(0x8ee)] || (this['ringSprite'] = this['scene']['add'][_0x7caf04(0x568)](this['x'], this['y'], 'vfx', 'disc.png')['setAlpha'](0x0)[_0x7caf04(0x8a2)](0x0)['setBlendMode'](_0x26bdd4[_0x7caf04(0x10fc)][_0x7caf04(0x1811)])['setDepth'](this['scene']['renderer'][_0x7caf04(0x140e)])), this[_0x7caf04(0x105e)] || (this[_0x7caf04(0x105e)] = this[_0x7caf04(0x6d2)][_0x7caf04(0x18bd)]['image'](this['x'], this['y'], 'vfx', 'blackDot.png')[_0x7caf04(0xdab)](0x0)[_0x7caf04(0xf8e)](0x0)['setScale'](this[_0x7caf04(0x6d2)][_0x7caf04(0x12f9)][_0x7caf04(0x173c)], this['scene'][_0x7caf04(0x12f9)]['height'])['setDepth'](this['scene'][_0x7caf04(0x12f9)][_0x7caf04(0x140e)] - 0x1)['setScrollFactor'](0x0)), this['burstSprite'] || (this['burstSprite'] = this[_0x7caf04(0x6d2)][_0x7caf04(0x18bd)][_0x7caf04(0x105b)](0.5 * this['scene'][_0x7caf04(0x12f9)][_0x7caf04(0x173c)], 0.5 * this[_0x7caf04(0x6d2)][_0x7caf04(0x12f9)]['height'], 'vfx', 'Burst1.png')[_0x7caf04(0xdab)](0x0)[_0x7caf04(0x8a2)](0xa)[_0x7caf04(0x11c7)](_0x26bdd4[_0x7caf04(0x10fc)]['ADD'])[_0x7caf04(0xb4a)](this[_0x7caf04(0x6d2)][_0x7caf04(0x12f9)][_0x7caf04(0x140e)])[_0x7caf04(0xd87)](0x0)['setTint'](0xff00, 0xff, 0xffff00, 0xff0000));
                        const _0x3f3afa = this[_0x7caf04(0x183e)][_0x7caf04(0x1756)]('vfx', {
                            'start': 0x1,
                            'end': 0x6,
                            'zeroPad': 0x0,
                            'prefix': 'Burst',
                            'suffix': '.png'
                        });
                        this[_0x7caf04(0x794)]['anims'][_0x7caf04(0x6a8)]({
                            'key': 'enter',
                            'frames': _0x3f3afa,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        });
                    } ['MakeBigSkeleton']() {
                        const _0x1d3c79 = _0x1a25d9;
                        this[_0x1d3c79(0x949)] || (this[_0x1d3c79(0x949)] = this[_0x1d3c79(0x6d2)][_0x1d3c79(0x18bd)][_0x1d3c79(0x105b)](0x0, 0x0, 'characters', 'Gash_head_i01.png')), this['head']['setOrigin'](0x0, 0x0);
                        const _0x1980e9 = this[_0x1d3c79(0x183e)]['generateFrameNames']('characters', {
                            'start': 0x1,
                            'end': 0x5,
                            'zeroPad': 0x2,
                            'prefix': 'Gash_head_i',
                            'suffix': '.png'
                        });
                        this[_0x1d3c79(0x949)][_0x1d3c79(0x183e)]['create']({
                            'key': 'idle',
                            'frames': _0x1980e9,
                            'frameRate': 0x18,
                            'repeat': -0x1
                        }), this['head'][_0x1d3c79(0x183e)][_0x1d3c79(0x902)]('idle');
                    } ['Morph']() {
                        const _0x6c1e72 = _0x1a25d9;
                        if (this['isMorphed']) return;
                        this[_0x6c1e72(0x125f)] = _0x5def85[_0x6c1e72(0xd2c)]['Core'][_0x6c1e72(0x1961)](_0x2d4946[_0x6c1e72(0xd2c)]['BONE2']), this['boneWeapon'] = _0x5def85[_0x6c1e72(0xd2c)]['Core']['Weapons']['find'](_0x185622 => _0x185622[_0x6c1e72(0x14e)] === _0x2d4946['default']['BONE']), this['body'][_0x6c1e72(0x7b8)](0x10, 0x20), _0x5def85['default'][_0x6c1e72(0x1267)]['PlaySound'](_0x248dcf[_0x6c1e72(0xd2c)][_0x6c1e72(0x106b)], {
                            'volume': 0x1,
                            'rate': 0.5
                        }, 0x7d0, 0x1), this[_0x6c1e72(0x4e6)](), this['MakeBigSkeleton'](), this[_0x6c1e72(0x1279)] = !0x0, this['anims'][_0x6c1e72(0x1a34)]();
                        const _0x35840b = this[_0x6c1e72(0x183e)]['generateFrameNames']('characters', {
                            'start': 0x1,
                            'end': 0x1,
                            'zeroPad': 0x0,
                            'prefix': 'Gash_body_i0',
                            'suffix': '.png'
                        });
                        this[_0x6c1e72(0x994)]('characters', 'Gash_body_i01.png'), this['anims'][_0x6c1e72(0x6a8)]({
                            'key': 'walk2',
                            'frames': _0x35840b,
                            'frameRate': 0x1,
                            'repeat': -0x1
                        }), this['anims'][_0x6c1e72(0x902)]('walk2'), this[_0x6c1e72(0x104f)](0x1), this[_0x6c1e72(0x9b8)] += this[_0x6c1e72(0x14cc)], this[_0x6c1e72(0x8d0)] += this[_0x6c1e72(0x101f)], this[_0x6c1e72(0xd2e)] += this[_0x6c1e72(0x81d)], this['hp'] = this[_0x6c1e72(0xd2e)];
                    } ['PlaySparkle']() {
                        const _0x3629b0 = _0x1a25d9;
                        var _0x30b558, _0x29eca1, _0x5df2bd;
                        this[_0x3629b0(0x794)][_0x3629b0(0x183e)][_0x3629b0(0x902)]('enter'), this['burstSprite']['setAlpha'](0x1), null === (_0x30b558 = this[_0x3629b0(0x9b6)]) || void 0x0 === _0x30b558 || _0x30b558['stop'](), this[_0x3629b0(0x9b6)] = this['scene'][_0x3629b0(0x12a1)][_0x3629b0(0x18bd)]({
                            'targets': this[_0x3629b0(0x8ee)],
                            'scaleX': 0xa,
                            'scaleY': 0xa,
                            'alpha': 0.1,
                            'duration': 0xc8,
                            'onStart': () => {
                                const _0xc07d0b = _0x3629b0;
                                this[_0xc07d0b(0x8ee)][_0xc07d0b(0x8a2)](0x0), this['ringSprite']['setAlpha'](0x1);
                            }
                        }), null === (_0x29eca1 = this[_0x3629b0(0x906)]) || void 0x0 === _0x29eca1 || _0x29eca1['stop'](), this[_0x3629b0(0x906)] = this['scene'][_0x3629b0(0x12a1)]['add']({
                            'targets': this[_0x3629b0(0x105e)],
                            'alpha': 0.65,
                            'duration': 0x64,
                            'yoyo': !0x0,
                            'onStart': () => {
                                const _0x185c21 = _0x3629b0;
                                this['darkSprite'][_0x185c21(0xdab)](0x0);
                            }
                        }), null === (_0x5df2bd = this[_0x3629b0(0xa13)]) || void 0x0 === _0x5df2bd || _0x5df2bd[_0x3629b0(0x1a34)](), this['sparkTween'] = this['scene'][_0x3629b0(0x12a1)][_0x3629b0(0x18bd)]({
                            'targets': this[_0x3629b0(0x11aa)],
                            'scaleX': 0xa,
                            'scaleY': 0xa,
                            'alpha': 0.5,
                            'angle': 0xb4,
                            'duration': 0xc8,
                            'onStart': () => {
                                const _0x20e718 = _0x3629b0;
                                this[_0x20e718(0x11aa)][_0x20e718(0x8a2)](0x0), this[_0x20e718(0x11aa)][_0x20e718(0xdab)](0x1), this['sparkSprite'][_0x20e718(0x9b5)](0x0);
                            },
                            'onUpdate': () => {
                                const _0x4a0395 = _0x3629b0;
                                this[_0x4a0395(0x11aa)]['x'] = this['x'], this['sparkSprite']['y'] = this['y'] - 0x14, this['ringSprite']['x'] = this['x'], this['ringSprite']['y'] = this['y'] - 0x14;
                            },
                            'onComplete': () => {
                                const _0x5b9b5a = _0x3629b0;
                                this['ringSprite'][_0x5b9b5a(0xdab)](0x0), this['sparkSprite'][_0x5b9b5a(0xdab)](0x0);
                            }
                        });
                    }
                }
                _0x2975a6['default'] = _0x209224;
            };
