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

## 📄 Additional Documentation

- [Code Quality Report](./CODE_QUALITY_REPORT.md)
- [Testing Implementation](./TESTING_IMPLEMENTATION.md)
- [Flashcards Guide](./FLASHCARDS_GUIDE.md)
- [Flashcards Usage](./FLASHCARDS_USAGE.md)
- [Formspree Setup](./FORMSPREE_SETUP.md)

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


## 🧪 Testing

- Unit tests: located in `src/tests/unit/` (run with `npm run test:unit`)
- E2E tests: located in `src/tests/e2e/` (run with `npm run test:e2e`)
- Playwright HTML reports: generated in `src/tests/playwright-report/` (ignored by git)
- Playwright last run JSON: generated in `src/test-results/.last-run.json` (ignored by git)

---

## 📦 Project Structure

```
src
├── assets
│   ├── images
│   └── fonts
├── components
│   ├── common
│   ├── layout
│   └── specific
├── hooks
├── i18n
├── pages
├── services
├── tests
│   ├── e2e
│   └── unit
└── App.tsx
```

---

## 🔧 Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the necessary dependencies.

### `npm run dev`

Starts the development server.

### `npm run build`

Builds the app for production.

### `npm run preview`

Serves the production build locally.

### `npm run test:unit`

Runs unit tests.

### `npm run test:e2e`

Runs end-to-end tests.

### `npm run lint`

Runs ESLint to check for code quality issues.

### `npm run format`

Formats the code using Prettier.

---
