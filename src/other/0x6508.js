// Module 0x6508
// Args: _0x3a7801, _0x4cffea, _0x80ea43

export default (_0x3a7801, _0x4cffea, _0x80ea43) => {
                'use strict';
                const _0x4782be = a0_0x6932;
                var _0x4bc85e = this && this['__importDefault'] || function(_0x38322b) {
                    const _0x48a6a4 = a0_0x6932;
                    return _0x38322b && _0x38322b['__esModule'] ? _0x38322b : {
                        'default': _0x38322b
                    };
                };
                Object['defineProperty'](_0x4cffea, '__esModule', {
                    'value': !0x0
                });
                const _0x4627e7 = _0x4bc85e(_0x80ea43(0x5f07));
                _0x4cffea['default'] = class {
                    constructor(_0x5cad5c = 0x1, _0x5a939a = 0x1, _0x23c0e0 = 0x1) {
                        const _0x1da466 = _0x4782be;
                        this['min'] = 0x1, this[_0x1da466(0x1981)] = 0x1, this['duration'] = 0x1, this[_0x1da466(0xdf0)] = 0x0, this[_0x1da466(0x1084)] = _0x5cad5c, this['max'] = _0x5a939a, this['duration'] = _0x23c0e0;
                    }
                    get['value']() {
                        const _0x5c0fd2 = _0x4782be;
                        return this['sine'] > 0x0 ? Phaser['Math']['Linear'](0x1, this[_0x5c0fd2(0x1981)], this[_0x5c0fd2(0xdf0)]) : Phaser[_0x5c0fd2(0x24f)][_0x5c0fd2(0xd9c)](0x1, this[_0x5c0fd2(0x1084)], -this[_0x5c0fd2(0xdf0)]);
                    } ['Start']() {
                        const _0x1c8bb4 = _0x4782be;
                        this[_0x1c8bb4(0xdf0)] = -0x1, _0x4627e7[_0x1c8bb4(0xd2c)]['Core'][_0x1c8bb4(0x6d2)]['tweens'][_0x1c8bb4(0x18bd)]({
                            'targets': this,
                            'sine': 0x1,
                            'duration': this[_0x1c8bb4(0x5ef)],
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut',
                            'repeat': -0x1
                        });
                    }
                };
            };
