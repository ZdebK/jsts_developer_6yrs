import { z } from 'zod';

// Helper to handle undefined values gracefully
const stringField = (requiredMsg: string) =>
  z.preprocess(
    (val) => (val === undefined || val === null ? '' : val),
    z.string().min(1, requiredMsg)
  );

export const contactSchema = z.object({
  name: stringField('validation.nameRequired')
    .pipe(z.string().min(2, 'validation.nameTooShort').max(50, 'validation.nameTooLong')),
  email: stringField('validation.emailRequired')
    .pipe(z.string().email('validation.emailInvalid')),
  message: stringField('validation.messageRequired')
    .pipe(z.string().min(10, 'validation.messageTooShort').max(500, 'validation.messageTooLong')),
});

export type ContactFormData = z.infer<typeof contactSchema>;
