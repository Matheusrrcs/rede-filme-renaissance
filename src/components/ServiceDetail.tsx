
import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServiceInfo {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  images: string[];
}

// This would ideally come from an API or CMS
const serviceData: Record<string, ServiceInfo> = {
  animais: {
    title: 'Redes de Proteção para Animais',
    description: 'Mantenha seus pets seguros em casa com nossas redes de proteção.',
    longDescription: 'As redes de proteção para animais são ideais para proteger gatos e outros pets, evitando quedas de janelas, varandas e áreas elevadas. Nossas redes são fabricadas com materiais de alta qualidade, resistentes e duráveis, garantindo a segurança dos seus animais de estimação.',
    features: [
      'Material resistente e não tóxico',
      'Proteção contra quedas de janelas e varandas',
      'Instalação rápida e sem danos à estrutura',
      'Diferentes cores disponíveis',
      'Garantia de segurança para seus pets'
    ],
    images: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5'
    ]
  },
  varandas: {
    title: 'Redes de Proteção para Varandas',
    description: 'Segurança para sua família em apartamentos e casas com varandas.',
    longDescription: 'As redes de proteção para varandas proporcionam segurança para crianças, idosos e animais de estimação, prevenindo quedas e acidentes. Nossa solução é discreta, resistente e não compromete a estética da sua varanda.',
    features: [
      'Proteção eficaz contra quedas',
      'Materiais resistentes às intempéries',
      'Instalação profissional e certificada',
      'Modelos discretos que não comprometem a estética',
      'Conformidade com normas de segurança'
    ],
    images: [
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0',
      'https://images.unsplash.com/photo-1558002438-ddc106521f24'
    ]
  },
  // Placeholder data for all other services
  quadras: {
    title: 'Redes para Quadras Esportivas',
    description: 'Proteção e segurança para quadras esportivas.',
    longDescription: 'Nossas redes para quadras esportivas são ideais para conter bolas e equipamentos, garantindo a segurança dos jogadores e espectadores. Produzidas com materiais resistentes e duráveis, suportam impactos e condições climáticas adversas.',
    features: [
      'Redes de alta resistência para todos os esportes',
      'Proteção lateral e superior para quadras',
      'Instalação profissional com estruturas adequadas',
      'Material resistente a UV e intempéries',
      'Soluções personalizadas para cada tipo de quadra'
    ],
    images: [
      'https://images.unsplash.com/photo-1526232373132-0e4ee16ea81d',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc'
    ]
  },
  piscinas: {
    title: 'Redes de Proteção para Piscinas',
    description: 'Segurança para áreas de piscina em residências e clubes.',
    longDescription: 'As redes de proteção para piscinas oferecem segurança adicional, principalmente para famílias com crianças e animais de estimação. Elas ajudam a prevenir acidentes quando a área não está em uso, sem comprometer o acesso ou a estética do espaço.',
    features: [
      'Proteção contra quedas acidentais',
      'Material resistente à água e produtos químicos',
      'Fácil remoção para uso da piscina',
      'Sistema de instalação seguro e discreto',
      'Conformidade com normas de segurança aquática'
    ],
    images: [
      'https://images.unsplash.com/photo-1613977256939-eakxrfbts7n',
      'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd'
    ]
  },
  // Add basic data for remaining services with placeholder URLs
  // The actual implementation would populate all service details
  // For brevity, I'm only including a few examples
};

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceData[serviceId || ''] || {
    title: 'Serviço',
    description: 'Detalhes em breve',
    longDescription: 'Informações detalhadas sobre este serviço estarão disponíveis em breve.',
    features: ['Qualidade garantida', 'Instalação profissional'],
    images: ['https://images.unsplash.com/photo-1558002438-ddc106521f24']
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link to="/#services" className="inline-flex items-center text-red-600 hover:text-red-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para serviços
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 p-8 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl">{service.description}</p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detalhes do Serviço</h2>
                <p className="text-gray-600 mb-6">{service.longDescription}</p>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Características</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Solicitar Orçamento
                </Button>
              </div>

              <div className="space-y-4">
                {service.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${service.title} - Imagem ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
