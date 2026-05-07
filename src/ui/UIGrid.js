// Module 0xf6b5
// Args: _0x5b53a9, _0x5091f1

export default (_0x5b53a9, _0x5091f1) => {
                'use strict';
                const _0x375da5 = a0_0x6932;
                Object['defineProperty'](_0x5091f1, '__esModule', {
                    'value': !0x0
                }), _0x5091f1['UIGrid'] = void 0x0;
                class _0x5dd233 {
                    constructor(_0x37b255, _0x5eb55e) {
                        const _0x2ca4a6 = _0x375da5;
                        this[_0x2ca4a6(0x1059)] = !0x1, this['go'] = null, this['go'] = _0x37b255, this[_0x2ca4a6(0x1059)] = _0x5eb55e;
                    }
                }
                class _0x4ca360 {
                    constructor() {
                        const _0x5972d1 = _0x375da5;
                        this[_0x5972d1(0x117f)] = new _0x5dd233(null, !0x1), this[_0x5972d1(0x619)] = new Phaser[(_0x5972d1(0x24f))][(_0x5972d1(0x1551))](0x0, 0x0), this[_0x5972d1(0x1016)] = !0x0, this['currentGameObject'] = null, this['previousGameObject'] = null, this[_0x5972d1(0x1ae1)] = null, this[_0x5972d1(0x30f)] = null;
                    } ['Init'](_0x55a607, _0x270b34) {
                        const _0x222b3b = _0x375da5;
                        this[_0x222b3b(0x1094)] = new Array(), this[_0x222b3b(0x173c)] = _0x55a607, this[_0x222b3b(0x140e)] = _0x270b34;
                        for (let _0x580386 = 0x0; _0x580386 < this[_0x222b3b(0x173c)] * this['height']; _0x580386++) this[_0x222b3b(0x1094)]['push'](new _0x5dd233(null, !0x1));
                    } ['Deselect']() {
                        const _0x5f1ee0 = _0x375da5;
                        this['previousGameObject'] = this[_0x5f1ee0(0x17f2)], this['currentGameObject'] = null;
                    } ['SelectGameObject'](_0x4a61a9) {
                        const _0x2832f9 = _0x375da5;
                        this['previousGameObject'] = this['currentGameObject'];
                        var _0x486960 = this['grid']['find'](_0x2bbcde => null != _0x2bbcde && _0x2bbcde['go'] == _0x4a61a9 && !_0x2bbcde['isLink']);
                        for (let _0x3baeba = 0x0; _0x3baeba < this[_0x2832f9(0x1094)][_0x2832f9(0xed9)]; _0x3baeba++) {
                            const _0x1646fd = this[_0x2832f9(0x1094)][_0x3baeba];
                            _0x1646fd['go'] != _0x4a61a9 || _0x1646fd['isLink'] || (_0x486960 = _0x1646fd);
                        }
                        var _0x178297 = this['grid']['indexOf'](_0x486960);
                        if (!(_0x178297 < 0x0)) return this[_0x2832f9(0x619)]['x'] = _0x178297 % this[_0x2832f9(0x173c)], this[_0x2832f9(0x619)]['y'] = Math['floor'](_0x178297 / this[_0x2832f9(0x173c)]), this[_0x2832f9(0x17f2)] = _0x486960['go'], this[_0x2832f9(0x17f2)];
                        console['error']('GameObject not found in UI grid');
                    } ['SelectAt'](_0xec2688, _0x1f96fb) {
                        const _0x116742 = _0x375da5;
                        if (!(_0xec2688 + _0x1f96fb * this['width'] >= this['grid'][_0x116742(0xed9)])) return this['currentPosition']['x'] = _0xec2688, this['currentPosition']['y'] = _0x1f96fb, this[_0x116742(0x23f)]();
                        console['error']('Invalid\x20UI\x20slot:\x20' + _0xec2688 + ',' + _0x1f96fb / this[_0x116742(0x173c)]);
                    } ['SetContents'](_0x4731af, _0x1da8fc, _0xdf8ae6, _0x5c6435 = !0x1) {
                        const _0x2f2ebc = _0x375da5;
                        _0x4731af + (_0x1da8fc *= this[_0x2f2ebc(0x173c)]) >= this['grid']['length'] ? console['error']('Invalid\x20UI\x20slot:\x20' + _0x4731af + ',' + _0x1da8fc / this['width']) : this['grid'][_0x4731af + _0x1da8fc] = new _0x5dd233(_0xdf8ae6, _0x5c6435);
                    } ['GetCurrent']() {
                        const _0x1955cf = _0x375da5;
                        var _0x4058e1;
                        this['previousGameObject'] = this['currentGameObject'];
                        var _0x451bfe = this[_0x1955cf(0x619)]['x'],
                            _0xa597ab = this['currentPosition']['y'] * this['width'],
                            _0x3b5594 = this[_0x1955cf(0x1094)][_0x451bfe + _0xa597ab];
                        if (null != _0x3b5594 && _0x3b5594['isLink']) {
                            _0x3b5594 = this[_0x1955cf(0x1094)]['find'](_0xffca3e => _0xffca3e['go'] == _0x3b5594['go'] && !_0xffca3e['isLink']);
                            var _0x378401 = this[_0x1955cf(0x1094)][_0x1955cf(0x1303)](_0x3b5594);
                            _0x451bfe = _0x378401 % this[_0x1955cf(0x173c)], _0xa597ab = Math[_0x1955cf(0xe07)](_0x378401 / this['height']), this['currentPosition']['x'] = _0x451bfe, this[_0x1955cf(0x619)]['y'] = _0xa597ab;
                        }
                        let _0x1886ed = null === (_0x4058e1 = this['grid'][_0x451bfe + _0xa597ab]) || void 0x0 === _0x4058e1 ? void 0x0 : _0x4058e1['go'];
                        return this[_0x1955cf(0x17f2)] = _0x1886ed || this['currentGameObject'], _0x1886ed;
                    } ['GoLeft']() {
                        const _0x1901a3 = _0x375da5;
                        this[_0x1901a3(0x1ae1)] && this['onLeft'](this['GetCurrent']());
                        var _0x9745b2 = this[_0x1901a3(0x619)]['x'];
                        return this['currentPosition']['x'] -= 0x1, this['currentPosition']['x'] < 0x0 && (this['currentPosition']['x'] = this[_0x1901a3(0x1016)] ? this['width'] - 0x1 : 0x0), this[_0x1901a3(0x23f)]() || (this[_0x1901a3(0x619)]['x'] = _0x9745b2, this[_0x1901a3(0x17f2)]);
                    } ['GoRight']() {
                        const _0x254ab9 = _0x375da5;
                        this[_0x254ab9(0x30f)] && this[_0x254ab9(0x30f)](this[_0x254ab9(0x23f)]());
                        var _0xa228d7 = this[_0x254ab9(0x619)]['x'];
                        return this['currentPosition']['x'] += 0x1, this['currentPosition']['x'] > this[_0x254ab9(0x173c)] - 0x1 && (this[_0x254ab9(0x619)]['x'] = this['wrap'] ? 0x0 : this['width'] - 0x1), this[_0x254ab9(0x23f)]() || (this[_0x254ab9(0x619)]['x'] = _0xa228d7, this[_0x254ab9(0x17f2)]);
                    } ['GoUp']() {
                        const _0x155612 = _0x375da5;
                        var _0x4f9b06 = this[_0x155612(0x619)]['y'];
                        return this[_0x155612(0x619)]['y'] -= 0x1, this[_0x155612(0x619)]['y'] < 0x0 && (this['currentPosition']['y'] = this[_0x155612(0x1016)] ? this[_0x155612(0x140e)] - 0x1 : 0x0), this[_0x155612(0x23f)]() || (this[_0x155612(0x619)]['y'] = _0x4f9b06, this['currentGameObject']);
                    } ['GoDown']() {
                        const _0x827b52 = _0x375da5;
                        var _0x1cd3c6 = this[_0x827b52(0x619)]['y'];
                        return this[_0x827b52(0x619)]['y'] += 0x1, this['currentPosition']['y'] > this[_0x827b52(0x140e)] - 0x1 && (this['currentPosition']['y'] = this[_0x827b52(0x1016)] ? 0x0 : this['height'] - 0x1), this['GetCurrent']() || (this[_0x827b52(0x619)]['y'] = _0x1cd3c6, this['currentGameObject']);
                    }
                }
                _0x5091f1['UIGrid'] = _0x4ca360, _0x5091f1['default'] = _0x4ca360;
            };
