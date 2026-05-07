// Module 0xda22
// Args: _0x21acd4, _0xc12e25, _0x7da00c

export default (_0x21acd4, _0xc12e25, _0x7da00c) => {
                'use strict';
                const _0x405cf1 = a0_0x6932;
                var _0xdbf90d = this && this['__importDefault'] || function(_0x251450) {
                    return _0x251450 && _0x251450['__esModule'] ? _0x251450 : {
                        'default': _0x251450
                    };
                };
                Object['defineProperty'](_0xc12e25, '__esModule', {
                    'value': !0x0
                }), _0xc12e25['TreasureReel'] = _0xc12e25['ReelConfig'] = void 0x0;
                const _0x57aeb2 = _0x7da00c(0x18304),
                    _0x1ed85a = _0xdbf90d(_0x7da00c(0x2248)),
                    _0x5895a0 = _0xdbf90d(_0x7da00c(0x10f8b));
                _0xc12e25['ReelConfig'] = class {
                    constructor() {
                        const _0x2340ad = _0x405cf1;
                        this[_0x2340ad(0x7cd)] = 0xff, this['prizeType'] = _0x1ed85a['default'][_0x2340ad(0x155f)], this['alpha'] = 0.5, this[_0x2340ad(0xacb)] = 'texPowerUps';
                    }
                };
                class _0x367074 {
                    constructor(_0x43df93, _0x16a11b, _0x135700, _0x506695, _0x4f79b4) {
                        const _0x596545 = _0x405cf1;
                        this[_0x596545(0x1aa2)] = new Phaser[(_0x596545(0x24f))][(_0x596545(0x1551))](0x0, 0x0), this['end'] = new Phaser[(_0x596545(0x24f))][(_0x596545(0x1551))](0x0, 0x0), this['scene'] = _0x43df93, this['reelConfig'] = _0x16a11b, this[_0x596545(0x1aa2)] = _0x135700, this['end'] = _0x506695, this['mask'] = _0x4f79b4, _0x16a11b[_0x596545(0x1035)] === _0x1ed85a['default'][_0x596545(0x155f)] ? _0x5895a0['default'][_0x596545(0x11b6)](_0x43df93, _0x16a11b['textureName'], _0x16a11b[_0x596545(0x7cd)], _0x16a11b[_0x596545(0xe71)]) : _0x16a11b[_0x596545(0x1035)] === _0x1ed85a[_0x596545(0xd2c)][_0x596545(0xc7c)] || _0x16a11b[_0x596545(0x1035)] === _0x1ed85a['default']['EXISTING_ANY'] ? _0x5895a0[_0x596545(0xd2c)][_0x596545(0x10dc)](_0x43df93, _0x16a11b[_0x596545(0xacb)], _0x16a11b[_0x596545(0x7cd)], _0x16a11b[_0x596545(0xe71)]) : _0x16a11b[_0x596545(0x1035)] === _0x1ed85a[_0x596545(0xd2c)][_0x596545(0x923)] || _0x16a11b[_0x596545(0x1035)] === _0x1ed85a[_0x596545(0xd2c)][_0x596545(0x18fa)] ? _0x5895a0[_0x596545(0xd2c)][_0x596545(0x1873)](_0x43df93, _0x16a11b[_0x596545(0xacb)], _0x16a11b['color'], _0x16a11b['alpha']) : _0x5895a0['default']['MakeTexture_ExistingWeapons'](_0x43df93, _0x16a11b[_0x596545(0xacb)], _0x16a11b[_0x596545(0x7cd)], _0x16a11b[_0x596545(0xe71)]);
                        var _0xa0f26e = [0x0, 0x0, this[_0x596545(0x166c)]['x'], this['end']['y']],
                            _0xd4df23 = new Phaser[(_0x596545(0x16c7))][(_0x596545(0x817))](_0xa0f26e);
                        this[_0x596545(0x12b1)] = this['AddSpriteFollower'](_0xd4df23, this[_0x596545(0x1aa2)]['x'], this[_0x596545(0x1aa2)]['y'], _0x16a11b['textureName']), this[_0x596545(0x107b)] = this[_0x596545(0x8c4)](_0xd4df23, this[_0x596545(0x1aa2)]['x'], this[_0x596545(0x1aa2)]['y'], _0x16a11b['textureName']);
                    } ['AddSpriteFollower'](_0x589709, _0x108293, _0x54cf18, _0x36c3ca) {
                        const _0x598a7f = _0x405cf1;
                        return this['scene']['add'][_0x598a7f(0x1807)](_0x589709, _0x108293, _0x54cf18, _0x36c3ca)[_0x598a7f(0xf8e)](0.5, 0x0)[_0x598a7f(0x8a2)](0x2)[_0x598a7f(0x1788)](this['mask']);
                    } ['Play']() {
                        const _0x24b60a = _0x405cf1;
                        this['sprite1']['startFollow'](_0x367074[_0x24b60a(0xfcd)]), this[_0x24b60a(0x107b)][_0x24b60a(0x1168)](_0x367074[_0x24b60a(0x1346)]);
                    } ['Stop']() {
                        const _0x49be39 = _0x405cf1;
                        this[_0x49be39(0x12b1)]['setTexture'](this['reelConfig'][_0x49be39(0xacb)] + '_empty'), this[_0x49be39(0x107b)][_0x49be39(0x994)](this['reelConfig'][_0x49be39(0xacb)] + '_empty'), this[_0x49be39(0x12b1)]['stopFollow'](), this['sprite2'][_0x49be39(0x52c)](), this[_0x49be39(0x12b1)][_0x49be39(0x652)](0xffffff), this['sprite2'][_0x49be39(0x652)](0xffffff), this[_0x49be39(0x12b1)]['setBlendMode'](_0x57aeb2[_0x49be39(0x10fc)][_0x49be39(0x1811)]), this['sprite2']['setBlendMode'](_0x57aeb2['BlendModes']['ADD']), this[_0x49be39(0x6d2)]['time']['addEvent']({
                            'delay': 0x32,
                            'callback': () => {
                                const _0x416fcd = _0x49be39;
                                this['sprite1'][_0x416fcd(0xbb3)](), this[_0x416fcd(0x107b)][_0x416fcd(0xbb3)](), this['sprite1']['setBlendMode'](_0x57aeb2[_0x416fcd(0x10fc)][_0x416fcd(0x2b9)]), this['sprite2'][_0x416fcd(0x11c7)](_0x57aeb2[_0x416fcd(0x10fc)][_0x416fcd(0x2b9)]);
                            }
                        });
                    } ['Hide']() {
                        const _0x4323b6 = _0x405cf1;
                        this[_0x4323b6(0x6d2)]['tweens'][_0x4323b6(0x18bd)]({
                            'targets': [this[_0x4323b6(0x12b1)], this['sprite2']],
                            'alpha': 0x0,
                            'scaleX': 0x0,
                            'duration': 0x12c
                        });
                    } ['SetDepth'](_0xe432b8) {
                        const _0x150277 = _0x405cf1;
                        this[_0x150277(0x12b1)][_0x150277(0xb4a)](_0xe432b8), this['sprite2'][_0x150277(0xb4a)](_0xe432b8);
                    } ['Nuke']() {
                        const _0x5984b4 = _0x405cf1;
                        this[_0x5984b4(0x6d2)]['children'][_0x5984b4(0x393)](this['sprite1']), this['scene']['children'][_0x5984b4(0x393)](this[_0x5984b4(0x107b)]), this[_0x5984b4(0x12b1)][_0x5984b4(0x16ca)](), this[_0x5984b4(0x107b)][_0x5984b4(0x16ca)](), this['mask']['destroy']();
                    }
                }
                _0xc12e25['TreasureReel'] = _0x367074, _0x367074['FollowConfig_Reel_Standard1'] = {
                    'duration': 0x7d0,
                    'positionOnPath': !0x1,
                    'repeat': -0x1,
                    'rotateToPath': !0x0,
                    'rotationOffset': 0x5a,
                    'ease': 'Linear'
                }, _0x367074['FollowConfig_Reel_Standard2'] = {
                    'duration': 0x7d0,
                    'positionOnPath': !0x1,
                    'repeat': -0x1,
                    'rotateToPath': !0x0,
                    'rotationOffset': 0x5a,
                    'ease': 'Linear',
                    'delay': 0x3e8
                }, _0xc12e25['default'] = _0x367074;
            };
