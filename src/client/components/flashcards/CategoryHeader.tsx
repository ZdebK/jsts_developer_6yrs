import type { FlashcardCategory } from '../../data/Flashcards';
import { categories } from '../../data/Flashcards';

interface CategoryHeaderProps {
  selectedCategory: FlashcardCategory | null;
  onCategorySelect: (category: FlashcardCategory) => void;
}

export function CategoryHeader({ selectedCategory, onCategorySelect }: CategoryHeaderProps) {
  return (
    <div className="category-header mb-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`category-btn px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === category.id
                ? 'bg--primary-light text--vs-blue border-2 border--focus scale-105'
                : 'bg--card-dark text--vs-light border border--default hover:border--hover hover:scale-105'
            }`}
            style={{
              boxShadow: selectedCategory === category.id ? `0 0 20px ${category.color}40` : 'none',
            }}
          >
            <span className="text-2xl">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
