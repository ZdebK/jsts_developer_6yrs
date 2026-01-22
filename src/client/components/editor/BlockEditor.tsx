import { useRef, useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { GripVertical, Trash2 } from 'lucide-react';
import { FormattingToolbar, FormattingToolbarProps } from './FormattingToolbar';
import { Block, CodeBlock, FontSize, TextAlign, TextBlock, TextStyle } from '../../utils/EditorTypes';

interface BlockEditorProps {
  block: Block;
  index: number;
  onUpdate: (block: Block) => void;
  onDelete: () => void;
  onMove: (dragIndex: number, hoverIndex: number) => void;
}

export function BlockEditor({ block, index, onUpdate, onDelete, onMove }: BlockEditorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState<{ top: number; left: number } | null>(null);

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'BLOCK',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'BLOCK',
    hover(item: { index: number }) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      onMove(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  preview(drop(ref));

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setToolbarPosition({
        top: rect.top + window.scrollY,
        left: rect.left + rect.width / 2,
      });
    } else {
      setToolbarPosition(null);
    }
  };

  useEffect(() => {
    const handleSelectionChange = () => {
      if (isEditing) {
        handleTextSelection();
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => document.removeEventListener('selectionchange', handleSelectionChange);
  }, [isEditing]);

  const applyFormat = (format: keyof TextStyle) => {
    if (block.type !== 'text') return;
    const textBlock = block as TextBlock;
    onUpdate({
      ...textBlock,
      styles: {
        ...textBlock.styles,
        [format]: !textBlock.styles?.[format]
      }
    });
  };

  const applyAlign = (align: TextAlign) => {
    if (block.type !== 'text') return;
    onUpdate({ ...block, align } as TextBlock);
  };

  const applyFontSize = (fontSize: FontSize) => {
    if (block.type !== 'text') return;
    onUpdate({ ...block, fontSize } as TextBlock);
  };

  const handleContentChange = (e: React.FormEvent<HTMLDivElement>) => {
    const content = e.currentTarget.textContent || '';
    if (block.type === 'text' || block.type === 'highlight') {
      onUpdate({ ...block, content });
    } else if (block.type === 'code') {
      onUpdate({ ...block, content });
    }
  };

  const getTextStyles = () => {
    if (block.type !== 'text') return {};
    const textBlock = block as TextBlock;
    return {
      fontWeight: textBlock.styles?.bold ? 'bold' : 'normal',
      fontStyle: textBlock.styles?.italic ? 'italic' : 'normal',
      textDecoration: textBlock.styles?.underline ? 'underline' : 'none',
      textAlign: textBlock.align || 'left',
    };
  };

  const getFontSizeClass = () => {
    if (block.type !== 'text') return 'text-base';
    const textBlock = block as TextBlock;
    switch (textBlock.fontSize) {
      case 'small': return 'text-sm';
      case 'large': return 'text-xl';
      default: return 'text-base';
    }
  };

  const renderBlock = () => {
    switch (block.type) {
      case 'text':
        const textBlock = block as TextBlock;
        return (
          <div
            ref={contentRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleContentChange}
            onFocus={() => setIsEditing(true)}
            onBlur={() => {
              setIsEditing(false);
              setToolbarPosition(null);
            }}
            className={`outline-none px-4 py-3 whitespace-pre-wrap ${getFontSizeClass()} ${
              textBlock.styles?.code ? 'font-mono bg-neutral-800/50 rounded px-1' : ''
            }`}
            style={getTextStyles()}
          >
            {textBlock.content}
          </div>
        );

      case 'code':
        const codeBlock = block as CodeBlock;
        return (
          <div
            ref={contentRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleContentChange}
            onFocus={() => setIsEditing(true)}
            onBlur={() => setIsEditing(false)}
            className="font-mono text-sm bg-neutral-900 px-4 py-3 rounded-lg border border-neutral-800 outline-none whitespace-pre-wrap overflow-x-auto"
          >
            {codeBlock.content}
          </div>
        );

      case 'divider':
        return <div className="border-t border-neutral-700 my-2" />;

      case 'highlight':
        return (
          <div
            ref={contentRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleContentChange}
            onFocus={() => setIsEditing(true)}
            onBlur={() => setIsEditing(false)}
            className="bg-blue-950/30 border-l-4 border-blue-600 px-4 py-3 text-blue-100 outline-none whitespace-pre-wrap"
          >
            {block.content}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div
        ref={ref}
        className={`group relative border-2 border-transparent hover:border-neutral-700 rounded-lg transition-all ${
          isDragging ? 'opacity-30' : 'opacity-100'
        }`}
      >
        {/* Drag Handle & Delete */}
        <div className="absolute left-0 top-0 bottom-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity -ml-10">
          <button
            ref={(node) => {
              if (node) drag(node);
            }}
            className="p-1 text-neutral-500 hover:text-neutral-300 cursor-grab active:cursor-grabbing"
          >
            <GripVertical className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute right-0 top-0 bottom-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity -mr-10">
          <button
            onClick={onDelete}
            className="p-1 text-neutral-500 hover:text-red-400"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {renderBlock()}
      </div>

      {block.type === 'text' && (
        <FormattingToolbar
          position={toolbarPosition}
          onFormat={applyFormat as FormattingToolbarProps['onFormat']}
          onAlign={applyAlign}
          onFontSize={applyFontSize}
          currentStyles={(block as TextBlock).styles}
          currentAlign={(block as TextBlock).align}
          currentFontSize={(block as TextBlock).fontSize}
        />
      )}
    </>
  );
}