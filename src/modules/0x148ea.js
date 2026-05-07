// Module 0x148ea
// Args: _0x395fc6, _0x11c3ae, _0x29968a

export default (_0x395fc6, _0x11c3ae, _0x29968a) => {
                'use strict';
                const _0x7e8071 = a0_0x6932;
                var _0x2dd6bd = this && this['__importDefault'] || function(_0x2dd428) {
                    const _0x2d8b66 = _0x7e8071;
                    return _0x2dd428 && _0x2dd428[_0x2d8b66(0x16f1)] ? _0x2dd428 : {
                        'default': _0x2dd428
                    };
                };
                Object['defineProperty'](_0x11c3ae, '__esModule', {
                    'value': !0x0
                });
                const _0x34d198 = _0x2dd6bd(_0x29968a(0x15dd)),
                    _0x354dc2 = _0x2dd6bd(_0x29968a(0xdfbc)),
                    _0x35686b = _0x2dd6bd(_0x29968a(0x9bda)),
                    _0x21865 = _0x2dd6bd(_0x29968a(0xc42e)),
                    _0x19e394 = _0x2dd6bd(_0x29968a(0x1fd7)),
                    _0x3406cf = _0x2dd6bd(_0x29968a(0x54e3)),
                    _0x5dfc72 = _0x2dd6bd(_0x29968a(0x5f07)),
                    _0x22a1a6 = _0x2dd6bd(_0x29968a(0xd1a1)),
                    _0x18286e = _0x2dd6bd(_0x29968a(0xdb1c));
                class _0x18b4f5 extends _0x18286e['default'] {
                    constructor(_0x1b87f6) {
                        const _0x56cd2e = _0x7e8071;
                        super(_0x1b87f6), this[_0x56cd2e(0x411)] = this['scene'][_0x56cd2e(0x18bd)][_0x56cd2e(0x1791)]('vfx'), this[_0x56cd2e(0x411)][_0x56cd2e(0x14c0)]({
                            'frame': ['PfxColor1.png', 'PfxColor2.png'],
                            'angle': {
                                'min': 0x0,
                                'max': 0xb4
                            },
                            'speed': {
                                'min': 0x19,
                                'max': 0x32
                            },
                            'quantity': 0x1e,
                            'lifespan': {
                                'min': 0x64,
                                'max': 0x190
                            },
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'scale': {
                                'start': 0x2,
                                'end': 0x1
                            },
                            'gravityY': -0x3e8,
                            'tint': 0x0,
                            'on': !0x1
                        }), this[_0x56cd2e(0x1385)] = this[_0x56cd2e(0x6d2)][_0x56cd2e(0x18bd)]['image'](0x0, 0x0, 'items', 'pie.png')['setTintFill'](0xffffff)[_0x56cd2e(0xdab)](0x0);
                    } ['Create']() {
                        const _0x5597d6 = _0x7e8071;
                        _0x5dfc72['default']['Core'][_0x5597d6(0x14d8)][_0x5597d6(0x1b12)][_0x5597d6(0x1303)](_0x354dc2[_0x5597d6(0xd2c)]['NEO']) > -0x1 || -0x1 !== _0x5dfc72[_0x5597d6(0xd2c)][_0x5597d6(0x1043)][_0x5597d6(0x14d8)]['CollectedItems']['indexOf'](_0x21865['default']['RELIC_YELLOW']) && (this[_0x5597d6(0xfc2)] = !0x0, this['enemyPool'] = new _0x22a1a6['default'](this[_0x5597d6(0x6d2)], _0x35686b[_0x5597d6(0xd2c)][_0x5597d6(0xc37)]));
                    } ['Update'](_0x20d0a1) {
                        const _0x3cff07 = _0x7e8071;
                        this[_0x3cff07(0xfc2)] && this[_0x3cff07(0x147f)]() && (this['ChickenTrailSpawned'] || this['StartChickenTrail']());
                    } ['Siffregatoipummarola']() {
                        const _0x4778c9 = _0x7e8071;
                        let _0x127ba6 = _0x5dfc72[_0x4778c9(0xd2c)][_0x4778c9(0x1043)]['PickupGroup']['children'][_0x4778c9(0x10c5)];
                        return !_0x127ba6[_0x4778c9(0x1e6)](_0x55cf73 => _0x55cf73[_0x4778c9(0xeb5)] == _0x21865[_0x4778c9(0xd2c)][_0x4778c9(0x17b3)] && _0x55cf73[_0x4778c9(0x15f6)] === _0x3406cf[_0x4778c9(0xd2c)]['REGEN']) && !_0x127ba6[_0x4778c9(0x1e6)](_0xfbc578 => _0xfbc578['itemType'] == _0x21865[_0x4778c9(0xd2c)][_0x4778c9(0x17b3)] && _0xfbc578[_0x4778c9(0x15f6)] === _0x3406cf[_0x4778c9(0xd2c)][_0x4778c9(0x18d1)]);
                    } ['StartChickenTrail']() {
                        const _0x481371 = _0x7e8071;
                        this['ChickenTrailSpawned'] = !0x0, this['boon'] = this['enemyPool'][_0x481371(0xada)](-0x6c00, -0x3780), this[_0x481371(0xa62)][_0x481371(0x1438)] = this[_0x481371(0x10b6)][_0x481371(0xf7e)](this), this[_0x481371(0xe37)] = this[_0x481371(0x6d2)][_0x481371(0x915)]['addEvent']({
                            'delay': 0x7d0,
                            'callback': () => {
                                const _0x30eaf7 = _0x481371;
                                this[_0x30eaf7(0xde4)]();
                            },
                            'repeat': 0x64
                        });
                    } ['OnDefeated']() {
                        const _0x1bab2e = _0x7e8071;
                        _0x34d198[_0x1bab2e(0xd2c)][_0x354dc2['default'][_0x1bab2e(0xcd7)]][0x0][_0x1bab2e(0x187)] = !0x1, _0x34d198[_0x1bab2e(0xd2c)][_0x354dc2['default']['NEO']][0x0]['isBought'] = !0x1, -0x1 == _0x5dfc72['default']['Core'][_0x1bab2e(0x14d8)]['UnlockedCharacters']['indexOf'](_0x354dc2['default'][_0x1bab2e(0xcd7)]) && (_0x5dfc72[_0x1bab2e(0xd2c)][_0x1bab2e(0x1043)][_0x1bab2e(0x14d8)][_0x1bab2e(0x1b5)][_0x1bab2e(0x1564)](_0x354dc2[_0x1bab2e(0xd2c)]['NEO']), _0x5dfc72[_0x1bab2e(0xd2c)]['Core'][_0x1bab2e(0x14d8)][_0x1bab2e(0x1b12)][_0x1bab2e(0x1564)](_0x354dc2['default']['NEO']), _0x5dfc72[_0x1bab2e(0xd2c)][_0x1bab2e(0x1043)]['PlayerOptions']['Save'](), _0x5dfc72['default']['Sound'][_0x1bab2e(0x7f6)](_0x19e394[_0x1bab2e(0xd2c)][_0x1bab2e(0x8d2)], {
                            'volume': 0x1,
                            'detune': -0x3e8,
                            'rate': 0.5
                        }));
                    } ['SpawnFreeChicken']() {
                        const _0x38245c = _0x7e8071;
                        if (!this[_0x38245c(0xa62)]) return;
                        if (this[_0x38245c(0xa62)]) {
                            let _0x52c317 = new Phaser['Math'][(_0x38245c(0x1551))](this[_0x38245c(0xa62)]['x'], this[_0x38245c(0xa62)]['y']);
                            if (new Phaser['Math'][(_0x38245c(0x1551))](_0x5dfc72[_0x38245c(0xd2c)]['Core'][_0x38245c(0x10f6)]['x'], _0x5dfc72[_0x38245c(0xd2c)][_0x38245c(0x1043)]['Player']['y'])['distanceSq'](_0x52c317) < 0x13880) return void this['scene'][_0x38245c(0x915)]['removeEvent'](this[_0x38245c(0xe37)]);
                        }
                        let _0x42eeb0 = Math['atan2'](this['boon']['y'] - _0x5dfc72[_0x38245c(0xd2c)]['Core'][_0x38245c(0x10f6)]['y'], this[_0x38245c(0xa62)]['x'] - _0x5dfc72['default'][_0x38245c(0x1043)][_0x38245c(0x10f6)]['x']),
                            _0x3dbbf8 = _0x5dfc72[_0x38245c(0xd2c)][_0x38245c(0x1043)][_0x38245c(0x10f6)]['x'] + 0xb4 * Math[_0x38245c(0xd7e)](_0x42eeb0),
                            _0x30a940 = _0x5dfc72['default'][_0x38245c(0x1043)][_0x38245c(0x10f6)]['y'] + 0xb4 * Math['sin'](_0x42eeb0),
                            _0x484b5b = _0x5dfc72[_0x38245c(0xd2c)][_0x38245c(0x1043)]['MakePickup'](_0x3dbbf8, _0x30a940, _0x21865[_0x38245c(0xd2c)][_0x38245c(0x1a43)]);
                        _0x484b5b[_0x38245c(0x381)]('pie.png'), this['scene'][_0x38245c(0x12a1)]['add']({
                            'targets': [_0x484b5b, this['chickenSprite']],
                            'scale': 0x1,
                            'duration': 0x12c,
                            'onStart': () => {
                                const _0x548010 = _0x38245c;
                                _0x484b5b[_0x548010(0x8a2)](0x0), this['chickenSprite'][_0x548010(0x8a2)](0x0), this[_0x548010(0x1385)]['x'] = _0x484b5b['x'], this[_0x548010(0x1385)]['y'] = _0x484b5b['y'], this[_0x548010(0x1385)][_0x548010(0xe71)] = 0x1, this[_0x548010(0x1385)]['setDepth'](_0x484b5b['depth'] + 0x64), this['PfxEmitter_Pickups'][_0x548010(0x108b)](_0x484b5b['x'], _0x484b5b['y']);
                            },
                            'onComplete': () => {
                                const _0x34a8e3 = _0x38245c;
                                this[_0x34a8e3(0x6d2)][_0x34a8e3(0x12a1)]['add']({
                                    'targets': [this[_0x34a8e3(0x1385)]],
                                    'scale': 0x0,
                                    'alpha': 0x1,
                                    'duration': 0x12c,
                                    'onStart': () => {
                                        this['PfxEmitter_Pickups']['emitParticleAt'](_0x484b5b['x'], _0x484b5b['y']);
                                    },
                                    'onComplete': () => {
                                        const _0x1a29dc = _0x34a8e3;
                                        this[_0x1a29dc(0x411)]['emitParticleAt'](_0x484b5b['x'], _0x484b5b['y']);
                                    }
                                });
                            }
                        });
                    } ['OnDestroy']() {}
                }
                _0x11c3ae['default'] = _0x18b4f5;
            };
