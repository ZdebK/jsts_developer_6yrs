import { describe, it, expect, vi } from 'vitest';
import { SectionHeader } from '../../client/components/SectionHeader';
import { render, screen } from '@testing-library/react';

// Mock motion/react
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, className, ...props }: any) => (
      <div className={className} {...props}>
        {children}
      </div>
    ),
  },
  useInView: () => true,
}));

describe('SectionHeader', () => {
  it('renders title with VS Code style formatting', () => {
    render(<SectionHeader title="Test Section" />);
    expect(screen.getByText('Test Section')).toBeInTheDocument();
    expect(screen.getByText('<')).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      return element?.textContent === ' />';
    })).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    const { container } = render(<SectionHeader title="Skills" />);
    const heading = container.querySelector('h2');
    expect(heading).toHaveClass('text-3xl', 'md:text-4xl', 'mb-2');
  });

  it('renders muted text color for tags', () => {
    const { container } = render(<SectionHeader title="Projects" />);
    const mutedSpans = container.querySelectorAll('.text--vs-muted');
    expect(mutedSpans).toHaveLength(2);
    expect(mutedSpans[0]?.textContent).toBe('<');
    expect(mutedSpans[1]?.textContent).toBe(' />');
  });

  it('renders blue text color for title', () => {
    const { container } = render(<SectionHeader title="Experience" />);
    const blueSpan = container.querySelector('.text--primary');
    expect(blueSpan).toBeInTheDocument();
    expect(blueSpan?.textContent).toBe('Experience');
  });

  it('renders decorative underline', () => {
    const { container } = render(<SectionHeader title="Contact" />);
    const underline = container.querySelector('.h-1.w-20.bg--primary.rounded');
    expect(underline).toBeInTheDocument();
  });
});