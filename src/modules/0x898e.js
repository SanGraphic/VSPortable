// Module 0x898e
// Args: _0x433df5, _0x2a0cba, _0x53496e

export default (_0x433df5, _0x2a0cba, _0x53496e) => {
                'use strict';
                const _0x4da89e = a0_0x6932;
                Object['defineProperty'](_0x2a0cba, '__esModule', {
                    'value': !0x0
                });
                const _0x405741 = _0x53496e(0x18304);
                _0x2a0cba['default'] = class {
                    constructor(_0x202728, _0x182b25, _0x142552, _0x44d263, _0x299a73, _0x3db4f3) {
                        const _0xf36410 = _0x4da89e;
                        this[_0xf36410(0x3b4)] = 0x0, this['alpha'] = 0.5, this['TowerTop'] = -0x2710, this[_0xf36410(0x10e0)] = new Phaser[(_0xf36410(0x24f))][(_0xf36410(0x1551))](0x0, 0x0), this['scene'] = _0x202728, this[_0xf36410(0x933)] = this['scene'][_0xf36410(0x18bd)][_0xf36410(0xe09)](), this[_0xf36410(0x1a9c)](_0x182b25, _0x142552, _0x44d263, _0x299a73, _0x3db4f3);
                    } ['Create'](_0x4adab2, _0x28d7f1, _0x1b7878 = 0x1, _0x32e272 = 0x1, _0x2dddbe = 0.5) {
                        const _0x1f5b64 = _0x4da89e;
                        let _0x4881d2 = this[_0x1f5b64(0x6d2)][_0x1f5b64(0x12f9)]['height'] / 3.5;
                        this[_0x1f5b64(0x1853)] = new Phaser[(_0x1f5b64(0x16c7))]['Spline']([_0x4adab2, 0x4 * _0x4881d2, _0x4adab2 - 0x19 * _0x1b7878, 0x3 * _0x4881d2, _0x4adab2 + 0x32 * _0x1b7878, 0x2 * _0x4881d2, _0x4adab2 - 0x19 * _0x1b7878, _0x4881d2, _0x4adab2, 0x0]);
                        for (var _0x15e319 = 0x0; _0x15e319 <= 0xb; _0x15e319++) {
                            let _0x1ee77e;
                            switch (_0x15e319) {
                                case 0x0:
                                case 0x5:
                                    _0x1ee77e = 'I';
                                    break;
                                case 0x1:
                                case 0x3:
                                    _0x1ee77e = 'A';
                                    break;
                                case 0x2:
                                    _0x1ee77e = 'M';
                                    break;
                                case 0x4:
                                    _0x1ee77e = 'L';
                                    break;
                                case 0x6:
                                    _0x1ee77e = 'V';
                                    break;
                                case 0x7:
                                case 0x9:
                                case 0xb:
                                    _0x1ee77e = 'E';
                                    break;
                                case 0x8:
                                    _0x1ee77e = 'H';
                                    break;
                                case 0xa:
                                    _0x1ee77e = 'R';
                            }
                            let _0x3f1b7a = this[_0x1f5b64(0x6d2)][_0x1f5b64(0x18bd)][_0x1f5b64(0x758)](0x0, 0x0, _0x1ee77e, {
                                'color': 'red'
                            });
                            _0x3f1b7a[_0x1f5b64(0xd87)](0x0), _0x3f1b7a['setAngle'](0xf), _0x3f1b7a['setScale'](0x1), _0x3f1b7a[_0x1f5b64(0x11c7)](_0x405741[_0x1f5b64(0x10fc)]['ADD']), _0x3f1b7a[_0x1f5b64(0xb4a)](-0x1869f), _0x3f1b7a[_0x1f5b64(0xe71)] = _0x32e272, this[_0x1f5b64(0x6d2)][_0x1f5b64(0x12a1)]['add']({
                                'targets': _0x3f1b7a,
                                'z': 0x1,
                                'angle': -0xf,
                                'ease': 'Linear',
                                'duration': _0x28d7f1,
                                'repeat': -0x1,
                                'delay': _0x15e319 * (0.04 * _0x28d7f1)
                            }), this[_0x1f5b64(0x933)][_0x1f5b64(0x18bd)](_0x3f1b7a);
                        }
                        this['scene'][_0x1f5b64(0x12a1)]['add']({
                            'targets': this,
                            'alpha': _0x2dddbe,
                            'ease': 'Sine.easeOut',
                            'duration': 0.25 * _0x28d7f1,
                            'repeat': -0x1,
                            'yoyo': !0x0
                        });
                    } ['Update'](_0x448e22, _0x34a513) {
                        const _0x3458d8 = _0x4da89e;
                        this[_0x3458d8(0x3b4)] = -_0x34a513;
                        for (var _0x2120d1 = this['followers'][_0x3458d8(0x1a39)](), _0x2ac436 = 0x0; _0x2ac436 < _0x2120d1['length']; _0x2ac436++) {
                            let _0x5ce953 = _0x2120d1[_0x2ac436];
                            this[_0x3458d8(0x1853)][_0x3458d8(0x5c9)](_0x5ce953['z'], this[_0x3458d8(0x10e0)]), _0x5ce953['x'] = this[_0x3458d8(0x10e0)]['x'], _0x5ce953['y'] = this['appo']['y'], _0x5ce953[_0x3458d8(0xe71)] = this[_0x3458d8(0xe71)] * this[_0x3458d8(0x3b4)];
                        }
                    }
                };
            };
