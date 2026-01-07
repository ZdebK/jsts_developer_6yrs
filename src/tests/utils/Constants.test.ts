import { describe, it, expect } from 'vitest';
import { 
  ANIMATION_DELAYS, 
  ANIMATION_DURATIONS, 
  STAGGER_DELAY, 
  getStaggerDelay, 
  getSequentialDelay 
} from '../../client/utils/Constants';

describe('Animation Constants', () => {
  describe('ANIMATION_DELAYS', () => {
    it('has correct delay values', () => {
      expect(ANIMATION_DELAYS.NONE).toBe(0);
      expect(ANIMATION_DELAYS.FAST).toBe(0.1);
      expect(ANIMATION_DELAYS.NORMAL).toBe(0.2);
      expect(ANIMATION_DELAYS.MEDIUM).toBe(0.3);
      expect(ANIMATION_DELAYS.SLOW).toBe(0.4);
      expect(ANIMATION_DELAYS.SLOWER).toBe(0.5);
      expect(ANIMATION_DELAYS.SLOWEST).toBe(0.6);
    });
  });

  describe('ANIMATION_DURATIONS', () => {
    it('has correct duration values', () => {
      expect(ANIMATION_DURATIONS.FAST).toBe(0.3);
      expect(ANIMATION_DURATIONS.NORMAL).toBe(0.6);
      expect(ANIMATION_DURATIONS.SLOW).toBe(0.9);
    });
  });

  describe('STAGGER_DELAY', () => {
    it('has correct stagger delay value', () => {
      expect(STAGGER_DELAY).toBe(0.1);
    });
  });

  describe('getStaggerDelay', () => {
    it('calculates stagger delay correctly with default base', () => {
      expect(getStaggerDelay(0)).toBe(0);
      expect(getStaggerDelay(1)).toBe(0.1);
      // ...existing code...
    });
  });
});
