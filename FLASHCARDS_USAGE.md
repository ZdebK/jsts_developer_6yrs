# 📝 Flashcards Usage Examples

## Quick Start

### 1. Navigate to Flashcards
```
Click "Learn" in navigation bar
OR
Visit http://localhost:3000/learn
```

### 2. Select a Category
Categories available:
- 🔒 **Security** - XSS, CSRF, CORS, CSP
- 💼 **JavaScript Interview** - Closures, Event Loop, Promises
- 🎨 **CSS & Styling** - Box Model, Flexbox, Grid
- 🌐 **Browser APIs & DOM** - DOM, Storage, Web APIs
- ⚛️ **React Development** - Hooks, Context, Virtual DOM

### 3. Study Methods

#### Method A: Grid View (Quick Review)
```
1. Browse all cards in grid layout
2. Click any card to flip
3. Use arrow button (→) for quick flip
4. Perfect for rapid review
```

#### Method B: Learn Mode (Focused Study)
```
1. Click "Start Learning" button
2. One card at a time, full screen
3. Use keyboard shortcuts:
   - Space: Flip card
   - ← →: Navigate
   - Esc: Exit
4. Track progress (e.g., 5/20)
5. Completion celebration when done
```

## Example Study Session

### Scenario: Preparing for JavaScript Interview

**Step 1:** Select "JavaScript Interview" category
- Shows 8 flashcards in grid

**Step 2:** Click "Start Learning"
- Enters full-screen Learn Mode

**Step 3:** Study first card
```
Question: "What is a closure in JavaScript?"
[Press Space to reveal]
Answer: "A closure is a function that has access to variables..."
```

**Step 4:** Navigate through cards
```
Press → to go to next card
Press ← to review previous card
```

**Step 5:** Complete session
```
Progress: 8/8 completed
🎉 Completed! [Restart] button appears
```

## Keyboard Shortcuts Reference

| Key | Action |
|-----|--------|
| `Space` | Flip current card |
| `←` | Previous card |
| `→` | Next card |
| `Esc` | Exit Learn Mode |

## Adding Custom Cards

### Example: Add new Security card

Edit `src/data/flashcards.ts`:

```typescript
export const flashcardsData: Record<FlashcardCategory, Flashcard[]> = {
  security: [
    // ... existing cards
    {
      id: 'sec-7',
      question: 'What is OAuth 2.0?',
      answer: 'OAuth 2.0 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service.',
      category: 'security',
    },
  ],
};
```

### Example: Create new category

**1. Update types:**
```typescript
export type FlashcardCategory = 
  | 'security' 
  | 'javascriptInterview' 
  | 'css' 
  | 'dom' 
  | 'react'
  | 'typescript'; // NEW
```

**2. Add category info:**
```typescript
export const categories: CategoryInfo[] = [
  // ... existing categories
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '📘',
    color: '#3178c6',
  },
];
```

**3. Add flashcards:**
```typescript
export const flashcardsData: Record<FlashcardCategory, Flashcard[]> = {
  // ... existing categories
  typescript: [
    {
      id: 'ts-1',
      question: 'What is a type assertion in TypeScript?',
      answer: 'Type assertion is a way to tell the compiler the specific type of a value when you know more about it than TypeScript can infer.',
      category: 'typescript',
    },
  ],
};
```

## Mobile Usage

### Touch Interactions
- **Tap card** to flip
- **Swipe left/right** in Learn Mode to navigate (coming soon)
- **Tap arrow button** for quick flip

### Responsive Layout
- **Mobile (< 768px)**: 1 column grid
- **Tablet (768px - 1024px)**: 2 columns
- **Desktop (1024px - 1280px)**: 3 columns
- **Large Desktop (> 1280px)**: 4 columns

## Advanced Features

### Progress Tracking
```typescript
// Learn Mode tracks completed cards
const [completedCards, setCompletedCards] = useState<Set<number>>(new Set());

// Visual progress bar
const progress = ((currentIndex + 1) / flashcards.length) * 100;
```

### Keyboard Navigation
```typescript
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === ' ') handleFlip();
    if (e.key === 'Escape') onClose();
  };
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [currentIndex]);
```

## Common Use Cases

### 1. Daily Review (15 minutes)
```
1. Select category you're currently learning
2. Grid view - browse all cards quickly
3. Identify weak areas
4. Enter Learn Mode for focused study
```

### 2. Pre-Interview Cramming
```
1. Start with JavaScript Interview category
2. Learn Mode - go through all cards
3. Switch to React Development
4. Review Security fundamentals
Total time: 30-45 minutes for all categories
```

### 3. Topic Mastery
```
1. Choose one category (e.g., CSS)
2. Learn Mode - study all cards
3. Restart and repeat until comfortable
4. Test yourself without flipping
5. Move to next category
```

## Tips for Effective Learning

✅ **Do:**
- Use Learn Mode for new topics
- Try to answer before flipping
- Review regularly (spaced repetition)
- Focus on one category at a time
- Use keyboard shortcuts for efficiency

❌ **Don't:**
- Rush through cards without understanding
- Skip difficult questions
- Only use grid view (Learn Mode is more effective)
- Study when tired or distracted

---

<div align="center">
  <sub>Master concepts through active recall and spaced repetition</sub>
</div>
