// Module 0x12f63
// Args: _0x196665, _0x5e930e, _0x16b30f

export default (_0x196665, _0x5e930e, _0x16b30f) => {
                'use strict';
                const _0x58f0bd = a0_0x6932;
                var _0x443b7a = this && this['__importDefault'] || function(_0x53c79f) {
                    return _0x53c79f && _0x53c79f['__esModule'] ? _0x53c79f : {
                        'default': _0x53c79f
                    };
                };
                Object['defineProperty'](_0x5e930e, '__esModule', {
                    'value': !0x0
                });
                const _0x367e73 = _0x443b7a(_0x16b30f(0x9bda)),
                    _0x3229a2 = _0x443b7a(_0x16b30f(0x3fe3)),
                    _0x58b42b = _0x443b7a(_0x16b30f(0x14442)),
                    _0x5c6755 = _0x443b7a(_0x16b30f(0x2248)),
                    _0x1d2996 = _0x443b7a(_0x16b30f(0x1545b)),
                    _0x421cbc = _0x443b7a(_0x16b30f(0x1229)),
                    _0x4b4fc3 = _0x443b7a(_0x16b30f(0x148f5)),
                    _0x42d028 = _0x443b7a(_0x16b30f(0xdfbc)),
                    _0x1608f7 = _0x443b7a(_0x16b30f(0xc42e)),
                    _0x4c9ab4 = {
                        [_0x3229a2['default']['LIBRARY']]: [{
                            'order': 0x14,
                            'stageName': 'Inlaid Library',
                            'description': 'This quiet, long library is the ideal place where to rest, meditate, and forage for roast chicken. But what\'s a stone mask doing here?',
                            'uiTexture': 'UI',
                            'uiFrame': 'stage_library.png',
                            'frameName': 'stage_library_icon.png',
                            'bestiaryBG': 'background_library.png',
                            'frameNameUnlock': 'stage_library_unlock.png',
                            'stageNumber': 'Stage 2',
                            'unlocked': !0x1,
                            'hidden': !0x1,
                            'cff': _0x42d028['default']['GIOVANNA'],
                            'BGM': _0x4b4fc3['default']['BGM_Library'],
                            'sideBBGM': _0x4b4fc3['default']['BGM_Library_B'],
                            'tips': '',
                            'hyperTips': '50% Gold bonus\n10% Luck bonus',
                            'relics': [_0x1608f7['default']['RELIC_GRIMOIRE']],
                            'yellowRelics': [],
                            'validForCharcaterData': !0x0,
                            'mods': {
                                'TimeLimit': 0x708,
                                'ClockSpeed': 0x1,
                                'PlayerPxSpeed': 1.25,
                                'EnemySpeed': 1.25,
                                'ProjectileSpeed': 0x1,
                                'GoldMultiplier': 0x1,
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
                                'tint': 0xffaaff,
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
                                'setKey': 'LibraryTexturePacked',
                                'setPath': 'assets/tilesets/LibraryTexturePacked.png',
                                'mapKey': 'Library',
                                'mapPath': 'assets/tilesets/Library.json',
                                'isTiling': !0x0
                            },
                            'background': {
                                'texture': ''
                            },
                            'spawnType': _0x1d2996['default']['HORIZONTAL'],
                            'startingSpawns': 0x32,
                            'minute': 0x0,
                            'destructibleType': _0x58b42b['default']['CANDELABRA'],
                            'destructibleFreq': 0x3e8,
                            'destructibleChance': 7.5,
                            'destructibleChanceMax': 0x32,
                            'maxDestructibles': 0xa,
                            'BGTextureName': 'bg_null',
                            'minimum': 0x32,
                            'frequency': 0xbb8,
                            'enemies': [_0x367e73['default']['MUD']],
                            'bosses': [],
                            'events': [{
                                'eventType': _0x421cbc['default']['SHADE_BOMB_RED'],
                                'delay': 0x64,
                                'moreX': 0x1
                            }]
                        }, {
                            'minute': 0x1,
                            'minimum': 0x50,
                            'frequency': 0xbb8,
                            'enemies': [_0x367e73['default']['MUD']]
                        }, {
                            'minute': 0x2,
                            'minimum': 0x64,
                            'frequency': 0xfa0,
                            'enemies': [_0x367e73['default']['MUD'], _0x367e73['default']['ECTO1']],
                            'events': [{
                                'eventType': _0x421cbc['default']['MEDUSA_WALL'],
                                'moreX': 0x6,
                                'moreY': _0x367e73['default']['MEDUSA1']
                            }, {
                                'eventType': _0x421cbc['default']['MEDUSA_SWARM'],
                                'moreX': 0xc,
                                'moreY': _0x367e73['default']['MEDUSA1'],
                                'delay': 0x1388,
                                'chance': 0x46,
                                'repeat': 0x4
                            }]
                        }, {
                            'minute': 0x3,
                            'minimum': 0x3c,
                            'frequency': 0xfa0,
                            'enemies': [_0x367e73['default']['MUMMY']],
                            'bosses': [_0x367e73['default']['XLMUMMY']],
                            'treasure': {
                                'chances': [0.1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x4,
                            'minimum': 0x6e,
                            'frequency': 0xfa0,
                            'enemies': [_0x367e73['default']['MUD'], _0x367e73['default']['MUMMY']]
                        }, {
                            'minute': 0x5,
                            'minimum': 0x64,
                            'frequency': 0xfa0,
                            'enemies': [_0x367e73['default']['MUMMY']],
                            'bosses': [_0x367e73['default']['XLMUMMY']],
                            'events': [],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EXISTING_WEAPON'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x6,
                            'minimum': 0x1e,
                            'frequency': 0x7d0,
                            'enemies': [_0x367e73['default']['DULL1'], _0x367e73['default']['ECTO1']],
                            'events': [{
                                'eventType': _0x421cbc['default']['SHADE_BOMB_RED'],
                                'delay': 0x2710,
                                'chance': 0x32,
                                'repeat': 0x4,
                                'moreX': 0x1
                            }]
                        }, {
                            'minute': 0x7,
                            'minimum': 0x50,
                            'frequency': 0x7d0,
                            'enemies': [_0x367e73['default']['DULL1'], _0x367e73['default']['ECTO1'], _0x367e73['default']['ECTO2']],
                            'events': [{
                                'eventType': _0x421cbc['default']['SHADE_BOMB_RED'],
                                'delay': 0x1388,
                                'chance': 0x50,
                                'repeat': 0x8,
                                'moreX': 0x1
                            }]
                        }, {
                            'minute': 0x8,
                            'minimum': 0x50,
                            'frequency': 0x3e8,
                            'enemies': [_0x367e73['default']['ECTO2'], _0x367e73['default']['GHOST']],
                            'bosses': [_0x367e73['default']['BOSS_ECTO']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x32],
                                'level': 0x2,
                                'prizeTypes': [_0x5c6755['default']['EXISTING_WEAPON'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x9,
                            'minimum': 0xc8,
                            'frequency': 0x1f4,
                            'enemies': [_0x367e73['default']['MUMMY'], _0x367e73['default']['GHOST']],
                            'events': [{
                                'eventType': _0x421cbc['default']['SHADE_BOMB_RED'],
                                'delay': 0x4e20,
                                'chance': 0x32,
                                'repeat': 0x2,
                                'moreX': 0x2
                            }]
                        }, {
                            'minute': 0xa,
                            'minimum': 0x64,
                            'frequency': 0x1f4,
                            'enemies': [_0x367e73['default']['ECTO2']],
                            'bosses': [_0x367e73['default']['BOSS_BUER']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_WEAPON'], _0x5c6755['default']['EXISTING_WEAPON']]
                            },
                            'events': [{
                                'eventType': _0x421cbc['default']['SHADE_BOMB_RED'],
                                'moreX': 0x1
                            }, {
                                'eventType': _0x421cbc['default']['SHADE_BOMB_RED'],
                                'delay': 0x2710,
                                'chance': 0x50,
                                'repeat': 0x3,
                                'moreX': 0x2
                            }]
                        }, {
                            'minute': 0xb,
                            'minimum': 0x78,
                            'frequency': 0x7d0,
                            'enemies': [_0x367e73['default']['MEDUSA2'], _0x367e73['default']['BUER']],
                            'bosses': [_0x367e73['default']['BOSS_MEDUSA1']],
                            'treasure': {
                                'chances': [0x0, 0x0, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_WEAPON'], _0x5c6755['default']['EXISTING_WEAPON']]
                            },
                            'arcanaHolder': _0x367e73['default']['BAT4'],
                            'arcanaTreasure': {
                                'chances': [0x0, 0x0, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['ARCANA'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xc,
                            'minimum': 0x50,
                            'frequency': 0x3e8,
                            'enemies': [_0x367e73['default']['MEDUSA2'], _0x367e73['default']['DULL1']],
                            'events': [{
                                'eventType': _0x421cbc['default']['MEDUSA_SWARM'],
                                'moreX': 0xc,
                                'moreY': _0x367e73['default']['MEDUSA1_FAST']
                            }, {
                                'eventType': _0x421cbc['default']['MEDUSA_WALL'],
                                'moreX': 0xc,
                                'moreY': _0x367e73['default']['MEDUSA1'],
                                'delay': 0x1388,
                                'chance': 0x46,
                                'repeat': 0x5
                            }],
                            'bosses': [_0x367e73['default']['BAT4']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xd,
                            'minimum': 0x78,
                            'frequency': 0x1f4,
                            'enemies': [_0x367e73['default']['MUMMY'], _0x367e73['default']['DULL1']],
                            'bosses': [_0x367e73['default']['BOSS_MUD']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xe,
                            'minimum': 0x12c,
                            'frequency': 0x64,
                            'enemies': [_0x367e73['default']['MUMMY'], _0x367e73['default']['MEDUSA2'], _0x367e73['default']['ECTO2']],
                            'bosses': [_0x367e73['default']['BAT5']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xf,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x367e73['default']['MEDUSA2_AGGRO']],
                            'bosses': [_0x367e73['default']['BOSS_XLMEDUSA']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x421cbc['default']['MEDUSA_WALL'],
                                'moreX': 0xc,
                                'moreY': _0x367e73['default']['MEDUSA1_FAST']
                            }, {
                                'eventType': _0x421cbc['default']['MEDUSA_WALL'],
                                'moreX': 0x6,
                                'moreY': _0x367e73['default']['MEDUSA2'],
                                'delay': 0x32c8
                            }, {
                                'eventType': _0x421cbc['default']['MEDUSA_SWARM'],
                                'moreX': 0xc,
                                'moreY': _0x367e73['default']['MEDUSA1_FAST'],
                                'delay': 0x7d0,
                                'chance': 0x5a,
                                'repeat': 0x19
                            }]
                        }, {
                            'minute': 0x10,
                            'minimum': 0x64,
                            'frequency': 0x3e8,
                            'enemies': [_0x367e73['default']['WITCH1'], _0x367e73['default']['DULL1'], _0x367e73['default']['DULL2']],
                            'bosses': [_0x367e73['default']['BAT4']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x11,
                            'minimum': 0xc8,
                            'frequency': 0x3e8,
                            'enemies': [_0x367e73['default']['WITCH1'], _0x367e73['default']['ECTO2'], _0x367e73['default']['ECTO1']],
                            'events': [{
                                'eventType': _0x421cbc['default']['SHADE_BOMB_RED'],
                                'delay': 0x1388,
                                'chance': 0x32,
                                'repeat': 0x4,
                                'moreX': 0x3
                            }]
                        }, {
                            'minute': 0x12,
                            'minimum': 0x3c,
                            'frequency': 0x1f4,
                            'enemies': [_0x367e73['default']['WITCH1'], _0x367e73['default']['BUER']],
                            'bosses': [_0x367e73['default']['BOSS_WITCH2']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x13,
                            'minimum': 0x78,
                            'frequency': 0x1f4,
                            'enemies': [_0x367e73['default']['WITCH1'], _0x367e73['default']['DULL2']]
                        }, {
                            'minute': 0x14,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x367e73['default']['BUER'], _0x367e73['default']['DULL2']],
                            'bosses': [_0x367e73['default']['BOSS_COUNT2']],
                            'events': [{
                                'eventType': _0x421cbc['default']['SHADE_BOMB_RED'],
                                'delay': 0x7d0,
                                'chance': 0x32,
                                'repeat': 0x19,
                                'moreX': 0x2
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'moreX': 0x1
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'delay': 0x1388,
                                'moreX': 0x2
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'delay': 0x3a98,
                                'moreX': 0x4
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'delay': 0x61a8,
                                'moreX': 0x8
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'delay': 0x88b8,
                                'moreX': 0x10
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'delay': 0xafc8,
                                'moreX': 0x20
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'delay': 0xd6d8,
                                'moreX': 0x20
                            }],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x15,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x367e73['default']['BUER']],
                            'arcanaHolder': _0x367e73['default']['BAT4'],
                            'arcanaTreasure': {
                                'chances': [0x0, 0x0, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['ARCANA'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x16,
                            'minimum': 0x50,
                            'frequency': 0x3e8,
                            'enemies': [_0x367e73['default']['WITCH2'], _0x367e73['default']['BUER']],
                            'events': [{
                                'eventType': _0x421cbc['default']['SHADE_BOMB_RED'],
                                'delay': 0x7d0,
                                'chance': 0x32,
                                'repeat': 0x19,
                                'moreX': 0x3
                            }],
                            'bosses': [_0x367e73['default']['BAT4']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x17,
                            'minimum': 0x78,
                            'frequency': 0x64,
                            'enemies': [_0x367e73['default']['DULL1'], _0x367e73['default']['DULL2'], _0x367e73['default']['WITCH2']],
                            'bosses': [_0x367e73['default']['BOSS_BUER']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x18,
                            'minimum': 0x12c,
                            'frequency': 0x64,
                            'enemies': [_0x367e73['default']['WITCH2']]
                        }, {
                            'minute': 0x19,
                            'minimum': 0x12c,
                            'frequency': 0x64,
                            'enemies': [_0x367e73['default']['SKULL2_SCALING'], _0x367e73['default']['WITCH2'], _0x367e73['default']['XLBAT']],
                            'bosses': [_0x367e73['default']['BOSS_COUNT1']],
                            'events': [{
                                'eventType': _0x421cbc['default']['BAT_SWARM']
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'moreX': 0x1
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'delay': 0x1388,
                                'moreX': 0x2
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'delay': 0x3a98,
                                'moreX': 0x4
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'delay': 0x61a8,
                                'moreX': 0x8
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'delay': 0x88b8,
                                'moreX': 0x10
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'delay': 0xafc8,
                                'moreX': 0x20
                            }, {
                                'eventType': _0x421cbc['default']['SKULL_SWARM'],
                                'delay': 0xd6d8,
                                'moreX': 0x20
                            }],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x1a,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x367e73['default']['XLMEDUSA']],
                            'bosses': [_0x367e73['default']['BOSS_XLMEDUSA']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x1b,
                            'minimum': 0x12c,
                            'frequency': 0x64,
                            'enemies': [_0x367e73['default']['MEDUSA2'], _0x367e73['default']['XLMEDUSA']],
                            'bosses': [_0x367e73['default']['BOSS_XLMEDUSA']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x421cbc['default']['MEDUSA_SWARM'],
                                'moreX': 0xc,
                                'moreY': _0x367e73['default']['MEDUSA2_FAST']
                            }, {
                                'eventType': _0x421cbc['default']['MEDUSA_WALL'],
                                'moreX': 0xc,
                                'moreY': _0x367e73['default']['MEDUSA2_FAST'],
                                'delay': 0x7d0,
                                'chance': 0x5a,
                                'repeat': 0x19
                            }]
                        }, {
                            'minute': 0x1c,
                            'minimum': 0xfa,
                            'frequency': 0x64,
                            'enemies': [_0x367e73['default']['WITCH1'], _0x367e73['default']['BOSS_MEDUSA1']],
                            'bosses': [_0x367e73['default']['BOSS_XLMEDUSA']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x5c6755['default']['EVOLUTION'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY'], _0x5c6755['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x1d,
                            'minimum': 0xfa,
                            'frequency': 0x64,
                            'enemies': [_0x367e73['default']['BOSS_MUD'], _0x367e73['default']['BOSS_ECTO'], _0x367e73['default']['BOSS_BUER'], _0x367e73['default']['BOSS_MEDUSA1']],
                            'events': [{
                                'eventType': _0x421cbc['default']['SHADE_BOMB_RED'],
                                'delay': 0x3e8,
                                'chance': 0x3c,
                                'repeat': 0x32,
                                'moreX': 0x4
                            }]
                        }, {
                            'minute': 0x1e,
                            'minimum': 0x1,
                            'frequency': 0x2710,
                            'enemies': [],
                            'bosses': [_0x367e73['default']['BOSS_XLDEATH']],
                            'events': [{
                                'eventType': _0x421cbc['default']['CYCLE_COMPLETE']
                            }]
                        }]
                    };
                _0x5e930e['default'] = _0x4c9ab4;
            };
