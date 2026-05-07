// Module 0x173ce
// Args: _0x38fc9c, _0x5cb216, _0x526830

export default (_0x38fc9c, _0x5cb216, _0x526830) => {
                'use strict';
                const _0x11f52d = a0_0x6932;
                var _0x89699b = this && this['__createBinding'] || (Object['create'] ? function(_0x423256, _0x5aec5f, _0x5ba118, _0x25c229) {
                        const _0x50d79d = _0x11f52d;
                        void 0x0 === _0x25c229 && (_0x25c229 = _0x5ba118);
                        var _0x293936 = Object['getOwnPropertyDescriptor'](_0x5aec5f, _0x5ba118);
                        _0x293936 && !('get' in _0x293936 ? !_0x5aec5f['__esModule'] : _0x293936['writable'] || _0x293936[_0x50d79d(0xf70)]) || (_0x293936 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x5aec5f[_0x5ba118];
                            }
                        }), Object['defineProperty'](_0x423256, _0x25c229, _0x293936);
                    } : function(_0x31c98d, _0xd27b28, _0x5917fb, _0x46cf5e) {
                        void 0x0 === _0x46cf5e && (_0x46cf5e = _0x5917fb), _0x31c98d[_0x46cf5e] = _0xd27b28[_0x5917fb];
                    }),
                    _0x4f4d68 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x33b35d, _0x486c89) {
                        const _0xc443c9 = _0x11f52d;
                        Object[_0xc443c9(0x811)](_0x33b35d, 'default', {
                            'enumerable': !0x0,
                            'value': _0x486c89
                        });
                    } : function(_0x477aa2, _0x17683e) {
                        const _0x152af3 = _0x11f52d;
                        _0x477aa2[_0x152af3(0xd2c)] = _0x17683e;
                    }),
                    _0x247e3c = this && this['__importStar'] || function(_0xe1b39a) {
                        const _0x5033fe = _0x11f52d;
                        if (_0xe1b39a && _0xe1b39a['__esModule']) return _0xe1b39a;
                        var _0x522cc0 = {};
                        if (null != _0xe1b39a) {
                            for (var _0x4c34c3 in _0xe1b39a) 'default' !== _0x4c34c3 && Object[_0x5033fe(0x977)][_0x5033fe(0x2cf)][_0x5033fe(0xff0)](_0xe1b39a, _0x4c34c3) && _0x89699b(_0x522cc0, _0xe1b39a, _0x4c34c3);
                        }
                        return _0x4f4d68(_0x522cc0, _0xe1b39a), _0x522cc0;
                    },
                    _0xcd44e3 = this && this['__importDefault'] || function(_0x128e0b) {
                        const _0x500de6 = _0x11f52d;
                        return _0x128e0b && _0x128e0b[_0x500de6(0x16f1)] ? _0x128e0b : {
                            'default': _0x128e0b
                        };
                    };
                Object['defineProperty'](_0x5cb216, '__esModule', {
                    'value': !0x0
                }), _0x5cb216['CollectionWeaponDescPanel'] = void 0x0;
                const _0x3eac03 = _0x526830(0x16c14),
                    _0x3aa5fd = _0xcd44e3(_0x526830(0xccae)),
                    _0x2aad23 = _0xcd44e3(_0x526830(0x3107)),
                    _0x142dd8 = _0x247e3c(_0x526830(0x5f07)),
                    _0x4a9d53 = _0xcd44e3(_0x526830(0x54e3)),
                    _0x36a411 = _0xcd44e3(_0x526830(0x4d17)),
                    _0x2a5aca = _0xcd44e3(_0x526830(0x5103)),
                    _0x16086f = _0xcd44e3(_0x526830(0x15866));
                class _0xbe0d extends Phaser['GameObjects']['Container'] {
                    constructor(_0x25fae6, _0x1f74d6, _0xbf11c5) {
                        const _0x36c876 = _0x11f52d;
                        super(_0x25fae6, _0x1f74d6, _0xbf11c5), this[_0x36c876(0x31f)] = _0x4a9d53['default'][_0x36c876(0xc48)], this[_0x36c876(0x27d)] = 'Weapon', this['setScale'](_0x2a5aca['default'][_0x36c876(0x15db)]);
                        var _0x5d966d = {
                                'x': 0x0,
                                'y': 0x0,
                                'width': 0.96 * _0x142dd8[_0x36c876(0x1e0)]['width'],
                                'height': 0x68
                            },
                            _0x187572 = 0.96 * _0x142dd8[_0x36c876(0x1e0)]['width'] * 0.5,
                            _0x4008da = 0.96 * _0x142dd8['SAFEAREA'][_0x36c876(0x173c)] * 0.25;
                        this[_0x36c876(0x14b7)] = new _0x3eac03['NineSlice'](this['scene'], _0x3aa5fd[_0x36c876(0xd2c)][_0x36c876(0x3af)], _0x5d966d), this[_0x36c876(0x1a7c)] = new Phaser[(_0x36c876(0xbf2))]['Image'](this[_0x36c876(0x6d2)], 0x34, 0x34, 'UI', 'frameB.png')['setOrigin'](0.5)['setScale'](0x2 * _0x2a5aca['default'][_0x36c876(0x15db)]), this['myWeaponIcon'] = new Phaser['GameObjects']['Image'](this[_0x36c876(0x6d2)], 0x34, 0x34, 'items', '')[_0x36c876(0xf8e)](0.5)['setScale'](0x2 * _0x2a5aca['default']['PixelScale']), this['myName'] = new Phaser['GameObjects']['Text'](this[_0x36c876(0x6d2)], _0x187572, 0x6, _0x142dd8[_0x36c876(0xd2c)][_0x36c876(0x1f1)][_0x36c876(0xb10)]('weaponCollectionPanel_name'), {
                            'color': 'yellow'
                        })['setScale'](_0x2a5aca[_0x36c876(0xd2c)]['PixelScale'])[_0x36c876(0xf8e)](0.5, 0x0), _0x142dd8['default'][_0x36c876(0x1f1)][_0x36c876(0x14a8)](this[_0x36c876(0xc89)], !0x1, 0x12c), this['myDesc'] = new Phaser[(_0x36c876(0xbf2))][(_0x36c876(0x1ae9))](this[_0x36c876(0x6d2)], 0.4 * _0x187572, 0x20, _0x142dd8[_0x36c876(0xd2c)]['Lang']['getLang']('weaponCollectionPanel_description'), {})[_0x36c876(0x8a2)](_0x2a5aca[_0x36c876(0xd2c)]['PixelScale'])['setWordWrapWidth'](3.2 * _0x4008da), this[_0x36c876(0x1069)] = new Phaser['GameObjects'][(_0x36c876(0x1ae9))](this[_0x36c876(0x6d2)], 0.4 * _0x187572, 0x40, _0x142dd8['default']['Lang'][_0x36c876(0xb10)]('weaponCollectionPanel_ignores'), {
                            'color': 'orange'
                        })[_0x36c876(0x8a2)](_0x2a5aca['default'][_0x36c876(0x15db)])[_0x36c876(0x15fb)](3.2 * _0x4008da), this['AssignData'](this[_0x36c876(0x31f)], this[_0x36c876(0x27d)]), this[_0x36c876(0x18bd)]([this[_0x36c876(0x14b7)], this[_0x36c876(0x1a7c)], this[_0x36c876(0x74e)], this['myName'], this[_0x36c876(0x9e7)], this[_0x36c876(0x1069)]]);
                    } ['AssignData'](_0x51ad5b, _0x8b34c5) {
                        const _0x3cc074 = _0x11f52d;
                        var _0x1b3ad0;
                        switch (this['power'] = _0x51ad5b, _0x8b34c5) {
                            case 'Weapon':
                                void 0x0 !== (_0x1b3ad0 = _0x2aad23['default'][this[_0x3cc074(0x31f)]]) && (_0x1b3ad0 = _0x2aad23[_0x3cc074(0xd2c)][this[_0x3cc074(0x31f)]][0x0]);
                                break;
                            case 'Item':
                                _0x1b3ad0 = _0x36a411[_0x3cc074(0xd2c)][this['power']];
                                break;
                            case 'Arcana':
                                _0x1b3ad0 = _0x16086f['default'][this[_0x3cc074(0x31f)]];
                        }
                        const _0x1f0c35 = 'Arcana' === _0x8b34c5 ? _0x1b3ad0[_0x3cc074(0x18d6)] : _0x1b3ad0[_0x3cc074(0xb36)];
                        this['Background']['setTint'](_0x1f0c35 ? 0xffffff : 0x888888), this[_0x3cc074(0xc89)]['text'] = _0x1f0c35 ? _0x1b3ad0[_0x3cc074(0x226)] : '???';
                        let _0x51ac93 = 'Arcana' === _0x8b34c5 ? 'items' : _0x1b3ad0[_0x3cc074(0x174d)];
                        _0x1f0c35 ? this[_0x3cc074(0x74e)][_0x3cc074(0x994)](_0x51ac93, _0x1b3ad0[_0x3cc074(0x8e3)]) : this[_0x3cc074(0x74e)]['setTexture']('items', 'QuestionMark.png'), this[_0x3cc074(0x9e7)]['setText'](_0x1f0c35 ? _0x1b3ad0[_0x3cc074(0x1146)] : _0x142dd8['default'][_0x3cc074(0x1f1)]['getLang']('weaponCollectionPanel_notFound')), this[_0x3cc074(0x1069)][_0x3cc074(0x14d6)](_0x1f0c35 ? _0x1b3ad0[_0x3cc074(0x45e)] : ''), this[_0x3cc074(0x9e7)][_0x3cc074(0x140e)] > 0x1e ? (this[_0x3cc074(0x9e7)]['y'] = 0x1a, this['myTips']['y'] = Math[_0x3cc074(0x1981)](0x40, this['myDesc']['y'] + this['myDesc']['height'])) : (this[_0x3cc074(0x9e7)]['y'] = 0x20, this[_0x3cc074(0x1069)]['y'] = 0x40);
                        var _0x895013 = 0.96 * _0x142dd8[_0x3cc074(0x1e0)]['width'] * 0.25;
                        _0x142dd8[_0x3cc074(0xd2c)]['Lang']['scaleToMaxFast'](this[_0x3cc074(0x9e7)], !0x1, 3.2 * _0x895013, 0x4b), _0x142dd8[_0x3cc074(0xd2c)]['Lang'][_0x3cc074(0x14a8)](this[_0x3cc074(0x1069)], !0x1, 3.2 * _0x895013, 0x28);
                    } ['TurnToSelection']() {
                        const _0x533514 = _0x11f52d;
                        this[_0x533514(0x6e4)](this[_0x533514(0x31f)], this[_0x533514(0x27d)]);
                    }
                }
                _0x5cb216['CollectionWeaponDescPanel'] = _0xbe0d, _0x5cb216['default'] = _0xbe0d;
            };
