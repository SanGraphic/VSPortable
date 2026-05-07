// Module 0x14e6f
// Args: _0x34cea9, _0x514236, _0x1df567

export default (_0x34cea9, _0x514236, _0x1df567) => {
                'use strict';
                const _0x2cfc26 = a0_0x6932;
                var _0x1a9b65 = this && this['__importDefault'] || function(_0x17cbf0) {
                    const _0x37d703 = a0_0x6932;
                    return _0x17cbf0 && _0x17cbf0['__esModule'] ? _0x17cbf0 : {
                        'default': _0x17cbf0
                    };
                };
                Object['defineProperty'](_0x514236, '__esModule', {
                    'value': !0x0
                });
                const _0x246050 = _0x1a9b65(_0x1df567(0x5f07)),
                    _0x1c4b4e = _0x1a9b65(_0x1df567(0x16642));
                class _0x1855c3 extends Phaser['GameObjects']['Group'] {
                    constructor(_0x513fb6) {
                        const _0x14fb6a = _0x2cfc26;
                        super(_0x513fb6), this['stored'] = new Array(), this[_0x14fb6a(0x13f4)] = new Array(), this['Init']();
                    } ['Init']() {
                        const _0x38456b = _0x2cfc26;
                        this['scene'][_0x38456b(0x18bd)][_0x38456b(0x1a88)](this);
                    } ['SpawnAt'](_0x58481e, _0x1b64b9, _0x44474b = 0x1, _0x26339b = 0x1) {
                        const _0x2a173b = _0x2cfc26,
                            _0x5814f7 = this[_0x2a173b(0xdfb)]();
                        return _0x5814f7['x'] = _0x58481e, _0x5814f7['y'] = _0x1b64b9, _0x5814f7[_0x2a173b(0x1133)] = _0x44474b, _0x5814f7[_0x2a173b(0x161a)] = _0x26339b, _0x5814f7[_0x2a173b(0x62e)](_0x1b64b9 + 0x1 - _0x246050[_0x2a173b(0xd2c)]['Core'][_0x2a173b(0x10f6)]['y']), this['scene']['children'][_0x2a173b(0x18bd)](_0x5814f7), _0x5814f7['OnRecycle'](), _0x5814f7;
                    } ['Spawn']() {
                        const _0x101d92 = _0x2cfc26;
                        let _0x6ca4ba = this['stored']['pop']();
                        return _0x6ca4ba || (_0x6ca4ba = this['Make'](), _0x6ca4ba['Init']()), this[_0x101d92(0x18bd)](_0x6ca4ba, !0x0), this[_0x101d92(0x13f4)]['push'](_0x6ca4ba), _0x6ca4ba;
                    } ['Return'](_0x337eda) {
                        const _0x229128 = _0x2cfc26;
                        this['scene'][_0x229128(0x3fe)]['remove'](_0x337eda), this[_0x229128(0x393)](_0x337eda, !0x0, !0x1), this[_0x229128(0x13f4)][_0x229128(0x16ea)](this['spawned']['indexOf'](_0x337eda), 0x1), _0x246050['default'][_0x229128(0x1043)][_0x229128(0xd39)]['remove'](_0x337eda, !0x1), this[_0x229128(0x1924)]['push'](_0x337eda);
                    } ['Make']() {
                        const _0x5565e0 = _0x2cfc26;
                        return new _0x1c4b4e[(_0x5565e0(0xd2c))](this, 0x0, 0x0);
                    }
                }
                _0x514236['default'] = _0x1855c3;
            };
