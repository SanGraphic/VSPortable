// Module 0x1721f
// Args: _0x30528f, _0x18eeae, _0x1bef22

export default (_0x30528f, _0x18eeae, _0x1bef22) => {
                'use strict';
                const _0x3bee6c = a0_0x6932;
                var _0x225b80 = this && this['__importDefault'] || function(_0x3cc881) {
                    const _0x357820 = _0x3bee6c;
                    return _0x3cc881 && _0x3cc881[_0x357820(0x16f1)] ? _0x3cc881 : {
                        'default': _0x3cc881
                    };
                };
                Object['defineProperty'](_0x18eeae, '__esModule', {
                    'value': !0x0
                }), _0x18eeae['W_Victory'] = void 0x0;
                const _0x1c0491 = _0x225b80(_0x1bef22(0x54e3)),
                    _0x20f1a0 = _0x225b80(_0x1bef22(0x5f07)),
                    _0x42d794 = _0x225b80(_0x1bef22(0x4a9d)),
                    _0xa84f02 = _0x225b80(_0x1bef22(0xe49a));
                class _0x3b4952 extends _0xa84f02['default'] {
                    constructor(_0x155393) {
                        const _0x2c1eb2 = _0x3bee6c;
                        super(_0x155393), this[_0x2c1eb2(0x546)] = 0x0, this['fireAngles'] = [0x14, -0x14, -0x46, 0x1e, -0x1e, 0x0], this['fireX'] = [-0x10, 0x10, 0x0, 0x10, -0x10, 0x0], this[_0x2c1eb2(0x4c4)] = !0x1, this['targets'] = [], this['explodeEvent'] = this['ExplodeOnPlayer'][_0x2c1eb2(0xf7e)](this), _0x20f1a0['default'][_0x2c1eb2(0x1043)]['scene'][_0x2c1eb2(0xdc4)]['addListener']('Player_ReceivedDamage', this['explodeEvent']), _0x20f1a0[_0x2c1eb2(0xd2c)][_0x2c1eb2(0x1043)][_0x2c1eb2(0x6d2)][_0x2c1eb2(0xdc4)][_0x2c1eb2(0x1299)]('Player_LostShield', this[_0x2c1eb2(0x1af)]), this[_0x2c1eb2(0x36d)] = !0x0, this['explosionType'] = _0x1c0491[_0x2c1eb2(0xd2c)][_0x2c1eb2(0x78d)], this[_0x2c1eb2(0x4c4)] = !0x1, this[_0x2c1eb2(0xdda)] = !0x1;
                    }
                    get['PPower']() {
                        const _0x534b98 = _0x3bee6c;
                        return super[_0x534b98(0xaae)] + _0x20f1a0[_0x534b98(0xd2c)]['Core'][_0x534b98(0x1884)][_0x534b98(0x1117)];
                    } ['LevelUp']() {
                        const _0x9848d3 = _0x3bee6c;
                        let _0x56699d = super[_0x9848d3(0x2ab)]();
                        return this[_0x9848d3(0x5e3)] >= 0x8 && (this[_0x9848d3(0xdda)] = !0x0, this[_0x9848d3(0x4c4)] = !0x0), _0x56699d;
                    } ['Fire']() {
                        const _0x5f2959 = _0x3bee6c;
                        let _0x31be9e = this[_0x5f2959(0xfc4)](_0x20f1a0[_0x5f2959(0xd2c)]['Core'][_0x5f2959(0x10f6)], _0x20f1a0['default'][_0x5f2959(0x1043)]['Enemies']);
                        if (_0x31be9e['length'] > 0x1 ? this['target'] = _0x31be9e[_0x31be9e[_0x5f2959(0xed9)] - 0x1 - Math['floor'](Math['random']() * _0x31be9e['length'] * 0.5)] : this[_0x5f2959(0x18a7)] = _0x31be9e[0x0], this[_0x5f2959(0x970)](_0x20f1a0['default'][_0x5f2959(0x1043)]['Player']['x'], _0x20f1a0['default'][_0x5f2959(0x1043)][_0x5f2959(0x10f6)]['y'], 0x0, this[_0x5f2959(0x18a7)]), this[_0x5f2959(0x942)] > 0x1) {
                            for (let _0x55f32e = 0x1; _0x55f32e < this['PAmount']; _0x55f32e++) this['repeatInterval'] * _0x55f32e > 0x0 ? this['lastShotTimer'] = _0x20f1a0['default']['Core']['scene'][_0x5f2959(0x915)][_0x5f2959(0x12b8)]({
                                'delay': this['repeatInterval'] * _0x55f32e,
                                'loop': !0x1,
                                'callback': () => {
                                    const _0xcecfcf = _0x5f2959;
                                    this[_0xcecfcf(0x970)](_0x20f1a0[_0xcecfcf(0xd2c)][_0xcecfcf(0x1043)][_0xcecfcf(0x10f6)]['x'], _0x20f1a0[_0xcecfcf(0xd2c)]['Core']['Player']['y'], _0x55f32e, this[_0xcecfcf(0x18a7)]);
                                }
                            }) : this[_0x5f2959(0x970)](_0x20f1a0[_0x5f2959(0xd2c)][_0x5f2959(0x1043)][_0x5f2959(0x10f6)]['x'], _0x20f1a0['default'][_0x5f2959(0x1043)][_0x5f2959(0x10f6)]['y'], _0x55f32e, this[_0x5f2959(0x18a7)]);
                        }
                        this['lastFiringInterval'] != this['PInterval'] && (this[_0x5f2959(0x162d)] = this[_0x5f2959(0x170c)], this[_0x5f2959(0x839)]());
                    } ['closest'](_0x410f78, _0x12a2a6) {
                        const _0x5d419b = _0x3bee6c;
                        for (var _0x4cebeb = Number[_0x5d419b(0x930)], _0x691a44 = null, _0x160a74 = [], _0x519203 = _0x410f78['x'], _0x228e03 = _0x410f78['y'], _0x260a57 = _0x12a2a6[_0x5d419b(0xed9)], _0x4e8a8c = 0x0; _0x4e8a8c < _0x260a57; _0x4e8a8c++) {
                            var _0x159ad2 = _0x12a2a6[_0x4e8a8c];
                            if (!_0x159ad2[_0x5d419b(0xdae)]) {
                                var _0x24f49e = _0x159ad2['body'] || _0x159ad2,
                                    _0x48ea2e = Phaser['Math']['Distance']['Between'](_0x519203, _0x228e03, _0x24f49e[_0x5d419b(0x995)]['x'], _0x24f49e[_0x5d419b(0x995)]['y']);
                                _0x48ea2e < _0x4cebeb && (_0x691a44 = _0x159ad2, _0x4cebeb = _0x48ea2e, _0x160a74[_0x5d419b(0x1564)](_0x691a44));
                            }
                        }
                        return _0x160a74;
                    } ['CleanUp']() {
                        const _0x1e99af = _0x3bee6c;
                        super['CleanUp'](), _0x20f1a0[_0x1e99af(0xd2c)][_0x1e99af(0x1043)]['scene'][_0x1e99af(0xdc4)]['removeListener']('Player_ReceivedDamage', this['explodeEvent']), _0x20f1a0['default']['Core']['scene'][_0x1e99af(0xdc4)]['removeListener']('Player_LostShield', this[_0x1e99af(0x1af)]);
                    } ['ExplodeOnPlayer']() {
                        const _0xe1e308 = _0x3bee6c;
                        if (this[_0xe1e308(0x36d)]) {
                            this[_0xe1e308(0x36d)] = !0x1, _0x20f1a0[_0xe1e308(0xd2c)][_0xe1e308(0x1043)][_0xe1e308(0x6d2)]['time']['removeEvent'](this[_0xe1e308(0x179b)]), this[_0xe1e308(0x179b)] = _0x20f1a0[_0xe1e308(0xd2c)]['Core'][_0xe1e308(0x6d2)][_0xe1e308(0x915)]['addEvent']({
                                'delay': 0x6 * this[_0xe1e308(0x7ea)],
                                'callback': () => {
                                    this['canExplode'] = !0x0;
                                }
                            }), this['SpawnExplosionAt'](_0x20f1a0['default'][_0xe1e308(0x1043)]['Player']['x'], _0x20f1a0[_0xe1e308(0xd2c)]['Core'][_0xe1e308(0x10f6)]['y'], 0x0);
                            for (let _0x590f6b = 0x1; _0x590f6b < 0x6; _0x590f6b++) _0x20f1a0['default']['Core']['scene']['time'][_0xe1e308(0x12b8)]({
                                'delay': this[_0xe1e308(0x7ea)] * _0x590f6b,
                                'loop': !0x1,
                                'callback': () => {
                                    const _0x3a1b25 = _0xe1e308;
                                    this[_0x3a1b25(0x155a)](_0x20f1a0['default'][_0x3a1b25(0x1043)]['Player']['x'], _0x20f1a0['default'][_0x3a1b25(0x1043)][_0x3a1b25(0x10f6)]['y'], _0x590f6b);
                                }
                            });
                        }
                    } ['SpawnExplosionAt'](_0x5d858e, _0x482614, _0x203a8f = 0x0, _0x392697 = 0x1, _0x596052 = 0x1) {
                        const _0x571533 = _0x3bee6c;
                        this[_0x571533(0x11a6)] || (this['secondaryPool'] = new _0x42d794[(_0x571533(0xd2c))](_0x20f1a0[_0x571533(0xd2c)][_0x571533(0x1043)]['scene'], this['explosionType']), _0x20f1a0[_0x571533(0xd2c)]['Core']['scene'][_0x571533(0x1585)][_0x571533(0x18bd)][_0x571533(0x13d7)](this[_0x571533(0x11a6)], _0x20f1a0[_0x571533(0xd2c)][_0x571533(0x1043)][_0x571533(0x1a91)], this[_0x571533(0x14ac)]['bind'](this)), _0x20f1a0[_0x571533(0xd2c)][_0x571533(0x1043)]['scene'][_0x571533(0x1585)][_0x571533(0x18bd)]['overlap'](this['secondaryPool'], _0x20f1a0[_0x571533(0xd2c)]['Core']['Destructibles'], this['onBulletOverlapsDestuctible'][_0x571533(0xf7e)](this)));
                        let _0x394d04 = this[_0x571533(0x11a6)]['SpawnAt'](_0x5d858e, _0x482614, this, _0x203a8f);
                        return _0x394d04 && _0x394d04[_0x571533(0x3b9)](_0x20f1a0['default']['Core'][_0x571533(0x10f6)]), _0x394d04;
                    } ['onBulletOverlapsEnemy'](_0x1c422b, _0x2f2eea) {
                        const _0x1c4776 = _0x3bee6c;
                        return this['canCrit'] ? this[_0x1c4776(0x1152)](_0x1c422b, _0x2f2eea) : super[_0x1c4776(0xd06)](_0x1c422b, _0x2f2eea);
                    }
                }
                _0x18eeae['W_Victory'] = _0x3b4952, _0x18eeae['default'] = _0x3b4952;
            };
