
import React from 'react';
import { 
  Cat, Home, Waves, Baby, 
  MoveDown, Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Lista de serviços principais a serem exibidos na página inicial
const mainServices = [
  { icon: Cat, title: 'Animais', description: 'Proteção para animais de estimação', link: '/services/animais' },
  { icon: Home, title: 'Varandas', description: 'Proteção para varandas e sacadas', link: '/services/varandas' },
  { icon: Play, title: 'Quadras', description: 'Redes para quadras esportivas', link: '/services/quadras' },
  { icon: Waves, title: 'Piscinas', description: 'Proteção para áreas de piscina', link: '/services/piscinas' },
  { icon: Baby, title: 'Crianças', description: 'Segurança para crianças e bebês', link: '/services/criancas' },
  { icon: MoveDown, title: 'Escadas', description: 'Proteção para escadarias', link: '/services/escadas' },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em redes de proteção para diversos ambientes e necessidades.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {mainServices.map((service, index) => (
            <Link 
              to={service.link}
              key={index} 
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="mb-4 flex justify-center">
                <service.icon 
                  className="h-12 w-12 text-red-600 group-hover:text-yellow-500 transition-colors" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Button 
                variant="outline" 
                className="mt-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                Ver Detalhes
              </Button>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center flex justify-center">
          <Link to="/todos-servicos">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 flex items-center gap-2"
            >
              Ver Todos os Serviços
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
