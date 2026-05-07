// Module 0xa2b
// Args: _0x37c503, _0x3ebddd, _0x6c24ee

export default (_0x37c503, _0x3ebddd, _0x6c24ee) => {
                'use strict';
                const _0x59e603 = a0_0x6932;
                var _0x551db9 = this && this['__importDefault'] || function(_0x4dfae5) {
                    return _0x4dfae5 && _0x4dfae5['__esModule'] ? _0x4dfae5 : {
                        'default': _0x4dfae5
                    };
                };
                Object['defineProperty'](_0x3ebddd, '__esModule', {
                    'value': !0x0
                });
                const _0x2c7d2e = _0x551db9(_0x6c24ee(0x5f07)),
                    _0x40bff5 = _0x551db9(_0x6c24ee(0x15196));
                class _0x17a50c extends _0x40bff5['default'] {
                    constructor(_0x44d7da, _0x395e09, _0x1de36e, _0x56c163) {
                        const _0x1c1dbd = _0x59e603;
                        super(_0x44d7da, _0x395e09, _0x1de36e, _0x56c163), this[_0x1c1dbd(0x351)] = null, this[_0x1c1dbd(0x279)] = !0x1, this['eyesSprite'] = this[_0x1c1dbd(0x6d2)][_0x1c1dbd(0x18bd)]['sprite'](this['x'], this['y'], 'enemiesM', 'eyes_1.png'), this[_0x1c1dbd(0x6d2)][_0x1c1dbd(0x12a1)]['add']({
                            'targets': this['eyesSprite'],
                            'alpha': 0.5,
                            'duration': 0x1f4,
                            'yoyo': !0x0,
                            'repeat': -0x1
                        });
                    } ['Update'](_0x36aff8) {
                        const _0x480a98 = _0x59e603;
                        this[_0x480a98(0x16c6)] = this['y'] - _0x2c7d2e['default'][_0x480a98(0x1043)][_0x480a98(0x10f6)]['y'], this[_0x480a98(0x115e)]['depth'] = this[_0x480a98(0x16c6)] + 0x3e8, this['eyesSprite'][_0x480a98(0x3a8)] = this[_0x480a98(0x3a8)], this[_0x480a98(0x115e)][_0x480a98(0x1721)] = this['scaleY'], this[_0x480a98(0x115e)]['x'] = this['x'], this[_0x480a98(0x115e)]['y'] = this['y'] + 0x4;
                    } ['OnRecycle']() {
                        const _0x146cf4 = _0x59e603;
                        super[_0x146cf4(0x5ce)](), this[_0x146cf4(0x177d)] = !0x1, this['scale'] = 0x0, this[_0x146cf4(0xd9b)] = this[_0x146cf4(0x6d2)][_0x146cf4(0x12a1)]['add']({
                            'targets': this,
                            'scale': 0x1,
                            'duration': 0x64
                        }), this['eyesSprite']['setOrigin'](this['originX'], this[_0x146cf4(0x564)]);
                    } ['DeSpawn']() {
                        const _0x4b4680 = _0x59e603;
                        super[_0x4b4680(0x14fb)](), this['eyesSprite'][_0x4b4680(0x183f)](!0x1);
                    } ['SetEyes'](_0x140301 = null) {
                        const _0x5156ab = _0x59e603;
                        this[_0x5156ab(0x115e)][_0x5156ab(0x381)](_0x140301), _0x140301 || this['eyesSprite'][_0x5156ab(0x183f)](!0x1);
                    }
                }
                _0x3ebddd['default'] = _0x17a50c;
            };
