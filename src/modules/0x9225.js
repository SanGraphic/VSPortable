// Module 0x9225
// Args: _0x1214f3, _0x4d5e66, _0x11970b

export default (_0x1214f3, _0x4d5e66, _0x11970b) => {
                'use strict';
                const _0x40cef9 = a0_0x6932;
                var _0xb8c77a = this && this['__importDefault'] || function(_0x40bc25) {
                    return _0x40bc25 && _0x40bc25['__esModule'] ? _0x40bc25 : {
                        'default': _0x40bc25
                    };
                };
                Object['defineProperty'](_0x4d5e66, '__esModule', {
                    'value': !0x0
                }), _0x4d5e66['B_Knife'] = void 0x0;
                const _0x15f9a3 = _0xb8c77a(_0x11970b(0xa14d)),
                    _0x359b47 = _0xb8c77a(_0x11970b(0x5f07)),
                    _0x47ee49 = _0xb8c77a(_0x11970b(0x1fd7)),
                    _0x1365cc = _0xb8c77a(_0x11970b(0x5103));
                class _0x2e196f extends _0x15f9a3['default'] {
                    constructor(_0xdf4a71, _0x413461, _0x1d1fc6, _0x5e248a, _0x43255b) {
                        const _0x48afbe = _0x40cef9;
                        super(_0xdf4a71, _0x413461, _0x1d1fc6, 'vfx', 'ProjectileKnife3.png', _0x5e248a, _0x43255b), this['posHistory'] = new Array(), this['maxHistory'] = 0x1, this['historyIndex'] = 0x0, this['setScale'](_0x1365cc['default']['PixelScale'] * this[_0x48afbe(0x4a1)]['PArea']), this['setAngle'](-0x5a), this[_0x48afbe(0xb1f)] = 0x2, this['ghosts'] = new Array();
                        for (let _0x205312 = 0x0; _0x205312 < this[_0x48afbe(0x624)]; _0x205312++) {
                            this[_0x48afbe(0x24a)][_0x48afbe(0x1564)](new Phaser[(_0x48afbe(0x24f))][(_0x48afbe(0x1551))](_0x413461, _0x1d1fc6));
                            var _0x2dd0a0 = this[_0x48afbe(0x6d2)]['add']['image'](0x0, 0x0, this['texture'][_0x48afbe(0x1381)], this[_0x48afbe(0x670)][_0x48afbe(0x226)])['setScale'](1.5 * _0x1365cc['default']['PixelScale'], 0.75 * _0x1365cc[_0x48afbe(0xd2c)][_0x48afbe(0x15db)])[_0x48afbe(0x183f)](!0x1)[_0x48afbe(0xb34)](0xff)['setAlpha'](0.5 - 0.25 * _0x205312);
                            this[_0x48afbe(0xbbc)][_0x48afbe(0x1564)](_0x2dd0a0);
                        }
                    } ['OnRecycle']() {
                        const _0x54926e = _0x40cef9;
                        super[_0x54926e(0x5ce)](), this[_0x54926e(0xcf9)][_0x54926e(0xdf6)](0x8), this[_0x54926e(0xb1f)] = 0x2;
                        let _0x46ec87 = this['weapon'][_0x54926e(0x433)][this[_0x54926e(0x4a1)][_0x54926e(0x11c9)]++ % this[_0x54926e(0x4a1)][_0x54926e(0x433)][_0x54926e(0xed9)]];
                        this['bounces'] = _0x46ec87 >= 0.5 ? this[_0x54926e(0x4a1)][_0x54926e(0xb2a)] : 0x0, this['setScale'](_0x1365cc[_0x54926e(0xd2c)]['PixelScale'] * this['weapon'][_0x54926e(0x5f5)]);
                        for (let _0x1536b4 = 0x0; _0x1536b4 < this['ghosts']['length']; _0x1536b4++) {
                            var _0x31fc2a = this[_0x54926e(0xbbc)][_0x1536b4];
                            _0x31fc2a[_0x54926e(0x8a2)](0x2 * this[_0x54926e(0x7cb)], 0.75 * this['scale']), _0x31fc2a[_0x54926e(0x183f)](!0x0), _0x31fc2a['setAngle'](this[_0x54926e(0xd96)]), _0x31fc2a[_0x54926e(0x726)](this['x'], this['y']);
                        }
                        for (let _0x26b79e = 0x0; _0x26b79e < this[_0x54926e(0x24a)][_0x54926e(0xed9)]; _0x26b79e++) this['posHistory'][_0x26b79e]['x'] = this['x'], this[_0x54926e(0x24a)][_0x26b79e]['y'] = this['y'];
                        this['y'] -= 0xc, this['x'] += (Math[_0x54926e(0x9ad)]() - 0.5) * (0x0 == this[_0x54926e(0x19c4)] ? 0x0 : 0x28) * this[_0x54926e(0x4a1)][_0x54926e(0x5f5)], this['y'] += (Math[_0x54926e(0x9ad)]() - 0.5) * (0x0 == this['indexInWeapon'] ? 0x0 : 0x28) * this[_0x54926e(0x4a1)][_0x54926e(0x5f5)], this[_0x54926e(0x429)]();
                        let _0x1fea52 = this[_0x54926e(0x4a1)][_0x54926e(0x1378)] ? this[_0x54926e(0x4a1)]['volume'] : 0.4;
                        _0x359b47[_0x54926e(0xd2c)]['Sound']['PlaySound'](_0x47ee49['default']['Shot'], {
                            'detune': -0x64 * this[_0x54926e(0x19c4)],
                            'volume': _0x1fea52
                        }, 0xc8, 0xa);
                    } ['DeSpawn']() {
                        const _0x26e4b9 = _0x40cef9;
                        for (let _0x4b3166 = 0x0; _0x4b3166 < this[_0x26e4b9(0xbbc)][_0x26e4b9(0xed9)]; _0x4b3166++) this['ghosts'][_0x4b3166][_0x26e4b9(0x183f)](!0x1);
                        super[_0x26e4b9(0x14fb)]();
                    } ['OnHasHitAnObject'](_0x25fdb3) {
                        const _0x42d8e0 = _0x40cef9;
                        if (!_0x25fdb3[_0x42d8e0(0xdae)]) {
                            if (this['bounces'] > 0x0) return this[_0x42d8e0(0x1b4)]--, this['AimForRandomEnemy'](), void(this[_0x42d8e0(0x990)] = []);
                            this['penetrating']--, this[_0x42d8e0(0x3d8)] <= 0x0 && this['DeSpawn']();
                        }
                    } ['getHistoryIndex'](_0x55f7c0) {
                        const _0x4a5cbb = _0x40cef9;
                        return this[_0x4a5cbb(0x1192)] + _0x55f7c0 >= this[_0x4a5cbb(0x624)] ? this[_0x4a5cbb(0x1192)] + _0x55f7c0 - this[_0x4a5cbb(0x624)] : this[_0x4a5cbb(0x1192)] + _0x55f7c0;
                    } ['Update']() {
                        const _0x4e27ae = _0x40cef9;
                        this[_0x4e27ae(0x1192)] < this[_0x4e27ae(0x624)] - 0x1 ? this['historyIndex']++ : this[_0x4e27ae(0x1192)] = 0x0;
                        for (let _0x83be8b = 0x0; _0x83be8b < this[_0x4e27ae(0xbbc)]['length']; _0x83be8b++) {
                            var _0x435039 = this[_0x4e27ae(0x24a)][this[_0x4e27ae(0xe5a)](_0x83be8b)],
                                _0x2ccd83 = this[_0x4e27ae(0xbbc)][_0x83be8b];
                            _0x2ccd83['angle'] = this[_0x4e27ae(0xd96)], _0x2ccd83['x'] = _0x435039['x'], _0x2ccd83['y'] = _0x435039['y'];
                        }
                        this[_0x4e27ae(0x24a)][this['historyIndex']]['x'] = this['x'], this['posHistory'][this[_0x4e27ae(0x1192)]]['y'] = this['y'];
                    }
                }
                _0x4d5e66['B_Knife'] = _0x2e196f, _0x4d5e66['default'] = _0x2e196f;
            };
