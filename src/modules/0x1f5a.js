// Module 0x1f5a
// Args: _0x3fa4dd, _0x28dee4, _0x1438a3

export default (_0x3fa4dd, _0x28dee4, _0x1438a3) => {
                'use strict';
                const _0x49f6b6 = a0_0x6932;
                var _0x1a8bd1 = this && this['__importDefault'] || function(_0x1fd713) {
                    return _0x1fd713 && _0x1fd713['__esModule'] ? _0x1fd713 : {
                        'default': _0x1fd713
                    };
                };
                Object['defineProperty'](_0x28dee4, '__esModule', {
                    'value': !0x0
                }), _0x28dee4['W_Knife'] = void 0x0;
                const _0xd95dae = _0x1a8bd1(_0x1438a3(0x5f07)),
                    _0x447b02 = _0x1a8bd1(_0x1438a3(0xe49a)),
                    _0xb135f3 = _0x1a8bd1(_0x1438a3(0x9b68));
                class _0xf21063 extends _0x447b02['default'] {
                    constructor(_0x1cd551) {
                        super(_0x1cd551);
                    } ['CheckArcanas']() {
                        const _0x7499f1 = _0x49f6b6;
                        if (_0xd95dae[_0x7499f1(0xd2c)][_0x7499f1(0x1043)][_0x7499f1(0x1884)][_0x7499f1(0x15e7)][_0x7499f1(0x1303)](_0xb135f3[_0x7499f1(0xd2c)][_0x7499f1(0x663)]) > -0x1) {
                            this[_0x7499f1(0x3d8)] = 0xffff, this[_0x7499f1(0x1985)] = 0x3;
                            for (let _0x5f3782 = 0x0; _0x5f3782 < this[_0x7499f1(0x885)]['length']; _0x5f3782++) {
                                const _0x509e55 = this['wallsColliders'][_0x5f3782];
                                _0xd95dae[_0x7499f1(0xd2c)]['Core'][_0x7499f1(0x6d2)]['physics']['world'][_0x7499f1(0x107c)](_0x509e55);
                            }
                            this[_0x7499f1(0xc69)] = !0x1;
                        }
                        _0xd95dae[_0x7499f1(0xd2c)]['Core'][_0x7499f1(0x1884)]['ActiveArcanas'][_0x7499f1(0x1303)](_0xb135f3['default']['T16_SLASH']) > -0x1 && (this[_0x7499f1(0xdda)] = !0x0), super['CheckArcanas']();
                    }
                    get['PBounces']() {
                        const _0x463acc = _0x49f6b6;
                        return this[_0x463acc(0x1985)] + this['bounces'];
                    } ['onBulletOverlapsEnemy'](_0x277362, _0x55b35c) {
                        return this['canCrit'] ? this['StandardCritical'](_0x277362, _0x55b35c) : super['onBulletOverlapsEnemy'](_0x277362, _0x55b35c);
                    }
                }
                _0x28dee4['W_Knife'] = _0xf21063, _0x28dee4['default'] = _0xf21063;
            };
