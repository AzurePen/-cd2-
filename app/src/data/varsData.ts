export interface VarExample {
  name: string;
  description: string;
  code: string;
  explanation: string[];
}

export interface VarType {
  type: string;
  description: string;
  example: string;
}

export const varTypes: VarType[] = [
  {
    type: 'Float',
    description: '浮点数，用于存储数值',
    example: `"Value": 3.14`
  },
  {
    type: 'Boolean',
    description: '布尔值，true或false',
    example: `"Value": true`
  },
  {
    type: 'String',
    description: '字符串，用于Select等场景',
    example: `"Value": "Easy"`
  }
];

export const varFields = [
  {
    name: 'Type',
    description: '变量的数据类型',
    required: true
  },
  {
    name: 'Value',
    description: '变量的值或计算表达式',
    required: true
  },
  {
    name: 'Watch',
    description: '是否监视此变量的变化（用于调试）',
    required: false,
    default: 'false'
  }
];

export const varExamples: VarExample[] = [
  {
    name: '基础变量定义',
    description: '定义一个简单的数值变量',
    code: `{
  "Vars": {
    "我的变量": {
      "Type": "Float",
      "Value": 100,
      "Watch": false
    }
  }
}`,
    explanation: [
      '变量名: "我的变量"',
      'Type: "Float" - 浮点型',
      'Value: 100 - 初始值',
      'Watch: false - 不监视'
    ]
  },
  {
    name: '基于游戏状态的变量',
    description: '创建一个随游戏状态变化的变量',
    code: `{
  "Vars": {
    "当前威胁等级": {
      "Type": "Float",
      "Value": {
        "Mutate": "Add",
        "A": { "Mutate": "EnemiesKilled" },
        "B": { "Mutate": "TotalResource", "Resource": "Nitra" }
      },
      "Watch": true
    }
  }
}`,
    explanation: [
      'Value使用Mutate表达式',
      '将击杀数和硝石数量相加',
      'Watch: true 可以在控制台查看变化'
    ]
  },
  {
    name: '布尔状态变量',
    description: '创建一个表示游戏状态的布尔变量',
    code: `{
  "Vars": {
    "是否高压状态": {
      "Type": "Boolean",
      "Value": {
        "Mutate": "IfFloat",
        "Value": { "Mutate": "EnemyCount" },
        ">": 100,
        "Then": true,
        "Else": false
      },
      "Watch": false
    }
  }
}`,
    explanation: [
      'Type: "Boolean" - 布尔型',
      '当敌人数量>100时返回true',
      '可用于控制其他模块的启用'
    ]
  },
  {
    name: '带锁定的变量（LockFloat）',
    description: '创建一个在特定条件满足后不再变化的变量',
    code: `{
  "Vars": {
    "副任务完成时的击杀数": {
      "Type": "Float",
      "Value": {
        "Mutate": "LockFloat",
        "Lock": { "Mutate": "SecondaryFinished" },
        "Value": { "Mutate": "EnemiesKilled" }
      },
      "Watch": false
    }
  }
}`,
    explanation: [
      'LockFloat用于锁定变量值',
      '当SecondaryFinished为true时锁定',
      '锁定后不再随EnemiesKilled变化'
    ]
  },
  {
    name: '字符串选择变量',
    description: '创建一个用于Select的字符串变量',
    code: `{
  "Vars": {
    "难度等级": {
      "Type": "String",
      "Value": {
        "Mutate": "IfFloat",
        "Value": { "Mutate": "ByTime" },
        "<": 300,
        "Then": "Easy",
        "Else": {
          "Mutate": "IfFloat",
          "Value": { "Mutate": "ByTime" },
          "<": 600,
          "Then": "Medium",
          "Else": "Hard"
        }
      },
      "Watch": true
    }
  }
}`,
    explanation: [
      'Type: "String" - 字符串型',
      '根据游戏时间返回不同难度等级',
      '可用于Select Mutate进行分支选择'
    ]
  },
  {
    name: '复杂计算变量（星夜-冰焰等级）',
    description: '根据特殊矿石总量计算冰焰等级',
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
      },
      "Watch": false
    },
    "特殊矿石总量": {
      "Type": "Float",
      "Value": {
        "Mutate": "Add",
        "A": { "Mutate": "TotalResource", "Resource": "Magnite" },
        "B": {
          "Mutate": "Add",
          "A": { "Mutate": "TotalResource", "Resource": "Bismor" },
          "B": { /* ... 更多矿石 */ }
        }
      },
      "Watch": false
    }
  }
}`,
    explanation: [
      '特殊矿石总量 = 所有特殊矿石的和',
      '冰焰等级 = Floor(特殊矿石总量 / 25)',
      '使用Clamp限制在0-4之间',
      '每25个矿石提升1级'
    ]
  },
  {
    name: '状态追踪变量（星夜-时间停止）',
    description: '追踪时间停止状态的核心变量组',
    code: `{
  "Vars": {
    "时间停止死亡时间点": {
      "Type": "Float",
      "Value": {
        "Mutate": "LockFloat",
        "Update": {
          "Mutate": "TriggerOnChange",
          "In": { "Mutate": "EnemiesKilled", "ED": "ED_Time_Stop" }
        },
        "Value": { "Mutate": "ByTime" }
      },
      "Watch": false
    },
    "时间停止经过秒数M": {
      "Type": "Float",
      "Value": {
        "Mutate": "Subtract",
        "A": { "Var": "当前游戏时间" },
        "B": { "Var": "时间停止死亡时间点" }
      },
      "Watch": false
    },
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
      },
      "Watch": false
    }
  }
}`,
    explanation: [
      '时间停止死亡时间点: 记录触发时的时间（锁定）',
      '时间停止经过秒数M: 当前时间 - 触发时间',
      '是否时间停止中N: 两个条件同时满足（触发过 + 在持续时间内）'
    ]
  }
];

export const varBestPractices = [
  {
    title: '命名规范',
    description: '使用有意义的名称，建议使用中文描述变量用途',
    examples: ['"当前威胁等级"', '"是否高压状态"', '"冰焰等级"']
  },
  {
    title: '模块化设计',
    description: '将相关变量组织在一起，形成完整的功能模块',
    examples: ['时间停止模块：时间点、经过秒数、是否激活', '冰焰模块：等级、持续时间、冷却时间']
  },
  {
    title: '使用Watch调试',
    description: '开发时将Watch设为true，在控制台观察变量变化',
    tip: '正式发布时建议关闭Watch以提高性能'
  },
  {
    title: '避免循环依赖',
    description: '确保变量之间不会形成循环引用',
    warning: 'A依赖B，B依赖C，C又依赖A会导致错误'
  },
  {
    title: '利用LockFloat创建快照',
    description: '使用LockFloat在特定时刻"冻结"变量值',
    useCase: '记录副任务完成时的击杀数、记录首次触发时间等'
  }
];

export const gameMechanicsExamples = [
  {
    name: '虫群进化系统（星夜核心机制）',
    description: '通过Vars构建完整的虫群进化系统',
    components: [
      {
        name: '威胁值计算',
        description: '综合击杀、资源获取计算威胁值',
        code: '"ThreatValue": KillMarks + NitraMarks + GoldMarks + ...'
      },
      {
        name: '进化等级判定',
        description: '根据威胁值判定当前进化等级',
        code: '"进化监视": Floor(ThreatValue / 51)'
      },
      {
        name: '各进化类型计数',
        description: '分别追踪各进化类型的触发次数',
        code: '"自爆聚合": 自爆聚合总数 - 自爆聚合已锁定'
      }
    ]
  },
  {
    name: '免费补给系统',
    description: '构建可存储、可消耗的免费补给机制',
    components: [
      {
        name: '获得次数统计',
        description: '统计获得免费补给的总次数',
        code: '"总获得免费补给次数": EnemiesKilled ED_免费信用'
      },
      {
        name: '使用次数统计',
        description: '统计使用免费补给的次数',
        code: '"已使用免费补给次数": EnemiesKilled ED_免费信用消耗标记'
      },
      {
        name: '剩余次数计算',
        description: '计算剩余可用次数',
        code: '"剩余免费补给次数": 总获得 - 已使用'
      }
    ]
  },
  {
    name: '动态难度调整',
    description: '根据玩家表现动态调整游戏难度',
    components: [
      {
        name: '虫量监视',
        description: '追踪当前虫群进化等级',
        code: '"虫量监视": 虫量总数 - 虫量已锁定'
      },
      {
        name: '难度系数应用',
        description: '将进化等级应用到难度设置',
        code: '"EnemyCountModifier": 基础值 + (虫量监视 × 倍数)'
      }
    ]
  }
];
