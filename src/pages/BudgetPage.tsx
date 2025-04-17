
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { ArrowRight, Check, SendIcon } from 'lucide-react';

const formSchema = z.object({
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

const BudgetPage = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Orçamento enviado com sucesso! Entraremos em contato em breve.");
    setShowThankYou(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showThankYou) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">Orçamento Enviado com Sucesso!</h2>
          <p className="text-gray-700 mb-6">
            Agradecemos por solicitar um orçamento. Nossa equipe irá analisar suas informações
            e entraremos em contato com você em breve.
          </p>
          <Button 
            onClick={() => window.location.href = '/'} 
            className="bg-red-600 hover:bg-red-700"
          >
            Voltar para a Página Inicial
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Orçamento Online | Rede Filme</title>
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <a href="/" className="hover:text-red-600">Início</a> / Orçamento Online
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              Orçamento Online
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Preencha o formulário abaixo para solicitar um orçamento detalhado para sua rede de proteção.
              Nossa equipe irá analisar e entrar em contato em breve.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Informações Pessoais */}
                <div>
                  <h2 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">1</span>
                    Informações Pessoais
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo*</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email*</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone/WhatsApp*</FormLabel>
                          <FormControl>
                            <Input placeholder="(00) 00000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Endereço*</FormLabel>
                          <FormControl>
                            <Input placeholder="Endereço completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Detalhes do Serviço */}
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

                {/* Preferências */}
                <div>
                  <h2 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">3</span>
                    Preferências
                  </h2>
                  
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="urgency"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Urgência*</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex gap-6"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="baixa" id="baixa" />
                                <Label htmlFor="baixa">Baixa (nas próximas semanas)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="media" id="media" />
                                <Label htmlFor="media">Média (nos próximos dias)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="alta" id="alta" />
                                <Label htmlFor="alta">Alta (urgente)</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="preferredContact"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Método de Contato Preferido*</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex gap-6"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="email" id="email-contact" />
                                <Label htmlFor="email-contact">Email</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="whatsapp" id="whatsapp" />
                                <Label htmlFor="whatsapp">WhatsApp</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="telefone" id="telefone" />
                                <Label htmlFor="telefone">Telefone</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="availableTimes"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Horários Disponíveis para Visita Técnica*</FormLabel>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {['Manhã', 'Tarde', 'Noite', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Fim de Semana'].map((item) => (
                              <FormField
                                key={item}
                                control={form.control}
                                name="availableTimes"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(item)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, item])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {item}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="termsAgreed"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-6">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Concordo com os termos de serviço e política de privacidade
                            </FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

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
        </div>
      </div>
    </>
  );
};

export default BudgetPage;
