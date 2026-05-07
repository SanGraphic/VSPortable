// Module 0x166d5
// Args: _0x421bb5, _0x3fd681, _0xfa67d3

export default (_0x421bb5, _0x3fd681, _0xfa67d3) => {
                'use strict';
                const _0x172ebe = a0_0x6932;
                var _0x452f4e = this && this['__importDefault'] || function(_0x40796c) {
                    const _0x5d2e43 = a0_0x6932;
                    return _0x40796c && _0x40796c['__esModule'] ? _0x40796c : {
                        'default': _0x40796c
                    };
                };
                Object['defineProperty'](_0x3fd681, '__esModule', {
                    'value': !0x0
                }), _0x3fd681['Pickup'] = void 0x0;
                const _0x3a2362 = _0x452f4e(_0xfa67d3(0x5f07)),
                    _0xffc24e = _0x452f4e(_0xfa67d3(0x4d17)),
                    _0x59d921 = _0x452f4e(_0xfa67d3(0x5103)),
                    _0x429186 = _0x452f4e(_0xfa67d3(0x136b9));
                class _0x3be5b4 extends Phaser['Physics']['Arcade']['Sprite'] {
                    constructor(_0x3436f, _0x49e3c6, _0x4679c5, _0xb173dd) {
                        const _0x5df2e8 = _0x172ebe;
                        super(_0x3436f['scene'], _0x49e3c6, _0x4679c5, 'items'), this['DEFAULT_SPEED'] = 0xfa, this[_0x5df2e8(0x15f6)] = null, this[_0x5df2e8(0x161a)] = 0xa, this['frameName'] = 'GemRed.png', this[_0x5df2e8(0x78e)] = this[_0x5df2e8(0xd65)], this[_0x5df2e8(0x12a8)] = !0x1, this['time'] = 0x0, this[_0x5df2e8(0xe17)] = new Phaser[(_0x5df2e8(0x24f))]['Vector2'](0x0, 0x0), this['currentDirection'] = new Phaser['Math']['Vector2'](0x0, 0x0), this['value'] = 0x0, this[_0x5df2e8(0xc6e)] = !0x1, this[_0x5df2e8(0x351)] = null, this[_0x5df2e8(0x210)] = !0x1, this['isCullable'] = !0x0, this[_0x5df2e8(0x187a)] = !0x1, this['feverMS'] = 0x0, this['pool'] = _0x3436f, this[_0x5df2e8(0xeb5)] = _0xb173dd;
                        var _0x42e01a = _0xffc24e[_0x5df2e8(0xd2c)][_0xb173dd];
                        this['frameName'] = _0x42e01a[_0x5df2e8(0x8e3)], this[_0x5df2e8(0xb81)] = _0x42e01a['value'], this['feverMS'] = _0x42e01a[_0x5df2e8(0x13a4)], this['setFrame'](this[_0x5df2e8(0x8e3)]), _0x3436f[_0x5df2e8(0x6d2)][_0x5df2e8(0x18bd)]['existing'](this), _0x3436f['scene'][_0x5df2e8(0x1585)][_0x5df2e8(0x18bd)][_0x5df2e8(0x1a88)](this), this['setScale'](_0x59d921['default']['PixelScale']), this[_0x5df2e8(0xcf9)]['setCircle'](this['radius']), this[_0x5df2e8(0xe17)]['x'] = _0x49e3c6, this['originPos']['y'] = _0x4679c5, this[_0x5df2e8(0x12a2)] = this['scene'][_0x5df2e8(0x12a1)]['add']({
                            'targets': this,
                            'time': 0x1,
                            'duration': 0x1f4,
                            'ease': 'Linear'
                        }), this[_0x5df2e8(0x12a2)][_0x5df2e8(0x1631)]();
                    } ['OnTeleportOnCull']() {} ['Init'](_0x3cdffd = -0x3e8, _0x5e28ef = -0x3e8) {
                        const _0x424992 = _0x172ebe;
                        this[_0x424992(0x726)](_0x3cdffd, _0x5e28ef), this['OnRecycle']();
                    } ['OnRecycle']() {
                        const _0x2aaee9 = _0x172ebe;
                        this['setActive'](!0x0), this[_0x2aaee9(0x183f)](!0x0), this[_0x2aaee9(0x381)](this[_0x2aaee9(0x8e3)]), this['body'][_0x2aaee9(0x543)] = !0x0, this[_0x2aaee9(0x12a8)] = !0x1, this[_0x2aaee9(0x78e)] = this[_0x2aaee9(0xd65)], this[_0x2aaee9(0xb81)] = _0xffc24e['default'][this[_0x2aaee9(0xeb5)]]['value'], this['feverMS'] = _0xffc24e[_0x2aaee9(0xd2c)][this['itemType']][_0x2aaee9(0x13a4)];
                    } ['DeSpawn']() {
                        const _0x264903 = _0x172ebe;
                        this['setActive'](!0x1), this[_0x264903(0x183f)](!0x1), this['body']['enable'] = !0x1, this['setVelocity'](0x0), this[_0x264903(0x183e)][_0x264903(0x1a34)](), this[_0x264903(0xc82)][_0x264903(0x4ed)](this);
                    } ['GetTaken']() {
                        const _0x58db7a = _0x172ebe;
                        this['disableGet'] || (this[_0x58db7a(0x14fb)](), _0xffc24e['default'][this[_0x58db7a(0xeb5)]]['pickedupAmount'] += 0x1, this['owner'] && this['owner']['OnPickupCallback'](this));
                    } ['Update'](_0x485c4c = 0x0) {
                        const _0x3944b0 = _0x172ebe;
                        this[_0x3944b0(0x12a8)] && !this[_0x3944b0(0xc6e)] && this['GoToPlayer']();
                    } ['Vacuum']() {
                        const _0x444d83 = _0x172ebe;
                        return !this[_0x444d83(0x12a8)] && (this['vacuumTween'][_0x444d83(0x1374)](), this[_0x444d83(0x915)] = -0x1, this['goToPlayer'] = !0x0, !0x0);
                    } ['GoToPlayer']() {
                        const _0xdb791f = _0x172ebe;
                        this[_0xdb791f(0x1548)]['x'] = _0x3a2362[_0xdb791f(0xd2c)]['Core']['Player']['x'] - this['x'], this[_0xdb791f(0x1548)]['y'] = _0x3a2362[_0xdb791f(0xd2c)][_0xdb791f(0x1043)]['Player']['y'] - 0x8 - this['y'], this[_0xdb791f(0x1548)]['normalize'](), this['setVelocity'](this['speed'] * this[_0xdb791f(0x1548)]['x'] * this['time'], this['speed'] * this['currentDirection']['y'] * this[_0xdb791f(0x915)]), this[_0xdb791f(0x78e)]++;
                    } ['SetSeenItem'](_0x51689c) {
                        const _0x54f789 = _0x172ebe;
                        void 0x0 === _0x3a2362['default']['Core']['PlayerOptions'][_0x54f789(0x1481)][_0x54f789(0x1e6)](_0x5db54d => _0x5db54d === _0x51689c) && (_0xffc24e[_0x54f789(0xd2c)][_0x51689c][_0x54f789(0xb36)] = !0x0, _0x3a2362['default'][_0x54f789(0x1043)]['PlayerOptions']['CollectedItems'][_0x54f789(0x1564)](_0x51689c), _0x3a2362[_0x54f789(0xd2c)]['Core'][_0x54f789(0x14d8)][_0x54f789(0x76a)]());
                    } ['AngleFromTargetRadians'](_0x50618d) {
                        const _0x5024ad = _0x172ebe;
                        var _0x228c3c = _0x3a2362['default'][_0x5024ad(0x1043)][_0x5024ad(0x10f6)][_0x5024ad(0xcf9)]['position'];
                        return Math['atan2'](_0x50618d['y'] - _0x228c3c['y'], _0x50618d['x'] - _0x228c3c['x']);
                    } ['safeXY'](_0x3f5339, _0x12d873) {
                        const _0x41f59a = _0x172ebe;
                        if (_0x3a2362[_0x41f59a(0xd2c)][_0x41f59a(0x1043)][_0x41f59a(0x17c7)][_0x41f59a(0xbef)] && _0x3a2362['default']['Core']['Stage'][_0x41f59a(0xbef)][_0x41f59a(0x12f6)](_0x3f5339, _0x12d873)) {
                            this['currentDirection']['x'] = _0x3a2362['default']['Core']['Player']['x'] - _0x3f5339, this[_0x41f59a(0x1548)]['y'] = _0x3a2362[_0x41f59a(0xd2c)]['Core']['Player']['y'] - _0x12d873, this[_0x41f59a(0x1548)]['normalize']();
                            let _0x24a7b4 = _0x3f5339 + 0x4 * this[_0x41f59a(0x1548)]['x'],
                                _0x1956c9 = _0x12d873 + 0x4 * this[_0x41f59a(0x1548)]['y'];
                            return new Phaser[(_0x41f59a(0x10d2))]['Point'](_0x24a7b4, _0x1956c9);
                        }
                        return new Phaser['Geom'][(_0x41f59a(0x16b))](_0x3f5339, _0x12d873);
                    } ['Bless'](_0x49230a, _0x408117 = _0x429186['default']['PRISM']) {
                        const _0x1b4314 = _0x172ebe;
                        this['value'] += _0x49230a, _0x3a2362['default']['Core'][_0x1b4314(0x14d8)][_0x1b4314(0x49c)] && _0x3a2362[_0x1b4314(0xd2c)]['Core'][_0x1b4314(0x411)][_0x1b4314(0x108b)](this['x'], this['y']);
                    }
                }
                _0x3fd681['Pickup'] = _0x3be5b4, _0x3fd681['default'] = _0x3be5b4;
            };
