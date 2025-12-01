import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import type { Flashcard } from '../../data/flashcards';

interface LearnModeProps {
  flashcards: Flashcard[];
  onClose: () => void;
}

export function LearnMode({ flashcards, onClose }: LearnModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  // Swipe handling refs
  const startXRef = useRef<number | null>(null);
  const startYRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const suppressClickRef = useRef(false);

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
    // If a swipe was just recognized, suppress this click flip
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }
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

  // Trackpad/mouse horizontal wheel swipe
  const wheelAccumXRef = useRef(0);
  const wheelAccumYRef = useRef(0);
  const wheelCooldownRef = useRef(false);
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    wheelAccumXRef.current += e.deltaX;
    wheelAccumYRef.current += e.deltaY;
    if (wheelCooldownRef.current) return;
    const ax = Math.abs(wheelAccumXRef.current);
    const ay = Math.abs(wheelAccumYRef.current);
    if (ax > 120 && ax > ay * 1.2) {
      // Significant horizontal gesture
      suppressClickRef.current = true;
      wheelCooldownRef.current = true;
      if (wheelAccumXRef.current > 0) {
        // swipe left -> next
        if (!isLastCard) {
          setCurrentIndex((i) => Math.min(i + 1, flashcards.length - 1));
          setIsFlipped(false);
        }
      } else {
        // swipe right -> previous
        if (currentIndex > 0) {
          setCurrentIndex((i) => Math.max(i - 1, 0));
          setIsFlipped(false);
        }
      }
      // reset accumulators and cooldown after a short delay
      wheelAccumXRef.current = 0;
      wheelAccumYRef.current = 0;
      setTimeout(() => (wheelCooldownRef.current = false), 400);
    }
  };

  // Pointer (mouse/touch) swipe handlers
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    try {
      target.setPointerCapture(e.pointerId);
    } catch {}
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    draggingRef.current = true;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || startXRef.current === null || startYRef.current === null) return;
    // We could add visual feedback here (translateX), but keep it simple for now
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    try {
      target.releasePointerCapture(e.pointerId);
    } catch {}
    if (!draggingRef.current || startXRef.current === null || startYRef.current === null) {
      draggingRef.current = false;
      startXRef.current = null;
      startYRef.current = null;
      return;
    }
    const dx = e.clientX - startXRef.current;
    const dy = e.clientY - startYRef.current;
    draggingRef.current = false;
    startXRef.current = null;
    startYRef.current = null;

    const horizontal = Math.abs(dx) > 60; // swipe threshold
    const mostlyHorizontal = Math.abs(dx) > Math.abs(dy) * 1.2; // avoid vertical pans
    if (horizontal && mostlyHorizontal) {
      suppressClickRef.current = true; // prevent flip click
      if (dx < 0) {
        // swipe left -> next
        if (!isLastCard) {
          setCurrentIndex((i) => Math.min(i + 1, flashcards.length - 1));
          setIsFlipped(false);
        }
      } else {
        // swipe right -> previous
        if (currentIndex > 0) {
          setCurrentIndex((i) => Math.max(i - 1, 0));
          setIsFlipped(false);
        }
      }
    }
  };

  return (
    <div className="learn-mode-overlay fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col" style={{ width: '60%', margin: '0 auto' }}>
      {/* Header */}
      <div className="learn-mode-header relative px-4 py-2 mb-8 flex flex-col items-center">
        <div className="max-w-4xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center w-full">
          <div />
          <div />
          <div className="justify-self-end">
            <Button
              variant="ghost"
              onClick={onClose}
              className="text--vs-light hover:text--vs-blue border border--default hover:border--vs-blue transition-colors"
              size="icon"
              aria-label="Close learn mode"
            >
              <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
            </Button>
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

        {/* Counter moved below progress bar */}
        <div className="max-w-4xl mx-auto mt-2 flex justify-center items-center w-full">
          <div className="text--vs-light opacity-80">
            <span className="font-bold text-xl" style={{color: '#3399ff'}}>{currentIndex + 1}</span>
            <span className="text--muted"> / {flashcards.length}</span>
          </div>
        </div>

        
      </div>

      {/* Main Card Area */}
      <div className="flex-1 flex items-center justify-center p-8 mb-20">
        <div className="w-full max-w-4xl mx-auto">
          <div
            className="flashcard-learn-container mb-8"
            style={{ perspective: '2000px' }}
            onWheel={onWheel}
          >
            <div
              className={`flashcard-learn ${isFlipped ? 'flipped' : ''}`}
              onClick={handleFlip}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              style={{
                transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                touchAction: 'pan-y',
              }}
            >
              {/* Front */}
              <div className="flashcard-face-learn">
                <div className="absolute top-6 left-0 right-0">
                  <span className="text--muted text-xs uppercase tracking-wider text-center block">Question</span>
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                  <p className="text-center text--vs-light text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed px-2">
                    {currentCard.question}
                  </p>
                </div>
                <div className="absolute bottom-6 left-0 right-0">
                  <p className="text--muted text-xs text-center opacity-70">Click or press Space to reveal answer</p>
                </div>
              </div>

              {/* Back */}
              <div className="flashcard-face-learn back">
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
        </div>
      </div>
      
    </div>
  );
}
