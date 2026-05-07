// Module 0xfb8b
// Args: _0x560c0f, _0x304618, _0x4834b4

export default (_0x560c0f, _0x304618, _0x4834b4) => {
                'use strict';
                const _0x5f13cd = a0_0x6932;
                var _0x13e411 = this && this['__importDefault'] || function(_0x5b7310) {
                    const _0x44a783 = _0x5f13cd;
                    return _0x5b7310 && _0x5b7310[_0x44a783(0x16f1)] ? _0x5b7310 : {
                        'default': _0x5b7310
                    };
                };
                Object['defineProperty'](_0x304618, '__esModule', {
                    'value': !0x0
                }), _0x304618['B_Gatti_Scratch'] = void 0x0;
                const _0x4aa166 = _0x13e411(_0x4834b4(0xa14d));
                class _0x495bf9 extends _0x4aa166['default'] {
                    constructor(_0x4155b1, _0x1b97a2, _0x41d38d, _0x5d9ae4, _0x642d9) {
                        const _0x32bc38 = _0x5f13cd;
                        super(_0x4155b1, _0x1b97a2, _0x41d38d, 'vfx', 'Cat.png', _0x5d9ae4, _0x642d9), this[_0x32bc38(0x197c)] = 0x0, this['trueWeapon'] = this[_0x32bc38(0x4a1)], this['configs'] = [], this[_0x32bc38(0x4c1)]['push']({
                            'frame': 'slash.png',
                            'originX': 0x0,
                            'originY': 0.5
                        }), this[_0x32bc38(0x4c1)][_0x32bc38(0x1564)]({
                            'frame': 'slash2.png',
                            'originX': 0x0,
                            'originY': 0x1
                        }), this[_0x32bc38(0x4c1)]['push']({
                            'frame': 'slash3.png',
                            'originX': 0x0,
                            'originY': 0x0
                        }), this[_0x32bc38(0x4c1)]['push']({
                            'frame': 'slash4.png',
                            'originX': 0x0,
                            'originY': 0.5
                        });
                    } ['OnRecycle']() {
                        const _0x1343fb = _0x5f13cd;
                        var _0x125942, _0xc2422d;
                        super[_0x1343fb(0x5ce)](), null === (_0x125942 = this[_0x1343fb(0x177f)]) || void 0x0 === _0x125942 || _0x125942[_0x1343fb(0x1a34)](), null === (_0xc2422d = this[_0x1343fb(0x1e5)]) || void 0x0 === _0xc2422d || _0xc2422d[_0x1343fb(0x1a34)](), this[_0x1343fb(0x8a2)](0x1), this[_0x1343fb(0xcf9)][_0x1343fb(0xdf6)](0x40, -0x20, -0x20), this['setScale'](0x0), this['alpha'] = 0x1;
                        let _0x13f61a = this[_0x1343fb(0x4c1)][this[_0x1343fb(0x197c)]++ % this['configs'][_0x1343fb(0xed9)]],
                            _0x4fcf50 = 0.5 >= this['weapon'][_0x1343fb(0x433)][this[_0x1343fb(0x4a1)][_0x1343fb(0x11c9)]++ % this['weapon'][_0x1343fb(0x433)][_0x1343fb(0xed9)]];
                        this['flipX'] = _0x4fcf50, this[_0x1343fb(0x381)](_0x13f61a['frame']), this['originX'] = _0x13f61a[_0x1343fb(0x612)], this['originY'] = _0x13f61a[_0x1343fb(0x564)], this['angle'] = Phaser[_0x1343fb(0x24f)]['RadToDeg'](0x2 * Math['PI'] * this[_0x1343fb(0x4a1)]['critChancesArray'][this['weapon'][_0x1343fb(0x11c9)]++ % this[_0x1343fb(0x4a1)]['critChancesArray'][_0x1343fb(0xed9)]]), this['x'] += 0x18 * this['trueWeapon'][_0x1343fb(0xe9c)](), this['y'] += 0x18 * this['trueWeapon'][_0x1343fb(0xe9c)](), this['entryTween'] = this[_0x1343fb(0x6d2)][_0x1343fb(0x12a1)][_0x1343fb(0x18bd)]({
                            'targets': this,
                            'scale': 0.5 * this['weapon'][_0x1343fb(0x5f5)],
                            'duration': 0x78
                        }), this['exitTween'] = this[_0x1343fb(0x6d2)][_0x1343fb(0x12a1)][_0x1343fb(0x18bd)]({
                            'targets': this,
                            'alpha': 0x0,
                            'delay': 0x78,
                            'duration': 0x64,
                            'onComplete': () => {
                                const _0x4808ff = _0x1343fb;
                                this[_0x4808ff(0x14fb)]();
                            }
                        });
                    }
                }
                _0x304618['B_Gatti_Scratch'] = _0x495bf9, _0x304618['default'] = _0x495bf9;
            };
