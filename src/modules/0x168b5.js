// Module 0x168b5
// Args: _0x3bb342, _0x9f3710, _0x277778

export default (_0x3bb342, _0x9f3710, _0x277778) => {
                'use strict';
                const _0x5c88a9 = a0_0x6932;
                var _0x4b4fda = this && this['__importDefault'] || function(_0x50bacd) {
                    return _0x50bacd && _0x50bacd['__esModule'] ? _0x50bacd : {
                        'default': _0x50bacd
                    };
                };
                Object['defineProperty'](_0x9f3710, '__esModule', {
                    'value': !0x0
                }), _0x9f3710['MazzoInGamePanel'] = void 0x0;
                const _0x4df269 = _0x277778(0x16c14),
                    _0x651687 = _0x4b4fda(_0x277778(0x15866)),
                    _0xc049c0 = _0x4b4fda(_0x277778(0x5103)),
                    _0x998c13 = _0x4b4fda(_0x277778(0x5f07)),
                    _0x38d4fe = _0x4b4fda(_0x277778(0x6851));
                class _0x3d1cf5 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x1d4ba3, _0x38eee4, _0x31ad57, _0x107480, _0x4dd04a) {
                        const _0x16c9c3 = _0x5c88a9;
                        super(_0x1d4ba3, _0x38eee4, _0x31ad57), this['setScale'](_0xc049c0[_0x16c9c3(0xd2c)][_0x16c9c3(0x15db)]), this['panelWidth'] = _0x107480, this[_0x16c9c3(0xcde)] = _0x4dd04a;
                        var _0x3fee12 = {
                            'x': 0x0,
                            'y': 0x0,
                            'width': _0x107480,
                            'height': _0x4dd04a
                        };
                        this[_0x16c9c3(0x14b7)] = new _0x4df269['NineSlice'](this[_0x16c9c3(0x6d2)], {
                            'sourceKey': 'UI',
                            'sourceFrame': 'frame1_c2.png',
                            'sourceLayout': {
                                'width': 0xc,
                                'height': 0xc
                            }
                        }, _0x3fee12), this[_0x16c9c3(0x720)](this[_0x16c9c3(0x14b7)], 0x0);
                        let _0x14c943 = new Phaser['GameObjects']['Image'](this[_0x16c9c3(0x6d2)], 0.5 * _0x107480, 0x20, 'items', 'Tarots.png')['setScale'](0x2);
                        this[_0x16c9c3(0x18bd)](_0x14c943), this[_0x16c9c3(0x6e4)]();
                    } ['Open']() {
                        const _0x3a6dfa = _0x5c88a9;
                        this[_0x3a6dfa(0x1721)] = 0x0, this[_0x3a6dfa(0xd9b)] = this[_0x3a6dfa(0x6d2)][_0x3a6dfa(0x12a1)][_0x3a6dfa(0x18bd)]({
                            'targets': this,
                            'scaleY': 0x1,
                            'duration': 0x96
                        });
                    } ['OnClick']() {} ['AssignData']() {
                        const _0x370a4a = _0x5c88a9;
                        if (_0x998c13[_0x370a4a(0xd2c)][_0x370a4a(0x1043)]['Arcanas'][_0x370a4a(0x15e7)][_0x370a4a(0xed9)] <= 0x3) {
                            let _0x5ac780 = 0x3,
                                _0x545715 = 0x0;
                            for (_0x545715 = 0x0; _0x545715 < _0x998c13['default']['Core'][_0x370a4a(0x1884)][_0x370a4a(0x15e7)][_0x370a4a(0xed9)]; _0x545715++) {
                                let _0x2bb542 = _0x651687[_0x370a4a(0xd2c)][_0x998c13[_0x370a4a(0xd2c)]['Core']['Arcanas'][_0x370a4a(0x15e7)][_0x545715]],
                                    _0x24914a = new _0x38d4fe[(_0x370a4a(0xd2c))](this[_0x370a4a(0x6d2)], 0.5 * this[_0x370a4a(0x11ba)], 0x10 + this[_0x370a4a(0xcde)] / 0x4 * (0x1 + _0x545715), _0x2bb542[_0x370a4a(0x8e3)]);
                                this['add'](_0x24914a), this['scene'][_0x370a4a(0x915)][_0x370a4a(0x12b8)]({
                                    'callback': () => {
                                        _0x24914a['Reveal']();
                                    },
                                    'delay': 0x32 * _0x545715
                                }), _0x5ac780--;
                            }
                            for (let _0x10b99b = _0x545715; _0x10b99b < 0x3; _0x10b99b++) {
                                let _0x4761f7 = new Phaser[(_0x370a4a(0xbf2))][(_0x370a4a(0x1951))](this['scene'], 0.5 * this['panelWidth'], 0x10 + this['panelHeight'] / 0x4 * (0x1 + _0x10b99b), 'randomazzo', 'deback.png')['setAlpha'](0.5);
                                this[_0x370a4a(0x18bd)](_0x4761f7);
                            }
                        } else {
                            let _0x66c8a8 = this['panelHeight'] / (_0x998c13[_0x370a4a(0xd2c)][_0x370a4a(0x1043)]['Arcanas'][_0x370a4a(0x15e7)]['length'] + 0x1);
                            for (let _0x2cc376 = 0x0; _0x2cc376 < _0x998c13['default'][_0x370a4a(0x1043)]['Arcanas']['ActiveArcanas'][_0x370a4a(0xed9)]; _0x2cc376++) {
                                let _0x440c60 = _0x651687['default'][_0x998c13[_0x370a4a(0xd2c)]['Core']['Arcanas']['ActiveArcanas'][_0x2cc376]],
                                    _0x4ad290 = new _0x38d4fe['default'](this[_0x370a4a(0x6d2)], 0.5 * this[_0x370a4a(0x11ba)], 0x10 + _0x66c8a8 * (0x1 + _0x2cc376), _0x440c60[_0x370a4a(0x8e3)]);
                                this[_0x370a4a(0x18bd)](_0x4ad290), this['scene'][_0x370a4a(0x915)][_0x370a4a(0x12b8)]({
                                    'callback': () => {
                                        const _0x4557af = _0x370a4a;
                                        _0x4ad290[_0x4557af(0x1aeb)]();
                                    },
                                    'delay': 0x32 * _0x2cc376
                                });
                            }
                        }
                    }
                }
                _0x9f3710['MazzoInGamePanel'] = _0x3d1cf5, _0x9f3710['default'] = _0x3d1cf5;
            };
