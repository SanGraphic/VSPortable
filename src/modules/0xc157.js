// Module 0xc157
// Args: _0x2a67a8, _0x434d59, _0x3d3d07

export default (_0x2a67a8, _0x434d59, _0x3d3d07) => {
                'use strict';
                const _0x54cc4f = a0_0x6932;
                var _0x45d372 = this && this['__importDefault'] || function(_0x4c9b51) {
                    return _0x4c9b51 && _0x4c9b51['__esModule'] ? _0x4c9b51 : {
                        'default': _0x4c9b51
                    };
                };
                Object['defineProperty'](_0x434d59, '__esModule', {
                    'value': !0x0
                });
                const _0x28ff60 = _0x45d372(_0x3d3d07(0x9bda)),
                    _0x2157bd = _0x45d372(_0x3d3d07(0x3fe3)),
                    _0x20bde1 = _0x45d372(_0x3d3d07(0x14442)),
                    _0x1909ca = _0x45d372(_0x3d3d07(0x2248)),
                    _0x5a47cf = _0x45d372(_0x3d3d07(0x1229)),
                    _0x48e70c = _0x45d372(_0x3d3d07(0x148f5)),
                    _0x46e877 = _0x45d372(_0x3d3d07(0xc42e)),
                    _0x44424c = {
                        [_0x2157bd['default']['BONEZONE']]: [{
                            'order': 0x5a,
                            'stageName': 'The Bone Zone',
                            'description': 'Come over here and say your unholy vespers.',
                            'uiTexture': 'UI',
                            'uiFrame': 'stage_bone.png',
                            'texture': 'UI',
                            'frameName': 'stage_bone_unlock.png',
                            'stageNumber': 'Challenge',
                            'bestiaryBG': 'background_bonezone.png',
                            'unlocked': !0x1,
                            'hidden': !0x1,
                            'BGM': _0x48e70c['default']['BGM_Bones'],
                            'sideBBGM': _0x48e70c['default']['BGM_Bones_B'],
                            'tips': 'No item drops. Enemies grow stronger over time.',
                            'hyperTips': '',
                            'relics': [],
                            'yellowRelics': [_0x46e877['default']['RELIC_SECRETS']],
                            'validForCharcaterData': !0x0,
                            'zoom': 0.25,
                            'mods': {
                                'TimeLimit': 0x708,
                                'ClockSpeed': 0x1,
                                'PlayerPxSpeed': 1.25,
                                'EnemySpeed': 1.25,
                                'ProjectileSpeed': 0x1,
                                'GoldMultiplier': 1.5,
                                'EnemyHealthMultiplier': 0x1,
                                'LuckBonus': 0x0,
                                'XPBonus': 0x1,
                                'TimeMods': {
                                    'start': 0x0,
                                    'hpPerMinute': 0.3,
                                    'speedPerMinute': 0.05
                                }
                            },
                            'hyper': {
                                'unlocked': !0x1,
                                'TimeLimit': 0x708,
                                'ClockSpeed': 0x1,
                                'PlayerPxSpeed': 0.65,
                                'EnemySpeed': 0.65,
                                'ProjectileSpeed': 0.15,
                                'GoldMultiplier': 0.5,
                                'EnemyHealthMultiplier': 0x0,
                                'LuckBonus': 0x0,
                                'XPBonus': 0x0,
                                'StartingSpawns': 0x1e
                            },
                            'inverse': {
                                'tint': 0xffaaaa,
                                'GoldMultiplier': 0x2,
                                'EnemyHealthMultiplier': 0x2,
                                'LuckBonus': 0.2,
                                'TimeMods': {
                                    'start': 0x0,
                                    'hpPerMinute': 0.05,
                                    'speedPerMinute': 0.005
                                }
                            },
                            'background': {
                                'texture': ''
                            },
                            'randomMinutes': !0x1,
                            'dayNight': !0x1,
                            'startingSpawns': 0x1e,
                            'minute': 0x0,
                            'destructibleType': _0x20bde1['default']['BRAZIER'],
                            'destructibleFreq': 0x1f4,
                            'destructibleChance': 0x28,
                            'destructibleChanceMax': 0x32,
                            'maxDestructibles': 0xa,
                            'BGTextureName': 'bg_bone',
                            'hasLights': !0x0,
                            'LootTable': [_0x46e877['default']['COIN'], _0x46e877['default']['COINBAG1']],
                            'tilemapTiledJSON': {
                                'name': '',
                                'path': ''
                            },
                            'tilemapTiledIMG': {
                                'name': '',
                                'path': ''
                            },
                            'tilemapPos': {
                                'x': 0x0,
                                'y': 0x0
                            },
                            'minimum': 0x14,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['SKULLINO']],
                            'bosses': []
                        }, {
                            'minute': 0x1,
                            'minimum': 0x14,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['SKULLINO'], _0x28ff60['default']['SKELETON']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKULL_SWARM'],
                                'moreX': 0x2
                            }]
                        }, {
                            'minute': 0x2,
                            'minimum': 0x28,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['SKULOROSSO'], _0x28ff60['default']['SKELETON']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKULL_SWARM'],
                                'moreX': 0x4
                            }]
                        }, {
                            'minute': 0x3,
                            'minimum': 0x28,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['SKELETON']],
                            'bosses': [_0x28ff60['default']['SKELEGLOW']],
                            'treasure': {
                                'chances': [0.1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKULL_SWARM'],
                                'moreX': 0x8
                            }]
                        }, {
                            'minute': 0x4,
                            'minimum': 0x3c,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['SKELETON'], _0x28ff60['default']['SKELANGUE']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKULL_SWARM'],
                                'moreX': 0x10
                            }]
                        }, {
                            'minute': 0x5,
                            'minimum': 0x28,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['SKELETON'], _0x28ff60['default']['PILE4']],
                            'bosses': [_0x28ff60['default']['SKELEGLOW']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKULL_SWARM'],
                                'moreX': 0x20
                            }],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['EXISTING_WEAPON'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['SKULLNOAURA']]
                            }
                        }, {
                            'minute': 0x6,
                            'minimum': 0x50,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['SKULLINO'], _0x28ff60['default']['SKULLNOAURA']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKULL_SWARM'],
                                'moreX': 0x20
                            }]
                        }, {
                            'minute': 0x7,
                            'minimum': 0x78,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['SKELETON'], _0x28ff60['default']['SKELETON2'], _0x28ff60['default']['SKELETON3'], _0x28ff60['default']['SKELETON4'], _0x28ff60['default']['PILE2']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKULL_SWARM'],
                                'moreX': 0x20
                            }]
                        }, {
                            'minute': 0x8,
                            'minimum': 0x28,
                            'frequency': 0x1f4,
                            'enemies': [_0x28ff60['default']['SKELETON'], _0x28ff60['default']['SKELETON2'], _0x28ff60['default']['SKELETON3'], _0x28ff60['default']['SKELETON4'], _0x28ff60['default']['SKELEPANTHER']],
                            'bosses': [_0x28ff60['default']['SKELEGLOW']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['EXISTING_WEAPON'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKULL_SWARM'],
                                'moreX': 0x20
                            }]
                        }, {
                            'minute': 0x9,
                            'minimum': 0xc8,
                            'frequency': 0x64,
                            'enemies': [_0x28ff60['default']['SKELETON']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKULL_SWARM'],
                                'moreX': 0x20
                            }]
                        }, {
                            'minute': 0xa,
                            'minimum': 0x50,
                            'frequency': 0x1f4,
                            'enemies': [_0x28ff60['default']['SKELETON'], _0x28ff60['default']['SKELETON2'], _0x28ff60['default']['SKELETON3'], _0x28ff60['default']['SKELETON4'], _0x28ff60['default']['SKELENIN_ZONE']],
                            'bosses': [_0x28ff60['default']['BOSS_XLSKELETON']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['EVOLUTION'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_WEAPON'], _0x1909ca['default']['EXISTING_WEAPON']]
                            },
                            'events': [{
                                'eventType': _0x5a47cf['default']['STALKER'],
                                'duration': 0xea60,
                                'moreX': 0.8
                            }]
                        }, {
                            'minute': 0xb,
                            'minimum': 0x64,
                            'frequency': 0x1f4,
                            'enemies': [_0x28ff60['default']['SKELETON'], _0x28ff60['default']['SKULLINO']],
                            'arcanaHolder': _0x28ff60['default']['BOSS_SKULL2'],
                            'arcanaTreasure': {
                                'chances': [0x0, 0x0, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['ARCANA'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xc,
                            'minimum': 0x96,
                            'frequency': 0x1f4,
                            'enemies': [_0x28ff60['default']['SKULLNOAURA'], _0x28ff60['default']['PILE4']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x2710,
                                'chance': 0x64,
                                'moreZ': 0x2
                            }]
                        }, {
                            'minute': 0xd,
                            'minimum': 0x64,
                            'frequency': 0x1f4,
                            'enemies': [_0x28ff60['default']['SKULLNOAURA'], _0x28ff60['default']['SKELEPANTHER']],
                            'bosses': [_0x28ff60['default']['SKELEGLOW']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['EVOLUTION'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x2710,
                                'chance': 0x64,
                                'moreZ': 0x4
                            }]
                        }, {
                            'minute': 0xe,
                            'minimum': 0x96,
                            'frequency': 0x64,
                            'enemies': [_0x28ff60['default']['SKULLNOAURA']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x2710,
                                'chance': 0x64,
                                'moreZ': 0x8
                            }]
                        }, {
                            'minute': 0xf,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x28ff60['default']['SKULLNOAURA'], _0x28ff60['default']['SKULOROSSO']],
                            'bosses': [_0x28ff60['default']['SKELEGLOW']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['EVOLUTION'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'moreZ': 0x4
                            }, {
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'delay': 0x13ec,
                                'moreZ': 0x8
                            }, {
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'delay': 0x2af8,
                                'moreZ': 0xc
                            }]
                        }, {
                            'minute': 0x10,
                            'minimum': 0x96,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['SKULLNOAURA'], _0x28ff60['default']['SKELENIN_ZONE']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'moreZ': 0x4
                            }, {
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'delay': 0x13ec,
                                'moreZ': 0x8
                            }, {
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'delay': 0x2af8,
                                'moreZ': 0xc
                            }]
                        }, {
                            'minute': 0x11,
                            'minimum': 0x64,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['SKULLNOAURA'], _0x28ff60['default']['SKELEPANTHER']],
                            'bosses': [_0x28ff60['default']['SKELEGLOW']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['EVOLUTION'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'moreZ': 0x4
                            }, {
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'delay': 0x13ec,
                                'moreZ': 0x8
                            }, {
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'delay': 0x2af8,
                                'moreZ': 0xc
                            }]
                        }, {
                            'minute': 0x12,
                            'minimum': 0x96,
                            'frequency': 0x1f4,
                            'enemies': [_0x28ff60['default']['SKULLNOAURA'], _0x28ff60['default']['SKELEWING_ZONE']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'moreZ': 0x4
                            }, {
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'delay': 0x13ec,
                                'moreZ': 0x8
                            }, {
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'delay': 0x2af8,
                                'moreZ': 0xc
                            }]
                        }, {
                            'minute': 0x13,
                            'minimum': 0xc8,
                            'frequency': 0x1f4,
                            'enemies': [_0x28ff60['default']['SKULLNOAURA']],
                            'bosses': [_0x28ff60['default']['SKELEGLOW']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['EVOLUTION'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'moreZ': 0x4
                            }, {
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'delay': 0x13ec,
                                'moreZ': 0x8
                            }, {
                                'eventType': _0x5a47cf['default']['SKELESTREAM'],
                                'duration': 0x1388,
                                'chance': 0x64,
                                'delay': 0x2af8,
                                'moreZ': 0xc
                            }]
                        }, {
                            'minute': 0x14,
                            'minimum': 0x96,
                            'frequency': 0x64,
                            'enemies': [_0x28ff60['default']['SKULLNOAURA']],
                            'bosses': [_0x28ff60['default']['BOSS_XLSKELETON']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['EVOLUTION'], _0x1909ca['default']['EVOLUTION'], _0x1909ca['default']['EVOLUTION'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY']]
                            },
                            'events': [{
                                'eventType': _0x5a47cf['default']['DROWNER'],
                                'duration': 0xea60
                            }]
                        }, {
                            'minute': 0x15,
                            'minimum': 0x96,
                            'frequency': 0x64,
                            'enemies': [_0x28ff60['default']['SKELETON'], _0x28ff60['default']['SKELENIN_ZONE']],
                            'arcanaHolder': _0x28ff60['default']['BOSS_SKULL2'],
                            'arcanaTreasure': {
                                'chances': [0x0, 0x0, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['ARCANA'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x16,
                            'minimum': 0xc8,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['SKELANGUE'], _0x28ff60['default']['SKULOROSSO']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['TWINS_PILES'],
                                'moreX': 0x1
                            }]
                        }, {
                            'minute': 0x17,
                            'minimum': 0x96,
                            'frequency': 0x64,
                            'enemies': [_0x28ff60['default']['PILE3'], _0x28ff60['default']['SKELANGUE']],
                            'bosses': [_0x28ff60['default']['SKELEGLOW']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['EVOLUTION'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x18,
                            'minimum': 0xc8,
                            'frequency': 0x64,
                            'enemies': [_0x28ff60['default']['SKELANGUE'], _0x28ff60['default']['SKELEWING_ZONE']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['TWINS_PILES'],
                                'moreX': 0x2
                            }]
                        }, {
                            'minute': 0x19,
                            'minimum': 0x96,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['SKELEWING_ZONE'], _0x28ff60['default']['SKELENIN_ZONE']],
                            'bosses': [_0x28ff60['default']['SKELEGLOW']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['EVOLUTION'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x1a,
                            'minimum': 0x64,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['XLSKELETON']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['TWINS_PILES'],
                                'moreX': 0x3
                            }]
                        }, {
                            'minute': 0x1b,
                            'minimum': 0x96,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['XLSKELETON'], _0x28ff60['default']['SKULLINO']],
                            'bosses': [_0x28ff60['default']['SKELEGLOW']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['EVOLUTION'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x1c,
                            'minimum': 0xc8,
                            'frequency': 0x3e8,
                            'enemies': [_0x28ff60['default']['XLSKELETON']],
                            'bosses': [_0x28ff60['default']['SKELEGLOW']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x1909ca['default']['EVOLUTION'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY'], _0x1909ca['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x1d,
                            'minimum': 0x96,
                            'frequency': 0x32,
                            'enemies': [_0x28ff60['default']['SKELETONE']]
                        }, {
                            'minute': 0x1e,
                            'minimum': 0x1,
                            'frequency': 0x2710,
                            'enemies': [],
                            'bosses': [_0x28ff60['default']['BOSS_XLDEATH']],
                            'events': [{
                                'eventType': _0x5a47cf['default']['CYCLE_COMPLETE']
                            }]
                        }]
                    };
                _0x434d59['default'] = _0x44424c;
            };
