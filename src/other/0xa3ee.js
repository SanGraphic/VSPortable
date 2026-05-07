// Module 0xa3ee
// Args: _0xda0b58, _0x1f92f6, _0x237adc

export default (_0xda0b58, _0x1f92f6, _0x237adc) => {
                'use strict';
                const _0x2c4e03 = a0_0x6932;
                var _0xb8f09a = this && this['__importDefault'] || function(_0x357ff2) {
                    const _0x1873bf = a0_0x6932;
                    return _0x357ff2 && _0x357ff2['__esModule'] ? _0x357ff2 : {
                        'default': _0x357ff2
                    };
                };
                Object['defineProperty'](_0x1f92f6, '__esModule', {
                    'value': !0x0
                });
                const _0x3c3766 = _0xb8f09a(_0x237adc(0x136b9)),
                    _0x25ef83 = _0xb8f09a(_0x237adc(0x54e3)),
                    _0x39ab9d = _0xb8f09a(_0x237adc(0x5f07)),
                    _0x5e7e0f = _0xb8f09a(_0x237adc(0x1166a));
                class _0x49e6a0 extends _0x5e7e0f['default'] {
                    constructor() {
                        const _0x22819b = _0x2c4e03;
                        super(...arguments), this[_0x22819b(0x14c7)] = 0x1, this['duration'] = 0x157c, this[_0x22819b(0x13af)] = null, this[_0x22819b(0xd64)] = 0x0, this['fadeOutDelay'] = 0x3e8, this['gravity'] = 0x0;
                    } ['OnRecycle']() {
                        const _0x785df9 = _0x2c4e03;
                        super[_0x785df9(0x5ce)](), this['isCullable'] = !0x1, this['setScale'](0x1), this[_0x785df9(0xf8e)](0.5, 0x0), this['body'][_0x785df9(0x18dc)](0x1, 0x1), this['alpha'] = 0.2, this[_0x785df9(0xb34)](0xeeeeff), this[_0x785df9(0x8a2)](1.1 * this[_0x785df9(0x6d2)][_0x785df9(0x12f9)][_0x785df9(0x173c)], this[_0x785df9(0x6d2)]['renderer'][_0x785df9(0x140e)]), this[_0x785df9(0x13af)] || this[_0x785df9(0x14b6)](), this[_0x785df9(0xb49)] = 0x0;
                    } ['GetDamaged'](_0x37078b = 0x1, _0x23ad69 = _0x3c3766['default']['DEFAULT'], _0x1245a6 = 0x1, _0x34a87c = _0x25ef83['default']['VOID']) {} ['Dismiss']() {
                        const _0x1aa235 = _0x2c4e03;
                        this['scene'][_0x1aa235(0x12a1)][_0x1aa235(0x18bd)]({
                            'targets': [this, this[_0x1aa235(0x13af)]],
                            'alpha': 0x0,
                            'duration': 0x1f4,
                            'onComplete': () => {
                                const _0xda8cc9 = _0x1aa235;
                                this[_0xda8cc9(0x14fb)]();
                            }
                        });
                    } ['Update'](_0x3de5fe = 0x0) {
                        const _0x2d5614 = _0x2c4e03;
                        super[_0x2d5614(0xa9f)](_0x3de5fe), this['angle'] = 0x0, this['depth'] = 0xbb8, this[_0x2d5614(0x13af)]['depth'] = 0xbb8, this['elapsed'] += _0x3de5fe, this[_0x2d5614(0xb49)] > 0x3e8 && _0x39ab9d['default'][_0x2d5614(0x1043)][_0x2d5614(0x10f6)]['y'] > this['y'] && (_0x39ab9d[_0x2d5614(0xd2c)][_0x2d5614(0x1043)][_0x2d5614(0x10f6)]['GetDamaged'](this[_0x2d5614(0x31f)]), this[_0x2d5614(0xb49)] = 0x320), this[_0x2d5614(0x14a3)] || this[_0x2d5614(0xe93)](_0x3de5fe);
                    } ['UpdateBlitter'](_0x57a532) {
                        const _0x31c290 = _0x2c4e03;
                        for (var _0x426cba = 0x0, _0x17fa8f = this[_0x31c290(0x13af)][_0x31c290(0x3fe)][_0x31c290(0x1a2e)][_0x31c290(0xed9)]; _0x426cba < _0x17fa8f; ++_0x426cba) {
                            var _0x51f8f5 = this['blitter'][_0x31c290(0x3fe)]['list'][_0x426cba];
                            _0x51f8f5[_0x31c290(0x928)]['vy'] += this['gravity'], _0x51f8f5['y'] += _0x51f8f5['data']['vy'], _0x51f8f5['x'] += _0x51f8f5[_0x31c290(0x928)]['vx'], _0x51f8f5['x'] > this['x'] + this['body']['halfWidth'] ? (_0x51f8f5['x'] = this['x'] + this['body']['halfWidth'], _0x51f8f5['data']['vx'] *= -_0x51f8f5[_0x31c290(0x928)][_0x31c290(0x130d)]) : _0x51f8f5['x'] < this['x'] - this[_0x31c290(0xcf9)]['halfWidth'] && (_0x51f8f5['x'] = this['x'] - this['body']['halfWidth'], _0x51f8f5[_0x31c290(0x928)]['vx'] *= -_0x51f8f5[_0x31c290(0x928)]['bounce']), _0x51f8f5['y'] > this['y'] + this['body'][_0x31c290(0x140e)] ? (_0x51f8f5['y'] = this['y'] + this['body'][_0x31c290(0x140e)], _0x51f8f5[_0x31c290(0x928)]['vy'] *= -_0x51f8f5[_0x31c290(0x928)][_0x31c290(0x130d)]) : _0x51f8f5['y'] < this['y'] && (_0x51f8f5['y'] = this['y'], _0x51f8f5[_0x31c290(0x928)]['vy'] *= -_0x51f8f5[_0x31c290(0x928)]['bounce']);
                        }
                    } ['makeBlitters']() {
                        const _0x5715ad = _0x2c4e03;
                        this[_0x5715ad(0x13af)] = this[_0x5715ad(0x6d2)]['add'][_0x5715ad(0x13af)](0x0, 0x0, 'vfx');
                        let _0x34014b = [],
                            _0x51f5ba = [];
                        for (var _0x5bfbd3 = 0x0; _0x5bfbd3 < 0x1f4; ++_0x5bfbd3)(_0x26ce1d = this[_0x5715ad(0x13af)]['create'](0x0, 0x0, ['HitBlue1.png', 'HitBlue2.png', 'HitCloud1.png'][_0x5bfbd3 % 0x3]))['data']['vx'] = 0xf * (Math[_0x5715ad(0x9ad)]() - 0.5), _0x26ce1d[_0x5715ad(0x928)]['vy'] = 0xa * (Math['random']() - 0.5), _0x26ce1d[_0x5715ad(0x928)][_0x5715ad(0x130d)] = 0x1, _0x26ce1d[_0x5715ad(0xe71)] = 0.5, _0x26ce1d['x'] = this['x'], _0x26ce1d['y'] = this['y'] + 0xc, _0x34014b[_0x5715ad(0x1564)](_0x26ce1d);
                        for (_0x5bfbd3 = 0x0; _0x5bfbd3 < 0x1f4; ++_0x5bfbd3)(_0x26ce1d = this[_0x5715ad(0x13af)]['create'](0x0, 0x0, ['HitBlue1.png', 'HitBlue2.png', 'HitCloud1.png'][_0x5bfbd3 % 0x3]))['data']['vx'] = 0xf * (Math['random']() - 0.5), _0x26ce1d['data']['vy'] = 0xa * (Math['random']() - 0.5), _0x26ce1d[_0x5715ad(0x928)]['bounce'] = 0x1, _0x26ce1d[_0x5715ad(0xe71)] = 0.5, _0x26ce1d['x'] = this['x'], _0x26ce1d['y'] = this['y'] + 0xc, _0x51f5ba[_0x5715ad(0x1564)](_0x26ce1d);
                        for (_0x5bfbd3 = 0x0; _0x5bfbd3 < 0x1f4; ++_0x5bfbd3) {
                            var _0x26ce1d;
                            (_0x26ce1d = this[_0x5715ad(0x13af)][_0x5715ad(0x6a8)](0x0, 0x0, ['bubble.png'][_0x5bfbd3 % 0x1]))['data']['vx'] = 0x5 * (Math['random']() - 0.5), _0x26ce1d[_0x5715ad(0x928)]['vy'] = 0x5 * (Math[_0x5715ad(0x9ad)]() - 0.5), _0x26ce1d['data']['bounce'] = 0x1, _0x26ce1d['alpha'] = 0.4, _0x26ce1d['x'] = this['x'], _0x26ce1d['y'] = this['y'] + 0xc;
                        }
                        this[_0x5715ad(0xe43)] = this[_0x5715ad(0x6d2)]['tweens'][_0x5715ad(0x18bd)]({
                            'targets': _0x34014b,
                            'alpha': 0.1,
                            'duration': 0x7d0,
                            'ease': 'Sine.easeInOut',
                            'repeat': -0x1,
                            'yoyo': !0x0
                        });
                    } ['Disappear']() {
                        this['isDead'] = !0x0;
                    }
                }
                _0x1f92f6['default'] = _0x49e6a0;
            };
