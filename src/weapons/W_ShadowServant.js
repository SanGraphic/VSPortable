// Module 0x17dee
// Args: _0x2d9c56, _0x33d5bf, _0x540eb7

export default (_0x2d9c56, _0x33d5bf, _0x540eb7) => {
                'use strict';
                const _0x394ffd = a0_0x6932;
                var _0x3b127f = this && this['__importDefault'] || function(_0x15bb30) {
                    return _0x15bb30 && _0x15bb30['__esModule'] ? _0x15bb30 : {
                        'default': _0x15bb30
                    };
                };
                Object['defineProperty'](_0x33d5bf, '__esModule', {
                    'value': !0x0
                }), _0x33d5bf['W_ShadowServant'] = void 0x0;
                const _0x2a1d16 = _0x3b127f(_0x540eb7(0xe49a)),
                    _0xf7376d = _0x3b127f(_0x540eb7(0x54e3)),
                    _0x33a3b5 = _0x3b127f(_0x540eb7(0x5f07)),
                    _0x900bcd = _0x3b127f(_0x540eb7(0x9b68));
                class _0x51a38d extends _0x2a1d16['default'] {
                    constructor(_0x12cd5f) {
                        const _0x23c076 = _0x394ffd;
                        super(_0x12cd5f), this[_0x23c076(0x241)] = 'bubbleSphere2.png', this[_0x23c076(0x67c)] = 'snakeW_i0', this[_0x23c076(0x1020)] = 'snakeW_', this['trailSpriteName'] = 'BlackTrail.png', this['counterWeaponType'] = _0xf7376d[_0x23c076(0xd2c)][_0x23c076(0x15aa)], this['SummonSprite'] = _0x33a3b5[_0x23c076(0xd2c)][_0x23c076(0x1043)][_0x23c076(0x6d2)][_0x23c076(0x18bd)]['image'](0x0, 0x0, 'vfx', 'summon2.png')[_0x23c076(0x183f)](!0x1)[_0x23c076(0xb4a)](-_0x33a3b5['default'][_0x23c076(0x1043)][_0x23c076(0x6d2)]['renderer'][_0x23c076(0x140e)]), this[_0x23c076(0x125b)] = _0x33a3b5[_0x23c076(0xd2c)]['Core'][_0x23c076(0x6d2)][_0x23c076(0x18bd)][_0x23c076(0x1791)]('vfx'), this[_0x23c076(0x125b)][_0x23c076(0x14c0)]({
                            'frame': ['PfxGray1.png', 'PfxGray2.png', 'PfxPurple2.png', 'PfxPurple3.png'],
                            'angle': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'speed': {
                                'min': 0x64,
                                'max': 0xc8
                            },
                            'quantity': 0x2,
                            'lifespan': 0x190,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x1,
                                'end': 0x1
                            },
                            'on': !0x1
                        }), this['well'] = this['PfxEmitter'][_0x23c076(0x1386)]({
                            'x': 0x0,
                            'y': 0x0,
                            'power': 0x1,
                            'epsilon': 0x32,
                            'gravity': 0x14
                        });
                    } ['CheckArcanas']() {
                        const _0x4f4fe4 = _0x394ffd;
                        if (_0x33a3b5[_0x4f4fe4(0xd2c)][_0x4f4fe4(0x1043)][_0x4f4fe4(0x1884)]['ActiveArcanas']['indexOf'](_0x900bcd[_0x4f4fe4(0xd2c)][_0x4f4fe4(0x19a1)]) > -0x1) {
                            if (_0x33a3b5['default'][_0x4f4fe4(0x1043)][_0x4f4fe4(0x164d)][_0x4f4fe4(0x1e6)](_0x267338 => _0x267338[_0x4f4fe4(0x14e)] === this['counterWeaponType'])) return;
                            let _0x32d540 = _0x33a3b5[_0x4f4fe4(0xd2c)]['Core']['AddHiddenWeapon'](this['counterWeaponType']);
                            for (this['counterWeapon'] = _0x32d540; _0x32d540['level'] < this['level'];) _0x32d540[_0x4f4fe4(0x2ab)]();
                        }
                        super[_0x4f4fe4(0x1ce)]();
                    } ['LevelUp']() {
                        const _0x41d7d0 = _0x394ffd;
                        let _0x346aca = super['LevelUp']();
                        return this['counterWeapon'] && this[_0x41d7d0(0x3e4)][_0x41d7d0(0x2ab)](), _0x346aca;
                    } ['Fire']() {
                        const _0x4259c8 = _0x394ffd;
                        super[_0x4259c8(0x1754)](), this['SummonAnimation']();
                    } ['Update'](_0x9a17fa) {
                        const _0x1bd97c = _0x394ffd;
                        super['Update'](_0x9a17fa), this['SummonSprite']['copyPosition'](_0x33a3b5['default']['Core']['Player']), this[_0x1bd97c(0xc05)]['x'] = _0x33a3b5['default'][_0x1bd97c(0x1043)][_0x1bd97c(0x10f6)]['x'], this[_0x1bd97c(0xc05)]['y'] = _0x33a3b5['default']['Core']['Player']['y'];
                    } ['SummonAnimation']() {
                        const _0x427dfa = _0x394ffd;
                        var _0x189eb3;
                        this['SummonSprite']['setScale'](0x0)[_0x427dfa(0x183f)](!0x0)['setAlpha'](0x1), null === (_0x189eb3 = this['summonTween']) || void 0x0 === _0x189eb3 || _0x189eb3['stop'](), this[_0x427dfa(0x2e4)] = _0x33a3b5[_0x427dfa(0xd2c)][_0x427dfa(0x1043)]['scene'][_0x427dfa(0x12a1)]['add']({
                            'targets': this['SummonSprite'],
                            'scale': this[_0x427dfa(0x5f5)],
                            'alpha': 0x0,
                            'duration': 0x1f4
                        });
                    }
                }
                _0x33d5bf['W_ShadowServant'] = _0x51a38d, _0x33d5bf['default'] = _0x51a38d;
            };
