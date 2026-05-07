// Module 0xd459
// Args: _0x542bac, _0x539196, _0x593103

export default (_0x542bac, _0x539196, _0x593103) => {
                'use strict';
                const _0x302cf6 = a0_0x6932;
                var _0x1019d0 = this && this['__importDefault'] || function(_0x36a642) {
                    const _0x18a6e0 = _0x302cf6;
                    return _0x36a642 && _0x36a642[_0x18a6e0(0x16f1)] ? _0x36a642 : {
                        'default': _0x36a642
                    };
                };
                Object['defineProperty'](_0x539196, '__esModule', {
                    'value': !0x0
                }), _0x539196['B_Diamond'] = void 0x0;
                const _0x35176d = _0x1019d0(_0x593103(0xa14d)),
                    _0x430443 = _0x1019d0(_0x593103(0x5f07)),
                    _0x3c78ce = _0x593103(0x18304),
                    _0x50830f = _0x1019d0(_0x593103(0x1fd7)),
                    _0x3be775 = _0x1019d0(_0x593103(0x5103)),
                    _0x2c4ec5 = _0x1019d0(_0x593103(0x9b68));
                class _0x3816b7 extends _0x35176d['default'] {
                    constructor(_0x577f51, _0x380033, _0x486dd5, _0x4713fe, _0x48c3cf) {
                        const _0x15b090 = _0x302cf6;
                        super(_0x577f51, _0x380033, _0x486dd5, 'items', 'Diamond2.png', _0x4713fe, _0x48c3cf), this['bouncePositions'] = new Array(), this[_0x15b090(0x195d)] = 0x0, this[_0x15b090(0xc9f)] = [], this[_0x15b090(0x617)] = 0x64, this[_0x15b090(0x7cd)] = 0xff0000, this[_0x15b090(0x6dc)] = 0x0, this['save_vel_y'] = 0x0, this[_0x15b090(0x6d2)][_0x15b090(0x1585)]['world']['on']('worldbounds', this[_0x15b090(0x1851)], this), this[_0x15b090(0x3b8)] = this[_0x15b090(0x6d2)][_0x15b090(0x18bd)][_0x15b090(0x523)]({
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
                    } ['OnRecycle']() {
                        const _0x3fa54c = _0x302cf6;
                        super['OnRecycle'](), this[_0x3fa54c(0x195d)] = 0x0, this['body'][_0x3fa54c(0xdf6)](0x8), this['_speed'] = 1.1, this['setScale'](_0x3be775['default']['PixelScale'] * this[_0x3fa54c(0x4a1)]['PArea']), _0x430443['default']['Core']['scene'][_0x3fa54c(0x915)][_0x3fa54c(0x17fb)](this[_0x3fa54c(0x12a3)]), this['setCollideWorldBounds'](!0x0, 0x1, 0x1), this[_0x3fa54c(0xcf9)]['setBoundsRectangle'](_0x430443[_0x3fa54c(0xd2c)]['Core'][_0x3fa54c(0x10f6)][_0x3fa54c(0xc00)]), this['body'][_0x3fa54c(0x940)] = !0x0, this[_0x3fa54c(0x3b8)]['x'] = this['x'] - _0x430443['default'][_0x3fa54c(0x1043)][_0x3fa54c(0x10f6)]['x'], this[_0x3fa54c(0x3b8)]['y'] = this['y'] - _0x430443['default'][_0x3fa54c(0x1043)][_0x3fa54c(0x10f6)]['y'], this['color'] = 0xffffff * Math['random'](), this['trail'][_0x3fa54c(0xe71)] = 0x1, this['alpha'] = 0x1, this[_0x3fa54c(0x138f)](), this[_0x3fa54c(0x12a3)] = _0x430443[_0x3fa54c(0xd2c)][_0x3fa54c(0x1043)][_0x3fa54c(0x6d2)]['time']['addEvent']({
                            'delay': this['weapon']['PDuration'],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x2b2f65 = _0x3fa54c;
                                _0x430443['default'][_0x2b2f65(0x1043)]['scene'][_0x2b2f65(0x915)]['removeEvent'](this['ExpireTimer']), this[_0x2b2f65(0x14e3)]();
                            }
                        }), this['ExpireTimer']['name'] = 'DI Expire', _0x430443['default'][_0x3fa54c(0x1267)][_0x3fa54c(0x7f6)](_0x50830f['default'][_0x3fa54c(0x9ca)], {
                            'detune': -0x64 * this['indexInWeapon'],
                            'volume': 0.15
                        }, 0xc8, 0xa);
                    } ['OnHasHitWall'](_0x5a2eb8) {
                        const _0x40d2bc = _0x302cf6;
                        this[_0x40d2bc(0x6dc)] *= _0x5a2eb8[_0x40d2bc(0x18c9)] || _0x5a2eb8['faceLeft'] ? -0x1 : 0x1, this['save_vel_y'] *= _0x5a2eb8[_0x40d2bc(0x10d7)] || _0x5a2eb8['faceBottom'] ? -0x1 : 0x1, this[_0x40d2bc(0x19c8)](this[_0x40d2bc(0x6dc)], this[_0x40d2bc(0xc8f)]), this['objectsHit'] = [];
                    } ['SetNullTarget']() {
                        const _0x3c416e = _0x302cf6;
                        let _0x56a36e = _0x430443[_0x3c416e(0xd2c)]['Core'][_0x3c416e(0x10f6)][_0x3c416e(0x115d)];
                        0x0 === _0x56a36e['x'] && 0x0 === _0x56a36e['y'] && (_0x56a36e['x'] = 0x1), _0x56a36e = _0x56a36e['normalize'](), this['SetTarget'](_0x56a36e);
                    } ['SetTarget'](_0x1f0158) {
                        const _0x39df33 = _0x302cf6;
                        super[_0x39df33(0x3b9)](_0x1f0158);
                        var _0x24928b = this[_0x39df33(0xf02)](this[_0x39df33(0x18a7)]),
                            _0x3f1025 = [0x0, 0xa, -0xa, 0x14, -0x14, 0x1e, -0x1e, 0x28, -0x28];
                        this[_0x39df33(0x6d2)]['physics']['velocityFromRotation'](_0x24928b + Phaser['Math'][_0x39df33(0x54d)](_0x3f1025[this[_0x39df33(0x19c4)] % _0x3f1025[_0x39df33(0xed9)]]), this[_0x39df33(0xfbb)], this['body'][_0x39df33(0xf4e)]);
                        var _0x103923 = Phaser['Math']['Vector2']['RIGHT'];
                        this['setAngle'](Phaser['Math'][_0x39df33(0x1470)](Math[_0x39df33(0x326)](this[_0x39df33(0xcf9)][_0x39df33(0xf4e)]['y'] - _0x103923['y'], this[_0x39df33(0xcf9)][_0x39df33(0xf4e)]['x'] - _0x103923['x'])));
                    } ['Bounce'](_0x508d81) {
                        const _0x4239c2 = _0x302cf6;
                        this[_0x4239c2(0xcf9)] === _0x508d81 && (this[_0x4239c2(0x990)] = []);
                    } ['FadeOut']() {
                        const _0x3aa321 = _0x302cf6;
                        this['scene'][_0x3aa321(0x12a1)]['add']({
                            'targets': [this['trail'], this],
                            'alpha': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear',
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        }), this['weapon']['explodeOnExpire'] && this[_0x3aa321(0x4a1)]['SpawnExplosionAt'](this['x'], this['y']);
                    } ['DeSpawn']() {
                        super['DeSpawn']();
                    }
                    get['customAngle']() {
                        const _0x544860 = _0x302cf6;
                        return Phaser[_0x544860(0x24f)][_0x544860(0x1470)](this[_0x544860(0x7c6)](this[_0x544860(0xcf9)][_0x544860(0xf4e)]));
                    } ['Update'](_0x1d9d36) {
                        const _0x16e9de = _0x302cf6;
                        this['trail']['setDepth'](this['y'] - _0x430443['default'][_0x16e9de(0x1043)][_0x16e9de(0x10f6)]['y'] + 0.5 * this[_0x16e9de(0x6d2)][_0x16e9de(0x12f9)]['height']);
                        let _0x181fdd = Math['ceil'](_0x1d9d36 / 0x10);
                        for (let _0x17460a = 0x0; _0x17460a < _0x181fdd; _0x17460a++) this['trailUpdate']();
                        this[_0x16e9de(0x6dc)] = 0x0 == this[_0x16e9de(0xcf9)][_0x16e9de(0xf4e)]['x'] ? this['save_vel_x'] : this[_0x16e9de(0xcf9)][_0x16e9de(0xf4e)]['x'], this['save_vel_y'] = 0x0 == this[_0x16e9de(0xcf9)]['velocity']['y'] ? this[_0x16e9de(0xc8f)] : this[_0x16e9de(0xcf9)][_0x16e9de(0xf4e)]['y'];
                    } ['AngleFromVelocityRadians'](_0x332be3) {
                        const _0x377788 = _0x302cf6;
                        var _0x574766 = Phaser[_0x377788(0x24f)]['Vector2'][_0x377788(0x7bf)];
                        return Math[_0x377788(0x326)](_0x332be3['y'] - _0x574766['y'], _0x332be3['x'] - _0x574766['x']);
                    } ['clearPositions']() {
                        const _0x31eee8 = _0x302cf6;
                        this[_0x31eee8(0xc9f)] = [];
                    } ['trailUpdate']() {
                        const _0x3ae401 = _0x302cf6,
                            _0x66288a = 0x2 * _0x3be775[_0x3ae401(0xd2c)][_0x3ae401(0x15db)] * this[_0x3ae401(0x4a1)][_0x3ae401(0x5f5)];
                        if (this[_0x3ae401(0xd40)]) this[_0x3ae401(0xc9f)][_0x3ae401(0x2f9)]([this['x'], this['y']]), this[_0x3ae401(0xc9f)][_0x3ae401(0xed9)] > this['maxPositions'] && this['positions']['pop']();
                        else {
                            if (this['positions']['length'] > this['maxPositions'] - 0xa) {
                                for (var _0x30cb8c = 0x0; _0x30cb8c < this['positions']['length']; _0x30cb8c++) _0x30cb8c > this[_0x3ae401(0x617)] - 0xa && this['positions']['splice'](_0x30cb8c, 0x1);
                            }
                            this[_0x3ae401(0xc9f)]['length'] > 0x1 ? (this[_0x3ae401(0xc9f)]['unshift']([this['x'], this['y']]), this['positions'][_0x3ae401(0xcfe)]()) : this['clearPositions']();
                        }
                        for (var _0x30cb8c of (this[_0x3ae401(0x3b8)][_0x3ae401(0x159)](), this[_0x3ae401(0x3b8)][_0x3ae401(0xfcb)](), Array(this[_0x3ae401(0xc9f)][_0x3ae401(0xed9)])[_0x3ae401(0x204)]())) 0x0 != _0x30cb8c && (this[_0x3ae401(0x3b8)]['lineStyle'](_0x66288a, this[_0x3ae401(0x7cd)], 0x1 / (_0x30cb8c / 0x14)), this['trail'][_0x3ae401(0xebe)](this[_0x3ae401(0xc9f)][_0x30cb8c - 0x1][0x0], this['positions'][_0x30cb8c - 0x1][0x1]), this[_0x3ae401(0x3b8)][_0x3ae401(0xc2c)](this['positions'][_0x30cb8c][0x0], this[_0x3ae401(0xc9f)][_0x30cb8c][0x1]));
                        this['trail'][_0x3ae401(0x13c1)](), this['trail'][_0x3ae401(0x194f)](), this['trail']['beginPath']();
                        for (let _0x56b528 = 0x0; _0x56b528 < 0x32; _0x56b528++) 0x0 != _0x56b528 && this['positions'][_0x56b528] && this['positions'][_0x56b528 - 0x1] && (this[_0x3ae401(0x3b8)][_0x3ae401(0x191d)](0.5 * _0x66288a, 0xffffff, 0.8 / (_0x56b528 / 0x14)), this['trail'][_0x3ae401(0xebe)](this[_0x3ae401(0xc9f)][_0x56b528 - 0x1][0x0], this['positions'][_0x56b528 - 0x1][0x1]), this[_0x3ae401(0x3b8)][_0x3ae401(0xc2c)](this[_0x3ae401(0xc9f)][_0x56b528][0x0], this[_0x3ae401(0xc9f)][_0x56b528][0x1]));
                        this[_0x3ae401(0x3b8)]['closePath'](), this[_0x3ae401(0x3b8)][_0x3ae401(0x194f)](), this[_0x3ae401(0x3b8)][_0x3ae401(0xba4)] = _0x3c78ce[_0x3ae401(0x10fc)][_0x3ae401(0x1811)];
                    } ['OnHasHitAnObject'](_0xc6f3fa) {
                        const _0x3f5b55 = _0x302cf6;
                        _0xc6f3fa[_0x3f5b55(0xdae)] || (_0x430443['default'][_0x3f5b55(0x1043)]['Arcanas'][_0x3f5b55(0x15e7)]['indexOf'](_0x2c4ec5['default'][_0x3f5b55(0x172d)]) > -0x1 && this[_0x3f5b55(0x127c)](_0xc6f3fa), this[_0x3f5b55(0x195d)] += 0x1);
                    }
                }
                _0x539196['B_Diamond'] = _0x3816b7, _0x539196['default'] = _0x3816b7;
            };
