// Module 0x7051
// Args: _0x117959, _0x3db88a, _0x501e13

export default (_0x117959, _0x3db88a, _0x501e13) => {
                'use strict';
                const _0x25b808 = a0_0x6932;
                var _0x30da40 = this && this['__importDefault'] || function(_0xc110a6) {
                    const _0x4af999 = _0x25b808;
                    return _0xc110a6 && _0xc110a6[_0x4af999(0x16f1)] ? _0xc110a6 : {
                        'default': _0xc110a6
                    };
                };
                Object['defineProperty'](_0x3db88a, '__esModule', {
                    'value': !0x0
                }), _0x3db88a['W_Vento2'] = void 0x0;
                const _0x348e5a = _0x30da40(_0x501e13(0x9b68)),
                    _0x3cad39 = _0x30da40(_0x501e13(0x54e3)),
                    _0x57327f = _0x30da40(_0x501e13(0x5f07)),
                    _0x3001bc = _0x30da40(_0x501e13(0x4a9d)),
                    _0x4bad6f = _0x30da40(_0x501e13(0xe49a));
                class _0x491dc0 extends _0x4bad6f['default'] {
                    constructor(_0xa56491) {
                        const _0xcf0662 = _0x25b808;
                        super(_0xa56491), this[_0xcf0662(0x492)] = 0x3e8 / 0x6, this['canHeal'] = !0x0, this[_0xcf0662(0x5fd)] = 0x1f4, this['canExplode'] = !0x0, this[_0xcf0662(0x15bc)] = 0x1f4, this['walked'] = 0x0, this[_0xcf0662(0xc8a)] = 0x0, this[_0xcf0662(0xb78)] = 0x0, this[_0xcf0662(0x14c5)] = new Array(), this[_0xcf0662(0x8d9)] = new Array();
                        const _0x549442 = [0x1e, 0x14, 0x18, 0xe];
                        for (let _0x4a85bf = 0x0; _0x4a85bf < 0x1; _0x4a85bf++) {
                            var _0x1b2422 = _0x57327f[_0xcf0662(0xd2c)]['Core']['scene'][_0xcf0662(0x8f2)][_0xcf0662(0x752)]({
                                'x': -Number['MAX_SAFE_INTEGER'],
                                'y': -Number[_0xcf0662(0x1aaa)],
                                'width': 0x10,
                                'height': 0x10
                            });
                            _0x1b2422['saveTexture']('castoro' + _0x4a85bf), this[_0xcf0662(0x14c5)]['push'](_0x1b2422);
                        }
                        var _0x198f29 = new Array();
                        for (let _0x2c9ae0 = 0x0; _0x2c9ae0 < 0x14; _0x2c9ae0++) {
                            var _0x5c3395 = 'leaf' + String(_0x2c9ae0)['padStart'](0x4, '0') + '.png';
                            _0x198f29['push']({
                                'key': 'vfx',
                                'frame': _0x5c3395
                            });
                        }
                        for (let _0xa2f35d = 0x0; _0xa2f35d < 0x1; _0xa2f35d++) {
                            var _0x24d939 = _0x57327f[_0xcf0662(0xd2c)][_0xcf0662(0x1043)][_0xcf0662(0x6d2)][_0xcf0662(0x18bd)]['sprite'](-Number[_0xcf0662(0x1aaa)], -Number['MAX_SAFE_INTEGER'], 'vfx', '')[_0xcf0662(0xf8e)](0x0);
                            _0x24d939[_0xcf0662(0x183e)]['create']({
                                'key': 'spin',
                                'frames': _0x198f29,
                                'frameRate': _0x549442[_0xa2f35d % 0x4],
                                'repeat': -0x1
                            }), _0x24d939['anims']['play']('spin'), this['_coinSprites'][_0xcf0662(0x1564)](_0x24d939);
                        }
                    } ['CheckArcanas']() {
                        const _0x306d24 = _0x25b808;
                        _0x57327f[_0x306d24(0xd2c)][_0x306d24(0x1043)]['Arcanas']['ActiveArcanas'][_0x306d24(0x1303)](_0x348e5a['default'][_0x306d24(0x954)]) > -0x1 && (this[_0x306d24(0xdda)] = !0x0), super['CheckArcanas']();
                    }
                    get['PPower']() {
                        const _0x50ea86 = _0x25b808;
                        return super['PPower'] + this[_0x50ea86(0xc8a)];
                    } ['onBulletOverlapsEnemy'](_0x5aa04d, _0x12e812) {
                        const _0x2b9c95 = _0x25b808;
                        var _0x95fe1e = _0x12e812;
                        if (_0x95fe1e[_0x2b9c95(0xdae)]) return;
                        let _0x4db252 = Math['random']() < this['critChance'] * _0x57327f['default'][_0x2b9c95(0x1043)][_0x2b9c95(0x10f6)][_0x2b9c95(0x17b9)] ? this['critMul'] * _0x57327f[_0x2b9c95(0xd2c)]['Core'][_0x2b9c95(0x1884)]['CritMul'] : 0x1;
                        if (_0x4db252 > 0x1 && (this[_0x2b9c95(0x6fe)] && (this['canHeal'] = !0x1, _0x57327f[_0x2b9c95(0xd2c)][_0x2b9c95(0x1043)][_0x2b9c95(0x10f6)]['RecoverHp'](0x8, !0x0), this['healTimer'] = _0x57327f['default']['Core']['scene'][_0x2b9c95(0x915)][_0x2b9c95(0x12b8)]({
                                'delay': this['healDelay'],
                                'loop': !0x1,
                                'callback': () => {
                                    this['canHeal'] = !0x0;
                                }
                            })), this[_0x2b9c95(0x36d)])) {
                            this['canExplode'] = !0x1, this['explodeTimer'] = _0x57327f[_0x2b9c95(0xd2c)][_0x2b9c95(0x1043)]['scene'][_0x2b9c95(0x915)][_0x2b9c95(0x12b8)]({
                                'delay': this[_0x2b9c95(0x15bc)],
                                'loop': !0x1,
                                'callback': () => {
                                    const _0x2ec57e = _0x2b9c95;
                                    this[_0x2ec57e(0x36d)] = !0x0;
                                }
                            });
                            let _0x4b24f9 = _0x95fe1e ? _0x95fe1e['x'] : _0x57327f['default']['Core'][_0x2b9c95(0x10f6)]['x'],
                                _0x112397 = _0x95fe1e ? _0x95fe1e['y'] : _0x57327f[_0x2b9c95(0xd2c)][_0x2b9c95(0x1043)][_0x2b9c95(0x10f6)]['y'];
                            this[_0x2b9c95(0x11a6)][_0x2b9c95(0xada)](_0x4b24f9, _0x112397, this, 0x0);
                        }
                        if (!_0x5aa04d[_0x2b9c95(0x1738)](_0x95fe1e)) {
                            let _0x536cb1 = this[_0x2b9c95(0xaae)] * _0x4db252;
                            _0x95fe1e[_0x2b9c95(0x1112)](_0x536cb1, this['hitVFX'], this['knockback'], this[_0x2b9c95(0x14e)]), this[_0x2b9c95(0xb3d)] += _0x536cb1;
                        }
                    } ['onExplosionOverlapsEnemy'](_0x820ac7, _0x4b2f72) {
                        const _0x1bacba = _0x25b808;
                        var _0x256e1b = _0x4b2f72;
                        if (_0x256e1b[_0x1bacba(0xdae)]) return;
                        let _0x4bcde7 = Math['random']() < this['critChance'] * _0x57327f['default'][_0x1bacba(0x1043)][_0x1bacba(0x10f6)][_0x1bacba(0x17b9)] ? this['critMul'] * _0x57327f['default']['Core']['Arcanas'][_0x1bacba(0x1a5f)] : 0x1;
                        if (_0x4bcde7 > 0x1 && this[_0x1bacba(0x6fe)] && (this['canHeal'] = !0x1, _0x57327f['default'][_0x1bacba(0x1043)][_0x1bacba(0x10f6)][_0x1bacba(0x7b2)](0x8, !0x0), this['healTimer'] = _0x57327f[_0x1bacba(0xd2c)]['Core']['scene'][_0x1bacba(0x915)][_0x1bacba(0x12b8)]({
                                'delay': this[_0x1bacba(0x5fd)],
                                'loop': !0x1,
                                'callback': () => {
                                    this['canHeal'] = !0x0;
                                }
                            })), !_0x820ac7['HasAlreadyHitObject'](_0x256e1b)) {
                            let _0x3317ba = this['PPower'] * _0x4bcde7;
                            _0x256e1b['GetDamaged'](_0x3317ba, this['hitVFX'], this['knockback'], this[_0x1bacba(0x14e)]), this[_0x1bacba(0xb3d)] += _0x3317ba;
                        }
                    } ['Update'](_0x1b6b3c) {
                        const _0x12e035 = _0x25b808;
                        super[_0x12e035(0xa9f)](_0x1b6b3c), _0x57327f[_0x12e035(0xd2c)]['Core']['Player']['walked'] <= 0x0 ? this[_0x12e035(0x1329)] || (this[_0x12e035(0x1329)] = _0x57327f[_0x12e035(0xd2c)][_0x12e035(0x1043)]['scene']['time'][_0x12e035(0x12b8)]({
                            'delay': 0x1f4,
                            'callback': () => {
                                const _0x2f6bf0 = _0x12e035;
                                _0x57327f[_0x2f6bf0(0xd2c)]['Core'][_0x2f6bf0(0x10f6)][_0x2f6bf0(0x7c0)] <= 0x0 && (this['walked'] = 0x0, this[_0x2f6bf0(0x1329)] = null, this[_0x2f6bf0(0xc8a)] = 0x0);
                            }
                        })) : (_0x57327f[_0x12e035(0xd2c)]['Core'][_0x12e035(0x6d2)]['time'][_0x12e035(0x17fb)](this[_0x12e035(0x1329)]), this['walkedTimer'] = null, this[_0x12e035(0x7c0)] += _0x57327f[_0x12e035(0xd2c)][_0x12e035(0x1043)]['Player'][_0x12e035(0x1c3)], this['walkBonus'] = Math[_0x12e035(0x1084)](0x4, this[_0x12e035(0x7c0)] / 0x30d40)), this[_0x12e035(0xb78)] += _0x1b6b3c, this['totalTime'] += _0x57327f[_0x12e035(0xd2c)][_0x12e035(0x1043)]['Player'][_0x12e035(0x1c3)] * (_0x1b6b3c / this[_0x12e035(0x492)]), this[_0x12e035(0xb78)] >= this[_0x12e035(0x170c)] && (this[_0x12e035(0xb78)] = 0x0, this[_0x12e035(0x1754)]());
                        for (let _0xa8a0e4 = 0x0; _0xa8a0e4 < this[_0x12e035(0x14c5)]['length']; _0xa8a0e4++) {
                            const _0x37dd93 = this[_0x12e035(0x14c5)][_0xa8a0e4];
                            _0x37dd93[_0x12e035(0x159)](), _0x37dd93[_0x12e035(0x4a6)](this[_0x12e035(0x8d9)][_0xa8a0e4], 0x0, 0x0);
                        }
                    } ['ResetFiringTimer']() {
                        const _0xdfc998 = _0x25b808;
                        this[_0xdfc998(0x19b7)] && this['firingTimer'][_0xdfc998(0x16ca)]();
                    } ['CleanUp']() {
                        const _0x3ed5d0 = _0x25b808;
                        var _0x50f3a4, _0x1c831f, _0x58e40b;
                        this[_0x3ed5d0(0x19b7)] && this['firingTimer'][_0x3ed5d0(0x16ca)](), null === (_0x50f3a4 = this[_0x3ed5d0(0xc82)]) || void 0x0 === _0x50f3a4 || _0x50f3a4[_0x3ed5d0(0x13f4)][_0x3ed5d0(0x858)](_0x2d4168 => {
                            _0x2d4168['DeSpawn']();
                        }), null === (_0x1c831f = this[_0x3ed5d0(0x11a6)]) || void 0x0 === _0x1c831f || _0x1c831f[_0x3ed5d0(0x13f4)][_0x3ed5d0(0x858)](_0x1fc507 => {
                            const _0x420d99 = _0x3ed5d0;
                            _0x1fc507[_0x420d99(0x14fb)]();
                        }), null === (_0x58e40b = this[_0x3ed5d0(0xabf)]) || void 0x0 === _0x58e40b || _0x58e40b[_0x3ed5d0(0x13f4)]['forEach'](_0x50c50e => {
                            _0x50c50e['DeSpawn']();
                        });
                    } ['OnStart']() {
                        const _0x31c7ea = _0x25b808;
                        super[_0x31c7ea(0xec7)](), this['secondaryPool'] = new _0x3001bc['default'](_0x57327f[_0x31c7ea(0xd2c)]['Core']['scene'], _0x3cad39[_0x31c7ea(0xd2c)]['VENTO2_EXPLO']), this[_0x31c7ea(0xabf)] = new _0x3001bc[(_0x31c7ea(0xd2c))](_0x57327f['default']['Core']['scene'], _0x3cad39[_0x31c7ea(0xd2c)]['VENTO2_EXTRA']), this['fireCount'] = 0x0, this['canCrit'] = !0x0, _0x57327f[_0x31c7ea(0xd2c)]['Core'][_0x31c7ea(0x6d2)]['physics']['add'][_0x31c7ea(0x13d7)](this[_0x31c7ea(0x11a6)], _0x57327f['default'][_0x31c7ea(0x1043)]['Enemies'], this[_0x31c7ea(0x17e1)][_0x31c7ea(0xf7e)](this)), _0x57327f['default']['Core'][_0x31c7ea(0x6d2)]['physics'][_0x31c7ea(0x18bd)][_0x31c7ea(0x13d7)](this[_0x31c7ea(0x11a6)], _0x57327f['default'][_0x31c7ea(0x1043)][_0x31c7ea(0xa08)], this['onBulletOverlapsDestuctible'][_0x31c7ea(0xf7e)](this)), _0x57327f[_0x31c7ea(0xd2c)][_0x31c7ea(0x1043)][_0x31c7ea(0x6d2)][_0x31c7ea(0x1585)]['add']['overlap'](this[_0x31c7ea(0xabf)], _0x57327f['default'][_0x31c7ea(0x1043)]['Enemies'], this['onBulletOverlapsEnemy']['bind'](this)), _0x57327f['default']['Core'][_0x31c7ea(0x6d2)]['physics']['add'][_0x31c7ea(0x13d7)](this[_0x31c7ea(0xabf)], _0x57327f[_0x31c7ea(0xd2c)]['Core']['Destructibles'], this[_0x31c7ea(0x823)][_0x31c7ea(0xf7e)](this));
                    } ['FireOneBullet'](_0x35a358, _0x31fecf, _0x311ebf, _0x5e1e5e) {
                        const _0x2e9f5b = _0x25b808;
                        var _0x472ed1 = this[_0x2e9f5b(0xc82)][_0x2e9f5b(0xada)](_0x35a358, _0x31fecf, this, _0x311ebf);
                        _0x5e1e5e && _0x472ed1 && _0x472ed1['SetTarget'](_0x5e1e5e);
                        var _0x444ae2 = this[_0x2e9f5b(0xabf)]['SpawnAt'](_0x35a358, _0x31fecf, this, _0x311ebf);
                        return _0x5e1e5e && _0x444ae2 && _0x444ae2[_0x2e9f5b(0x3b9)](_0x5e1e5e), _0x472ed1;
                    }
                }
                _0x3db88a['W_Vento2'] = _0x491dc0, _0x3db88a['default'] = _0x491dc0;
            };
