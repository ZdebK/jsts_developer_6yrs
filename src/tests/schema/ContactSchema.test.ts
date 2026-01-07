import { describe, it, expect } from 'vitest';
import { contactSchema } from '../../client/schemas/ContactSchema';

describe('Contact Schema Validation', () => {
	describe('name field', () => {
		it('accepts valid name', () => {
			const result = contactSchema.safeParse({
				name: 'John Doe',
				email: 'john@example.com',
				message: 'Test message',
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
			const result = contactSchema.safeParse({
				name: 'a'.repeat(51),
				email: 'john@example.com',
				message: 'Test message',
			});
			expect(result.success).toBe(false);
		});

		it('handles undefined name (React Hook Form case)', () => {
			const result = contactSchema.safeParse({
				name: undefined,
				email: 'john@example.com',
				message: 'Test message',
			});
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues[0].message).not.toContain('Invalid input');
				expect(result.error.issues[0].message).not.toContain('expected string, received undefined');
			}
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

		it('handles undefined email (React Hook Form case)', () => {
			const result = contactSchema.safeParse({
				name: 'John Doe',
				email: undefined,
				message: 'Test message',
			});
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues[0].message).not.toContain('Invalid input');
				expect(result.error.issues[0].message).not.toContain('expected string, received undefined');
			}
		});
	});

	describe('message field', () => {
		it('accepts valid message', () => {
			const result = contactSchema.safeParse({
				name: 'John Doe',
				email: 'john@example.com',
				message: 'This is a test message',
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
			const result = contactSchema.safeParse({
				name: 'John Doe',
				email: 'john@example.com',
				message: 'a'.repeat(501),
			});
			expect(result.success).toBe(false);
		});

		it('accepts message at max length (500 chars)', () => {
			const result = contactSchema.safeParse({
				name: 'John Doe',
				email: 'john@example.com',
				message: 'a'.repeat(500),
			});
			expect(result.success).toBe(true);
		});

		it('handles undefined message (React Hook Form case)', () => {
			const result = contactSchema.safeParse({
				name: 'John Doe',
				email: 'john@example.com',
				message: undefined,
			});
			expect(result.success).toBe(false);
			if (!result.success) {
				expect(result.error.issues[0].message).not.toContain('Invalid input');
				expect(result.error.issues[0].message).not.toContain('expected string, received undefined');
			}
		});
	});

	describe('complete validation', () => {
		it('validates complete valid form data', () => {
			const result = contactSchema.safeParse({
				name: 'Jane Smith',
				email: 'jane.smith@example.com',
				message: 'This is a complete and valid message for testing purposes.',
			});
			expect(result.success).toBe(true);
		});

		it('returns correct error messages for multiple invalid fields', () => {
			const result = contactSchema.safeParse({
				name: 'J',
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
// ...existing code from contactSchema.test.ts...