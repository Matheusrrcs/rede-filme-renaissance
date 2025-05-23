
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16 bg-red-600">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Entre em Contato
          </h2>
          <p className="text-white/90 mb-8">
            Solicite um orçamento ou tire suas dúvidas. Nossa equipe está pronta para atendê-lo.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-yellow-400" />
              <span className="text-white">Av. Luis Viana, 6462, Wall Street, Paralela - Salvador</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-yellow-400" />
              <span className="text-white">(71) 99990-9797</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-yellow-400" />
              <span className="text-white">contato@redefilme.com</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
          <Input
            name="name"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-red-200 focus:border-red-400"
          />
          <Input
            name="phone"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border-red-200 focus:border-red-400"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-red-200 focus:border-red-400"
          />
          <Textarea
            name="message"
            placeholder="Descrição do seu projeto ou orçamento"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="border-red-200 focus:border-red-400"
          />
          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold"
          >
            Solicitar Orçamento
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
