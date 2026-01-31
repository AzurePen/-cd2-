import { useState } from 'react';
import { BookOpen, Lightbulb, CheckCircle, HelpCircle, Code2, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from '@/components/CodeBlock';
import { exercises, caseStudies, tips } from '@/data/practiceData';

export function PracticeSection() {
  const [revealedAnswers, setRevealedAnswers] = useState<string[]>([]);
  const [revealedHints, setRevealedHints] = useState<string[]>([]);

  const toggleAnswer = (id: string) => {
    setRevealedAnswers(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleHint = (id: string) => {
    setRevealedHints(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/20 text-green-500';
      case 'medium': return 'bg-yellow-500/20 text-yellow-500';
      case 'hard': return 'bg-red-500/20 text-red-500';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '简单';
      case 'medium': return '中等';
      case 'hard': return '困难';
      default: return difficulty;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">例题练习</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          通过实际例题巩固所学知识。这些例题基于星夜mod的真实代码，
          帮助你理解如何在实际项目中应用CD2的各种功能。
        </p>
      </div>

      {/* Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="bg-primary/10 border border-primary/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium text-sm">{tip.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{tip.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Tabs defaultValue="exercises" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="exercises">练习题</TabsTrigger>
          <TabsTrigger value="cases">案例分析</TabsTrigger>
        </TabsList>

        {/* Exercises Tab */}
        <TabsContent value="exercises" className="space-y-6">
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getDifficultyColor(exercise.difficulty)}>
                        {getDifficultyLabel(exercise.difficulty)}
                      </Badge>
                      <Badge variant="secondary">
                        {exercise.category === 'mechanism' ? '机制设计' : '数值控制'}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{exercise.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{exercise.description}</p>
                  </div>
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CodeBlock code={exercise.code} />

                {/* Questions */}
                <div className="space-y-4">
                  {exercise.questions.map((q, i) => {
                    const answerId = `${exercise.id}-q${i}`;
                    const isAnswerRevealed = revealedAnswers.includes(answerId);
                    const isHintRevealed = revealedHints.includes(answerId);
                    
                    return (
                      <div key={i} className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <HelpCircle className="w-5 h-5 text-primary mt-0.5" />
                          <div className="flex-1">
                            <p className="font-medium mb-3">{q.question}</p>
                            
                            <div className="flex gap-2 mb-3">
                              {q.hint && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => toggleHint(answerId)}
                                >
                                  {isHintRevealed ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
                                  {isHintRevealed ? '隐藏提示' : '显示提示'}
                                </Button>
                              )}
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => toggleAnswer(answerId)}
                              >
                                {isAnswerRevealed ? <EyeOff className="w-4 h-4 mr-1" /> : <CheckCircle className="w-4 h-4 mr-1" />}
                                {isAnswerRevealed ? '隐藏答案' : '显示答案'}
                              </Button>
                            </div>

                            {isHintRevealed && q.hint && (
                              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-2">
                                <p className="text-sm text-yellow-600">💡 提示: {q.hint}</p>
                              </div>
                            )}

                            {isAnswerRevealed && (
                              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                                <p className="text-sm text-green-600">✓ 答案: {q.answer}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Analysis */}
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-2">代码分析</h4>
                      <ul className="space-y-1">
                        {exercise.analysis.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Case Studies Tab */}
        <TabsContent value="cases" className="space-y-6">
          {caseStudies.map((study) => (
            <Card key={study.id} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {study.modules.map((mod) => (
                        <Badge key={mod} variant="secondary">{mod}</Badge>
                      ))}
                    </div>
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{study.description}</p>
                  </div>
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CodeBlock code={study.code} />

                <div className="grid gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">实现原理</h4>
                    <ul className="space-y-1">
                      {study.explanation.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <h4 className="font-medium mb-2">关键要点</h4>
                    <ul className="space-y-1">
                      {study.keyPoints.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
