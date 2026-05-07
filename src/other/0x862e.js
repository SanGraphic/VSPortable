// Module 0x862e
// Args: _0x3a50fd, _0x49822d, _0x4d981c

export default (_0x3a50fd, _0x49822d, _0x4d981c) => {
                'use strict';
                const _0x107cb6 = a0_0x6932;
                var _0x1bc3b2 = this && this['__importDefault'] || function(_0x4e79aa) {
                    return _0x4e79aa && _0x4e79aa['__esModule'] ? _0x4e79aa : {
                        'default': _0x4e79aa
                    };
                };
                Object['defineProperty'](_0x49822d, '__esModule', {
                    'value': !0x0
                });
                const _0x22b2cf = _0x1bc3b2(_0x4d981c(0x9bda)),
                    _0x1454e3 = _0x1bc3b2(_0x4d981c(0xc42e)),
                    _0x4d4487 = _0x1bc3b2(_0x4d981c(0x5103)),
                    _0x1514db = _0x1bc3b2(_0x4d981c(0x5f07)),
                    _0x1e803b = _0x1bc3b2(_0x4d981c(0x1166a));
                class _0xd207f8 extends _0x1e803b['default'] {
                    constructor(_0x1f4c70, _0x2cd6ca, _0x3f465e, _0x3ae4b0) {
                        const _0x1e139e = _0x107cb6;
                        super(_0x1f4c70, _0x2cd6ca, _0x3f465e, _0x3ae4b0);
                        let _0x217919 = '';
                        switch (_0x3ae4b0) {
                            case _0x22b2cf[_0x1e139e(0xd2c)][_0x1e139e(0x8d8)]:
                                _0x217919 = 'mask1.png';
                                break;
                            case _0x22b2cf[_0x1e139e(0xd2c)][_0x1e139e(0xd72)]:
                                _0x217919 = 'mask2.png';
                                break;
                            case _0x22b2cf['default']['MASK_LEFT']:
                                _0x217919 = 'mask4.png';
                                break;
                            case _0x22b2cf[_0x1e139e(0xd2c)][_0x1e139e(0x19ee)]:
                                _0x217919 = 'mask5.png';
                                break;
                            default:
                            case _0x22b2cf['default'][_0x1e139e(0x589)]:
                                _0x217919 = Phaser[_0x1e139e(0x24f)][_0x1e139e(0x82a)][_0x1e139e(0x198c)](['mask1.png', 'mask2.png', 'mask3.png', 'mask4.png', 'mask5.png']);
                        }
                        this[_0x1e139e(0x92f)] = this[_0x1e139e(0x6d2)]['add'][_0x1e139e(0x105b)](this['x'], this['y'], 'enemies2', _0x217919);
                    } ['OnRecycle']() {
                        const _0xd12fcd = _0x107cb6;
                        super['OnRecycle'](), this[_0xd12fcd(0x4d4)] = !0x1, this['isTeleportOnCull'] = !0x0, this[_0xd12fcd(0x63e)] && (this[_0xd12fcd(0xd2e)] = 0x3e8 + this['dataMaxHp'] * _0x1514db['default']['Core']['Player'][_0xd12fcd(0x5e3)] * _0x4d4487[_0xd12fcd(0xd2c)]['EnemyHealthMultiplier'] * _0x1514db[_0xd12fcd(0xd2c)][_0xd12fcd(0x1043)]['Stage']['EnemyHealthMultiplier']), this['hp'] = this[_0xd12fcd(0xd2e)], this['maskSprite'][_0xd12fcd(0xe71)] = 0x1, this[_0xd12fcd(0x92f)]['tintFill'] = !0x1, this[_0xd12fcd(0x92f)][_0xd12fcd(0x19b0)] = 0xffffff;
                    } ['Die']() {
                        const _0x2f135b = _0x107cb6;
                        super['Die'](), _0x1514db[_0x2f135b(0xd2c)][_0x2f135b(0x1043)][_0x2f135b(0x13f8)](this['x'], this['y'], _0x1454e3['default']['RELIC_GOLDENEGG']), this[_0x2f135b(0x92f)]['tintFill'] = !0x0, this[_0x2f135b(0x6d2)]['tweens'][_0x2f135b(0x18bd)]({
                            'targets': this['maskSprite'],
                            'alpha': 0x0,
                            'tint': 0xffffff,
                            'duration': 0x1f4
                        });
                    } ['Update'](_0x1aadfc) {
                        const _0x34f43c = _0x107cb6;
                        super['Update'](_0x1aadfc), this[_0x34f43c(0x14eb)]();
                    } ['ConditionalUpdate'](_0x16ab15) {
                        const _0x271abb = _0x107cb6;
                        super[_0x271abb(0x1904)](_0x16ab15), this[_0x271abb(0x14eb)]();
                    } ['MaskUpdate']() {
                        const _0x34ad88 = _0x107cb6;
                        this[_0x34ad88(0xd96)] = 0x0, this['maskSprite'][_0x34ad88(0x16c6)] = this['depth'] + 0x1, this['maskSprite']['x'] = this['x'] + (this[_0x34ad88(0x4d4)] ? 0x2 : -0x2), this[_0x34ad88(0x92f)]['y'] = this['y'] - 0x2a * this[_0x34ad88(0x1721)], this['maskSprite'][_0x34ad88(0x3a8)] = this[_0x34ad88(0x3a8)], this[_0x34ad88(0x92f)]['scaleY'] = this['scaleY'], this['maskSprite'][_0x34ad88(0x4d4)] = this[_0x34ad88(0x4d4)];
                    }
                }
                _0x49822d['default'] = _0xd207f8;
            };
