// Module 0xc903
// Args: _0x33e992, _0x47ec88, _0x2ad637

export default (_0x33e992, _0x47ec88, _0x2ad637) => {
                'use strict';
                const _0x5449e9 = a0_0x6932;
                var _0x105539 = this && this['__importDefault'] || function(_0x343656) {
                    return _0x343656 && _0x343656['__esModule'] ? _0x343656 : {
                        'default': _0x343656
                    };
                };
                Object['defineProperty'](_0x47ec88, '__esModule', {
                    'value': !0x0
                });
                const _0x34cdbd = _0x105539(_0x2ad637(0x5f07)),
                    _0xa344aa = _0x105539(_0x2ad637(0x166d5)),
                    _0x137110 = _0x105539(_0x2ad637(0xc42e)),
                    _0x401c16 = _0x105539(_0x2ad637(0x5103)),
                    _0x540c84 = _0x105539(_0x2ad637(0x2aa9));
                class _0x5b5c18 extends _0xa344aa['default'] {
                    constructor(_0x37082e, _0x280999, _0x187da9) {
                        const _0x239619 = a0_0x6932;
                        super(_0x37082e, _0x280999, _0x187da9, _0x137110['default']['MERCHANT']), _0x34cdbd['default']['Core']['scene']['add']['existing'](this), this['setScale'](_0x401c16['default']['PixelScale']), this['body']['setCircle'](0x10), this['res_Rosary'] = 0x1, this['particles'] = this['scene']['add']['particles']('vfx'), this['pfxEmitter'] = this['particles']['createEmitter']({
                            'frame': ['mask1.png', 'mask2.png', 'mask3.png', 'mask4.png', 'mask5.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'rotate': {
                                'min': -0x14,
                                'max': 0x14
                            },
                            'angle': {
                                'min': 0x104,
                                'max': 0x118
                            },
                            'speed': {
                                'min': 0x14,
                                'max': 0x32
                            },
                            'quantity': 0x1,
                            'scale': {
                                'start': 0x1,
                                'end': 0.75
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'frequency': 0x1f4,
                            'tint': 0xffffff,
                            'on': !0x0
                        });
                    } ['Update']() {
                        const _0x3c8b32 = a0_0x6932;
                        super['Update'](), this['setDepth'](0x9 + this['y'] - _0x34cdbd['default']['Core']['Player']['y']), this['particles']['setDepth'](this['depth'] - 0x1);
                        let _0x3c975f = this['safeXY'](this['x'], this['y']);
                        this['x'] = _0x3c975f['x'], this['y'] = _0x3c975f['y'], this['particles']['x'] = this['x'], this['particles']['y'] = this['y'];
                    } ['OnRecycle']() {
                        const _0x3e13d0 = _0x5449e9;
                        super[_0x3e13d0(0x5ce)](), this['goToPlayer'] = !0x0, this['isStationary'] = !0x0, this[_0x3e13d0(0x381)]('Pantalone.png');
                    } ['GetTaken']() {
                        const _0x376553 = _0x5449e9;
                        this[_0x376553(0x210)] || (this[_0x376553(0xb8c)]['stop'](), _0x34cdbd[_0x376553(0xd2c)][_0x376553(0x1043)][_0x376553(0x55a)] = _0x540c84['default']['DEFAULT'], _0x34cdbd[_0x376553(0xd2c)][_0x376553(0x1043)][_0x376553(0x558)] = !0x0, super[_0x376553(0x437)]());
                    }
                }
                _0x47ec88['default'] = _0x5b5c18;
            };
