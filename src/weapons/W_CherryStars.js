// Module 0xf01f
// Args: _0x3ac31f, _0x1705eb, _0x4838ba

export default (_0x3ac31f, _0x1705eb, _0x4838ba) => {
                'use strict';
                const _0x595191 = a0_0x6932;
                var _0x35c75a = this && this['__importDefault'] || function(_0x566ebf) {
                    return _0x566ebf && _0x566ebf['__esModule'] ? _0x566ebf : {
                        'default': _0x566ebf
                    };
                };
                Object['defineProperty'](_0x1705eb, '__esModule', {
                    'value': !0x0
                }), _0x1705eb['W_CherryStars'] = void 0x0;
                const _0x401a5c = _0x35c75a(_0x4838ba(0x54e3)),
                    _0x5f3ad9 = _0x35c75a(_0x4838ba(0x5f07)),
                    _0x131945 = _0x35c75a(_0x4838ba(0x4a9d)),
                    _0x3fc501 = _0x35c75a(_0x4838ba(0x3e35));
                class _0x33b701 extends _0x3fc501['default'] {
                    constructor() {
                        super(...arguments), this['critChance'] = 0.05;
                    }
                    get['SecondaryPPower']() {
                        const _0x453ce1 = _0x595191;
                        let _0x449b0b = this[_0x453ce1(0x433)][this['critIndex'] % this[_0x453ce1(0x433)][_0x453ce1(0xed9)]];
                        this['critIndex']++;
                        let _0x48c0f5 = _0x449b0b < this[_0x453ce1(0x25c)] * _0x5f3ad9[_0x453ce1(0xd2c)][_0x453ce1(0x1043)]['Player'][_0x453ce1(0x17b9)] ? _0x5f3ad9[_0x453ce1(0xd2c)]['Core']['Player']['PLuck'] * _0x5f3ad9[_0x453ce1(0xd2c)][_0x453ce1(0x1043)][_0x453ce1(0x1884)]['CritMul'] : 0x1,
                            _0x28ad96 = this[_0x453ce1(0x31f)] * this['PAmount'] * _0x48c0f5;
                        return _0x5f3ad9['default'][_0x453ce1(0x1043)][_0x453ce1(0x10f6)][_0x453ce1(0x947)] ? Math[_0x453ce1(0x1084)](0xa, (_0x5f3ad9['default']['Core'][_0x453ce1(0x1884)][_0x453ce1(0x18f8)] + _0x5f3ad9[_0x453ce1(0xd2c)]['Core']['Player'][_0x453ce1(0x31f)]) * _0x5f3ad9[_0x453ce1(0xd2c)]['Core'][_0x453ce1(0x10f6)][_0x453ce1(0x947)][_0x453ce1(0xb81)]) * _0x28ad96 + _0x5f3ad9[_0x453ce1(0xd2c)][_0x453ce1(0x1043)][_0x453ce1(0x1884)][_0x453ce1(0x1117)] : Math['min'](0xa, _0x5f3ad9[_0x453ce1(0xd2c)]['Core']['Arcanas'][_0x453ce1(0x18f8)] + _0x5f3ad9[_0x453ce1(0xd2c)][_0x453ce1(0x1043)][_0x453ce1(0x10f6)][_0x453ce1(0x31f)]) * _0x28ad96 + _0x5f3ad9[_0x453ce1(0xd2c)][_0x453ce1(0x1043)][_0x453ce1(0x1884)][_0x453ce1(0x1117)];
                    } ['Fire']() {
                        const _0x303d54 = _0x595191;
                        super['Fire'](), this[_0x303d54(0x124f)] || (this['InitBullets'](), this[_0x303d54(0x124f)] = !0x0);
                    } ['ShootStarAt'](_0x403e01, _0x5b9855, _0x44e635) {
                        this['explosionPool']['SpawnAt'](_0x403e01, _0x5b9855, this, _0x44e635);
                    } ['InitBullets']() {
                        const _0x381f2f = _0x595191;
                        this['drawerPool'] || (this[_0x381f2f(0xaf4)] = new _0x131945['default'](_0x5f3ad9[_0x381f2f(0xd2c)]['Core']['scene'], _0x401a5c['default'][_0x381f2f(0x12a0)]), _0x5f3ad9[_0x381f2f(0xd2c)][_0x381f2f(0x1043)]['scene'][_0x381f2f(0x1585)]['add']['overlap'](this[_0x381f2f(0xaf4)], _0x5f3ad9['default'][_0x381f2f(0x1043)][_0x381f2f(0x1a91)], this[_0x381f2f(0xcf5)][_0x381f2f(0xf7e)](this)), _0x5f3ad9['default'][_0x381f2f(0x1043)]['scene'][_0x381f2f(0x1585)][_0x381f2f(0x18bd)]['overlap'](this['drawerPool'], _0x5f3ad9[_0x381f2f(0xd2c)][_0x381f2f(0x1043)][_0x381f2f(0xa08)], this['onBulletOverlapsDestuctible']['bind'](this))), this[_0x381f2f(0x1a4d)] || (this[_0x381f2f(0x1a4d)] = new _0x131945[(_0x381f2f(0xd2c))](_0x5f3ad9[_0x381f2f(0xd2c)][_0x381f2f(0x1043)]['scene'], _0x401a5c[_0x381f2f(0xd2c)][_0x381f2f(0x9e1)]), _0x5f3ad9[_0x381f2f(0xd2c)][_0x381f2f(0x1043)][_0x381f2f(0x6d2)][_0x381f2f(0x1585)][_0x381f2f(0x18bd)]['overlap'](this['explosionPool'], _0x5f3ad9['default'][_0x381f2f(0x1043)][_0x381f2f(0x1a91)], this['onSecondaryBulletOverlapsEnemy'][_0x381f2f(0xf7e)](this)), _0x5f3ad9['default'][_0x381f2f(0x1043)]['scene']['physics'][_0x381f2f(0x18bd)]['overlap'](this[_0x381f2f(0x1a4d)], _0x5f3ad9['default']['Core'][_0x381f2f(0xa08)], this['onBulletOverlapsDestuctible'][_0x381f2f(0xf7e)](this))), this[_0x381f2f(0x15ff)] = this['drawerPool']['SpawnAt'](_0x5f3ad9[_0x381f2f(0xd2c)]['Core']['Player']['x'], _0x5f3ad9[_0x381f2f(0xd2c)]['Core'][_0x381f2f(0x10f6)]['y'], this, 0x0);
                    } ['Update'](_0x2e09b7) {
                        const _0x50c404 = _0x595191;
                        super['Update'](_0x2e09b7), this[_0x50c404(0x1706)] || (this[_0x50c404(0x12a7)](), this[_0x50c404(0x1706)] = !0x0), this['UpdateImage']();
                    } ['InitImage']() {
                        const _0x70ed01 = _0x595191;
                        if (!this[_0x70ed01(0x13b6)]) {
                            this['cow'] = _0x5f3ad9['default']['Core'][_0x70ed01(0x6d2)]['add'][_0x70ed01(0x105b)](0x0, 0x0, 'characters', 'yattaCowi0.png');
                            const _0x98caa = this[_0x70ed01(0x13b6)][_0x70ed01(0x183e)]['generateFrameNames']('characters', {
                                'start': 0x1,
                                'end': 0x4,
                                'zeroPad': 0x0,
                                'prefix': 'yattaCowi0',
                                'suffix': '.png'
                            });
                            this['cow'][_0x70ed01(0x183e)]['create']({
                                'key': 'idle',
                                'frames': _0x98caa,
                                'frameRate': 0x8,
                                'repeat': -0x1
                            }), this[_0x70ed01(0x13b6)][_0x70ed01(0x183e)][_0x70ed01(0x902)]('idle');
                        }
                        this[_0x70ed01(0x13b6)][_0x70ed01(0xdab)](0.65)['setDepth'](-0x2)['setOrigin'](0.5, 0x1);
                    } ['UpdateImage']() {
                        const _0x50a670 = _0x595191;
                        this[_0x50a670(0x13b6)][_0x50a670(0xf01)](_0x5f3ad9['default'][_0x50a670(0x1043)]['Player']), this['cow'][_0x50a670(0x4d4)] = _0x5f3ad9[_0x50a670(0xd2c)]['Core']['Player'][_0x50a670(0x4d4)];
                    }
                }
                _0x1705eb['W_CherryStars'] = _0x33b701, _0x1705eb['default'] = _0x33b701;
            };
