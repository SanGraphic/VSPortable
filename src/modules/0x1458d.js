// Module 0x1458d
// Args: _0x2abb89, _0x1407e9, _0x8ec5cb

export default (_0x2abb89, _0x1407e9, _0x8ec5cb) => {
                'use strict';
                const _0xc989df = a0_0x6932;
                var _0x456882 = this && this['__importDefault'] || function(_0x53edfe) {
                    return _0x53edfe && _0x53edfe['__esModule'] ? _0x53edfe : {
                        'default': _0x53edfe
                    };
                };
                Object['defineProperty'](_0x1407e9, '__esModule', {
                    'value': !0x0
                });
                const _0x3ac60e = _0x456882(_0x8ec5cb(0x15dd)),
                    _0x3077f5 = _0x456882(_0x8ec5cb(0x15abc)),
                    _0x54a8c1 = _0x456882(_0x8ec5cb(0xdfbc)),
                    _0x28c7e4 = _0x456882(_0x8ec5cb(0x2248)),
                    _0x42bfcf = _0x456882(_0x8ec5cb(0x1fd7)),
                    _0x488876 = _0x456882(_0x8ec5cb(0x54e3)),
                    _0x50e405 = _0x456882(_0x8ec5cb(0x42e7)),
                    _0x34163b = _0x456882(_0x8ec5cb(0x5f07)),
                    _0x3eee59 = _0x456882(_0x8ec5cb(0x1166a));
                class _0x4e30f7 extends _0x3eee59['default'] {
                    constructor() {
                        const _0x2a0027 = _0xc989df;
                        super(...arguments), this['sineF'] = 0x1, this['hasLostTreasure'] = !0x1, this[_0x2a0027(0x408)] = !0x1;
                    } ['OnRecycle']() {
                        const _0x5a7ee7 = _0xc989df;
                        super[_0x5a7ee7(0x5ce)](), this['setTint'](0xccccff), this[_0x5a7ee7(0x1b1c)] = _0x3077f5[_0x5a7ee7(0xd2c)][this['enemyType']][0x0][_0x5a7ee7(0x78e)], this['sineF'] = 0x1, this['isCullable'] = !0x1, this['isTeleportOnCull'] = !0x0, this[_0x5a7ee7(0xe71)] = 0.8, this['hasLostTreasure'] = !0x1, this['OnSineTween'] ? this['OnSineTween']['restart']() : this[_0x5a7ee7(0x18e8)] = this['scene'][_0x5a7ee7(0x12a1)]['add']({
                            'targets': this,
                            'sineF': 0.1,
                            'alpha': 0.6,
                            'duration': 0x7d0,
                            'repeat': -0x1,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        });
                    } ['MulSpeed'](_0x329057) {
                        const _0x1c8ea8 = _0xc989df;
                        this['_defaultSpeed'] = _0x3077f5['default'][this['enemyType']][0x0][_0x1c8ea8(0x78e)] * _0x329057;
                    } ['Disappear']() {
                        const _0x4cc92c = _0xc989df;
                        var _0x4d10c9;
                        null === (_0x4d10c9 = this['OnSineTween']) || void 0x0 === _0x4d10c9 || _0x4d10c9['stop'](), this[_0x4cc92c(0x1838)] = -0x2, this[_0x4cc92c(0x177d)] = !0x0, this[_0x4cc92c(0x187a)] = !0x1, this[_0x4cc92c(0x6d2)][_0x4cc92c(0x12a1)]['add']({
                            'targets': this,
                            'sineF': -0xa,
                            'duration': 0x7d0
                        });
                    } ['DeSpawn']() {
                        const _0xe99506 = _0xc989df;
                        super[_0xe99506(0x14fb)](), this[_0xe99506(0x16c8)] = null, this['up'] = null, this['spritte'] && this[_0xe99506(0x8fc)][_0xe99506(0x183f)](!0x1);
                    } ['Update'](_0x109c4c) {
                        const _0x5edf8d = _0xc989df;
                        if (this['speed'] = this[_0x5edf8d(0x1b1c)] * this['sineF'], super['Update'](_0x109c4c), this['hasLostTreasure']) {
                            if (this[_0x5edf8d(0x408)]) return;
                            if (-0x1 != _0x34163b['default']['Core'][_0x5edf8d(0x14d8)][_0x5edf8d(0x1b12)][_0x5edf8d(0x1303)](_0x54a8c1['default'][_0x5edf8d(0x613)])) return; - 0x1 != _0x34163b['default']['Core']['PlayerOptions']['UnlockedCharacters'][_0x5edf8d(0x1303)](_0x54a8c1[_0x5edf8d(0xd2c)][_0x5edf8d(0x302)]) && (this[_0x5edf8d(0x8fc)] || (this['spritte'] = this[_0x5edf8d(0x6d2)][_0x5edf8d(0x18bd)]['sprite'](this[_0x5edf8d(0x6d2)][_0x5edf8d(0x12f9)][_0x5edf8d(0x173c)], this['scene'][_0x5edf8d(0x12f9)][_0x5edf8d(0x140e)], 'characters', 'uExdash_01.png')[_0x5edf8d(0xf8e)](0.5)['setScale'](0x4)[_0x5edf8d(0x9b5)](-0x2d)[_0x5edf8d(0xd87)](0x0)['setDepth'](0xce4)[_0x5edf8d(0xdab)](0.8)), this['spritte'][_0x5edf8d(0x183f)](!0x0), _0x34163b[_0x5edf8d(0xd2c)]['Sound'][_0x5edf8d(0x7f6)](_0x42bfcf[_0x5edf8d(0xd2c)][_0x5edf8d(0xc61)], {
                                'volume': 0x1
                            }, 0x4e20, 0x1), this[_0x5edf8d(0x16c8)] || (this[_0x5edf8d(0x16c8)] = this['scene'][_0x5edf8d(0x1331)]['keyboard']['addKey'](Phaser[_0x5edf8d(0xd70)]['Keyboard']['KeyCodes'][_0x5edf8d(0xa69)])), this['up'] || (this['up'] = this[_0x5edf8d(0x6d2)][_0x5edf8d(0x1331)][_0x5edf8d(0x1340)][_0x5edf8d(0x1aac)](Phaser['Input'][_0x5edf8d(0xa19)][_0x5edf8d(0x10f8)][_0x5edf8d(0x12b2)])), this['spacebar'][_0x5edf8d(0x57f)] && this['up'][_0x5edf8d(0x57f)] && (this['done'] = !0x0, -0x1 == _0x34163b['default'][_0x5edf8d(0x1043)]['PlayerOptions'][_0x5edf8d(0x1b12)]['indexOf'](_0x54a8c1[_0x5edf8d(0xd2c)][_0x5edf8d(0x613)]) && (_0x34163b[_0x5edf8d(0xd2c)][_0x5edf8d(0x1043)][_0x5edf8d(0x14d8)][_0x5edf8d(0x1b12)][_0x5edf8d(0x1564)](_0x54a8c1[_0x5edf8d(0xd2c)]['PANINI']), _0x3ac60e['default'][_0x54a8c1['default']['PANINI']][0x0]['hidden'] = !0x1, _0x3ac60e['default'][_0x54a8c1[_0x5edf8d(0xd2c)][_0x5edf8d(0x613)]][0x0][_0x5edf8d(0x952)] = !0x0, _0x34163b['default']['Core']['PlayerOptions']['BoughtCharacters'][_0x5edf8d(0x1564)](_0x54a8c1[_0x5edf8d(0xd2c)][_0x5edf8d(0x613)]), _0x34163b[_0x5edf8d(0xd2c)][_0x5edf8d(0x1043)]['PlayerOptions'][_0x5edf8d(0x3ab)](), _0x34163b['default'][_0x5edf8d(0x1267)]['PlaySound'](_0x42bfcf[_0x5edf8d(0xd2c)][_0x5edf8d(0x2b6)]), _0x34163b[_0x5edf8d(0xd2c)]['Sound'][_0x5edf8d(0x7f6)](_0x42bfcf[_0x5edf8d(0xd2c)]['ThingFound'], {
                                'volume': 0x1,
                                'detune': -0x3e8,
                                'rate': 0.5
                            }))));
                        }
                    } ['GetDamaged'](_0x4e9da5, _0xb2bcd6, _0x45f0c9, _0x7f02ad) {
                        const _0x41567c = _0xc989df;
                        if (!this[_0x41567c(0x657)]) {
                            if (_0x7f02ad === _0x488876[_0x41567c(0xd2c)]['PENTAGRAM']) this[_0x41567c(0xe00)]();
                            else {
                                if (_0x7f02ad === _0x488876['default'][_0x41567c(0x13b0)] || _0x7f02ad === _0x488876[_0x41567c(0xd2c)]['SIRE'] || _0x7f02ad === _0x488876[_0x41567c(0xd2c)][_0x41567c(0x19c)] || _0x7f02ad === _0x488876['default']['SHROUD'] || _0x7f02ad === _0x488876['default']['VICTORY']) {
                                    this[_0x41567c(0xe00)](), this[_0x41567c(0x657)] = !0x0;
                                    let _0x3daec4 = [0x6, 0x42, 0x64],
                                        _0x4e0d07 = [_0x28c7e4[_0x41567c(0xd2c)]['EVOLUTION'], _0x28c7e4[_0x41567c(0xd2c)][_0x41567c(0xf9c)], _0x28c7e4[_0x41567c(0xd2c)]['EXISTING_ANY'], _0x28c7e4[_0x41567c(0xd2c)]['EVOLUTION'], _0x28c7e4[_0x41567c(0xd2c)]['EVOLUTION']],
                                        _0x3b8cd5 = new _0x50e405['default'](_0x3daec4, _0x4e0d07);
                                    _0x34163b['default'][_0x41567c(0x1043)][_0x41567c(0x17c7)][_0x41567c(0xab4)](_0x3b8cd5), _0x34163b[_0x41567c(0xd2c)]['Core'][_0x41567c(0x2ce)](this['x'], this['y'], _0x3b8cd5);
                                } else {
                                    if (_0x7f02ad === _0x488876[_0x41567c(0xd2c)]['CART']) {
                                        this['Disappear'](), this['hasLostTreasure'] = !0x0;
                                        let _0x265b34 = [0x3, 0xa, 0x64],
                                            _0x20b678 = [_0x28c7e4['default'][_0x41567c(0x18fa)], _0x28c7e4['default'][_0x41567c(0xf9c)], _0x28c7e4['default']['EXISTING_ANY'], _0x28c7e4['default']['EVOLUTION'], _0x28c7e4['default']['EVOLUTION']],
                                            _0x5dc74f = new _0x50e405['default'](_0x265b34, _0x20b678);
                                        _0x34163b['default'][_0x41567c(0x1043)][_0x41567c(0x17c7)][_0x41567c(0xab4)](_0x5dc74f), _0x34163b['default']['Core']['MakeTreasure'](this['x'], this['y'], _0x5dc74f);
                                    }
                                }
                            }
                        }
                    }
                }
                _0x1407e9['default'] = _0x4e30f7;
            };
