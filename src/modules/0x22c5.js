// Module 0x22c5
// Args: _0x3b7434, _0x52f34b, _0x157be5

export default (_0x3b7434, _0x52f34b, _0x157be5) => {
                'use strict';
                const _0xc1ead7 = a0_0x6932;
                var _0x315fae = this && this['__importDefault'] || function(_0x2bd612) {
                    const _0x2d9cba = _0xc1ead7;
                    return _0x2bd612 && _0x2bd612[_0x2d9cba(0x16f1)] ? _0x2bd612 : {
                        'default': _0x2bd612
                    };
                };
                Object['defineProperty'](_0x52f34b, '__esModule', {
                    'value': !0x0
                }), _0x52f34b['B_Misspell'] = void 0x0;
                const _0x25b0c8 = _0x315fae(_0x157be5(0xa14d)),
                    _0x9b6fd4 = _0x315fae(_0x157be5(0x5f07)),
                    _0x54d493 = _0x315fae(_0x157be5(0x1fd7)),
                    _0x35cc80 = _0x315fae(_0x157be5(0x5103)),
                    _0x593df7 = _0x157be5(0x18304);
                class _0x1078fb extends _0x25b0c8['default'] {
                    constructor(_0x29d066, _0x142ddc, _0x59f16a, _0x266052, _0x4d407c) {
                        const _0x3de312 = _0xc1ead7;
                        super(_0x29d066, _0x142ddc, _0x59f16a, 'vfx', 'WhiteDot.png', _0x266052, _0x4d407c), this[_0x3de312(0x161a)] = 0x10, this[_0x3de312(0xa7c)] = !0x0, this[_0x3de312(0x919)] = this['scene']['add']['circle'](0x0, 0x0, 0x1, Phaser[_0x3de312(0x24f)][_0x3de312(0x82a)][_0x3de312(0x198c)]([0xff0000, 0xff6600, 0xff4400]))['setOrigin'](0.5)[_0x3de312(0xdab)](0.2)[_0x3de312(0x183f)](!0x0)[_0x3de312(0x11c7)](_0x593df7[_0x3de312(0x10fc)][_0x3de312(0x1811)]), this['setVisible'](!0x1), this[_0x3de312(0x125b)] = this[_0x3de312(0x6d2)][_0x3de312(0x18bd)]['particles']('vfx'), this[_0x3de312(0x125b)]['createEmitter']({
                            'frame': ['PfxRed.png', 'PfxYellow.png'],
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'quantity': 0x1,
                            'lifespan': 0x64,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x1
                        }), this[_0x3de312(0x125b)][_0x3de312(0x14c0)]({
                            'frame': ['Flame2.png', 'PfxYellow.png'],
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'angle': {
                                'start': 0x0,
                                'end': 0xb4,
                                'steps': 0x10
                            },
                            'quantity': 0x1,
                            'lifespan': 0x64,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x0,
                                'end': 0x2
                            },
                            'on': !0x1
                        }), this[_0x3de312(0xa7c)] = !0x0;
                    } ['OnRecycle']() {
                        const _0x527c98 = _0xc1ead7;
                        var _0x17940c;
                        super['OnRecycle'](), this['body']['setCircle'](0x1), this['setScale'](_0x35cc80[_0x527c98(0xd2c)][_0x527c98(0x15db)] * this[_0x527c98(0x4a1)]['PArea']), this[_0x527c98(0x652)](0xff0000), this['y'] -= 0x18, this[_0x527c98(0xa7c)] ? this['ApplyPlayerFacingVelocity']() : this[_0x527c98(0x1794)](), this[_0x527c98(0xcf9)][_0x527c98(0xf4e)]['x'] += 0x64 * Math['sin'](this['indexInWeapon']), this['body']['velocity']['y'] += 0x64 * Math['cos'](this[_0x527c98(0x19c4)]), _0x9b6fd4['default'][_0x527c98(0x1267)][_0x527c98(0x7f6)](_0x54d493[_0x527c98(0xd2c)]['Fireloop'], {
                            'detune': -0x64 * this[_0x527c98(0x19c4)],
                            'volume': 0x1,
                            'rate': 0x2
                        }, 0xc8, 0x1), this[_0x527c98(0x919)][_0x527c98(0xdab)](0x1)['setScale'](0x0), this[_0x527c98(0xdab)](0x1)['setScale'](0x0), null === (_0x17940c = this['ScaleTween']) || void 0x0 === _0x17940c || _0x17940c['stop'](), this[_0x527c98(0xd35)] = this[_0x527c98(0x6d2)][_0x527c98(0x12a1)]['add']({
                            'targets': [this['GroundFx'], this],
                            'alpha': 0x0,
                            'scale': this[_0x527c98(0x161a)] * this['weapon'][_0x527c98(0x5f5)],
                            'duration': 0x190,
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x4ed3b3 = _0x527c98;
                                this[_0x4ed3b3(0x14fb)]();
                            }
                        });
                    } ['Update']() {
                        const _0x267731 = _0xc1ead7;
                        this[_0x267731(0x919)]['copyPosition'](this), this[_0x267731(0x125b)][_0x267731(0x108b)](this['x'], this['y']);
                    }
                }
                _0x52f34b['B_Misspell'] = _0x1078fb, _0x52f34b['default'] = _0x1078fb;
            };
