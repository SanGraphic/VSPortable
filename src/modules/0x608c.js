// Module 0x608c
// Args: _0x283cfb, _0x81e097, _0x220f9e

export default (_0x283cfb, _0x81e097, _0x220f9e) => {
                'use strict';
                const _0x3119de = a0_0x6932;
                var _0x287d50 = this && this['__importDefault'] || function(_0x26f8f6) {
                    const _0x246769 = a0_0x6932;
                    return _0x26f8f6 && _0x26f8f6['__esModule'] ? _0x26f8f6 : {
                        'default': _0x26f8f6
                    };
                };
                Object['defineProperty'](_0x81e097, '__esModule', {
                    'value': !0x0
                });
                const _0x1fbab7 = _0x287d50(_0x220f9e(0x5f07)),
                    _0x430596 = _0x287d50(_0x220f9e(0x166d5)),
                    _0x5361a7 = _0x287d50(_0x220f9e(0xc42e)),
                    _0x29a5b3 = _0x287d50(_0x220f9e(0x5103));
                class _0x1a34ea extends _0x430596['default'] {
                    constructor(_0x140034, _0x1f6ed7, _0x28651f) {
                        const _0x3e7a92 = a0_0x6932;
                        super(_0x140034, _0x1f6ed7, _0x28651f, _0x5361a7['default']['ROSARY']), _0x1fbab7['default']['Core']['scene']['add']['existing'](this), this['setScale'](_0x29a5b3['default']['PixelScale']);
                        const _0x22f3c0 = this['anims']['generateFrameNames']('items', {
                            'start': 0x1,
                            'end': 0x3,
                            'zeroPad': 0x0,
                            'prefix': 'Rosary',
                            'suffix': '.png'
                        });
                        this['anims']['create']({
                            'key': 'idle',
                            'frames': _0x22f3c0,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        });
                    } ['OnRecycle']() {
                        const _0xa630b7 = a0_0x6932;
                        super['OnRecycle'](), this['anims']['play']('idle');
                    } ['Update']() {
                        const _0x3e6fe7 = _0x3119de;
                        super[_0x3e6fe7(0xa9f)](), this[_0x3e6fe7(0xb4a)](0x9 + this['y'] - _0x1fbab7[_0x3e6fe7(0xd2c)][_0x3e6fe7(0x1043)]['Player']['y']);
                    } ['GetTaken']() {
                        const _0x2a0252 = _0x3119de;
                        this[_0x2a0252(0x210)] || (_0x1fbab7[_0x2a0252(0xd2c)][_0x2a0252(0x1043)]['RosaryDamage'](), _0x1fbab7[_0x2a0252(0xd2c)]['Core']['PlayerOptions'][_0x2a0252(0x9f7)][_0x2a0252(0x1564)](this[_0x2a0252(0xeb5)]), this[_0x2a0252(0x102c)](this[_0x2a0252(0xeb5)]), super[_0x2a0252(0x437)]());
                    }
                }
                _0x81e097['default'] = _0x1a34ea;
            };
