// Module 0xf82d
// Args: _0x5a4bf4, _0x22c0d4, _0x53ffdd

export default (_0x5a4bf4, _0x22c0d4, _0x53ffdd) => {
                'use strict';
                const _0x213af8 = a0_0x6932;
                var _0x5bbc7d = this && this['__importDefault'] || function(_0x55866e) {
                    const _0x238a99 = _0x213af8;
                    return _0x55866e && _0x55866e[_0x238a99(0x16f1)] ? _0x55866e : {
                        'default': _0x55866e
                    };
                };
                Object['defineProperty'](_0x22c0d4, '__esModule', {
                    'value': !0x0
                }), _0x22c0d4['B_MagicMissile'] = void 0x0;
                const _0x1657c5 = _0x5bbc7d(_0x53ffdd(0xa14d)),
                    _0x38fdb0 = _0x5bbc7d(_0x53ffdd(0x5f07)),
                    _0x295263 = _0x5bbc7d(_0x53ffdd(0x1fd7)),
                    _0x15a924 = _0x5bbc7d(_0x53ffdd(0x5103)),
                    _0xb8dafa = _0x5bbc7d(_0x53ffdd(0x9b68));
                class _0x3406e1 extends _0x1657c5['default'] {
                    constructor(_0x174fe9, _0x592681, _0x3eee4e, _0x4d64f1, _0x1babe) {
                        const _0xb915c6 = _0x213af8;
                        super(_0x174fe9, _0x592681, _0x3eee4e, 'vfx', 'ProjectileHoly1.png', _0x4d64f1, _0x1babe), this[_0xb915c6(0x125b)] = this[_0xb915c6(0x6d2)][_0xb915c6(0x18bd)][_0xb915c6(0x1791)]('vfx'), this['PfxEmitter'][_0xb915c6(0x14c0)]({
                            'frame': ['PfxHoly1.png', 'PfxHoly2.png'],
                            'speed': {
                                'min': 0xf,
                                'max': 0x1e
                            },
                            'quantity': 0x1,
                            'lifespan': 0x12c,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x1
                        });
                    } ['OnRecycle']() {
                        const _0x13fe8f = _0x213af8;
                        super['OnRecycle'](), this[_0x13fe8f(0xcf9)]['setCircle'](0x8), this[_0x13fe8f(0x8a2)](_0x15a924[_0x13fe8f(0xd2c)]['PixelScale'] * this[_0x13fe8f(0x4a1)][_0x13fe8f(0x5f5)]), this['x'] += (Math['random']() - 0.5) * this[_0x13fe8f(0x19c4)] * 0xa, this['y'] += (Math['random']() - 0.5) * this[_0x13fe8f(0x19c4)] * 0xa, this[_0x13fe8f(0xefb)]();
                        let _0x1ae515 = this[_0x13fe8f(0x4a1)]['volume'] ? this[_0x13fe8f(0x4a1)][_0x13fe8f(0x1378)] : 0.15;
                        _0x38fdb0[_0x13fe8f(0xd2c)][_0x13fe8f(0x1267)][_0x13fe8f(0x7f6)](_0x295263[_0x13fe8f(0xd2c)]['MagicMissile'], {
                            'detune': -0x64 * this['indexInWeapon'],
                            'volume': _0x1ae515
                        }, 0xc8, 0xc);
                    } ['OnHasHitAnObject'](_0x162d3b) {
                        const _0x5cd806 = _0x213af8;
                        if (!_0x162d3b[_0x5cd806(0xdae)]) {
                            if (this[_0x5cd806(0x1b4)] > 0x0) return this[_0x5cd806(0x1b4)]--, this['AimForRandomEnemy'](), void(this[_0x5cd806(0x990)] = []);
                            this[_0x5cd806(0x3d8)]--, this['penetrating'] <= 0x0 && this['DeSpawn'](), _0x38fdb0['default'][_0x5cd806(0x1043)][_0x5cd806(0x1884)][_0x5cd806(0x15e7)][_0x5cd806(0x1303)](_0xb8dafa[_0x5cd806(0xd2c)][_0x5cd806(0x172d)]) > -0x1 && this['TryFreeze'](_0x162d3b);
                        }
                    } ['Update']() {
                        const _0x202663 = _0x213af8;
                        this['PfxEmitter'][_0x202663(0x108b)](this['x'], this['y']);
                    }
                }
                _0x22c0d4['B_MagicMissile'] = _0x3406e1, _0x22c0d4['default'] = _0x3406e1;
            };
