// Module 0x869f
// Args: _0x37db17, _0x1ef04d, _0x10fe68

export default (_0x37db17, _0x1ef04d, _0x10fe68) => {
                'use strict';
                const _0x57118a = a0_0x6932;
                var _0x1f3edc = this && this['__importDefault'] || function(_0x3cd515) {
                    return _0x3cd515 && _0x3cd515['__esModule'] ? _0x3cd515 : {
                        'default': _0x3cd515
                    };
                };
                Object['defineProperty'](_0x1ef04d, '__esModule', {
                    'value': !0x0
                });
                const _0x2d3e53 = _0x1f3edc(_0x10fe68(0x15dd)),
                    _0x4e4da2 = _0x1f3edc(_0x10fe68(0xdfbc)),
                    _0xb66d03 = _0x1f3edc(_0x10fe68(0x54e3)),
                    _0x353566 = _0x1f3edc(_0x10fe68(0x5f07)),
                    _0x1af5d6 = _0x1f3edc(_0x10fe68(0x136b9)),
                    _0x38f4c1 = _0x1f3edc(_0x10fe68(0x5103)),
                    _0x3bb6fd = _0x1f3edc(_0x10fe68(0x1fd7)),
                    _0x46d23b = _0x1f3edc(_0x10fe68(0x6508)),
                    _0x43d7a5 = _0x1f3edc(_0x10fe68(0x9b68)),
                    _0x143a3d = _0x1f3edc(_0x10fe68(0x55f0));
                class _0x1df976 extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0x103218, _0x1d7df9, _0xd763ac = 0x0, _0x5ae295 = 0x0) {
                        const _0xb5b1fc = _0x57118a;
                        super(_0x103218, _0xd763ac, _0x5ae295, 'characters', 'Antonio_01.png'), this[_0xb5b1fc(0x161a)] = 0x9, this[_0xb5b1fc(0x115d)] = new Phaser['Math']['Vector2'](0x1, 0x0), this['hp'] = 0x64, this['isDead'] = !0x1, this['xp'] = 0x0, this['onEveryLevelUp'] = {}, this[_0xb5b1fc(0x627)] = !0x1, this[_0xb5b1fc(0x11e1)] = !0x0, this[_0xb5b1fc(0x60e)] = 0x1, this[_0xb5b1fc(0x12c3)] = null, this[_0xb5b1fc(0x5e3)] = 0x1, this['maxHp'] = 0x64, this[_0xb5b1fc(0x31f)] = 0x1, this['area'] = 0x1, this[_0xb5b1fc(0x78e)] = 0x1, this[_0xb5b1fc(0xe0e)] = 0x1, this[_0xb5b1fc(0x9b8)] = 0x0, this[_0xb5b1fc(0x1205)] = 0x1, this[_0xb5b1fc(0x7fc)] = 0x1, this[_0xb5b1fc(0x5ef)] = 0x1, this[_0xb5b1fc(0x7d2)] = 0x1, this[_0xb5b1fc(0x17bc)] = 0x0, this[_0xb5b1fc(0x8d0)] = 0x0, this[_0xb5b1fc(0x14ab)] = 0x1, this['regen'] = 0x0, this['shieldInvulTime'] = 0xf0, this[_0xb5b1fc(0x14e0)] = 0x0, this['rerolls'] = 0x0, this[_0xb5b1fc(0x12ad)] = 0x0, this['banish'] = 0x0, this[_0xb5b1fc(0x173f)] = 0x1, this['exLevels'] = 0x0, this['exWeapons'] = new Array(), this['hiddenWeapons'] = new Array(), this['sineSpeed'] = null, this['sineCooldown'] = null, this[_0xb5b1fc(0x1ea)] = null, this['sineDuration'] = null, this['sineMight'] = null, this[_0xb5b1fc(0xa45)] = new Array(), this['charm'] = 0x0, this[_0xb5b1fc(0x1c3)] = 0x0, this['walked'] = 0x0, this[_0xb5b1fc(0xfc9)] = _0xb66d03[_0xb5b1fc(0xd2c)][_0xb5b1fc(0x15a6)], this[_0xb5b1fc(0x7fd)] = _0x4e4da2[_0xb5b1fc(0xd2c)][_0xb5b1fc(0x13d8)], this[_0xb5b1fc(0xbbc)] = new Array(), this['posHistory'] = new Array(), this[_0xb5b1fc(0x624)] = 0x3, this[_0xb5b1fc(0x1a95)] = 0.65, this[_0xb5b1fc(0x1192)] = 0x0, this[_0xb5b1fc(0xa00)] = !0x1, this['hasLastBreath'] = !0x0, this['HasGFBonus'] = !0x1, this[_0xb5b1fc(0x145b)] = !0x1, this[_0xb5b1fc(0xde9)] = 0x1, this[_0xb5b1fc(0x1606)] = 0x0, this['_invul'] = !0x1, this['gfeverMul'] = 0x1, this[_0xb5b1fc(0x133a)] = !0x1, this[_0xb5b1fc(0x11dd)] = 0x0, this['noHurt'] = !0x1, this[_0xb5b1fc(0x551)] = 0x0, this[_0xb5b1fc(0x3f1)] = !0x1, this[_0xb5b1fc(0x7fd)] = _0x1d7df9, this['IsInFinalStage'] = !0x1, _0x103218[_0xb5b1fc(0x18bd)][_0xb5b1fc(0x1a88)](this), _0x103218[_0xb5b1fc(0x1585)][_0xb5b1fc(0x18bd)][_0xb5b1fc(0x1a88)](this), this[_0xb5b1fc(0x12c3)] = null, this[_0xb5b1fc(0x1093)] = {}, this['setOrigin'](0.5, 0x1), this[_0xb5b1fc(0xcf9)][_0xb5b1fc(0xdf6)](this[_0xb5b1fc(0x161a)]), this['body'][_0xb5b1fc(0x7b8)](0x6, 0x10), this[_0xb5b1fc(0xcf9)]['immovable'] = !0x0, this[_0xb5b1fc(0x8a2)](_0x38f4c1[_0xb5b1fc(0xd2c)][_0xb5b1fc(0x15db)]), this[_0xb5b1fc(0x9b5)](-0x5), this[_0xb5b1fc(0x748)] = this[_0xb5b1fc(0x6d2)][_0xb5b1fc(0x12a1)]['add']({
                            'targets': this,
                            'angle': 0x5,
                            'duration': 0xfa,
                            'ease': 'Linear',
                            'loop': -0x1,
                            'yoyo': !0x0
                        }), this[_0xb5b1fc(0x748)]['pause']();
                        for (let _0x3bd4bd = 0x0; _0x3bd4bd <= this['maxHistory']; _0x3bd4bd++) this['posHistory'][_0xb5b1fc(0x1564)](new Phaser['Math'][(_0xb5b1fc(0x1551))](_0xd763ac, _0x5ae295));
                        this['rtGhosts'] = this[_0xb5b1fc(0x6d2)]['add']['renderTexture'](0x0, 0x0, 0x190, 0x190), this[_0xb5b1fc(0x158b)][_0xb5b1fc(0xf8e)](0.5, 0.5), this['WorldBoxCollider'] = new Phaser['Geom'][(_0xb5b1fc(0xb64))](0x0, 0x0, this['scene']['renderer']['width'], this[_0xb5b1fc(0x6d2)][_0xb5b1fc(0x12f9)][_0xb5b1fc(0x140e)]), this[_0xb5b1fc(0x125b)] = this['scene']['add'][_0xb5b1fc(0x1791)]('vfx')[_0xb5b1fc(0x14c0)]({
                            'frame': ['WhiteDot.png'],
                            'quantity': 0xa,
                            'lifespan': 0x7d0,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'angle': {
                                'min': 0xe1,
                                'max': 0x13b
                            },
                            'speed': {
                                'min': 0x4b,
                                'max': 0x7d
                            },
                            'scale': {
                                'start': 0x2 * _0x38f4c1[_0xb5b1fc(0xd2c)]['PixelScale'],
                                'end': 0x0
                            },
                            'gravityY': 0x12c,
                            'tint': 0xff0000,
                            'bounce': 0.1,
                            'bounds': {
                                'x': 0x0,
                                'y': -0x2,
                                'w': 0x0,
                                'h': 0x1
                            },
                            'collideTop': !0x1,
                            'collideBottom': !0x0,
                            'collideLeft': !0x1,
                            'collideRight': !0x1,
                            'on': !0x1
                        }), _0x2d3e53['default'][this['characterType']] || (this[_0xb5b1fc(0x7fd)] = _0x4e4da2[_0xb5b1fc(0xd2c)][_0xb5b1fc(0x13d8)]);
                        const _0x46ec74 = _0x2d3e53['default'][this[_0xb5b1fc(0x7fd)]][0x0];
                        let _0x39ebb8 = _0x46ec74;
                        if (_0x46ec74[_0xb5b1fc(0x5cf)]) {
                            let _0x3fe94f = _0x46ec74['skins'][_0xb5b1fc(0x1e6)](_0x35f861 => _0x35f861['id'] === _0x46ec74['currentSkinIndex']);
                            _0x3fe94f && (_0x39ebb8 = _0x3fe94f);
                        }
                        if (_0x39ebb8['walkingFrames']) {
                            this[_0xb5b1fc(0x994)](_0x39ebb8['textureName'], _0x39ebb8['spriteName']), this[_0xb5b1fc(0x145b)] = !0x0;
                            const _0x1c83c1 = this[_0xb5b1fc(0x183e)][_0xb5b1fc(0x1756)](_0x39ebb8['textureName'], {
                                'start': 0x1,
                                'end': _0x39ebb8[_0xb5b1fc(0x3ff)],
                                'zeroPad': 0x2,
                                'prefix': _0x39ebb8['spriteName'][_0xb5b1fc(0xa0d)]('01.png', ''),
                                'suffix': '.png'
                            });
                            let _0x312366 = _0x39ebb8['walkFrameRate'] ? _0x39ebb8[_0xb5b1fc(0xc43)] : 0x8;
                            this['anims']['create']({
                                'key': 'walk',
                                'frames': _0x1c83c1,
                                'frameRate': _0x312366,
                                'repeat': -0x1
                            }), this[_0xb5b1fc(0x183e)]['play']('walk'), this[_0xb5b1fc(0x183e)][_0xb5b1fc(0x1631)]();
                        }
                        this['regenTimer'] = this[_0xb5b1fc(0x6d2)]['time'][_0xb5b1fc(0x12b8)]({
                            'delay': 0x3e8,
                            'repeat': -0x1,
                            'callback': () => {
                                const _0x41d9a1 = _0xb5b1fc;
                                this[_0x41d9a1(0x35e)]();
                            }
                        }), this['slowTime'] = 0x0, this[_0xb5b1fc(0x1502)] = !0x0, this[_0xb5b1fc(0x192d)] = new _0x143a3d['default'](this['scene'], this);
                    } ['AddXP'](_0x5638f0) {
                        const _0xf33003 = _0x57118a;
                        this['xp'] += _0x5638f0 * _0x38f4c1['default'][_0xf33003(0xf34)] * _0x353566[_0xf33003(0xd2c)]['Core'][_0xf33003(0x1884)]['xpMultiplier'];
                    } ['AddXP_IgnoretGameKiller'](_0x56aed8) {
                        const _0x4c9a3e = _0x57118a;
                        this['xp'] += _0x56aed8 * _0x38f4c1['default'][_0x4c9a3e(0xf34)];
                    }
                    get['PArmor']() {
                        const _0x8b573a = _0x57118a;
                        return Math[_0x8b573a(0x1084)](0x32, _0x353566['default']['Core'][_0x8b573a(0x10f6)][_0x8b573a(0x8d0)]);
                    }
                    get['PCurse']() {
                        const _0x5bb771 = _0x57118a;
                        return this[_0x5bb771(0x173f)] * _0x353566['default']['Core'][_0x5bb771(0x1884)]['wickedSeason'][_0x5bb771(0x173f)];
                    }
                    get['PGrowth']() {
                        const _0x6508b0 = _0x57118a;
                        return this['growth'] * _0x353566[_0x6508b0(0xd2c)][_0x6508b0(0x1043)][_0x6508b0(0x1884)][_0x6508b0(0x1d3)][_0x6508b0(0x7fc)];
                    }
                    get['PLuck']() {
                        const _0x1c1c05 = _0x57118a;
                        return this['luck'] * _0x353566[_0x1c1c05(0xd2c)]['Core'][_0x1c1c05(0x1884)][_0x1c1c05(0x1d3)]['luck'];
                    }
                    get['PGreed']() {
                        return this['greed'] * _0x353566['default']['Core']['Arcanas']['wickedSeason']['greed'];
                    } ['Pushback'](_0x9b003a, _0xceaa55) {} ['OnLastBreath']() {} ['SetMaxHistory'](_0x5d40c0) {
                        const _0x4cfc1f = _0x57118a;
                        this['maxHistory'] = _0x5d40c0, this['historyIndex'] = 0x0, this[_0x4cfc1f(0x24a)] = [];
                        for (let _0xd6c11d = 0x0; _0xd6c11d <= this[_0x4cfc1f(0x624)]; _0xd6c11d++) this['posHistory'][_0x4cfc1f(0x1564)](new Phaser[(_0x4cfc1f(0x24f))][(_0x4cfc1f(0x1551))](_0x353566['default']['Core']['Player']['x'], _0x353566['default']['Core'][_0x4cfc1f(0x10f6)]['y']));
                    } ['ResetGhostValues']() {
                        const _0x1181e7 = _0x57118a;
                        this[_0x1181e7(0x1a95)] = 0.65, this[_0x1181e7(0x104f)](0x3);
                    } ['AfterFullInitialization']() {}
                    get['IsInvul']() {
                        const _0x481c78 = _0x57118a;
                        return this[_0x481c78(0xc22)];
                    }
                    set['IsInvul'](_0x46bfcf) {
                        const _0x1e401d = _0x57118a;
                        this['_invul'] != _0x46bfcf && (this['_invul'] = _0x46bfcf, this['_invul'] ? this['setTintFill'](0xffffbb) : this[_0x1e401d(0xbb3)]());
                    } ['OnWeaponMadeLevelOne'](_0xae6ebe) {} ['RecoverHp'](_0x3ed099, _0x255f5a, _0x26d337 = !0x1) {
                        const _0x53a0d0 = _0x57118a;
                        if (this[_0x53a0d0(0xdae)]) return;
                        _0x3ed099 *= _0x26d337 ? 0x1 + this[_0x53a0d0(0xe2c)] : 0x1, _0x353566['default']['Core'][_0x53a0d0(0x1884)][_0x53a0d0(0x15e7)][_0x53a0d0(0x1303)](_0x43d7a5['default'][_0x53a0d0(0xc5f)]) > -0x1 && (_0x3ed099 *= 0x2, _0x353566['default'][_0x53a0d0(0x1043)]['Arcanas'][_0x53a0d0(0x169b)](_0x3ed099));
                        let _0x55ffd3 = Math['min'](this[_0x53a0d0(0xd2e)] - this['hp'], _0x3ed099);
                        this['onHPRecoveryCallback'] && this['onHPRecoveryCallback'](_0x55ffd3), this['hp'] += _0x55ffd3, this['hp'] > this[_0x53a0d0(0xd2e)] && (this['hp'] = this['maxHp']), _0x353566['default'][_0x53a0d0(0x1043)][_0x53a0d0(0x141a)]['Update'](), _0x55ffd3 < 0x2328 && _0x353566['default'][_0x53a0d0(0x1043)][_0x53a0d0(0x14d8)]['AddHeal'](_0x55ffd3), _0x255f5a && _0x353566[_0x53a0d0(0xd2c)]['Core'][_0x53a0d0(0x186a)](_0x353566[_0x53a0d0(0xd2c)]['Core'][_0x53a0d0(0x10f6)]['x'], _0x353566[_0x53a0d0(0xd2c)]['Core']['Player']['y'], _0x3ed099);
                    } ['Regenerate']() {
                        const _0x573e7b = _0x57118a;
                        this['regen'] > 0x0 && this['RecoverHp'](this[_0x573e7b(0xe2c)], !0x1);
                    } ['LevelUp']() {
                        const _0x4b4314 = _0x57118a;
                        this[_0x4b4314(0x5e3)]++;
                        var _0x315a8a, _0x282f8a = _0x2d3e53[_0x4b4314(0xd2c)][this[_0x4b4314(0x7fd)]];
                        if (_0x282f8a && (_0x315a8a = _0x282f8a[_0x4b4314(0x1e6)](_0x599fc1 => _0x599fc1[_0x4b4314(0x5e3)] === this[_0x4b4314(0x5e3)]), _0x2d3e53['default'][this['characterType']][0x0]), _0x315a8a) {
                            for (const _0x48429e in _0x315a8a) this[_0x4b4314(0x2cf)](_0x48429e) && 'level' != _0x48429e && (this[_0x48429e] += _0x315a8a[_0x48429e]);
                        }
                        if (this[_0x4b4314(0x1093)]) {
                            for (const _0x1d202b in this['onEveryLevelUp']) this[_0x4b4314(0x2cf)](_0x1d202b) && 'level' != _0x1d202b && (this[_0x1d202b] += this['onEveryLevelUp'][_0x1d202b]);
                        }
                    } ['MakeLevelOne']() {
                        const _0x27ebda = _0x57118a;
                        this[_0x27ebda(0x5e3)] = 0x0, this['shieldInvulTime'] = 0xf0, this['gfeverMul'] = 0x1;
                        let _0x3808a6 = _0x2d3e53['default'][this['characterType']][this[_0x27ebda(0x5e3)]];
                        for (const _0x7531b9 in _0x3808a6) this['hasOwnProperty'](_0x7531b9) && (this[_0x7531b9] = _0x3808a6[_0x7531b9]);
                        if (this[_0x27ebda(0x1093)] = {}, this['hp'] = this[_0x27ebda(0xd2e)], _0x3808a6[_0x27ebda(0x242)] > 0x0 && (_0x353566['default']['Core'][_0x27ebda(0x17fc)]['radius'] += _0x353566['default']['Core'][_0x27ebda(0x17fc)][_0x27ebda(0x161a)] * _0x3808a6['magnet'], _0x353566['default']['Core'][_0x27ebda(0x17fc)]['RefreshSize'](), _0x353566[_0x27ebda(0xd2c)]['Core']['Magnet'][_0x27ebda(0xdbb)] += _0x3808a6[_0x27ebda(0x242)]), _0x3808a6['sineSpeed'] && this[_0x27ebda(0x10ef)](_0x3808a6), _0x3808a6[_0x27ebda(0x205)] && (this[_0x27ebda(0x205)] = new _0x46d23b[(_0x27ebda(0xd2c))](), this[_0x27ebda(0x205)]['min'] = _0x3808a6['sineCooldown'][_0x27ebda(0x1084)], this[_0x27ebda(0x205)]['max'] = _0x3808a6[_0x27ebda(0x205)][_0x27ebda(0x1981)], this[_0x27ebda(0x205)]['duration'] = _0x3808a6[_0x27ebda(0x205)][_0x27ebda(0x5ef)], this[_0x27ebda(0x205)]['Start']()), _0x3808a6[_0x27ebda(0x1ea)] && (this['sineArea'] = new _0x46d23b[(_0x27ebda(0xd2c))](), this['sineArea']['min'] = _0x3808a6[_0x27ebda(0x1ea)]['min'], this[_0x27ebda(0x1ea)][_0x27ebda(0x1981)] = _0x3808a6['sineArea']['max'], this['sineArea']['duration'] = _0x3808a6[_0x27ebda(0x1ea)]['duration'], this['sineArea']['Start']()), _0x3808a6[_0x27ebda(0x5a4)] && this[_0x27ebda(0x5fc)](_0x3808a6), _0x3808a6[_0x27ebda(0x947)] && this[_0x27ebda(0x8b3)](_0x3808a6), _0x3808a6[_0x27ebda(0x9c4)] && this['plsNoHurt'](), _0x3808a6[_0x27ebda(0xf8d)] && this[_0x27ebda(0xcf9)][_0x27ebda(0x7b8)](_0x3808a6['bodyOffset']['x'], _0x3808a6[_0x27ebda(0xf8d)]['y']), _0x3808a6['onEveryLevelUp']) {
                            for (const _0x24c1fe in _0x3808a6[_0x27ebda(0x1093)]) this['onEveryLevelUp'][_0x24c1fe] = _0x3808a6[_0x27ebda(0x1093)][_0x24c1fe];
                        }
                    } ['ActivateSineSpeedBonus'](_0x30f9a8) {
                        const _0x3ead09 = _0x57118a;
                        this['sineSpeed'] = new _0x46d23b[(_0x3ead09(0xd2c))](), this['sineSpeed'][_0x3ead09(0x1084)] = _0x30f9a8['sineSpeed'][_0x3ead09(0x1084)], this['sineSpeed'][_0x3ead09(0x1981)] = _0x30f9a8[_0x3ead09(0xa5d)][_0x3ead09(0x1981)], this['sineSpeed'][_0x3ead09(0x5ef)] = _0x30f9a8['sineSpeed']['duration'], this[_0x3ead09(0xa5d)]['Start']();
                    } ['ActivateSineDurationBonus'](_0x55cec1) {
                        const _0x121085 = _0x57118a;
                        this['sineDuration'] = new _0x46d23b[(_0x121085(0xd2c))](), this[_0x121085(0x5a4)][_0x121085(0x1084)] = _0x55cec1['sineDuration']['min'], this[_0x121085(0x5a4)][_0x121085(0x1981)] = _0x55cec1[_0x121085(0x5a4)]['max'], this[_0x121085(0x5a4)][_0x121085(0x5ef)] = _0x55cec1[_0x121085(0x5a4)][_0x121085(0x5ef)], this[_0x121085(0x5a4)][_0x121085(0x809)]();
                    } ['ActivateSineMightBonus'](_0xebb4eb) {
                        const _0x226e11 = _0x57118a;
                        this[_0x226e11(0x947)] = new _0x46d23b[(_0x226e11(0xd2c))](), this['sineMight'][_0x226e11(0x1084)] = _0xebb4eb['sineMight'][_0x226e11(0x1084)], this[_0x226e11(0x947)][_0x226e11(0x1981)] = _0xebb4eb['sineMight'][_0x226e11(0x1981)], this[_0x226e11(0x947)][_0x226e11(0x5ef)] = _0xebb4eb[_0x226e11(0x947)][_0x226e11(0x5ef)], this[_0x226e11(0x947)]['Start']();
                    } ['ActivateSineAreaBonus'](_0x5a920d) {
                        const _0x21c8b6 = _0x57118a;
                        this['sineArea'] = new _0x46d23b['default'](), this[_0x21c8b6(0x1ea)][_0x21c8b6(0x1084)] = _0x5a920d['sineArea'][_0x21c8b6(0x1084)], this['sineArea'][_0x21c8b6(0x1981)] = _0x5a920d[_0x21c8b6(0x1ea)][_0x21c8b6(0x1981)], this[_0x21c8b6(0x1ea)][_0x21c8b6(0x5ef)] = _0x5a920d[_0x21c8b6(0x1ea)][_0x21c8b6(0x5ef)], this[_0x21c8b6(0x1ea)][_0x21c8b6(0x809)]();
                    } ['GetDamaged'](_0x54e118 = 0x1, _0x2a8ad9 = _0x1af5d6['default']['NONE'], _0x615a93 = 0x1) {
                        const _0x4dbe7e = _0x57118a;
                        if (this['receivingDamage']) return !0x1;
                        if (this[_0x4dbe7e(0x44b)]) return !0x1;
                        if (this['hp'] <= 0x0) return !0x1;
                        if (this[_0x4dbe7e(0x17bc)] > 0x0) return this['shields'] -= 0x1, this['OnGetDamaged'](0xffffbb, this[_0x4dbe7e(0xf59)], !0x1), _0x353566['default'][_0x4dbe7e(0x1043)][_0x4dbe7e(0x6d2)]['events'][_0x4dbe7e(0x700)]('Player_LostShield', _0x54e118), !0x1;
                        _0x353566[_0x4dbe7e(0xd2c)][_0x4dbe7e(0x1043)][_0x4dbe7e(0x17c7)][_0x4dbe7e(0x4e5)][_0x4dbe7e(0x187b)] > 0x0 && (_0x54e118 *= 0x1 + 0.25 * _0x353566[_0x4dbe7e(0xd2c)][_0x4dbe7e(0x1043)][_0x4dbe7e(0x17c7)]['StageModifiers'][_0x4dbe7e(0x187b)]) > this[_0x4dbe7e(0xd2e)] && (_0x54e118 = Math['max'](0xa, this['maxHp'] - 0x1));
                        let _0x7ccb74 = this[_0x4dbe7e(0x551)] - _0x353566[_0x4dbe7e(0xd2c)][_0x4dbe7e(0x1043)][_0x4dbe7e(0x17c7)][_0x4dbe7e(0x4e5)][_0x4dbe7e(0x187b)];
                        return _0x7ccb74 > 0x0 && (_0x54e118 = Math['min'](_0x7ccb74, _0x54e118)), this[_0x4dbe7e(0x8d0)] > 0x0 && (_0x54e118 -= this['armor']) < 0x1 && (_0x54e118 = 0x1), this['hp'] -= _0x54e118, this['hp'] <= 0x0 ? this[_0x4dbe7e(0xa00)] && this[_0x4dbe7e(0x1502)] ? (this['hp'] = 0x0, this[_0x4dbe7e(0x6ae)] && (this[_0x4dbe7e(0x6ae)](), this[_0x4dbe7e(0x1502)] = !0x1)) : (this['hp'] = 0x0, this[_0x4dbe7e(0x14f3)](), _0x353566['default'][_0x4dbe7e(0x1043)][_0x4dbe7e(0x92a)]()) : (this[_0x4dbe7e(0x404)](), _0x353566[_0x4dbe7e(0xd2c)][_0x4dbe7e(0x1043)][_0x4dbe7e(0x6d2)]['events'][_0x4dbe7e(0x700)]('Player_ReceivedDamage')), _0x353566[_0x4dbe7e(0xd2c)]['Core']['PlayerUI']['Update'](), !0x0;
                    } ['OnGetDamaged'](_0x1e4a22 = 0xff0000, _0x2ed87d = 0x78, _0x4ad103 = !0x0) {
                        const _0xe4a8ac = _0x57118a;
                        this['receivingDamage'] || (this['setTintFill'](_0x1e4a22), this['_blinkTimeout'] = _0x353566[_0xe4a8ac(0xd2c)]['Core'][_0xe4a8ac(0x6d2)][_0xe4a8ac(0x915)][_0xe4a8ac(0x12b8)]({
                            'delay': _0x2ed87d,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x24b08f = _0xe4a8ac;
                                this['restoreTint'](), this['PfxEmitter'][_0x24b08f(0x1a34)]();
                            }
                        }), this['_blinkTimeout'][_0xe4a8ac(0x226)] = 'Blink', _0x4ad103 && (this[_0xe4a8ac(0x125b)][_0xe4a8ac(0x42e)]['y'] = this['y'] + 0xc8, this['PfxEmitter'][_0xe4a8ac(0x726)](this['x'], this['y'] - 0x8), this[_0xe4a8ac(0x125b)]['start'](), _0x353566[_0xe4a8ac(0xd2c)][_0xe4a8ac(0x1267)]['PlaySound'](_0x3bb6fd[_0xe4a8ac(0xd2c)]['Hit'], {
                            'volume': 0.4,
                            'detune': 0x3e8 + 0x1f4 * Math[_0xe4a8ac(0x9ad)]()
                        }, 0x96, 0x3), _0x353566[_0xe4a8ac(0xd2c)][_0xe4a8ac(0x1267)]['PlaySound'](_0x3bb6fd[_0xe4a8ac(0xd2c)][_0xe4a8ac(0x1602)], {
                            'volume': 0.1,
                            'detune': -0x1f4 * Math['random']() - 0x1f4
                        }, 0x1c2, 0x1)), this['receivingDamage'] = !0x0);
                    } ['PlayDeadAnimation']() {
                        const _0xca07e0 = _0x57118a;
                        var _0x2144e8;
                        if (null === (_0x2144e8 = this[_0xca07e0(0xfff)]) || void 0x0 === _0x2144e8 || _0x2144e8[_0xca07e0(0x16ca)](), this[_0xca07e0(0x748)][_0xca07e0(0x1631)](), this[_0xca07e0(0x652)](0xff0000), this[_0xca07e0(0x9c4)]) {
                            this[_0xca07e0(0x6d2)]['tweens']['add']({
                                'targets': this,
                                'scale': 0x0,
                                'duration': 0x3e8,
                                'ease': 'Bounce.Out'
                            });
                            let _0x38e48a = this[_0xca07e0(0x6d2)]['add'][_0xca07e0(0x105b)](this['x'], this['y'], this[_0xca07e0(0x174d)][_0xca07e0(0x1381)], this[_0xca07e0(0x670)][_0xca07e0(0x226)])['setTintFill'](0xddddff);
                            this['scene'][_0xca07e0(0x12a1)]['add']({
                                'targets': _0x38e48a,
                                'scale': 0x0,
                                'y': this['y'] - 0x60,
                                'duration': 0x5dc
                            }), this[_0xca07e0(0x6d2)]['tweens'][_0xca07e0(0x18bd)]({
                                'targets': _0x38e48a,
                                'x': this['x'] + 0x18,
                                'duration': 0xfa,
                                'ease': 'Sine.easeInOut',
                                'repeat': 0x3,
                                'yoyo': !0x0
                            });
                        } else this['scene'][_0xca07e0(0x12a1)][_0xca07e0(0x18bd)]({
                            'targets': this,
                            'scaleX': 0x2 * _0x38f4c1['default']['PixelScale'],
                            'duration': 0x3e8,
                            'ease': 'Bounce.Out'
                        }), this['scene'][_0xca07e0(0x12a1)]['add']({
                            'targets': this,
                            'scaleY': 0x0,
                            'duration': 0x3e8,
                            'ease': 'Linear'
                        });
                        this['PfxEmitter']['bounds']['y'] = this['y'] - 0x2, this[_0xca07e0(0x125b)][_0xca07e0(0x726)](this['x'], this['y'] - 0x8), this[_0xca07e0(0x125b)][_0xca07e0(0x1aa2)]();
                    } ['OnDeath']() {
                        const _0x349ed7 = _0x57118a;
                        this[_0x349ed7(0xd20)](), _0x353566['default'][_0x349ed7(0x1043)]['scene']['time']['addEvent']({
                            'delay': 0xfa,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x10735f = _0x349ed7;
                                this['PfxEmitter'][_0x10735f(0x1a34)]();
                            }
                        }), _0x353566['default'][_0x349ed7(0x1043)]['scene'][_0x349ed7(0x915)]['addEvent']({
                            'delay': 0x4e2,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x5932cc = _0x349ed7;
                                this[_0x5932cc(0xfb6)] ? _0x353566[_0x5932cc(0xd2c)]['Core']['SceneManager']['FinalStageGameOver']() : _0x353566[_0x5932cc(0xd2c)][_0x5932cc(0x1043)][_0x5932cc(0x69e)][_0x5932cc(0x92a)]();
                            }
                        });
                    } ['Die']() {
                        const _0x4047a3 = _0x57118a;
                        this[_0x4047a3(0xdae)] = !0x0, this['body']['enable'] = !0x1, this['OnDeath']();
                    } ['Revive'](_0x28b69d = 0x1) {
                        const _0x5aed0b = _0x57118a;
                        this['isDead'] = !0x1, this[_0x5aed0b(0xcf9)][_0x5aed0b(0x543)] = !0x0, this[_0x5aed0b(0x8a2)](_0x38f4c1[_0x5aed0b(0xd2c)]['PixelScale']), this['RecoverHp'](this[_0x5aed0b(0xd2e)] * _0x28b69d, !0x1), this['SetInvulForMilliSeconds'](0x7d0), this[_0x5aed0b(0x1502)] = !0x0, _0x353566[_0x5aed0b(0xd2c)]['Core'][_0x5aed0b(0x141a)]['Update']();
                    } ['plsNoHurt']() {
                        const _0x61f40f = _0x57118a;
                        this[_0x61f40f(0x9c4)] = !0x0, this[_0x61f40f(0x125b)]['setTint'](0xffffff);
                    } ['GetTreasureModifier']() {} ['SetInvulForMilliSeconds'](_0x3e6a99) {
                        const _0x28ec77 = _0x57118a;
                        this[_0x28ec77(0x44b)] = !0x0, this[_0x28ec77(0x1606)] += _0x3e6a99;
                    } ['SetInvulForMilliSecondsNonCumulative'](_0x5b20f0) {
                        const _0x3917c9 = _0x57118a;
                        this[_0x3917c9(0x44b)] = !0x0, this[_0x3917c9(0x1606)] < _0x5b20f0 && (this['invulTime'] = _0x5b20f0);
                    } ['restoreTint']() {
                        const _0x1df2c0 = _0x57118a;
                        this['setTint'](0xffffff), this[_0x1df2c0(0x3f1)] = !0x1;
                    } ['SetCollideWithWorld'](_0x2274d4) {
                        this['setCollideWorldBounds'](_0x2274d4);
                    } ['OnStop']() {
                        const _0x21f65d = _0x57118a;
                        this[_0x21f65d(0x748)]['pause'](), this[_0x21f65d(0x9b5)](0x0), this['anims'][_0x21f65d(0x1631)]();
                    } ['OnMeleeAttackAnim']() {} ['OnRangedAttackAnim']() {} ['Update'](_0x337246 = 0x0) {
                        const _0x5686cb = _0x57118a;
                        if (this[_0x5686cb(0xdae)]) return;
                        this[_0x5686cb(0x1606)] -= _0x337246, this[_0x5686cb(0x1606)] <= 0x0 && (this['invulTime'] = 0x0), this['slowTime'] -= _0x337246, this[_0x5686cb(0x11dd)] <= 0x0 && (this['slowTime'] = 0x0), this['IsInvul'] = this['invulTime'] > 0x0, this['IsSlow'] = this['slowTime'] > 0x0, this[_0x5686cb(0xde9)] = this[_0x5686cb(0x133a)] ? 0.5 : 0x1, this[_0x5686cb(0xb4a)](0x0), this[_0x5686cb(0x11e1)] && (this[_0x5686cb(0xcf9)][_0x5686cb(0xf4e)]['x'] < 0x0 && this[_0x5686cb(0xb8d)](0x1 === this['flipper']), this['body'][_0x5686cb(0xf4e)]['x'] > 0x0 && this['setFlipX'](0x1 != this[_0x5686cb(0x60e)])), 0x0 == this['body'][_0x5686cb(0xf4e)]['x'] && 0x0 == this[_0x5686cb(0xcf9)]['velocity']['y'] ? this['isAnimForced'] || this['OnStop']() : this['HasWalkingAnimation'] ? this[_0x5686cb(0x183e)]['resume']() : this[_0x5686cb(0x748)]['isPaused']() && this['wiggleTween']['play'](), this['historyIndex'] < this[_0x5686cb(0x624)] ? this['historyIndex']++ : this[_0x5686cb(0x1192)] = 0x0, this[_0x5686cb(0x24a)][this['historyIndex']][_0x5686cb(0x850)](this[_0x5686cb(0xcf9)]['position']), this['rtGhosts']['clear'](), this[_0x5686cb(0x158b)][_0x5686cb(0xb4a)](this[_0x5686cb(0x16c6)] - 0x1), this['rtGhosts']['alpha'] = this['ghostAlpha'], this[_0x5686cb(0x158b)]['setTint'](0xe0e0ff, 0xff, 0xe0e0ff, 0xff);
                        let _0x493088 = _0x337246 < 0x43 ? this[_0x5686cb(0x624)] : 0x1;
                        for (let _0x50efa8 = 0x0; _0x50efa8 <= _0x493088; _0x50efa8++) {
                            var _0x28f0c3 = _0x50efa8 + this[_0x5686cb(0x1192)],
                                _0x3bd841 = this['posHistory'][_0x28f0c3 % _0x493088];
                            this[_0x5686cb(0x158b)]['draw'](this, 0.5 * this[_0x5686cb(0x158b)][_0x5686cb(0x173c)] + _0x3bd841['x'] - this[_0x5686cb(0xcf9)]['x'], 0.5 * this[_0x5686cb(0x158b)][_0x5686cb(0x140e)] + _0x3bd841['y'] - this[_0x5686cb(0xcf9)]['y'], 0.1 - 0.1 * _0x50efa8, 0xff);
                        }
                        this[_0x5686cb(0x158b)][_0x5686cb(0xf01)](this), this['WorldBoxCollider']['x'] = this['x'] - 0.5 * this[_0x5686cb(0x6d2)]['renderer'][_0x5686cb(0x173c)], this['WorldBoxCollider']['y'] = this['y'] - 0.5 * this[_0x5686cb(0x6d2)]['renderer'][_0x5686cb(0x140e)], this['HasGFBonus'] && this[_0x5686cb(0x192d)][_0x5686cb(0x1ad9)](_0x337246);
                    } ['OnQuit']() {}
                }
                _0x1ef04d['default'] = _0x1df976;
            };
