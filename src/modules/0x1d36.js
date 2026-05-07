// Module 0x1d36
// Args: _0x29f444, _0x5e17de, _0x5255ca

export default (_0x29f444, _0x5e17de, _0x5255ca) => {
                'use strict';
                const _0x3681b3 = a0_0x6932;
                var _0x1519fc = this && this['__importDefault'] || function(_0x5ab563) {
                    const _0x48d085 = _0x3681b3;
                    return _0x5ab563 && _0x5ab563[_0x48d085(0x16f1)] ? _0x5ab563 : {
                        'default': _0x5ab563
                    };
                };
                Object['defineProperty'](_0x5e17de, '__esModule', {
                    'value': !0x0
                }), _0x5e17de['B_HolyBook'] = void 0x0;
                const _0x54fd36 = _0x1519fc(_0x5255ca(0xa14d)),
                    _0x43c27d = _0x1519fc(_0x5255ca(0x5f07)),
                    _0x283d7d = _0x1519fc(_0x5255ca(0x5103));
                class _0x1e0ea8 extends _0x54fd36['default'] {
                    constructor(_0x3e99bf, _0x327612, _0x13ca31, _0x220c03, _0x40a3c3) {
                        const _0x1c65dd = _0x3681b3;
                        super(_0x3e99bf, _0x327612, _0x13ca31, 'vfx', 'HolyBook.png', _0x220c03, _0x40a3c3), this[_0x1c65dd(0x9d3)] = 0x0, this['radius'] = 0x32, this[_0x1c65dd(0x149d)] = 0x1, this['requiemRandomOffsets'] = [], this[_0x1c65dd(0x176a)] = 0x0, this['perc'] = 0x1 / 0x10, this[_0x1c65dd(0x8a2)](_0x283d7d['default']['PixelScale'] * (0x1 + 0.1 * this[_0x1c65dd(0x4a1)][_0x1c65dd(0x5f5)]));
                        var _0x35e1fc = this[_0x1c65dd(0x6d2)][_0x1c65dd(0x18bd)][_0x1c65dd(0x1791)]('vfx');
                        this[_0x1c65dd(0x125b)] = _0x35e1fc[_0x1c65dd(0x14c0)]({
                            'frame': ['Page.png'],
                            'speed': 0x32,
                            'quantity': 0x1,
                            'lifespan': 0x12c,
                            'alpha': {
                                'start': 0.7,
                                'end': 0x0
                            },
                            'on': !0x0,
                            'follow': this,
                            'frequency': 0xc8
                        });
                        for (let _0x2ecad6 = 0x0; _0x2ecad6 < 0x1f4; _0x2ecad6++) this['requiemRandomOffsets'][_0x1c65dd(0x1564)](0.5 * Math['random']() * 0x20);
                    } ['OnRecycle']() {
                        const _0xb46c64 = _0x3681b3;
                        var _0x4ca74f;
                        super['OnRecycle'](), this['body'][_0xb46c64(0xdf6)](0x8), this[_0xb46c64(0x8a2)](0x0), null === (_0x4ca74f = this['scaleTween']) || void 0x0 === _0x4ca74f || _0x4ca74f[_0xb46c64(0x1a34)](), this[_0xb46c64(0x660)] = this[_0xb46c64(0x6d2)][_0xb46c64(0x12a1)]['add']({
                            'targets': this,
                            'scale': _0x283d7d[_0xb46c64(0xd2c)][_0xb46c64(0x15db)] * (0x1 + 0.3 * this[_0xb46c64(0x4a1)]['PArea']),
                            'duration': 0x1f4,
                            'onComplete': () => this['PfxEmitter']['start']()
                        }), this['deltaTime'] = 0x2 * Math['PI'] / this['weapon'][_0xb46c64(0x942)] * this[_0xb46c64(0x19c4)], _0x43c27d[_0xb46c64(0xd2c)][_0xb46c64(0x1043)][_0xb46c64(0x6d2)][_0xb46c64(0x915)]['removeEvent'](this['HitboxTimer']), _0x43c27d[_0xb46c64(0xd2c)][_0xb46c64(0x1043)][_0xb46c64(0x6d2)][_0xb46c64(0x915)][_0xb46c64(0x17fb)](this['ExpireTimer']), this['HitboxTimer'] = _0x43c27d[_0xb46c64(0xd2c)]['Core'][_0xb46c64(0x6d2)][_0xb46c64(0x915)][_0xb46c64(0x12b8)]({
                            'delay': this[_0xb46c64(0x4a1)][_0xb46c64(0xcd5)],
                            'loop': !0x0,
                            'callback': () => {
                                const _0x41f30c = _0xb46c64;
                                this[_0x41f30c(0x990)] = [];
                            }
                        }), this[_0xb46c64(0x8b9)][_0xb46c64(0x226)] = 'HB Hitbox', this['ExpireTimer'] = _0x43c27d[_0xb46c64(0xd2c)][_0xb46c64(0x1043)][_0xb46c64(0x6d2)]['time'][_0xb46c64(0x12b8)]({
                            'delay': this[_0xb46c64(0x4a1)][_0xb46c64(0x16c3)],
                            'loop': !0x1,
                            'callback': () => {
                                const _0x8cbccd = _0xb46c64;
                                var _0x2a5cd0;
                                _0x43c27d['default']['Core'][_0x8cbccd(0x6d2)]['time']['removeEvent'](this[_0x8cbccd(0x8b9)]), _0x43c27d[_0x8cbccd(0xd2c)]['Core'][_0x8cbccd(0x6d2)]['time'][_0x8cbccd(0x17fb)](this['ExpireTimer']), this[_0x8cbccd(0x125b)]['stop'](), null === (_0x2a5cd0 = this[_0x8cbccd(0x660)]) || void 0x0 === _0x2a5cd0 || _0x2a5cd0['stop'](), this['scaleTween'] = this[_0x8cbccd(0x6d2)][_0x8cbccd(0x12a1)]['add']({
                                    'targets': this,
                                    'scale': 0x0,
                                    'duration': 0x1f4,
                                    'onComplete': () => this[_0x8cbccd(0x14fb)]()
                                });
                            }
                        }), this['ExpireTimer'][_0xb46c64(0x226)] = 'HB Expire';
                    } ['DeSpawn']() {
                        const _0xc88bdf = _0x3681b3;
                        var _0x5b94c5, _0x4a3645;
                        if (super[_0xc88bdf(0x14fb)](), null === (_0x5b94c5 = this['scaleTween']) || void 0x0 === _0x5b94c5 || _0x5b94c5['stop'](), _0x43c27d[_0xc88bdf(0xd2c)][_0xc88bdf(0x1043)]['scene']['time'][_0xc88bdf(0x17fb)](this['HitboxTimer']), _0x43c27d[_0xc88bdf(0xd2c)][_0xc88bdf(0x1043)]['scene']['time']['removeEvent'](this[_0xc88bdf(0x12a3)]), null === (_0x4a3645 = this[_0xc88bdf(0x125b)]) || void 0x0 === _0x4a3645 || _0x4a3645['stop'](), this[_0xc88bdf(0x4a1)][_0xc88bdf(0x1007)]) {
                            let _0x58b95d = this['weapon'][_0xc88bdf(0x1891)];
                            for (let _0x982b22 = 0x0; _0x982b22 < _0x58b95d; _0x982b22++) this[_0xc88bdf(0x4a1)][_0xc88bdf(0x155a)](this['x'] + this[_0xc88bdf(0xaff)][this[_0xc88bdf(0x176a)]++ % 0x1f4] * this[_0xc88bdf(0x4a1)][_0xc88bdf(0x5f5)], this['y'] + this['requiemRandomOffsets'][this['requiemRandomIndex']++ % 0x1f4] * this[_0xc88bdf(0x4a1)][_0xc88bdf(0x5f5)], _0x982b22);
                        }
                    } ['Update'](_0x1fe321) {
                        const _0x23fdba = _0x3681b3;
                        this['deltaTime'] += 0.035 * this['weapon']['PSpeed'] * _0x1fe321 * this['perc'], this['copyPosition'](_0x43c27d[_0x23fdba(0xd2c)]['Core']['Player']);
                        let _0x1f67c9 = Math[_0x23fdba(0x1084)](4.5, this['weapon']['PArea']);
                        this['x'] += Math[_0x23fdba(0xd7e)](this[_0x23fdba(0x9d3)]) * _0x1f67c9 * this[_0x23fdba(0x161a)], this['y'] += Math[_0x23fdba(0xc80)](this['deltaTime']) * _0x1f67c9 * this['radius'];
                    }
                }
                _0x5e17de['B_HolyBook'] = _0x1e0ea8, _0x5e17de['default'] = _0x1e0ea8;
            };
