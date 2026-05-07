// Module 0x10da9
// Args: _0x557b6c, _0x33333f, _0x157ce7

export default (_0x557b6c, _0x33333f, _0x157ce7) => {
                'use strict';
                const _0x405e47 = a0_0x6932;
                var _0x84e053 = this && this['__importDefault'] || function(_0x17c1d1) {
                    return _0x17c1d1 && _0x17c1d1['__esModule'] ? _0x17c1d1 : {
                        'default': _0x17c1d1
                    };
                };
                Object['defineProperty'](_0x33333f, '__esModule', {
                    'value': !0x0
                }), _0x33333f['B_Lancet'] = void 0x0;
                const _0x42f8d1 = _0x84e053(_0x157ce7(0xa14d)),
                    _0x365f54 = _0x84e053(_0x157ce7(0x5f07)),
                    _0x38d1dd = _0x84e053(_0x157ce7(0x5103)),
                    _0x5da22d = _0x84e053(_0x157ce7(0x9b68));
                class _0x15d771 extends _0x42f8d1['default'] {
                    constructor(_0x79c7e1, _0x4be9e8, _0x4a9baf, _0x31f8cc, _0x133caa) {
                        super(_0x79c7e1, _0x4be9e8, _0x4a9baf, 'vfx', 'Rings3.png', _0x31f8cc, _0x133caa), this['setScale'](0x1);
                    } ['OnRecycle']() {
                        const _0x1196e9 = _0x405e47;
                        super[_0x1196e9(0x5ce)](), this[_0x1196e9(0xcf9)][_0x1196e9(0xdf6)](0x10), this[_0x1196e9(0x8a2)](0x2 * _0x38d1dd[_0x1196e9(0xd2c)]['PixelScale']), this[_0x1196e9(0x183f)](!0x1), _0x365f54[_0x1196e9(0xd2c)]['Core'][_0x1196e9(0x6d2)]['time']['removeEvent'](this['ExpireTimer']), this[_0x1196e9(0x12a3)] = _0x365f54[_0x1196e9(0xd2c)][_0x1196e9(0x1043)][_0x1196e9(0x6d2)][_0x1196e9(0x915)][_0x1196e9(0x12b8)]({
                            'delay': 0x14,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x18caaf = _0x1196e9;
                                _0x365f54['default'][_0x18caaf(0x1043)]['scene'][_0x18caaf(0x915)][_0x18caaf(0x17fb)](this['ExpireTimer']), this['DeSpawn']();
                            }
                        }), this[_0x1196e9(0x12a3)][_0x1196e9(0x226)] = 'Lancet Expire';
                    } ['SetTarget'](_0x243259) {
                        const _0x462601 = _0x405e47;
                        super['SetTarget'](_0x243259), this['x'] += 0x32 * this[_0x462601(0x18a7)]['x'] * (0x1 + this['indexInWeapon']), this['y'] += 0x32 * this['target']['y'] * (0x1 + this['indexInWeapon']);
                    } ['OnHasHitAnObject'](_0x23f53f) {
                        const _0x167b76 = _0x405e47;
                        _0x23f53f[_0x167b76(0xdae)] || (_0x23f53f['Freeze'] && _0x23f53f[_0x167b76(0x48a)](this['weapon'][_0x167b76(0x16c3)], 0x1), _0x365f54[_0x167b76(0xd2c)][_0x167b76(0x1043)]['Arcanas']['ActiveArcanas'][_0x167b76(0x1303)](_0x5da22d[_0x167b76(0xd2c)][_0x167b76(0x529)]) > -0x1 && _0x365f54['default'][_0x167b76(0x1043)][_0x167b76(0x1884)]['TriggerCold'](_0x23f53f['x'], _0x23f53f['y']));
                    }
                }
                _0x33333f['B_Lancet'] = _0x15d771, _0x33333f['default'] = _0x15d771;
            };
