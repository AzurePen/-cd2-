export interface MessageField {
  name: string;
  type: string;
  description: string;
  required: boolean;
  default?: string;
  example: string;
}

export interface MessageExample {
  name: string;
  description: string;
  code: string;
  explanation: string[];
}

export interface MessageType {
  type: string;
  description: string;
  color: string;
}

export const messageTypes: MessageType[] = [
  {
    type: 'Default',
    description: '默认消息类型，白色文字',
    color: '#ffffff'
  },
  {
    type: 'Warning',
    description: '警告消息，黄色/橙色文字',
    color: '#fbbf24'
  },
  {
    type: 'Event',
    description: '事件消息，通常用于重要游戏事件',
    color: '#60a5fa'
  },
  {
    type: 'Server',
    description: '服务器消息，灰色文字',
    color: '#9ca3af'
  },
  {
    type: 'Developer',
    description: '开发者消息，绿色文字（推荐用于自定义难度）',
    color: '#4ade80'
  },
  {
    type: 'Delux',
    description: '豪华消息，带有特殊样式',
    color: '#f472b6'
  },
  {
    type: 'Streamer',
    description: '直播模式消息',
    color: '#a78bfa'
  }
];

export const messageFields: MessageField[] = [
  {
    name: 'Send',
    type: 'Boolean / Mutate',
    description: '发送消息的条件',
    required: true,
    example: `{
  "Send": { "Mutate": "TriggerOnChange", "In": { "Mutate": "EnemiesKilled" } }
}`
  },
  {
    name: 'SendOnChange',
    type: 'Boolean',
    description: '当消息内容变化时是否重新发送',
    required: false,
    default: 'false',
    example: `"SendOnChange": true`
  },
  {
    name: 'Message',
    type: 'String / Mutate',
    description: '要发送的消息内容',
    required: true,
    example: `{
  "Message": "欢迎来到我的自定义难度！"
}
// 或使用Mutate动态生成
{
  "Message": {
    "Mutate": "Join",
    "Values": ["当前敌人数量：", { "Mutate": "Int2String", "Value": { "Mutate": "EnemyCount" } }]
  }
}`
  },
  {
    name: 'Sender',
    type: 'String',
    description: '消息发送者名称',
    required: false,
    default: '"CD2"',
    example: `"Sender": "虫群进化系统"`
  },
  {
    name: 'Type',
    type: 'String',
    description: '消息类型，决定显示样式',
    required: false,
    default: '"Default"',
    example: `"Type": "Developer"`
  }
];

export const messageExamples: MessageExample[] = [
  {
    name: '基础消息',
    description: '最简单的消息发送',
    code: `{
  "Messages": [
    {
      "Send": { "Mutate": "TriggerOnce", "In": { "Mutate": "DuringMission", "StartingAt": 10 } },
      "Type": "Developer",
      "Sender": "系统",
      "Message": "欢迎来到自定义难度！"
    }
  ]
}`,
    explanation: [
      'Send: 任务开始10秒后触发一次',
      'Type: Developer - 绿色开发者消息',
      'Sender: 显示为"系统"',
      'Message: 简单的静态消息'
    ]
  },
  {
    name: '动态数值消息',
    description: '在消息中显示动态数值',
    code: `{
  "Messages": [
    {
      "Send": { "Mutate": "TriggerOnChange", "In": { "Mutate": "EnemiesKilled" } },
      "Type": "Developer",
      "Sender": "击杀统计",
      "Message": {
        "Mutate": "Join",
        "Values": [
          "已击杀敌人：",
          { "Mutate": "Int2String", "Value": { "Mutate": "EnemiesKilled" } },
          " 只"
        ]
      }
    }
  ]
}`,
    explanation: [
      'TriggerOnChange: 每次击杀数变化时触发',
      'Join: 将多个字符串连接在一起',
      'Int2String: 将数字转换为字符串',
      '实现动态显示击杀数'
    ]
  },
  {
    name: '条件消息（星夜-威胁等级提升）',
    description: '当虫群进化时发送通知',
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
    }
  ]
}`,
    explanation: [
      'TriggerOnChange RiseOnly: 只在数值上升时触发',
      'Var: 引用Vars模块定义的变量',
      'Delux类型: 使用豪华样式显示',
      '实现进化等级提升的通知'
    ]
  },
  {
    name: '多条件消息（星夜-时间停止通知）',
    description: '时间停止开始和结束分别发送消息',
    code: `{
  "Messages": [
    {
      "Send": {
        "Mutate": "TriggerOnChange",
        "RiseOnly": true,
        "In": { "Var": "是否时间停止中N" }
      },
      "Type": "Delux",
      "Sender": "时间调律",
      "Message": {
        "Mutate": "Join",
        "Values": [
          "【时间停止：已激活，持续",
          { "Mutate": "Int2String", "Value": { "Mutate": "Multiply", "A": 25, "B": { "Var": "持续时间倍率" } } },
          "秒】"
        ]
      }
    },
    {
      "Send": {
        "Mutate": "TriggerOnChange",
        "FallOnly": true,
        "In": { "Var": "是否时间停止中N" }
      },
      "Type": "Delux",
      "Sender": "时间调律",
      "Message": "【时间停止：已结束】"
    }
  ]
}`,
    explanation: [
      '第一条: RiseOnly - 时间停止开始时触发',
      '第二条: FallOnly - 时间停止结束时触发',
      '动态计算持续时间: 25秒 × 持续时间倍率',
      '实现完整的开始/结束通知'
    ]
  },
  {
    name: '条件分支消息（星夜-冰焰等级）',
    description: '根据冰焰等级显示不同的消息',
    code: `{
  "Messages": [
    {
      "Send": {
        "Mutate": "TriggerOnChange",
        "In": { "Var": "冰焰等级" }
      },
      "Type": "Streamer",
      "Sender": "已获得特殊矿物",
      "Message": {
        "Mutate": "IfFloat",
        "Value": { "Var": "冰焰等级" },
        "==": 4,
        "Then": "[冰焰]已满级 Lv.4 - 持续时间 30s，冷却时间 60s",
        "Else": {
          "Mutate": "Join",
          "Values": [
            "[冰焰]等级提升 Lv.",
            { "Mutate": "Int2String", "Value": { "Var": "冰焰等级" } },
            " - 持续时间 ",
            { "Mutate": "Int2String", "Value": { "Var": "冰焰基础持续时间" } },
            "s (+5s)，冷却时间 ",
            { "Mutate": "Int2String", "Value": { "Var": "冰焰冷却时间" } },
            "s (-20s)"
          ]
        }
      }
    }
  ]
}`,
    explanation: [
      'IfFloat: 判断冰焰等级是否为4（满级）',
      '满级时: 显示简化消息',
      '未满级时: 显示详细升级信息',
      '动态显示当前等级、持续时间、冷却时间'
    ]
  },
  {
    name: '倒计时消息',
    description: '使用Countdown Mutator实现倒计时',
    code: `{
  "Messages": [
    {
      "Send": { "Mutate": "DuringMission", "StartingAt": 0 },
      "SendOnChange": true,
      "Type": "Developer",
      "Sender": "倒计时",
      "Message": {
        "Mutate": "Join",
        "Values": [
          "距离开始还有：",
          {
            "Mutate": "Int2String",
            "Value": {
              "Mutate": "Countdown",
              "Start": 10,
              "Enable": true
            }
          },
          "秒"
        ]
      }
    }
  ]
}`,
    explanation: [
      'Countdown: 从Start值开始倒计时',
      'SendOnChange: true - 数值变化时重新发送',
      '实现每秒更新的倒计时显示'
    ]
  }
];

export const messageTemplates = [
  {
    name: '状态变化通知模板',
    description: '当某个状态变化时发送通知',
    template: `{
  "Send": {
    "Mutate": "TriggerOnChange",
    "In": { /* 你的状态表达式 */ }
  },
  "Type": "Developer",
  "Sender": "系统名称",
  "Message": "状态变化通知内容"
}`
  },
  {
    name: '数值变化通知模板',
    description: '当数值变化时显示当前值',
    template: `{
  "Send": {
    "Mutate": "TriggerOnChange",
    "In": { "Mutate": "EnemiesKilled" /* 或你的数值 */ }
  },
  "Type": "Developer",
  "Sender": "数值统计",
  "Message": {
    "Mutate": "Join",
    "Values": [
      "当前数值：",
      { "Mutate": "Int2String", "Value": { /* 你的数值表达式 */ } }
    ]
  }
}`
  },
  {
    name: '定时消息模板',
    description: '在特定时间发送消息',
    template: `{
  "Send": {
    "Mutate": "TriggerOnce",
    "In": { "Mutate": "DuringMission", "StartingAt": 300 /* 秒 */ }
  },
  "Type": "Developer",
  "Sender": "时间提示",
  "Message": "任务开始5分钟了！"
}`
  },
  {
    name: '条件复合消息模板',
    description: '多个条件组合触发消息',
    template: `{
  "Send": {
    "Mutate": "And",
    "A": { "Mutate": "DuringMission", "StartingAt": 300 },
    "B": {
      "Mutate": "IfFloat",
      "Value": { "Mutate": "EnemyCount" },
      ">": 50,
      "Then": true,
      "Else": false
    }
  },
  "Type": "Warning",
  "Sender": "警告",
  "Message": "高压状态！敌人数量超过50！"
}`
  },
  {
    name: '概率消息模板',
    description: '按概率发送消息',
    template: `{
  "Send": {
    "Mutate": "TriggerSometimes",
    "P": 0.5 /* 50%概率 */,
    "In": { "Mutate": "TriggerOnChange", "In": { "Mutate": "ResuppliesCalled" } }
  },
  "Type": "Developer",
  "Sender": "随机事件",
  "Message": "你触发了随机事件！"
}`
  }
];

export const commonPatterns = [
  {
    name: '开始/结束配对消息',
    description: '为某个状态的启动和结束分别发送消息',
    implementation: [
      '使用RiseOnly检测状态开始',
      '使用FallOnly检测状态结束',
      '使用相同的Sender便于识别'
    ]
  },
  {
    name: '等级提升通知',
    description: '当等级提升时发送通知',
    implementation: [
      '使用TriggerOnChange RiseOnly检测等级上升',
      '使用Join组合静态文本和动态数值',
      '使用Int2String将等级数字转为字符串'
    ]
  },
  {
    name: '资源获取提示',
    description: '当获得资源时显示提示',
    implementation: [
      '使用TriggerOnChange检测资源变化',
      '使用TotalResource或HeldResource获取资源量',
      '可以配合IfFloat显示不同的提示内容'
    ]
  }
];
