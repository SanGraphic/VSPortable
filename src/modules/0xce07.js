// Module 0xce07
// Args: _0x3fb3c4, _0x8f7e9b, _0x16d6f9

export default (_0x3fb3c4, _0x8f7e9b, _0x16d6f9) => {
                'use strict';
                const _0x4d3387 = a0_0x6932;
                var _0x2cc0a2 = this && this['__importDefault'] || function(_0x33d6df) {
                    return _0x33d6df && _0x33d6df['__esModule'] ? _0x33d6df : {
                        'default': _0x33d6df
                    };
                };
                Object['defineProperty'](_0x8f7e9b, '__esModule', {
                    'value': !0x0
                }), _0x8f7e9b['B_Larobba'] = void 0x0;
                const _0x1a3010 = _0x2cc0a2(_0x16d6f9(0xa14d)),
                    _0x2ac64f = _0x2cc0a2(_0x16d6f9(0x5f07)),
                    _0x28eacf = _0x2cc0a2(_0x16d6f9(0x1fd7)),
                    _0x185b42 = _0x2cc0a2(_0x16d6f9(0x5103));
                class _0x2e2843 extends _0x1a3010['default'] {
                    constructor(_0x341e45, _0x2c8765, _0x395a46, _0xc714c4, _0x5c1401) {
                        const _0x13e6cb = _0x4d3387;
                        super(_0x341e45, _0x2c8765, _0x395a46, 'items', 'Larobba01.png', _0xc714c4, _0x5c1401), this['posHistory'] = new Array(), this[_0x13e6cb(0x624)] = 0x1, this[_0x13e6cb(0x1192)] = 0x0, this['defaultVelocityY'] = 0x0, this[_0x13e6cb(0xd2f)] = new Phaser['Math'][(_0x13e6cb(0x1551))](), this['moveAngle'] = 0x0, this[_0x13e6cb(0x13ea)] = 0xa / 0x30, this[_0x13e6cb(0x8a2)](_0x185b42[_0x13e6cb(0xd2c)]['PixelScale'] * this['weapon']['PArea']), this[_0x13e6cb(0x6bd)] = this[_0x13e6cb(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'angle': 0x168,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'repeat': -0x1
                        }), this[_0x13e6cb(0xafd)] = this['scene']['tweens'][_0x13e6cb(0x18bd)]({
                            'targets': this,
                            'moveAngle': Math['PI'],
                            'duration': 0x3e8,
                            'ease': 'Linear'
                        }), this['ghosts'] = new Array();
                        for (let _0x2a8499 = 0x0; _0x2a8499 < this[_0x13e6cb(0x624)]; _0x2a8499++) {
                            this[_0x13e6cb(0x24a)][_0x13e6cb(0x1564)](new Phaser['Math'][(_0x13e6cb(0x1551))](_0x2c8765, _0x395a46));
                            var _0x27a742 = this[_0x13e6cb(0x6d2)][_0x13e6cb(0x18bd)][_0x13e6cb(0x568)](0x0, 0x0, this[_0x13e6cb(0x174d)]['key'], this['frame']['name'])[_0x13e6cb(0x8a2)](_0x185b42['default'][_0x13e6cb(0x15db)])[_0x13e6cb(0x183f)](!0x1)[_0x13e6cb(0x652)](0x0, 0x222222, 0x0, 0x222222)['setAlpha'](0.55 - 0.25 * _0x2a8499);
                            this[_0x13e6cb(0xbbc)][_0x13e6cb(0x1564)](_0x27a742);
                        }
                        this[_0x13e6cb(0x1234)] = this['weapon'];
                    } ['OnRecycle']() {
                        const _0x2cbd91 = _0x4d3387;
                        var _0x2665bc;
                        super[_0x2cbd91(0x5ce)](), this[_0x2cbd91(0xa21)] = !0x0;
                        let _0x126765 = this[_0x2cbd91(0x1234)][_0x2cbd91(0xdcc)]();
                        this[_0x2cbd91(0x381)](_0x126765);
                        for (let _0x3febf6 = 0x0; _0x3febf6 < this['ghosts'][_0x2cbd91(0xed9)]; _0x3febf6++) this[_0x2cbd91(0xbbc)][_0x3febf6]['setFrame'](_0x126765);
                        this[_0x2cbd91(0xb34)](0xffffff), this['setScale'](_0x185b42[_0x2cbd91(0xd2c)][_0x2cbd91(0x15db)] * this['weapon']['PArea']);
                        let _0x2fe0c8 = 0.5 * Math[_0x2cbd91(0x1981)](this['width'], this[_0x2cbd91(0x140e)]);
                        this[_0x2cbd91(0xcf9)]['setCircle'](_0x2fe0c8, 0x0, 0x0), this[_0x2cbd91(0x177d)] = !0x1, null === (_0x2665bc = this['ScaleTween']) || void 0x0 === _0x2665bc || _0x2665bc['stop'](), this['ScaleTween'] = this[_0x2cbd91(0x6d2)][_0x2cbd91(0x12a1)][_0x2cbd91(0x18bd)]({
                            'targets': this,
                            'scale': 0x0,
                            'duration': 0x1f4,
                            'delay': this['weapon'][_0x2cbd91(0x16c3)],
                            'ease': 'Linear',
                            'onUpdate': () => {
                                const _0x25bdc3 = _0x2cbd91;
                                for (let _0x14934e = 0x0; _0x14934e < this[_0x25bdc3(0xbbc)][_0x25bdc3(0xed9)]; _0x14934e++) {
                                    const _0x4e88ae = this[_0x25bdc3(0xbbc)][_0x14934e];
                                    _0x4e88ae[_0x25bdc3(0x3a8)] = this[_0x25bdc3(0x3a8)], _0x4e88ae[_0x25bdc3(0x1721)] = this[_0x25bdc3(0x1721)];
                                }
                            },
                            'onComplete': () => {
                                const _0x5c30b5 = _0x2cbd91;
                                this[_0x5c30b5(0x14fb)]();
                            }
                        });
                        var _0x2adbb = new Phaser[(_0x2cbd91(0x24f))][(_0x2cbd91(0x1551))](_0x2ac64f[_0x2cbd91(0xd2c)][_0x2cbd91(0x1043)][_0x2cbd91(0x10f6)]['x'], _0x2ac64f[_0x2cbd91(0xd2c)]['Core'][_0x2cbd91(0x10f6)]['y']);
                        this['x'] = _0x2adbb['x'] + (Math['random']() - 0.5) * this[_0x2cbd91(0x6d2)][_0x2cbd91(0x12f9)][_0x2cbd91(0x173c)] * 0.25, this['y'] = _0x2adbb['y'] - 0.6 * this['scene']['renderer']['height'] - _0x2fe0c8;
                        const _0x456052 = _0x2ac64f[_0x2cbd91(0xd2c)][_0x2cbd91(0x1043)]['Player']['lastFacedDirection'][_0x2cbd91(0x1650)](Phaser[_0x2cbd91(0x24f)]['Vector2'][_0x2cbd91(0x7bf)]) < 0x0 ? -0x1 : 0x1;
                        var _0x4dca4d = (this[_0x2cbd91(0x4a1)][_0x2cbd91(0x942)], this[_0x2cbd91(0x19c4)]);
                        _0x4dca4d = this[_0x2cbd91(0x4a1)]['GetAngle'](), this[_0x2cbd91(0xa4e)] = _0x4dca4d, this[_0x2cbd91(0x6d2)][_0x2cbd91(0x1585)][_0x2cbd91(0x18fc)](_0x4dca4d, this[_0x2cbd91(0xfbb)], this[_0x2cbd91(0xcf9)]['velocity']), this[_0x2cbd91(0xd2f)]['x'] = 1.5 * this['body'][_0x2cbd91(0xf4e)]['x'], this['initialVelocity']['y'] = this[_0x2cbd91(0xcf9)]['velocity']['y'], this['defaultVelocityY'] = this['initialVelocity']['y'];
                        for (let _0x799276 = 0x0; _0x799276 < this[_0x2cbd91(0x24a)][_0x2cbd91(0xed9)]; _0x799276++) this[_0x2cbd91(0x24a)][_0x799276]['x'] = this['x'], this['posHistory'][_0x799276]['y'] = this['y'];
                        this['moveAngle'] = _0x4dca4d, this[_0x2cbd91(0xafd)] = this[_0x2cbd91(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'moveAngle': _0x4dca4d + _0x456052 * Math['PI'],
                            'duration': 0x5dc,
                            'ease': 'Linear'
                        }), _0x2ac64f[_0x2cbd91(0xd2c)]['Sound']['PlaySound'](_0x28eacf['default'][_0x2cbd91(0xfcc)], {
                            'detune': -0x64 * this[_0x2cbd91(0x19c4)],
                            'volume': 0.45
                        }, 0xc8, 0xa);
                    } ['DeSpawn']() {
                        const _0x3d561e = _0x4d3387;
                        var _0x53f005, _0x366a5c;
                        null === (_0x53f005 = this[_0x3d561e(0xafd)]) || void 0x0 === _0x53f005 || _0x53f005[_0x3d561e(0x1a34)](), null === (_0x366a5c = this['ScaleTween']) || void 0x0 === _0x366a5c || _0x366a5c['stop']();
                        for (let _0x328a12 = 0x0; _0x328a12 < this[_0x3d561e(0xbbc)][_0x3d561e(0xed9)]; _0x328a12++) this[_0x3d561e(0xbbc)][_0x328a12][_0x3d561e(0x183f)](!0x1);
                        super['DeSpawn']();
                    } ['OnHasHitAnObject'](_0x43cab2) {
                        const _0x126562 = _0x4d3387;
                        if (!_0x43cab2[_0x126562(0xdae)]) {
                            if (!this[_0x126562(0xa21)]) return;
                            return this['canBounce'] = !0x1, this[_0x126562(0x6d2)][_0x126562(0x915)][_0x126562(0x17fb)](this['BounceTimer']), this['BounceTimer'] = this['scene'][_0x126562(0x915)][_0x126562(0x12b8)]({
                                'delay': 0x1e,
                                'callback': () => {
                                    this['canBounce'] = !0x0;
                                }
                            }), this[_0x126562(0x6d2)][_0x126562(0x1585)]['velocityFromRotation'](Phaser[_0x126562(0x24f)]['DegToRad'](this[_0x126562(0xa4e)]), this[_0x126562(0xfbb)], this[_0x126562(0xcf9)][_0x126562(0xf4e)]), this['initialVelocity']['x'] *= -0x1, this[_0x126562(0xd2f)]['y'] = Math['max'](-0x258, this[_0x126562(0xcf9)][_0x126562(0xf4e)]['y']), void(this[_0x126562(0x990)] = []);
                        }
                    } ['getHistoryIndex'](_0x32de98) {
                        const _0x1063c7 = _0x4d3387;
                        return this[_0x1063c7(0x1192)] + _0x32de98 >= this[_0x1063c7(0x624)] ? this['historyIndex'] + _0x32de98 - this[_0x1063c7(0x624)] : this[_0x1063c7(0x1192)] + _0x32de98;
                    } ['Update'](_0xdc5c73) {
                        const _0x36394e = _0x4d3387;
                        this[_0x36394e(0xd2f)]['y'] += _0xdc5c73 * this[_0x36394e(0x13ea)], this['historyIndex'] < this[_0x36394e(0x624)] - 0x1 ? this[_0x36394e(0x1192)]++ : this['historyIndex'] = 0x0;
                        for (let _0x3a716a = 0x0; _0x3a716a < this[_0x36394e(0xbbc)][_0x36394e(0xed9)]; _0x3a716a++) {
                            var _0x3ed4ac = this[_0x36394e(0x24a)][this['getHistoryIndex'](_0x3a716a)],
                                _0x193e2e = this[_0x36394e(0xbbc)][_0x3a716a];
                            _0x193e2e['angle'] = this[_0x36394e(0xd96)], _0x193e2e['x'] = _0x3ed4ac['x'], _0x193e2e['y'] = _0x3ed4ac['y'], _0x193e2e[_0x36394e(0x7cb)] = this['scale'], _0x193e2e[_0x36394e(0x35a)] = !0x0;
                        }
                        this['setVelocity'](this['initialVelocity']['x'], this[_0x36394e(0xd2f)]['y']), this[_0x36394e(0x24a)][this[_0x36394e(0x1192)]]['x'] = this['x'], this['posHistory'][this[_0x36394e(0x1192)]]['y'] = this['y'], this['y'] > _0x2ac64f['default']['Core'][_0x36394e(0x10f6)]['y'] + _0x2ac64f[_0x36394e(0xd2c)][_0x36394e(0x1043)]['scene'][_0x36394e(0x12f9)][_0x36394e(0x140e)] && (this['x'] = _0x2ac64f['default']['Core']['Player']['x'] + (Math[_0x36394e(0x9ad)]() - 0.5) * this[_0x36394e(0x6d2)][_0x36394e(0x12f9)][_0x36394e(0x173c)] * 0.25, this['y'] = _0x2ac64f['default'][_0x36394e(0x1043)]['Player']['y'] - this['scene'][_0x36394e(0x12f9)]['height'], this[_0x36394e(0xd2f)]['y'] = this[_0x36394e(0xd13)]);
                    }
                }
                _0x8f7e9b['B_Larobba'] = _0x2e2843, _0x8f7e9b['default'] = _0x2e2843;
            };
