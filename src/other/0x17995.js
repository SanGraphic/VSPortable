// Module 0x17995
// Args: _0x2184af, _0x5ee586, _0x19319b

export default (_0x2184af, _0x5ee586, _0x19319b) => {
                'use strict';
                const _0x2ce506 = a0_0x6932;
                var _0x5c69fd = this && this['__importDefault'] || function(_0x182ab1) {
                    const _0x58d588 = a0_0x6932;
                    return _0x182ab1 && _0x182ab1['__esModule'] ? _0x182ab1 : {
                        'default': _0x182ab1
                    };
                };
                Object['defineProperty'](_0x5ee586, '__esModule', {
                    'value': !0x0
                });
                const _0x3ecffe = _0x5c69fd(_0x19319b(0x15dd)),
                    _0x20d9e7 = _0x5c69fd(_0x19319b(0x5f07)),
                    _0x1c5b1d = _0x5c69fd(_0x19319b(0x869f));
                class _0x1b0236 extends _0x1c5b1d['default'] {
                    ['MakeLevelOne']() {
                        const _0x2ebe11 = _0x2ce506;
                        if (super[_0x2ebe11(0xf64)](), _0x20d9e7[_0x2ebe11(0xd2c)][_0x2ebe11(0x1043)][_0x2ebe11(0x9c3)]) {
                            const _0x58056c = _0x3ecffe[_0x2ebe11(0xd2c)][this[_0x2ebe11(0x7fd)]][0x0];
                            let _0x9630fb = _0x58056c;
                            if (_0x58056c['skins']) {
                                let _0x2a1134 = _0x58056c['skins'][_0x2ebe11(0x1e6)](_0x49882e => _0x49882e['id'] === _0x58056c['currentSkinIndex']);
                                _0x2a1134 && (_0x9630fb = _0x2a1134);
                            }
                            if (_0x9630fb[_0x2ebe11(0x3ff)]) {
                                this['setTexture'](_0x9630fb[_0x2ebe11(0xacb)], _0x9630fb[_0x2ebe11(0x4f0)]), this[_0x2ebe11(0x145b)] = !0x0;
                                const _0x323b54 = this[_0x2ebe11(0x183e)][_0x2ebe11(0x1756)](_0x9630fb['textureName'], {
                                    'start': 0x1,
                                    'end': _0x9630fb['walkingFrames'],
                                    'zeroPad': 0x2,
                                    'prefix': 'h' + _0x9630fb[_0x2ebe11(0x4f0)]['replace']('01.png', ''),
                                    'suffix': '.png'
                                });
                                let _0x1e608d = _0x9630fb['walkFrameRate'] ? _0x9630fb[_0x2ebe11(0xc43)] : 0x8;
                                this['anims'][_0x2ebe11(0x393)]('walk'), this['anims']['create']({
                                    'key': 'walk',
                                    'frames': _0x323b54,
                                    'frameRate': _0x1e608d,
                                    'repeat': -0x1
                                }), this[_0x2ebe11(0x183e)][_0x2ebe11(0x902)]('walk'), this[_0x2ebe11(0x183e)]['pause']();
                            }
                        }
                    }
                }
                _0x5ee586['default'] = _0x1b0236;
            };
