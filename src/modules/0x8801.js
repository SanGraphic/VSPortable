// Module 0x8801
// Args: _0x2dbfb7, _0x202b58, _0x3512ef

export default (_0x2dbfb7, _0x202b58, _0x3512ef) => {
                'use strict';
                const _0x56bad5 = a0_0x6932;
                var _0x463779 = this && this['__importDefault'] || function(_0x2f7758) {
                    return _0x2f7758 && _0x2f7758['__esModule'] ? _0x2f7758 : {
                        'default': _0x2f7758
                    };
                };
                Object['defineProperty'](_0x202b58, '__esModule', {
                    'value': !0x0
                }), _0x202b58['B_HeavenSword'] = void 0x0;
                const _0x4238a7 = _0x463779(_0x3512ef(0xa14d)),
                    _0x5f46ba = _0x463779(_0x3512ef(0x5f07)),
                    _0x5d3ca7 = _0x463779(_0x3512ef(0x1fd7)),
                    _0x4dfe9d = _0x463779(_0x3512ef(0x5103)),
                    _0x517999 = _0x3512ef(0x18304);
                class _0x6e1b7b extends _0x4238a7['default'] {
                    constructor(_0x52f885, _0x2fd2cf, _0x329d69, _0x220017, _0x77163b) {
                        const _0x16c855 = _0x56bad5;
                        super(_0x52f885, _0x2fd2cf, _0x329d69, 'vfx', 'Sword.png', _0x220017, _0x77163b), this['posHistory'] = new Array(), this[_0x16c855(0x56b)] = new Array(), this[_0x16c855(0x624)] = 0x8, this[_0x16c855(0x1192)] = 0x0, this['accel'] = 0x1, this['velocity'] = new Phaser[(_0x16c855(0x24f))][(_0x16c855(0x1551))](0x0, 0x0), this[_0x16c855(0x1139)] = !0x1, this['AngleTween'] = this[_0x16c855(0x6d2)][_0x16c855(0x12a1)][_0x16c855(0x18bd)]({
                            'targets': this,
                            'angle': 0x168,
                            'duration': 0x1f4,
                            'ease': 'Linear',
                            'repeat': -0x1
                        }), this['AngleTween'][_0x16c855(0x1631)](), this[_0x16c855(0x1ac5)] = this[_0x16c855(0x6d2)]['tweens'][_0x16c855(0x18bd)]({
                            'targets': this,
                            'accel': 0x0,
                            'duration': 0x1f4,
                            'ease': 'Linear',
                            'onComplete': () => {
                                const _0x19e801 = _0x16c855;
                                this[_0x19e801(0x11a2)]();
                            }
                        }), this[_0x16c855(0x102f)] = this[_0x16c855(0x6d2)]['tweens']['add']({
                            'targets': this,
                            'accel': -0x2,
                            'duration': 0x1f4,
                            'ease': 'Linear'
                        }), this[_0x16c855(0xbbc)] = new Array();
                        for (let _0x239209 = 0x0; _0x239209 < this[_0x16c855(0x624)]; _0x239209++) {
                            this[_0x16c855(0x24a)]['push'](new Phaser[(_0x16c855(0x24f))]['Vector2'](_0x2fd2cf, _0x329d69)), this[_0x16c855(0x56b)]['push'](this[_0x16c855(0xd96)]);
                            var _0x3aaf4b = this['scene'][_0x16c855(0x18bd)][_0x16c855(0x568)](0x0, 0x0, this['texture']['key'], 'SwordBW.png')[_0x16c855(0x8a2)](_0x4dfe9d[_0x16c855(0xd2c)][_0x16c855(0x15db)])[_0x16c855(0x183f)](!0x1)['setBlendMode'](_0x517999['BlendModes'][_0x16c855(0x1811)]);
                            switch (_0x239209) {
                                case 0x0:
                                    _0x3aaf4b[_0x16c855(0xb34)](0x20c0);
                                    break;
                                case 0x1:
                                    _0x3aaf4b[_0x16c855(0xb34)](0x2020c0);
                                    break;
                                case 0x2:
                                    _0x3aaf4b['setTint'](0x4020c0);
                                    break;
                                case 0x3:
                                    _0x3aaf4b['setTint'](0x6020c0);
                                    break;
                                case 0x4:
                                    _0x3aaf4b[_0x16c855(0xb34)](0x8020c0);
                                    break;
                                case 0x5:
                                    _0x3aaf4b[_0x16c855(0xb34)](0xa020c0);
                                    break;
                                case 0x6:
                                    _0x3aaf4b[_0x16c855(0xb34)](0xc020c0);
                                    break;
                                case 0x7:
                                    _0x3aaf4b['setTint'](0xe020c0);
                            }
                            this['ghosts'][_0x16c855(0x1564)](_0x3aaf4b);
                        }
                        this['ghosts']['reverse'](), this[_0x16c855(0x1139)] = !0x1;
                    } ['OnRecycle']() {
                        const _0x5a5b64 = _0x56bad5;
                        super['OnRecycle'](), this[_0x5a5b64(0xcf9)][_0x5a5b64(0xdf6)](0xc), this[_0x5a5b64(0x6bd)][_0x5a5b64(0x1631)](), this['isCullable'] = !0x1, this[_0x5a5b64(0x8a2)](_0x4dfe9d[_0x5a5b64(0xd2c)]['PixelScale'] * this[_0x5a5b64(0x4a1)][_0x5a5b64(0x5f5)]), this['accel'] = 0x2, this['AccelTween'][_0x5a5b64(0x1374)]();
                        for (let _0x40ff5b = 0x0; _0x40ff5b < this[_0x5a5b64(0x24a)]['length']; _0x40ff5b++) this[_0x5a5b64(0x24a)][_0x40ff5b]['x'] = this['x'], this[_0x5a5b64(0x24a)][_0x40ff5b]['y'] = this['y'], this[_0x5a5b64(0x56b)][_0x40ff5b] = this[_0x5a5b64(0xd96)];
                        this['x'] += (Math['random']() - 0.5) * this['indexInWeapon'] * 0x14 * this[_0x5a5b64(0x4a1)][_0x5a5b64(0x5f5)], this['y'] += (Math[_0x5a5b64(0x9ad)]() - 0.5) * this[_0x5a5b64(0x19c4)] * 0x14 * this['weapon'][_0x5a5b64(0x5f5)], this[_0x5a5b64(0xefb)](), this[_0x5a5b64(0xf4e)][_0x5a5b64(0x850)](this[_0x5a5b64(0xcf9)][_0x5a5b64(0xf4e)]), _0x5f46ba['default'][_0x5a5b64(0x1267)]['PlaySound'](_0x5d3ca7['default'][_0x5a5b64(0xfcc)], {
                            'detune': -0x64 * this[_0x5a5b64(0x19c4)],
                            'volume': 0.5
                        }, 0xc8, 0xa), this[_0x5a5b64(0xb4a)](this['y'] - _0x5f46ba[_0x5a5b64(0xd2c)]['Core']['Player']['y'] + 0x2 * this[_0x5a5b64(0x6d2)][_0x5a5b64(0x12f9)]['height']), this['weapon']['PBounces'] && !this[_0x5a5b64(0x1139)] && (this['bounceActivated'] = !0x0, this[_0x5a5b64(0x6d2)]['physics']['world']['on']('worldbounds', this['Bounce'], this), this['setCollideWorldBounds'](!0x0, 0x1, 0x1), this[_0x5a5b64(0xcf9)][_0x5a5b64(0xda7)](_0x5f46ba['default']['Core'][_0x5a5b64(0x10f6)][_0x5a5b64(0xc00)]), this['body']['onWorldBounds'] = !0x0), this['bounceActivated'] && this[_0x5a5b64(0x193c)](!0x0, 0x1, 0x1);
                    } ['Bounce'](_0x3c8ad7) {
                        const _0xb1ce69 = _0x56bad5;
                        this[_0xb1ce69(0xcf9)] === _0x3c8ad7 && (this[_0xb1ce69(0x1b4)] > 0x0 ? (this['bounces']--, this['velocity']['x'] *= -0x1, this[_0xb1ce69(0xf4e)]['y'] *= -0x1, this['objectsHit'] = []) : this[_0xb1ce69(0x193c)](!0x1, 0x1, 0x1));
                    } ['GoBackwards']() {
                        const _0x4ca70e = _0x56bad5;
                        this[_0x4ca70e(0x6bd)] = this['scene']['tweens'][_0x4ca70e(0x18bd)]({
                            'targets': this,
                            'angle': this[_0x4ca70e(0xd96)] + 0x168,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'repeat': -0x1
                        }), this['BackwardTween'] = this[_0x4ca70e(0x6d2)][_0x4ca70e(0x12a1)]['add']({
                            'targets': this,
                            'accel': -0x2,
                            'duration': 0x1f4,
                            'ease': 'Linear'
                        }), this[_0x4ca70e(0x6d2)]['time']['addEvent']({
                            'delay': 0x2ee,
                            'callback': () => {
                                const _0x57a224 = _0x4ca70e;
                                this[_0x57a224(0x177d)] = !0x0;
                            }
                        }), this[_0x4ca70e(0x990)] = [];
                    } ['DeSpawn']() {
                        const _0x2df13e = _0x56bad5;
                        super[_0x2df13e(0x14fb)]();
                        for (let _0x3888cd = 0x0; _0x3888cd < this[_0x2df13e(0xbbc)][_0x2df13e(0xed9)]; _0x3888cd++) this[_0x2df13e(0xbbc)][_0x3888cd]['setVisible'](!0x1);
                    } ['getHistoryIndex'](_0x25b7b4) {
                        const _0x5783d6 = _0x56bad5;
                        return this[_0x5783d6(0x1192)] + _0x25b7b4 >= this[_0x5783d6(0x624)] ? this[_0x5783d6(0x1192)] + _0x25b7b4 - this['maxHistory'] : this['historyIndex'] + _0x25b7b4;
                    } ['Update']() {
                        const _0x233f9b = _0x56bad5;
                        this['body'][_0x233f9b(0xf4e)]['x'] = this[_0x233f9b(0xf4e)]['x'] * this[_0x233f9b(0xca2)], this[_0x233f9b(0xcf9)]['velocity']['y'] = this['velocity']['y'] * this[_0x233f9b(0xca2)], this[_0x233f9b(0x1192)] < this['maxHistory'] - 0x1 ? this['historyIndex']++ : this[_0x233f9b(0x1192)] = 0x0;
                        for (let _0x35b8bb = 0x0; _0x35b8bb < this[_0x233f9b(0xbbc)][_0x233f9b(0xed9)]; _0x35b8bb++) {
                            var _0xddfbe2 = this[_0x233f9b(0x24a)][this[_0x233f9b(0xe5a)](_0x35b8bb)],
                                _0x3603ad = (this[_0x233f9b(0x56b)][this[_0x233f9b(0xe5a)](_0x35b8bb)], this[_0x233f9b(0xbbc)][_0x35b8bb]);
                            _0x3603ad['angle'] = this['angle'], _0x3603ad['x'] = _0xddfbe2['x'], _0x3603ad['y'] = _0xddfbe2['y'], _0x3603ad[_0x233f9b(0x7cb)] = this['scale'], _0x3603ad[_0x233f9b(0x35a)] = !0x0;
                        }
                        this[_0x233f9b(0x24a)][this['historyIndex']]['x'] = this['x'], this['posHistory'][this[_0x233f9b(0x1192)]]['y'] = this['y'], this[_0x233f9b(0x56b)][this[_0x233f9b(0x1192)]] = this[_0x233f9b(0xd96)];
                    }
                }
                _0x202b58['B_HeavenSword'] = _0x6e1b7b, _0x202b58['default'] = _0x6e1b7b;
            };
