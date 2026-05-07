// Module 0x5344
// Args: _0x21552f, _0x362195, _0x6d2707

export default (_0x21552f, _0x362195, _0x6d2707) => {
                'use strict';
                const _0x493e00 = a0_0x6932;
                var _0xfcbf0b = this && this['__importDefault'] || function(_0x59071b) {
                    const _0xaaf362 = a0_0x6932;
                    return _0x59071b && _0x59071b['__esModule'] ? _0x59071b : {
                        'default': _0x59071b
                    };
                };
                Object['defineProperty'](_0x362195, '__esModule', {
                    'value': !0x0
                });
                const _0x982e03 = _0xfcbf0b(_0x6d2707(0x5f07)),
                    _0x1ace77 = _0xfcbf0b(_0x6d2707(0x1715a)),
                    _0x4f9e63 = _0xfcbf0b(_0x6d2707(0xdb1c)),
                    _0x38c7e5 = _0xfcbf0b(_0x6d2707(0xc42e)),
                    _0x2bc89e = _0xfcbf0b(_0x6d2707(0x54e3)),
                    _0x11434e = _0x6d2707(0x18304),
                    _0x5ef5c3 = _0xfcbf0b(_0x6d2707(0x1fd7)),
                    _0x19084f = _0xfcbf0b(_0x6d2707(0x9bda));
                class _0x5ef0a2 extends _0x4f9e63['default'] {
                    constructor(_0x2b9526) {
                        const _0x51c2ef = _0x493e00;
                        super(_0x2b9526), this['hasMovingBG'] = !0x0, this[_0x51c2ef(0x995)] = {
                            'x': 0x400,
                            'y': 0x600
                        }, this['colorsTop'] = [0x880000, 0x888800, 0x8888, 0x88, 0x880088], this[_0x51c2ef(0x10ed)] = [0x220000, 0x222200, 0x2222, 0x22, 0x220022], this['colorIndex'] = 0x0, this['canChangeColor'] = !0x1, this[_0x51c2ef(0x6f9)] = 0x0, this[_0x51c2ef(0x77a)] = !0x1, this['sphereShaderScrollX'] = 0x0, this[_0x51c2ef(0xbbe)] = 0x0, this['customBG'] = !0x1, this['canPizza'] = !0x1, this['isTilesetVisible'] = !0x0, this['isCheckerBoardVisible'] = !0x1, this['isSphereVisible'] = !0x1;
                    } ['Create']() {
                        const _0x1b2109 = _0x493e00;
                        this[_0x1b2109(0x77a)] = !0x1, this[_0x1b2109(0x175)]();
                    } ['InitVFX']() {
                        const _0x43b404 = _0x493e00;
                        if (this['sphereShader'] = this[_0x43b404(0x6d2)][_0x43b404(0x18bd)]['shader']('gottaSphereFast', 0x0, 0x0, 0.5 * this['scene'][_0x43b404(0x12f9)][_0x43b404(0x173c)], 0.5 * this['scene'][_0x43b404(0x12f9)][_0x43b404(0x140e)]), this[_0x43b404(0xaf8)][_0x43b404(0x1a76)]('rt_gottaSphereFast'), this['sphereImage'] = this[_0x43b404(0x6d2)][_0x43b404(0x18bd)]['image'](0.5 * this[_0x43b404(0x6d2)][_0x43b404(0x12f9)]['width'], 0.5 * this[_0x43b404(0x6d2)]['renderer']['height'], 'rt_gottaSphereFast')[_0x43b404(0xf8e)](0.5)[_0x43b404(0xd87)](0x0)[_0x43b404(0x8a2)](0x2)[_0x43b404(0xb4a)](-0x2328)['setVisible'](!0x1), this['checkerboardShader'] = this['scene']['add']['shader']('rainbowCheckerboard', 0x0, 0x0, 0.5 * this['scene'][_0x43b404(0x12f9)][_0x43b404(0x173c)], 0.5 * this[_0x43b404(0x6d2)][_0x43b404(0x12f9)][_0x43b404(0x140e)]), this['checkerboardShader']['setRenderToTexture']('rt_rainbowCheckerboard'), this[_0x43b404(0x13e6)] = this[_0x43b404(0x6d2)]['add'][_0x43b404(0x568)](0.5 * this[_0x43b404(0x6d2)][_0x43b404(0x12f9)][_0x43b404(0x173c)], 0.5 * this['scene'][_0x43b404(0x12f9)]['height'], 'rt_rainbowCheckerboard')['setOrigin'](0.5)[_0x43b404(0xd87)](0x0)[_0x43b404(0x8a2)](0x4)['setDepth'](-0x2710)['setVisible'](!0x1), this['screenFlash'] = this['scene'][_0x43b404(0x18bd)][_0x43b404(0x105b)](0x0, 0x0, 'vfx', 'WhiteDot.png')['setScrollFactor'](0x0)['setScale'](this[_0x43b404(0x6d2)][_0x43b404(0x12f9)]['width'], this[_0x43b404(0x6d2)][_0x43b404(0x12f9)][_0x43b404(0x140e)])['setAlpha'](0x0)[_0x43b404(0xf8e)](0x0)['setDepth'](0x2710), this[_0x43b404(0x1629)] = [], _0x982e03[_0x43b404(0xd2c)]['Core']['Stage']['tilingTileset'] && _0x982e03[_0x43b404(0xd2c)][_0x43b404(0x1043)][_0x43b404(0x17c7)][_0x43b404(0xbef)]['layerContainers'])
                            for (let _0x14932a = 0x0; _0x14932a < _0x982e03[_0x43b404(0xd2c)]['Core']['Stage'][_0x43b404(0xbef)][_0x43b404(0x730)][_0x43b404(0xed9)]; _0x14932a++) {
                                const _0x273ea3 = _0x982e03[_0x43b404(0xd2c)][_0x43b404(0x1043)]['Stage'][_0x43b404(0xbef)][_0x43b404(0x730)][_0x14932a];
                                for (let _0x5517f1 = 0x0; _0x5517f1 < _0x273ea3[_0x43b404(0x1629)][_0x43b404(0xed9)]; _0x5517f1++) {
                                    const _0x4e8273 = _0x273ea3[_0x43b404(0x1629)][_0x5517f1];
                                    'Shadows' != _0x4e8273[_0x43b404(0x226)] && 'ShadowDecals' != _0x4e8273['name'] && this['layers'][_0x43b404(0x1564)](_0x4e8273);
                                }
                            }
                    } ['OnInitCompleted']() {
                        const _0x37d617 = _0x493e00;
                        _0x982e03[_0x37d617(0xd2c)]['Core'][_0x37d617(0xfa8)][_0x37d617(0x1402)]['setTint'](0x0), _0x982e03[_0x37d617(0xd2c)][_0x37d617(0x1043)][_0x37d617(0xfa8)]['bgtile']['setAlpha'](0x0), this[_0x37d617(0x17b6)] = !0x1, this[_0x37d617(0x1a38)] = setTimeout(() => {
                            const _0x95d7c9 = _0x37d617;
                            this[_0x95d7c9(0x142b)]();
                        }, 0x27d8), _0x982e03[_0x37d617(0xd2c)]['Core'][_0x37d617(0x17c7)][_0x37d617(0xbef)][_0x37d617(0x675)] && _0x982e03[_0x37d617(0xd2c)][_0x37d617(0x1043)]['PlayerOptions']['VisuallyInvertStages'] && (this[_0x37d617(0x995)]['y'] -= 0x400), _0x982e03[_0x37d617(0xd2c)][_0x37d617(0x1043)][_0x37d617(0x14d8)][_0x37d617(0x1481)]['indexOf'](_0x38c7e5['default']['RELIC_CHARM']) > -0x1 && _0x982e03['default'][_0x37d617(0x1043)][_0x37d617(0x14d8)][_0x37d617(0x1481)][_0x37d617(0x1303)](_0x38c7e5[_0x37d617(0xd2c)][_0x37d617(0xa41)]) > -0x1 && (this[_0x37d617(0xa09)] = !0x0, this[_0x37d617(0x193e)](), this['MakeRings']());
                    } ['StartColorChange']() {
                        const _0x5255d2 = _0x493e00;
                        this['scene']['add']['tween']({
                            'targets': _0x982e03[_0x5255d2(0xd2c)][_0x5255d2(0x1043)]['BGMan'][_0x5255d2(0x1402)],
                            'alpha': 0x1,
                            'duration': 0xc8
                        }), this[_0x5255d2(0x6d2)][_0x5255d2(0x18bd)][_0x5255d2(0x99a)]({
                            'targets': this,
                            'lerpV': 0x1,
                            'duration': 0x2710,
                            'repeat': -0x1,
                            'onRepeat': () => {
                                const _0x1be479 = _0x5255d2;
                                this[_0x1be479(0x6f9)] = 0x0, this['colorIndex']++, this[_0x1be479(0xa79)] >= this[_0x1be479(0xa8b)]['length'] && (this['colorIndex'] = 0x0);
                            }
                        }), this['colorIndex'] = 0x0, this['canChangeColor'] = !0x0;
                    } ['Update'](_0x4db7f7) {
                        const _0x4cee61 = _0x493e00;
                        if (this['canChangeColor'] && this['ChangeColor'](), 0x0 != _0x982e03['default']['Core'][_0x4cee61(0x10f6)][_0x4cee61(0xcf9)][_0x4cee61(0xf4e)]['x'] || 0x0 != _0x982e03['default'][_0x4cee61(0x1043)]['Player'][_0x4cee61(0xcf9)]['velocity']['y']) {
                            var _0x3c3ec2 = _0x982e03['default'][_0x4cee61(0x1043)]['Player'][_0x4cee61(0xcf9)][_0x4cee61(0xf4e)]['x'],
                                _0x100430 = _0x982e03[_0x4cee61(0xd2c)][_0x4cee61(0x1043)]['Player'][_0x4cee61(0xcf9)][_0x4cee61(0xf4e)]['y'];
                            this[_0x4cee61(0xaf8)]['setUniform']('scrollX.value', this[_0x4cee61(0x1632)]), this['sphereShader'][_0x4cee61(0x1342)]('scrollY.value', this[_0x4cee61(0xbbe)]), this[_0x4cee61(0x1632)] += _0x3c3ec2, this['sphereShaderScrollY'] += _0x100430;
                        }
                        this['canPizza'] && this['CheckPizzas'](), this[_0x4cee61(0x13e6)][_0x4cee61(0xd96)] += 0.25;
                    } ['OnDestroy']() {
                        const _0x40dae1 = _0x493e00;
                        clearTimeout(this[_0x40dae1(0x1a38)]);
                    } ['ChangeColor']() {
                        const _0x1be594 = _0x493e00;
                        if (this[_0x1be594(0x77a)]) return void _0x982e03[_0x1be594(0xd2c)][_0x1be594(0x1043)][_0x1be594(0xfa8)][_0x1be594(0x1402)]['setTint'](0x6495ed, 0x6495ed, 0xe1522, 0xe1522);
                        let _0x3a9e96 = this['colorIndex'] + 0x1 >= this['colorsTop'][_0x1be594(0xed9)] ? 0x0 : this[_0x1be594(0xa79)] + 0x1,
                            _0x361e5d = this[_0x1be594(0xa8b)][this[_0x1be594(0xa79)]],
                            _0x228e8d = this['colorsBottom'][this[_0x1be594(0xa79)]],
                            _0x1135ab = this[_0x1be594(0xa8b)][_0x3a9e96],
                            _0x116689 = this['colorsBottom'][_0x3a9e96],
                            _0x241961 = _0x1ace77[_0x1be594(0xd2c)]['LerpColor'](_0x361e5d, _0x1135ab, this['lerpV']),
                            _0x3d0529 = _0x1ace77[_0x1be594(0xd2c)][_0x1be594(0xac5)](_0x228e8d, _0x116689, this['lerpV']);
                        _0x982e03[_0x1be594(0xd2c)][_0x1be594(0x1043)][_0x1be594(0xfa8)][_0x1be594(0x1402)][_0x1be594(0xb34)](_0x241961, _0x241961, _0x3d0529, _0x3d0529);
                    } ['disableMovingBackground']() {
                        const _0x45bda6 = _0x493e00;
                        this[_0x45bda6(0x77a)] = !0x0, this[_0x45bda6(0x1302)][_0x45bda6(0x183f)](!0x1), this[_0x45bda6(0x13e6)]['setVisible'](!0x1);
                    } ['CheckMinute'](_0x204950) {
                        const _0x227cf8 = _0x493e00;
                        this[_0x227cf8(0x17d0)] || (0x7 === _0x204950 && this[_0x227cf8(0x160c)](0x1, 0x3e8), 0x8 === _0x204950 && this[_0x227cf8(0x1527)](0x0, 0x3e8), 0x9 === _0x204950 && (this[_0x227cf8(0x1527)](0x1, 0x3e8), this[_0x227cf8(0x160c)](0x0, 0x3e8), this['FadeCheckerboard'](0x0, 0x3e8)), 0xe === _0x204950 && this[_0x227cf8(0x160c)](0x1, 0x3e8), 0xf === _0x204950 && this['FadeCheckerboard'](0x1, 0x3e8), 0x10 === _0x204950 && this['FadeTileset'](0x0, 0x3e8), 0x12 === _0x204950 && (this['FadeTileset'](0x1, 0x3e8), this[_0x227cf8(0x160c)](0x0, 0x3e8), this[_0x227cf8(0x1512)](0x0, 0x3e8))), 0x8 === _0x204950 && this['BonusRound'](), 0x9 === _0x204950 && (this[_0x227cf8(0x7e8)](), this['SpawnRelicInConcrete'](_0x38c7e5['default']['RELIC_CHARM'])), 0x11 === _0x204950 && this['BonusRound'](), 0x12 === _0x204950 && (this['EndBonusRound'](), this['SpawnRelicInConcrete'](_0x38c7e5['default'][_0x227cf8(0xa41)]));
                    } ['GetCenter']() {
                        const _0x27d8d6 = _0x493e00;
                        this['center']['x'] = _0x982e03['default'][_0x27d8d6(0x1043)][_0x27d8d6(0x17c7)][_0x27d8d6(0xbef)][_0x27d8d6(0x702)]['x'] + 0x400, this[_0x27d8d6(0x995)]['y'] = _0x982e03[_0x27d8d6(0xd2c)][_0x27d8d6(0x1043)]['Stage']['tilingTileset'][_0x27d8d6(0x702)]['y'] + 0x600, _0x982e03[_0x27d8d6(0xd2c)]['Core']['Stage'][_0x27d8d6(0xbef)]['inverted'] && _0x982e03['default']['Core']['PlayerOptions']['VisuallyInvertStages'] && (this[_0x27d8d6(0x995)]['y'] -= 0x400);
                    } ['SpawnRelicInConcrete'](_0x335083) {
                        const _0x4d7d7b = _0x493e00;
                        this[_0x4d7d7b(0x95d)](), this[_0x4d7d7b(0xe44)](), this['scene'][_0x4d7d7b(0x915)][_0x4d7d7b(0x12b8)]({
                            'delay': 0x7d0,
                            'callback': () => {
                                const _0x18c05c = _0x4d7d7b;
                                let _0x249378;
                                _0x982e03[_0x18c05c(0xd2c)][_0x18c05c(0x1043)][_0x18c05c(0x17c7)]['stageEventManager'][_0x18c05c(0x1966)](0xea60, this['center']['x'], _0x19084f['default'][_0x18c05c(0x54a)], this[_0x18c05c(0x995)]['y']), -0x1 === _0x982e03['default'][_0x18c05c(0x1043)]['PlayerOptions']['CollectedItems']['indexOf'](_0x335083) && (_0x249378 = _0x982e03[_0x18c05c(0xd2c)]['Core']['MakeStagePickup'](this[_0x18c05c(0x995)]['x'], this[_0x18c05c(0x995)]['y'], _0x38c7e5[_0x18c05c(0xd2c)][_0x18c05c(0x22f)], _0x2bc89e['default']['VOID'], 0x1, _0x335083)), this[_0x18c05c(0x6d2)]['time'][_0x18c05c(0x12b8)]({
                                    'delay': 0xea60,
                                    'callback': () => {
                                        const _0x52097d = _0x18c05c;
                                        _0x249378 && _0x249378[_0x52097d(0x14fb)] && _0x249378[_0x52097d(0x14fb)]();
                                    }
                                });
                            }
                        });
                    } ['DisplayWarningZone']() {
                        const _0x1d43a4 = _0x493e00;
                        let _0x21c38c = this[_0x1d43a4(0x6d2)][_0x1d43a4(0x18bd)]['rectangle'](this[_0x1d43a4(0x995)]['x'], this[_0x1d43a4(0x995)]['y'], 0x1c0, 0x1c0, 0xff0000)[_0x1d43a4(0xf8e)](0.5)[_0x1d43a4(0xdab)](0.2)['setVisible'](!0x0)[_0x1d43a4(0x11c7)](_0x11434e['BlendModes'][_0x1d43a4(0x1811)]);
                        this[_0x1d43a4(0xfe3)](this[_0x1d43a4(0x995)]['x'], this[_0x1d43a4(0x995)]['y']), this[_0x1d43a4(0x6d2)]['tweens']['add']({
                            'targets': _0x21c38c,
                            'alpha': 0.5,
                            'duration': 0xc8,
                            'yoyo': !0x0,
                            'repeat': 0x3,
                            'onRepeat': () => {
                                const _0x5d1d0f = _0x1d43a4;
                                this[_0x5d1d0f(0xfe3)](this[_0x5d1d0f(0x995)]['x'], this[_0x5d1d0f(0x995)]['y']);
                            },
                            'onComplete': () => {
                                const _0x5a72f8 = _0x1d43a4;
                                this[_0x5a72f8(0x6d2)][_0x5a72f8(0x12a1)]['add']({
                                    'targets': _0x21c38c,
                                    'alpha': 0x0,
                                    'duration': 0x64,
                                    'onComplete': () => {
                                        const _0x8747d4 = _0x5a72f8;
                                        _0x21c38c[_0x8747d4(0x16ca)]();
                                    }
                                });
                            }
                        });
                    } ['SingleWarning'](_0x16546e, _0x4b3177) {
                        const _0x406a5b = _0x493e00;
                        let _0x3dc48d = this[_0x406a5b(0x6d2)]['add']['image'](_0x16546e, _0x4b3177, 'UI', 'ExclamationMark.png')[_0x406a5b(0x8a2)](0x0)[_0x406a5b(0xf8e)](0.5)[_0x406a5b(0xb4a)](0x2328);
                        _0x982e03[_0x406a5b(0xd2c)]['Sound'][_0x406a5b(0x7f6)](_0x5ef5c3['default']['Pizza'], {
                            'volume': 0.9,
                            'detune': 0x1f4 * Math[_0x406a5b(0x9ad)](),
                            'rate': 0x1
                        }, 0x96, 0x2), this[_0x406a5b(0x6d2)]['tweens'][_0x406a5b(0x18bd)]({
                            'targets': _0x3dc48d,
                            'scale': 0x2,
                            'duration': 0xc8,
                            'onComplete': () => {
                                const _0x52c763 = _0x406a5b;
                                this['scene'][_0x52c763(0x12a1)]['add']({
                                    'targets': _0x3dc48d,
                                    'scale': 0x0,
                                    'duration': 0xc8,
                                    'delay': 0xc8,
                                    'onComplete': () => {
                                        _0x3dc48d['destroy']();
                                    }
                                });
                            }
                        });
                    } ['BonusRound']() {
                        const _0x552a58 = _0x493e00;
                        _0x982e03[_0x552a58(0xd2c)][_0x552a58(0x1043)][_0x552a58(0x17c7)]['StageModifiers'][_0x552a58(0xc23)] += 0x1, _0x982e03[_0x552a58(0xd2c)]['Core'][_0x552a58(0x17c7)]['CalculateEnemySpeed']();
                    } ['EndBonusRound']() {
                        const _0x5c6773 = _0x493e00;
                        _0x982e03['default'][_0x5c6773(0x1043)]['Stage']['StageModifiers'][_0x5c6773(0xc23)] -= 0x1, _0x982e03[_0x5c6773(0xd2c)][_0x5c6773(0x1043)][_0x5c6773(0x17c7)][_0x5c6773(0x1201)]();
                    } ['FadeTileset'](_0x3bb51d = 0x1, _0x5dff0d = 0x3e8) {
                        const _0x46b7d8 = _0x493e00;
                        for (let _0x306694 = 0x0; _0x306694 < _0x982e03['default'][_0x46b7d8(0x1043)][_0x46b7d8(0x17c7)]['tilingTileset']['layerContainers'][_0x46b7d8(0xed9)]; _0x306694++) {
                            const _0xfb6dc1 = _0x982e03[_0x46b7d8(0xd2c)]['Core']['Stage']['tilingTileset']['layerContainers'][_0x306694];
                            this[_0x46b7d8(0x6d2)]['tweens']['add']({
                                'targets': _0xfb6dc1[_0x46b7d8(0x1629)],
                                'alpha': _0x3bb51d,
                                'duration': _0x5dff0d
                            });
                        }
                    } ['FadeSphere'](_0x3998ee, _0x528748) {
                        const _0x364b75 = _0x493e00;
                        var _0x2ca88b;
                        this[_0x364b75(0x77a)] || (_0x3998ee > 0x0 && (this[_0x364b75(0x1302)][_0x364b75(0x183f)](!0x0), this[_0x364b75(0x1302)][_0x364b75(0xdab)](0x0)), null === (_0x2ca88b = this['sphereAlphaTween']) || void 0x0 === _0x2ca88b || _0x2ca88b['stop'](), this[_0x364b75(0x10ff)] = this['scene'][_0x364b75(0x12a1)]['add']({
                            'targets': this[_0x364b75(0x1302)],
                            'alpha': _0x3998ee,
                            'duration': _0x528748,
                            'onComplete': () => {
                                const _0x350ac7 = _0x364b75;
                                _0x3998ee <= 0x0 && this[_0x350ac7(0x1302)]['setVisible'](!0x1);
                            }
                        }));
                    } ['FadeCheckerboard'](_0x329555, _0x37d129) {
                        const _0x544907 = _0x493e00;
                        var _0x363328;
                        this[_0x544907(0x77a)] || (_0x329555 > 0x0 && (this[_0x544907(0x13e6)][_0x544907(0x183f)](!0x0), this['checkerboardImage'][_0x544907(0xdab)](0x0)), null === (_0x363328 = this[_0x544907(0xdcf)]) || void 0x0 === _0x363328 || _0x363328['stop'](), this[_0x544907(0xdcf)] = this['scene'][_0x544907(0x12a1)][_0x544907(0x18bd)]({
                            'targets': this[_0x544907(0x13e6)],
                            'alpha': _0x329555,
                            'duration': _0x37d129,
                            'onComplete': () => {
                                const _0x377a90 = _0x544907;
                                _0x329555 <= 0x0 && this[_0x377a90(0x13e6)]['setVisible'](!0x1);
                            }
                        }));
                    } ['MakePizza']() {
                        const _0x583908 = _0x493e00;
                        let _0xc6bb91 = -this[_0x583908(0x6d2)][_0x583908(0x12f9)][_0x583908(0x140e)],
                            _0x103796 = 0x0,
                            _0x57a053 = 0x0;
                        _0x982e03[_0x583908(0xd2c)]['Core']['Stage'][_0x583908(0xbef)][_0x583908(0x675)] && _0x982e03['default'][_0x583908(0x1043)]['PlayerOptions']['VisuallyInvertStages'] && (_0x103796 = 0x598, _0x57a053 = 0x400);
                        let _0x5216db = _0x103796 + 0xf8,
                            _0x10f273 = _0x57a053 + 0x60;
                        this['PizzaAsprite'] = this[_0x583908(0x6d2)][_0x583908(0x18bd)][_0x583908(0x568)](_0x5216db, _0x10f273, 'items', 'PizzaA.png')[_0x583908(0xb4a)](_0xc6bb91), this[_0x583908(0x1284)] = new _0x11434e[(_0x583908(0x10d2))][(_0x583908(0xf29))](_0x5216db, _0x10f273, 0x10), _0x5216db += 0x40, this[_0x583908(0xeae)] = this['scene'][_0x583908(0x18bd)][_0x583908(0x568)](_0x5216db, _0x10f273, 'items', 'PizzaB.png')[_0x583908(0xb4a)](_0xc6bb91), this[_0x583908(0x150e)] = new _0x11434e[(_0x583908(0x10d2))]['Circle'](_0x5216db, _0x10f273, 0x10), _0x5216db += 0x40, this['PizzaCsprite'] = this[_0x583908(0x6d2)][_0x583908(0x18bd)][_0x583908(0x568)](_0x5216db, _0x10f273, 'items', 'PizzaC.png')['setDepth'](_0xc6bb91), this['PizzaC'] = new _0x11434e[(_0x583908(0x10d2))][(_0x583908(0xf29))](_0x5216db, _0x10f273, 0x10);
                    } ['CheckPizzas']() {
                        const _0x131d41 = _0x493e00;
                        if (!this[_0x131d41(0xa09)]) return;
                        if (!this['PizzaA']) return;
                        let _0x186baa = _0x982e03['default'][_0x131d41(0x1043)][_0x131d41(0x10f6)]['x'],
                            _0x2cbd0d = _0x982e03[_0x131d41(0xd2c)][_0x131d41(0x1043)][_0x131d41(0x10f6)]['y'];
                        this['PizzaA']['contains'](_0x186baa, _0x2cbd0d) ? (this['customBG'] = !0x0, this['FadeTileset'](this['isTilesetVisible'] ? 0x0 : 0x1, 0x1f4), this['isTilesetVisible'] = !this['isTilesetVisible'], this['AnimPizza'](this[_0x131d41(0x2fb)]), this['DelayPizza']()) : this['PizzaB'][_0x131d41(0x1780)](_0x186baa, _0x2cbd0d) ? (this[_0x131d41(0x17d0)] = !0x0, this['FadeCheckerboard'](this['isCheckerBoardVisible'] ? 0x0 : 0x1, 0x1f4), this[_0x131d41(0x1956)] = !this[_0x131d41(0x1956)], this[_0x131d41(0x1760)](this[_0x131d41(0xeae)]), this[_0x131d41(0x168b)]()) : this['PizzaC']['contains'](_0x186baa, _0x2cbd0d) && (this[_0x131d41(0x17d0)] = !0x0, this[_0x131d41(0x160c)](this[_0x131d41(0x185a)] ? 0x0 : 0x1, 0x1f4), this['isSphereVisible'] = !this['isSphereVisible'], this[_0x131d41(0x1760)](this['PizzaCsprite']), this['DelayPizza']());
                    } ['AnimPizza'](_0x2a9d2e) {
                        const _0x4d08c4 = _0x493e00;
                        _0x982e03['default'][_0x4d08c4(0x1267)]['PlaySound'](_0x5ef5c3[_0x4d08c4(0xd2c)][_0x4d08c4(0xbc6)], {
                            'volume': 0x1
                        }, 0x64, 0x4), this[_0x4d08c4(0x2fb)][_0x4d08c4(0xe71)] = 0.65, this[_0x4d08c4(0xeae)][_0x4d08c4(0xe71)] = 0.65, this['PizzaCsprite'][_0x4d08c4(0xe71)] = 0.65, this[_0x4d08c4(0x6d2)]['tweens']['add']({
                            'targets': _0x2a9d2e,
                            'scale': 1.5,
                            'ease': 'Bounce.InOut',
                            'yoyo': !0x0,
                            'duration': 0x12c
                        });
                    } ['DelayPizza']() {
                        const _0x19ab85 = _0x493e00;
                        this['canPizza'] = !0x1, this[_0x19ab85(0xc62)] = this['scene'][_0x19ab85(0x915)]['addEvent']({
                            'delay': 0x3e8,
                            'callback': () => {
                                const _0x171568 = _0x19ab85;
                                this[_0x171568(0xa09)] = !0x0, this[_0x171568(0x2fb)]['alpha'] = 0x1, this[_0x171568(0xeae)]['alpha'] = 0x1, this[_0x171568(0x1557)][_0x171568(0xe71)] = 0x1;
                            }
                        });
                    } ['MakeRings']() {
                        const _0x1e36b9 = _0x493e00;
                        this[_0x1e36b9(0x95d)]();
                        let _0x4a88d9 = this[_0x1e36b9(0x995)]['x'] + 0x3000,
                            _0x24ba7d = this[_0x1e36b9(0x995)]['y'],
                            _0x1858e5 = 0x2 * Math['PI'] / 0x9,
                            _0x2d0c0c = [];
                        for (let _0x10fd39 = 0x0; _0x10fd39 < 0x9; _0x10fd39++) {
                            let _0xf8f724 = _0x4a88d9 + 0x40 * Math[_0x1e36b9(0xd7e)](_0x1858e5 * _0x10fd39),
                                _0x21b929 = _0x24ba7d + 0x40 * Math[_0x1e36b9(0xc80)](_0x1858e5 * _0x10fd39),
                                _0x2c844e = _0x982e03[_0x1e36b9(0xd2c)]['Core']['MakeStagePickup'](_0xf8f724, _0x21b929, _0x38c7e5[_0x1e36b9(0xd2c)][_0x1e36b9(0x17b3)], _0x2bc89e[_0x1e36b9(0xd2c)][_0x1e36b9(0x6d0)]);
                            _0x2c844e[_0x1e36b9(0xd8d)] = 0x0 == _0x10fd39 ? 0x1 : 0x0, _0x2c844e[_0x1e36b9(0x3cf)] = 0x168, _0x2c844e[_0x1e36b9(0xe49)] = _0x19084f[_0x1e36b9(0xd2c)][_0x1e36b9(0x8d8)], _0x2d0c0c['push'](_0x2c844e);
                        }
                        this[_0x1e36b9(0x6d2)][_0x1e36b9(0x12a1)]['add']({
                            'targets': _0x2d0c0c,
                            'angle': 0x167,
                            'repeat': -0x1,
                            'duration': 0x3e8
                        });
                    }
                }
                _0x362195['default'] = _0x5ef0a2;
            };
