// Module 0xbc52
// Args: _0x132087, _0x109a03, _0x1bae9b

export default (_0x132087, _0x109a03, _0x1bae9b) => {
                'use strict';
                const _0x517b6e = a0_0x6932;
                var _0x19099c = this && this['__importDefault'] || function(_0x12bf35) {
                    return _0x12bf35 && _0x12bf35['__esModule'] ? _0x12bf35 : {
                        'default': _0x12bf35
                    };
                };
                Object['defineProperty'](_0x109a03, '__esModule', {
                    'value': !0x0
                });
                const _0x4a0cd9 = _0x1bae9b(0x18304),
                    _0x2ace42 = _0x19099c(_0x1bae9b(0x15dd)),
                    _0x4bfa70 = _0x19099c(_0x1bae9b(0xdfbc)),
                    _0xb68dad = _0x19099c(_0x1bae9b(0x1fd7)),
                    _0x374d6a = _0x19099c(_0x1bae9b(0x54e3)),
                    _0x1c1e2b = _0x19099c(_0x1bae9b(0x5f07)),
                    _0x452e67 = _0x19099c(_0x1bae9b(0x869f));
                class _0x1aa078 extends _0x452e67['default'] {
                    constructor() {
                        const _0x268b06 = _0x517b6e;
                        super(...arguments), this['hasSecondAnim'] = !0x1, this[_0x268b06(0x1279)] = !0x1;
                    } ['MakeLevelOne']() {
                        const _0x18e79e = _0x517b6e;
                        super[_0x18e79e(0xf64)](), this[_0x18e79e(0x1279)] = !0x1, this[_0x18e79e(0x23d)] = !0x1, this['ArmorBonus'] = 0x2, this[_0x18e79e(0x189)] = 0.3, this[_0x18e79e(0x1513)] = 0.3, this[_0x18e79e(0x15e2)] = 0.4, this['MaxHpBonus'] = 0x64, this[_0x18e79e(0x1920)]();
                    } ['MakeMorphVFX']() {
                        const _0x299371 = _0x517b6e;
                        this[_0x299371(0x11aa)] || (this[_0x299371(0x11aa)] = this['scene'][_0x299371(0x18bd)][_0x299371(0x568)](this['x'], this['y'], 'vfx', 'blurredSharpStar.png')[_0x299371(0xdab)](0x0)['setScale'](0x0)[_0x299371(0x11c7)](_0x4a0cd9[_0x299371(0x10fc)][_0x299371(0x1811)])[_0x299371(0xb4a)](this[_0x299371(0x6d2)][_0x299371(0x12f9)]['height'])), this[_0x299371(0x8ee)] || (this[_0x299371(0x8ee)] = this['scene'][_0x299371(0x18bd)][_0x299371(0x568)](this['x'], this['y'], 'vfx', 'disc.png')['setAlpha'](0x0)[_0x299371(0x8a2)](0x0)['setBlendMode'](_0x4a0cd9['BlendModes']['ADD'])[_0x299371(0xb4a)](this['scene'][_0x299371(0x12f9)]['height'])), this['darkSprite'] || (this['darkSprite'] = this[_0x299371(0x6d2)]['add']['image'](this['x'], this['y'], 'vfx', 'blackDot.png')['setAlpha'](0x0)[_0x299371(0xf8e)](0x0)[_0x299371(0x8a2)](this['scene']['renderer'][_0x299371(0x173c)], this[_0x299371(0x6d2)][_0x299371(0x12f9)][_0x299371(0x140e)])[_0x299371(0xb4a)](this['scene'][_0x299371(0x12f9)]['height'] - 0x2)['setScrollFactor'](0x0)), this[_0x299371(0x794)] || (this['burstSprite'] = this['scene']['add'][_0x299371(0x105b)](0.5 * this['scene'][_0x299371(0x12f9)][_0x299371(0x173c)], 0.5 * this[_0x299371(0x6d2)][_0x299371(0x12f9)][_0x299371(0x140e)], 'vfx', 'Burst1.png')[_0x299371(0xdab)](0x0)[_0x299371(0x8a2)](0xa)['setBlendMode'](_0x4a0cd9['BlendModes']['NORMAL'])[_0x299371(0xb4a)](this[_0x299371(0x6d2)][_0x299371(0x12f9)]['height'] - 0x1)[_0x299371(0xd87)](0x0)['setTint'](0x220000, 0x880000, 0x22, 0x88));
                        const _0x35979e = this[_0x299371(0x183e)]['generateFrameNames']('vfx', {
                            'start': 0x1,
                            'end': 0x6,
                            'zeroPad': 0x0,
                            'prefix': 'Burst',
                            'suffix': '.png'
                        });
                        this['burstSprite']['anims']['create']({
                            'key': 'enter',
                            'frames': _0x35979e,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        });
                    } ['AfterFullInitialization']() {
                        const _0x1f7b81 = _0x517b6e;
                        super[_0x1f7b81(0x7ed)]();
                        let _0xd380f0 = _0x1c1e2b[_0x1f7b81(0xd2c)][_0x1f7b81(0x1043)]['HiddenWeapons'][_0x1f7b81(0x1e6)](_0x496651 => _0x496651[_0x1f7b81(0x14e)] === _0x374d6a[_0x1f7b81(0xd2c)][_0x1f7b81(0x1017)]);
                        _0xd380f0 && (_0xd380f0[_0x1f7b81(0x132d)](), _0xd380f0[_0x1f7b81(0x174e)] = !0x0);
                    } ['LevelUp']() {
                        const _0x317ffd = _0x517b6e;
                        super['LevelUp']();
                        let _0x82e755 = Math['floor'](this['level'] / 0xa),
                            _0x1f813f = _0x1c1e2b[_0x317ffd(0xd2c)]['Core'][_0x317ffd(0x164d)]['find'](_0x12841a => _0x12841a[_0x317ffd(0x14e)] === _0x374d6a['default'][_0x317ffd(0x1017)]);
                        _0x1f813f && _0x1f813f[_0x317ffd(0x5e3)] < _0x82e755 && _0x1f813f[_0x317ffd(0x5e3)] < 0x8 && _0x1f813f[_0x317ffd(0x2ab)]();
                    } ['OnWeaponMadeLevelOne'](_0x380b3c) {
                        const _0x1324d5 = _0x517b6e;
                        _0x380b3c === _0x374d6a[_0x1324d5(0xd2c)][_0x1324d5(0x1a82)] && this['Morph']();
                    } ['Morph']() {
                        const _0x2fa8af = _0x517b6e;
                        if (!this['isMorphed']) {
                            if (_0x1c1e2b[_0x2fa8af(0xd2c)][_0x2fa8af(0x1267)][_0x2fa8af(0x7f6)](_0xb68dad[_0x2fa8af(0xd2c)][_0x2fa8af(0x106b)], {
                                    'volume': 0x1,
                                    'rate': 0.5
                                }, 0x7d0, 0x1), _0x1c1e2b['default'][_0x2fa8af(0x1267)]['PlaySound'](_0xb68dad[_0x2fa8af(0xd2c)]['Bangu'], {
                                    'volume': 0x1
                                }, 0x7d0, 0x1), this['isMorphed'] = !0x0, this['PlaySparkle'](), this[_0x2fa8af(0x1093)][_0x2fa8af(0x2cf)]('power') ? this[_0x2fa8af(0x1093)][_0x2fa8af(0x31f)] += 0.01 : this[_0x2fa8af(0x1093)][_0x2fa8af(0x31f)] = 0.01, !this['hasSecondAnim']) {
                                let _0x53cb4c = _0x2ace42[_0x2fa8af(0xd2c)][_0x4bfa70[_0x2fa8af(0xd2c)]['MEGASYUUTO']][0x0];
                                const _0x4785e3 = this['anims'][_0x2fa8af(0x1756)](_0x53cb4c[_0x2fa8af(0xacb)], {
                                    'start': 0x1,
                                    'end': _0x53cb4c[_0x2fa8af(0x3ff)],
                                    'zeroPad': 0x2,
                                    'prefix': _0x53cb4c[_0x2fa8af(0x4f0)][_0x2fa8af(0xa0d)]('01.png', ''),
                                    'suffix': '.png'
                                });
                                this[_0x2fa8af(0x994)](_0x53cb4c['textureName'], _0x53cb4c[_0x2fa8af(0x4f0)]);
                                let _0x5ae457 = _0x53cb4c['walkFrameRate'] ? _0x53cb4c[_0x2fa8af(0xc43)] : 0x8;
                                this[_0x2fa8af(0x183e)][_0x2fa8af(0x6a8)]({
                                    'key': 'walk2',
                                    'frames': _0x4785e3,
                                    'frameRate': _0x5ae457,
                                    'repeat': -0x1
                                }), this[_0x2fa8af(0x23d)] = !0x0;
                            }
                            this[_0x2fa8af(0x183e)][_0x2fa8af(0x902)]('walk2'), this[_0x2fa8af(0x8d0)] += this[_0x2fa8af(0x101f)], this[_0x2fa8af(0x1702)] += this['AreaBonus'], this[_0x2fa8af(0x78e)] += this[_0x2fa8af(0x1513)], this['moveSpeed'] += this[_0x2fa8af(0x15e2)], this['maxHp'] += this['MaxHpBonus'], this[_0x2fa8af(0xf90)](0x64);
                        }
                    } ['PlaySparkle']() {
                        const _0x300f96 = _0x517b6e;
                        var _0x369736, _0x7c730, _0x142bfd;
                        this['burstSprite'][_0x300f96(0x183e)]['play']('enter'), this[_0x300f96(0x794)][_0x300f96(0xdab)](0x1), null === (_0x369736 = this[_0x300f96(0x9b6)]) || void 0x0 === _0x369736 || _0x369736['stop'](), this[_0x300f96(0x9b6)] = this[_0x300f96(0x6d2)][_0x300f96(0x12a1)][_0x300f96(0x18bd)]({
                            'targets': this['ringSprite'],
                            'scaleX': 0xa,
                            'scaleY': 0xa,
                            'alpha': 0.1,
                            'duration': 0xc8,
                            'onStart': () => {
                                const _0x135605 = _0x300f96;
                                this['ringSprite']['setScale'](0x0), this['ringSprite'][_0x135605(0xdab)](0x1);
                            }
                        }), null === (_0x7c730 = this[_0x300f96(0x906)]) || void 0x0 === _0x7c730 || _0x7c730['stop'](), this[_0x300f96(0x906)] = this[_0x300f96(0x6d2)][_0x300f96(0x12a1)][_0x300f96(0x18bd)]({
                            'targets': this['darkSprite'],
                            'alpha': 0.65,
                            'duration': 0x64,
                            'yoyo': !0x0,
                            'onStart': () => {
                                const _0x238ff9 = _0x300f96;
                                this[_0x238ff9(0x105e)]['setAlpha'](0x0);
                            }
                        }), null === (_0x142bfd = this[_0x300f96(0xa13)]) || void 0x0 === _0x142bfd || _0x142bfd[_0x300f96(0x1a34)](), this[_0x300f96(0xa13)] = this[_0x300f96(0x6d2)][_0x300f96(0x12a1)][_0x300f96(0x18bd)]({
                            'targets': this['sparkSprite'],
                            'scaleX': 0xa,
                            'scaleY': 0xa,
                            'alpha': 0.5,
                            'angle': 0xb4,
                            'duration': 0xc8,
                            'onStart': () => {
                                const _0x4dd7da = _0x300f96;
                                this[_0x4dd7da(0x11aa)][_0x4dd7da(0x8a2)](0x0), this['sparkSprite'][_0x4dd7da(0xdab)](0x1), this[_0x4dd7da(0x11aa)][_0x4dd7da(0x9b5)](0x0);
                            },
                            'onUpdate': () => {
                                const _0x467273 = _0x300f96;
                                this[_0x467273(0x11aa)]['x'] = this['x'], this['sparkSprite']['y'] = this['y'] - 0x14, this['ringSprite']['x'] = this['x'], this[_0x467273(0x8ee)]['y'] = this['y'] - 0x14;
                            },
                            'onComplete': () => {
                                const _0x4d11e8 = _0x300f96;
                                this[_0x4d11e8(0x8ee)]['setAlpha'](0x0), this[_0x4d11e8(0x11aa)][_0x4d11e8(0xdab)](0x0);
                            }
                        });
                    }
                }
                _0x109a03['default'] = _0x1aa078;
            };
