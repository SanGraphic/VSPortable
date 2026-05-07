// Module 0xe109
// Args: _0x36fb43, _0x31cdbc, _0x2abf8c

export default (_0x36fb43, _0x31cdbc, _0x2abf8c) => {
                'use strict';
                const _0x50c368 = a0_0x6932;
                var _0x426f59 = this && this['__importDefault'] || function(_0x12232b) {
                    const _0x5af463 = a0_0x6932;
                    return _0x12232b && _0x12232b['__esModule'] ? _0x12232b : {
                        'default': _0x12232b
                    };
                };
                Object['defineProperty'](_0x31cdbc, '__esModule', {
                    'value': !0x0
                }), _0x31cdbc['CharWeaponsPanel'] = void 0x0;
                const _0x31dde5 = _0x2abf8c(0x16c14),
                    _0x519ddc = _0x426f59(_0x2abf8c(0x54e3)),
                    _0x258941 = _0x426f59(_0x2abf8c(0x3107)),
                    _0x152172 = _0x426f59(_0x2abf8c(0x5103)),
                    _0x4ab00a = _0x426f59(_0x2abf8c(0x5f07));
                class _0x349aad extends Phaser['GameObjects']['Container'] {
                    constructor(_0xbb1e53, _0x5bf519, _0x387ac1, _0x366c0e, _0x1a88d0) {
                        const _0x568e55 = _0x50c368;
                        super(_0xbb1e53, _0x5bf519, _0x387ac1), this[_0x568e55(0x673)] = _0x366c0e, this['buttonHeight'] = _0x1a88d0, this['setScale'](_0x152172['default']['PixelScale']);
                        let _0x1a4e05 = _0x4ab00a['default']['Core']['Weapons']['filter'](_0x265569 => !_0x265569[_0x568e55(0xc1c)]),
                            _0xa51479 = _0x4ab00a['default']['Core'][_0x568e55(0x506)][_0x568e55(0x9d4)](_0x49b875 => _0x49b875[_0x568e55(0xc1c)]),
                            _0x38577f = _0x4ab00a[_0x568e55(0xd2c)]['Core'][_0x568e55(0x164d)]['find'](_0x856e7 => _0x856e7[_0x568e55(0x14e)] === _0x519ddc['default'][_0x568e55(0x655)]);
                        _0x38577f && _0xa51479[_0x568e55(0x1564)](_0x38577f);
                        let _0x49fd36 = _0x4ab00a['default'][_0x568e55(0x1043)][_0x568e55(0x164d)]['find'](_0x3f5a2c => _0x3f5a2c[_0x568e55(0x14e)] === _0x519ddc[_0x568e55(0xd2c)][_0x568e55(0x1c8)]);
                        _0x49fd36 && _0xa51479[_0x568e55(0x1564)](_0x49fd36);
                        for (let _0x662c17 = 0x0; _0x662c17 < _0x1a4e05[_0x568e55(0xed9)]; _0x662c17++) {
                            const _0x2ea09d = _0x1a4e05[_0x662c17];
                            let _0x5e1f36 = _0x258941[_0x568e55(0xd2c)][_0x2ea09d['bulletType']][0x0],
                                _0x754f74 = new Phaser['GameObjects']['Image'](this[_0x568e55(0x6d2)], 0x14 + _0x662c17 % 0x6 * 0x20, 0x14 + 0x40 * Math[_0x568e55(0xe07)](_0x662c17 / 0x6), 'UI', 'weaponBG.png')[_0x568e55(0x8a2)](0x2)[_0x568e55(0xb34)](_0x2ea09d['level'] >= _0x5e1f36[_0x568e55(0xed9)] ? 0xffff00 : 0xffffff),
                                _0x3aa058 = new Phaser['GameObjects'][(_0x568e55(0x1951))](this[_0x568e55(0x6d2)], _0x754f74['x'], _0x754f74['y'], _0x5e1f36[_0x568e55(0x174d)], _0x5e1f36[_0x568e55(0x8e3)])[_0x568e55(0x8a2)](0x2);
                            this[_0x568e55(0x18bd)](_0x754f74), this[_0x568e55(0x18bd)](_0x3aa058);
                            let _0x353513 = _0x4ab00a[_0x568e55(0xd2c)][_0x568e55(0x1043)][_0x568e55(0x506)][_0x568e55(0x1e6)](_0x2f5c51 => _0x2f5c51[_0x568e55(0x14e)] === _0x2ea09d[_0x568e55(0x14e)]);
                            if (_0x353513 && _0x353513[_0x568e55(0xe28)] > 0x0) {
                                let _0x6702d7 = new Phaser['GameObjects'][(_0x568e55(0x1ae9))](this['scene'], _0x754f74['x'], _0x754f74['y'] + 0x14 + 0x8, (_0x353513[_0x568e55(0x5e3)] + _0x353513['limitBreakLevel'])[_0x568e55(0xcc6)](), {
                                    'align': 'center'
                                })[_0x568e55(0x8a2)](0x1)[_0x568e55(0x1804)](0x2, 0x2, '#000', 0x1, !0x0, !0x0)[_0x568e55(0xf8e)](0.5)['setTint'](0xfaff95);
                                _0x4ab00a['default']['Lang']['scaleToMaxFast'](_0x6702d7, !0x1, 0x18), this[_0x568e55(0x18bd)](_0x6702d7);
                            } else {
                                let _0x47f62f = _0x4ab00a['default'][_0x568e55(0x1043)]['LevelUpFactory'][_0x568e55(0x1033)]['indexOf'](_0x2ea09d[_0x568e55(0x14e)]) > -0x1;
                                for (let _0x16038b = 0x0; _0x16038b < _0x258941['default'][_0x2ea09d[_0x568e55(0x14e)]]['length']; _0x16038b++) {
                                    let _0x5dbc10 = _0x2ea09d[_0x568e55(0x5e3)] <= _0x16038b ? 'weaponLevelEmpty.png' : 'weaponLevelFull.png';
                                    _0x2ea09d[_0x568e55(0x5e3)] <= _0x16038b && _0x47f62f && (_0x5dbc10 = 'weaponLevelBanished.png');
                                    let _0x2094dc = new Phaser['GameObjects'][(_0x568e55(0x1951))](this[_0x568e55(0x6d2)], _0x754f74['x'] - 0x8 + _0x16038b % 0x3 * 0x8, _0x754f74['y'] + 0x14 + 0x8 * Math['floor'](_0x16038b / 0x3), 'UI', _0x5dbc10)['setScale'](0x1);
                                    this['add'](_0x2094dc);
                                }
                            }
                        }
                        let _0x2fcbbf = 0x14 + 0x40 * Math['ceil'](_0x1a4e05[_0x568e55(0xed9)] / 0x6),
                            _0x580c97 = _0xa51479['find'](_0xce6624 => _0xce6624['bulletType'] === _0x519ddc[_0x568e55(0xd2c)]['LEFT']),
                            _0x4014e5 = _0xa51479[_0x568e55(0x1e6)](_0x542ce2 => _0x542ce2[_0x568e55(0x14e)] === _0x519ddc[_0x568e55(0xd2c)]['RIGHT']);
                        if (_0x580c97 && _0x4014e5) {
                            let _0x3975be = _0xa51479[_0x568e55(0x1303)](_0x4014e5);
                            if (_0x3975be > -0x1) {
                                let _0x41374b = _0xa51479[_0x568e55(0x16ea)](_0x3975be, 0x1);
                                _0xa51479[_0x568e55(0x2f9)](_0x41374b[0x0]);
                                let _0x72c0ab = _0xa51479[_0x568e55(0x1303)](_0x580c97);
                                if (_0x72c0ab > -0x1) {
                                    let _0x36a21b = _0xa51479['splice'](_0x72c0ab, 0x1);
                                    _0xa51479[_0x568e55(0x2f9)](_0x36a21b[0x0]);
                                }
                            }
                        }
                        for (let _0x5c866f = 0x0; _0x5c866f < _0xa51479[_0x568e55(0xed9)]; _0x5c866f++) {
                            const _0x2108b3 = _0xa51479[_0x5c866f];
                            let _0x1d59e0 = _0x258941[_0x568e55(0xd2c)][_0x2108b3['bulletType']][0x0],
                                _0x4fad4d = new Phaser['GameObjects'][(_0x568e55(0x1951))](this[_0x568e55(0x6d2)], 0x14 + _0x5c866f % 0x6 * 0x20, _0x2fcbbf + 0x40 * Math['floor'](_0x5c866f / 0x6), 'UI', 'passiveBG.png')[_0x568e55(0x8a2)](0x2)['setTint'](_0x2108b3['level'] >= _0x1d59e0[_0x568e55(0xed9)] ? 0xffff00 : 0xffffff),
                                _0x165bcd = new Phaser['GameObjects']['Image'](this['scene'], _0x4fad4d['x'], _0x4fad4d['y'], _0x1d59e0[_0x568e55(0x174d)], _0x1d59e0['frameName'])['setScale'](0x2);
                            this[_0x568e55(0x18bd)](_0x4fad4d), this[_0x568e55(0x18bd)](_0x165bcd);
                            let _0x3ae3a7 = _0x4ab00a[_0x568e55(0xd2c)][_0x568e55(0x1043)]['LevelUpFactory']['BanishedWeapons'][_0x568e55(0x1303)](_0x2108b3['bulletType']) > -0x1;
                            for (let _0x2b95c2 = 0x0; _0x2b95c2 < _0x258941['default'][_0x2108b3['bulletType']][_0x568e55(0xed9)]; _0x2b95c2++) {
                                let _0x34578d = _0x2108b3['level'] <= _0x2b95c2 ? 'weaponLevelEmpty.png' : 'weaponLevelFull.png';
                                _0x2108b3['level'] <= _0x2b95c2 && _0x3ae3a7 && (_0x34578d = 'weaponLevelBanished.png');
                                let _0x5af773 = new Phaser['GameObjects']['Image'](this[_0x568e55(0x6d2)], _0x4fad4d['x'] - 0x8 + _0x2b95c2 % 0x3 * 0x8, _0x4fad4d['y'] + 0x14 + 0x8 * Math[_0x568e55(0xe07)](_0x2b95c2 / 0x3), 'UI', _0x34578d)['setScale'](0x1);
                                this['add'](_0x5af773);
                            }
                        }
                        var _0x2cac7f = {
                            'x': 0x0,
                            'y': 0x0,
                            'width': this[_0x568e55(0x673)],
                            'height': 0x40 * Math[_0x568e55(0xdeb)](_0x1a4e05[_0x568e55(0xed9)] / 0x6) + 0x40 * Math[_0x568e55(0xdeb)](_0xa51479['length'] / 0x6)
                        };
                        this['Background'] = new _0x31dde5['NineSlice'](this['scene'], {
                            'sourceKey': 'UI',
                            'sourceFrame': 'frame1_c2.png',
                            'sourceLayout': {
                                'width': 0xc,
                                'height': 0xc
                            }
                        }, _0x2cac7f), this[_0x568e55(0x14b7)][_0x568e55(0xdab)](0.75), this['addAt'](this[_0x568e55(0x14b7)], 0x0);
                    } ['Open']() {
                        const _0x49c35f = _0x50c368;
                        this[_0x49c35f(0x8a2)](0x0), this['OnEnterTween'] = this['scene']['tweens']['add']({
                            'targets': this,
                            'scale': 0x1,
                            'duration': 0xc8
                        });
                    } ['OnClick']() {}
                }
                _0x31cdbc['CharWeaponsPanel'] = _0x349aad, _0x31cdbc['default'] = _0x349aad;
            };
