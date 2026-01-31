import { ArrowRight, Code, Database, MessageSquare, Terminal, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface HomeSectionProps {
  onSectionChange: (section: string) => void;
}

const modules = [
  {
    id: 'mutate',
    title: 'Mutate 模块',
    description: 'CD2的核心机制，用于获取游戏状态、进行数值计算和逻辑判断',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    features: ['基础运算', '游戏状态获取', '条件判断', '触发器系统']
  },
  {
    id: 'wavespawn',
    title: 'WaveSpawners 模块',
    description: '创建自定义虫潮，控制刷潮数量、时间、间隔和条件',
    icon: Terminal,
    color: 'from-green-500 to-emerald-500',
    features: ['定时波次', '条件触发', '动态难度', '嵌套技巧']
  },
  {
    id: 'vars',
    title: 'Vars 模块',
    description: '存储和管理自定义数据，构建复杂的游戏机制',
    icon: Database,
    color: 'from-purple-500 to-violet-500',
    features: ['变量定义', '状态追踪', '模块化设计', '游戏机制']
  },
  {
    id: 'messages',
    title: 'Messages 模块',
    description: '发送游戏内消息，实现状态通知和倒计时功能',
    icon: MessageSquare,
    color: 'from-orange-500 to-amber-500',
    features: ['消息类型', '动态内容', '常用模板', '通知模式']
  }
];

export function HomeSection({ onSectionChange }: HomeSectionProps) {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="text-center space-y-6 py-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          深岩银河自定义难度Mod教程
        </div>
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="gradient-text">CD2</span> 完全教学
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          从零开始学习《深岩银河》自定义难度Mod开发。
          本教程基于<span className="text-primary font-medium">星夜mod</span>的真实代码，
          带你掌握Mutate、WaveSpawners、Vars、Messages四大核心模块。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            onClick={() => onSectionChange('mutate')}
            className="gap-2"
          >
            开始学习
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onSectionChange('practice')}
            className="gap-2"
          >
            <BookOpen className="w-4 h-4" />
            例题练习
          </Button>
        </div>
      </div>

      {/* Learning Path */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">学习路线</h2>
          <p className="text-muted-foreground">按照推荐顺序学习，循序渐进掌握CD2</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card
                key={module.id}
                className="card-hover cursor-pointer group"
                onClick={() => onSectionChange(module.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <CardTitle className="text-xl mt-4">{module.title}</CardTitle>
                  <p className="text-muted-foreground">{module.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {module.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    开始学习
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Code className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold mb-2">实战代码</h3>
          <p className="text-sm text-muted-foreground">
            所有示例均来自星夜mod的真实代码，确保学以致用
          </p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold mb-2">循序渐进</h3>
          <p className="text-sm text-muted-foreground">
            从基础概念到高级技巧，逐步深入理解CD2的核心机制
          </p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Terminal className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold mb-2">即学即用</h3>
          <p className="text-sm text-muted-foreground">
            提供大量可复制的代码模板，快速应用到自己的mod中
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-12 border-t border-border">
        <h2 className="text-2xl font-bold mb-4">准备好开始了吗？</h2>
        <p className="text-muted-foreground mb-6">
          从Mutate模块开始，一步步掌握CD2自定义难度开发
        </p>
        <Button
          size="lg"
          onClick={() => onSectionChange('mutate')}
          className="gap-2"
        >
          开始学习 Mutate
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
