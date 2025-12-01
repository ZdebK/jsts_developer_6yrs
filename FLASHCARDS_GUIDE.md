# 🎓 Flashcards System

Interactive learning platform built with React, inspired by Quizlet. Master key concepts through categorized flashcards with a dedicated Learn Mode.

## ✨ Features

### 📚 Categories
- **Security** 🔒 - Web security concepts (XSS, CSRF, CORS, CSP, JWT)
- **JavaScript Interview** 💼 - Core JS concepts (closures, event loop, promises)
- **CSS & Styling** 🎨 - CSS fundamentals (box model, flexbox, grid, specificity)
- **Browser APIs & DOM** 🌐 - DOM manipulation, Web APIs (localStorage, Intersection Observer)
- **React Development** ⚛️ - React patterns (Virtual DOM, hooks, context, memoization)

### 🎯 Interaction Modes

#### Grid View
- Responsive grid layout (1-4 columns based on screen size)
- Click any card to flip and reveal the answer
- Quick flip with arrow button (→) on the right side
- Smooth 3D flip animation (`rotateY(180deg)`)

#### Learn Mode
- **Full-screen immersive experience**
- One card at a time, centered on screen
- **Keyboard shortcuts:**
  - `Space` - Flip card
  - `←` / `→` - Navigate between cards
  - `Esc` - Exit Learn Mode
- **Progress tracking** - Visual progress bar (e.g., 3/20)
- **Completion celebration** - Shows completion message when done
- Restart option to practice again

## 🛠️ Implementation

### Component Architecture

```
flashcards/
├── FlashcardsIndex.tsx      # Main container with routing logic
├── CategoryHeader.tsx        # Category selection buttons
├── FlashcardGrid.tsx        # Grid view with "Start Learning" button
├── FlashcardCard.tsx        # Individual card with flip animation
└── LearnMode.tsx            # Full-screen learning experience
```

### Data Structure

```typescript
interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: FlashcardCategory;
}

type FlashcardCategory = 'security' | 'javascriptInterview' | 'css' | 'dom' | 'react';
```

### State Management

Uses React `useState` for:
- Selected category
- Current card index in Learn Mode
- Card flip state
- Completed cards tracking

### Animations

**CSS 3D Transforms:**
```css
transform-style: preserve-3d;
backface-visibility: hidden;
transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
```

**Learn Mode:**
- Fade-in overlay animation
- Smooth card flip with cubic-bezier easing
- Progress bar transition

## 🎨 Styling

- **VS Code Theme** - Dark mode with syntax highlighting aesthetics
- **Tailwind CSS** - Utility-first responsive design
- **Custom CSS** - 3D flip animations and transitions
- **Responsive** - Mobile-first approach (1 column → 4 columns)

## 🚀 Usage

### Navigate to Flashcards
Click **"Learn"** in the navigation bar or visit `/learn`

### Select a Category
Choose from 5 categories at the top of the page

### Study in Grid View
- Click cards to flip
- Use arrow button for quick flip
- Browse all cards at once

### Enter Learn Mode
1. Click **"Start Learning"** button
2. Use keyboard shortcuts or click to navigate
3. Track progress with visual indicator
4. Complete all cards or exit anytime

## 📊 Content Statistics

| Category | Cards | Topics |
|----------|-------|--------|
| Security | 6 | XSS, CSRF, CORS, CSP, Same-Origin Policy, JWT |
| JavaScript Interview | 8 | Closures, Event Loop, Promises, Hoisting, Debouncing |
| CSS & Styling | 6 | Box Model, Flexbox, Grid, Specificity, Variables |
| Browser APIs & DOM | 6 | DOM, Event Bubbling, Storage APIs, Intersection Observer |
| React Development | 8 | Virtual DOM, Hooks, Context, Memoization, Keys |

**Total:** 34 flashcards across 5 categories

## 🎯 Learning Tips

1. **Start with fundamentals** - Begin with Security or JavaScript basics
2. **Use Learn Mode** - Better retention with focused, one-at-a-time learning
3. **Keyboard shortcuts** - Faster navigation with arrow keys and space
4. **Review regularly** - Come back to categories you've completed
5. **Test yourself** - Try to answer before flipping the card

## 🔧 Customization

### Adding New Cards

Edit `src/data/flashcards.ts`:

```typescript
export const flashcardsData: Record<FlashcardCategory, Flashcard[]> = {
  security: [
    {
      id: 'sec-7',
      question: 'What is OAuth 2.0?',
      answer: 'OAuth 2.0 is an authorization framework...',
      category: 'security',
    },
    // ... more cards
  ],
};
```

### Adding New Categories

1. Update `FlashcardCategory` type
2. Add category to `categories` array
3. Add flashcards to `flashcardsData`
4. Choose emoji and color

## 🎓 Educational Value

This system helps with:
- **Interview preparation** - Practice common questions
- **Concept retention** - Active recall through flipping
- **Structured learning** - Organized by topic
- **Self-paced study** - Learn at your own speed
- **Quick review** - Refresh knowledge anytime

---

<div align="center">
  <sub>Built with React, TypeScript, and Tailwind CSS</sub>
</div>
