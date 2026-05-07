// Module 0x9bfc
// Args: _0x3d43fc, _0xc854fa, _0x37176f

export default (_0x3d43fc, _0xc854fa, _0x37176f) => {
                'use strict';
                const _0x5e0de8 = a0_0x6932;
                var _0x1e2ceb = this && this['__createBinding'] || (Object['create'] ? function(_0x14fd84, _0x93e1c6, _0x3419ac, _0x2584aa) {
                        const _0x293870 = _0x5e0de8;
                        void 0x0 === _0x2584aa && (_0x2584aa = _0x3419ac);
                        var _0x5af7df = Object[_0x293870(0x1687)](_0x93e1c6, _0x3419ac);
                        _0x5af7df && !('get' in _0x5af7df ? !_0x93e1c6['__esModule'] : _0x5af7df[_0x293870(0x11bf)] || _0x5af7df[_0x293870(0xf70)]) || (_0x5af7df = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x93e1c6[_0x3419ac];
                            }
                        }), Object['defineProperty'](_0x14fd84, _0x2584aa, _0x5af7df);
                    } : function(_0x38eff3, _0x1b9bdf, _0x727203, _0x22ce09) {
                        void 0x0 === _0x22ce09 && (_0x22ce09 = _0x727203), _0x38eff3[_0x22ce09] = _0x1b9bdf[_0x727203];
                    }),
                    _0x1c2712 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x44ecde, _0x8d4d38) {
                        Object['defineProperty'](_0x44ecde, 'default', {
                            'enumerable': !0x0,
                            'value': _0x8d4d38
                        });
                    } : function(_0x42ad4d, _0x4a18ec) {
                        const _0x27a3ed = _0x5e0de8;
                        _0x42ad4d[_0x27a3ed(0xd2c)] = _0x4a18ec;
                    }),
                    _0x29a8ab = this && this['__importStar'] || function(_0x1a2285) {
                        const _0x3d9efa = _0x5e0de8;
                        if (_0x1a2285 && _0x1a2285[_0x3d9efa(0x16f1)]) return _0x1a2285;
                        var _0x584e0b = {};
                        if (null != _0x1a2285) {
                            for (var _0x39cb26 in _0x1a2285) 'default' !== _0x39cb26 && Object[_0x3d9efa(0x977)][_0x3d9efa(0x2cf)]['call'](_0x1a2285, _0x39cb26) && _0x1e2ceb(_0x584e0b, _0x1a2285, _0x39cb26);
                        }
                        return _0x1c2712(_0x584e0b, _0x1a2285), _0x584e0b;
                    },
                    _0x3108dc = this && this['__importDefault'] || function(_0x392140) {
                        return _0x392140 && _0x392140['__esModule'] ? _0x392140 : {
                            'default': _0x392140
                        };
                    };
                Object['defineProperty'](_0xc854fa, '__esModule', {
                    'value': !0x0
                }), _0xc854fa['CollectionWeaponMagician'] = _0xc854fa['PopupData'] = void 0x0;
                const _0x45581f = _0x37176f(0x16c14),
                    _0x26dc87 = _0x3108dc(_0x37176f(0xccae)),
                    _0x543857 = _0x29a8ab(_0x37176f(0x5f07)),
                    _0x2de959 = _0x3108dc(_0x37176f(0x1715a)),
                    _0x7bfa1 = _0x3108dc(_0x37176f(0x5103));
                _0xc854fa['PopupData'] = class {};
                class _0x331997 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x565881, _0x169b3c, _0x567740) {
                        const _0x2ae4dd = _0x5e0de8;
                        super(_0x565881, _0x169b3c, _0x567740), this['setScale'](_0x7bfa1[_0x2ae4dd(0xd2c)][_0x2ae4dd(0x15db)]);
                        var _0x215913 = {
                                'x': 0x0,
                                'y': 0x0,
                                'width': 0.96 * _0x543857[_0x2ae4dd(0x1086)],
                                'height': 0x68
                            },
                            _0xeecc84 = 0.96 * _0x543857[_0x2ae4dd(0x1086)] * 0.5;
                        _0x543857[_0x2ae4dd(0x1086)], this['Background'] = new _0x45581f[(_0x2ae4dd(0x1a31))](this[_0x2ae4dd(0x6d2)], _0x26dc87[_0x2ae4dd(0xd2c)][_0x2ae4dd(0x3af)], _0x215913), this[_0x2ae4dd(0x197e)] = new Phaser['GameObjects'][(_0x2ae4dd(0x1951))](this['scene'], 0x34, 0x34, 'UI', 'frameB.png')['setOrigin'](0.5)[_0x2ae4dd(0x8a2)](0x2 * _0x7bfa1[_0x2ae4dd(0xd2c)][_0x2ae4dd(0x15db)])[_0x2ae4dd(0x183f)](!0x1), this[_0x2ae4dd(0xc89)] = new Phaser['GameObjects'][(_0x2ae4dd(0x1ae9))](this['scene'], _0xeecc84, 0x34, _0x543857['default']['Lang'][_0x2ae4dd(0xb10)]('genericPopup_name'), {
                            'color': 'yellow'
                        })['setScale'](_0x7bfa1[_0x2ae4dd(0xd2c)][_0x2ae4dd(0x15db)])['setOrigin'](0.5, 0.5), _0x543857[_0x2ae4dd(0xd2c)]['Lang'][_0x2ae4dd(0x14a8)](this[_0x2ae4dd(0xc89)], !0x1, 0x12c), this['add']([this[_0x2ae4dd(0x14b7)], this['myOverlay'], this['myName']]), this['ShowTween'] = this[_0x2ae4dd(0x6d2)][_0x2ae4dd(0x12a1)][_0x2ae4dd(0x18bd)]({
                            'targets': this,
                            'scaleY': _0x7bfa1['default']['PixelScale'],
                            'duration': 0x12c,
                            'paused': !0x0
                        }), this['HideTween'] = this[_0x2ae4dd(0x6d2)][_0x2ae4dd(0x12a1)][_0x2ae4dd(0x18bd)]({
                            'targets': this,
                            'scaleY': 0x0,
                            'duration': 0x12c,
                            'paused': !0x0
                        }), this[_0x2ae4dd(0x1721)] = 0x0, _0x2de959['default'][_0x2ae4dd(0x8c7)](this);
                    } ['Show']() {
                        const _0x242894 = _0x5e0de8;
                        this['ShowTween']['resume'](), this[_0x242894(0x148b)][_0x242894(0x1374)]();
                    } ['Hide']() {
                        const _0x4f6138 = _0x5e0de8;
                        this[_0x4f6138(0x71b)]['resume'](), this[_0x4f6138(0x71b)]['restart']();
                    } ['AssignMessage'](_0x240582) {
                        const _0x3fef42 = _0x5e0de8;
                        this['myName']['text'] = _0x240582, _0x543857['default']['Lang'][_0x3fef42(0x14a8)](this[_0x3fef42(0xc89)], !0x1, 0x12c);
                    }
                }
                _0xc854fa['CollectionWeaponMagician'] = _0x331997, _0xc854fa['default'] = _0x331997;
            };
