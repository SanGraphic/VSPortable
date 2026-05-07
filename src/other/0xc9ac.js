// Module 0xc9ac
// Args: _0x5545f7, _0x2156a2, _0x53be19

export default (_0x5545f7, _0x2156a2, _0x53be19) => {
                'use strict';
                const _0x3a55af = a0_0x6932;
                var _0x1c3ab6 = this && this['__importDefault'] || function(_0x1368da) {
                    const _0x59c024 = a0_0x6932;
                    return _0x1368da && _0x1368da['__esModule'] ? _0x1368da : {
                        'default': _0x1368da
                    };
                };
                Object['defineProperty'](_0x2156a2, '__esModule', {
                    'value': !0x0
                });
                const _0x1c16c7 = _0x1c3ab6(_0x53be19(0x5f07)),
                    _0x45e77c = _0x1c3ab6(_0x53be19(0xd2aa));
                class _0xc85aec extends Phaser['GameObjects']['Group'] {
                    constructor(_0x39bed8) {
                        const _0x1759af = _0x3a55af;
                        super(_0x39bed8), this['stored'] = new Array(), this['spawned'] = new Array(), this[_0x1759af(0x658)]();
                    } ['Init']() {
                        const _0x329d0c = _0x3a55af;
                        this[_0x329d0c(0x6d2)]['add'][_0x329d0c(0x1a88)](this);
                    } ['SpawnAt'](_0xb5fe6a, _0x3daa1b, _0x25146f = 0x1, _0x2c861b = 0x1) {
                        const _0x1b1072 = _0x3a55af,
                            _0x48a600 = this['Spawn']();
                        return _0x48a600['x'] = _0xb5fe6a, _0x48a600['y'] = _0x3daa1b, _0x48a600[_0x1b1072(0x1133)] = _0x25146f, _0x48a600[_0x1b1072(0x161a)] = _0x2c861b, _0x48a600['setDepthPlease'](_0x3daa1b + 0x1 - _0x1c16c7['default'][_0x1b1072(0x1043)][_0x1b1072(0x10f6)]['y']), this[_0x1b1072(0x6d2)]['children'][_0x1b1072(0x18bd)](_0x48a600), _0x48a600[_0x1b1072(0x5ce)](), _0x48a600;
                    } ['Spawn']() {
                        const _0x253543 = _0x3a55af;
                        let _0x251d5 = this[_0x253543(0x1924)]['pop']();
                        return _0x251d5 || (_0x251d5 = this['Make'](), _0x251d5['Init']()), this[_0x253543(0x18bd)](_0x251d5, !0x0), this['spawned'][_0x253543(0x1564)](_0x251d5), _0x251d5;
                    } ['Return'](_0x47b69d) {
                        const _0x16ac02 = _0x3a55af;
                        this[_0x16ac02(0x6d2)][_0x16ac02(0x3fe)]['remove'](_0x47b69d), this['remove'](_0x47b69d, !0x0, !0x1), this[_0x16ac02(0x13f4)]['splice'](this[_0x16ac02(0x13f4)][_0x16ac02(0x1303)](_0x47b69d), 0x1), this[_0x16ac02(0x1924)][_0x16ac02(0x1564)](_0x47b69d);
                    } ['Make']() {
                        return new _0x45e77c['default'](this, -0x186a0, -0x186a0);
                    }
                }
                _0x2156a2['default'] = _0xc85aec;
            };
