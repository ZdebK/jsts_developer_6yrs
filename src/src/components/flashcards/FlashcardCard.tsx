import { useState } from 'react';
import { Card } from '../ui/card';
import type { Flashcard } from '../../data/flashcards';

interface FlashcardCardProps {
  flashcard: Flashcard;
}

export function FlashcardCard({ flashcard }: FlashcardCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard-container" style={{ perspective: '1000px' }}>
      <Card
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="flashcard-face flashcard-front"
        >
          <p className="text-center text--vs-light text-lg font-medium">
            {flashcard.question}
          </p>
        </div>

        {/* Back */}
        <div
          className="flashcard-face flashcard-back"
        >
          <p className="text-center text--muted text-sm">
            {flashcard.answer}
          </p>
        </div>
      </Card>
    </div>
  );
}
