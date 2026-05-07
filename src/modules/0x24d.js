// Module 0x24d
// Args: _0x529794, _0x3756c9, _0xbcc979

export default (_0x529794, _0x3756c9, _0xbcc979) => {
                'use strict';
                const _0x15d6da = a0_0x6932;
                var _0x459878 = this && this['__importDefault'] || function(_0x3a19c6) {
                    const _0x38e2f0 = a0_0x6932;
                    return _0x3a19c6 && _0x3a19c6['__esModule'] ? _0x3a19c6 : {
                        'default': _0x3a19c6
                    };
                };
                Object['defineProperty'](_0x3756c9, '__esModule', {
                    'value': !0x0
                });
                const _0x27e38b = _0x459878(_0xbcc979(0x5103)),
                    _0x52950a = _0x459878(_0xbcc979(0x5f07));
                _0x3756c9['default'] = class {
                    constructor(_0x1ce37d) {
                        const _0x531013 = a0_0x6932;
                        this['speedFactor'] = 0x1, this['offsetX'] = 0x0, this['offsetY'] = 0x0, this['scene'] = _0x1ce37d;
                    } ['MakeBackground'](_0x567acd, _0xd58afe) {
                        const _0x2dc840 = a0_0x6932;
                        this['bgtile'] = this['scene']['add']['tileSprite'](0.5 * this['scene']['renderer']['width'], 0.5 * this['scene']['renderer']['height'], this['scene']['renderer']['width'], this['scene']['renderer']['height'], _0x567acd), this['bgtile']['setScale'](_0x27e38b['default']['PixelScale'])['setOrigin'](0.5)['setScrollFactor'](0x0)['setDepth'](-0xc3500)['setVisible'](!0x1);
                    } ['Update'](_0x1d8b8f) {
                        const _0x2d15b9 = _0x15d6da;
                        this['speedFactor'] = 0.5 / this[_0x2d15b9(0x1402)][_0x2d15b9(0x260)], this[_0x2d15b9(0x1402)][_0x2d15b9(0x1a79)] = this[_0x2d15b9(0x1818)] * _0x52950a['default'][_0x2d15b9(0x1043)][_0x2d15b9(0x10f6)]['x'], this['bgtile']['tilePositionY'] = this['speedFactor'] * _0x52950a[_0x2d15b9(0xd2c)][_0x2d15b9(0x1043)]['Player']['y'];
                    }
                };
            };
