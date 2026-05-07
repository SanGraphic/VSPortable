// Module 0x9ab5
// Args: _0x593167, _0x3c185e, _0x2e3055

export default (_0x593167, _0x3c185e, _0x2e3055) => {
                'use strict';
                const _0x45f903 = a0_0x6932;
                var _0x504a47 = this && this['__createBinding'] || (Object['create'] ? function(_0x39d758, _0x472067, _0x4aa72f, _0x5ddefd) {
                        const _0x2331d3 = _0x45f903;
                        void 0x0 === _0x5ddefd && (_0x5ddefd = _0x4aa72f);
                        var _0x5e73c0 = Object[_0x2331d3(0x1687)](_0x472067, _0x4aa72f);
                        _0x5e73c0 && !('get' in _0x5e73c0 ? !_0x472067['__esModule'] : _0x5e73c0['writable'] || _0x5e73c0[_0x2331d3(0xf70)]) || (_0x5e73c0 = {
                            'enumerable': !0x0,
                            'get': function() {
                                return _0x472067[_0x4aa72f];
                            }
                        }), Object['defineProperty'](_0x39d758, _0x5ddefd, _0x5e73c0);
                    } : function(_0x588212, _0x1b0cbf, _0x2946a9, _0x13fd1a) {
                        void 0x0 === _0x13fd1a && (_0x13fd1a = _0x2946a9), _0x588212[_0x13fd1a] = _0x1b0cbf[_0x2946a9];
                    }),
                    _0x123e37 = this && this['__setModuleDefault'] || (Object['create'] ? function(_0x5ee0a0, _0x56c78a) {
                        Object['defineProperty'](_0x5ee0a0, 'default', {
                            'enumerable': !0x0,
                            'value': _0x56c78a
                        });
                    } : function(_0xb3c811, _0x4ba6ab) {
                        const _0x1b93e0 = _0x45f903;
                        _0xb3c811[_0x1b93e0(0xd2c)] = _0x4ba6ab;
                    }),
                    _0x214760 = this && this['__importStar'] || function(_0x5360fd) {
                        const _0xd95616 = _0x45f903;
                        if (_0x5360fd && _0x5360fd['__esModule']) return _0x5360fd;
                        var _0x5e4660 = {};
                        if (null != _0x5360fd) {
                            for (var _0x55cd6c in _0x5360fd) 'default' !== _0x55cd6c && Object['prototype'][_0xd95616(0x2cf)]['call'](_0x5360fd, _0x55cd6c) && _0x504a47(_0x5e4660, _0x5360fd, _0x55cd6c);
                        }
                        return _0x123e37(_0x5e4660, _0x5360fd), _0x5e4660;
                    },
                    _0x37a1ed = this && this['__importDefault'] || function(_0x1d643a) {
                        return _0x1d643a && _0x1d643a['__esModule'] ? _0x1d643a : {
                            'default': _0x1d643a
                        };
                    };
                Object['defineProperty'](_0x3c185e, '__esModule', {
                    'value': !0x0
                }), _0x3c185e['B_Song'] = void 0x0;
                const _0x5e3bf7 = _0x37a1ed(_0x2e3055(0xa14d)),
                    _0x589519 = _0x2e3055(0x18304),
                    _0x1416d4 = _0x214760(_0x2e3055(0x5f07)),
                    _0x4cf4ce = _0x37a1ed(_0x2e3055(0x1fd7));
                class _0x35e643 extends _0x5e3bf7['default'] {
                    constructor(_0x477dcf, _0xbac3d2, _0x132bec, _0xe212eb, _0x44bc22) {
                        const _0x10eafa = _0x45f903;
                        super(_0x477dcf, _0xbac3d2, _0x132bec, 'vfx', 'WhiteDot.png', _0xe212eb, _0x44bc22), this[_0x10eafa(0xaf6)] = 0.5, this['fadeOutDelay'] = 0x2ee, this[_0x10eafa(0xd64)] = 0x0, this[_0x10eafa(0x5b8)] = 0x12c, this['isBroken'] = !0x1, this[_0x10eafa(0x1df)]();
                    } ['OnRecycle']() {
                        const _0x2fd46a = _0x45f903;
                        var _0x11b01e;
                        this[_0x2fd46a(0x183f)](!0x1), super['OnRecycle'](), this[_0x2fd46a(0x8a2)](0x0), this['body']['enable'] = !0x0, this[_0x2fd46a(0x177d)] = !0x1, _0x1416d4[_0x2fd46a(0xd2c)][_0x2fd46a(0x1043)][_0x2fd46a(0x6d2)]['time'][_0x2fd46a(0x17fb)](this['HitboxTimer']), _0x1416d4['default'][_0x2fd46a(0x1043)][_0x2fd46a(0x6d2)]['time'][_0x2fd46a(0x17fb)](this[_0x2fd46a(0x12a3)]), this['HitboxTimer'] = _0x1416d4['default'][_0x2fd46a(0x1043)][_0x2fd46a(0x6d2)][_0x2fd46a(0x915)]['addEvent']({
                            'delay': this[_0x2fd46a(0x4a1)][_0x2fd46a(0xcd5)],
                            'loop': !0x0,
                            'callback': () => {
                                this['objectsHit'] = [];
                            }
                        }), this[_0x2fd46a(0x8b9)]['name'] = 'SM Hitbox', null === (_0x11b01e = this[_0x2fd46a(0xd35)]) || void 0x0 === _0x11b01e || _0x11b01e['stop'](), this[_0x2fd46a(0xd35)] = _0x1416d4['default'][_0x2fd46a(0x1043)]['scene'][_0x2fd46a(0x12a1)]['add']({
                            'targets': this,
                            'scaleX': 0x20 * this['weapon']['PArea'],
                            'scaleY': _0x1416d4['GAMEPLAY_PIXEL_HEIGHT'],
                            'duration': 0x1f4
                        }), this['weapon']['PArea'] >= 1.5 && this[_0x2fd46a(0x13af)][_0x2fd46a(0x3fe)][_0x2fd46a(0xed9)] < 0xc8 && (this[_0x2fd46a(0xf21)](this['blitter'], 0x64), this[_0x2fd46a(0xf21)](this[_0x2fd46a(0xdc8)], 0x64)), this[_0x2fd46a(0x4a1)]['PArea'] >= 0x2 && this['blitter'][_0x2fd46a(0x3fe)][_0x2fd46a(0xed9)] < 0x12c && (this['AddBobs'](this['blitter'], 0x64), this[_0x2fd46a(0xf21)](this[_0x2fd46a(0xdc8)], 0x64)), this[_0x2fd46a(0x4a1)][_0x2fd46a(0x5f5)] >= 2.5 && this['blitter'][_0x2fd46a(0x3fe)][_0x2fd46a(0xed9)] < 0x1f4 && (this[_0x2fd46a(0xf21)](this['blitter'], 0xc8), this[_0x2fd46a(0xf21)](this[_0x2fd46a(0xdc8)], 0xc8)), this[_0x2fd46a(0x4a1)][_0x2fd46a(0x5f5)] >= 0x3 && this['blitter'][_0x2fd46a(0x3fe)][_0x2fd46a(0xed9)] < 0x3e8 && (this[_0x2fd46a(0xf21)](this[_0x2fd46a(0x13af)], 0x64), this[_0x2fd46a(0xf21)](this[_0x2fd46a(0xdc8)], 0x64)), this[_0x2fd46a(0x186d)] = !0x1, this[_0x2fd46a(0x525)](), _0x1416d4['default']['Sound'][_0x2fd46a(0x7f6)](_0x4cf4ce[_0x2fd46a(0xd2c)][_0x2fd46a(0x1d4)], {
                            'volume': 0.4,
                            'detune': 0x1f4 * Math['random']()
                        }, 0x96, 0x3);
                    } ['DeSpawn']() {
                        const _0x10d675 = _0x45f903;
                        this[_0x10d675(0x177d)] = !0x0, _0x1416d4[_0x10d675(0xd2c)][_0x10d675(0x1043)][_0x10d675(0x6d2)]['time'][_0x10d675(0x17fb)](this['HitboxTimer']), _0x1416d4[_0x10d675(0xd2c)][_0x10d675(0x1043)][_0x10d675(0x6d2)]['time'][_0x10d675(0x17fb)](this['ExpireTimer']), super['DeSpawn']();
                    } ['Update'](_0x145228) {
                        const _0x17cf62 = _0x45f903;
                        super[_0x17cf62(0xa9f)](_0x145228), this['x'] = _0x1416d4[_0x17cf62(0xd2c)]['Core']['Player']['x'], this['y'] = _0x1416d4['default'][_0x17cf62(0x1043)][_0x17cf62(0x10f6)]['y'];
                        let _0x5c6e2e = 0.5 * this['scene']['renderer']['width'] + 0x10 * this['weapon']['PArea'],
                            _0x44cbcb = 0.5 * this[_0x17cf62(0x6d2)][_0x17cf62(0x12f9)][_0x17cf62(0x173c)] - 0x10 * this['weapon'][_0x17cf62(0x5f5)],
                            _0x23723f = -0.25 * this[_0x17cf62(0x6d2)]['renderer']['height'],
                            _0x48ba4e = 1.25 * this[_0x17cf62(0x6d2)]['renderer'][_0x17cf62(0x140e)];
                        this['isBroken'] && (_0x5c6e2e = this[_0x17cf62(0x6d2)]['renderer'][_0x17cf62(0x173c)], _0x44cbcb = 0x0), this[_0x17cf62(0xb66)](this[_0x17cf62(0x13af)], _0x5c6e2e, _0x44cbcb, _0x23723f, _0x48ba4e), this[_0x17cf62(0xb66)](this['blitterBG'], _0x5c6e2e, _0x44cbcb, _0x23723f, _0x48ba4e);
                    } ['BlitterBounce'](_0x4686e9, _0x548371, _0x3a7957, _0x1eef78, _0x3cafc1) {
                        const _0x13173c = _0x45f903;
                        for (var _0x2a9c3f = 0x0, _0x21a124 = _0x4686e9['children'][_0x13173c(0x1a2e)][_0x13173c(0xed9)]; _0x2a9c3f < _0x21a124; ++_0x2a9c3f) {
                            var _0x582de4 = _0x4686e9['children'][_0x13173c(0x1a2e)][_0x2a9c3f];
                            _0x582de4['y'] += _0x582de4[_0x13173c(0x928)]['vy'], _0x582de4['x'] += _0x582de4[_0x13173c(0x928)]['vx'], _0x582de4['x'] > _0x548371 ? (_0x582de4['x'] = _0x548371, _0x582de4['data']['vx'] *= -_0x582de4[_0x13173c(0x928)][_0x13173c(0x130d)]) : _0x582de4['x'] < _0x3a7957 && (_0x582de4['x'] = _0x3a7957, _0x582de4[_0x13173c(0x928)]['vx'] *= -_0x582de4['data'][_0x13173c(0x130d)]), _0x582de4['y'] > _0x3cafc1 && (_0x582de4['y'] = _0x3cafc1, _0x582de4[_0x13173c(0x928)]['vy'] *= -_0x582de4[_0x13173c(0x928)]['bounce']), _0x582de4['y'] < _0x1eef78 && (_0x582de4['y'] = _0x1eef78, _0x582de4[_0x13173c(0x928)]['vy'] *= -_0x582de4[_0x13173c(0x928)][_0x13173c(0x130d)]);
                        }
                    } ['Shoot']() {
                        const _0x190376 = _0x45f903;
                        var _0x374edc;
                        this['blitter']['setDepth'](_0x1416d4['default'][_0x190376(0x1043)]['Player'][_0x190376(0x16c6)] + _0x1416d4[_0x190376(0xd2c)]['Core'][_0x190376(0x6d2)][_0x190376(0x12f9)]['height']), this[_0x190376(0xdc8)]['setDepth'](_0x1416d4[_0x190376(0xd2c)]['Core']['Player']['depth'] - this[_0x190376(0x6d2)]['renderer']['height']), this[_0x190376(0x13af)][_0x190376(0xdab)](0x1), this['blitterBG']['setAlpha'](0x1), this[_0x190376(0xe93)](this[_0x190376(0x13af)]), this[_0x190376(0xe93)](this[_0x190376(0xdc8)]), null === (_0x374edc = this['FadeOutTimer']) || void 0x0 === _0x374edc || _0x374edc['destroy'](), this['FadeOutTimer'] = this[_0x190376(0x6d2)][_0x190376(0x915)][_0x190376(0x12b8)]({
                            'delay': this[_0x190376(0x4a1)][_0x190376(0x16c3)],
                            'callback': () => {
                                const _0x5d230d = _0x190376;
                                var _0x5ecfce;
                                this[_0x5d230d(0x186d)] = !0x0, this[_0x5d230d(0xcf9)]['enable'] = !0x1, null === (_0x5ecfce = this[_0x5d230d(0x993)]) || void 0x0 === _0x5ecfce || _0x5ecfce[_0x5d230d(0x1a34)](), this[_0x5d230d(0x993)] = _0x1416d4[_0x5d230d(0xd2c)][_0x5d230d(0x1043)]['scene']['tweens'][_0x5d230d(0x18bd)]({
                                    'targets': [this['blitter'], this[_0x5d230d(0xdc8)]],
                                    'alpha': 0x0,
                                    'duration': 0x3e8,
                                    'onComplete': () => {
                                        const _0x208078 = _0x5d230d;
                                        this['CheckExplodeOnExpire'](), this[_0x208078(0x14fb)]();
                                    }
                                });
                            }
                        });
                    } ['CheckExplodeOnExpire']() {} ['UpdateBlitter'](_0x4ce54d, _0x2531c2 = 0x1) {
                        const _0x479d1d = _0x45f903;
                        for (var _0x364fb9 = 0x0; _0x364fb9 < _0x4ce54d['children']['list'][_0x479d1d(0xed9)]; ++_0x364fb9) {
                            var _0x445e01 = _0x4ce54d['children']['list'][_0x364fb9];
                            let _0x2fe961 = Math['random']() * Math['PI'] * 0x2;
                            _0x445e01[_0x479d1d(0x928)]['vx'] = 0.5 * (0x1 + _0x364fb9 % 0x7) * Math['sin'](_0x2fe961) * _0x2531c2, _0x445e01['data']['vy'] = 0x5 * Math[_0x479d1d(0xd7e)](_0x2fe961) * _0x2531c2, _0x445e01['data'][_0x479d1d(0x130d)] = 0.8 + 0.2 * Math[_0x479d1d(0x9ad)](), _0x445e01['x'] = 0.5 * this['scene'][_0x479d1d(0x12f9)][_0x479d1d(0x173c)], _0x445e01['y'] = 0.5 * this['scene'][_0x479d1d(0x12f9)][_0x479d1d(0x140e)];
                        }
                    } ['MakeBlitters']() {
                        const _0x96f29e = _0x45f903;
                        this[_0x96f29e(0x13af)] = this[_0x96f29e(0x6d2)]['add']['blitter'](0x0, 0x0, 'vfx'), this['AddBobs'](this[_0x96f29e(0x13af)], 0x64), this[_0x96f29e(0x13af)][_0x96f29e(0xd87)](0x0), this['blitter'][_0x96f29e(0xdab)](0x0), this[_0x96f29e(0x13af)]['setBlendMode'](_0x589519[_0x96f29e(0x10fc)]['ADD']), this['blitterBG'] = this['scene']['add']['blitter'](0x0, 0x0, 'vfx'), this['AddBobs'](this[_0x96f29e(0xdc8)], 0x64), this['blitterBG'][_0x96f29e(0xd87)](0x0), this[_0x96f29e(0xdc8)]['setAlpha'](0x0), this[_0x96f29e(0xdc8)][_0x96f29e(0x11c7)](_0x589519['BlendModes']['ADD']);
                    } ['AddBobs'](_0x2f75b1, _0x4c2087) {
                        const _0x27d997 = _0x45f903;
                        for (var _0x3143b4 = 0x0; _0x3143b4 < _0x4c2087; ++_0x3143b4) {
                            let _0x5d6454 = Math[_0x27d997(0x9ad)]() * Math['PI'];
                            var _0x3dbb1e = _0x2f75b1[_0x27d997(0x6a8)](0x0, 0x0, ['PfxPink.png', 'PfxYellow.png', 'PfxBlue.png'][_0x3143b4 % 0x3]);
                            _0x3dbb1e[_0x27d997(0x928)]['vx'] = 0x2 * Math['sin'](_0x5d6454), _0x3dbb1e[_0x27d997(0x928)]['vy'] = 0xa * Math['cos'](_0x5d6454), _0x3dbb1e['data']['bounce'] = 0x1 + 0.2 * Math['random'](), _0x3dbb1e[_0x27d997(0xe71)] = 0.5, _0x3dbb1e['x'] = 0.5 * this['scene']['renderer']['width'], _0x3dbb1e['y'] = 0.5 * this[_0x27d997(0x6d2)]['renderer'][_0x27d997(0x140e)];
                        }
                    }
                }
                _0x3c185e['B_Song'] = _0x35e643, _0x3c185e['default'] = _0x35e643;
            };
