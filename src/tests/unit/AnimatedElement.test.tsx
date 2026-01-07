import { render } from '@testing-library/react';
import { describe, it, beforeAll, afterAll, expect, vi } from 'vitest';
import { AnimatedElement } from '../../client/components/AnimatedElement';
import React from 'react';

// Poprawiony mock motion/react z obsługą ref
vi.mock('motion/react', () => ({
  motion: new Proxy(() => {}, {
    get: (target, prop) => {
      return React.forwardRef(function MockedMotionComponent(props: any, ref) {
        const { children, className, ...rest } = props;
        const Tag = prop as string;
        return <Tag className={className} ref={ref} {...rest}>{children}</Tag>;
      });
    },
    apply: (target, thisArg, argArray) => {
      const Tag = argArray[0];
      return React.forwardRef(function MockedMotionComponent(props: any, ref) {
        const { children, className, ...rest } = props;
        return <Tag className={className} ref={ref} {...rest}>{children}</Tag>;
      });
    }
  }),
  useInView: () => true,
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

// Ensure dark mode for color-related tests
describe('AnimatedElement (dark mode)', () => {
  beforeAll(() => {
    document.documentElement.classList.add('dark');
  });
  afterAll(() => {
    document.documentElement.classList.remove('dark');
  });

  it('renders with dark mode class', () => {
    const { container } = render(
      <AnimatedElement className="test-dark">
        <span>Dark Test</span>
      </AnimatedElement>
    );
    // Example: check if dark mode class is present
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(container.querySelector('.test-dark')).toBeInTheDocument();
  });
});