// Module 0x1bf7
// Args: _0x2159a3, _0x52edd4, _0x35d7c

export default (_0x2159a3, _0x52edd4, _0x35d7c) => {
                'use strict';
                const _0x3ad2ad = a0_0x6932;
                var _0x3d50ef = this && this['__importDefault'] || function(_0x4e1f11) {
                    const _0x4b8b8c = _0x3ad2ad;
                    return _0x4e1f11 && _0x4e1f11[_0x4b8b8c(0x16f1)] ? _0x4e1f11 : {
                        'default': _0x4e1f11
                    };
                };
                Object['defineProperty'](_0x52edd4, '__esModule', {
                    'value': !0x0
                }), _0x52edd4['RosaryVFX'] = void 0x0;
                const _0x4b8662 = _0x35d7c(0x18304),
                    _0x1455a1 = _0x3d50ef(_0x35d7c(0x1fd7)),
                    _0x2a09d0 = _0x3d50ef(_0x35d7c(0x5f07));
                class _0x41efa5 extends Phaser['GameObjects']['Sprite'] {
                    constructor(_0x373cfb) {
                        const _0x1d7a6c = _0x3ad2ad;
                        super(_0x373cfb, 0.5 * _0x373cfb[_0x1d7a6c(0x12f9)][_0x1d7a6c(0x173c)], 0.5 * _0x373cfb['renderer'][_0x1d7a6c(0x140e)], 'vfx', 'Burst1.png'), this[_0x1d7a6c(0xd87)](0x0), _0x373cfb[_0x1d7a6c(0x18bd)][_0x1d7a6c(0x1a88)](this), this[_0x1d7a6c(0x12b1)] = _0x373cfb['add']['sprite'](0x0, 0x0, 'vfx', 'WhiteDot.png')[_0x1d7a6c(0xd87)](0x0)[_0x1d7a6c(0x8a2)](_0x373cfb[_0x1d7a6c(0x12f9)][_0x1d7a6c(0x173c)], _0x373cfb[_0x1d7a6c(0x12f9)][_0x1d7a6c(0x140e)])['setAlpha'](0x0)['setOrigin'](0x0)[_0x1d7a6c(0xb4a)](0x2710), this[_0x1d7a6c(0x1995)] = this['scene']['tweens']['add']({
                            'targets': this[_0x1d7a6c(0x12b1)],
                            'alpha': 0x1,
                            'duration': 0x64,
                            'yoyo': !0x0,
                            'ease': 'Linear'
                        });
                        const _0xba138 = this[_0x1d7a6c(0x183e)][_0x1d7a6c(0x1756)]('vfx', {
                            'start': 0x1,
                            'end': 0x6,
                            'zeroPad': 0x0,
                            'prefix': 'Burst',
                            'suffix': '.png'
                        });
                        this[_0x1d7a6c(0x183e)]['create']({
                            'key': 'enter',
                            'frames': _0xba138,
                            'frameRate': 0x1e,
                            'repeat': 0x0
                        }), this['visible'] = !0x0, this[_0x1d7a6c(0x8a2)](0x8), this[_0x1d7a6c(0xb4a)](0x2710), this[_0x1d7a6c(0xba4)] = _0x4b8662[_0x1d7a6c(0x10fc)]['ADD'];
                    } ['_dispose']() {
                        const _0x5d99bf = _0x3ad2ad;
                        this[_0x5d99bf(0x6d2)][_0x5d99bf(0x12a1)][_0x5d99bf(0x393)](this[_0x5d99bf(0x1995)]), this[_0x5d99bf(0x16ca)](), this[_0x5d99bf(0x12b1)][_0x5d99bf(0x16ca)]();
                    } ['Play'](_0x4971d8 = 1.8) {
                        const _0x55c144 = _0x3ad2ad;
                        this[_0x55c144(0x1995)]['restart'](), this['play']('enter'), _0x2a09d0['default']['Sound']['PlaySound'](_0x1455a1['default'][_0x55c144(0x1a0f)], {
                            'volume': _0x4971d8,
                            'rate': 0x2
                        }, 0x1f4, 0x2);
                    }
                }
                _0x52edd4['RosaryVFX'] = _0x41efa5, _0x52edd4['default'] = _0x41efa5;
            };
