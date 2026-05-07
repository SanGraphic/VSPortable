// Module 0x15e86
// Args: _0xaa4c85, _0x394697, _0x4ecc27

export default (_0xaa4c85, _0x394697, _0x4ecc27) => {
                'use strict';
                const _0x3d7aa8 = a0_0x6932;
                var _0x8d7390 = this && this['__importDefault'] || function(_0x40bad1) {
                    return _0x40bad1 && _0x40bad1['__esModule'] ? _0x40bad1 : {
                        'default': _0x40bad1
                    };
                };
                Object['defineProperty'](_0x394697, '__esModule', {
                    'value': !0x0
                }), _0x394697['B_Guns'] = void 0x0;
                const _0xf85502 = _0x8d7390(_0x4ecc27(0xa14d)),
                    _0x253554 = _0x8d7390(_0x4ecc27(0x5f07)),
                    _0x148cd9 = _0x8d7390(_0x4ecc27(0x1fd7)),
                    _0x165584 = _0x8d7390(_0x4ecc27(0x9b68));
                class _0xa6e190 extends _0xf85502['default'] {
                    constructor(_0xde107, _0x3669a4, _0x295720, _0xa64a98, _0xe4425a, _0x370129 = 'BulletRed.png') {
                        const _0x2496e2 = _0x3d7aa8;
                        super(_0xde107, _0x3669a4, _0x295720, 'vfx', _0x370129, _0xa64a98, _0xe4425a), this['posHistory'] = new Array(), this[_0x2496e2(0x624)] = 0x1, this[_0x2496e2(0x1192)] = 0x0, this[_0x2496e2(0x13f9)] = [0x1e, -0x1e, 0xd2, -0xd2], this[_0x2496e2(0x1234)] = this['weapon'];
                    } ['OnRecycle']() {
                        const _0x2bdf26 = _0x3d7aa8;
                        super[_0x2bdf26(0x5ce)](), this[_0x2bdf26(0x8a2)](0x1), this[_0x2bdf26(0xcf9)]['setCircle'](0x8), this['setScale'](0.5 * this['weapon'][_0x2bdf26(0x5f5)]), this['y'] -= 0xc, this[_0x2bdf26(0x6d2)][_0x2bdf26(0x1585)][_0x2bdf26(0x18fc)](Phaser['Math'][_0x2bdf26(0x54d)](this['firingAngles'][this[_0x2bdf26(0x19c4)] % this[_0x2bdf26(0x13f9)]['length']]), this[_0x2bdf26(0xfbb)], this[_0x2bdf26(0xcf9)][_0x2bdf26(0xf4e)]), _0x253554[_0x2bdf26(0xd2c)]['Sound']['PlaySound'](_0x148cd9['default'][_0x2bdf26(0x1748)], {
                            'detune': 0x64 * this[_0x2bdf26(0x19c4)],
                            'volume': 0.2
                        }, 0xc8, 0xc);
                    } ['OnHasHitAnObject'](_0x3eb72f) {
                        const _0x49a17b = _0x3d7aa8;
                        if (!_0x3eb72f['isDead']) {
                            if (_0x253554[_0x49a17b(0xd2c)]['Core']['Arcanas']['ActiveArcanas'][_0x49a17b(0x1303)](_0x165584[_0x49a17b(0xd2c)][_0x49a17b(0x299)]) > -0x1 && this['weapon']['SpawnExplosionAt'](this['x'], this['y'], 0x1, 0x0), this[_0x49a17b(0x1b4)] > 0x0) return this['bounces']--, this[_0x49a17b(0xcf9)]['velocity']['x'] *= -0x1, this['body']['velocity']['y'] *= -0x1, void(this[_0x49a17b(0x990)] = []);
                            this['penetrating']--, this['penetrating'] <= 0x0 && this[_0x49a17b(0x14fb)]();
                        }
                    }
                }
                _0x394697['B_Guns'] = _0xa6e190, _0x394697['default'] = _0xa6e190;
            };
