// Module 0x17fe3
// Args: _0x360241, _0x547745, _0x53970b

export default (_0x360241, _0x547745, _0x53970b) => {
                'use strict';
                const _0x5096db = a0_0x6932;
                var _0x169d15 = this && this['__importDefault'] || function(_0x3a57db) {
                    return _0x3a57db && _0x3a57db['__esModule'] ? _0x3a57db : {
                        'default': _0x3a57db
                    };
                };
                Object['defineProperty'](_0x547745, '__esModule', {
                    'value': !0x0
                });
                const _0x3d7db7 = _0x169d15(_0x53970b(0x54e3)),
                    _0x1211fa = _0x169d15(_0x53970b(0x5f07)),
                    _0x4351e0 = _0x169d15(_0x53970b(0x869f));
                class _0x18f6d1 extends _0x4351e0['default'] {
                    constructor() {
                        super(...arguments), this['canRetaliate'] = !0x0, this['retaliationDelay'] = 0x3e8;
                    } ['MakeLevelOne']() {
                        const _0x34cc82 = _0x5096db;
                        super[_0x34cc82(0xf64)]();
                    } ['LevelUp']() {
                        const _0x1635e8 = _0x5096db;
                        super['LevelUp']();
                        let _0x2c8340 = _0x1211fa['default']['Core'][_0x1635e8(0x164d)]['filter'](_0x5c4eed => _0x5c4eed[_0x1635e8(0x14e)] === _0x3d7db7['default'][_0x1635e8(0x1675)]),
                            _0x42a8df = this['level'] % 0xc == 0x0,
                            _0x524bec = this['level'] % 0x8 == 0x0;
                        if (_0x524bec) {
                            let _0x4b8608 = 0x1 + Math[_0x1635e8(0xe07)](this[_0x1635e8(0x5e3)] / 0x8);
                            _0x2c8340[_0x1635e8(0xed9)] < _0x4b8608 && _0x2c8340[_0x1635e8(0xed9)] < 0x6 ? _0x1211fa[_0x1635e8(0xd2c)][_0x1635e8(0x1043)]['AddHiddenWeapon'](_0x3d7db7[_0x1635e8(0xd2c)][_0x1635e8(0x1675)]) : _0x524bec = !0x1;
                        }
                        let _0x48380c = !0x1;
                        if (_0x42a8df) {
                            let _0x10e4df = 0x1 + Math[_0x1635e8(0xe07)](this[_0x1635e8(0x5e3)] / 0xc);
                            for (let _0x20ea17 = 0x0; _0x20ea17 < _0x2c8340[_0x1635e8(0xed9)]; _0x20ea17++) {
                                const _0x507498 = _0x2c8340[_0x20ea17];
                                _0x507498['SkipAddingEvolution'] = !0x0, _0x507498[_0x1635e8(0x5e3)] < _0x10e4df && _0x507498[_0x1635e8(0x5e3)] < 0x8 && (_0x507498[_0x1635e8(0x2ab)](), _0x48380c = !0x0);
                            }
                        }(_0x524bec || _0x48380c) && (_0x2c8340 = _0x1211fa['default']['Core'][_0x1635e8(0x164d)][_0x1635e8(0x9d4)](_0x3c58ef => _0x3c58ef[_0x1635e8(0x14e)] === _0x3d7db7['default'][_0x1635e8(0x1675)]), this[_0x1635e8(0x277)](_0x2c8340[_0x1635e8(0xed9)]));
                    } ['OnGetDamaged'](_0x4f68c7 = 0xff0000, _0x432842 = 0x78, _0xffd96c = !0x0) {
                        const _0x177090 = _0x5096db;
                        if (!this['receivingDamage'] && (super['OnGetDamaged'](_0x4f68c7, _0x432842, _0xffd96c), this[_0x177090(0x1204)] = _0x1211fa[_0x177090(0xd2c)]['Core']['scene'][_0x177090(0x915)]['addEvent']({
                                'delay': this[_0x177090(0x727)],
                                'loop': !0x1,
                                'callback': () => {
                                    this['canRetaliate'] = !0x0;
                                }
                            }), this['canRetaliate'])) {
                            this[_0x177090(0x1724)] = !0x1;
                            let _0x2c22a1 = _0x1211fa['default']['Core']['HiddenWeapons'][_0x177090(0x9d4)](_0x49833f => _0x49833f[_0x177090(0x14e)] === _0x3d7db7['default'][_0x177090(0x1675)]);
                            for (let _0x3c9824 = 0x0; _0x3c9824 < _0x2c22a1[_0x177090(0xed9)]; _0x3c9824++) _0x2c22a1[_0x3c9824][_0x177090(0x1754)]();
                        }
                    } ['OnStop']() {
                        const _0x1d2f35 = _0x5096db;
                        this[_0x1d2f35(0x748)][_0x1d2f35(0x1631)](), this['setAngle'](0x0);
                    } ['ShowRings'](_0xe050bd) {
                        const _0x23d67b = _0x5096db;
                        let _0x2e758a = 0x2 * Math['PI'] / _0xe050bd;
                        for (let _0x5acfda = 0x0; _0x5acfda < _0xe050bd; _0x5acfda++) {
                            let _0xc05c31 = this['scene'][_0x23d67b(0x18bd)][_0x23d67b(0x568)](0.5 * this[_0x23d67b(0x6d2)][_0x23d67b(0x12f9)]['width'], 0.5 * this[_0x23d67b(0x6d2)][_0x23d67b(0x12f9)]['height'], 'items', 'LighningRing.png');
                            _0xc05c31['setVisible'](!0x1), _0xc05c31[_0x23d67b(0xf8e)](0.5, 0.5), _0xc05c31['setScrollFactor'](0x0), _0xc05c31['setDepth'](0x7d0), this[_0x23d67b(0x6d2)]['tweens']['add']({
                                'targets': _0xc05c31,
                                'x': 0.5 * this['scene'][_0x23d67b(0x12f9)]['width'] + 0x3c * Math[_0x23d67b(0xd7e)](0.5 + _0x2e758a * _0x5acfda),
                                'y': 0.5 * this['scene'][_0x23d67b(0x12f9)][_0x23d67b(0x140e)] + 0x3c * Math['sin'](0.5 + _0x2e758a * _0x5acfda),
                                'duration': 0x1f4,
                                'ease': 'Sine.easeInOut',
                                'delay': 0x64 * _0x5acfda,
                                'onStart': () => {
                                    const _0x30ff59 = _0x23d67b;
                                    _0xc05c31[_0x30ff59(0x183f)](!0x0);
                                },
                                'onComplete': () => {
                                    const _0x391846 = _0x23d67b;
                                    this['scene']['tweens'][_0x391846(0x18bd)]({
                                        'targets': _0xc05c31,
                                        'scaleX': 0x2,
                                        'scaleY': 0x2,
                                        'x': 0.5 * this['scene']['renderer']['width'],
                                        'y': 0.5 * this[_0x391846(0x6d2)][_0x391846(0x12f9)]['height'],
                                        'alpha': 0x0,
                                        'duration': 0x1f4,
                                        'ease': 'Sine.easeInOut',
                                        'delay': 0x3e8 + 0x64 * _0x5acfda,
                                        'onComplete': () => {
                                            const _0x61ad62 = _0x391846;
                                            null == _0xc05c31 || _0xc05c31[_0x61ad62(0x183f)](!0x1), null == _0xc05c31 || _0xc05c31[_0x61ad62(0x16ca)]();
                                        }
                                    });
                                }
                            });
                        }
                    }
                }
                _0x547745['default'] = _0x18f6d1;
            };
