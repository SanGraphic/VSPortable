// Module 0x14e3e
// Args: _0x5f5e00, _0x4725ca, _0x35550c

export default (_0x5f5e00, _0x4725ca, _0x35550c) => {
                'use strict';
                const _0x751885 = a0_0x6932;
                var _0x495839 = this && this['__importDefault'] || function(_0x165163) {
                    return _0x165163 && _0x165163['__esModule'] ? _0x165163 : {
                        'default': _0x165163
                    };
                };
                Object['defineProperty'](_0x4725ca, '__esModule', {
                    'value': !0x0
                });
                const _0x4c89b9 = _0x495839(_0x35550c(0x15abc)),
                    _0x1e62bd = _0x495839(_0x35550c(0x54e3)),
                    _0xf5bd94 = _0x495839(_0x35550c(0x1166a));
                class _0x5e7c29 extends _0xf5bd94['default'] {
                    constructor(_0x1a3951, _0x3b0e7d, _0x1bf5eb, _0x30f9a2) {
                        const _0x2c5699 = _0x751885;
                        super(_0x1a3951, _0x3b0e7d, _0x1bf5eb, _0x30f9a2), this['lives'] = 0x3;
                        let _0x50da01 = _0x4c89b9[_0x2c5699(0xd2c)][this[_0x2c5699(0xe49)]][0x0];
                        const _0x2bd6f4 = Phaser['Math'][_0x2c5699(0x82a)]['pick'](_0x50da01['frameNames']),
                            _0x3d1c53 = this['anims'][_0x2c5699(0x1756)](_0x50da01[_0x2c5699(0xacb)], {
                                'start': 0x0,
                                'end': _0x50da01['end'],
                                'zeroPad': 0x0,
                                'prefix': _0x2bd6f4[_0x2c5699(0xa0d)]('0.png', ''),
                                'suffix': '.png'
                            });
                        _0x3d1c53[_0x2c5699(0x1394)](), this[_0x2c5699(0x183e)][_0x2c5699(0x6a8)]({
                            'key': 'undie',
                            'frames': _0x3d1c53,
                            'frameRate': 0x18,
                            'repeat': 0x0
                        });
                    } ['OnRecycle']() {
                        const _0x8aaace = _0x751885;
                        super[_0x8aaace(0x5ce)](), this[_0x8aaace(0x20e)] = _0x4c89b9['default'][this[_0x8aaace(0xe49)]][0x0][_0x8aaace(0x20e)] ? _0x4c89b9['default'][this[_0x8aaace(0xe49)]][0x0][_0x8aaace(0x20e)] : this['lives'];
                    } ['Disappear']() {
                        const _0x121b50 = _0x751885;
                        this['lives'] = 0x0, this['isDead'] = !0x0, this[_0x121b50(0x183e)][_0x121b50(0x902)]('die');
                    } ['OnDeathAnimationComplete']() {
                        const _0x2802f1 = _0x751885;
                        this[_0x2802f1(0x20e)]--, this[_0x2802f1(0x20e)] <= 0x0 ? this['DeSpawn']() : (this['isDead'] = !0x0, this[_0x2802f1(0xcf9)][_0x2802f1(0x543)] = !0x1, this[_0x2802f1(0x902)]('undie'), this['removeListener']('animationcomplete'), this['on']('animationcomplete', this[_0x2802f1(0xf1b)]['bind'](this)));
                    } ['OnUndieComplete']() {
                        const _0x529c52 = _0x751885;
                        this[_0x529c52(0x183e)][_0x529c52(0x902)]('idle'), this['hp'] = this[_0x529c52(0xd2e)], this[_0x529c52(0xdae)] = !0x1, this['body'][_0x529c52(0x543)] = !0x0, this['removeListener']('animationcomplete'), this['on']('animationcomplete', this[_0x529c52(0x199e)][_0x529c52(0xf7e)](this));
                    } ['GetDamaged'](_0x57bef0, _0x10d20, _0x22693e, _0x26ba4b) {
                        const _0x3a9927 = _0x751885;
                        _0x26ba4b !== _0x1e62bd[_0x3a9927(0xd2c)]['PENTAGRAM'] && _0x26ba4b !== _0x1e62bd['default'][_0x3a9927(0x13b0)] && _0x26ba4b !== _0x1e62bd[_0x3a9927(0xd2c)][_0x3a9927(0xf20)] && _0x26ba4b !== _0x1e62bd[_0x3a9927(0xd2c)]['HEAVENSWORD'] || (this[_0x3a9927(0x20e)] = 0x0), this['isDead'] || super['GetDamaged'](_0x57bef0, _0x10d20, _0x22693e, _0x26ba4b);
                    }
                }
                _0x4725ca['default'] = _0x5e7c29;
            };
