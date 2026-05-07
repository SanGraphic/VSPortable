// Module 0x2470
// Args: _0x2c656b, _0x3d5b57, _0x48a2ca

export default (_0x2c656b, _0x3d5b57, _0x48a2ca) => {
                'use strict';
                const _0x5bd197 = a0_0x6932;
                var _0x20695c = this && this['__importDefault'] || function(_0x165bec) {
                    const _0x4ec40c = a0_0x6932;
                    return _0x165bec && _0x165bec['__esModule'] ? _0x165bec : {
                        'default': _0x165bec
                    };
                };
                Object['defineProperty'](_0x3d5b57, '__esModule', {
                    'value': !0x0
                });
                const _0x5411f2 = _0x20695c(_0x48a2ca(0x15dd)),
                    _0x35c9b1 = _0x20695c(_0x48a2ca(0xc42e)),
                    _0x12d194 = _0x20695c(_0x48a2ca(0x54e3)),
                    _0x47aff4 = _0x20695c(_0x48a2ca(0x5f07)),
                    _0x3e7673 = _0x20695c(_0x48a2ca(0x869f));
                class _0x393481 extends _0x3e7673['default'] {
                    constructor() {
                        const _0x76e770 = _0x5bd197;
                        super(...arguments), this[_0x76e770(0x13ad)] = 0x0, this['armorDelay'] = 0x2710, this[_0x76e770(0x1771)] = 0x0;
                    }
                    get['PArmor']() {
                        const _0xa401a8 = _0x5bd197;
                        return Math[_0xa401a8(0x1084)](0x32, _0x47aff4[_0xa401a8(0xd2c)][_0xa401a8(0x1043)][_0xa401a8(0x10f6)][_0xa401a8(0x8d0)] + this[_0xa401a8(0x13ad)]);
                    } ['MakeLevelOne']() {
                        const _0x6a21aa = _0x5bd197;
                        super['MakeLevelOne'](), this['armorBonus'] = 0x0, this[_0x6a21aa(0x1771)] = 0x0, this['meleeAnim'] = _0x5411f2['default'][this[_0x6a21aa(0x7fd)]][0x0][_0x6a21aa(0xb88)][_0x6a21aa(0x137d)];
                        const _0x4644f6 = this[_0x6a21aa(0x183e)]['generateFrameNames'](this[_0x6a21aa(0x1d5)][_0x6a21aa(0xacb)], {
                            'start': 0x1,
                            'end': this[_0x6a21aa(0x1d5)]['framesNumber'],
                            'zeroPad': 0x2,
                            'prefix': this[_0x6a21aa(0x1d5)]['spriteName']['replace']('01.png', ''),
                            'suffix': '.png'
                        });
                        this[_0x6a21aa(0x183e)][_0x6a21aa(0x6a8)]({
                            'key': 'meleeA',
                            'frames': _0x4644f6,
                            'frameRate': this['meleeAnim'][_0x6a21aa(0x106d)]
                        }), Phaser[_0x6a21aa(0x1905)][_0x6a21aa(0xd60)]['ANIMATION_COMPLETE_KEY'], this['on'](Phaser['Animations'][_0x6a21aa(0xd60)][_0x6a21aa(0x677)] + 'meleeA', function(_0x14480d, _0x2ac502, _0x1c31af, _0x302dc8) {
                            const _0x331c94 = _0x6a21aa;
                            this[_0x331c94(0x627)] = !0x1, this[_0x331c94(0x11e1)] = !0x0, this['anims']['play']('walk');
                        });
                    } ['OnMeleeAttackAnim']() {
                        const _0x514456 = _0x5bd197;
                        this[_0x514456(0x627)] = !0x0, this[_0x514456(0x11e1)] = !0x1, this[_0x514456(0x183e)][_0x514456(0x902)]('meleeA');
                    } ['OnGetDamaged'](_0x1a1802 = 0xff0000, _0x88eb8e = 0x78, _0x143373 = !0x0) {
                        this['receivingDamage'] || (super['OnGetDamaged'](_0x1a1802, _0x88eb8e, _0x143373), this['AddArmor']());
                    } ['AddArmor']() {
                        const _0x44c4c0 = _0x5bd197;
                        this['armorBonus'] += 0x1, this[_0x44c4c0(0x1771)] = Math['max'](0x0, this['armorTime'] - 0x3e8);
                    } ['Update'](_0xfb62eb = 0x0) {
                        const _0x48e91e = _0x5bd197;
                        super[_0x48e91e(0xa9f)](_0xfb62eb), this[_0x48e91e(0x1771)] += _0xfb62eb, this['armorTime'] >= this['armorDelay'] && (this[_0x48e91e(0x13ad)] = 0x0, this[_0x48e91e(0x1771)] = 0x0);
                    } ['LevelUp']() {
                        const _0x5bc5c1 = _0x5bd197;
                        if (super[_0x5bc5c1(0x2ab)](), 0x1e === this['level']) {
                            let _0x3271fb = _0x12d194[_0x5bc5c1(0xd2c)]['ACADEMYBADGE'],
                                _0x411cc8 = _0x47aff4[_0x5bc5c1(0xd2c)][_0x5bc5c1(0x1043)]['Player']['x'],
                                _0x9ffcfd = _0x47aff4['default'][_0x5bc5c1(0x1043)]['Player']['y'] + 0.45 * this[_0x5bc5c1(0x6d2)]['renderer'][_0x5bc5c1(0x140e)];
                            _0x47aff4['default'][_0x5bc5c1(0x1043)]['MakeStagePickup'](_0x411cc8, _0x9ffcfd, _0x35c9b1[_0x5bc5c1(0xd2c)][_0x5bc5c1(0x17b3)], _0x3271fb), _0x47aff4[_0x5bc5c1(0xd2c)][_0x5bc5c1(0x1043)][_0x5bc5c1(0x503)][_0x5bc5c1(0xf96)](_0x411cc8, _0x9ffcfd);
                        }
                    }
                }
                _0x3d5b57['default'] = _0x393481;
            };
