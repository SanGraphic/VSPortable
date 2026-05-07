// Module 0xa802
// Args: _0xc78a2a, _0x40c35a, _0x2f972c

export default (_0xc78a2a, _0x40c35a, _0x2f972c) => {
                'use strict';
                const _0x20ed6e = a0_0x6932;
                var _0x37d785 = this && this['__importDefault'] || function(_0x20d8ed) {
                    const _0x4fea46 = a0_0x6932;
                    return _0x20d8ed && _0x20d8ed['__esModule'] ? _0x20d8ed : {
                        'default': _0x20d8ed
                    };
                };
                Object['defineProperty'](_0x40c35a, '__esModule', {
                    'value': !0x0
                });
                const _0x5595c1 = _0x37d785(_0x2f972c(0x1fd7)),
                    _0x39b2a3 = _0x37d785(_0x2f972c(0x5f07)),
                    _0x56d3e1 = _0x37d785(_0x2f972c(0x869f));
                class _0x4c172a extends _0x56d3e1['default'] {
                    ['MakeLevelOne']() {
                        const _0x4355a0 = _0x20ed6e;
                        super[_0x4355a0(0xf64)](), this['PfxEmitter'][_0x4355a0(0x9b5)]({
                            'min': 0x0,
                            'max': 0x168
                        }), this['PfxEmitter']['setGravity'](0x0, 0x0), this['PfxEmitter']['setTint'](0xffffbb), this['PfxEmitter'][_0x4355a0(0x515)] = !0x1;
                    } ['LevelUp']() {
                        const _0x4c99a4 = _0x20ed6e;
                        super['LevelUp'](), _0x39b2a3[_0x4c99a4(0xd2c)][_0x4c99a4(0x1043)][_0x4c99a4(0x14d8)]['UnlockedArcanas']['length'] > _0x39b2a3['default'][_0x4c99a4(0x1043)][_0x4c99a4(0x1884)]['ActiveArcanas']['length'] && _0x39b2a3[_0x4c99a4(0xd2c)][_0x4c99a4(0x1043)]['PlayerOptions'][_0x4c99a4(0x1611)] && (0x2 === this['level'] || 0x3 === this[_0x4c99a4(0x5e3)] || 0x4d === this[_0x4c99a4(0x5e3)] || 0x6c === this[_0x4c99a4(0x5e3)]) && (_0x39b2a3[_0x4c99a4(0xd2c)][_0x4c99a4(0x1043)]['GiveMainArcana'] = !0x0);
                    } ['OnStop']() {
                        const _0x3cf0b0 = _0x20ed6e;
                        this[_0x3cf0b0(0x748)][_0x3cf0b0(0x1631)](), this[_0x3cf0b0(0x9b5)](0x0);
                    } ['OnGetDamaged'](_0x13d064 = 0xff0000, _0xbffe7e = 0x78, _0x511727 = !0x0) {
                        const _0x466b62 = _0x20ed6e;
                        this[_0x466b62(0x3f1)] || (this[_0x466b62(0xfff)] = _0x39b2a3[_0x466b62(0xd2c)][_0x466b62(0x1043)]['scene']['time']['addEvent']({
                            'delay': _0xbffe7e,
                            'loop': !0x1,
                            'callback': () => {
                                this['restoreTint'](), this['PfxEmitter']['stop']();
                            }
                        }), _0x511727 && (this['PfxEmitter'][_0x466b62(0x726)](this['x'], this['y'] - 0x10), this['PfxEmitter']['start'](), _0x39b2a3[_0x466b62(0xd2c)][_0x466b62(0x1267)][_0x466b62(0x7f6)](_0x5595c1[_0x466b62(0xd2c)][_0x466b62(0xfca)], {
                            'volume': 0.4,
                            'detune': 0x3e8 + 0x1f4 * Math[_0x466b62(0x9ad)]()
                        }, 0x96, 0x3), _0x39b2a3[_0x466b62(0xd2c)]['Sound'][_0x466b62(0x7f6)](_0x5595c1[_0x466b62(0xd2c)][_0x466b62(0x1602)], {
                            'volume': 0.1,
                            'detune': -0x1f4 * Math[_0x466b62(0x9ad)]() - 0x1f4
                        }, 0x1c2, 0x1)), this['receivingDamage'] = !0x0);
                    } ['OnDeath']() {
                        const _0x505e9f = _0x20ed6e;
                        var _0x4aef3b;
                        null === (_0x4aef3b = this[_0x505e9f(0xfff)]) || void 0x0 === _0x4aef3b || _0x4aef3b['destroy'](), this[_0x505e9f(0x748)][_0x505e9f(0x1631)](), this[_0x505e9f(0x652)](0xffffbb), this[_0x505e9f(0x6d2)][_0x505e9f(0x12a1)][_0x505e9f(0x18bd)]({
                            'targets': this,
                            'scaleX': 0x2,
                            'duration': 0x2ee,
                            'ease': 'Linear',
                            'onUpdate': () => {
                                const _0x273765 = _0x505e9f;
                                this['PfxEmitter'][_0x273765(0x726)](this['x'], this['y'] - 0x10);
                            }
                        }), this[_0x505e9f(0x6d2)][_0x505e9f(0x12a1)][_0x505e9f(0x18bd)]({
                            'targets': this,
                            'delay': 0x2ee,
                            'scaleX': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear'
                        }), this['scene'][_0x505e9f(0x12a1)]['add']({
                            'targets': this,
                            'scaleY': 0.5,
                            'duration': 0x2ee,
                            'ease': 'Linear'
                        }), this['scene'][_0x505e9f(0x12a1)]['add']({
                            'targets': this,
                            'delay': 0x2ee,
                            'scaleY': 0x8,
                            'duration': 0x64,
                            'ease': 'Linear',
                            'onStart': () => {
                                const _0x420288 = _0x505e9f;
                                _0x39b2a3['default'][_0x420288(0x1267)]['PlaySound'](_0x5595c1[_0x420288(0xd2c)][_0x420288(0x672)], {
                                    'volume': 0x2
                                });
                            }
                        }), this[_0x505e9f(0x125b)]['setPosition'](this['x'], this['y'] - 0x10), this['PfxEmitter'][_0x505e9f(0x1aa2)](), _0x39b2a3[_0x505e9f(0xd2c)]['Core'][_0x505e9f(0x6d2)][_0x505e9f(0x915)][_0x505e9f(0x12b8)]({
                            'delay': 0x2ee,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x51215f = _0x505e9f;
                                this['PfxEmitter'][_0x51215f(0x1a34)]();
                            }
                        }), _0x39b2a3[_0x505e9f(0xd2c)]['Core']['scene']['time']['addEvent']({
                            'delay': 0x4e2,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x3a5a48 = _0x505e9f;
                                this[_0x3a5a48(0xfb6)] ? _0x39b2a3[_0x3a5a48(0xd2c)]['Core'][_0x3a5a48(0x69e)]['FinalStageGameOver']() : _0x39b2a3[_0x3a5a48(0xd2c)][_0x3a5a48(0x1043)]['SceneManager']['GameOver']();
                            }
                        });
                    }
                }
                _0x40c35a['default'] = _0x4c172a;
            };
