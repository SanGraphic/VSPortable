// Module 0x9612
// Args: _0x5309b3, _0x1394db, _0x515214

export default (_0x5309b3, _0x1394db, _0x515214) => {
                'use strict';
                const _0x1c1f9a = a0_0x6932;
                var _0x13afc8 = this && this['__importDefault'] || function(_0x5e6588) {
                    return _0x5e6588 && _0x5e6588['__esModule'] ? _0x5e6588 : {
                        'default': _0x5e6588
                    };
                };
                Object['defineProperty'](_0x1394db, '__esModule', {
                    'value': !0x0
                });
                const _0x892d76 = _0x13afc8(_0x515214(0x5f07)),
                    _0x122853 = _0x13afc8(_0x515214(0xde50));
                class _0x18a293 extends Phaser['GameObjects']['Group'] {
                    constructor(_0x1eaa6b) {
                        const _0x1b192b = _0x1c1f9a;
                        super(_0x1eaa6b), this['stored'] = new Array(), this['spawned'] = new Array(), this[_0x1b192b(0x658)]();
                    } ['Init']() {
                        const _0x480003 = _0x1c1f9a;
                        this['scene'][_0x480003(0x18bd)]['existing'](this);
                    } ['SpawnAt'](_0x31aa32, _0x15b4ae, _0x260cdd, _0x2499da, _0x29e8eb, _0x5bfb5f, _0x2951ab, _0x27e3d5, _0x50ecf3) {
                        const _0x5546ea = _0x1c1f9a,
                            _0x4aa97e = this['Spawn']();
                        return _0x4aa97e['x'] = _0x31aa32, _0x4aa97e['y'] = _0x15b4ae, _0x4aa97e['SetExplosionSize'](_0x31aa32, _0x15b4ae, _0x260cdd, _0x2499da), _0x4aa97e['SetExplosionDamage'](_0x29e8eb, _0x5bfb5f, _0x2951ab), _0x4aa97e[_0x5546ea(0x18d9)] = _0x27e3d5, _0x4aa97e['follow'] = _0x50ecf3, this['scene']['children'][_0x5546ea(0x18bd)](_0x4aa97e), _0x4aa97e['OnRecycle'](), _0x4aa97e;
                    } ['Spawn']() {
                        const _0x2dcbb1 = _0x1c1f9a;
                        let _0x3dde10 = this[_0x2dcbb1(0x1924)][_0x2dcbb1(0xcfe)]();
                        return _0x3dde10 || (_0x3dde10 = this['Make'](), _0x3dde10[_0x2dcbb1(0x658)]()), this[_0x2dcbb1(0x18bd)](_0x3dde10, !0x0), this['spawned'][_0x2dcbb1(0x1564)](_0x3dde10), _0x3dde10;
                    } ['Return'](_0x458969) {
                        const _0x466bce = _0x1c1f9a;
                        this[_0x466bce(0x6d2)][_0x466bce(0x3fe)]['remove'](_0x458969), this[_0x466bce(0x393)](_0x458969, !0x0, !0x1), this[_0x466bce(0x13f4)][_0x466bce(0x16ea)](this[_0x466bce(0x13f4)][_0x466bce(0x1303)](_0x458969), 0x1), _0x892d76[_0x466bce(0xd2c)]['Core']['BulletGroup'][_0x466bce(0x393)](_0x458969, !0x1), this[_0x466bce(0x1924)]['push'](_0x458969);
                    } ['Make']() {
                        return new _0x122853['default'](this, 0x0, 0x0);
                    }
                }
                _0x1394db['default'] = _0x18a293;
            };
