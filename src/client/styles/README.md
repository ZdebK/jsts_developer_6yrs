# Reusable SCSS Styles

This directory contains reusable SCSS styles, variables, mixins, and utility classes for consistent styling across the project.

## File Structure

### `variables.scss`
Contains all color, spacing, typography, and breakpoint constants used throughout the project.

**Color Palette:**
- Primary: `$color-primary` (#007acc)
- Accent: `$color-accent` (#4ec9b0)
- Secondary: `$color-secondary` (#569cd6)
- Tertiary: `$color-tertiary` (#dcdcaa)
- Quaternary: `$color-quaternary` (#ce9178)
- Warning: `$color-warning` (#c586c0)
- Muted: `$color-muted` (#858585)

### `mixins.scss`
Contains reusable SCSS placeholders (%) and mixins (@mixin) for common styling patterns.

**Available Placeholders:**
- `%card-base` - Base card styling
- `%card-hover` - Card with hover effects
- `%card-interactive` - Card with scale animation on hover
- `%text-primary`, `%text-muted`, `%text-accent`, etc. - Text styling
- `%section-base`, `%section-full-height`, `%section-with-background` - Section layouts
- `%icon-container-primary`, `%icon-container-accent`, etc. - Icon containers
- `%flex-center`, `%flex-between` - Flexbox layouts
- `%button-hover-primary`, `%button-outline` - Button states
- `%divider` - Divider/separator styling

**Available Mixins:**
- `@include responsive-padding($mobile, $tablet, $desktop)` - Responsive padding
- `@include responsive-font-size($mobile, $tablet, $desktop)` - Responsive font sizes
- `@include truncate-lines($lines)` - Text truncation
- `@include gradient-text($color-start, $color-end)` - Gradient text effect
- `@include shadow-soft` - Soft shadow
- `@include shadow-medium` - Medium shadow

### `utilities.scss`
Provides ready-to-use CSS classes for common patterns.

**Available Classes:**
- Layout: `.section`, `.section--full-height`, `.section--with-bg`, `.container`, `.container--large`
- Typography: `.text`, `.text--muted`, `.text--accent`, `.text--secondary`, `.text--tertiary`
- Cards: `.card`, `.card--hover`, `.card--interactive`
- Flexbox: `.flex-center`, `.flex-center-col`, `.flex-between`
- Icons: `.icon-container--primary`, `.icon-container--accent`, `.icon-container--warning`
- Buttons: `.btn--primary`, `.btn--outline`
- Spacing: `.mb-2`, `.mb-4`, `.mb-6`, `.mb-8`, `.mb-12`, `.mt-2`, `.mt-4`, `.mt-6`, `.p-3`, `.p-6`
- Visibility: `.hide-mobile`, `.hide-tablet`, `.hide-desktop`
- Text Utilities: `.text-center`, `.text-left`, `.text-right`, `.truncate-1`, `.truncate-2`, `.truncate-3`

## Usage Examples

### Using Placeholders in SCSS (recommended for components)

```scss
@import '~@/styles/mixins.scss';

.my-card {
  @extend %card-hover;
  padding: $spacing-xl;
}

.my-heading {
  @extend %section-title;
  color: $color-primary;
}
```

### Using Utilities in JSX

```tsx
<div className="section section--full-height">
  <div className="container">
    <h2 className="text--tertiary mb-12">Section Title</h2>
    <div className="card card--interactive">
      <div className="icon-container--primary mb-4">
        <Icon />
      </div>
      <p className="text--primary">Content here</p>
    </div>
  </div>
</div>
```

### Using Mixins

```scss
@import '~@/styles/variables.scss';
@import '~@/styles/mixins.scss';

.responsive-section {
  @include responsive-padding($spacing-md, $spacing-lg, $spacing-2xl);
  @include responsive-font-size($font-size-base, $font-size-lg, $font-size-xl);
}

.gradient-title {
  @include gradient-text($color-tertiary, $color-secondary);
}
```

## Design System

The project follows a VS Code Dark Theme color scheme:

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #007acc | Links, buttons, highlights |
| Accent | #4ec9b0 | Accents, secondary highlights |
| Secondary | #569cd6 | Secondary text, headings |
| Tertiary | #dcdcaa | Primary headings, emphasis |
| Quaternary | #ce9178 | Tertiary accents |
| Warning | #c586c0 | Special accents |
| Muted | #858585 | Disabled text, helpers |
| Light | #d4d4d4 | Body text |
| Border | #3e3e42 | Borders, dividers |
| Card BG | #252526 | Card backgrounds |
| Section BG | #1a1a1a | Section backgrounds |

## Import Path Configuration

To use these styles easily, update your `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

Then import with: `@import '~@/styles/variables.scss'`

## Best Practices

1. **Use variables** instead of hardcoding colors/spacing
2. **Use placeholders** in component-specific SCSS files
3. **Use mixins** for responsive design and common patterns
4. **Use utility classes** for quick styling in JSX
5. **Avoid inline styles** - use SCSS files instead
6. **Maintain consistency** with the design system

## Future Enhancements

- [ ] Add more animation utilities
- [ ] Add form styling utilities
- [ ] Add accessibility-focused classes
- [ ] Add dark/light theme toggle support
