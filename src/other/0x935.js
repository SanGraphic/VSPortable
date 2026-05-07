// Module 0x935
// Args: _0x597198, _0x1e5e05, _0x2d8e9a

export default (_0x597198, _0x1e5e05, _0x2d8e9a) => {
                'use strict';
                const _0x29a292 = a0_0x6932;
                var _0x1d1526 = this && this['__importDefault'] || function(_0x3accba) {
                    const _0x266afd = a0_0x6932;
                    return _0x3accba && _0x3accba['__esModule'] ? _0x3accba : {
                        'default': _0x3accba
                    };
                };
                Object['defineProperty'](_0x1e5e05, '__esModule', {
                    'value': !0x0
                });
                const _0x380ea0 = _0x2d8e9a(0x18304),
                    _0x1e5647 = _0x1d1526(_0x2d8e9a(0x5f07)),
                    _0x1ce454 = _0x1d1526(_0x2d8e9a(0xdb1c)),
                    _0x207866 = _0x1d1526(_0x2d8e9a(0xc42e)),
                    _0x360bfa = _0x1d1526(_0x2d8e9a(0xe648)),
                    _0x1e4871 = _0x1d1526(_0x2d8e9a(0x148f5)),
                    _0x2daa56 = _0x1d1526(_0x2d8e9a(0x1ec0)),
                    _0x13cc70 = _0x1d1526(_0x2d8e9a(0x1fd7));
                class _0x3812ba extends _0x1ce454['default'] {
                    constructor(_0x6bc1f3) {
                        const _0x309088 = _0x29a292;
                        super(_0x6bc1f3), this['yMul'] = 0x1, this['speedFactor'] = 1.1, this['red'] = 0xff, this[_0x309088(0x1293)] = 0xff, this['distanceFromStartingY'] = 0x3000, this['portraitFrames'] = ['stage_forest.png', 'stage_batcountry.png', 'stage_bone.png', 'stage_bridge.png', 'stage_chapel.png', 'stage_foscari.png', 'stage_foscari2.png', 'stage_green.png', 'stage_library.png', 'stage_machine.png', 'stage_molise.png', 'stage_moonspell.png', 'stage_rash.png', 'stage_tower.png', 'stage_x.png', 'stage_water.png'], this[_0x309088(0x67f)] = 0x146c2, this['initialTimeoutDuration'] = 0x81b0, this['flipIntervalDuration'] = 0x320, this[_0x309088(0x18e)] = 0x124f8, this['canPizza'] = !0x0;
                        let _0x437b96 = _0x1e5647['default']['Core'][_0x309088(0x14d8)][_0x309088(0x1481)][_0x309088(0x1303)](_0x207866[_0x309088(0xd2c)][_0x309088(0x180e)]) > -0x1,
                            _0x164d6e = _0x1e5647['default'][_0x309088(0x1043)][_0x309088(0x14d8)][_0x309088(0x1481)][_0x309088(0x1303)](_0x207866['default'][_0x309088(0x1179)]) > -0x1;
                        _0x437b96 && _0x164d6e || (_0x1e5647[_0x309088(0xd2c)]['Core'][_0x309088(0x14d8)][_0x309088(0x126c)] = !0x1, _0x1e5647[_0x309088(0xd2c)][_0x309088(0x1043)]['PlayerOptions'][_0x309088(0x1708)] = !0x1, _0x1e5647[_0x309088(0xd2c)]['Core']['PlayerOptions'][_0x309088(0x18b1)] && (_0x1e5647[_0x309088(0xd2c)][_0x309088(0x1043)]['EggManager']['RemoveBonuses'](), _0x1e5647[_0x309088(0xd2c)][_0x309088(0x1043)]['Stage'][_0x309088(0xaa3)]()));
                    } ['Create']() {
                        const _0xec7c15 = _0x29a292;
                        this['stars2'] = this['scene']['add'][_0xec7c15(0x899)](0.5 * this[_0xec7c15(0x6d2)][_0xec7c15(0x12f9)][_0xec7c15(0x173c)], 0.5 * this['scene'][_0xec7c15(0x12f9)]['height'], this[_0xec7c15(0x6d2)][_0xec7c15(0x12f9)]['width'], this['scene'][_0xec7c15(0x12f9)]['height'], 'hStars2')[_0xec7c15(0xd87)](0x0)[_0xec7c15(0xb4a)](-0xdbb9f)['setTint'](0xff0000)['setAlpha'](0.15)[_0xec7c15(0x11c7)](_0x380ea0['BlendModes']['ADD']), this['yMul'] = 0x1, _0x1e5647[_0xec7c15(0xd2c)][_0xec7c15(0x1043)]['PlayerOptions']['SelectedInverse'] && _0x1e5647['default'][_0xec7c15(0x1043)]['PlayerOptions'][_0xec7c15(0x64a)] && (this[_0xec7c15(0x8bf)][_0xec7c15(0x293)](!0x0), this['yMul'] = -0x1), this[_0xec7c15(0x1a98)] = _0x1e5647['default'][_0xec7c15(0x1043)]['PlayerOptions']['SelectedBGM'], this[_0xec7c15(0x7d3)] = _0x1e5647[_0xec7c15(0xd2c)][_0xec7c15(0x1043)]['PlayerOptions'][_0xec7c15(0x280)];
                    } ['OnInitCompleted']() {
                        const _0x29ea92 = _0x29a292;
                        _0x1e5647[_0x29ea92(0xd2c)][_0x29ea92(0x1043)][_0x29ea92(0xfa8)]['bgtile']['setAlpha'](0.35), this[_0x29ea92(0x6d2)][_0x29ea92(0x12a1)][_0x29ea92(0x18bd)]({
                            'targets': this['stars2'],
                            'alpha': 0.45,
                            'duration': 0x3e8,
                            'repeat': -0x1,
                            'yoyo': !0x0
                        }), this['scene'][_0x29ea92(0x12a1)][_0x29ea92(0x18bd)]({
                            'targets': _0x1e5647[_0x29ea92(0xd2c)]['Core'][_0x29ea92(0xfa8)][_0x29ea92(0x1402)],
                            'alpha': 0.2,
                            'duration': 0xbb8,
                            'repeat': -0x1,
                            'yoyo': !0x0
                        });
                        let _0x198f9a = _0x1e5647['default'][_0x29ea92(0x1043)][_0x29ea92(0x14d8)][_0x29ea92(0x1481)][_0x29ea92(0x1303)](_0x207866[_0x29ea92(0xd2c)]['RELIC_ROSALIA']) > -0x1,
                            _0x3ea4af = _0x1e5647[_0x29ea92(0xd2c)][_0x29ea92(0x1043)]['PlayerOptions'][_0x29ea92(0x1481)][_0x29ea92(0x1303)](_0x207866[_0x29ea92(0xd2c)][_0x29ea92(0x1179)]) > -0x1;
                        _0x198f9a && _0x3ea4af ? (this[_0x29ea92(0x193e)](), this[_0x29ea92(0x13bb)](), this[_0x29ea92(0xa72)]()) : (this[_0x29ea92(0x1181)](), _0x1e5647['default']['Sound']['StopMusic'](_0x1e5647[_0x29ea92(0xd2c)]['Core']['CurrentBGM']), _0x3ea4af || (this[_0x29ea92(0x18d3)] = new _0x2daa56['default'](this[_0x29ea92(0x6d2)], _0x1e5647[_0x29ea92(0xd2c)]['Core']['Stage'])));
                    } ['MakeSpinningPortraits']() {
                        const _0x108f7f = _0x29a292;
                        this[_0x108f7f(0x151)] = [], this[_0x108f7f(0x21c)] = [];
                        for (let _0x3fb1dc = 0x0; _0x3fb1dc < 0x40; _0x3fb1dc++) {
                            let _0x2f3e4d = this[_0x108f7f(0x6d2)][_0x108f7f(0x18bd)]['sprite'](0x0, 0x80 * _0x3fb1dc + 0x80 * Math[_0x108f7f(0x9ad)](), 'UI', Phaser[_0x108f7f(0x24f)][_0x108f7f(0x82a)]['pick'](this['portraitFrames']))[_0x108f7f(0xd87)](0x0)[_0x108f7f(0xb4a)](-0x2710)['setScale'](0.5 + 0.5 * Math[_0x108f7f(0x9ad)]()),
                                _0x247e7e = Math[_0x108f7f(0x9ad)]() >= 0.5;
                            _0x2f3e4d['x'] = _0x247e7e ? -0x100 : this[_0x108f7f(0x6d2)][_0x108f7f(0x12f9)][_0x108f7f(0x173c)] + 0x100;
                            let _0x3571f9 = this[_0x108f7f(0x6d2)][_0x108f7f(0x12a1)][_0x108f7f(0x18bd)]({
                                'targets': _0x2f3e4d,
                                'x': _0x247e7e ? this['scene'][_0x108f7f(0x12f9)][_0x108f7f(0x173c)] + 0x100 : -0x100,
                                'duration': 0x1388 + 0x7d0 * Math[_0x108f7f(0x9ad)](),
                                'repeat': -0x1,
                                'angle': _0x247e7e ? 0x8 : -0x8,
                                'onStart': () => {
                                    const _0x4d5aca = _0x108f7f;
                                    _0x2f3e4d[_0x4d5aca(0xd96)] = _0x247e7e ? -0x8 : 0x8, _0x2f3e4d['x'] = _0x247e7e ? -0x100 : this['scene']['renderer']['width'] + 0x100, _0x2f3e4d[_0x4d5aca(0x381)](Phaser[_0x4d5aca(0x24f)][_0x4d5aca(0x82a)][_0x4d5aca(0x198c)](this[_0x4d5aca(0x392)]));
                                }
                            });
                            this['portraits'][_0x108f7f(0x1564)](_0x2f3e4d), this[_0x108f7f(0x21c)][_0x108f7f(0x1564)](_0x3571f9);
                        }
                    } ['FirstTimeSetup']() {
                        const _0x58f862 = _0x29a292;
                        this[_0x58f862(0x1a41)] = !0x0, this['startingX'] = _0x1e5647['default'][_0x58f862(0x1043)][_0x58f862(0x17c7)][_0x58f862(0xbef)]['StartPosition']['x'], this[_0x58f862(0x187e)] = _0x1e5647[_0x58f862(0xd2c)][_0x58f862(0x1043)]['Stage'][_0x58f862(0xbef)]['StartPosition']['y'] - this['distanceFromStartingY'], _0x1e5647[_0x58f862(0xd2c)][_0x58f862(0x1043)][_0x58f862(0x10f6)]['y'] = this['startingY'], this['carpet'] = this[_0x58f862(0x6d2)]['add'][_0x58f862(0x568)](this[_0x58f862(0x11c3)], this[_0x58f862(0x187e)], 'background_Astral', 'carpet.png')[_0x58f862(0xb4a)](-0xbb8);
                        for (let _0x38625f = 0x0; _0x38625f < _0x1e5647['default'][_0x58f862(0x1043)]['Enemies'][_0x58f862(0xed9)]; _0x38625f++) _0x1e5647['default']['Core']['Enemies'][_0x38625f][_0x58f862(0xe00)]();
                        _0x1e5647[_0x58f862(0xd2c)]['Core'][_0x58f862(0x6d2)][_0x58f862(0x915)]['removeEvent'](_0x1e5647[_0x58f862(0xd2c)][_0x58f862(0x1043)][_0x58f862(0x55c)]), _0x1e5647[_0x58f862(0xd2c)][_0x58f862(0x1043)][_0x58f862(0x6d2)][_0x58f862(0x915)][_0x58f862(0x17fb)](_0x1e5647[_0x58f862(0xd2c)][_0x58f862(0x1043)]['Stage'][_0x58f862(0x11ff)]), this[_0x58f862(0x929)]();
                        for (let _0x2d20ed = 0x0; _0x2d20ed < _0x1e5647[_0x58f862(0xd2c)][_0x58f862(0x1043)][_0x58f862(0x17c7)][_0x58f862(0xbef)][_0x58f862(0x730)][_0x58f862(0xed9)]; _0x2d20ed++) {
                            const _0x403567 = _0x1e5647[_0x58f862(0xd2c)]['Core'][_0x58f862(0x17c7)][_0x58f862(0xbef)]['layerContainers'][_0x2d20ed];
                            for (let _0xa1fd73 = 0x0; _0xa1fd73 < _0x403567[_0x58f862(0x1629)][_0x58f862(0xed9)]; _0xa1fd73++) _0x403567[_0x58f862(0x1629)][_0xa1fd73]['alpha'] = 0x0;
                        }
                        for (let _0x252181 = 0x0; _0x252181 < _0x1e5647['default']['Core'][_0x58f862(0x17c7)][_0x58f862(0xbef)]['ListOfTeleporters'][_0x58f862(0xed9)]; _0x252181++) _0x1e5647[_0x58f862(0xd2c)]['Core']['Stage'][_0x58f862(0xbef)][_0x58f862(0x130b)][_0x252181]['canTeleport'] = !0x1;
                    } ['StartIntroSequence']() {
                        const _0x38f62c = _0x29a292;
                        this[_0x38f62c(0x633)] || (_0x1e5647[_0x38f62c(0xd2c)]['Core']['canInterrupt'] = !0x1, _0x1e5647[_0x38f62c(0xd2c)][_0x38f62c(0x1043)]['canPause'] = !0x1, this['isPlayingIntroSequence'] = !0x0, this[_0x38f62c(0x6d2)][_0x38f62c(0x12a1)][_0x38f62c(0x18bd)]({
                            'targets': this[_0x38f62c(0xed1)],
                            'alpha': 0x0,
                            'duration': 0x1f4
                        }), this[_0x38f62c(0x6d2)][_0x38f62c(0x12a1)][_0x38f62c(0x18bd)]({
                            'targets': _0x1e5647[_0x38f62c(0xd2c)][_0x38f62c(0x1043)]['Player'],
                            'y': this['startingY'] + this[_0x38f62c(0xa9e)] - 0x100,
                            'duration': 0x7d00,
                            'delay': 0x1f4,
                            'onUpdate': () => {
                                for (let _0x2c063e = 0x0; _0x2c063e < this['portraits']['length']; _0x2c063e++) this['portraits'][_0x2c063e]['y'] -= 0x2;
                            },
                            'onStart': () => {
                                const _0xe00a6a = _0x38f62c;
                                _0x1e5647['default'][_0xe00a6a(0x1043)]['RestoreTickerEvent'](), _0x1e5647[_0xe00a6a(0xd2c)]['Core'][_0xe00a6a(0x17c7)][_0xe00a6a(0x25e)](), _0x1e5647['default'][_0xe00a6a(0x1043)]['PlayerOptions']['SelectedBGM'] = _0x1e4871[_0xe00a6a(0xd2c)][_0xe00a6a(0x15e8)], _0x1e5647[_0xe00a6a(0xd2c)][_0xe00a6a(0x1043)]['PlayerOptions'][_0xe00a6a(0x280)] = _0x360bfa['default'][_0xe00a6a(0x16cb)], _0x1e5647[_0xe00a6a(0xd2c)][_0xe00a6a(0x1267)][_0xe00a6a(0x1e4)](), this[_0xe00a6a(0x13bb)](), this[_0xe00a6a(0xa72)](), this[_0xe00a6a(0x62a)]();
                            },
                            'onComplete': () => {
                                const _0x44ee1e = _0x38f62c;
                                this['FadeInTileset'](), this[_0x44ee1e(0x18d3)] && this[_0x44ee1e(0x18d3)][_0x44ee1e(0x1515)](), this[_0x44ee1e(0x6d2)]['tweens'][_0x44ee1e(0x18bd)]({
                                    'targets': _0x1e5647['default'][_0x44ee1e(0x1043)]['Player'],
                                    'y': this[_0x44ee1e(0x187e)] + this[_0x44ee1e(0xa9e)],
                                    'duration': 0x5dc,
                                    'onComplete': () => {
                                        const _0x4c3f00 = _0x44ee1e;
                                        this['Trisection'] && this[_0x4c3f00(0x18d3)][_0x4c3f00(0x6eb)](), this[_0x4c3f00(0x482)] = !0x0;
                                        for (let _0x3d2ea6 = 0x0; _0x3d2ea6 < _0x1e5647['default']['Core']['Stage'][_0x4c3f00(0xbef)][_0x4c3f00(0x130b)][_0x4c3f00(0xed9)]; _0x3d2ea6++) _0x1e5647['default'][_0x4c3f00(0x1043)][_0x4c3f00(0x17c7)][_0x4c3f00(0xbef)][_0x4c3f00(0x130b)][_0x3d2ea6]['canTeleport'] = !0x0;
                                    }
                                });
                            }
                        }));
                    } ['CheckHalfMinute']() {
                        const _0x5a469b = _0x29a292;
                        this['isEventTrisectionEnabled'] && (this[_0x5a469b(0x18d3)] && this['Trisection'][_0x5a469b(0x1515)](), this[_0x5a469b(0x6d2)][_0x5a469b(0x915)]['addEvent']({
                            'delay': 0x3e8,
                            'callback': () => {
                                const _0x13d06d = _0x5a469b;
                                this['Trisection'] && this['Trisection'][_0x13d06d(0x6eb)]();
                            }
                        }));
                    } ['CheckMinute'](_0x33b363) {
                        const _0x548fc4 = _0x29a292;
                        super[_0x548fc4(0xba9)](_0x33b363), this[_0x548fc4(0x482)] && this[_0x548fc4(0x18d3)] && this['Trisection']['TriggerTrisectionEvent']();
                    } ['EnterHand']() {
                        const _0x14ae4f = _0x29a292;
                        this['hand'] = this[_0x14ae4f(0x6d2)]['add'][_0x14ae4f(0x105b)](0.5 * this[_0x14ae4f(0x6d2)]['renderer']['width'], -0x30, 'enemiesM', 'hand_pinch_01.png')[_0x14ae4f(0xd87)](0x0)['setAngle'](-0x5a)[_0x14ae4f(0xb4a)](0xbb8)['setScale'](0x2);
                        let _0x3e4cec = this['hand'][_0x14ae4f(0x183e)][_0x14ae4f(0x1756)]('enemiesM', {
                            'start': 0x1,
                            'end': 0x2,
                            'zeroPad': 0x2,
                            'prefix': 'hand_pinch_',
                            'suffix': '.png'
                        });
                        this['hand']['anims'][_0x14ae4f(0x6a8)]({
                            'key': 'pinch_start',
                            'frames': _0x3e4cec,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        });
                        let _0x244a0f = this[_0x14ae4f(0x448)]['anims'][_0x14ae4f(0x1756)]('enemiesM', {
                            'start': 0x3,
                            'end': 0x4,
                            'zeroPad': 0x2,
                            'prefix': 'hand_pinch_',
                            'suffix': '.png'
                        });
                        this[_0x14ae4f(0x448)][_0x14ae4f(0x183e)]['create']({
                            'key': 'pinch_do',
                            'frames': _0x244a0f,
                            'frameRate': 0x8,
                            'repeat': 0x0
                        }), this[_0x14ae4f(0x448)][_0x14ae4f(0x183e)][_0x14ae4f(0x902)]('pinch_start'), this['scene'][_0x14ae4f(0x12a1)][_0x14ae4f(0x18bd)]({
                            'targets': this['hand'],
                            'y': 0.5 * this[_0x14ae4f(0x6d2)][_0x14ae4f(0x12f9)][_0x14ae4f(0x140e)] - 0x18,
                            'scale': 0x1,
                            'duration': 0x7d0,
                            'delay': 0x7530,
                            'onComplete': () => {
                                const _0x1936d2 = _0x14ae4f;
                                this[_0x1936d2(0x448)][_0x1936d2(0x183e)][_0x1936d2(0x902)]('pinch_do'), this[_0x1936d2(0x6d2)]['tweens'][_0x1936d2(0x18bd)]({
                                    'targets': this['hand'],
                                    'y': 0.5 * this[_0x1936d2(0x6d2)]['renderer']['height'] - 0x30,
                                    'duration': 0x3e8
                                }), this['scene']['tweens'][_0x1936d2(0x18bd)]({
                                    'targets': this[_0x1936d2(0x151)],
                                    'alpha': 0x0,
                                    'duration': 0x5dc,
                                    'scaleX': 0x0,
                                    'scaleY': 0x4,
                                    'onComplete': () => {
                                        const _0x38db36 = _0x1936d2;
                                        for (let _0x48ae32 = 0x0; _0x48ae32 < this[_0x38db36(0x21c)]['length']; _0x48ae32++) {
                                            const _0x4e521e = this[_0x38db36(0x21c)][_0x48ae32];
                                            null == _0x4e521e || _0x4e521e['stop']();
                                        }
                                        for (let _0x148521 = 0x0; _0x148521 < this[_0x38db36(0x151)]['length']; _0x148521++) this[_0x38db36(0x151)][_0x148521][_0x38db36(0x16ca)]();
                                    }
                                });
                            }
                        }), this[_0x14ae4f(0x6d2)][_0x14ae4f(0x12a1)][_0x14ae4f(0x18bd)]({
                            'targets': this[_0x14ae4f(0x448)],
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'delay': 0x82dc,
                            'onComplete': () => {}
                        });
                    } ['FadeInTileset']() {
                        const _0x49c354 = _0x29a292;
                        for (let _0x1c6fff = 0x0; _0x1c6fff < _0x1e5647[_0x49c354(0xd2c)][_0x49c354(0x1043)][_0x49c354(0x17c7)]['tilingTileset']['layerContainers']['length']; _0x1c6fff++) {
                            const _0x554d10 = _0x1e5647[_0x49c354(0xd2c)][_0x49c354(0x1043)]['Stage'][_0x49c354(0xbef)]['layerContainers'][_0x1c6fff];
                            this[_0x49c354(0x6d2)][_0x49c354(0x12a1)]['add']({
                                'targets': _0x554d10['layers'],
                                'alpha': 0x1,
                                'duration': 0x5dc,
                                'onComplete': () => {
                                    const _0x45408a = _0x49c354;
                                    this[_0x45408a(0x1a41)] = !0x1, _0x1e5647[_0x45408a(0xd2c)][_0x45408a(0x1043)]['canInterrupt'] = !0x0, _0x1e5647['default']['Core']['canPause'] = !0x0;
                                }
                            });
                        }
                    } ['StartFlipBeats']() {
                        this['initialTimeout'] = setTimeout(() => {
                            const _0x4f98ce = a0_0x6932;
                            this['flipInterval'] = setInterval(() => {
                                const _0xda6a2f = _0x4f98ce;
                                this[_0xda6a2f(0x13c9)]();
                            }, this['flipIntervalDuration']);
                        }, this['initialTimeoutDuration']), this['flipClearTimeout'] = setTimeout(() => {
                            const _0x9e6ee8 = a0_0x6932;
                            clearInterval(this['flipInterval']);
                        }, this['flipClearTimeoutDuration']);
                    } ['StartBeatsLoop']() {
                        const _0x5ad4a4 = _0x29a292;
                        this[_0x5ad4a4(0x1128)] = setInterval(() => {
                            const _0x2fb0f5 = _0x5ad4a4;
                            this[_0x2fb0f5(0x13bb)]();
                        }, this[_0x5ad4a4(0x67f)]);
                    } ['OnDestroy']() {
                        const _0x29cf7f = _0x29a292;
                        clearTimeout(this[_0x29cf7f(0x184b)]), clearInterval(this[_0x29cf7f(0x1570)]), clearTimeout(this[_0x29cf7f(0x100a)]), clearInterval(this[_0x29cf7f(0x1128)]), _0x1e5647[_0x29cf7f(0xd2c)]['Core']['PlayerOptions'][_0x29cf7f(0x5d3)] = this['saveBGM'], _0x1e5647[_0x29cf7f(0xd2c)][_0x29cf7f(0x1043)]['PlayerOptions'][_0x29cf7f(0x280)] = this['saveBGMMod'];
                    } ['StopBeat']() {
                        const _0x2d9e52 = _0x29a292;
                        clearTimeout(this['initialTimeout']), clearInterval(this[_0x2d9e52(0x1570)]), clearTimeout(this[_0x2d9e52(0x100a)]), clearInterval(this[_0x2d9e52(0x1128)]);
                    } ['OnBeat']() {
                        const _0x2e6e34 = _0x29a292;
                        if (!this[_0x2e6e34(0x1a1c)]) return;
                        this[_0x2e6e34(0x1a1c)] = !0x1;
                        let _0x2420f9 = _0x1e5647['default'][_0x2e6e34(0x1043)]['Enemies'];
                        for (let _0x46a4ce = 0x0; _0x46a4ce < _0x2420f9[_0x2e6e34(0xed9)]; _0x46a4ce++) {
                            const _0x9bb885 = _0x2420f9[_0x46a4ce];
                            _0x9bb885[_0x2e6e34(0xdae)] || _0x9bb885['OnMusicBeat']();
                        }
                    } ['Update'](_0x578574) {
                        const _0x51e78b = _0x29a292;
                        this['isOnBeatComplete'] = !0x0, this['stopPlayerMovement'] && (_0x1e5647[_0x51e78b(0xd2c)]['Core'][_0x51e78b(0x10f6)]['x'] < this[_0x51e78b(0x11c3)] - 0x30 && (_0x1e5647[_0x51e78b(0xd2c)]['Core'][_0x51e78b(0x10f6)]['x'] = this['startingX'] - 0x30), _0x1e5647['default'][_0x51e78b(0x1043)]['Player']['x'] > this[_0x51e78b(0x11c3)] + 0x30 && (_0x1e5647['default'][_0x51e78b(0x1043)][_0x51e78b(0x10f6)]['x'] = this['startingX'] + 0x30), _0x1e5647['default'][_0x51e78b(0x1043)][_0x51e78b(0x10f6)]['y'] < this[_0x51e78b(0x187e)] - 0x10 && (_0x1e5647['default'][_0x51e78b(0x1043)]['Player']['y'] = this[_0x51e78b(0x187e)] - 0x10), _0x1e5647[_0x51e78b(0xd2c)][_0x51e78b(0x1043)][_0x51e78b(0x10f6)]['y'] > this[_0x51e78b(0x187e)] + 0x20 && this[_0x51e78b(0x195e)]()), this[_0x51e78b(0x8bf)]['tilePositionX'] = this[_0x51e78b(0x1818)] * _0x1e5647['default'][_0x51e78b(0x1043)]['Player']['x'], this[_0x51e78b(0x8bf)]['tilePositionY'] = this['speedFactor'] * this['yMul'] * _0x1e5647['default'][_0x51e78b(0x1043)][_0x51e78b(0x10f6)]['y'], this['red'] = 0xff, this['blue'] = 0xff;
                        let _0x41ed38 = _0x1e5647[_0x51e78b(0xd2c)][_0x51e78b(0x1043)][_0x51e78b(0x10f6)]['y'] - 0x12c0;
                        _0x41ed38 > 0x0 ? this['red'] = Math[_0x51e78b(0x1981)](0x0, 0xff - _0x41ed38 / 0x2800 * 0xff) : _0x41ed38 < 0x0 && (this[_0x51e78b(0x1293)] = Math[_0x51e78b(0x1981)](0x0, 0xff - -_0x41ed38 / 0x2800 * 0xff));
                        let _0x41e082 = this[_0x51e78b(0xd9d)]();
                        _0x1e5647[_0x51e78b(0xd2c)][_0x51e78b(0x1043)]['BGMan'][_0x51e78b(0x1402)]['setTint'](_0x41e082), this[_0x51e78b(0x8bf)]['setTint'](_0x41e082), this[_0x51e78b(0xa09)] && this['CheckPizzas']();
                    } ['GetColor']() {
                        const _0x4dbf92 = _0x29a292;
                        return Phaser[_0x4dbf92(0xa82)][_0x4dbf92(0x150d)]['GetColor'](this['red'], 0x0, this[_0x4dbf92(0x1293)]);
                    } ['MakePizza']() {
                        const _0x8485d7 = _0x29a292;
                        let _0x4909bc = _0x1e5647[_0x8485d7(0xd2c)][_0x8485d7(0x1043)]['Player']['x'],
                            _0x25243f = _0x1e5647[_0x8485d7(0xd2c)]['Core']['Player']['y'] - 0xc8;
                        try {
                            _0x1e5647[_0x8485d7(0xd2c)][_0x8485d7(0x1043)][_0x8485d7(0x17c7)][_0x8485d7(0xbef)][_0x8485d7(0x14d1)]['getObjectLayer']('Scripts')[_0x8485d7(0x9c2)][_0x8485d7(0x858)](_0xc33c14 => {
                                const _0x752033 = _0x8485d7;
                                'ASTRALSTAIR_PIZZA' === _0xc33c14[_0x752033(0x226)] && (_0x4909bc = _0xc33c14['x'], _0x25243f = _0xc33c14['y']);
                            });
                        } catch (_0x168416) {}
                        let _0x196c13 = -this['scene'][_0x8485d7(0x12f9)]['height'];
                        this[_0x8485d7(0x2fb)] = this[_0x8485d7(0x6d2)][_0x8485d7(0x18bd)][_0x8485d7(0x568)](_0x4909bc, _0x25243f, 'items', 'PizzaTime.png')[_0x8485d7(0xb4a)](_0x196c13), this['PizzaA'] = new _0x380ea0['Geom']['Circle'](_0x4909bc, _0x25243f, 0x10);
                    } ['CheckPizzas']() {
                        const _0x4f60b9 = _0x29a292;
                        if (!this[_0x4f60b9(0xa09)]) return;
                        if (!this[_0x4f60b9(0x1284)]) return;
                        let _0x317d4b = _0x1e5647['default']['Core'][_0x4f60b9(0x10f6)]['x'],
                            _0xc01e6f = _0x1e5647['default']['Core'][_0x4f60b9(0x10f6)]['y'];
                        this[_0x4f60b9(0x1284)]['contains'](_0x317d4b, _0xc01e6f) && (this[_0x4f60b9(0xa09)] = !0x1, this[_0x4f60b9(0xe4a)](), this[_0x4f60b9(0x1760)]());
                    } ['AnimPizza']() {
                        const _0x5229e4 = _0x29a292;
                        _0x1e5647[_0x5229e4(0xd2c)][_0x5229e4(0x1267)][_0x5229e4(0x7f6)](_0x13cc70['default']['Bumper'], {
                            'volume': 0x1
                        }, 0x64, 0x4), this[_0x5229e4(0x2fb)]['alpha'] = 0.65, this[_0x5229e4(0x6d2)]['tweens']['add']({
                            'targets': this[_0x5229e4(0x2fb)],
                            'scale': 1.5,
                            'alpha': 0x0,
                            'ease': 'Bounce.InOut',
                            'yoyo': !0x1,
                            'duration': 0x12c,
                            'onComplete': () => {
                                const _0x51fc7b = _0x5229e4;
                                this[_0x51fc7b(0x2fb)]['destroy']();
                            }
                        });
                    }
                }
                _0x1e5e05['default'] = _0x3812ba;
            };
