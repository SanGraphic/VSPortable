// Module 0x452f
// Args: _0x307236, _0x429f48, _0x35f548

export default (_0x307236, _0x429f48, _0x35f548) => {
                'use strict';
                const _0x20f259 = a0_0x6932;
                var _0x22ed8d = this && this['__importDefault'] || function(_0x256979) {
                    const _0x3abf47 = a0_0x6932;
                    return _0x256979 && _0x256979['__esModule'] ? _0x256979 : {
                        'default': _0x256979
                    };
                };
                Object['defineProperty'](_0x429f48, '__esModule', {
                    'value': !0x0
                });
                const _0x419bf2 = _0x22ed8d(_0x35f548(0xc42e)),
                    _0x49decc = _0x22ed8d(_0x35f548(0x1fd7)),
                    _0x32dbe3 = _0x22ed8d(_0x35f548(0x54e3)),
                    _0x1ae10b = _0x22ed8d(_0x35f548(0x5f07)),
                    _0x88c649 = _0x22ed8d(_0x35f548(0x17995)),
                    _0xeb5ef3 = _0x22ed8d(_0x35f548(0xa6c));
                class _0x1986f6 extends _0x88c649['default'] {
                    constructor() {
                        super(...arguments), this['hasSecondAnim'] = !0x1;
                    } ['Update'](_0x289a08) {
                        const _0x4979cb = _0x20f259;
                        super[_0x4979cb(0xa9f)](_0x289a08), this[_0x4979cb(0x1279)] && (this[_0x4979cb(0xd96)] = 0x0);
                    } ['LevelUp']() {
                        const _0x79aaaf = _0x20f259;
                        if (super[_0x79aaaf(0x2ab)](), this[_0x79aaaf(0x5e3)] >= 0x50) {
                            if (_0x1ae10b['default']['Core']['PlayerOptions'][_0x79aaaf(0x1707)]['indexOf'](_0x419bf2[_0x79aaaf(0xd2c)][_0x79aaaf(0x180e)]) > -0x1) return;
                            _0x1ae10b[_0x79aaaf(0xd2c)]['Core']['PlayerOptions']['CollectedItems']['indexOf'](_0x419bf2[_0x79aaaf(0xd2c)]['RELIC_ROSALIA']) > -0x1 && this[_0x79aaaf(0x106b)]();
                        }
                    } ['MakeLevelOne']() {
                        const _0x37113b = _0x20f259;
                        super[_0x37113b(0xf64)](), this['isMorphed'] = !0x1, this[_0x37113b(0x23d)] = !0x1, this['ArmorBonus'] = 0x2, this[_0x37113b(0x14cc)] = 0x1, this['MaxHpBonus'] = 0x64, this['LuckBonus'] = 0.25, _0x1ae10b[_0x37113b(0xd2c)][_0x37113b(0x1043)][_0x37113b(0x14d8)][_0x37113b(0x1481)]['indexOf'](_0x419bf2[_0x37113b(0xd2c)][_0x37113b(0x180e)]) > -0x1 && this[_0x37113b(0x1920)]();
                    } ['MorphedOnStop']() {
                        const _0x124fe2 = _0x20f259;
                        this['wiggleTween'][_0x124fe2(0x1631)](), this['setAngle'](0x0);
                    } ['MakeMorphVFX']() {
                        const _0x3cea1c = _0x20f259;
                        this[_0x3cea1c(0x39e)] || (this['MorphVFX'] = new _0xeb5ef3[(_0x3cea1c(0xd2c))](this['scene']), this['MorphVFX'][_0x3cea1c(0x9c6)] = [0xff00, 0xff, 0xffff00, 0xff0000], this[_0x3cea1c(0x39e)]['sparkName'] = 'blurredSharpStar.png', this[_0x3cea1c(0x39e)][_0x3cea1c(0x157)] = 'disc.png', this['MorphVFX'][_0x3cea1c(0x18c8)]());
                    } ['Morph']() {
                        const _0x283260 = _0x20f259;
                        if (this['isMorphed']) return;
                        this[_0x283260(0x1920)](), this[_0x283260(0x39e)][_0x283260(0x4e6)](), this[_0x283260(0x1279)] = !0x0, _0x1ae10b[_0x283260(0xd2c)]['Sound'][_0x283260(0x7f6)](_0x49decc['default'][_0x283260(0x106b)], {
                            'volume': 0x1,
                            'rate': 0.5
                        }, 0x7d0, 0x1), this[_0x283260(0x1583)] = this[_0x283260(0x896)], this[_0x283260(0x1a1e)] = _0x1ae10b['default'][_0x283260(0x1043)][_0x283260(0x1961)](_0x32dbe3[_0x283260(0xd2c)][_0x283260(0x3b0)]), this[_0x283260(0x1a1e)]['SetToStars'](), this['cherryWeapon']['chance'] = 0x1, this[_0x283260(0xcf9)][_0x283260(0x7b8)](0x1e, 0x3e), this[_0x283260(0x183e)][_0x283260(0x1a34)]();
                        const _0x2cbd4a = this[_0x283260(0x183e)]['generateFrameNames']('characters', {
                            'start': 0x1,
                            'end': 0x4,
                            'zeroPad': 0x0,
                            'prefix': 'yattaCowi0',
                            'suffix': '.png'
                        });
                        this['setTexture']('characters', 'yattaCowi01.png'), this[_0x283260(0x183e)]['create']({
                            'key': 'walk2',
                            'frames': _0x2cbd4a,
                            'frameRate': 0x8,
                            'repeat': -0x1
                        }), this[_0x283260(0x183e)]['play']('walk2'), this['SetMaxHistory'](0x1), this[_0x283260(0x9b8)] += this[_0x283260(0x14cc)], this[_0x283260(0x8d0)] += this['ArmorBonus'], this[_0x283260(0xd2e)] += this[_0x283260(0x81d)], this[_0x283260(0x7d2)] += this[_0x283260(0xda9)], this['hp'] = this['maxHp'];
                    }
                }
                _0x429f48['default'] = _0x1986f6;
            };
