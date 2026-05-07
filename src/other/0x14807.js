// Module 0x14807
// Args: _0xa93fe7, _0x210f24, _0xc57a58

export default (_0xa93fe7, _0x210f24, _0xc57a58) => {
                'use strict';
                const _0x20ab12 = a0_0x6932;
                var _0x21879a = this && this['__importDefault'] || function(_0x2965c5) {
                    const _0x4caf7a = a0_0x6932;
                    return _0x2965c5 && _0x2965c5['__esModule'] ? _0x2965c5 : {
                        'default': _0x2965c5
                    };
                };
                Object['defineProperty'](_0x210f24, '__esModule', {
                    'value': !0x0
                });
                const _0x58995a = _0xc57a58(0x18304),
                    _0x383dd9 = _0x21879a(_0xc57a58(0x15dd)),
                    _0x19b17b = _0x21879a(_0xc57a58(0xdfbc)),
                    _0x21d4c0 = _0x21879a(_0xc57a58(0x9bda)),
                    _0x5cc35f = _0x21879a(_0xc57a58(0x1fd7)),
                    _0x1947fc = _0x21879a(_0xc57a58(0x54e3)),
                    _0x57ee5b = _0x21879a(_0xc57a58(0x5103)),
                    _0x11627a = _0x21879a(_0xc57a58(0x5f07)),
                    _0x385731 = _0x21879a(_0xc57a58(0x1166a)),
                    _0x10cf17 = _0x21879a(_0xc57a58(0xd1a1));
                class _0x1e8532 extends _0x385731['default'] {
                    constructor() {
                        const _0x5b23c9 = _0x20ab12;
                        super(...arguments), this['hasLostTreasure'] = !0x1, this[_0x5b23c9(0x197b)] = {
                            'x': 0x18,
                            'y': -0x42
                        }, this[_0x5b23c9(0x112f)] = !0x1, this['done'] = !0x1, this[_0x5b23c9(0x1aa9)] = !0x1, this[_0x5b23c9(0xf65)] = !0x0, this['GoNutsMinute'] = 0xa, this['distanceMultiplier'] = 0.45;
                    } ['OnRecycle']() {
                        const _0x37fd8d = _0x20ab12;
                        if (super[_0x37fd8d(0x5ce)](), this['isFresh'] = !0x0, this['isCullable'] = !0x1, this['hasLostTreasure'] = !0x1, this[_0x37fd8d(0x8ee)] || (this['ringSprite'] = this['scene'][_0x37fd8d(0x18bd)][_0x37fd8d(0x568)](this['x'], this['y'], 'vfx', 'sPFX_ring_64.png')['setScale'](0x0)['setBlendMode'](_0x58995a['BlendModes']['ADD'])), this[_0x37fd8d(0x8a2)](0x0), this[_0x37fd8d(0xd9b)] = this[_0x37fd8d(0x6d2)][_0x37fd8d(0x12a1)][_0x37fd8d(0x18bd)]({
                                'targets': this,
                                'scale': this[_0x37fd8d(0x17ef)],
                                'duration': 0x12c,
                                'onStart': () => {
                                    this['setScale'](0x0);
                                }
                            }), !this[_0x37fd8d(0x74a)]) {
                            let _0x1a08ec = new _0x10cf17[(_0x37fd8d(0xd2c))](this[_0x37fd8d(0x6d2)], _0x21d4c0['default']['BULLET_W']);
                            this[_0x37fd8d(0x74a)] = _0x1a08ec[_0x37fd8d(0xada)](this['x'], this['y']), this['particlesManager'] = this[_0x37fd8d(0x6d2)]['add']['particles']('vfx'), this[_0x37fd8d(0x125b)] = this[_0x37fd8d(0x1761)][_0x37fd8d(0x14c0)]({
                                'frame': ['WhiteDot.png'],
                                'quantity': 0xa,
                                'lifespan': 0x7d0,
                                'alpha': {
                                    'start': 0.7,
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
                                    'start': 0x2 * _0x57ee5b['default']['PixelScale'],
                                    'end': 0x0
                                },
                                'gravityY': 0x12c,
                                'tint': 0xbbbbff,
                                'bounce': {
                                    'min': 0.2,
                                    'max': 0.5
                                },
                                'bounds': {
                                    'x': 0x0,
                                    'y': -0x14,
                                    'w': 0x0,
                                    'h': 0x1
                                },
                                'collideTop': !0x1,
                                'collideBottom': !0x0,
                                'collideLeft': !0x1,
                                'collideRight': !0x1,
                                'on': !0x1
                            }), this['PfxEmitter']['bounds']['y'] = this['y'] + 0xc8, this[_0x37fd8d(0x125b)][_0x37fd8d(0x726)](this['x'], this['y'] - 0x8), this[_0x37fd8d(0x125b)][_0x37fd8d(0x1aa2)]();
                        }
                    } ['GetSpawnY']() {
                        const _0x290553 = _0x20ab12;
                        return _0x11627a[_0x290553(0xd2c)][_0x290553(0x1043)][_0x290553(0x10f6)]['y'] + 0.5 * this['scene'][_0x290553(0x12f9)][_0x290553(0x140e)];
                    } ['Disappear']() {
                        const _0x32d305 = _0x20ab12;
                        this[_0x32d305(0x177d)] = !0x0, this['isTeleportOnCull'] = !0x1, this[_0x32d305(0x74a)][_0x32d305(0xe6f)](), this[_0x32d305(0x125b)]['stop']();
                    } ['Update'](_0x3b26a7) {
                        const _0x371129 = _0x20ab12;
                        this[_0x371129(0xf65)] && (this['x'] = _0x11627a['default']['Core']['Player']['x'], this['y'] = this[_0x371129(0x1333)](), this[_0x371129(0xf65)] = !0x1), this['isTeleportOnCull'] = !0x1, this[_0x371129(0x78e)] = 0x0, super['Update'](_0x3b26a7), this['dismissed'] || (this['x'] = this[_0x371129(0x10db)](this['x'], _0x11627a[_0x371129(0xd2c)][_0x371129(0x1043)][_0x371129(0x10f6)]['x'] - this['scene']['renderer']['width'] * this[_0x371129(0x1a28)] + 0x60, 0x64 * _0x3b26a7));
                        let _0x3e2755 = _0x11627a['default']['Core']['SurvivedSeconds'] > 0x3c * this['GoNutsMinute'] ? 1.3 : 0.1;
                        if (_0x11627a['default']['Core'][_0x371129(0x14d8)]['SelectedHyper'] || (_0x3e2755 *= 0.5), _0x11627a[_0x371129(0xd2c)][_0x371129(0x1043)][_0x371129(0x10f6)]['y'] - 0xc < this['y'] && (this['y'] = this[_0x371129(0x10db)](this['y'], _0x11627a[_0x371129(0xd2c)]['Core']['Player']['y'] - 0xc, _0x3e2755)), this[_0x371129(0x74a)] && (this['bullet']['x'] = _0x11627a['default'][_0x371129(0x1043)]['Player']['x'], this[_0x371129(0x74a)]['y'] = this['y'], _0x11627a['default']['Core']['Player']['y'] - this['y'] > 0.5 * this['scene']['renderer'][_0x371129(0x140e)] && (this['bullet']['y'] = 0xc + _0x11627a[_0x371129(0xd2c)][_0x371129(0x1043)][_0x371129(0x10f6)]['y'] - 0.5 * this[_0x371129(0x6d2)][_0x371129(0x12f9)]['height'])), this['PfxEmitter']['bounds']['y'] = this['y'] - 0x2, this[_0x371129(0x125b)]['setPosition'](this[_0x371129(0x197b)]['x'] + this['x'], this[_0x371129(0x197b)]['y'] + this['y']), this[_0x371129(0x1761)][_0x371129(0x16c6)] = this[_0x371129(0x16c6)] - 0x1, this[_0x371129(0x657)]) {
                            if (this[_0x371129(0x408)]) return;
                            if (-0x1 != _0x11627a['default']['Core']['PlayerOptions'][_0x371129(0x1b12)]['indexOf'](_0x19b17b[_0x371129(0xd2c)]['PANINI'])) return; - 0x1 != _0x11627a[_0x371129(0xd2c)][_0x371129(0x1043)][_0x371129(0x14d8)][_0x371129(0x1b12)]['indexOf'](_0x19b17b['default']['EXDASH']) && (this[_0x371129(0x8fc)] || (this[_0x371129(0x8fc)] = this['scene']['add'][_0x371129(0x105b)](this[_0x371129(0x6d2)][_0x371129(0x12f9)]['width'], this['scene']['renderer'][_0x371129(0x140e)], 'characters', 'uExdash_01.png')[_0x371129(0xf8e)](0.5)[_0x371129(0x8a2)](0x4)['setAngle'](-0x2d)[_0x371129(0xd87)](0x0)['setDepth'](0xce4)['setAlpha'](0.8)), this[_0x371129(0x8fc)][_0x371129(0x183f)](!0x0), _0x11627a[_0x371129(0xd2c)][_0x371129(0x1267)][_0x371129(0x7f6)](_0x5cc35f[_0x371129(0xd2c)]['PAN'], {
                                'volume': 0x1
                            }, 0x4e20, 0x1), this['spacebar'] || (this[_0x371129(0x16c8)] = this[_0x371129(0x6d2)]['input']['keyboard'][_0x371129(0x1aac)](Phaser[_0x371129(0xd70)][_0x371129(0xa19)][_0x371129(0x10f8)][_0x371129(0xa69)])), this['up'] || (this['up'] = this[_0x371129(0x6d2)][_0x371129(0x1331)][_0x371129(0x1340)][_0x371129(0x1aac)](Phaser[_0x371129(0xd70)][_0x371129(0xa19)][_0x371129(0x10f8)][_0x371129(0x12b2)])), this[_0x371129(0x16c8)][_0x371129(0x57f)] && this['up'][_0x371129(0x57f)] && (this[_0x371129(0x408)] = !0x0, -0x1 == _0x11627a[_0x371129(0xd2c)][_0x371129(0x1043)][_0x371129(0x14d8)][_0x371129(0x1b12)]['indexOf'](_0x19b17b['default']['PANINI']) && (_0x11627a[_0x371129(0xd2c)][_0x371129(0x1043)][_0x371129(0x14d8)]['UnlockedCharacters']['push'](_0x19b17b[_0x371129(0xd2c)][_0x371129(0x613)]), _0x383dd9[_0x371129(0xd2c)][_0x19b17b[_0x371129(0xd2c)][_0x371129(0x613)]][0x0][_0x371129(0x187)] = !0x1, _0x383dd9[_0x371129(0xd2c)][_0x19b17b['default']['PANINI']][0x0]['isBought'] = !0x0, _0x11627a['default']['Core']['PlayerOptions']['BoughtCharacters']['push'](_0x19b17b['default'][_0x371129(0x613)]), _0x11627a[_0x371129(0xd2c)][_0x371129(0x1043)][_0x371129(0x14d8)][_0x371129(0x3ab)](), _0x11627a['default']['Sound'][_0x371129(0x7f6)](_0x5cc35f['default']['ClickIn']), _0x11627a['default'][_0x371129(0x1267)]['PlaySound'](_0x5cc35f[_0x371129(0xd2c)]['ThingFound'], {
                                'volume': 0x1,
                                'detune': -0x3e8,
                                'rate': 0.5
                            }))));
                        }
                    } ['DeSpawn']() {
                        const _0xe7951c = _0x20ab12;
                        super[_0xe7951c(0x14fb)](), this['spacebar'] = null, this['up'] = null, this[_0xe7951c(0x8fc)] && this[_0xe7951c(0x8fc)]['setVisible'](!0x1), this['PfxEmitter'][_0xe7951c(0x1a34)]();
                    } ['GetDamaged'](_0x341a4e, _0x2d402d, _0x1a89c7, _0x55980e) {
                        const _0x4387d5 = _0x20ab12;
                        if (!this[_0x4387d5(0x657)]) {
                            if (_0x55980e === _0x1947fc['default']['ROSARY'] || _0x55980e === _0x1947fc['default']['PENTAGRAM'] || _0x55980e === _0x1947fc[_0x4387d5(0xd2c)][_0x4387d5(0xf20)] || _0x55980e === _0x1947fc['default'][_0x4387d5(0x19c)] || _0x55980e === _0x1947fc['default'][_0x4387d5(0xc74)]) return this[_0x4387d5(0x14f3)](), void(this[_0x4387d5(0x657)] = !0x0);
                            _0x55980e === _0x1947fc[_0x4387d5(0xd2c)]['WINDOW'] && (_0x341a4e *= 0xa), super['GetDamaged'](_0x341a4e, _0x2d402d, _0x1a89c7, _0x55980e);
                        }
                    } ['Dismiss']() {
                        const _0x526305 = _0x20ab12;
                        this[_0x526305(0x112f)] = !0x0, this[_0x526305(0x6d2)][_0x526305(0x915)][_0x526305(0x12b8)]({
                            'delay': 0x3e8,
                            'callback': () => {
                                const _0x25af20 = _0x526305;
                                this[_0x25af20(0xe00)]();
                            }
                        });
                    } ['Die']() {
                        const _0x76102c = _0x20ab12;
                        super[_0x76102c(0x14f3)](), _0x11627a[_0x76102c(0xd2c)]['Sound'][_0x76102c(0x7f6)](_0x5cc35f['default']['Deathscream'], {
                            'volume': 0x4,
                            'detune': 0x0,
                            'rate': 0x1
                        }, 0x96, 0x2), this['scene']['tweens'][_0x76102c(0x18bd)]({
                            'targets': this[_0x76102c(0x8ee)],
                            'scale': 0x10,
                            'duration': 0x12c,
                            'repeat': 0x1,
                            'onStart': () => {
                                const _0x39ce5f = _0x76102c;
                                this[_0x39ce5f(0x8ee)]['x'] = this['x'], this['ringSprite']['y'] = this['y'];
                            },
                            'onComplete': () => {
                                const _0x1ee72c = _0x76102c;
                                this['ringSprite'][_0x1ee72c(0x183f)](!0x1);
                            }
                        }), this['onDefeat'] && (this['onDefeat'](), this[_0x76102c(0x1438)] = null), this['Dismiss']();
                    } ['Approach'](_0xf06440, _0xcfad35, _0x243c3b) {
                        const _0x593f60 = _0x20ab12;
                        return _0xf06440 < _0xcfad35 ? Math[_0x593f60(0x1084)](_0xf06440 + _0x243c3b, _0xcfad35) : Math[_0x593f60(0x1981)](_0xf06440 - _0x243c3b, _0xcfad35);
                    }
                }
                _0x210f24['default'] = _0x1e8532;
            };
