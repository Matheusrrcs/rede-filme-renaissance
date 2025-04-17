
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYouPage = () => {
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
};

export default ThankYouPage;
