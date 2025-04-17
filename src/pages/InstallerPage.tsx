
import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

const formSchema = z.object({
  type: z.enum(['autonomous', 'company']),
  name: z.string().min(2, { message: 'Nome deve ter pelo menos 2 caracteres' }),
  document: z.string().min(11, { message: 'CPF/CNPJ inválido' }),
  phone: z.string().optional(),
  email: z.string().email({ message: 'Email inválido' }),
  cellphone: z.string().min(10, { message: 'Celular inválido' }),
  address: z.string().min(5, { message: 'Endereço inválido' }),
  comment: z.string().optional(),
});

const InstallerPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: 'autonomous',
      name: '',
      document: '',
      phone: '',
      email: '',
      cellphone: '',
      address: '',
      comment: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success('Cadastro enviado com sucesso! Entraremos em contato em breve.');
    form.reset();
  };

  return (
    <>
      <Helmet>
        <title>Instalador Autorizado | Rede Filme</title>
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <a href="/" className="hover:text-red-600">Início</a> / Instalador Autorizado
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Instalador Autorizado</h1>
        <p className="text-lg mb-8 max-w-3xl">
          A Rede Filme está buscando parceiros para a instalação de redes de proteção e telas de segurança. Venha fazer parte desta rede!
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <img 
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34" 
            alt="Aperto de mão profissional" 
            className="rounded-lg shadow-lg h-72 w-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Como funciona a parceria entre a Rede Filme e você como instalador autorizado?</h2>
            <ul className="space-y-2 list-disc pl-5 text-gray-700">
              <li>O cliente solicita um orçamento para a Rede Filme;</li>
              <li>A Rede Filme faz a venda e marca com o cliente um dia e horário disponível da agenda do instalador;</li>
              <li>Você separa os materiais necessários e faz a instalação na data combinada;</li>
              <li>A Rede Filme confere com o cliente se tudo correu bem com a instalação e a considera finalizada;</li>
              <li>A cada 15 dias é feito o repasse referente as instalações executadas.</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Quais são as suas funções como um instalador autorizado de redes de proteção?</h2>
            <p className="text-gray-700">
              O instalador de redes de proteção é responsável pela separação de materiais, furação das paredes e colocação das redes de proteção em janelas, sacadas e escadas de apartamentos, casas e prédios comerciais.
            </p>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc" 
            alt="Ferramentas de trabalho" 
            className="rounded-lg shadow-lg h-72 w-full object-cover"
          />
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Quais são os requisitos para você se tornar um instalador de redes de proteção autorizado?</h2>
          <ul className="space-y-2 list-disc pl-5 text-gray-700 grid md:grid-cols-2 gap-x-6">
            <li>Ter um transporte próprio (moto ou carro);</li>
            <li>Ser maior de 18 anos;</li>
            <li>Adquirir as ferramentas indicadas no treinamento;</li>
            <li>Ter recursos iniciais para credenciamento e estoque;</li>
            <li>Não ter medo de altura;</li>
            <li>Possuir Certificado NR35 (para trabalho em altura);</li>
            <li>Ter um telefone com internet (para WhatsApp e e-mail);</li>
            <li>Ter um CNPJ (inclusive MEI).</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <img 
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e" 
            alt="Saco de dinheiro" 
            className="rounded-lg shadow-lg h-72 w-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Quais são as vantagens de ser um instalador autorizado de redes de proteção da Rede Filme?</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Clientes -</span> 
                <span>Receba muitos clientes em potencial enviados pela Rede Filme.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Treinamentos -</span> 
                <span>Aprenda com quem faz na prática. Cursos iniciais e avançados de vendas e instalação.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Receitas Quinzenais -</span> 
                <span>Não perca tempo cobrando seus clientes. A Rede Filme faz isso para você.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Trabalhe de Casa -</span> 
                <span>Use sua casa como base e saia apenas para fazer as instalações nos clientes.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Marketing Profissional -</span> 
                <span>Aproveite todos os recursos e benefícios que o Marketing da Rede Filme pode oferecer.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Início Rápido -</span> 
                <span>Após os treinamentos você já estará apto para instalar.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Baixo Investimento Inicial -</span> 
                <span>Todas estas vantagens custam menos do que você imagina.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Responsabilidades do Instalador Autorizado:</h2>
            <ul className="space-y-2 list-disc pl-5 text-gray-700">
              <li>Cumprimento dos horários estabelecidos;</li>
              <li>O transporte próprio e dos materiais de instalação;</li>
              <li>O cumprimento das normas de segurança e uso de equipamentos de proteção durante a instalação das redes;</li>
              <li>Arcar com eventuais danos a equipamentos e objetos dentro do ambiente de instalação;</li>
              <li>Compra e manutenção das ferramentas necessárias para a instalação das redes de proteção.</li>
            </ul>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5" 
            alt="Calendário" 
            className="rounded-lg shadow-lg h-72 w-full object-cover"
          />
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Como ser um Microempreendedor Individual?</h2>
          <p className="mb-4 text-gray-700">
            Se você ainda não é um Microempreendedor Individual, basta se inscrever pelo site do governo.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Quais as vantagens?</h3>
              <p className="text-gray-700">
                É possível ter uma renda de até R$5.000,00 mensais e contratar um assistente. Como MEI, você recebe um CNPJ, que facilita a abertura de conta bancária, pedido de empréstimo e emissão de notas fiscais.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Quanto custa ser um MEI?</h3>
              <p className="text-gray-700">
                Não há custo inicial, apenas uma taxa mensal de R$ 38,90. Você fica isento de impostos federais, como Imposto de Renda, PIS, Cofins, IPI e CSLL.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Cadastro de Instalador</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Tipo de profissional*</h3>
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="autonomous" id="autonomous" />
                            <Label htmlFor="autonomous">Profissional autônomo</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="company" id="company" />
                            <Label htmlFor="company">Empresa</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Nome ou Razão Social*</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome ou Razão Social" {...field} className="bg-white" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="document"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">CPF ou CNPJ*</FormLabel>
                      <FormControl>
                        <Input placeholder="CPF ou CNPJ" {...field} className="bg-white" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="Telefone" {...field} className="bg-white" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email*</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} className="bg-white" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="cellphone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Celular*</FormLabel>
                      <FormControl>
                        <Input placeholder="Celular" {...field} className="bg-white" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Endereço*</FormLabel>
                      <FormControl>
                        <Input placeholder="Endereço" {...field} className="bg-white" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Comentário</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Gostaria de dizer algo sobre você ou sua empresa?" 
                        {...field} 
                        className="bg-white" 
                        rows={4}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold mt-6"
              >
                Enviar Cadastro
              </Button>
            </form>
          </Form>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-6">Encontre-nos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">Endereço</h3>
              <p className="text-gray-700">
                Av. Luis Viana, 6462<br />
                Salvador, BA, CEP: 41.720-101
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Horário</h3>
              <p className="text-gray-700">
                Segunda—sexta: 8h–18h<br />
                Sábados e domingos: 9h–12h
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">FALE CONOSCO</h3>
              <p className="text-gray-700">
                Show Room | Vendas<br />
                Av. Luis Viana 6462 Salvador – BA<br />
                (71) 4102-4838 / 99990-9797
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstallerPage;
