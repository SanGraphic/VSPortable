// Module 0x12c8a
// Args: _0x494fa5, _0x35b2a5, _0x3187cf

export default (_0x494fa5, _0x35b2a5, _0x3187cf) => {
                'use strict';
                const _0x2d2c34 = a0_0x6932;
                var _0x3b4190 = this && this['__importDefault'] || function(_0x1628f0) {
                    const _0x5bfcf0 = a0_0x6932;
                    return _0x1628f0 && _0x1628f0['__esModule'] ? _0x1628f0 : {
                        'default': _0x1628f0
                    };
                };
                Object['defineProperty'](_0x35b2a5, '__esModule', {
                    'value': !0x0
                });
                const _0x2eea6e = _0x3b4190(_0x3187cf(0x5f07));
                class _0x592f6b extends Phaser['Geom']['Rectangle'] {
                    constructor(_0x18d971 = 0x1, _0x52feac = 0x1, _0x424871 = 0x0, _0x57aecf = 0x0) {
                        const _0x27ceec = _0x2d2c34;
                        super(0x0, 0x0, 0x0, 0x0), this['index'] = 0x1, this[_0x27ceec(0x173c)] = _0x424871 > 0x0 ? _0x424871 : _0x2eea6e['default'][_0x27ceec(0x1043)][_0x27ceec(0x6d2)][_0x27ceec(0x12f9)][_0x27ceec(0x173c)] * _0x18d971, this[_0x27ceec(0x140e)] = _0x57aecf > 0x0 ? _0x57aecf : _0x2eea6e[_0x27ceec(0xd2c)]['Core']['scene'][_0x27ceec(0x12f9)][_0x27ceec(0x140e)] * _0x52feac, this[_0x27ceec(0x813)] = 0.5 * this[_0x27ceec(0x173c)], this[_0x27ceec(0xc98)] = 0.5 * this[_0x27ceec(0x140e)];
                    } ['CheckAllAndDespawnIfOutside'](_0x396a51) {
                        const _0x4d21dd = _0x2d2c34;
                        this['x'] = _0x2eea6e['default']['Core'][_0x4d21dd(0x10f6)]['x'] - this[_0x4d21dd(0x813)], this['y'] = _0x2eea6e['default'][_0x4d21dd(0x1043)]['Player']['y'] - this[_0x4d21dd(0xc98)];
                        for (let _0x462029 = 0x0; _0x462029 < _0x396a51[_0x4d21dd(0xed9)]; _0x462029++) {
                            const _0x29862c = _0x396a51[_0x462029];
                            (_0x29862c[_0x4d21dd(0x177d)] || _0x29862c[_0x4d21dd(0x187a)]) && (this['contains'](_0x29862c['x'], _0x29862c['y']) || (_0x29862c[_0x4d21dd(0x187a)] && _0x29862c['OnTeleportOnCull'](), _0x29862c[_0x4d21dd(0x14fb)]()));
                        }
                    } ['AdjustPosition']() {
                        const _0x1fe385 = _0x2d2c34;
                        this['x'] = _0x2eea6e[_0x1fe385(0xd2c)][_0x1fe385(0x1043)][_0x1fe385(0x10f6)]['x'] - this[_0x1fe385(0x813)], this['y'] = _0x2eea6e[_0x1fe385(0xd2c)]['Core'][_0x1fe385(0x10f6)]['y'] - this['halfHeight'];
                    } ['DespawnIfOutside'](_0x5643be) {
                        const _0x5a5767 = _0x2d2c34,
                            _0x50ad5e = _0x5643be[this[_0x5a5767(0xe24)] % _0x5643be['length']];
                        if (this[_0x5a5767(0xe24)]++, !_0x50ad5e) return !0x1;
                        if (!_0x50ad5e[_0x5a5767(0x177d)] && !_0x50ad5e[_0x5a5767(0x187a)]) return !0x1;
                        if (!this['contains'](_0x50ad5e['x'], _0x50ad5e['y'])) {
                            if (_0x50ad5e[_0x5a5767(0x187a)]) return _0x50ad5e[_0x5a5767(0xce0)](), !0x1;
                            _0x50ad5e[_0x5a5767(0x14fb)]();
                        }
                        return !0x0;
                    } ['Contains'](_0x17d3fc) {
                        const _0x5b63e8 = _0x2d2c34;
                        return this['x'] = _0x2eea6e[_0x5b63e8(0xd2c)][_0x5b63e8(0x1043)]['Player']['x'] - this['halfWidth'], this['y'] = _0x2eea6e[_0x5b63e8(0xd2c)]['Core'][_0x5b63e8(0x10f6)]['y'] - this[_0x5b63e8(0xc98)], this[_0x5b63e8(0x1780)](_0x17d3fc['x'], _0x17d3fc['y']);
                    }
                }
                _0x35b2a5['default'] = _0x592f6b;
            };
