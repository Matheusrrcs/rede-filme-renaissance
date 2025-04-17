
import React from 'react';
import { 
  Fence, Home, Umbrella, Shield, Building, 
  Cat, Dog, SwimmingPool, Play 
} from 'lucide-react';

const serviceList = [
  { icon: Home, title: 'Varandas', description: 'Proteção para varandas e espaços residenciais' },
  { icon: Fence, title: 'Quadras', description: 'Redes de proteção para quadras esportivas' },
  { icon: SwimmingPool, title: 'Piscinas', description: 'Segurança para áreas de piscina' },
  { icon: Play, title: 'Parques', description: 'Proteção para áreas de lazer infantil' },
  { icon: Umbrella, title: 'Obras', description: 'Redes de segurança para construções' },
  { icon: Cat, title: 'Animais', description: 'Proteção para gatos e áreas de pet' },
  { icon: Building, title: 'Empresas', description: 'Soluções de proteção empresarial' },
  { icon: Shield, title: 'Personalizados', description: 'Redes sob medida para sua necessidade' }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em redes de proteção para diversos ambientes e necessidades.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {serviceList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all group"
            >
              <div className="mb-4 flex justify-center">
                <service.icon 
                  className="h-12 w-12 text-blue-600 group-hover:text-blue-800 transition-colors" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
