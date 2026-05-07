// Module 0x16828
// Args: _0x46cc86, _0x69e045, _0x25fba4

export default (_0x46cc86, _0x69e045, _0x25fba4) => {
                'use strict';
                const _0x5e39cd = a0_0x6932;
                var _0x27f029 = this && this['__importDefault'] || function(_0x153ca3) {
                    return _0x153ca3 && _0x153ca3['__esModule'] ? _0x153ca3 : {
                        'default': _0x153ca3
                    };
                };
                Object['defineProperty'](_0x69e045, '__esModule', {
                    'value': !0x0
                }), _0x69e045['W_Bubble'] = void 0x0;
                const _0x2ff5a6 = _0x27f029(_0x25fba4(0x5f07)),
                    _0x4752a1 = _0x27f029(_0x25fba4(0xe49a));
                class _0x305e80 extends _0x4752a1['default'] {
                    constructor(_0x45129e) {
                        super(_0x45129e);
                    } ['OnStart']() {
                        const _0x53100b = _0x5e39cd;
                        super[_0x53100b(0xec7)](), _0x2ff5a6['default'][_0x53100b(0x1043)][_0x53100b(0x6d2)]['physics'][_0x53100b(0x18bd)][_0x53100b(0xe6e)](this['pool'], this[_0x53100b(0xc82)]);
                    } ['FireOneBullet'](_0x3833f7, _0x798d42, _0x5bdcdf, _0x708dc9, _0x12a2f6 = 0xffffff) {
                        const _0x59d039 = _0x5e39cd;
                        var _0x11144 = this['pool'][_0x59d039(0xada)](_0x3833f7, _0x798d42, this, _0x5bdcdf);
                        return _0x708dc9 && _0x11144 ? (_0x11144['SetTarget'](_0x708dc9), _0x11144[_0x59d039(0x6df)](_0x12a2f6)) : (null == _0x11144 || _0x11144[_0x59d039(0x227)](), null == _0x11144 || _0x11144['SetColor'](_0x12a2f6)), _0x11144;
                    } ['Update'](_0x580262) {
                        const _0x5b6847 = _0x5e39cd;
                        super['Update'](_0x580262);
                        let _0x3ad6e6 = _0x2ff5a6['default'][_0x5b6847(0x1043)][_0x5b6847(0x17fc)];
                        this['OverlapCirc'](_0x3ad6e6['x'], _0x3ad6e6['y'], _0x3ad6e6[_0x5b6847(0x161a)]);
                    } ['OverlapCirc'](_0xd4d018, _0x281aee, _0xf7183b) {
                        const _0x5bcab7 = _0x5e39cd;
                        for (var _0xbb5a1e = new Phaser[(_0x5bcab7(0x10d2))][(_0x5bcab7(0xf29))](_0xd4d018, _0x281aee, _0xf7183b), _0x49806c = 0x0; _0x49806c < this['pool']['spawned'][_0x5bcab7(0xed9)]; _0x49806c++) {
                            var _0x5e06c9 = this[_0x5bcab7(0xc82)][_0x5bcab7(0x13f4)][_0x49806c];
                            this['CircleToCircle'](_0xbb5a1e, _0x5e06c9['body']) || _0x5e06c9['decelerate']();
                        }
                    } ['CircleToCircle'](_0x2022e8, _0x1c0458) {
                        const _0x1953ef = _0x5e39cd;
                        return this['DistanceBetween'](_0x2022e8['x'], _0x2022e8['y'], _0x1c0458['x'], _0x1c0458['y']) <= _0x2022e8[_0x1953ef(0x161a)] + _0x1c0458['radius'];
                    } ['DistanceBetween'](_0x60edab, _0x35db01, _0x2da314, _0x59b89b) {
                        var _0x41a686 = _0x60edab - _0x2da314,
                            _0x10c794 = _0x35db01 - _0x59b89b;
                        return Math['sqrt'](_0x41a686 * _0x41a686 + _0x10c794 * _0x10c794);
                    }
                }
                _0x69e045['W_Bubble'] = _0x305e80, _0x69e045['default'] = _0x305e80;
            };
