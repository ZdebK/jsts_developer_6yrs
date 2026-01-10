import { useState } from 'react';
import { Card } from '../ui/card';
import type { Flashcard } from '../../data/Flashcards';
import ReactMarkdown from 'react-markdown';

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
           <div className="flashcard-face flashcard-back" style={{ maxHeight: '220px', overflowY: 'auto', width: '100%' }}>
             <div className="text-center text--muted text-sm">
               <ReactMarkdown components={{
                 pre: ({node, ...props}) => <pre style={{whiteSpace: 'pre-wrap', wordBreak: 'break-word', background: 'transparent', margin: 0}} {...props} />,
                 code: ({node, ...props}) => <code style={{fontSize: '0.95em', background: '#222', padding: '2px 4px', borderRadius: '4px'}} {...props} />
               }}>
                 {flashcard.answer}
               </ReactMarkdown>
             </div>
           </div>
      </Card>
    </div>
  );
}
