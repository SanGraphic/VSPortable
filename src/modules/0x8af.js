// Module 0x8af
// Args: _0x5d13d8, _0x1f60aa, _0xad92c5

export default (_0x5d13d8, _0x1f60aa, _0xad92c5) => {
                'use strict';
                const _0x20cad6 = a0_0x6932;
                var _0x586dfb = this && this['__importDefault'] || function(_0x49aef2) {
                    const _0x1945fd = _0x20cad6;
                    return _0x49aef2 && _0x49aef2[_0x1945fd(0x16f1)] ? _0x49aef2 : {
                        'default': _0x49aef2
                    };
                };
                Object['defineProperty'](_0x1f60aa, '__esModule', {
                    'value': !0x0
                });
                const _0xaa094d = _0x586dfb(_0xad92c5(0x5f07)),
                    _0x4c5f14 = _0x586dfb(_0xad92c5(0x166d5)),
                    _0x34d6b6 = _0x586dfb(_0xad92c5(0xc42e)),
                    _0x16b8ce = _0x586dfb(_0xad92c5(0x4d17)),
                    _0x425501 = _0x586dfb(_0xad92c5(0x5103)),
                    _0x4d9eb3 = _0xad92c5(0x18304),
                    _0x53561b = _0x586dfb(_0xad92c5(0x42e7));
                class _0xe675ae extends _0x4c5f14['default'] {
                    constructor(_0x7cefb8, _0x2e4b5e, _0x502990) {
                        const _0x6a503b = _0x20cad6;
                        super(_0x7cefb8, _0x2e4b5e, _0x502990, _0x34d6b6[_0x6a503b(0xd2c)]['TREASURE']), this[_0x6a503b(0x161a)] = 0x14, this[_0x6a503b(0x13c)] = !0x1, _0xaa094d['default']['Core'][_0x6a503b(0x6d2)]['add'][_0x6a503b(0x1a88)](this), this[_0x6a503b(0x8a2)](_0x425501[_0x6a503b(0xd2c)][_0x6a503b(0x15db)]), this[_0x6a503b(0x1abc)] = this['scene']['add'][_0x6a503b(0x105b)](_0x2e4b5e, _0x502990, 'UI', 'arrow_01.png'), this[_0x6a503b(0x1abc)]['setDepth'](0x270f), this[_0x6a503b(0x1abc)][_0x6a503b(0x8a2)](0x2), this[_0x6a503b(0x1abc)][_0x6a503b(0xdab)](0.75), this[_0x6a503b(0x1abc)][_0x6a503b(0x11c7)](_0x4d9eb3[_0x6a503b(0x10fc)][_0x6a503b(0x1811)]);
                        const _0x4422ed = this['anims'][_0x6a503b(0x1756)]('UI', {
                            'start': 0x1,
                            'end': 0x8,
                            'zeroPad': 0x2,
                            'prefix': 'arrow_',
                            'suffix': '.png'
                        });
                        this[_0x6a503b(0x1abc)]['anims'][_0x6a503b(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x4422ed,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        });
                        const _0x15a83e = this['anims'][_0x6a503b(0x1756)]('UI', {
                            'start': 0x1,
                            'end': 0x8,
                            'zeroPad': 0x2,
                            'prefix': 'arrowNeutral_',
                            'suffix': '.png'
                        });
                        this['Cursor'][_0x6a503b(0x183e)][_0x6a503b(0x6a8)]({
                            'key': 'neutral',
                            'frames': _0x15a83e,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), this[_0x6a503b(0x1abc)][_0x6a503b(0x902)]('idle'), this[_0x6a503b(0xcf9)][_0x6a503b(0xdf6)](0x10, -0x8, -0x8);
                    } ['SetArcana'](_0x549e7e) {
                        const _0x560e9c = _0x20cad6;
                        _0x549e7e && (this['hasArcana'] = !0x0, this[_0x560e9c(0x381)]('BoxArcana.png'), this['Cursor']['setTint'](0x5f37c8), this['Cursor']['play']('neutral'));
                    } ['OnRecycle']() {
                        const _0x4ecd8f = _0x20cad6;
                        super['OnRecycle'](), this['goToPlayer'] = !0x0, this['isStationary'] = !0x0, this[_0x4ecd8f(0x1abc)][_0x4ecd8f(0x183f)](!0x0), _0xaa094d[_0x4ecd8f(0xd2c)]['Core'][_0x4ecd8f(0x15f2)][_0x4ecd8f(0x1780)](this) || _0xaa094d[_0x4ecd8f(0xd2c)]['Core']['PickupsWithArrows'][_0x4ecd8f(0x18bd)](this), null != _0xaa094d[_0x4ecd8f(0xd2c)]['Core']['Stage'][_0x4ecd8f(0x909)] && (this['y'] < _0xaa094d[_0x4ecd8f(0xd2c)][_0x4ecd8f(0x1043)][_0x4ecd8f(0x17c7)][_0x4ecd8f(0x909)] ? this['y'] = _0xaa094d[_0x4ecd8f(0xd2c)][_0x4ecd8f(0x1043)][_0x4ecd8f(0x17c7)]['minTreasureY'] : this['y'] > _0xaa094d[_0x4ecd8f(0xd2c)]['Core']['Stage']['maxTreasureY'] && (this['y'] = _0xaa094d[_0x4ecd8f(0xd2c)][_0x4ecd8f(0x1043)][_0x4ecd8f(0x17c7)][_0x4ecd8f(0xa78)])), null != _0xaa094d[_0x4ecd8f(0xd2c)][_0x4ecd8f(0x1043)][_0x4ecd8f(0x17c7)][_0x4ecd8f(0x783)] && (this['x'] < _0xaa094d[_0x4ecd8f(0xd2c)][_0x4ecd8f(0x1043)][_0x4ecd8f(0x17c7)]['minTreasureX'] ? this['x'] = _0xaa094d['default'][_0x4ecd8f(0x1043)][_0x4ecd8f(0x17c7)][_0x4ecd8f(0x783)] : this['x'] > _0xaa094d['default'][_0x4ecd8f(0x1043)]['Stage']['maxTreasureX'] && (this['x'] = _0xaa094d['default'][_0x4ecd8f(0x1043)][_0x4ecd8f(0x17c7)]['maxTreasureX'])), this[_0x4ecd8f(0x13c)] = !0x1, this['ResetCursor']();
                    } ['ResetCursor']() {
                        const _0x23fca9 = _0x20cad6;
                        this['setFrame']('BoxOpen.png'), this[_0x23fca9(0x1abc)][_0x23fca9(0x902)]('idle'), this[_0x23fca9(0x1abc)][_0x23fca9(0xb34)](0xffffff);
                    } ['DeSpawn']() {
                        const _0x57ebf0 = _0x20cad6;
                        super[_0x57ebf0(0x14fb)](), this['Cursor']['setVisible'](!0x1);
                    } ['Update']() {
                        const _0x2f8634 = _0x20cad6;
                        if (super['Update'](), this[_0x2f8634(0xb4a)](0x9 + this['y'] - _0xaa094d[_0x2f8634(0xd2c)][_0x2f8634(0x1043)][_0x2f8634(0x10f6)]['y']), Math[_0x2f8634(0x19db)](this['x'] - _0xaa094d['default'][_0x2f8634(0x1043)][_0x2f8634(0x10f6)]['x']) < 0.5 * this['scene'][_0x2f8634(0x12f9)][_0x2f8634(0x173c)] && Math[_0x2f8634(0x19db)](this['y'] - _0xaa094d[_0x2f8634(0xd2c)]['Core'][_0x2f8634(0x10f6)]['y']) < 0.5 * this[_0x2f8634(0x6d2)][_0x2f8634(0x12f9)][_0x2f8634(0x140e)]) this[_0x2f8634(0x1abc)]['copyPosition'](this), this[_0x2f8634(0x1abc)]['y'] -= 0x18, this[_0x2f8634(0x1abc)][_0x2f8634(0x9b5)](0x5a), this[_0x2f8634(0x1abc)]['setAlpha'](0x1), this['Cursor']['setBlendMode'](_0x4d9eb3[_0x2f8634(0x10fc)]['NORMAL']);
                        else {
                            var _0x4431c0 = this['AngleFromTargetRadians'](this);
                            this[_0x2f8634(0x1abc)][_0x2f8634(0x9b5)](Phaser['Math'][_0x2f8634(0x1470)](_0x4431c0)), this['Cursor'][_0x2f8634(0xf01)](_0xaa094d[_0x2f8634(0xd2c)]['Core'][_0x2f8634(0x10f6)]), this['Cursor']['x'] += 0.45 * Math[_0x2f8634(0xd7e)](_0x4431c0) * this[_0x2f8634(0x6d2)][_0x2f8634(0x12f9)]['width'], this['Cursor']['y'] += 0.45 * Math['sin'](_0x4431c0) * this['scene']['renderer']['height'], this['Cursor'][_0x2f8634(0xdab)](0.75), this['Cursor']['setBlendMode'](_0x4d9eb3[_0x2f8634(0x10fc)]['ADD']);
                        }
                        let _0x5555f1 = this[_0x2f8634(0xeee)](this['x'], this['y']);
                        this['x'] = _0x5555f1['x'], this['y'] = _0x5555f1['y'], this[_0x2f8634(0x13c)] && _0xaa094d[_0x2f8634(0xd2c)][_0x2f8634(0x1043)][_0x2f8634(0x1884)]['ActiveArcanas']['length'] >= _0xaa094d['default']['Core'][_0x2f8634(0x1884)][_0x2f8634(0x97e)] && (this[_0x2f8634(0x13c)] = !0x1, this[_0x2f8634(0x122b)]());
                    } ['GetTaken']() {
                        const _0x1cfa22 = _0x20cad6;
                        if (!this[_0x1cfa22(0x210)]) {
                            switch (this[_0x1cfa22(0x1abc)][_0x1cfa22(0x183f)](!0x1), this['SetSeenItem'](this[_0x1cfa22(0xeb5)]), _0xaa094d[_0x1cfa22(0xd2c)]['Core'][_0x1cfa22(0x14d8)][_0x1cfa22(0x9f7)][_0x1cfa22(0x1564)](this[_0x1cfa22(0xeb5)]), this[_0x1cfa22(0xd33)]) {
                                case 0x1:
                                    _0x16b8ce[_0x1cfa22(0xd2c)][_0x34d6b6['default'][_0x1cfa22(0x175a)]]['pickedupAmount'] += 0x1, _0xaa094d['default'][_0x1cfa22(0x1043)]['PlayerOptions']['RunPickups']['push'](_0x34d6b6[_0x1cfa22(0xd2c)][_0x1cfa22(0x175a)]);
                                    break;
                                case 0x2:
                                    _0x16b8ce[_0x1cfa22(0xd2c)][_0x34d6b6[_0x1cfa22(0xd2c)][_0x1cfa22(0x16d8)]][_0x1cfa22(0x856)] += 0x1, _0xaa094d[_0x1cfa22(0xd2c)][_0x1cfa22(0x1043)]['PlayerOptions']['RunPickups']['push'](_0x34d6b6['default']['STATS_TREASURE_2']);
                                    break;
                                case 0x3:
                                    _0x16b8ce['default'][_0x34d6b6[_0x1cfa22(0xd2c)][_0x1cfa22(0xe73)]]['pickedupAmount'] += 0x1, _0xaa094d[_0x1cfa22(0xd2c)]['Core']['PlayerOptions']['RunPickups'][_0x1cfa22(0x1564)](_0x34d6b6[_0x1cfa22(0xd2c)][_0x1cfa22(0xe73)]);
                            }
                            _0xaa094d['default'][_0x1cfa22(0x1043)]['TreasureQueue'][_0x1cfa22(0x1564)](new _0x53561b['default'](this[_0x1cfa22(0xd33)], this['CurrentTreasureTypes'], this['CurrentFixedTreasures'])), super[_0x1cfa22(0x437)]();
                        }
                    } ['TurnTowards'](_0x47009d) {
                        const _0x41a1b7 = _0x20cad6;
                        let _0x36394b = new Phaser[(_0x41a1b7(0x24f))]['Vector2'](0x0, 0x0);
                        _0x36394b['x'] = _0x47009d[_0x41a1b7(0xcf9)]['position']['x'] - _0xaa094d['default'][_0x41a1b7(0x1043)][_0x41a1b7(0x10f6)]['x'], _0x36394b['y'] = _0x47009d[_0x41a1b7(0xcf9)]['position']['y'] - _0xaa094d[_0x41a1b7(0xd2c)]['Core']['Player']['y'], _0x36394b[_0x41a1b7(0x183b)]();
                        let _0x198c77 = new Phaser[(_0x41a1b7(0x24f))][(_0x41a1b7(0x1551))](_0x36394b['x'], _0x36394b['y']);
                        var _0x44d200 = Phaser['Math'][_0x41a1b7(0x1551)][_0x41a1b7(0x7bf)];
                        return Phaser[_0x41a1b7(0x24f)][_0x41a1b7(0x1470)](Math[_0x41a1b7(0x326)](_0x198c77['y'] - _0x44d200['y'], _0x198c77['x'] - _0x44d200['x']));
                    }
                }
                _0x1f60aa['default'] = _0xe675ae;
            };
