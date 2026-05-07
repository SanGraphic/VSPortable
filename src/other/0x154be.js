// Module 0x154be
// Args: _0x3465e4, _0x59dfd2, _0x57e0ef

export default (_0x3465e4, _0x59dfd2, _0x57e0ef) => {
                'use strict';
                const _0x263a6b = a0_0x6932;
                var _0x3dbfe2 = this && this['__importDefault'] || function(_0x290a88) {
                    return _0x290a88 && _0x290a88['__esModule'] ? _0x290a88 : {
                        'default': _0x290a88
                    };
                };
                Object['defineProperty'](_0x59dfd2, '__esModule', {
                    'value': !0x0
                });
                const _0x3cfccc = _0x3dbfe2(_0x57e0ef(0x15abc)),
                    _0x233ca2 = _0x3dbfe2(_0x57e0ef(0x5f07)),
                    _0xee521 = _0x3dbfe2(_0x57e0ef(0x1166a));
                class _0x11ab9f extends _0xee521['default'] {
                    constructor(_0x4a38ec, _0x45f383, _0x339ac0, _0x40d72d) {
                        const _0x3db1fd = _0x263a6b;
                        super(_0x4a38ec, _0x45f383, _0x339ac0, _0x40d72d), this[_0x3db1fd(0xcd3)] = this[_0x3db1fd(0x6d2)]['add'][_0x3db1fd(0x105b)](_0x45f383, _0x339ac0, 'enemies2', 'trinaW_01.png'), this['snakes'] = this['scene'][_0x3db1fd(0x18bd)]['sprite'](_0x45f383, _0x339ac0, 'enemies2', 'trinaS_01.png'), this[_0x3db1fd(0xdc2)] = this[_0x3db1fd(0x6d2)]['add'][_0x3db1fd(0x105b)](_0x45f383, _0x339ac0, 'enemies2', 'trinaL_01.png');
                        let _0x64ace0 = this[_0x3db1fd(0x183e)][_0x3db1fd(0x1756)]('enemies2', {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x2,
                            'prefix': 'trinaW_',
                            'suffix': '.png'
                        });
                        this['wings'][_0x3db1fd(0x183e)][_0x3db1fd(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x64ace0,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        }), _0x64ace0 = this[_0x3db1fd(0x183e)][_0x3db1fd(0x1756)]('enemies2', {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x2,
                            'prefix': 'trinaS_',
                            'suffix': '.png'
                        }), this[_0x3db1fd(0xdde)]['anims'][_0x3db1fd(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x64ace0,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        }), _0x64ace0 = this[_0x3db1fd(0x183e)]['generateFrameNames']('enemies2', {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x2,
                            'prefix': 'trinaL_',
                            'suffix': '.png'
                        }), this['legs'][_0x3db1fd(0x183e)]['create']({
                            'key': 'idle',
                            'frames': _0x64ace0,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        }), this['scene']['tweens']['add']({
                            'targets': this[_0x3db1fd(0xdc2)],
                            'angle': 0x167,
                            'duration': 0x3e8,
                            'repeat': -0x1
                        }), this[_0x3db1fd(0xcd3)][_0x3db1fd(0x183e)][_0x3db1fd(0x902)]('idle'), this['snakes']['anims'][_0x3db1fd(0x902)]('idle'), this[_0x3db1fd(0xdc2)]['anims'][_0x3db1fd(0x902)]('idle'), this[_0x3db1fd(0x177d)] = !0x1, this[_0x3db1fd(0xe89)] = 0x0;
                    } ['OnRecycle']() {
                        const _0x24f9f2 = _0x263a6b;
                        super['OnRecycle'](), this['UpdateSprites'](), this['wings'][_0x24f9f2(0x35a)] = !0x0, this[_0x24f9f2(0xdde)][_0x24f9f2(0x35a)] = !0x0, this[_0x24f9f2(0xdc2)][_0x24f9f2(0x35a)] = !0x0, this['_defaultSpeed'] = _0x3cfccc['default'][this['enemyType']][0x0]['speed'];
                    } ['Update'](_0x2075fd = 0x0) {
                        const _0x12c3ea = _0x263a6b;
                        this['speed'] = this[_0x12c3ea(0x1b1c)] * this['activated'];
                        let _0x256d24 = new Phaser[(_0x12c3ea(0x24f))]['Vector2'](this['x'], this['y']),
                            _0xca0acf = new Phaser['Math'][(_0x12c3ea(0x1551))](_0x233ca2[_0x12c3ea(0xd2c)][_0x12c3ea(0x1043)]['Player']['x'], _0x233ca2['default']['Core']['Player']['y']);
                        _0x256d24['distance'](_0xca0acf) < 0x400 && (this[_0x12c3ea(0xe89)] = 0x1), super['Update'](_0x2075fd), this[_0x12c3ea(0x137b)]();
                    } ['UpdateSprites']() {
                        const _0x4d81df = _0x263a6b;
                        this['wings'][_0x4d81df(0x4d4)] = this['snakes'][_0x4d81df(0x4d4)] = this[_0x4d81df(0xdc2)]['flipX'] = this['flipX'], this[_0x4d81df(0xcd3)][_0x4d81df(0x3a8)] = this[_0x4d81df(0xdde)][_0x4d81df(0x3a8)] = this[_0x4d81df(0xdc2)][_0x4d81df(0x3a8)] = this['scaleX'], this[_0x4d81df(0xcd3)]['scaleY'] = this['snakes']['scaleY'] = this[_0x4d81df(0xdc2)]['scaleY'] = this['scaleY'], this[_0x4d81df(0xcd3)][_0x4d81df(0xd96)] = this[_0x4d81df(0xdde)]['angle'] = this['angle'], this[_0x4d81df(0xcd3)]['originX'] = this['snakes']['originX'] = this[_0x4d81df(0x612)], this[_0x4d81df(0xcd3)][_0x4d81df(0x564)] = this['snakes'][_0x4d81df(0x564)] = this['originY'], this[_0x4d81df(0xcd3)]['x'] = this[_0x4d81df(0xdde)]['x'] = this[_0x4d81df(0xdc2)]['x'] = this['x'], this['wings']['y'] = this['y'], this['snakes']['y'] = this['y'] + 0x4 * this[_0x4d81df(0x1721)], this['legs']['y'] = this['y'] - 0xc * this[_0x4d81df(0x1721)], this[_0x4d81df(0xdde)][_0x4d81df(0x16c6)] = this[_0x4d81df(0x16c6)] - 0x1, this[_0x4d81df(0xdc2)][_0x4d81df(0x16c6)] = this[_0x4d81df(0x16c6)] - 0x2, this[_0x4d81df(0xcd3)]['depth'] = this['depth'] - 0x3, this['legs']['angle'] *= this[_0x4d81df(0x4d4)] ? 0x1 : -0x1;
                    } ['Disappear']() {
                        const _0x1c0a22 = _0x263a6b;
                        super['Disappear'](), this[_0x1c0a22(0xcd3)][_0x1c0a22(0x35a)] = !0x1, this['snakes'][_0x1c0a22(0x35a)] = !0x1, this[_0x1c0a22(0xdc2)][_0x1c0a22(0x35a)] = !0x1;
                    } ['Die']() {
                        const _0x1438be = _0x263a6b;
                        super['Die'](), this['wings']['visible'] = !0x1, this[_0x1438be(0xdde)][_0x1438be(0x35a)] = !0x1, this[_0x1438be(0xdc2)][_0x1438be(0x35a)] = !0x1;
                    } ['DeSpawn']() {
                        const _0x37bfa3 = _0x263a6b;
                        super['DeSpawn'](), this[_0x37bfa3(0xcd3)]['visible'] = !0x1, this['snakes']['visible'] = !0x1, this[_0x37bfa3(0xdc2)][_0x37bfa3(0x35a)] = !0x1;
                    }
                }
                _0x59dfd2['default'] = _0x11ab9f;
            };
