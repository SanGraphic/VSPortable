// Module 0x7819
// Args: _0x17702e, _0xb0e947, _0x26968e

export default (_0x17702e, _0xb0e947, _0x26968e) => {
                'use strict';
                const _0x4df9d9 = a0_0x6932;
                var _0x1c70aa = this && this['__importDefault'] || function(_0x5c02fb) {
                    const _0x1d3602 = _0x4df9d9;
                    return _0x5c02fb && _0x5c02fb[_0x1d3602(0x16f1)] ? _0x5c02fb : {
                        'default': _0x5c02fb
                    };
                };
                Object['defineProperty'](_0xb0e947, '__esModule', {
                    'value': !0x0
                }), _0xb0e947['W_Corridor'] = void 0x0;
                const _0x52e287 = _0x1c70aa(_0x26968e(0x54e3)),
                    _0x356fc6 = _0x1c70aa(_0x26968e(0x5f07)),
                    _0x409430 = _0x1c70aa(_0x26968e(0x4a9d)),
                    _0x560002 = _0x1c70aa(_0x26968e(0xe49a));
                class _0x10284f extends _0x560002['default'] {
                    constructor(_0x66a04b) {
                        const _0x5a2887 = _0x4df9d9;
                        super(_0x66a04b), this[_0x5a2887(0x288)] = 0x8, this[_0x5a2887(0xa76)] = new Array(), this[_0x5a2887(0x137c)] = new Array();
                        for (let _0x290fd2 = 0x0; _0x290fd2 < 0xc; _0x290fd2++) {
                            var _0x19214d = _0x290fd2 / 0xc * (0x2 * Math['PI']);
                            this['targets'][_0x5a2887(0x1564)]({
                                'x': Math['cos'](_0x19214d),
                                'y': Math[_0x5a2887(0xc80)](_0x19214d)
                            }), this[_0x5a2887(0x137c)][_0x5a2887(0x1564)](_0x19214d);
                        }
                        this[_0x5a2887(0x568)] = _0x356fc6['default']['Core'][_0x5a2887(0x6d2)][_0x5a2887(0x18bd)][_0x5a2887(0x105b)](0x0, 0x0, 'vfx', 'Pierce1.png'), this['image'][_0x5a2887(0xf01)](_0x356fc6[_0x5a2887(0xd2c)][_0x5a2887(0x1043)]['Player'])['setOrigin'](0x0, 0.5)['setVisible'](!0x1)['setTint'](0xcceeff)[_0x5a2887(0x8a2)](0x2, 0x1), this[_0x5a2887(0x11d1)] = _0x356fc6[_0x5a2887(0xd2c)]['Core'][_0x5a2887(0x6d2)]['add'][_0x5a2887(0x99a)]({
                            'targets': this[_0x5a2887(0x568)],
                            'alpha': 0x0,
                            'delay': 0xc8,
                            'duration': 0x1f4,
                            'ease': 'Linear',
                            'onStart': () => {
                                const _0x1f3716 = _0x5a2887;
                                this[_0x1f3716(0x568)]['alpha'] = 0x1;
                            }
                        });
                        const _0x50c0f5 = this['image']['anims'][_0x5a2887(0x1756)]('vfx', {
                            'start': 0x1,
                            'end': 0x5,
                            'zeroPad': 0x0,
                            'prefix': 'Pierce',
                            'suffix': '.png'
                        });
                        this['image'][_0x5a2887(0x183e)][_0x5a2887(0x6a8)]({
                            'key': 'pierce',
                            'frames': _0x50c0f5,
                            'frameRate': 0x1e
                        });
                    }
                    get['PAmount']() {
                        return 0x6;
                    } ['OnStart']() {
                        const _0x4d25bb = _0x4df9d9;
                        super[_0x4d25bb(0xec7)](), this['corridorPool'] = new _0x409430['default'](_0x356fc6['default'][_0x4d25bb(0x1043)]['scene'], _0x52e287['default']['SPACETIME']), _0x356fc6['default'][_0x4d25bb(0x1043)][_0x4d25bb(0x6d2)][_0x4d25bb(0x1585)]['add']['overlap'](this['corridorPool'], _0x356fc6['default']['Core'][_0x4d25bb(0x1a91)], this['onCorridorOverlapsEnemy'][_0x4d25bb(0xf7e)](this));
                    } ['Fire']() {
                        const _0x2cd4e7 = _0x4df9d9;
                        this[_0x2cd4e7(0x288)]++, this['ticks'] >= 0xc && (this[_0x2cd4e7(0x288)] = 0x0), 0x9 == this['ticks'] && this[_0x2cd4e7(0xf53)](), this[_0x2cd4e7(0x18a7)] = this[_0x2cd4e7(0xa76)][this['ticks']], this['imageTween'][_0x2cd4e7(0x1374)](), this['image']['copyPosition'](_0x356fc6['default'][_0x2cd4e7(0x1043)][_0x2cd4e7(0x10f6)])[_0x2cd4e7(0x9b5)](Phaser['Math'][_0x2cd4e7(0x1470)](this[_0x2cd4e7(0x137c)][this[_0x2cd4e7(0x288)]]))[_0x2cd4e7(0x183f)](!0x0)[_0x2cd4e7(0xb4a)](_0x356fc6[_0x2cd4e7(0xd2c)][_0x2cd4e7(0x1043)][_0x2cd4e7(0x10f6)][_0x2cd4e7(0x16c6)] + this[_0x2cd4e7(0x568)]['scene'][_0x2cd4e7(0x12f9)][_0x2cd4e7(0x140e)]), this[_0x2cd4e7(0x568)]['anims'][_0x2cd4e7(0x902)]('pierce');
                        for (let _0x451c84 = 0x0; _0x451c84 < this['PAmount']; _0x451c84++) this[_0x2cd4e7(0x11ec)](_0x356fc6[_0x2cd4e7(0xd2c)][_0x2cd4e7(0x1043)][_0x2cd4e7(0x10f6)]['x'], _0x356fc6[_0x2cd4e7(0xd2c)][_0x2cd4e7(0x1043)]['Player']['y'], _0x451c84, this['target'], this[_0x2cd4e7(0x137c)][this[_0x2cd4e7(0x288)]]);
                        this[_0x2cd4e7(0x162d)] != this[_0x2cd4e7(0x170c)] && (this[_0x2cd4e7(0x162d)] = this[_0x2cd4e7(0x170c)], this[_0x2cd4e7(0x839)]());
                    } ['FireOneLancet'](_0x3c6be4, _0x39a726, _0x4a86e6, _0x521578, _0x258522) {
                        const _0x158166 = _0x4df9d9;
                        var _0x1854e4 = super[_0x158166(0x970)](_0x3c6be4, _0x39a726, _0x4a86e6, _0x521578);
                        null == _0x1854e4 || _0x1854e4[_0x158166(0x9b5)](Phaser['Math'][_0x158166(0x1470)](_0x258522));
                    } ['FireCorridor']() {
                        const _0x179c9a = _0x4df9d9;
                        this[_0x179c9a(0xe2d)][_0x179c9a(0xada)](_0x356fc6['default'][_0x179c9a(0x1043)][_0x179c9a(0x10f6)]['x'], _0x356fc6[_0x179c9a(0xd2c)]['Core']['Player']['y'], this, 0x0);
                    } ['onCorridorOverlapsEnemy'](_0x2e5fdf, _0x292d62) {
                        const _0xc6d63a = _0x4df9d9;
                        var _0x57c55a = _0x292d62;
                        if (!_0x57c55a[_0xc6d63a(0xdae)] && !_0x57c55a[_0xc6d63a(0x176d)] && !_0x2e5fdf[_0xc6d63a(0x1738)](_0x57c55a)) {
                            let _0x36044f = 0.5 * _0x57c55a['hp'];
                            _0x57c55a[_0xc6d63a(0x1112)](_0x36044f, this[_0xc6d63a(0x347)], this[_0xc6d63a(0x1992)], this[_0xc6d63a(0x14e)]), this[_0xc6d63a(0xb3d)] += _0x36044f;
                        }
                    }
                }
                _0xb0e947['W_Corridor'] = _0x10284f, _0xb0e947['default'] = _0x10284f;
            };
