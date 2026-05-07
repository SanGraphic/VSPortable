// Module 0x1026f
// Args: _0x3a5b7a, _0x4e627b, _0x4453a8

export default (_0x3a5b7a, _0x4e627b, _0x4453a8) => {
                'use strict';
                const _0x4c0b0d = a0_0x6932;
                var _0x3ee970 = this && this['__importDefault'] || function(_0x4cfd1b) {
                    const _0x5eb7d5 = a0_0x6932;
                    return _0x4cfd1b && _0x4cfd1b['__esModule'] ? _0x4cfd1b : {
                        'default': _0x4cfd1b
                    };
                };
                Object['defineProperty'](_0x4e627b, '__esModule', {
                    'value': !0x0
                });
                const _0x343cc7 = _0x3ee970(_0x4453a8(0x1166a));
                class _0x1a487b extends _0x343cc7['default'] {
                    constructor(_0x104bba, _0x4c11d7, _0x408961, _0x1ad45e) {
                        super(_0x104bba, _0x4c11d7, _0x408961, _0x1ad45e);
                    } ['OnRecycle']() {
                        const _0x547529 = _0x4c0b0d;
                        super['OnRecycle'](), this[_0x547529(0xf8e)](0.5), this[_0x547529(0x1454)] = Phaser['Math']['RND'][_0x547529(0x198c)]([0x44bbff, 0x88ffff, 0x44ffbb]), this['tint'] = this[_0x547529(0x1454)];
                    } ['Update'](_0x865a17) {
                        super['Update'](_0x865a17), this['SnakeUpdate']();
                    } ['ConditionalUpdate'](_0x3624f3) {
                        const _0x505820 = _0x4c0b0d;
                        super[_0x505820(0x1904)](_0x3624f3), this[_0x505820(0x129f)]();
                    } ['SnakeUpdate']() {
                        const _0x28cb39 = _0x4c0b0d;
                        var _0x1aa16a = Phaser[_0x28cb39(0x24f)]['Vector2']['RIGHT'];
                        this['angle'] = -0x5a + Phaser[_0x28cb39(0x24f)]['RadToDeg'](Math[_0x28cb39(0x326)](this[_0x28cb39(0xcf9)][_0x28cb39(0xf4e)]['y'] - _0x1aa16a['y'], this['body'][_0x28cb39(0xf4e)]['x'] - _0x1aa16a['x']));
                    }
                }
                _0x4e627b['default'] = _0x1a487b;
            };
