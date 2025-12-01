import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AnimatedElement } from '../AnimatedElement';

// Mock framer-motion
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, className, ...props }: any) => (
      <div className={className} {...props}>
        {children}
      </div>
    ),
    h1: ({ children, className, ...props }: any) => (
      <h1 className={className} {...props}>
        {children}
      </h1>
    ),
    p: ({ children, className, ...props }: any) => (
      <p className={className} {...props}>
        {children}
      </p>
    ),
  },
}));

describe('AnimatedElement', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <AnimatedElement>
        <span>Test Content</span>
      </AnimatedElement>
    );
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('renders as div by default', () => {
    const { container } = render(
      <AnimatedElement className="test-class">
        <span>Test</span>
      </AnimatedElement>
    );
    expect(container.querySelector('div.test-class')).toBeInTheDocument();
  });

  it('renders as specified element when "as" prop is provided', () => {
    const { container } = render(
      <AnimatedElement as="h1" className="heading">
        Title
      </AnimatedElement>
    );
    expect(container.querySelector('h1.heading')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <AnimatedElement className="custom-class">
        Content
      </AnimatedElement>
    );
    const element = container.firstChild;
    expect(element).toHaveClass('custom-class');
  });

  it('renders paragraph element when as="p"', () => {
    const { container } = render(
      <AnimatedElement as="p">Paragraph content</AnimatedElement>
    );
    expect(container.querySelector('p')).toBeInTheDocument();
  });
});
