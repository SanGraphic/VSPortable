// Module 0x6caa
// Args: _0x3e71fc, _0x396da2, _0x5f0839

export default (_0x3e71fc, _0x396da2, _0x5f0839) => {
                'use strict';
                const _0x456fe8 = a0_0x6932;
                var _0x424d95 = this && this['__importDefault'] || function(_0x45c222) {
                    const _0x57bbcd = _0x456fe8;
                    return _0x45c222 && _0x45c222[_0x57bbcd(0x16f1)] ? _0x45c222 : {
                        'default': _0x45c222
                    };
                };
                Object['defineProperty'](_0x396da2, '__esModule', {
                    'value': !0x0
                }), _0x396da2['B_SpaceTime'] = void 0x0;
                const _0x394ece = _0x424d95(_0x5f0839(0xa14d)),
                    _0x2f311d = _0x424d95(_0x5f0839(0x5f07)),
                    _0x4c8b4c = _0x424d95(_0x5f0839(0x1fd7));
                class _0x40e0b4 extends _0x394ece['default'] {
                    constructor(_0x2b486f, _0x10c74f, _0x2677c4, _0x3440d8, _0x2df434) {
                        const _0x150942 = _0x456fe8;
                        super(_0x2b486f, _0x10c74f, _0x2677c4, 'vfx', 'corridor_bg.png', _0x3440d8, _0x2df434), this[_0x150942(0x8a2)](0x1), this[_0x150942(0x12d7)] = _0x2f311d[_0x150942(0xd2c)][_0x150942(0x1043)]['scene'][_0x150942(0x18bd)]['sprite'](0x0, 0x0, 'vfx', 'corridor_light.png');
                    } ['OnRecycle']() {
                        const _0x5c1127 = _0x456fe8;
                        var _0xc44a30, _0x15dc26, _0x5557b5;
                        super['OnRecycle'](), this['setScale'](0x1), this['body'][_0x5c1127(0xdf6)](0x40);
                        let _0x185b4f = _0x2f311d[_0x5c1127(0xd2c)]['Core']['PlayerOptions']['FlashingVFXEnabled'] ? 0x1 : 0.2,
                            _0x430a55 = _0x2f311d['default']['Core']['PlayerOptions'][_0x5c1127(0x49c)] ? 0.75 : 0x0;
                        this['setScale'](0x0), this['setAlpha'](0x0), this[_0x5c1127(0x12d7)][_0x5c1127(0x8a2)](0x0), this[_0x5c1127(0x12d7)][_0x5c1127(0xdab)](_0x430a55), null === (_0xc44a30 = this[_0x5c1127(0x660)]) || void 0x0 === _0xc44a30 || _0xc44a30['stop'](), this[_0x5c1127(0x660)] = this[_0x5c1127(0x6d2)][_0x5c1127(0x12a1)][_0x5c1127(0x18bd)]({
                            'targets': this,
                            'scale': this[_0x5c1127(0x6d2)]['renderer'][_0x5c1127(0x173c)] / 0x80,
                            'duration': 0x3e8,
                            'alpha': _0x185b4f,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut',
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        }), _0x2f311d[_0x5c1127(0xd2c)][_0x5c1127(0x1267)]['PlaySound'](_0x4c8b4c['default']['Corridor'], {
                            'volume': 0.9,
                            'rate': 0x1,
                            'detune': 0x1f4
                        }, 0x190, 0x1), null === (_0x15dc26 = this[_0x5c1127(0x595)]) || void 0x0 === _0x15dc26 || _0x15dc26['stop'](), this[_0x5c1127(0x595)] = this['scene']['tweens'][_0x5c1127(0x18bd)]({
                            'targets': this,
                            'angle': -0x5a0,
                            'duration': 0x7d0
                        }), null === (_0x5557b5 = this['lightTween']) || void 0x0 === _0x5557b5 || _0x5557b5[_0x5c1127(0x1a34)](), this[_0x5c1127(0x7a2)] = this[_0x5c1127(0x6d2)]['tweens'][_0x5c1127(0x18bd)]({
                            'targets': this['corridorLight'],
                            'scale': this[_0x5c1127(0x6d2)][_0x5c1127(0x12f9)]['width'] / 0x80,
                            'duration': 0x3e8,
                            'alpha': _0x185b4f,
                            'yoyo': !0x0,
                            'ease': 'Sine.easeInOut'
                        });
                    } ['Update'](_0x19ee22) {
                        const _0x4eaafc = _0x456fe8;
                        this['x'] = _0x2f311d['default']['Core'][_0x4eaafc(0x10f6)]['x'], this['y'] = _0x2f311d[_0x4eaafc(0xd2c)][_0x4eaafc(0x1043)]['Player']['y'], this[_0x4eaafc(0xb4a)](-this[_0x4eaafc(0x6d2)][_0x4eaafc(0x12f9)]['height']), this['corridorLight']['x'] = this['x'], this[_0x4eaafc(0x12d7)]['y'] = this['y'], this['corridorLight']['depth'] = this['depth'] + 0x1;
                    }
                }
                _0x396da2['B_SpaceTime'] = _0x40e0b4, _0x396da2['default'] = _0x40e0b4;
            };
