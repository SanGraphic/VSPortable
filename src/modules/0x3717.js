// Module 0x3717
// Args: _0x324e7f, _0x3e41e2, _0x38f7ae

export default (_0x324e7f, _0x3e41e2, _0x38f7ae) => {
                'use strict';
                const _0x591ede = a0_0x6932;
                var _0x272667 = this && this['__importDefault'] || function(_0x464fc1) {
                    const _0x29a0cd = a0_0x6932;
                    return _0x464fc1 && _0x464fc1['__esModule'] ? _0x464fc1 : {
                        'default': _0x464fc1
                    };
                };
                Object['defineProperty'](_0x3e41e2, '__esModule', {
                    'value': !0x0
                }), _0x3e41e2['B_Cart'] = void 0x0;
                const _0x4386d9 = _0x272667(_0x38f7ae(0xa14d)),
                    _0x4333dd = _0x272667(_0x38f7ae(0x5f07)),
                    _0x2e3558 = _0x272667(_0x38f7ae(0x1fd7));
                class _0x7a1d4c extends _0x4386d9['default'] {
                    constructor(_0xa5f305, _0x333cd1, _0x9eb175, _0x1e5c07, _0x32bfc4) {
                        const _0x10ed3e = _0x591ede;
                        super(_0xa5f305, _0x333cd1, _0x9eb175, 'items', 'Cart1.png', _0x1e5c07, _0x32bfc4), this[_0x10ed3e(0x125b)] = this[_0x10ed3e(0x6d2)]['add'][_0x10ed3e(0x1791)]('vfx'), this[_0x10ed3e(0x125b)][_0x10ed3e(0x14c0)]({
                            'frame': ['PfxYellow.png'],
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'speed': {
                                'min': 0x32,
                                'max': 0x64
                            },
                            'quantity': 0x1,
                            'lifespan': 0xc8,
                            'scale': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x1
                        }), this['defaultSpeed'] = this[_0x10ed3e(0xb1f)];
                    } ['OnRecycle']() {
                        const _0x399773 = _0x591ede;
                        super['OnRecycle'](), this[_0x399773(0x8a2)](0x1), this['setOrigin'](0.5, 0x1), this['body'][_0x399773(0xdf6)](0x30), this['_speed'] = this[_0x399773(0x246)];
                        let _0x2f9efa = this[_0x399773(0x4a1)];
                        this['x'] = _0x2f9efa[_0x399773(0xd36)] ? _0x2f9efa['Location']['x'] : _0x4333dd[_0x399773(0xd2c)]['Core']['Player']['x'], this['y'] = _0x2f9efa[_0x399773(0xd36)] ? _0x2f9efa['Location']['y'] : _0x4333dd[_0x399773(0xd2c)]['Core'][_0x399773(0x10f6)]['y'], this['setDepth'](this['y'] - _0x4333dd[_0x399773(0xd2c)]['Core']['Player']['y'] + this[_0x399773(0x6d2)][_0x399773(0x12f9)][_0x399773(0x140e)]), this[_0x399773(0x125b)][_0x399773(0xb4a)](this[_0x399773(0x16c6)] - 0x1), this['scene']['physics']['velocityFromRotation'](Phaser['Math'][_0x399773(0x54d)](0x0), this[_0x399773(0xfbb)], this[_0x399773(0xcf9)]['velocity']), _0x4333dd['default']['Sound'][_0x399773(0x7f6)](_0x2e3558['default']['Hit'], {
                            'volume': 0.7,
                            'detune': 0x1f4 * (-0x1 - Math[_0x399773(0x9ad)]())
                        }, 0x96, 0x2), _0x4333dd[_0x399773(0xd2c)][_0x399773(0x1267)][_0x399773(0x7f6)](_0x2e3558[_0x399773(0xd2c)]['Brakes'], {
                            'volume': 0.3,
                            'detune': 0xc8 * Math[_0x399773(0x9ad)]()
                        }, 0x96, 0x2);
                    } ['Update'](_0x3f7fdb) {
                        const _0x1223be = _0x591ede;
                        this[_0x1223be(0xb1f)] += 0x1 * _0x3f7fdb, this[_0x1223be(0x125b)]['emitParticleAt'](this['x'], this['y'] - 0x2), this[_0x1223be(0x125b)][_0x1223be(0x108b)](this['x'], this['y'] - 0x16);
                    }
                }
                _0x3e41e2['B_Cart'] = _0x7a1d4c, _0x3e41e2['default'] = _0x7a1d4c;
            };
