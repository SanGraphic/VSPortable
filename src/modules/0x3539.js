// Module 0x3539
// Args: _0x22f1fb, _0x48bcb2, _0x53049f

export default (_0x22f1fb, _0x48bcb2, _0x53049f) => {
                'use strict';
                const _0x529b79 = a0_0x6932;
                var _0x3d1730 = this && this['__importDefault'] || function(_0x41ddf2) {
                    const _0x2d5d95 = _0x529b79;
                    return _0x41ddf2 && _0x41ddf2[_0x2d5d95(0x16f1)] ? _0x41ddf2 : {
                        'default': _0x41ddf2
                    };
                };
                Object['defineProperty'](_0x48bcb2, '__esModule', {
                    'value': !0x0
                }), _0x48bcb2['W_Trapano2'] = void 0x0;
                const _0x4e5d66 = _0x53049f(0x18304),
                    _0x470960 = _0x3d1730(_0x53049f(0x9b68)),
                    _0x26cd06 = _0x3d1730(_0x53049f(0x54e3)),
                    _0x4fc1b3 = _0x3d1730(_0x53049f(0x5f07)),
                    _0x1c5326 = _0x3d1730(_0x53049f(0xe49a));
                class _0x18bc79 extends _0x1c5326['default'] {
                    constructor(_0x170e91) {
                        const _0x10b53e = _0x529b79;
                        super(_0x170e91), this['totalTime'] = 0x0, this[_0x10b53e(0x492)] = 0x3e8 / 0x3c, this[_0x10b53e(0x1761)] = _0x4fc1b3[_0x10b53e(0xd2c)][_0x10b53e(0x1043)][_0x10b53e(0x6d2)][_0x10b53e(0x18bd)][_0x10b53e(0x1791)]('vfx'), this[_0x10b53e(0xb8c)] = this['particlesManager']['createEmitter']({
                            'frame': ['PfxPink.png', 'PfxPurple.png'],
                            'x': 0x0,
                            'y': 0x0,
                            'lifespan': 0x1f4,
                            'rotate': {
                                'min': 0x0,
                                'max': 0x168
                            },
                            'speed': {
                                'min': 0xc8,
                                'max': 0xdc
                            },
                            'quantity': 0x64,
                            'scale': {
                                'start': 0x4,
                                'end': 0x0
                            },
                            'frequency': 0x4,
                            'blendMode': _0x4e5d66['BlendModes']['ADD'],
                            'on': !0x1
                        }), this[_0x10b53e(0xdfc)] = _0x26cd06[_0x10b53e(0xd2c)]['FIREEXPLOSION'];
                    } ['Init']() {
                        const _0x161eb0 = _0x529b79;
                        super['Init'](), this['pool'][_0x161eb0(0xb45)] = !0x0;
                    } ['Update'](_0x5b92b1) {
                        const _0x1127bb = _0x529b79;
                        super['Update'](_0x5b92b1), this['totalTime'] += _0x5b92b1, this[_0x1127bb(0xb78)] += _0x4fc1b3[_0x1127bb(0xd2c)][_0x1127bb(0x1043)][_0x1127bb(0x10f6)][_0x1127bb(0x1c3)] * (_0x5b92b1 / this[_0x1127bb(0x492)]), this[_0x1127bb(0xb78)] >= this[_0x1127bb(0x170c)] && (this[_0x1127bb(0xb78)] = 0x0, this['Fire']());
                    } ['ResetFiringTimer']() {
                        const _0x43f31c = _0x529b79;
                        this[_0x43f31c(0x19b7)] && this[_0x43f31c(0x19b7)][_0x43f31c(0x16ca)]();
                    } ['MakeLevelOne']() {
                        super['MakeLevelOne']();
                    } ['onBulletOverlapsEnemy'](_0x3a3d73, _0x1d69be) {
                        const _0x1dbf95 = _0x529b79;
                        var _0x405dd3 = _0x1d69be;
                        if (!_0x405dd3[_0x1dbf95(0xdae)] && !_0x3a3d73['HasAlreadyHitObject'](_0x405dd3)) {
                            let _0x247b36 = _0x3a3d73['isYeeted'] ? _0x3a3d73['durata'] / 0x3e8 * this['PPower'] : 0x0,
                                _0x18e662 = this[_0x1dbf95(0xaae)] + _0x247b36;
                            _0x405dd3[_0x1dbf95(0x1112)](_0x18e662, this[_0x1dbf95(0x347)], this['knockback'], this[_0x1dbf95(0x14e)]), this[_0x1dbf95(0xb3d)] += _0x18e662;
                        }
                    } ['CheckArcanas']() {
                        const _0x8f9eb5 = _0x529b79;
                        _0x4fc1b3['default'][_0x8f9eb5(0x1043)]['Arcanas']['ActiveArcanas']['indexOf'](_0x470960[_0x8f9eb5(0xd2c)]['T19_FIRE']) > -0x1 && _0x4fc1b3[_0x8f9eb5(0xd2c)]['Core']['Arcanas']['FireExplosionWeapon'] && _0x4fc1b3[_0x8f9eb5(0xd2c)][_0x8f9eb5(0x1043)][_0x8f9eb5(0x1884)]['FireExplosionWeapon'][_0x8f9eb5(0x31f)] < 0.5 * this['power'] && (_0x4fc1b3[_0x8f9eb5(0xd2c)][_0x8f9eb5(0x1043)][_0x8f9eb5(0x1884)][_0x8f9eb5(0xe86)][_0x8f9eb5(0x31f)] = 0.5 * this['power']), super['CheckArcanas']();
                    } ['onSecondaryBulletOverlapsEnemy'](_0x42a966, _0x4ab3c4) {
                        const _0x1fef6b = _0x529b79;
                        var _0x497adb = _0x4ab3c4;
                        if (!_0x497adb[_0x1fef6b(0xdae)] && !_0x42a966['HasAlreadyHitObject'](_0x497adb)) {
                            let _0x5cad38 = 0.5 * this[_0x1fef6b(0xaae)];
                            _0x497adb['GetDamaged'](_0x5cad38, this['hitVFX'], this[_0x1fef6b(0x1992)], this[_0x1fef6b(0x14e)]), this['stats_inflictedDamage'] += _0x5cad38;
                        }
                    }
                }
                _0x48bcb2['W_Trapano2'] = _0x18bc79, _0x48bcb2['default'] = _0x18bc79;
            };
