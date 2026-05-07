// Module 0x118dd
// Args: _0x42189f, _0x5c9fc9

export default (_0x42189f, _0x5c9fc9) => {
                'use strict';
                const _0x5f4941 = a0_0x6932;
                Object['defineProperty'](_0x5c9fc9, '__esModule', {
                    'value': !0x0
                }), _0x5c9fc9['CustomKeyCombo'] = void 0x0;
                class _0x2bf23d extends Phaser['Input']['Keyboard']['KeyCombo'] {
                    ['CustomOnKeyDownHandler'](_0x2c961c) {
                        const _0x143064 = _0x5f4941;
                        !this['matched'] && this[_0x143064(0x151c)] && this[_0x143064(0x2e0)](_0x2c961c, this) && (this['manager'][_0x143064(0x700)](Phaser[_0x143064(0xd70)][_0x143064(0xa19)]['Events'][_0x143064(0xf80)], this, _0x2c961c), this['resetOnMatch'] ? Phaser[_0x143064(0xd70)][_0x143064(0xa19)]['ResetKeyCombo'](this) : this[_0x143064(0x38e)] && this['destroy']());
                    } ['CustomProcessKeyCombo'](_0x55b1e9, _0x2a2171) {
                        const _0x5d22d9 = _0x5f4941;
                        if (_0x2a2171['matched']) return !0x0;
                        var _0x1def92 = !0x1,
                            _0xeab058 = !0x1;
                        if ('Enter' == _0x55b1e9['key'] || 'ArrowLeft' == _0x55b1e9['key'] || 'ArrowRight' == _0x55b1e9[_0x5d22d9(0x1381)] || 'ArrowUp' == _0x55b1e9[_0x5d22d9(0x1381)] || 'ArrowDown' == _0x55b1e9['key']) return !0x1;
                        if (_0x55b1e9[_0x5d22d9(0x195f)] === _0x2a2171[_0x5d22d9(0x702)]) {
                            if (_0x2a2171['index'] > 0x0 && _0x2a2171['maxKeyDelay'] > 0x0) {
                                var _0xcd4217 = _0x2a2171[_0x5d22d9(0x859)] + _0x2a2171[_0x5d22d9(0x1735)];
                                _0x55b1e9['timeStamp'] <= _0xcd4217 && (_0xeab058 = !0x0, _0x1def92 = Phaser['Input'][_0x5d22d9(0xa19)]['AdvanceKeyCombo'](_0x55b1e9, _0x2a2171));
                            } else _0xeab058 = !0x0, _0x1def92 = Phaser[_0x5d22d9(0xd70)]['Keyboard']['AdvanceKeyCombo'](_0x55b1e9, _0x2a2171);
                        }
                        return !_0xeab058 && _0x2a2171['resetOnWrongKey'] && (_0x2a2171[_0x5d22d9(0xe24)] = 0x0, _0x2a2171[_0x5d22d9(0x702)] = _0x2a2171[_0x5d22d9(0x674)][0x0]), _0x1def92 && (_0x2a2171['timeLastMatched'] = _0x55b1e9[_0x5d22d9(0x1677)], _0x2a2171['matched'] = !0x0, _0x2a2171[_0x5d22d9(0x16d9)] = _0x55b1e9['timeStamp']), _0x1def92;
                    }
                }
                _0x5c9fc9['CustomKeyCombo'] = _0x2bf23d, _0x5c9fc9['default'] = _0x2bf23d;
            };
