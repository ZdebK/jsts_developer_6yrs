import { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Plus, Eye, Edit3 } from 'lucide-react';
import { Block } from '../../utils/EditorTypes';
import { BlockEditor } from './BlockEditor';
import { AnswerRenderer } from './AnswerRenderer';

interface AnswerBlockEditorProps {
  blocks: Block[];
  onChange: (blocks: Block[]) => void;
}

export function AnswerBlockEditor({ blocks, onChange }: AnswerBlockEditorProps) {
  const [isPreview, setIsPreview] = useState(false);

  // Ensure we always have at least one block
  const currentBlocks = blocks.length === 0 ? [{
    id: 'default-1',
    type: 'text' as const,
    content: 'Start typing your answer...',
    fontSize: 'medium' as const
  }] : blocks;

  const moveBlock = useCallback((dragIndex: number, hoverIndex: number) => {
    const newBlocks = [...currentBlocks];
    const [removed] = newBlocks.splice(dragIndex, 1);
    newBlocks.splice(hoverIndex, 0, removed);
    onChange(newBlocks);
  }, [currentBlocks, onChange]);

  const updateBlock = (index: number, updatedBlock: Block) => {
    const newBlocks = [...currentBlocks];
    newBlocks[index] = updatedBlock;
    onChange(newBlocks);
  };

  const deleteBlock = (index: number) => {
    const newBlocks = currentBlocks.filter((_, i) => i !== index);
    // Ensure at least one block remains
    onChange(newBlocks.length === 0 ? [{
      id: Date.now().toString(),
      type: 'text',
      content: '',
      fontSize: 'medium'
    }] : newBlocks);
  };

  const addBlock = (type: Block['type']) => {
    const newBlock: Block = type === 'text'
      ? { id: Date.now().toString(), type: 'text', content: 'New text block', fontSize: 'medium' }
      : type === 'code'
      ? { id: Date.now().toString(), type: 'code', content: '// Code here' }
      : type === 'divider'
      ? { id: Date.now().toString(), type: 'divider' }
      : { id: Date.now().toString(), type: 'highlight', content: 'Highlighted content' };

    onChange([...currentBlocks, newBlock]);
  };

  if (isPreview) {
    return (
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg text-neutral-300">Answer Preview</h3>
          <button
            onClick={() => setIsPreview(false)}
            className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-sm transition-colors"
          >
            <Edit3 className="w-4 h-4" />
            Edit
          </button>
        </div>
        <AnswerRenderer blocks={currentBlocks} />
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg text-neutral-300">Answer Editor</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsPreview(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-sm transition-colors"
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
        </div>
      </div>

      <DndProvider backend={HTML5Backend}>
        <div className="space-y-3 mb-4 pl-10 pr-10">
          {currentBlocks.map((block, index) => (
            <BlockEditor
              key={block.id}
              block={block}
              index={index}
              onUpdate={(updatedBlock) => updateBlock(index, updatedBlock)}
              onDelete={() => deleteBlock(index)}
              onMove={moveBlock}
            />
          ))}
        </div>
      </DndProvider>

      {/* Add Block Menu */}
      <div className="flex gap-2 pt-4 border-t border-neutral-800">
        <button
          onClick={() => addBlock('text')}
          className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          Text
        </button>
        <button
          onClick={() => addBlock('code')}
          className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          Code
        </button>
        <button
          onClick={() => addBlock('highlight')}
          className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          Highlight
        </button>
        <button
          onClick={() => addBlock('divider')}
          className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          Divider
        </button>
      </div>
    </div>
  );
}