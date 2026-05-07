// Module 0x1179c
// Args: _0x84500e, _0x9f6e69, _0x10de74

export default (_0x84500e, _0x9f6e69, _0x10de74) => {
                'use strict';
                const _0x39da17 = a0_0x6932;
                var _0x42e21d = this && this['__importDefault'] || function(_0x18459e) {
                    const _0x59c9d0 = _0x39da17;
                    return _0x18459e && _0x18459e[_0x59c9d0(0x16f1)] ? _0x18459e : {
                        'default': _0x18459e
                    };
                };
                Object['defineProperty'](_0x9f6e69, '__esModule', {
                    'value': !0x0
                }), _0x9f6e69['B_Scythe'] = void 0x0;
                const _0x48883a = _0x42e21d(_0x10de74(0xa14d)),
                    _0x3f3b26 = _0x42e21d(_0x10de74(0x5f07)),
                    _0x18f06d = _0x42e21d(_0x10de74(0x1fd7)),
                    _0x5d5495 = _0x42e21d(_0x10de74(0x5103));
                class _0x1fb3c5 extends _0x48883a['default'] {
                    constructor(_0xa1a63e, _0x28f4e5, _0x4383c4, _0x2108eb, _0x3ae151) {
                        const _0x176e15 = _0x39da17;
                        super(_0xa1a63e, _0x28f4e5, _0x4383c4, 'vfx', 'ProjectileScythe.png', _0x2108eb, _0x3ae151), this[_0x176e15(0x24a)] = new Array(), this[_0x176e15(0x624)] = 0x1, this[_0x176e15(0x1192)] = 0x0, this['_velocity'] = new Phaser['Math'][(_0x176e15(0x1551))](0x0, 0x0), this['_avelocity'] = new Phaser[(_0x176e15(0x24f))][(_0x176e15(0x1551))](0x0, 0x0), this[_0x176e15(0x6bd)] = this[_0x176e15(0x6d2)][_0x176e15(0x12a1)]['add']({
                            'targets': this,
                            'angle': 0x168,
                            'duration': 0x1f4,
                            'ease': 'Linear',
                            'repeat': -0x1
                        }), this[_0x176e15(0xbbc)] = new Array();
                        for (let _0xf1916c = 0x0; _0xf1916c < this[_0x176e15(0x624)]; _0xf1916c++) {
                            this[_0x176e15(0x24a)]['push'](new Phaser[(_0x176e15(0x24f))]['Vector2'](_0x28f4e5, _0x4383c4));
                            var _0x1abc5f = this[_0x176e15(0x6d2)]['add'][_0x176e15(0x568)](0x0, 0x0, this[_0x176e15(0x174d)][_0x176e15(0x1381)], this[_0x176e15(0x670)][_0x176e15(0x226)])['setScale'](_0x5d5495['default']['PixelScale'])['setVisible'](!0x1)['setTint'](0x0)[_0x176e15(0xdab)](0.75 - 0.25 * _0xf1916c);
                            this[_0x176e15(0xbbc)][_0x176e15(0x1564)](_0x1abc5f);
                        }
                        this[_0x176e15(0x1139)] = !0x1;
                    } ['OnRecycle']() {
                        const _0x376da2 = _0x39da17;
                        super['OnRecycle'](), this[_0x376da2(0xcf9)]['setCircle'](0x10), this['setScale'](_0x5d5495['default'][_0x376da2(0x15db)] * this[_0x376da2(0x4a1)][_0x376da2(0x5f5)]);
                        var _0x1a025e = 0x168 / this['weapon']['PAmount'] * this['indexInWeapon'] - 0x5a;
                        this[_0x376da2(0x6d2)]['physics'][_0x376da2(0x18fc)](Phaser['Math'][_0x376da2(0x54d)](_0x1a025e), this[_0x376da2(0xfbb)], this['body']['velocity']);
                        for (let _0x173891 = 0x0; _0x173891 < this['posHistory'][_0x376da2(0xed9)]; _0x173891++) this[_0x376da2(0x24a)][_0x173891]['x'] = this['x'], this[_0x376da2(0x24a)][_0x173891]['y'] = this['y'];
                        _0x3f3b26['default'][_0x376da2(0x1267)][_0x376da2(0x7f6)](_0x18f06d[_0x376da2(0xd2c)][_0x376da2(0xfcc)], {
                            'detune': -0x64 * this['indexInWeapon'],
                            'volume': 0.4
                        }, 0xc8, 0xa), this[_0x376da2(0x4a1)]['PBounces'] && !this['bounceActivated'] && (this[_0x376da2(0x1139)] = !0x0, this[_0x376da2(0x6d2)]['physics'][_0x376da2(0x1cf)]['on']('worldbounds', this[_0x376da2(0x1851)], this), this['setCollideWorldBounds'](!0x0, 0x1, 0x1), this[_0x376da2(0xcf9)][_0x376da2(0xda7)](_0x3f3b26['default'][_0x376da2(0x1043)]['Player'][_0x376da2(0xc00)]), this[_0x376da2(0xcf9)]['onWorldBounds'] = !0x0), this['bounceActivated'] && this['setCollideWorldBounds'](!0x0, 0x1, 0x1);
                    } ['Bounce'](_0x29b73a) {
                        const _0xcf572 = _0x39da17;
                        this[_0xcf572(0xcf9)] === _0x29b73a && (this[_0xcf572(0x1b4)] > 0x0 ? (this[_0xcf572(0x1b4)]--, this[_0xcf572(0xcf9)]['velocity']['x'] *= -0x2, this[_0xcf572(0xcf9)][_0xcf572(0xf4e)]['y'] *= -0x2, this[_0xcf572(0x990)] = []) : this[_0xcf572(0x193c)](!0x1, 0x1, 0x1));
                    } ['DeSpawn']() {
                        const _0x257192 = _0x39da17;
                        super[_0x257192(0x14fb)]();
                        for (let _0x23f2ec = 0x0; _0x23f2ec < this['ghosts']['length']; _0x23f2ec++) this[_0x257192(0xbbc)][_0x23f2ec]['setVisible'](!0x1);
                    } ['getHistoryIndex'](_0x196ceb) {
                        const _0x561019 = _0x39da17;
                        return this[_0x561019(0x1192)] + _0x196ceb >= this[_0x561019(0x624)] ? this[_0x561019(0x1192)] + _0x196ceb - this['maxHistory'] : this['historyIndex'] + _0x196ceb;
                    } ['Update'](_0x191545 = 0x0) {
                        const _0x423376 = _0x39da17;
                        this['historyIndex'] < this[_0x423376(0x624)] - 0x1 ? this['historyIndex']++ : this['historyIndex'] = 0x0;
                        for (let _0x97d567 = 0x0; _0x97d567 < this[_0x423376(0xbbc)]['length']; _0x97d567++) {
                            var _0x2714cd = this[_0x423376(0x24a)][this[_0x423376(0xe5a)](_0x97d567)],
                                _0x3721f4 = this['ghosts'][_0x97d567];
                            _0x3721f4[_0x423376(0xd96)] = this['angle'], _0x3721f4['x'] = _0x2714cd['x'], _0x3721f4['y'] = _0x2714cd['y'], _0x3721f4['scale'] = this[_0x423376(0x7cb)], _0x3721f4[_0x423376(0x35a)] = !0x0;
                        }
                        this[_0x423376(0x24a)][this[_0x423376(0x1192)]]['x'] = this['x'], this['posHistory'][this[_0x423376(0x1192)]]['y'] = this['y'];
                    }
                }
                _0x9f6e69['B_Scythe'] = _0x1fb3c5, _0x9f6e69['default'] = _0x1fb3c5;
            };
