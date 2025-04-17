
import React from 'react';
import { ShieldCheck, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center mb-4 space-x-2">
            <ShieldCheck className="h-8 w-8 text-white" />
            <span className="text-lg font-medium">Proteção Profissional</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções Completas em Redes de Proteção
          </h1>
          <p className="text-lg text-white/80 mb-8">
            Oferecemos serviços especializados em redes de proteção para diversos ambientes. 
            Segurança, qualidade e tranquilidade para você.
          </p>
          <div className="flex space-x-4">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 flex items-center"
            >
              <Phone className="mr-2" /> Contato
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1558002438-ddc106521f24" 
            alt="Redes de Proteção" 
            className="rounded-lg shadow-xl object-cover h-[500px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
