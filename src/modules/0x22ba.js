// Module 0x22ba
// Args: _0x3f9c45, _0x1e800d, _0x1eae30

export default (_0x3f9c45, _0x1e800d, _0x1eae30) => {
                'use strict';
                const _0x40fb40 = a0_0x6932;
                var _0x215efb = this && this['__importDefault'] || function(_0x5c7c92) {
                    const _0x44290d = _0x40fb40;
                    return _0x5c7c92 && _0x5c7c92[_0x44290d(0x16f1)] ? _0x5c7c92 : {
                        'default': _0x5c7c92
                    };
                };
                Object['defineProperty'](_0x1e800d, '__esModule', {
                    'value': !0x0
                }), _0x1e800d['CollectionSecretParticles'] = void 0x0;
                const _0x427458 = _0x215efb(_0x1eae30(0x5103)),
                    _0x4aa20f = _0x1eae30(0x5f07);
                class _0x50e152 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x448f74, _0x4acbbc, _0x14a256) {
                        const _0x38f40e = _0x40fb40;
                        super(_0x448f74, _0x4acbbc, _0x14a256), this['setScale'](_0x427458['default']['PixelScale']);
                        const _0x24cf29 = new Phaser['GameObjects']['Graphics'](this[_0x38f40e(0x6d2)], {
                            'x': 0x0,
                            'y': 0x0
                        });
                        _0x24cf29[_0x38f40e(0x191d)](0x1, 0xffffff, 0.9), _0x24cf29['fillStyle'](0xffff, 0.2), _0x24cf29[_0x38f40e(0x11fe)](0x217, 0x78, 0x1c2, 0x22b), this['particles'] = this['scene'][_0x38f40e(0x18bd)][_0x38f40e(0x1791)]('vfx'), this['pfxEmitter'] = this['particles']['createEmitter']({
                            'frame': ['_runes_02.png', '_runes_03.png', '_runes_04.png', '_runes_05.png', '_runes_06.png'],
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0xbb8,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'min': 0xf0,
                                'max': 0x136
                            },
                            'speed': {
                                'min': 0x64,
                                'max': 0xe6
                            },
                            'quantity': 0x1,
                            'scale': {
                                'start': 0x1,
                                'end': 0x3
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0xb4,
                            'emitZone': {
                                'source': new Phaser['Geom'][(_0x38f40e(0xb64))](0x258, _0x4aa20f[_0x38f40e(0x1e0)]['height'], 0x15e, 0x32)
                            },
                            'on': !0x0
                        }), this['pfxEmitter'][_0x38f40e(0x1aa2)](), this['pfxEmitter'][_0x38f40e(0x1788)](_0x24cf29[_0x38f40e(0xadc)]()), this['gravityWell'] = this[_0x38f40e(0x1791)][_0x38f40e(0x1386)]({
                            'x': 0x0,
                            'y': 0x0,
                            'power': 0xa,
                            'epsilon': 0xc8,
                            'gravity': 0xc8
                        }), this[_0x38f40e(0x10b5)][_0x38f40e(0xd40)] = !0x1;
                    } ['activateGravityWell'](_0x5bee35, _0x26fa91) {
                        const _0x32f110 = _0x40fb40;
                        this[_0x32f110(0x10b5)]['x'] = _0x5bee35, this['gravityWell']['y'] = _0x26fa91, this['gravityWell'][_0x32f110(0xd40)] = !0x0, this['scene'][_0x32f110(0x915)]['addEvent']({
                            'delay': 0x64,
                            'callback': () => {
                                this['gravityWell']['active'] = !0x1;
                            }
                        });
                    } ['destroy']() {
                        const _0x42a849 = _0x40fb40;
                        this[_0x42a849(0xb8c)] && this[_0x42a849(0xb8c)]['stop']();
                    }
                }
                _0x1e800d['CollectionSecretParticles'] = _0x50e152, _0x1e800d['default'] = _0x50e152;
            };
