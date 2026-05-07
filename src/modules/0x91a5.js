// Module 0x91a5
// Args: _0x3c1a54, _0x49f6e6, _0x580d74

export default (_0x3c1a54, _0x49f6e6, _0x580d74) => {
                'use strict';
                const _0x3e77b4 = a0_0x6932;
                var _0x1d3de3 = this && this['__importDefault'] || function(_0x524aed) {
                    return _0x524aed && _0x524aed['__esModule'] ? _0x524aed : {
                        'default': _0x524aed
                    };
                };
                Object['defineProperty'](_0x49f6e6, '__esModule', {
                    'value': !0x0
                }), _0x49f6e6['B_Spellstring'] = void 0x0;
                const _0x577e2e = _0x1d3de3(_0x580d74(0xa14d)),
                    _0x429476 = _0x1d3de3(_0x580d74(0x5f07)),
                    _0x1371e8 = _0x1d3de3(_0x580d74(0x1fd7)),
                    _0x204352 = _0x580d74(0x18304),
                    _0x346d57 = _0x1d3de3(_0x580d74(0x7c1));
                class _0x10bfdb extends _0x577e2e['default'] {
                    constructor(_0x56fe52, _0x333f42, _0x3a9044, _0x39eb74, _0x23441c) {
                        const _0x298e9c = _0x3e77b4;
                        super(_0x56fe52, _0x333f42, _0x3a9044, 'vfx', 'ProjectileHoly1.png', _0x39eb74, _0x23441c), this[_0x298e9c(0x1929)] = !0x1, this[_0x298e9c(0x117b)] = 0x0, this[_0x298e9c(0xc9f)] = [], this['maxPositions'] = 0x6, this[_0x298e9c(0x7cd)] = 0xff0000, this['angleLerp'] = 0x0, this[_0x298e9c(0x125b)] = this[_0x298e9c(0x6d2)][_0x298e9c(0x18bd)][_0x298e9c(0x1791)]('vfx'), this['PfxEmitter']['createEmitter']({
                            'frame': ['PfxHoly1.png', 'PfxHoly2.png'],
                            'speed': 0x0,
                            'quantity': 0x1,
                            'lifespan': 0x12c,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x1
                        });
                        let _0x461da1 = Math['random']() >= 0.5 ? 'spellstring1.png' : 'spellstring2.png';
                        this['trail'] = new _0x346d57['default'](this['scene'], _0x333f42, _0x3a9044, 'vfx', _0x461da1, 0x78, !0x0), this['trail'][_0x298e9c(0x8a2)](0x1), this[_0x298e9c(0x6d2)][_0x298e9c(0x18bd)][_0x298e9c(0x1a88)](this['trail']), this['trail']['blendMode'] = _0x204352['BlendModes'][_0x298e9c(0x1811)], this[_0x298e9c(0xec4)] = new Phaser[(_0x298e9c(0x24f))][(_0x298e9c(0x1551))]();
                    } ['OnRecycle']() {
                        const _0x35c56b = _0x3e77b4;
                        var _0x4ea19d;
                        super['OnRecycle'](), this[_0x35c56b(0x1929)] = !0x1, this['updateLoops'] = 0x0, this[_0x35c56b(0xcf9)][_0x35c56b(0x543)] = !0x1, this[_0x35c56b(0x3b8)]['setVisible'](!0x0), this['startingPoint']['x'] = this['x'], this[_0x35c56b(0xec4)]['y'] = this['y'], _0x429476[_0x35c56b(0xd2c)][_0x35c56b(0x1267)][_0x35c56b(0x7f6)](_0x1371e8[_0x35c56b(0xd2c)][_0x35c56b(0x1538)], {
                            'detune': -0x64 * this[_0x35c56b(0x19c4)],
                            'volume': 0.1
                        }, 0xc8, 0x4), this[_0x35c56b(0x3b8)][_0x35c56b(0xe71)] = 0x1, null === (_0x4ea19d = this[_0x35c56b(0x595)]) || void 0x0 === _0x4ea19d || _0x4ea19d[_0x35c56b(0x1a34)](), this['angleTween'] = this['scene'][_0x35c56b(0x12a1)]['add']({
                            'targets': this,
                            'angleLerp': -0x1 * this[_0x35c56b(0x10e3)],
                            'onStart': () => {
                                const _0x244387 = _0x35c56b;
                                this[_0x244387(0x10e3)] = 0x2 * (Math[_0x244387(0x9ad)]() - 0.5);
                            },
                            'duration': 0x78
                        });
                    } ['OnHasHitAnObject'](_0x32b16a) {
                        const _0x135fcb = _0x3e77b4;
                        this['expired'] = !0x0, this[_0x135fcb(0x14e3)]();
                    } ['Update'](_0x422695) {
                        const _0x34f4a6 = _0x3e77b4;
                        this[_0x34f4a6(0x117b)]++, !this[_0x34f4a6(0x1929)] && this[_0x34f4a6(0x117b)] > 0x1 && (this[_0x34f4a6(0x1929)] = !0x0, this['FadeOut']()), this[_0x34f4a6(0x3b8)]['setDepth'](this['y'] - _0x429476[_0x34f4a6(0xd2c)][_0x34f4a6(0x1043)][_0x34f4a6(0x10f6)]['y'] + 0.5 * this['scene'][_0x34f4a6(0x12f9)][_0x34f4a6(0x140e)]);
                        var _0x3a4bee = new Phaser[(_0x34f4a6(0x24f))][(_0x34f4a6(0x1551))]();
                        _0x3a4bee['x'] = this['target']['x'], _0x3a4bee['y'] = this[_0x34f4a6(0x18a7)]['y'], _0x3a4bee = this[_0x34f4a6(0x1646)](this[_0x34f4a6(0xec4)]['x'], this[_0x34f4a6(0xec4)]['y'], 0.5 * this['angleLerp'], _0x3a4bee);
                        let _0x51d9e7 = new Phaser['Curves'][(_0x34f4a6(0x12e9))]({
                            'x': this[_0x34f4a6(0x18a7)]['x'],
                            'y': this[_0x34f4a6(0x18a7)]['y']
                        }, {
                            'x': _0x3a4bee['x'],
                            'y': _0x3a4bee['y']
                        }, {
                            'x': this[_0x34f4a6(0xec4)]['x'],
                            'y': this['startingPoint']['y']
                        })['getPoints'](0x9);
                        this['trail'][_0x34f4a6(0xe67)](_0x51d9e7), this[_0x34f4a6(0x3b8)][_0x34f4a6(0x1365)]();
                        for (let _0x4dca01 = 0x0; _0x4dca01 < _0x51d9e7['length'] - 0x1; _0x4dca01++) {
                            const _0x194358 = _0x51d9e7[_0x4dca01];
                            this[_0x34f4a6(0x125b)]['emitParticleAt'](_0x194358['x'], _0x194358['y']);
                        }
                    } ['rotate_point'](_0x51f0ac, _0x28b560, _0x143c4c, _0x217d24) {
                        const _0x1645ac = _0x3e77b4;
                        var _0x5b4811 = Math[_0x1645ac(0xc80)](_0x143c4c),
                            _0x2808d9 = Math[_0x1645ac(0xd7e)](_0x143c4c);
                        _0x217d24['x'] -= _0x51f0ac, _0x217d24['y'] -= _0x28b560;
                        var _0x4aefa3 = _0x217d24['x'] * _0x2808d9 - _0x217d24['y'] * _0x5b4811,
                            _0x5545b3 = _0x217d24['x'] * _0x5b4811 + _0x217d24['y'] * _0x2808d9;
                        return _0x217d24['x'] = _0x4aefa3 + _0x51f0ac, _0x217d24['y'] = _0x5545b3 + _0x28b560, _0x217d24;
                    } ['FadeOut']() {
                        const _0x44fef7 = _0x3e77b4;
                        var _0x36c0b7;
                        null === (_0x36c0b7 = this['fadeTrailTween']) || void 0x0 === _0x36c0b7 || _0x36c0b7[_0x44fef7(0x1a34)](), this['fadeTrailTween'] = this[_0x44fef7(0x6d2)][_0x44fef7(0x12a1)]['add']({
                            'targets': this[_0x44fef7(0x3b8)],
                            'alpha': 0x0,
                            'duration': 0x64,
                            'onComplete': () => {
                                const _0x18290e = _0x44fef7;
                                this[_0x18290e(0x14fb)]();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0x275dc5 = _0x3e77b4;
                        var _0x45a1cf;
                        null === (_0x45a1cf = this[_0x275dc5(0x595)]) || void 0x0 === _0x45a1cf || _0x45a1cf['stop'](), this[_0x275dc5(0x3b8)][_0x275dc5(0x183f)](!0x1), super['DeSpawn']();
                    }
                }
                _0x49f6e6['B_Spellstring'] = _0x10bfdb, _0x49f6e6['default'] = _0x10bfdb;
            };
