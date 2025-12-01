import { useState } from 'react';
import { CategoryHeader } from './CategoryHeader';
import { FlashcardGrid } from './FlashcardGrid';
import { LearnMode } from './LearnMode';
import { SectionHeader } from '../SectionHeader';
import { getFlashcardsByCategory, type FlashcardCategory } from '../../data/flashcards';

export function FlashcardsIndex() {
  const [selectedCategory, setSelectedCategory] = useState<FlashcardCategory>('security');
  const [isLearnMode, setIsLearnMode] = useState(false);

  const flashcards = getFlashcardsByCategory(selectedCategory);

  const handleCategorySelect = (category: FlashcardCategory) => {
    setSelectedCategory(category);
    setIsLearnMode(false);
  };

  const handleLearnModeStart = () => {
    setIsLearnMode(true);
  };

  const handleLearnModeClose = () => {
    setIsLearnMode(false);
  };

  return (
    <section id="flashcards" className="section section--full-height" style={{ paddingTop: '80px' }}>
      {!isLearnMode && (
        <div className="container--large py-20" style={{ paddingBottom: '60px' }}>
          <SectionHeader title="🎓 Learn & Practice" />
          
          <div className="mb-8 text-center">
            <p className="text--muted text-lg">
              Master key concepts through interactive flashcards. Select a category and start learning!
            </p>
          </div>

          <CategoryHeader
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />

          <FlashcardGrid
            flashcards={flashcards}
            onLearnModeStart={handleLearnModeStart}
          />
        </div>
      )}

      {isLearnMode && (
        <LearnMode
          flashcards={flashcards}
          onClose={handleLearnModeClose}
        />
      )}
    </section>
  );
}
