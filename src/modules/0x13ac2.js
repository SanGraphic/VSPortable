// Module 0x13ac2
// Args: _0x36471f, _0x3200d6, _0x211a73

export default (_0x36471f, _0x3200d6, _0x211a73) => {
                'use strict';
                const _0x1de9bb = a0_0x6932;
                var _0x26a393 = this && this['__importDefault'] || function(_0x420905) {
                    return _0x420905 && _0x420905['__esModule'] ? _0x420905 : {
                        'default': _0x420905
                    };
                };
                Object['defineProperty'](_0x3200d6, '__esModule', {
                    'value': !0x0
                });
                const _0x460e06 = _0x26a393(_0x211a73(0x9bda)),
                    _0x1501dd = _0x26a393(_0x211a73(0x3fe3)),
                    _0x2e129c = _0x26a393(_0x211a73(0x14442)),
                    _0xa12e14 = _0x26a393(_0x211a73(0x2248)),
                    _0x1a0b9f = _0x26a393(_0x211a73(0x1545b)),
                    _0x37495b = _0x26a393(_0x211a73(0x1229)),
                    _0x3e975a = _0x26a393(_0x211a73(0x148f5)),
                    _0x2f718e = {
                        [_0x1501dd['default']['TOWERBRIDGE']]: [{
                            'order': 0x96,
                            'stageName': 'Tiny Bridge',
                            'description': 'Two opposing factions abruptly stopped fighting over this little bridge. No doubt the source of this cessation will turn out to be harmless.',
                            'uiTexture': 'UI',
                            'uiFrame': 'stage_bridge.png',
                            'frameName': 'stage_bridge_A.png',
                            'frameNameUnlock': 'stage_bridge_A.png',
                            'bestiaryBG': 'background_tower.png',
                            'stageNumber': 'Challenge',
                            'unlocked': !0x1,
                            'hidden': !0x0,
                            'BGM': _0x3e975a['default']['BGM_Bridge'],
                            'sideBBGM': _0x3e975a['default']['BGM_Bridge'],
                            'tips': 'Enemies grow stronger over time.',
                            'relics': [],
                            'yellowRelics': [],
                            'validForCharcaterData': !0x0,
                            'mods': {
                                'TimeLimit': 0x4b0,
                                'ClockSpeed': 0x1,
                                'PlayerPxSpeed': 1.25,
                                'EnemySpeed': 1.25,
                                'ProjectileSpeed': 0x1,
                                'GoldMultiplier': 1.3,
                                'EnemyHealthMultiplier': 0x1,
                                'LuckBonus': 0x0,
                                'XPBonus': 0x1,
                                'TimeMods': {
                                    'start': 0x0,
                                    'hpPerMinute': 0.2,
                                    'speedPerMinute': 0.025
                                }
                            },
                            'hyper': {
                                'unlocked': !0x1,
                                'TimeLimit': 0x4b0,
                                'ClockSpeed': 0x1,
                                'PlayerPxSpeed': 0.65,
                                'EnemySpeed': 0.65,
                                'ProjectileSpeed': 0.15,
                                'GoldMultiplier': 0.5,
                                'LuckBonus': 0.1,
                                'XPBonus': 0x0,
                                'EnemyHealthMultiplier': 0x0,
                                'StartingSpawns': 0x0
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
                                'mapKey': 'TowerBridge',
                                'mapPath': 'assets/tilesets/TowerBridge.json',
                                'isTiling': !0x0
                            },
                            'background': {
                                'texture': 'background4'
                            },
                            'spawnType': _0x1a0b9f['default']['HORIZONTAL'],
                            'startingSpawns': 0x32,
                            'minute': 0x0,
                            'destructibleType': _0x2e129c['default']['BRAZIER2'],
                            'destructibleFreq': 0x3e8,
                            'destructibleChance': 7.5,
                            'destructibleChanceMax': 0x32,
                            'maxDestructibles': 0xa,
                            'BGTextureName': 'bg_null',
                            'minimum': 0x1e,
                            'frequency': 0x12c,
                            'enemies': [_0x460e06['default']['BRIDGE_TRAINEE']]
                        }, {
                            'minute': 0x1,
                            'minimum': 0x28,
                            'frequency': 0x12c,
                            'enemies': [_0x460e06['default']['SKULLINO'], _0x460e06['default']['BRIDGE_TRAINEE']],
                            'bosses': [_0x460e06['default']['BOSS_XLSWORDIAN']]
                        }, {
                            'minute': 0x2,
                            'minimum': 0x32,
                            'frequency': 0x12c,
                            'enemies': [_0x460e06['default']['IMP'], _0x460e06['default']['SKULLINO']],
                            'bosses': [_0x460e06['default']['BOSS_XLSWORDIAN']],
                            'events': [{
                                'eventType': _0x37495b['default']['SHOOTING_STAR'],
                                'delay': 0x1388,
                                'moreX': 0x2,
                                'moreY': 0x3e8,
                                'moreZ': 0.1
                            }]
                        }, {
                            'minute': 0x3,
                            'minimum': 0x32,
                            'frequency': 0x12c,
                            'enemies': [_0x460e06['default']['IMP']],
                            'bosses': [_0x460e06['default']['BOSS_XLSWORDIAN']],
                            'treasure': {
                                'chances': [0x1, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0xa12e14['default']['EXISTING_ANY'], _0xa12e14['default']['EXISTING_ANY'], _0xa12e14['default']['EXISTING_ANY'], _0xa12e14['default']['EXISTING_ANY'], _0xa12e14['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x4,
                            'minimum': 0x32,
                            'frequency': 0xc8,
                            'enemies': [_0x460e06['default']['IMP'], _0x460e06['default']['SKULL2_EASY']],
                            'events': [{
                                'eventType': _0x37495b['default']['SHOOTING_STAR'],
                                'delay': 0x1388,
                                'moreX': 0x4,
                                'moreY': 0x3e8,
                                'moreZ': 0.1
                            }]
                        }, {
                            'minute': 0x5,
                            'minimum': 0x32,
                            'frequency': 0xc8,
                            'enemies': [_0x460e06['default']['GHOST2'], _0x460e06['default']['SKULL2_EASY']],
                            'events': [{
                                'eventType': _0x37495b['default']['MONSTER_RAIN'],
                                'duration': 0x3a98,
                                'moreX': 0xc,
                                'moreY': _0x460e06['default']['XLSWORDIAN_V']
                            }],
                            'arcanaHolder': _0x460e06['default']['BOSS_XLSWORDIAN_2'],
                            'arcanaTreasure': {
                                'chances': [0x1, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0xa12e14['default']['ARCANA'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EXISTING_ANY'], _0xa12e14['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x6,
                            'minimum': 0x32,
                            'frequency': 0xc8,
                            'enemies': [_0x460e06['default']['GHOST2'], _0x460e06['default']['HARPY']],
                            'events': [{
                                'eventType': _0x37495b['default']['SHOOTING_STAR'],
                                'delay': 0x1388,
                                'moreX': 0x6,
                                'moreY': 0x3e8,
                                'moreZ': 0.1
                            }],
                            'bosses': [_0x460e06['default']['BOSS_XLSWORDIAN']],
                            'treasure': {
                                'chances': [0x1, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0xa12e14['default']['EXISTING_ANY'], _0xa12e14['default']['EXISTING_ANY'], _0xa12e14['default']['EXISTING_ANY'], _0xa12e14['default']['EXISTING_ANY'], _0xa12e14['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0x7,
                            'minimum': 0x32,
                            'frequency': 0xc8,
                            'enemies': [_0x460e06['default']['MEDUSA2_AGGRO'], _0x460e06['default']['HARPY']],
                            'bosses': [_0x460e06['default']['BOSS_XLSWORDIAN']]
                        }, {
                            'minute': 0x8,
                            'minimum': 0x32,
                            'frequency': 0xc8,
                            'enemies': [_0x460e06['default']['MEDUSA2_AGGRO'], _0x460e06['default']['BRIDGE_MINION']],
                            'events': [{
                                'eventType': _0x37495b['default']['SHOOTING_STAR'],
                                'delay': 0x1388,
                                'moreX': 0x8,
                                'moreY': 0x3e8,
                                'moreZ': 0.1
                            }]
                        }, {
                            'minute': 0x9,
                            'minimum': 0x32,
                            'frequency': 0xc8,
                            'enemies': [_0x460e06['default']['BRIDGE_MINION']],
                            'events': [{
                                'eventType': _0x37495b['default']['MONSTER_RAIN'],
                                'duration': 0x3a98,
                                'moreX': 0xe,
                                'moreY': _0x460e06['default']['XLSWORDIAN_V']
                            }],
                            'bosses': [_0x460e06['default']['BOSS_XLSWORDIAN']],
                            'treasure': {
                                'chances': [0x1, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION']]
                            }
                        }, {
                            'minute': 0xa,
                            'minimum': 0x32,
                            'frequency': 0xc8,
                            'enemies': [_0x460e06['default']['KALI1'], _0x460e06['default']['BRIDGE_MINION']],
                            'events': [{
                                'eventType': _0x37495b['default']['SHOOTING_STAR'],
                                'delay': 0x1388,
                                'moreX': 0xa,
                                'moreY': 0x1f4,
                                'moreZ': 0.1
                            }],
                            'arcanaHolder': _0x460e06['default']['BOSS_XLSWORDIAN_2'],
                            'arcanaTreasure': {
                                'chances': [0x1, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0xa12e14['default']['ARCANA'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EXISTING_ANY'], _0xa12e14['default']['EXISTING_ANY']]
                            }
                        }, {
                            'minute': 0xb,
                            'minimum': 0x32,
                            'frequency': 0xc8,
                            'enemies': [_0x460e06['default']['BRIDGE_TETRA']]
                        }, {
                            'minute': 0xc,
                            'minimum': 0x32,
                            'frequency': 0x64,
                            'enemies': [_0x460e06['default']['SKELEWING_INO'], _0x460e06['default']['BRIDGE_TETRA']],
                            'events': [{
                                'eventType': _0x37495b['default']['SHOOTING_STAR'],
                                'delay': 0x1388,
                                'moreX': 0xc,
                                'moreY': 0x1f4,
                                'moreZ': 0.1
                            }],
                            'bosses': [_0x460e06['default']['BOSS_XLSWORDIAN']],
                            'treasure': {
                                'chances': [0x1, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION']]
                            }
                        }, {
                            'minute': 0xd,
                            'minimum': 0x32,
                            'frequency': 0x64,
                            'enemies': [_0x460e06['default']['SKELEWING_INO'], _0x460e06['default']['BRIDGE_TETRA']],
                            'events': [{
                                'eventType': _0x37495b['default']['MONSTER_RAIN'],
                                'duration': 0x3a98,
                                'moreX': 0x12,
                                'moreY': _0x460e06['default']['XLSWORDIAN_V']
                            }],
                            'bosses': [_0x460e06['default']['BOSS_XLSWORDIAN']]
                        }, {
                            'minute': 0xe,
                            'minimum': 0x32,
                            'frequency': 0x64,
                            'enemies': [_0x460e06['default']['XLBAT'], _0x460e06['default']['BAT3']],
                            'events': [{
                                'eventType': _0x37495b['default']['SHOOTING_STAR'],
                                'delay': 0x1388,
                                'moreX': 0xe,
                                'moreY': 0x190,
                                'moreZ': 0.1
                            }]
                        }, {
                            'minute': 0xf,
                            'minimum': 0x32,
                            'frequency': 0x64,
                            'enemies': [_0x460e06['default']['XLBAT'], _0x460e06['default']['BRIDGE_ARMOR']],
                            'bosses': [_0x460e06['default']['BOSS_XLSWORDIAN']],
                            'treasure': {
                                'chances': [0x1, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION']]
                            }
                        }, {
                            'minute': 0x10,
                            'minimum': 0x32,
                            'frequency': 0x64,
                            'enemies': [_0x460e06['default']['BRIDGE_ARMOR']],
                            'events': [{
                                'eventType': _0x37495b['default']['SHOOTING_STAR'],
                                'delay': 0x1388,
                                'moreX': 0x10,
                                'moreY': 0x12c,
                                'moreZ': 0.1
                            }],
                            'bosses': [_0x460e06['default']['BOSS_XLSWORDIAN']]
                        }, {
                            'minute': 0x11,
                            'minimum': 0x64,
                            'frequency': 0x64,
                            'enemies': [_0x460e06['default']['BRIDGE_ARMOR'], _0x460e06['default']['SKELEWING']],
                            'events': [{
                                'eventType': _0x37495b['default']['MONSTER_RAIN'],
                                'duration': 0x3a98,
                                'moreX': 0x18,
                                'moreY': _0x460e06['default']['XLSWORDIAN_V']
                            }]
                        }, {
                            'minute': 0x12,
                            'minimum': 0x32,
                            'frequency': 0x64,
                            'enemies': [_0x460e06['default']['XLCOCKATRICE_GOLD']],
                            'events': [{
                                'eventType': _0x37495b['default']['SHOOTING_STAR'],
                                'delay': 0x1388,
                                'moreX': 0x12,
                                'moreY': 0xc8,
                                'moreZ': 0.1
                            }],
                            'bosses': [_0x460e06['default']['BOSS_XLSWORDIAN']],
                            'treasure': {
                                'chances': [0x1, 0xa, 0x64],
                                'level': 0x1,
                                'prizeTypes': [_0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION'], _0xa12e14['default']['EVOLUTION']]
                            }
                        }, {
                            'minute': 0x13,
                            'minimum': 0x4b,
                            'frequency': 0x64,
                            'enemies': [_0x460e06['default']['XLSWORDIAN_AGGRO']]
                        }, {
                            'minute': 0x14,
                            'minimum': 0x1,
                            'frequency': 0x2710,
                            'enemies': [],
                            'bosses': [_0x460e06['default']['BOSS_XLDEATH']],
                            'events': [{
                                'eventType': _0x37495b['default']['CYCLE_COMPLETE']
                            }]
                        }]
                    };
                _0x3200d6['default'] = _0x2f718e;
            };
