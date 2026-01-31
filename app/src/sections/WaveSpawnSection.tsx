import { useState } from 'react';
import { ChevronDown, ChevronUp, Terminal, Layers, AlertCircle, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from '@/components/CodeBlock';
import { waveSpawnerFields, waveSpawnerExamples, nestingExamples, commonIssues } from '@/data/wavespawnData';

export function WaveSpawnSection() {
  const [expandedFields, setExpandedFields] = useState<string[]>([]);
  const [expandedExamples, setExpandedExamples] = useState<string[]>([]);

  const toggleField = (name: string) => {
    setExpandedFields(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const toggleExample = (name: string) => {
    setExpandedExamples(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">WaveSpawners 模块</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          WaveSpawners（波次生成器）用于创建自定义虫潮，控制刷潮数量、时间、间隔、条件等。
          可以只刷出某些单个敌人，也可以刷出多样性虫群。
        </p>
      </div>

      <Tabs defaultValue="fields" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
          <TabsTrigger value="fields">字段</TabsTrigger>
          <TabsTrigger value="examples">示例</TabsTrigger>
          <TabsTrigger value="nesting">嵌套</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        {/* Fields Tab */}
        <TabsContent value="fields" className="space-y-4">
          <div className="grid gap-4">
            {waveSpawnerFields.map((field) => {
              const isExpanded = expandedFields.includes(field.name);
              return (
                <Card key={field.name} className="card-hover overflow-hidden">
                  <CardHeader
                    className="cursor-pointer py-4"
                    onClick={() => toggleField(field.name)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">{field.type}</Badge>
                        <CardTitle className="text-lg font-mono">{field.name}</CardTitle>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">{field.description}</p>
                    {field.default && (
                      <p className="text-xs text-muted-foreground mt-1">
                        默认值: <code className="bg-muted px-1 rounded">{field.default}</code>
                      </p>
                    )}
                  </CardHeader>
                  {isExpanded && (
                    <CardContent className="pt-0 pb-4">
                      <CodeBlock code={field.example} />
                      {field.details && (
                        <div className="bg-muted/50 rounded-lg p-4 mt-4">
                          <p className="text-sm text-muted-foreground">{field.details}</p>
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-4">
          <div className="grid gap-6">
            {waveSpawnerExamples.map((example) => {
              const isExpanded = expandedExamples.includes(example.name);
              return (
                <Card key={example.name} className="card-hover overflow-hidden">
                  <CardHeader
                    className="cursor-pointer py-4"
                    onClick={() => toggleExample(example.name)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Terminal className="w-5 h-5 text-primary" />
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

        {/* Nesting Tab */}
        <TabsContent value="nesting" className="space-y-6">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Code2 className="w-5 h-5 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-amber-500">嵌套教程</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  WaveSpawners的高级功能需要嵌套Mutate来实现。理解嵌套结构是掌握CD2进阶写作的关键。
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {nestingExamples.map((example, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">{example.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CodeBlock code={example.code} />
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">嵌套层次</h4>
                    <ul className="space-y-1">
                      {example.breakdown.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary font-mono">{i + 1}.</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* FAQ Tab */}
        <TabsContent value="faq" className="space-y-4">
          <div className="grid gap-4">
            {commonIssues.map((item, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <CardTitle className="text-base">{item.question}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {Array.isArray(item.answer) ? (
                    <ul className="space-y-2">
                      {item.answer.map((ans, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {ans}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <CodeBlock code={item.answer} />
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
