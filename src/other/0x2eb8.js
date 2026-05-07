// Module 0x2eb8
// Args: _0x12c9a0, _0x198252, _0x400e98

export default (_0x12c9a0, _0x198252, _0x400e98) => {
                'use strict';
                const _0x7626cd = a0_0x6932;
                var _0x210c9f = this && this['__importDefault'] || function(_0x1bd447) {
                    return _0x1bd447 && _0x1bd447['__esModule'] ? _0x1bd447 : {
                        'default': _0x1bd447
                    };
                };
                Object['defineProperty'](_0x198252, '__esModule', {
                    'value': !0x0
                });
                const _0x404e47 = _0x210c9f(_0x400e98(0x136b9)),
                    _0x4cc680 = _0x210c9f(_0x400e98(0x1fd7)),
                    _0x43ecc0 = _0x210c9f(_0x400e98(0x54e3)),
                    _0x390b39 = _0x210c9f(_0x400e98(0x5f07)),
                    _0x265498 = _0x210c9f(_0x400e98(0x869f));
                class _0x53c450 extends _0x265498['default'] {
                    ['LevelUp']() {
                        const _0x4c3442 = _0x7626cd;
                        super['LevelUp']();
                        let _0x3887fd = Math[_0x4c3442(0xe07)](this[_0x4c3442(0x5e3)] / 0xa),
                            _0x1ad17a = _0x390b39['default'][_0x4c3442(0x1043)][_0x4c3442(0x164d)]['find'](_0xff50c0 => _0xff50c0[_0x4c3442(0x14e)] === _0x43ecc0[_0x4c3442(0xd2c)]['BOCCE']);
                        _0x1ad17a && _0x1ad17a['level'] < _0x3887fd && _0x1ad17a[_0x4c3442(0x5e3)] < 0x8 && _0x1ad17a['LevelUp']();
                    } ['GetDamaged'](_0x474233 = 0x1, _0x23431a = _0x404e47['default']['NONE'], _0x1c3b6b = 0x1) {
                        const _0x1e7aac = _0x7626cd;
                        return this[_0x1e7aac(0x44b)] = !0x0, super['GetDamaged'](_0x474233, _0x23431a, _0x1c3b6b);
                    } ['OnStop']() {
                        const _0x1870e8 = _0x7626cd;
                        this[_0x1870e8(0x748)][_0x1870e8(0x1631)](), this[_0x1870e8(0x9b5)](0x0);
                    } ['Update'](_0x3204c4) {
                        const _0x282fae = _0x7626cd;
                        super[_0x282fae(0xa9f)](_0x3204c4), _0x390b39[_0x282fae(0xd2c)][_0x282fae(0x1043)]['SurvivedSeconds'] >= _0x390b39[_0x282fae(0xd2c)][_0x282fae(0x1043)][_0x282fae(0x17c7)]['StageModifiers'][_0x282fae(0xa9b)] && _0x390b39[_0x282fae(0xd2c)][_0x282fae(0x1043)]['Player'][_0x282fae(0x1534)]();
                    } ['OnDeath']() {
                        const _0x2e2360 = _0x7626cd;
                        var _0x5b50be;
                        null === (_0x5b50be = this[_0x2e2360(0xfff)]) || void 0x0 === _0x5b50be || _0x5b50be[_0x2e2360(0x16ca)](), this[_0x2e2360(0x748)][_0x2e2360(0x1631)](), this['setTintFill'](0xbbffff), this['scene']['tweens'][_0x2e2360(0x18bd)]({
                            'targets': this,
                            'scaleX': 0x2,
                            'duration': 0x2ee,
                            'ease': 'Linear',
                            'onUpdate': () => {}
                        }), this['scene']['tweens'][_0x2e2360(0x18bd)]({
                            'targets': this,
                            'delay': 0x2ee,
                            'scaleX': 0x0,
                            'duration': 0x64,
                            'ease': 'Linear'
                        }), this[_0x2e2360(0x6d2)][_0x2e2360(0x12a1)][_0x2e2360(0x18bd)]({
                            'targets': this,
                            'scaleY': 0.5,
                            'duration': 0x2ee,
                            'ease': 'Linear'
                        }), this[_0x2e2360(0x6d2)][_0x2e2360(0x12a1)][_0x2e2360(0x18bd)]({
                            'targets': this,
                            'delay': 0x2ee,
                            'scaleY': 0x8,
                            'duration': 0x64,
                            'ease': 'Linear',
                            'onStart': () => {
                                const _0xa205e8 = _0x2e2360;
                                _0x390b39[_0xa205e8(0xd2c)]['Sound']['PlaySound'](_0x4cc680[_0xa205e8(0xd2c)]['Victory2'], {
                                    'volume': 0x2
                                });
                            }
                        }), _0x390b39['default']['Core']['scene']['time']['addEvent']({
                            'delay': 0x4e2,
                            'loop': !0x1,
                            'callback': () => {
                                const _0x46cc8e = _0x2e2360;
                                this[_0x46cc8e(0xfb6)] ? _0x390b39['default']['Core'][_0x46cc8e(0x69e)]['FinalStageGameOver']() : _0x390b39['default']['Core']['SceneManager'][_0x46cc8e(0x92a)]();
                            }
                        });
                    }
                }
                _0x198252['default'] = _0x53c450;
            };
