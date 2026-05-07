// Module 0x138b2
// Args: _0x212e47, _0x58b2c3, _0x5f480b

export default (_0x212e47, _0x58b2c3, _0x5f480b) => {
                'use strict';
                const _0x4440d9 = a0_0x6932;
                var _0x1402e6 = this && this['__importDefault'] || function(_0x14377b) {
                    return _0x14377b && _0x14377b['__esModule'] ? _0x14377b : {
                        'default': _0x14377b
                    };
                };
                Object['defineProperty'](_0x58b2c3, '__esModule', {
                    'value': !0x0
                });
                const _0x5b6bfb = _0x1402e6(_0x5f480b(0x15abc)),
                    _0x21c538 = _0x1402e6(_0x5f480b(0x136b9)),
                    _0x1fead6 = _0x1402e6(_0x5f480b(0x1fd7)),
                    _0xa7afcc = _0x1402e6(_0x5f480b(0x54e3)),
                    _0x1cd565 = _0x1402e6(_0x5f480b(0x5103)),
                    _0x37aff3 = _0x1402e6(_0x5f480b(0x5f07)),
                    _0x52b761 = _0x1402e6(_0x5f480b(0x1166a));
                class _0xad3baf extends _0x52b761['default'] {
                    constructor(_0xf8b8ef, _0x8b9da0, _0x262caa, _0x4e6c2d) {
                        const _0x5ddf71 = _0x4440d9;
                        super(_0xf8b8ef, _0x8b9da0, _0x262caa, _0x4e6c2d), this[_0x5ddf71(0x80b)] = !0x1, this[_0x5ddf71(0x51a)] = [0x888866, 0x886666, 0x888844];
                        let _0x2ea087 = _0x5b6bfb[_0x5ddf71(0xd2c)][this['enemyType']][0x0];
                        this['defaultScale'] = _0x2ea087[_0x5ddf71(0x7cb)] ? _0x2ea087[_0x5ddf71(0x7cb)] : 0x1;
                    } ['OnMusicBeat']() {
                        const _0x1332f1 = _0x4440d9;
                        this[_0x1332f1(0xba3)] ? this['TurnBlue']() : this[_0x1332f1(0xdb4)]();
                    } ['OnRecycle']() {
                        const _0x191c83 = _0x4440d9;
                        super[_0x191c83(0x5ce)](), this[_0x191c83(0x1454)] = Phaser['Math'][_0x191c83(0x82a)][_0x191c83(0x198c)](this[_0x191c83(0x51a)]), this[_0x191c83(0x19b0)] = this['saveTint'], this[_0x191c83(0xe32)] = !0x1, this['isRed'] = !0x1, this['invertFlip'] = !0x1;
                    } ['TurnBlue']() {
                        const _0x4cc7b6 = _0x4440d9;
                        this[_0x4cc7b6(0xdae)] || (this[_0x4cc7b6(0xe32)] = !0x0, this['isRed'] = !0x1, this[_0x4cc7b6(0x80b)] = !0x1, this[_0x4cc7b6(0x1454)] = 0x8888ff, this['tint'] = this[_0x4cc7b6(0x1454)], this[_0x4cc7b6(0x8a2)](1.2), _0x37aff3[_0x4cc7b6(0xd2c)]['Core']['CommonVFXManager'][_0x4cc7b6(0x17aa)][_0x4cc7b6(0x108b)](this['x'], this['y']));
                    } ['TurnRed']() {
                        const _0x2ff6a0 = _0x4440d9;
                        this[_0x2ff6a0(0xdae)] || (this[_0x2ff6a0(0xe32)] = !0x1, this[_0x2ff6a0(0xba3)] = !0x0, this[_0x2ff6a0(0x1454)] = 0xff8888, this['tint'] = this[_0x2ff6a0(0x1454)], this[_0x2ff6a0(0x8a2)](1.2), _0x37aff3[_0x2ff6a0(0xd2c)]['Core']['CommonVFXManager'][_0x2ff6a0(0x11d9)][_0x2ff6a0(0x108b)](this['x'], this['y']));
                    } ['Die']() {
                        const _0x133308 = _0x4440d9;
                        super[_0x133308(0x14f3)]();
                    } ['Disappear']() {
                        const _0x426c25 = _0x4440d9;
                        super[_0x426c25(0xe00)]();
                    } ['DeSpawn']() {
                        const _0x8eafce = _0x4440d9;
                        super[_0x8eafce(0x14fb)]();
                    } ['GetDamaged'](_0x38d886 = 0x1, _0x105570 = _0x21c538['default']['DEFAULT'], _0x4882d6 = 0x1, _0x58301a = _0xa7afcc['default']['VOID'], _0x76119e = !0x0) {
                        const _0x29e95a = _0x4440d9;
                        let _0x1445a1 = 0x0;
                        this[_0x29e95a(0xe32)] || this[_0x29e95a(0xba3)] ? this[_0x29e95a(0xe32)] ? _0xad3baf['BlueWeapons'][_0x29e95a(0x1303)](_0x58301a) > -0x1 && (_0x1445a1 = _0x38d886) : this['isRed'] && _0xad3baf[_0x29e95a(0x134f)][_0x29e95a(0x1303)](_0x58301a) > -0x1 && (_0x1445a1 = _0x38d886) : _0x1445a1 = _0x38d886, _0x38d886 = _0x1445a1, this['damageWeakness'] > 0x1 && (_0x38d886 *= this['damageWeakness']), _0x38d886 > 0x0 && _0x37aff3[_0x29e95a(0xd2c)][_0x29e95a(0x1043)][_0x29e95a(0x14d8)][_0x29e95a(0xf09)] && _0x37aff3[_0x29e95a(0xd2c)]['Core'][_0x29e95a(0x989)](this['x'], this['y'], _0x38d886), this['hp'] -= _0x38d886, this['hp'] <= 0x0 ? this[_0x29e95a(0x14f3)]() : this[_0x29e95a(0x25d)] = _0x4882d6, _0x37aff3[_0x29e95a(0xd2c)][_0x29e95a(0x1267)][_0x29e95a(0x7f6)](_0x1fead6[_0x29e95a(0xd2c)]['Hit'], {
                            'volume': 0.5,
                            'detune': 0x1f4 * (Math['random']() - 0.5)
                        }, 0x96, 0x3), _0x105570 != _0x21c538[_0x29e95a(0xd2c)]['NONE'] && _0x37aff3['default'][_0x29e95a(0x1043)]['ShowHitVFXAt'](this['x'], this['y'], _0x105570), this['OnGetDamaged'](_0x105570, _0x76119e);
                    } ['Update'](_0x5b7f3d = 0x0) {
                        const _0x23c1c1 = _0x4440d9;
                        if (this['isDead']) return;
                        if (this['depth'] = this['y'] - _0x37aff3['default'][_0x23c1c1(0x1043)][_0x23c1c1(0x10f6)]['y'], this[_0x23c1c1(0x14a3)]) return;
                        if ((!this[_0x23c1c1(0x197a)] || this[_0x23c1c1(0x197a)] && 0x0 == this['_currentDirection']['x'] && 0x0 == this[_0x23c1c1(0x70d)]['y']) && (this[_0x23c1c1(0x70d)]['x'] = this[_0x23c1c1(0x18a7)]['x'] - this['x'], this[_0x23c1c1(0x70d)]['y'] = this[_0x23c1c1(0x18a7)]['y'] - this['y'], this[_0x23c1c1(0x70d)]['normalize']()), this['Medusa'] && (this[_0x23c1c1(0x1562)] += 0.05, this[_0x23c1c1(0x70d)]['y'] = Math[_0x23c1c1(0xd7e)](this[_0x23c1c1(0x1562)])), this[_0x23c1c1(0xde3)] && (this[_0x23c1c1(0xe5c)][_0x23c1c1(0xf01)](this), !this['isSelfDestructionTriggered'])) {
                            let _0x5d21dc = new Phaser[(_0x23c1c1(0x24f))][(_0x23c1c1(0x1551))](this['x'], this['y']);
                            new Phaser[(_0x23c1c1(0x24f))]['Vector2'](_0x37aff3[_0x23c1c1(0xd2c)]['Core'][_0x23c1c1(0x10f6)]['x'], _0x37aff3[_0x23c1c1(0xd2c)][_0x23c1c1(0x1043)][_0x23c1c1(0x10f6)]['y'])[_0x23c1c1(0x297)](_0x5d21dc) < this[_0x23c1c1(0x1233)] && (this[_0x23c1c1(0xb8f)] = !0x0, this[_0x23c1c1(0x6d2)][_0x23c1c1(0x18bd)]['existing'](this[_0x23c1c1(0xe5c)])[_0x23c1c1(0x183f)](!0x0)['setAlpha'](0x1)['setScale'](0x1), this['alertTween'] && (this['alertTween'][_0x23c1c1(0x1a34)](), this['alertTween'] = null), this['alertTween'] = this[_0x23c1c1(0x6d2)][_0x23c1c1(0x12a1)]['add']({
                                'targets': this[_0x23c1c1(0xe5c)],
                                'alpha': 0x0,
                                'scale': 0.9,
                                'yoyo': !0x0,
                                'duration': 0xc8,
                                'repeat': -0x1,
                                'onRepeat': () => {
                                    const _0x396886 = _0x23c1c1;
                                    this['alertTween'][_0x396886(0x20c)](1.1 * this[_0x396886(0x1a3d)]['getTimeScale']()), _0x37aff3[_0x396886(0xd2c)][_0x396886(0x1267)][_0x396886(0x7f6)](_0x1fead6[_0x396886(0xd2c)]['Alert'], {
                                        'volume': 0.2
                                    }, 0xfa, 0x3);
                                }
                            }), this[_0x23c1c1(0x1a3d)]['setTimeScale'](0x1), this[_0x23c1c1(0x1af2)] = this['scene'][_0x23c1c1(0x915)][_0x23c1c1(0x12b8)]({
                                'delay': 0x7d0,
                                'callback': () => this['OnSelfDestruct']()
                            }));
                        }
                        let _0x496f49 = this[_0x23c1c1(0x3f1)] ? -this[_0x23c1c1(0x1992)] * this[_0x23c1c1(0x25d)] : 0x1;
                        this[_0x23c1c1(0xb8d)](this[_0x23c1c1(0x80b)] ? this['_currentDirection']['x'] < 0x0 : this[_0x23c1c1(0x70d)]['x'] > 0x0);
                        let _0x12226c = _0x1cd565['default'][_0x23c1c1(0xc23)] * this[_0x23c1c1(0x78e)] * _0x496f49 * this[_0x23c1c1(0x13fb)];
                        this['setVelocity'](_0x12226c * this['_currentDirection']['x'], _0x12226c * this['_currentDirection']['y']), this[_0x23c1c1(0x9b5)](_0x52b761['default']['TweenAngles'][this['moveTweenIndex']][_0x23c1c1(0xd96)]), this[_0x23c1c1(0x7cb)] = this['Approach'](this[_0x23c1c1(0x7cb)], this[_0x23c1c1(0x715)], 0.01);
                    } ['Approach'](_0x399bed, _0x264acd, _0x164457) {
                        const _0x417237 = _0x4440d9;
                        return _0x399bed < _0x264acd ? Math[_0x417237(0x1084)](_0x399bed + _0x164457, _0x264acd) : Math[_0x417237(0x1981)](_0x399bed - _0x164457, _0x264acd);
                    }
                }
                _0x58b2c3['default'] = _0xad3baf, _0xad3baf['BlueWeapons'] = [_0xa7afcc['default']['MAGIC_MISSILE'], _0xa7afcc['default']['KNIFE'], _0xa7afcc['default']['AXE'], _0xa7afcc['default']['CROSS'], _0xa7afcc['default']['HOLYBOOK'], _0xa7afcc['default']['HOLYWATER'], _0xa7afcc['default']['LIGHTNING'], _0xa7afcc['default']['LOOP'], _0xa7afcc['default']['CORRIDOR'], _0xa7afcc['default']['GUNS2'], _0xa7afcc['default']['GUNS2_COUNTER'], _0xa7afcc['default']['SILF_COUNTER'], _0xa7afcc['default']['SILF3'], _0xa7afcc['default']['LANCET'], _0xa7afcc['default']['VENTO'], _0xa7afcc['default']['VICTORY'], _0xa7afcc['default']['SILVERWIND'], _0xa7afcc['default']['SUMMONNIGHT2'], _0xa7afcc['default']['BUBBLES'], _0xa7afcc['default']['BUBBLES2'], _0xa7afcc['default']['SPELL_STRIKE'], _0xa7afcc['default']['SPELL_STRING'], _0xa7afcc['default']['SPELL_STREAM'], _0xa7afcc['default']['SPELL_STROM'], _0xa7afcc['default']['HOLY_MISSILE'], _0xa7afcc['default']['THOUSAND'], _0xa7afcc['default']['HEAVENSWORD'], _0xa7afcc['default']['BORA'], _0xa7afcc['default']['TRIASSO1'], _0xa7afcc['default']['TRIASSO2'], _0xa7afcc['default']['TRIASSO3'], _0xa7afcc['default']['MIRAGEROBE'], _0xa7afcc['default']['MIRAGEROBE2'], _0xa7afcc['default']['COLDEXPLOSION'], _0xa7afcc['default']['JUBILEE'], _0xa7afcc['default']['JUBILEE_RAYS'], _0xa7afcc['default']['ROCHER'], _0xa7afcc['default']['PARTY_COUNTER'], _0xa7afcc['default']['SONG'], _0xa7afcc['default']['MANNAGGIA'], _0xa7afcc['default']['ROSARY'], _0xa7afcc['default']['PENTAGRAM'], _0xa7afcc['default']['SIRE'], _0xa7afcc['default']['PRISMATICMISS'], _0xa7afcc['default']['PRISMATICMISS2'], _0xa7afcc['default']['CHERRY2'], _0xa7afcc['default']['CHERRY_STAR'], _0xa7afcc['default']['CHERRY_STAR_EXPLO'], _0xa7afcc['default']['FOURSEASONS'], _0xa7afcc['default']['FOURSEASONS2']], _0xad3baf['RedWeapons'] = [_0xa7afcc['default']['FIREBALL'], _0xa7afcc['default']['SILF2_COUNTER'], _0xa7afcc['default']['SILF3'], _0xa7afcc['default']['GUNS'], _0xa7afcc['default']['GUNS_COUNTER'], _0xa7afcc['default']['TRAPANO'], _0xa7afcc['default']['SHROUD'], _0xa7afcc['default']['CORRIDOR'], _0xa7afcc['default']['VENTO2'], _0xa7afcc['default']['VENTO2_EXPLO'], _0xa7afcc['default']['VENTO2_EXTRA'], _0xa7afcc['default']['MISSPELL'], _0xa7afcc['default']['SUMMONNIGHT'], _0xa7afcc['default']['NIGHTSWORD'], _0xa7afcc['default']['NIGHTSWORD2'], _0xa7afcc['default']['LEGIONNAIRE'], _0xa7afcc['default']['VAMPIRICA'], _0xa7afcc['default']['HEAVENSWORD'], _0xa7afcc['default']['SCYTHE'], _0xa7afcc['default']['VESPERS'], _0xa7afcc['default']['HELLFIRE'], _0xa7afcc['default']['TRAPANO2'], _0xa7afcc['default']['MIRAGEROBE2'], _0xa7afcc['default']['FIREEXPLOSION'], _0xa7afcc['default']['NDUJA'], _0xa7afcc['default']['NDUJA_COUNTER'], _0xa7afcc['default']['ASTRONOMIA'], _0xa7afcc['default']['BLOOD_GARLIC'], _0xa7afcc['default']['BLOOD_LANCET'], _0xa7afcc['default']['BLOOD_LAUREL'], _0xa7afcc['default']['BLOOD_PENTAGRAM'], _0xa7afcc['default']['BLOOD_SONG'], _0xa7afcc['default']['JUBILEE'], _0xa7afcc['default']['JUBILEE_RAYS'], _0xa7afcc['default']['PARTY'], _0xa7afcc['default']['SONG'], _0xa7afcc['default']['MANNAGGIA'], _0xa7afcc['default']['ROSARY'], _0xa7afcc['default']['PENTAGRAM'], _0xa7afcc['default']['SIRE'], _0xa7afcc['default']['PRISMATICMISS'], _0xa7afcc['default']['PRISMATICMISS2'], _0xa7afcc['default']['CHERRY2'], _0xa7afcc['default']['CHERRY_STAR'], _0xa7afcc['default']['CHERRY_STAR_EXPLO'], _0xa7afcc['default']['FOURSEASONS'], _0xa7afcc['default']['FOURSEASONS2']];
            };
