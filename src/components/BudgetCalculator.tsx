
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const BudgetCalculator = () => {
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [area, setArea] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  // Calculate the area and price when width or height changes
  useEffect(() => {
    const widthNum = parseFloat(width) || 0;
    const heightNum = parseFloat(height) || 0;
    
    const calculatedArea = widthNum * heightNum;
    setArea(calculatedArea);
    
    // Calculate price based on the provided rules
    let calculatedPrice = 0;
    if (calculatedArea < 10) {
      calculatedPrice = 420;
    } else {
      calculatedPrice = 420 + ((calculatedArea - 10) * 42);
    }
    
    setPrice(calculatedPrice);
  }, [width, height]);

  return (
    <section id="budget" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Calcule seu Orçamento
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Informe as dimensões da área e obtenha um orçamento estimado para o serviço de instalação de redes de proteção.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card>
            <CardHeader className="bg-red-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6" />
                Calculadora de Orçamento
              </CardTitle>
              <CardDescription className="text-white/90">
                Digite as medidas para calcular o valor
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">
                      Largura (metros)
                    </label>
                    <Input
                      id="width"
                      type="number"
                      step="0.1"
                      min="0"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="Largura"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                      Altura (metros)
                    </label>
                    <Input
                      id="height"
                      type="number"
                      step="0.1"
                      min="0"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Altura"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Área total:</span>
                    <span className="font-medium">{area.toFixed(2)} m²</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Valor estimado:</span>
                    <span className="text-red-600">R$ {price.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 mt-2">
                  Solicitar Orçamento Detalhado
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BudgetCalculator;
