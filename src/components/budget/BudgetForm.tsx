
import React from 'react';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SendIcon } from 'lucide-react';
import { formSchema, BudgetFormValues } from './types';
import PersonalInfoSection from './PersonalInfoSection';
import ServiceDetailsSection from './ServiceDetailsSection';
import PreferencesSection from './PreferencesSection';

interface BudgetFormProps {
  onSubmit: (values: BudgetFormValues) => void;
}

const BudgetForm = ({ onSubmit }: BudgetFormProps) => {
  const form = useForm<BudgetFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      serviceType: 'janela',
      propertyType: 'casa',
      measurements: {
        width: '',
        height: '',
      },
      details: '',
      urgency: 'media',
      preferredContact: 'whatsapp',
      availableTimes: [],
      termsAgreed: false,
    },
  });

  const handleSubmit = (values: BudgetFormValues) => {
    onSubmit(values);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <PersonalInfoSection form={form} />
          <ServiceDetailsSection form={form} />
          <PreferencesSection form={form} />

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2"
          >
            Solicitar Orçamento
            <SendIcon className="h-5 w-5" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BudgetForm;
