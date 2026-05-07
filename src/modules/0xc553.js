// Module 0xc553
// Args: _0x2afe73, _0x57cece, _0x5a9c4c

export default (_0x2afe73, _0x57cece, _0x5a9c4c) => {
                'use strict';
                const _0x5c9767 = a0_0x6932;
                var _0x39cb86 = this && this['__importDefault'] || function(_0x495143) {
                    return _0x495143 && _0x495143['__esModule'] ? _0x495143 : {
                        'default': _0x495143
                    };
                };
                Object['defineProperty'](_0x57cece, '__esModule', {
                    'value': !0x0
                }), _0x57cece['W_Spellstrike'] = void 0x0;
                const _0x5775e7 = _0x39cb86(_0x5a9c4c(0xe49a)),
                    _0x81dfa9 = _0x39cb86(_0x5a9c4c(0x5f07));
                class _0x226eb9 extends _0x5775e7['default'] {
                    constructor(_0x2e52c2) {
                        const _0x3a97dd = _0x5c9767;
                        super(_0x2e52c2), this[_0x3a97dd(0xa6b)] = 0x0;
                    }
                    get['PPower']() {
                        const _0x207f82 = _0x5c9767;
                        let _0x3183c8 = this['power'] * (1.25 * _0x81dfa9[_0x207f82(0xd2c)]['Core'][_0x207f82(0x10f6)][_0x207f82(0x31f)]);
                        return _0x81dfa9['default'][_0x207f82(0x1043)]['Player']['sineMight'] ? Math['min'](0xa, (_0x81dfa9[_0x207f82(0xd2c)][_0x207f82(0x1043)]['Arcanas'][_0x207f82(0x18f8)] + _0x81dfa9[_0x207f82(0xd2c)]['Core'][_0x207f82(0x10f6)][_0x207f82(0x31f)]) * _0x81dfa9[_0x207f82(0xd2c)][_0x207f82(0x1043)][_0x207f82(0x10f6)]['sineMight']['value']) * _0x3183c8 + _0x81dfa9[_0x207f82(0xd2c)]['Core']['Arcanas'][_0x207f82(0x1117)] : Math[_0x207f82(0x1084)](0xa, _0x81dfa9['default'][_0x207f82(0x1043)][_0x207f82(0x1884)]['silentMight'] + _0x81dfa9[_0x207f82(0xd2c)][_0x207f82(0x1043)][_0x207f82(0x10f6)][_0x207f82(0x31f)]) * _0x3183c8 + _0x81dfa9[_0x207f82(0xd2c)]['Core'][_0x207f82(0x1884)][_0x207f82(0x1117)];
                    } ['Fire']() {
                        const _0xa4d80d = _0x5c9767;
                        let _0x251f35 = this[_0xa4d80d(0xef0)](_0x81dfa9[_0xa4d80d(0xd2c)][_0xa4d80d(0x1043)]['Player'], _0x81dfa9['default'][_0xa4d80d(0x1043)][_0xa4d80d(0x1a91)]);
                        if (_0x251f35 && (this[_0xa4d80d(0x18a7)] = _0x251f35, this['FireOneBullet'](this['target']['x'], this[_0xa4d80d(0x18a7)]['y'], 0x0, this[_0xa4d80d(0x18a7)]), this[_0xa4d80d(0xa6f)](this[_0xa4d80d(0x18a7)])), this[_0xa4d80d(0x942)] > 0x1) {
                            for (let _0x43bb99 = 0x1; _0x43bb99 < this[_0xa4d80d(0x942)]; _0x43bb99++) this[_0xa4d80d(0x7ea)] * _0x43bb99 > 0x0 ? this['lastShotTimer'] = _0x81dfa9['default']['Core'][_0xa4d80d(0x6d2)][_0xa4d80d(0x915)][_0xa4d80d(0x12b8)]({
                                'delay': this[_0xa4d80d(0x7ea)] * _0x43bb99,
                                'loop': !0x1,
                                'callback': () => {
                                    const _0x573c44 = _0xa4d80d;
                                    let _0x5c1491 = this[_0x573c44(0xef0)](_0x81dfa9['default'][_0x573c44(0x1043)]['Player'], _0x81dfa9[_0x573c44(0xd2c)]['Core']['Enemies']);
                                    _0x5c1491 && (this['target'] = _0x5c1491, this['FireOneBullet'](this['target']['x'], this[_0x573c44(0x18a7)]['y'], 0x0, this[_0x573c44(0x18a7)]), this[_0x573c44(0xa6f)](this[_0x573c44(0x18a7)]));
                                }
                            }) : (this[_0xa4d80d(0x970)](this['target']['x'], this[_0xa4d80d(0x18a7)]['y'], _0x43bb99, this[_0xa4d80d(0x18a7)]), this['DirectDamage'](this['target']));
                        }
                        this[_0xa4d80d(0x162d)] != this['PInterval'] && (this['lastFiringInterval'] = this[_0xa4d80d(0x170c)], this[_0xa4d80d(0x839)]());
                    }
                }
                _0x57cece['W_Spellstrike'] = _0x226eb9, _0x57cece['default'] = _0x226eb9;
            };
