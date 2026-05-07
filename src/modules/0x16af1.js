// Module 0x16af1
// Args: _0x311e18, _0x545b61, _0x4f2b7a

export default (_0x311e18, _0x545b61, _0x4f2b7a) => {
                'use strict';
                const _0x1abb9a = a0_0x6932;
                var _0x56ec19 = this && this['__importDefault'] || function(_0x4f18cf) {
                    const _0xc2fbf5 = a0_0x6932;
                    return _0x4f18cf && _0x4f18cf['__esModule'] ? _0x4f18cf : {
                        'default': _0x4f18cf
                    };
                };
                Object['defineProperty'](_0x545b61, '__esModule', {
                    'value': !0x0
                });
                const _0x3723b2 = _0x56ec19(_0x4f2b7a(0x15dd)),
                    _0x45d233 = _0x56ec19(_0x4f2b7a(0x5103)),
                    _0x3e05a3 = _0x56ec19(_0x4f2b7a(0x869f));
                class _0x3834bd extends _0x3e05a3['default'] {
                    ['OnStop']() {
                        const _0x1d4b77 = _0x1abb9a;
                        this[_0x1d4b77(0x748)][_0x1d4b77(0x1631)](), this[_0x1d4b77(0x9b5)](0x0);
                    } ['MakeLevelOne']() {
                        const _0x50d488 = _0x1abb9a;
                        super['MakeLevelOne']();
                        const _0xfd1dc5 = _0x3723b2[_0x50d488(0xd2c)][this['characterType']][0x0];
                        let _0x5c1fd8 = _0xfd1dc5;
                        if (_0xfd1dc5[_0x50d488(0x5cf)]) {
                            let _0xddace7 = _0xfd1dc5[_0x50d488(0x5cf)][_0x50d488(0x1e6)](_0x29201d => _0x29201d['id'] === _0xfd1dc5[_0x50d488(0xffa)]);
                            _0xddace7 && (_0x5c1fd8 = _0xddace7);
                        }
                        if (_0x5c1fd8 && 'December' === _0x5c1fd8[_0x50d488(0x226)]) {
                            var _0x398368 = new Phaser['Geom']['Rectangle'](0x1, 0x1, this['scene'][_0x50d488(0x12f9)][_0x50d488(0x173c)] - 0x2, this[_0x50d488(0x6d2)][_0x50d488(0x12f9)]['height'] - 0x2);
                            this['colorParticles'] = this[_0x50d488(0x6d2)][_0x50d488(0x18bd)][_0x50d488(0x1791)]('vfx'), this[_0x50d488(0x14e1)][_0x50d488(0xb4a)](_0x45d233['default'][_0x50d488(0x55d)]), this['colorEmitter'] = this[_0x50d488(0x14e1)][_0x50d488(0x14c0)]({
                                'frame': {
                                    'frames': ['_blur.png', '_blur2.png', '_blur3.png'],
                                    'cycle': !0x0
                                },
                                'x': 0x0,
                                'y': 0x0,
                                'scale': {
                                    'start': 0x1,
                                    'end': 0x0
                                },
                                'lifespan': 0x1388,
                                'blendMode': 'ADD',
                                'emitZone': {
                                    'type': 'edge',
                                    'source': _0x398368,
                                    'quantity': 0x78,
                                    'yoyo': !0x1
                                },
                                'on': !0x0,
                                'quantity': 0x78,
                                'frequency': 0x9c4
                            }), this['colorEmitter'][_0x50d488(0xd87)](0x0), this['ParticlesManager'] = this['scene'][_0x50d488(0x18bd)][_0x50d488(0x1791)]('vfx'), this['pfxEmitter'] = this['ParticlesManager'][_0x50d488(0x14c0)]({
                                'frame': {
                                    'frames': ['snowb0000.png', 'snowb0001.png', 'snowb0006.png']
                                },
                                'y': -0x10,
                                'x': {
                                    'min': 0x0,
                                    'max': this[_0x50d488(0x6d2)][_0x50d488(0x12f9)]['width']
                                },
                                'rotate': {
                                    'min': 0x0,
                                    'max': 0x168
                                },
                                'lifespan': 0xfa0,
                                'speedY': {
                                    'min': 0x64,
                                    'max': 0xc8
                                },
                                'scale': {
                                    'min': 0.25,
                                    'max': 0x1,
                                    'start': 0x1,
                                    'end': 0x0
                                },
                                'quantity': 0x4,
                                'alpha': 0.5
                            }), this[_0x50d488(0xb8c)][_0x50d488(0xd87)](0x0);
                        }
                    }
                }
                _0x545b61['default'] = _0x3834bd;
            };
