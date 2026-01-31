export interface WaveSpawnerField {
  name: string;
  type: string;
  description: string;
  default?: string;
  example: string;
  details?: string;
}

export interface WaveSpawnerExample {
  name: string;
  description: string;
  code: string;
  explanation: string[];
}

export const waveSpawnerFields: WaveSpawnerField[] = [
  {
    name: 'Enabled',
    type: 'Boolean / Mutate',
    description: '控制波次生成器是否激活',
    default: 'true',
    example: `{
  "Enabled": {
    "Mutate": "IfFloat",
    "Value": { "Mutate": "EnemyCount" },
    "<": 50,
    "Then": true,
    "Else": false
  }
}`,
    details: '这是最重要的字段，决定了波次何时触发。可以配合各种Mutate指令实现复杂的触发逻辑。'
  },
  {
    name: 'Name',
    type: 'String',
    description: '波次生成器的描述性名称',
    example: `"Name": "我的自定义虫潮"`,
    details: '仅用于代码可读性，不影响游戏功能'
  },
  {
    name: 'Interval',
    type: 'Float / Mutate',
    description: '波次生成的时间间隔（秒）',
    example: `"Interval": 90`,
    details: '启用后，经过Interval秒生成第一批敌人，之后每隔Interval秒重复生成'
  },
  {
    name: 'Enemies',
    type: 'String[] / Mutate',
    description: '指定生成哪些类型的敌人',
    example: `"Enemies": ["ED_Spider_Tank", "ED_Spider_Stinger", "ED_Bomber"]`,
    details: '可以指定一个或多个敌人标识符（ED）。如果留空则不生成任何敌人'
  },
  {
    name: 'Difficulty',
    type: 'Float / Mutate',
    description: '分配给波次的难度点数',
    example: `"Difficulty": 300`,
    details: '点数会根据列表中敌人的DifficultyRating分配到各个敌人，决定生成数量。点数越高，生成的敌人越多'
  },
  {
    name: 'Distance',
    type: 'Float / Mutate',
    description: '敌人生成点与玩家的距离（码）',
    example: `"Distance": 2000`,
    details: '控制敌人在距离玩家多远的位置生成。距离越大，敌人出现位置越远'
  },
  {
    name: 'Diversity',
    type: 'Integer / Mutate',
    description: '每次生成时从Enemies列表中选取的敌人种类数量',
    example: `"Diversity": 2`,
    details: '如果设置为2，每次波次会从Enemies列表中随机选取2种敌人生成'
  },
  {
    name: 'Locations',
    type: 'Integer / Mutate',
    description: '敌人生成点的数量',
    example: `"Locations": 3`,
    details: '生成点越多，敌人出现的位置越分散。一般设置1，方便工程核弹；设置2以上，就是变相削弱工程'
  },
  {
    name: 'SpawnOnEnable',
    type: 'Boolean',
    description: '波次生成器启用时是否立即生成第一批敌人',
    default: 'false',
    example: `"SpawnOnEnable": true`,
    details: '如果为true，波次启用后会跳过第一个Interval间隔立即生成敌人'
  },
  {
    name: 'UnlockInterval',
    type: 'Boolean',
    description: '是否允许动态改变Interval值',
    default: 'false',
    example: `"UnlockInterval": true`,
    details: '如果为true，改变Interval值会影响当前的倒计时；如果为false，Interval只在每次生成后重新计算'
  },
  {
    name: 'PauseOnDisable',
    type: 'Boolean',
    description: '波次生成器禁用时是否暂停倒计时',
    default: 'false',
    example: `"PauseOnDisable": true`,
    details: '如果为true，禁用时计时暂停，重新启用后继续；如果为false，重新启用时计时重置'
  },
  {
    name: 'Alert',
    type: 'Boolean',
    description: '生成的敌人是否立即警觉并攻击玩家',
    default: 'true',
    example: `"Alert": false`,
    details: '如果为true，敌人生成后立即进入攻击状态；如果为false，敌人会保持平静直到被惊动（疑似无效）'
  }
];

export const waveSpawnerExamples: WaveSpawnerExample[] = [
  {
    name: '基础定时波次（恒压潮）',
    description: '每2分钟生成一次，在距离玩家15米的2个位置生成总难度150点的战士和护卫混合波次',
    code: `{
  "WaveSpawners": [
    {
      "Enabled": true,
      "Name": "基础巡逻波次（恒压潮）",
      "Interval": 120,
      "Enemies": ["ED_Spider_Grunt", "ED_Spider_Grunt_Guard"],
      "Difficulty": 150,
      "Distance": 1500,
      "Locations": 2,
      "SpawnOnEnable": false,
      "Alert": true
    }
  ]
}`,
    explanation: [
      'Enabled: true - 永远保持触发状态',
      'Interval: 120 - 每120秒（2分钟）生成一次',
      'Enemies: 战士和护卫的混合波次',
      'Difficulty: 150 - 总难度150点',
      'Distance: 1500 - 在距离玩家1500码处生成',
      'Locations: 2 - 在2个位置生成'
    ]
  },
  {
    name: '条件触发波次（队友倒地干扰）',
    description: '当有队友倒地时，有50%概率立即在玩家附近生成小自爆和抱抱的救援干扰波次',
    code: `{
  "WaveSpawners": [
    {
      "Enabled": {
        "Mutate": "And",
        "A": {
          "Mutate": "IfFloat",
          "Value": { "Mutate": "DwarvesDown" },
          ">": 0,
          "Then": true,
          "Else": false
        },
        "B": {
          "Mutate": "TriggerSometimes",
          "P": 0.5,
          "In": true
        }
      },
      "Name": "队友倒地，干扰救援的波次",
      "Interval": 0,
      "Enemies": ["ED_Spider_Exploder", "ED_Grabber"],
      "Difficulty": 200,
      "Distance": 800,
      "Locations": 1,
      "SpawnOnEnable": true,
      "Alert": true
    }
  ]
}`,
    explanation: [
      'Enabled: 使用And组合两个条件',
      '条件A: DwarvesDown > 0（有队友倒地）',
      '条件B: TriggerSometimes 50%概率触发',
      'Interval: 0 - 立即生成',
      'SpawnOnEnable: true - 启用时立即生成'
    ]
  },
  {
    name: '动态难度波次（随时间增强）',
    description: '任务开始5分钟后激活，每5分钟波次间隔减少2秒，难度增加50点，实现随时间越来越频繁、越来越强的精英波次',
    code: `{
  "WaveSpawners": [
    {
      "Enabled": {
        "Mutate": "DuringMission",
        "StartingAt": 300
      },
      "Name": "随时间增强的精英波次",
      "Interval": {
        "Mutate": "Subtract",
        "A": 180,
        "B": {
          "Mutate": "Multiply",
          "A": 2,
          "B": {
            "Mutate": "Floor",
            "Value": {
              "Mutate": "Divide",
              "A": { "Mutate": "ByTime" },
              "B": 300
            }
          }
        }
      },
      "Enemies": ["ED_Spider_Tank", "ED_Spider_Stinger", "ED_Mactera_TripleShooter"],
      "Difficulty": {
        "Mutate": "Add",
        "A": 200,
        "B": {
          "Mutate": "Multiply",
          "A": 50,
          "B": {
            "Mutate": "Floor",
            "Value": {
              "Mutate": "Divide",
              "A": { "Mutate": "ByTime" },
              "B": 300
            }
          }
        }
      },
      "Distance": 2000,
      "Locations": 3,
      "SpawnOnEnable": true
    }
  ]
}`,
    explanation: [
      'Enabled: DuringMission StartingAt 300 - 任务开始5分钟后激活',
      'Interval: 180秒减去(时间/300的向下取整 × 2)',
      'Difficulty: 200加上(时间/300的向下取整 × 50)',
      '每5分钟间隔减少2秒，难度增加50点'
    ]
  },
  {
    name: 'BOSS召唤波次（无畏召唤）',
    description: '任务开始10分钟后，如果没有无畏在场，每10分钟召唤一只无畏，最多召唤3次',
    code: `{
  "WaveSpawners": [
    {
      "Enabled": {
        "Mutate": "TriggerNTimes",
        "N": 3,
        "In": {
          "Mutate": "And",
          "A": { "Mutate": "DuringMission", "StartingAt": 600 },
          "B": {
            "Mutate": "IfFloat",
            "Value": { "Mutate": "EnemyCount", "ED": "ED_Spider_Tank_Boss" },
            "==": 0,
            "Then": true,
            "Else": false
          }
        }
      },
      "Name": "无畏召唤波次",
      "Interval": 600,
      "Enemies": ["ED_Spider_Tank_Boss"],
      "Difficulty": 500,
      "Distance": 3000,
      "Locations": 1,
      "SpawnOnEnable": true,
      "Alert": true
    }
  ]
}`,
    explanation: [
      'Enabled: TriggerNTimes N=3 - 最多触发3次',
      '条件A: DuringMission StartingAt 600 - 任务开始10分钟后',
      '条件B: EnemyCount ED_Spider_Tank_Boss == 0 - 没有无畏在场',
      'Interval: 600 - 每10分钟检查一次'
    ]
  },
  {
    name: '多波次协同工作',
    description: '主波次每3分钟生成一次，每杀死一个战士，立即在附近补充蜂拥虫',
    code: `{
  "WaveSpawners": [
    {
      "Enabled": { "Mutate": "DuringMission", "StartingAt": 180 },
      "Name": "主波次",
      "Interval": 180,
      "Enemies": ["ED_Spider_Grunt", "ED_Spider_Grunt_Guard"],
      "Difficulty": 200,
      "Distance": 1500,
      "Locations": 2
    },
    {
      "Enabled": {
        "Mutate": "TriggerOnChange",
        "In": { "Mutate": "EnemiesKilled", "ED": "ED_Spider_Grunt" }
      },
      "Name": "蜂拥补充波次",
      "Interval": 0,
      "Enemies": ["ED_Spider_Swarmer"],
      "Difficulty": 50,
      "Distance": 500,
      "Locations": 1,
      "SpawnOnEnable": true
    }
  ]
}`,
    explanation: [
      '主波次: 每3分钟生成战士和护卫',
      '补充波次: 使用TriggerOnChange检测战士击杀',
      '每杀死一个战士，立即在500码处生成蜂拥虫'
    ]
  },
  {
    name: '玩家响应式波次（补给干扰）',
    description: '每次呼叫补给时，有30%概率在补给舱附近生成干扰敌人',
    code: `{
  "WaveSpawners": [
    {
      "Enabled": {
        "Mutate": "TriggerSometimes",
        "P": 0.3,
        "In": {
          "Mutate": "TriggerOnChange",
          "In": { "Mutate": "ResuppliesCalled" }
        }
      },
      "Name": "补给干扰波次",
      "Interval": 0,
      "Enemies": ["ED_Spider_Exploder", "ED_Grabber"],
      "Difficulty": 150,
      "Distance": 1000,
      "Locations": 1,
      "SpawnOnEnable": true,
      "Alert": true
    }
  ]
}`,
    explanation: [
      'TriggerOnChange检测ResuppliesCalled的变化',
      'TriggerSometimes 30%概率触发',
      'Interval: 0 - 立即生成干扰'
    ]
  }
];

export const nestingExamples = [
  {
    name: '三层嵌套：延迟概率触发',
    description: '补给呼叫后延迟15秒，然后30%概率触发',
    code: `{
  "Enabled": {
    "Mutate": "TriggerSometimes",
    "P": 0.3,
    "In": {
      "Mutate": "TriggerDelay",
      "N": 15,
      "In": {
        "Mutate": "TriggerOnChange",
        "In": { "Mutate": "ResuppliesCalled" }
      }
    }
  }
}`,
    breakdown: [
      '第1层: TriggerOnChange - 检测补给呼叫',
      '第2层: TriggerDelay - 延迟15秒',
      '第3层: TriggerSometimes - 30%概率触发'
    ]
  },
  {
    name: '四层嵌套：复杂条件判断',
    description: '任务进行3-10分钟内，且敌人数量少于50，且玩家数≥3时才触发',
    code: `{
  "Enabled": {
    "Mutate": "And",
    "A": {
      "Mutate": "DuringMission",
      "StartingAt": 180,
      "StoppingAfter": 600
    },
    "B": {
      "Mutate": "And",
      "A": {
        "Mutate": "IfFloat",
        "Value": { "Mutate": "EnemyCount" },
        "<": 50,
        "Then": true,
        "Else": false
      },
      "B": {
        "Mutate": "IfFloat",
        "Value": { "Mutate": "DwarfCount" },
        ">=": 3,
        "Then": true,
        "Else": false
      }
    }
  }
}`,
    breakdown: [
      '第1层: DuringMission - 时间范围3-10分钟',
      '第2层: And - 组合两个条件',
      '第3层: And - 组合另外两个条件',
      '第4层: IfFloat - 敌人数量<50 和 玩家数≥3'
    ]
  },
  {
    name: '动态敌人生成列表',
    description: '每4分钟从3种不同的精英组合中随机选择一种生成',
    code: `{
  "Enabled": { "Mutate": "DuringMission", "StartingAt": 240 },
  "Name": "随机精英波次",
  "Interval": 240,
  "Enemies": {
    "Mutate": "RandomChoice",
    "Choices": [
      ["ED_Spider_Tank", "ED_Spider_Stinger"],
      ["ED_Bomber", "ED_Grabber", "ED_Mactera_TripleShooter"],
      ["ED_Spider_Exploder", "ED_Spider_ExploderTank"]
    ]
  },
  "Difficulty": 300,
  "Distance": 1800,
  "Locations": 2,
  "SpawnOnEnable": true
}`,
    breakdown: [
      'RandomChoice - 从3个选项中随机选择',
      '每个选项是一个敌人数组',
      '实现每次生成不同的敌人组合'
    ]
  }
];

export const commonIssues = [
  {
    question: '为什么我的WaveSpawner没有生成敌人？',
    answer: [
      '检查Enabled字段是否为true',
      '检查Difficulty或Distance是否设置或为0',
      '检查Enemies列表是否为空',
      '场上的敌人数量已达到Caps模块（虫限）限制'
    ]
  },
  {
    question: '如何让波次只在特定任务类型中生效？',
    answer: [`使用ByMissionType Mutate：
{
  "Enabled": {
    "Mutate": "And",
    "A": { "Mutate": "ByMissionType", "Default": false, "Elimination": true },
    "B": true
  }
}`]
  },
  {
    question: '如何让波次在任务后期才激活？',
    answer: `使用DuringMission指定时间：
{
  "Enabled": { "Mutate": "DuringMission", "StartingAt": 600 }
}
// 任务开始10分钟后激活`
  },
  {
    question: '如何控制波次的生成频率？',
    answer: `使用Interval配合各种Mutate：
{
  "Interval": {
    "Mutate": "Add",
    "A": 60,
    "B": { "Mutate": "Multiply", "A": 10, "B": { "Mutate": "EnemyCount" } }
  }
}
// 场上每多一个敌人，间隔增加10秒`
  }
];
