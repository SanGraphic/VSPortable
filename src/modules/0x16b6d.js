// Module 0x16b6d
// Args: _0x3f91ca, _0x15ac4c, _0x3a0899

export default (_0x3f91ca, _0x15ac4c, _0x3a0899) => {
                'use strict';
                const _0x123cfd = a0_0x6932;
                var _0x6fc84f = this && this['__importDefault'] || function(_0x589ba4) {
                    return _0x589ba4 && _0x589ba4['__esModule'] ? _0x589ba4 : {
                        'default': _0x589ba4
                    };
                };
                Object['defineProperty'](_0x15ac4c, '__esModule', {
                    'value': !0x0
                });
                const _0x433d04 = _0x6fc84f(_0x3a0899(0x15dd)),
                    _0x5c2b16 = _0x6fc84f(_0x3a0899(0xc42e)),
                    _0x484fc1 = _0x6fc84f(_0x3a0899(0x54e3)),
                    _0xc6f229 = _0x6fc84f(_0x3a0899(0x5f07)),
                    _0x30ccda = _0x6fc84f(_0x3a0899(0x869f));
                class _0x40987a extends _0x30ccda['default'] {
                    ['MakeLevelOne']() {
                        const _0x5bdf45 = _0x123cfd;
                        super[_0x5bdf45(0xf64)](), this['meleeAnim'] = _0x433d04[_0x5bdf45(0xd2c)][this['characterType']][0x0][_0x5bdf45(0xb88)]['meleeAttack'];
                        const _0xe37c9 = this[_0x5bdf45(0x183e)][_0x5bdf45(0x1756)](this[_0x5bdf45(0x1d5)][_0x5bdf45(0xacb)], {
                            'start': 0x1,
                            'end': this['meleeAnim'][_0x5bdf45(0x11b8)],
                            'zeroPad': 0x2,
                            'prefix': this[_0x5bdf45(0x1d5)][_0x5bdf45(0x4f0)]['replace']('01.png', ''),
                            'suffix': '.png'
                        });
                        this['anims'][_0x5bdf45(0x6a8)]({
                            'key': 'rangedA',
                            'frames': _0xe37c9,
                            'frameRate': this['meleeAnim']['frameRate']
                        }), this['on'](Phaser[_0x5bdf45(0x1905)]['Events'][_0x5bdf45(0x677)] + 'rangedA', function(_0xef999b, _0x48811b, _0x48fdc8, _0x31a9c8) {
                            const _0x21d158 = _0x5bdf45;
                            this[_0x21d158(0x627)] = !0x1, this[_0x21d158(0x183e)]['play']('walk');
                        });
                    } ['OnRangedAttackAnim']() {
                        const _0x2d11de = _0x123cfd;
                        this['isAnimForced'] = !0x0, this[_0x2d11de(0x183e)][_0x2d11de(0x902)]('rangedA');
                    } ['LevelUp']() {
                        const _0x2db01a = _0x123cfd;
                        if (super[_0x2db01a(0x2ab)](), 0x1e === this[_0x2db01a(0x5e3)]) {
                            let _0x577115 = _0x484fc1['default']['ACADEMYBADGE'],
                                _0x506780 = _0xc6f229[_0x2db01a(0xd2c)]['Core']['Player']['x'],
                                _0x1e6322 = _0xc6f229[_0x2db01a(0xd2c)]['Core'][_0x2db01a(0x10f6)]['y'] + 0.45 * this[_0x2db01a(0x6d2)]['renderer'][_0x2db01a(0x140e)];
                            _0xc6f229['default'][_0x2db01a(0x1043)][_0x2db01a(0x13f8)](_0x506780, _0x1e6322, _0x5c2b16[_0x2db01a(0xd2c)][_0x2db01a(0x17b3)], _0x577115), _0xc6f229[_0x2db01a(0xd2c)][_0x2db01a(0x1043)][_0x2db01a(0x503)][_0x2db01a(0xf96)](_0x506780, _0x1e6322);
                        }
                    }
                }
                _0x15ac4c['default'] = _0x40987a;
            };
