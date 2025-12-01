import { describe, it, expect } from 'vitest';
import { contactSchema } from '../../schemas/contactSchema';

describe('Contact Schema Validation', () => {
  describe('name field', () => {
    it('accepts valid name', () => {
      const result = contactSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message',
      });
      expect(result.success).toBe(true);
    });

    it('rejects empty name', () => {
      const result = contactSchema.safeParse({
        name: '',
        email: 'john@example.com',
        message: 'Test message',
      });
      expect(result.success).toBe(false);
    });

    it('rejects name shorter than 2 characters', () => {
      const result = contactSchema.safeParse({
        name: 'J',
        email: 'john@example.com',
        message: 'Test message',
      });
      expect(result.success).toBe(false);
    });

    it('rejects name longer than 50 characters', () => {
      const longName = 'A'.repeat(51);
      const result = contactSchema.safeParse({
        name: longName,
        email: 'john@example.com',
        message: 'Test message',
      });
      expect(result.success).toBe(false);
    });
  });

  describe('email field', () => {
    it('accepts valid email', () => {
      const result = contactSchema.safeParse({
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'Test message',
      });
      expect(result.success).toBe(true);
    });

    it('rejects invalid email format', () => {
      const result = contactSchema.safeParse({
        name: 'John Doe',
        email: 'invalid-email',
        message: 'Test message',
      });
      expect(result.success).toBe(false);
    });

    it('rejects empty email', () => {
      const result = contactSchema.safeParse({
        name: 'John Doe',
        email: '',
        message: 'Test message',
      });
      expect(result.success).toBe(false);
    });
  });

  describe('message field', () => {
    it('accepts valid message', () => {
      const result = contactSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a valid test message',
      });
      expect(result.success).toBe(true);
    });

    it('rejects empty message', () => {
      const result = contactSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: '',
      });
      expect(result.success).toBe(false);
    });

    it('rejects message shorter than 10 characters', () => {
      const result = contactSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Short',
      });
      expect(result.success).toBe(false);
    });

    it('rejects message longer than 500 characters', () => {
      const longMessage = 'A'.repeat(501);
      const result = contactSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: longMessage,
      });
      expect(result.success).toBe(false);
    });

    it('accepts message at max length (500 chars)', () => {
      const maxMessage = 'A'.repeat(500);
      const result = contactSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: maxMessage,
      });
      expect(result.success).toBe(true);
    });
  });

  describe('complete form validation', () => {
    it('validates complete valid form data', () => {
      const validData = {
        name: 'Jane Smith',
        email: 'jane.smith@company.com',
        message: 'I would like to discuss a potential collaboration on your project.',
      };
      const result = contactSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('returns correct error messages for multiple invalid fields', () => {
      const result = contactSchema.safeParse({
        name: '',
        email: 'invalid',
        message: 'short',
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues.length).toBeGreaterThan(0);
      }
    });
  });
});
