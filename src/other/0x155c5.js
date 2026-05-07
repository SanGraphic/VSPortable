// Module 0x155c5
// Args: _0x11336e, _0x30f3d6, _0x12c270

export default (_0x11336e, _0x30f3d6, _0x12c270) => {
                'use strict';
                const _0x4cbb3a = a0_0x6932;
                var _0x5603a2 = this && this['__importDefault'] || function(_0x52ce9d) {
                    return _0x52ce9d && _0x52ce9d['__esModule'] ? _0x52ce9d : {
                        'default': _0x52ce9d
                    };
                };
                Object['defineProperty'](_0x30f3d6, '__esModule', {
                    'value': !0x0
                });
                const _0x215784 = _0x5603a2(_0x12c270(0x15dd)),
                    _0x4766a9 = _0x5603a2(_0x12c270(0xdfbc)),
                    _0x4efd60 = _0x5603a2(_0x12c270(0x9bda)),
                    _0x3beb3f = _0x5603a2(_0x12c270(0x2248)),
                    _0x33dfd3 = _0x5603a2(_0x12c270(0x1fd7)),
                    _0x266f7c = _0x5603a2(_0x12c270(0x54e3)),
                    _0x57c2dc = _0x5603a2(_0x12c270(0x5103)),
                    _0x2c9a36 = _0x5603a2(_0x12c270(0x42e7)),
                    _0x8b0e0a = _0x5603a2(_0x12c270(0x5f07)),
                    _0x437289 = _0x5603a2(_0x12c270(0x1166a)),
                    _0xa62396 = _0x5603a2(_0x12c270(0xd1a1));
                class _0x16e022 extends _0x437289['default'] {
                    constructor() {
                        const _0x345026 = _0x4cbb3a;
                        super(...arguments), this[_0x345026(0x657)] = !0x1, this[_0x345026(0x197b)] = {
                            'x': 0x18,
                            'y': -0x42
                        }, this['dismissed'] = !0x1, this[_0x345026(0x408)] = !0x1, this[_0x345026(0x1aa9)] = !0x1, this[_0x345026(0xf65)] = !0x0, this[_0x345026(0x1a28)] = 0.5;
                    } ['OnRecycle']() {
                        const _0x4c7b43 = _0x4cbb3a;
                        if (super['OnRecycle'](), this[_0x4c7b43(0xf65)] = !0x0, this[_0x4c7b43(0x177d)] = !0x1, this[_0x4c7b43(0x657)] = !0x1, !this[_0x4c7b43(0x74a)]) {
                            let _0x40dbbe = new _0xa62396[(_0x4c7b43(0xd2c))](this['scene'], _0x4efd60['default']['BULLET_W']);
                            this['bullet'] = _0x40dbbe[_0x4c7b43(0xada)](this['x'], this['y']), this[_0x4c7b43(0x1761)] = this['scene'][_0x4c7b43(0x18bd)][_0x4c7b43(0x1791)]('vfx'), this['PfxEmitter'] = this['particlesManager'][_0x4c7b43(0x14c0)]({
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
                                    'start': 0x2 * _0x57c2dc[_0x4c7b43(0xd2c)]['PixelScale'],
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
                            }), this[_0x4c7b43(0x125b)]['bounds']['y'] = this['y'] + 0xc8, this[_0x4c7b43(0x125b)][_0x4c7b43(0x726)](this['x'], this['y'] - 0x8), this[_0x4c7b43(0x125b)][_0x4c7b43(0x1aa2)]();
                        }
                    } ['Disappear']() {
                        const _0x3e375e = _0x4cbb3a;
                        this[_0x3e375e(0x177d)] = !0x0, this['isTeleportOnCull'] = !0x1, this[_0x3e375e(0x74a)][_0x3e375e(0xe6f)](), this[_0x3e375e(0x125b)][_0x3e375e(0x1a34)]();
                    } ['Update'](_0x520b56) {
                        const _0x1bc36d = _0x4cbb3a;
                        this['isFresh'] && (this['x'] = _0x8b0e0a[_0x1bc36d(0xd2c)]['Core'][_0x1bc36d(0x10f6)]['x'], this['y'] = _0x8b0e0a['default']['Core'][_0x1bc36d(0x10f6)]['y'] + this[_0x1bc36d(0x6d2)]['renderer']['height'], this[_0x1bc36d(0xf65)] = !0x1), this[_0x1bc36d(0x187a)] = !0x1, this[_0x1bc36d(0x78e)] = 0x0, super[_0x1bc36d(0xa9f)](_0x520b56), this[_0x1bc36d(0x112f)] ? this['x'] = this[_0x1bc36d(0x10db)](this['x'], _0x8b0e0a[_0x1bc36d(0xd2c)]['Core'][_0x1bc36d(0x10f6)]['x'] - 0x2 * this[_0x1bc36d(0x6d2)]['renderer']['width'], 0x64 * _0x520b56) : this['x'] = this['Approach'](this['x'], _0x8b0e0a[_0x1bc36d(0xd2c)]['Core'][_0x1bc36d(0x10f6)]['x'] - this[_0x1bc36d(0x6d2)]['renderer']['width'] * this[_0x1bc36d(0x1a28)] + 0x60, 0x64 * _0x520b56);
                        let _0x43303d = _0x8b0e0a[_0x1bc36d(0xd2c)][_0x1bc36d(0x1043)][_0x1bc36d(0x225)] > 0x708 ? 1.5 : 0.1;
                        if (this[_0x1bc36d(0x1aa9)] = _0x8b0e0a[_0x1bc36d(0xd2c)][_0x1bc36d(0x1043)]['SurvivedSeconds'] > 0x708, _0x8b0e0a['default'][_0x1bc36d(0x1043)][_0x1bc36d(0x10f6)]['y'] - 0xc < this['y'] && (this['y'] = this[_0x1bc36d(0x10db)](this['y'], _0x8b0e0a[_0x1bc36d(0xd2c)][_0x1bc36d(0x1043)]['Player']['y'] - 0xc, _0x43303d)), this['bullet'] && (this[_0x1bc36d(0x74a)]['x'] = _0x8b0e0a['default']['Core'][_0x1bc36d(0x10f6)]['x'], this['bullet']['y'] = this['y'], _0x8b0e0a['default']['Core']['Player']['y'] - this['y'] > 0.5 * this['scene']['renderer'][_0x1bc36d(0x140e)] && (this[_0x1bc36d(0x74a)]['y'] = 0xc + _0x8b0e0a[_0x1bc36d(0xd2c)][_0x1bc36d(0x1043)][_0x1bc36d(0x10f6)]['y'] - 0.5 * this['scene'][_0x1bc36d(0x12f9)][_0x1bc36d(0x140e)])), this[_0x1bc36d(0x125b)]['bounds']['y'] = this['y'] - 0x2, this[_0x1bc36d(0x125b)][_0x1bc36d(0x726)](this[_0x1bc36d(0x197b)]['x'] + this['x'], this[_0x1bc36d(0x197b)]['y'] + this['y']), this[_0x1bc36d(0x1761)]['depth'] = this[_0x1bc36d(0x16c6)] - 0x1, this['hasLostTreasure']) {
                            if (this['done']) return;
                            if (-0x1 != _0x8b0e0a['default'][_0x1bc36d(0x1043)][_0x1bc36d(0x14d8)]['UnlockedCharacters']['indexOf'](_0x4766a9[_0x1bc36d(0xd2c)][_0x1bc36d(0x613)])) return; - 0x1 != _0x8b0e0a['default'][_0x1bc36d(0x1043)][_0x1bc36d(0x14d8)][_0x1bc36d(0x1b12)][_0x1bc36d(0x1303)](_0x4766a9[_0x1bc36d(0xd2c)][_0x1bc36d(0x302)]) && (this[_0x1bc36d(0x8fc)] || (this[_0x1bc36d(0x8fc)] = this['scene'][_0x1bc36d(0x18bd)][_0x1bc36d(0x105b)](this[_0x1bc36d(0x6d2)]['renderer'][_0x1bc36d(0x173c)], this[_0x1bc36d(0x6d2)][_0x1bc36d(0x12f9)]['height'], 'characters', 'uExdash_01.png')['setOrigin'](0.5)[_0x1bc36d(0x8a2)](0x4)[_0x1bc36d(0x9b5)](-0x2d)['setScrollFactor'](0x0)[_0x1bc36d(0xb4a)](0xce4)[_0x1bc36d(0xdab)](0.8)), this['spritte'][_0x1bc36d(0x183f)](!0x0), _0x8b0e0a['default'][_0x1bc36d(0x1267)][_0x1bc36d(0x7f6)](_0x33dfd3[_0x1bc36d(0xd2c)][_0x1bc36d(0xc61)], {
                                'volume': 0x1
                            }, 0x4e20, 0x1), this[_0x1bc36d(0x16c8)] || (this['spacebar'] = this[_0x1bc36d(0x6d2)][_0x1bc36d(0x1331)][_0x1bc36d(0x1340)][_0x1bc36d(0x1aac)](Phaser[_0x1bc36d(0xd70)]['Keyboard'][_0x1bc36d(0x10f8)][_0x1bc36d(0xa69)])), this['up'] || (this['up'] = this[_0x1bc36d(0x6d2)]['input'][_0x1bc36d(0x1340)][_0x1bc36d(0x1aac)](Phaser[_0x1bc36d(0xd70)][_0x1bc36d(0xa19)][_0x1bc36d(0x10f8)][_0x1bc36d(0x12b2)])), this[_0x1bc36d(0x16c8)][_0x1bc36d(0x57f)] && this['up'][_0x1bc36d(0x57f)] && (this['done'] = !0x0, -0x1 == _0x8b0e0a['default'][_0x1bc36d(0x1043)]['PlayerOptions'][_0x1bc36d(0x1b12)]['indexOf'](_0x4766a9[_0x1bc36d(0xd2c)][_0x1bc36d(0x613)]) && (_0x8b0e0a[_0x1bc36d(0xd2c)]['Core'][_0x1bc36d(0x14d8)][_0x1bc36d(0x1b12)][_0x1bc36d(0x1564)](_0x4766a9['default'][_0x1bc36d(0x613)]), _0x215784[_0x1bc36d(0xd2c)][_0x4766a9['default'][_0x1bc36d(0x613)]][0x0][_0x1bc36d(0x187)] = !0x1, _0x215784['default'][_0x4766a9[_0x1bc36d(0xd2c)]['PANINI']][0x0][_0x1bc36d(0x952)] = !0x0, _0x8b0e0a['default'][_0x1bc36d(0x1043)][_0x1bc36d(0x14d8)][_0x1bc36d(0x1b5)][_0x1bc36d(0x1564)](_0x4766a9['default']['PANINI']), _0x8b0e0a[_0x1bc36d(0xd2c)]['Core'][_0x1bc36d(0x14d8)]['Save'](), _0x8b0e0a[_0x1bc36d(0xd2c)][_0x1bc36d(0x1267)][_0x1bc36d(0x7f6)](_0x33dfd3[_0x1bc36d(0xd2c)]['ClickIn']), _0x8b0e0a['default'][_0x1bc36d(0x1267)]['PlaySound'](_0x33dfd3['default']['ThingFound'], {
                                'volume': 0x1,
                                'detune': -0x3e8,
                                'rate': 0.5
                            }))));
                        }
                    } ['DeSpawn']() {
                        const _0x41af4a = _0x4cbb3a;
                        super[_0x41af4a(0x14fb)](), this['spacebar'] = null, this['up'] = null, this[_0x41af4a(0x8fc)] && this['spritte']['setVisible'](!0x1), this[_0x41af4a(0x125b)][_0x41af4a(0x1a34)]();
                    } ['GetDamaged'](_0x28523d, _0x1d7b40, _0x2a10cf, _0x2dc32a) {
                        const _0x1a472b = _0x4cbb3a;
                        if (!(this[_0x1a472b(0x1aa9)] || this[_0x1a472b(0x657)] || _0x2dc32a !== _0x266f7c[_0x1a472b(0xd2c)]['ROSARY'] && _0x2dc32a !== _0x266f7c[_0x1a472b(0xd2c)]['SIRE'] && _0x2dc32a !== _0x266f7c[_0x1a472b(0xd2c)][_0x1a472b(0x19c)] && _0x2dc32a !== _0x266f7c[_0x1a472b(0xd2c)][_0x1a472b(0xc74)] && _0x2dc32a !== _0x266f7c['default'][_0x1a472b(0x78d)])) {
                            this[_0x1a472b(0xe6f)](), this[_0x1a472b(0x657)] = !0x0;
                            let _0x1e312e = [0x6, 0x42, 0x64],
                                _0x20984c = [_0x3beb3f['default']['EVOLUTION'], _0x3beb3f[_0x1a472b(0xd2c)]['EXISTING_ANY'], _0x3beb3f['default'][_0x1a472b(0xf9c)], _0x3beb3f[_0x1a472b(0xd2c)]['EVOLUTION'], _0x3beb3f['default'][_0x1a472b(0x18fa)]],
                                _0x3f1b21 = new _0x2c9a36[(_0x1a472b(0xd2c))](_0x1e312e, _0x20984c);
                            _0x8b0e0a['default'][_0x1a472b(0x1043)][_0x1a472b(0x17c7)]['SetTreasureLevelFromChance'](_0x3f1b21), _0x8b0e0a['default'][_0x1a472b(0x1043)][_0x1a472b(0x2ce)](this['x'], this['y'], _0x3f1b21);
                        }
                    } ['Dismiss']() {
                        const _0x1101a6 = _0x4cbb3a;
                        this['dismissed'] = !0x0, this[_0x1101a6(0x6d2)][_0x1101a6(0x915)][_0x1101a6(0x12b8)]({
                            'delay': 0x3e8,
                            'callback': () => {
                                const _0x3a4cbc = _0x1101a6;
                                this[_0x3a4cbc(0xe00)]();
                            }
                        });
                    } ['Approach'](_0x4db27b, _0x57c7d5, _0x5d7127) {
                        const _0x910cf6 = _0x4cbb3a;
                        return _0x4db27b < _0x57c7d5 ? Math['min'](_0x4db27b + _0x5d7127, _0x57c7d5) : Math[_0x910cf6(0x1981)](_0x4db27b - _0x5d7127, _0x57c7d5);
                    }
                }
                _0x30f3d6['default'] = _0x16e022;
            };
