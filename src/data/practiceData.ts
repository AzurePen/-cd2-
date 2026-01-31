export interface PracticeExercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'mechanism' | 'value';
  code: string;
  questions: {
    question: string;
    answer: string;
    hint?: string;
  }[];
  analysis: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  modules: string[];
  code: string;
  explanation: string[];
  keyPoints: string[];
}

export const exercises: PracticeExercise[] = [
  {
    id: 'ex1',
    title: '基础Mutate嵌套练习',
    description: '理解基本的Mutate嵌套结构',
    difficulty: 'easy',
    category: 'value',
    code: `{
  "Enabled": {
    "Mutate": "IfFloat",
    "Value": { "Mutate": "EnemyCount" },
    "<": 50,
    "Then": true,
    "Else": false
  }
}`,
    questions: [
      {
        question: '这个Mutate表达式在什么条件下返回true？',
        answer: '当场上敌人数量少于50时返回true',
        hint: '注意IfFloat的条件判断和操作符'
      },
      {
        question: '如果EnemyCount等于60，Enabled的值是什么？',
        answer: 'false，因为60不小于50，所以执行Else分支'
      },
      {
        question: '如何将条件改为"敌人数量在30到70之间"？',
        answer: '需要使用And组合两个IfFloat条件，分别判断>=30和<=70'
      }
    ],
    analysis: [
      '这是一个典型的IfFloat嵌套EnemyCount的结构',
      'IfFloat用于数值比较，支持<, >, <=, >=, ==等操作符',
      'Value可以是简单的值，也可以是嵌套的Mutate表达式',
      'Then和Else分别对应条件满足和不满足时的返回值'
    ]
  },
  {
    id: 'ex2',
    title: '触发器链练习',
    description: '理解多个触发器的组合使用',
    difficulty: 'medium',
    category: 'mechanism',
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
    questions: [
      {
        question: '这个触发器链的执行顺序是什么？',
        answer: 'TriggerOnChange检测补给呼叫 → TriggerDelay延迟15秒 → TriggerSometimes 30%概率触发',
        hint: '从内向外阅读嵌套结构'
      },
      {
        question: '如果想让触发概率随着游戏进行而增加，应该如何修改？',
        answer: '可以将P的值改为一个Mutate表达式，例如基于ByTime或ResuppliesCalled计算概率'
      },
      {
        question: 'TriggerDelay的N参数单位是什么？',
        answer: '单位是秒'
      }
    ],
    analysis: [
      '触发器链是从内向外执行的',
      'TriggerOnChange检测ResuppliesCalled的变化',
      'TriggerDelay添加15秒延迟',
      'TriggerSometimes以30%概率放行触发信号',
      '这种结构常用于创建延迟的随机事件'
    ]
  },
  {
    id: 'ex3',
    title: '星夜-冰焰系统分析',
    description: '分析星夜mod中冰焰系统的核心逻辑',
    difficulty: 'hard',
    category: 'mechanism',
    code: `{
  "Vars": {
    "冰焰等级": {
      "Type": "Float",
      "Value": {
        "Mutate": "Clamp",
        "Value": {
          "Mutate": "Floor",
          "Value": {
            "Mutate": "Divide",
            "A": { "Var": "特殊矿石总量" },
            "B": 25
          }
        },
        "Min": 0,
        "Max": 4
      }
    },
    "冰焰基础持续时间": {
      "Type": "Float",
      "Value": {
        "Mutate": "IfFloat",
        "Value": { "Var": "冰焰等级" },
        "==": 4,
        "Then": 30,
        "Else": {
          "Mutate": "Add",
          "A": 10,
          "B": { "Mutate": "Multiply", "A": { "Var": "冰焰等级" }, "B": 5 }
        }
      }
    }
  }
}`,
    questions: [
      {
        question: '冰焰等级是如何计算的？',
        answer: '特殊矿石总量 ÷ 25，然后向下取整，最后限制在0-4之间',
        hint: '注意Floor和Clamp的作用'
      },
      {
        question: '如果特殊矿石总量是80，冰焰等级是多少？持续时间是多少？',
        answer: '等级是3（80÷25=3.2，Floor=3），持续时间是25秒（10+3×5=25）'
      },
      {
        question: '为什么要使用Clamp限制等级在0-4之间？',
        answer: '防止等级无限增长，确保游戏平衡性，同时也简化了后续的逻辑判断'
      }
    ],
    analysis: [
      '冰焰等级系统是一个典型的分级机制',
      '使用Divide + Floor实现每25矿石升1级',
      '使用Clamp确保等级在合理范围内（0-4）',
      '持续时间使用IfFloat实现满级特殊处理（30秒）',
      '非满级使用线性公式：10 + 等级×5',
      '这种设计让升级有明确的阶段感'
    ]
  },
  {
    id: 'ex4',
    title: '星夜-时间停止系统',
    description: '分析时间停止状态的核心逻辑',
    difficulty: 'hard',
    category: 'mechanism',
    code: `{
  "Vars": {
    "是否时间停止中N": {
      "Type": "Float",
      "Value": {
        "Mutate": "IfFloat",
        "Value": {
          "Mutate": "Add",
          "A": {
            "Mutate": "IfFloat",
            "Value": { "Mutate": "EnemiesKilled", "ED": "ED_Time_Stop" },
            ">=": 1,
            "Then": 1,
            "Else": 0
          },
          "B": {
            "Mutate": "IfFloat",
            "Value": { "Var": "时间停止经过秒数M" },
            "<=": { "Mutate": "Multiply", "A": 25, "B": { "Var": "持续时间倍率" } },
            "Then": 1,
            "Else": 0
          }
        },
        "==": 2,
        "Then": 1,
        "Else": 0
      }
    }
  }
}`,
    questions: [
      {
        question: '"是否时间停止中N"为1（激活）需要满足什么条件？',
        answer: '两个条件同时满足：1. 已经触发过时间停止（EnemiesKilled >= 1）；2. 在持续时间内（经过秒数 <= 25×倍率）',
        hint: '注意Add和== 2的判断'
      },
      {
        question: '为什么要用Add将两个条件的结果相加，然后判断== 2？',
        answer: '这是一种实现"与"逻辑的技巧。两个条件都为1时，和为2；任一条件不满足，和就小于2。这样可以用一个简单的IfFloat实现And的效果。'
      },
      {
        question: '如果持续时间倍率是2，时间停止最多持续多久？',
        answer: '25 × 2 = 50秒'
      }
    ],
    analysis: [
      '这是一个典型的"与"逻辑实现',
      '条件A: 检测是否触发过时间停止（ED_Time_Stop被击杀）',
      '条件B: 检测是否在持续时间内',
      '使用Add + == 2的技巧实现And逻辑',
      '这种写法比嵌套And更简洁',
      '持续时间可以动态调整（通过持续时间倍率）'
    ]
  },
  {
    id: 'ex5',
    title: '星夜-虫群进化系统',
    description: '分析虫群进化的核心数值计算',
    difficulty: 'medium',
    category: 'value',
    code: `{
  "Vars": {
    "ThreatValue": {
      "Type": "Float",
      "Value": {
        "Mutate": "Add",
        "A": { "Var": "KillMarks" },
        "B": {
          "Mutate": "Add",
          "A": { "Var": "NitraMarks" },
          "B": { /* ... 更多资源 */ }
        }
      }
    },
    "进化监视": {
      "Type": "Float",
      "Value": {
        "Mutate": "Subtract",
        "A": { "Var": "进化总数" },
        "B": { "Var": "进化已锁定" }
      }
    }
  }
}`,
    questions: [
      {
        question: 'ThreatValue（威胁值）由哪些因素组成？',
        answer: '击杀数、硝石数量、黄金数量、各种特殊矿石数量、无畏击杀等',
        hint: '查看星夜代码中的ThreatValue定义'
      },
      {
        question: '"进化监视"的计算逻辑是什么？有什么作用？',
        answer: '进化监视 = 进化总数 - 进化已锁定。用于追踪当前进化阶段内的新增进化次数，实现分阶段进化。'
      },
      {
        question: '为什么要用"总数 - 已锁定"的方式来计算？',
        answer: '这样可以实现"分阶段重置"的效果。每次威胁循环时，已锁定值更新为当前总数，监视值归零，开始新的进化阶段。'
      }
    ],
    analysis: [
      '威胁值系统是星夜mod的核心机制',
      '综合多种游戏行为计算威胁值（击杀、挖矿等）',
      '使用"总数-已锁定"模式实现阶段化管理',
      '每次威胁循环（51点）进化等级提升',
      '这种设计让玩家的所有行为都影响难度',
      '实现了真正的动态难度调整'
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'case1',
    title: '星夜-免费补给系统',
    description: '完整分析免费补给的获取、存储、使用机制',
    modules: ['Vars', 'WaveSpawners', 'Messages'],
    code: `// Vars部分
{
  "Vars": {
    "总获得免费补给次数": {
      "Type": "Float",
      "Value": { "Mutate": "EnemiesKilled", "ED": "免费信用" }
    },
    "已使用免费补给次数": {
      "Type": "Float",
      "Value": { "Mutate": "EnemiesKilled", "ED": "免费信用消耗标记" }
    },
    "剩余免费补给次数": {
      "Type": "Float",
      "Value": {
        "Mutate": "Subtract",
        "A": { "Var": "总获得免费补给次数" },
        "B": { "Var": "已使用免费补给次数" }
      },
      "Watch": true
    }
  }
}

// WaveSpawners部分
{
  "Enabled": {
    "Mutate": "TriggerOnce",
    "In": { "Mutate": "SecondaryFinished" }
  },
  "Enemies": ["ED_Time_Start"],
  "Interval": 0,
  "Difficulty": 1,
  "Distance": 5000,
  "Locations": 1,
  "SpawnOnEnable": true
}`,
    explanation: [
      '免费补给系统由三个核心变量组成：总获得次数、已使用次数、剩余次数',
      '通过击杀特定的"ED_免费信用"敌人来增加获得次数',
      '通过击杀"ED_免费信用消耗标记"敌人来增加使用次数',
      '剩余次数 = 获得次数 - 使用次数',
      'WaveSpawner在副任务完成时触发，生成ED_Time_Start来给予免费补给',
      '这种设计实现了"获得-存储-消耗"的完整流程'
    ],
    keyPoints: [
      '使用敌人击杀作为"事件触发"机制',
      '通过两个计数器的差值实现可存储的资源',
      'Watch: true 便于调试时观察剩余次数',
      'TriggerOnce确保副任务奖励只发放一次'
    ]
  },
  {
    id: 'case2',
    title: '星夜-虫群进化通知系统',
    description: '分析进化通知的Messages实现',
    modules: ['Messages', 'Vars'],
    code: `{
  "Messages": [
    {
      "Send": {
        "Mutate": "TriggerOnChange",
        "RiseOnly": true,
        "In": { "Var": "虫量监视" }
      },
      "Type": "Delux",
      "Sender": "威胁等级提高",
      "Message": {
        "Mutate": "Join",
        "Values": [
          "虫群数量 Level ↑↑ up ↑↑ (当前等级：",
          { "Mutate": "Int2String", "Value": { "Var": "虫量监视" } },
          ")"
        ]
      }
    },
    {
      "SendOnChange": true,
      "Type": "Developer",
      "Sender": "虫群获得进化",
      "Message": {
        "Mutate": "IfFloat",
        "Value": {
          "Mutate": "Delta",
          "Value": { "Mutate": "EnemiesKilled", "ED": "自爆聚合" }
        },
        ">": 0,
        "Then": "【自爆聚合】",
        "Else": "【大自爆进化了，体型缩小，爆炸范围变大！】"
      }
    }
  ]
}`,
    explanation: [
      '第一条消息: 使用TriggerOnChange RiseOnly检测虫量监视增加',
      '使用Delux类型显示华丽的升级通知',
      '第二条消息: 使用SendOnChange和Delta检测特定敌人击杀',
      'Delta Mutator返回当前值与上次值的差',
      '当差>0时，说明有新击杀，显示进化名称',
      '否则显示详细的进化描述',
      '这种设计实现了"简洁通知+详细说明"的双层信息显示'
    ],
    keyPoints: [
      'RiseOnly只在数值上升时触发，避免重复通知',
      'Delta用于检测数值变化',
      'SendOnChange可以在内容变化时重新发送',
      'IfFloat用于根据条件显示不同内容'
    ]
  },
  {
    id: 'case3',
    title: '星夜-动态难度WaveSpawner',
    description: '分析采矿任务中动态难度波次的实现',
    modules: ['WaveSpawners', 'Vars'],
    code: `{
  "Enabled": {
    "Mutate": "And",
    "A": { "Var": "是否允许任务" },
    "B": {
      "Mutate": "Or",
      "A": {
        "Mutate": "TriggerOnChange",
        "In": {
          "Mutate": "IfFloat",
          "Value": { "Var": "第一轮倒计时是否结束" },
          ">=": 1,
          "Then": 1,
          "Else": 0
        }
      },
      "B": {
        "Mutate": "TriggerOnChange",
        "In": {
          "Mutate": "IfFloat",
          "Value": { "Var": "是否生成周期性虫潮" },
          ">=": 1,
          "Then": 1,
          "Else": 0
        }
      }
    }
  },
  "Enemies": ["ED_NaturalWaveTrigger"],
  "Interval": 0,
  "Difficulty": 1,
  "Distance": 5000,
  "Locations": 1,
  "SpawnOnEnable": true
}`,
    explanation: [
      'Enabled使用And + Or组合多个条件',
      '条件A: 是否允许任务（根据任务类型判断）',
      '条件B: 第一轮倒计时结束 或 周期性虫潮条件满足',
      '使用TriggerOnChange检测状态变化',
      '生成ED_NaturalWaveTrigger触发自然潮',
      '这种设计实现了"任务专属+条件触发"的动态波次'
    ],
    keyPoints: [
      'And + Or组合可以实现复杂的条件逻辑',
      'TriggerOnChange用于检测状态变化',
      '使用专门的ED作为"触发器"是常见技巧',
      'SpawnOnEnable: true确保立即生成'
    ]
  }
];

export const tips = [
  {
    title: '从内向外阅读嵌套',
    content: '阅读嵌套的Mutate时，从最内层开始，逐步向外理解'
  },
  {
    title: '分解复杂表达式',
    content: '将复杂的嵌套表达式分解成小片段，逐个理解'
  },
  {
    title: '关注数据流向',
    content: '理解数据如何从游戏状态流向Vars，再流向WaveSpawners和Messages'
  },
  {
    title: '利用Watch调试',
    content: '开发时将Vars的Watch设为true，在控制台观察数值变化'
  },
  {
    title: '从简单开始',
    content: '先实现简单功能，再逐步添加复杂性'
  }
];
