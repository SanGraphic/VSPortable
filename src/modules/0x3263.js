// Module 0x3263
// Args: _0x12ef23, _0x59e9d5, _0x29553a

export default (_0x12ef23, _0x59e9d5, _0x29553a) => {
                'use strict';
                const _0x3f989c = a0_0x6932;
                var _0x49d7bd = this && this['__importDefault'] || function(_0x114e6a) {
                    return _0x114e6a && _0x114e6a['__esModule'] ? _0x114e6a : {
                        'default': _0x114e6a
                    };
                };
                Object['defineProperty'](_0x59e9d5, '__esModule', {
                    'value': !0x0
                });
                const _0x3e0f0d = _0x29553a(0x18304),
                    _0x49aa97 = _0x49d7bd(_0x29553a(0xea40)),
                    _0x51248a = _0x49d7bd(_0x29553a(0x9bda)),
                    _0x149495 = _0x49d7bd(_0x29553a(0x136b9)),
                    _0x24066a = _0x49d7bd(_0x29553a(0x1fd7)),
                    _0x5d7a21 = _0x49d7bd(_0x29553a(0x54e3)),
                    _0x1ebabc = _0x49d7bd(_0x29553a(0x5103)),
                    _0x26c62d = _0x49d7bd(_0x29553a(0x5f07)),
                    _0x59368d = _0x49d7bd(_0x29553a(0x1166a)),
                    _0x42eed7 = _0x49d7bd(_0x29553a(0xd1a1));
                class _0x3f42bb extends _0x59368d['default'] {
                    constructor(_0x4e62ea, _0x985ef6, _0x16e38c, _0x4af620) {
                        const _0x2a7084 = _0x3f989c;
                        super(_0x4e62ea, _0x985ef6, _0x16e38c, _0x4af620), this[_0x2a7084(0x549)] = 0x0, this[_0x2a7084(0x279)] = !0x1, this['recoveredTimes'] = 0x0, this['HasBeenDefeated'] = !0x1, this['HasBeenDefeated'] = _0x26c62d['default']['Core'][_0x2a7084(0x14d8)]['Achievements']['indexOf'](_0x49aa97['default']['FOSC20_DefeatBossLake']) > -0x1;
                    } ['OnRecycle']() {
                        const _0x3f03a1 = _0x3f989c;
                        super[_0x3f03a1(0x5ce)](), this['CalculateBonus'](), this[_0x3f03a1(0x1517)](), this[_0x3f03a1(0x8ee)] || (this['ringSprite'] = this['scene'][_0x3f03a1(0x18bd)]['image'](this['x'], this['y'], 'vfx', 'sPFX_ring_64.png')[_0x3f03a1(0x8a2)](0x0)['setBlendMode'](_0x3e0f0d['BlendModes'][_0x3f03a1(0x1811)]));
                    } ['CalculateBonus']() {
                        const _0xa4c7ea = _0x3f989c;
                        if (this[_0xa4c7ea(0x549)] = Math['max'](0x1, Math[_0xa4c7ea(0xdeb)](_0x26c62d[_0xa4c7ea(0xd2c)]['Core']['PlayerOptions']['RunEnemies'] / 0x3e8)), this['maxHp'] += 0x3e8 * this[_0xa4c7ea(0x549)], _0x26c62d[_0xa4c7ea(0xd2c)][_0xa4c7ea(0x1043)]['PlayerOptions'][_0xa4c7ea(0x18b1)]) {
                            let _0x229136 = _0x26c62d[_0xa4c7ea(0xd2c)][_0xa4c7ea(0x1043)]['PlayerOptions']['EggData'];
                            if (void 0x0 !== _0x229136[_0x26c62d[_0xa4c7ea(0xd2c)][_0xa4c7ea(0x1043)]['PlayerOptions'][_0xa4c7ea(0x1188)]]) {
                                let _0x2ff415 = _0x229136[_0x26c62d['default']['Core'][_0xa4c7ea(0x14d8)][_0xa4c7ea(0x1188)]];
                                _0x2ff415[_0xa4c7ea(0x31f)] && (this['power'] += _0x2ff415[_0xa4c7ea(0x31f)]), _0x2ff415[_0xa4c7ea(0xd2e)] && (this['maxHp'] += _0x2ff415['maxHp']);
                            }
                        }
                        this['hp'] = this[_0xa4c7ea(0xd2e)];
                    } ['StartInvulTimer']() {
                        const _0x4ace2b = _0x3f989c;
                        if (this['isInvul']) return;
                        let _0x12a5cb = Math['min'](0x2710, 0xc8 * this['bonusTimes']);
                        this['HasBeenDefeated'] || this['scene']['time']['addEvent']({
                            'delay': 0x9c4,
                            'callback': () => {
                                const _0x105184 = a0_0x6932;
                                this['savedBGM'] = _0x26c62d['default']['Core']['CurrentBGM'], this['savedBGMmod'] = _0x26c62d['default']['Core']['PlayerOptions']['SelectedBGMMod'];
                            }
                        }), this['scene'][_0x4ace2b(0x915)][_0x4ace2b(0x12b8)]({
                            'delay': 0x1f40,
                            'callback': () => {
                                const _0x232049 = _0x4ace2b;
                                this['HasBeenDefeated'], this['scene'][_0x232049(0x915)][_0x232049(0x12b8)]({
                                    'delay': 0xc8,
                                    'repeat': this['bonusTimes'] - 0x1,
                                    'callback': () => {
                                        const _0x86174a = _0x232049;
                                        this[_0x86174a(0xed6)]();
                                    }
                                }), this['scene'][_0x232049(0x915)]['addEvent']({
                                    'delay': 0x7d0 + _0x12a5cb,
                                    'callback': () => {
                                        const _0x4454d6 = _0x232049;
                                        _0x26c62d[_0x4454d6(0xd2c)]['Core']['Stage'][_0x4454d6(0x1837)] = [_0x51248a['default']['FS_GGHOST'], _0x51248a['default'][_0x4454d6(0x144d)]], _0x26c62d[_0x4454d6(0xd2c)][_0x4454d6(0x1043)][_0x4454d6(0x17c7)][_0x4454d6(0x11d3)] = 0x96, _0x26c62d[_0x4454d6(0xd2c)]['Core'][_0x4454d6(0x17c7)]['updateEnemyPools'](), this[_0x4454d6(0x15cb)](), this[_0x4454d6(0x17c3)]();
                                    }
                                });
                            }
                        }), this[_0x4ace2b(0x279)] = !0x0;
                    } ['RemoveInvul']() {
                        this['isInvul'] = !0x1;
                    } ['StartSummons']() {
                        const _0x37fbc7 = _0x3f989c;
                        this['scene'][_0x37fbc7(0x915)][_0x37fbc7(0x17fb)](this['SummonEvent']), this['SummonEvent'] = this[_0x37fbc7(0x6d2)][_0x37fbc7(0x915)]['addEvent']({
                            'callback': () => {
                                const _0x3d5c4a = _0x37fbc7;
                                this[_0x3d5c4a(0xdae)] ? this[_0x3d5c4a(0x6d2)]['time'][_0x3d5c4a(0x17fb)](this[_0x3d5c4a(0x63f)]) : (this['summonPool'] || (this[_0x3d5c4a(0xca8)] = new _0x42eed7['default'](this[_0x3d5c4a(0x6d2)], _0x51248a[_0x3d5c4a(0xd2c)]['FS_GGHOST'])), this['summonPool2'] || (this[_0x3d5c4a(0xee9)] = new _0x42eed7['default'](this[_0x3d5c4a(0x6d2)], _0x51248a[_0x3d5c4a(0xd2c)][_0x3d5c4a(0x144d)])), this['summonPool']['SpawnAt'](this['x'] + 0x8, this['y'] - 0x8), this['summonPool']['SpawnAt'](this['x'] - 0x8, this['y'] + 0x8), this['summonPool'][_0x3d5c4a(0xada)](this['x'], this['y']), this[_0x3d5c4a(0xee9)][_0x3d5c4a(0xada)](this['x'] + 0x8, this['y'] + 0x8), this['summonPool2'][_0x3d5c4a(0xada)](this['x'] - 0x8, this['y'] - 0x8), this[_0x3d5c4a(0xee9)]['SpawnAt'](this['x'], this['y']));
                            },
                            'delay': 0x1388,
                            'repeat': 0x64
                        });
                    } ['OnDefeat']() {
                        setTimeout(() => {
                            const _0x49f912 = a0_0x6932;
                            _0x26c62d['default']['Sound']['SetupAndPlayBGM_Banger']();
                        }, 0x3e8);
                    } ['GetEnemyToken']() {
                        const _0x3a7aea = _0x3f989c;
                        let _0x1e186b = _0x26c62d[_0x3a7aea(0xd2c)]['Core'][_0x3a7aea(0x1273)][_0x3a7aea(0x12f5)]['x'],
                            _0x340b99 = _0x26c62d['default'][_0x3a7aea(0x1043)][_0x3a7aea(0x1273)][_0x3a7aea(0x12f5)]['y'],
                            _0x3c9344 = this[_0x3a7aea(0x6d2)]['renderer'][_0x3a7aea(0x173c)],
                            _0x202807 = this[_0x3a7aea(0x6d2)][_0x3a7aea(0x12f9)][_0x3a7aea(0x140e)],
                            _0x4049d1 = _0x26c62d[_0x3a7aea(0xd2c)][_0x3a7aea(0x1043)][_0x3a7aea(0x10f6)]['x'] - 0.5 * _0x3c9344 + _0x1e186b - 0x8,
                            _0x15118e = _0x26c62d[_0x3a7aea(0xd2c)]['Core'][_0x3a7aea(0x10f6)]['y'] - 0.5 * _0x202807 + _0x340b99,
                            _0x419a7e = this['scene'][_0x3a7aea(0x18bd)]['image'](_0x4049d1, _0x15118e, 'items', 'SkullToken.png')['setAlpha'](0x1)['setScale'](0x2)[_0x3a7aea(0xb4a)](_0x1ebabc[_0x3a7aea(0xd2c)][_0x3a7aea(0x55d)] - 0x2),
                            _0x566499 = this['scene']['add'][_0x3a7aea(0x568)](_0x4049d1, _0x15118e, 'items', 'HeartMini.png')[_0x3a7aea(0xdab)](0x0)['setDepth'](_0x1ebabc[_0x3a7aea(0xd2c)][_0x3a7aea(0x55d)] - 0x2);
                        this[_0x3a7aea(0x6d2)]['tweens'][_0x3a7aea(0x18bd)]({
                            'targets': _0x419a7e,
                            'scale': 0x1,
                            'alpha': -0x1,
                            'duration': 0x1f4,
                            'x': this['x'],
                            'y': this['y'] - 0x18,
                            'onUpdate': () => {
                                _0x566499['alpha'] = 0x1 - _0x419a7e['alpha'];
                            }
                        }), this[_0x3a7aea(0x6d2)][_0x3a7aea(0x12a1)][_0x3a7aea(0x18bd)]({
                            'targets': _0x566499,
                            'scale': 0x2,
                            'duration': 0x1f4,
                            'x': this['x'],
                            'y': this['y'] - 0x18,
                            'onComplete': () => {
                                const _0x56b3ba = _0x3a7aea;
                                this[_0x56b3ba(0x17df)](), _0x419a7e['destroy'](), _0x566499['destroy']();
                            }
                        });
                    } ['FakeRecover']() {
                        const _0x1080c3 = _0x3f989c;
                        _0x26c62d[_0x1080c3(0xd2c)][_0x1080c3(0x1267)][_0x1080c3(0x7f6)](_0x24066a[_0x1080c3(0xd2c)][_0x1080c3(0x16d1)], {
                            'volume': 0.6,
                            'rate': 0.65
                        }, 0x1f4, 0x1), this[_0x1080c3(0xc0c)]++, this['setTintFill'](0xff00), _0x26c62d['default'][_0x1080c3(0x1043)]['ShowDamageAt'](this['x'], this['y'], -0x3e8), _0x26c62d[_0x1080c3(0xd2c)][_0x1080c3(0x1043)][_0x1080c3(0x6d2)][_0x1080c3(0x915)]['removeEvent'](this['blinkTimeout']), this[_0x1080c3(0x685)] = _0x26c62d[_0x1080c3(0xd2c)]['Core']['scene'][_0x1080c3(0x915)]['addEvent']({
                            'delay': 0x78,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x3331bc = _0x1080c3;
                                this[_0x3331bc(0xb34)](0xffffff);
                            }
                        }), this[_0x1080c3(0x7cb)] = 0x1 + this[_0x1080c3(0xc0c)] / 0x64;
                    } ['DeSpawn']() {
                        this['OnDefeat'](), super['DeSpawn']();
                    } ['GetDamaged'](_0x1855f6 = 0x1, _0x43b99d = _0x149495['default']['DEFAULT'], _0x4ab8cb = 0x1, _0x2c65c7 = _0x5d7a21['default']['VOID'], _0x3963bc = !0x0) {
                        const _0x5287ab = _0x3f989c;
                        this[_0x5287ab(0x279)] || super[_0x5287ab(0x1112)](_0x1855f6, _0x43b99d, _0x4ab8cb, _0x2c65c7, _0x3963bc);
                    } ['Update'](_0x168203 = 0x0) {
                        const _0x4e5397 = _0x3f989c;
                        if (this[_0x4e5397(0xdae)]) return;
                        this[_0x4e5397(0x16c6)] = this[_0x4e5397(0x6d2)][_0x4e5397(0x12f9)][_0x4e5397(0x140e)], (!this[_0x4e5397(0x197a)] || this[_0x4e5397(0x197a)] && 0x0 == this[_0x4e5397(0x70d)]['x'] && 0x0 == this[_0x4e5397(0x70d)]['y']) && (this[_0x4e5397(0x70d)]['x'] = this[_0x4e5397(0x18a7)]['x'] - this['x'], this[_0x4e5397(0x70d)]['y'] = this[_0x4e5397(0x18a7)]['y'] - this['y'], this[_0x4e5397(0x70d)]['normalize']());
                        let _0xcb3288 = this[_0x4e5397(0x3f1)] ? -this[_0x4e5397(0x1992)] * this['damageKB'] : 0x1;
                        this[_0x4e5397(0xb8d)](this['_currentDirection']['x'] > 0x0);
                        let _0x43cebc = _0x1ebabc[_0x4e5397(0xd2c)][_0x4e5397(0xc23)] * this['speed'] * _0xcb3288 * this['slow'];
                        this['setVelocity'](_0x43cebc * this[_0x4e5397(0x70d)]['x'], _0x43cebc * this[_0x4e5397(0x70d)]['y']), this[_0x4e5397(0x9b5)](0x0);
                    } ['Die']() {
                        const _0x51337f = _0x3f989c;
                        super[_0x51337f(0x14f3)](), _0x26c62d['default'][_0x51337f(0x1267)]['PlaySound'](_0x24066a[_0x51337f(0xd2c)]['Deathscream'], {
                            'volume': 0x4,
                            'detune': 0x0,
                            'rate': 0x1
                        }, 0x96, 0x2), this[_0x51337f(0x6d2)]['tweens']['add']({
                            'targets': this['ringSprite'],
                            'scale': 0x10,
                            'duration': 0x12c,
                            'repeat': 0x1,
                            'onStart': () => {
                                const _0x27f921 = _0x51337f;
                                this['ringSprite']['x'] = this['x'], this[_0x27f921(0x8ee)]['y'] = this['y'];
                            },
                            'onComplete': () => {
                                const _0x369cf8 = _0x51337f;
                                this[_0x369cf8(0x8ee)][_0x369cf8(0x183f)](!0x1);
                            }
                        });
                    }
                }
                _0x59e9d5['default'] = _0x3f42bb;
            };
