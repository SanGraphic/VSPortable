// Module 0x1438f
// Args: _0x264cff, _0x1ce169, _0x24292c

export default (_0x264cff, _0x1ce169, _0x24292c) => {
                'use strict';
                const _0x26c9bc = a0_0x6932;
                var _0x6f6b25 = this && this['__importDefault'] || function(_0x2edca5) {
                    const _0x17a5b7 = _0x26c9bc;
                    return _0x2edca5 && _0x2edca5[_0x17a5b7(0x16f1)] ? _0x2edca5 : {
                        'default': _0x2edca5
                    };
                };
                Object['defineProperty'](_0x1ce169, '__esModule', {
                    'value': !0x0
                }), _0x1ce169['B_CherryStar'] = void 0x0;
                const _0x19614b = _0x6f6b25(_0x24292c(0xa14d)),
                    _0x1519f7 = _0x6f6b25(_0x24292c(0x5f07)),
                    _0x1264e2 = _0x24292c(0x18304);
                class _0x279879 extends _0x19614b['default'] {
                    constructor(_0x40784c, _0x58871a, _0x26ac4f, _0x3bc71b, _0x37494f) {
                        const _0x591709 = _0x26c9bc;
                        super(_0x40784c, _0x58871a, _0x26ac4f, 'vfx', '2Spell4Blue.png', _0x3bc71b, _0x37494f), this[_0x591709(0xc9f)] = [], this[_0x591709(0x617)] = 0x190, this['color'] = 0xff0000, this[_0x591709(0xa76)] = [], this[_0x591709(0x1a6a)] = !0x1, this['maxStars'] = 0x7, this['stars1'] = [], this[_0x591709(0x8bf)] = [], this[_0x591709(0x9a0)] = 0x0, this[_0x591709(0xc80)] = 0x0, this['cos'] = 0x0, this['starIndex'] = 0x0, this['trail'] = this[_0x591709(0x6d2)][_0x591709(0x18bd)]['graphics']({
                            'x': 0x0,
                            'y': 0x0,
                            'lineStyle': {
                                'width': 0x1,
                                'color': 0xff0000,
                                'alpha': 0x1
                            },
                            'fillStyle': {
                                'color': 0xff0000,
                                'alpha': 0x1
                            }
                        }), this[_0x591709(0x177d)] = !0x1, this[_0x591709(0x131f)] = this[_0x591709(0x4a1)], this['stars1'] = [], this['stars2'] = [];
                        for (let _0x4e4e4c = 0x0; _0x4e4e4c < this[_0x591709(0xe8e)]; _0x4e4e4c++) {
                            let _0x39b1b8 = this['scene'][_0x591709(0x18bd)]['image'](0x0, 0x0, 'vfx', '2Spell4Blue.png')[_0x591709(0x8a2)](0x1, 0x4)[_0x591709(0x183f)](!0x1)['setAlpha'](0.65);
                            this[_0x591709(0xdc7)][_0x591709(0x1564)](_0x39b1b8);
                        }
                        for (let _0x234d05 = 0x0; _0x234d05 < this['maxStars']; _0x234d05++) {
                            let _0x2894e9 = this[_0x591709(0x6d2)][_0x591709(0x18bd)][_0x591709(0x568)](0x0, 0x0, 'vfx', '2Spell4Red.png')['setScale'](0x1, 0x4)['setAngle'](0x2d)['setVisible'](!0x1)[_0x591709(0xdab)](0.65);
                            this['stars2'][_0x591709(0x1564)](_0x2894e9);
                        }
                        this['scene'][_0x591709(0x12a1)][_0x591709(0x18bd)]({
                            'targets': this['stars1'],
                            'angle': 0x2d0,
                            'scaleX': 0x4,
                            'scaleY': 0x1,
                            'duration': 0x3e8,
                            'yoyo': !0x0,
                            'repeat': -0x1
                        }), this[_0x591709(0x6d2)]['tweens'][_0x591709(0x18bd)]({
                            'targets': this[_0x591709(0x8bf)],
                            'angle': 0x2fd,
                            'scaleX': 0x1,
                            'scaleY': 0x4,
                            'duration': 0x40f,
                            'yoyo': !0x0,
                            'repeat': -0x1
                        }), this[_0x591709(0x6d2)][_0x591709(0x12a1)][_0x591709(0x18bd)]({
                            'targets': this,
                            'angle': 0x2d0,
                            'scaleX': 0x4,
                            'scaleY': 0x1,
                            'duration': 0x3e8,
                            'yoyo': !0x0,
                            'repeat': -0x1
                        });
                    } ['OnRecycle']() {
                        const _0x798016 = _0x26c9bc;
                        super['OnRecycle'](), this[_0x798016(0xcf9)][_0x798016(0xdf6)](0x9, -4.5, -4.5), this['isCullable'] = !0x1, this[_0x798016(0x8a2)](0x2), this[_0x798016(0x3b8)]['x'] = this['x'] - _0x1519f7[_0x798016(0xd2c)][_0x798016(0x1043)][_0x798016(0x10f6)]['x'], this[_0x798016(0x3b8)]['y'] = this['y'] - _0x1519f7['default'][_0x798016(0x1043)][_0x798016(0x10f6)]['y'], this[_0x798016(0x7cd)] = 0xffffff, this[_0x798016(0x3b8)][_0x798016(0xe71)] = 0x1, this['alpha'] = 0x1, this[_0x798016(0x138f)](), this[_0x798016(0xd09)](), this[_0x798016(0x1a6a)] = !0x0;
                    } ['DeSpawn']() {} ['PickNewTarget']() {
                        const _0x542a00 = _0x26c9bc;
                        this['objectsHit'] = [];
                        let _0x31983e = this[_0x542a00(0x6d2)][_0x542a00(0x12f9)][_0x542a00(0x173c)],
                            _0x3ea4c5 = this[_0x542a00(0x6d2)][_0x542a00(0x12f9)][_0x542a00(0x140e)],
                            _0x1c02c1 = Math[_0x542a00(0x1084)](_0x31983e, _0x3ea4c5),
                            _0x1f4579 = new Phaser[(_0x542a00(0x24f))]['Vector2'](0x0, 0x0);
                        if (_0x1f4579['x'] = _0x1519f7[_0x542a00(0xd2c)][_0x542a00(0x1043)]['Player']['x'] - (Math[_0x542a00(0x9ad)]() - 0.5) * _0x1c02c1, _0x1f4579['y'] = _0x1519f7[_0x542a00(0xd2c)]['Core'][_0x542a00(0x10f6)]['y'] - (Math[_0x542a00(0x9ad)]() - 0.5) * _0x1c02c1, this['targets'][_0x542a00(0x1564)](_0x1f4579), Math['random']() < 0.3 && this[_0x542a00(0xa76)]['length'] > 0x2) {
                            let _0x15c737 = this[_0x542a00(0xa76)][this[_0x542a00(0xa76)]['length'] - 0x1 - (Math[_0x542a00(0x9ad)]() >= 0.5 ? 0x1 : 0x2)];
                            this['x'] = _0x15c737['x'], this['y'] = _0x15c737['y'];
                        }
                        this[_0x542a00(0x18a7)] = _0x1f4579;
                        var _0x20d63d = Math[_0x542a00(0x326)](this['y'] - this[_0x542a00(0x18a7)]['y'], this['x'] - this['target']['x']);
                        this[_0x542a00(0xc80)] = Math[_0x542a00(0x19db)](Math['sin'](_0x20d63d)), this[_0x542a00(0xd7e)] = Math[_0x542a00(0x19db)](Math[_0x542a00(0xd7e)](_0x20d63d));
                    } ['Update'](_0x26289a) {
                        const _0x3d7303 = _0x26c9bc;
                        if (!this['canUpdate']) return;
                        this['trail'][_0x3d7303(0xb4a)](this['y'] - _0x1519f7[_0x3d7303(0xd2c)][_0x3d7303(0x1043)][_0x3d7303(0x10f6)]['y'] + 0.5 * this['scene'][_0x3d7303(0x12f9)][_0x3d7303(0x140e)]);
                        let _0x230079 = Math[_0x3d7303(0xdeb)](_0x26289a / 0x10);
                        for (let _0x42b870 = 0x0; _0x42b870 < _0x230079; _0x42b870++) this['trailUpdate']();
                        let _0x588610 = 0.5 * this['weapon'][_0x3d7303(0x712)] * _0x26289a;
                        this['x'] = this[_0x3d7303(0x10db)](this['x'], this['target']['x'], _0x588610 * this[_0x3d7303(0xd7e)]), this['y'] = this['Approach'](this['y'], this[_0x3d7303(0x18a7)]['y'], _0x588610 * this[_0x3d7303(0xc80)]), this['x'] === this[_0x3d7303(0x18a7)]['x'] && this['y'] === this[_0x3d7303(0x18a7)]['y'] && (this[_0x3d7303(0x3a6)](), this[_0x3d7303(0xd09)](), this[_0x3d7303(0x1a6a)] = !0x1, this['CheckTimer']());
                    } ['MakeStar']() {
                        const _0x960166 = _0x26c9bc;
                        let _0x30d079 = this['stars1'][this[_0x960166(0xc64)]];
                        _0x30d079['x'] = this[_0x960166(0x18a7)]['x'], _0x30d079['y'] = this['target']['y'], _0x30d079['setVisible'](!0x0)['setAlpha'](0.65);
                        let _0x2de1f6 = this[_0x960166(0x8bf)][this[_0x960166(0xc64)]];
                        _0x2de1f6['x'] = this['target']['x'], _0x2de1f6['y'] = this['target']['y'], _0x2de1f6['setVisible'](!0x0)[_0x960166(0xdab)](0.65), this[_0x960166(0xc64)]++;
                    } ['CheckTimer']() {
                        const _0x261714 = _0x26c9bc;
                        this[_0x261714(0x6d2)]['time']['removeEvent'](this['BounceTimer']), this['bouncedTimes'] += 0x1, this[_0x261714(0x9a0)] >= this['maxStars'] ? (this['starIndex'] = 0x0, this[_0x261714(0x7c9)](), this[_0x261714(0x9a0)] = 0x0, this['clearPositions']()) : this['StartTimer']();
                    } ['StartTimer']() {
                        const _0x3fdffe = _0x26c9bc;
                        this[_0x3fdffe(0x20d)] = this[_0x3fdffe(0x6d2)][_0x3fdffe(0x915)][_0x3fdffe(0x12b8)]({
                            'callback': () => {
                                const _0x33f25a = _0x3fdffe;
                                this['trail'][_0x33f25a(0xdab)](0x1), this[_0x33f25a(0x1a6a)] = !0x0;
                            },
                            'delay': 0x1f4
                        });
                    } ['ExplodeAll']() {
                        const _0x1f0c89 = _0x26c9bc;
                        for (let _0x519f33 = 0x0; _0x519f33 < this['maxStars']; _0x519f33++) {
                            let _0x25aaa5 = {
                                'x': this[_0x1f0c89(0xdc7)][_0x519f33]['x'],
                                'y': this[_0x1f0c89(0xdc7)][_0x519f33]['y']
                            };
                            this['TrueWeapon'][_0x1f0c89(0x1659)](_0x25aaa5['x'], _0x25aaa5['y'], _0x519f33);
                        }
                        this['scene']['tweens']['add']({
                            'targets': this[_0x1f0c89(0x3b8)],
                            'alpha': 0x2,
                            'duration': 0x1f4
                        }), this['scene']['tweens'][_0x1f0c89(0x18bd)]({
                            'targets': this[_0x1f0c89(0x3b8)],
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'delay': 0x1f4
                        }), this['scene']['tweens']['add']({
                            'targets': this['stars1'],
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'delay': 0x1f4
                        }), this['scene'][_0x1f0c89(0x12a1)]['add']({
                            'targets': this['stars2'],
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'delay': 0x1f4
                        }), this[_0x1f0c89(0x6d2)][_0x1f0c89(0x915)]['addEvent']({
                            'delay': 0x1f4 + 0x32 * this[_0x1f0c89(0xe8e)],
                            'callback': () => {
                                this['StartTimer']();
                            }
                        });
                    } ['clearPositions']() {
                        this['positions'] = [];
                    } ['trailUpdate']() {
                        const _0x4e61c6 = _0x26c9bc;
                        if (this['active']) this[_0x4e61c6(0xc9f)][_0x4e61c6(0x2f9)]([this['x'], this['y']]), this[_0x4e61c6(0xc9f)][_0x4e61c6(0xed9)] > this['maxPositions'] && this['positions'][_0x4e61c6(0xcfe)]();
                        else {
                            if (this[_0x4e61c6(0xc9f)][_0x4e61c6(0xed9)] > this[_0x4e61c6(0x617)] - 0xa) {
                                for (var _0x43983c = 0x0; _0x43983c < this['positions']['length']; _0x43983c++) _0x43983c > this['maxPositions'] - 0xa && this['positions'][_0x4e61c6(0x16ea)](_0x43983c, 0x1);
                            }
                            this[_0x4e61c6(0xc9f)][_0x4e61c6(0xed9)] > 0x1 ? (this['positions'][_0x4e61c6(0x2f9)]([this['x'], this['y']]), this['positions'][_0x4e61c6(0xcfe)]()) : this[_0x4e61c6(0x138f)]();
                        }
                        for (var _0x43983c of (this[_0x4e61c6(0x3b8)][_0x4e61c6(0x159)](), this['trail']['beginPath'](), Array(this[_0x4e61c6(0xc9f)][_0x4e61c6(0xed9)])[_0x4e61c6(0x204)]())) 0x0 != _0x43983c && (this[_0x4e61c6(0x3b8)][_0x4e61c6(0x191d)](0x3, this['color'], 0x1 / (_0x43983c / 0x14)), this['trail'][_0x4e61c6(0xebe)](this[_0x4e61c6(0xc9f)][_0x43983c - 0x1][0x0], this['positions'][_0x43983c - 0x1][0x1]), this[_0x4e61c6(0x3b8)]['lineTo'](this[_0x4e61c6(0xc9f)][_0x43983c][0x0], this['positions'][_0x43983c][0x1]));
                        this[_0x4e61c6(0x3b8)]['closePath'](), this['trail'][_0x4e61c6(0x194f)](), this['trail'][_0x4e61c6(0xfcb)]();
                        for (let _0x386b75 = 0x0; _0x386b75 < 0.5 * this['maxPositions']; _0x386b75++) 0x0 != _0x386b75 && this['positions'][_0x386b75] && this[_0x4e61c6(0xc9f)][_0x386b75 - 0x1] && (this['trail']['lineStyle'](1.5, 0xffffff, 0.8 / (_0x386b75 / 0x14)), this['trail'][_0x4e61c6(0xebe)](this['positions'][_0x386b75 - 0x1][0x0], this['positions'][_0x386b75 - 0x1][0x1]), this[_0x4e61c6(0x3b8)][_0x4e61c6(0xc2c)](this[_0x4e61c6(0xc9f)][_0x386b75][0x0], this[_0x4e61c6(0xc9f)][_0x386b75][0x1]));
                        this['trail'][_0x4e61c6(0x13c1)](), this[_0x4e61c6(0x3b8)]['strokePath'](), this[_0x4e61c6(0x3b8)]['blendMode'] = _0x1264e2['BlendModes'][_0x4e61c6(0x1811)];
                    } ['Approach'](_0x302dc1, _0x110582, _0x105f99) {
                        const _0xe083e6 = _0x26c9bc;
                        return _0x302dc1 < _0x110582 ? Math[_0xe083e6(0x1084)](_0x302dc1 + _0x105f99, _0x110582) : Math[_0xe083e6(0x1981)](_0x302dc1 - _0x105f99, _0x110582);
                    } ['SetTarget'](_0x3bd1be) {} ['SetNullTarget']() {}
                }
                _0x1ce169['B_CherryStar'] = _0x279879, _0x1ce169['default'] = _0x279879;
            };
