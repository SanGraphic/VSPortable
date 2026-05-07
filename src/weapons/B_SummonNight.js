// Module 0x14b69
// Args: _0x92fc71, _0x5c1d3b, _0x209cde

export default (_0x92fc71, _0x5c1d3b, _0x209cde) => {
                'use strict';
                const _0x4ec9b0 = a0_0x6932;
                var _0x442df5 = this && this['__createBinding'] || (Object['create'] ? function(_0x2414b1, _0x4ba6d8, _0x4bb7f8, _0x47ee80) {
                        const _0x28ba39 = a0_0x6932;
                        void 0x0 === _0x47ee80 && (_0x47ee80 = _0x4bb7f8);
                        var _0x534d01 = Object['getOwnPropertyDescriptor'](_0x4ba6d8, _0x4bb7f8);
                        _0x534d01 && !('get' in _0x534d01 ? !_0x4ba6d8['__esModule'] : _0x534d01['writable'] || _0x534d01['configurable']) || (_0x534d01 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x4ba6d8[_0x4bb7f8];
                            }
                        }), Object['defineProperty'](_0x2414b1, _0x47ee80, _0x534d01);
                    } : function(_0x4d616f, _0x33f612, _0x249201, _0x41b97b) {
                        void 0x0 === _0x41b97b && (_0x41b97b = _0x249201), _0x4d616f[_0x41b97b] = _0x33f612[_0x249201];
                    }),
                    _0x38a50e = this && this['__setModuleDefault'] || (Object['create'] ? function(_0xf28474, _0xbf59ea) {
                        const _0x183f8a = _0x4ec9b0;
                        Object[_0x183f8a(0x811)](_0xf28474, 'default', {
                            'enumerable': !0x0,
                            'value': _0xbf59ea
                        });
                    } : function(_0x1e4ad8, _0x1bfb97) {
                        const _0x2c38b9 = _0x4ec9b0;
                        _0x1e4ad8[_0x2c38b9(0xd2c)] = _0x1bfb97;
                    }),
                    _0x4ce6d2 = this && this['__importStar'] || function(_0x4f8bb6) {
                        const _0x313a37 = _0x4ec9b0;
                        if (_0x4f8bb6 && _0x4f8bb6[_0x313a37(0x16f1)]) return _0x4f8bb6;
                        var _0x45d5ea = {};
                        if (null != _0x4f8bb6) {
                            for (var _0x4642a3 in _0x4f8bb6) 'default' !== _0x4642a3 && Object['prototype']['hasOwnProperty'][_0x313a37(0xff0)](_0x4f8bb6, _0x4642a3) && _0x442df5(_0x45d5ea, _0x4f8bb6, _0x4642a3);
                        }
                        return _0x38a50e(_0x45d5ea, _0x4f8bb6), _0x45d5ea;
                    },
                    _0x4b57cc = this && this['__importDefault'] || function(_0x1d007c) {
                        const _0x1db02f = _0x4ec9b0;
                        return _0x1d007c && _0x1d007c[_0x1db02f(0x16f1)] ? _0x1d007c : {
                            'default': _0x1d007c
                        };
                    };
                Object['defineProperty'](_0x5c1d3b, '__esModule', {
                    'value': !0x0
                }), _0x5c1d3b['B_SummonNight'] = void 0x0;
                const _0x42c6c2 = _0x4b57cc(_0x209cde(0xa14d)),
                    _0x186a8d = _0x4ce6d2(_0x209cde(0x5f07));
                class _0x5795c1 extends _0x42c6c2['default'] {
                    constructor(_0x54c570, _0x515958, _0x51837c, _0x2bcb52, _0x7420c9) {
                        const _0x100872 = _0x4ec9b0;
                        super(_0x54c570, _0x515958, _0x51837c, 'vfx', 'WhiteDot.png', _0x2bcb52, _0x7420c9), this['gravity'] = 0.5, this['fadeOutDelay'] = 0x2ee, this['timesFired'] = 0x0, this[_0x100872(0x5b8)] = 0x12c, this[_0x100872(0xf3e)] = this[_0x100872(0x6d2)][_0x100872(0x18bd)][_0x100872(0x568)](_0x515958, _0x51837c, 'vfx', 'fangNight.png')['setOrigin'](0.5, 0x0)[_0x100872(0x8a2)](0x0)[_0x100872(0xdab)](0x0), this[_0x100872(0x816)] = this[_0x100872(0x6d2)]['add'][_0x100872(0x1791)]('vfx'), this['FragmentsEmitter'] = this[_0x100872(0x816)]['createEmitter']({
                            'frame': ['glass0000.png', 'glass0001.png', 'glass0002.png', 'glass0003.png'],
                            'angle': {
                                'min': 0x1e,
                                'max': 0x96
                            },
                            'gravityY': 0x190,
                            'speed': {
                                'min': 0x64,
                                'max': 0x12c
                            },
                            'rotate': {
                                'start': 0x0,
                                'end': 0x168
                            },
                            'quantity': 0x10,
                            'lifespan': {
                                'min': 0xfa,
                                'max': 0x2ee
                            },
                            'alpha': {
                                'start': 0.8,
                                'end': 0.6
                            },
                            'scale': {
                                'start': 0x4,
                                'end': 0x0
                            },
                            'tint': {
                                'onEmit': (_0x216f33, _0x1c52af, _0x263184) => this['onEmitcustomTintFrag'](_0x216f33, _0x1c52af, _0x263184)
                            },
                            'on': !0x1
                        }), this['explosionRect'] = new Phaser[(_0x100872(0x10d2))]['Rectangle'](0x0, 0x0, 0x10, 0x10), this['FrontEmitterManager'] = this[_0x100872(0x6d2)][_0x100872(0x18bd)]['particles']('vfx'), this[_0x100872(0x883)][_0x100872(0x14c0)]({
                            'frame': ['bulletNightA.png'],
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'quantity': 0x1,
                            'lifespan': 0x12c,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'tint': {
                                'onEmit': (_0x2d08a2, _0x2672a1, _0x348d31) => this[_0x100872(0x1942)](_0x2d08a2, _0x2672a1, _0x348d31)
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this['explosionRect']
                            },
                            'on': !0x1
                        }), this[_0x100872(0x1379)] = this[_0x100872(0x6d2)][_0x100872(0x18bd)][_0x100872(0x1791)]('vfx'), this[_0x100872(0x1379)][_0x100872(0x14c0)]({
                            'frame': ['bulletNightB.png'],
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'quantity': 0x2,
                            'lifespan': 0x12c,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'tint': {
                                'onEmit': (_0x597149, _0x1bd5c0, _0x364a02) => this[_0x100872(0x1942)](_0x597149, _0x1bd5c0, _0x364a02)
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this['explosionRect']
                            },
                            'on': !0x1
                        }), this[_0x100872(0x816)][_0x100872(0xb4a)](this[_0x100872(0x6d2)][_0x100872(0x12f9)]['height'] + 0x2), this['FrontEmitterManager'][_0x100872(0xb4a)](this['scene'][_0x100872(0x12f9)][_0x100872(0x140e)] + 0x1), this[_0x100872(0xf3e)][_0x100872(0xb4a)](this['scene']['renderer'][_0x100872(0x140e)]), this['BackEmitterManager']['setDepth'](-this[_0x100872(0x6d2)]['renderer'][_0x100872(0x140e)]);
                    } ['onEmitcustomTint'](_0x55b036, _0x4f00b5, _0x5a9578) {
                        const _0x4c5eed = _0x4ec9b0;
                        return Phaser[_0x4c5eed(0x24f)]['RND']['pick']([0xff0000, 0xff00ff, 0xff]);
                    } ['onEmitcustomTintFrag'](_0x38dd54, _0x31a47c, _0x473b12) {
                        const _0x32870a = _0x4ec9b0;
                        return Phaser[_0x32870a(0x24f)]['RND'][_0x32870a(0x198c)]([0x0, 0x0, 0x44]);
                    } ['OnRecycle']() {
                        const _0x4cfbba = _0x4ec9b0;
                        var _0x541133, _0x1c7eac, _0x2dff9b;
                        this['setVisible'](!0x1), this['setOrigin'](0.5, 0x0), this[_0x4cfbba(0xf3e)]['setOrigin'](0.5, 0x0), this[_0x4cfbba(0xf3e)][_0x4cfbba(0x293)](!0x1), this['explosionRect']['y'] = 0x0, this[_0x4cfbba(0xf3e)]['setFrame']('fangNight.png'), this[_0x4cfbba(0x52b)] = !0x1, super['OnRecycle'](), this[_0x4cfbba(0x8a2)](0x0), this['body']['enable'] = !0x0, this[_0x4cfbba(0x177d)] = !0x1, this['FragmentsEmitterManager']['emitParticleAt'](this['x'], this['y'] - 0x18), _0x186a8d[_0x4cfbba(0xd2c)][_0x4cfbba(0x1043)]['scene']['time']['removeEvent'](this[_0x4cfbba(0x8b9)]), _0x186a8d[_0x4cfbba(0xd2c)][_0x4cfbba(0x1043)][_0x4cfbba(0x6d2)][_0x4cfbba(0x915)][_0x4cfbba(0x17fb)](this[_0x4cfbba(0x12a3)]), this[_0x4cfbba(0x8b9)] = _0x186a8d[_0x4cfbba(0xd2c)][_0x4cfbba(0x1043)]['scene']['time'][_0x4cfbba(0x12b8)]({
                            'delay': this[_0x4cfbba(0x4a1)][_0x4cfbba(0xcd5)],
                            'loop': !0x0,
                            'callback': () => {
                                this['objectsHit'] = [];
                            }
                        }), this[_0x4cfbba(0x12a3)] = _0x186a8d[_0x4cfbba(0xd2c)]['Core'][_0x4cfbba(0x6d2)]['time'][_0x4cfbba(0x12b8)]({
                            'delay': this['weapon']['PDuration'],
                            'loop': !0x0,
                            'callback': () => {
                                const _0x5484d1 = _0x4cfbba;
                                this[_0x5484d1(0x14fb)]();
                            }
                        });
                        let _0x1e8b92 = this[_0x4cfbba(0x4a1)][_0x4cfbba(0x5f5)],
                            _0x46af24 = 0x10 * _0x1e8b92;
                        this[_0x4cfbba(0x5f6)] = 0.5, _0x1e8b92 - 1.2 > 0x0 && (this['reach'] += Math['min'](0.5, _0x1e8b92 - 1.2)), this['reach'] *= _0x186a8d[_0x4cfbba(0x4c0)], null === (_0x541133 = this[_0x4cfbba(0xd35)]) || void 0x0 === _0x541133 || _0x541133[_0x4cfbba(0x1a34)](), this[_0x4cfbba(0xd35)] = _0x186a8d[_0x4cfbba(0xd2c)][_0x4cfbba(0x1043)][_0x4cfbba(0x6d2)][_0x4cfbba(0x12a1)]['add']({
                            'targets': this,
                            'scaleX': _0x46af24,
                            'scaleY': this[_0x4cfbba(0x5f6)],
                            'duration': 0x1f4
                        }), this['FrontEmitterManager'][_0x4cfbba(0xb4a)](this['scene'][_0x4cfbba(0x12f9)]['height'] + 0x1), null === (_0x1c7eac = this[_0x4cfbba(0x1700)]) || void 0x0 === _0x1c7eac || _0x1c7eac[_0x4cfbba(0x1a34)](), null === (_0x2dff9b = this['fangTween']) || void 0x0 === _0x2dff9b || _0x2dff9b[_0x4cfbba(0x1a34)](), this[_0x4cfbba(0xe40)] = _0x186a8d['default']['Core']['scene'][_0x4cfbba(0x12a1)]['add']({
                            'targets': this['fangSprite'],
                            'alpha': 0.65,
                            'scaleX': this[_0x4cfbba(0x4a1)]['PArea'],
                            'scaleY': this[_0x4cfbba(0x5f6)] / 0x43,
                            'y': this['y'],
                            'duration': 0xc8,
                            'ease': 'Sine.easeInOut',
                            'onStart': () => {
                                const _0x3eaf83 = _0x4cfbba;
                                this[_0x3eaf83(0xf3e)][_0x3eaf83(0xf8e)](0.5, 0x0), this[_0x3eaf83(0xf3e)]['x'] = this['x'], this[_0x3eaf83(0xf3e)]['y'] = this['y'] - 0x80, this[_0x3eaf83(0xf3e)]['alpha'] = 0x0, this[_0x3eaf83(0xf3e)]['setScale'](0x0);
                            },
                            'onComplete': () => {
                                const _0x10ad45 = _0x4cfbba;
                                var _0x5c9f3f;
                                null === (_0x5c9f3f = this[_0x10ad45(0x1700)]) || void 0x0 === _0x5c9f3f || _0x5c9f3f[_0x10ad45(0x1a34)](), this['fangTweenOut'] = _0x186a8d[_0x10ad45(0xd2c)]['Core'][_0x10ad45(0x6d2)][_0x10ad45(0x12a1)][_0x10ad45(0x18bd)]({
                                    'targets': this[_0x10ad45(0xf3e)],
                                    'scaleX': 0x0,
                                    'scaleY': 0x0,
                                    'delay': 0xc8,
                                    'duration': 0xc8,
                                    'ease': 'Sine.easeInOut',
                                    'onComplete': () => {
                                        const _0x43b2ae = _0x10ad45;
                                        this['FrontEmitterManager'][_0x43b2ae(0xb4a)](0x1 - this[_0x43b2ae(0x6d2)]['renderer'][_0x43b2ae(0x140e)]);
                                    }
                                });
                            }
                        });
                        let _0x114bff = 0.5 * _0x46af24;
                        this['explosionRect']['x'] = -0.5 * _0x114bff, this[_0x4cfbba(0x695)][_0x4cfbba(0x173c)] = _0x114bff, this[_0x4cfbba(0x695)][_0x4cfbba(0x140e)] = this['reach'];
                    } ['DeSpawn']() {
                        const _0x1b22aa = _0x4ec9b0;
                        this['isCullable'] = !0x0, this[_0x1b22aa(0xcf9)][_0x1b22aa(0x543)] = !0x1, _0x186a8d[_0x1b22aa(0xd2c)][_0x1b22aa(0x1043)][_0x1b22aa(0x6d2)][_0x1b22aa(0x915)]['removeEvent'](this[_0x1b22aa(0x8b9)]), _0x186a8d[_0x1b22aa(0xd2c)][_0x1b22aa(0x1043)][_0x1b22aa(0x6d2)][_0x1b22aa(0x915)]['removeEvent'](this[_0x1b22aa(0x12a3)]), super[_0x1b22aa(0x14fb)]();
                    } ['Update'](_0x2f67c9) {
                        const _0x37cd44 = _0x4ec9b0;
                        super['Update'](_0x2f67c9), this[_0x37cd44(0x695)][_0x37cd44(0x140e)] = this['scaleY'], this[_0x37cd44(0x883)][_0x37cd44(0x108b)](this['x'], this['y']), this[_0x37cd44(0x1379)][_0x37cd44(0x108b)](this['x'], this['y']);
                    }
                }
                _0x5c1d3b['B_SummonNight'] = _0x5795c1, _0x5c1d3b['default'] = _0x5795c1;
            };
