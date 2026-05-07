// Module 0x7dc5
// Args: _0xa93b44, _0x3e12c3, _0x100b1a

export default (_0xa93b44, _0x3e12c3, _0x100b1a) => {
                'use strict';
                const _0x3ea0f7 = a0_0x6932;
                var _0x4376d4 = this && this['__importDefault'] || function(_0x3c4e89) {
                    return _0x3c4e89 && _0x3c4e89['__esModule'] ? _0x3c4e89 : {
                        'default': _0x3c4e89
                    };
                };
                Object['defineProperty'](_0x3e12c3, '__esModule', {
                    'value': !0x0
                }), _0x3e12c3['Fake_GoldFever'] = void 0x0;
                const _0x30791a = _0x100b1a(0x18304),
                    _0x7c253d = _0x4376d4(_0x100b1a(0x6036));
                class _0x1daf79 extends _0x7c253d['default'] {
                    ['EnterUI']() {
                        const _0x146727 = _0x3ea0f7;
                        var _0x9ab229, _0x4552bd, _0x442283;
                        null === (_0x9ab229 = this[_0x146727(0x581)]) || void 0x0 === _0x9ab229 || _0x9ab229[_0x146727(0x1a34)](), null === (_0x4552bd = this['exitTween2']) || void 0x0 === _0x4552bd || _0x4552bd[_0x146727(0x1a34)](), this[_0x146727(0xafa)]['setVisible'](!0x0), this['progressBox']['setVisible'](!0x0), this[_0x146727(0x62d)][_0x146727(0x183f)](!0x0)['setAlpha'](0x1)[_0x146727(0x8a2)](0.5, 0x1), this[_0x146727(0x62d)]['x'] = this[_0x146727(0x6d2)]['renderer'][_0x146727(0x173c)] - 0x40, this[_0x146727(0x62d)]['y'] = this['scene'][_0x146727(0x12f9)][_0x146727(0x140e)] - 0xc, this[_0x146727(0x6d2)][_0x146727(0x12a1)]['add']({
                            'targets': this['title'],
                            'x': 0x48,
                            'scaleX': 0x1,
                            'alpha': 0x1,
                            'duration': 0x190,
                            'ease': 'Sine.easeInOut',
                            'onComplete': () => {}
                        }), this[_0x146727(0x145a)][_0x146727(0x183f)](!0x0)['setAlpha'](0x1)[_0x146727(0x8a2)](0x1), this[_0x146727(0x145a)]['x'] = this['scene']['renderer'][_0x146727(0x173c)] - 0x40, this[_0x146727(0x145a)]['y'] = this['scene'][_0x146727(0x12f9)]['height'] - 0xc, this['scene']['tweens'][_0x146727(0x18bd)]({
                            'targets': this[_0x146727(0x145a)],
                            'x': this[_0x146727(0x6d2)][_0x146727(0x12f9)]['width'] - 0x8,
                            'scaleX': 0x1,
                            'alpha': 0x1,
                            'duration': 0x190,
                            'ease': 'Sine.easeInOut',
                            'onComplete': () => {}
                        }), this['totalText'][_0x146727(0x183f)](!0x0), this['totalText']['x'] = 0.5 * this[_0x146727(0x6d2)]['renderer'][_0x146727(0x173c)], this[_0x146727(0x17a8)]['y'] = this[_0x146727(0x6d2)][_0x146727(0x12f9)][_0x146727(0x140e)] - 0x9, this['totalText']['setScale'](0x1)[_0x146727(0xdab)](0x0), this[_0x146727(0x6d2)][_0x146727(0x12a1)][_0x146727(0x18bd)]({
                            'targets': [this[_0x146727(0x17a8)], this['progressBar'], this['progressBox']],
                            'alpha': 0x1,
                            'duration': 0x190,
                            'ease': 'Sine.easeInOut'
                        }), this[_0x146727(0x24c)]['y'] = this['scene']['renderer'][_0x146727(0x140e)] + 0x12, this['scene']['tweens']['add']({
                            'targets': [this['progressBox']],
                            'y': this[_0x146727(0x6d2)]['renderer'][_0x146727(0x140e)] - 0x12,
                            'duration': 0x190,
                            'ease': 'Sine.easeInOut'
                        }), this[_0x146727(0x199f)][_0x146727(0x1aa2)](), this[_0x146727(0x5e7)]['setFrame']('whiteFog.png'), this[_0x146727(0x5e7)][_0x146727(0x183f)](!0x0), this[_0x146727(0x5e7)][_0x146727(0xdab)](0.05), null === (_0x442283 = this[_0x146727(0xc4f)]) || void 0x0 === _0x442283 || _0x442283['stop'](), this['fogTween'] = this[_0x146727(0x6d2)][_0x146727(0x12a1)]['add']({
                            'targets': this[_0x146727(0x5e7)],
                            'alpha': 0.15,
                            'duration': 0x1f4,
                            'ease': 'Sine.easeInOut',
                            'repeat': -0x1,
                            'yoyo': !0x0
                        }), this[_0x146727(0x5e7)][_0x146727(0x11c7)](_0x30791a[_0x146727(0x10fc)][_0x146727(0x1811)]), this[_0x146727(0x5e7)][_0x146727(0xdab)](0x0), this[_0x146727(0x5e7)][_0x146727(0xf8e)](0.5), this[_0x146727(0x5e7)][_0x146727(0x726)](0.5 * this['scene'][_0x146727(0x12f9)]['width'], 0.5 * this[_0x146727(0x6d2)]['renderer'][_0x146727(0x140e)]);
                    } ['Update'](_0xba1188) {
                        const _0xb440d6 = _0x3ea0f7;
                        if (!this[_0xb440d6(0x2c8)]) return;
                        this[_0xb440d6(0x559)] += _0xba1188, this[_0xb440d6(0xb78)] += _0xba1188 * this[_0xb440d6(0xb08)], this['totalTime'] >= this['durationInMS'] && (this[_0xb440d6(0xb78)] = 0x0, this[_0xb440d6(0x2c8)] = !0x1, this[_0xb440d6(0xa0b)] = 0x0, this[_0xb440d6(0x2a0)](), this[_0xb440d6(0x12cf)]()), this[_0xb440d6(0xafa)]['clear'](), this[_0xb440d6(0xafa)][_0xb440d6(0x950)](0xffcc22, 0x1);
                        const _0x172ba0 = this[_0xb440d6(0x6d2)][_0xb440d6(0x12f9)]['width'] - 0x8,
                            _0x4d5194 = (0x1 - this['totalTime'] / this[_0xb440d6(0xa0b)]) * _0x172ba0;
                        this[_0xb440d6(0xafa)][_0xb440d6(0x11fe)](0x4, this['scene'][_0xb440d6(0x12f9)]['height'] - 0x12 + 0x4, Math['min'](_0x4d5194, _0x172ba0), this[_0xb440d6(0x12e8)]), this['title']['scaleX'] = this['title']['scaleY'] = this[_0xb440d6(0x10db)](this['title']['scaleX'], 0x1, 0.001 * _0xba1188), this[_0xb440d6(0x62d)][_0xb440d6(0x1721)] *= -0x1, this['totalText'][_0xb440d6(0x3a8)] = this[_0xb440d6(0x17a8)][_0xb440d6(0x1721)] = this['Approach'](this['totalText'][_0xb440d6(0x3a8)], 0x1, 0.001 * _0xba1188), this['lengthText'][_0xb440d6(0x758)] = this[_0xb440d6(0x1434)](this[_0xb440d6(0x559)] * (0x64 * Math[_0xb440d6(0x9ad)]()));
                    }
                }
                _0x3e12c3['Fake_GoldFever'] = _0x1daf79, _0x3e12c3['default'] = _0x1daf79;
            };
