import { useState } from 'react';
import { MessageSquare, Palette, Layers, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from '@/components/CodeBlock';
import { messageTypes, messageFields, messageExamples, messageTemplates, commonPatterns } from '@/data/messagesData';

export function MessagesSection() {
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
        <h1 className="text-4xl font-bold gradient-text">Messages 模块</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Messages模块用于在游戏中发送聊天消息。你可以发送静态消息，也可以使用Mutate动态生成消息内容，
          实现状态通知、倒计时、数值显示等功能。
        </p>
      </div>

      {/* Message Types */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Palette className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold">消息类型</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {messageTypes.map((type) => (
            <div
              key={type.type}
              className="p-3 rounded-lg border border-border bg-card text-center"
            >
              <div
                className="w-4 h-4 rounded-full mx-auto mb-2"
                style={{ backgroundColor: type.color }}
              />
              <p className="text-sm font-medium">{type.type}</p>
              <p className="text-xs text-muted-foreground mt-1">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fields */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-primary" />
            <CardTitle>消息字段</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {messageFields.map((field) => (
              <div key={field.name} className="flex items-start justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <code className="font-mono text-sm">{field.name}</code>
                    <Badge variant="secondary" className="text-xs">{field.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{field.description}</p>
                </div>
                <div className="text-right ml-4">
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
          <TabsTrigger value="templates">模板</TabsTrigger>
          <TabsTrigger value="patterns">常用模式</TabsTrigger>
        </TabsList>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-4">
          <div className="grid gap-4">
            {messageExamples.map((example) => {
              const isExpanded = expandedExamples.includes(example.name);
              return (
                <Card key={example.name} className="card-hover overflow-hidden">
                  <CardHeader
                    className="cursor-pointer py-4"
                    onClick={() => toggleExample(example.name)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-primary" />
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

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4">
            {messageTemplates.map((template, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Copy className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">{template.name}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={template.template} />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-4">
          <div className="grid gap-4">
            {commonPatterns.map((pattern, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">{pattern.name}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{pattern.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pattern.implementation.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
