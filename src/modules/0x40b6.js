// Module 0x40b6
// Args: _0x410abb, _0x27b595, _0x10070d

export default (_0x410abb, _0x27b595, _0x10070d) => {
                'use strict';
                const _0x5699a8 = a0_0x6932;
                var _0x17ebb3 = this && this['__importDefault'] || function(_0x17b23e) {
                    const _0x2eb192 = a0_0x6932;
                    return _0x17b23e && _0x17b23e['__esModule'] ? _0x17b23e : {
                        'default': _0x17b23e
                    };
                };
                Object['defineProperty'](_0x27b595, '__esModule', {
                    'value': !0x0
                }), _0x27b595['B_Triace'] = void 0x0;
                const _0x23abee = _0x17ebb3(_0x10070d(0xa14d)),
                    _0x3df27b = _0x17ebb3(_0x10070d(0x5f07)),
                    _0x540502 = _0x17ebb3(_0x10070d(0x1fd7)),
                    _0x74d068 = _0x17ebb3(_0x10070d(0x5103)),
                    _0x2535fc = _0x10070d(0x18304),
                    _0x820b54 = _0x17ebb3(_0x10070d(0x9b68)),
                    _0x31aae1 = _0x17ebb3(_0x10070d(0x54e3));
                class _0x4a5849 extends _0x23abee['default'] {
                    constructor(_0x364c98, _0x4cc132, _0x557551, _0x5670ca, _0x24f517) {
                        const _0x33552b = _0x5699a8;
                        super(_0x364c98, _0x4cc132, _0x557551, 'vfx', 'WhiteDot.png', _0x5670ca, _0x24f517), this[_0x33552b(0x161a)] = 0x10, this[_0x33552b(0x9e9)] = Phaser['Math'][_0x33552b(0x82a)]['pick']([0xffff, 0x66ff, 0xffff66]), this[_0x33552b(0x919)] = this[_0x33552b(0x6d2)]['add'][_0x33552b(0x4f6)](0x0, 0x0, 0x1, this[_0x33552b(0x9e9)])['setOrigin'](0.5)[_0x33552b(0xdab)](0.2)['setVisible'](!0x0)['setBlendMode'](_0x2535fc['BlendModes'][_0x33552b(0x1811)]), this[_0x33552b(0x183f)](!0x1), this[_0x33552b(0x125b)] = this['scene'][_0x33552b(0x18bd)][_0x33552b(0x1791)]('vfx'), this[_0x33552b(0x125b)][_0x33552b(0x14c0)]({
                            'frame': ['PfxGreen.png', 'PfxYellow.png'],
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'quantity': 0x1,
                            'lifespan': 0x64,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x1
                        }), this[_0x33552b(0x1ade)] = this[_0x33552b(0x125b)]['createEmitter']({
                            'frame': ['ProjectileBlue1.png', 'ProjectileBlue2.png', 'PfxLightGreen.png'],
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0xb4,
                                'steps': 0x10
                            },
                            'quantity': 0x1,
                            'lifespan': 0x64,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x0,
                                'end': 0x2
                            },
                            'on': !0x1
                        });
                    } ['OnRecycle']() {
                        const _0x2b5217 = _0x5699a8;
                        var _0x1e5cec;
                        super[_0x2b5217(0x5ce)](), this[_0x2b5217(0xcf9)]['setCircle'](0x1), this[_0x2b5217(0x8a2)](_0x74d068[_0x2b5217(0xd2c)][_0x2b5217(0x15db)] * this['weapon'][_0x2b5217(0x5f5)]), this[_0x2b5217(0x652)](this['myColor']), this['y'] -= 0x18, _0x3df27b[_0x2b5217(0xd2c)]['Sound'][_0x2b5217(0x7f6)](_0x540502[_0x2b5217(0xd2c)][_0x2b5217(0x9f3)], {
                            'detune': -0x64 * this['indexInWeapon'],
                            'volume': 0x1,
                            'rate': 2.5
                        }, 0xc8, 0x1), this['GroundFx'][_0x2b5217(0xdab)](0.4)[_0x2b5217(0x8a2)](0x0)['setVisible'](!0x0), this['setAlpha'](0x0)[_0x2b5217(0x8a2)](0x0), this[_0x2b5217(0x1ade)][_0x2b5217(0x8a2)]({
                            'start': 0x0,
                            'end': Math[_0x2b5217(0x1981)](0x2, this[_0x2b5217(0x4a1)][_0x2b5217(0x5f5)])
                        }), null === (_0x1e5cec = this[_0x2b5217(0xd35)]) || void 0x0 === _0x1e5cec || _0x1e5cec[_0x2b5217(0x1a34)](), this[_0x2b5217(0xd35)] = this['scene'][_0x2b5217(0x12a1)][_0x2b5217(0x18bd)]({
                            'targets': [this[_0x2b5217(0x919)], this],
                            'alpha': 0x0,
                            'scale': this['radius'] * this[_0x2b5217(0x4a1)]['PArea'],
                            'duration': this[_0x2b5217(0x4a1)][_0x2b5217(0x16c3)],
                            'ease': 'Linear',
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        }), this[_0x2b5217(0x193c)](!0x0, 0.1, 0.1), this[_0x2b5217(0xcf9)]['setBoundsRectangle'](_0x3df27b['default'][_0x2b5217(0x1043)][_0x2b5217(0x10f6)][_0x2b5217(0xc00)]), this['body']['onWorldBounds'] = !0x0;
                    } ['Update']() {
                        const _0x3ada20 = _0x5699a8;
                        this['GroundFx'][_0x3ada20(0xf01)](this), this[_0x3ada20(0x125b)]['emitParticleAt'](this['x'], this['y']), this['depth'] = -0x2, this['PfxEmitter'][_0x3ada20(0x16c6)] = -0x1;
                    } ['DeSpawn']() {
                        const _0x345e54 = _0x5699a8;
                        var _0x2c794c;
                        null === (_0x2c794c = this[_0x345e54(0xd35)]) || void 0x0 === _0x2c794c || _0x2c794c[_0x345e54(0x1a34)](), this[_0x345e54(0x919)]['setVisible'](!0x1), this[_0x345e54(0x4a1)][_0x345e54(0x1007)] && this[_0x345e54(0x4a1)][_0x345e54(0x14e)] != _0x31aae1['default']['TRIASSO1'] && this[_0x345e54(0x4a1)][_0x345e54(0x155a)](this['x'], this['y']), super['DeSpawn']();
                    } ['OnHasHitAnObject'](_0x6462af) {
                        const _0x7278c8 = _0x5699a8;
                        _0x6462af['isDead'] || (_0x3df27b[_0x7278c8(0xd2c)][_0x7278c8(0x1043)]['Arcanas'][_0x7278c8(0x15e7)][_0x7278c8(0x1303)](_0x820b54[_0x7278c8(0xd2c)][_0x7278c8(0x299)]) > -0x1 && this['weapon']['bulletType'] === _0x31aae1[_0x7278c8(0xd2c)]['TRIASSO3'] && this[_0x7278c8(0x4a1)][_0x7278c8(0x155a)](this['x'], this['y'], 0x1, 0x0), _0x3df27b[_0x7278c8(0xd2c)][_0x7278c8(0x1043)][_0x7278c8(0x1884)][_0x7278c8(0x15e7)][_0x7278c8(0x1303)](_0x820b54[_0x7278c8(0xd2c)][_0x7278c8(0x172d)]) > -0x1 && this['TryFreeze'](_0x6462af), this[_0x7278c8(0x3d8)]--, this['penetrating'] <= 0x0 && this[_0x7278c8(0x14fb)]());
                    } ['SetNullTarget']() {
                        const _0x157424 = _0x5699a8;
                        let _0x4ef5af = _0x3df27b[_0x157424(0xd2c)]['Core'][_0x157424(0x10f6)][_0x157424(0x115d)];
                        0x0 === _0x4ef5af['x'] && 0x0 === _0x4ef5af['y'] && (_0x4ef5af['x'] = 0x1), _0x4ef5af = _0x4ef5af['normalize'](), this['SetTarget'](_0x4ef5af);
                    } ['SetTarget'](_0x3e4045) {
                        const _0x5383dc = _0x5699a8;
                        super['SetTarget'](_0x3e4045);
                        var _0x5c55de = this[_0x5383dc(0xf02)](this[_0x5383dc(0x18a7)]),
                            _0x3f79ac = [0x0, -0xf, 0xf];
                        this[_0x5383dc(0x6d2)][_0x5383dc(0x1585)][_0x5383dc(0x18fc)](_0x5c55de + Phaser[_0x5383dc(0x24f)][_0x5383dc(0x54d)](_0x3f79ac[this[_0x5383dc(0x19c4)] % _0x3f79ac[_0x5383dc(0xed9)]]), this[_0x5383dc(0xfbb)], this[_0x5383dc(0xcf9)]['velocity']);
                        var _0x259c39 = Phaser['Math'][_0x5383dc(0x1551)][_0x5383dc(0x7bf)];
                        this[_0x5383dc(0x9b5)](Phaser['Math'][_0x5383dc(0x1470)](Math['atan2'](this['body']['velocity']['y'] - _0x259c39['y'], this['body'][_0x5383dc(0xf4e)]['x'] - _0x259c39['x'])));
                    }
                }
                _0x27b595['B_Triace'] = _0x4a5849, _0x27b595['default'] = _0x4a5849;
            };
