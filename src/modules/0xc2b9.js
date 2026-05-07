// Module 0xc2b9
// Args: _0x561bb1, _0x33fe49, _0x538b74

export default (_0x561bb1, _0x33fe49, _0x538b74) => {
                'use strict';
                const _0x1fd01c = a0_0x6932;
                var _0x4f46b2 = this && this['__importDefault'] || function(_0x59e3a0) {
                    return _0x59e3a0 && _0x59e3a0['__esModule'] ? _0x59e3a0 : {
                        'default': _0x59e3a0
                    };
                };
                Object['defineProperty'](_0x33fe49, '__esModule', {
                    'value': !0x0
                }), _0x33fe49['W_FireExplosion'] = void 0x0;
                const _0x144d9 = _0x4f46b2(_0x538b74(0x5f07)),
                    _0x21ba8a = _0x4f46b2(_0x538b74(0xe49a));
                class _0x57cc89 extends _0x21ba8a['default'] {
                    constructor(_0x411bc9) {
                        const _0x25e466 = _0x1fd01c;
                        super(_0x411bc9), this['canExplode'] = !0x0, this[_0x25e466(0x1af)] = this[_0x25e466(0x591)]['bind'](this), _0x144d9[_0x25e466(0xd2c)][_0x25e466(0x1043)]['scene']['events'][_0x25e466(0x1299)]('Player_ReceivedDamage', this['explodeEvent']), _0x144d9[_0x25e466(0xd2c)]['Core'][_0x25e466(0x6d2)][_0x25e466(0xdc4)][_0x25e466(0x1299)]('Player_LostShield', this[_0x25e466(0x1af)]);
                    } ['ResetFiringTimer']() {
                        const _0xdfe59 = _0x1fd01c;
                        this[_0xdfe59(0x19b7)] && this[_0xdfe59(0x19b7)]['destroy']();
                    } ['onBulletOverlapsEnemy'](_0x588118, _0x489ff2) {
                        return this['onBulletOverlapsEnemy_Retaliation'](_0x588118, _0x489ff2);
                    } ['CleanUp']() {
                        const _0x33d917 = _0x1fd01c;
                        var _0x1db9cb;
                        this[_0x33d917(0x19b7)] && this['firingTimer'][_0x33d917(0x16ca)](), null === (_0x1db9cb = this['pool']) || void 0x0 === _0x1db9cb || _0x1db9cb[_0x33d917(0x13f4)]['forEach'](_0x560c78 => {
                            const _0x1b350b = _0x33d917;
                            _0x560c78[_0x1b350b(0x14fb)]();
                        }), _0x144d9['default']['Core']['scene']['events'][_0x33d917(0x1ab3)]('Player_ReceivedDamage', this[_0x33d917(0x1af)]), _0x144d9[_0x33d917(0xd2c)]['Core'][_0x33d917(0x6d2)][_0x33d917(0xdc4)][_0x33d917(0x1ab3)]('Player_LostShield', this[_0x33d917(0x1af)]);
                    } ['ExplodeOnPlayer']() {
                        const _0x9f2790 = _0x1fd01c;
                        return this[_0x9f2790(0x1388)](_0x144d9[_0x9f2790(0xd2c)][_0x9f2790(0x1043)]['Player']['x'], _0x144d9[_0x9f2790(0xd2c)]['Core'][_0x9f2790(0x10f6)]['y']);
                    } ['ExplodeAt'](_0x11311b, _0x389bc0) {
                        const _0x22c94e = _0x1fd01c;
                        this[_0x22c94e(0x36d)] && (this[_0x22c94e(0x36d)] = !0x1, _0x144d9[_0x22c94e(0xd2c)]['Core'][_0x22c94e(0x6d2)][_0x22c94e(0x915)][_0x22c94e(0x17fb)](this['ExplodeTimer']), this[_0x22c94e(0x179b)] = _0x144d9['default'][_0x22c94e(0x1043)][_0x22c94e(0x6d2)][_0x22c94e(0x915)][_0x22c94e(0x12b8)]({
                            'delay': 0x1f4,
                            'callback': () => {
                                this['canExplode'] = !0x0;
                            }
                        }), this[_0x22c94e(0xc82)][_0x22c94e(0xada)](_0x11311b, _0x389bc0, this, 0x0));
                    }
                }
                _0x33fe49['W_FireExplosion'] = _0x57cc89, _0x33fe49['default'] = _0x57cc89;
            };
