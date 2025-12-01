import { describe, it, expect } from 'vitest';
import { 
  ANIMATION_DELAYS, 
  ANIMATION_DURATIONS, 
  STAGGER_DELAY, 
  getStaggerDelay, 
  getSequentialDelay 
} from '../../utils/constants';

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
      expect(getStaggerDelay(2)).toBe(0.2);
      expect(getStaggerDelay(5)).toBe(0.5);
    });

    it('calculates stagger delay correctly with custom base delay', () => {
      expect(getStaggerDelay(0, 0.2)).toBe(0);
      expect(getStaggerDelay(1, 0.2)).toBe(0.2);
      expect(getStaggerDelay(2, 0.2)).toBe(0.4);
      expect(getStaggerDelay(3, 0.15)).toBe(0.45);
    });

    it('handles edge cases', () => {
      expect(getStaggerDelay(0, 0)).toBe(0);
      expect(getStaggerDelay(10, 0.05)).toBe(0.5);
    });
  });

  describe('getSequentialDelay', () => {
    it('calculates sequential delay correctly', () => {
      expect(getSequentialDelay(0)).toBe(0);
      expect(getSequentialDelay(1)).toBe(0.1);
      expect(getSequentialDelay(2)).toBe(0.2);
      expect(getSequentialDelay(3)).toBe(0.3);
      expect(getSequentialDelay(6)).toBe(0.6);
    });

    it('uses STAGGER_DELAY for calculation', () => {
      expect(getSequentialDelay(1)).toBe(STAGGER_DELAY);
      expect(getSequentialDelay(2)).toBe(STAGGER_DELAY * 2);
    });
  });
});
