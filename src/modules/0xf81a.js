// Module 0xf81a
// Args: _0x5bfcd6, _0x2554ae, _0x353032

export default (_0x5bfcd6, _0x2554ae, _0x353032) => {
                'use strict';
                const _0x37682b = a0_0x6932;
                var _0x155cb9 = this && this['__importDefault'] || function(_0x584105) {
                    const _0x1178b5 = _0x37682b;
                    return _0x584105 && _0x584105[_0x1178b5(0x16f1)] ? _0x584105 : {
                        'default': _0x584105
                    };
                };
                Object['defineProperty'](_0x2554ae, '__esModule', {
                    'value': !0x0
                }), _0x2554ae['W_ColdExplosion'] = void 0x0;
                const _0x1032bf = _0x155cb9(_0x353032(0x5f07)),
                    _0x2e5d7d = _0x155cb9(_0x353032(0xe49a));
                class _0x48bd4f extends _0x2e5d7d['default'] {
                    constructor(_0xc124b) {
                        super(_0xc124b), this['doesRetaliate'] = !0x1, this['canExplode'] = !0x0, this['explodeEvent'] = this['ExplodeOnPlayer']['bind'](this);
                    }
                    get['PPower']() {
                        const _0x11e4d1 = _0x37682b;
                        return _0x1032bf[_0x11e4d1(0xd2c)][_0x11e4d1(0x1043)][_0x11e4d1(0x10f6)]['sineMight'] ? Math[_0x11e4d1(0x1084)](0xa, _0x1032bf[_0x11e4d1(0xd2c)][_0x11e4d1(0x1043)][_0x11e4d1(0x10f6)]['power'] * _0x1032bf['default']['Core']['Player'][_0x11e4d1(0x947)][_0x11e4d1(0xb81)]) * this[_0x11e4d1(0x31f)] : Math['min'](0xa, _0x1032bf[_0x11e4d1(0xd2c)]['Core']['Player']['power']) * this['power'];
                    } ['ResetFiringTimer']() {
                        const _0x368fd8 = _0x37682b;
                        this['firingTimer'] && this[_0x368fd8(0x19b7)]['destroy']();
                    } ['CleanUp']() {
                        const _0x1005d4 = _0x37682b;
                        var _0x34d97b;
                        this['firingTimer'] && this[_0x1005d4(0x19b7)][_0x1005d4(0x16ca)](), null === (_0x34d97b = this[_0x1005d4(0xc82)]) || void 0x0 === _0x34d97b || _0x34d97b[_0x1005d4(0x13f4)][_0x1005d4(0x858)](_0x27f3a5 => {
                            const _0xe6d630 = _0x1005d4;
                            _0x27f3a5[_0xe6d630(0x14fb)]();
                        }), _0x1032bf['default']['Core'][_0x1005d4(0x6d2)]['events']['removeListener']('Player_ReceivedDamage', this[_0x1005d4(0x1af)]), _0x1032bf['default'][_0x1005d4(0x1043)][_0x1005d4(0x6d2)]['events'][_0x1005d4(0x1ab3)]('Player_LostShield', this[_0x1005d4(0x1af)]);
                    } ['ExplodeOnPlayer']() {
                        const _0x4c9c8c = _0x37682b;
                        if (this[_0x4c9c8c(0xf7a)]) return this['ExplodeAt'](_0x1032bf['default']['Core']['Player']['x'], _0x1032bf['default'][_0x4c9c8c(0x1043)]['Player']['y']);
                    } ['ExplodeAt'](_0xb1065d, _0x117849) {
                        const _0x251f31 = _0x37682b;
                        this[_0x251f31(0x36d)] && (this[_0x251f31(0x36d)] = !0x1, _0x1032bf['default'][_0x251f31(0x1043)]['scene'][_0x251f31(0x915)][_0x251f31(0x17fb)](this['ExplodeTimer']), this[_0x251f31(0x179b)] = _0x1032bf[_0x251f31(0xd2c)]['Core'][_0x251f31(0x6d2)]['time'][_0x251f31(0x12b8)]({
                            'delay': 0x1f4,
                            'callback': () => {
                                this['canExplode'] = !0x0;
                            }
                        }), this[_0x251f31(0xc82)][_0x251f31(0xada)](_0xb1065d, _0x117849, this, 0x0));
                    }
                }
                _0x2554ae['W_ColdExplosion'] = _0x48bd4f, _0x2554ae['default'] = _0x48bd4f;
            };
