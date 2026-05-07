// Module 0x11e6e
// Args: _0x320286, _0x1a736c, _0x31602a

export default (_0x320286, _0x1a736c, _0x31602a) => {
                'use strict';
                const _0x382f03 = a0_0x6932;
                var _0x42d286 = this && this['__importDefault'] || function(_0x7d5f42) {
                    const _0x3a1a7f = a0_0x6932;
                    return _0x7d5f42 && _0x7d5f42['__esModule'] ? _0x7d5f42 : {
                        'default': _0x7d5f42
                    };
                };
                Object['defineProperty'](_0x1a736c, '__esModule', {
                    'value': !0x0
                });
                const _0x27a912 = _0x42d286(_0x31602a(0x5f07)),
                    _0x31c050 = _0x42d286(_0x31602a(0x166d5)),
                    _0x4ed524 = _0x42d286(_0x31602a(0xc42e)),
                    _0x535615 = _0x42d286(_0x31602a(0x5103));
                class _0x459b44 extends _0x31c050['default'] {
                    constructor(_0x3f08ef, _0x279f62, _0x23d00e) {
                        const _0x32833a = _0x382f03;
                        super(_0x3f08ef, _0x279f62, _0x23d00e, _0x4ed524['default']['OROLOGION']), _0x27a912['default']['Core']['scene'][_0x32833a(0x18bd)]['existing'](this), this[_0x32833a(0x8a2)](_0x535615['default'][_0x32833a(0x15db)]);
                        const _0x5307d1 = this['anims'][_0x32833a(0x1756)]('items', {
                            'start': 0x1,
                            'end': 0x3,
                            'zeroPad': 0x0,
                            'prefix': 'PocketWatch',
                            'suffix': '.png'
                        });
                        this[_0x32833a(0x183e)][_0x32833a(0x6a8)]({
                            'key': 'idle',
                            'frames': _0x5307d1,
                            'frameRate': 0xa,
                            'repeat': -0x1
                        });
                    } ['OnRecycle']() {
                        const _0x340a7d = _0x382f03;
                        super[_0x340a7d(0x5ce)](), this['anims'][_0x340a7d(0x902)]('idle');
                    } ['Update']() {
                        const _0x1ca7d1 = _0x382f03;
                        super[_0x1ca7d1(0xa9f)](), this['setDepth'](0x9 + this['y'] - _0x27a912['default'][_0x1ca7d1(0x1043)][_0x1ca7d1(0x10f6)]['y']);
                    } ['GetTaken']() {
                        const _0x102d29 = _0x382f03;
                        this['disableGet'] || (_0x27a912['default']['Core']['TimeStop'](), _0x27a912['default']['Core']['PlayerOptions']['RunPickups'][_0x102d29(0x1564)](this['itemType']), this['SetSeenItem'](this['itemType']), super['GetTaken']());
                    }
                }
                _0x1a736c['default'] = _0x459b44;
            };
