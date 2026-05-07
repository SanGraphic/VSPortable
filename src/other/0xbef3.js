// Module 0xbef3
// Args: _0x3ba647, _0x1f3d38, _0x50d51d

export default (_0x3ba647, _0x1f3d38, _0x50d51d) => {
                'use strict';
                const _0x5c72b1 = a0_0x6932;
                var _0x598e0c = this && this['__importDefault'] || function(_0x5649f9) {
                    return _0x5649f9 && _0x5649f9['__esModule'] ? _0x5649f9 : {
                        'default': _0x5649f9
                    };
                };
                Object['defineProperty'](_0x1f3d38, '__esModule', {
                    'value': !0x0
                });
                const _0x2db52d = _0x598e0c(_0x50d51d(0x1400f)),
                    _0xc3b6b2 = Phaser['Renderer']['WebGL']['Pipelines']['PostFXPipeline'],
                    _0x5aa264 = Phaser['Utils']['Objects']['GetValue'],
                    _0x47ce25 = Phaser['Math']['Clamp'];
                _0x1f3d38['default'] = class extends _0xc3b6b2 {
                    constructor(_0x3ac584) {
                        const _0x58797e = _0x5c72b1;
                        super({
                            'name': 'rexInversePostFx',
                            'game': _0x3ac584,
                            'renderTarget': !0x0,
                            'fragShader': _0x2db52d[_0x58797e(0xd2c)]
                        }), this[_0x58797e(0x75c)] = 0x1, this[_0x58797e(0x1634)] = 0x0, this[_0x58797e(0xcac)] = 0x0, this[_0x58797e(0x161a)] = 0x0;
                    } ['resetFromJSON'](_0x3abec8) {
                        const _0x467613 = _0x5c72b1;
                        return this[_0x467613(0xe47)](_0x5aa264(_0x3abec8, 'radius', 0x0)), this['setCenter'](_0x5aa264(_0x3abec8, 'center.x', void 0x0), _0x5aa264(_0x3abec8, 'center.y', void 0x0)), this['setIntensity'](_0x5aa264(_0x3abec8, 'intensity', 0x1)), this;
                    } ['onPreRender']() {
                        const _0x2130b4 = _0x5c72b1;
                        this[_0x2130b4(0x75f)]('intensity', this[_0x2130b4(0x75c)]), this[_0x2130b4(0x75f)]('radius', this['radius']);
                        var _0x894208 = this[_0x2130b4(0x12f9)]['width'],
                            _0x303398 = this[_0x2130b4(0x12f9)][_0x2130b4(0x140e)];
                        this['set2f']('center', this[_0x2130b4(0x1634)], _0x303398 - this['centerY']), this['set2f']('texSize', _0x894208, _0x303398);
                    }
                    get['intensity']() {
                        const _0x18740e = _0x5c72b1;
                        return this[_0x18740e(0x75c)];
                    }
                    set['intensity'](_0x7f11f5) {
                        this['_intensity'] = _0x47ce25(_0x7f11f5, 0x0, 0x1);
                    } ['setIntensity'](_0x5e0ce9) {
                        return this['intensity'] = _0x5e0ce9, this;
                    } ['setRadius'](_0x4829e5) {
                        const _0x3a59c8 = _0x5c72b1;
                        return this[_0x3a59c8(0x161a)] = _0x4829e5, this;
                    } ['setCenter'](_0x218479, _0x29740f) {
                        const _0x46cdcb = _0x5c72b1;
                        return void 0x0 === _0x218479 && (_0x218479 = this['renderer'][_0x46cdcb(0x173c)] / 0x2, _0x29740f = this[_0x46cdcb(0x12f9)][_0x46cdcb(0x140e)] / 0x2), this[_0x46cdcb(0x1634)] = _0x218479, this[_0x46cdcb(0xcac)] = _0x29740f, this;
                    }
                };
            };
