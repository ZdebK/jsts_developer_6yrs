// Animation timing constants
export const ANIMATION_DELAYS = {
  NONE: 0,
  FAST: 0.1,
  NORMAL: 0.2,
  MEDIUM: 0.3,
  SLOW: 0.4,
  SLOWER: 0.5,
  SLOWEST: 0.6,
} as const;

export const ANIMATION_DURATIONS = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 0.9,
} as const;

export const STAGGER_DELAY = 0.1;

// Helper to calculate stagger delay
export const getStaggerDelay = (index: number, baseDelay: number = STAGGER_DELAY): number => 
  index * baseDelay;

// Helper to get sequential delays
export const getSequentialDelay = (step: number): number => 
  step * ANIMATION_DELAYS.FAST;
