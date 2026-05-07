// Module 0xa25a
// Args: _0x7158ca, _0x26cc0d, _0x52169b

export default (_0x7158ca, _0x26cc0d, _0x52169b) => {
                'use strict';
                const _0x2786e2 = a0_0x6932;
                var _0x56b2d3 = this && this['__importDefault'] || function(_0x2edeb9) {
                    return _0x2edeb9 && _0x2edeb9['__esModule'] ? _0x2edeb9 : {
                        'default': _0x2edeb9
                    };
                };
                Object['defineProperty'](_0x26cc0d, '__esModule', {
                    'value': !0x0
                });
                const _0x5dd0b2 = _0x52169b(0x18304),
                    _0x4882fd = _0x56b2d3(_0x52169b(0x15dd)),
                    _0x2591b4 = _0x56b2d3(_0x52169b(0x15abc)),
                    _0x3a2ded = _0x56b2d3(_0x52169b(0xdfbc)),
                    _0x1a1cee = _0x56b2d3(_0x52169b(0x9bda)),
                    _0x567519 = _0x56b2d3(_0x52169b(0x1fd7)),
                    _0x3d2d50 = _0x56b2d3(_0x52169b(0x54e3)),
                    _0x40b37a = _0x56b2d3(_0x52169b(0x5f07)),
                    _0x352d09 = _0x56b2d3(_0x52169b(0x1166a)),
                    _0x55e7c7 = _0x56b2d3(_0x52169b(0xd1a1));
                class _0x170732 extends _0x352d09['default'] {
                    constructor() {
                        const _0xd6ad42 = _0x2786e2;
                        super(...arguments), this[_0xd6ad42(0x1838)] = 0x1, this[_0xd6ad42(0x657)] = !0x1, this[_0xd6ad42(0x408)] = !0x1;
                    } ['OnRecycle']() {
                        const _0x261537 = _0x2786e2;
                        super[_0x261537(0x5ce)](), this[_0x261537(0x8ee)] || (this['ringSprite'] = this[_0x261537(0x6d2)]['add'][_0x261537(0x568)](this['x'], this['y'], 'vfx', 'sPFX_ring_64.png')[_0x261537(0x8a2)](0x0)[_0x261537(0x11c7)](_0x5dd0b2[_0x261537(0x10fc)][_0x261537(0x1811)])), this[_0x261537(0x1450)] || (this[_0x261537(0x399)] = new _0x55e7c7[(_0x261537(0xd2c))](this[_0x261537(0x6d2)], _0x1a1cee['default']['POLTER_GEM_STATIC']), this[_0x261537(0x1450)] = new _0x55e7c7['default'](this[_0x261537(0x6d2)], _0x1a1cee['default']['POLTER_GEM'])), this[_0x261537(0x8a2)](0x0), this['OnEnterTween'] = this['scene']['tweens']['add']({
                            'targets': this,
                            'scale': this['scaleMul'],
                            'duration': 0x12c,
                            'onStart': () => {
                                this['setScale'](0x0);
                            }
                        });
                        let _0x52a36a = Math[_0x261537(0x9ad)]() >= 0.5;
                        this['SummonGems'](0x7530, 0x30, 0.8, _0x52a36a), this[_0x261537(0x6d2)]['time'][_0x261537(0x17fb)](this[_0x261537(0x870)]), this['gemSummonEvent'] = this[_0x261537(0x6d2)][_0x261537(0x915)]['addEvent']({
                            'delay': 0x7530,
                            'callback': () => {
                                const _0x5844db = _0x261537;
                                if (this[_0x5844db(0xdae)]) return;
                                let _0x4f4248 = Math['random']() >= 0.5;
                                this['SummonGems'](0x7530, 0x30, 0.8, _0x4f4248);
                            },
                            'repeat': -0x1
                        }), this['_defaultSpeed'] = _0x2591b4[_0x261537(0xd2c)][this[_0x261537(0xe49)]][0x0][_0x261537(0x78e)], this['sineF'] = 0x1, this[_0x261537(0x177d)] = !0x1, this[_0x261537(0x187a)] = !0x0, this['hasLostTreasure'] = !0x1, this['OnSineTween'] ? this[_0x261537(0x18e8)][_0x261537(0x1374)]() : this['OnSineTween'] = this['scene'][_0x261537(0x12a1)][_0x261537(0x18bd)]({
                            'targets': this,
                            'sineF': 0.1,
                            'duration': 0x7d0,
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        });
                    } ['SummonGems'](_0x349319, _0x489abe = 0x18, _0x1a8ad8 = 0.9, _0x2f400c = !0x0) {
                        const _0x4b4470 = _0x2786e2;
                        _0x349319 = _0x349319 || 0xea60;
                        let _0x382722 = 0x2 * Math['PI'] * Math[_0x4b4470(0x9ad)](),
                            _0x4ef649 = new Array(),
                            _0x268877 = _0x2f400c ? this['gemPoolStatic'] : this['gemPool'];
                        for (let _0x5693cb = 0x0; _0x5693cb < _0x489abe; _0x5693cb++) {
                            let _0x41ac02 = _0x40b37a[_0x4b4470(0xd2c)][_0x4b4470(0x1043)]['Player']['x'] + 0.8 * Math[_0x4b4470(0xd7e)](_0x382722) * (this['scene'][_0x4b4470(0x12f9)][_0x4b4470(0x173c)] * _0x1a8ad8),
                                _0x2a5570 = _0x40b37a[_0x4b4470(0xd2c)][_0x4b4470(0x1043)]['Player']['y'] + 0.8 * Math[_0x4b4470(0xc80)](_0x382722) * (this[_0x4b4470(0x6d2)][_0x4b4470(0x12f9)][_0x4b4470(0x140e)] * _0x1a8ad8);
                            _0x382722 += Math['PI'] / (0.5 * _0x489abe);
                            let _0x583068 = _0x268877[_0x4b4470(0xada)](_0x41ac02, _0x2a5570);
                            _0x583068['isCullable'] = !0x1, _0x4ef649[_0x4b4470(0x1564)](_0x583068);
                        }
                        _0x40b37a[_0x4b4470(0xd2c)]['Core'][_0x4b4470(0x6d2)][_0x4b4470(0x915)][_0x4b4470(0x12b8)]({
                            'delay': _0x349319,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x4e24a8 = _0x4b4470;
                                _0x4ef649[_0x4e24a8(0x858)](_0xbae0f4 => {
                                    const _0x119042 = _0x4e24a8;
                                    _0xbae0f4['isDead'] || (_0xbae0f4[_0x119042(0x177d)] = !0x0, _0xbae0f4[_0x119042(0xe00)]());
                                });
                            }
                        })[_0x4b4470(0x226)] = 'gems disappear';
                    } ['MulSpeed'](_0x9c7de4) {
                        const _0x13b9e0 = _0x2786e2;
                        this['_defaultSpeed'] = _0x2591b4[_0x13b9e0(0xd2c)][this[_0x13b9e0(0xe49)]][0x0]['speed'] * _0x9c7de4;
                    } ['Disappear']() {
                        const _0xbc0ed = _0x2786e2;
                        var _0x1faf99;
                        null === (_0x1faf99 = this['OnSineTween']) || void 0x0 === _0x1faf99 || _0x1faf99['stop'](), this['sineF'] = -0x2, this[_0xbc0ed(0x177d)] = !0x0, this['isTeleportOnCull'] = !0x1, this['scene']['tweens'][_0xbc0ed(0x18bd)]({
                            'targets': this,
                            'sineF': -0xa,
                            'duration': 0x7d0
                        });
                    } ['DeSpawn']() {
                        const _0x45fb14 = _0x2786e2;
                        super[_0x45fb14(0x14fb)](), this[_0x45fb14(0x6d2)]['time'][_0x45fb14(0x17fb)](this['gemSummonEvent']), this[_0x45fb14(0x16c8)] = null, this['up'] = null, this[_0x45fb14(0x8fc)] && this[_0x45fb14(0x8fc)]['setVisible'](!0x1);
                    } ['Update'](_0x1bf6b7) {
                        const _0x4f592f = _0x2786e2;
                        if (this['speed'] = this['_defaultSpeed'] * this[_0x4f592f(0x1838)], super[_0x4f592f(0xa9f)](_0x1bf6b7), this[_0x4f592f(0x657)]) {
                            if (this['done']) return;
                            if (-0x1 != _0x40b37a[_0x4f592f(0xd2c)][_0x4f592f(0x1043)][_0x4f592f(0x14d8)][_0x4f592f(0x1b12)][_0x4f592f(0x1303)](_0x3a2ded['default']['PANINI'])) return; - 0x1 != _0x40b37a[_0x4f592f(0xd2c)][_0x4f592f(0x1043)][_0x4f592f(0x14d8)]['UnlockedCharacters'][_0x4f592f(0x1303)](_0x3a2ded[_0x4f592f(0xd2c)][_0x4f592f(0x302)]) && (this[_0x4f592f(0x8fc)] || (this['spritte'] = this[_0x4f592f(0x6d2)]['add']['sprite'](this['scene']['renderer'][_0x4f592f(0x173c)], this[_0x4f592f(0x6d2)][_0x4f592f(0x12f9)]['height'], 'characters', 'uExdash_01.png')[_0x4f592f(0xf8e)](0.5)[_0x4f592f(0x8a2)](0x4)[_0x4f592f(0x9b5)](-0x2d)['setScrollFactor'](0x0)[_0x4f592f(0xb4a)](0xce4)[_0x4f592f(0xdab)](0.8)), this['spritte'][_0x4f592f(0x183f)](!0x0), _0x40b37a[_0x4f592f(0xd2c)][_0x4f592f(0x1267)]['PlaySound'](_0x567519[_0x4f592f(0xd2c)][_0x4f592f(0xc61)], {
                                'volume': 0x1
                            }, 0x4e20, 0x1), this['spacebar'] || (this[_0x4f592f(0x16c8)] = this['scene'][_0x4f592f(0x1331)][_0x4f592f(0x1340)][_0x4f592f(0x1aac)](Phaser['Input']['Keyboard'][_0x4f592f(0x10f8)][_0x4f592f(0xa69)])), this['up'] || (this['up'] = this[_0x4f592f(0x6d2)][_0x4f592f(0x1331)]['keyboard'][_0x4f592f(0x1aac)](Phaser[_0x4f592f(0xd70)][_0x4f592f(0xa19)]['KeyCodes']['DOWN'])), this['spacebar'][_0x4f592f(0x57f)] && this['up']['isDown'] && (this[_0x4f592f(0x408)] = !0x0, -0x1 == _0x40b37a['default']['Core'][_0x4f592f(0x14d8)][_0x4f592f(0x1b12)][_0x4f592f(0x1303)](_0x3a2ded[_0x4f592f(0xd2c)]['PANINI']) && (_0x40b37a[_0x4f592f(0xd2c)][_0x4f592f(0x1043)]['PlayerOptions'][_0x4f592f(0x1b12)][_0x4f592f(0x1564)](_0x3a2ded['default'][_0x4f592f(0x613)]), _0x4882fd[_0x4f592f(0xd2c)][_0x3a2ded['default'][_0x4f592f(0x613)]][0x0]['hidden'] = !0x1, _0x4882fd[_0x4f592f(0xd2c)][_0x3a2ded[_0x4f592f(0xd2c)]['PANINI']][0x0]['isBought'] = !0x0, _0x40b37a['default'][_0x4f592f(0x1043)][_0x4f592f(0x14d8)][_0x4f592f(0x1b5)][_0x4f592f(0x1564)](_0x3a2ded[_0x4f592f(0xd2c)][_0x4f592f(0x613)]), _0x40b37a[_0x4f592f(0xd2c)][_0x4f592f(0x1043)]['PlayerOptions'][_0x4f592f(0x3ab)](), _0x40b37a[_0x4f592f(0xd2c)]['Sound']['PlaySound'](_0x567519[_0x4f592f(0xd2c)][_0x4f592f(0x2b6)]), _0x40b37a[_0x4f592f(0xd2c)][_0x4f592f(0x1267)]['PlaySound'](_0x567519[_0x4f592f(0xd2c)]['ThingFound'], {
                                'volume': 0x1,
                                'detune': -0x3e8,
                                'rate': 0.5
                            }))));
                        }
                    } ['Die']() {
                        const _0x140124 = _0x2786e2;
                        super[_0x140124(0x14f3)](), _0x40b37a['default'][_0x140124(0x1267)][_0x140124(0x7f6)](_0x567519['default']['Deathscream'], {
                            'volume': 0x4,
                            'detune': 0x0,
                            'rate': 0x1
                        }, 0x96, 0x2), this['scene']['tweens'][_0x140124(0x18bd)]({
                            'targets': this[_0x140124(0x8ee)],
                            'scale': 0x10,
                            'duration': 0x12c,
                            'repeat': 0x1,
                            'onStart': () => {
                                const _0x4839c0 = _0x140124;
                                this['ringSprite']['x'] = this['x'], this[_0x4839c0(0x8ee)]['y'] = this['y'];
                            },
                            'onComplete': () => {
                                const _0x1760d2 = _0x140124;
                                this['ringSprite'][_0x1760d2(0x183f)](!0x1);
                            }
                        }), this[_0x140124(0x1438)] && (this[_0x140124(0x1438)](), this[_0x140124(0x1438)] = null);
                        for (let _0x4e25cd = 0x0; _0x4e25cd < this[_0x140124(0x1450)][_0x140124(0x13f4)]['length']; _0x4e25cd++) this['gemPool'][_0x140124(0x13f4)][_0x4e25cd][_0x140124(0x1839)]();
                        for (let _0x22509b = 0x0; _0x22509b < this['gemPoolStatic'][_0x140124(0x13f4)]['length']; _0x22509b++) this[_0x140124(0x399)][_0x140124(0x13f4)][_0x22509b][_0x140124(0x1839)]();
                    } ['GetDamaged'](_0x272939, _0x13ef54, _0x4ea31e, _0xe0db39) {
                        const _0x5eee3a = _0x2786e2;
                        if (!this[_0x5eee3a(0x657)]) {
                            if (_0xe0db39 === _0x3d2d50[_0x5eee3a(0xd2c)]['PENTAGRAM'] || _0xe0db39 === _0x3d2d50[_0x5eee3a(0xd2c)]['ROSARY'] || _0xe0db39 === _0x3d2d50[_0x5eee3a(0xd2c)]['SIRE'] || _0xe0db39 === _0x3d2d50[_0x5eee3a(0xd2c)][_0x5eee3a(0x19c)] || _0xe0db39 === _0x3d2d50['default'][_0x5eee3a(0xc74)]) return this[_0x5eee3a(0x14f3)](), void(this['hasLostTreasure'] = !0x0);
                            _0xe0db39 === _0x3d2d50[_0x5eee3a(0xd2c)][_0x5eee3a(0x1812)] && (_0x272939 *= 0xa), super['GetDamaged'](_0x272939, _0x13ef54, _0x4ea31e, _0xe0db39);
                        }
                    }
                }
                _0x26cc0d['default'] = _0x170732;
            };
