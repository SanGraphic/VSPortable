// Module 0xbd7c
// Args: _0x4f5672, _0x1cd706, _0x49ea7c

export default (_0x4f5672, _0x1cd706, _0x49ea7c) => {
                'use strict';
                const _0xe5fef1 = a0_0x6932;
                var _0x1d8404 = this && this['__importDefault'] || function(_0x52a74d) {
                    return _0x52a74d && _0x52a74d['__esModule'] ? _0x52a74d : {
                        'default': _0x52a74d
                    };
                };
                Object['defineProperty'](_0x1cd706, '__esModule', {
                    'value': !0x0
                }), _0x1cd706['B_SilverWind'] = _0x1cd706['LineObject'] = void 0x0;
                const _0x5134a2 = _0x1d8404(_0x49ea7c(0xa14d)),
                    _0x44ef1a = _0x1d8404(_0x49ea7c(0x5f07)),
                    _0x46ad05 = _0x49ea7c(0x18304),
                    _0x505ec6 = _0x1d8404(_0x49ea7c(0x1fd7)),
                    _0x458650 = _0x1d8404(_0x49ea7c(0x5103));
                class _0x3c5ed0 {
                    constructor() {
                        this['active'] = !0x1;
                    }
                }
                _0x1cd706['LineObject'] = _0x3c5ed0;
                class _0x3a6b26 extends _0x5134a2['default'] {
                    constructor(_0x1491bf, _0x5e27d1, _0x1311b6, _0x3feb18, _0x17fb92) {
                        const _0x1cd094 = _0xe5fef1;
                        super(_0x1491bf, _0x5e27d1, _0x1311b6, 'vfx', 'leaf0001.png', _0x3feb18, _0x17fb92), this['positions'] = [], this[_0x1cd094(0x617)] = 0x64, this[_0x1cd094(0x7cd)] = 0xff0000, this['colors'] = [0xeeeeee, 0xffff, 0xff], this['tints'] = [0xffffff], this[_0x1cd094(0x1791)] = ['PfxHoly1.png', 'PfxHoly2.png'], this[_0x1cd094(0xe4f)] = 0x0, this['IsInStartingPosition'] = !0x0, this['trailPool'] = [], this['trailFadeDuration'] = 0x2ee, this['trailLengthDuration'] = 0x0, this['largestPoolCall'] = 0x0, this[_0x1cd094(0x3b8)] = new Phaser[(_0x1cd094(0xbf2))][(_0x1cd094(0x11dc))](this['scene']), this[_0x1cd094(0x11c7)](_0x46ad05[_0x1cd094(0x10fc)]['ADD']), this[_0x1cd094(0x3b8)]['blendMode'] = _0x46ad05['BlendModes'][_0x1cd094(0x1811)], this[_0x1cd094(0x6d2)][_0x1cd094(0x18bd)]['existing'](this[_0x1cd094(0x3b8)]), this[_0x1cd094(0x611)] = this[_0x1cd094(0x6d2)][_0x1cd094(0x18bd)][_0x1cd094(0x1791)]('vfx'), this['PfxEmitter'] = this['PfxManager']['createEmitter']({
                            'frame': this[_0x1cd094(0x1791)],
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'quantity': 0x1,
                            'lifespan': 0x3e8,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x1
                        });
                        var _0x2be268 = new Array();
                        for (let _0x37b603 = 0x0; _0x37b603 < 0x14; _0x37b603++) {
                            var _0x2b6639 = 'leaf' + String(_0x37b603)['padStart'](0x4, '0') + '.png';
                            _0x2be268[_0x1cd094(0x1564)]({
                                'key': 'vfx',
                                'frame': _0x2b6639
                            });
                        }
                        this[_0x1cd094(0x183e)]['create']({
                            'key': 'spin',
                            'frames': _0x2be268,
                            'frameRate': 0x1e,
                            'repeat': -0x1
                        }), this['anims']['play']('spin'), this[_0x1cd094(0x11c7)](_0x46ad05[_0x1cd094(0x10fc)]['ADD']), this['createLinePool']();
                    } ['OnRecycle']() {
                        const _0x24ed71 = _0xe5fef1;
                        var _0x33037d;
                        super[_0x24ed71(0x5ce)](), this['previousPos'] = null, this[_0x24ed71(0x125b)][_0x24ed71(0x381)](this['particles']), this['body'][_0x24ed71(0xdf6)](0x4), this[_0x24ed71(0x177d)] = !0x1, this[_0x24ed71(0xb1f)] = 1.1, this['setScale'](_0x458650['default'][_0x24ed71(0x15db)] * this[_0x24ed71(0x4a1)]['PArea']), _0x44ef1a['default'][_0x24ed71(0x1043)]['scene'][_0x24ed71(0x915)][_0x24ed71(0x17fb)](this[_0x24ed71(0x12a3)]), this[_0x24ed71(0xa81)] = !0x0, this['trail']['x'] = this['x'] - _0x44ef1a[_0x24ed71(0xd2c)][_0x24ed71(0x1043)][_0x24ed71(0x10f6)]['x'], this[_0x24ed71(0x3b8)]['y'] = this['y'] - _0x44ef1a[_0x24ed71(0xd2c)]['Core'][_0x24ed71(0x10f6)]['y'];
                        let _0x2b5a51 = this['colors'][this[_0x24ed71(0x19c4)] % this[_0x24ed71(0x1a0b)]['length']],
                            _0x93522b = this[_0x24ed71(0x51a)][this[_0x24ed71(0x19c4)] % this[_0x24ed71(0x1a0b)]['length']];
                        this[_0x24ed71(0x7cd)] = _0x2b5a51, this[_0x24ed71(0x138f)](), this[_0x24ed71(0xb34)](_0x93522b), this[_0x24ed71(0x183e)][_0x24ed71(0x902)]('spin');
                        let _0x34300b = 0x1,
                            _0x3215e7 = this[_0x24ed71(0x4a1)][_0x24ed71(0x5f5)];
                        _0x3215e7 >= 0x2 && (_0x34300b = 0x1 / _0x3215e7), null === (_0x33037d = this[_0x24ed71(0x281)]) || void 0x0 === _0x33037d || _0x33037d['stop'](), this[_0x24ed71(0x281)] = this[_0x24ed71(0x6d2)][_0x24ed71(0x12a1)][_0x24ed71(0x18bd)]({
                            'targets': [this],
                            'alpha': _0x34300b,
                            'duration': 0xc8,
                            'onStart': () => {
                                this['trail']['alpha'] = 0x1, this['alpha'] = 0x0;
                            },
                            'onComplete': () => {}
                        }), _0x44ef1a[_0x24ed71(0xd2c)][_0x24ed71(0x1043)][_0x24ed71(0x6d2)]['time'][_0x24ed71(0x17fb)](this['HitboxTimer']), this['HitboxTimer'] = _0x44ef1a[_0x24ed71(0xd2c)][_0x24ed71(0x1043)]['scene'][_0x24ed71(0x915)][_0x24ed71(0x12b8)]({
                            'delay': this[_0x24ed71(0x4a1)]['hitBoxDelay'],
                            'loop': !0x0,
                            'callback': () => {
                                this['objectsHit'] = [];
                            }
                        }), this[_0x24ed71(0x8b9)][_0x24ed71(0x226)] = 'HW Hitbox', _0x44ef1a[_0x24ed71(0xd2c)]['Core']['scene'][_0x24ed71(0x915)][_0x24ed71(0x17fb)](this['ExpireTimer']), this['ExpireTimer'] = _0x44ef1a['default']['Core'][_0x24ed71(0x6d2)]['time']['addEvent']({
                            'delay': this['weapon'][_0x24ed71(0x16c3)],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x28b8e5 = _0x24ed71;
                                _0x44ef1a[_0x28b8e5(0xd2c)][_0x28b8e5(0x1043)][_0x28b8e5(0x6d2)][_0x28b8e5(0x915)][_0x28b8e5(0x17fb)](this[_0x28b8e5(0x12a3)]), this['FadeOut']();
                            }
                        }), this['ExpireTimer']['name'] = 'DI Expire', this[_0x24ed71(0x3c2)] = !0x1, _0x44ef1a[_0x24ed71(0xd2c)]['Sound']['PlaySound'](_0x505ec6[_0x24ed71(0xd2c)][_0x24ed71(0x2b4)], {
                            'detune': -0x64 * this['indexInWeapon'],
                            'volume': 0.15
                        }, 0x64, 0xa);
                    } ['SetTarget'](_0xf9758b) {
                        const _0x23d895 = _0xe5fef1;
                        super['SetTarget'](_0xf9758b);
                        var _0x2f9033 = this['AngleFromTargetRadians'](this['target']),
                            _0x1cb18a = [0x0, 0xa, -0xa, 0x14, -0x14, 0x1e, -0x1e, 0x28, -0x28];
                        this['scene'][_0x23d895(0x1585)][_0x23d895(0x18fc)](_0x2f9033 + Phaser[_0x23d895(0x24f)][_0x23d895(0x54d)](_0x1cb18a[this[_0x23d895(0x19c4)] % _0x1cb18a['length']]), this[_0x23d895(0xfbb)], this[_0x23d895(0xcf9)][_0x23d895(0xf4e)]);
                        var _0x25cda4 = Phaser['Math'][_0x23d895(0x1551)][_0x23d895(0x7bf)];
                        this['setAngle'](Phaser[_0x23d895(0x24f)]['RadToDeg'](Math['atan2'](this['body'][_0x23d895(0xf4e)]['y'] - _0x25cda4['y'], this['body'][_0x23d895(0xf4e)]['x'] - _0x25cda4['x'])));
                    } ['FadeOut']() {
                        const _0x97ade0 = _0xe5fef1;
                        this[_0x97ade0(0x6d2)]['tweens']['add']({
                            'targets': [this[_0x97ade0(0x3b8)], this],
                            'alpha': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x157ce6 = _0x97ade0;
                                this[_0x157ce6(0x14fb)]();
                            }
                        }), this[_0x97ade0(0x4a1)]['explodeOnExpire'] && this['weapon'][_0x97ade0(0x155a)](this['x'], this['y']);
                    } ['DeSpawn']() {
                        const _0x2336ab = _0xe5fef1;
                        super[_0x2336ab(0x14fb)](), _0x44ef1a['default']['Core']['scene']['time']['removeEvent'](this['ExpireTimer']), this['IsInStartingPosition'] = !0x1, this[_0x2336ab(0x183e)]['pause'](), this[_0x2336ab(0x1004)][_0x2336ab(0x858)](_0x3ff50e => {
                            const _0x512152 = _0x2336ab;
                            this[_0x512152(0x927)](_0x3ff50e);
                        });
                    } ['Update'](_0x4fb460) {
                        const _0xc5275a = _0xe5fef1;
                        if (this['PfxManager'][_0xc5275a(0x108b)](this['x'], this['y']), this['canUpdateTrail']) {
                            let _0x61e9d8 = Math['ceil'](_0x4fb460 / 0x10);
                            for (let _0x33e7dc = 0x0; _0x33e7dc < _0x61e9d8; _0x33e7dc++) this[_0xc5275a(0x12fc)]();
                        }
                        if (this['IsInStartingPosition']) {
                            this[_0xc5275a(0xe4f)] += _0x4fb460 * this['weapon']['PSpeed'];
                            let _0x1d705a = 0.001 * this['fnTime'],
                                _0x5c38aa = 3.375 * _0x1d705a,
                                _0x10f2b9 = this[_0xc5275a(0x6d2)][_0xc5275a(0x12f9)]['width'] * Math[_0xc5275a(0x1084)](0.125 * this[_0xc5275a(0x4a1)]['PArea'], 0.4),
                                _0x24dadc = _0x10f2b9 / 1.75,
                                _0x56f763 = 0x5 * Math['min'](0x6, this['weapon']['PArea']) * 0x7,
                                _0x18a529 = _0x10f2b9 * Math[_0xc5275a(0xc80)](_0x1d705a) + _0x24dadc * Math[_0xc5275a(0xc80)](_0x5c38aa),
                                _0x214108 = _0x56f763 * Math[_0xc5275a(0xd7e)](_0x1d705a) + 0x4 * Math[_0xc5275a(0xd7e)](_0x5c38aa);
                            this['x'] = _0x44ef1a['default']['Core'][_0xc5275a(0x10f6)]['x'] + _0x18a529, this['y'] = _0x44ef1a[_0xc5275a(0xd2c)]['Core'][_0xc5275a(0x10f6)]['y'] + _0x214108;
                        }
                        this[_0xc5275a(0x3c2)] = !0x0;
                    } ['clearPositions']() {
                        this['positions'] = [];
                    } ['trailUpdate']() {
                        const _0x594922 = _0xe5fef1;
                        this[_0x594922(0x1540)] || (this[_0x594922(0x1540)] = new Phaser['Geom'][(_0x594922(0x16b))](this['x'], this['y'])), this[_0x594922(0x17a5)](this['previousPos']['x'], this[_0x594922(0x1540)]['y'], this['x'], this['y'], this['color'], 0x1, 0.5), this['setLine'](this[_0x594922(0x1540)]['x'], this['previousPos']['y'], this['x'], this['y'], 0xffffff, 0x1, 0.25), this[_0x594922(0x1540)] = new Phaser['Geom'][(_0x594922(0x16b))](this['x'], this['y']);
                    } ['createLinePool']() {
                        const _0x57919c = _0xe5fef1;
                        this[_0x57919c(0x1004)] = [];
                        for (let _0x2f792e = 0x0; _0x2f792e < 0x12c; _0x2f792e++) this[_0x57919c(0x1004)][_0x57919c(0x1564)](this[_0x57919c(0x14f1)]());
                    } ['createLineObject']() {
                        const _0x3cda36 = _0xe5fef1;
                        let _0x28d0bf = new _0x3c5ed0(),
                            _0x34f5ae = new Phaser[(_0x3cda36(0xbf2))][(_0x3cda36(0x817))](this[_0x3cda36(0x6d2)], 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xff0000, 0x1);
                        _0x34f5ae[_0x3cda36(0xd40)] = !0x1, _0x34f5ae['setOrigin'](0x0), this[_0x3cda36(0x3b8)][_0x3cda36(0x18bd)](_0x34f5ae);
                        let _0x3990ca = this[_0x3cda36(0x6d2)][_0x3cda36(0x12a1)][_0x3cda36(0x18bd)]({
                            'targets': [_0x34f5ae],
                            'alpha': 0x0,
                            'duration': this['trailFadeDuration'],
                            'delay': this[_0x3cda36(0x1124)],
                            'onComplete': () => {
                                this['recyleLineObject'](_0x28d0bf);
                            }
                        });
                        return _0x3990ca[_0x3cda36(0x1631)](), _0x28d0bf['line'] = _0x34f5ae, _0x28d0bf['tween'] = _0x3990ca, _0x28d0bf;
                    } ['getLineObject']() {
                        const _0x71ffc2 = _0xe5fef1;
                        for (let _0x47c5f2 = 0x0; _0x47c5f2 < this[_0x71ffc2(0x1004)][_0x71ffc2(0xed9)]; _0x47c5f2++)
                            if (0x0 == this['trailPool'][_0x47c5f2][_0x71ffc2(0xd40)]) return this[_0x71ffc2(0x1004)][_0x47c5f2][_0x71ffc2(0xd40)] = !0x0, this[_0x71ffc2(0x1004)][_0x47c5f2][_0x71ffc2(0x3b7)][_0x71ffc2(0xd40)] = !0x0, this['largestPoolCall'] = Math['max'](this[_0x71ffc2(0x156d)], _0x47c5f2), this[_0x71ffc2(0x1004)][_0x47c5f2];
                        let _0x4a414e = this[_0x71ffc2(0x14f1)]();
                        return _0x4a414e[_0x71ffc2(0xd40)] = !0x0, _0x4a414e[_0x71ffc2(0x3b7)][_0x71ffc2(0xd40)] = !0x0, this[_0x71ffc2(0x1004)][_0x71ffc2(0x1564)](_0x4a414e), this[_0x71ffc2(0x156d)] = this[_0x71ffc2(0x1004)][_0x71ffc2(0xed9)], _0x4a414e;
                    } ['setLine'](_0x15c9a3, _0x106ce4, _0x4db895, _0x397988, _0x2660d6, _0x3f04fa, _0x370cbf) {
                        const _0x466a8a = _0xe5fef1;
                        let _0x2f196d = this[_0x466a8a(0x1a01)](),
                            _0x58a3ad = _0x2f196d[_0x466a8a(0x3b7)];
                        _0x58a3ad[_0x466a8a(0x1224)] = _0x2660d6, _0x58a3ad[_0x466a8a(0x10ad)](_0x3f04fa, _0x3f04fa), _0x58a3ad[_0x466a8a(0xdab)](_0x370cbf), _0x58a3ad[_0x466a8a(0x412)](_0x15c9a3, _0x106ce4, _0x4db895, _0x397988), _0x2f196d[_0x466a8a(0x99a)][_0x466a8a(0x1374)](), _0x2f196d['tween']['play']();
                    } ['recyleLineObject'](_0x4bffb2) {
                        const _0xa2f313 = _0xe5fef1;
                        _0x4bffb2['tween']['pause'](), _0x4bffb2[_0xa2f313(0x3b7)]['setAlpha'](0x0), _0x4bffb2[_0xa2f313(0xd40)] = !0x1, _0x4bffb2[_0xa2f313(0x3b7)][_0xa2f313(0xd40)] = !0x1;
                    }
                }
                _0x1cd706['B_SilverWind'] = _0x3a6b26, _0x1cd706['default'] = _0x3a6b26;
            };
