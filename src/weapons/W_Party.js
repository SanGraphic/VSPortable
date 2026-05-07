// Module 0xa099
// Args: _0x34b693, _0x18ffce, _0x550a06

export default (_0x34b693, _0x18ffce, _0x550a06) => {
                'use strict';
                const _0x2f357d = a0_0x6932;
                var _0x306e8d = this && this['__importDefault'] || function(_0x3f766b) {
                    const _0x3f1ab8 = _0x2f357d;
                    return _0x3f766b && _0x3f766b[_0x3f1ab8(0x16f1)] ? _0x3f766b : {
                        'default': _0x3f766b
                    };
                };
                Object['defineProperty'](_0x18ffce, '__esModule', {
                    'value': !0x0
                }), _0x18ffce['W_Party'] = void 0x0;
                const _0x3d9683 = _0x306e8d(_0x550a06(0xe49a)),
                    _0x259e56 = _0x306e8d(_0x550a06(0x54e3)),
                    _0x3f3d26 = _0x306e8d(_0x550a06(0x5f07)),
                    _0x3d3b91 = _0x550a06(0x18304),
                    _0x3da8e1 = _0x306e8d(_0x550a06(0x9b68)),
                    _0x1a75f5 = _0x306e8d(_0x550a06(0x1fd7));
                class _0x46cedf extends _0x3d9683['default'] {
                    constructor(_0x5ebc49) {
                        const _0x25249e = _0x2f357d;
                        super(_0x5ebc49), this['frontFiring'] = !0x0, this[_0x25249e(0x7d1)] = [0xbb0000, 0xbb2222, 0xcc0000, 0xaa0000, 0xbb0000, 0xbb0000, 0xbb0000, 0xbb0000], this[_0x25249e(0x8e8)] = [0xbbbb00, 0xbbbb22, 0xcccc00, 0xaaaa00, 0xbbbb00, 0xbbbb00, 0xbbbb00, 0xbbbb00], this['triangleColors'] = [0xbb6600, 0xbb6622, 0xcc6600, 0xaa6600, 0xbb6600, 0xbb6600, 0xbb6600, 0xbb6600], this[_0x25249e(0x951)] = [0xbb0066, 0xbb2266, 0xcc0066, 0xaa0066, 0xbb0066, 0xbb0066, 0xbb0066, 0xbb0066], this[_0x25249e(0xa79)] = 0x0, this[_0x25249e(0x2d4)] = 0x8, this[_0x25249e(0xeeb)] = _0x259e56[_0x25249e(0xd2c)]['PARTY_COUNTER'], this[_0x25249e(0x125b)] = _0x3f3d26[_0x25249e(0xd2c)]['Core'][_0x25249e(0x6d2)]['add'][_0x25249e(0x1791)]('vfx'), this[_0x25249e(0x121b)] = this['PfxEmitter'][_0x25249e(0x14c0)]({
                            'frame': ['2Spell1.png', 'WhiteDot.png'],
                            'quantity': 0x1,
                            'lifespan': 0x7d0,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x2,
                                'end': 0x0
                            },
                            'on': !0x1,
                            'blendMode': _0x3d3b91[_0x25249e(0x10fc)]['ADD'],
                            'speedX': {
                                'min': 0x64,
                                'max': 0xc8
                            },
                            'speedY': {
                                'min': -0x64,
                                'max': -0xc8
                            },
                            'angle': {
                                'min': 0xe1,
                                'max': 0x13b
                            },
                            'gravityY': 0x12c
                        });
                    } ['pickType']() {
                        const _0x5556a6 = _0x2f357d;
                        this[_0x5556a6(0xed8)] = Phaser['Math'][_0x5556a6(0x82a)][_0x5556a6(0x198c)]([0x0, 0x1, 0x2, 0x3, 0x4]);
                    } ['Fire']() {
                        const _0x59a2c8 = _0x2f357d;
                        this[_0x59a2c8(0x14ff)](), super['Fire']();
                        let _0x1af49f = this[_0x59a2c8(0x68e)]();
                        _0x3f3d26[_0x59a2c8(0xd2c)]['Sound']['PlaySound'](_0x1a75f5[_0x59a2c8(0xd2c)][_0x59a2c8(0xe45)], {
                            'detune': -0x258 * _0x1af49f,
                            'volume': 0.5
                        }, 0xc8, 0xa);
                        let _0x27b342 = (this[_0x59a2c8(0x194c)] ? _0x3f3d26[_0x59a2c8(0xd2c)]['Core'][_0x59a2c8(0x10f6)][_0x59a2c8(0x4d4)] : !_0x3f3d26['default'][_0x59a2c8(0x1043)]['Player'][_0x59a2c8(0x4d4)]) ? -0x1 : 0x1;
                        this[_0x59a2c8(0x121b)]['setSpeedX']({
                            'min': 0x64 * _0x27b342,
                            'max': 0xc8 * _0x27b342
                        }), this[_0x59a2c8(0x121b)][_0x59a2c8(0x108b)](_0x3f3d26[_0x59a2c8(0xd2c)]['Core'][_0x59a2c8(0x10f6)]['x'], _0x3f3d26['default'][_0x59a2c8(0x1043)][_0x59a2c8(0x10f6)]['y'] - 0x18, 0x40), this[_0x59a2c8(0x3e4)] && this['counterWeapon']['Fire']();
                    } ['FireOneBullet'](_0x92bb22, _0x3d9477, _0x9cc2f8, _0x26f0c1) {
                        const _0x1f7781 = _0x2f357d;
                        var _0x2e2773 = this['pool'][_0x1f7781(0xada)](_0x92bb22, _0x3d9477 - 0x18, this, _0x9cc2f8);
                        return _0x2e2773 && (0x4 === this['fireType'] ? _0x2e2773[_0x1f7781(0x14ff)]() : _0x2e2773[_0x1f7781(0xf3f)](this[_0x1f7781(0xed8)]), _0x2e2773['SetTarget']()), _0x2e2773;
                    } ['GetRandomCircleColor']() {
                        const _0x2ec97b = _0x2f357d;
                        return this['colorIndex']++, this['colorIndex'] >= this['maxColors'] && (this['colorIndex'] = 0x0), this[_0x2ec97b(0x7d1)][this['colorIndex']];
                    } ['GetRandomStarColor']() {
                        const _0x440083 = _0x2f357d;
                        return this[_0x440083(0xa79)]++, this[_0x440083(0xa79)] >= this['maxColors'] && (this[_0x440083(0xa79)] = 0x0), this[_0x440083(0x8e8)][this[_0x440083(0xa79)]];
                    } ['GetRandomTriangleColor']() {
                        const _0x1366f9 = _0x2f357d;
                        return this[_0x1366f9(0xa79)]++, this[_0x1366f9(0xa79)] >= this['maxColors'] && (this[_0x1366f9(0xa79)] = 0x0), this['triangleColors'][this[_0x1366f9(0xa79)]];
                    } ['GetRandomHeartColor']() {
                        const _0x482a9a = _0x2f357d;
                        return this['colorIndex']++, this[_0x482a9a(0xa79)] >= this[_0x482a9a(0x2d4)] && (this['colorIndex'] = 0x0), this[_0x482a9a(0x951)][this[_0x482a9a(0xa79)]];
                    } ['CheckArcanas']() {
                        const _0x16290d = _0x2f357d;
                        if (_0x3f3d26[_0x16290d(0xd2c)][_0x16290d(0x1043)][_0x16290d(0x1884)]['ActiveArcanas']['indexOf'](_0x3da8e1[_0x16290d(0xd2c)]['T01_AQUARIUS']) > -0x1) {
                            if (_0x3f3d26[_0x16290d(0xd2c)][_0x16290d(0x1043)][_0x16290d(0x164d)][_0x16290d(0x1e6)](_0x318c34 => _0x318c34['bulletType'] === this[_0x16290d(0xeeb)])) return;
                            let _0xe799a = _0x3f3d26['default']['Core'][_0x16290d(0x117d)](this['counterWeaponType']);
                            for (this['counterWeapon'] = _0xe799a, this[_0x16290d(0x3e4)]['CleanUp'](), this['counterWeapon'][_0x16290d(0x839)] = function() {}; _0xe799a[_0x16290d(0x5e3)] < this['level'];) _0xe799a['LevelUp']();
                        }
                        super[_0x16290d(0x1ce)]();
                    } ['LevelUp']() {
                        const _0x28a2ad = _0x2f357d;
                        let _0x9bb324 = super[_0x28a2ad(0x2ab)]();
                        return this['counterWeapon'] && this[_0x28a2ad(0x3e4)]['LevelUp'](), _0x9bb324;
                    }
                }
                _0x18ffce['W_Party'] = _0x46cedf, _0x18ffce['default'] = _0x46cedf;
            };
