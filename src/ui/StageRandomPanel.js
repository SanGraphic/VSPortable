// Module 0x11cb2
// Args: _0x40f062, _0x5d3583, _0x440544

export default (_0x40f062, _0x5d3583, _0x440544) => {
                'use strict';
                const _0x2261e3 = a0_0x6932;
                var _0x8b01a = this && this['__createBinding'] || (Object['create'] ? function(_0x2bebfe, _0x542adc, _0x5b7b56, _0x3ee049) {
                        const _0x588afc = _0x2261e3;
                        void 0x0 === _0x3ee049 && (_0x3ee049 = _0x5b7b56);
                        var _0x18b694 = Object['getOwnPropertyDescriptor'](_0x542adc, _0x5b7b56);
                        _0x18b694 && !('get' in _0x18b694 ? !_0x542adc['__esModule'] : _0x18b694['writable'] || _0x18b694['configurable']) || (_0x18b694 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x542adc[_0x5b7b56];
                            }
                        }), Object[_0x588afc(0x811)](_0x2bebfe, _0x3ee049, _0x18b694);
                    } : function(_0x14b105, _0x488a86, _0x48dd79, _0x26e74c) {
                        void 0x0 === _0x26e74c && (_0x26e74c = _0x48dd79), _0x14b105[_0x26e74c] = _0x488a86[_0x48dd79];
                    }),
                    _0x511147 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x5f2a91, _0x25a69d) {
                        const _0x51c83a = _0x2261e3;
                        Object[_0x51c83a(0x811)](_0x5f2a91, 'default', {
                            'enumerable': !0x0,
                            'value': _0x25a69d
                        });
                    } : function(_0x2d867b, _0x34df9b) {
                        _0x2d867b['default'] = _0x34df9b;
                    }),
                    _0x46853c = this && this['__importStar'] || function(_0x23f856) {
                        const _0x12e00a = _0x2261e3;
                        if (_0x23f856 && _0x23f856[_0x12e00a(0x16f1)]) return _0x23f856;
                        var _0xf08105 = {};
                        if (null != _0x23f856) {
                            for (var _0x116918 in _0x23f856) 'default' !== _0x116918 && Object['prototype'][_0x12e00a(0x2cf)]['call'](_0x23f856, _0x116918) && _0x8b01a(_0xf08105, _0x23f856, _0x116918);
                        }
                        return _0x511147(_0xf08105, _0x23f856), _0xf08105;
                    },
                    _0x3c9a63 = this && this['__importDefault'] || function(_0x966448) {
                        const _0x4d178f = _0x2261e3;
                        return _0x966448 && _0x966448[_0x4d178f(0x16f1)] ? _0x966448 : {
                            'default': _0x966448
                        };
                    };
                Object['defineProperty'](_0x5d3583, '__esModule', {
                    'value': !0x0
                }), _0x5d3583['StageRandomPanel'] = void 0x0;
                const _0x3a2091 = _0x440544(0x16c14),
                    _0x19cecf = _0x3c9a63(_0x440544(0xccae)),
                    _0x4d9aac = _0x46853c(_0x440544(0x5f07)),
                    _0x397a23 = _0x3c9a63(_0x440544(0x14639)),
                    _0x5d005a = _0x3c9a63(_0x440544(0x5103)),
                    _0x1bd689 = _0x3c9a63(_0x440544(0x1fd7)),
                    _0x52c9c7 = _0x3c9a63(_0x440544(0xc42e)),
                    _0x3e3957 = _0x3c9a63(_0x440544(0x4e02)),
                    _0x586f9e = _0x3c9a63(_0x440544(0x3e51));
                class _0x29d98f extends Phaser['GameObjects']['Container'] {
                    constructor(_0x1f0136, _0x392def, _0x306681, _0x4c6eaa = 0.24 * _0x4d9aac['DEFAULT_WIDTH'] * 0x4, _0x34806c = 0x68) {
                        const _0x573194 = _0x2261e3;
                        super(_0x1f0136, _0x392def, _0x306681), this[_0x573194(0x509)] = !0x1, this['hasRandomLevels'] = !0x1, this[_0x573194(0x8a2)](_0x5d005a['default']['PixelScale']), _0x4d9aac['DEFAULT_WIDTH'];
                        var _0x443df0 = {
                                'x': 0x0,
                                'y': 0x0,
                                'width': _0x4c6eaa,
                                'height': _0x34806c
                            },
                            _0x2934d6 = {
                                'x': 0x0,
                                'y': -0x1e,
                                'width': _0x4c6eaa,
                                'height': 0x20
                            };
                        this[_0x573194(0x509)] = _0x4d9aac[_0x573194(0xd2c)][_0x573194(0x1043)]['PlayerOptions'][_0x573194(0x1481)]['indexOf'](_0x52c9c7[_0x573194(0xd2c)]['RELIC_TRISECTION']) > -0x1, this[_0x573194(0x18ff)] = new _0x3a2091[(_0x573194(0x1a31))](this[_0x573194(0x6d2)], _0x19cecf[_0x573194(0xd2c)][_0x573194(0x3af)], _0x2934d6), this[_0x573194(0x14b7)] = new _0x3a2091[(_0x573194(0x1a31))](this[_0x573194(0x6d2)], _0x19cecf['default'][_0x573194(0x3af)], _0x443df0), this['myName'] = new Phaser['GameObjects']['Text'](this[_0x573194(0x6d2)], 0.5 * _0x4c6eaa, -0x10, _0x4d9aac['default'][_0x573194(0x1f1)]['getLang']('stageConfirm_randomName'), {
                            'align': 'center'
                        })['setScale'](0x1)[_0x573194(0xf8e)](0.5, 0.5)['setVisible'](!0x0), _0x4d9aac[_0x573194(0xd2c)][_0x573194(0x1f1)]['scaleToMaxFast'](this[_0x573194(0xc89)], !0x1, 0xbe), this[_0x573194(0x7f0)] = new Phaser[(_0x573194(0xbf2))][(_0x573194(0x1ae9))](this[_0x573194(0x6d2)], 0.5 * _0x4c6eaa, 0x30, _0x4d9aac['default'][_0x573194(0x1f1)]['getLang']('stageConfirm_twitchIsOn'), {
                            'align': 'center'
                        })['setScale'](0x1)[_0x573194(0xf8e)](0.5, 0.5)[_0x573194(0x183f)](!0x1), _0x4d9aac['default']['Lang']['scaleToMaxFast'](this['twitchNotification'], !0x1, 0xbe), this['RandomEvents_Object'] = new _0x3e3957[(_0x573194(0xd2c))](this['scene'], 0x28, 0x40, 'stageConfirm_randomEvents', _0x52c9c7['default'][_0x573194(0x1179)]), this[_0x573194(0x13a0)](this[_0x573194(0x4ee)]), this['add']([this[_0x573194(0x18ff)], this[_0x573194(0xc89)], this['Background'], this['twitchNotification']][_0x573194(0x16d)](this['RandomEvents_Object'][_0x573194(0x8a1)]()));
                    } ['AssignStage'](_0x2aad60) {
                        const _0x3c0e14 = _0x2261e3;
                        if (this['stageType'] = _0x2aad60, _0x397a23['default'][this['stageType']]) {
                            var _0x5ac478 = _0x397a23['default'][this[_0x3c0e14(0x4ee)]][0x0];
                            this['Background'][_0x3c0e14(0xb34)](0xffffff), _0x4d9aac[_0x3c0e14(0xd2c)]['Lang'][_0x3c0e14(0x14a8)](this['myName'], !0x1, 0xc8), _0x586f9e['default']['isTwitchOn']() ? (this['twitchNotification'][_0x3c0e14(0x183f)](!0x0), this[_0x3c0e14(0xf05)]['SetVisible'](!0x1), this['Background'][_0x3c0e14(0xb34)](0xc0c0c0)) : (this[_0x3c0e14(0xf05)]['SetVisible'](this['hasRandomEvents'] && _0x5ac478[_0x3c0e14(0x18d6)]), _0x5ac478['unlocked'] && this[_0x3c0e14(0x509)] && (this[_0x3c0e14(0xf05)][_0x3c0e14(0xf76)]['removeAllListeners'](), this[_0x3c0e14(0xf05)]['Image_Box'][_0x3c0e14(0x76d)](), this['RandomEvents_Object']['Image_Box']['on']('pointerdown', () => {
                                const _0x305840 = _0x3c0e14;
                                _0x4d9aac[_0x305840(0xd2c)][_0x305840(0x1043)][_0x305840(0x14d8)][_0x305840(0x1994)] = !_0x4d9aac[_0x305840(0xd2c)]['Core'][_0x305840(0x14d8)]['SelectedRandomEvents'], _0x4d9aac[_0x305840(0xd2c)]['Sound']['PlaySound'](_0x4d9aac['default']['Core']['PlayerOptions']['SelectedRandomEvents'] ? _0x1bd689[_0x305840(0xd2c)]['ClickIn'] : _0x1bd689[_0x305840(0xd2c)]['ClickOut']), this['RandomEvents_Object']['Image_Toggle'][_0x305840(0x183f)](!!_0x4d9aac['default'][_0x305840(0x1043)][_0x305840(0x14d8)]['SelectedRandomEvents']), this[_0x305840(0x1a8f)] && this[_0x305840(0x1a8f)]();
                            })));
                        } else console['log'](this['stageType'] + ' not found');
                    } ['hasAnyButton']() {
                        const _0x5dae83 = _0x2261e3;
                        let _0x500297 = _0x586f9e[_0x5dae83(0xd2c)][_0x5dae83(0x156b)]();
                        return this['hasRandomEvents'] && !_0x500297;
                    } ['TurnToStart']() {
                        const _0x3a1960 = _0x2261e3;
                        this[_0x3a1960(0x14b7)]['setTint'](0xffff00);
                    } ['TurnToSelection']() {
                        const _0x5885fb = _0x2261e3;
                        this[_0x5885fb(0x13a0)](this['stageType']);
                    }
                }
                _0x5d3583['StageRandomPanel'] = _0x29d98f, _0x5d3583['default'] = _0x29d98f;
            };
