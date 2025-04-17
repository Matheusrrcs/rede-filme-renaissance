
import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(10, { message: 'Telefone inválido' }),
  address: z.string().min(5, { message: 'Endereço inválido' }),
  serviceType: z.enum(['janela', 'sacada', 'varanda', 'escada', 'outro']),
  propertyType: z.enum(['casa', 'apartamento', 'comercial']),
  measurements: z.object({
    width: z.string().min(1, { message: 'Largura é obrigatória' }),
    height: z.string().min(1, { message: 'Altura é obrigatória' }),
  }),
  details: z.string().optional(),
  urgency: z.enum(['baixa', 'media', 'alta']),
  preferredContact: z.enum(['email', 'whatsapp', 'telefone']),
  availableTimes: z.array(z.string()).min(1, { message: 'Selecione pelo menos um período disponível' }),
  termsAgreed: z.boolean().refine(val => val === true, {
    message: 'Você precisa aceitar os termos'
  }),
});

export type BudgetFormValues = z.infer<typeof formSchema>;
