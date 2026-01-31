import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({ code, language = 'json', showLineNumbers = true, className = '' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting
  const highlightCode = (code: string) => {
    return code
      .replace(/(".*?")/g, '<span class="string">$1</span>')
      .replace(/\b(true|false|null)\b/g, '<span class="keyword">$1</span>')
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="number">$1</span>')
      .replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>');
  };

  const lines = code.split('\n');

  return (
    <div className={`code-block relative group ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50">
        <span className="text-xs text-muted-foreground font-medium uppercase">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-8 px-2 text-muted-foreground hover:text-foreground"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span className="ml-1 text-xs">{copied ? '已复制' : '复制'}</span>
        </Button>
      </div>
      <div className="overflow-x-auto p-4">
        <pre className="text-sm">
          {showLineNumbers ? (
            <div className="flex">
              <div className="select-none pr-4 text-right text-muted-foreground/50 border-r border-border mr-4">
                {lines.map((_, i) => (
                  <div key={i} className="leading-6">{i + 1}</div>
                ))}
              </div>
              <div className="flex-1">
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className="leading-6 whitespace-pre"
                    dangerouslySetInnerHTML={{ __html: highlightCode(line) || ' ' }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
          )}
        </pre>
      </div>
    </div>
  );
}
