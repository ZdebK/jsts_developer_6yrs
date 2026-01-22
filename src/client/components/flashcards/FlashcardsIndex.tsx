import { useState } from 'react';
import { CategoryHeader } from './CategoryHeader';
import { FlashcardGrid } from './FlashcardGrid';
import { LearnMode } from './LearnMode';
import { SectionHeader } from '../SectionHeader';
import { categories, getFlashcardsByCategory, type FlashcardCategory } from '../../data/flashcards';

export function FlashcardsIndex() {
  const getRandomCategory = (exclude?: FlashcardCategory): FlashcardCategory => {
    const pool = exclude
      ? categories.filter((cat) => cat.id !== exclude)
      : categories;
    const fallbackPool = pool.length > 0 ? pool : categories;
    const pick = Math.floor(Math.random() * fallbackPool.length);
    return fallbackPool[pick].id;
  };

  // Pick a random category when entering the learn route so the first view is varied.
  const [selectedCategory, setSelectedCategory] = useState<FlashcardCategory>(() => getRandomCategory());
  const [isLearnMode, setIsLearnMode] = useState(false);

  const flashcards = getFlashcardsByCategory(selectedCategory);

  const handleCategorySelect = (category: FlashcardCategory) => {
    setSelectedCategory(category);
  };

  const handleLearnModeStart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLearnMode(true);
  };

  const handleLearnModeClose = () => {
    setIsLearnMode(false);
  };

  const handleCategoryChangeInLearnMode = (category: FlashcardCategory) => {
    setSelectedCategory(category);
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
          currentCategory={selectedCategory}
          onCategoryChange={handleCategoryChangeInLearnMode}
        />
      )}
    </section>
  );
}
