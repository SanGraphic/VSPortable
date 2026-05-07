// Module 0x6851
// Args: _0xd9a94c, _0x34256a, _0x5849aa

export default (_0xd9a94c, _0x34256a, _0x5849aa) => {
                'use strict';
                const _0x471db5 = a0_0x6932;
                var _0x145b14 = this && this['__importDefault'] || function(_0xaecbc6) {
                    return _0xaecbc6 && _0xaecbc6['__esModule'] ? _0xaecbc6 : {
                        'default': _0xaecbc6
                    };
                };
                Object['defineProperty'](_0x34256a, '__esModule', {
                    'value': !0x0
                });
                const _0x5da4e4 = _0x145b14(_0x5849aa(0x9b68));
                class _0x318f0e extends Phaser['GameObjects']['Sprite'] {
                    constructor(_0x48918f, _0x21e9bf, _0x259e6b, _0x1d0223, _0x523505 = _0x5da4e4['default']['VOID']) {
                        const _0x2dfe30 = _0x471db5;
                        super(_0x48918f, _0x21e9bf, _0x259e6b, 'randomazzo', 'back.png'), this['isFlipping'] = !0x1, this[_0x2dfe30(0x177)] = !0x1, this['spinTimes'] = 0x0, _0x48918f[_0x2dfe30(0x18bd)][_0x2dfe30(0x1a88)](this), this[_0x2dfe30(0x1483)] = _0x1d0223, this[_0x2dfe30(0x19e8)] = !0x1, this['arcanaType'] = _0x523505;
                    } ['OnClick']() {} ['update']() {} ['ChangeArcanaType'](_0x10d240, _0x5e8d7b = _0x5da4e4['default']['VOID']) {
                        const _0x48b7bb = _0x471db5;
                        this[_0x48b7bb(0x1483)] = _0x10d240, this[_0x48b7bb(0x11c2)] = _0x5e8d7b;
                    } ['ChangeFrame']() {
                        const _0x7b40eb = _0x471db5;
                        this[_0x7b40eb(0x19e8)] = !this[_0x7b40eb(0x19e8)], this['setFrame'](this['open'] ? this['frontSpriteName'] : 'back.png');
                    } ['Reveal'](_0x17c08e = 0x64, _0x37561e = 0x1) {
                        const _0x537a34 = _0x471db5;
                        var _0x346157;
                        this[_0x537a34(0x785)] || (this[_0x537a34(0x785)] = !0x0, this['setScale'](_0x37561e), null === (_0x346157 = this['flipTween']) || void 0x0 === _0x346157 || _0x346157['stop'](), this['flipTween'] = this[_0x537a34(0x6d2)][_0x537a34(0x12a1)]['add']({
                            'targets': this,
                            'scaleX': 0x0,
                            'scaleY': 1.2 * _0x37561e,
                            'duration': _0x17c08e,
                            'onComplete': () => {
                                const _0x54a907 = _0x537a34;
                                var _0x176cbb;
                                this[_0x54a907(0x1304)](), null === (_0x176cbb = this[_0x54a907(0x1178)]) || void 0x0 === _0x176cbb || _0x176cbb['stop'](), this['backFlipTween'] = this['scene'][_0x54a907(0x12a1)]['add']({
                                    'targets': this,
                                    'scaleX': _0x37561e,
                                    'scaleY': _0x37561e,
                                    'duration': _0x17c08e,
                                    'onComplete': () => {
                                        this['isFlipping'] = !0x1, this['spinTimes'] > 0x0 && (this['spinTimes']--, this['Reveal'](_0x17c08e));
                                    }
                                });
                            }
                        }));
                    } ['Hide'](_0x8817e5 = 0x64, _0x31c589 = 0x1) {
                        const _0x124d5a = _0x471db5;
                        var _0x3b29a2;
                        null === (_0x3b29a2 = this[_0x124d5a(0x1178)]) || void 0x0 === _0x3b29a2 || _0x3b29a2[_0x124d5a(0x1a34)](), this['backFlipTween'] = this[_0x124d5a(0x6d2)][_0x124d5a(0x12a1)][_0x124d5a(0x18bd)]({
                            'targets': this,
                            'scaleX': _0x31c589,
                            'scaleY': _0x31c589,
                            'duration': _0x8817e5,
                            'onComplete': () => {
                                const _0x9f5473 = _0x124d5a;
                                this[_0x9f5473(0x785)] = !0x1;
                            }
                        });
                    } ['Spin'](_0x361a0f, _0xe620ae) {
                        const _0x4e0141 = _0x471db5;
                        this['spinTimes'] = _0xe620ae, this[_0x4e0141(0x1aeb)](_0x361a0f);
                    }
                }
                _0x34256a['default'] = _0x318f0e;
            };
