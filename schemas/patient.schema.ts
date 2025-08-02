import { z } from 'zod';

export const PatientSchema = z.object({
  id: z.string().optional(),
  owner: z.string().min(1, 'Este campo es obligatorio'),
  name: z.string().min(1, 'Este campo es obligatorio'),
  email: z.email().min(1, 'Este campo es obligatorio'),
  date: z.string().min(1, 'Este campo es obligatorio'),
  symptoms: z.string().min(1, 'Este campo es obligatorio'),
});

export type Patient = z.infer<typeof PatientSchema>;
