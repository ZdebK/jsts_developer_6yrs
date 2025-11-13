# AI Assistant Instructions for Professional CV Website

## Project Overview
This is a React-based professional CV/portfolio website using Vite, TypeScript, and Radix UI components. The project follows a component-based architecture with internationalization support.

## Key Architecture Components
- `App.tsx`: Main layout container with section components
- `components/`: UI components organized by feature sections (Hero, Experience, etc.)
- `components/ui/`: Reusable UI components built with Radix UI
- `contexts/LanguageContext.tsx`: Internationalization provider for PL/EN languages

## Development Workflow
1. Install dependencies:
```bash
npm i
```
2. Start development server:
```bash
npm run dev
```

## Project Conventions
1. Component Structure:
   - Feature components in `components/`
   - Reusable UI components in `components/ui/`
   - Each component has its own file named in PascalCase

2. Styling:
   - Uses Tailwind CSS for styling
   - Dark theme with colors: bg-[#1e1e1e], text-[#d4d4d4]
   - Components use Radix UI primitives for accessibility

3. Internationalization:
   - Uses LanguageContext for translations
   - Wrap text content with `t()` function
   - Example: `t("nav.about")` for translated strings

## Common Patterns
1. Component Export Pattern:
```tsx
export function ComponentName() {
  return (
    // JSX here
  );
}
```

2. Language Usage:
```tsx
const { t } = useContext(LanguageContext);
// Usage: {t("key.subkey")}
```

3. Animated Sections:
   - Use `AnimatedSection` component for fade-in animations
   - Example in `components/Skills.tsx`

## Key Files and Directories
- `src/App.tsx`: Main application layout
- `src/components/ui/`: Reusable UI components library
- `src/contexts/LanguageContext.tsx`: i18n implementation
- `vite.config.ts`: Build and dependency configuration