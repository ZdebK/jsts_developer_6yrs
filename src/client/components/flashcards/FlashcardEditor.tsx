import { useState } from 'react';

import { Save, X, Plus, Trash2 } from 'lucide-react';
import { AnswerBlockEditor } from '../editor/AnswerBlockEditor';
import { Block } from '../../utils/EditorTypes';
import { Flashcard, FlashcardCategory } from '../../utils/FlashcardTypes';


interface FlashcardEditorProps {
  flashcards: Flashcard[];
  onSave: (flashcards: Flashcard[]) => void;
  onClose: () => void;
}

export function FlashcardEditor({ flashcards, onSave, onClose }: FlashcardEditorProps) {
  const [editedFlashcards, setEditedFlashcards] = useState<Flashcard[]>(flashcards);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Import categories from flashcards data for consistency
  // @ts-ignore: dynamic import for runtime compatibility
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { categories: categoryList } = require('@/client/data/flashcards');
  const categories: FlashcardCategory[] = categoryList.map((cat: { id: string }) => cat.id);

  const handleUpdate = (index: number, field: keyof Flashcard, value: string) => {
    const updated = [...editedFlashcards];
    updated[index] = { ...updated[index], [field]: value };
    setEditedFlashcards(updated);
  };

  const handleBlocksUpdate = (index: number, blocks: Block[]) => {
    const updated = [...editedFlashcards];
    updated[index] = { ...updated[index], answerBlocks: blocks };
    setEditedFlashcards(updated);
  };

  const handleAdd = () => {
    const newCard: Flashcard = {
      id: Date.now().toString(),
      question: 'New question',
      answer: 'New answer',
      answerBlocks: [
        {
          id: 'new1',
          type: 'text',
          content: 'New answer',
          fontSize: 'medium'
        }
      ],
      category: 'javascriptInterview',
    };
    setEditedFlashcards([...editedFlashcards, newCard]);
    setSelectedIndex(editedFlashcards.length);
  };

  const handleDelete = (index: number) => {
    const updated = editedFlashcards.filter((_, i) => i !== index);
    setEditedFlashcards(updated);
    if (selectedIndex >= updated.length) {
      setSelectedIndex(Math.max(0, updated.length - 1));
    }
  };

  const handleSave = () => {
    onSave(editedFlashcards);
  };

  const currentCard = editedFlashcards[selectedIndex];

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl">Flashcard Editor</h1>
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
              Close
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Flashcard List */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg">Cards ({editedFlashcards.length})</h2>
              <button
                onClick={handleAdd}
                className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {editedFlashcards.map((card, index) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedIndex(index)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedIndex === index
                      ? 'bg-neutral-800 border border-blue-600'
                      : 'bg-neutral-800/50 border border-neutral-700 hover:bg-neutral-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-neutral-500 mb-1">
                        {index + 1}. {card.category}
                      </div>
                      <div className="text-sm truncate">{card.question}</div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(index);
                      }}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Editor Form */}
          {currentCard && (
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <h2 className="text-lg mb-6">Edit Card #{selectedIndex + 1}</h2>
                
                <div className="space-y-6">
                  {/* Category */}
                  <div>
                    <label className="block text-sm text-neutral-400 mb-2">
                      Category
                    </label>
                    <select
                      value={currentCard.category}
                      onChange={(e) =>
                        handleUpdate(selectedIndex, 'category', e.target.value as FlashcardCategory)
                      }
                      className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Question */}
                  <div>
                    <label className="block text-sm text-neutral-400 mb-2">
                      Question
                    </label>
                    <textarea
                      value={currentCard.question}
                      onChange={(e) => handleUpdate(selectedIndex, 'question', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                      placeholder="Enter your question..."
                    />
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="block text-sm text-neutral-400 mb-2">
                      Image URL (optional)
                    </label>
                    <input
                      type="text"
                      value={currentCard.image || ''}
                      onChange={(e) => handleUpdate(selectedIndex, 'image', e.target.value)}
                      className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="https://example.com/image.png"
                    />
                    {currentCard.image && (
                      <img 
                        src={currentCard.image} 
                        alt="Preview"
                        className="mt-3 max-w-full max-h-40 object-contain rounded-lg"
                      />
                    )}
                  </div>

                  {/* Lesson URL */}
                  <div>
                    <label className="block text-sm text-neutral-400 mb-2">
                      Lesson URL (optional)
                    </label>
                    <input
                      type="text"
                      value={currentCard.lessonUrl || ''}
                      onChange={(e) => handleUpdate(selectedIndex, 'lessonUrl', e.target.value)}
                      className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="https://example.com/lesson"
                    />
                  </div>
                </div>
              </div>

              {/* Block Editor for Answer */}
              <AnswerBlockEditor 
                blocks={currentCard.answerBlocks || []}
                onChange={(blocks) => handleBlocksUpdate(selectedIndex, blocks)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}