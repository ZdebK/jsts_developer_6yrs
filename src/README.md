# 💼 Professional Portfolio Website

> Modern, VS Code-themed portfolio website built with React, TypeScript, and Vite. Features comprehensive form validation, E2E testing, and bilingual support (EN/PL).

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://zdebk.github.io/jsts_developer_6yrs)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb)](https://reactjs.org/)
[![Tests](https://img.shields.io/badge/tests-passing-brightgreen)](./TESTING_IMPLEMENTATION.md)

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📚 Documentation](#-documentation)
- [🧪 Testing](#-testing)
- [📦 Project Structure](#-project-structure)
- [🔧 Available Scripts](#-available-scripts)

---

## ✨ Features

- 🎨 **VS Code Theme**: Dark mode with syntax highlighting aesthetics
- 🌐 **Bilingual**: Full i18n support (English/Polish)
- 📱 **Responsive**: Mobile-first design with smooth animations
- ✅ **Form Validation**: React Hook Form + Zod with custom error handling
- 🎓 **Interactive Learning**: Quizlet-inspired flashcard system with Learn Mode
- 🤖 **AI Chatbot**: Interactive greeting component with localStorage
- 📧 **Contact Form**: Integration with Formspree API
- ♿ **Accessible**: ARIA labels and semantic HTML
- 🧪 **Well-tested**: Unit tests (Vitest) + E2E tests (Playwright)

---

## 🛠️ Tech Stack

### Core Framework
- **React 18.3.1** - UI library with hooks and context
- **TypeScript 5.6** - Type-safe development
- **Vite 6.3.5** - Fast build tool and dev server

### Form & Validation
- **React Hook Form 7.67.0** - Performance-focused form management
- **Zod 4.1.13** - Schema validation with custom error messages
- **@hookform/resolvers** - Integration between RHF and Zod

### UI Components & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless accessible components
- **Lucide React** - Modern icon library
- **React Hot Toast** - Toast notifications
- **Framer Motion** - Animation library

### Internationalization
- **i18next** - Translation framework
- **react-i18next** - React bindings for i18next

### Testing
- **Vitest 4.0.14** - Unit testing framework (40 tests)
- **Playwright** - E2E browser testing (3 tests)
- **Testing Library** - React component testing utilities
- **happy-dom** - Fast DOM implementation for tests

### Code Quality
- **ESLint 9.39.1** - Linting with TypeScript support
- **@typescript-eslint** - TypeScript-specific linting rules
- **eslint-plugin-react** - React best practices
- **eslint-plugin-react-hooks** - Hooks linting rules

### Build & Deploy
- **gh-pages** - GitHub Pages deployment
- **PostCSS** - CSS transformations
- **Autoprefixer** - CSS vendor prefixing

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ZdebK/jsts_developer_6yrs.git

# Navigate to project directory
cd jsts_developer_6yrs/src

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

---

## 📚 Documentation

Detailed documentation is organized into separate files:

| Document | Description |
|----------|-------------|
| 🎓 [Flashcards Guide](../FLASHCARDS_GUIDE.md) | Interactive learning system with 34 cards across 5 categories |
| 📖 [Flashcards Usage](../FLASHCARDS_USAGE.md) | Examples, keyboard shortcuts, and study tips |
| 📝 [Testing Implementation](../TESTING_IMPLEMENTATION.md) | Unit & E2E testing strategy, test coverage |
| 📧 [Formspree Setup](../FORMSPREE_SETUP.md) | Contact form integration guide |
| 🔍 [Code Quality Report](../CODE_QUALITY_REPORT.md) | ESLint configuration and code standards |
| 🎨 [Styles Guide](./src/styles/README.md) | SCSS architecture and theming |
| 📜 [Guidelines](./src/guidelines/Guidelines.md) | Development guidelines and best practices |
| 🙏 [Attributions](./src/Attributions.md) | Third-party libraries and credits |

---

## 🧪 Testing

This project maintains comprehensive test coverage with both unit and E2E tests.

### Run Unit Tests
```bash
npm test              # Run tests in watch mode
npm test -- --run     # Run tests once
```

**Results:** 40/40 tests passing ✅
- Form validation schema (17 tests)
- Utility functions (8 tests)
- Component rendering (15 tests)

### Run E2E Tests
```bash
npm run test:e2e           # Run Playwright tests
npm run test:e2e:headed    # Run with browser visible
```

**Results:** 3/3 tests passing ✅
- Contact form validation behavior
- Formspree API integration
- Form reset after submission

📖 **Full details:** [TESTING_IMPLEMENTATION.md](../TESTING_IMPLEMENTATION.md)

---

## 📦 Project Structure

```
src/
├── public/               # Static assets
│   └── locales/          # Translation files (en/pl)
├── src/
│   ├── components/       # React components
│   │   ├── ui/           # Shadcn/ui components
│   │   ├── __tests__/    # Component tests
│   │   └── *.tsx         # Feature components
│   ├── contexts/         # React contexts (Language)
│   ├── schemas/          # Zod validation schemas
│   │   └── __tests__/    # Schema tests
│   ├── styles/           # SCSS modules
│   ├── utils/            # Utility functions
│   │   └── __tests__/    # Utility tests
│   └── main.tsx          # App entry point
├── e2e/                  # Playwright E2E tests
├── playwright.config.ts  # Playwright configuration
├── vitest.config.ts      # Vitest configuration
├── eslint.config.mjs     # ESLint configuration
└── vite.config.ts        # Vite configuration
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm test` | Run unit tests in watch mode |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run lint` | Check code quality with ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run deploy` | Deploy to GitHub Pages |

---

## 🌟 Key Implementation Details

### Form Validation with Zod v4
The contact form uses a sophisticated validation strategy:

```typescript
// Custom error messages for undefined/null values
z.string({ message: 'validation.nameRequired' })
  .min(1, 'validation.nameRequired')
  .min(2, 'validation.nameTooShort')
```

- **forwardRef pattern** in Input/Textarea for React Hook Form integration
- **Defensive schema** handles undefined/null gracefully
- **i18n error messages** with fallback support

### Testing Philosophy
- Unit tests verify **schema logic and edge cases**
- E2E tests verify **real browser behavior**
- Tests **fail on improper error messages** to ensure proper schema configuration

### Performance Optimizations
- **Code splitting** with lazy loading
- **Memoized components** to prevent re-renders
- **Optimized animations** with Framer Motion
- **Fast build times** with Vite

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Kasia Elżbieciak**
- GitHub: [@ZdebK](https://github.com/ZdebK)
- Email: kas.elzbieciak@gmail.com

---

<div align="center">
  <sub>Built with ❤️ using React, TypeScript, and modern web technologies</sub>
</div>