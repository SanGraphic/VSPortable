// Module 0x7680
// Args: _0x3c0a7a, _0x32adb3, _0x2d442c

export default (_0x3c0a7a, _0x32adb3, _0x2d442c) => {
                'use strict';
                const _0x20f357 = a0_0x6932;
                var _0x5dc53e = this && this['__importDefault'] || function(_0x1edf24) {
                    const _0x17b272 = a0_0x6932;
                    return _0x1edf24 && _0x1edf24['__esModule'] ? _0x1edf24 : {
                        'default': _0x1edf24
                    };
                };
                Object['defineProperty'](_0x32adb3, '__esModule', {
                    'value': !0x0
                });
                const _0x3c6070 = _0x5dc53e(_0x2d442c(0x5f07)),
                    _0x1e60ee = _0x5dc53e(_0x2d442c(0xef44));
                class _0x53a88c extends Phaser['GameObjects']['Group'] {
                    constructor(_0x40b5af) {
                        const _0x5a44ec = _0x20f357;
                        super(_0x40b5af), this['stored'] = new Array(), this[_0x5a44ec(0x13f4)] = new Array(), this['Init']();
                    } ['Init']() {
                        const _0x550338 = _0x20f357;
                        this[_0x550338(0x6d2)]['add'][_0x550338(0x1a88)](this);
                    } ['SpawnAt'](_0x515e3f, _0x8afd62, _0x46db28 = 0x1, _0x49f073 = 0x1) {
                        const _0x59a20c = _0x20f357,
                            _0x1d1f9b = this[_0x59a20c(0xdfb)]();
                        return _0x1d1f9b['x'] = _0x515e3f, _0x1d1f9b['y'] = _0x8afd62, _0x1d1f9b[_0x59a20c(0x1133)] = _0x46db28, _0x1d1f9b['radius'] = _0x49f073, _0x1d1f9b['setDepthPlease'](_0x8afd62 + 0x1 - _0x3c6070[_0x59a20c(0xd2c)]['Core'][_0x59a20c(0x10f6)]['y']), this[_0x59a20c(0x6d2)][_0x59a20c(0x3fe)]['add'](_0x1d1f9b), _0x1d1f9b[_0x59a20c(0x5ce)](), _0x1d1f9b;
                    } ['Spawn']() {
                        const _0x1601dc = _0x20f357;
                        let _0x5859c7 = this['stored'][_0x1601dc(0xcfe)]();
                        return _0x5859c7 || (_0x5859c7 = this['Make'](), _0x5859c7['Init']()), this[_0x1601dc(0x18bd)](_0x5859c7, !0x0), this[_0x1601dc(0x13f4)]['push'](_0x5859c7), _0x5859c7;
                    } ['Return'](_0x34d2d2) {
                        const _0x42ba95 = _0x20f357;
                        this['scene'][_0x42ba95(0x3fe)][_0x42ba95(0x393)](_0x34d2d2), this[_0x42ba95(0x393)](_0x34d2d2, !0x0, !0x1), this[_0x42ba95(0x13f4)][_0x42ba95(0x16ea)](this[_0x42ba95(0x13f4)][_0x42ba95(0x1303)](_0x34d2d2), 0x1), _0x3c6070['default']['Core']['BulletGroup'][_0x42ba95(0x393)](_0x34d2d2, !0x1), this['stored'][_0x42ba95(0x1564)](_0x34d2d2);
                    } ['Make']() {
                        const _0xd8bc11 = _0x20f357;
                        return new _0x1e60ee[(_0xd8bc11(0xd2c))](this, 0x0, 0x0);
                    } ['Update'](_0x382cef) {
                        const _0x53eb2a = _0x20f357;
                        for (let _0x9c055f = 0x0; _0x9c055f < this['spawned'][_0x53eb2a(0xed9)]; _0x9c055f++) this[_0x53eb2a(0x13f4)][_0x9c055f][_0x53eb2a(0xa9f)](_0x382cef);
                    }
                }
                _0x32adb3['default'] = _0x53a88c;
            };
