// Module 0xa329
// Args: _0x4c6cf5, _0x23d224, _0x1b464e

export default (_0x4c6cf5, _0x23d224, _0x1b464e) => {
                'use strict';
                const _0x54681f = a0_0x6932;
                var _0x272b57 = this && this['__importDefault'] || function(_0x5503cd) {
                    return _0x5503cd && _0x5503cd['__esModule'] ? _0x5503cd : {
                        'default': _0x5503cd
                    };
                };
                Object['defineProperty'](_0x23d224, '__esModule', {
                    'value': !0x0
                });
                const _0xcf8a8f = _0x272b57(_0x1b464e(0x15abc)),
                    _0x33f20d = _0x272b57(_0x1b464e(0x5f07)),
                    _0x4accc7 = _0x272b57(_0x1b464e(0x1166a));
                class _0x3a2f9d extends _0x4accc7['default'] {
                    constructor(_0x1b7653, _0x20ef4c, _0x3db16c, _0x5e01ae) {
                        const _0x7f4d7f = _0x54681f;
                        super(_0x1b7653, _0x20ef4c, _0x3db16c, _0x5e01ae);
                        let _0x4ec7a0 = _0xcf8a8f[_0x7f4d7f(0xd2c)][_0x5e01ae][0x0][_0x7f4d7f(0xf3a)];
                        if (_0x4ec7a0) {
                            this['alias'] = _0x4ec7a0;
                            const _0x538ccf = Phaser['Math']['RND'][_0x7f4d7f(0x198c)](_0x4ec7a0[_0x7f4d7f(0xe8f)]),
                                _0x4437d9 = this['anims'][_0x7f4d7f(0x1756)](_0x4ec7a0['textureName'], {
                                    'start': 0x0,
                                    'end': _0x4ec7a0['end'],
                                    'zeroPad': 0x0,
                                    'prefix': _0x538ccf['replace']('0.png', ''),
                                    'suffix': '.png'
                                });
                            this[_0x7f4d7f(0x183e)]['create']({
                                'key': 'Alias_die',
                                'frames': _0x4437d9,
                                'frameRate': 0x18,
                                'repeat': 0x0
                            });
                            const _0x2599f2 = this['anims'][_0x7f4d7f(0x1756)](_0x4ec7a0[_0x7f4d7f(0xacb)], {
                                'start': 0x1,
                                'end': _0x4ec7a0[_0x7f4d7f(0x9cb)],
                                'zeroPad': 0x2,
                                'prefix': _0x538ccf['replace']('0.png', '') + 'i',
                                'suffix': '.png'
                            });
                            this['anims'][_0x7f4d7f(0x6a8)]({
                                'key': 'Alias_idle',
                                'frames': _0x2599f2,
                                'frameRate': 0x8,
                                'repeat': -0x1
                            });
                        }
                    } ['setOwner'](_0x3ff002) {
                        const _0x38b548 = _0x54681f;
                        super[_0x38b548(0x462)](_0x3ff002), this['useAlias'] = this['y'] > _0x33f20d[_0x38b548(0xd2c)][_0x38b548(0x1043)]['Player']['y'], this['useAlias'] && this[_0x38b548(0x183e)]['play']('Alias_idle');
                    } ['Die']() {
                        const _0x5bd68f = _0x54681f;
                        super['Die'](), this['useAlias'] && this[_0x5bd68f(0x183e)][_0x5bd68f(0x902)]('Alias_die');
                    } ['Disappear']() {
                        const _0x43cd89 = _0x54681f;
                        super['Disappear'](), this[_0x43cd89(0x1a47)] && this[_0x43cd89(0x183e)]['play']('Alias_die');
                    }
                }
                _0x23d224['default'] = _0x3a2f9d;
            };
