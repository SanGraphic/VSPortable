// Module 0x37ec
// Args: _0x22dddf, _0x3a4652, _0x44d92c

export default (_0x22dddf, _0x3a4652, _0x44d92c) => {
                'use strict';
                const _0x51f78d = a0_0x6932;
                var _0x167c59 = this && this['__importDefault'] || function(_0x40df53) {
                    const _0x5d951d = _0x51f78d;
                    return _0x40df53 && _0x40df53[_0x5d951d(0x16f1)] ? _0x40df53 : {
                        'default': _0x40df53
                    };
                };
                Object['defineProperty'](_0x3a4652, '__esModule', {
                    'value': !0x0
                }), _0x3a4652['W_BloodAstronomia'] = void 0x0;
                const _0x40fb13 = _0x44d92c(0x18304),
                    _0x345fda = _0x167c59(_0x44d92c(0x54e3)),
                    _0x4e1ca7 = _0x167c59(_0x44d92c(0x5f07)),
                    _0x187b2b = _0x167c59(_0x44d92c(0x4a9d)),
                    _0x3aff6b = _0x167c59(_0x44d92c(0x7cb4)),
                    _0x46aba9 = _0x167c59(_0x44d92c(0xe49a));
                class _0x58042b extends _0x46aba9['default'] {
                    constructor(_0x872e8) {
                        const _0x1958d4 = _0x51f78d;
                        super(_0x872e8), this['imagePixelSize'] = 0x10, this['totalTime'] = 0x0, this[_0x1958d4(0x568)] = _0x4e1ca7[_0x1958d4(0xd2c)]['Core'][_0x1958d4(0x6d2)][_0x1958d4(0x18bd)][_0x1958d4(0x568)](0x0, 0x0, 'vfx', 'Rings3.png'), this[_0x1958d4(0x568)][_0x1958d4(0x11c7)](_0x40fb13['BlendModes']['ADD']), this[_0x1958d4(0x568)][_0x1958d4(0xdab)](0.6), this['image']['setTint'](0xff0000), this[_0x1958d4(0x568)][_0x1958d4(0xf01)](_0x4e1ca7[_0x1958d4(0xd2c)][_0x1958d4(0x1043)][_0x1958d4(0x17fc)])[_0x1958d4(0x8a2)](this[_0x1958d4(0x5f5)] / this[_0x1958d4(0x512)]), this[_0x1958d4(0x11d1)] = _0x4e1ca7[_0x1958d4(0xd2c)][_0x1958d4(0x1043)][_0x1958d4(0x6d2)][_0x1958d4(0x18bd)][_0x1958d4(0x99a)]({
                            'targets': this[_0x1958d4(0x568)],
                            'alpha': 0.3,
                            'loop': !0x0,
                            'yoyo': !0x0,
                            'loopDelay': 0x64,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'repeat': -0x1
                        }), this[_0x1958d4(0x788)] = _0x4e1ca7[_0x1958d4(0xd2c)]['Core'][_0x1958d4(0x6d2)][_0x1958d4(0x18bd)]['tween']({
                            'targets': this[_0x1958d4(0x568)],
                            'angle': -0x168,
                            'loop': !0x0,
                            'duration': 0x1770,
                            'ease': 'Linear',
                            'repeat': -0x1
                        });
                    }
                    get['PPower']() {
                        const _0x125f75 = _0x51f78d;
                        return this['power'] * _0x4e1ca7[_0x125f75(0xd2c)]['Core'][_0x125f75(0x10f6)][_0x125f75(0x9b8)];
                    }
                    get['PAmount']() {
                        return 0x1;
                    }
                    get['PArea']() {
                        const _0xc8f541 = _0x51f78d;
                        return _0x4e1ca7[_0xc8f541(0xd2c)][_0xc8f541(0x1043)]['Magnet'][_0xc8f541(0x161a)];
                    } ['Fire']() {
                        const _0x580c4f = _0x51f78d;
                        return this['image']['setScale'](this[_0x580c4f(0x5f5)] / this['imagePixelSize']), super['Fire']();
                    } ['Update'](_0x3ee7fa) {
                        const _0x2cb8e1 = _0x51f78d;
                        super[_0x2cb8e1(0xa9f)](_0x3ee7fa), this['image']['copyPosition'](_0x4e1ca7['default'][_0x2cb8e1(0x1043)][_0x2cb8e1(0x17fc)]);
                    } ['OnStart']() {
                        const _0x1aa34e = _0x51f78d;
                        this['ResetFiringTimer'](), this[_0x1aa34e(0x439)] = new _0x187b2b['default'](_0x4e1ca7[_0x1aa34e(0xd2c)][_0x1aa34e(0x1043)][_0x1aa34e(0x6d2)], _0x345fda[_0x1aa34e(0xd2c)][_0x1aa34e(0x1a0a)]), this[_0x1aa34e(0xd6a)] = new _0x187b2b['default'](_0x4e1ca7['default']['Core'][_0x1aa34e(0x6d2)], _0x345fda[_0x1aa34e(0xd2c)][_0x1aa34e(0x530)]), this['PentagramPool'] = new _0x187b2b[(_0x1aa34e(0xd2c))](_0x4e1ca7['default'][_0x1aa34e(0x1043)]['scene'], _0x345fda[_0x1aa34e(0xd2c)][_0x1aa34e(0x1142)]), this['LancetPool'] = new _0x187b2b['default'](_0x4e1ca7['default'][_0x1aa34e(0x1043)][_0x1aa34e(0x6d2)], _0x345fda['default']['BLOOD_LANCET']), this['LaurelPool'] = new _0x187b2b[(_0x1aa34e(0xd2c))](_0x4e1ca7['default'][_0x1aa34e(0x1043)][_0x1aa34e(0x6d2)], _0x345fda['default'][_0x1aa34e(0x768)]), this['moonExplosionPool'] = new _0x3aff6b[(_0x1aa34e(0xd2c))](_0x4e1ca7['default'][_0x1aa34e(0x1043)]['scene']), _0x4e1ca7[_0x1aa34e(0xd2c)]['Core'][_0x1aa34e(0x6d2)]['physics']['add']['overlap'](this[_0x1aa34e(0xc82)], _0x4e1ca7[_0x1aa34e(0xd2c)][_0x1aa34e(0x1043)][_0x1aa34e(0x1a91)], this[_0x1aa34e(0xd06)]['bind'](this)), _0x4e1ca7['default'][_0x1aa34e(0x1043)][_0x1aa34e(0x6d2)][_0x1aa34e(0x1585)]['add']['overlap'](this['pool'], _0x4e1ca7['default']['Core']['Destructibles'], this['onBulletOverlapsDestuctible'][_0x1aa34e(0xf7e)](this)), _0x4e1ca7[_0x1aa34e(0xd2c)][_0x1aa34e(0x1043)]['scene']['physics'][_0x1aa34e(0x18bd)]['overlap'](this[_0x1aa34e(0x439)], _0x4e1ca7[_0x1aa34e(0xd2c)]['Core'][_0x1aa34e(0x1a91)], this['onGarlicOverlapsEnemy']['bind'](this)), _0x4e1ca7['default'][_0x1aa34e(0x1043)][_0x1aa34e(0x6d2)][_0x1aa34e(0x1585)]['add'][_0x1aa34e(0x13d7)](this[_0x1aa34e(0xd6a)], _0x4e1ca7[_0x1aa34e(0xd2c)][_0x1aa34e(0x1043)][_0x1aa34e(0x1a91)], this['onSongOverlapsEnemy'][_0x1aa34e(0xf7e)](this)), _0x4e1ca7['default'][_0x1aa34e(0x1043)][_0x1aa34e(0x6d2)]['physics'][_0x1aa34e(0x18bd)][_0x1aa34e(0x13d7)](this[_0x1aa34e(0x690)], _0x4e1ca7['default'][_0x1aa34e(0x1043)][_0x1aa34e(0x1a91)], this['onPentagramOverlapsEnemy'][_0x1aa34e(0xf7e)](this)), _0x4e1ca7[_0x1aa34e(0xd2c)][_0x1aa34e(0x1043)][_0x1aa34e(0x6d2)][_0x1aa34e(0x1585)][_0x1aa34e(0x18bd)][_0x1aa34e(0x13d7)](this[_0x1aa34e(0x723)], _0x4e1ca7[_0x1aa34e(0xd2c)][_0x1aa34e(0x1043)]['Enemies'], this[_0x1aa34e(0x11e6)][_0x1aa34e(0xf7e)](this)), _0x4e1ca7['default']['Core']['scene'][_0x1aa34e(0x1585)][_0x1aa34e(0x18bd)]['overlap'](this['LaurelPool'], _0x4e1ca7['default']['Core']['Enemies'], this['onLaurelOverlapsEnemy'][_0x1aa34e(0xf7e)](this));
                    } ['onGarlicOverlapsEnemy'](_0x1d9e02, _0x19de35) {
                        const _0x1869a4 = _0x51f78d;
                        var _0x1b5b8b = _0x19de35;
                        if (!_0x1b5b8b['isDead'] && !_0x1d9e02[_0x1869a4(0x1738)](_0x1b5b8b)) {
                            let _0x2f5962 = this['Garlic']['PPower'];
                            _0x1b5b8b['GetDamaged'](_0x2f5962, this['hitVFX'], this[_0x1869a4(0x1992)], this['bulletType']), this[_0x1869a4(0xb3d)] += _0x2f5962;
                        }
                    } ['onSongOverlapsEnemy'](_0x20d12a, _0x8ea87) {
                        const _0x9bab06 = _0x51f78d;
                        var _0x1e7866 = _0x8ea87;
                        if (!_0x1e7866[_0x9bab06(0xdae)]) {
                            if (!_0x20d12a['HasAlreadyHitObject'](_0x1e7866)) {
                                let _0xc345e2 = this[_0x9bab06(0x1d4)]['PPower'];
                                _0x1e7866[_0x9bab06(0x1112)](_0xc345e2, this['hitVFX'], this[_0x9bab06(0x1992)], this[_0x9bab06(0x14e)]), this[_0x9bab06(0xb3d)] += _0xc345e2;
                            }
                            _0x20d12a[_0x9bab06(0xd14)] && _0x20d12a['explode'](_0x1e7866['x'], _0x1e7866['y']);
                        }
                    } ['onPentagramOverlapsEnemy'](_0x3f5872, _0xd42b8a) {
                        const _0x22e6a1 = _0x51f78d;
                        var _0x4960a3 = _0xd42b8a;
                        if (!_0x4960a3['isDead'] && !_0x3f5872[_0x22e6a1(0x1738)](_0x4960a3)) {
                            if (!_0x4960a3['res_Rosary']) {
                                let _0x51d0b4 = Math['max'](0x42, _0x4960a3['maxHp'] - _0x4960a3['hp']);
                                _0x4960a3[_0x22e6a1(0x1112)](_0x51d0b4, this['hitVFX'], 0x0, _0x345fda['default']['PENTAGRAM']), this[_0x22e6a1(0xb3d)] += _0x51d0b4;
                            }
                            _0x3f5872[_0x22e6a1(0xd14)] && _0x3f5872[_0x22e6a1(0xd14)](_0x4960a3['x'], _0x4960a3['y']);
                        }
                    } ['onLaurelOverlapsEnemy'](_0x11ef1d, _0x5c057c) {
                        const _0x50ab49 = _0x51f78d;
                        var _0x311dac = _0x5c057c;
                        if (_0x311dac[_0x50ab49(0xdae)]) return;
                        let _0x58b485 = this['Laurel'][_0x50ab49(0xaae)] * (Math[_0x50ab49(0x1084)](0xa, _0x4e1ca7[_0x50ab49(0xd2c)]['Core'][_0x50ab49(0x10f6)][_0x50ab49(0x9b8)]) + this[_0x50ab49(0xed2)]['amount']);
                        _0x311dac[_0x50ab49(0x1112)](_0x58b485, this['hitVFX'], 0xa, this['bulletType']), this[_0x50ab49(0xb3d)] += _0x58b485, _0x11ef1d[_0x50ab49(0xd14)] && _0x11ef1d[_0x50ab49(0xd14)](_0x311dac['x'], _0x311dac['y']);
                    } ['onLancetOverlapsEnemy'](_0xf1c2fd, _0x4539c3) {
                        const _0x50c7b9 = _0x51f78d;
                        var _0x59bc51 = _0x4539c3;
                        if (!_0x59bc51[_0x50c7b9(0xdae)] && !_0xf1c2fd[_0x50c7b9(0x1738)](_0x59bc51)) {
                            let _0x58966b = this[_0x50c7b9(0xde5)]['PPower'] + 0.5;
                            _0x59bc51[_0x50c7b9(0x1112)](_0x58966b, this['hitVFX'], this[_0x50c7b9(0x1992)], this['bulletType']), this['stats_inflictedDamage'] += _0x58966b;
                        }
                    } ['FireGarlic']() {
                        const _0x120d73 = _0x51f78d;
                        let _0x17ee38 = Math['min'](0xa, _0x4e1ca7[_0x120d73(0xd2c)][_0x120d73(0x1043)]['Player']['amount']) + this[_0x120d73(0x11ef)][_0x120d73(0x9b8)],
                            _0x5813e1 = 0x8 * Math[_0x120d73(0x1981)](_0x4e1ca7['default'][_0x120d73(0x1043)][_0x120d73(0x17fc)][_0x120d73(0x161a)] / 0x20, this[_0x120d73(0x11ef)][_0x120d73(0x5f5)]),
                            _0x133022 = 0x2 * Math['PI'] / _0x17ee38,
                            _0x355ec0 = _0x4e1ca7[_0x120d73(0xd2c)][_0x120d73(0x1043)][_0x120d73(0x10f6)]['x'],
                            _0x5bb7c0 = _0x4e1ca7['default']['Core'][_0x120d73(0x10f6)]['y'];
                        for (let _0x49dbb9 = 0x0; _0x49dbb9 < _0x17ee38; _0x49dbb9++) {
                            let _0x17685c = this[_0x120d73(0x439)][_0x120d73(0xada)](_0x355ec0 + Math['cos'](_0x133022 * _0x49dbb9) * _0x5813e1, _0x5bb7c0 + Math[_0x120d73(0xc80)](_0x133022 * _0x49dbb9) * _0x5813e1, this, _0x49dbb9);
                            null == _0x17685c || _0x17685c[_0x120d73(0x305)](this['Garlic']);
                        }
                    } ['FireSong']() {
                        const _0x1f80de = _0x51f78d;
                        let _0x2ad1c5 = Math['min'](0xa, _0x4e1ca7['default'][_0x1f80de(0x1043)]['Player'][_0x1f80de(0x9b8)]) + 0x3 * this['Song']['amount'],
                            _0x3f5893 = _0x4e1ca7[_0x1f80de(0xd2c)]['Core'][_0x1f80de(0x10f6)]['x'],
                            _0x225d6d = _0x4e1ca7[_0x1f80de(0xd2c)]['Core']['Player']['y'];
                        for (let _0x17292d = 0x0; _0x17292d < _0x2ad1c5; _0x17292d++) {
                            let _0xffbd42 = this['SongPool']['SpawnAt'](_0x3f5893, _0x225d6d, this, _0x17292d);
                            null == _0xffbd42 || _0xffbd42[_0x1f80de(0x305)](this['Song']);
                        }
                    } ['FirePentagram']() {
                        const _0x47ea48 = _0x51f78d;
                        _0x4e1ca7['default'][_0x47ea48(0x1043)][_0x47ea48(0x6d2)]['time'][_0x47ea48(0x12b8)]({
                            'delay': 0xc8,
                            'callback': () => {
                                const _0x58690e = _0x47ea48;
                                let _0x31fddf = Math['min'](0xa, _0x4e1ca7['default']['Core'][_0x58690e(0x10f6)][_0x58690e(0x9b8)]) + 0x3 * this[_0x58690e(0x782)]['amount'],
                                    _0x42ef07 = 0x2 * Math['PI'] / _0x31fddf,
                                    _0x40f7c9 = Math[_0x58690e(0x1084)](0.45 * _0x4e1ca7[_0x58690e(0xd2c)]['Core']['scene']['renderer'][_0x58690e(0x140e)], 0.75 * _0x4e1ca7[_0x58690e(0xd2c)][_0x58690e(0x1043)]['Magnet'][_0x58690e(0x161a)]),
                                    _0x4ab17b = _0x4e1ca7[_0x58690e(0xd2c)][_0x58690e(0x1043)]['Player']['x'],
                                    _0x23a082 = _0x4e1ca7[_0x58690e(0xd2c)]['Core'][_0x58690e(0x10f6)]['y'];
                                for (let _0x51d15c = 0x0; _0x51d15c < _0x31fddf; _0x51d15c++) {
                                    let _0x5bffa2 = this['PentagramPool'][_0x58690e(0xada)](_0x4ab17b + Math[_0x58690e(0xd7e)](_0x42ef07 * _0x51d15c) * _0x40f7c9, _0x23a082 + Math[_0x58690e(0xc80)](_0x42ef07 * _0x51d15c) * _0x40f7c9, this, _0x51d15c);
                                    null == _0x5bffa2 || _0x5bffa2[_0x58690e(0x305)](this[_0x58690e(0x782)]);
                                }
                            }
                        });
                    } ['FireLaurel']() {
                        const _0x4debc6 = _0x51f78d;
                        let _0xe41706 = _0x4e1ca7[_0x4debc6(0xd2c)]['Core']['Magnet']['x'],
                            _0x45c932 = _0x4e1ca7[_0x4debc6(0xd2c)][_0x4debc6(0x1043)]['Magnet']['y'],
                            _0x369734 = this[_0x4debc6(0x173a)][_0x4debc6(0xada)](_0xe41706, _0x45c932, this, 0x0);
                        null == _0x369734 || _0x369734['overrideWeaponData'](this['Laurel']);
                    } ['FireLancet']() {
                        const _0x4d2cd7 = _0x51f78d;
                        let _0x1a998c = _0x4e1ca7[_0x4d2cd7(0xd2c)]['Core']['Magnet']['x'],
                            _0x42ca70 = _0x4e1ca7[_0x4d2cd7(0xd2c)][_0x4d2cd7(0x1043)][_0x4d2cd7(0x17fc)]['y'],
                            _0x4fe5b8 = this[_0x4d2cd7(0x723)]['SpawnAt'](_0x1a998c, _0x42ca70, this, 0x0);
                        null == _0x4fe5b8 || _0x4fe5b8['overrideWeaponData'](this[_0x4d2cd7(0xde5)]);
                    } ['CleanUp']() {
                        const _0xfca1ff = _0x51f78d;
                        var _0x13f1eb, _0x3f518d, _0x5c3b3e, _0x4d8242, _0x46d22f, _0x3a2603;
                        super[_0xfca1ff(0xdb0)](), this[_0xfca1ff(0x568)]['setVisible'](!0x1), this['image'][_0xfca1ff(0x111e)](!0x1), this['image'][_0xfca1ff(0x16ca)](), this[_0xfca1ff(0x11d1)][_0xfca1ff(0x1a34)](), this[_0xfca1ff(0x788)]['stop'](), this[_0xfca1ff(0x19b7)] && this['firingTimer'][_0xfca1ff(0x16ca)](), null === (_0x13f1eb = this['pool']) || void 0x0 === _0x13f1eb || _0x13f1eb['spawned']['forEach'](_0x405659 => {
                            const _0x31d9e4 = _0xfca1ff;
                            _0x405659[_0x31d9e4(0x14fb)]();
                        }), null === (_0x3f518d = this['GarlicPool']) || void 0x0 === _0x3f518d || _0x3f518d[_0xfca1ff(0x13f4)][_0xfca1ff(0x858)](_0x5aeaaa => {
                            _0x5aeaaa['DeSpawn']();
                        }), null === (_0x5c3b3e = this[_0xfca1ff(0xd6a)]) || void 0x0 === _0x5c3b3e || _0x5c3b3e['spawned'][_0xfca1ff(0x858)](_0x54cdd3 => {
                            _0x54cdd3['DeSpawn']();
                        }), null === (_0x4d8242 = this[_0xfca1ff(0x690)]) || void 0x0 === _0x4d8242 || _0x4d8242['spawned'][_0xfca1ff(0x858)](_0x195e9d => {
                            _0x195e9d['DeSpawn']();
                        }), null === (_0x46d22f = this['LancetPool']) || void 0x0 === _0x46d22f || _0x46d22f['spawned']['forEach'](_0x185145 => {
                            _0x185145['DeSpawn']();
                        }), null === (_0x3a2603 = this['LaurelPool']) || void 0x0 === _0x3a2603 || _0x3a2603[_0xfca1ff(0x13f4)]['forEach'](_0x2a972f => {
                            const _0x161bf5 = _0xfca1ff;
                            _0x2a972f[_0x161bf5(0x14fb)]();
                        });
                    }
                }
                _0x3a4652['W_BloodAstronomia'] = _0x58042b, _0x3a4652['default'] = _0x58042b;
            };
