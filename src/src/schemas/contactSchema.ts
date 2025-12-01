import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'contact:validation.nameRequired')
    .min(2, 'contact:validation.nameTooShort')
    .max(50, 'contact:validation.nameTooLong'),
  email: z
    .string()
    .min(1, 'contact:validation.emailRequired')
    .email('contact:validation.emailInvalid'),
  message: z
    .string()
    .min(1, 'contact:validation.messageRequired')
    .min(10, 'contact:validation.messageTooShort')
    .max(500, 'contact:validation.messageTooLong'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
