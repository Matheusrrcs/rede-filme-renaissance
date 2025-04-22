
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calculator, Plus, Minus } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Measurement {
  width: string;
  height: string;
  quantity: string;
}

const BudgetCalculator = () => {
  const [measurements, setMeasurements] = useState<Measurement[]>([
    { width: '', height: '', quantity: '1' }
  ]);
  const [totalArea, setTotalArea] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [netType, setNetType] = useState<string>('protection');
  const [hookType, setHookType] = useState<string>('galvanized');
  const [netColor, setNetColor] = useState<string>('white');
  const [includeInstallation, setIncludeInstallation] = useState<boolean>(true);

  const addMeasurement = () => {
    setMeasurements([...measurements, { width: '', height: '', quantity: '1' }]);
  };

  const removeMeasurement = (index: number) => {
    if (measurements.length > 1) {
      const newMeasurements = measurements.filter((_, i) => i !== index);
      setMeasurements(newMeasurements);
    }
  };

  const updateMeasurement = (index: number, field: keyof Measurement, value: string) => {
    const newMeasurements = measurements.map((measurement, i) => {
      if (i === index) {
        return { ...measurement, [field]: value };
      }
      return measurement;
    });
    setMeasurements(newMeasurements);
  };

  // Calculate totals when measurements change
  useEffect(() => {
    let area = 0;
    
    measurements.forEach((measurement) => {
      const width = parseFloat(measurement.width) || 0;
      const height = parseFloat(measurement.height) || 0;
      const quantity = parseInt(measurement.quantity) || 0;
      area += width * height * quantity;
    });

    setTotalArea(area);
    
    // Base price calculation
    let basePrice = area * 42; // R$42 per m²
    if (area > 0 && basePrice < 420) {
      basePrice = 420; // Minimum price
    }
    
    // Additional costs based on selections
    const installationCost = includeInstallation ? basePrice * 0.2 : 0; // 20% extra for installation
    setTotalPrice(basePrice + installationCost);
  }, [measurements, includeInstallation]);

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
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo de Rede
                      </label>
                      <Select value={netType} onValueChange={setNetType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="protection">Rede de Proteção</SelectItem>
                          <SelectItem value="sports">Rede Esportiva</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo de Gancho
                      </label>
                      <Select value={hookType} onValueChange={setHookType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o gancho" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="galvanized">Galvanizado</SelectItem>
                          <SelectItem value="stainless">Inox</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cor da Rede
                      </label>
                      <Select value={netColor} onValueChange={setNetColor}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a cor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="white">Branca</SelectItem>
                          <SelectItem value="black">Preta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Instalação
                      </label>
                      <div className="flex gap-4 mt-2">
                        <Button
                          type="button"
                          variant={includeInstallation ? "default" : "outline"}
                          size="sm"
                          onClick={() => setIncludeInstallation(true)}
                          className={includeInstallation ? "bg-red-600" : ""}
                        >
                          Sim
                        </Button>
                        <Button
                          type="button"
                          variant={!includeInstallation ? "default" : "outline"}
                          size="sm"
                          onClick={() => setIncludeInstallation(false)}
                          className={!includeInstallation ? "bg-red-600" : ""}
                        >
                          Não
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {measurements.map((measurement, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 items-end bg-gray-50 p-4 rounded-lg">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Largura (m)
                        </label>
                        <Input
                          type="number"
                          step="0.1"
                          min="0"
                          value={measurement.width}
                          onChange={(e) => updateMeasurement(index, 'width', e.target.value)}
                          placeholder="Largura"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Altura (m)
                        </label>
                        <Input
                          type="number"
                          step="0.1"
                          min="0"
                          value={measurement.height}
                          onChange={(e) => updateMeasurement(index, 'height', e.target.value)}
                          placeholder="Altura"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Quantidade
                        </label>
                        <div className="flex gap-2">
                          <Input
                            type="number"
                            min="1"
                            value={measurement.quantity}
                            onChange={(e) => updateMeasurement(index, 'quantity', e.target.value)}
                            placeholder="Qtd"
                          />
                          {measurements.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => removeMeasurement(index)}
                              className="flex-shrink-0"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    variant="outline"
                    onClick={addMeasurement}
                    className="w-full border-dashed"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Adicionar Medida
                  </Button>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Área total:</span>
                    <span className="font-medium">{totalArea.toFixed(2)} m²</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Valor estimado:</span>
                    <span className="text-red-600">R$ {totalPrice.toFixed(2)}</span>
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
