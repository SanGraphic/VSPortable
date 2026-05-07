// Module 0x609a
// Args: _0x25e6be, _0x4bc1bd, _0x2954b8

export default (_0x25e6be, _0x4bc1bd, _0x2954b8) => {
                'use strict';
                const _0x46f2a9 = a0_0x6932;
                var _0x580b59 = this && this['__importDefault'] || function(_0x12330d) {
                    return _0x12330d && _0x12330d['__esModule'] ? _0x12330d : {
                        'default': _0x12330d
                    };
                };
                Object['defineProperty'](_0x4bc1bd, '__esModule', {
                    'value': !0x0
                }), _0x4bc1bd['B_Blood_Planet'] = void 0x0;
                const _0x326038 = _0x580b59(_0x2954b8(0xa14d)),
                    _0x41488d = _0x580b59(_0x2954b8(0x5f07)),
                    _0x4b7b51 = _0x580b59(_0x2954b8(0x1fd7));
                class _0x52fa1b extends _0x326038['default'] {
                    constructor(_0x438b5f, _0x402544, _0x3163b1, _0x4060df, _0x519c08) {
                        const _0x2b0472 = _0x46f2a9;
                        super(_0x438b5f, _0x402544, _0x3163b1, 'vfx', 'p01_01.png', _0x4060df, _0x519c08), this[_0x2b0472(0x161a)] = 0x1, this['angles'] = [], this['animNames'] = [], this['durations'] = [0x95f, 0x989, 0x745, 0x3f1, 0x4c1, 0x925, 0x9a3, 0x833, 0x5d1, 0x653], this['bodyRadii'] = [0x10, 0x18, 0x18, 0x18, 0x20, 0x20, 0x20, 0x8], this[_0x2b0472(0x53b)] = Math['PI'] / 0x2d0, this[_0x2b0472(0x1031)] = 0x2 * Math['PI'] / 0x9;
                        for (let _0x17928b = 0x0; _0x17928b < 0x9; _0x17928b++) {
                            this['angles']['push'](this[_0x2b0472(0x1031)] * _0x17928b);
                            let _0x3454ef = 'p0' + (_0x17928b + 0x1) + '_';
                            this[_0x2b0472(0xc95)][_0x2b0472(0x1564)](_0x3454ef);
                            const _0x177a4f = this['anims']['generateFrameNames']('vfx', {
                                'start': 0x1,
                                'end': 0x10,
                                'zeroPad': 0x2,
                                'prefix': _0x3454ef,
                                'suffix': '.png'
                            });
                            this[_0x2b0472(0x183e)]['create']({
                                'key': _0x3454ef,
                                'frames': _0x177a4f,
                                'frameRate': 0x10,
                                'repeat': -0x1
                            });
                        }
                        this[_0x2b0472(0x1036)] = 0x1, this[_0x2b0472(0xcb8)] = 0x1, this['trueWeapon'] = this[_0x2b0472(0x4a1)];
                    } ['OnRecycle']() {
                        const _0x29f000 = _0x46f2a9;
                        super[_0x29f000(0x5ce)](), this[_0x29f000(0x183f)](!0x1);
                    } ['overrideWeaponData'](_0x1a4cb3) {
                        const _0x3c8a5c = _0x46f2a9;
                        var _0x51da89;
                        let _0x35af91 = this[_0x3c8a5c(0x19c4)] % 0x9;
                        this['anims']['play'](this[_0x3c8a5c(0xc95)][_0x35af91]), this[_0x3c8a5c(0x8a2)](0x1), this[_0x3c8a5c(0xcf9)]['setCircle'](this[_0x3c8a5c(0x8a6)][_0x35af91]), this['setScale'](0x0), this[_0x3c8a5c(0x183f)](!0x0);
                        let _0x3310c8 = this[_0x3c8a5c(0xb51)][_0x35af91];
                        this[_0x3c8a5c(0x161a)] = 0x0, this['radiusMulX'] = 0x1, this[_0x3c8a5c(0xcb8)] = 0x1, this[_0x3c8a5c(0x7cb)] = 0x1, null === (_0x51da89 = this['scaleTween']) || void 0x0 === _0x51da89 || _0x51da89[_0x3c8a5c(0x1a34)](), this[_0x3c8a5c(0x660)] = this['scene']['tweens'][_0x3c8a5c(0x18bd)]({
                            'scaleX': 0.25,
                            'scaleY': 0.25,
                            'radiusMulY': 0.1,
                            'duration': _0x3310c8,
                            'yoyo': !0x0,
                            'repeat': -0x1,
                            'targets': this,
                            'onStart': () => {
                                const _0x13a5a4 = _0x3c8a5c;
                                this['radiusMulY'] = 0x1, this[_0x13a5a4(0x8a2)](0x1);
                            }
                        }), _0x41488d['default'][_0x3c8a5c(0x1043)][_0x3c8a5c(0x6d2)]['time'][_0x3c8a5c(0x17fb)](this[_0x3c8a5c(0x12a3)]), this['ExpireTimer'] = _0x41488d['default']['Core'][_0x3c8a5c(0x6d2)]['time']['addEvent']({
                            'delay': _0x1a4cb3[_0x3c8a5c(0x170c)] + _0x1a4cb3['PDuration'],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x30bcfb = _0x3c8a5c;
                                _0x41488d[_0x30bcfb(0xd2c)]['Core'][_0x30bcfb(0x6d2)]['time']['removeEvent'](this[_0x30bcfb(0x12a3)]), this[_0x30bcfb(0x14e3)]();
                            }
                        }), this['alpha'] = 0.1, this['scene']['tweens']['add']({
                            'alpha': 0.6,
                            'targets': this,
                            'radius': _0x41488d[_0x3c8a5c(0xd2c)]['Core'][_0x3c8a5c(0x17fc)][_0x3c8a5c(0x161a)],
                            'duration': 0xc8,
                            'onStart': () => {
                                const _0x4aeb3a = _0x3c8a5c;
                                this[_0x4aeb3a(0xe71)] = 0.1;
                            }
                        }), this[_0x3c8a5c(0x1a8a)] = this['x'], this['groundY'] = this['y'], this[_0x3c8a5c(0x1416)] = this[_0x3c8a5c(0x137c)][_0x35af91], this['angleRotUnit'] = Math['PI'] / (0x8 * _0x41488d[_0x3c8a5c(0xd2c)][_0x3c8a5c(0x1043)][_0x3c8a5c(0x17fc)][_0x3c8a5c(0x161a)]), this[_0x3c8a5c(0x9b8)] = Math['min'](0xa, _0x41488d[_0x3c8a5c(0xd2c)]['Core'][_0x3c8a5c(0x10f6)][_0x3c8a5c(0x9b8)]) + _0x1a4cb3['amount'];
                    } ['explode']() {
                        const _0x5b48a9 = _0x46f2a9;
                        _0x41488d[_0x5b48a9(0xd2c)]['Sound'][_0x5b48a9(0x7f6)](_0x4b7b51[_0x5b48a9(0xd2c)]['PentagramSFX'], {
                            'volume': 0.4,
                            'rate': 1.5
                        }, 0xc8, 0x3), this[_0x5b48a9(0x1234)][_0x5b48a9(0x217)][_0x5b48a9(0xada)](this['x'], this['y'], 0x0, 0xa), this[_0x5b48a9(0x9b8)]--, this['amount'] <= 0x0 && (this[_0x5b48a9(0xcf9)][_0x5b48a9(0x543)] = !0x1, this[_0x5b48a9(0x14e3)]());
                    } ['FadeOut']() {
                        const _0x2213de = _0x46f2a9;
                        var _0x29c842, _0x3abebb, _0x52df29;
                        null === (_0x29c842 = this[_0x2213de(0x660)]) || void 0x0 === _0x29c842 || _0x29c842[_0x2213de(0x1a34)](), null === (_0x3abebb = this[_0x2213de(0x1370)]) || void 0x0 === _0x3abebb || _0x3abebb[_0x2213de(0x1a34)](), null === (_0x52df29 = this['alphaTween']) || void 0x0 === _0x52df29 || _0x52df29['stop'](), this[_0x2213de(0x1322)] = _0x41488d[_0x2213de(0xd2c)]['Core'][_0x2213de(0x6d2)][_0x2213de(0x18bd)]['tween']({
                            'targets': this,
                            'alpha': 0x0,
                            'scaleX': 0x0,
                            'scaleY': 0x0,
                            'duration': 0xc8,
                            'onComplete': () => {
                                this['DeSpawn']();
                            }
                        });
                    } ['DeSpawn']() {
                        const _0xfbafde = _0x46f2a9;
                        var _0x4a5090, _0x2494a5, _0x42bf1a;
                        null === (_0x4a5090 = this['scaleTween']) || void 0x0 === _0x4a5090 || _0x4a5090['stop'](), null === (_0x2494a5 = this['expireTween']) || void 0x0 === _0x2494a5 || _0x2494a5[_0xfbafde(0x1a34)](), null === (_0x42bf1a = this[_0xfbafde(0x1322)]) || void 0x0 === _0x42bf1a || _0x42bf1a[_0xfbafde(0x1a34)](), super['DeSpawn'](), this['setVisible'](!0x1), _0x41488d[_0xfbafde(0xd2c)]['Core'][_0xfbafde(0x6d2)][_0xfbafde(0x915)]['removeEvent'](this['ExpireTimer']);
                    } ['Update'](_0x35f6a2) {
                        const _0x546c38 = _0x46f2a9;
                        super['Update'](_0x35f6a2), this[_0x546c38(0x1416)] += this[_0x546c38(0x53b)] * _0x35f6a2, this['x'] = this['groundX'] + Math[_0x546c38(0xd7e)](this[_0x546c38(0x1416)]) * (this['radiusMulX'] * this['radius']), this['y'] = this['groundY'] + Math['sin'](this[_0x546c38(0x1416)]) * (this['radiusMulY'] * this[_0x546c38(0x161a)]);
                    }
                }
                _0x4bc1bd['B_Blood_Planet'] = _0x52fa1b, _0x4bc1bd['default'] = _0x52fa1b;
            };
