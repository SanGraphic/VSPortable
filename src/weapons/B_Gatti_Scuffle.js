// Module 0x155f9
// Args: _0x547553, _0x87e84a, _0x320ce6

export default (_0x547553, _0x87e84a, _0x320ce6) => {
                'use strict';
                const _0x17ed83 = a0_0x6932;
                var _0x1e3541 = this && this['__importDefault'] || function(_0x58eab0) {
                    const _0x104638 = a0_0x6932;
                    return _0x58eab0 && _0x58eab0['__esModule'] ? _0x58eab0 : {
                        'default': _0x58eab0
                    };
                };
                Object['defineProperty'](_0x87e84a, '__esModule', {
                    'value': !0x0
                }), _0x87e84a['B_Gatti_Scuffle'] = void 0x0;
                const _0x480ce3 = _0x1e3541(_0x320ce6(0xa14d)),
                    _0x440808 = _0x1e3541(_0x320ce6(0x5f07));
                class _0x395488 extends _0x480ce3['default'] {
                    constructor(_0x21cba0, _0x3b59d7, _0x2c3498, _0x2ca407, _0xf6cd39) {
                        const _0x37c822 = _0x17ed83;
                        super(_0x21cba0, _0x3b59d7, _0x2c3498, 'vfx', 'Cat.png', _0x2ca407, _0xf6cd39), this['exploRadius'] = 0x40, this['explosionCircle'] = new Phaser['Geom']['Circle'](0x0, 0x0, this[_0x37c822(0x9db)]), this[_0x37c822(0x1234)] = this['weapon'], this[_0x37c822(0x1150)] = this['scene']['add']['particles']('vfx'), this['PfxEmitter1'] = this['PfxEmitterManager'][_0x37c822(0x14c0)]({
                            'frame': ['Smoke1.png', 'Smoke2.png'],
                            'speed': {
                                'min': 0x1,
                                'max': 0xa
                            },
                            'quantity': 0x2,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'lifespan': 0x1f4,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x2,
                                'end': 0x1
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x37c822(0x806)]
                            },
                            'on': !0x1
                        }), this[_0x37c822(0x15ef)] = this[_0x37c822(0x1150)][_0x37c822(0x14c0)]({
                            'frame': ['Smoke1.png', 'Smoke2.png', 'HitStarRed1.png', 'HitStarRed2.png', 'Hit2.png', 'Cat.png'],
                            'speed': {
                                'min': 0x1,
                                'max': 0xa
                            },
                            'quantity': 0x1,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'lifespan': 0xfa,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x0,
                                'end': 0x2
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this[_0x37c822(0x806)]
                            },
                            'on': !0x1
                        });
                    } ['OnRecycle']() {
                        const _0x2e4203 = _0x17ed83;
                        super[_0x2e4203(0x5ce)](), this[_0x2e4203(0xcf9)][_0x2e4203(0x543)] = !0x0, this['setScale'](0x1), this[_0x2e4203(0xcf9)]['setCircle'](0x20, -0x10, -0x10), this[_0x2e4203(0x183f)](!0x1), this['setScale'](this[_0x2e4203(0x4a1)]['PArea']), _0x440808['default'][_0x2e4203(0x1043)][_0x2e4203(0x6d2)]['time'][_0x2e4203(0x17fb)](this[_0x2e4203(0x8b9)]), _0x440808[_0x2e4203(0xd2c)][_0x2e4203(0x1043)][_0x2e4203(0x6d2)]['time']['removeEvent'](this['ExpireTimer']), this['explosionCircle'] = new Phaser['Geom'][(_0x2e4203(0xf29))](0x0, 0x0, this[_0x2e4203(0x9db)] * this['weapon']['PArea']), this[_0x2e4203(0xf12)][_0x2e4203(0x152)]({
                            'type': 'random',
                            'source': this[_0x2e4203(0x806)]
                        }), this[_0x2e4203(0xf12)][_0x2e4203(0x1070)](0x1 + Math['floor'](this[_0x2e4203(0x4a1)][_0x2e4203(0x5f5)])), this[_0x2e4203(0xf12)][_0x2e4203(0x8a2)]({
                            'start': 0x1 * this['weapon'][_0x2e4203(0x5f5)],
                            'end': 0x1
                        }), this['PfxEmitter2'][_0x2e4203(0x152)]({
                            'type': 'random',
                            'source': this[_0x2e4203(0x806)]
                        }), this[_0x2e4203(0x15ef)][_0x2e4203(0x1070)](0x1 + Math['floor'](this[_0x2e4203(0x4a1)]['PArea'])), this[_0x2e4203(0x15ef)][_0x2e4203(0x8a2)]({
                            'start': 0x0,
                            'end': 0x1 * this[_0x2e4203(0x4a1)]['PArea']
                        }), this[_0x2e4203(0x12a3)] = this['scene']['time']['addEvent']({
                            'delay': this[_0x2e4203(0x4a1)][_0x2e4203(0x16c3)],
                            'callback': () => {
                                const _0x349746 = _0x2e4203;
                                this[_0x349746(0x14fb)]();
                            }
                        }), this[_0x2e4203(0x8b9)] = this[_0x2e4203(0x6d2)][_0x2e4203(0x915)]['addEvent']({
                            'delay': 0x1e,
                            'callback': () => {
                                const _0x247afb = _0x2e4203;
                                this[_0x247afb(0x990)] = [], this['trueWeapon'][_0x247afb(0xbde)][_0x247afb(0xada)](this['x'], this['y'], this[_0x247afb(0x4a1)]);
                            },
                            'repeat': -0x1
                        });
                    } ['Update']() {
                        this['PfxEmitterManager']['emitParticleAt'](this['x'], this['y']);
                    } ['DeSpawn']() {
                        const _0x59d70e = _0x17ed83;
                        this['isCullable'] = !0x0, _0x440808['default'][_0x59d70e(0x1043)]['scene'][_0x59d70e(0x915)][_0x59d70e(0x17fb)](this[_0x59d70e(0x8b9)]), _0x440808['default'][_0x59d70e(0x1043)][_0x59d70e(0x6d2)][_0x59d70e(0x915)][_0x59d70e(0x17fb)](this['ExpireTimer']), super['DeSpawn']();
                    }
                }
                _0x87e84a['B_Gatti_Scuffle'] = _0x395488, _0x87e84a['default'] = _0x395488;
            };
