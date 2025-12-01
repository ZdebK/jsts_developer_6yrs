import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionHeader } from '../SectionHeader';

describe('SectionHeader', () => {
  it('renders title with VS Code style formatting', () => {
    render(<SectionHeader title="Test Section" />);
    expect(screen.getByText('< Test Section />')).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    const { container } = render(<SectionHeader title="Skills" />);
    const heading = container.querySelector('h2');
    expect(heading).toHaveClass('text-3xl', 'md:text-4xl', 'mb-12', 'text-center');
  });

  it('renders primary text color for opening tag', () => {
    const { container } = render(<SectionHeader title="Projects" />);
    const primarySpan = container.querySelector('.text--primary');
    expect(primarySpan).toBeInTheDocument();
    expect(primarySpan?.textContent).toBe('< ');
  });

  it('renders tertiary text color for title', () => {
    const { container } = render(<SectionHeader title="Experience" />);
    const tertiarySpan = container.querySelector('.text--tertiary');
    expect(tertiarySpan).toBeInTheDocument();
    expect(tertiarySpan?.textContent).toBe('Experience');
  });

  it('renders secondary text color for closing tag', () => {
    const { container } = render(<SectionHeader title="Contact" />);
    const secondarySpan = container.querySelector('.text--secondary');
    expect(secondarySpan).toBeInTheDocument();
    expect(secondarySpan?.textContent).toBe(' />');
  });
});
