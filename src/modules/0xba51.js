// Module 0xba51
// Args: _0x53f5e9, _0x45ae43, _0x53f80a

export default (_0x53f5e9, _0x45ae43, _0x53f80a) => {
                'use strict';
                const _0x261341 = a0_0x6932;
                var _0x43975f = this && this['__importDefault'] || function(_0x5534bd) {
                    const _0x11872a = a0_0x6932;
                    return _0x5534bd && _0x5534bd['__esModule'] ? _0x5534bd : {
                        'default': _0x5534bd
                    };
                };
                Object['defineProperty'](_0x45ae43, '__esModule', {
                    'value': !0x0
                });
                const _0x333761 = _0x43975f(_0x53f80a(0xdfbc)),
                    _0x47d03e = _0x43975f(_0x53f80a(0x1fd7)),
                    _0x314c5b = _0x43975f(_0x53f80a(0x5f07)),
                    _0x1c4094 = _0x43975f(_0x53f80a(0xdb1c)),
                    _0x5d211b = _0x43975f(_0x53f80a(0x1166a)),
                    _0x494c40 = _0x43975f(_0x53f80a(0xc42e)),
                    _0x2906d3 = _0x53f80a(0x18304),
                    _0x2f1c63 = _0x43975f(_0x53f80a(0x148f5)),
                    _0x2bced4 = _0x43975f(_0x53f80a(0xe648)),
                    _0x4ec82 = _0x43975f(_0x53f80a(0x14442)),
                    _0x3ce85d = _0x43975f(_0x53f80a(0x54e3)),
                    _0x422d72 = _0x43975f(_0x53f80a(0x42c9)),
                    _0x56fed5 = _0x43975f(_0x53f80a(0xea40)),
                    _0x1d4e83 = _0x43975f(_0x53f80a(0xd1a1)),
                    _0x404575 = _0x43975f(_0x53f80a(0x9bda)),
                    _0x23d2db = _0x43975f(_0x53f80a(0x1229)),
                    _0x58c3ca = _0x43975f(_0x53f80a(0x42e7)),
                    _0x527541 = _0x43975f(_0x53f80a(0x2248)),
                    _0x27ffa7 = _0x43975f(_0x53f80a(0x3107));
                class _0x1d035a extends _0x1c4094['default'] {
                    constructor(_0x102f03) {
                        const _0x1f52f4 = a0_0x6932;
                        super(_0x102f03), this['canPizza'] = !0x0, this['isJenevivSealed'] = !0x0, this['isPathBlocked'] = !0x0, this['Delay01_Wave'] = 0x1b58, this['Delay02_Wave'] = 0x34bc, this['Delay03_Wave'] = 0x5014, this['Delay04_Wave'] = 0x61a8, this['Delay05_Break'] = 0x7530, this['Delay06_Move'] = 0x82dc, this['Delay07_Color'] = 0x9088, this['Delay08_Charge'] = 0xb798, this['Delay09_WorldEater'] = 0xc350, this['Delay10_Start'] = 0xfde8, this['Delay11_Light'] = 0x11170, this['omniScene'] = _0x314c5b['default']['Core']['SceneManager']['OmniScene'], this['beats'] = 0x0, this['tilingOffset'] = 0x0, this['canPizza'] = !0x0, this['isJenevivSealed'] = !0x0, this['isPathBlocked'] = !0x0, this['CheckForLuminaire'] = !0x1;
                        let _0x21cd46 = new Phaser['Geom'][('Rectangle')](-0x40, 0x0, _0x102f03['renderer']['width'], 0x40),
                            _0x3994b1 = new Phaser[('Geom')][('Rectangle')](-0x40, _0x102f03['renderer']['height'] - 0x40, _0x102f03['renderer']['width'], 0x40);
                        this['particlesManager'] = _0x102f03['add']['particles']('vfx'), this['glitchEmitter'] = this['particlesManager']['createEmitter']({
                            'frame': ['trueBlack.png'],
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': {
                                'min': 0x64,
                                'max': 0x96
                            },
                            'quantity': 0x64,
                            'scaleX': {
                                'start': 0x1,
                                'end': _0x102f03['renderer']['width']
                            },
                            'scaleY': {
                                'start': 0x1,
                                'end': 0x1
                            },
                            'alpha': {
                                'start': 0.25,
                                'end': 0x1
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': _0x21cd46
                            },
                            'frequency': 0x64,
                            'on': !0x1
                        }), this['glitchEmitter2'] = this['particlesManager']['createEmitter']({
                            'frame': ['trueBlack.png'],
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': {
                                'min': 0x64,
                                'max': 0x96
                            },
                            'quantity': 0x64,
                            'scaleX': {
                                'start': 0x1,
                                'end': _0x102f03['renderer']['width']
                            },
                            'scaleY': {
                                'start': 0x1,
                                'end': 0x1
                            },
                            'alpha': {
                                'start': 0.25,
                                'end': 0x1
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': _0x3994b1
                            },
                            'frequency': 0x64,
                            'on': !0x1
                        }), this['glitchEmitter']['setScrollFactor'](0x0), this['glitchEmitter2']['setScrollFactor'](0x0);
                        let _0x2f7cab = new Phaser[('Geom')][('Line')](0x0, -_0x102f03['renderer']['height'], 0x0, 0x2 * _0x102f03['renderer']['height']);
                        this['shadowParticlesManager'] = _0x102f03['add']['particles']('vfx'), this['ShadowEmitter'] = this['shadowParticlesManager']['createEmitter']({
                            'frame': ['Smoke1.png', 'Smoke2.png'],
                            'lifespan': {
                                'min': 0x64,
                                'max': 0x96
                            },
                            'speed': {
                                'min': 0x64,
                                'max': 0x96
                            },
                            'quantity': 0x64,
                            'scale': {
                                'start': 0x1,
                                'end': 0x2
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'tint': 0x0,
                            'emitZone': {
                                'type': 'random',
                                'source': _0x2f7cab
                            },
                            'frequency': 0x64,
                            'on': !0x1
                        }), this['poolJeneviv'] = new _0x1d4e83[('default')](this['scene'], _0x404575['default']['FS_BOSS_JENEVIV']), this['particlesManager']['setDepth'](0x2710), this['shadowParticlesManager']['setDepth'](0x2710);
                    } ['OnJenevivActivation']() {
                        const _0x162e4e = _0x261341;
                        this['StopBeat'](), this[_0x162e4e(0x17ae)]();
                    } ['Create']() {
                        const _0x7cff00 = _0x261341;
                        _0x422d72['default'][_0x56fed5[_0x7cff00(0xd2c)]['FOSC11_BreakSeal2']] && _0x422d72[_0x7cff00(0xd2c)][_0x56fed5[_0x7cff00(0xd2c)]['FOSC11_BreakSeal2']][_0x7cff00(0x1355)] && (this[_0x7cff00(0x313)] = !0x1), _0x422d72[_0x7cff00(0xd2c)][_0x56fed5[_0x7cff00(0xd2c)]['FOSC12_BreakSeal3']] && _0x422d72['default'][_0x56fed5[_0x7cff00(0xd2c)][_0x7cff00(0x162f)]][_0x7cff00(0x1355)] && (this['isJenevivSealed'] = !0x1, _0x314c5b['default'][_0x7cff00(0x1043)][_0x7cff00(0x14d8)][_0x7cff00(0x1188)] === _0x333761[_0x7cff00(0xd2c)]['ELEANOR'] && (this[_0x7cff00(0x192c)] = !0x0)), this['saveBGM'] = _0x314c5b['default'][_0x7cff00(0x1043)][_0x7cff00(0x14d8)][_0x7cff00(0x5d3)], this[_0x7cff00(0x7d3)] = _0x314c5b[_0x7cff00(0xd2c)]['Core'][_0x7cff00(0x14d8)][_0x7cff00(0x280)];
                        let _0x242bb3 = _0x314c5b[_0x7cff00(0xd2c)][_0x7cff00(0x1043)][_0x7cff00(0x14d8)]['SelectedInverse'] ? 'bg_foscari_inv.png' : 'bg_foscari.png';
                        this['waterOffset'] = _0x314c5b['default'][_0x7cff00(0x1043)][_0x7cff00(0x14d8)][_0x7cff00(0x1a93)] ? 0.05 : -0.05, this[_0x7cff00(0x99d)] = this['scene'][_0x7cff00(0x18bd)][_0x7cff00(0x899)](0.5 * this['scene']['renderer'][_0x7cff00(0x173c)], 0.5 * this['scene']['renderer'][_0x7cff00(0x140e)], this[_0x7cff00(0x6d2)]['renderer'][_0x7cff00(0x173c)], this['scene'][_0x7cff00(0x12f9)]['height'], 'background_Foscari', _0x242bb3)[_0x7cff00(0xd87)](0x0)[_0x7cff00(0xb4a)](-0xdbb9f);
                        let _0x1fda82 = this['scene']['renderer'][_0x7cff00(0x140e)],
                            _0x17c411 = this['scene']['renderer']['width'];
                        this[_0x7cff00(0x647)] = this[_0x7cff00(0x6d2)][_0x7cff00(0x18bd)][_0x7cff00(0x105b)](0x0, 0x0, 'vfx', 'stageShadows.png')[_0x7cff00(0xf8e)](0x0)['setScrollFactor'](0x0)[_0x7cff00(0x8a2)](_0x17c411 / 0xa0, _0x1fda82 / 0x64)['setAlpha'](0x1)['setDepth'](0x2710), this[_0x7cff00(0x9d8)] = this['scene']['add'][_0x7cff00(0x105b)](0x0, 0x0, 'vfx', 'trueBlack.png')[_0x7cff00(0xf8e)](0x0)['setScale'](0x1400, 0x2800)['setAlpha'](0x1)['setDepth'](0x2710);
                        let _0x2782d3 = this['onBeat']['bind'](this);
                        if (this[_0x7cff00(0xaaa)][_0x7cff00(0x4b1)](0x19b, _0x2782d3), this[_0x7cff00(0x1757)] = !0x0, _0x314c5b[_0x7cff00(0xd2c)][_0x7cff00(0x1043)]['Stage']['StageModifiers'][_0x7cff00(0xc23)] += 0x1, _0x314c5b[_0x7cff00(0xd2c)][_0x7cff00(0x1043)][_0x7cff00(0x17c7)][_0x7cff00(0x1201)](), _0x314c5b[_0x7cff00(0xd2c)][_0x7cff00(0x1043)][_0x7cff00(0x2ee)][_0x7cff00(0xed9)] > 0x0) {
                            let _0x4ee0fe = 0x168 / _0x314c5b['default']['Core']['FoscariEventWeapons'][_0x7cff00(0xed9)],
                                _0x427c4e = 0xc8;
                            for (let _0x296f5b = 0x0; _0x296f5b < _0x314c5b['default'][_0x7cff00(0x1043)]['FoscariEventWeapons']['length']; _0x296f5b++) {
                                let _0x1375ea = _0x314c5b[_0x7cff00(0xd2c)][_0x7cff00(0x1043)][_0x7cff00(0x2ee)][_0x296f5b],
                                    _0x1ca467 = _0x27ffa7[_0x7cff00(0xd2c)][_0x1375ea];
                                _0x1ca467 && _0x1ca467[0x0] && _0x1ca467[0x0]['isEvolution'] && _0x1ca467[0x0][_0x7cff00(0x13df)] && _0x1ca467[0x0][_0x7cff00(0x13df)][0x0] && (_0x1375ea = _0x1ca467[0x0][_0x7cff00(0x13df)][0x0]), _0x314c5b[_0x7cff00(0xd2c)][_0x7cff00(0x1043)]['MakeStagePickup'](_0x314c5b[_0x7cff00(0xd2c)]['Core']['Player']['x'] + Math[_0x7cff00(0xd7e)](_0x4ee0fe * _0x296f5b) * _0x427c4e, _0x314c5b['default'][_0x7cff00(0x1043)][_0x7cff00(0x10f6)]['y'] + Math[_0x7cff00(0xc80)](_0x4ee0fe * _0x296f5b) * _0x427c4e, _0x494c40[_0x7cff00(0xd2c)][_0x7cff00(0x17b3)], _0x1375ea);
                            }
                            _0x314c5b[_0x7cff00(0xd2c)]['Core'][_0x7cff00(0x2ee)] = [], this['sFader'] = this[_0x7cff00(0x6d2)]['add']['sprite'](0x0, 0x0, 'vfx', 'blackDot.png')[_0x7cff00(0xf8e)](0x0)[_0x7cff00(0xd87)](0x0)[_0x7cff00(0x8a2)](_0x17c411, _0x1fda82)[_0x7cff00(0xdab)](0x1)[_0x7cff00(0xb4a)](0x2710), this[_0x7cff00(0x6d2)][_0x7cff00(0x12a1)][_0x7cff00(0x18bd)]({
                                'targets': this[_0x7cff00(0xfc6)],
                                'alpha': 0x0,
                                'duration': 0x3e8
                            });
                        }
                        this[_0x7cff00(0x313)] ? this['CreateSeal2']() : (this['sBlackWall'][_0x7cff00(0x183f)](!0x1), this[_0x7cff00(0xe99)]()), this[_0x7cff00(0x192c)] ? (this[_0x7cff00(0x1418)](), this[_0x7cff00(0x3e5)](), this['SpawnJeneviv'](), this['SealJeneviv']()) : (this[_0x7cff00(0x1258)](), this[_0x7cff00(0x193e)](), this[_0x7cff00(0x6ab)](), this[_0x7cff00(0x98c)][_0x7cff00(0x18c0)] = this[_0x7cff00(0x22b)][_0x7cff00(0xf7e)](this));
                    } ['CheckMinute'](_0x3f6a46) {
                        const _0x1bbe16 = _0x261341;
                        0x19 === _0x3f6a46 ? (this['glitchEmitter']['start'](), this['glitchEmitter2'][_0x1bbe16(0x1aa2)](), _0x314c5b[_0x1bbe16(0xd2c)][_0x1bbe16(0x1267)][_0x1bbe16(0x7f6)](_0x47d03e[_0x1bbe16(0xd2c)][_0x1bbe16(0x1161)], {
                            'volume': 1.5,
                            'rate': 0.5
                        }), _0x314c5b['default'][_0x1bbe16(0x1267)]['PlaySound'](_0x47d03e[_0x1bbe16(0xd2c)]['WorldEater'], {
                            'volume': 1.5,
                            'rate': 0.25
                        }), _0x314c5b[_0x1bbe16(0xd2c)][_0x1bbe16(0x1267)][_0x1bbe16(0x7f6)](_0x47d03e[_0x1bbe16(0xd2c)][_0x1bbe16(0x1343)], {
                            'volume': 1.5,
                            'rate': 0.5
                        }), _0x314c5b['default'][_0x1bbe16(0x1267)][_0x1bbe16(0x7f6)](_0x47d03e['default']['Haha'], {
                            'volume': 1.5,
                            'rate': 0.25
                        })) : 0x1a === _0x3f6a46 && (this[_0x1bbe16(0x1306)]['stop'](), this[_0x1bbe16(0xfbc)][_0x1bbe16(0x1a34)]());
                    } ['StopBeat']() {
                        const _0x2f68eb = _0x261341;
                        this['isBeating'] && (this['isBeating'] = !0x1, this['omniScene'][_0x2f68eb(0x47c)](), _0x314c5b[_0x2f68eb(0xd2c)][_0x2f68eb(0x1043)]['Stage']['StageModifiers']['EnemySpeed'] -= 0x1, _0x314c5b['default'][_0x2f68eb(0x1043)][_0x2f68eb(0x17c7)][_0x2f68eb(0x1201)]());
                    } ['ForceSpoopyMusic']() {
                        const _0x34cf39 = _0x261341;
                        _0x314c5b['default'][_0x34cf39(0x1043)][_0x34cf39(0x14d8)][_0x34cf39(0x5d3)] = _0x2f1c63[_0x34cf39(0xd2c)]['BGM_Foscari2'], _0x314c5b[_0x34cf39(0xd2c)][_0x34cf39(0x1043)][_0x34cf39(0x14d8)][_0x34cf39(0x280)] = _0x2bced4[_0x34cf39(0xd2c)]['Normal'], _0x314c5b[_0x34cf39(0xd2c)]['Sound'][_0x34cf39(0x1e4)]();
                    } ['onBeat']() {
                        const _0x5743e6 = _0x261341;
                        if (this['beats']++, this[_0x5743e6(0x1be)] % 0x2 == 0x0) {
                            let _0x128293 = _0x314c5b[_0x5743e6(0xd2c)]['Core']['Enemies'];
                            for (let _0x5bd3d7 = 0x0; _0x5bd3d7 < _0x128293['length']; _0x5bd3d7++) {
                                const _0x1d3b4d = _0x128293[_0x5bd3d7];
                                _0x1d3b4d[_0x5743e6(0xdae)] || (_0x1d3b4d[_0x5743e6(0x183e)][_0x5743e6(0x1631)](), _0x1d3b4d['Update'] = _0x1d3b4d[_0x5743e6(0x1904)], _0x1d3b4d[_0x5743e6(0xc34)] = !0x1, _0x1d3b4d[_0x5743e6(0x19c8)](0x0));
                            }
                            for (let _0x3d6149 = 0x0; _0x3d6149 < _0x5d211b['default'][_0x5743e6(0x777)]['length']; _0x3d6149++) _0x5d211b[_0x5743e6(0xd2c)]['MovementTweens'][_0x3d6149]['pause']();
                        } else this[_0x5743e6(0x17ae)]();
                    } ['ResumeEnemiesMovement']() {
                        const _0x251184 = _0x261341;
                        let _0x270b94 = _0x314c5b['default'][_0x251184(0x1043)][_0x251184(0x1a91)];
                        for (let _0x4f44cb = 0x0; _0x4f44cb < _0x270b94['length']; _0x4f44cb++) {
                            const _0x39bdc8 = _0x270b94[_0x4f44cb];
                            _0x39bdc8[_0x251184(0x183e)]['resume'](), _0x39bdc8[_0x251184(0xa9f)] = _0x39bdc8[_0x251184(0x1904)], _0x39bdc8['conditional_canMove'] = !0x0;
                        }
                        for (let _0x2dc46b = 0x0; _0x2dc46b < _0x5d211b[_0x251184(0xd2c)][_0x251184(0x777)]['length']; _0x2dc46b++) _0x5d211b[_0x251184(0xd2c)]['MovementTweens'][_0x2dc46b][_0x251184(0x15dd)]();
                    } ['MakePizza']() {
                        const _0x28cb6a = _0x261341;
                        let _0x276cf4 = _0x314c5b[_0x28cb6a(0xd2c)][_0x28cb6a(0x1043)][_0x28cb6a(0x10f6)]['x'],
                            _0x10addc = _0x314c5b[_0x28cb6a(0xd2c)]['Core']['Player']['y'] - 0xc8;
                        try {
                            _0x314c5b[_0x28cb6a(0xd2c)][_0x28cb6a(0x1043)][_0x28cb6a(0x17c7)][_0x28cb6a(0xbef)][_0x28cb6a(0x14d1)]['getObjectLayer']('Scripts')[_0x28cb6a(0x9c2)][_0x28cb6a(0x858)](_0x24087a => {
                                const _0x335d40 = _0x28cb6a;
                                'FS_PIZZA' === _0x24087a[_0x335d40(0x226)] && (_0x276cf4 = _0x24087a['x'], _0x10addc = _0x24087a['y']);
                            });
                        } catch (_0x42ae80) {}
                        let _0x235ec3 = -this[_0x28cb6a(0x6d2)][_0x28cb6a(0x12f9)][_0x28cb6a(0x140e)];
                        this['PizzaAsprite'] = this[_0x28cb6a(0x6d2)][_0x28cb6a(0x18bd)][_0x28cb6a(0x568)](_0x276cf4, _0x10addc, 'items', 'PizzaTime.png')[_0x28cb6a(0xb4a)](_0x235ec3), this[_0x28cb6a(0x1284)] = new _0x2906d3[(_0x28cb6a(0x10d2))]['Circle'](_0x276cf4, _0x10addc, 0x10);
                    } ['CheckPizzas']() {
                        const _0x317333 = _0x261341;
                        if (!this[_0x317333(0xa09)]) return;
                        if (!this[_0x317333(0x1284)]) return;
                        let _0x4afbd6 = _0x314c5b['default'][_0x317333(0x1043)]['Player']['x'],
                            _0x7cf974 = _0x314c5b[_0x317333(0xd2c)]['Core'][_0x317333(0x10f6)]['y'];
                        this[_0x317333(0x1284)]['contains'](_0x4afbd6, _0x7cf974) && (this[_0x317333(0xa09)] = !0x1, this['StopBeat'](), this[_0x317333(0x17ae)](), this[_0x317333(0x1760)]());
                    } ['AnimPizza']() {
                        const _0x3d7cf4 = _0x261341;
                        _0x314c5b['default']['Sound']['PlaySound'](_0x47d03e['default'][_0x3d7cf4(0xbc6)], {
                            'volume': 0x1
                        }, 0x64, 0x4), this[_0x3d7cf4(0x2fb)][_0x3d7cf4(0xe71)] = 0.65, this['scene'][_0x3d7cf4(0x12a1)][_0x3d7cf4(0x18bd)]({
                            'targets': this[_0x3d7cf4(0x2fb)],
                            'scale': 1.5,
                            'alpha': 0x0,
                            'ease': 'Bounce.InOut',
                            'yoyo': !0x1,
                            'duration': 0x12c,
                            'onComplete': () => {
                                const _0x1bd7a0 = _0x3d7cf4;
                                this['PizzaAsprite'][_0x1bd7a0(0x16ca)]();
                            }
                        });
                    } ['Update'](_0x5152f5) {
                        const _0x31b002 = _0x261341;
                        if (this[_0x31b002(0x46c)] += this[_0x31b002(0x1a9a)] * _0x5152f5, this['water'][_0x31b002(0x1a79)] = _0x314c5b[_0x31b002(0xd2c)][_0x31b002(0x1043)][_0x31b002(0x10f6)]['x'], this[_0x31b002(0x99d)][_0x31b002(0x130f)] = _0x314c5b['default'][_0x31b002(0x1043)]['Player']['y'], this[_0x31b002(0x99d)][_0x31b002(0x130f)] += this['tilingOffset'], this[_0x31b002(0xa09)] && this[_0x31b002(0x897)](), this['isPathBlocked'] && this[_0x31b002(0x19dd)]['emitParticleAt'](0x1400, _0x314c5b[_0x31b002(0xd2c)][_0x31b002(0x1043)][_0x31b002(0x10f6)]['y']), this[_0x31b002(0x1aca)] && _0x314c5b[_0x31b002(0xd2c)]['Core']['Weapons'][_0x31b002(0x1e6)](_0xfc1189 => _0xfc1189[_0x31b002(0x14e)] === _0x3ce85d['default'][_0x31b002(0xc65)])) {
                            this[_0x31b002(0x98c)]['RestoreShield'](), this['scene'][_0x31b002(0x915)][_0x31b002(0x17fb)](this['luminairePathEvent']), this[_0x31b002(0x1aca)] = !0x1, _0x314c5b['default'][_0x31b002(0x1267)][_0x31b002(0x1099)](_0x314c5b[_0x31b002(0xd2c)][_0x31b002(0x1043)][_0x31b002(0x1239)], 0x0, 0x1f4), _0x314c5b['default'][_0x31b002(0x1043)][_0x31b002(0x378)] = !0x1, _0x314c5b[_0x31b002(0xd2c)][_0x31b002(0x1043)][_0x31b002(0x106c)] = !0x1, this[_0x31b002(0x6d2)][_0x31b002(0x915)]['addEvent']({
                                'delay': 0x3e8,
                                'callback': () => {
                                    const _0x50995a = _0x31b002;
                                    _0x314c5b['default']['Core']['PlayerOptions'][_0x50995a(0x5d3)] = _0x2f1c63['default']['BGM_Luminaire'], _0x314c5b['default'][_0x50995a(0x1043)]['PlayerOptions'][_0x50995a(0x280)] = _0x2bced4[_0x50995a(0xd2c)]['Normal'], _0x314c5b[_0x50995a(0xd2c)][_0x50995a(0x1267)]['SetupAndPlayBGM_Banger']();
                                }
                            });
                            let _0x21c1b4 = 0.25 * this[_0x31b002(0x6d2)]['renderer'][_0x31b002(0x173c)],
                                _0x32cb20 = 1.2 * this['scene']['renderer'][_0x31b002(0x140e)],
                                _0x408bfa = 0.5 * this[_0x31b002(0x6d2)][_0x31b002(0x12f9)][_0x31b002(0x173c)],
                                _0x443396 = 0x20,
                                _0xd72724 = this[_0x31b002(0x6d2)][_0x31b002(0x18bd)][_0x31b002(0x105b)](_0x21c1b4, _0x32cb20, 'foscariChars')[_0x31b002(0xd87)](0x0)[_0x31b002(0x8a2)](0x2);
                            const _0x407252 = _0xd72724[_0x31b002(0x183e)][_0x31b002(0x1756)]('foscariChars', {
                                'start': 0x1,
                                'end': 0x5,
                                'zeroPad': 0x0,
                                'prefix': 'Luminaire_i0',
                                'suffix': '.png'
                            });
                            _0xd72724[_0x31b002(0x183e)]['create']({
                                'key': 'walk',
                                'frames': _0x407252,
                                'frameRate': 0x8,
                                'repeat': -0x1
                            }), _0xd72724['anims'][_0x31b002(0x902)]('walk'), this['scene'][_0x31b002(0x12a1)]['add']({
                                'targets': _0xd72724,
                                'scale': 0x1,
                                'ease': 'Sine.easeInOut',
                                'x': _0x408bfa,
                                'y': _0x443396,
                                'duration': 0x5dc,
                                'onComplete': () => {
                                    const _0x337a57 = _0x31b002;
                                    _0x314c5b['default']['Core'][_0x337a57(0x1273)] && _0x314c5b[_0x337a57(0xd2c)]['Core']['MainUI']['SurvivedSecondsText']['setVisible'](!0x1);
                                }
                            });
                        }
                    } ['CreateSeal2']() {
                        const _0x34eece = _0x261341;
                        let _0x152cbe = 0x2260,
                            _0x4aca81 = 0x680;
                        try {
                            _0x314c5b[_0x34eece(0xd2c)]['Core'][_0x34eece(0x17c7)][_0x34eece(0xbef)]['MainMap'][_0x34eece(0x67d)]('Scripts')[_0x34eece(0x9c2)][_0x34eece(0x858)](_0x1e7440 => {
                                'FS_SEAL2' === _0x1e7440['name'] && (_0x152cbe = _0x1e7440['x'], _0x4aca81 = _0x1e7440['y']);
                            });
                        } catch (_0x2ee4aa) {}
                        this['seal'] = _0x314c5b['default']['Core'][_0x34eece(0x110f)](_0x4ec82[_0x34eece(0xd2c)][_0x34eece(0x1a64)], _0x152cbe, _0x4aca81), this['seal']['destroyedCallback'] = this[_0x34eece(0x575)]['bind'](this);
                    } ['CreateSeal3']() {
                        const _0x40337f = _0x261341;
                        let _0x18b09f = 0x2260,
                            _0x1e540f = 0x680;
                        try {
                            _0x314c5b[_0x40337f(0xd2c)][_0x40337f(0x1043)][_0x40337f(0x17c7)]['tilingTileset']['MainMap'][_0x40337f(0x67d)]('Scripts')[_0x40337f(0x9c2)][_0x40337f(0x858)](_0x3832a8 => {
                                const _0x1298e6 = _0x40337f;
                                'FS_SEAL3' === _0x3832a8[_0x1298e6(0x226)] && (_0x18b09f = _0x3832a8['x'], _0x1e540f = _0x3832a8['y']);
                            });
                        } catch (_0x558c41) {}
                        this['sealBlue'] = _0x314c5b['default']['Core'][_0x40337f(0x110f)](_0x4ec82[_0x40337f(0xd2c)][_0x40337f(0x1a19)], _0x18b09f, _0x1e540f), this[_0x40337f(0x109e)][_0x40337f(0xf27)] = this[_0x40337f(0x1414)]['bind'](this);
                    } ['CreateBadge']() {
                        const _0x1746ad = _0x261341;
                        let _0x340d08 = 0x2260,
                            _0x2b06c0 = 0x680;
                        try {
                            _0x314c5b[_0x1746ad(0xd2c)][_0x1746ad(0x1043)]['Stage']['tilingTileset'][_0x1746ad(0x14d1)][_0x1746ad(0x67d)]('Scripts')[_0x1746ad(0x9c2)][_0x1746ad(0x858)](_0x5712a1 => {
                                'FS_SEAL2' === _0x5712a1['name'] && (_0x340d08 = _0x5712a1['x'], _0x2b06c0 = _0x5712a1['y']);
                            });
                        } catch (_0x11b933) {}
                        let _0x106290 = _0x3ce85d[_0x1746ad(0xd2c)]['ACADEMYBADGE'];
                        _0x314c5b[_0x1746ad(0xd2c)]['Core'][_0x1746ad(0x13f8)](_0x340d08, _0x2b06c0, _0x494c40['default'][_0x1746ad(0x17b3)], _0x106290);
                    } ['CreateShadowServant']() {
                        const _0x121d3c = _0x261341;
                        let _0x407a9e = 0x2260,
                            _0x496575 = 0x680;
                        try {
                            _0x314c5b[_0x121d3c(0xd2c)]['Core']['Stage'][_0x121d3c(0xbef)][_0x121d3c(0x14d1)]['getObjectLayer']('Scripts')['objects'][_0x121d3c(0x858)](_0x4936e8 => {
                                'FS_SEAL3' === _0x4936e8['name'] && (_0x407a9e = _0x4936e8['x'], _0x496575 = _0x4936e8['y']);
                            });
                        } catch (_0x1358bb) {}
                        let _0x5e4331 = _0x3ce85d[_0x121d3c(0xd2c)]['SHADOWSERVANT'];
                        _0x314c5b[_0x121d3c(0xd2c)][_0x121d3c(0x1043)][_0x121d3c(0x13f8)](_0x407a9e, _0x496575, _0x494c40[_0x121d3c(0xd2c)]['WEAPON'], _0x5e4331);
                    } ['CreateWeapons']() {
                        const _0x113dfe = _0x261341;
                        let _0x473c5b = _0x314c5b[_0x113dfe(0xd2c)][_0x113dfe(0x1043)]['Player']['x'],
                            _0x3ebc66 = _0x314c5b[_0x113dfe(0xd2c)][_0x113dfe(0x1043)][_0x113dfe(0x10f6)]['y'],
                            _0x4c3630 = 0.6 * this['scene']['renderer'][_0x113dfe(0x140e)],
                            _0x4b5501 = _0x314c5b[_0x113dfe(0xd2c)][_0x113dfe(0x1043)]['MakeStagePickup'](_0x473c5b - 0xc8, _0x3ebc66 + _0x4c3630, _0x494c40['default'][_0x113dfe(0x17b3)], _0x3ce85d['default'][_0x113dfe(0x15a6)]);
                        _0x4b5501[_0x113dfe(0x1439)] = !0x1, _0x4b5501['hasSpawned'] = !0x0;
                        let _0x1223ce = _0x314c5b[_0x113dfe(0xd2c)][_0x113dfe(0x1043)]['MakeStagePickup'](_0x473c5b + 0xc8, _0x3ebc66 + _0x4c3630, _0x494c40[_0x113dfe(0xd2c)][_0x113dfe(0x17b3)], _0x3ce85d[_0x113dfe(0xd2c)]['MAGIC_MISSILE']);
                        _0x1223ce[_0x113dfe(0x1439)] = !0x1, _0x1223ce[_0x113dfe(0x1ae4)] = !0x0;
                    } ['OnSeal2DestructionComplete']() {
                        const _0x3a5b7c = _0x261341;
                        this[_0x3a5b7c(0x1418)](), this['isPathBlocked'] = !0x1, this[_0x3a5b7c(0x6d2)][_0x3a5b7c(0x12a1)][_0x3a5b7c(0x18bd)]({
                            'targets': this[_0x3a5b7c(0x9d8)],
                            'x': this[_0x3a5b7c(0x9d8)]['x'] - 0x100,
                            'duration': 0x1388,
                            'onComplete': () => {
                                const _0x54f336 = _0x3a5b7c;
                                this['OpenBounds'](), this[_0x54f336(0x6d2)][_0x54f336(0x12a1)][_0x54f336(0x18bd)]({
                                    'targets': this['sBlackWall'],
                                    'x': this['sBlackWall']['x'] - 0x400,
                                    'alpha': 0x0,
                                    'duration': 0x1388,
                                    'onComplete': () => {
                                        const _0x833d5c = _0x54f336;
                                        this['sBlackWall'][_0x833d5c(0x183f)](!0x1);
                                    }
                                });
                            }
                        });
                    } ['OnInitCompleted']() {
                        const _0x450374 = _0x261341;
                        this['isPathBlocked'] ? this['SetBoundsBeforeSeal2']() : this['OpenBounds'](), -0x1 === _0x314c5b['default'][_0x450374(0x1043)][_0x450374(0x14d8)][_0x450374(0x1481)][_0x450374(0x1303)](_0x494c40[_0x450374(0xd2c)]['RELIC_BANGER']) && _0x314c5b[_0x450374(0xd2c)][_0x450374(0x1267)][_0x450374(0x19ba)](_0x314c5b[_0x450374(0xd2c)][_0x450374(0x1043)]['CurrentBGM']);
                    } ['SetBoundsBeforeSeal2']() {
                        const _0x18348d = _0x261341;
                        _0x314c5b[_0x18348d(0xd2c)][_0x18348d(0x1043)][_0x18348d(0x14d8)][_0x18348d(0x1a93)] ? (_0x314c5b['default'][_0x18348d(0x1043)]['SetHardBounds'](0x100, 0x100, 0x1500, 0x2700), this['sBlackWall']['x'] = 0x1400) : _0x314c5b['default'][_0x18348d(0x1043)][_0x18348d(0xcca)](0x1400, 0x100, 0x2700, 0x2700);
                    } ['OpenBounds']() {
                        const _0x45cf28 = _0x261341;
                        _0x314c5b['default'][_0x45cf28(0x1043)][_0x45cf28(0xcca)](0x100, 0x100, 0x2700, 0x2700);
                    } ['SpawnJeneviv']() {
                        const _0x6a3700 = _0x261341;
                        let _0x42dcf5 = 0x2260,
                            _0x16f10c = 0x680;
                        try {
                            _0x314c5b['default']['Core']['Stage'][_0x6a3700(0xbef)][_0x6a3700(0x14d1)][_0x6a3700(0x67d)]('Scripts')['objects'][_0x6a3700(0x858)](_0x2aea6f => {
                                'FS_JENEVIV' === _0x2aea6f['name'] && (_0x42dcf5 = _0x2aea6f['x'], _0x16f10c = _0x2aea6f['y']);
                            });
                        } catch (_0x1bec73) {}
                        this[_0x6a3700(0x98c)] = this[_0x6a3700(0x144a)]['SpawnAt'](_0x42dcf5, _0x16f10c);
                    } ['SealJeneviv']() {
                        this['Jeneviv']['SealInStone']();
                    } ['FreeJeneviv']() {
                        const _0xd3a8c4 = _0x261341;
                        this[_0xd3a8c4(0xe4a)](), this[_0xd3a8c4(0x17ae)](), this[_0xd3a8c4(0x6d2)]['cameras'][_0xd3a8c4(0x4cd)]['stopFollow'](), this[_0xd3a8c4(0x6d2)][_0xd3a8c4(0x12a1)]['add']({
                            'targets': this[_0xd3a8c4(0x6d2)][_0xd3a8c4(0x1793)]['main'],
                            'scrollX': this[_0xd3a8c4(0x6d2)]['cameras'][_0xd3a8c4(0x4cd)][_0xd3a8c4(0x956)] - (this['sealBlue']['x'] - this[_0xd3a8c4(0x98c)]['x']),
                            'scrollY': this['scene'][_0xd3a8c4(0x1793)][_0xd3a8c4(0x4cd)]['scrollY'] - (this[_0xd3a8c4(0x109e)]['y'] - this[_0xd3a8c4(0x98c)]['y']),
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0x2f0221 = _0xd3a8c4;
                                this[_0x2f0221(0x6d2)][_0x2f0221(0x1793)]['main'][_0x2f0221(0x1168)](this['Jeneviv'], !0x1, 0.1, 0.1);
                            }
                        }), -0x1 === _0x314c5b[_0xd3a8c4(0xd2c)][_0xd3a8c4(0x1043)]['PlayerOptions']['CollectedItems'][_0xd3a8c4(0x1303)](_0x494c40['default'][_0xd3a8c4(0x173e)]) && _0x314c5b[_0xd3a8c4(0xd2c)]['Sound'][_0xd3a8c4(0x19ba)](_0x2f1c63[_0xd3a8c4(0xd2c)]['BGM_Foscari2']), _0x314c5b['default'][_0xd3a8c4(0x1043)][_0xd3a8c4(0x14d8)][_0xd3a8c4(0x5d3)] = _0x2f1c63['default'][_0xd3a8c4(0x239)], _0x314c5b['default'][_0xd3a8c4(0x1043)][_0xd3a8c4(0x14d8)]['SelectedBGMMod'] = _0x2bced4['default']['Normal'], _0x314c5b[_0xd3a8c4(0xd2c)]['Sound']['SetupAndPlayBGM_Banger'](), _0x314c5b['default']['Core'][_0xd3a8c4(0x378)] = !0x1, _0x314c5b['default'][_0xd3a8c4(0x1043)][_0xd3a8c4(0x106c)] = !0x1, this[_0xd3a8c4(0x6d2)][_0xd3a8c4(0x915)][_0xd3a8c4(0x12b8)]({
                            'delay': this[_0xd3a8c4(0x12da)],
                            'callback': () => {
                                const _0x367790 = _0xd3a8c4;
                                this['DevourEggs'](), this[_0x367790(0x9bb)]();
                            }
                        }), this[_0xd3a8c4(0x6d2)][_0xd3a8c4(0x915)][_0xd3a8c4(0x12b8)]({
                            'delay': this[_0xd3a8c4(0x158c)],
                            'callback': () => {
                                this['SummonSnakes']();
                            }
                        }), this[_0xd3a8c4(0x6d2)][_0xd3a8c4(0x915)]['addEvent']({
                            'delay': this['Delay03_Wave'],
                            'callback': () => {
                                this['SummonSnakes']();
                            }
                        }), this[_0xd3a8c4(0x6d2)]['time']['addEvent']({
                            'delay': this['Delay04_Wave'],
                            'callback': () => {}
                        }), this[_0xd3a8c4(0x6d2)][_0xd3a8c4(0x915)][_0xd3a8c4(0x12b8)]({
                            'delay': this[_0xd3a8c4(0xc40)],
                            'callback': () => {
                                const _0x4e6853 = _0xd3a8c4;
                                this[_0x4e6853(0x98c)]['BreakFree1']();
                            }
                        }), this[_0xd3a8c4(0x6d2)]['time'][_0xd3a8c4(0x12b8)]({
                            'delay': this[_0xd3a8c4(0x17bf)],
                            'callback': () => {
                                const _0xdf77ec = _0xd3a8c4;
                                this[_0xdf77ec(0x98c)][_0xdf77ec(0xf55)]();
                            }
                        }), this['scene']['time'][_0xd3a8c4(0x12b8)]({
                            'delay': this[_0xd3a8c4(0x42d)],
                            'callback': () => {
                                this['Jeneviv']['BreakFree2']();
                            }
                        }), this[_0xd3a8c4(0x6d2)][_0xd3a8c4(0x915)][_0xd3a8c4(0x12b8)]({
                            'delay': this['Delay08_Charge'],
                            'callback': () => {
                                const _0x195f25 = _0xd3a8c4;
                                this[_0x195f25(0x98c)][_0x195f25(0x18d5)]();
                            }
                        }), this['scene'][_0xd3a8c4(0x915)][_0xd3a8c4(0x12b8)]({
                            'delay': this[_0xd3a8c4(0x1a81)],
                            'callback': () => {
                                const _0x18621c = _0xd3a8c4;
                                this[_0x18621c(0x98c)]['CastWorldEater'](), this['OnWorldEater']();
                            }
                        }), this['scene']['time'][_0xd3a8c4(0x12b8)]({
                            'delay': this['Delay10_Start'],
                            'callback': () => {
                                const _0x1e81fd = _0xd3a8c4;
                                this[_0x1e81fd(0x98c)]['StartVerySmartAI']();
                            }
                        }), this['scene'][_0xd3a8c4(0x915)][_0xd3a8c4(0x12b8)]({
                            'delay': this[_0xd3a8c4(0x18d7)],
                            'callback': () => {
                                const _0x4dbabb = _0xd3a8c4;
                                _0x314c5b[_0x4dbabb(0xd2c)]['Core'][_0x4dbabb(0x378)] = !0x0, _0x314c5b['default'][_0x4dbabb(0x1043)]['canPause'] = !0x0, this['StartSpawningPrismaticMissile']();
                            }
                        });
                    } ['SummonSnakes']() {
                        const _0x2945e1 = _0x261341;
                        _0x314c5b[_0x2945e1(0xd2c)]['Core']['Stage']['stageEventManager'][_0x2945e1(0xb7b)]({
                            'eventType': _0x23d2db['default'][_0x2945e1(0x54b)],
                            'moreX': 0x32,
                            'moreY': _0x404575[_0x2945e1(0xd2c)][_0x2945e1(0x1071)],
                            'moreZ': 1.4
                        }), _0x314c5b[_0x2945e1(0xd2c)]['Core']['Stage']['stageEventManager'][_0x2945e1(0xb7b)]({
                            'eventType': _0x23d2db[_0x2945e1(0xd2c)][_0x2945e1(0x54b)],
                            'moreX': 0x32,
                            'moreY': _0x404575[_0x2945e1(0xd2c)]['FS_SNAK_SHIELD'],
                            'moreZ': 1.5
                        }), this['Jeneviv']['ScreenShake']();
                    } ['DevourEggs']() {
                        const _0x5b5a09 = _0x261341;
                        if (_0x314c5b['default'][_0x5b5a09(0x1043)][_0x5b5a09(0x14d8)][_0x5b5a09(0x18b1)]) {
                            let _0x2e0828 = _0x314c5b['default'][_0x5b5a09(0x1043)][_0x5b5a09(0x1962)]['RemoveBonuses']();
                            if (_0x2e0828 > 0x0)
                                for (let _0x4384e3 = 0x0; _0x4384e3 < _0x2e0828 && _0x4384e3 < 0xc8; _0x4384e3++) {
                                    let _0x5c6b23 = this[_0x5b5a09(0x6d2)][_0x5b5a09(0x18bd)][_0x5b5a09(0x568)](_0x314c5b[_0x5b5a09(0xd2c)]['Core']['Player']['x'] + 0x10 * (Math[_0x5b5a09(0x9ad)]() - 0.5), _0x314c5b[_0x5b5a09(0xd2c)]['Core'][_0x5b5a09(0x10f6)]['y'] + 0x10 * (Math[_0x5b5a09(0x9ad)]() - 0.5), 'items', 'goldenegg.png')[_0x5b5a09(0xb4a)](0x2328);
                                    this['scene'][_0x5b5a09(0x12a1)][_0x5b5a09(0x18bd)]({
                                        'targets': _0x5c6b23,
                                        'x': this[_0x5b5a09(0x98c)]['x'] - 0x30 * Math['random'](),
                                        'y': this[_0x5b5a09(0x98c)]['y'],
                                        'angle': 0xb4 + 0xb4 * Math['random'](),
                                        'duration': 0x12c + 0x12c * Math[_0x5b5a09(0x9ad)](),
                                        'ease': 'Circ.easeIn',
                                        'delay': 0xa * _0x4384e3,
                                        'onComplete': () => {
                                            _0x5c6b23['destroy']();
                                        }
                                    });
                                }
                        }
                    } ['StartSpawningPrismaticMissile']() {
                        const _0x3a0a98 = _0x261341;
                        this['scene']['time'][_0x3a0a98(0x17fb)](this[_0x3a0a98(0xd63)]), this['luminairePathEvent'] = this['scene']['time'][_0x3a0a98(0x12b8)]({
                            'repeat': -0x1,
                            'delay': 0x2710,
                            'callback': () => {
                                const _0x487c70 = _0x3a0a98;
                                let _0x5efbb7 = _0x314c5b[_0x487c70(0xd2c)][_0x487c70(0x1043)][_0x487c70(0x506)]['find'](_0x4a5a44 => _0x4a5a44['bulletType'] === _0x3ce85d['default'][_0x487c70(0xf2c)]),
                                    _0x2dcb97 = 0x0;
                                if (_0x5efbb7 && (_0x2dcb97 = _0x5efbb7[_0x487c70(0x5e3)]), !_0x5efbb7 || _0x2dcb97 < 0x8) {
                                    let _0x481a05 = _0x3ce85d[_0x487c70(0xd2c)]['PRISMATICMISS'],
                                        _0x3453e2 = _0x314c5b[_0x487c70(0xd2c)][_0x487c70(0x1043)][_0x487c70(0x10f6)]['x'],
                                        _0x57f0cd = _0x314c5b['default']['Core'][_0x487c70(0x10f6)]['y'] + 0.25 * this['scene'][_0x487c70(0x12f9)][_0x487c70(0x140e)],
                                        _0x30dd22 = _0x314c5b[_0x487c70(0xd2c)][_0x487c70(0x1043)][_0x487c70(0x13f8)](_0x3453e2, _0x57f0cd, _0x494c40['default'][_0x487c70(0x17b3)], _0x481a05);
                                    _0x30dd22 && (_0x30dd22[_0x487c70(0x1439)] = !0x1, _0x314c5b['default'][_0x487c70(0x1043)][_0x487c70(0x503)][_0x487c70(0xf96)](_0x3453e2, _0x57f0cd), _0x30dd22['hasSpawned'] = !0x0);
                                } else {
                                    let _0x1deedd = _0x314c5b[_0x487c70(0xd2c)][_0x487c70(0x1043)]['Weapons'][_0x487c70(0x1e6)](_0x3fc4de => _0x3fc4de[_0x487c70(0x14e)] === _0x3ce85d['default']['GROWTH']),
                                        _0xca1ff0 = 0x0;
                                    if (_0x1deedd && (_0xca1ff0 = _0x1deedd[_0x487c70(0x5e3)]), !_0x1deedd || _0xca1ff0 < 0x5) {
                                        let _0xa7a63e = _0x3ce85d[_0x487c70(0xd2c)]['GROWTH'],
                                            _0x2d9178 = _0x314c5b[_0x487c70(0xd2c)]['Core']['Player']['x'],
                                            _0x1f4e75 = _0x314c5b['default'][_0x487c70(0x1043)][_0x487c70(0x10f6)]['y'] + 0.25 * this['scene'][_0x487c70(0x12f9)][_0x487c70(0x140e)],
                                            _0x37f716 = _0x314c5b['default']['Core']['MakeStagePickup'](_0x2d9178, _0x1f4e75, _0x494c40['default'][_0x487c70(0x17b3)], _0xa7a63e);
                                        _0x37f716 && (_0x37f716[_0x487c70(0x1439)] = !0x1, _0x314c5b[_0x487c70(0xd2c)]['Core'][_0x487c70(0x503)][_0x487c70(0xf96)](_0x2d9178, _0x1f4e75), _0x37f716['hasSpawned'] = !0x0);
                                    } else {
                                        let _0x460015 = [0.1, 0x5, 0x64],
                                            _0x203ff1 = [_0x527541['default'][_0x487c70(0x18fa)], _0x527541['default']['EVOLUTION'], _0x527541['default'][_0x487c70(0x18fa)], _0x527541[_0x487c70(0xd2c)][_0x487c70(0x18fa)], _0x527541[_0x487c70(0xd2c)][_0x487c70(0x18fa)]],
                                            _0x34c78c = new _0x58c3ca[(_0x487c70(0xd2c))](_0x460015, _0x203ff1);
                                        _0x314c5b[_0x487c70(0xd2c)][_0x487c70(0x1043)][_0x487c70(0x17c7)]['SetTreasureLevelFromChance'](_0x34c78c);
                                        let _0x1b1dbb = _0x314c5b['default'][_0x487c70(0x1043)][_0x487c70(0x10f6)]['x'],
                                            _0x1e10f7 = _0x314c5b[_0x487c70(0xd2c)][_0x487c70(0x1043)][_0x487c70(0x10f6)]['y'] + 0.25 * this[_0x487c70(0x6d2)]['renderer'][_0x487c70(0x140e)];
                                        _0x314c5b[_0x487c70(0xd2c)][_0x487c70(0x1043)]['MakeTreasure'](_0x1b1dbb, _0x1e10f7, _0x34c78c), _0x314c5b[_0x487c70(0xd2c)]['Core']['GizmoManager'][_0x487c70(0xf96)](_0x1b1dbb, _0x1e10f7), this[_0x487c70(0x1aca)] = !0x0;
                                    }
                                }
                            }
                        });
                    } ['OnWorldEater']() {
                        const _0x5cc9a9 = _0x261341;
                        this[_0x5cc9a9(0x1869)] = [];
                        for (let _0x4a7c75 = _0x314c5b['default']['Core']['Weapons'][_0x5cc9a9(0xed9)] - 0x1; _0x4a7c75 >= 0x0; _0x4a7c75--) {
                            const _0x22e61f = _0x314c5b[_0x5cc9a9(0xd2c)]['Core'][_0x5cc9a9(0x506)][_0x4a7c75];
                            if (_0x22e61f['isPowerUp']) continue;
                            let _0x52b89e = _0x314c5b[_0x5cc9a9(0xd2c)][_0x5cc9a9(0x1043)]['Weapons']['indexOf'](_0x22e61f),
                                _0x4c5fe0 = _0x314c5b[_0x5cc9a9(0xd2c)][_0x5cc9a9(0x1043)]['Weapons']['splice'](_0x52b89e, 0x1)[0x0];
                            _0x4c5fe0[_0x5cc9a9(0xdb0)](), this['playerWeapons']['push'](_0x4c5fe0), _0x314c5b['default']['Core'][_0x5cc9a9(0x1273)] && _0x314c5b[_0x5cc9a9(0xd2c)][_0x5cc9a9(0x1043)]['MainUI'][_0x5cc9a9(0x12d6)](_0x4c5fe0['bulletType']);
                        }
                        for (; _0x314c5b[_0x5cc9a9(0xd2c)][_0x5cc9a9(0x1043)]['HiddenWeapons'][_0x5cc9a9(0xed9)] > 0x0;) {
                            let _0x1954bb = _0x314c5b[_0x5cc9a9(0xd2c)]['Core']['HiddenWeapons'][_0x5cc9a9(0xcfe)]();
                            _0x1954bb[_0x5cc9a9(0xdb0)](), this['playerWeapons'][_0x5cc9a9(0x1564)](_0x1954bb);
                        }
                        this[_0x5cc9a9(0x1699)]();
                    } ['OnDestroy']() {
                        const _0x536c85 = _0x261341;
                        if (this[_0x536c85(0x1869)]) {
                            for (let _0x19b844 = 0x0; _0x19b844 < this[_0x536c85(0x1869)][_0x536c85(0xed9)]; _0x19b844++) - 0x1 === _0x314c5b[_0x536c85(0xd2c)][_0x536c85(0x1043)][_0x536c85(0x506)][_0x536c85(0x1303)](this[_0x536c85(0x1869)][_0x19b844]) && _0x314c5b[_0x536c85(0xd2c)][_0x536c85(0x1043)]['Weapons'][_0x536c85(0x1564)](this['playerWeapons'][_0x19b844]);
                        }
                        this[_0x536c85(0xaaa)][_0x536c85(0x47c)](), _0x314c5b[_0x536c85(0xd2c)]['Core'][_0x536c85(0x1463)](), _0x314c5b[_0x536c85(0xd2c)][_0x536c85(0x1043)][_0x536c85(0x14d8)][_0x536c85(0x5d3)] = this['saveBGM'], _0x314c5b[_0x536c85(0xd2c)]['Core'][_0x536c85(0x14d8)][_0x536c85(0x280)] = this[_0x536c85(0x7d3)], -0x1 === _0x314c5b[_0x536c85(0xd2c)][_0x536c85(0x1043)]['PlayerOptions']['CollectedItems'][_0x536c85(0x1303)](_0x494c40[_0x536c85(0xd2c)][_0x536c85(0x173e)]) && _0x314c5b[_0x536c85(0xd2c)]['Sound'][_0x536c85(0x19ba)](_0x2f1c63[_0x536c85(0xd2c)][_0x536c85(0x8ba)]);
                    }
                }
                _0x45ae43['default'] = _0x1d035a;
            };
