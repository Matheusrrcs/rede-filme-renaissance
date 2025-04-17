
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'sonner';
import ThankYouPage from '@/components/budget/ThankYouPage';
import BudgetForm from '@/components/budget/BudgetForm';
import { BudgetFormValues } from '@/components/budget/types';

const BudgetPage = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  
  const onSubmit = (values: BudgetFormValues) => {
    console.log(values);
    toast.success("Orçamento enviado com sucesso! Entraremos em contato em breve.");
    setShowThankYou(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showThankYou) {
    return <ThankYouPage />;
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

          <BudgetForm onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default BudgetPage;
