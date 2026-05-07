// Module 0x11e05
// Args: _0x224b5a, _0x18a732, _0x2abb25

export default (_0x224b5a, _0x18a732, _0x2abb25) => {
                'use strict';
                const _0x38ddff = a0_0x6932;
                var _0x7f62d3 = this && this['__importDefault'] || function(_0x3e3d69) {
                    return _0x3e3d69 && _0x3e3d69['__esModule'] ? _0x3e3d69 : {
                        'default': _0x3e3d69
                    };
                };
                Object['defineProperty'](_0x18a732, '__esModule', {
                    'value': !0x0
                });
                const _0x158457 = _0x7f62d3(_0x2abb25(0x5f07)),
                    _0x2bec81 = _0x7f62d3(_0x2abb25(0x166d5)),
                    _0x26e467 = _0x7f62d3(_0x2abb25(0xc42e)),
                    _0x3555f0 = _0x7f62d3(_0x2abb25(0x5103)),
                    _0xa34107 = _0x7f62d3(_0x2abb25(0x2aa9));
                class _0x3a545a extends _0x2bec81['default'] {
                    constructor(_0x538ad5, _0x5102e5, _0x428dd0) {
                        const _0x2bfd1e = _0x38ddff;
                        super(_0x538ad5, _0x5102e5, _0x428dd0, _0x26e467[_0x2bfd1e(0xd2c)][_0x2bfd1e(0x15b9)]), _0x158457[_0x2bfd1e(0xd2c)][_0x2bfd1e(0x1043)][_0x2bfd1e(0x6d2)]['add']['existing'](this), this[_0x2bfd1e(0x8a2)](_0x3555f0[_0x2bfd1e(0xd2c)][_0x2bfd1e(0x15db)]), this['body']['setCircle'](0x10), this[_0x2bfd1e(0x1935)] = 0x1, this['particles'] = this['scene']['add'][_0x2bfd1e(0x1791)]('items'), this['pfxEmitter'] = this[_0x2bfd1e(0x1791)][_0x2bfd1e(0x14c0)]({
                            'frame': ['goldenegg.png', 'goldenegg.png'],
                            'x': this['x'],
                            'y': this['y'],
                            'lifespan': 0x3e8,
                            'rotate': {
                                'min': -0x3c,
                                'max': 0x3c
                            },
                            'angle': {
                                'min': 0xc8,
                                'max': 0x154
                            },
                            'speed': {
                                'min': 0x32,
                                'max': 0x46
                            },
                            'quantity': 0x4,
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
                        const _0x5a2bd1 = _0x38ddff;
                        super[_0x5a2bd1(0xa9f)](), this['setDepth'](0x9 + this['y'] - _0x158457[_0x5a2bd1(0xd2c)][_0x5a2bd1(0x1043)][_0x5a2bd1(0x10f6)]['y']), this[_0x5a2bd1(0x1791)]['setDepth'](this['depth'] - 0x1);
                        let _0x50970a = this['safeXY'](this['x'], this['y']);
                        this['x'] = _0x50970a['x'], this['y'] = _0x50970a['y'], this['particles']['x'] = this['x'], this[_0x5a2bd1(0x1791)]['y'] = this['y'];
                    } ['OnRecycle']() {
                        const _0x124592 = _0x38ddff;
                        super['OnRecycle'](), this[_0x124592(0x12a8)] = !0x0, this[_0x124592(0xc6e)] = !0x0, this['setFrame']('Eggman.png');
                    } ['GetTaken']() {
                        const _0x138382 = _0x38ddff;
                        this[_0x138382(0x210)] || (this[_0x138382(0xb8c)]['stop'](), _0x158457[_0x138382(0xd2c)][_0x138382(0x1043)][_0x138382(0x55a)] = _0xa34107['default']['EGGSONLY'], _0x158457[_0x138382(0xd2c)]['Core']['StartShopScene'] = !0x0, super[_0x138382(0x437)]());
                    }
                }
                _0x18a732['default'] = _0x3a545a;
            };
