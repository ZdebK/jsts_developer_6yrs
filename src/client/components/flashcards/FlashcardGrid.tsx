import { FlashcardCard } from './FlashcardCard';
import { Button } from '../ui/button';
import { BookOpen } from 'lucide-react';
import { Flashcard } from '../../utils/FlashcardTypes';

interface FlashcardGridProps {
  flashcards: Flashcard[];
  onLearnModeStart: () => void;
}

export function FlashcardGrid({ flashcards, onLearnModeStart }: FlashcardGridProps) {
  if (flashcards.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text--muted text-lg">No flashcards available in this category.</p>
      </div>
    );
  }

  return (
    <div className="flashcard-grid-container">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text--tertiary">
          <span className="text--vs-blue">{flashcards.length}</span> flashcards
        </h3>
        <Button
          onClick={onLearnModeStart}
          className="btn--primary flex items-center gap-2"
          aria-label="Start learning mode with flashcards"
          title="Start learning mode with flashcards"
        >
          <BookOpen className="w-5 h-5" aria-hidden="true" />
          Start Learning
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {flashcards.map((flashcard) => (
          <FlashcardCard key={flashcard.id} flashcard={flashcard} />
        ))}
      </div>
    </div>
  );
}
