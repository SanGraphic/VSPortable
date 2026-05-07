// Module 0x11829
// Args: _0x5d712f, _0x5ec166, _0x1d2b66

export default (_0x5d712f, _0x5ec166, _0x1d2b66) => {
                'use strict';
                const _0x1db5af = a0_0x6932;
                var _0xbf01d = this && this['__importDefault'] || function(_0x45f96c) {
                    return _0x45f96c && _0x45f96c['__esModule'] ? _0x45f96c : {
                        'default': _0x45f96c
                    };
                };
                Object['defineProperty'](_0x5ec166, '__esModule', {
                    'value': !0x0
                });
                const _0xac8690 = _0xbf01d(_0x1d2b66(0x1fd7)),
                    _0x5c14f6 = _0xbf01d(_0x1d2b66(0x5f07)),
                    _0x23fa71 = _0xbf01d(_0x1d2b66(0x1166a));
                class _0x41c5af extends _0x23fa71['default'] {
                    constructor() {
                        const _0x4c0a90 = _0x1db5af;
                        super(...arguments), this['availableFrames'] = ['diamondBlue_i01.png', 'diamondGreen_i01.png', 'diamondYellow_i01.png', 'diamondPink_i01.png', 'diamondNeutral_i01.png'], this['selfDuration'] = 0x7530, this[_0x4c0a90(0x121c)] = 0x0, this[_0x4c0a90(0xf5d)] = 0x1f4, this[_0x4c0a90(0xc66)] = 0x0, this['gridY'] = 0x0;
                    } ['Update'](_0x52f08e = 0x0) {
                        const _0x57d51b = _0x1db5af;
                        if (this[_0x57d51b(0xd96)] = 0x0, !this['isDead'] && (this[_0x57d51b(0x121c)] += _0x52f08e, this['selfTime'] >= this[_0x57d51b(0xb8e)])) {
                            if (this['isDead']) return;
                            this[_0x57d51b(0xdae)] = !0x0, this[_0x57d51b(0x177d)] = !0x0, this[_0x57d51b(0xe00)]();
                        }
                    } ['OnRecycle']() {
                        const _0xfa605 = _0x1db5af;
                        var _0xbf5f01;
                        this['selfTime'] = 0x0, super[_0xfa605(0x5ce)](), this[_0xfa605(0x1832)] = 0x0, this[_0xfa605(0x279)] = !0x1, this[_0xfa605(0x177d)] = !0x1, this[_0xfa605(0x183e)]['stop'](), this[_0xfa605(0x381)]('diamondBlue_i01.png'), this['selfDuration'] = 0x7530, this['scale'] = 0x0, null === (_0xbf5f01 = this['OnEnterTween']) || void 0x0 === _0xbf5f01 || _0xbf5f01[_0xfa605(0x1a34)](), this[_0xfa605(0xd9b)] = this[_0xfa605(0x6d2)]['tweens'][_0xfa605(0x18bd)]({
                            'targets': this,
                            'scale': this[_0xfa605(0x17ef)],
                            'speed': 0x0,
                            'duration': 0x12c
                        }), this[_0xfa605(0xf8e)](0.5), this[_0xfa605(0xcf9)]['immovable'] = !0x0;
                    } ['GetDamaged'](_0x436ed4, _0x21d58e, _0x40ff38, _0x4f074b) {
                        const _0x5e5c32 = _0x1db5af;
                        this[_0x5e5c32(0xdae)] || this['isInvul'] || (this[_0x5e5c32(0x279)] = !0x0, this[_0x5e5c32(0x1832)]++, this[_0x5e5c32(0x1304)](), this['scene'][_0x5e5c32(0x915)][_0x5e5c32(0x12b8)]({
                            'delay': this[_0x5e5c32(0xf5d)],
                            'callback': () => {
                                this['isInvul'] = !0x1;
                            }
                        }), this[_0x5e5c32(0x404)](_0x21d58e, !0x1));
                    } ['ChangeFrame']() {
                        const _0xda0b3c = _0x1db5af;
                        this[_0xda0b3c(0x183e)][_0xda0b3c(0x1a34)](), this[_0xda0b3c(0x1832)] >= this[_0xda0b3c(0x208)][_0xda0b3c(0xed9)] - 0x1 ? (_0x5c14f6[_0xda0b3c(0xd2c)][_0xda0b3c(0x1267)]['PlaySound'](_0xac8690['default'][_0xda0b3c(0x15f)], {
                            'volume': 0.6,
                            'detune': -0x258 * Math[_0xda0b3c(0x9ad)]()
                        }, 0x64, 0x4), this[_0xda0b3c(0x14f3)]()) : (_0x5c14f6[_0xda0b3c(0xd2c)]['Sound'][_0xda0b3c(0x7f6)](_0xac8690['default'][_0xda0b3c(0xbc6)], {
                            'volume': 0.2,
                            'detune': 0x64 * this['hitsTaken']
                        }, 0x64, 0x4), this[_0xda0b3c(0x381)](this[_0xda0b3c(0x208)][this[_0xda0b3c(0x1832)]]));
                    } ['Die']() {
                        const _0x2e53a3 = _0x1db5af;
                        Math['random']() >= 0.2 * _0x5c14f6['default']['Core']['Player'][_0x2e53a3(0x7d2)] && _0x5c14f6[_0x2e53a3(0xd2c)][_0x2e53a3(0x1043)]['MakePickup'](this['x'], this['y'], _0x5c14f6[_0x2e53a3(0xd2c)][_0x2e53a3(0x1043)][_0x2e53a3(0x1927)]['GetRandomWeightedItem']()), super[_0x2e53a3(0x14f3)]();
                    } ['Disappear']() {
                        super['Disappear']();
                    }
                }
                _0x5ec166['default'] = _0x41c5af;
            };
