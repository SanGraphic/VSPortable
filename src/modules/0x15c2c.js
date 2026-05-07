// Module 0x15c2c
// Args: _0x452552, _0x507635, _0x34b216

export default (_0x452552, _0x507635, _0x34b216) => {
                'use strict';
                const _0x348ad9 = a0_0x6932;
                Object['defineProperty'](_0x507635, '__esModule', {
                    'value': !0x0
                }), _0x507635['BubbleVFX'] = void 0x0;
                const _0x465140 = _0x34b216(0x18304);
                class _0x1f54c4 {
                    constructor(_0x33ff30) {
                        const _0x1b830e = _0x348ad9;
                        this['count'] = 0x1, this[_0x1b830e(0x151c)] = !0x1, this[_0x1b830e(0x6d2)] = _0x33ff30, this[_0x1b830e(0x431)] = this[_0x1b830e(0x6d2)][_0x1b830e(0x18bd)]['image'](0x0, 0x0, 'vfx', 'Gradient2.png')[_0x1b830e(0x8a2)](this['scene'][_0x1b830e(0x12f9)]['width'] / 0x20, this['scene'][_0x1b830e(0x12f9)][_0x1b830e(0x140e)] / 0x20)['setTint'](0xffff00)['setScrollFactor'](0x0)[_0x1b830e(0xdab)](0x0)['setOrigin'](0x0), this['background2'] = this[_0x1b830e(0x6d2)][_0x1b830e(0x18bd)][_0x1b830e(0x568)](0x0, 0x0, 'vfx', 'Gradient2.png')['setScale'](this[_0x1b830e(0x6d2)][_0x1b830e(0x12f9)]['width'] / 0x20, this[_0x1b830e(0x6d2)][_0x1b830e(0x12f9)]['height'] / 0x20)[_0x1b830e(0xb34)](0xffffff)['setScrollFactor'](0x0)[_0x1b830e(0xdab)](0x0)['setOrigin'](0x0)[_0x1b830e(0x11c7)](_0x465140['BlendModes']['ADD']), this[_0x1b830e(0x523)] = this[_0x1b830e(0x6d2)][_0x1b830e(0x18bd)][_0x1b830e(0x523)]()[_0x1b830e(0x11c7)](_0x465140['BlendModes']['ADD'])['setScrollFactor'](0x0), this['shapes'] = new Array(0xf)[_0x1b830e(0x436)](null)['map'](() => new Phaser['Geom'][(_0x1b830e(0xf29))](Phaser[_0x1b830e(0x24f)]['Between'](0x0, this[_0x1b830e(0x6d2)]['renderer']['width']), Phaser[_0x1b830e(0x24f)][_0x1b830e(0xde8)](0x0, this[_0x1b830e(0x6d2)]['renderer']['height']), Phaser[_0x1b830e(0x24f)]['Between'](12.5, 37.5))), this[_0x1b830e(0x2f7)] = Phaser['Geom']['Rectangle'][_0x1b830e(0x10d1)](this[_0x1b830e(0x6d2)][_0x1b830e(0x1793)][_0x1b830e(0x4cd)]);
                    } ['Update']() {
                        const _0x480e05 = _0x348ad9;
                        this['enabled'] && (this[_0x480e05(0x16da)] += 0.001, this[_0x480e05(0x12ec)][_0x480e05(0x858)]((_0x159f9f, _0x4b58e9) => {
                            _0x159f9f['y'] -= 0xa * this['count'] + 0x1 * _0x4b58e9;
                        }), Phaser['Actions']['WrapInRectangle'](this['shapes'], this[_0x480e05(0x2f7)], 0x48), this[_0x480e05(0x17be)]());
                    } ['Draw']() {
                        const _0x4b6a0b = _0x348ad9;
                        this['graphics'][_0x4b6a0b(0x159)](), this['shapes']['forEach']((_0x39a469, _0x579a8c) => {
                            const _0x16b736 = _0x4b6a0b;
                            this[_0x16b736(0x523)][_0x16b736(0x950)](this[_0x16b736(0x150d)](_0x579a8c), 0.5)['fillCircleShape'](_0x39a469)[_0x16b736(0x8a2)](0x1, 1.3);
                        }, this);
                    } ['Color'](_0x5ad33f) {
                        return _0x5ad33f % 0xf * 0x111100 + _0x5ad33f % 0x5 * 0x33;
                    } ['Show'](_0x280669 = 0x1770, _0x5cbcf9 = 0xffff00) {
                        const _0x2d3e8f = _0x348ad9;
                        this[_0x2d3e8f(0x151c)] = !0x0, this[_0x2d3e8f(0x431)][_0x2d3e8f(0xb34)](_0x5cbcf9), this['showTween1'] = this[_0x2d3e8f(0x6d2)]['tweens'][_0x2d3e8f(0x18bd)]({
                            'targets': [this[_0x2d3e8f(0x523)]],
                            'alpha': 0x1,
                            'duration': 0x12c
                        }), this[_0x2d3e8f(0x1147)] = this[_0x2d3e8f(0x6d2)][_0x2d3e8f(0x12a1)][_0x2d3e8f(0x18bd)]({
                            'targets': [this['background'], this['background2']],
                            'alpha': 0x1,
                            'duration': _0x280669
                        });
                    } ['Hide'](_0x14becb = 0x3e8) {
                        const _0x3b187a = _0x348ad9;
                        this['showTween1'][_0x3b187a(0x48d)](), this[_0x3b187a(0x1147)][_0x3b187a(0x48d)](), this[_0x3b187a(0x6d2)][_0x3b187a(0x12a1)][_0x3b187a(0x18bd)]({
                            'targets': [this['graphics']],
                            'alpha': 0x0,
                            'duration': 0x12c
                        }), this[_0x3b187a(0x6d2)][_0x3b187a(0x12a1)]['add']({
                            'targets': [this['background'], this[_0x3b187a(0x1974)]],
                            'alpha': 0x0,
                            'duration': _0x14becb,
                            'onComplete': () => {
                                const _0x5704f4 = _0x3b187a;
                                this[_0x5704f4(0x151c)] = !0x1;
                            }
                        });
                    }
                }
                _0x507635['BubbleVFX'] = _0x1f54c4, _0x507635['default'] = _0x1f54c4;
            };
