// Module 0x15ee2
// Args: _0x1893ae, _0x2a655e, _0x3e460b

export default (_0x1893ae, _0x2a655e, _0x3e460b) => {
                'use strict';
                const _0x305db9 = a0_0x6932;
                var _0x10c38c = this && this['__createBinding'] || (Object['create'] ? function(_0x5a86aa, _0x551bf1, _0x2ee0ba, _0xc5541c) {
                        const _0x202bb5 = _0x305db9;
                        void 0x0 === _0xc5541c && (_0xc5541c = _0x2ee0ba);
                        var _0xd6794f = Object[_0x202bb5(0x1687)](_0x551bf1, _0x2ee0ba);
                        _0xd6794f && !('get' in _0xd6794f ? !_0x551bf1['__esModule'] : _0xd6794f['writable'] || _0xd6794f[_0x202bb5(0xf70)]) || (_0xd6794f = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x551bf1[_0x2ee0ba];
                            }
                        }), Object['defineProperty'](_0x5a86aa, _0xc5541c, _0xd6794f);
                    } : function(_0x58609b, _0x3a3c3c, _0x140b97, _0x104150) {
                        void 0x0 === _0x104150 && (_0x104150 = _0x140b97), _0x58609b[_0x104150] = _0x3a3c3c[_0x140b97];
                    }),
                    _0x1626b7 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x13c757, _0x57a564) {
                        const _0x1d70a0 = _0x305db9;
                        Object[_0x1d70a0(0x811)](_0x13c757, 'default', {
                            'enumerable': !0x0,
                            'value': _0x57a564
                        });
                    } : function(_0x1d65b5, _0x513fbe) {
                        const _0x28ce24 = _0x305db9;
                        _0x1d65b5[_0x28ce24(0xd2c)] = _0x513fbe;
                    }),
                    _0x39f193 = this && this['__importStar'] || function(_0x1bd108) {
                        const _0x14591d = _0x305db9;
                        if (_0x1bd108 && _0x1bd108[_0x14591d(0x16f1)]) return _0x1bd108;
                        var _0x5ac158 = {};
                        if (null != _0x1bd108) {
                            for (var _0x5470a5 in _0x1bd108) 'default' !== _0x5470a5 && Object[_0x14591d(0x977)][_0x14591d(0x2cf)][_0x14591d(0xff0)](_0x1bd108, _0x5470a5) && _0x10c38c(_0x5ac158, _0x1bd108, _0x5470a5);
                        }
                        return _0x1626b7(_0x5ac158, _0x1bd108), _0x5ac158;
                    },
                    _0x30fd95 = this && this['__importDefault'] || function(_0x1eb1f3) {
                        const _0x4d86ab = _0x305db9;
                        return _0x1eb1f3 && _0x1eb1f3[_0x4d86ab(0x16f1)] ? _0x1eb1f3 : {
                            'default': _0x1eb1f3
                        };
                    };
                Object['defineProperty'](_0x2a655e, '__esModule', {
                    'value': !0x0
                }), _0x2a655e['PickupGuarded'] = void 0x0;
                const _0xc6069 = _0x39f193(_0x3e460b(0x5f07)),
                    _0x5af067 = _0x30fd95(_0x3e460b(0x166d5)),
                    _0x376005 = _0x30fd95(_0x3e460b(0xd1a1));
                class _0x8fd121 extends _0x5af067['default'] {
                    constructor() {
                        const _0x3edea9 = _0x305db9;
                        super(...arguments), this[_0x3edea9(0xd8d)] = 0xc, this[_0x3edea9(0x1976)] = 0xc8, this['spawnAngle'] = Math['PI'], this[_0x3edea9(0x1935)] = 0x1;
                    } ['OnRecycle']() {
                        const _0x5ee2a2 = _0x305db9;
                        super['OnRecycle'](), this[_0x5ee2a2(0x1976)] = 0.5 * _0xc6069[_0x5ee2a2(0x4c0)], this['left'] = this['x'] - this[_0x5ee2a2(0x1976)], this['right'] = this['x'] + this[_0x5ee2a2(0x1976)], this['top'] = this['y'] - this[_0x5ee2a2(0x1976)], this['bottom'] = this['y'] + this['guardRadius'], this[_0x5ee2a2(0x1ae4)] = !0x1, this[_0x5ee2a2(0x163f)] = new Array(), _0xc6069[_0x5ee2a2(0xd2c)]['Core']['PickupsWithArrows']['contains'](this) || _0xc6069[_0x5ee2a2(0xd2c)][_0x5ee2a2(0x1043)]['PickupsWithArrows']['add'](this);
                    } ['UpdateGuardRadius']() {
                        const _0x3bd92f = _0x305db9;
                        this['left'] = this['x'] - this[_0x3bd92f(0x1976)], this[_0x3bd92f(0x15d9)] = this['x'] + this['guardRadius'], this['top'] = this['y'] - this[_0x3bd92f(0x1976)], this[_0x3bd92f(0x19d3)] = this['y'] + this[_0x3bd92f(0x1976)];
                    } ['SetSpawnType'](_0x5d63a4, _0x1ea56e) {
                        const _0xc65155 = _0x305db9;
                        this['enemyType'] = _0x5d63a4, this[_0xc65155(0xd8d)] = _0x1ea56e;
                    } ['Update'](_0xcef780 = 0x0) {
                        const _0x14c7c1 = _0x305db9;
                        super[_0x14c7c1(0xa9f)](_0xcef780), this['hasSpawned'] || _0xc6069[_0x14c7c1(0xd2c)][_0x14c7c1(0x1043)][_0x14c7c1(0x10f6)]['y'] > this['bottom'] || _0xc6069[_0x14c7c1(0xd2c)][_0x14c7c1(0x1043)]['Player']['y'] < this[_0x14c7c1(0x1283)] || _0xc6069[_0x14c7c1(0xd2c)][_0x14c7c1(0x1043)]['Player']['x'] > this[_0x14c7c1(0x15d9)] || _0xc6069[_0x14c7c1(0xd2c)]['Core'][_0x14c7c1(0x10f6)]['x'] < this[_0x14c7c1(0xf42)] || this['TriggerSpawn']();
                    } ['TriggerSpawn']() {
                        const _0x1595e4 = _0x305db9;
                        if (!this[_0x1595e4(0x1ae4)] && (this['hasSpawned'] = !0x0, this['enemyType'] && this['spawnQuantity'])) {
                            var _0x3b0c1b = _0xc6069[_0x1595e4(0xd2c)]['Core'][_0x1595e4(0x17c7)]['pools'][_0x1595e4(0x1e6)](_0x496eab => _0x496eab[_0x1595e4(0xe49)] === this[_0x1595e4(0xe49)]);
                            _0x3b0c1b || (_0x3b0c1b = new _0x376005[(_0x1595e4(0xd2c))](this[_0x1595e4(0x6d2)], this[_0x1595e4(0xe49)]), _0xc6069[_0x1595e4(0xd2c)][_0x1595e4(0x1043)][_0x1595e4(0x17c7)]['pools']['push'](_0x3b0c1b)), _0x3b0c1b['enabled'] = !0x1;
                            let _0x50ec3a = 0x0;
                            for (let _0x4409dd = 0x0; _0x4409dd < this['spawnQuantity']; _0x4409dd++) {
                                let _0x568b78 = this['x'] + 0x30 * Math['cos'](_0x50ec3a) * 0x3,
                                    _0x9c9f74 = this['y'] + 0x30 * Math['sin'](_0x50ec3a) * 0x3;
                                _0x50ec3a += this[_0x1595e4(0x3cf)] / (this['spawnQuantity'] - 0x1);
                                let _0xaa74df = _0x3b0c1b['SpawnAt'](_0x568b78, _0x9c9f74, this);
                                _0xaa74df[_0x1595e4(0x177d)] = !0x1, this['guards']['push'](_0xaa74df);
                            }
                        }
                    }
                }
                _0x2a655e['PickupGuarded'] = _0x8fd121, _0x2a655e['default'] = _0x8fd121;
            };
