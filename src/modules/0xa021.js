// Module 0xa021
// Args: _0x4c71c4, _0x59e6a1, _0x26b6e0

export default (_0x4c71c4, _0x59e6a1, _0x26b6e0) => {
                'use strict';
                const _0x5ebcf5 = a0_0x6932;
                var _0x53ccce = this && this['__importDefault'] || function(_0x219b99) {
                    return _0x219b99 && _0x219b99['__esModule'] ? _0x219b99 : {
                        'default': _0x219b99
                    };
                };
                Object['defineProperty'](_0x59e6a1, '__esModule', {
                    'value': !0x0
                });
                const _0x440248 = _0x53ccce(_0x26b6e0(0x15abc)),
                    _0x2c7124 = _0x53ccce(_0x26b6e0(0x5f07)),
                    _0x26f6e7 = _0x53ccce(_0x26b6e0(0x1166a));
                class _0x52d9a2 extends _0x26f6e7['default'] {
                    constructor(_0x23c429, _0x216237, _0x136e3f, _0xea6dfe) {
                        const _0xce62cd = _0x5ebcf5;
                        super(_0x23c429, _0x216237, _0x136e3f, _0xea6dfe);
                        let _0x187779 = _0x440248['default'][_0xea6dfe][0x0]['alias'];
                        if (_0x187779) {
                            this[_0xce62cd(0xf3a)] = _0x187779;
                            const _0x5ba336 = Phaser[_0xce62cd(0x24f)]['RND']['pick'](_0x187779[_0xce62cd(0xe8f)]),
                                _0x2b7e9b = this['anims']['generateFrameNames'](_0x187779[_0xce62cd(0xacb)], {
                                    'start': 0x0,
                                    'end': _0x187779['end'],
                                    'zeroPad': 0x0,
                                    'prefix': _0x5ba336['replace']('0.png', ''),
                                    'suffix': '.png'
                                });
                            this[_0xce62cd(0x183e)][_0xce62cd(0x6a8)]({
                                'key': 'Alias_die',
                                'frames': _0x2b7e9b,
                                'frameRate': 0x18,
                                'repeat': 0x0
                            });
                            const _0x12755e = this[_0xce62cd(0x183e)][_0xce62cd(0x1756)](_0x187779[_0xce62cd(0xacb)], {
                                'start': 0x1,
                                'end': _0x187779[_0xce62cd(0x9cb)],
                                'zeroPad': 0x2,
                                'prefix': _0x5ba336['replace']('0.png', '') + 'i',
                                'suffix': '.png'
                            });
                            this['anims'][_0xce62cd(0x6a8)]({
                                'key': 'Alias_idle',
                                'frames': _0x12755e,
                                'frameRate': 0x8,
                                'repeat': -0x1
                            });
                        }
                    } ['OnRecycle']() {
                        const _0x1cb215 = _0x5ebcf5;
                        super['OnRecycle'](), _0x2c7124[_0x1cb215(0xd2c)]['Core']['Stage'][_0x1cb215(0x12ed)] && _0x2c7124[_0x1cb215(0xd2c)][_0x1cb215(0x1043)][_0x1cb215(0x17c7)]['fancyBG']['alias'] && this['anims']['play']('Alias_idle');
                    } ['Die']() {
                        const _0x50781e = _0x5ebcf5;
                        super[_0x50781e(0x14f3)](), _0x2c7124[_0x50781e(0xd2c)]['Core']['Stage']['fancyBG'] && _0x2c7124[_0x50781e(0xd2c)]['Core']['Stage']['fancyBG']['alias'] && this[_0x50781e(0x183e)][_0x50781e(0x902)]('Alias_die');
                    } ['Disappear']() {
                        const _0x2f2f83 = _0x5ebcf5;
                        super['Disappear'](), _0x2c7124[_0x2f2f83(0xd2c)][_0x2f2f83(0x1043)][_0x2f2f83(0x17c7)][_0x2f2f83(0x12ed)] && _0x2c7124[_0x2f2f83(0xd2c)]['Core'][_0x2f2f83(0x17c7)][_0x2f2f83(0x12ed)][_0x2f2f83(0xf3a)] && this['anims']['play']('Alias_die');
                    } ['DeSpawn']() {
                        const _0x1b6496 = _0x5ebcf5;
                        super[_0x1b6496(0x14fb)]();
                    } ['Update'](_0x239fb6) {
                        const _0x591beb = _0x5ebcf5;
                        super[_0x591beb(0xa9f)](_0x239fb6);
                    }
                }
                _0x59e6a1['default'] = _0x52d9a2;
            };
