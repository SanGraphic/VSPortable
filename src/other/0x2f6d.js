// Module 0x2f6d
// Args: _0x4270b9, _0x1f1871, _0x1a9731

export default (_0x4270b9, _0x1f1871, _0x1a9731) => {
                'use strict';
                const _0x3e552b = a0_0x6932;
                var _0x375155 = this && this['__importDefault'] || function(_0x2e9c78) {
                    return _0x2e9c78 && _0x2e9c78['__esModule'] ? _0x2e9c78 : {
                        'default': _0x2e9c78
                    };
                };
                Object['defineProperty'](_0x1f1871, '__esModule', {
                    'value': !0x0
                });
                const _0x2e53f2 = _0x1a9731(0x18304),
                    _0x198787 = _0x375155(_0x1a9731(0x15dd)),
                    _0x41d320 = _0x375155(_0x1a9731(0x148f5)),
                    _0x670819 = _0x375155(_0x1a9731(0xdfbc)),
                    _0x5bfa24 = _0x375155(_0x1a9731(0x9bda)),
                    _0x8ca030 = _0x375155(_0x1a9731(0xc42e)),
                    _0x23f5d7 = _0x375155(_0x1a9731(0x1852a)),
                    _0x5ab42b = _0x375155(_0x1a9731(0x1fd7)),
                    _0x46aaa3 = _0x375155(_0x1a9731(0x3fe3)),
                    _0x4c3522 = _0x375155(_0x1a9731(0xc450)),
                    _0x301a5a = _0x375155(_0x1a9731(0x5f07)),
                    _0x559e89 = _0x375155(_0x1a9731(0xd1a1)),
                    _0x2f628d = _0x375155(_0x1a9731(0xdb1c)),
                    _0x3cc82b = _0x375155(_0x1a9731(0x30e)),
                    _0x47e3c4 = _0x375155(_0x1a9731(0x898e));
                class _0x259c17 extends _0x2f628d['default'] {
                    constructor(_0x40356b) {
                        const _0x2ae969 = _0x3e552b;
                        super(_0x40356b), this['hasSpawnedGuards'] = !0x1, this['TowerTop'] = -0x3000, this['passed'] = !0x1, this['bot'] = 0x6000, this[_0x2ae969(0x13ce)] = 0xc000, this[_0x2ae969(0x75b)] = !0x1, this[_0x2ae969(0xa50)](), this[_0x2ae969(0x12a1)] = [];
                    } ['InitFlashTimers']() {
                        this['firstEvent'] = setTimeout(() => {
                            const _0x2e7896 = a0_0x6932;
                            this['PlayFlash'](), this['recurringEvent'] = setInterval(() => {
                                this['PlayFlash']();
                            }, 0x18ab8);
                        }, 0x140b4);
                    } ['Create']() {
                        const _0x30986f = _0x3e552b;
                        this['displayHeight'] = this[_0x30986f(0x6d2)]['renderer'][_0x30986f(0x140e)], this['displayWidth'] = this['scene'][_0x30986f(0x12f9)][_0x30986f(0x173c)], this[_0x30986f(0x1acc)] = new Phaser['GameObjects'][(_0x30986f(0x11dc))](this['scene'], 0x0, 0x0), this['sBackground'] = this['scene'][_0x30986f(0x18bd)]['sprite'](0x0, this[_0x30986f(0x828)], 'background4', '06_background.png')['setOrigin'](0x0, 0x1)[_0x30986f(0xd87)](0x0), this['sStars2'] = this[_0x30986f(0x6d2)]['add'][_0x30986f(0x105b)](0.5 * this[_0x30986f(0xe75)], 0x32, 'background4', '07_stars.png')[_0x30986f(0xf8e)](0.5)['setScrollFactor'](0x0)['setBlendMode'](_0x2e53f2[_0x30986f(0x10fc)][_0x30986f(0x1811)])['setScale'](1.25), this[_0x30986f(0x1208)] = this[_0x30986f(0x6d2)][_0x30986f(0x18bd)]['sprite'](0.5 * this['displayWidth'], 0x32, 'background4', '07_stars.png')[_0x30986f(0xf8e)](0.5)['setScrollFactor'](0x0)['setBlendMode'](_0x2e53f2[_0x30986f(0x10fc)][_0x30986f(0x1811)])[_0x30986f(0x9b5)](0xb4)['setScale'](-1.35), this[_0x30986f(0x2be)] = this['scene'][_0x30986f(0x18bd)][_0x30986f(0x105b)](0x0, this['displayHeight'], 'background4', '05_Peaks.png')['setOrigin'](0x0, 0x1)['setScrollFactor'](0x0), this[_0x30986f(0xc2f)] = this[_0x30986f(0x6d2)]['add'][_0x30986f(0x105b)](0x0, this[_0x30986f(0x828)], 'background4', '04_Mountains.png')[_0x30986f(0xf8e)](0x0, 0x1)[_0x30986f(0xd87)](0x0), this['sMist3'] = this['scene'][_0x30986f(0x18bd)][_0x30986f(0x105b)](0x0, 0.5 * this['displayHeight'], 'background4', '09_mist.png')[_0x30986f(0xd87)](0x0)['setAlpha'](0.05)['setScale'](0x4)[_0x30986f(0x11c7)](_0x2e53f2[_0x30986f(0x10fc)][_0x30986f(0x1811)]), this[_0x30986f(0x1621)] = this['scene'][_0x30986f(0x18bd)][_0x30986f(0x105b)](0x0, this[_0x30986f(0x828)], 'background4', '03_Mountains.png')[_0x30986f(0xf8e)](0x0, 0x1)['setScrollFactor'](0x0), this[_0x30986f(0x18b0)] = this[_0x30986f(0x6d2)]['add'][_0x30986f(0x105b)](0.5 * this[_0x30986f(0xe75)], 0x32, 'vfx', 'blur128.png')['setScrollFactor'](0x0)[_0x30986f(0xdab)](0x0)['setOrigin'](0.5)[_0x30986f(0x11c7)](_0x2e53f2['BlendModes']['ADD']), this[_0x30986f(0x26b)] = this[_0x30986f(0x6d2)][_0x30986f(0x18bd)][_0x30986f(0x105b)](this['displayWidth'], this[_0x30986f(0x828)], 'background4', '09_mist.png')['setScrollFactor'](0x0)['setAlpha'](0.05)[_0x30986f(0x8a2)](0x4)['setBlendMode'](_0x2e53f2[_0x30986f(0x10fc)][_0x30986f(0x1811)]), this[_0x30986f(0x149c)] = this['scene'][_0x30986f(0x18bd)]['sprite'](0x0, this['displayHeight'], 'background4', '02_Hills.png')[_0x30986f(0xf8e)](0x0, 0x1)[_0x30986f(0xd87)](0x0), this['sMist1'] = this[_0x30986f(0x6d2)][_0x30986f(0x18bd)][_0x30986f(0x105b)](0x0, this[_0x30986f(0x828)], 'background4', '09_mist.png')[_0x30986f(0xd87)](0x0)[_0x30986f(0xdab)](0.05)['setScale'](0x4)['setBlendMode'](_0x2e53f2[_0x30986f(0x10fc)][_0x30986f(0x1811)]), this['sForest'] = this['scene'][_0x30986f(0x18bd)][_0x30986f(0x105b)](0x0, this['displayHeight'], 'background4', '01_Forest.png')[_0x30986f(0xf8e)](0x0, 0x1)['setScrollFactor'](0x0), this[_0x30986f(0x647)] = this['scene']['add']['sprite'](0x0, 0x0, 'vfx', 'blackDot.png')[_0x30986f(0xf8e)](0x0)['setScrollFactor'](0x0)[_0x30986f(0x8a2)](this[_0x30986f(0xe75)], this['displayHeight'])[_0x30986f(0xdab)](0x0), this[_0x30986f(0x1614)] = this['scene'][_0x30986f(0x18bd)][_0x30986f(0x105b)](0x0, 0x0, 'vfx', 'fog.png')[_0x30986f(0xf8e)](0x0)[_0x30986f(0xd87)](0x0)['setScale'](this['displayWidth'] / 0xa0, this[_0x30986f(0x828)] / 0x64)[_0x30986f(0xdab)](0x0)['setDepth'](0xbb9), this[_0x30986f(0xd05)] = [], this[_0x30986f(0xa18)] = [], this['runeStrips'][_0x30986f(0x1564)](new _0x3cc82b[(_0x30986f(0xd2c))](this[_0x30986f(0x6d2)], 0x32, 0x2710, 0x1, 0.5, 0x1)), this['runeStrips'][_0x30986f(0x1564)](new _0x3cc82b[(_0x30986f(0xd2c))](this['scene'], 0x64, 0x1f40, -0x1, 0.5, 0.7)), this['runeStrips'][_0x30986f(0x1564)](new _0x3cc82b[(_0x30986f(0xd2c))](this[_0x30986f(0x6d2)], 0x96, 0x2ee0, 0x1, 0x0, 0.5)), this['runeStrips'][_0x30986f(0x1564)](new _0x3cc82b[(_0x30986f(0xd2c))](this['scene'], 0xc8, 0x2710, -0x1, 0.5, 0x1)), this['runeStrips'][_0x30986f(0x1564)](new _0x3cc82b[(_0x30986f(0xd2c))](this['scene'], 0x1ea, 0x2710, -0x1, 0.5, 0.5)), this['runeStrips']['push'](new _0x3cc82b['default'](this['scene'], 0x230, 0x2710, 0x1, 0.5, 0x1)), this[_0x30986f(0xd05)][_0x30986f(0x1564)](new _0x3cc82b['default'](this['scene'], 0x258, 0x2ee0, 0x1, 0x0, 0.7)), this[_0x30986f(0xd05)][_0x30986f(0x1564)](new _0x3cc82b[(_0x30986f(0xd2c))](this[_0x30986f(0x6d2)], 0x28a, 0x1f40, -0x1, 0.5, 0.7)), this[_0x30986f(0x1acc)]['add'](this[_0x30986f(0x385)]), this[_0x30986f(0x1acc)][_0x30986f(0x18bd)](this[_0x30986f(0xbbf)]), this[_0x30986f(0x1acc)]['add'](this[_0x30986f(0x1208)]), this[_0x30986f(0x1acc)]['add'](this[_0x30986f(0x2be)]), this[_0x30986f(0x1acc)][_0x30986f(0x18bd)](this['sMount2']), this['allSprites']['add'](this[_0x30986f(0xd1f)]), this[_0x30986f(0x1acc)][_0x30986f(0x18bd)](this[_0x30986f(0x1621)]), this['allSprites']['add'](this[_0x30986f(0x26b)]), this[_0x30986f(0x1acc)][_0x30986f(0x18bd)](this['sFlash']), this['allSprites']['add'](this[_0x30986f(0x149c)]), this[_0x30986f(0x1acc)][_0x30986f(0x18bd)](this['sMist1']), this['allSprites'][_0x30986f(0x18bd)](this['sForest']), this['allSprites']['each'](_0x26dd65 => {
                            const _0x277b15 = _0x30986f;
                            _0x26dd65[_0x277b15(0x8a2)](this['displayWidth'] / 0x21c);
                        }), _0x301a5a[_0x30986f(0xd2c)][_0x30986f(0x1043)][_0x30986f(0x14d8)][_0x30986f(0x1a93)] && (this['allSprites']['each'](_0x1b5ff6 => {
                            _0x1b5ff6['setFlipY'](!0x0), 0x1 == _0x1b5ff6['originY'] && _0x1b5ff6['setOrigin'](0x0, 0x0);
                        }), this['sBackground']['y'] = 0x0, this['sStars2']['y'] = this[_0x30986f(0x828)] - 0x32, this['sStars1']['y'] = this[_0x30986f(0x828)] - 0x32, this['sFlash']['y'] = this['displayHeight'] - 0x32), this[_0x30986f(0x1acc)][_0x30986f(0x18bd)](this['sDarkness']), this[_0x30986f(0x1acc)]['setDepth'](-0x186a0), this[_0x30986f(0x6d2)][_0x30986f(0x12a1)][_0x30986f(0x18bd)]({
                            'targets': this[_0x30986f(0xbbf)],
                            'angle': 0x168,
                            'duration': 0x2710,
                            'repeat': -0x1
                        }), this[_0x30986f(0x6d2)]['tweens'][_0x30986f(0x18bd)]({
                            'targets': this[_0x30986f(0x1208)],
                            'angle': 0x21c,
                            'duration': 0x2710,
                            'repeat': -0x1
                        }), this[_0x30986f(0x6d2)]['tweens']['add']({
                            'targets': this[_0x30986f(0x1208)],
                            'alpha': 0.5,
                            'duration': 0x1388,
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        }), this['scene']['tweens'][_0x30986f(0x18bd)]({
                            'targets': this['sMist1'],
                            'alpha': 0.1,
                            'scale': 0x8,
                            'angle': 0x168,
                            'duration': 0x7530,
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        }), this['scene'][_0x30986f(0x12a1)][_0x30986f(0x18bd)]({
                            'targets': this['sMist2'],
                            'alpha': 0.1,
                            'scale': 0x8,
                            'angle': -0x168,
                            'duration': 0xafc8,
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        }), this[_0x30986f(0x6d2)][_0x30986f(0x12a1)]['add']({
                            'targets': this[_0x30986f(0xd1f)],
                            'alpha': 0.1,
                            'y': this['displayWidth'],
                            'scale': 0x8,
                            'angle': 0x168,
                            'duration': 0xea60,
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        }), this[_0x30986f(0x6d2)]['add'][_0x30986f(0x1a88)](this[_0x30986f(0x1acc)]), _0x301a5a[_0x30986f(0xd2c)][_0x30986f(0x1043)][_0x30986f(0x14d8)]['SelectedStage'] === _0x46aaa3['default']['TOWER'] ? new _0x559e89[(_0x30986f(0xd2c))](this['scene'], _0x5bfa24['default'][_0x30986f(0x1e7)])['SpawnAt'](0x384, 0x14400)['onDefeat'] = this[_0x30986f(0x8dc)][_0x30986f(0xf7e)](this) : _0x301a5a[_0x30986f(0xd2c)]['Core'][_0x30986f(0x14d8)]['SelectedStage'] === _0x46aaa3['default']['TOWERBRIDGE'] && new _0x559e89['default'](this[_0x30986f(0x6d2)], _0x5bfa24['default'][_0x30986f(0x9a5)])['SpawnAt'](0xa000, 0x400), this['particles'] = this['scene'][_0x30986f(0x18bd)][_0x30986f(0x1791)]('vfx'), this[_0x30986f(0x1791)]['setDepth'](-0x1869e), this['pfxEmitter'] = this['particles'][_0x30986f(0x14c0)]({
                            'frame': ['_runes_02.png', '_runes_03.png', '_runes_04.png', '_runes_05.png', '_runes_06.png'],
                            'x': this[_0x30986f(0x18b0)]['x'],
                            'y': this['sFlash']['y'],
                            'lifespan': 0xbb8,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0x168,
                                'steps': 0x20
                            },
                            'speed': {
                                'min': 0x64,
                                'max': 0x12c
                            },
                            'quantity': 0x40,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'alpha': {
                                'start': 0x0,
                                'end': 0x1
                            },
                            'frequency': 0x40,
                            'tint': 0xaaffff,
                            'blendMode': 'ADD',
                            'on': !0x1
                        }), this[_0x30986f(0xb8c)][_0x30986f(0xd87)](0x0), this['well'] = this[_0x30986f(0x1791)][_0x30986f(0x1386)]({
                            'x': this['sFlash']['x'],
                            'y': this['sFlash']['y'] - 0xc8,
                            'power': 0x1,
                            'epsilon': 0x19,
                            'gravity': 0x96
                        });
                    } ['StopRune2']() {
                        const _0x3a157c = _0x3e552b;
                        this['stopp'] = !0x0, _0x301a5a[_0x3a157c(0xd2c)][_0x3a157c(0x1267)]['StopSound'](_0x5ab42b['default']['Wind']);
                        for (var _0x3cbf42 = 0x0; _0x3cbf42 < this[_0x3a157c(0xa18)][_0x3a157c(0xed9)]; _0x3cbf42++) this['runeStrips2'][_0x3cbf42]['followers']['setVisible'](!0x1);
                        this[_0x3a157c(0xa18)] = [], this[_0x3a157c(0x1614)][_0x3a157c(0x183f)](!0x1), this['sDarkness'][_0x3a157c(0x183f)](!0x1), this[_0x3a157c(0x6d2)]['tweens']['add']({
                            'targets': [this[_0x3a157c(0x647)], this[_0x3a157c(0x1614)]],
                            'alpha': 0x0,
                            'duration': 0x2710,
                            'onComplete': () => {
                                const _0x31755d = _0x3a157c;
                                this['sFog']['setVisible'](!0x1), this['sDarkness'][_0x31755d(0x183f)](!0x1);
                            }
                        }), _0x198787['default'][_0x670819[_0x3a157c(0xd2c)]['VERANDA']][0x0][_0x3a157c(0x187)] = !0x1, _0x198787['default'][_0x670819[_0x3a157c(0xd2c)][_0x3a157c(0xea8)]][0x0][_0x3a157c(0x952)] = !0x1, -0x1 === _0x301a5a[_0x3a157c(0xd2c)]['Core']['PlayerOptions']['UnlockedCharacters'][_0x3a157c(0x1303)](_0x670819['default']['VERANDA']) && (_0x301a5a['default'][_0x3a157c(0x1267)][_0x3a157c(0x7f6)](_0x5ab42b['default'][_0x3a157c(0x8d2)], {
                            'volume': 0x1,
                            'detune': -0x3e8,
                            'rate': 0.5
                        }), _0x4c3522['default']['UnlockSecret'](_0x23f5d7[_0x3a157c(0xd2c)][_0x3a157c(0x12ba)])), -0x1 == _0x301a5a[_0x3a157c(0xd2c)][_0x3a157c(0x1043)]['PlayerOptions'][_0x3a157c(0x1b12)][_0x3a157c(0x1303)](_0x670819[_0x3a157c(0xd2c)][_0x3a157c(0xea8)]) && (_0x301a5a[_0x3a157c(0xd2c)][_0x3a157c(0x1267)][_0x3a157c(0x7f6)](_0x5ab42b[_0x3a157c(0xd2c)][_0x3a157c(0x8d2)], {
                            'volume': 0x1,
                            'detune': -0x3e8,
                            'rate': 0.5
                        }), _0x301a5a[_0x3a157c(0xd2c)][_0x3a157c(0x1043)][_0x3a157c(0x14d8)][_0x3a157c(0x1b12)]['push'](_0x670819['default'][_0x3a157c(0xea8)]), _0x301a5a['default'][_0x3a157c(0x1043)][_0x3a157c(0x14d8)]['Save']());
                    } ['Update'](_0x5224d1) {
                        const _0x3f3b94 = _0x3e552b;
                        let _0x3b6b0a = _0x301a5a[_0x3f3b94(0xd2c)][_0x3f3b94(0x1043)][_0x3f3b94(0x10f6)]['y'] / this['TowerTop'];
                        for (var _0x4c119d = 0x0; _0x4c119d < this['runeStrips'][_0x3f3b94(0xed9)]; _0x4c119d++) this[_0x3f3b94(0xd05)][_0x4c119d][_0x3f3b94(0xa9f)](_0x5224d1, _0x3b6b0a);
                        if (this['sPeaks']['y'] = this[_0x3f3b94(0x828)] + 0.5 * this['sPeaks']['displayHeight'] * _0x3b6b0a, this[_0x3f3b94(0xc2f)]['y'] = this[_0x3f3b94(0x828)] + 0.5 * this[_0x3f3b94(0xc2f)]['displayHeight'] * _0x3b6b0a, this[_0x3f3b94(0x1621)]['y'] = this['displayHeight'] + 0.5 * this['sMount1']['displayHeight'] * _0x3b6b0a, this['FixY'](this['sForest'], 0x0, 0.4 * this['sForest']['displayHeight'], _0x3b6b0a), this['FixY'](this['sHills'], 0x0, 0.5 * this['sHills'][_0x3f3b94(0x828)], _0x3b6b0a), this[_0x3f3b94(0x1021)](this['sMount1'], -0x35, 0.5 * this['sMount1']['displayHeight'], _0x3b6b0a), this[_0x3f3b94(0x1021)](this[_0x3f3b94(0xc2f)], -0x99, 0.5 * this[_0x3f3b94(0xc2f)][_0x3f3b94(0x828)], _0x3b6b0a), this['FixY'](this[_0x3f3b94(0x2be)], -0xea, 0.5 * this['sMount2']['displayHeight'], _0x3b6b0a), _0x301a5a[_0x3f3b94(0xd2c)][_0x3f3b94(0x1043)]['Player']['y'] > this['bot']) {
                            let _0x43c81f = (_0x301a5a['default'][_0x3f3b94(0x1043)][_0x3f3b94(0x10f6)]['y'] - this['bot']) / this['bott'],
                                _0x4bd90b = _0x43c81f;
                            if (this[_0x3f3b94(0x75b)] || (this[_0x3f3b94(0x647)]['alpha'] = _0x4bd90b, this[_0x3f3b94(0x1614)][_0x3f3b94(0xe71)] = _0x4bd90b), _0x43c81f > 0x1) {
                                for (this['passed'] || (this[_0x3f3b94(0xa18)][_0x3f3b94(0x1564)](new _0x47e3c4[(_0x3f3b94(0xd2c))](this[_0x3f3b94(0x6d2)], 0x64, 0x2710, 0x1, 0.5, 0x1)), this['runeStrips2']['push'](new _0x47e3c4[(_0x3f3b94(0xd2c))](this[_0x3f3b94(0x6d2)], 0x96, 0x1f40, -0x1, 0.5, 0.7)), this[_0x3f3b94(0xa18)]['push'](new _0x47e3c4['default'](this[_0x3f3b94(0x6d2)], 0xc8, 0x2ee0, 0x1, 0x0, 0.5)), this['runeStrips2']['push'](new _0x47e3c4[(_0x3f3b94(0xd2c))](this[_0x3f3b94(0x6d2)], 0xfa, 0x2710, -0x1, 0.5, 0x1)), this[_0x3f3b94(0xa18)]['push'](new _0x47e3c4[(_0x3f3b94(0xd2c))](this['scene'], 0x1ea, 0x2710, -0x1, 0.5, 0.5)), this['runeStrips2'][_0x3f3b94(0x1564)](new _0x47e3c4['default'](this['scene'], 0x230, 0x2710, 0x1, 0.5, 0x1)), this[_0x3f3b94(0xa18)][_0x3f3b94(0x1564)](new _0x47e3c4[(_0x3f3b94(0xd2c))](this[_0x3f3b94(0x6d2)], 0x258, 0x2ee0, 0x1, 0x0, 0.7)), this['runeStrips2']['push'](new _0x47e3c4['default'](this[_0x3f3b94(0x6d2)], 0x28a, 0x1f40, -0x1, 0.5, 0.7)), this[_0x3f3b94(0x1a98)] = _0x301a5a[_0x3f3b94(0xd2c)][_0x3f3b94(0x1043)]['CurrentBGM'], _0x301a5a['default'][_0x3f3b94(0x1267)][_0x3f3b94(0x1099)](_0x301a5a['default']['Core'][_0x3f3b94(0x1239)], 0x0, 0x1f4), this['scene']['time']['addEvent']({
                                        'delay': 0x1f4,
                                        'callback': () => {
                                            const _0x3bcb7e = _0x3f3b94;
                                            _0x301a5a['default']['Sound']['StopMusic'](_0x301a5a[_0x3bcb7e(0xd2c)][_0x3bcb7e(0x1043)][_0x3bcb7e(0x1239)]);
                                        }
                                    }), _0x301a5a[_0x3f3b94(0xd2c)][_0x3f3b94(0x1267)][_0x3f3b94(0x7f6)](_0x5ab42b[_0x3f3b94(0xd2c)][_0x3f3b94(0x711)], {
                                        'volume': 1.8,
                                        'loop': !0x0
                                    })), this['passed'] = !0x0, _0x4c119d = 0x0; _0x4c119d < this[_0x3f3b94(0xd05)]['length']; _0x4c119d++) this['runeStrips'][_0x4c119d]['followers']['setVisible'](!0x1);
                                for (_0x4c119d = 0x0; _0x4c119d < this['runeStrips2'][_0x3f3b94(0xed9)]; _0x4c119d++) this[_0x3f3b94(0xa18)][_0x4c119d]['followers'][_0x3f3b94(0x183f)](!0x0);
                                for (_0x4c119d = 0x0; _0x4c119d < this['runeStrips2'][_0x3f3b94(0xed9)]; _0x4c119d++) this['runeStrips2'][_0x4c119d]['Update'](_0x5224d1, _0x3b6b0a);
                            } else {
                                for (_0x4c119d = 0x0; _0x4c119d < this[_0x3f3b94(0xd05)][_0x3f3b94(0xed9)]; _0x4c119d++) this[_0x3f3b94(0xd05)][_0x4c119d]['followers']['setVisible'](!0x0);
                                for (_0x4c119d = 0x0; _0x4c119d < this[_0x3f3b94(0xa18)]['length']; _0x4c119d++) this[_0x3f3b94(0xa18)][_0x4c119d][_0x3f3b94(0x933)][_0x3f3b94(0x183f)](!0x1);
                            }
                        }
                        if (_0x301a5a[_0x3f3b94(0xd2c)][_0x3f3b94(0x1043)][_0x3f3b94(0x10f6)]['y'] < this[_0x3f3b94(0x57c)]) {
                            if (_0x301a5a[_0x3f3b94(0xd2c)]['Core'][_0x3f3b94(0x14d8)]['CollectedItems'][_0x3f3b94(0x1303)](_0x8ca030['default']['RELIC_RANDOMAZZO']) > -0x1) return;
                            if (this[_0x3f3b94(0x12e7)]) return;
                            this['hasSpawnedGuards'] = !0x0;
                            let _0x19b6aa = _0x301a5a[_0x3f3b94(0xd2c)][_0x3f3b94(0x1043)][_0x3f3b94(0x13b2)][_0x3f3b94(0x3fe)]['entries'][_0x3f3b94(0x1e6)](_0x37431a => 'RELIC_RANDOMAZZO' == _0x37431a['itemType']);
                            if (!_0x19b6aa) return;
                            let _0x27a7d4 = _0x19b6aa['x'];
                            this[_0x3f3b94(0x6d2)][_0x3f3b94(0x12a1)][_0x3f3b94(0x18bd)]({
                                'targets': _0x19b6aa,
                                'x': _0x27a7d4 + 0.25 * this['scene']['renderer'][_0x3f3b94(0x173c)],
                                'ease': 'Sine.easeInOut',
                                'duration': 0x2710,
                                'repeat': -0x1,
                                'yoyo': !0x0,
                                'onStart': () => {
                                    const _0x19ee79 = _0x3f3b94;
                                    _0x19b6aa['x'] = _0x27a7d4 - 0.25 * this[_0x19ee79(0x6d2)][_0x19ee79(0x12f9)]['width'];
                                }
                            });
                        }
                    } ['FixY'](_0x3b14a6, _0x289c1f, _0xa7757a, _0x413646) {
                        const _0x51b3dc = _0x3e552b;
                        _0x301a5a[_0x51b3dc(0xd2c)][_0x51b3dc(0x1043)][_0x51b3dc(0x14d8)]['SelectedInverse'] ? _0x3b14a6['y'] = 0x0 : (_0x3b14a6['y'] = this['displayHeight'] + Math[_0x51b3dc(0x1981)](_0x289c1f, _0xa7757a * _0x413646), _0x3b14a6['y'] > this[_0x51b3dc(0x828)] + _0xa7757a && (_0x3b14a6['y'] = this[_0x51b3dc(0x828)] + _0xa7757a));
                    } ['OnDestroy']() {
                        const _0x58b710 = _0x3e552b;
                        for (let _0x10f6d9 = 0x0; _0x10f6d9 < this['tweens'][_0x58b710(0xed9)]; _0x10f6d9++) this['tweens'][_0x10f6d9] && (this[_0x58b710(0x12a1)][_0x10f6d9]['stop'](), this[_0x58b710(0x12a1)][_0x10f6d9] = null);
                        this['tweens'] = [], _0x301a5a['default'][_0x58b710(0x1267)]['StopSound'](_0x5ab42b[_0x58b710(0xd2c)]['Wind']), clearTimeout(this['firstEvent']), clearInterval(this[_0x58b710(0xb4f)]);
                    } ['PlayFlash']() {
                        const _0x5db265 = _0x3e552b;
                        if (!_0x301a5a[_0x5db265(0xd2c)][_0x5db265(0x1043)][_0x5db265(0x14d8)]['FlashingVFXEnabled']) return;
                        if (_0x301a5a['default']['Sound']['currentBGMType'] != _0x41d320['default'][_0x5db265(0x1a7a)]) return;
                        this[_0x5db265(0x18b0)]['scale'] = 0x0, this[_0x5db265(0x18b0)]['alpha'] = 0x0;
                        for (let _0xc5ef8 = 0x0; _0xc5ef8 < 0x4; _0xc5ef8++) {
                            let _0x248047 = this['omniScene'][_0x5db265(0x12a1)]['add']({
                                'targets': this['sFlash'],
                                'scale': (0x18 + 0x8 * _0xc5ef8) / 0x80,
                                'alpha': 0x1,
                                'duration': 0x190,
                                'yoyo': !0x0,
                                'ease': 'Sine.easeInOut',
                                'delay': 0x320 * _0xc5ef8,
                                'onComplete': () => {
                                    const _0x2dca1b = _0x5db265;
                                    this[_0x2dca1b(0x18b0)]['alpha'] = 0x0;
                                }
                            });
                            this['tweens']['push'](_0x248047);
                        }
                        for (let _0x32dfc4 = 0x0; _0x32dfc4 < 0x8; _0x32dfc4++) {
                            let _0x53a07c = this['omniScene'][_0x5db265(0x12a1)][_0x5db265(0x18bd)]({
                                'delay': 0xc80 + 0x190 * _0x32dfc4,
                                'targets': this['sFlash'],
                                'scale': 0.25,
                                'alpha': 0x1,
                                'duration': 0xc8,
                                'yoyo': !0x0,
                                'ease': 'Sine.easeInOut'
                            });
                            this[_0x5db265(0x12a1)][_0x5db265(0x1564)](_0x53a07c);
                        }
                        let _0x44b60d = this[_0x5db265(0xaaa)]['tweens'][_0x5db265(0x18bd)]({
                            'delay': 0x1900,
                            'targets': this[_0x5db265(0x18b0)],
                            'scale': 0x3 * this[_0x5db265(0x6d2)]['renderer'][_0x5db265(0x173c)] / 0x80,
                            'alpha': 0x1,
                            'duration': 0x190,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut',
                            'onStart': () => {
                                this['pfxEmitter']['emitParticle'](0x78);
                            },
                            'onComplete': () => {
                                const _0x3a2930 = _0x5db265;
                                this[_0x3a2930(0xb8c)][_0x3a2930(0x1a34)]();
                            }
                        });
                        this['tweens']['push'](_0x44b60d), this[_0x5db265(0xc05)]['power'] = 0x0;
                        let _0x249b22 = this[_0x5db265(0xaaa)][_0x5db265(0x12a1)][_0x5db265(0x18bd)]({
                            'delay': 0x1900,
                            'targets': this[_0x5db265(0xc05)],
                            'power': 0x2,
                            'duration': 0x320
                        });
                        this[_0x5db265(0x12a1)]['push'](_0x249b22);
                    }
                }
                _0x1f1871['default'] = _0x259c17;
            };
