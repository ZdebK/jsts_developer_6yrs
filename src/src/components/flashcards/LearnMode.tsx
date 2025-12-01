import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '../ui/button';
import type { Flashcard } from '../../data/flashcards';

interface LearnModeProps {
  flashcards: Flashcard[];
  onClose: () => void;
}

export function LearnMode({ flashcards, onClose }: LearnModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcards[currentIndex];
  const progress = ((currentIndex + 1) / flashcards.length) * 100;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === ' ') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, isFlipped]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const isLastCard = currentIndex === flashcards.length - 1;

  return (
    <div className="learn-mode-overlay fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col" style={{ width: '60%', margin: '0 auto' }}>
      {/* Header */}
      <div className="learn-mode-header p-4 mb-8 flex items-center">
        <div className="max-w-4xl mx-auto flex justify-center items-center w-full">
          <div className="text--vs-light">
            <span className="text--vs-blue font-bold text-xl">{currentIndex + 1}</span>
            <span className="text--muted"> / {flashcards.length}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mt-4">
          <div className="w-full h-2 bg--input rounded-full overflow-hidden">
            <div
              className="h-full bg--vs-blue transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Card Area */}
      <div className="flex-1 flex items-center justify-center p-8 mb-20">
        <div className="w-full max-w-4xl mx-auto">
          <div
            className="flashcard-learn-container mb-8"
            style={{ perspective: '2000px' }}
          >
            <div
              className={`flashcard-learn ${isFlipped ? 'flipped' : ''}`}
              onClick={handleFlip}
              style={{
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Front */}
              <div
                className="flashcard-face-learn"
              >
                <div className="absolute top-6 left-0 right-0">
                  <span className="text--muted text-xs uppercase tracking-wider text-center block">Question</span>
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                  <p className="text-center text--vs-light text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed px-2">
                    {currentCard.question}
                  </p>
                </div>
                <div className="absolute bottom-6 left-0 right-0">
                  <p className="text--muted text-xs text-center opacity-50">Click or press Space to reveal answer</p>
                </div>
              </div>

              {/* Back */}
              <div
                className="flashcard-face-learn back"
              >
                <div className="absolute top-6 left-0 right-0">
                  <span className="text--vs-blue text-xs uppercase tracking-wider text-center block">Answer</span>
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                  <p className="text-center text--vs-light text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-2">
                    {currentCard.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 mb-8">
            <Button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              variant="ghost"
              className="text--vs-light hover:text--vs-blue flex items-center gap-2 border border--default hover:border--vs-blue transition-colors"
              size="lg"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={isLastCard}
              variant="ghost"
              className="text--vs-light hover:text--vs-blue flex items-center gap-2 border border--default hover:border--vs-blue transition-colors"
              size="lg"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Keyboard Shortcuts Hint */}
          <div className="text-center mt-8 mb-4">
            <p className="text--muted text-sm">
              Use <kbd className="px-2 py-1 bg--input rounded text-xs">←</kbd> and{' '}
              <kbd className="px-2 py-1 bg--input rounded text-xs">→</kbd> to navigate,{' '}
              <kbd className="px-2 py-1 bg--input rounded text-xs">Space</kbd> to flip,{' '}
              <kbd className="px-2 py-1 bg--input rounded text-xs">Esc</kbd> to exit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
