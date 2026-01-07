import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AnimatedCard } from '../../client/components/AnimatedCard';

// Mock framer-motion to avoid animation complexity in tests
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

describe('AnimatedCard', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <AnimatedCard>
        <p>Test Content</p>
      </AnimatedCard>
    );
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies default card classes', () => {
    const { container } = render(
      <AnimatedCard>
        <p>Test</p>
      </AnimatedCard>
    );
    const card = container.querySelector('.card');
    expect(card).toHaveClass('card');
    expect(card).toHaveClass('card--hover'); // default hover is true
  });

  it('applies custom className', () => {
    const { container } = render(
      <AnimatedCard className="custom-class">
        <p>Test</p>
      </AnimatedCard>
    );
    const card = container.querySelector('.card');
    expect(card).toHaveClass('custom-class');
  });

  it('applies hover class when hover prop is true', () => {
    const { container } = render(
      <AnimatedCard hover={true}>
        <p>Test</p>
      </AnimatedCard>
    );
    const card = container.querySelector('.card');
    expect(card).toHaveClass('card--hover');
  });

  it('does not apply hover class when hover prop is false', () => {
    const { container } = render(
      <AnimatedCard hover={false}>
        <p>Test</p>
      </AnimatedCard>
    );
    const card = container.querySelector('.card');
    expect(card).toHaveClass('card');
    expect(card).not.toHaveClass('card--hover');
  });
});