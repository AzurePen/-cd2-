import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/CodeBlock';
import { mutateCategories, mutateItems, commonNestingPatterns } from '@/data/mutateData';

export function MutateSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleItem = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const filteredItems = mutateItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? item.type === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Mutate 模块</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Mutate是CD2的核心机制，用于获取游戏状态、进行数值计算和逻辑判断。
          几乎所有的动态功能都依赖Mutate实现。
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="搜索Mutate..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selectedCategory === null
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:text-foreground'
          }`}
        >
          全部
        </button>
        {mutateCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Mutate Items */}
      <div className="grid gap-4">
        {filteredItems.map((item) => {
          const isExpanded = expandedItems.includes(item.name);
          return (
            <Card key={item.name} className="card-hover overflow-hidden">
              <CardHeader
                className="cursor-pointer py-4"
                onClick={() => toggleItem(item.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{item.type}</Badge>
                    <CardTitle className="text-lg font-mono">{item.name}</CardTitle>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
              </CardHeader>
              {isExpanded && (
                <CardContent className="pt-0 pb-4">
                  <div className="space-y-4">
                    <CodeBlock code={item.example} />
                    {item.details && (
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">{item.details}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      {/* Common Nesting Patterns */}
      <div className="section-divider my-12" />
      
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">常用嵌套模式</h2>
        </div>
        <p className="text-muted-foreground">
          以下是CD2中常见的Mutate嵌套模式，掌握这些模式可以帮助你快速构建复杂逻辑。
        </p>

        <div className="grid gap-6">
          {commonNestingPatterns.map((pattern, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">{pattern.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{pattern.description}</p>
              </CardHeader>
              <CardContent>
                <CodeBlock code={pattern.code} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
