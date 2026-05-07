// Module 0x55f0
// Args: _0x1c66c4, _0x17f169, _0x3bea73

export default (_0x1c66c4, _0x17f169, _0x3bea73) => {
                'use strict';
                const _0x2ee54f = a0_0x6932;
                var _0x139cf5 = this && this['__importDefault'] || function(_0x975d74) {
                    return _0x975d74 && _0x975d74['__esModule'] ? _0x975d74 : {
                        'default': _0x975d74
                    };
                };
                Object['defineProperty'](_0x17f169, '__esModule', {
                    'value': !0x0
                }), _0x17f169['GoldFingerManager'] = void 0x0;
                const _0xefb3e4 = _0x3bea73(0x18304),
                    _0x571659 = _0x139cf5(_0x3bea73(0xc42e)),
                    _0x2b6e81 = _0x139cf5(_0x3bea73(0x1fd7)),
                    _0x5e7f1c = _0x139cf5(_0x3bea73(0x5f07)),
                    _0x3d5964 = _0x139cf5(_0x3bea73(0x5103)),
                    _0x44a537 = _0x139cf5(_0x3bea73(0x54e3)),
                    _0x43869f = _0x139cf5(_0x3bea73(0x2248)),
                    _0x35030a = _0x139cf5(_0x3bea73(0x42e7));
                class _0x12b01d {
                    constructor(_0x1945cc, _0x1fec26) {
                        const _0x50e6ce = _0x2ee54f;
                        this['ElapsedGFBonusTime'] = 0x0, this[_0x50e6ce(0x1264)] = 0x2710, this[_0x50e6ce(0x215)] = -0x1, this[_0x50e6ce(0x12d2)] = [0x1, 1.25, 1.5, 1.75, 0x2], this['fontTints'] = [0xb5722f, 0xf1f1f1, 0xfcfc63, 0xd72a3b, 0xbeffff], this[_0x50e6ce(0x1176)] = [0x0, 0x1f4, 0x3e8, 0x5dc, 0x9c4], this['frames'] = ['BronzeFinger.png', 'SilverFinger.png', 'GoldenFinger.png', 'DemonFinger.png', 'CosmicFinger.png'], this['targetScale'] = 0x1, this['GFEndInvulBonusTime'] = 0xfa0, this[_0x50e6ce(0x6d2)] = _0x1945cc, this['player'] = _0x1fec26;
                    }
                    get['CurrentEnemiesCounter']() {
                        const _0xac2bd5 = _0x2ee54f;
                        return Math[_0xac2bd5(0xe07)](_0x5e7f1c[_0xac2bd5(0xd2c)]['Core']['PlayerOptions'][_0xac2bd5(0x1347)] - this[_0xac2bd5(0x1921)]);
                    } ['ActivateGoldFinger']() {
                        const _0x3091b7 = _0x2ee54f;
                        var _0x15be17, _0x1b3698;
                        if (_0x5e7f1c[_0x3091b7(0xd2c)][_0x3091b7(0x1267)][_0x3091b7(0x7f6)](_0x2b6e81[_0x3091b7(0xd2c)]['Morph'], {
                                'volume': 0x1,
                                'rate': 0.5
                            }, 0x7d0, 0x1), this[_0x3091b7(0x1334)] = 0x0, this['player']['SetInvulForMilliSecondsNonCumulative'](this[_0x3091b7(0x1264)] + this['GFEndInvulBonusTime']), this[_0x3091b7(0x63b)]['HasGFBonus']) this['ElapsedGFBonusTime'] -= this[_0x3091b7(0x1264)];
                        else {
                            if (this['ElapsedGFBonusTime'] = 0x0, this[_0x3091b7(0x1a25)] = 0x0, this[_0x3091b7(0x1921)] = _0x5e7f1c['default'][_0x3091b7(0x1043)][_0x3091b7(0x14d8)][_0x3091b7(0x1347)], _0x5e7f1c['default']['Core']['PlayerOptions'][_0x3091b7(0x49c)]) {
                                if (!this[_0x3091b7(0x824)]) {
                                    this[_0x3091b7(0x824)] = this[_0x3091b7(0x6d2)]['add'][_0x3091b7(0x105b)](0x0, 0x0, 'vfx', 'fogRays1.png')['setOrigin'](0x0)['setScale'](this[_0x3091b7(0x6d2)][_0x3091b7(0x12f9)][_0x3091b7(0x173c)] / 0xa0, this[_0x3091b7(0x6d2)][_0x3091b7(0x12f9)]['height'] / 0x64)['setBlendMode'](_0xefb3e4[_0x3091b7(0x10fc)]['SCREEN'])[_0x3091b7(0xdab)](0x0)[_0x3091b7(0x183f)](!0x1)['setScrollFactor'](0x0)[_0x3091b7(0xb4a)](_0x3d5964[_0x3091b7(0xd2c)][_0x3091b7(0x55d)] - 0x4)['setTint'](0xffff00);
                                    const _0x1b7f7a = this[_0x3091b7(0x824)][_0x3091b7(0x183e)][_0x3091b7(0x1756)]('vfx', {
                                        'start': 0x1,
                                        'end': 0x2,
                                        'zeroPad': 0x0,
                                        'prefix': 'fogRays',
                                        'suffix': '.png'
                                    });
                                    this[_0x3091b7(0x824)][_0x3091b7(0x183e)][_0x3091b7(0x6a8)]({
                                        'key': 'loop',
                                        'frames': _0x1b7f7a,
                                        'frameRate': 0x18,
                                        'repeat': -0x1
                                    }), this[_0x3091b7(0x824)]['anims'][_0x3091b7(0x902)]('loop');
                                }
                                this[_0x3091b7(0x824)][_0x3091b7(0x183f)](!0x0), this[_0x3091b7(0x824)][_0x3091b7(0xdab)](0x1);
                            }
                            if (!this['logoSprite']) {
                                let _0xaa4481 = _0x5e7f1c['default'][_0x3091b7(0x1043)][_0x3091b7(0x1273)]['KillsText']['x'],
                                    _0xf7c4b0 = _0x5e7f1c[_0x3091b7(0xd2c)][_0x3091b7(0x1043)][_0x3091b7(0x1273)][_0x3091b7(0x90b)]['y'];
                                this[_0x3091b7(0x1667)] = this[_0x3091b7(0x6d2)][_0x3091b7(0x18bd)]['sprite'](_0xaa4481, _0xf7c4b0 + 0x60, 'UI', 'BronzeFinger.png')[_0x3091b7(0xf8e)](0.5)[_0x3091b7(0x8a2)](0x0)[_0x3091b7(0xdab)](0x0)[_0x3091b7(0xd87)](0x0)[_0x3091b7(0xb4a)](_0x3d5964[_0x3091b7(0xd2c)][_0x3091b7(0x55d)] - 0x4);
                            }
                            if (!this['logoSpriteShadow']) {
                                let _0x10d9e3 = _0x5e7f1c['default']['Core'][_0x3091b7(0x1273)]['KillsText']['x'],
                                    _0x30ee60 = _0x5e7f1c['default']['Core']['MainUI'][_0x3091b7(0x90b)]['y'];
                                this[_0x3091b7(0x1827)] = this['scene'][_0x3091b7(0x18bd)]['sprite'](_0x10d9e3, _0x30ee60 + 0x60, 'UI', 'BronzeFinger.png')['setOrigin'](0.5)[_0x3091b7(0x8a2)](0x0)['setAlpha'](0x0)[_0x3091b7(0xd87)](0x0)['setDepth'](_0x3d5964[_0x3091b7(0xd2c)]['ZInGameUI'] - 0x5);
                            }
                            if (!this['totalText']) {
                                let _0x52dc4c = _0x5e7f1c[_0x3091b7(0xd2c)]['Core']['MainUI']['KillsText']['x'];
                                _0x5e7f1c['default'][_0x3091b7(0x1043)]['MainUI'][_0x3091b7(0x90b)]['y'], this['totalText'] = new Phaser[(_0x3091b7(0xbf2))][(_0x3091b7(0x1660))](this[_0x3091b7(0x6d2)], _0x52dc4c, 0x10, 'fingerFont', '0')[_0x3091b7(0xf8e)](0.5)['setAlpha'](0x0)['setScrollFactor'](0x0)['setDepth'](_0x3d5964[_0x3091b7(0xd2c)]['ZInGameUI']), this['scene'][_0x3091b7(0x18bd)]['existing'](this[_0x3091b7(0x17a8)]);
                            }
                            if (!this['clapSpriteL']) {
                                let _0x444ab0 = this['logoSprite']['x'],
                                    _0x377fac = this['logoSprite']['y'];
                                this[_0x3091b7(0x4a9)] = this[_0x3091b7(0x6d2)][_0x3091b7(0x18bd)][_0x3091b7(0x105b)](_0x444ab0 + 0x8, _0x377fac, 'enemiesM', 'hand_clap_L.png')[_0x3091b7(0xf8e)](0x1, 0.5)['setScale'](0x1)['setAlpha'](0x0)['setScrollFactor'](0x0)['setDepth'](_0x3d5964[_0x3091b7(0xd2c)][_0x3091b7(0x55d)] - 0x4), this[_0x3091b7(0x2d1)] = this[_0x3091b7(0x6d2)][_0x3091b7(0x18bd)][_0x3091b7(0x105b)](_0x444ab0 - 0x8, _0x377fac, 'enemiesM', 'hand_clap_R.png')[_0x3091b7(0xf8e)](0x0, 0.5)[_0x3091b7(0x8a2)](0x1)[_0x3091b7(0xdab)](0x0)[_0x3091b7(0xd87)](0x0)[_0x3091b7(0xb4a)](_0x3d5964[_0x3091b7(0xd2c)][_0x3091b7(0x55d)] - 0x4);
                            }
                            this['logoSprite']['setFrame']('BronzeFinger.png'), this[_0x3091b7(0x1827)]['setFrame']('BronzeFinger.png'), null === (_0x15be17 = this[_0x3091b7(0x14dd)]) || void 0x0 === _0x15be17 || _0x15be17[_0x3091b7(0x1a34)](), null === (_0x1b3698 = this['logoTween2']) || void 0x0 === _0x1b3698 || _0x1b3698[_0x3091b7(0x1a34)](), this['logoTween1'] = this['scene'][_0x3091b7(0x12a1)][_0x3091b7(0x18bd)]({
                                'targets': [this['logoSprite'], this[_0x3091b7(0x17a8)]],
                                'alpha': 0x1,
                                'angle': -0x2,
                                'duration': 0x12c,
                                'scale': 0x1,
                                'onComplete': () => {
                                    const _0x38e44c = _0x3091b7;
                                    this[_0x38e44c(0x17a8)][_0x38e44c(0x9b5)](0x0), this['logoTween2'] = this[_0x38e44c(0x6d2)]['tweens'][_0x38e44c(0x18bd)]({
                                        'targets': this[_0x38e44c(0x1667)],
                                        'angle': 0x2,
                                        'duration': 0x3e8,
                                        'yoyo': !0x0,
                                        'repeat': -0x1,
                                        'onStart': () => {
                                            const _0x12faad = _0x38e44c;
                                            this['logoSprite'][_0x12faad(0x9b5)](-0x2), this['logoSprite'][_0x12faad(0x8a2)](0x1);
                                        }
                                    });
                                }
                            }), this[_0x3091b7(0x63b)]['HasGFBonus'] = !0x0, this[_0x3091b7(0x215)] = -0x1, this['player'][_0x3091b7(0xe0e)] += this['GFCooldownBonus'];
                            for (let _0x3373e7 = 0x0; _0x3373e7 < _0x5e7f1c['default'][_0x3091b7(0x1043)][_0x3091b7(0x506)][_0x3091b7(0xed9)]; _0x3373e7++) {
                                const _0x3fb3da = _0x5e7f1c['default']['Core'][_0x3091b7(0x506)][_0x3373e7];
                                _0x3fb3da[_0x3091b7(0xc1c)] || _0x3fb3da['Fire']();
                            }
                            _0x5e7f1c[_0x3091b7(0xd2c)][_0x3091b7(0x1043)][_0x3091b7(0x17c7)]['minimum'] = _0x5e7f1c[_0x3091b7(0xd2c)]['Core']['Stage']['maximum'] = 0x1f4, _0x5e7f1c['default'][_0x3091b7(0x1043)]['Stage']['SwarmCheck']();
                        }
                    } ['GoldenFingerUpdate'](_0x327623) {
                        const _0x3de5b5 = _0x2ee54f;
                        var _0x5d62fe, _0x144fd8, _0x5c27d7, _0x18f63f;
                        if (this[_0x3de5b5(0x63b)]['HasGFBonus']) {
                            this['ElapsedGFBonusTime'] += _0x327623;
                            let _0x265042 = this[_0x3de5b5(0x1264)];
                            this[_0x3de5b5(0xf44)] >= _0x265042 - 0x7d0 && this[_0x3de5b5(0x824)] && (this[_0x3de5b5(0x824)][_0x3de5b5(0xe71)] = 0x1 - (this['ElapsedGFBonusTime'] - (_0x265042 - 0x7d0)) / 0x3e8), this[_0x3de5b5(0xf44)] >= _0x265042 && (this[_0x3de5b5(0x824)] && this[_0x3de5b5(0x824)][_0x3de5b5(0x183f)](!0x1), this['player'][_0x3de5b5(0x196e)] = !0x1, this[_0x3de5b5(0x63b)][_0x3de5b5(0xe0e)] -= this['GFCooldownBonus'], _0x5e7f1c['default']['Core'][_0x3de5b5(0x17c7)]['minimum'] = _0x5e7f1c['default']['Core'][_0x3de5b5(0x17c7)][_0x3de5b5(0x251)], _0x5e7f1c[_0x3de5b5(0xd2c)][_0x3de5b5(0x1043)][_0x3de5b5(0x17c7)][_0x3de5b5(0x269)] = _0x5e7f1c['default'][_0x3de5b5(0x1043)][_0x3de5b5(0x17c7)]['lastMaximum'], this[_0x3de5b5(0x5a5)]()), this[_0x3de5b5(0xb0a)] = this[_0x3de5b5(0x1a25)];
                            let _0xff9613 = this['CurrentEnemiesCounter'];
                            for (let _0x1c483d = 0x0; _0x1c483d < this['thresholds'][_0x3de5b5(0xed9)]; _0x1c483d++) _0xff9613 >= this['thresholds'][_0x1c483d] + _0x5e7f1c[_0x3de5b5(0xd2c)][_0x3de5b5(0x1043)][_0x3de5b5(0x10f6)][_0x3de5b5(0x5e3)] * (0x1 + _0x1c483d) && (this[_0x3de5b5(0x1667)]['setFrame'](this[_0x3de5b5(0xf7c)][_0x1c483d]), this['logoSpriteShadow'][_0x3de5b5(0x381)](this['frames'][_0x1c483d]), this[_0x3de5b5(0x17a8)][_0x3de5b5(0xb34)](this['fontTints'][_0x1c483d]), this[_0x3de5b5(0x8cb)] = this[_0x3de5b5(0x12d2)][_0x1c483d], this[_0x3de5b5(0x1a25)] = _0x1c483d);
                            this['totalText']['setText'](_0xff9613[_0x3de5b5(0xcc6)]()), this[_0x3de5b5(0x17a8)][_0x3de5b5(0x8a2)](this['Approach'](this['totalText']['scale'], this[_0x3de5b5(0x8cb)], 0.001 * _0x327623)), this[_0x3de5b5(0x1827)]['setAngle'](this[_0x3de5b5(0x1667)][_0x3de5b5(0xd96)]), this['previousAwardReached'] != this['awardReached'] ? (this['previousAwardReached'] = this[_0x3de5b5(0x1a25)], this['shadowBumps'] += 0x1, null === (_0x5d62fe = this['shadowTween']) || void 0x0 === _0x5d62fe || _0x5d62fe['stop'](), this['shadowTween'] = this[_0x3de5b5(0x6d2)]['tweens']['add']({
                                'targets': this[_0x3de5b5(0x1827)],
                                'alpha': 0.35,
                                'duration': 0x96,
                                'scaleX': 1.85,
                                'scaleY': 2.15,
                                'yoyo': !0x0,
                                'ease': 'Bounce.easeInOut',
                                'onStart': () => {
                                    const _0x4ac297 = _0x3de5b5;
                                    this[_0x4ac297(0x1827)]['setAlpha'](0.65), this[_0x4ac297(0x1827)][_0x4ac297(0x8a2)](0x0);
                                }
                            }), null === (_0x144fd8 = this[_0x3de5b5(0x822)]) || void 0x0 === _0x144fd8 || _0x144fd8[_0x3de5b5(0x1a34)](), this[_0x3de5b5(0x822)] = this['scene']['tweens']['add']({
                                'targets': this[_0x3de5b5(0x1667)],
                                'scale': 1.65,
                                'duration': 0x96,
                                'yoyo': !0x0,
                                'ease': 'Bounce.easeInOut',
                                'onStart': () => {
                                    this['logoSprite']['setScale'](0x1);
                                }
                            })) : _0xff9613 / 0x64 > this['shadowBumps'] && (this['shadowBumps'] += 0x1, null === (_0x5c27d7 = this[_0x3de5b5(0xb2b)]) || void 0x0 === _0x5c27d7 || _0x5c27d7['stop'](), this[_0x3de5b5(0xb2b)] = this['scene'][_0x3de5b5(0x12a1)][_0x3de5b5(0x18bd)]({
                                'targets': this['logoSpriteShadow'],
                                'alpha': 0.35,
                                'duration': 0x96,
                                'scaleX': 1.65,
                                'scaleY': 1.75,
                                'yoyo': !0x0,
                                'ease': 'Bounce.easeInOut',
                                'onStart': () => {
                                    const _0xa3ac37 = _0x3de5b5;
                                    this[_0xa3ac37(0x1827)]['setAlpha'](0.65), this[_0xa3ac37(0x1827)]['setScale'](0x0);
                                }
                            }), null === (_0x18f63f = this[_0x3de5b5(0x822)]) || void 0x0 === _0x18f63f || _0x18f63f[_0x3de5b5(0x1a34)](), this['logoTween3'] = this[_0x3de5b5(0x6d2)][_0x3de5b5(0x12a1)][_0x3de5b5(0x18bd)]({
                                'targets': this['logoSprite'],
                                'scale': 1.35,
                                'duration': 0x96,
                                'yoyo': !0x0,
                                'ease': 'Bounce.easeInOut',
                                'onStart': () => {
                                    const _0x6480f = _0x3de5b5;
                                    this[_0x6480f(0x1667)][_0x6480f(0x8a2)](0x1);
                                }
                            }));
                        }
                    } ['DoExitAnimation']() {
                        const _0x551cd4 = _0x2ee54f;
                        var _0x1d8717, _0x36828b, _0x352aca, _0x1c08cb, _0x488923;
                        let _0x48a187 = this[_0x551cd4(0x1a25)];
                        if (null === (_0x1d8717 = this['logoTween1']) || void 0x0 === _0x1d8717 || _0x1d8717[_0x551cd4(0x1a34)](), null === (_0x36828b = this[_0x551cd4(0xc58)]) || void 0x0 === _0x36828b || _0x36828b['stop'](), this[_0x551cd4(0x1667)]['setAngle'](0x0), null === (_0x352aca = this['ExitTween']) || void 0x0 === _0x352aca || _0x352aca[_0x551cd4(0x1a34)](), this['ExitTween'] = this['scene']['tweens'][_0x551cd4(0x18bd)]({
                                'targets': [this[_0x551cd4(0x1667)], this['totalText']],
                                'scale': 0x0,
                                'duration': 0x1f4,
                                'delay': 0x7d0,
                                'onComplete': () => {
                                    const _0x5a426e = _0x551cd4;
                                    this[_0x5a426e(0x1a6b)](_0x48a187);
                                }
                            }), _0x48a187 >= 0x2) {
                            let _0x183147 = this['logoSprite']['x'],
                                _0x298a3a = this[_0x551cd4(0x1667)]['y'];
                            this['clapSpriteL']['setPosition'](_0x183147 + 0x8, _0x298a3a), this[_0x551cd4(0x2d1)][_0x551cd4(0x726)](_0x183147 - 0x8, _0x298a3a), this['clapSpriteL']['setAngle'](0x0), this[_0x551cd4(0x4a9)]['setAngle'](0x0), null === (_0x1c08cb = this['ClapTweenL']) || void 0x0 === _0x1c08cb || _0x1c08cb[_0x551cd4(0x1a34)](), this[_0x551cd4(0x130c)] = this[_0x551cd4(0x6d2)][_0x551cd4(0x12a1)]['add']({
                                'targets': this[_0x551cd4(0x4a9)],
                                'x': this[_0x551cd4(0x4a9)]['x'] - 0x6,
                                'angle': -0x5,
                                'duration': 0xc8,
                                'delay': 0x5dc,
                                'repeat': 0x8,
                                'onStart': () => {
                                    const _0x5a7d8a = _0x551cd4;
                                    _0x5e7f1c[_0x5a7d8a(0xd2c)][_0x5a7d8a(0x1267)]['PlaySound'](_0x2b6e81['default'][_0x5a7d8a(0x9f5)], {
                                        'volume': 0x1,
                                        'rate': 0x1
                                    }, 0x7d0, 0x1), this[_0x5a7d8a(0x4a9)][_0x5a7d8a(0xdab)](0x1);
                                }
                            }), null === (_0x488923 = this['ClapTweenR']) || void 0x0 === _0x488923 || _0x488923['stop'](), this['ClapTweenR'] = this['scene'][_0x551cd4(0x12a1)][_0x551cd4(0x18bd)]({
                                'targets': this['clapSpriteR'],
                                'x': this[_0x551cd4(0x2d1)]['x'] + 0x6,
                                'angle': 0x2,
                                'duration': 0xc8,
                                'delay': 0x5dc,
                                'repeat': 0x8,
                                'onStart': () => {
                                    const _0x32278d = _0x551cd4;
                                    this[_0x32278d(0x2d1)]['setAlpha'](0x1);
                                },
                                'onComplete': () => {
                                    const _0x2beda6 = _0x551cd4;
                                    var _0x1eaabc;
                                    null === (_0x1eaabc = this['ClapAlphaTween']) || void 0x0 === _0x1eaabc || _0x1eaabc['stop'](), this[_0x2beda6(0x6f2)] = this['scene'][_0x2beda6(0x12a1)][_0x2beda6(0x18bd)]({
                                        'targets': [this['clapSpriteL'], this['clapSpriteR']],
                                        'duration': 0xc8,
                                        'alpha': 0x0
                                    });
                                }
                            });
                        }
                    } ['GiveAward'](_0x263480 = 0x0) {
                        const _0x55ebbc = _0x2ee54f;
                        switch (_0x263480) {
                            case 0x0:
                                _0x5e7f1c['default']['Core'][_0x55ebbc(0x10f6)]['hp'] < _0x5e7f1c[_0x55ebbc(0xd2c)][_0x55ebbc(0x1043)][_0x55ebbc(0x10f6)][_0x55ebbc(0xd2e)] && _0x5e7f1c['default'][_0x55ebbc(0x1043)]['Stage']['stageEventManager'][_0x55ebbc(0x898)](), _0x5e7f1c[_0x55ebbc(0xd2c)][_0x55ebbc(0x1043)][_0x55ebbc(0x506)][_0x55ebbc(0xed9)] < 0x7 && this[_0x55ebbc(0x178a)]([_0x44a537[_0x55ebbc(0xd2c)][_0x55ebbc(0xd55)], _0x44a537['default']['CHERRY'], _0x44a537[_0x55ebbc(0xd2c)][_0x55ebbc(0x10d6)], _0x44a537['default']['FLOWER']]);
                                break;
                            case 0x1:
                                _0x5e7f1c['default'][_0x55ebbc(0x1043)]['Player']['hp'] < _0x5e7f1c[_0x55ebbc(0xd2c)][_0x55ebbc(0x1043)][_0x55ebbc(0x10f6)]['maxHp'] && _0x5e7f1c['default'][_0x55ebbc(0x1043)][_0x55ebbc(0x17c7)][_0x55ebbc(0x104c)][_0x55ebbc(0x898)](), this[_0x55ebbc(0x1166)]([_0x571659[_0x55ebbc(0xd2c)]['CLOVER']]), this[_0x55ebbc(0x1166)]([_0x571659[_0x55ebbc(0xd2c)][_0x55ebbc(0xd68)], _0x571659['default']['NFT'], _0x571659['default']['ROSARY']]), this[_0x55ebbc(0x1476)](!0x1, 0x20);
                                break;
                            case 0x2: {
                                _0x5e7f1c[_0x55ebbc(0xd2c)]['Core']['Player']['hp'] < _0x5e7f1c[_0x55ebbc(0xd2c)][_0x55ebbc(0x1043)][_0x55ebbc(0x10f6)][_0x55ebbc(0xd2e)] && _0x5e7f1c[_0x55ebbc(0xd2c)][_0x55ebbc(0x1043)]['Stage']['stageEventManager'][_0x55ebbc(0x194e)]();
                                let _0x252790 = _0x5e7f1c['default'][_0x55ebbc(0x1043)]['Player']['x'],
                                    _0x214ec6 = _0x5e7f1c[_0x55ebbc(0xd2c)]['Core'][_0x55ebbc(0x10f6)]['y'] + 0.4 * this[_0x55ebbc(0x6d2)]['renderer'][_0x55ebbc(0x140e)],
                                    _0x4d884e = [0x3, 0x21, 0x64],
                                    _0x4d73e0 = [_0x43869f[_0x55ebbc(0xd2c)]['EXISTING_ANY'], _0x43869f[_0x55ebbc(0xd2c)][_0x55ebbc(0xf9c)], _0x43869f['default'][_0x55ebbc(0xf9c)], _0x43869f[_0x55ebbc(0xd2c)][_0x55ebbc(0xf9c)], _0x43869f['default'][_0x55ebbc(0xf9c)]],
                                    _0x41c595 = new _0x35030a[(_0x55ebbc(0xd2c))](_0x4d884e, _0x4d73e0);
                                _0x5e7f1c[_0x55ebbc(0xd2c)][_0x55ebbc(0x1043)]['Stage']['SetTreasureLevelFromChance'](_0x41c595), _0x5e7f1c['default']['Core'][_0x55ebbc(0x2ce)](_0x252790, _0x214ec6, _0x41c595), _0x5e7f1c[_0x55ebbc(0xd2c)][_0x55ebbc(0x1043)][_0x55ebbc(0x503)]['ShowHighlightAt'](_0x252790, _0x214ec6), this['SendCoins'](!0x1, 0x40);
                            }
                            break;
                            case 0x3: {
                                let _0x1e5c36 = _0x5e7f1c[_0x55ebbc(0xd2c)][_0x55ebbc(0x1043)]['Player']['x'],
                                    _0x2c94dc = _0x5e7f1c[_0x55ebbc(0xd2c)][_0x55ebbc(0x1043)][_0x55ebbc(0x10f6)]['y'] + 0.4 * this[_0x55ebbc(0x6d2)]['renderer']['height'],
                                    _0x7931f3 = [0x3, 0x21, 0x64],
                                    _0x548f2a = [_0x43869f[_0x55ebbc(0xd2c)]['EVOLUTION'], _0x43869f[_0x55ebbc(0xd2c)][_0x55ebbc(0x18fa)], _0x43869f[_0x55ebbc(0xd2c)][_0x55ebbc(0x18fa)], _0x43869f[_0x55ebbc(0xd2c)]['EVOLUTION'], _0x43869f['default'][_0x55ebbc(0x18fa)]],
                                    _0x27f720 = new _0x35030a['default'](_0x7931f3, _0x548f2a);
                                _0x5e7f1c[_0x55ebbc(0xd2c)]['Core']['Stage']['SetTreasureLevelFromChance'](_0x27f720), _0x5e7f1c[_0x55ebbc(0xd2c)]['Core'][_0x55ebbc(0x2ce)](_0x1e5c36, _0x2c94dc, _0x27f720), _0x5e7f1c['default']['Core'][_0x55ebbc(0x503)][_0x55ebbc(0xf96)](_0x1e5c36, _0x2c94dc), this[_0x55ebbc(0x1476)](!0x0, 0x20);
                            }
                            break;
                            case 0x4: {
                                let _0x25e5de = _0x5e7f1c[_0x55ebbc(0xd2c)][_0x55ebbc(0x1043)]['Player']['x'],
                                    _0xe1909b = _0x5e7f1c[_0x55ebbc(0xd2c)][_0x55ebbc(0x1043)][_0x55ebbc(0x10f6)]['y'] + 0.4 * this[_0x55ebbc(0x6d2)][_0x55ebbc(0x12f9)][_0x55ebbc(0x140e)],
                                    _0x2c591a = [0x3, 0x21, 0x64],
                                    _0x6ffaaa = [_0x43869f[_0x55ebbc(0xd2c)]['EVOLUTION'], _0x43869f['default'][_0x55ebbc(0x18fa)], _0x43869f[_0x55ebbc(0xd2c)]['EVOLUTION'], _0x43869f[_0x55ebbc(0xd2c)][_0x55ebbc(0x18fa)], _0x43869f['default'][_0x55ebbc(0x18fa)]],
                                    _0x5cf803 = new _0x35030a[(_0x55ebbc(0xd2c))](_0x2c591a, _0x6ffaaa);
                                _0x5e7f1c[_0x55ebbc(0xd2c)]['Core'][_0x55ebbc(0x17c7)][_0x55ebbc(0xab4)](_0x5cf803), _0x5e7f1c[_0x55ebbc(0xd2c)]['Core'][_0x55ebbc(0x2ce)](_0x25e5de, _0xe1909b, _0x5cf803), _0x5e7f1c['default'][_0x55ebbc(0x1043)][_0x55ebbc(0x503)]['ShowHighlightAt'](_0x25e5de, _0xe1909b);
                                let _0xf58c9a = [_0x44a537['default'][_0x55ebbc(0x1c8)], _0x44a537['default'][_0x55ebbc(0x957)], _0x44a537[_0x55ebbc(0xd2c)]['VICTORY']],
                                    _0xb349b9 = _0x5e7f1c[_0x55ebbc(0xd2c)][_0x55ebbc(0x1043)][_0x55ebbc(0x506)][_0x55ebbc(0x9d4)](_0x2070fc => 0x1 != _0x2070fc[_0x55ebbc(0xc1c)])[_0x55ebbc(0xed9)];
                                _0xb349b9 < 0x6 && _0xf58c9a[_0x55ebbc(0x1564)](_0x44a537['default']['CANDYBOX']), _0xb349b9 < 0x7 && !_0x5e7f1c[_0x55ebbc(0xd2c)][_0x55ebbc(0x1043)]['HasAnimaWeapon']() && (_0xf58c9a[_0x55ebbc(0x1564)](_0x44a537[_0x55ebbc(0xd2c)][_0x55ebbc(0x141e)]), _0xf58c9a[_0x55ebbc(0x1564)](_0x44a537['default'][_0x55ebbc(0x3b0)])), this[_0x55ebbc(0x178a)](_0xf58c9a), this['SendCoins'](!0x0, 0x40);
                            }
                        }
                    } ['MakeItem'](_0x52eb13) {
                        const _0x306ca4 = _0x2ee54f;
                        let _0x4981d3 = Phaser[_0x306ca4(0x24f)][_0x306ca4(0x82a)]['pick'](_0x52eb13),
                            _0x1e6daa = _0x5e7f1c[_0x306ca4(0xd2c)]['Core'][_0x306ca4(0x10f6)]['x'],
                            _0x291d97 = _0x5e7f1c['default'][_0x306ca4(0x1043)]['Player']['y'] + 0.45 * this[_0x306ca4(0x6d2)][_0x306ca4(0x12f9)][_0x306ca4(0x140e)];
                        _0x5e7f1c[_0x306ca4(0xd2c)][_0x306ca4(0x1043)]['MakeStagePickup'](_0x1e6daa, _0x291d97, _0x4981d3), _0x5e7f1c['default'][_0x306ca4(0x1043)][_0x306ca4(0x503)]['ShowHighlightAt'](_0x1e6daa, _0x291d97);
                    } ['GiveRandomWeapon'](_0x21e172) {
                        const _0xdfb9a6 = _0x2ee54f;
                        let _0x2289aa = [];
                        for (let _0x532618 = 0x0; _0x532618 < _0x21e172['length']; _0x532618++) _0x5e7f1c['default'][_0xdfb9a6(0x1043)]['Weapons'][_0xdfb9a6(0x5ae)](_0x5015c6 => _0x5015c6['bulletType'] === _0x21e172[_0x532618]) < 0x0 && _0x2289aa['push'](_0x21e172[_0x532618]);
                        if (_0x2289aa['length'] > 0x0) {
                            let _0x31bb4a = Phaser['Math'][_0xdfb9a6(0x82a)]['pick'](_0x2289aa),
                                _0x1b54ad = _0x5e7f1c['default'][_0xdfb9a6(0x1043)][_0xdfb9a6(0x10f6)]['x'],
                                _0x1536bd = _0x5e7f1c['default'][_0xdfb9a6(0x1043)][_0xdfb9a6(0x10f6)]['y'];
                            _0x5e7f1c['default']['Core'][_0xdfb9a6(0x13f8)](_0x1b54ad, _0x1536bd, _0x571659['default']['WEAPON'], _0x31bb4a);
                        }
                    } ['SendCoins'](_0x1b134e = !0x1, _0x33a775 = 0x20) {
                        const _0x2e41bb = _0x2ee54f;
                        let _0x221ae0 = new Phaser['Geom']['Ellipse'](0x0, 0x0, 1.4 * this[_0x2e41bb(0x6d2)][_0x2e41bb(0x12f9)]['width'], 1.4 * this['scene'][_0x2e41bb(0x12f9)]['height'])['getPoints'](0x20),
                            _0x42cb1b = _0x33a775;
                        Math['PI'], this['scene'][_0x2e41bb(0x12f9)][_0x2e41bb(0x173c)];
                        for (let _0x176a5e = 0x0; _0x176a5e < _0x42cb1b; _0x176a5e++) {
                            let _0x2ac549 = _0x5e7f1c[_0x2e41bb(0xd2c)][_0x2e41bb(0x1043)][_0x2e41bb(0x10f6)]['x'] + _0x221ae0[_0x176a5e % 0x20]['x'],
                                _0x34de67 = _0x5e7f1c['default'][_0x2e41bb(0x1043)]['Player']['y'] + _0x221ae0[_0x176a5e % 0x20]['y'],
                                _0x264942 = _0x1b134e ? Phaser[_0x2e41bb(0x24f)]['RND'][_0x2e41bb(0x198c)]([_0x571659[_0x2e41bb(0xd2c)][_0x2e41bb(0x1a10)], _0x571659['default'][_0x2e41bb(0x1a10)], _0x571659[_0x2e41bb(0xd2c)][_0x2e41bb(0x1a10)], _0x571659[_0x2e41bb(0xd2c)][_0x2e41bb(0x1a10)], _0x571659['default']['COIN'], _0x571659[_0x2e41bb(0xd2c)][_0x2e41bb(0x1143)], _0x571659[_0x2e41bb(0xd2c)]['COINBAG2'], _0x571659[_0x2e41bb(0xd2c)][_0x2e41bb(0x13f5)]]) : _0x571659['default']['COIN'],
                                _0x2d24ea = _0x5e7f1c['default']['Core']['MakePickup'](_0x2ac549, _0x34de67, _0x264942);
                            _0x2d24ea[_0x2e41bb(0x12a8)] = !0x0, _0x2d24ea[_0x2e41bb(0x915)] = 0x1, _0x2d24ea['speed'] = 0xfa - _0x176a5e;
                        }
                    } ['Approach'](_0x224408, _0x1bcc9f, _0x4f7f78) {
                        return _0x224408 < _0x1bcc9f ? Math['min'](_0x224408 + _0x4f7f78, _0x1bcc9f) : Math['max'](_0x224408 - _0x4f7f78, _0x1bcc9f);
                    }
                }
                _0x17f169['GoldFingerManager'] = _0x12b01d, _0x17f169['default'] = _0x12b01d;
            };
