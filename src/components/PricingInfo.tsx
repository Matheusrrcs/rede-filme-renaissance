
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InfoIcon, UserCheck, GraduationCap } from 'lucide-react';

const PricingInfo = () => {
  return (
    <section id="pricing-info" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Informações de Preços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entenda como funciona nossa política de preços e descubra oportunidades profissionais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg border-t-4 border-t-red-600">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <InfoIcon className="h-8 w-8 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Política de Preços</h3>
                  <ul className="text-gray-600 space-y-2 list-disc list-inside">
                    <li>Se o total das medidas somadas forem inferior a 10,00 m², será cobrado o valor mínimo de R$ 420,00 pelo serviço instalado.</li>
                    <li>Se ultrapassar os 10 m², será cobrado R$ 42,00 por cada m² excedente.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-t-4 border-t-yellow-500">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <UserCheck className="h-8 w-8 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seja um Instalador</h3>
                  <p className="text-gray-600 mb-4">
                    Interessado em se tornar um instalador profissional de redes de proteção? 
                    Junte-se à nossa equipe e tenha acesso a treinamentos e projetos.
                  </p>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                    Quero ser um Instalador
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-t-4 border-t-red-600">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <GraduationCap className="h-8 w-8 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Certificação</h3>
                  <p className="text-gray-600 mb-4">
                    Obtenha nossa certificação e destaque-se no mercado como um profissional qualificado em instalação de redes de proteção.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Saiba Mais
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
            ORÇAMENTO ONLINE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingInfo;
