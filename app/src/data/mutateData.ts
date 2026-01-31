export interface MutateItem {
  name: string;
  description: string;
  type: string;
  example: string;
  details?: string;
}

export const mutateCategories = [
  {
    id: 'basic',
    name: '基础运算',
    description: '基本的数学和逻辑运算'
  },
  {
    id: 'gamestate',
    name: '游戏状态',
    description: '获取游戏中的各种状态信息'
  },
  {
    id: 'conditional',
    name: '条件判断',
    description: '根据条件选择不同的值'
  },
  {
    id: 'trigger',
    name: '触发器',
    description: '控制事件触发的特殊Mutator'
  },
  {
    id: 'mission',
    name: '任务相关',
    description: '根据任务类型和阶段获取值'
  }
];

export const mutateItems: MutateItem[] = [
  // 基础运算
  {
    name: 'Add / Subtract / Multiply / Divide',
    description: '基本的四则运算，用于组合多个数值',
    type: '运算',
    example: `{
  "Mutate": "Add",
  "A": 1.35,
  "B": {
    "Mutate": "Multiply",
    "A": { "Mutate": "ResuppliesCalled" },
    "B": 0.1
  }
}`,
    details: 'A和B可以是固定值，也可以是其他Mutate表达式'
  },
  {
    name: 'Clamp',
    description: '将数值限制在指定范围内',
    type: '运算',
    example: `{
  "Mutate": "Clamp",
  "Value": 90,
  "Min": 0,
  "Max": 100
}`,
    details: '如果Value小于Min，返回Min；如果大于Max，返回Max'
  },
  {
    name: 'Floor / Ceil / Round',
    description: '取整运算',
    type: '运算',
    example: `{
  "Mutate": "Floor",
  "Value": { "Mutate": "Divide", "A": 100, "B": 30 }
}`,
    details: 'Floor向下取整，Ceil向上取整，Round四舍五入'
  },
  {
    name: 'Min / Max',
    description: '返回一组值中的最小/最大值',
    type: '运算',
    example: `{
  "Mutate": "Max",
  "Values": [0, { "Mutate": "Subtract", "A": 100, "B": 50 }]
}`,
    details: 'Values是一个数组，可以包含多个值或表达式'
  },
  
  // 游戏状态
  {
    name: 'EnemyCount',
    description: '获取当前场上敌人数量',
    type: '状态',
    example: `{
  "Mutate": "EnemyCount"
}
// 或获取特定敌人
{
  "Mutate": "EnemyCount",
  "ED": "ED_Spider_Tank"
}`,
    details: '可以指定ED来获取特定敌人的数量，或使用EDs指定多个敌人'
  },
  {
    name: 'EnemiesKilled',
    description: '获取本局已击杀的敌人数量',
    type: '状态',
    example: `{
  "Mutate": "EnemiesKilled"
}
// 或特定敌人
{
  "Mutate": "EnemiesKilled",
  "ED": "ED_Spider_Grunt"
}`,
    details: '包括所有已死亡的敌人，被despawn的敌人也可能被计入'
  },
  {
    name: 'DwarvesHealth / DwarvesShield',
    description: '获取矮人的平均血量/护盾',
    type: '状态',
    example: `{
  "Mutate": "DwarvesHealth"
}`,
    details: '返回0-1之间的值，1表示全员满血/满盾，0表示全员倒地/无盾'
  },
  {
    name: 'DwarvesDown / DwarvesDowns',
    description: '获取当前倒地人数/总倒地次数',
    type: '状态',
    example: `{
  "Mutate": "DwarvesDown"
}`,
    details: 'DwarvesDown是当前倒地人数，DwarvesDowns是本局总倒地次数'
  },
  {
    name: 'ResuppliesCalled',
    description: '获取已呼叫补给的次数',
    type: '状态',
    example: `{
  "Mutate": "ResuppliesCalled"
}`,
    details: '在补给落地前就会增加计数'
  },
  {
    name: 'ByTime / TimeDelta',
    description: '根据游戏时间返回数值',
    type: '状态',
    example: `{
  "Mutate": "ByTime",
  "InitialValue": 3.1,
  "RateOfChange": 0.0033,
  "StartDelay": 400
}`,
    details: '公式：InitialValue + RateOfChange × Max(0, Time - StartDelay)'
  },
  {
    name: 'TotalResource / HeldResource / DepositedResource',
    description: '获取资源数量',
    type: '状态',
    example: `{
  "Mutate": "TotalResource",
  "Resource": "Nitra"
}`,
    details: 'TotalResource是持有+已存放，HeldResource是仅持有，DepositedResource是仅已存放'
  },
  
  // 条件判断
  {
    name: 'If',
    description: '布尔条件判断',
    type: '条件',
    example: `{
  "Mutate": "If",
  "Condition": { "Mutate": "DuringDefend" },
  "Then": [],
  "Else": ["ED_Fast_Bulk"]
}`,
    details: 'Condition必须是返回布尔值的表达式'
  },
  {
    name: 'IfFloat',
    description: '数值比较判断',
    type: '条件',
    example: `{
  "Mutate": "IfFloat",
  "Value": { "Mutate": "ResuppliesCalled" },
  "<": 2,
  "Then": 40,
  "Else": 80
}`,
    details: '支持的操作符：==, >=, >, <=, <'
  },
  {
    name: 'And / Or / Not',
    description: '逻辑运算',
    type: '条件',
    example: `{
  "Mutate": "And",
  "A": { "Mutate": "DuringMission", "StartingAt": 300 },
  "B": { "Mutate": "IfFloat", "Value": { "Mutate": "EnemyCount" }, "<": 50, "Then": true, "Else": false }
}`,
    details: 'And和Or可以组合多个条件，Not用于取反'
  },
  {
    name: 'Select',
    description: '根据字符串选择值（类似switch）',
    type: '条件',
    example: `{
  "Mutate": "Select",
  "Select": { "Var": "Pressure" },
  "Default": 1,
  "Easy": 1,
  "Hard": 1.3
}`,
    details: '通常与Vars模块配合使用'
  },
  
  // 触发器
  {
    name: 'TriggerOnce',
    description: '只触发一次',
    type: '触发器',
    example: `{
  "Mutate": "TriggerOnce",
  "In": { "Mutate": "SecondaryFinished" }
}`,
    details: '当In从false变为true时触发一次，之后不再触发'
  },
  {
    name: 'TriggerNTimes',
    description: '触发N次',
    type: '触发器',
    example: `{
  "Mutate": "TriggerNTimes",
  "N": 3,
  "In": { "Mutate": "DuringMission", "StartingAt": 600 }
}`,
    details: '最多触发N次，可以设置Reset来重置计数'
  },
  {
    name: 'TriggerSometimes',
    description: '按概率触发',
    type: '触发器',
    example: `{
  "Mutate": "TriggerSometimes",
  "P": 0.3,
  "In": { "Mutate": "ResuppliesCalled" }
}`,
    details: 'P是触发概率，0.3表示30%的概率触发'
  },
  {
    name: 'TriggerOnChange',
    description: '数值变化时触发',
    type: '触发器',
    example: `{
  "Mutate": "TriggerOnChange",
  "In": { "Mutate": "EnemiesKilled", "ED": "ED_Spider_Grunt" }
}
// 仅上升时触发
{
  "Mutate": "TriggerOnChange",
  "RiseOnly": true,
  "In": { "Mutate": "DwarvesDown" }
}`,
    details: '可以设置RiseOnly或FallOnly来只在增加或减少时触发'
  },
  {
    name: 'TriggerDelay',
    description: '延迟触发',
    type: '触发器',
    example: `{
  "Mutate": "TriggerDelay",
  "N": 15,
  "In": { "Mutate": "TriggerOnChange", "In": { "Mutate": "ResuppliesCalled" } }
}`,
    details: '延迟N秒后触发，常用于创建延迟效果'
  },
  {
    name: 'TriggerCooldown',
    description: '冷却触发',
    type: '触发器',
    example: `{
  "Mutate": "TriggerCooldown",
  "N": 60,
  "In": { "Mutate": "ResuppliesCalled" }
}`,
    details: '触发后进入N秒冷却期，冷却期内不会再次触发'
  },
  {
    name: 'TriggerFixedDuration',
    description: '固定持续时间',
    type: '触发器',
    example: `{
  "Mutate": "TriggerFixedDuration",
  "N": 20,
  "In": { "Mutate": "TriggerSometimes", "P": 0.5, "In": true }
}`,
    details: '触发后保持true状态N秒，然后自动变为false'
  },
  
  // 任务相关
  {
    name: 'ByMissionType',
    description: '根据任务类型返回不同值',
    type: '任务',
    example: `{
  "Mutate": "ByMissionType",
  "Default": 60,
  "Egg": 70,
  "Elimination": 80,
  "Mining": 90,
  "Refinery": 100,
  "Escort": 110,
  "PE": 120,
  "Sabotage": 130,
  "Salvage": 140,
  "DeepScan": 150
}`,
    details: '支持的任务类型：DeepScan, Egg, Elimination, Escort, Mining, PE, Refinery, Sabotage, Salvage'
  },
  {
    name: 'ByDNA',
    description: '根据任务DNA（类型+长度+复杂度）返回不同值',
    type: '任务',
    example: `{
  "Mutate": "ByDNA",
  "Default": 1,
  "Mining": 2,
  "Refinery": 3,
  "Refinery,x,2": 5,
  "Refinery,2": 4,
  "x,x,2": 8
}`,
    details: '格式为"类型,长度,复杂度"，x表示匹配任意值'
  },
  {
    name: 'DuringMission',
    description: '在任务期间（或指定时间段）返回true',
    type: '任务',
    example: `{
  "Mutate": "DuringMission",
  "StartingAt": 300
}
// 或指定时间段
{
  "Mutate": "DuringMission",
  "StartingAt": 300,
  "StoppingAfter": 600
}`,
    details: '时间单位为秒，StartingAt是开始时间，StoppingAfter是结束时间'
  },
  {
    name: 'DuringDread / DuringDefend / DuringGenericSwarm',
    description: '在特定事件期间返回true',
    type: '任务',
    example: `{
  "Mutate": "DuringDread"
}`,
    details: 'DuringDread：有无畏在场时；DuringDefend：有守点事件时；DuringGenericSwarm：有自然潮时'
  },
  {
    name: 'ByPlayerCount',
    description: '根据玩家数量返回不同值',
    type: '任务',
    example: `{
  "Mutate": "ByPlayerCount",
  "Values": [80, 120, 180, 180]
}`,
    details: 'Values数组对应1人、2人、3人、4人...，超过数组长度使用最后一个值'
  },
  {
    name: 'ByBiome',
    description: '根据生物群落返回不同值',
    type: '任务',
    example: `{
  "Mutate": "ByBiome",
  "Default": 1,
  "CrystallineCaverns": 1.2,
  "AzureWeald": 1.3
}`,
    details: '支持的生物群落：CrystallineCaverns, AzureWeald, DenseBiozone, FungusBogs, HollowBough, IceCaves, MagmaCaves, RadioactiveZone, SaltCaves, SandblastedCorridors'
  },
  {
    name: 'BySalvagePhase / ByEscortPhase / ByRefineryPhase / BySaboPhase',
    description: '根据任务阶段返回不同值',
    type: '任务',
    example: `{
  "Mutate": "BySalvagePhase",
  "Default": 1,
  "Mules": 1.5,
  "Uplink": 2,
  "Refuel": 2.5,
  "Finished": 1
}`,
    details: '不同任务类型有不同的阶段名称'
  },
  {
    name: 'Random / RandomChoice',
    description: '随机数/随机选择',
    type: '随机',
    example: `{
  "Mutate": "Random",
  "Min": 40,
  "Max": 60
}
// 随机选择
{
  "Mutate": "RandomChoice",
  "Choices": ["A", "B", "C"],
  "Weights": [0.5, 0.3, 0.2]
}`,
    details: 'Random返回Min到Max之间的随机数，RandomChoice从Choices中按Weights权重随机选择'
  },
  {
    name: 'LockFloat / LockBoolean / LockString',
    description: '锁定值直到条件满足',
    type: '高级',
    example: `{
  "Mutate": "LockFloat",
  "Lock": { "Mutate": "SecondaryFinished" },
  "Value": { "Mutate": "DwarvesDowns" }
}`,
    details: '当Lock为true时，值不再变化；也可以使用Update，当Update为false时锁定'
  },
  {
    name: 'Accumulate / Delta',
    description: '累加器/变化检测',
    type: '高级',
    example: `{
  "Mutate": "Accumulate",
  "Initial": 0,
  "Value": 1,
  "Min": 0,
  "Max": 10
}
// Delta检测变化
{
  "Mutate": "Delta",
  "Value": { "Mutate": "DwarvesHealth" }
}`,
    details: 'Accumulate持续累加Value，Delta返回当前值与上一次值的差'
  }
];

export const commonNestingPatterns = [
  {
    name: '时间延迟触发',
    description: '在事件发生后延迟一段时间再触发',
    code: `{
  "Mutate": "TriggerDelay",
  "N": 15,
  "In": {
    "Mutate": "TriggerOnChange",
    "In": { "Mutate": "ResuppliesCalled" }
  }
}`
  },
  {
    name: '概率延迟触发',
    description: '延迟后按概率触发',
    code: `{
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
}`
  },
  {
    name: '条件组合判断',
    description: '多个条件同时满足才触发',
    code: `{
  "Mutate": "And",
  "A": { "Mutate": "DuringMission", "StartingAt": 300 },
  "B": {
    "Mutate": "IfFloat",
    "Value": { "Mutate": "EnemyCount" },
    "<": 50,
    "Then": true,
    "Else": false
  }
}`
  },
  {
    name: '动态数值计算',
    description: '基于游戏状态的动态数值',
    code: `{
  "Mutate": "Add",
  "A": 100,
  "B": {
    "Mutate": "Multiply",
    "A": { "Mutate": "ResuppliesCalled" },
    "B": 10
  }
}`
  },
  {
    name: '任务类型差异化',
    description: '不同任务类型返回不同值',
    code: `{
  "Mutate": "ByMissionType",
  "Default": 100,
  "Egg": {
    "Mutate": "Multiply",
    "A": 100,
    "B": 1.5
  },
  "Elimination": 200
}`
  }
];
