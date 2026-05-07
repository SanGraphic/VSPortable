// Module 0x19f2
// Args: _0x40b48e, _0x1ed7df, _0x4a6b0e

export default (_0x40b48e, _0x1ed7df, _0x4a6b0e) => {
                'use strict';
                const _0x3cf2a5 = a0_0x6932;
                var _0x80dba5 = this && this['__importDefault'] || function(_0x2f408f) {
                    const _0x284d12 = _0x3cf2a5;
                    return _0x2f408f && _0x2f408f[_0x284d12(0x16f1)] ? _0x2f408f : {
                        'default': _0x2f408f
                    };
                };
                Object['defineProperty'](_0x1ed7df, '__esModule', {
                    'value': !0x0
                });
                const _0x37fdf6 = _0x80dba5(_0x4a6b0e(0x9bda)),
                    _0x1bc04e = _0x80dba5(_0x4a6b0e(0x3fe3)),
                    _0x9ca73c = _0x80dba5(_0x4a6b0e(0x14442)),
                    _0x16ca18 = _0x80dba5(_0x4a6b0e(0x2248)),
                    _0x1eb22c = _0x80dba5(_0x4a6b0e(0x1545b)),
                    _0x3b8573 = _0x80dba5(_0x4a6b0e(0x1229)),
                    _0x577a17 = _0x80dba5(_0x4a6b0e(0x148f5)),
                    _0x259ad3 = _0x80dba5(_0x4a6b0e(0xdfbc)),
                    _0x371456 = _0x80dba5(_0x4a6b0e(0xc42e)),
                    _0x4b223a = {
                        [_0x1bc04e['default']['TOWER']]: [{
                            'order': 0x28,
                            'stageName': 'Gallo Tower',
                            'description': 'This tower hides great magical artifacts and historically accurate monsters.',
                            'uiTexture': 'UI',
                            'uiFrame': 'stage_tower.png',
                            'frameName': 'stage_tower_icon.png',
                            'frameNameUnlock': 'stage_tower_unlock.png',
                            'bestiaryBG': 'background_tower.png',
                            'stageNumber': 'Stage 4',
                            'unlocked': !0x1,
                            'hidden': !0x1,
                            'BGM': _0x577a17['default']['BGM_Tower'],
                            'sideBBGM': _0x577a17['default']['BGM_Tower_B'],
                            'tips': '',
                            'relics': [_0x371456['default']['RELIC_RANDOMAZZO'], _0x371456['default']['RELIC_TEAR']],
                            'yellowRelics': [],
                            'validForCharcaterData': !0x0,
                            'mods': {
                                'TimeLimit': 0x708,
                                'ClockSpeed': 0x1,
                                'PlayerPxSpeed': 1.25,
                                'EnemySpeed': 1.25,
                                'ProjectileSpeed': 0x1,
                                'GoldMultiplier': 1.3,
                                'EnemyHealthMultiplier': 0x1,
                                'LuckBonus': 0x0,
                                'XPBonus': 0x1
                            },
                            'hyper': {
                                'unlocked': !0x1,
                                'TimeLimit': 0x708,
                                'ClockSpeed': 0x1,
                                'PlayerPxSpeed': 0.65,
                                'EnemySpeed': 0.65,
                                'ProjectileSpeed': 0.15,
                                'GoldMultiplier': 0.5,
                                'LuckBonus': 0.1,
                                'XPBonus': 0x0,
                                'EnemyHealthMultiplier': 0x0,
                                'StartingSpawns': 0xa
                            },
                            'inverse': {
                                'tint': 0xff8888,
                                'GoldMultiplier': 0x2,
                                'EnemyHealthMultiplier': 0x2,
                                'LuckBonus': 0.2,
                                'TimeMods': {
                                    'start': 0x0,
                                    'hpPerMinute': 0.05,
                                    'speedPerMinute': 0.005
                                }
                            },
                            'tileset': {
                                'setKey': 'TowerTexturePacked',
                                'setPath': 'assets/tilesets/TowerTexturePacked.png',
                                'mapKey': 'Tower',
                                'mapPath': 'assets/tilesets/Tower.json',
                                'isTiling': !0x0
                            },
                            'background': {
                                'texture': 'background4'
                            },
                            'pizzaIntervalInMilliSeconds': 0x88b8,
                            'pizzaEvents': [{
                                'eventType': _0x3b8573['default']['POLTER_ROULETTE'],
                                'duration': 0x7530,
                                'moreX': 0x32,
                                'moreY': _0x37fdf6['default']['POLTER_DEST'],
                                'moreZ': 0x1
                            }, {
                                'eventType': _0x3b8573['default']['POLTER_ROULETTE'],
                                'duration': 0x7530,
                                'moreX': 0x64,
                                'moreY': _0x37fdf6['default']['POLTER_DEST'],
                                'moreZ': 0x2
                            }, {
                                'eventType': _0x3b8573['default']['POLTER_ROULETTE'],
                                'duration': 0x7530,
                                'moreX': 0x32,
                                'moreY': _0x37fdf6['default']['POLTER_DEST'],
                                'moreZ': 0x2
                            }, {
                                'eventType': _0x3b8573['default']['POLTER_ROULETTE'],
                                'duration': 0x7530,
                                'moreX': 0x32,
                                'moreY': _0x37fdf6['default']['POLTER_DEST'],
                                'moreZ': 0x2
                            }, {
                                'eventType': _0x3b8573['default']['POLTER_SWARM'],
                                'duration': 0x7530,
                                'moreX': 0x14
                            }, {
                                'eventType': _0x3b8573['default']['POLTER_SWARM'],
                                'duration': 0x7530,
                                'moreX': 0x3c
                            }, {
                                'eventType': _0x3b8573['default']['IMP_SWARM'],
                                'duration': 0x7530,
                                'moreX': 0x32
                            }],
                            'spawnType': _0x1eb22c['default']['VERTICAL'],
                            'startingSpawns': 0x32,
                            'minute': 0x0,
                            'destructibleType': _0x9ca73c['default']['CANDELABRA'],
                            'destructibleFreq': 0x3e8,
                            'destructibleChance': 7.5,
                            'destructibleChanceMax': 0x32,
                            'maxDestructibles': 0xa,
                            'BGTextureName': 'bg_null',
                            'cff': _0x259ad3['default']['CONCETTA'],
                            'minimum': 0x32,
                            'frequency': 0xbb8,
                            'enemies': [_0x37fdf6['default']['SKULLINO']],
                            'events': [{
                                'eventType': _0x3b8573['default']['SHOOTING_STAR'],
                                'delay': 0x1388,
                                'moreX': 0x2,
                                'moreY': 0x3e8,
                                'moreZ': 0x1
                            }],
                            'bosses': []
                        }, {
                            'minute': 0x1,
                            'minimum': 0x50,
                            'frequency': 0xbb8,
                            'enemies': [_0x37fdf6['default']['SKULLINO'], _0x37fdf6['default']['SKULOROSSO']],
                            'bosses': [_0x37fdf6['default']['SKELANGUE']]
                        }, {
                            'minute': 0x2,
                            'minimum': 0x64,
                            'frequency': 0xfa0,
                            'enemies': [_0x37fdf6['default']['SKULLINO'], _0x37fdf6['default']['BAT3']],
                            'events': [{
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0x1,
                                'moreY': _0x37fdf6['default']['XLDRAGON1_FLAG'],
                                'duration': 0x7530
                            }, {
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0x3,
                                'moreY': _0x37fdf6['default']['XLDRAGON1_FLAG'],
                                'duration': 0x7530,
                                'delay': 0x1388,
                                'chance': 0x46,
                                'repeat': 0x4
                            }]
                        }, {
                            'minute': 0x3,
                            'minimum': 0x3c,
                            'frequency': 0xfa0,
                            'enemies': [_0x37fdf6['default']['SKELANGUE']],
                            'bosses': [_0x37fdf6['default']['DEVIL3']],
                            'treasure': {
                                'chances': [0.1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x4,
                            'minimum': 0x6e,
                            'frequency': 0xfa0,
                            'enemies': [_0x37fdf6['default']['SKULLINO'], _0x37fdf6['default']['SKELETON']],
                            'bosses': [_0x37fdf6['default']['XLMAGIO']],
                            'events': [{
                                'eventType': _0x3b8573['default']['SHOOTING_STAR'],
                                'chance': 0x32,
                                'moreX': 0x2,
                                'moreY': 0x3e8,
                                'moreZ': 0x1
                            }, {
                                'eventType': _0x3b8573['default']['SHOOTING_STAR'],
                                'delay': 0x2710,
                                'chance': 0x32,
                                'repeat': 0x2,
                                'moreX': 0x2,
                                'moreY': 0x3e8,
                                'moreZ': 0x1
                            }]
                        }, {
                            'minute': 0x5,
                            'minimum': 0x64,
                            'frequency': 0xfa0,
                            'enemies': [_0x37fdf6['default']['SKULL2_EASY'], _0x37fdf6['default']['SKELANGUE']],
                            'bosses': [_0x37fdf6['default']['DEVIL3']],
                            'events': [{
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0xc,
                                'moreY': _0x37fdf6['default']['XLDRAGON1_FLAG'],
                                'duration': 0x7530
                            }, {
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0xc,
                                'moreY': _0x37fdf6['default']['XLDRAGON1_FLAG'],
                                'duration': 0x7530,
                                'delay': 0x1388,
                                'chance': 0x46,
                                'repeat': 0x5
                            }],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EXISTING_WEAPON'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x6,
                            'minimum': 0x3c,
                            'frequency': 0x7d0,
                            'enemies': [_0x37fdf6['default']['DULL0'], _0x37fdf6['default']['SKULOROSSO']],
                            'events': [{
                                'eventType': _0x3b8573['default']['DRAGONSTREAM'],
                                'delay': 0x2710,
                                'chance': 0x46,
                                'moreX': 0x2d,
                                'moreZ': 0x5
                            }]
                        }, {
                            'minute': 0x7,
                            'minimum': 0x50,
                            'frequency': 0x7d0,
                            'enemies': [_0x37fdf6['default']['DEVIL1'], _0x37fdf6['default']['BAT6'], _0x37fdf6['default']['BAT3']],
                            'events': [{
                                'eventType': _0x3b8573['default']['DRAGONSTREAM'],
                                'delay': 0x1388,
                                'chance': 0x46,
                                'moreX': 0x2d,
                                'moreZ': 0x5
                            }]
                        }, {
                            'minute': 0x8,
                            'minimum': 0x50,
                            'frequency': 0x3e8,
                            'enemies': [_0x37fdf6['default']['SKULOROSSO'], _0x37fdf6['default']['GHOST2']],
                            'bosses': [_0x37fdf6['default']['BOSS_SKULL2']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x32],
                                'level': 0x2,
                                'prizeTypes': [_0x16ca18['default']['EXISTING_WEAPON'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x9,
                            'minimum': 0xc8,
                            'frequency': 0x1f4,
                            'enemies': [_0x37fdf6['default']['DULL0'], _0x37fdf6['default']['GHOST2']],
                            'events': [{
                                'eventType': _0x3b8573['default']['PILE_ASSAULT'],
                                'duration': 0x7530,
                                'delay': 0x4e20,
                                'chance': 0x50,
                                'moreX': 0xc,
                                'moreY': _0x37fdf6['default']['XLMAGIO'],
                                'moreZ': 0.4
                            }]
                        }, {
                            'minute': 0xa,
                            'minimum': 0x64,
                            'frequency': 0x1f4,
                            'enemies': [_0x37fdf6['default']['IMP']],
                            'bosses': [_0x37fdf6['default']['BOSS_HARPY']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EXISTING_WEAPON'], _0x16ca18['default']['EXISTING_WEAPON']]
                            },
                            'events': [{
                                'eventType': _0x3b8573['default']['PILE_ASSAULT'],
                                'duration': 0x7530,
                                'delay': 0x2710,
                                'moreX': 0x6,
                                'moreY': _0x37fdf6['default']['XLMAGIO'],
                                'moreZ': 0.4
                            }, {
                                'eventType': _0x3b8573['default']['PILE_ASSAULT'],
                                'duration': 0x7530,
                                'delay': 0x4e20,
                                'chance': 0x3c,
                                'moreX': 0x6,
                                'moreY': _0x37fdf6['default']['XLMAGIO'],
                                'moreZ': 0.4
                            }]
                        }, {
                            'minute': 0xb,
                            'minimum': 0x3c,
                            'frequency': 0x7d0,
                            'enemies': [_0x37fdf6['default']['HARPYV'], _0x37fdf6['default']['XLDRAGON1']],
                            'arcanaHolder': _0x37fdf6['default']['BAT4'],
                            'arcanaTreasure': {
                                'chances': [0x0, 0x0, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['ARCANA'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xc,
                            'minimum': 0x50,
                            'frequency': 0x3e8,
                            'enemies': [_0x37fdf6['default']['HARPYV'], _0x37fdf6['default']['DEVIL1']],
                            'events': [{
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0xc,
                                'moreY': _0x37fdf6['default']['XLDRAGON1_FLAG'],
                                'duration': 0x7530
                            }, {
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0xc,
                                'moreY': _0x37fdf6['default']['XLDRAGON1_FLAG'],
                                'duration': 0x4e20,
                                'delay': 0x1388,
                                'chance': 0x46,
                                'repeat': 0x5
                            }],
                            'bosses': [_0x37fdf6['default']['DEVIL3']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xd,
                            'minimum': 0x78,
                            'frequency': 0x1f4,
                            'enemies': [_0x37fdf6['default']['HARPY'], _0x37fdf6['default']['DEVIL1']],
                            'bosses': [_0x37fdf6['default']['BOSS_XLDRAGON1']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xe,
                            'minimum': 0x12c,
                            'frequency': 0x64,
                            'enemies': [_0x37fdf6['default']['DULL0'], _0x37fdf6['default']['HARPYV'], _0x37fdf6['default']['GHOST2']],
                            'bosses': [_0x37fdf6['default']['DEVIL3']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xf,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x37fdf6['default']['HARPY']],
                            'bosses': [_0x37fdf6['default']['BOSS_GALLO']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x3b8573['default']['DRAGONSTREAM'],
                                'moreX': 0x3c,
                                'moreZ': 0x5
                            }, {
                                'eventType': _0x3b8573['default']['SHOOTING_STAR'],
                                'moreX': 0xc,
                                'moreY': 0x64,
                                'moreZ': 0.5
                            }, {
                                'eventType': _0x3b8573['default']['SHOOTING_STAR'],
                                'delay': 0x1388,
                                'chance': 0x46,
                                'repeat': 0x6,
                                'moreX': 0x3,
                                'moreY': 0x64,
                                'moreZ': 0x1
                            }]
                        }, {
                            'minute': 0x10,
                            'minimum': 0x64,
                            'frequency': 0x3e8,
                            'enemies': [_0x37fdf6['default']['XLMAGIO']],
                            'bosses': [_0x37fdf6['default']['DEVIL3']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0xc,
                                'moreY': _0x37fdf6['default']['XLDRAGON2_FLAG'],
                                'duration': 0x7530
                            }, {
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0x6,
                                'moreY': _0x37fdf6['default']['XLDRAGON2_FLAG'],
                                'duration': 0x7530,
                                'delay': 0x32c8
                            }, {
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0x3,
                                'moreY': _0x37fdf6['default']['XLDRAGON2_FLAG'],
                                'duration': 0x4e20,
                                'delay': 0x7d0,
                                'chance': 0x5a,
                                'repeat': 0xc
                            }]
                        }, {
                            'minute': 0x11,
                            'minimum': 0x64,
                            'frequency': 0x320,
                            'enemies': [_0x37fdf6['default']['XLMAGIO'], _0x37fdf6['default']['XLDRAGON2']]
                        }, {
                            'minute': 0x12,
                            'minimum': 0x3c,
                            'frequency': 0x1f4,
                            'enemies': [_0x37fdf6['default']['SKELEWING_INO'], _0x37fdf6['default']['XLDRAGON2']],
                            'bosses': [_0x37fdf6['default']['BOSS_XLARMOR2']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x13,
                            'minimum': 0xc8,
                            'frequency': 0x1f4,
                            'enemies': [_0x37fdf6['default']['SKELANGUE']]
                        }, {
                            'minute': 0x14,
                            'minimum': 0x64,
                            'frequency': 0x1f4,
                            'enemies': [_0x37fdf6['default']['XLDRAGON1'], _0x37fdf6['default']['DULL0']],
                            'bosses': [_0x37fdf6['default']['BOSS_XLDRAGON2']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EVOLUTION']]
                            }
                        }, {
                            'minute': 0x15,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x37fdf6['default']['XLARMOR1']],
                            'arcanaHolder': _0x37fdf6['default']['BAT4'],
                            'arcanaTreasure': {
                                'chances': [0x0, 0x0, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['ARCANA'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x16,
                            'minimum': 0x50,
                            'frequency': 0x3e8,
                            'enemies': [_0x37fdf6['default']['XLARMOR2'], _0x37fdf6['default']['XLARMOR1']],
                            'events': [{
                                'eventType': _0x3b8573['default']['SHOOTING_STAR'],
                                'delay': 0x7d0,
                                'repeat': 0x19,
                                'moreX': 0x3,
                                'moreY': 0x64,
                                'moreZ': 0x1
                            }],
                            'bosses': [_0x37fdf6['default']['DEVIL3']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x17,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x37fdf6['default']['XLCOCKATRICE'], _0x37fdf6['default']['HARPY']],
                            'bosses': [_0x37fdf6['default']['BOSS_XLCOCKATRICE']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x18,
                            'minimum': 0x3c,
                            'frequency': 0x64,
                            'enemies': [_0x37fdf6['default']['XLCHIMERA']]
                        }, {
                            'minute': 0x19,
                            'minimum': 0x12c,
                            'frequency': 0x64,
                            'enemies': [_0x37fdf6['default']['SKULOROSSO']],
                            'bosses': [_0x37fdf6['default']['BOSS_XLCRAB']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EVOLUTION']]
                            }
                        }, {
                            'minute': 0x1a,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x37fdf6['default']['XLGOLEM3']],
                            'bosses': [_0x37fdf6['default']['BOSS_XLCOCKATRICE']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x1b,
                            'minimum': 0x64,
                            'frequency': 0x3e8,
                            'enemies': [_0x37fdf6['default']['XLGOLEM4'], _0x37fdf6['default']['XLCHIMERA']],
                            'bosses': [_0x37fdf6['default']['BOSS_XLCHIMERA']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0xc,
                                'moreY': _0x37fdf6['default']['XLDRAGON2_FLAG']
                            }, {
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0x6,
                                'moreY': _0x37fdf6['default']['XLDRAGON2_FLAG'],
                                'duration': 0x4e20,
                                'delay': 0x7d0,
                                'chance': 0x5a,
                                'repeat': 0xa
                            }]
                        }, {
                            'minute': 0x1c,
                            'minimum': 0x64,
                            'frequency': 0x3e8,
                            'enemies': [_0x37fdf6['default']['XLGOLEM3'], _0x37fdf6['default']['XLGOLEM4']],
                            'bosses': [_0x37fdf6['default']['BOSS_XLCHIMERA']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x16ca18['default']['EVOLUTION'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY'], _0x16ca18['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x1d,
                            'minimum': 0x32,
                            'frequency': 0x3e8,
                            'enemies': [_0x37fdf6['default']['BOSS_XLDRAGON1'], _0x37fdf6['default']['BOSS_XLDRAGON2']],
                            'events': [{
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0xc,
                                'moreY': _0x37fdf6['default']['XLDRAGON2_FLAG'],
                                'duration': 0x7530
                            }, {
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0x2,
                                'moreY': _0x37fdf6['default']['XLDRAGON2_FLAG'],
                                'duration': 0x4e20,
                                'delay': 0x44c,
                                'chance': 0x5a,
                                'repeat': 0x32
                            }, {
                                'eventType': _0x3b8573['default']['DRAGON_SWARM'],
                                'moreX': 0x2,
                                'moreY': _0x37fdf6['default']['XLDRAGON1_FLAG'],
                                'duration': 0x4e20,
                                'delay': 0x3e8,
                                'chance': 0x5a,
                                'repeat': 0x32
                            }]
                        }, {
                            'minute': 0x1e,
                            'minimum': 0x1,
                            'frequency': 0x2710,
                            'enemies': [],
                            'bosses': [_0x37fdf6['default']['BOSS_XLDEATH'], _0x37fdf6['default']['BOSS_XLDROWNER']],
                            'events': [{
                                'eventType': _0x3b8573['default']['CYCLE_COMPLETE']
                            }, {
                                'eventType': _0x3b8573['default']['SHOOTING_STAR'],
                                'moreX': 0x1,
                                'moreY': 0x64,
                                'moreZ': 0.5,
                                'moreZ': 0x1
                            }, {
                                'eventType': _0x3b8573['default']['SHOOTING_STAR'],
                                'delay': 0xc8,
                                'moreX': 0x5,
                                'moreY': 0x0,
                                'moreZ': 0.5,
                                'repeat': 0x32
                            }]
                        }, {
                            'minute': 0x1f,
                            'minimum': 0x1,
                            'frequency': 0x2710,
                            'enemies': [],
                            'bosses': [_0x37fdf6['default']['BOSS_XLDEATH']]
                        }]
                    };
                _0x1ed7df['default'] = _0x4b223a;
            };
