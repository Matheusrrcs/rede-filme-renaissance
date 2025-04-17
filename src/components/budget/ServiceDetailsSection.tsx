
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { UseFormReturn } from 'react-hook-form';
import { BudgetFormValues } from './types';

interface ServiceDetailsSectionProps {
  form: UseFormReturn<BudgetFormValues>;
}

const ServiceDetailsSection = ({ form }: ServiceDetailsSectionProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
        <span className="bg-red-600 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">2</span>
        Detalhes do Serviço
      </h2>
      
      <div className="space-y-6">
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Tipo de Serviço*</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="janela" id="janela" />
                    <Label htmlFor="janela">Janela</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sacada" id="sacada" />
                    <Label htmlFor="sacada">Sacada</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="varanda" id="varanda" />
                    <Label htmlFor="varanda">Varanda</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="escada" id="escada" />
                    <Label htmlFor="escada">Escada</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="outro" id="outro" />
                    <Label htmlFor="outro">Outro</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="propertyType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Tipo de Imóvel*</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="casa" id="casa" />
                    <Label htmlFor="casa">Casa</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="apartamento" id="apartamento" />
                    <Label htmlFor="apartamento">Apartamento</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comercial" id="comercial" />
                    <Label htmlFor="comercial">Comercial</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div>
          <FormLabel className="block mb-2">Medidas do Espaço*</FormLabel>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="measurements.width"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex">
                      <Input 
                        placeholder="Largura" 
                        type="number" 
                        step="0.1" 
                        {...field} 
                      />
                      <div className="bg-gray-100 border px-3 flex items-center border-l-0">
                        m
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="measurements.height"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex">
                      <Input 
                        placeholder="Altura" 
                        type="number" 
                        step="0.1" 
                        {...field} 
                      />
                      <div className="bg-gray-100 border px-3 flex items-center border-l-0">
                        m
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detalhes Adicionais</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Descreva detalhes específicos do seu projeto ou necessidades especiais" 
                  {...field} 
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ServiceDetailsSection;
