// Module 0x136b1
// Args: _0x48f1c3, _0x2d6e6f, _0x4baa8b

export default (_0x48f1c3, _0x2d6e6f, _0x4baa8b) => {
                'use strict';
                const _0x120fb8 = a0_0x6932;
                var _0xf4679f = this && this['__importDefault'] || function(_0x325ce6) {
                    return _0x325ce6 && _0x325ce6['__esModule'] ? _0x325ce6 : {
                        'default': _0x325ce6
                    };
                };
                Object['defineProperty'](_0x2d6e6f, '__esModule', {
                    'value': !0x0
                }), _0x2d6e6f['B_Axe'] = void 0x0;
                const _0x303d0a = _0xf4679f(_0x4baa8b(0xa14d)),
                    _0x34437c = _0xf4679f(_0x4baa8b(0x5f07)),
                    _0x1840d4 = _0xf4679f(_0x4baa8b(0x1fd7)),
                    _0xb9786a = _0xf4679f(_0x4baa8b(0x5103));
                class _0x191ed8 extends _0x303d0a['default'] {
                    constructor(_0x471549, _0xf6bf6c, _0x2a4f45, _0x22fd26, _0x21796e) {
                        const _0x35ae78 = _0x120fb8;
                        super(_0x471549, _0xf6bf6c, _0x2a4f45, 'vfx', 'ProjectileAxe1.png', _0x22fd26, _0x21796e), this['posHistory'] = new Array(), this[_0x35ae78(0x624)] = 0x1, this['historyIndex'] = 0x0, this[_0x35ae78(0xd2f)] = new Phaser[(_0x35ae78(0x24f))]['Vector2'](), this[_0x35ae78(0x1a5e)] = 0x0, this['grav'] = 0.625, this[_0x35ae78(0x8a2)](_0xb9786a[_0x35ae78(0xd2c)]['PixelScale'] * this['weapon'][_0x35ae78(0x5f5)]), this['AngleTween'] = this[_0x35ae78(0x6d2)]['tweens'][_0x35ae78(0x18bd)]({
                            'targets': this,
                            'angle': 0x168,
                            'duration': 0x3e8,
                            'ease': 'Linear',
                            'repeat': -0x1
                        }), this[_0x35ae78(0xafd)] = this[_0x35ae78(0x6d2)][_0x35ae78(0x12a1)]['add']({
                            'targets': this,
                            'moveAngle': Math['PI'],
                            'duration': 0x3e8,
                            'ease': 'Linear'
                        }), this[_0x35ae78(0xbbc)] = new Array();
                        for (let _0x176881 = 0x0; _0x176881 < this['maxHistory']; _0x176881++) {
                            this[_0x35ae78(0x24a)][_0x35ae78(0x1564)](new Phaser['Math'][(_0x35ae78(0x1551))](_0xf6bf6c, _0x2a4f45));
                            var _0x361531 = this['scene'][_0x35ae78(0x18bd)]['image'](0x0, 0x0, this['texture']['key'], this[_0x35ae78(0x670)]['name'])['setScale'](_0xb9786a['default'][_0x35ae78(0x15db)])['setVisible'](!0x1)[_0x35ae78(0xb34)](0xff)[_0x35ae78(0xdab)](0.75 - 0.25 * _0x176881);
                            this['ghosts'][_0x35ae78(0x1564)](_0x361531);
                        }
                    } ['OnRecycle']() {
                        const _0x197218 = _0x120fb8;
                        super['OnRecycle'](), this[_0x197218(0xcf9)]['setCircle'](0xc), this['_speed'] = 0x2, this[_0x197218(0x177d)] = !0x1, this[_0x197218(0x8a2)](_0xb9786a['default'][_0x197218(0x15db)] * this[_0x197218(0x4a1)]['PArea']);
                        const _0x2456b4 = _0x34437c['default'][_0x197218(0x1043)][_0x197218(0x10f6)][_0x197218(0x115d)]['dot'](Phaser[_0x197218(0x24f)]['Vector2'][_0x197218(0x7bf)]) < 0x0 ? -0x1 : 0x1;
                        var _0x30e0d0 = 0x2d * _0x2456b4 / this['weapon'][_0x197218(0x942)] * this[_0x197218(0x19c4)] - 0x5a;
                        this[_0x197218(0xa4e)] = _0x30e0d0, this[_0x197218(0x6d2)]['physics']['velocityFromRotation'](Phaser[_0x197218(0x24f)][_0x197218(0x54d)](_0x30e0d0), this['TrueSpeed'], this['body'][_0x197218(0xf4e)]), this[_0x197218(0xd2f)]['x'] = this['body']['velocity']['x'], this[_0x197218(0xd2f)]['y'] = Math[_0x197218(0x1981)](-0x258, this[_0x197218(0xcf9)]['velocity']['y']);
                        for (let _0xa26bec = 0x0; _0xa26bec < this[_0x197218(0x24a)]['length']; _0xa26bec++) this[_0x197218(0x24a)][_0xa26bec]['x'] = this['x'], this[_0x197218(0x24a)][_0xa26bec]['y'] = this['y'];
                        this[_0x197218(0x1a5e)] = Phaser[_0x197218(0x24f)]['DegToRad'](_0x30e0d0), this[_0x197218(0xafd)] = this[_0x197218(0x6d2)][_0x197218(0x12a1)][_0x197218(0x18bd)]({
                            'targets': this,
                            'moveAngle': Phaser['Math']['DegToRad'](_0x30e0d0 + 0xb4 * _0x2456b4),
                            'duration': 0x5dc,
                            'ease': 'Linear'
                        }), _0x34437c[_0x197218(0xd2c)]['Sound'][_0x197218(0x7f6)](_0x1840d4['default'][_0x197218(0xfcc)], {
                            'detune': -0x64 * this[_0x197218(0x19c4)],
                            'volume': 0.45
                        }, 0xc8, 0xa);
                    } ['DeSpawn']() {
                        const _0x2d6d53 = _0x120fb8;
                        var _0x37b93a, _0x5c32ca;
                        null === (_0x37b93a = this[_0x2d6d53(0xafd)]) || void 0x0 === _0x37b93a || _0x37b93a['stop'](), null === (_0x5c32ca = this['ScaleTween']) || void 0x0 === _0x5c32ca || _0x5c32ca[_0x2d6d53(0x1a34)]();
                        for (let _0x2c890e = 0x0; _0x2c890e < this['ghosts'][_0x2d6d53(0xed9)]; _0x2c890e++) this[_0x2d6d53(0xbbc)][_0x2c890e]['setVisible'](!0x1);
                        super['DeSpawn']();
                    } ['OnHasHitAnObject'](_0x2261fa) {
                        const _0x45ce2a = _0x120fb8;
                        if (!_0x2261fa[_0x45ce2a(0xdae)]) {
                            if (this[_0x45ce2a(0x1b4)] > 0x0) return this[_0x45ce2a(0x1b4)]--, this[_0x45ce2a(0x6d2)][_0x45ce2a(0x1585)][_0x45ce2a(0x18fc)](Phaser[_0x45ce2a(0x24f)]['DegToRad'](this[_0x45ce2a(0xa4e)]), this[_0x45ce2a(0xfbb)], this[_0x45ce2a(0xcf9)][_0x45ce2a(0xf4e)]), this['initialVelocity']['x'] *= -0x1, this[_0x45ce2a(0xd2f)]['y'] = Math['max'](-0x258, this[_0x45ce2a(0xcf9)][_0x45ce2a(0xf4e)]['y']), void(this[_0x45ce2a(0x990)] = []);
                            this['penetrating']--, this[_0x45ce2a(0x3d8)] <= 0x0 && this[_0x45ce2a(0x14fb)]();
                        }
                    } ['getHistoryIndex'](_0x4bf432) {
                        const _0x403263 = _0x120fb8;
                        return this['historyIndex'] + _0x4bf432 >= this[_0x403263(0x624)] ? this[_0x403263(0x1192)] + _0x4bf432 - this[_0x403263(0x624)] : this[_0x403263(0x1192)] + _0x4bf432;
                    } ['Update'](_0x37c10f) {
                        const _0x2680b0 = _0x120fb8;
                        this['initialVelocity']['y'] += _0x37c10f * this[_0x2680b0(0x13ea)], this['historyIndex'] < this['maxHistory'] - 0x1 ? this[_0x2680b0(0x1192)]++ : this['historyIndex'] = 0x0;
                        for (let _0xdd7883 = 0x0; _0xdd7883 < this['ghosts']['length']; _0xdd7883++) {
                            var _0x90d05c = this['posHistory'][this[_0x2680b0(0xe5a)](_0xdd7883)],
                                _0x457c7b = this[_0x2680b0(0xbbc)][_0xdd7883];
                            _0x457c7b[_0x2680b0(0xd96)] = this[_0x2680b0(0xd96)], _0x457c7b['x'] = _0x90d05c['x'], _0x457c7b['y'] = _0x90d05c['y'], _0x457c7b['scale'] = this[_0x2680b0(0x7cb)], _0x457c7b[_0x2680b0(0x35a)] = !0x0;
                        }
                        this[_0x2680b0(0x19c8)](this[_0x2680b0(0xd2f)]['x'], this[_0x2680b0(0xd2f)]['y']), this['posHistory'][this[_0x2680b0(0x1192)]]['x'] = this['x'], this[_0x2680b0(0x24a)][this['historyIndex']]['y'] = this['y'], this['y'] > _0x34437c[_0x2680b0(0xd2c)][_0x2680b0(0x1043)][_0x2680b0(0x10f6)]['y'] + _0x34437c['default']['Core'][_0x2680b0(0x6d2)][_0x2680b0(0x12f9)]['height'] && (this['isCullable'] = !0x0, this[_0x2680b0(0x14fb)]());
                    }
                }
                _0x2d6e6f['B_Axe'] = _0x191ed8, _0x2d6e6f['default'] = _0x191ed8;
            };
