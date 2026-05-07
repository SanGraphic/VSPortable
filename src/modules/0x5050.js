// Module 0x5050
// Args: _0x3fbad2, _0x2d9cff, _0x4b3623

export default (_0x3fbad2, _0x2d9cff, _0x4b3623) => {
                'use strict';
                const _0x3a908e = a0_0x6932;
                var _0x3f8fc5 = this && this['__importDefault'] || function(_0x2db8ea) {
                    const _0x44c93e = a0_0x6932;
                    return _0x2db8ea && _0x2db8ea['__esModule'] ? _0x2db8ea : {
                        'default': _0x2db8ea
                    };
                };
                Object['defineProperty'](_0x2d9cff, '__esModule', {
                    'value': !0x0
                }), _0x2d9cff['W_Ophion'] = void 0x0;
                const _0x174425 = _0x3f8fc5(_0x4b3623(0xe49a)),
                    _0x4de2f5 = _0x3f8fc5(_0x4b3623(0x54e3)),
                    _0x587616 = _0x3f8fc5(_0x4b3623(0x5f07)),
                    _0xb11ccc = _0x3f8fc5(_0x4b3623(0x9b68));
                class _0x332052 extends _0x174425['default'] {
                    constructor(_0x41b6af) {
                        const _0x3fbae7 = _0x3a908e;
                        super(_0x41b6af), this[_0x3fbae7(0x241)] = 'bubbleSphere2.png', this[_0x3fbae7(0x67c)] = 'snakeW_i0', this['snakeDieSpriteName'] = 'snakeW_', this['trailSpriteName'] = 'BlackTrail.png', this[_0x3fbae7(0xeeb)] = _0x4de2f5[_0x3fbae7(0xd2c)]['SHADOWSERVANT_COUNTER'], this[_0x3fbae7(0x174e)] = !0x0, this[_0x3fbae7(0x125b)] = _0x587616['default'][_0x3fbae7(0x1043)]['scene'][_0x3fbae7(0x18bd)]['particles']('vfx'), this[_0x3fbae7(0x125b)][_0x3fbae7(0x14c0)]({
                            'frame': ['OPpfx.png', 'OPpfx2.png', 'PfxPurple2.png', 'PfxPurple3.png'],
                            'angle': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'speed': {
                                'min': 0x1,
                                'max': 0x190
                            },
                            'quantity': 0x4,
                            'lifespan': 0x190,
                            'alpha': {
                                'start': 0.65,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x1
                        }), this[_0x3fbae7(0xc05)] = this[_0x3fbae7(0x125b)]['createGravityWell']({
                            'x': 0x0,
                            'y': 0x0,
                            'power': 0xa,
                            'epsilon': 0x1f4,
                            'gravity': 0xc8
                        });
                    } ['CheckArcanas']() {
                        const _0x53243d = _0x3a908e;
                        if (_0x587616[_0x53243d(0xd2c)][_0x53243d(0x1043)][_0x53243d(0x1884)]['ActiveArcanas']['indexOf'](_0xb11ccc[_0x53243d(0xd2c)][_0x53243d(0x19a1)]) > -0x1) {
                            if (_0x587616['default'][_0x53243d(0x1043)][_0x53243d(0x164d)]['find'](_0x13b349 => _0x13b349[_0x53243d(0x14e)] === this[_0x53243d(0xeeb)])) return;
                            let _0x25d539 = _0x587616[_0x53243d(0xd2c)][_0x53243d(0x1043)]['AddHiddenWeapon'](this[_0x53243d(0xeeb)]);
                            for (this[_0x53243d(0x3e4)] = _0x25d539, _0x25d539[_0x53243d(0x174e)] = !0x0; _0x25d539['level'] < this['level'];) _0x25d539[_0x53243d(0x2ab)]();
                        }
                        super['CheckArcanas']();
                    } ['LevelUp']() {
                        const _0xb100aa = _0x3a908e;
                        let _0x538660 = super['LevelUp']();
                        return this['counterWeapon'] && this[_0xb100aa(0x3e4)][_0xb100aa(0x2ab)](), _0x538660;
                    } ['Fire']() {
                        super['Fire']();
                    } ['Update'](_0x2c56c8) {
                        const _0x4d0849 = _0x3a908e;
                        super[_0x4d0849(0xa9f)](_0x2c56c8), this[_0x4d0849(0xc05)]['x'] = _0x587616['default'][_0x4d0849(0x1043)]['Player']['x'], this[_0x4d0849(0xc05)]['y'] = _0x587616['default'][_0x4d0849(0x1043)][_0x4d0849(0x10f6)]['y'];
                    } ['onBulletOverlapsEnemy'](_0x3888f4, _0x18b1bf) {
                        const _0x3ff343 = _0x3a908e;
                        var _0x45715e = _0x18b1bf;
                        if (!_0x45715e[_0x3ff343(0xdae)] && !_0x3888f4[_0x3ff343(0x1738)](_0x45715e)) {
                            let _0xd97bd9 = this['PPower'];
                            _0x45715e[_0x3ff343(0x1935)] || this[_0x3ff343(0x68e)]() < this[_0x3ff343(0xd71)] * _0x587616['default'][_0x3ff343(0x1043)]['Player'][_0x3ff343(0x17b9)] && (_0xd97bd9 = _0x45715e['hp']), _0x45715e[_0x3ff343(0x1112)](_0xd97bd9, this[_0x3ff343(0x347)], this['knockback'], this[_0x3ff343(0x14e)]), this[_0x3ff343(0xb3d)] += this[_0x3ff343(0xaae)];
                        }
                    }
                }
                _0x2d9cff['W_Ophion'] = _0x332052, _0x2d9cff['default'] = _0x332052;
            };
