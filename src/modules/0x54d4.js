// Module 0x54d4
// Args: _0x1db196, _0x49783e, _0xc50c83

export default (_0x1db196, _0x49783e, _0xc50c83) => {
                'use strict';
                const _0x384fe5 = a0_0x6932;
                var _0x4627c1 = this && this['__importDefault'] || function(_0x214bb4) {
                    return _0x214bb4 && _0x214bb4['__esModule'] ? _0x214bb4 : {
                        'default': _0x214bb4
                    };
                };
                Object['defineProperty'](_0x49783e, '__esModule', {
                    'value': !0x0
                }), _0x49783e['B_Vespers'] = void 0x0;
                const _0x1f2efe = _0x4627c1(_0xc50c83(0xa14d)),
                    _0x36cf80 = _0x4627c1(_0xc50c83(0x5f07)),
                    _0x4748fb = _0x4627c1(_0xc50c83(0x5103));
                class _0x28f3c4 extends _0x1f2efe['default'] {
                    constructor(_0x449af8, _0x55f755, _0x365cfc, _0x1ea52c, _0x3bab5c) {
                        const _0x4521f9 = _0x384fe5;
                        super(_0x449af8, _0x55f755, _0x365cfc, 'vfx', 'Page2.png', _0x1ea52c, _0x3bab5c), this[_0x4521f9(0x9d3)] = 0x0, this['radius'] = 0x32, this['radiusTimeX'] = 0x1, this[_0x4521f9(0xaff)] = [], this['requiemRandomIndex'] = 0x0, this['perc'] = 0x1 / 0x10, this['setScale'](_0x4748fb[_0x4521f9(0xd2c)][_0x4521f9(0x15db)] * (0x1 + 0.1 * this[_0x4521f9(0x4a1)][_0x4521f9(0x5f5)]));
                        let _0x12bd97 = new Array();
                        _0x12bd97[_0x4521f9(0x1564)]({
                            'key': 'vfx',
                            'frame': 'g.png'
                        }), _0x12bd97['push']({
                            'key': 'vfx',
                            'frame': 'o.png'
                        }), _0x12bd97[_0x4521f9(0x1564)]({
                            'key': 'vfx',
                            'frame': 'r.png'
                        }), _0x12bd97[_0x4521f9(0x1564)]({
                            'key': 'vfx',
                            'frame': 'g.png'
                        }), _0x12bd97['push']({
                            'key': 'vfx',
                            'frame': 'o.png'
                        }), _0x12bd97[_0x4521f9(0x1564)]({
                            'key': 'vfx',
                            'frame': 'n.png'
                        }), _0x12bd97['push']({
                            'key': 'vfx',
                            'frame': 'z.png'
                        }), _0x12bd97['push']({
                            'key': 'vfx',
                            'frame': 'o.png'
                        }), _0x12bd97[_0x4521f9(0x1564)]({
                            'key': 'vfx',
                            'frame': 'l.png'
                        }), _0x12bd97[_0x4521f9(0x1564)]({
                            'key': 'vfx',
                            'frame': 'a.png'
                        }), this['anims']['create']({
                            'key': 'idle',
                            'frames': _0x12bd97,
                            'frameRate': 0x2,
                            'repeat': -0x1
                        });
                        var _0x5468f5 = this['scene'][_0x4521f9(0x18bd)][_0x4521f9(0x1791)]('vfx');
                        this[_0x4521f9(0x125b)] = _0x5468f5[_0x4521f9(0x14c0)]({
                            'frame': ['Page2.png'],
                            'speed': 0x32,
                            'quantity': 0x2,
                            'lifespan': 0x12c,
                            'alpha': {
                                'start': 0x1,
                                'end': 0x0
                            },
                            'on': !0x0,
                            'follow': this,
                            'frequency': 0x64
                        });
                        for (let _0x63798c = 0x0; _0x63798c < 0x1f4; _0x63798c++) this['requiemRandomOffsets'][_0x4521f9(0x1564)](0.5 * Math[_0x4521f9(0x9ad)]() * 0x20);
                    } ['OnRecycle']() {
                        const _0x934ca3 = _0x384fe5;
                        var _0x270dbe;
                        super['OnRecycle'](), this[_0x934ca3(0x183e)][_0x934ca3(0x902)]('idle'), this[_0x934ca3(0xcf9)][_0x934ca3(0xdf6)](0x8), this['setScale'](0x0), null === (_0x270dbe = this[_0x934ca3(0x660)]) || void 0x0 === _0x270dbe || _0x270dbe['stop'](), this[_0x934ca3(0x660)] = this[_0x934ca3(0x6d2)]['tweens'][_0x934ca3(0x18bd)]({
                            'targets': this,
                            'scale': _0x4748fb[_0x934ca3(0xd2c)]['PixelScale'] * (0x1 + 0.3 * this['weapon'][_0x934ca3(0x5f5)]),
                            'duration': 0x1f4,
                            'onComplete': () => this[_0x934ca3(0x125b)][_0x934ca3(0x1aa2)]()
                        }), this[_0x934ca3(0x9d3)] = 0x2 * Math['PI'] / this[_0x934ca3(0x4a1)][_0x934ca3(0x942)] * this[_0x934ca3(0x19c4)], _0x36cf80['default']['Core']['scene']['time'][_0x934ca3(0x17fb)](this['HitboxTimer']), _0x36cf80['default']['Core']['scene'][_0x934ca3(0x915)][_0x934ca3(0x17fb)](this[_0x934ca3(0x12a3)]), this[_0x934ca3(0x8b9)] = _0x36cf80['default']['Core']['scene'][_0x934ca3(0x915)][_0x934ca3(0x12b8)]({
                            'delay': this[_0x934ca3(0x4a1)][_0x934ca3(0xcd5)],
                            'loop': !0x0,
                            'callback': () => {
                                this['objectsHit'] = [];
                            }
                        }), this['HitboxTimer']['name'] = 'HB Hitbox', this[_0x934ca3(0x12a3)] = _0x36cf80[_0x934ca3(0xd2c)]['Core'][_0x934ca3(0x6d2)][_0x934ca3(0x915)][_0x934ca3(0x12b8)]({
                            'delay': this[_0x934ca3(0x4a1)][_0x934ca3(0x16c3)],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x58ab98 = _0x934ca3;
                                var _0x120320;
                                _0x36cf80[_0x58ab98(0xd2c)][_0x58ab98(0x1043)]['scene'][_0x58ab98(0x915)][_0x58ab98(0x17fb)](this[_0x58ab98(0x8b9)]), _0x36cf80[_0x58ab98(0xd2c)][_0x58ab98(0x1043)][_0x58ab98(0x6d2)]['time'][_0x58ab98(0x17fb)](this['ExpireTimer']), this[_0x58ab98(0x125b)][_0x58ab98(0x1a34)](), null === (_0x120320 = this[_0x58ab98(0x660)]) || void 0x0 === _0x120320 || _0x120320[_0x58ab98(0x1a34)](), this['scaleTween'] = this[_0x58ab98(0x6d2)]['tweens']['add']({
                                    'targets': this,
                                    'scale': 0x0,
                                    'duration': 0x1f4,
                                    'onComplete': () => this[_0x58ab98(0x14fb)]()
                                });
                            }
                        }), this[_0x934ca3(0x12a3)]['name'] = 'HB Expire';
                    } ['DeSpawn']() {
                        const _0x6881ff = _0x384fe5;
                        var _0x2880fe;
                        if (super['DeSpawn'](), null === (_0x2880fe = this['scaleTween']) || void 0x0 === _0x2880fe || _0x2880fe[_0x6881ff(0x1a34)](), _0x36cf80[_0x6881ff(0xd2c)][_0x6881ff(0x1043)][_0x6881ff(0x6d2)][_0x6881ff(0x915)]['removeEvent'](this[_0x6881ff(0x8b9)]), _0x36cf80[_0x6881ff(0xd2c)][_0x6881ff(0x1043)]['scene']['time'][_0x6881ff(0x17fb)](this[_0x6881ff(0x12a3)]), this[_0x6881ff(0x4a1)][_0x6881ff(0x1007)]) {
                            let _0x53196a = this[_0x6881ff(0x4a1)][_0x6881ff(0x1891)];
                            for (let _0x48deec = 0x0; _0x48deec < _0x53196a; _0x48deec++) this['weapon']['SpawnExplosionAt'](this['x'] + this[_0x6881ff(0xaff)][this['requiemRandomIndex']++ % 0x1f4] * this['weapon']['PArea'], this['y'] + this['requiemRandomOffsets'][this[_0x6881ff(0x176a)]++ % 0x1f4] * this['weapon']['PArea'], _0x48deec);
                        }
                    } ['Update'](_0xa6a08a) {
                        const _0x34f126 = _0x384fe5;
                        this['deltaTime'] += 0.035 * this[_0x34f126(0x4a1)][_0x34f126(0x712)] * _0xa6a08a * this['perc'], this['copyPosition'](_0x36cf80[_0x34f126(0xd2c)][_0x34f126(0x1043)][_0x34f126(0x10f6)]);
                        let _0x254168 = Math[_0x34f126(0x1084)](4.5, this['weapon'][_0x34f126(0x5f5)]);
                        this['x'] += Math[_0x34f126(0xd7e)](this['deltaTime']) * _0x254168 * this[_0x34f126(0x161a)], this['y'] += Math['sin'](this['deltaTime']) * _0x254168 * this['radius'];
                    }
                }
                _0x49783e['B_Vespers'] = _0x28f3c4, _0x49783e['default'] = _0x28f3c4;
            };
