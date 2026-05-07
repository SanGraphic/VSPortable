// Module 0xe682
// Args: _0x37452a, _0x2cea2b, _0x73119b

export default (_0x37452a, _0x2cea2b, _0x73119b) => {
                'use strict';
                const _0x4f435f = a0_0x6932;
                var _0x46e9ef = this && this['__importDefault'] || function(_0x546681) {
                    return _0x546681 && _0x546681['__esModule'] ? _0x546681 : {
                        'default': _0x546681
                    };
                };
                Object['defineProperty'](_0x2cea2b, '__esModule', {
                    'value': !0x0
                });
                const _0x397840 = _0x46e9ef(_0x73119b(0x1166a));
                class _0x5a9327 extends _0x397840['default'] {
                    constructor(_0x5a6418, _0x503ede, _0x5150d3, _0x52a420) {
                        const _0x1ba831 = a0_0x6932;
                        super(_0x5a6418, _0x503ede, _0x5150d3, _0x52a420), this['explosionCircle'] = new Phaser['Geom']['Circle'](0x0, 0x0, 0x10), this['PfxEmitter'] = this['scene']['add']['particles']('vfx'), this['emitter1'] = this['PfxEmitter']['createEmitter']({
                            'frame': ['Blood1.png', 'Blood2.png', 'Blood3.png', 'h.png', 'a.png', 's.png'],
                            'angle': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'quantity': 0x1,
                            'lifespan': 0x226,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'emitZone': {
                                'type': 'random',
                                'source': this['explosionCircle']
                            },
                            'on': !0x1
                        }), new Phaser[('Geom')][('Circle')](0x0, 0x0, 0x60), this['PfxEmitter2'] = this['scene']['add']['particles']('vfx'), this['emitter2'] = this['PfxEmitter2']['createEmitter']({
                            'frame': ['Blood1.png', 'Blood2.png', 'Blood3.png', 't.png', 'u.png', 'r.png'],
                            'angle': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'quantity': 0x1,
                            'lifespan': 0x226,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0.5,
                                'end': 0x0
                            },
                            'emitZone': {
                                'type': 'edge',
                                'source': this['explosionCircle'],
                                'quantity': 0x30,
                                'yoyo': !0x1
                            },
                            'on': !0x1
                        });
                    } ['OnRecycle']() {
                        const _0x3b9417 = a0_0x6932;
                        super['OnRecycle'](), this['totalTime'] = 0x0, this['explosionCircle'] = new Phaser[('Geom')]['Circle'](0x0, 0x0, 0x10 * this['scale']), this['emitter1']['setEmitZone']({
                            'type': 'random',
                            'source': this['explosionCircle']
                        }), this['emitter2']['setEmitZone']({
                            'type': 'edge',
                            'source': this['explosionCircle'],
                            'quantity': 0x30,
                            'yoyo': !0x1
                        }), this['emitter1']['setScale']({
                            'start': 0.5 * this['scale'],
                            'end': 0x0
                        }), this['emitter2']['setScale']({
                            'start': 0.5 * this['scale'],
                            'end': 0x0
                        });
                    } ['Die']() {
                        const _0x51a262 = a0_0x6932;
                        super['Die']();
                    } ['Update'](_0x100859) {
                        const _0xfea12b = a0_0x6932;
                        super['Update'](_0x100859), this['scale'] >= 0x1 && (this['totalTime'] += _0x100859, this['totalTime'] > 0x1e && (this['totalTime'] -= 0x1e, this['PfxEmitter']['emitParticleAt'](this['x'], this['y'] - 0xc * this['scale']), this['PfxEmitter2']['emitParticleAt'](this['x'], this['y'] - 0xc * this['scale'])), this['PfxEmitter']['depth'] = this['depth'] - 0x1, this['PfxEmitter2']['depth'] = this['depth'] + 0x1);
                    }
                }
                _0x2cea2b['default'] = _0x5a9327;
            };
