// Module 0x14f9d
// Args: _0x207d82, _0x544c52, _0x2de8c1

export default (_0x207d82, _0x544c52, _0x2de8c1) => {
                'use strict';
                const _0x1198df = a0_0x6932;
                var _0x4e9b2f = this && this['__importDefault'] || function(_0x122c94) {
                    const _0x1a4e98 = _0x1198df;
                    return _0x122c94 && _0x122c94[_0x1a4e98(0x16f1)] ? _0x122c94 : {
                        'default': _0x122c94
                    };
                };
                Object['defineProperty'](_0x544c52, '__esModule', {
                    'value': !0x0
                });
                const _0x4f86d8 = _0x4e9b2f(_0x2de8c1(0x15abc)),
                    _0x23f32c = _0x4e9b2f(_0x2de8c1(0x5f07)),
                    _0x5eb5f4 = _0x4e9b2f(_0x2de8c1(0x1166a));
                class _0x3a8882 extends _0x5eb5f4['default'] {
                    constructor(_0x20ac90, _0x170c6b, _0x36b7bf, _0xedf8f) {
                        const _0x273bd4 = _0x1198df;
                        super(_0x20ac90, _0x170c6b, _0x36b7bf, _0xedf8f);
                        let _0x4f9292 = _0x4f86d8[_0x273bd4(0xd2c)][_0xedf8f][0x0]['alias'];
                        if (_0x4f9292) {
                            this[_0x273bd4(0xf3a)] = _0x4f9292;
                            const _0x1f1c56 = Phaser[_0x273bd4(0x24f)][_0x273bd4(0x82a)]['pick'](_0x4f9292[_0x273bd4(0xe8f)]),
                                _0x2f2947 = this['anims'][_0x273bd4(0x1756)](_0x4f9292[_0x273bd4(0xacb)], {
                                    'start': 0x0,
                                    'end': _0x4f9292['end'],
                                    'zeroPad': 0x0,
                                    'prefix': _0x1f1c56['replace']('0.png', ''),
                                    'suffix': '.png'
                                });
                            this['anims'][_0x273bd4(0x6a8)]({
                                'key': 'Alias_die',
                                'frames': _0x2f2947,
                                'frameRate': 0x18,
                                'repeat': 0x0
                            });
                            const _0x4ebe9e = this['anims']['generateFrameNames'](_0x4f9292[_0x273bd4(0xacb)], {
                                'start': 0x1,
                                'end': _0x4f9292[_0x273bd4(0x9cb)],
                                'zeroPad': 0x2,
                                'prefix': _0x1f1c56['replace']('0.png', '') + 'i',
                                'suffix': '.png'
                            });
                            this[_0x273bd4(0x183e)]['create']({
                                'key': 'Alias_idle',
                                'frames': _0x4ebe9e,
                                'frameRate': 0x8,
                                'repeat': -0x1
                            });
                        }
                    } ['setOwner'](_0x45610a) {
                        const _0x141b9a = _0x1198df;
                        super[_0x141b9a(0x462)](_0x45610a), this[_0x141b9a(0x1a47)] = this['x'] > _0x23f32c[_0x141b9a(0xd2c)][_0x141b9a(0x1043)]['Player']['x'], this[_0x141b9a(0x1a47)] && this['anims']['play']('Alias_idle');
                    } ['Die']() {
                        const _0x32335e = _0x1198df;
                        super[_0x32335e(0x14f3)](), this['useAlias'] && this[_0x32335e(0x183e)][_0x32335e(0x902)]('Alias_die');
                    } ['Disappear']() {
                        const _0x3db9c4 = _0x1198df;
                        super[_0x3db9c4(0xe00)](), this[_0x3db9c4(0x1a47)] && this['anims']['play']('Alias_die');
                    }
                }
                _0x544c52['default'] = _0x3a8882;
            };
