import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string({ message: 'validation.nameRequired' })
    .min(1, 'validation.nameRequired')
    .min(2, 'validation.nameTooShort')
    .max(50, 'validation.nameTooLong'),
  email: z.string({ message: 'validation.emailRequired' })
    .min(1, 'validation.emailRequired')
    .email('validation.emailInvalid'),
  message: z.string({ message: 'validation.messageRequired' })
    .min(1, 'validation.messageRequired')
    .min(10, 'validation.messageTooShort')
    .max(500, 'validation.messageTooLong'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
