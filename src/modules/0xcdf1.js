// Module 0xcdf1
// Args: _0x4b5096, _0x175768, _0x200b1c

export default (_0x4b5096, _0x175768, _0x200b1c) => {
                'use strict';
                const _0x22da1c = a0_0x6932;
                var _0x4fa4bd = this && this['__importDefault'] || function(_0x57f767) {
                    const _0x1d5b5e = a0_0x6932;
                    return _0x57f767 && _0x57f767['__esModule'] ? _0x57f767 : {
                        'default': _0x57f767
                    };
                };
                Object['defineProperty'](_0x175768, '__esModule', {
                    'value': !0x0
                }), _0x175768['B_Blood_Garlic'] = void 0x0;
                const _0x235941 = _0x4fa4bd(_0x200b1c(0xa14d)),
                    _0x2434c3 = _0x4fa4bd(_0x200b1c(0x5f07));
                class _0x4d69f9 extends _0x235941['default'] {
                    constructor(_0x5b9948, _0x9dfb1d, _0x1ed09c, _0xa7286f, _0x427a3c) {
                        const _0x1fad97 = _0x22da1c;
                        super(_0x5b9948, _0x9dfb1d, _0x1ed09c, 'vfx', 'Rings6.png', _0xa7286f, _0x427a3c), this[_0x1fad97(0x161a)] = 0x1;
                    } ['OnRecycle']() {
                        const _0x4bec3d = _0x22da1c;
                        super['OnRecycle'](), this['setVisible'](!0x1), this[_0x4bec3d(0xdab)](0.1);
                    } ['overrideWeaponData'](_0xbbe3a9) {
                        const _0x3a167b = _0x22da1c;
                        var _0x1e787b, _0x185006;
                        this[_0x3a167b(0xcf9)][_0x3a167b(0xdf6)](0x10), this[_0x3a167b(0x183f)](!0x0), this[_0x3a167b(0x8a2)](Math[_0x3a167b(0x1981)](_0x2434c3[_0x3a167b(0xd2c)][_0x3a167b(0x1043)]['Magnet']['radius'] / 0x20, _0xbbe3a9['PArea'])), _0x2434c3[_0x3a167b(0xd2c)]['Core'][_0x3a167b(0x6d2)][_0x3a167b(0x915)][_0x3a167b(0x17fb)](this[_0x3a167b(0x12a3)]), this['ExpireTimer'] = _0x2434c3[_0x3a167b(0xd2c)]['Core']['scene'][_0x3a167b(0x915)][_0x3a167b(0x12b8)]({
                            'delay': _0xbbe3a9[_0x3a167b(0x16c3)],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x40e719 = _0x3a167b;
                                _0x2434c3[_0x40e719(0xd2c)]['Core'][_0x40e719(0x6d2)][_0x40e719(0x915)][_0x40e719(0x17fb)](this['ExpireTimer']), this[_0x40e719(0x14e3)]();
                            }
                        }), null === (_0x1e787b = this[_0x3a167b(0x1322)]) || void 0x0 === _0x1e787b || _0x1e787b[_0x3a167b(0x1a34)](), this[_0x3a167b(0x1322)] = _0x2434c3['default']['Core']['scene'][_0x3a167b(0x18bd)][_0x3a167b(0x99a)]({
                            'targets': this,
                            'alpha': 0.3,
                            'loop': !0x0,
                            'yoyo': !0x0,
                            'loopDelay': 0x64,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'repeat': -0x1,
                            'onStart': () => {
                                const _0x193ea7 = _0x3a167b;
                                this[_0x193ea7(0xe71)] = 0.1;
                            }
                        }), null === (_0x185006 = this[_0x3a167b(0x595)]) || void 0x0 === _0x185006 || _0x185006[_0x3a167b(0x1a34)](), this['angleTween'] = _0x2434c3[_0x3a167b(0xd2c)][_0x3a167b(0x1043)]['scene'][_0x3a167b(0x18bd)][_0x3a167b(0x99a)]({
                            'targets': this,
                            'angle': 0x168,
                            'loop': !0x0,
                            'duration': 0x1770,
                            'ease': 'Linear',
                            'repeat': -0x1,
                            'onStart': () => {
                                const _0x2d620e = _0x3a167b;
                                this[_0x2d620e(0xd96)] = 0x0;
                            }
                        }), this['setDepth'](0.5 * -_0x2434c3[_0x3a167b(0xd2c)][_0x3a167b(0x1043)][_0x3a167b(0x6d2)][_0x3a167b(0x12f9)]['height']);
                    } ['FadeOut']() {
                        const _0x5c6a22 = _0x22da1c;
                        var _0x972ae;
                        null === (_0x972ae = this[_0x5c6a22(0x1322)]) || void 0x0 === _0x972ae || _0x972ae['stop'](), this[_0x5c6a22(0x1322)] = _0x2434c3[_0x5c6a22(0xd2c)][_0x5c6a22(0x1043)][_0x5c6a22(0x6d2)][_0x5c6a22(0x18bd)][_0x5c6a22(0x99a)]({
                            'targets': this,
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    }
                }
                _0x175768['B_Blood_Garlic'] = _0x4d69f9, _0x175768['default'] = _0x4d69f9;
            };
