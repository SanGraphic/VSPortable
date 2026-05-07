// Module 0x17e91
// Args: _0x336656, _0x5d972b, _0x5c1bb7

export default (_0x336656, _0x5d972b, _0x5c1bb7) => {
                'use strict';
                const _0x2f673b = a0_0x6932;
                var _0x3e9062 = this && this['__importDefault'] || function(_0x45981c) {
                    return _0x45981c && _0x45981c['__esModule'] ? _0x45981c : {
                        'default': _0x45981c
                    };
                };
                Object['defineProperty'](_0x5d972b, '__esModule', {
                    'value': !0x0
                });
                const _0x3e60ff = _0x3e9062(_0x5c1bb7(0x5f07)),
                    _0x2791de = _0x3e9062(_0x5c1bb7(0x166d5)),
                    _0x3c836e = _0x3e9062(_0x5c1bb7(0xc42e)),
                    _0x2cd493 = _0x3e9062(_0x5c1bb7(0x5103));
                class _0x2f9a75 extends _0x2791de['default'] {
                    constructor(_0x5f4ea9, _0x296568, _0x39f8c5) {
                        const _0x198004 = _0x2f673b;
                        super(_0x5f4ea9, _0x296568, _0x39f8c5, _0x3c836e[_0x198004(0xd2c)][_0x198004(0xd68)]), _0x3e60ff['default'][_0x198004(0x1043)]['scene'][_0x198004(0x18bd)][_0x198004(0x1a88)](this), this['setScale'](_0x2cd493['default']['PixelScale']);
                        const _0x9a29a5 = this['anims'][_0x198004(0x1756)]('items', {
                            'start': 0x1,
                            'end': 0x3,
                            'zeroPad': 0x0,
                            'prefix': 'Gilded',
                            'suffix': '.png'
                        });
                        this['anims'][_0x198004(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x9a29a5,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        });
                    } ['OnRecycle']() {
                        const _0x143e9c = _0x2f673b;
                        super['OnRecycle'](), this[_0x143e9c(0x183e)]['play']('idle');
                    } ['Update']() {
                        const _0xef4e6f = _0x2f673b;
                        super['Update'](), this['setDepth'](0x9 + this['y'] - _0x3e60ff['default'][_0xef4e6f(0x1043)]['Player']['y']);
                    } ['GetTaken']() {
                        const _0x19db68 = _0x2f673b;
                        this['disableGet'] || (_0x3e60ff['default'][_0x19db68(0x1043)][_0x19db68(0x4fa)](0x2710), _0x3e60ff['default']['Core']['TurnOnVacuumForGold'](), _0x3e60ff['default'][_0x19db68(0x1043)][_0x19db68(0x14d8)]['RunPickups']['push'](this[_0x19db68(0xeb5)]), this['SetSeenItem'](this['itemType']), super['GetTaken']());
                    }
                }
                _0x5d972b['default'] = _0x2f9a75;
            };
