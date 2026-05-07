// Module 0xaddc
// Args: _0x54ffe4, _0xa2c9d7, _0x5603e8

export default (_0x54ffe4, _0xa2c9d7, _0x5603e8) => {
                'use strict';
                const _0x3709a6 = a0_0x6932;
                var _0x3699e5 = this && this['__importDefault'] || function(_0x579d25) {
                    const _0x4cf455 = _0x3709a6;
                    return _0x579d25 && _0x579d25[_0x4cf455(0x16f1)] ? _0x579d25 : {
                        'default': _0x579d25
                    };
                };
                Object['defineProperty'](_0xa2c9d7, '__esModule', {
                    'value': !0x0
                });
                const _0x429b1d = _0x3699e5(_0x5603e8(0x15abc)),
                    _0x30bfe2 = _0x3699e5(_0x5603e8(0x5103)),
                    _0x59a6e7 = _0x3699e5(_0x5603e8(0x5f07)),
                    _0x1877e1 = _0x3699e5(_0x5603e8(0x1166a));
                class _0x4e5430 extends _0x1877e1['default'] {
                    constructor() {
                        const _0x2efe59 = _0x3709a6;
                        super(...arguments), this['keepMoving'] = 0x1, this[_0x2efe59(0x1468)] = 0xc350, this['fireDelay'] = 0x7d0, this[_0x2efe59(0xec2)] = 0x0, this[_0x2efe59(0x294)] = !0x1;
                    } ['GetDamaged'](_0x1d5393, _0x176714, _0xb80b54, _0x2462c9) {
                        const _0xe5917e = _0x3709a6;
                        this['isRotating'] || (this['isRotating'] = !0x0, this['startRotate']()), super[_0xe5917e(0x1112)](_0x1d5393, _0x176714, _0xb80b54, _0x2462c9);
                    } ['startRotate']() {
                        const _0xda2d67 = _0x3709a6;
                        var _0x5d9d08;
                        this[_0xda2d67(0x78e)] += 0x28;
                        let _0x11281a = 0x2 * _0x429b1d['default'][this['enemyType']][0x0]['speed'];
                        this['speed'] > _0x11281a && (this[_0xda2d67(0x78e)] = _0x11281a), null === (_0x5d9d08 = this['RotateTween']) || void 0x0 === _0x5d9d08 || _0x5d9d08[_0xda2d67(0x1374)]();
                    } ['OnRecycle']() {
                        const _0x4fb695 = _0x3709a6;
                        super['OnRecycle'](), this[_0x4fb695(0x294)] = !0x1, this['setOrigin'](0.5), this['speed'] = _0x429b1d['default'][this['enemyType']][0x0]['speed'], this['RotateTween'] || (this[_0x4fb695(0xe4e)] = this[_0x4fb695(0x6d2)]['tweens'][_0x4fb695(0x18bd)]({
                            'duration': 0x12c,
                            'targets': this,
                            'angle': -0x168,
                            'ease': 'Sine.easeOut',
                            'onComplete': () => {
                                const _0x2f5725 = _0x4fb695;
                                this['isRotating'] = !0x1, (!this['FixedDirection'] || this['FixedDirection'] && 0x0 == this['_currentDirection']['x'] && 0x0 == this[_0x2f5725(0x70d)]['y']) && (this['_currentDirection']['x'] = this['target']['x'] - this['x'], this['_currentDirection']['y'] = this[_0x2f5725(0x18a7)]['y'] - this['y'], this[_0x2f5725(0x70d)][_0x2f5725(0x183b)]());
                            }
                        })), this['RotateTween']['stop']();
                    } ['Update'](_0x505b9c = 0x0) {
                        const _0x2698cb = _0x3709a6;
                        if (this['isDead']) return;
                        if (this[_0x2698cb(0x16c6)] = this['y'] - _0x59a6e7[_0x2698cb(0xd2c)][_0x2698cb(0x1043)]['Player']['y'], this[_0x2698cb(0x14a3)]) return;
                        this['isRotating'] || ((!this[_0x2698cb(0x197a)] || this['FixedDirection'] && 0x0 == this['_currentDirection']['x'] && 0x0 == this[_0x2698cb(0x70d)]['y']) && (this['_currentDirection']['x'] = this['target']['x'] - this['x'], this[_0x2698cb(0x70d)]['y'] = this[_0x2698cb(0x18a7)]['y'] - this['y'], this['_currentDirection']['normalize']()), this[_0x2698cb(0x9b5)](_0x1877e1[_0x2698cb(0xd2c)][_0x2698cb(0x1404)][this[_0x2698cb(0x3bf)]][_0x2698cb(0xd96)]));
                        let _0xbf857f = this['receivingDamage'] ? -this['knockback'] * this[_0x2698cb(0x25d)] : 0x1;
                        this[_0x2698cb(0xb8d)](this['_currentDirection']['x'] > 0x0);
                        let _0x211108 = this['keepMoving'] * _0x30bfe2['default']['EnemySpeed'] * this['speed'] * _0xbf857f * this[_0x2698cb(0x13fb)];
                        this[_0x2698cb(0x19c8)](_0x211108 * this[_0x2698cb(0x70d)]['x'], _0x211108 * this['_currentDirection']['y']);
                    }
                }
                _0xa2c9d7['default'] = _0x4e5430;
            };
