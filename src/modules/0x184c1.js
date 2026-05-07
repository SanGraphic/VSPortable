// Module 0x184c1
// Args: _0x453513, _0xe9f450, _0x77eafe

export default (_0x453513, _0xe9f450, _0x77eafe) => {
                'use strict';
                const _0x298523 = a0_0x6932;
                var _0x1d9502 = this && this['__importDefault'] || function(_0x2bc710) {
                    return _0x2bc710 && _0x2bc710['__esModule'] ? _0x2bc710 : {
                        'default': _0x2bc710
                    };
                };
                Object['defineProperty'](_0xe9f450, '__esModule', {
                    'value': !0x0
                }), _0xe9f450['W_GemCannon'] = void 0x0;
                const _0x4e6791 = _0x1d9502(_0x77eafe(0x54e3)),
                    _0x3e7050 = _0x1d9502(_0x77eafe(0x5f07)),
                    _0x3728bf = _0x1d9502(_0x77eafe(0x4a9d)),
                    _0x43ee1e = _0x1d9502(_0x77eafe(0xe49a));
                class _0x54fc3e extends _0x43ee1e['default'] {
                    constructor(_0x2999b3) {
                        const _0x36bf2c = a0_0x6932;
                        super(_0x2999b3), this['gemValue'] = 0x1, this['gemFrame'] = 'GemBlue.png';
                    }
                    get['PAmount']() {
                        return 0x1;
                    }
                    get['PPower']() {
                        const _0x54f03d = _0x298523;
                        return this[_0x54f03d(0x162a)];
                    } ['ResetFiringTimer']() {
                        const _0x4ce04a = _0x298523;
                        this[_0x4ce04a(0x19b7)] && this[_0x4ce04a(0x19b7)][_0x4ce04a(0x16ca)]();
                    } ['onBulletOverlapsEnemy'](_0x56c728, _0x366a80) {
                        const _0x374a1c = _0x298523;
                        var _0x92972 = _0x366a80;
                        _0x92972[_0x374a1c(0xdae)] || _0x56c728[_0x374a1c(0x1738)](_0x92972) || (_0x92972[_0x374a1c(0x1112)](this['PPower'], this['hitVFX'], this[_0x374a1c(0x1992)], this['bulletType'], !0x1), this[_0x374a1c(0xb3d)] += this[_0x374a1c(0xaae)], this[_0x374a1c(0x11a6)][_0x374a1c(0xada)](_0x92972['x'], _0x92972['y'], this, 0x0));
                    } ['onExplosionOverlapsEnemy'](_0x175eda, _0x54650b) {
                        const _0x58486f = _0x298523;
                        var _0x3d3c19 = _0x54650b;
                        _0x3d3c19[_0x58486f(0xdae)] || _0x175eda[_0x58486f(0x1738)](_0x3d3c19) || (_0x3d3c19['GetDamaged'](this['PPower'], this[_0x58486f(0x347)], this['knockback'], this['bulletType'], !0x1), this['stats_inflictedDamage'] += this[_0x58486f(0xaae)]);
                    } ['OnStart']() {
                        const _0x4f7197 = _0x298523;
                        super[_0x4f7197(0xec7)](), this['secondaryPool'] = new _0x3728bf[(_0x4f7197(0xd2c))](_0x3e7050[_0x4f7197(0xd2c)][_0x4f7197(0x1043)][_0x4f7197(0x6d2)], _0x4e6791['default'][_0x4f7197(0x1812)]), _0x3e7050[_0x4f7197(0xd2c)]['Core'][_0x4f7197(0x6d2)]['physics'][_0x4f7197(0x18bd)]['overlap'](this[_0x4f7197(0x11a6)], _0x3e7050[_0x4f7197(0xd2c)][_0x4f7197(0x1043)][_0x4f7197(0x1a91)], this[_0x4f7197(0x17e1)][_0x4f7197(0xf7e)](this)), _0x3e7050['default'][_0x4f7197(0x1043)]['scene'][_0x4f7197(0x1585)]['add']['overlap'](this['secondaryPool'], _0x3e7050[_0x4f7197(0xd2c)][_0x4f7197(0x1043)][_0x4f7197(0xa08)], this[_0x4f7197(0x823)]['bind'](this));
                    } ['CleanUp']() {
                        const _0x249a42 = _0x298523;
                        var _0x5bf445, _0x173ef2;
                        this[_0x249a42(0x19b7)] && this[_0x249a42(0x19b7)]['destroy'](), null === (_0x5bf445 = this[_0x249a42(0xc82)]) || void 0x0 === _0x5bf445 || _0x5bf445[_0x249a42(0x13f4)]['forEach'](_0x16388e => {
                            _0x16388e['DeSpawn']();
                        }), null === (_0x173ef2 = this[_0x249a42(0x11a6)]) || void 0x0 === _0x173ef2 || _0x173ef2[_0x249a42(0x13f4)]['forEach'](_0x48fc32 => {
                            _0x48fc32['DeSpawn']();
                        });
                    }
                }
                _0xe9f450['W_GemCannon'] = _0x54fc3e, _0xe9f450['default'] = _0x54fc3e;
            };
