// Module 0x1368
// Args: _0xf6ca2d, _0x2e7545, _0x449137

export default (_0xf6ca2d, _0x2e7545, _0x449137) => {
                'use strict';
                const _0x1c65b5 = a0_0x6932;
                var _0x38fa5d = this && this['__importDefault'] || function(_0x58a283) {
                    return _0x58a283 && _0x58a283['__esModule'] ? _0x58a283 : {
                        'default': _0x58a283
                    };
                };
                Object['defineProperty'](_0x2e7545, '__esModule', {
                    'value': !0x0
                }), _0x2e7545['W_NightSword'] = void 0x0;
                const _0x13481c = _0x38fa5d(_0x449137(0xc42e)),
                    _0x299d24 = _0x38fa5d(_0x449137(0x54e3)),
                    _0x1a3de5 = _0x38fa5d(_0x449137(0x5f07)),
                    _0x5ceb39 = _0x38fa5d(_0x449137(0x4a9d)),
                    _0x317043 = _0x38fa5d(_0x449137(0xe49a));
                class _0x3f7533 extends _0x317043['default'] {
                    constructor(_0x373245) {
                        const _0x457ce4 = _0x1c65b5;
                        super(_0x373245), this[_0x457ce4(0x546)] = 0x0, this['fireAngles'] = [0x14, -0x14, -0x46, 0x1e, -0x1e, 0x46], this['fireX'] = [-0x10, 0x10, 0x0, 0x10, -0x10, 0x0], this['canFinish'] = !0x1, this[_0x457ce4(0x727)] = 0x258, this['volume'] = 0x1, this[_0x457ce4(0xa76)] = [], this[_0x457ce4(0x1af)] = this['ExplodeOnPlayer'][_0x457ce4(0xf7e)](this), _0x1a3de5[_0x457ce4(0xd2c)][_0x457ce4(0x1043)][_0x457ce4(0x6d2)][_0x457ce4(0xdc4)][_0x457ce4(0x1299)]('Player_ReceivedDamage', this[_0x457ce4(0x1af)]), _0x1a3de5[_0x457ce4(0xd2c)][_0x457ce4(0x1043)][_0x457ce4(0x6d2)][_0x457ce4(0xdc4)]['addListener']('Player_LostShield', this[_0x457ce4(0x1af)]), this['canExplode'] = !0x0, this[_0x457ce4(0xdfc)] = _0x299d24['default'][_0x457ce4(0x1017)], this[_0x457ce4(0x4c4)] = !0x1, this['canCrit'] = !0x1;
                    } ['SetAsRetaliatoryOnly']() {
                        const _0x3836b8 = _0x1c65b5;
                        this[_0x3836b8(0x19b7)] && this[_0x3836b8(0x19b7)][_0x3836b8(0x16ca)](), this[_0x3836b8(0x727)] = 0x3e8, this[_0x3836b8(0x839)] = this[_0x3836b8(0x10eb)]['bind'](this);
                    } ['RemovedFiringTimer']() {
                        const _0x30ceb3 = _0x1c65b5;
                        this[_0x30ceb3(0x19b7)] && this['firingTimer']['destroy']();
                    }
                    get['PPower']() {
                        const _0x1db757 = _0x1c65b5;
                        return super['PPower'] + _0x1a3de5[_0x1db757(0xd2c)][_0x1db757(0x1043)]['Arcanas'][_0x1db757(0x1117)];
                    } ['LevelUp']() {
                        const _0x19e9e3 = _0x1c65b5;
                        let _0x44da57 = super[_0x19e9e3(0x2ab)]();
                        return this['level'], _0x44da57;
                    } ['Fire']() {
                        const _0x3962a2 = _0x1c65b5;
                        let _0x3fdb85 = this[_0x3962a2(0xfc4)](_0x1a3de5['default']['Core']['Player'], _0x1a3de5['default']['Core']['Enemies']);
                        if (_0x3fdb85[_0x3962a2(0xed9)] > 0x1 ? this['target'] = _0x3fdb85[_0x3fdb85['length'] - 0x1 - Math[_0x3962a2(0xe07)](Math['random']() * _0x3fdb85[_0x3962a2(0xed9)] * 0.5)] : this[_0x3962a2(0x18a7)] = _0x3fdb85[0x0], this['FireOneBullet'](_0x1a3de5[_0x3962a2(0xd2c)][_0x3962a2(0x1043)]['Player']['x'], _0x1a3de5['default'][_0x3962a2(0x1043)][_0x3962a2(0x10f6)]['y'], 0x0, this[_0x3962a2(0x18a7)]), this[_0x3962a2(0x942)] > 0x1) {
                            for (let _0x17e6ad = 0x1; _0x17e6ad < this[_0x3962a2(0x942)]; _0x17e6ad++) this[_0x3962a2(0x7ea)] * _0x17e6ad > 0x0 ? this[_0x3962a2(0x11fa)] = _0x1a3de5[_0x3962a2(0xd2c)][_0x3962a2(0x1043)][_0x3962a2(0x6d2)]['time'][_0x3962a2(0x12b8)]({
                                'delay': this[_0x3962a2(0x7ea)] * _0x17e6ad,
                                'loop': !0x1,
                                'callback': () => {
                                    const _0x2ccd6c = _0x3962a2;
                                    this['FireOneBullet'](_0x1a3de5[_0x2ccd6c(0xd2c)][_0x2ccd6c(0x1043)][_0x2ccd6c(0x10f6)]['x'], _0x1a3de5['default']['Core']['Player']['y'], _0x17e6ad, this[_0x2ccd6c(0x18a7)]);
                                }
                            }) : this['FireOneBullet'](_0x1a3de5['default'][_0x3962a2(0x1043)][_0x3962a2(0x10f6)]['x'], _0x1a3de5[_0x3962a2(0xd2c)][_0x3962a2(0x1043)][_0x3962a2(0x10f6)]['y'], _0x17e6ad, this[_0x3962a2(0x18a7)]);
                        }
                        this[_0x3962a2(0x162d)] != this[_0x3962a2(0x170c)] && (this[_0x3962a2(0x162d)] = this['PInterval'], this[_0x3962a2(0x839)]());
                    } ['closest'](_0x36742f, _0x2f71dc) {
                        const _0x26f77c = _0x1c65b5;
                        for (var _0x525b0e = Number[_0x26f77c(0x930)], _0x5a19bf = null, _0x1b1a63 = [], _0x5bbad5 = _0x36742f['x'], _0x5ec5f7 = _0x36742f['y'], _0x4d1603 = _0x2f71dc[_0x26f77c(0xed9)], _0x5e6a78 = 0x0; _0x5e6a78 < _0x4d1603; _0x5e6a78++) {
                            var _0x5b86c2 = _0x2f71dc[_0x5e6a78];
                            if (!_0x5b86c2[_0x26f77c(0xdae)]) {
                                var _0x17208b = _0x5b86c2['body'] || _0x5b86c2,
                                    _0x4af361 = Phaser['Math'][_0x26f77c(0x14c8)]['Between'](_0x5bbad5, _0x5ec5f7, _0x17208b['center']['x'], _0x17208b[_0x26f77c(0x995)]['y']);
                                _0x4af361 < _0x525b0e && (_0x5a19bf = _0x5b86c2, _0x525b0e = _0x4af361, _0x1b1a63['push'](_0x5a19bf));
                            }
                        }
                        return _0x1b1a63;
                    } ['CleanUp']() {
                        const _0xe342fd = _0x1c65b5;
                        super['CleanUp'](), _0x1a3de5[_0xe342fd(0xd2c)]['Core']['scene']['events']['removeListener']('Player_ReceivedDamage', this[_0xe342fd(0x1af)]), _0x1a3de5[_0xe342fd(0xd2c)][_0xe342fd(0x1043)][_0xe342fd(0x6d2)][_0xe342fd(0xdc4)][_0xe342fd(0x1ab3)]('Player_LostShield', this[_0xe342fd(0x1af)]);
                    } ['ExplodeOnPlayer']() {
                        const _0x2a4fa9 = _0x1c65b5;
                        if (this['canExplode']) {
                            this[_0x2a4fa9(0x36d)] = !0x1, _0x1a3de5['default']['Core']['scene'][_0x2a4fa9(0x915)][_0x2a4fa9(0x17fb)](this[_0x2a4fa9(0x179b)]), this['ExplodeTimer'] = _0x1a3de5[_0x2a4fa9(0xd2c)][_0x2a4fa9(0x1043)]['scene'][_0x2a4fa9(0x915)]['addEvent']({
                                'delay': Math[_0x2a4fa9(0x1981)](this['PInterval'], this[_0x2a4fa9(0x727)]),
                                'callback': () => {
                                    const _0x276f08 = _0x2a4fa9;
                                    this[_0x276f08(0x36d)] = !0x0;
                                }
                            }), this['SpawnExplosionAt'](_0x1a3de5['default'][_0x2a4fa9(0x1043)][_0x2a4fa9(0x10f6)]['x'], _0x1a3de5['default'][_0x2a4fa9(0x1043)][_0x2a4fa9(0x10f6)]['y'], 0x0);
                            for (let _0x1861fb = 0x1; _0x1861fb < 0x6; _0x1861fb++) _0x1a3de5['default']['Core'][_0x2a4fa9(0x6d2)]['time']['addEvent']({
                                'delay': this[_0x2a4fa9(0x7ea)] * _0x1861fb,
                                'loop': !0x1,
                                'callback': () => {
                                    const _0x537e1f = _0x2a4fa9;
                                    this['SpawnExplosionAt'](_0x1a3de5[_0x537e1f(0xd2c)][_0x537e1f(0x1043)][_0x537e1f(0x10f6)]['x'], _0x1a3de5['default']['Core'][_0x537e1f(0x10f6)]['y'], _0x1861fb);
                                }
                            });
                        }
                    } ['SpawnExplosionAt'](_0x78f61b, _0x1d87e7, _0x18a924 = 0x0, _0x5bcca8 = 0x1, _0x30d29a = 0x1) {
                        const _0x1eaf9c = _0x1c65b5;
                        this[_0x1eaf9c(0x11a6)] || (this['secondaryPool'] = new _0x5ceb39['default'](_0x1a3de5[_0x1eaf9c(0xd2c)][_0x1eaf9c(0x1043)][_0x1eaf9c(0x6d2)], this['explosionType']), _0x1a3de5['default'][_0x1eaf9c(0x1043)]['scene']['physics'][_0x1eaf9c(0x18bd)][_0x1eaf9c(0x13d7)](this['secondaryPool'], _0x1a3de5[_0x1eaf9c(0xd2c)][_0x1eaf9c(0x1043)][_0x1eaf9c(0x1a91)], this['onBulletOverlapsEnemy_Retaliation']['bind'](this)), _0x1a3de5[_0x1eaf9c(0xd2c)][_0x1eaf9c(0x1043)]['scene'][_0x1eaf9c(0x1585)]['add'][_0x1eaf9c(0x13d7)](this['secondaryPool'], _0x1a3de5[_0x1eaf9c(0xd2c)]['Core']['Destructibles'], this[_0x1eaf9c(0x823)][_0x1eaf9c(0xf7e)](this)));
                        let _0x290403 = this['secondaryPool']['SpawnAt'](_0x78f61b, _0x1d87e7, this, _0x18a924);
                        return _0x290403 && _0x290403[_0x1eaf9c(0x3b9)](_0x1a3de5['default'][_0x1eaf9c(0x1043)][_0x1eaf9c(0x10f6)]), _0x290403;
                    } ['onBulletOverlapsEnemy'](_0x4481f9, _0x395de7) {
                        const _0x3bcbc2 = _0x1c65b5;
                        var _0x108eaa = _0x395de7;
                        if (!_0x108eaa[_0x3bcbc2(0xdae)] && !_0x4481f9[_0x3bcbc2(0x1738)](_0x108eaa) && (_0x108eaa['GetDamaged'](this['PPower'], this['hitVFX'], this[_0x3bcbc2(0x1992)], this['bulletType']), this['stats_inflictedDamage'] += this['PPower'], _0x108eaa[_0x3bcbc2(0xdae)])) {
                            let _0x53b8 = Math[_0x3bcbc2(0x9ad)]();
                            if (this['chance'] * _0x1a3de5[_0x3bcbc2(0xd2c)][_0x3bcbc2(0x1043)][_0x3bcbc2(0x10f6)][_0x3bcbc2(0x17b9)] > _0x53b8) {
                                let _0x4c82e3 = 0xa * (_0x53b8 - 0.5),
                                    _0x3bf419 = _0x1a3de5['default'][_0x3bcbc2(0x1043)][_0x3bcbc2(0xccb)](_0x108eaa['x'] + _0x4c82e3, _0x108eaa['y'] - _0x4c82e3, _0x13481c['default'][_0x3bcbc2(0x21b)]);
                                _0x3bf419['goToPlayer'] = !0x0, _0x3bf419['time'] = 0x1;
                            }
                        }
                    } ['onBulletOverlapsEnemy_Retaliation'](_0x2d5e09, _0x1a2761) {
                        const _0x5f22d8 = _0x1c65b5;
                        var _0x2af30c = _0x1a2761;
                        if (!_0x2af30c['isDead'] && !_0x2d5e09['HasAlreadyHitObject'](_0x2af30c)) {
                            let _0x33e0c6 = _0x1a3de5[_0x5f22d8(0xd2c)]['Core'][_0x5f22d8(0x10f6)][_0x5f22d8(0xa83)] > 0x0 ? 0x1 + 0.1 * _0x1a3de5[_0x5f22d8(0xd2c)]['Core']['Player'][_0x5f22d8(0xa83)] : 0x1,
                                _0x10f5ab = this['PPower'] * _0x33e0c6;
                            if (_0x2af30c[_0x5f22d8(0x1112)](_0x10f5ab, this['hitVFX'], this[_0x5f22d8(0x1992)], this[_0x5f22d8(0x14e)]), this[_0x5f22d8(0xb3d)] += _0x10f5ab, _0x1a3de5[_0x5f22d8(0xd2c)][_0x5f22d8(0x1043)]['Arcanas']['hasDivineBloodline'] && _0x2af30c[_0x5f22d8(0xdae)] && _0x1a3de5['default']['Core'][_0x5f22d8(0x1884)]['IncreaseBloodlineBonus'](), _0x2af30c['isDead']) {
                                let _0x4307e9 = Math[_0x5f22d8(0x9ad)]();
                                if (this[_0x5f22d8(0xd71)] * _0x1a3de5['default'][_0x5f22d8(0x1043)]['Player']['PLuck'] > _0x4307e9) {
                                    let _0x5e8cca = 0xa * (_0x4307e9 - 0.5),
                                        _0x28159d = _0x1a3de5['default'][_0x5f22d8(0x1043)][_0x5f22d8(0xccb)](_0x2af30c['x'] + _0x5e8cca, _0x2af30c['y'] - _0x5e8cca, _0x13481c['default']['LITTLEHEART']);
                                    _0x28159d[_0x5f22d8(0x12a8)] = !0x0, _0x28159d[_0x5f22d8(0x915)] = 0x1;
                                }
                            }
                        }
                    }
                }
                _0x2e7545['W_NightSword'] = _0x3f7533, _0x2e7545['default'] = _0x3f7533;
            };
