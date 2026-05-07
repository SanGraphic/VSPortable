// Module 0x3107
// Args: _0x507171, _0x108534, _0x515b7f

export default (_0x507171, _0x108534, _0x515b7f) => {
                'use strict';
                const _0x3c0337 = a0_0x6932;
                var _0x2389f3 = this && this['__importDefault'] || function(_0x1ee450) {
                    const _0x300faa = _0x3c0337;
                    return _0x1ee450 && _0x1ee450[_0x300faa(0x16f1)] ? _0x1ee450 : {
                        'default': _0x1ee450
                    };
                };
                Object['defineProperty'](_0x108534, '__esModule', {
                    'value': !0x0
                });
                const _0x21ea9c = _0x2389f3(_0x515b7f(0x136b9)),
                    _0x1e0981 = _0x2389f3(_0x515b7f(0x54e3)),
                    _0x1e1222 = {
                        [_0x1e0981['default']['WHIP']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['WHIP'],
                            'name': 'Whip',
                            'description': 'Attacks horizontally, passes through enemies.',
                            'tips': 'Ignores: speed, duration.',
                            'texture': 'items',
                            'frameName': 'Whip.png',
                            'evoSynergy': [_0x1e0981['default']['MAXHEALTH']],
                            'evoInto': _0x1e0981['default']['VAMPIRICA'],
                            'isUnlocked': !0x0,
                            'poolLimit': 0x1e,
                            'rarity': 0x64,
                            'interval': 0x546,
                            'repeatInterval': 0x64,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'hitsWalls': !0x1,
                            'critChance': 0.2,
                            'critMul': 0x2
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0.5
                        }, {
                            'power': 0.5,
                            'area': 0.1
                        }, {
                            'power': 0.5
                        }, {
                            'power': 0.5,
                            'area': 0.1
                        }, {
                            'power': 0.5
                        }, {
                            'power': 0.5,
                            'addEvolvedWeapon': _0x1e0981['default']['VAMPIRICA']
                        }],
                        [_0x1e0981['default']['VAMPIRICA']]: [{
                            'hidden': !0x1,
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['VAMPIRICA'],
                            'name': 'Bloody Tear',
                            'description': 'Evolved Whip. Can deal critical damage and absorb HP.',
                            'tips': 'Requires: Hollow Heart',
                            'texture': 'items',
                            'frameName': 'Whip2.png',
                            'isEvolution': !0x0,
                            'evolvesFrom': [_0x1e0981['default']['WHIP']],
                            'requires': [_0x1e0981['default']['MAXHEALTH']],
                            'evoInto': _0x1e0981['default']['VENTO2'],
                            'hitVFX': _0x21ea9c['default']['DARK'],
                            'isUnlocked': !0x0,
                            'poolLimit': 0x1e,
                            'rarity': 0x1,
                            'interval': 0x546,
                            'repeatInterval': 0x64,
                            'power': 0x4,
                            'area': 1.3,
                            'speed': 0x1,
                            'amount': 0x2,
                            'critChance': 0.1,
                            'critMul': 0x2,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['MAGIC_MISSILE']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['MAGIC_MISSILE'],
                            'name': 'Magic Wand',
                            'description': 'Fires at the nearest enemy.',
                            'tips': 'Ignores: duration.',
                            'texture': 'items',
                            'frameName': 'WandHoly.png',
                            'evoSynergy': [_0x1e0981['default']['COOLDOWN']],
                            'evoInto': _0x1e0981['default']['HOLY_MISSILE'],
                            'isUnlocked': !0x0,
                            'poolLimit': 0x3c,
                            'rarity': 0x64,
                            'interval': 0x4b0,
                            'repeatInterval': 0x64,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'penetrating': 0x1
                        }, {
                            'amount': 0x1
                        }, {
                            'interval': -0xc8
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0x1
                        }, {
                            'amount': 0x1
                        }, {
                            'penetrating': 0x1
                        }, {
                            'power': 0x1,
                            'addEvolvedWeapon': _0x1e0981['default']['HOLY_MISSILE']
                        }],
                        [_0x1e0981['default']['HOLY_MISSILE']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['HOLY_MISSILE'],
                            'name': 'Holy Wand',
                            'description': 'Evolved Magic Wand. Fires with no delay.',
                            'tips': 'Requires: Empty Tome.',
                            'texture': 'items',
                            'frameName': 'WandHoly2.png',
                            'isEvolution': !0x0,
                            'evolvesFrom': [_0x1e0981['default']['MAGIC_MISSILE']],
                            'requires': [_0x1e0981['default']['COOLDOWN']],
                            'volume': 0.1,
                            'poolLimit': 0x3c,
                            'rarity': 0x1,
                            'interval': 0x1f4,
                            'repeatInterval': 0x64,
                            'power': 0x3,
                            'area': 0x1,
                            'speed': 0x2,
                            'amount': 0x4,
                            'penetrating': 0x2
                        }],
                        [_0x1e0981['default']['KNIFE']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['KNIFE'],
                            'name': 'Knife',
                            'description': 'Fires quickly in the faced direction.',
                            'tips': 'Ignores: duration.',
                            'texture': 'items',
                            'frameName': 'Knife.png',
                            'evoSynergy': [_0x1e0981['default']['SPEED']],
                            'evoInto': _0x1e0981['default']['THOUSAND'],
                            'isUnlocked': !0x0,
                            'poolLimit': 0x46,
                            'rarity': 0x64,
                            'interval': 0x3e8,
                            'repeatInterval': 0x64,
                            'power': 0.65,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'penetrating': 0x1,
                            'knockback': 0.5,
                            'critChance': 0.3,
                            'critMul': 0x3
                        }, {
                            'amount': 0x1
                        }, {
                            'amount': 0x1,
                            'power': 0.5
                        }, {
                            'amount': 0x1,
                            'repeatInterval': -0x14
                        }, {
                            'penetrating': 0x1
                        }, {
                            'amount': 0x1,
                            'repeatInterval': -0x14
                        }, {
                            'amount': 0x1,
                            'power': 0.5
                        }, {
                            'penetrating': 0x1,
                            'repeatInterval': -0x14,
                            'addEvolvedWeapon': _0x1e0981['default']['THOUSAND']
                        }],
                        [_0x1e0981['default']['THOUSAND']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['THOUSAND'],
                            'name': 'Thousand Edge',
                            'description': 'Evolved Knife. Fires with no delay.',
                            'tips': 'Requires: Bracer.',
                            'texture': 'items',
                            'frameName': 'Knife2.png',
                            'isEvolution': !0x0,
                            'volume': 0.2,
                            'evolvesFrom': [_0x1e0981['default']['KNIFE']],
                            'requires': [_0x1e0981['default']['SPEED']],
                            'poolLimit': 0x46,
                            'rarity': 0x1,
                            'interval': 0x15e,
                            'repeatInterval': 0x32,
                            'power': 1.65,
                            'area': 0x1,
                            'speed': 1.5,
                            'amount': 0x6,
                            'penetrating': 0x3,
                            'knockback': 0.5,
                            'critChance': 0.3,
                            'critMul': 0x3
                        }],
                        [_0x1e0981['default']['AXE']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['AXE'],
                            'name': 'Axe',
                            'description': 'High damage, high Area scaling.',
                            'tips': 'Ignores: duration.',
                            'texture': 'items',
                            'frameName': 'Axe.png',
                            'evoSynergy': [_0x1e0981['default']['AREA']],
                            'evoInto': _0x1e0981['default']['SCYTHE'],
                            'isUnlocked': !0x0,
                            'poolLimit': 0x46,
                            'rarity': 0x64,
                            'interval': 0xfa0,
                            'repeatInterval': 0xc8,
                            'power': 0x2,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'penetrating': 0x3,
                            'duration': 0x7d0,
                            'hitsWalls': !0x1,
                            'critChance': 0.3,
                            'critMul': 0x2
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0x2
                        }, {
                            'penetrating': 0x2
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0x2
                        }, {
                            'penetrating': 0x2
                        }, {
                            'power': 0x2,
                            'addEvolvedWeapon': _0x1e0981['default']['SCYTHE']
                        }],
                        [_0x1e0981['default']['SCYTHE']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['SCYTHE'],
                            'name': 'Death Spiral',
                            'description': 'Evolved Axe. Passes through enemies.',
                            'tips': 'Requires: Candelabrador.',
                            'texture': 'items',
                            'frameName': 'Scythe.png',
                            'isEvolution': !0x0,
                            'evolvesFrom': [_0x1e0981['default']['AXE']],
                            'requires': [_0x1e0981['default']['AREA']],
                            'poolLimit': 0x32,
                            'rarity': 0x1,
                            'interval': 0xfa0,
                            'repeatInterval': 0x32,
                            'power': 0x6,
                            'area': 1.2,
                            'speed': 0.8,
                            'amount': 0x9,
                            'penetrating': 0x3e8,
                            'hitsWalls': !0x1,
                            'critChance': 0.3,
                            'critMul': 0x2
                        }],
                        [_0x1e0981['default']['CROSS']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['CROSS'],
                            'name': 'Cross',
                            'description': 'Aims at nearest enemy, has boomerang effect.',
                            'tips': 'Ignores: duration.',
                            'texture': 'items',
                            'frameName': 'Cross.png',
                            'evoSynergy': [_0x1e0981['default']['LUCK']],
                            'evoInto': _0x1e0981['default']['HEAVENSWORD'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x1e,
                            'rarity': 0x50,
                            'interval': 0x7d0,
                            'repeatInterval': 0x64,
                            'power': 0.5,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'hitsWalls': !0x1
                        }, {
                            'power': 0x1
                        }, {
                            'speed': 0.25,
                            'area': 0.1
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0x1
                        }, {
                            'speed': 0.25,
                            'area': 0.1
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0x1,
                            'addEvolvedWeapon': _0x1e0981['default']['HEAVENSWORD']
                        }],
                        [_0x1e0981['default']['HEAVENSWORD']]: [{
                            'hidden': !0x1,
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['HEAVENSWORD'],
                            'name': 'Heaven Sword',
                            'description': 'Evolved Cross. Can deal critical damage.',
                            'tips': 'Requires: Clover.',
                            'texture': 'items',
                            'frameName': 'HeavenSword.png',
                            'isEvolution': !0x0,
                            'evolvesFrom': [_0x1e0981['default']['CROSS']],
                            'requires': [_0x1e0981['default']['LUCK']],
                            'hitVFX': _0x21ea9c['default']['LIGHT'],
                            'poolLimit': 0x14,
                            'rarity': 0x1,
                            'isUnlocked': !0x1,
                            'interval': 0xce4,
                            'repeatInterval': 0x1f4,
                            'knockback': 0x6,
                            'power': 7.7,
                            'area': 1.2,
                            'speed': 0x2,
                            'amount': 0x1,
                            'critChance': 0.1,
                            'critMul': 2.5,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['HOLYBOOK']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['HOLYBOOK'],
                            'name': 'King Bible',
                            'description': 'Orbits around the character.',
                            'tips': 'Best with: speed, duration, area.',
                            'texture': 'items',
                            'frameName': 'HolyBook.png',
                            'evoSynergy': [_0x1e0981['default']['DURATION']],
                            'evoInto': _0x1e0981['default']['VESPERS'],
                            'isUnlocked': !0x0,
                            'poolLimit': 0x32,
                            'rarity': 0x50,
                            'interval': 0xbb8,
                            'repeatInterval': 0x0,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0xbb8,
                            'hitBoxDelay': 0x6a4,
                            'intervalDependsOnDuration': !0x0,
                            'hitsWalls': !0x1
                        }, {
                            'amount': 0x1
                        }, {
                            'speed': 0.3,
                            'area': 0.25
                        }, {
                            'duration': 0x1f4,
                            'power': 0x1
                        }, {
                            'amount': 0x1
                        }, {
                            'speed': 0.3,
                            'area': 0.25
                        }, {
                            'duration': 0x1f4,
                            'power': 0x1
                        }, {
                            'amount': 0x1,
                            'addEvolvedWeapon': _0x1e0981['default']['VESPERS']
                        }],
                        [_0x1e0981['default']['VESPERS']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['VESPERS'],
                            'name': 'Unholy Vespers',
                            'description': 'Evolved King Bible. Never ends.',
                            'tips': 'Requires: Spellbinder.',
                            'texture': 'items',
                            'frameName': 'UnholyBook.png',
                            'isEvolution': !0x0,
                            'evolvesFrom': [_0x1e0981['default']['HOLYBOOK']],
                            'requires': [_0x1e0981['default']['DURATION']],
                            'hitVFX': _0x21ea9c['default']['DARK'],
                            'poolLimit': 0x32,
                            'rarity': 0x1,
                            'interval': 0xbb8,
                            'repeatInterval': 0x0,
                            'power': 0x3,
                            'area': 1.75,
                            'speed': 1.5,
                            'amount': 0x4,
                            'duration': 0xbb8,
                            'hitBoxDelay': 0x6a4,
                            'knockback': 0x4,
                            'hitsWalls': !0x1,
                            'intervalDependsOnDuration': !0x1
                        }],
                        [_0x1e0981['default']['FIREBALL']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['FIREBALL'],
                            'name': 'Fire Wand',
                            'description': 'Fires at a random enemy, deals heavy damage.',
                            'tips': 'Ignores: duration.',
                            'texture': 'items',
                            'frameName': 'WandFire.png',
                            'evoSynergy': [_0x1e0981['default']['MIGHT']],
                            'evoInto': _0x1e0981['default']['HELLFIRE'],
                            'hitVFX': _0x21ea9c['default']['FIRE'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x1e,
                            'rarity': 0x50,
                            'interval': 0xbb8,
                            'repeatInterval': 0x14,
                            'power': 0x2,
                            'area': 0x1,
                            'speed': 0.75,
                            'amount': 0x3,
                            'duration': 0x64
                        }, {
                            'power': 0x1
                        }, {
                            'power': 0x1,
                            'speed': 0.2
                        }, {
                            'power': 0x1
                        }, {
                            'power': 0x1,
                            'speed': 0.2
                        }, {
                            'power': 0x1
                        }, {
                            'power': 0x1,
                            'speed': 0.2
                        }, {
                            'power': 0x1,
                            'addEvolvedWeapon': _0x1e0981['default']['HELLFIRE']
                        }],
                        [_0x1e0981['default']['HELLFIRE']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['HELLFIRE'],
                            'name': 'Hellfire',
                            'description': 'Evolved Fire Wand. Passes through enemies.',
                            'tips': 'Requires: Spinach.',
                            'texture': 'items',
                            'frameName': 'Hellfire.png',
                            'hitVFX': _0x21ea9c['default']['FIRE'],
                            'poolLimit': 0x14,
                            'rarity': 0x1,
                            'isEvolution': !0x0,
                            'evolvesFrom': [_0x1e0981['default']['FIREBALL']],
                            'requires': [_0x1e0981['default']['MIGHT']],
                            'interval': 0xbb8,
                            'repeatInterval': 0xc8,
                            'power': 0xa,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x2,
                            'duration': 0x64,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['GARLIC']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['GARLIC'],
                            'name': 'Garlic',
                            'description': 'Damages nearby enemies. Reduces resistance to knockback and freeze.',
                            'tips': 'Ignores: amount, duration, speed.',
                            'texture': 'items',
                            'frameName': 'Garlic.png',
                            'evoSynergy': [_0x1e0981['default']['REGEN']],
                            'evoInto': _0x1e0981['default']['VORTEX'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x32,
                            'rarity': 0x46,
                            'interval': 0x514,
                            'duration': 0x514,
                            'repeatInterval': 0x0,
                            'power': 0.5,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'knockback': 0x0,
                            'hitsWalls': !0x1
                        }, {
                            'area': 0.4,
                            'power': 0.2
                        }, {
                            'interval': -0x64,
                            'power': 0.1
                        }, {
                            'area': 0.2,
                            'power': 0.1
                        }, {
                            'interval': -0x64,
                            'power': 0.2
                        }, {
                            'area': 0.2,
                            'power': 0.1
                        }, {
                            'interval': -0x64,
                            'power': 0.1
                        }, {
                            'area': 0.2,
                            'power': 0.2,
                            'addEvolvedWeapon': _0x1e0981['default']['VORTEX']
                        }],
                        [_0x1e0981['default']['VORTEX']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['VORTEX'],
                            'name': 'Soul Eater',
                            'description': 'Evolved Garlic. Steals hearts. Power increases when recovering HP.',
                            'tips': 'Requires: Pummarola.',
                            'texture': 'items',
                            'frameName': 'OrbOrange.png',
                            'isEvolution': !0x0,
                            'isUnlocked': !0x1,
                            'poolLimit': 0x32,
                            'rarity': 0x1,
                            'evolvesFrom': [_0x1e0981['default']['GARLIC']],
                            'requires': [_0x1e0981['default']['REGEN']],
                            'interval': 0x3e8,
                            'duration': 0x514,
                            'hitVFX': _0x21ea9c['default']['DARK'],
                            'repeatInterval': 0x0,
                            'power': 0x2,
                            'area': 0x3,
                            'speed': 0x1,
                            'amount': 0x1,
                            'knockback': 0x0,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['HOLYWATER']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['HOLYWATER'],
                            'name': 'Santa Water',
                            'description': 'Generates damaging zones.',
                            'tips': 'Ignores: speed.',
                            'texture': 'items',
                            'frameName': 'HolyWater.png',
                            'evoSynergy': [_0x1e0981['default']['MAGNET']],
                            'evoInto': _0x1e0981['default']['BORA'],
                            'isUnlocked': !0x0,
                            'poolLimit': 0x14,
                            'rarity': 0x64,
                            'interval': 0x1194,
                            'repeatInterval': 0x12c,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0x7d0,
                            'hitBoxDelay': 0x1f4,
                            'knockback': 0x0,
                            'hitsWalls': !0x1
                        }, {
                            'amount': 0x1,
                            'area': 0.2
                        }, {
                            'power': 0x1,
                            'duration': 0x1f4
                        }, {
                            'amount': 0x1,
                            'area': 0.2
                        }, {
                            'power': 0x1,
                            'duration': 0xfa
                        }, {
                            'amount': 0x1,
                            'area': 0.2
                        }, {
                            'power': 0.5,
                            'duration': 0xfa
                        }, {
                            'power': 0.5,
                            'area': 0.2,
                            'addEvolvedWeapon': _0x1e0981['default']['BORA']
                        }],
                        [_0x1e0981['default']['BORA']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['BORA'],
                            'name': 'La Borra',
                            'description': 'Evolved Santa Water. Damaging zones follow you and grow when they move.',
                            'tips': 'Requires: Attractorb.',
                            'texture': 'items',
                            'frameName': 'Water2.png',
                            'isEvolution': !0x0,
                            'evolvesFrom': [_0x1e0981['default']['HOLYWATER']],
                            'requires': [_0x1e0981['default']['MAGNET']],
                            'hitVFX': _0x21ea9c['default']['LIGHT'],
                            'isEvolution': !0x0,
                            'isUnlocked': !0x1,
                            'poolLimit': 0x1e,
                            'rarity': 0x1,
                            'interval': 0xfa0,
                            'repeatInterval': 0x12c,
                            'power': 0x4,
                            'area': 0x2,
                            'speed': 0x1,
                            'amount': 0x4,
                            'duration': 0xfa0,
                            'hitBoxDelay': 0x1f4,
                            'knockback': 0x0,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['DIAMOND']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['DIAMOND'],
                            'name': 'Runetracer',
                            'description': 'Passes through enemies, bounces around.',
                            'tips': 'Best with: speed, duration.',
                            'texture': 'items',
                            'frameName': 'Diamond2.png',
                            'evoSynergy': [_0x1e0981['default']['ARMOR']],
                            'evoInto': _0x1e0981['default']['ROCHER'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x19,
                            'rarity': 0x50,
                            'interval': 0xbb8,
                            'repeatInterval': 0xc8,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0x8ca,
                            'hitBoxDelay': 0x1f4,
                            'intervalDependsOnDuration': !0x1,
                            'unexcludeSelf': !0x0
                        }, {
                            'power': 0.5,
                            'speed': 0.2
                        }, {
                            'power': 0.5,
                            'duration': 0xfa
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0.5,
                            'speed': 0.2
                        }, {
                            'power': 0.5,
                            'duration': 0xfa
                        }, {
                            'amount': 0x1
                        }, {
                            'duration': 0x1f4,
                            'addEvolvedWeapon': _0x1e0981['default']['ROCHER']
                        }],
                        [_0x1e0981['default']['ROCHER']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['ROCHER'],
                            'name': 'NO FUTURE',
                            'description': 'Evolved Runetracer. Explodes when bouncing and in retaliation.',
                            'tips': 'Requires: Armor',
                            'texture': 'items',
                            'frameName': 'Carnage.png',
                            'isEvolution': !0x0,
                            'evolvesFrom': [_0x1e0981['default']['DIAMOND']],
                            'requires': [_0x1e0981['default']['ARMOR']],
                            'hitVFX': _0x21ea9c['default']['LIGHT'],
                            'hidden': !0x1,
                            'isUnlocked': !0x1,
                            'poolLimit': 0x28,
                            'rarity': 0x1,
                            'interval': 0x3e8,
                            'repeatInterval': 0x0,
                            'power': 0x3,
                            'area': 0x1,
                            'speed': 2.8,
                            'amount': 0x1,
                            'duration': 0xbb8,
                            'hitBoxDelay': 0x1f4,
                            'intervalDependsOnDuration': !0x0
                        }],
                        [_0x1e0981['default']['LIGHTNING']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['LIGHTNING'],
                            'name': 'Lightning Ring',
                            'description': 'Strikes at random enemies.',
                            'tips': 'Ignores: speed, duration.',
                            'texture': 'items',
                            'frameName': 'LighningRing.png',
                            'evoSynergy': [_0x1e0981['default']['AMOUNT']],
                            'evoInto': _0x1e0981['default']['LOOP'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x32,
                            'rarity': 0x50,
                            'interval': 0x1194,
                            'repeatInterval': 0x32,
                            'power': 1.5,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x2,
                            'hitsWalls': !0x1
                        }, {
                            'amount': 0x1
                        }, {
                            'area': 0x1,
                            'power': 0x1
                        }, {
                            'amount': 0x1
                        }, {
                            'area': 0x1,
                            'power': 0x2
                        }, {
                            'amount': 0x1
                        }, {
                            'area': 0x1,
                            'power': 0x2
                        }, {
                            'amount': 0x1,
                            'addEvolvedWeapon': _0x1e0981['default']['LOOP']
                        }],
                        [_0x1e0981['default']['LOOP']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['LOOP'],
                            'name': 'Thunder Loop',
                            'description': 'Evolved Lightning Ring. Projectiles strike twice.',
                            'tips': 'Requires: Duplicator.',
                            'texture': 'items',
                            'frameName': 'Thunderloop.png',
                            'evolvesFrom': [_0x1e0981['default']['LIGHTNING']],
                            'requires': [_0x1e0981['default']['AMOUNT']],
                            'isEvolution': !0x0,
                            'isUnlocked': !0x1,
                            'repeatInterval': 0x0,
                            'poolLimit': 0x46,
                            'rarity': 0x1,
                            'interval': 0x1194,
                            'power': 6.5,
                            'area': 0x4,
                            'speed': 0x1,
                            'amount': 0x6,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['PENTAGRAM']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['PENTAGRAM'],
                            'name': 'Pentagram',
                            'description': 'Erases everything in sight.',
                            'tips': 'Best with: cooldown and luck only.',
                            'texture': 'items',
                            'frameName': 'Pentagram.png',
                            'evoSynergy': [_0x1e0981['default']['GROWTH']],
                            'evoInto': _0x1e0981['default']['SIRE'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0xa,
                            'rarity': 0x3c,
                            'interval': 0x15f90,
                            'duration': 0x3e8,
                            'repeatInterval': 0x0,
                            'power': 0x0,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'knockback': -0x2,
                            'chance': 0.1,
                            'hitsWalls': !0x1,
                            'customDescValue': '%0% chance to not erase items.'
                        }, {
                            'interval': -0x2710
                        }, {
                            'chance': 0.15,
                            'customDesc': 0x19
                        }, {
                            'interval': -0x2710
                        }, {
                            'chance': 0.2,
                            'customDesc': 0x2d
                        }, {
                            'interval': -0x1388
                        }, {
                            'chance': 0.2,
                            'customDesc': 0x41
                        }, {
                            'interval': -0x1388,
                            'addEvolvedWeapon': _0x1e0981['default']['SIRE']
                        }],
                        [_0x1e0981['default']['SIRE']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['SIRE'],
                            'name': 'Gorgeous Moon',
                            'description': 'Evolved Pentagram. Generates extra gems and gathers all of them.',
                            'tips': 'Requires: Crown.',
                            'texture': 'items',
                            'frameName': 'Pentagram2.png',
                            'isUnlocked': !0x0,
                            'isEvolution': !0x0,
                            'evolvesFrom': [_0x1e0981['default']['PENTAGRAM']],
                            'requires': [_0x1e0981['default']['GROWTH']],
                            'rarity': 0x1,
                            'interval': 0xea60,
                            'duration': 0x3e8,
                            'repeatInterval': 0x0,
                            'power': 0x0,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'knockback': 0x1,
                            'chance': 0x1,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['SILF']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['SILF'],
                            'name': 'Peachone',
                            'description': 'Bombards in a circling zone.',
                            'tips': 'Best with: cooldown, duration.',
                            'texture': 'items',
                            'frameName': 'Silf1.png',
                            'evoSynergy': [_0x1e0981['default']['SILF2']],
                            'evoInto': _0x1e0981['default']['SILF3'],
                            'hitVFX': _0x21ea9c['default']['LIGHT'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x3c,
                            'rarity': 0x32,
                            'interval': 0x3e8,
                            'repeatInterval': 0x19,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0.8,
                            'amount': 0x4,
                            'duration': 0xfa0,
                            'knockback': 0x2,
                            'hitsWalls': !0x1
                        }, {
                            'amount': 0x1,
                            'area': 0.4
                        }, {
                            'amount': 0x1,
                            'power': 0x1
                        }, {
                            'amount': 0x1,
                            'interval': -0xfa
                        }, {
                            'amount': 0x1,
                            'area': 0.4
                        }, {
                            'amount': 0x1,
                            'power': 0x1
                        }, {
                            'amount': 0x1,
                            'interval': -0xfa
                        }, {
                            'amount': 0x1,
                            'area': 0.4
                        }],
                        [_0x1e0981['default']['SILF2']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['SILF2'],
                            'name': 'Ebony Wings',
                            'description': 'Bombards in a circling zone.',
                            'tips': 'Best with: cooldown, duration.',
                            'texture': 'items',
                            'frameName': 'Silf2.png',
                            'evoSynergy': [_0x1e0981['default']['SILF']],
                            'evoInto': _0x1e0981['default']['SILF3'],
                            'hitVFX': _0x21ea9c['default']['DARK'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x3c,
                            'rarity': 0x32,
                            'interval': 0x3e8,
                            'repeatInterval': 0x19,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0.8,
                            'amount': 0x4,
                            'duration': 0xfa0,
                            'knockback': 0x2,
                            'hitsWalls': !0x1
                        }, {
                            'amount': 0x1,
                            'area': 0.4
                        }, {
                            'amount': 0x1,
                            'power': 0x1
                        }, {
                            'amount': 0x1,
                            'interval': -0xfa
                        }, {
                            'amount': 0x1,
                            'area': 0.4
                        }, {
                            'amount': 0x1,
                            'power': 0x1
                        }, {
                            'amount': 0x1,
                            'interval': -0xfa
                        }, {
                            'amount': 0x1,
                            'area': 0.4,
                            'addEvolvedWeapon': _0x1e0981['default']['SILF3']
                        }],
                        [_0x1e0981['default']['SILF3']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['SILF3'],
                            'name': 'Vandalier',
                            'description': 'Union of Ebony Wings and Peachone.',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'Silf3.png',
                            'isEvolution': !0x0,
                            'evolvesFrom': [_0x1e0981['default']['SILF'], _0x1e0981['default']['SILF2']],
                            'requiresMax': [_0x1e0981['default']['SILF']],
                            'hitVFX': _0x21ea9c['default']['PRISM'],
                            'hidden': !0x1,
                            'isUnlocked': !0x1,
                            'poolLimit': 0x64,
                            'rarity': 0x1,
                            'interval': 0x3e8,
                            'repeatInterval': 0x19,
                            'power': 2.8,
                            'area': 2.2,
                            'speed': 0x1,
                            'amount': 0x14,
                            'duration': 0xfa0,
                            'knockback': 0x2,
                            'hitsWalls': !0x1,
                            'unexcludeSelf': !0x0
                        }, {
                            'area': 0.2
                        }, {
                            'interval': -0xfa
                        }, {
                            'area': 0.2
                        }, {
                            'interval': -0xfa
                        }, {
                            'area': 0.2
                        }, {
                            'interval': -0xfa
                        }, {
                            'area': 0.2
                        }],
                        [_0x1e0981['default']['GUNS']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['GUNS'],
                            'name': 'Phiera Der Tuphello',
                            'description': 'Fires quickly in four fixed directions.',
                            'tips': 'Ignores: duration.',
                            'texture': 'items',
                            'frameName': 'Guns.png',
                            'evoSynergy': [_0x1e0981['default']['REVIVAL'], _0x1e0981['default']['GUNS2']],
                            'evoInto': _0x1e0981['default']['GUNS3'],
                            'hitVFX': _0x21ea9c['default']['RED'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x64,
                            'rarity': 0x32,
                            'interval': 0x578,
                            'repeatInterval': 0xc8,
                            'power': 0.5,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'penetrating': 0x1,
                            'knockback': 0.1,
                            'critChance': 0.1,
                            'critMul': 0x2,
                            'unexcludeSelf': !0x0
                        }, {
                            'amount': 0x1
                        }, {
                            'penetrating': 0x2
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0.5
                        }, {
                            'penetrating': 0x2
                        }, {
                            'speed': 0.5,
                            'power': 0.5
                        }, {
                            'penetrating': 0x2
                        }],
                        [_0x1e0981['default']['GUNS2']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['GUNS2'],
                            'name': 'Eight The Sparrow',
                            'description': 'Fires quickly in four fixed directions.',
                            'tips': 'Ignores: duration.',
                            'texture': 'items',
                            'frameName': 'Guns2.png',
                            'evoSynergy': [_0x1e0981['default']['REVIVAL'], _0x1e0981['default']['GUNS']],
                            'evoInto': _0x1e0981['default']['GUNS3'],
                            'hitVFX': _0x21ea9c['default']['BLUE'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x64,
                            'rarity': 0x32,
                            'interval': 0x578,
                            'repeatInterval': 0xc8,
                            'power': 0.5,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'penetrating': 0x1,
                            'knockback': 0.1,
                            'critChance': 0.1,
                            'critMul': 0x2,
                            'unexcludeSelf': !0x0
                        }, {
                            'amount': 0x1
                        }, {
                            'penetrating': 0x2
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0.5
                        }, {
                            'penetrating': 0x2
                        }, {
                            'speed': 0.5,
                            'power': 0.5
                        }, {
                            'penetrating': 0x2,
                            'addEvolvedWeapon': _0x1e0981['default']['GUNS3']
                        }],
                        [_0x1e0981['default']['GUNS3']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['GUNS3'],
                            'name': 'Phieraggi',
                            'description': 'Union of Phiera Der Tuphello and Eight The Sparrow. Scales with Revivals.',
                            'tips': 'Requires: Tiragisú',
                            'texture': 'items',
                            'frameName': 'Guns3.png',
                            'isEvolution': !0x0,
                            'evolvesFrom': [_0x1e0981['default']['GUNS'], _0x1e0981['default']['GUNS2']],
                            'requires': [_0x1e0981['default']['REVIVAL']],
                            'requiresMax': [_0x1e0981['default']['GUNS']],
                            'hitVFX': _0x21ea9c['default']['BEAM'],
                            'isUnlocked': !0x1,
                            'hitsWalls': !0x1,
                            'poolLimit': 0xc8,
                            'rarity': 0x1,
                            'interval': 0x578,
                            'repeatInterval': 0x64,
                            'hitBoxDelay': 0xc8,
                            'power': 1.5,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x4,
                            'penetrating': 0x7,
                            'knockback': 0.05,
                            'critChance': 0.1,
                            'critMul': 0x2,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['GATTI']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['GATTI'],
                            'name': 'Gatti Amari',
                            'description': 'Summons capricious projectiles. Might interact with pickups.',
                            'tips': 'Best with: luck, floor chicken.',
                            'texture': 'items',
                            'frameName': 'Cat.png',
                            'evoSynergy': [_0x1e0981['default']['GREED']],
                            'evoInto': _0x1e0981['default']['STIGRANGATTI'],
                            'hitVFX': _0x21ea9c['default']['DARK'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x1e,
                            'rarity': 0x32,
                            'interval': 0x1388,
                            'repeatInterval': 0x12c,
                            'power': 0x1,
                            'duration': 0x1388,
                            'hitBoxDelay': 0x3e8,
                            'area': 0x1,
                            'speed': 0.4,
                            'amount': 0x1,
                            'chance': 0.1,
                            'knockback': 0.1,
                            'hitsWalls': !0x0,
                            'unexcludeSelf': !0x0
                        }, {
                            'speed': 0.2
                        }, {
                            'duration': 0x5dc
                        }, {
                            'speed': 0.2
                        }, {
                            'amount': 0x1
                        }, {
                            'duration': 0x5dc
                        }, {
                            'speed': 0.2
                        }, {
                            'amount': 0x1,
                            'addEvolvedWeapon': _0x1e0981['default']['STIGRANGATTI']
                        }],
                        [_0x1e0981['default']['STIGRANGATTI']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['STIGRANGATTI'],
                            'name': 'Vicious Hunger',
                            'description': 'Evolved Gatti Amari. Might turn anything into gold.',
                            'tips': 'Requires: Stone Mask.',
                            'texture': 'items',
                            'frameName': 'cateye.png',
                            'evolvesFrom': [_0x1e0981['default']['GATTI']],
                            'requires': [_0x1e0981['default']['GREED']],
                            'hitVFX': _0x21ea9c['default']['EVIL'],
                            'isEvolution': !0x0,
                            'isUnlocked': !0x1,
                            'poolLimit': 0x3c,
                            'rarity': 0x1,
                            'interval': 0x1f40,
                            'repeatInterval': 0x12c,
                            'power': 0x3,
                            'duration': 0x1b58,
                            'hitBoxDelay': 0x3e8,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x2,
                            'chance': 0.1,
                            'knockback': 0.1,
                            'hitsWalls': !0x0
                        }],
                        [_0x1e0981['default']['SONG']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['SONG'],
                            'name': 'Song Of Mana',
                            'description': 'Attacks vertically, passes through enemies.',
                            'tips': 'Ignores: amount, speed.',
                            'texture': 'items',
                            'frameName': 'Song.png',
                            'evoSynergy': [_0x1e0981['default']['CURSE']],
                            'evoInto': _0x1e0981['default']['MANNAGGIA'],
                            'hitVFX': _0x21ea9c['default']['PRISM'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x1e,
                            'rarity': 0x32,
                            'interval': 0x7d0,
                            'repeatInterval': 0x0,
                            'power': 0x1,
                            'duration': 0x1f4,
                            'hitBoxDelay': 0x3e8,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'hitsWalls': !0x1,
                            'unexcludeSelf': !0x0
                        }, {
                            'area': 0x1
                        }, {
                            'interval': 0x2ee,
                            'duration': 0x1f4
                        }, {
                            'power': 0x1,
                            'area': 0.25
                        }, {
                            'interval': 0x2ee,
                            'duration': 0x1f4
                        }, {
                            'power': 0x1,
                            'area': 0.25
                        }, {
                            'interval': 0x2ee,
                            'duration': 0x1f4
                        }, {
                            'power': 0x1,
                            'area': 0.25,
                            'addEvolvedWeapon': _0x1e0981['default']['MANNAGGIA']
                        }],
                        [_0x1e0981['default']['MANNAGGIA']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['MANNAGGIA'],
                            'name': 'Mannajja',
                            'description': 'Evolved Song of Mana. Might slow enemies down.',
                            'tips': 'Requires: Skull O\'Maniac',
                            'texture': 'items',
                            'frameName': 'Song2.png',
                            'evolvesFrom': [_0x1e0981['default']['SONG']],
                            'requires': [_0x1e0981['default']['CURSE']],
                            'isEvolution': !0x0,
                            'hitVFX': _0x21ea9c['default']['PRISM'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x1e,
                            'rarity': 0x1,
                            'interval': 0x1194,
                            'repeatInterval': 0x0,
                            'power': 0x4,
                            'duration': 0x7d0,
                            'hitBoxDelay': 0x3e8,
                            'area': 0x6,
                            'speed': 0x1,
                            'amount': 0x1,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['TRAPANO']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['TRAPANO'],
                            'name': 'Shadow Pinion',
                            'description': 'Generates damaging zones when moving, strikes when stopping.',
                            'tips': 'Best with: moveSpeed.',
                            'texture': 'items',
                            'frameName': 'trapano.png',
                            'isUnlocked': !0x1,
                            'evoSynergy': [_0x1e0981['default']['MOVESPEED']],
                            'evoInto': _0x1e0981['default']['TRAPANO2'],
                            'hitVFX': _0x21ea9c['default']['DARK'],
                            'poolLimit': 0x64,
                            'rarity': 0x32,
                            'interval': 0x1770,
                            'repeatInterval': 0x12c,
                            'hitBoxDelay': 0x7d0,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0x3e8,
                            'hitsWalls': !0x1,
                            'unexcludeSelf': !0x0
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0.5
                        }, {
                            'duration': 0xfa
                        }, {
                            'power': 0.5
                        }, {
                            'duration': 0xfa
                        }, {
                            'power': 0.5
                        }, {
                            'duration': 0xfa,
                            'addEvolvedWeapon': _0x1e0981['default']['TRAPANO2']
                        }],
                        [_0x1e0981['default']['TRAPANO2']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['TRAPANO2'],
                            'name': 'Valkyrie Turner',
                            'description': 'Evolved Shadow Pinion. Bigger, longer, faster, stronger.',
                            'tips': 'Requires: Wings.',
                            'texture': 'items',
                            'frameName': 'trapano2.png',
                            'isUnlocked': !0x1,
                            'evolvesFrom': [_0x1e0981['default']['TRAPANO']],
                            'requires': [_0x1e0981['default']['MOVESPEED']],
                            'hitVFX': _0x21ea9c['default']['FIRE'],
                            'isEvolution': !0x0,
                            'poolLimit': 0x64,
                            'rarity': 0x1,
                            'interval': 0x1770,
                            'repeatInterval': 0x12c,
                            'hitBoxDelay': 0x7d0,
                            'power': 3.5,
                            'area': 1.4,
                            'speed': 3.5,
                            'amount': 0x1,
                            'duration': 0x7d0,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['LANCET']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['LANCET'],
                            'name': 'Clock Lancet',
                            'description': 'Chance to freeze enemies in time.',
                            'tips': 'Ignores: power, speed, amount, area.',
                            'texture': 'items',
                            'frameName': 'Lancet.png',
                            'hitVFX': _0x21ea9c['default']['TIMEFREEZE'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0xa,
                            'rarity': 0x46,
                            'interval': 0x7d0,
                            'repeatInterval': 0x0,
                            'power': 0x0,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0x7d0,
                            'knockback': 0x0,
                            'hitsWalls': !0x1
                        }, {
                            'duration': 0x3e8
                        }, {
                            'interval': -0x1f4
                        }, {
                            'duration': 0x3e8
                        }, {
                            'duration': 0x3e8
                        }, {
                            'interval': -0x1f4
                        }, {
                            'duration': 0x3e8,
                            'addEvolvedWeapon': _0x1e0981['default']['CORRIDOR']
                        }],
                        [_0x1e0981['default']['CORRIDOR']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['CORRIDOR'],
                            'name': 'Infinite Corridor',
                            'description': 'Evolved Clock Lancet. Halves enemies health.',
                            'tips': 'Requires Max: Gold Ring, Silver Ring.',
                            'texture': 'items',
                            'frameName': 'portal.png',
                            'hitVFX': _0x21ea9c['default']['LIGHT'],
                            'isEvolution': !0x0,
                            'evolvesFrom': [_0x1e0981['default']['LANCET']],
                            'requires': [_0x1e0981['default']['SILVER'], _0x1e0981['default']['GOLD']],
                            'requiresMax': [_0x1e0981['default']['SILVER'], _0x1e0981['default']['GOLD']],
                            'isUnlocked': !0x1,
                            'poolLimit': 0xa,
                            'rarity': 0x1,
                            'interval': 0x3e8,
                            'repeatInterval': 0x0,
                            'power': 0x0,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0x1770,
                            'knockback': 0x0,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['LAUREL']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['LAUREL'],
                            'name': 'Laurel',
                            'description': 'Shields from damage when active.',
                            'tips': 'Best with: cooldown only.',
                            'texture': 'items',
                            'frameName': 'Laurel.png',
                            'isUnlocked': !0x0,
                            'poolLimit': 0x5,
                            'rarity': 0x3c,
                            'interval': 0x2710,
                            'duration': 0x1388,
                            'repeatInterval': 0x0,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'charges': 0x1,
                            'hitsWalls': !0x1
                        }, {
                            'interval': -0x1f4,
                            'shieldInvulTime': 0xc8
                        }, {
                            'interval': -0x1f4,
                            'shieldInvulTime': 0xc8
                        }, {
                            'charges': 0x1
                        }, {
                            'interval': -0x1f4,
                            'shieldInvulTime': 0xc8
                        }, {
                            'interval': -0x1f4,
                            'shieldInvulTime': 0xc8
                        }, {
                            'charges': 0x1,
                            'addEvolvedWeapon': _0x1e0981['default']['SHROUD']
                        }],
                        [_0x1e0981['default']['SHROUD']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['SHROUD'],
                            'name': 'Crimson Shroud',
                            'description': 'Evolved Laurel. Caps incoming damage at 10. Retaliates when losing charges.',
                            'tips': 'Requires Max: Metaglio Left, Metaglio Right.',
                            'texture': 'items',
                            'frameName': 'cape.png',
                            'hitVFX': _0x21ea9c['default']['EVIL'],
                            'poolLimit': 0x32,
                            'isEvolution': !0x0,
                            'evolvesFrom': [_0x1e0981['default']['LAUREL']],
                            'requires': [_0x1e0981['default']['LEFT'], _0x1e0981['default']['RIGHT']],
                            'requiresMax': [_0x1e0981['default']['LEFT'], _0x1e0981['default']['RIGHT']],
                            'isUnlocked': !0x1,
                            'rarity': 0x1,
                            'interval': 0x1f40,
                            'repeatInterval': 0x64,
                            'knockback': 0x14,
                            'power': 0x0,
                            'area': 0x2,
                            'speed': 0x1,
                            'amount': 0x1,
                            'charges': 0x3
                        }],
                        [_0x1e0981['default']['VENTO']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['VENTO'],
                            'name': 'Vento Sacro',
                            'description': 'Stronger with continuous movement. Can deal critical damage.',
                            'tips': 'Best with: Luck, MoveSpeed.',
                            'texture': 'items',
                            'frameName': 'Whip3.png',
                            'evoSynergy': [_0x1e0981['default']['VAMPIRICA']],
                            'evoInto': _0x1e0981['default']['VENTO2'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x78,
                            'rarity': 0x32,
                            'interval': 0x7d0,
                            'repeatInterval': 0x32,
                            'power': 0.2,
                            'area': 1.4,
                            'speed': 0x1,
                            'amount': 0x4,
                            'duration': 0x190,
                            'hitsWalls': !0x1,
                            'critChance': 0.05,
                            'critMul': 0x2,
                            'knockback': 0.1,
                            'unexcludeSelf': !0x0
                        }, {
                            'power': 0.1
                        }, {
                            'area': 0.2,
                            'amount': 0x1
                        }, {
                            'power': 0.1
                        }, {
                            'area': 0.2,
                            'amount': 0x1
                        }, {
                            'power': 0.1
                        }, {
                            'area': 0.2,
                            'amount': 0x1
                        }, {
                            'power': 0.1,
                            'addEvolvedWeapon': _0x1e0981['default']['VENTO2']
                        }],
                        [_0x1e0981['default']['VENTO2']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['VENTO2'],
                            'name': 'Fuwalafuwaloo',
                            'description': 'Union of Vento Sacro and Bloody Tear. Critical hits might generate explosions.',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'Whip4.png',
                            'evolvesFrom': [_0x1e0981['default']['VENTO'], _0x1e0981['default']['VAMPIRICA']],
                            'requires': [_0x1e0981['default']['VAMPIRICA']],
                            'requiresMax': [_0x1e0981['default']['VAMPIRICA']],
                            'isEvolution': !0x0,
                            'isUnlocked': !0x0,
                            'poolLimit': 0x78,
                            'rarity': 0x1,
                            'interval': 0x7d0,
                            'repeatInterval': 0x32,
                            'power': 0x2,
                            'area': 0x2,
                            'speed': 0x1,
                            'amount': 0x8,
                            'duration': 0x190,
                            'hitsWalls': !0x1,
                            'critChance': 0.05,
                            'critMul': 0x2,
                            'knockback': 0.2
                        }],
                        [_0x1e0981['default']['BONE']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['BONE'],
                            'name': 'Bone',
                            'description': 'Throws a bouncing projectile.',
                            'tips': 'Best with: duration, speed.',
                            'texture': 'items',
                            'frameName': 'Bone.png',
                            'isUnlocked': !0x1,
                            'poolLimit': 0x32,
                            'rarity': 0x1,
                            'interval': 0xbb8,
                            'repeatInterval': 0x0,
                            'power': 0.5,
                            'area': 1.2,
                            'speed': 0.75,
                            'amount': 0x1,
                            'duration': 0x7d0
                        }, {
                            'duration': 0xc8,
                            'area': 0.2
                        }, {
                            'power': 0x2,
                            'amount': 0x1
                        }, {
                            'speed': 0.5,
                            'area': 0.2
                        }, {
                            'power': 0x2,
                            'amount': 0x1
                        }, {
                            'duration': 0xc8
                        }, {
                            'power': 0x2
                        }, {
                            'duration': 0xc8,
                            'speed': 0.5
                        }],
                        [_0x1e0981['default']['BONE2']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['BONE2'],
                            'name': 'Anima of Mortaccio',
                            'description': 'Evolved Bone. Projectiles accelerate when bouncing.',
                            'tips': 'Requires: Tetraforce.',
                            'texture': 'items',
                            'frameName': 'animaMortaccio.png',
                            'evolvesFrom': [_0x1e0981['default']['BONE']],
                            'isEvolution': !0x0,
                            'hidden': !0x0,
                            'alwaysHidden': !0x0,
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'poolLimit': 0x50,
                            'rarity': 0x1,
                            'interval': 0xbb8,
                            'repeatInterval': 0x0,
                            'power': 6.5,
                            'area': 1.6,
                            'speed': 1.75,
                            'amount': 0x3,
                            'duration': 0xa28
                        }],
                        [_0x1e0981['default']['CHERRY']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['CHERRY'],
                            'name': 'Cherry Bomb',
                            'description': 'Throws a bouncing projectile. Explodes, sometimes.',
                            'tips': 'Best with: luck.',
                            'texture': 'items',
                            'frameName': 'Cherry.png',
                            'isUnlocked': !0x1,
                            'poolLimit': 0x32,
                            'rarity': 0x1,
                            'interval': 0xbb8,
                            'repeatInterval': 0x12c,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0x7d0,
                            'chance': 0.4,
                            'customDescValue': '%0% chance to explode.'
                        }, {
                            'area': 0.25,
                            'speed': 0.3
                        }, {
                            'chance': 0.1,
                            'customDesc': 0x32
                        }, {
                            'amount': 0x1
                        }, {
                            'area': 0.25,
                            'power': 0.5
                        }, {
                            'chance': 0.1,
                            'customDesc': 0x3c
                        }, {
                            'area': 0.25,
                            'speed': 0.3
                        }, {
                            'area': 0.25,
                            'power': 0.5
                        }],
                        [_0x1e0981['default']['CHERRY2']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['CHERRY2'],
                            'name': 'Yatta Daikarin',
                            'description': 'Evolved Cherry Bomb. Generates extra explosions that can deal critical Luck based damage.',
                            'tips': 'Requires: Tetraforce.',
                            'texture': 'items',
                            'frameName': 'animaYattaCavallo.png',
                            'evolvesFrom': [_0x1e0981['default']['CHERRY']],
                            'isEvolution': !0x0,
                            'hidden': !0x0,
                            'alwaysHidden': !0x0,
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'poolLimit': 0x50,
                            'rarity': 0x1,
                            'interval': 0xbb8,
                            'repeatInterval': 0x12c,
                            'power': 0x2,
                            'area': 0x2,
                            'speed': 1.6,
                            'amount': 0x2,
                            'chance': 0x3c,
                            'duration': 0xa28
                        }],
                        [_0x1e0981['default']['CART2']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['CART2'],
                            'name': 'Carréllo',
                            'description': 'Throws a bouncing projectile. Number of bounces affected by Amount.',
                            'tips': 'Ignores: duration.',
                            'texture': 'items',
                            'frameName': 'CartWheel.png',
                            'hidden': !0x1,
                            'isUnlocked': !0x1,
                            'poolLimit': 0x32,
                            'rarity': 0x1,
                            'interval': 0x157c,
                            'hitsWalls': !0x0,
                            'power': 0x1,
                            'area': 0.6,
                            'speed': 0x1,
                            'amount': 0x2,
                            'chance': 0x1
                        }, {
                            'area': 0.2
                        }, {
                            'power': 0x3,
                            'interval': 0x12c
                        }, {
                            'speed': 0.5
                        }, {
                            'power': 0x3,
                            'interval': 0x12c
                        }, {
                            'area': 0.2
                        }, {
                            'power': 0x3,
                            'interval': 0x12c
                        }, {
                            'speed': 0.5
                        }],
                        [_0x1e0981['default']['FLOWER']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['FLOWER'],
                            'name': 'Celestial Dusting',
                            'description': 'Throws a bouncing projectile. Cooldown reduces when moving.',
                            'tips': 'Best with: moveSpeed.',
                            'texture': 'items',
                            'frameName': 'flower.png',
                            'isUnlocked': !0x1,
                            'hitVFX': _0x21ea9c['default']['PRISM'],
                            'poolLimit': 0x64,
                            'rarity': 0x1,
                            'interval': 0x1770,
                            'repeatInterval': 0x64,
                            'hitBoxDelay': 0x12c,
                            'power': 0.5,
                            'area': 0x1,
                            'speed': 0.7,
                            'amount': 0x1,
                            'duration': 0x1f4,
                            'knockback': 0.1,
                            'customDescValue': 'Defeated enemies might drop hearts.'
                        }, {
                            'duration': 0x3e8
                        }, {
                            'speed': 0.3
                        }, {
                            'power': 0.5
                        }, {
                            'speed': 0.3
                        }, {
                            'amount': 0x1
                        }, {
                            'speed': 0.3
                        }, {
                            'customDesc': 0x0
                        }],
                        [_0x1e0981['default']['LAROBBA']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['LAROBBA'],
                            'name': 'La Robba',
                            'description': 'Generates bouncing projectiles.',
                            'tips': 'Best with: duration, speed.',
                            'texture': 'items',
                            'frameName': 'larobba.png',
                            'isUnlocked': !0x1,
                            'poolLimit': 0x32,
                            'rarity': 0x1,
                            'interval': 0x1194,
                            'repeatInterval': 0x12c,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x3,
                            'duration': 0x7d0,
                            'hitBoxDelay': 0x1f4,
                            'knockback': 0.1,
                            'hitsWalls': !0x1
                        }, {
                            'amount': 0x1,
                            'duration': 0xfa
                        }, {
                            'power': 0x1
                        }, {
                            'amount': 0x1,
                            'duration': 0xfa
                        }, {
                            'power': 0x1,
                            'speed': 0.5
                        }, {
                            'amount': 0x1,
                            'duration': 0xfa
                        }, {
                            'power': 0x1
                        }, {
                            'amount': 0x1,
                            'duration': 0xfa
                        }],
                        [_0x1e0981['default']['JUBILEE']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['JUBILEE'],
                            'name': 'Greatest Jubilee',
                            'description': 'Has a chance to summon light sources.',
                            'tips': 'Best with: Luck.',
                            'texture': 'items',
                            'frameName': 'jubilee.png',
                            'evoSynergy': [],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x64,
                            'rarity': 0x14,
                            'interval': 0xbb8,
                            'repeatInterval': 0xc8,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0x64,
                            'chance': 0.01,
                            'critChance': 0.05,
                            'critMul': 0x2,
                            'hitBoxDelay': 0x1f4,
                            'knockback': 0.1,
                            'hitsWalls': !0x1,
                            'customDescValue': 'Enables finisher.'
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0x1,
                            'interval': -0x1f4
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0x1,
                            'area': 0.25
                        }, {
                            'amount': 0x1
                        }, {
                            'area': 0.25,
                            'interval': -0x1f4
                        }, {
                            'amount': 0x1
                        }, {
                            'customDesc': 0x0
                        }],
                        [_0x1e0981['default']['TRIASSO1']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['TRIASSO1'],
                            'name': 'Bracelet',
                            'description': 'Fires three projectiles at a random enemy.',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'bracelet1.png',
                            'hitVFX': _0x21ea9c['default']['FIRE'],
                            'evoInto': _0x1e0981['default']['TRIASSO2'],
                            'isUnlocked': !0x1,
                            'poolLimit': 0x50,
                            'rarity': 0x28,
                            'interval': 0x578,
                            'repeatInterval': 0x28,
                            'power': 0x1,
                            'area': 0.9,
                            'speed': 1.5,
                            'amount': 0x3,
                            'duration': 0x190,
                            'penetrating': 0x1,
                            'hitsWalls': !0x1
                        }, {
                            'power': 0x1
                        }, {
                            'penetrating': 0x1
                        }, {
                            'amount': 0x1,
                            'area': 0.1
                        }, {
                            'penetrating': 0x1
                        }, {
                            'power': 0x1,
                            'addEvolvedWeapon': _0x1e0981['default']['TRIASSO2']
                        }],
                        [_0x1e0981['default']['TRIASSO2']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['TRIASSO2'],
                            'name': 'Bi-Bracelet',
                            'description': 'Fires three projectiles at a random enemy.',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'bracelet2.png',
                            'evolvesFrom': [_0x1e0981['default']['TRIASSO1']],
                            'requires': [_0x1e0981['default']['TRIASSO1']],
                            'requiresMax': [_0x1e0981['default']['TRIASSO1']],
                            'hitVFX': _0x21ea9c['default']['FIRE'],
                            'evoInto': _0x1e0981['default']['TRIASSO3'],
                            'isEvolution': !0x0,
                            'isUnlocked': !0x0,
                            'poolLimit': 0x50,
                            'rarity': 0x14,
                            'interval': 0x578,
                            'repeatInterval': 0x28,
                            'power': 0x3,
                            'area': 0x1,
                            'speed': 1.5,
                            'amount': 0x4,
                            'duration': 0x258,
                            'penetrating': 0x5,
                            'hitsWalls': !0x1
                        }, {
                            'penetrating': 0x1
                        }, {
                            'amount': 0x1,
                            'area': 0.1
                        }, {
                            'interval': -0xc8,
                            'duration': 0xc8
                        }, {
                            'amount': 0x1,
                            'area': 0.1
                        }, {
                            'penetrating': 0x1,
                            'addEvolvedWeapon': _0x1e0981['default']['TRIASSO3']
                        }],
                        [_0x1e0981['default']['TRIASSO3']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['TRIASSO3'],
                            'name': 'Tri-Bracelet',
                            'description': 'Fires three projectiles at a random enemy.',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'bracelet3.png',
                            'evolvesFrom': [_0x1e0981['default']['TRIASSO2']],
                            'requires': [_0x1e0981['default']['TRIASSO2']],
                            'requiresMax': [_0x1e0981['default']['TRIASSO2']],
                            'hitVFX': _0x21ea9c['default']['FIRE'],
                            'isEvolution': !0x0,
                            'isUnlocked': !0x0,
                            'poolLimit': 0x50,
                            'rarity': 0x14,
                            'interval': 0x4b0,
                            'repeatInterval': 0x28,
                            'power': 0x3,
                            'area': 1.2,
                            'speed': 1.5,
                            'amount': 0x6,
                            'duration': 0x3e8,
                            'penetrating': 0x7,
                            'hitsWalls': !0x1
                        }, {
                            'amount': 0x1,
                            'area': 0.1
                        }, {
                            'interval': -0xc8,
                            'duration': 0xc8
                        }, {
                            'power': 0x2,
                            'amount': 0x1
                        }, {
                            'interval': -0xc8,
                            'duration': 0xc8
                        }, {
                            'amount': 0x1,
                            'area': 0.1
                        }],
                        [_0x1e0981['default']['CANDYBOX']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['CANDYBOX'],
                            'name': 'Candybox',
                            'description': 'Allows you to choose any unlocked base weapon.',
                            'tips': 'Appearance in level up options affected by Luck.',
                            'texture': 'items',
                            'frameName': 'candybox.png',
                            'isUnlocked': !0x1,
                            'hidden': !0x1,
                            'poolLimit': 0x0,
                            'rarity': 0x2,
                            'dropRateAffectedByLuck': !0x0,
                            'interval': Number['MAX_SAFE_INTEGER'],
                            'repeatInterval': Number['MAX_SAFE_INTEGER'],
                            'power': 0x0,
                            'area': 0x0,
                            'speed': 0x0,
                            'amount': 0x0,
                            'duration': 0x0,
                            'addEvolvedWeapon': _0x1e0981['default']['CANDYBOX2']
                        }],
                        [_0x1e0981['default']['CANDYBOX2']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['CANDYBOX2'],
                            'name': 'Super Candybox II Turbo',
                            'description': 'Gift of Candybox. Allows to choose among a selection of advanced weapons.',
                            'tips': 'Requires: Candybox.',
                            'texture': 'items',
                            'frameName': 'candybox2.png',
                            'collectionFrame': 'frameB_bold.png',
                            'isUnlocked': !0x1,
                            'isEvolution': !0x0,
                            'hidden': !0x0,
                            'poolLimit': 0x0,
                            'rarity': 0.1,
                            'dropRateAffectedByLuck': !0x0,
                            'interval': Number['MAX_SAFE_INTEGER'],
                            'repeatInterval': Number['MAX_SAFE_INTEGER'],
                            'power': 0x0,
                            'area': 0x0,
                            'speed': 0x0,
                            'amount': 0x0,
                            'duration': 0x0
                        }],
                        [_0x1e0981['default']['VICTORY']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['VICTORY'],
                            'name': 'Victory Sword',
                            'description': 'Strikes with a combo attack at the nearest enemy. Retaliates.',
                            'tips': 'Ignores: speed, duration.',
                            'texture': 'items',
                            'frameName': 'victory1.png',
                            'collectionFrame': 'frameB_bold.png',
                            'evoInto': _0x1e0981['default']['SOLES'],
                            'isUnlocked': !0x1,
                            'hidden': !0x0,
                            'poolLimit': 0x64,
                            'rarity': 0x1e,
                            'interval': 0x73a,
                            'repeatInterval': 0x64,
                            'power': 0.5,
                            'area': 1.4,
                            'speed': 0x1,
                            'amount': 0x2,
                            'hitsWalls': !0x1,
                            'critChance': 0.1,
                            'critMul': 0x2,
                            'canCrit': !0x1,
                            'unexcludeSelf': !0x0,
                            'customDescValue': 'Enables critical hits and combo finisher.'
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0.5,
                            'area': 0.2
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0x1,
                            'area': 0.2
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0x1,
                            'area': 0.2
                        }, {
                            'customDesc': 0x0
                        }, {
                            'power': 0x1
                        }, {
                            'interval': -0xfa
                        }, {
                            'interval': -0xfa
                        }, {
                            'interval': -0xfa,
                            'addEvolvedWeapon': _0x1e0981['default']['SOLES']
                        }],
                        [_0x1e0981['default']['SOLES']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['SOLES'],
                            'name': 'Sole Solution',
                            'description': 'Gift of Victory Sword. The more enemies are defeated, the stronger it grows.',
                            'tips': 'Requires Max: Torrona\'s Box.',
                            'texture': 'items',
                            'frameName': 'solesolution.png',
                            'collectionFrame': 'frameB_bold.png',
                            'requires': [_0x1e0981['default']['VICTORY']],
                            'requiresMax': [_0x1e0981['default']['VICTORY'], _0x1e0981['default']['PANDORA']],
                            'isEvolution': !0x0,
                            'isUnlocked': !0x0,
                            'hidden': !0x0,
                            'displayAsPassive': !0x0,
                            'poolLimit': 0x64,
                            'rarity': 0x1,
                            'interval': 0x4e20,
                            'duration': 0x2710,
                            'repeatInterval': 0x64,
                            'knockback': 0x0,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'hitsWalls': !0x1,
                            'hitBoxDelay': 0x64
                        }],
                        [_0x1e0981['default']['MISSPELL']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['MISSPELL'],
                            'name': 'Flames of Misspell',
                            'description': 'Emits cones of flames.',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'flame1.png',
                            'collectionFrame': 'frameB_bold.png',
                            'evoInto': _0x1e0981['default']['MISSPELL2'],
                            'isUnlocked': !0x1,
                            'hidden': !0x0,
                            'hitVFX': _0x21ea9c['default']['FIRE'],
                            'poolLimit': 0x64,
                            'rarity': 0x1e,
                            'interval': 0xfa0,
                            'repeatInterval': 0x28,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0xc,
                            'duration': 0x190
                        }, {
                            'speed': 0.25
                        }, {
                            'power': 0x1
                        }, {
                            'area': 0.5,
                            'interval': -0x1f4
                        }, {
                            'speed': 0.25
                        }, {
                            'power': 0x1
                        }, {
                            'area': 0.5,
                            'interval': -0x1f4
                        }, {
                            'interval': -0x1f4,
                            'addEvolvedWeapon': _0x1e0981['default']['MISSPELL2']
                        }],
                        [_0x1e0981['default']['MISSPELL2']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['MISSPELL2'],
                            'name': 'Ashes of Muspell',
                            'description': 'Evolved Flames of Misspell. The more enemies are defeated, the stronger it grows.',
                            'tips': 'Requires Max: Torrona\'s Box.',
                            'texture': 'items',
                            'frameName': 'flame3.png',
                            'collectionFrame': 'frameB_bold.png',
                            'evolvesFrom': [_0x1e0981['default']['MISSPELL']],
                            'requires': [_0x1e0981['default']['PANDORA']],
                            'requiresMax': [_0x1e0981['default']['PANDORA']],
                            'hitVFX': _0x21ea9c['default']['EVIL'],
                            'isEvolution': !0x0,
                            'isUnlocked': !0x0,
                            'hidden': !0x0,
                            'poolLimit': 0xc8,
                            'rarity': 0x1,
                            'interval': 0x7d0,
                            'repeatInterval': 0x28,
                            'power': 0x5,
                            'area': 0x2,
                            'speed': 1.5,
                            'amount': 0xc,
                            'duration': 0x190
                        }],
                        [_0x1e0981['default']['NDUJA']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['NDUJA'],
                            'name': 'Nduja Fritta',
                            'description': '',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'Nft1.png',
                            'hidden': !0x0,
                            'alwaysHidden': !0x0,
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'hitVFX': _0x21ea9c['default']['FIRE'],
                            'poolLimit': 0x32,
                            'rarity': 0x0,
                            'interval': 0x1f4,
                            'repeatInterval': 0x28,
                            'power': 0x3,
                            'area': 0x2,
                            'speed': 0x3,
                            'amount': 0xc,
                            'duration': 0x3e8
                        }],
                        [_0x1e0981['default']['NDUJA_COUNTER']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['NDUJA_COUNTER'],
                            'name': 'Nduja Fritta',
                            'description': '',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'Nft1.png',
                            'hidden': !0x0,
                            'alwaysHidden': !0x0,
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'hitVFX': _0x21ea9c['default']['FIRE'],
                            'poolLimit': 0x32,
                            'rarity': 0x0,
                            'interval': 0x1f4,
                            'repeatInterval': 0x28,
                            'power': 0x3,
                            'area': 0x2,
                            'speed': 0x3,
                            'amount': 0xc,
                            'duration': 0x3e8
                        }],
                        [_0x1e0981['default']['CART']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['CART'],
                            'name': 'Dairy Cart',
                            'description': '',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'dummyCart.png',
                            'hidden': !0x0,
                            'alwaysHidden': !0x0,
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'poolLimit': 0xa,
                            'rarity': 0x0,
                            'interval': 0x4e20,
                            'repeatInterval': 0x64,
                            'power': 0xa,
                            'area': 0x1,
                            'speed': 0x2,
                            'amount': 0x1,
                            'duration': 0x2710
                        }],
                        [_0x1e0981['default']['SARABANDE']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['SARABANDE'],
                            'name': 'Sarabande of Healing',
                            'description': '',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'dummySarabande.png',
                            'hidden': !0x0,
                            'alwaysHidden': !0x0,
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'hitVFX': _0x21ea9c['default']['NONE'],
                            'poolLimit': 0x32,
                            'rarity': 0x0,
                            'interval': 0x1f4,
                            'repeatInterval': 0x32,
                            'power': 0x0,
                            'area': 0x4,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0x12c,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['WINDOW']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['WINDOW'],
                            'name': 'Stained Glass',
                            'description': '',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'dummyWindow.png',
                            'hidden': !0x0,
                            'alwaysHidden': !0x0,
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'hitVFX': _0x21ea9c['default']['PRISM'],
                            'poolLimit': 0x32,
                            'rarity': 0x0,
                            'interval': 0x1388,
                            'repeatInterval': 0x1388,
                            'power': 0xd,
                            'area': 1.25,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0x3e8,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['WINDOW2']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['WINDOW2'],
                            'name': 'Game Killer',
                            'description': '',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'GemBlue.png',
                            'hidden': !0x0,
                            'alwaysHidden': !0x0,
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'hitVFX': _0x21ea9c['default']['PRISM'],
                            'poolLimit': 0x12c,
                            'rarity': 0x0,
                            'interval': 0x1388,
                            'repeatInterval': 0x1388,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0x3e8,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['FIREEXPLOSION']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['FIREEXPLOSION'],
                            'name': 'Heart of Fire',
                            'description': '',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'dummyFire.png',
                            'hidden': !0x0,
                            'alwaysHidden': !0x0,
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'hitVFX': _0x21ea9c['default']['NONE'],
                            'poolLimit': 0x32,
                            'rarity': 0x0,
                            'interval': 0x1f4,
                            'repeatInterval': 0x32,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0x12c,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['COLDEXPLOSION']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['COLDEXPLOSION'],
                            'name': 'Out of Bounds',
                            'description': '',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'dummyIce.png',
                            'hidden': !0x0,
                            'alwaysHidden': !0x0,
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'hitVFX': _0x21ea9c['default']['TIMEFREEZE'],
                            'poolLimit': 0x12c,
                            'rarity': 0x0,
                            'interval': 0x1f4,
                            'repeatInterval': 0x32,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0x12c,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['BLOODLINE']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['BLOODLINE'],
                            'name': 'Divine Bloodline',
                            'description': '',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'dummyDivine.png',
                            'hidden': !0x0,
                            'alwaysHidden': !0x0,
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'hitVFX': _0x21ea9c['default']['NONE'],
                            'poolLimit': 0x32,
                            'rarity': 0x0,
                            'interval': 0x1f4,
                            'repeatInterval': 0x32,
                            'power': 0x0,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'duration': 0x12c,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['ASTRONOMIA']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['ASTRONOMIA'],
                            'name': 'Blood Astronomia',
                            'description': '',
                            'tips': '',
                            'texture': 'items',
                            'frameName': 'dummyBlood.png',
                            'hidden': !0x0,
                            'alwaysHidden': !0x0,
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'hitVFX': _0x21ea9c['default']['NONE'],
                            'poolLimit': 0x96,
                            'rarity': 0x1,
                            'interval': 0x7d0,
                            'repeatInterval': 0x0,
                            'power': 0.5,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'knockback': 0x0,
                            'hitsWalls': !0x1
                        }],
                        [_0x1e0981['default']['MIGHT']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['MIGHT'],
                            'name': 'Spinach',
                            'description': 'Raises inflicted damage by 10%.',
                            'texture': 'items',
                            'frameName': 'Leaf.png',
                            'evoSynergy': [_0x1e0981['default']['FIREBALL']],
                            'evoInto': _0x1e0981['default']['HELLFIRE'],
                            'isUnlocked': !0x0,
                            'rarity': 0x64,
                            'isPowerUp': !0x0,
                            'power': 0.1
                        }, {
                            'power': 0.1
                        }, {
                            'power': 0.1
                        }, {
                            'power': 0.1
                        }, {
                            'power': 0.1
                        }],
                        [_0x1e0981['default']['ARMOR']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['ARMOR'],
                            'name': 'Armor',
                            'description': 'Reduces incoming damage by 1. Increases retaliatory damage by 10%.',
                            'texture': 'items',
                            'frameName': 'ArmorIron.png',
                            'evoSynergy': [_0x1e0981['default']['DIAMOND']],
                            'evoInto': _0x1e0981['default']['ROCHER'],
                            'isUnlocked': !0x0,
                            'rarity': 0x64,
                            'isPowerUp': !0x0,
                            'armor': 0x1
                        }, {
                            'armor': 0x1
                        }, {
                            'armor': 0x1
                        }, {
                            'armor': 0x1
                        }, {
                            'armor': 0x1
                        }],
                        [_0x1e0981['default']['MAXHEALTH']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['MAXHEALTH'],
                            'name': 'Hollow Heart',
                            'description': 'Augments max health by 20%.',
                            'texture': 'items',
                            'frameName': 'HeartBlack.png',
                            'evoSynergy': [_0x1e0981['default']['WHIP']],
                            'evoInto': _0x1e0981['default']['VAMPIRICA'],
                            'isUnlocked': !0x1,
                            'rarity': 0x5a,
                            'isPowerUp': !0x0,
                            'maxHp': 0.2
                        }, {
                            'maxHp': 0.2
                        }, {
                            'maxHp': 0.2
                        }, {
                            'maxHp': 0.2
                        }, {
                            'maxHp': 0.2
                        }],
                        [_0x1e0981['default']['REGEN']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'hidden': !0x1,
                            'bulletType': _0x1e0981['default']['REGEN'],
                            'name': 'Pummarola',
                            'description': 'Character recovers 0.2 HP per second.',
                            'texture': 'items',
                            'frameName': 'HeartRuby.png',
                            'evoSynergy': [_0x1e0981['default']['GARLIC']],
                            'evoInto': _0x1e0981['default']['VORTEX'],
                            'isUnlocked': !0x1,
                            'rarity': 0x5a,
                            'isPowerUp': !0x0,
                            'regen': 0.2
                        }, {
                            'regen': 0.2
                        }, {
                            'regen': 0.2
                        }, {
                            'regen': 0.2
                        }, {
                            'regen': 0.2
                        }],
                        [_0x1e0981['default']['COOLDOWN']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['COOLDOWN'],
                            'name': 'Empty Tome',
                            'description': 'Reduces weapons cooldown by 8%.',
                            'texture': 'items',
                            'frameName': 'Book2.png',
                            'evoSynergy': [_0x1e0981['default']['MAGIC_MISSILE']],
                            'evoInto': _0x1e0981['default']['HOLY_MISSILE'],
                            'isUnlocked': !0x1,
                            'rarity': 0x32,
                            'isPowerUp': !0x0,
                            'cooldown': -0.08
                        }, {
                            'cooldown': -0.08
                        }, {
                            'cooldown': -0.08
                        }, {
                            'cooldown': -0.08
                        }, {
                            'cooldown': -0.08
                        }],
                        [_0x1e0981['default']['AREA']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['AREA'],
                            'name': 'Candelabrador',
                            'description': 'Augments area of attacks by 10%.',
                            'texture': 'items',
                            'frameName': 'Candelabra.png',
                            'evoSynergy': [_0x1e0981['default']['AXE']],
                            'evoInto': _0x1e0981['default']['SCYTHE'],
                            'isUnlocked': !0x1,
                            'rarity': 0x64,
                            'isPowerUp': !0x0,
                            'area': 0.1
                        }, {
                            'area': 0.1
                        }, {
                            'area': 0.1
                        }, {
                            'area': 0.1
                        }, {
                            'area': 0.1
                        }],
                        [_0x1e0981['default']['SPEED']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['SPEED'],
                            'name': 'Bracer',
                            'description': 'Increases projectiles speed by 10%.',
                            'texture': 'items',
                            'frameName': 'Gauntlet.png',
                            'evoSynergy': [_0x1e0981['default']['KNIFE']],
                            'evoInto': _0x1e0981['default']['THOUSAND'],
                            'isUnlocked': !0x1,
                            'rarity': 0x64,
                            'isPowerUp': !0x0,
                            'speed': 0.1
                        }, {
                            'speed': 0.1
                        }, {
                            'speed': 0.1
                        }, {
                            'speed': 0.1
                        }, {
                            'speed': 0.1
                        }],
                        [_0x1e0981['default']['DURATION']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['DURATION'],
                            'name': 'Spellbinder',
                            'description': 'Increases duration of weapon effects by 10%.',
                            'texture': 'items',
                            'frameName': 'EmblemEye.png',
                            'evoSynergy': [_0x1e0981['default']['HOLYBOOK']],
                            'evoInto': _0x1e0981['default']['VESPERS'],
                            'isUnlocked': !0x1,
                            'rarity': 0x64,
                            'isPowerUp': !0x0,
                            'duration': 0.1
                        }, {
                            'duration': 0.1
                        }, {
                            'duration': 0.1
                        }, {
                            'duration': 0.1
                        }, {
                            'duration': 0.1
                        }],
                        [_0x1e0981['default']['AMOUNT']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['AMOUNT'],
                            'name': 'Duplicator',
                            'description': 'Weapons fire more projectiles.',
                            'texture': 'items',
                            'frameName': 'Ring.png',
                            'evoSynergy': [_0x1e0981['default']['LIGHTNING']],
                            'evoInto': _0x1e0981['default']['LOOP'],
                            'isUnlocked': !0x1,
                            'rarity': 0x32,
                            'isPowerUp': !0x0,
                            'amount': 0x1
                        }, {
                            'amount': 0x1
                        }],
                        [_0x1e0981['default']['MOVESPEED']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['MOVESPEED'],
                            'name': 'Wings',
                            'description': 'Character moves 10% faster.',
                            'texture': 'items',
                            'frameName': 'Wing.png',
                            'evoSynergy': [_0x1e0981['default']['TRAPANO']],
                            'evoInto': _0x1e0981['default']['TRAPANO2'],
                            'isUnlocked': !0x1,
                            'rarity': 0x32,
                            'isPowerUp': !0x0,
                            'moveSpeed': 0.1
                        }, {
                            'moveSpeed': 0.1
                        }, {
                            'moveSpeed': 0.1
                        }, {
                            'moveSpeed': 0.1
                        }, {
                            'moveSpeed': 0.1
                        }],
                        [_0x1e0981['default']['MAGNET']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['MAGNET'],
                            'name': 'Attractorb',
                            'description': 'Character pickups items from further away.',
                            'texture': 'items',
                            'frameName': 'OrbGlow.png',
                            'evoSynergy': [_0x1e0981['default']['HOLYWATER']],
                            'evoInto': _0x1e0981['default']['BORA'],
                            'isUnlocked': !0x1,
                            'rarity': 0x64,
                            'isPowerUp': !0x0,
                            'magnet': 0.5
                        }, {
                            'magnet': 0.33
                        }, {
                            'magnet': 0.25
                        }, {
                            'magnet': 0.2
                        }, {
                            'magnet': 0.33
                        }],
                        [_0x1e0981['default']['LUCK']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['LUCK'],
                            'name': 'Clover',
                            'description': 'Character gets 10% luckier.',
                            'texture': 'items',
                            'frameName': 'Clover.png',
                            'evoSynergy': [_0x1e0981['default']['CROSS']],
                            'evoInto': _0x1e0981['default']['HEAVENSWORD'],
                            'isUnlocked': !0x1,
                            'rarity': 0x64,
                            'isPowerUp': !0x0,
                            'luck': 0.1
                        }, {
                            'luck': 0.1
                        }, {
                            'luck': 0.1
                        }, {
                            'luck': 0.1
                        }, {
                            'luck': 0.1
                        }],
                        [_0x1e0981['default']['GROWTH']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'bulletType': _0x1e0981['default']['GROWTH'],
                            'name': 'Crown',
                            'description': 'Character gains 8% more experience.',
                            'texture': 'items',
                            'frameName': 'Crown.png',
                            'evoSynergy': [_0x1e0981['default']['PENTAGRAM']],
                            'evoInto': _0x1e0981['default']['SIRE'],
                            'rarity': 0x46,
                            'isPowerUp': !0x0,
                            'growth': 0.08
                        }, {
                            'growth': 0.08
                        }, {
                            'growth': 0.08
                        }, {
                            'growth': 0.08
                        }, {
                            'growth': 0.08
                        }],
                        [_0x1e0981['default']['GREED']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'hidden': !0x1,
                            'bulletType': _0x1e0981['default']['GREED'],
                            'name': 'Stone Mask',
                            'description': 'Character earns 10% more coins.',
                            'texture': 'items',
                            'frameName': 'Mask.png',
                            'evoSynergy': [_0x1e0981['default']['GATTI']],
                            'evoInto': _0x1e0981['default']['STIGRANGATTI'],
                            'isUnlocked': !0x1,
                            'rarity': 0x46,
                            'isPowerUp': !0x0,
                            'greed': 0.1,
                            'unexcludeSelf': !0x0
                        }, {
                            'greed': 0.1
                        }, {
                            'greed': 0.1
                        }, {
                            'greed': 0.1
                        }, {
                            'greed': 0.1
                        }],
                        [_0x1e0981['default']['CURSE']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'hidden': !0x1,
                            'bulletType': _0x1e0981['default']['CURSE'],
                            'name': 'Skull O\'Maniac',
                            'description': 'Increases enemy speed, health, quantity, and frequency by 10%.',
                            'texture': 'items',
                            'frameName': 'Curse.png',
                            'evoSynergy': [_0x1e0981['default']['SONG']],
                            'evoInto': _0x1e0981['default']['MANNAGGIA'],
                            'isUnlocked': !0x1,
                            'rarity': 0x28,
                            'isPowerUp': !0x0,
                            'curse': 0.1
                        }, {
                            'curse': 0.1
                        }, {
                            'curse': 0.1
                        }, {
                            'curse': 0.1
                        }, {
                            'curse': 0.1
                        }],
                        [_0x1e0981['default']['REVIVAL']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'hidden': !0x1,
                            'bulletType': _0x1e0981['default']['REVIVAL'],
                            'name': 'Tiragisú',
                            'description': 'Revives once with 50% health.',
                            'texture': 'items',
                            'frameName': 'Tiramisu.png',
                            'evoSynergy': [_0x1e0981['default']['GUNS'], _0x1e0981['default']['GUNS2']],
                            'evoInto': _0x1e0981['default']['GUNS3'],
                            'isUnlocked': !0x1,
                            'rarity': 0x28,
                            'isPowerUp': !0x0,
                            'revivals': 0x1
                        }, {
                            'revivals': 0x1
                        }],
                        [_0x1e0981['default']['PANDORA']]: [{
                            'level': 0x1,
                            'sealable': !0x0,
                            'hidden': !0x1,
                            'bulletType': _0x1e0981['default']['PANDORA'],
                            'name': 'Torrona\'s Box',
                            'description': 'Cursed item, but increases Might, Projectile Speed, Duration, and Area by 4%.',
                            'texture': 'items',
                            'frameName': 'torrone.png',
                            'isUnlocked': !0x1,
                            'rarity': 0x28,
                            'isPowerUp': !0x0,
                            'power': 0.04,
                            'speed': 0.04,
                            'duration': 0.04,
                            'area': 0.04,
                            'unexcludeSelf': !0x0,
                            'override': 'Cursed item, but increases Might, Projectile Speed, Duration, and Area by 4%.',
                            'customOverrideValue': 'Increases Might, Projectile Speed, Duration, and Area by %0%'
                        }, {
                            'power': 0.03,
                            'speed': 0.03,
                            'duration': 0.03,
                            'area': 0.03,
                            'customOverride': 0x3
                        }, {
                            'power': 0.03,
                            'speed': 0.03,
                            'duration': 0.03,
                            'area': 0.03,
                            'customOverride': 0x3
                        }, {
                            'power': 0.03,
                            'speed': 0.03,
                            'duration': 0.03,
                            'area': 0.03,
                            'customOverride': 0x3
                        }, {
                            'power': 0.03,
                            'speed': 0.03,
                            'duration': 0.03,
                            'area': 0.03,
                            'customOverride': 0x3
                        }, {
                            'power': 0.03,
                            'speed': 0.03,
                            'duration': 0.03,
                            'area': 0.03,
                            'customOverride': 0x3
                        }, {
                            'power': 0.03,
                            'speed': 0.03,
                            'duration': 0.03,
                            'area': 0.03,
                            'customOverride': 0x3
                        }, {
                            'power': 0.03,
                            'speed': 0.03,
                            'duration': 0.03,
                            'area': 0.03,
                            'customOverride': 0x3
                        }, {
                            'curse': 0x1
                        }],
                        [_0x1e0981['default']['SILF_COUNTER']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['SILF_COUNTER'],
                            'name': 'Cygnus',
                            'description': 'Bombards in a circling zone.',
                            'tips': 'Best with: cooldown, duration.',
                            'texture': 'items',
                            'frameName': 'Silf1_counter.png',
                            'hitVFX': _0x21ea9c['default']['TIMEFREEZE'],
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'poolLimit': 0x3c,
                            'rarity': 0x32,
                            'interval': 0x3e8,
                            'repeatInterval': 0x19,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0.8,
                            'amount': 0x4,
                            'duration': 0xfa0,
                            'knockback': 0x2,
                            'hitsWalls': !0x1
                        }, {
                            'amount': 0x1,
                            'area': 0.4
                        }, {
                            'amount': 0x1,
                            'power': 0x1
                        }, {
                            'amount': 0x1,
                            'interval': -0xfa
                        }, {
                            'amount': 0x1,
                            'area': 0.4
                        }, {
                            'amount': 0x1,
                            'power': 0x1
                        }, {
                            'amount': 0x1,
                            'interval': -0xfa
                        }, {
                            'amount': 0x1,
                            'area': 0.4
                        }],
                        [_0x1e0981['default']['SILF2_COUNTER']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['SILF2_COUNTER'],
                            'name': 'Zhar Ptytsia',
                            'description': 'Bombards in a circling zone.',
                            'tips': 'Best with: cooldown, duration.',
                            'texture': 'items',
                            'frameName': 'Silf2_counter.png',
                            'hitVFX': _0x21ea9c['default']['FIRE'],
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'poolLimit': 0x3c,
                            'rarity': 0x32,
                            'interval': 0x3e8,
                            'repeatInterval': 0x19,
                            'power': 0x1,
                            'area': 0x1,
                            'speed': 0.8,
                            'amount': 0x4,
                            'duration': 0xfa0,
                            'knockback': 0x2,
                            'hitsWalls': !0x1
                        }, {
                            'amount': 0x1,
                            'area': 0.4
                        }, {
                            'amount': 0x1,
                            'power': 0x1
                        }, {
                            'amount': 0x1,
                            'interval': -0xfa
                        }, {
                            'amount': 0x1,
                            'area': 0.4
                        }, {
                            'amount': 0x1,
                            'power': 0x1
                        }, {
                            'amount': 0x1,
                            'interval': -0xfa
                        }, {
                            'amount': 0x1,
                            'area': 0.4,
                            'addEvolvedWeapon': _0x1e0981['default']['SILF3']
                        }],
                        [_0x1e0981['default']['GUNS_COUNTER']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['GUNS_COUNTER'],
                            'name': 'Red Muscle',
                            'description': 'Fires quickly in four fixed directions.',
                            'tips': 'Ignores: duration.',
                            'texture': 'items',
                            'frameName': 'Guns_counter.png',
                            'hitVFX': _0x21ea9c['default']['RED'],
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'poolLimit': 0x64,
                            'rarity': 0x32,
                            'interval': 0x578,
                            'repeatInterval': 0xc8,
                            'power': 0.5,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'penetrating': 0x1,
                            'knockback': 0.1,
                            'critChance': 0.1,
                            'critMul': 0x2
                        }, {
                            'amount': 0x1
                        }, {
                            'penetrating': 0x2
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0.5
                        }, {
                            'penetrating': 0x2
                        }, {
                            'speed': 0.5,
                            'power': 0.5
                        }, {
                            'penetrating': 0x2
                        }],
                        [_0x1e0981['default']['GUNS2_COUNTER']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['GUNS2_COUNTER'],
                            'name': 'Twice Upon a Time',
                            'description': 'Fires quickly in four fixed directions.',
                            'tips': 'Ignores: duration.',
                            'texture': 'items',
                            'frameName': 'Guns2_counter.png',
                            'hitVFX': _0x21ea9c['default']['BLUE'],
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'poolLimit': 0x64,
                            'rarity': 0x32,
                            'interval': 0x578,
                            'repeatInterval': 0xc8,
                            'power': 0.5,
                            'area': 0x1,
                            'speed': 0x1,
                            'amount': 0x1,
                            'penetrating': 0x1,
                            'knockback': 0.1,
                            'critChance': 0.1,
                            'critMul': 0x2
                        }, {
                            'amount': 0x1
                        }, {
                            'penetrating': 0x2
                        }, {
                            'amount': 0x1
                        }, {
                            'power': 0.5
                        }, {
                            'penetrating': 0x2
                        }, {
                            'speed': 0.5,
                            'power': 0.5
                        }, {
                            'penetrating': 0x2
                        }],
                        [_0x1e0981['default']['GATTI_COUNTER']]: [{
                            'level': 0x1,
                            'bulletType': _0x1e0981['default']['GATTI_COUNTER'],
                            'name': 'Flock Destroyer',
                            'description': 'Summons capricious projectiles. Might interact with pickups.',
                            'tips': 'Best with: luck, floor chicken.',
                            'texture': 'items',
                            'frameName': 'Cat_counter.png',
                            'hitVFX': _0x21ea9c['default']['DARK'],
                            'isUnlocked': !0x1,
                            'isSpecialOnly': !0x0,
                            'poolLimit': 0x1e,
                            'rarity': 0x32,
                            'interval': 0x1388,
                            'repeatInterval': 0x12c,
                            'power': 0x1,
                            'duration': 0x1388,
                            'hitBoxDelay': 0x3e8,
                            'area': 0x1,
                            'speed': 0.4,
                            'amount': 0x1,
                            'chance': 0.1,
                            'knockback': 0.1,
                            'hitsWalls': !0x0
                        }, {
                            'speed': 0.2
                        }, {
                            'duration': 0x5dc
                        }, {
                            'speed': 0.2
                        }, {
                            'amount': 0x1
                        }, {
                            'duration': 0x5dc
                        }, {
                            'speed': 0.2
                        }, {
                            'amount': 0x1
                        }],
                        [_0x1e0981['default']['SILVER']]: [{
                            'level': 0x1,
                            'hidden': !0x1,
                            'bulletType': _0x1e0981['default']['SILVER'],
                            'name': 'Silver Ring',
                            'description': 'Wear ... Clock ...',
                            'texture': 'items',
                            'frameName': 'silverring.png',
                            'evoSynergy': [_0x1e0981['default']['LANCET'], _0x1e0981['default']['GOLD']],
                            'evoInto': _0x1e0981['default']['CORRIDOR'],
                            'unexcludeSelf': !0x0,
                            'isUnlocked': !0x1,
                            'rarity': 0xa,
                            'isPowerUp': !0x0,
                            'isSpecialOnly': !0x0
                        }, {
                            'duration': 0.05,
                            'area': 0.05
                        }, {
                            'duration': 0.05,
                            'area': 0.05
                        }, {
                            'duration': 0.05,
                            'area': 0.05
                        }, {
                            'duration': 0.05,
                            'area': 0.05
                        }, {
                            'duration': 0.05,
                            'area': 0.05
                        }, {
                            'duration': 0.05,
                            'area': 0.05
                        }, {
                            'duration': 0.05,
                            'area': 0.05
                        }, {
                            'duration': 0.05,
                            'area': 0.05
                        }],
                        [_0x1e0981['default']['GOLD']]: [{
                            'level': 0x1,
                            'hidden': !0x1,
                            'bulletType': _0x1e0981['default']['GOLD'],
                            'name': 'Gold Ring',
                            'description': '... With ... Lancet',
                            'texture': 'items',
                            'frameName': 'goldring.png',
                            'evoSynergy': [_0x1e0981['default']['LANCET'], _0x1e0981['default']['SILVER']],
                            'evoInto': _0x1e0981['default']['CORRIDOR'],
                            'unexcludeSelf': !0x0,
                            'isUnlocked': !0x1,
                            'rarity': 0xa,
                            'isPowerUp': !0x0,
                            'isSpecialOnly': !0x0
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }],
                        [_0x1e0981['default']['LEFT']]: [{
                            'level': 0x1,
                            'hidden': !0x1,
                            'bulletType': _0x1e0981['default']['LEFT'],
                            'name': 'Metaglio Left',
                            'description': 'Channels dark powers to protect the bearer.',
                            'texture': 'items',
                            'frameName': 'bsleft.png',
                            'evoSynergy': [_0x1e0981['default']['LAUREL'], _0x1e0981['default']['RIGHT']],
                            'evoInto': _0x1e0981['default']['SHROUD'],
                            'unexcludeSelf': !0x0,
                            'isUnlocked': !0x1,
                            'rarity': 0xa,
                            'isPowerUp': !0x0,
                            'isSpecialOnly': !0x0
                        }, {
                            'regen': 0.1,
                            'maxHp': 0.05
                        }, {
                            'regen': 0.1,
                            'maxHp': 0.05
                        }, {
                            'regen': 0.1,
                            'maxHp': 0.05
                        }, {
                            'regen': 0.1,
                            'maxHp': 0.05
                        }, {
                            'regen': 0.1,
                            'maxHp': 0.05
                        }, {
                            'regen': 0.1,
                            'maxHp': 0.05
                        }, {
                            'regen': 0.1,
                            'maxHp': 0.05
                        }, {
                            'regen': 0.1,
                            'maxHp': 0.05
                        }],
                        [_0x1e0981['default']['RIGHT']]: [{
                            'level': 0x1,
                            'hidden': !0x1,
                            'bulletType': _0x1e0981['default']['RIGHT'],
                            'name': 'Metaglio Right',
                            'description': 'Channels dark powers to curse the bearer.',
                            'texture': 'items',
                            'frameName': 'bsright.png',
                            'evoSynergy': [_0x1e0981['default']['LAUREL'], _0x1e0981['default']['LEFT']],
                            'evoInto': _0x1e0981['default']['SHROUD'],
                            'unexcludeSelf': !0x0,
                            'isUnlocked': !0x1,
                            'rarity': 0xa,
                            'isPowerUp': !0x0,
                            'isSpecialOnly': !0x0
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }, {
                            'curse': 0.05
                        }]
                    };
                _0x108534['default'] = _0x1e1222;
            };
