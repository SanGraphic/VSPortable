// Module 0xb0e5
// Args: _0x2f8cfe, _0x448ff6, _0x3d995d

export default (_0x2f8cfe, _0x448ff6, _0x3d995d) => {
                'use strict';
                const _0x45f8e0 = a0_0x6932;
                var _0x3eaa5d = this && this['__importDefault'] || function(_0x591fe6) {
                    const _0x3d8199 = _0x45f8e0;
                    return _0x591fe6 && _0x591fe6[_0x3d8199(0x16f1)] ? _0x591fe6 : {
                        'default': _0x591fe6
                    };
                };
                Object['defineProperty'](_0x448ff6, '__esModule', {
                    'value': !0x0
                }), _0x448ff6['W_Guns2'] = void 0x0;
                const _0x78765f = _0x3eaa5d(_0x3d995d(0x5f07)),
                    _0x4928ad = _0x3eaa5d(_0x3d995d(0x54e3)),
                    _0x53ec98 = _0x3eaa5d(_0x3d995d(0xe49a)),
                    _0x440250 = _0x3eaa5d(_0x3d995d(0x9b68));
                class _0x1c9fdc extends _0x53ec98['default'] {
                    constructor(_0x40b37b) {
                        const _0x37629c = _0x45f8e0;
                        super(_0x40b37b), this[_0x37629c(0xeeb)] = _0x4928ad[_0x37629c(0xd2c)]['GUNS2_COUNTER'], this[_0x37629c(0x203)] = null, this[_0x37629c(0x433)] = this[_0x37629c(0x2b1)](0x3e8);
                    } ['CheckArcanas']() {
                        const _0x3d27c1 = _0x45f8e0;
                        if (_0x78765f[_0x3d27c1(0xd2c)][_0x3d27c1(0x1043)][_0x3d27c1(0x1884)][_0x3d27c1(0x15e7)][_0x3d27c1(0x1303)](_0x440250[_0x3d27c1(0xd2c)][_0x3d27c1(0x663)]) > -0x1) {
                            this[_0x3d27c1(0x3d8)] = 0xffff, this['bonusBounces'] = 0x1;
                            for (let _0x54cc33 = 0x0; _0x54cc33 < this[_0x3d27c1(0x885)][_0x3d27c1(0xed9)]; _0x54cc33++) {
                                const _0xe43599 = this['wallsColliders'][_0x54cc33];
                                _0x78765f['default']['Core'][_0x3d27c1(0x6d2)]['physics'][_0x3d27c1(0x1cf)][_0x3d27c1(0x107c)](_0xe43599);
                            }
                            this[_0x3d27c1(0xc69)] = !0x1;
                        }
                        if (_0x78765f[_0x3d27c1(0xd2c)][_0x3d27c1(0x1043)][_0x3d27c1(0x1884)][_0x3d27c1(0x15e7)]['indexOf'](_0x440250[_0x3d27c1(0xd2c)]['T14_JEWELS']) > -0x1 && (this[_0x3d27c1(0x10e8)] = 0.25), _0x78765f['default']['Core']['Arcanas'][_0x3d27c1(0x15e7)][_0x3d27c1(0x1303)](_0x440250['default']['T01_AQUARIUS']) > -0x1) {
                            if (_0x78765f[_0x3d27c1(0xd2c)][_0x3d27c1(0x1043)][_0x3d27c1(0x164d)]['find'](_0x1d592f => _0x1d592f['bulletType'] === this['counterWeaponType'])) return;
                            let _0x2f6ed7 = _0x78765f['default']['Core']['AddHiddenWeapon'](this['counterWeaponType']);
                            for (this[_0x3d27c1(0x3e4)] = _0x2f6ed7; _0x2f6ed7['level'] < this[_0x3d27c1(0x5e3)];) _0x2f6ed7[_0x3d27c1(0x2ab)]();
                        }
                        super['CheckArcanas']();
                    }
                    get['PBounces']() {
                        const _0x484929 = _0x45f8e0;
                        return this[_0x484929(0x1985)] + this[_0x484929(0x1b4)];
                    } ['FireOneBullet'](_0x48f10a, _0x18c072, _0xdd6bca, _0x8c3ccf) {
                        const _0x5ad573 = _0x45f8e0;
                        for (let _0x160d0b = 0x0; _0x160d0b < 0x4; _0x160d0b++) {
                            var _0x5b5e80 = this[_0x5ad573(0xc82)][_0x5ad573(0xada)](_0x48f10a, _0x18c072, this, _0x160d0b);
                            _0x8c3ccf && _0x5b5e80 && _0x5b5e80[_0x5ad573(0x3b9)](_0x8c3ccf);
                        }
                        return _0x5b5e80;
                    } ['LevelUp']() {
                        const _0x386419 = _0x45f8e0;
                        let _0x17e4bc = super[_0x386419(0x2ab)]();
                        return this['counterWeapon'] && this[_0x386419(0x3e4)][_0x386419(0x2ab)](), _0x17e4bc;
                    }
                }
                _0x448ff6['W_Guns2'] = _0x1c9fdc, _0x448ff6['default'] = _0x1c9fdc;
            };
