// Module 0x87c2
// Args: _0x24e580, _0x340a1d, _0x53232f

export default (_0x24e580, _0x340a1d, _0x53232f) => {
                'use strict';
                const _0x46020c = a0_0x6932;
                var _0x552184 = this && this['__createBinding'] || (Object['create'] ? function(_0x254fc3, _0x232fe2, _0x476ced, _0x44a035) {
                        const _0x3e8e93 = a0_0x6932;
                        void 0x0 === _0x44a035 && (_0x44a035 = _0x476ced);
                        var _0x247ba6 = Object['getOwnPropertyDescriptor'](_0x232fe2, _0x476ced);
                        _0x247ba6 && !('get' in _0x247ba6 ? !_0x232fe2['__esModule'] : _0x247ba6['writable'] || _0x247ba6['configurable']) || (_0x247ba6 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x232fe2[_0x476ced];
                            }
                        }), Object['defineProperty'](_0x254fc3, _0x44a035, _0x247ba6);
                    } : function(_0x22702e, _0x3e31bb, _0x152dbd, _0x3816b4) {
                        void 0x0 === _0x3816b4 && (_0x3816b4 = _0x152dbd), _0x22702e[_0x3816b4] = _0x3e31bb[_0x152dbd];
                    }),
                    _0x226c3a = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x1c801b, _0x2090d0) {
                        const _0x2338be = a0_0x6932;
                        Object['defineProperty'](_0x1c801b, 'default', {
                            'enumerable': !0x0,
                            'value': _0x2090d0
                        });
                    } : function(_0xa62a5f, _0x1e245e) {
                        const _0x53493b = a0_0x6932;
                        _0xa62a5f['default'] = _0x1e245e;
                    }),
                    _0x15583d = this && this['__importStar'] || function(_0x2d00ff) {
                        if (_0x2d00ff && _0x2d00ff['__esModule']) return _0x2d00ff;
                        var _0x1760ef = {};
                        if (null != _0x2d00ff) {
                            for (var _0x5e3811 in _0x2d00ff) 'default' !== _0x5e3811 && Object['prototype']['hasOwnProperty']['call'](_0x2d00ff, _0x5e3811) && _0x552184(_0x1760ef, _0x2d00ff, _0x5e3811);
                        }
                        return _0x226c3a(_0x1760ef, _0x2d00ff), _0x1760ef;
                    },
                    _0x2336bb = this && this['__importDefault'] || function(_0x34d535) {
                        const _0x29cca9 = _0x46020c;
                        return _0x34d535 && _0x34d535[_0x29cca9(0x16f1)] ? _0x34d535 : {
                            'default': _0x34d535
                        };
                    };
                Object['defineProperty'](_0x340a1d, '__esModule', {
                    'value': !0x0
                }), _0x340a1d['B_SummonNight2'] = void 0x0;
                const _0x127c7f = _0x2336bb(_0x53232f(0xa14d)),
                    _0x155654 = _0x15583d(_0x53232f(0x5f07));
                class _0x5da2bf extends _0x127c7f['default'] {
                    constructor(_0x5da935, _0xba7571, _0xa9fabc, _0x1464b1, _0x52b5c6) {
                        const _0x5eefe3 = _0x46020c;
                        super(_0x5da935, _0xba7571, _0xa9fabc, 'vfx', 'WhiteDot.png', _0x1464b1, _0x52b5c6), this[_0x5eefe3(0xaf6)] = 0.5, this['fadeOutDelay'] = 0x2ee, this[_0x5eefe3(0xd64)] = 0x0, this[_0x5eefe3(0x5b8)] = 0x12c, this['fangSprite'] = this['scene']['add'][_0x5eefe3(0x568)](_0xba7571, _0xa9fabc, 'vfx', 'fangNight2.png')['setOrigin'](0.5, 0x1)['setScale'](0x0)['setAlpha'](0x0), this['FragmentsEmitterManager'] = this['scene']['add'][_0x5eefe3(0x1791)]('vfx'), this[_0x5eefe3(0x1364)] = this[_0x5eefe3(0x816)][_0x5eefe3(0x14c0)]({
                            'frame': ['glass0000.png', 'glass0001.png', 'glass0002.png', 'glass0003.png'],
                            'angle': {
                                'min': 0xd2,
                                'max': 0x14a
                            },
                            'gravityY': -0x190,
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
                                'onEmit': (_0x4fadd7, _0xfab1f4, _0x1517a1) => this['onEmitcustomTintFrag'](_0x4fadd7, _0xfab1f4, _0x1517a1)
                            },
                            'on': !0x1
                        }), this[_0x5eefe3(0x695)] = new Phaser['Geom'][(_0x5eefe3(0xb64))](0x0, 0x0, 0x10, 0x10), this[_0x5eefe3(0x883)] = this['scene'][_0x5eefe3(0x18bd)][_0x5eefe3(0x1791)]('vfx'), this['FrontEmitterManager'][_0x5eefe3(0x14c0)]({
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
                                'onEmit': (_0x43f4ce, _0x59ee06, _0x596d70) => this['onEmitcustomTint'](_0x43f4ce, _0x59ee06, _0x596d70)
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x5eefe3(0x695)]
                            },
                            'on': !0x1
                        }), this[_0x5eefe3(0x1379)] = this['scene'][_0x5eefe3(0x18bd)]['particles']('vfx'), this[_0x5eefe3(0x1379)]['createEmitter']({
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
                                'onEmit': (_0x4fd1f2, _0x48ce9c, _0x73a743) => this['onEmitcustomTint'](_0x4fd1f2, _0x48ce9c, _0x73a743)
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this['explosionRect']
                            },
                            'on': !0x1
                        }), this['FragmentsEmitterManager'][_0x5eefe3(0xb4a)](this[_0x5eefe3(0x6d2)]['renderer']['height'] + 0x2), this[_0x5eefe3(0x883)][_0x5eefe3(0xb4a)](this['scene'][_0x5eefe3(0x12f9)]['height'] + 0x1), this[_0x5eefe3(0xf3e)][_0x5eefe3(0xb4a)](this[_0x5eefe3(0x6d2)]['renderer']['height']), this[_0x5eefe3(0x1379)]['setDepth'](-this[_0x5eefe3(0x6d2)][_0x5eefe3(0x12f9)]['height']);
                    } ['onEmitcustomTint'](_0x1dea11, _0x1f6564, _0x565c93) {
                        const _0x277344 = _0x46020c;
                        return Phaser[_0x277344(0x24f)][_0x277344(0x82a)]['pick']([0xff0000, 0xff00ff, 0xff]);
                    } ['onEmitcustomTintFrag'](_0x2adea5, _0xc0e580, _0x7b2109) {
                        const _0x2d3e45 = _0x46020c;
                        return Phaser[_0x2d3e45(0x24f)]['RND'][_0x2d3e45(0x198c)]([0x0, 0x0, 0x44]);
                    } ['OnRecycle']() {
                        const _0x15f50a = _0x46020c;
                        var _0xd80b44, _0x2f9ebd, _0x46f9c2;
                        super[_0x15f50a(0x5ce)](), this[_0x15f50a(0x183f)](!0x1), this[_0x15f50a(0xf8e)](0.5, 0x1), this['setScale'](0x0), this['body'][_0x15f50a(0x543)] = !0x0, this[_0x15f50a(0x177d)] = !0x1, this[_0x15f50a(0x816)]['emitParticleAt'](this['x'], this['y'] + 0x18), _0x155654[_0x15f50a(0xd2c)]['Core']['scene']['time']['removeEvent'](this[_0x15f50a(0x8b9)]), _0x155654['default']['Core'][_0x15f50a(0x6d2)]['time'][_0x15f50a(0x17fb)](this[_0x15f50a(0x12a3)]), this[_0x15f50a(0x8b9)] = _0x155654['default'][_0x15f50a(0x1043)][_0x15f50a(0x6d2)][_0x15f50a(0x915)][_0x15f50a(0x12b8)]({
                            'delay': this[_0x15f50a(0x4a1)]['hitBoxDelay'],
                            'loop': !0x0,
                            'callback': () => {
                                const _0x148698 = _0x15f50a;
                                this[_0x148698(0x990)] = [];
                            }
                        }), this[_0x15f50a(0x12a3)] = _0x155654[_0x15f50a(0xd2c)][_0x15f50a(0x1043)][_0x15f50a(0x6d2)][_0x15f50a(0x915)]['addEvent']({
                            'delay': this[_0x15f50a(0x4a1)]['PDuration'],
                            'loop': !0x0,
                            'callback': () => {
                                const _0x5a15c8 = _0x15f50a;
                                this[_0x5a15c8(0x14fb)]();
                            }
                        });
                        let _0x1a8d1c = this[_0x15f50a(0x4a1)][_0x15f50a(0x5f5)],
                            _0x59f88f = 0x10 * _0x1a8d1c;
                        this['reach'] = 0.5, _0x1a8d1c - 1.2 > 0x0 && (this[_0x15f50a(0x5f6)] += Math[_0x15f50a(0x1084)](0.5, _0x1a8d1c - 1.2)), this['reach'] *= _0x155654['GAMEPLAY_PIXEL_HEIGHT'], null === (_0xd80b44 = this[_0x15f50a(0xd35)]) || void 0x0 === _0xd80b44 || _0xd80b44[_0x15f50a(0x1a34)](), this['ScaleTween'] = _0x155654['default'][_0x15f50a(0x1043)][_0x15f50a(0x6d2)][_0x15f50a(0x12a1)][_0x15f50a(0x18bd)]({
                            'targets': this,
                            'scaleX': _0x59f88f,
                            'scaleY': this['reach'],
                            'duration': 0x1f4
                        }), this[_0x15f50a(0x883)][_0x15f50a(0xb4a)](this['scene'][_0x15f50a(0x12f9)][_0x15f50a(0x140e)] + 0x1), null === (_0x2f9ebd = this['fangTweenOut']) || void 0x0 === _0x2f9ebd || _0x2f9ebd['stop'](), null === (_0x46f9c2 = this['fangTween']) || void 0x0 === _0x46f9c2 || _0x46f9c2[_0x15f50a(0x1a34)](), this['fangTween'] = _0x155654['default']['Core'][_0x15f50a(0x6d2)][_0x15f50a(0x12a1)][_0x15f50a(0x18bd)]({
                            'targets': this['fangSprite'],
                            'alpha': 0.65,
                            'scaleX': this['weapon']['PArea'],
                            'scaleY': this['reach'] / 0x43,
                            'y': this['y'],
                            'duration': 0xc8,
                            'ease': 'Sine.easeInOut',
                            'onStart': () => {
                                const _0xd33746 = _0x15f50a;
                                this[_0xd33746(0xf3e)]['setOrigin'](0.5, 0x1), this[_0xd33746(0xf3e)]['x'] = this['x'], this[_0xd33746(0xf3e)]['y'] = this['y'] + 0x80, this[_0xd33746(0xf3e)]['alpha'] = 0x0, this[_0xd33746(0xf3e)][_0xd33746(0x8a2)](0x0);
                            },
                            'onComplete': () => {
                                const _0x3c4ad5 = _0x15f50a;
                                var _0x49d8a8;
                                null === (_0x49d8a8 = this[_0x3c4ad5(0x1700)]) || void 0x0 === _0x49d8a8 || _0x49d8a8[_0x3c4ad5(0x1a34)](), this['fangTweenOut'] = _0x155654[_0x3c4ad5(0xd2c)][_0x3c4ad5(0x1043)]['scene']['tweens'][_0x3c4ad5(0x18bd)]({
                                    'targets': this[_0x3c4ad5(0xf3e)],
                                    'scaleX': 0x0,
                                    'scaleY': 0x0,
                                    'delay': 0xc8,
                                    'duration': 0xc8,
                                    'ease': 'Sine.easeInOut',
                                    'onComplete': () => {
                                        const _0x184ced = _0x3c4ad5;
                                        this['FrontEmitterManager'][_0x184ced(0xb4a)](0x1 - this['scene'][_0x184ced(0x12f9)][_0x184ced(0x140e)]);
                                    }
                                });
                            }
                        });
                        let _0x4ba7a7 = 0.5 * _0x59f88f;
                        this[_0x15f50a(0x695)]['x'] = -0.5 * _0x4ba7a7, this['explosionRect'][_0x15f50a(0x173c)] = _0x4ba7a7, this['explosionRect']['height'] = this[_0x15f50a(0x5f6)];
                    } ['DeSpawn']() {
                        const _0x408484 = _0x46020c;
                        this['isCullable'] = !0x0, this[_0x408484(0xcf9)]['enable'] = !0x1, _0x155654['default'][_0x408484(0x1043)][_0x408484(0x6d2)][_0x408484(0x915)][_0x408484(0x17fb)](this['HitboxTimer']), _0x155654[_0x408484(0xd2c)][_0x408484(0x1043)][_0x408484(0x6d2)][_0x408484(0x915)]['removeEvent'](this[_0x408484(0x12a3)]), super['DeSpawn']();
                    } ['Update'](_0x2f26ca) {
                        const _0x10af55 = _0x46020c;
                        super[_0x10af55(0xa9f)](_0x2f26ca), this[_0x10af55(0x695)][_0x10af55(0x140e)] = this['scaleY'], this[_0x10af55(0x695)]['y'] = -this['scaleY'], this[_0x10af55(0x883)][_0x10af55(0x108b)](this['x'], this['y']), this['BackEmitterManager'][_0x10af55(0x108b)](this['x'], this['y']);
                    }
                }
                _0x340a1d['B_SummonNight2'] = _0x5da2bf, _0x340a1d['default'] = _0x5da2bf;
            };
