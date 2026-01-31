import { useState } from 'react';
import { Database, Layers, Lightbulb, ChevronDown, ChevronUp, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from '@/components/CodeBlock';
import { varTypes, varFields, varExamples, varBestPractices, gameMechanicsExamples } from '@/data/varsData';

export function VarsSection() {
  const [expandedExamples, setExpandedExamples] = useState<string[]>([]);

  const toggleExample = (name: string) => {
    setExpandedExamples(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Vars 模块</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Vars（变量）模块用于存储和管理自定义数据。通过Vars，你可以创建复杂的游戏机制，
          实现状态追踪、数值计算和模块化设计。
        </p>
      </div>

      {/* Var Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {varTypes.map((type) => (
          <Card key={type.type} className="card-hover">
            <CardHeader>
              <Badge className="w-fit mb-2">{type.type}</Badge>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </CardHeader>
            <CardContent>
              <CodeBlock code={type.example} showLineNumbers={false} />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fields */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-primary" />
            <CardTitle>变量字段</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {varFields.map((field) => (
              <div key={field.name} className="flex items-start justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <code className="font-mono text-sm">{field.name}</code>
                  <p className="text-sm text-muted-foreground mt-1">{field.description}</p>
                </div>
                <div className="text-right">
                  {field.required ? (
                    <Badge variant="default">必需</Badge>
                  ) : (
                    <Badge variant="secondary">可选</Badge>
                  )}
                  {field.default && (
                    <p className="text-xs text-muted-foreground mt-1">
                      默认: {field.default}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="examples" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="examples">示例</TabsTrigger>
          <TabsTrigger value="mechanics">游戏机制</TabsTrigger>
          <TabsTrigger value="practices">最佳实践</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-4">
          <div className="grid gap-4">
            {varExamples.map((example) => {
              const isExpanded = expandedExamples.includes(example.name);
              return (
                <Card key={example.name} className="card-hover overflow-hidden">
                  <CardHeader
                    className="cursor-pointer py-4"
                    onClick={() => toggleExample(example.name)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-primary" />
                        <CardTitle className="text-lg">{example.name}</CardTitle>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">{example.description}</p>
                  </CardHeader>
                  {isExpanded && (
                    <CardContent className="pt-0 pb-4 space-y-4">
                      <CodeBlock code={example.code} />
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Layers className="w-4 h-4 text-primary" />
                          代码解析
                        </h4>
                        <ul className="space-y-1">
                          {example.explanation.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Game Mechanics Tab */}
        <TabsContent value="mechanics" className="space-y-6">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">利用Vars构建游戏机制</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Vars不仅可以存储简单数值，更可以用来构建完整的游戏机制。以下是星夜mod中的实际应用案例。
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {gameMechanicsExamples.map((mechanic) => (
              <Card key={mechanic.name} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">{mechanic.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{mechanic.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {mechanic.components.map((comp, i) => (
                      <div key={i} className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-medium mb-1">{comp.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{comp.description}</p>
                        <code className="text-xs bg-background px-2 py-1 rounded">{comp.code}</code>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Best Practices Tab */}
        <TabsContent value="practices" className="space-y-4">
          <div className="grid gap-4">
            {varBestPractices.map((practice, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">{practice.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{practice.description}</p>
                  {practice.examples && (
                    <div className="flex flex-wrap gap-2">
                      {practice.examples.map((ex, i) => (
                        <code key={i} className="text-xs bg-muted px-2 py-1 rounded">{ex}</code>
                      ))}
                    </div>
                  )}
                  {practice.tip && (
                    <p className="text-sm text-primary mt-2">💡 {practice.tip}</p>
                  )}
                  {practice.warning && (
                    <p className="text-sm text-destructive mt-2">⚠️ {practice.warning}</p>
                  )}
                  {practice.useCase && (
                    <p className="text-sm text-muted-foreground mt-2">📝 {practice.useCase}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
