// Module 0x68d2
// Args: _0x2e068b, _0x16def2, _0x4df4a0

export default (_0x2e068b, _0x16def2, _0x4df4a0) => {
                'use strict';
                const _0x96fbc = a0_0x6932;
                var _0x290635 = this && this['__importDefault'] || function(_0x5664b3) {
                    return _0x5664b3 && _0x5664b3['__esModule'] ? _0x5664b3 : {
                        'default': _0x5664b3
                    };
                };
                Object['defineProperty'](_0x16def2, '__esModule', {
                    'value': !0x0
                }), _0x16def2['OrologionVFX'] = void 0x0;
                const _0x4f6cbd = _0x4df4a0(0x18304),
                    _0x2feac0 = _0x290635(_0x4df4a0(0x1fd7)),
                    _0xd0d09 = _0x290635(_0x4df4a0(0x5f07));
                class _0x236986 extends Phaser['GameObjects']['Sprite'] {
                    constructor(_0x31bd07) {
                        const _0x4a8407 = _0x96fbc;
                        super(_0x31bd07, 0.5 * _0x31bd07['renderer']['width'], 0.5 * _0x31bd07['renderer']['height'], 'vfx', 'Shockwave3.png'), this[_0x4a8407(0xd87)](0x0), _0x31bd07[_0x4a8407(0x18bd)]['existing'](this), this['sprite1'] = _0x31bd07['add'][_0x4a8407(0x105b)](0x0, 0x0, 'vfx', 'WhiteDot.png')[_0x4a8407(0xd87)](0x0)['setScale'](_0x31bd07[_0x4a8407(0x12f9)]['width'], _0x31bd07[_0x4a8407(0x12f9)]['height'])['setAlpha'](0x0)[_0x4a8407(0xf8e)](0x0)[_0x4a8407(0xb34)](0xff)[_0x4a8407(0x11c7)](_0x4f6cbd[_0x4a8407(0x10fc)][_0x4a8407(0x1811)]), this['tween1'] = this[_0x4a8407(0x6d2)][_0x4a8407(0x12a1)]['add']({
                            'targets': this[_0x4a8407(0x12b1)],
                            'alpha': 0.2,
                            'duration': 0x1f4,
                            'ease': 'Linear'
                        }), this[_0x4a8407(0x6d2)]['tweens'][_0x4a8407(0x18bd)]({
                            'targets': this['sprite1'],
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'delay': 0x251c,
                            'ease': 'Linear'
                        }), this[_0x4a8407(0x6d2)][_0x4a8407(0x12a1)]['add']({
                            'targets': this,
                            'angle': 0x167,
                            'duration': 0x3e8,
                            'yoyo': !0x1,
                            'repeat': -0x1,
                            'ease': 'Linear'
                        }), this[_0x4a8407(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x3e8,
                            'delay': 0x2328,
                            'ease': 'Linear'
                        }), this['scene'][_0x4a8407(0x12a1)][_0x4a8407(0x18bd)]({
                            'targets': this,
                            'scale': 1.2 * this['scene'][_0x4a8407(0x12f9)][_0x4a8407(0x140e)] / this[_0x4a8407(0x828)],
                            'duration': 0xc8,
                            'ease': 'Linear'
                        }), this[_0x4a8407(0x35a)] = !0x0, this[_0x4a8407(0xb4a)](0x3e8)['setBlendMode'](_0x4f6cbd[_0x4a8407(0x10fc)][_0x4a8407(0x1811)])['setTint'](0xff);
                    } ['_dispose']() {
                        const _0xa9e21f = _0x96fbc;
                        this[_0xa9e21f(0x6d2)][_0xa9e21f(0x12a1)][_0xa9e21f(0x393)](this[_0xa9e21f(0x1995)]), this[_0xa9e21f(0x16ca)](), this['sprite1']['destroy']();
                    } ['Play']() {
                        const _0x48bfdb = _0x96fbc;
                        this[_0x48bfdb(0x1995)]['restart'](), _0xd0d09['default'][_0x48bfdb(0x1267)][_0x48bfdb(0x7f6)](_0x2feac0[_0x48bfdb(0xd2c)][_0x48bfdb(0xf1f)], {
                            'volume': 1.8,
                            'rate': 0x2
                        });
                    }
                }
                _0x16def2['OrologionVFX'] = _0x236986, _0x16def2['default'] = _0x236986;
            };
