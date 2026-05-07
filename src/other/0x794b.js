// Module 0x794b
// Args: _0x224f51, _0x193329, _0x4cfe48

export default (_0x224f51, _0x193329, _0x4cfe48) => {
                'use strict';
                const _0x510395 = a0_0x6932;
                var _0x5f0feb = this && this['__importDefault'] || function(_0x31e987) {
                    const _0x573c96 = _0x510395;
                    return _0x31e987 && _0x31e987[_0x573c96(0x16f1)] ? _0x31e987 : {
                        'default': _0x31e987
                    };
                };
                Object['defineProperty'](_0x193329, '__esModule', {
                    'value': !0x0
                });
                const _0x2274ad = _0x5f0feb(_0x4cfe48(0x9bda)),
                    _0x218ea6 = _0x5f0feb(_0x4cfe48(0x3fe3)),
                    _0x3219dc = _0x5f0feb(_0x4cfe48(0x14442)),
                    _0x30188b = _0x5f0feb(_0x4cfe48(0x2248)),
                    _0xa0bf77 = _0x5f0feb(_0x4cfe48(0x54e3)),
                    _0x3467db = _0x5f0feb(_0x4cfe48(0x1229)),
                    _0x2f6590 = _0x5f0feb(_0x4cfe48(0x148f5)),
                    _0x2dcad5 = _0x5f0feb(_0x4cfe48(0xdfbc)),
                    _0x1e1ad7 = {
                        [_0x218ea6['default']['FOREST']]: [{
                            'order': 0xa,
                            'stageName': 'Mad Forest',
                            'description': 'The Castle is a lie, but there\'s still free roast chicken here, so it\'s all good.',
                            'uiTexture': 'UI',
                            'uiFrame': 'stage_forest.png',
                            'texture': 'UI',
                            'frameName': 'stage_forest_icon.png',
                            'bestiaryBG': 'background_forest.png',
                            'stageNumber': 'Stage 1',
                            'unlocked': !0x0,
                            'BGM': _0x2f6590['default']['BGM_Forest_B'],
                            'sideBBGM': _0x2f6590['default']['BGM_Forest'],
                            'tips': '',
                            'hyperTips': '50% Gold bonus',
                            'cff': _0x2dcad5['default']['PUGNALA'],
                            'validForCharcaterData': !0x0,
                            'mods': {
                                'TimeLimit': 0x708,
                                'ClockSpeed': 0x1,
                                'PlayerPxSpeed': 1.1,
                                'EnemySpeed': 1.1,
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
                                'PlayerPxSpeed': 0.9,
                                'EnemySpeed': 0.9,
                                'ProjectileSpeed': 0.25,
                                'GoldMultiplier': 0.5,
                                'EnemyHealthMultiplier': 0x0,
                                'LuckBonus': 0x0,
                                'XPBonus': 0x0,
                                'StartingSpawns': 0xf
                            },
                            'inverse': {
                                'tint': 0x8888ee,
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
                                'setKey': 'ForestTexturePacked',
                                'setPath': 'assets/tilesets/ForestTexturePacked.png',
                                'mapKey': 'Forest',
                                'mapPath': 'assets/tilesets/Forest.json',
                                'isTiling': !0x0
                            },
                            'background': {
                                'texture': ''
                            },
                            'startingSpawns': 0xa,
                            'minute': 0x0,
                            'destructibleType': _0x3219dc['default']['BRAZIER'],
                            'destructibleFreq': 0x3e8,
                            'destructibleChance': 0xa,
                            'destructibleChanceMax': 0x32,
                            'maxDestructibles': 0xa,
                            'BGTextureName': 'bg_null',
                            'dayNight': !0x0,
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
                            'minimum': 0xf,
                            'frequency': 0x3e8,
                            'enemies': [_0x2274ad['default']['BAT3']],
                            'bosses': []
                        }, {
                            'minute': 0x1,
                            'minimum': 0x1e,
                            'frequency': 0x3e8,
                            'enemies': [_0x2274ad['default']['ZOMBIE'], _0x2274ad['default']['BAT1']],
                            'bosses': [_0x2274ad['default']['BAT4']],
                            'treasure': {
                                'chances': [0x0, 0x0, 0x1e],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EVOLUTION'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']],
                                'fixedPrizes': [_0xa0bf77['default']['AMOUNT']]
                            }
                        }, {
                            'minute': 0x2,
                            'minimum': 0x32,
                            'frequency': 0x1f4,
                            'enemies': [_0x2274ad['default']['BAT1'], _0x2274ad['default']['BAT2'], _0x2274ad['default']['BAT3']],
                            'events': [{
                                'eventType': _0x3467db['default']['BAT_SWARM'],
                                'delay': 0x1388,
                                'repeat': 0x2
                            }]
                        }, {
                            'minute': 0x3,
                            'minimum': 0x28,
                            'frequency': 0xfa,
                            'enemies': [_0x2274ad['default']['SKELETON']],
                            'bosses': [_0x2274ad['default']['BAT4']],
                            'events': [{
                                'eventType': _0x3467db['default']['BAT_SWARM'],
                                'delay': 0x1388,
                                'repeat': 0x1,
                                'chance': 0xa
                            }],
                            'treasure': {
                                'chances': [0x0, 0x5, 0x28],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EXISTING_WEAPON'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x4,
                            'minimum': 0x1e,
                            'frequency': 0x1f4,
                            'enemies': [_0x2274ad['default']['SKELETON'], _0x2274ad['default']['GHOST']],
                            'events': [{
                                'eventType': _0x3467db['default']['BAT_SWARM'],
                                'delay': 0x1388,
                                'repeat': 0x1,
                                'chance': 0xa
                            }]
                        }, {
                            'minute': 0x5,
                            'minimum': 0xa,
                            'frequency': 0x3e8,
                            'enemies': [_0x2274ad['default']['MUDMAN2']],
                            'bosses': [_0x2274ad['default']['XLMANTIS']],
                            'events': [{
                                'eventType': _0x3467db['default']['FLOWER_WALL'],
                                'chance': 0x0,
                                'duration': 0x7530
                            }],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EXISTING_WEAPON'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x6,
                            'minimum': 0x14,
                            'frequency': 0x1f4,
                            'enemies': [_0x2274ad['default']['ZOMBIE'], _0x2274ad['default']['MUDMAN2']],
                            'events': [{
                                'eventType': _0x3467db['default']['BAT_SWARM'],
                                'delay': 0x1388,
                                'repeat': 0x1,
                                'chance': 0xa
                            }]
                        }, {
                            'minute': 0x7,
                            'minimum': 0x50,
                            'frequency': 0x1f4,
                            'enemies': [_0x2274ad['default']['BAT2'], _0x2274ad['default']['BAT3'], _0x2274ad['default']['MUDMAN1']],
                            'events': [{
                                'eventType': _0x3467db['default']['BAT_SWARM'],
                                'delay': 0x1388,
                                'chance': 0x50,
                                'repeat': 0x5
                            }],
                            'bosses': [_0x2274ad['default']['BAT4']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x32],
                                'level': 0x2,
                                'prizeTypes': [_0x30188b['default']['EXISTING_WEAPON'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x8,
                            'minimum': 0x64,
                            'frequency': 0x5dc,
                            'enemies': [_0x2274ad['default']['ZOMBIE']],
                            'events': [{
                                'eventType': _0x3467db['default']['BAT_SWARM'],
                                'delay': 0x3a98,
                                'chance': 0x50,
                                'repeat': 0x2
                            }],
                            'bosses': [_0x2274ad['default']['XLBAT']]
                        }, {
                            'minute': 0x9,
                            'minimum': 0x1e,
                            'frequency': 0x1f4,
                            'enemies': [_0x2274ad['default']['XLBAT'], _0x2274ad['default']['ZOMBIE']],
                            'bosses': [_0x2274ad['default']['BAT5']],
                            'events': [{
                                'eventType': _0x3467db['default']['BAT_SWARM'],
                                'delay': 0x3a98,
                                'chance': 0x46,
                                'repeat': 0x2
                            }],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EXISTING_WEAPON'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_WEAPON'], _0x30188b['default']['EXISTING_WEAPON']]
                            }
                        }, {
                            'minute': 0xa,
                            'minimum': 0xa,
                            'frequency': 0x1f4,
                            'enemies': [_0x2274ad['default']['MUDMAN1'], _0x2274ad['default']['MUDMAN2']],
                            'bosses': [_0x2274ad['default']['BOSS_XLMANTIS']],
                            'events': [{
                                'eventType': _0x3467db['default']['FLOWER_WALL']
                            }],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EVOLUTION'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_WEAPON'], _0x30188b['default']['EXISTING_WEAPON']]
                            }
                        }, {
                            'minute': 0xb,
                            'minimum': 0x12c,
                            'frequency': 0x64,
                            'enemies': [_0x2274ad['default']['SKELETON']],
                            'events': [{
                                'eventType': _0x3467db['default']['BAT_SWARM'],
                                'delay': 0x1388,
                                'repeat': 0x1,
                                'chance': 0xa
                            }],
                            'arcanaHolder': _0x2274ad['default']['BAT4'],
                            'arcanaTreasure': {
                                'chances': [0x0, 0x0, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['ARCANA'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xc,
                            'minimum': 0x14,
                            'frequency': 0xfa,
                            'enemies': [_0x2274ad['default']['WEREWOLF'], _0x2274ad['default']['GHOST'], _0x2274ad['default']['SKELETON']],
                            'events': [{
                                'eventType': _0x3467db['default']['BAT_SWARM'],
                                'delay': 0x1388,
                                'repeat': 0x1,
                                'chance': 0xa
                            }],
                            'bosses': [_0x2274ad['default']['BAT4']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EVOLUTION'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xd,
                            'minimum': 0x96,
                            'frequency': 0x1f4,
                            'enemies': [_0x2274ad['default']['WEREWOLF'], _0x2274ad['default']['GHOST'], _0x2274ad['default']['GHOST']],
                            'events': [{
                                'eventType': _0x3467db['default']['GHOST_SWARM'],
                                'delay': 0x4b0,
                                'chance': 0x46,
                                'repeat': 0x14
                            }, {
                                'eventType': _0x3467db['default']['GHOST_SWARM'],
                                'delay': 0x8fc,
                                'chance': 0x46,
                                'repeat': 0x14
                            }]
                        }, {
                            'minute': 0xe,
                            'minimum': 0x14,
                            'frequency': 0x64,
                            'enemies': [_0x2274ad['default']['XLBAT'], _0x2274ad['default']['WEREWOLF']],
                            'bosses': [_0x2274ad['default']['BAT5']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EVOLUTION'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xf,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x2274ad['default']['WEREWOLF'], _0x2274ad['default']['XLBAT'], _0x2274ad['default']['MUDMAN2']],
                            'bosses': [_0x2274ad['default']['BOSS_WEREWOLF']],
                            'events': [{
                                'eventType': _0x3467db['default']['FLOWER_WALL'],
                                'chance': 0x50
                            }],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EVOLUTION'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x10,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x2274ad['default']['XLMANTIS'], _0x2274ad['default']['MUDMAN1'], _0x2274ad['default']['MUDMAN2']],
                            'bosses': [_0x2274ad['default']['BAT4']],
                            'treasure': {
                                'chances': [0x1, 0x5, 0x32],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EVOLUTION'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x11,
                            'minimum': 0x14,
                            'frequency': 0x3e8,
                            'enemies': [_0x2274ad['default']['XLMUMMY']]
                        }, {
                            'minute': 0x12,
                            'minimum': 0x3c,
                            'frequency': 0x1f4,
                            'enemies': [_0x2274ad['default']['XLMUMMY'], _0x2274ad['default']['MUDMAN1']],
                            'bosses': [_0x2274ad['default']['BAT5']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EVOLUTION'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x13,
                            'minimum': 0x64,
                            'frequency': 0x1f4,
                            'enemies': [_0x2274ad['default']['XLMUMMY'], _0x2274ad['default']['MUDMAN1']]
                        }, {
                            'minute': 0x14,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x2274ad['default']['XLMUMMY'], _0x2274ad['default']['MUDMAN2'], _0x2274ad['default']['XLBAT']],
                            'bosses': [_0x2274ad['default']['BOSS_XLMUMMY']],
                            'events': [{
                                'eventType': _0x3467db['default']['BAT_SWARM'],
                                'delay': 0x4b0,
                                'chance': 0x46,
                                'repeat': 0x14
                            }, {
                                'eventType': _0x3467db['default']['BAT_SWARM'],
                                'delay': 0x8fc,
                                'chance': 0x46,
                                'repeat': 0x14
                            }],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EVOLUTION'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x15,
                            'minimum': 0x12c,
                            'frequency': 0x64,
                            'enemies': [_0x2274ad['default']['FLOWER']],
                            'bosses': [_0x2274ad['default']['XLFLOWER']],
                            'arcanaHolder': _0x2274ad['default']['BAT4'],
                            'arcanaTreasure': {
                                'chances': [0x0, 0x0, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['ARCANA'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x16,
                            'minimum': 0xc8,
                            'frequency': 0x64,
                            'enemies': [_0x2274ad['default']['FLOWER'], _0x2274ad['default']['XLMUMMY']],
                            'bosses': [_0x2274ad['default']['BAT4']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EVOLUTION'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x17,
                            'minimum': 0x12c,
                            'frequency': 0x64,
                            'enemies': [_0x2274ad['default']['FLOWER'], _0x2274ad['default']['XLMUMMY']],
                            'bosses': [_0x2274ad['default']['BAT5']],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EVOLUTION'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x18,
                            'minimum': 0x12c,
                            'frequency': 0x64,
                            'enemies': [_0x2274ad['default']['FLOWER'], _0x2274ad['default']['XLMUMMY']],
                            'bosses': [_0x2274ad['default']['XLFLOWER']]
                        }, {
                            'minute': 0x19,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x2274ad['default']['XLFLOWER']],
                            'bosses': [_0x2274ad['default']['BOSS_XLFLOWER']],
                            'events': [{
                                'eventType': _0x3467db['default']['FLOWER_WALL'],
                                'delay': 0x2710,
                                'repeat': 0x5,
                                'duration': 0x2710
                            }],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EVOLUTION'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x1a,
                            'minimum': 0x96,
                            'frequency': 0x64,
                            'enemies': [_0x2274ad['default']['XLFLOWER'], _0x2274ad['default']['FLOWER']]
                        }, {
                            'minute': 0x1b,
                            'minimum': 0x12c,
                            'frequency': 0x64,
                            'bosses': [_0x2274ad['default']['BAT4']],
                            'enemies': [_0x2274ad['default']['XLMUMMY'], _0x2274ad['default']['MUDMAN1'], _0x2274ad['default']['MUDMAN2']],
                            'events': [{
                                'eventType': _0x3467db['default']['GHOST_SWARM']
                            }, {
                                'eventType': _0x3467db['default']['GHOST_SWARM'],
                                'delay': 0xbb8,
                                'repeat': 0x13
                            }],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EVOLUTION'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x1c,
                            'minimum': 0x12c,
                            'frequency': 0x64,
                            'enemies': [_0x2274ad['default']['XLBAT'], _0x2274ad['default']['BAT4']]
                        }, {
                            'minute': 0x1d,
                            'minimum': 0x12c,
                            'frequency': 0x64,
                            'bosses': [_0x2274ad['default']['BAT4']],
                            'enemies': [_0x2274ad['default']['BAT4'], _0x2274ad['default']['BAT5']],
                            'events': [{
                                'eventType': _0x3467db['default']['BAT_SWARM']
                            }, {
                                'eventType': _0x3467db['default']['BAT_SWARM'],
                                'delay': 0xbb8,
                                'repeat': 0x13
                            }],
                            'treasure': {
                                'chances': [0x3, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0x30188b['default']['EVOLUTION'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY'], _0x30188b['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x1e,
                            'minimum': 0x1,
                            'frequency': 0x2710,
                            'enemies': [],
                            'bosses': [_0x2274ad['default']['BOSS_XLDEATH']],
                            'events': [{
                                'eventType': _0x3467db['default']['CYCLE_COMPLETE']
                            }]
                        }]
                    };
                _0x193329['default'] = _0x1e1ad7;
            };
