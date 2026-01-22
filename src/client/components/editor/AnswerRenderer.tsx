import { Block, TextBlock, CodeBlock } from '../../utils/EditorTypes';

interface AnswerRendererProps {
  blocks: Block[];
}

export function AnswerRenderer({ blocks }: AnswerRendererProps) {
  const getTextStyles = (block: TextBlock) => {
    return {
      fontWeight: block.styles?.bold ? 'bold' : 'normal',
      fontStyle: block.styles?.italic ? 'italic' : 'normal',
      textDecoration: block.styles?.underline ? 'underline' : 'none',
      textAlign: block.align || 'left',
    };
  };

  const getFontSizeClass = (block: TextBlock) => {
    switch (block.fontSize) {
      case 'small': return 'text-base leading-7';
      case 'large': return 'text-2xl leading-10';
      default: return 'text-lg leading-8';
    }
  };

  if (!blocks || blocks.length === 0) {
    return <p className="text-neutral-400 text-lg leading-8">No answer provided.</p>;
  }

  return (
    <div className="space-y-5">
      {blocks.map((block) => {
        switch (block.type) {
          case 'text':
            const textBlock = block as TextBlock;
            return (
              <p
                key={block.id}
                className={`${getFontSizeClass(textBlock)} ${
                  textBlock.styles?.code
                    ? 'font-mono bg-neutral-800/50 rounded px-2 py-0.5 inline-block'
                    : ''
                } whitespace-pre-wrap`}
                style={getTextStyles(textBlock)}
              >
                {textBlock.content}
              </p>
            );

          case 'code':
            const codeBlock = block as CodeBlock;
            return (
              <pre
                key={block.id}
                className="font-mono text-sm bg-neutral-950 px-5 py-4 rounded-lg border border-neutral-800 overflow-x-auto leading-6"
              >
                <code>{codeBlock.content}</code>
              </pre>
            );

          case 'divider':
            return (
              <div key={block.id} className="border-t border-neutral-700 my-6" />
            );

          case 'highlight':
            return (
              <div
                key={block.id}
                className="bg-blue-950/30 border-l-4 border-blue-600 px-5 py-4 text-lg text-blue-100 leading-8"
              >
                {block.content}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}