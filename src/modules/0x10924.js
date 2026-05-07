// Module 0x10924
// Args: _0x4bbca2, _0x165639, _0x2c8b7a

export default (_0x4bbca2, _0x165639, _0x2c8b7a) => {
                'use strict';
                const _0x39f176 = a0_0x6932;
                var _0x3f16fc = this && this['__importDefault'] || function(_0x37cf29) {
                    return _0x37cf29 && _0x37cf29['__esModule'] ? _0x37cf29 : {
                        'default': _0x37cf29
                    };
                };
                Object['defineProperty'](_0x165639, '__esModule', {
                    'value': !0x0
                });
                const _0x32bff4 = _0x3f16fc(_0x2c8b7a(0x5f07)),
                    _0xce0801 = _0x3f16fc(_0x2c8b7a(0xb406));
                class _0x38c2ee extends Phaser['GameObjects']['Group'] {
                    constructor(_0x377f8a) {
                        const _0x4d8ee8 = _0x39f176;
                        super(_0x377f8a), this['stored'] = new Array(), this[_0x4d8ee8(0x13f4)] = new Array(), this[_0x4d8ee8(0x658)]();
                    } ['Init']() {
                        const _0x13aeef = _0x39f176;
                        this['scene'][_0x13aeef(0x18bd)]['existing'](this);
                    } ['SpawnAt'](_0x76498b, _0x2ec736, _0x36c468 = 0x1, _0x45b061 = 0x1) {
                        const _0x355205 = _0x39f176,
                            _0x38ad39 = this[_0x355205(0xdfb)]();
                        return _0x38ad39['x'] = _0x76498b, _0x38ad39['y'] = _0x2ec736, _0x38ad39[_0x355205(0x1133)] = _0x36c468, _0x38ad39[_0x355205(0x161a)] = _0x45b061, _0x38ad39['setDepthPlease'](_0x2ec736 + 0x1 - _0x32bff4['default']['Core']['Player']['y']), this[_0x355205(0x6d2)][_0x355205(0x3fe)]['add'](_0x38ad39), _0x38ad39['OnRecycle'](), _0x38ad39;
                    } ['Spawn']() {
                        const _0x41576b = _0x39f176;
                        let _0x267923 = this['stored'][_0x41576b(0xcfe)]();
                        return _0x267923 || (_0x267923 = this['Make'](), _0x267923[_0x41576b(0x658)]()), this['add'](_0x267923, !0x0), this[_0x41576b(0x13f4)][_0x41576b(0x1564)](_0x267923), _0x267923;
                    } ['Return'](_0x5d541b) {
                        const _0x32a7d8 = _0x39f176;
                        this[_0x32a7d8(0x6d2)][_0x32a7d8(0x3fe)]['remove'](_0x5d541b), this[_0x32a7d8(0x393)](_0x5d541b, !0x0, !0x1), this['spawned'][_0x32a7d8(0x16ea)](this[_0x32a7d8(0x13f4)][_0x32a7d8(0x1303)](_0x5d541b), 0x1), _0x32bff4[_0x32a7d8(0xd2c)]['Core']['BulletGroup']['remove'](_0x5d541b, !0x1), this[_0x32a7d8(0x1924)]['push'](_0x5d541b);
                    } ['Make']() {
                        const _0x38db70 = _0x39f176;
                        return new _0xce0801[(_0x38db70(0xd2c))](this, 0x0, 0x0);
                    } ['Update'](_0x1f1f48) {
                        const _0x9f6377 = _0x39f176;
                        for (let _0x477009 = 0x0; _0x477009 < this[_0x9f6377(0x13f4)][_0x9f6377(0xed9)]; _0x477009++) this[_0x9f6377(0x13f4)][_0x477009][_0x9f6377(0xa9f)](_0x1f1f48);
                    }
                }
                _0x165639['default'] = _0x38c2ee;
            };
