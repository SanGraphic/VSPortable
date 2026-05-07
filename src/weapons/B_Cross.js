// Module 0x16aac
// Args: _0x423aee, _0x5eb6ec, _0x4f0d25

export default (_0x423aee, _0x5eb6ec, _0x4f0d25) => {
                'use strict';
                const _0x5d51e4 = a0_0x6932;
                var _0x1a06ac = this && this['__importDefault'] || function(_0x56f07a) {
                    const _0xab8f36 = _0x5d51e4;
                    return _0x56f07a && _0x56f07a[_0xab8f36(0x16f1)] ? _0x56f07a : {
                        'default': _0x56f07a
                    };
                };
                Object['defineProperty'](_0x5eb6ec, '__esModule', {
                    'value': !0x0
                }), _0x5eb6ec['B_Cross'] = void 0x0;
                const _0x13ceb0 = _0x1a06ac(_0x4f0d25(0xa14d)),
                    _0x536c3c = _0x1a06ac(_0x4f0d25(0x5f07)),
                    _0x4f4955 = _0x1a06ac(_0x4f0d25(0x1fd7)),
                    _0x4e109b = _0x1a06ac(_0x4f0d25(0x5103));
                class _0x905fb6 extends _0x13ceb0['default'] {
                    constructor(_0x5c63b4, _0x5a1f10, _0x43b359, _0xba94e0, _0x24ee9c) {
                        const _0x205fa2 = _0x5d51e4;
                        super(_0x5c63b4, _0x5a1f10, _0x43b359, 'vfx', 'ProjectileCross2.png', _0xba94e0, _0x24ee9c), this['posHistory'] = new Array(), this[_0x205fa2(0x624)] = 0x3, this['historyIndex'] = 0x0, this['accel'] = 0x1, this[_0x205fa2(0xf4e)] = new Phaser[(_0x205fa2(0x24f))][(_0x205fa2(0x1551))](0x0, 0x0), this[_0x205fa2(0x1139)] = !0x1, this['AngleTween'] = this[_0x205fa2(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'angle': 0x168,
                            'duration': 0x1f4,
                            'ease': 'Linear',
                            'repeat': -0x1
                        }), this[_0x205fa2(0x1ac5)] = this['scene'][_0x205fa2(0x12a1)]['add']({
                            'targets': this,
                            'accel': -0x2,
                            'duration': 0x3e8,
                            'ease': 'Linear'
                        }), this[_0x205fa2(0xbbc)] = new Array();
                        for (let _0x6c8bc0 = 0x0; _0x6c8bc0 < this[_0x205fa2(0x624)]; _0x6c8bc0++) {
                            this[_0x205fa2(0x24a)][_0x205fa2(0x1564)](new Phaser[(_0x205fa2(0x24f))][(_0x205fa2(0x1551))](_0x5a1f10, _0x43b359));
                            var _0x45c3d0 = this['scene'][_0x205fa2(0x18bd)]['image'](0x0, 0x0, this[_0x205fa2(0x174d)][_0x205fa2(0x1381)], this[_0x205fa2(0x670)][_0x205fa2(0x226)])['setScale'](_0x4e109b[_0x205fa2(0xd2c)][_0x205fa2(0x15db)])[_0x205fa2(0x183f)](!0x1)[_0x205fa2(0xb34)](0xffff66)[_0x205fa2(0xdab)](0.75 - 0.15 * _0x6c8bc0);
                            this[_0x205fa2(0xbbc)][_0x205fa2(0x1564)](_0x45c3d0);
                        }
                        this[_0x205fa2(0xbbc)][_0x205fa2(0x1394)](), this['bounceActivated'] = !0x1;
                    } ['OnRecycle']() {
                        const _0x43c512 = _0x5d51e4;
                        super[_0x43c512(0x5ce)](), this[_0x43c512(0xcf9)][_0x43c512(0xdf6)](0xc), this[_0x43c512(0x8a2)](_0x4e109b['default'][_0x43c512(0x15db)] * this[_0x43c512(0x4a1)][_0x43c512(0x5f5)]), this[_0x43c512(0xca2)] = 1.5 + 0.1 * this[_0x43c512(0x19c4)], this[_0x43c512(0x1ac5)][_0x43c512(0x1374)]();
                        for (let _0x353939 = 0x0; _0x353939 < this['posHistory'][_0x43c512(0xed9)]; _0x353939++) this['posHistory'][_0x353939]['x'] = this['x'], this['posHistory'][_0x353939]['y'] = this['y'];
                        this['x'] += (Math[_0x43c512(0x9ad)]() - 0.5) * this['indexInWeapon'] * 0x14 * this[_0x43c512(0x4a1)][_0x43c512(0x5f5)], this['y'] += (Math['random']() - 0.5) * this[_0x43c512(0x19c4)] * 0x14 * this['weapon'][_0x43c512(0x5f5)], this[_0x43c512(0xefb)](), this[_0x43c512(0xf4e)][_0x43c512(0x850)](this['body'][_0x43c512(0xf4e)]), _0x536c3c[_0x43c512(0xd2c)]['Sound']['PlaySound'](_0x4f4955[_0x43c512(0xd2c)]['Shot'], {
                            'detune': -0x64 * this['indexInWeapon'],
                            'volume': 0.45
                        }, 0xc8, 0xa), this[_0x43c512(0xb4a)](this['y'] - _0x536c3c[_0x43c512(0xd2c)][_0x43c512(0x1043)][_0x43c512(0x10f6)]['y'] + 0x2 * this[_0x43c512(0x6d2)][_0x43c512(0x12f9)]['height']), this['weapon']['PBounces'] && !this[_0x43c512(0x1139)] && (this['bounceActivated'] = !0x0, this[_0x43c512(0x6d2)][_0x43c512(0x1585)][_0x43c512(0x1cf)]['on']('worldbounds', this['Bounce'], this), this['setCollideWorldBounds'](!0x0, 0x1, 0x1), this['body']['setBoundsRectangle'](_0x536c3c[_0x43c512(0xd2c)][_0x43c512(0x1043)]['Player']['WorldBoxCollider']), this[_0x43c512(0xcf9)]['onWorldBounds'] = !0x0), this[_0x43c512(0x1139)] && this['setCollideWorldBounds'](!0x0, 0x1, 0x1);
                    } ['Bounce'](_0x46ebbd) {
                        const _0x400899 = _0x5d51e4;
                        this['body'] === _0x46ebbd && (this[_0x400899(0x1b4)] > 0x0 ? (this['bounces']--, this[_0x400899(0xf4e)]['x'] *= -0x1, this['velocity']['y'] *= -0x1, this['objectsHit'] = []) : this[_0x400899(0x193c)](!0x1, 0x1, 0x1));
                    } ['DeSpawn']() {
                        const _0x690551 = _0x5d51e4;
                        super['DeSpawn']();
                        for (let _0x481270 = 0x0; _0x481270 < this[_0x690551(0xbbc)][_0x690551(0xed9)]; _0x481270++) this['ghosts'][_0x481270]['setVisible'](!0x1);
                    } ['getHistoryIndex'](_0x255ffd) {
                        const _0x171448 = _0x5d51e4;
                        return this[_0x171448(0x1192)] + _0x255ffd >= this[_0x171448(0x624)] ? this[_0x171448(0x1192)] + _0x255ffd - this[_0x171448(0x624)] : this[_0x171448(0x1192)] + _0x255ffd;
                    } ['Update']() {
                        const _0x4cc5a7 = _0x5d51e4;
                        this[_0x4cc5a7(0x1192)] < this['maxHistory'] - 0x1 ? this[_0x4cc5a7(0x1192)]++ : this['historyIndex'] = 0x0;
                        for (let _0x4de3e1 = 0x0; _0x4de3e1 < this[_0x4cc5a7(0xbbc)][_0x4cc5a7(0xed9)]; _0x4de3e1++) {
                            var _0x430f56 = this[_0x4cc5a7(0x24a)][this[_0x4cc5a7(0xe5a)](_0x4de3e1)],
                                _0x58b1cb = this[_0x4cc5a7(0xbbc)][_0x4de3e1];
                            _0x58b1cb[_0x4cc5a7(0xd96)] = this[_0x4cc5a7(0xd96)], _0x58b1cb['x'] = _0x430f56['x'], _0x58b1cb['y'] = _0x430f56['y'], _0x58b1cb['scale'] = this['scale'], _0x58b1cb[_0x4cc5a7(0x35a)] = !0x0;
                        }
                        this[_0x4cc5a7(0x24a)][this['historyIndex']]['x'] = this['x'], this['posHistory'][this['historyIndex']]['y'] = this['y'], this['body']['velocity']['x'] = this[_0x4cc5a7(0xf4e)]['x'] * this[_0x4cc5a7(0xca2)], this['body'][_0x4cc5a7(0xf4e)]['y'] = this['velocity']['y'] * this[_0x4cc5a7(0xca2)];
                    }
                }
                _0x5eb6ec['B_Cross'] = _0x905fb6, _0x5eb6ec['default'] = _0x905fb6;
            };
