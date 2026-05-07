// Module 0x5d4f
// Args: _0x1f3a26, _0x4bcb2b, _0x80d308

export default (_0x1f3a26, _0x4bcb2b, _0x80d308) => {
                'use strict';
                const _0x30fd31 = a0_0x6932;
                var _0x40862c = this && this['__importDefault'] || function(_0x14cda) {
                    return _0x14cda && _0x14cda['__esModule'] ? _0x14cda : {
                        'default': _0x14cda
                    };
                };
                Object['defineProperty'](_0x4bcb2b, '__esModule', {
                    'value': !0x0
                }), _0x4bcb2b['B_Party'] = void 0x0;
                const _0x4d61b7 = _0x40862c(_0x80d308(0xa14d)),
                    _0x5d131f = _0x40862c(_0x80d308(0x5f07)),
                    _0xa3889b = _0x80d308(0x18304);
                class _0x589c0d extends _0x4d61b7['default'] {
                    constructor(_0xec9445, _0x3f104f, _0x2d9ac9, _0x2c8a6c, _0x5f581c) {
                        const _0x4008b8 = _0x30fd31;
                        super(_0xec9445, _0x3f104f, _0x2d9ac9, 'vfx', 'party2.png', _0x2c8a6c, _0x5f581c), this[_0x4008b8(0x13a3)] = new Array(), this['enemiesHit'] = 0x0, this['positions'] = [], this[_0x4008b8(0x617)] = 0x19, this[_0x4008b8(0x7cd)] = 0xff0000, this['save_vel_x'] = 0x0, this[_0x4008b8(0xc8f)] = 0x0, this['selfGravity'] = -1.8, this[_0x4008b8(0x181)] = [], this['velMultipliersY'] = [], this['bounceValue'] = 0.9, this['randomStartingIndex'] = 0x0, this['maxStartingFrame'] = 0x17, this[_0x4008b8(0x6d2)][_0x4008b8(0x1585)][_0x4008b8(0x1cf)]['on']('worldbounds', this[_0x4008b8(0x1851)], this), this['TrueWeapon'] = this['weapon'], this[_0x4008b8(0x3b8)] = this[_0x4008b8(0x6d2)][_0x4008b8(0x18bd)][_0x4008b8(0x523)]({
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
                        });
                        for (let _0x53ea71 = 0x0; _0x53ea71 < 0xc; _0x53ea71++) this['velMultipliersX']['push'](0x1 + 0.5 * Math['random']()), this[_0x4008b8(0x373)][_0x4008b8(0x1564)](0x1 + 0.5 * Math[_0x4008b8(0x9ad)]());
                        this[_0x4008b8(0xe22)] = [];
                        for (let _0x47661f = 0x1; _0x47661f < 0x14; _0x47661f++) this[_0x4008b8(0xe22)]['push'](0x2 * _0x47661f);
                        Phaser[_0x4008b8(0x24f)][_0x4008b8(0x82a)][_0x4008b8(0xeec)](this[_0x4008b8(0xe22)]), this['partyAngles'][_0x4008b8(0x2f9)](0x0);
                        let _0x3db968 = new Phaser[(_0x4008b8(0x24f))][(_0x4008b8(0x1551))](-0x1, 0x1),
                            _0x38392d = new Phaser['Math']['Vector2'](0x1, 0x1);
                        this['leftVelocity'] = _0x3db968['normalize'](), this[_0x4008b8(0x194a)] = _0x38392d[_0x4008b8(0x183b)]();
                        let _0x2e9431 = this[_0x4008b8(0x183e)]['generateFrameNames']('vfx', {
                            'start': 0x0,
                            'end': this[_0x4008b8(0x186c)],
                            'zeroPad': 0x4,
                            'prefix': 'image_002_',
                            'suffix': '.png'
                        });
                        this[_0x4008b8(0x183e)][_0x4008b8(0x6a8)]({
                            'key': 'circle',
                            'frames': _0x2e9431,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), _0x2e9431 = this[_0x4008b8(0x183e)][_0x4008b8(0x1756)]('vfx', {
                            'start': 0x0,
                            'end': this['maxStartingFrame'],
                            'zeroPad': 0x4,
                            'prefix': 'image_003_',
                            'suffix': '.png'
                        }), this[_0x4008b8(0x183e)]['create']({
                            'key': 'heart',
                            'frames': _0x2e9431,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), _0x2e9431 = this[_0x4008b8(0x183e)][_0x4008b8(0x1756)]('vfx', {
                            'start': 0x0,
                            'end': this[_0x4008b8(0x186c)],
                            'zeroPad': 0x4,
                            'prefix': 'image_004_',
                            'suffix': '.png'
                        }), this[_0x4008b8(0x183e)][_0x4008b8(0x6a8)]({
                            'key': 'star',
                            'frames': _0x2e9431,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), _0x2e9431 = this[_0x4008b8(0x183e)]['generateFrameNames']('vfx', {
                            'start': 0x0,
                            'end': this['maxStartingFrame'],
                            'zeroPad': 0x4,
                            'prefix': 'image_005_',
                            'suffix': '.png'
                        }), this[_0x4008b8(0x183e)][_0x4008b8(0x6a8)]({
                            'key': 'triangle',
                            'frames': _0x2e9431,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), _0x2e9431 = this[_0x4008b8(0x183e)][_0x4008b8(0x1756)]('vfx', {
                            'start': 0x0,
                            'end': this[_0x4008b8(0x186c)],
                            'zeroPad': 0x4,
                            'prefix': 'image_006_',
                            'suffix': '.png'
                        }), this['anims'][_0x4008b8(0x6a8)]({
                            'key': 'rectangle',
                            'frames': _0x2e9431,
                            'frameRate': 0x10,
                            'repeat': -0x1
                        }), this[_0x4008b8(0x595)] = this[_0x4008b8(0x6d2)][_0x4008b8(0x12a1)][_0x4008b8(0x18bd)]({
                            'targets': this,
                            'angle': 0x167,
                            'duration': 0x3e8 + 0xc8 * Math[_0x4008b8(0x9ad)](),
                            'repeat': -0x1
                        }), this['randomStartingFrame'] = [];
                        for (let _0x576cb8 = 0x0; _0x576cb8 < this[_0x4008b8(0x186c)]; _0x576cb8++) this[_0x4008b8(0x30e)][_0x4008b8(0x1564)](_0x576cb8);
                        Phaser[_0x4008b8(0x24f)]['RND'][_0x4008b8(0xeec)](this['randomStartingFrame']);
                    } ['GetRandomFrame']() {
                        const _0x150d3d = _0x30fd31;
                        return this[_0x150d3d(0x13d0)]++, this[_0x150d3d(0x13d0)] > this[_0x150d3d(0x186c)] && (this['randomStartingIndex'] = 0x0), this['randomStartingFrame'][this[_0x150d3d(0x13d0)]];
                    } ['OnRecycle']() {
                        const _0x1697f7 = _0x30fd31;
                        var _0x29c235;
                        switch (super[_0x1697f7(0x5ce)](), this[_0x1697f7(0x195d)] = 0x0, this[_0x1697f7(0xcf9)][_0x1697f7(0xdf6)](0x8), this['_speed'] = 0x1, this['selfGravity'] = 0x0, null === (_0x29c235 = this[_0x1697f7(0xd2b)]) || void 0x0 === _0x29c235 || _0x29c235['stop'](), this['gravityTween'] = this[_0x1697f7(0x6d2)][_0x1697f7(0x12a1)]['add']({
                                'targets': this,
                                'selfGravity': -0x6 * this['weapon'][_0x1697f7(0x712)],
                                'duration': 0x12c
                            }), this[_0x1697f7(0x8a2)](0.65 * this[_0x1697f7(0x4a1)][_0x1697f7(0x5f5)]), _0x5d131f[_0x1697f7(0xd2c)]['Core'][_0x1697f7(0x6d2)]['time'][_0x1697f7(0x17fb)](this['ExpireTimer']), this[_0x1697f7(0x193c)](!0x0, this[_0x1697f7(0x1310)], this[_0x1697f7(0x1310)]), this['body'][_0x1697f7(0xda7)](_0x5d131f[_0x1697f7(0xd2c)]['Core'][_0x1697f7(0x10f6)]['WorldBoxCollider']), this[_0x1697f7(0xcf9)][_0x1697f7(0x940)] = !0x0, this[_0x1697f7(0x3b8)]['x'] = this['x'] - _0x5d131f[_0x1697f7(0xd2c)]['Core'][_0x1697f7(0x10f6)]['x'], this[_0x1697f7(0x3b8)]['y'] = this['y'] - _0x5d131f[_0x1697f7(0xd2c)]['Core']['Player']['y'], this[_0x1697f7(0x7cd)] = 0xffffff * Math[_0x1697f7(0x9ad)](), this[_0x1697f7(0x3b8)][_0x1697f7(0xe71)] = 0x1, this['alpha'] = 0x1, this[_0x1697f7(0x138f)](), this[_0x1697f7(0x4a1)][_0x1697f7(0x5e3)]) {
                            case 0x1:
                                this['bounceValue'] = 0.5;
                                break;
                            case 0x2:
                            case 0x3:
                                this[_0x1697f7(0x1310)] = 0.6;
                                break;
                            case 0x4:
                            case 0x5:
                                this['bounceValue'] = 0.7;
                                break;
                            case 0x6:
                            case 0x7:
                                this[_0x1697f7(0x1310)] = 0.8;
                                break;
                            default:
                                this[_0x1697f7(0x1310)] = 0.9;
                        }
                        this[_0x1697f7(0x12a3)] = _0x5d131f[_0x1697f7(0xd2c)]['Core']['scene']['time'][_0x1697f7(0x12b8)]({
                            'delay': this[_0x1697f7(0x4a1)][_0x1697f7(0x16c3)],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x4aebe5 = _0x1697f7;
                                _0x5d131f['default']['Core'][_0x4aebe5(0x6d2)][_0x4aebe5(0x915)][_0x4aebe5(0x17fb)](this['ExpireTimer']), this[_0x4aebe5(0x14e3)]();
                            }
                        });
                    } ['ClearObjectsHit']() {
                        const _0x282c73 = _0x30fd31;
                        this[_0x282c73(0x12b4)] && (this[_0x282c73(0x12b4)] = !0x1, this['clearObjectTime'] = 0x0, this[_0x282c73(0x990)] = []);
                    } ['SetType'](_0x30ea8e) {
                        const _0x44d9e2 = _0x30fd31;
                        switch (_0x30ea8e) {
                            case 0x0: {
                                this[_0x44d9e2(0x1b4)] = 0x0, this[_0x44d9e2(0x3d8)] = 0xffff, this[_0x44d9e2(0xb1f)] = 0x1, this[_0x44d9e2(0x183e)][_0x44d9e2(0x902)]({
                                    'key': 'star',
                                    'startFrame': this[_0x44d9e2(0x732)](),
                                    'frameRate': 0x10,
                                    'repeat': -0x1
                                });
                                let _0x5b8622 = this[_0x44d9e2(0x131f)]['GetRandomStarColor']();
                                this['color'] = _0x5b8622, this[_0x44d9e2(0xb34)](_0x5b8622);
                            }
                            break;
                            case 0x1: {
                                this['bounces'] = 0x1, this['penetrating'] = this['weapon'][_0x44d9e2(0x942)], this['_speed'] = 0.8, this['anims']['play']({
                                    'key': 'heart',
                                    'startFrame': this['GetRandomFrame'](),
                                    'frameRate': 0x10,
                                    'repeat': -0x1
                                });
                                let _0x5eeecb = this['TrueWeapon'][_0x44d9e2(0x1922)]();
                                this[_0x44d9e2(0x7cd)] = _0x5eeecb, this['setTint'](_0x5eeecb);
                            }
                            break;
                            case 0x2: {
                                this[_0x44d9e2(0x1b4)] = 0x0, this['penetrating'] = this[_0x44d9e2(0x4a1)]['PAmount'], this[_0x44d9e2(0xb1f)] = 0x1, this[_0x44d9e2(0x183e)][_0x44d9e2(0x902)]({
                                    'key': 'triangle',
                                    'startFrame': this['GetRandomFrame'](),
                                    'frameRate': 0x10,
                                    'repeat': -0x1
                                });
                                let _0x53a136 = this[_0x44d9e2(0x131f)][_0x44d9e2(0x4e7)]();
                                this[_0x44d9e2(0x7cd)] = _0x53a136, this['setTint'](_0x53a136);
                            }
                            break;
                            case 0x3: {
                                this[_0x44d9e2(0x1b4)] = this[_0x44d9e2(0x4a1)][_0x44d9e2(0x942)], this['penetrating'] = 0x0, this['_speed'] = 1.2, this[_0x44d9e2(0x183e)]['play']({
                                    'key': 'circle',
                                    'startFrame': this[_0x44d9e2(0x732)](),
                                    'frameRate': 0x10,
                                    'repeat': -0x1
                                });
                                let _0x31abf7 = this['TrueWeapon']['GetRandomCircleColor']();
                                this[_0x44d9e2(0x7cd)] = _0x31abf7, this[_0x44d9e2(0xb34)](_0x31abf7);
                            }
                        }
                    } ['pickType']() {
                        const _0x387c66 = _0x30fd31;
                        let _0x49538b = Phaser[_0x387c66(0x24f)][_0x387c66(0x82a)]['pick']([0x0, 0x1, 0x2, 0x3]);
                        this['SetType'](_0x49538b);
                    } ['OnHasHitWall'](_0x5f242d) {
                        const _0x270c38 = _0x30fd31;
                        this['save_vel_x'] *= _0x5f242d[_0x270c38(0x18c9)] || _0x5f242d[_0x270c38(0x1429)] ? -this[_0x270c38(0x1310)] : this[_0x270c38(0x1310)], this['save_vel_y'] *= _0x5f242d['faceTop'] || _0x5f242d['faceBottom'] ? -this['bounceValue'] : this[_0x270c38(0x1310)], this[_0x270c38(0x19c8)](this['save_vel_x'], this[_0x270c38(0xc8f)]), this['ClearObjectsHit']();
                    } ['SetTarget']() {
                        const _0x2c5c29 = _0x30fd31;
                        let _0x256484 = (this[_0x2c5c29(0x131f)][_0x2c5c29(0x194c)] ? _0x5d131f['default'][_0x2c5c29(0x1043)]['Player'][_0x2c5c29(0x4d4)] : !_0x5d131f['default']['Core'][_0x2c5c29(0x10f6)][_0x2c5c29(0x4d4)]) ? 0xd2 : -0x3c;
                        _0x256484 = Phaser[_0x2c5c29(0x24f)][_0x2c5c29(0x54d)](_0x256484), this[_0x2c5c29(0x6d2)]['physics'][_0x2c5c29(0x18fc)](_0x256484 + Phaser['Math'][_0x2c5c29(0x54d)](this[_0x2c5c29(0xe22)][this['indexInWeapon'] % this[_0x2c5c29(0xe22)][_0x2c5c29(0xed9)]]), this['TrueSpeed'], this['body']['velocity']);
                        var _0x2c5605 = Phaser[_0x2c5c29(0x24f)]['Vector2'][_0x2c5c29(0x7bf)];
                        this[_0x2c5c29(0x9b5)](Phaser[_0x2c5c29(0x24f)][_0x2c5c29(0x1470)](Math['atan2'](this[_0x2c5c29(0xcf9)][_0x2c5c29(0xf4e)]['y'] - _0x2c5605['y'], this['body'][_0x2c5c29(0xf4e)]['x'] - _0x2c5605['x']))), this[_0x2c5c29(0xcf9)][_0x2c5c29(0xf4e)]['x'] *= Phaser['Math'][_0x2c5c29(0x82a)]['pick'](this['velMultipliersX']);
                    } ['Bounce'](_0x27c484) {
                        const _0x2b0e76 = _0x30fd31;
                        this['body'] === _0x27c484 && this[_0x2b0e76(0x1197)]();
                    } ['FadeOut']() {
                        const _0xf8ea29 = _0x30fd31;
                        this[_0xf8ea29(0x6d2)]['tweens']['add']({
                            'targets': [this[_0xf8ea29(0x3b8)], this],
                            'alpha': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x72de68 = _0xf8ea29;
                                this[_0x72de68(0x14fb)]();
                            }
                        }), this[_0xf8ea29(0x4a1)][_0xf8ea29(0x1007)] && this[_0xf8ea29(0x4a1)][_0xf8ea29(0x155a)](this['x'], this['y']);
                    } ['DeSpawn']() {
                        const _0x1035ba = _0x30fd31;
                        _0x5d131f[_0x1035ba(0xd2c)]['Core'][_0x1035ba(0x6d2)]['time']['removeEvent'](this[_0x1035ba(0x12a3)]), super['DeSpawn']();
                    }
                    get['customAngle']() {
                        const _0x2c1db5 = _0x30fd31;
                        return Phaser['Math']['RadToDeg'](this[_0x2c1db5(0x7c6)](this[_0x2c1db5(0xcf9)][_0x2c1db5(0xf4e)]));
                    } ['Update'](_0x3bc867) {
                        const _0x5383fc = _0x30fd31;
                        this[_0x5383fc(0x3b8)]['setDepth'](this['y'] - _0x5d131f[_0x5383fc(0xd2c)]['Core'][_0x5383fc(0x10f6)]['y'] + 0.5 * this[_0x5383fc(0x6d2)][_0x5383fc(0x12f9)]['height']);
                        let _0xdb6e3c = Math['ceil'](_0x3bc867 / 0x10);
                        for (let _0x2cea44 = 0x0; _0x2cea44 < _0xdb6e3c; _0x2cea44++) this[_0x5383fc(0x12fc)]();
                        this[_0x5383fc(0x643)] += _0x3bc867, this['clearObjectTime'] >= this[_0x5383fc(0x4a1)][_0x5383fc(0xcd5)] ? this['canClearObjectsHit'] = !0x0 : this['canClearObjectsHit'] = !0x1, this['save_vel_x'] = 0x0 == this['body'][_0x5383fc(0xf4e)]['x'] ? this['save_vel_x'] : this[_0x5383fc(0xcf9)][_0x5383fc(0xf4e)]['x'], this['save_vel_y'] = 0x0 == this[_0x5383fc(0xcf9)][_0x5383fc(0xf4e)]['y'] ? this[_0x5383fc(0xc8f)] : this[_0x5383fc(0xcf9)][_0x5383fc(0xf4e)]['y'], this['body'][_0x5383fc(0xf4e)]['y'] -= this[_0x5383fc(0x4c8)];
                    } ['AngleFromVelocityRadians'](_0x1931e0) {
                        const _0x543ae5 = _0x30fd31;
                        var _0x481a3d = Phaser['Math']['Vector2'][_0x543ae5(0x7bf)];
                        return Math['atan2'](_0x1931e0['y'] - _0x481a3d['y'], _0x1931e0['x'] - _0x481a3d['x']);
                    } ['clearPositions']() {
                        const _0x4c50fa = _0x30fd31;
                        this[_0x4c50fa(0xc9f)] = [];
                    } ['trailUpdate']() {
                        const _0x4bd612 = _0x30fd31;
                        if (this[_0x4bd612(0xd40)]) this[_0x4bd612(0xc9f)][_0x4bd612(0x2f9)]([this['x'], this['y'] + 0x18]), this[_0x4bd612(0xc9f)][_0x4bd612(0xed9)] > this[_0x4bd612(0x617)] && this[_0x4bd612(0xc9f)][_0x4bd612(0xcfe)]();
                        else {
                            if (this['positions'][_0x4bd612(0xed9)] > this[_0x4bd612(0x617)] - 0xa) {
                                for (var _0x13fd3b = 0x0; _0x13fd3b < this[_0x4bd612(0xc9f)][_0x4bd612(0xed9)]; _0x13fd3b++) _0x13fd3b > this['maxPositions'] - 0xa && this[_0x4bd612(0xc9f)][_0x4bd612(0x16ea)](_0x13fd3b, 0x1);
                            }
                            this['positions']['length'] > 0x1 ? (this[_0x4bd612(0xc9f)]['unshift']([this['x'], this['y'] + 0x18]), this[_0x4bd612(0xc9f)][_0x4bd612(0xcfe)]()) : this[_0x4bd612(0x138f)]();
                        }
                        for (var _0x13fd3b of (this[_0x4bd612(0x3b8)][_0x4bd612(0x159)](), this[_0x4bd612(0x3b8)][_0x4bd612(0xfcb)](), Array(this[_0x4bd612(0xc9f)]['length'])[_0x4bd612(0x204)]())) 0x0 != _0x13fd3b && (this['trail'][_0x4bd612(0x191d)](0x2, this[_0x4bd612(0x7cd)], 0x1 / (_0x13fd3b / 0x14)), this['trail'][_0x4bd612(0xebe)](this[_0x4bd612(0xc9f)][_0x13fd3b - 0x1][0x0], this['positions'][_0x13fd3b - 0x1][0x1]), this['trail']['lineTo'](this[_0x4bd612(0xc9f)][_0x13fd3b][0x0], this['positions'][_0x13fd3b][0x1]));
                        this[_0x4bd612(0x3b8)][_0x4bd612(0x13c1)](), this['trail'][_0x4bd612(0x194f)](), this[_0x4bd612(0x3b8)][_0x4bd612(0xfcb)]();
                        for (let _0x16dfcc = 0x0; _0x16dfcc < 0x19; _0x16dfcc++) 0x0 != _0x16dfcc && this[_0x4bd612(0xc9f)][_0x16dfcc] && this[_0x4bd612(0xc9f)][_0x16dfcc - 0x1] && (this[_0x4bd612(0x3b8)][_0x4bd612(0x191d)](0x1, 0xbbbbbb, 0.8 / (_0x16dfcc / 0x14)), this['trail']['moveTo'](this[_0x4bd612(0xc9f)][_0x16dfcc - 0x1][0x0], this['positions'][_0x16dfcc - 0x1][0x1]), this[_0x4bd612(0x3b8)]['lineTo'](this['positions'][_0x16dfcc][0x0], this[_0x4bd612(0xc9f)][_0x16dfcc][0x1]));
                        this['trail'][_0x4bd612(0x13c1)](), this[_0x4bd612(0x3b8)]['strokePath'](), this['trail']['blendMode'] = _0xa3889b[_0x4bd612(0x10fc)][_0x4bd612(0x1811)];
                    } ['OnHasHitAnObject'](_0x3f9e4c) {
                        const _0x256772 = _0x30fd31;
                        if (!_0x3f9e4c[_0x256772(0xdae)]) {
                            if (this[_0x256772(0x1b4)] > 0x0) return this['bounces']--, this[_0x256772(0x6dc)] *= -0x1, this[_0x256772(0xc8f)] *= -0x1, this[_0x256772(0x19c8)](this[_0x256772(0x6dc)], this['save_vel_y']), void this[_0x256772(0x1197)]();
                            this[_0x256772(0x3d8)]--, this[_0x256772(0x3d8)] <= 0x0 && this[_0x256772(0x14e3)]();
                        }
                    }
                }
                _0x4bcb2b['B_Party'] = _0x589c0d, _0x4bcb2b['default'] = _0x589c0d;
            };
