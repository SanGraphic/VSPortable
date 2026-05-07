// Module 0xb24b
// Args: _0x3b5f11, _0x21ae96, _0x44dd24

export default (_0x3b5f11, _0x21ae96, _0x44dd24) => {
                'use strict';
                const _0x52f756 = a0_0x6932;
                var _0x2098c9 = this && this['__importDefault'] || function(_0x29c21a) {
                    return _0x29c21a && _0x29c21a['__esModule'] ? _0x29c21a : {
                        'default': _0x29c21a
                    };
                };
                Object['defineProperty'](_0x21ae96, '__esModule', {
                    'value': !0x0
                });
                const _0x4f5434 = _0x44dd24(0x16c14),
                    _0x290b5e = _0x2098c9(_0x44dd24(0x5f07));
                class _0x234572 extends Phaser['GameObjects']['Container'] {
                    constructor(_0x1bb88a, _0x2f0523, _0x54a8f6) {
                        const _0x149d7c = _0x52f756;
                        super(_0x1bb88a, _0x2f0523, _0x54a8f6), this['background'] = new _0x4f5434[(_0x149d7c(0x1a31))](this['scene'], {
                            'sourceKey': 'UI',
                            'sourceFrame': 'frame1_c2.png',
                            'sourceLayout': {
                                'width': 0xc,
                                'height': 0xc
                            }
                        }, {
                            'x': 0x0,
                            'y': 0x0,
                            'width': 0xc8,
                            'height': 0x50
                        }), this['scene'][_0x149d7c(0x18bd)]['existing'](this['background']), this[_0x149d7c(0x1752)] = this['scene'][_0x149d7c(0x18bd)]['text'](0x64, 0x14, _0x290b5e[_0x149d7c(0xd2c)][_0x149d7c(0x1f1)][_0x149d7c(0xb10)]('seal_header'), {
                            'align': 'left'
                        })[_0x149d7c(0xf8e)](0.5, 0.5)[_0x149d7c(0x8a2)](0x2), _0x290b5e[_0x149d7c(0xd2c)][_0x149d7c(0x1f1)][_0x149d7c(0x14a8)](this['header'], !0x1, 0xb4), this['sealAmount'] = this['scene'][_0x149d7c(0x18bd)]['text'](0x64, this[_0x149d7c(0x1752)]['y'] + 0x20, '', {
                            'align': 'center'
                        })[_0x149d7c(0xf8e)](0.5, 0.5)[_0x149d7c(0x8a2)](0x2), _0x290b5e[_0x149d7c(0xd2c)]['Lang'][_0x149d7c(0x14a8)](this[_0x149d7c(0x17c0)], !0x1, 0xb4), this[_0x149d7c(0x2d0)] = this[_0x149d7c(0x6d2)][_0x149d7c(0x18bd)][_0x149d7c(0x758)](0x64, this[_0x149d7c(0x17c0)]['y'] + 0x40, _0x290b5e[_0x149d7c(0xd2c)][_0x149d7c(0x1f1)][_0x149d7c(0xb10)]('seal_cannot'), {
                            'align': 'center',
                            'color': 'red'
                        })['setOrigin'](0.5, 0.5)['setAlpha'](0x0)['setScale'](0x1), _0x290b5e['default']['Lang']['scaleToMaxFast'](this['warningText'], !0x1, 0xb4), this[_0x149d7c(0x1494)] = this[_0x149d7c(0x6d2)][_0x149d7c(0x18bd)][_0x149d7c(0x568)](this['warningText']['x'], this[_0x149d7c(0x2d0)]['y'], 'UI', 'whiteDot.png')[_0x149d7c(0x8a2)](0xb4, 0x20)['setAlpha'](0x0)[_0x149d7c(0xb4a)](this['warningText']['depth'] - 0x1)['setTint'](0x0), this['add'](this['background']), this[_0x149d7c(0x18bd)](this[_0x149d7c(0x1752)]), this['add'](this[_0x149d7c(0x17c0)]), this['add'](this[_0x149d7c(0x1494)]), this[_0x149d7c(0x18bd)](this[_0x149d7c(0x2d0)]);
                    } ['ShowWarning']() {
                        const _0x45a9a8 = _0x52f756;
                        var _0x154c54;
                        null === (_0x154c54 = this[_0x45a9a8(0x13d9)]) || void 0x0 === _0x154c54 || _0x154c54[_0x45a9a8(0x1a34)](), this[_0x45a9a8(0x13d9)] = this[_0x45a9a8(0x6d2)][_0x45a9a8(0x12a1)]['add']({
                            'targets': [this[_0x45a9a8(0x2d0)], this[_0x45a9a8(0x1494)]],
                            'alpha': 0x0,
                            'duration': 0x3e8,
                            'ease': 'Quint.easeIn',
                            'onStart': () => {
                                const _0x2f36e7 = _0x45a9a8;
                                this[_0x2f36e7(0x2d0)][_0x2f36e7(0xe71)] = 0x1, this[_0x2f36e7(0x1494)][_0x2f36e7(0xe71)] = 0x1;
                            }
                        });
                    } ['UpdateValues']() {
                        const _0x57ef6c = _0x52f756;
                        let _0x568432 = _0x290b5e[_0x57ef6c(0xd2c)]['Core'][_0x57ef6c(0x14d8)][_0x57ef6c(0x1707)]['length'] + _0x290b5e['default']['Core']['PlayerOptions']['SealedWeapons'][_0x57ef6c(0xed9)],
                            _0xccf9da = _0x290b5e[_0x57ef6c(0xd2c)][_0x57ef6c(0x1043)]['PlayerOptions'][_0x57ef6c(0x71f)];
                        this[_0x57ef6c(0x17c0)][_0x57ef6c(0x14d6)](_0x568432 + '/' + _0xccf9da), _0x290b5e['default']['Lang']['scaleToMaxFast'](this[_0x57ef6c(0x17c0)], !0x1, 0xb4), 0x0 === _0xccf9da && this['setVisible'](!0x1);
                    }
                }
                _0x21ae96['default'] = _0x234572;
            };
