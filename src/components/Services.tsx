
import React from 'react';
import { 
  Cat, Home, Water, Shield, Building, 
  BookOpen, Bird, Grid, Film, Package,
  Fence, Lock, Mountain, Baby, Stairs, 
  Bat, Construction, Trees, Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const serviceList = [
  { icon: Cat, title: 'Animais', description: 'Proteção para animais de estimação', link: '/services/animais' },
  { icon: Home, title: 'Varandas', description: 'Proteção para varandas e sacadas', link: '/services/varandas' },
  { icon: Play, title: 'Quadras', description: 'Redes para quadras esportivas', link: '/services/quadras' },
  { icon: Water, title: 'Piscinas', description: 'Proteção para áreas de piscina', link: '/services/piscinas' },
  { icon: Baby, title: 'Crianças', description: 'Segurança para crianças e bebês', link: '/services/criancas' },
  { icon: Stairs, title: 'Escadas', description: 'Proteção para escadarias', link: '/services/escadas' },
  { icon: Bat, title: 'Morcegos', description: 'Prevenção contra morcegos', link: '/services/morcegos' },
  { icon: Construction, title: 'Obras', description: 'Redes de segurança para construções', link: '/services/obras' },
  { icon: Trees, title: 'Parques', description: 'Proteção para áreas de lazer', link: '/services/parques' },
  { icon: Bird, title: 'Pombos', description: 'Prevenção contra pombos', link: '/services/pombos' },
  { icon: Grid, title: 'Rede', description: 'Redes de proteção diversas', link: '/services/rede' },
  { icon: Grid, title: 'Tela', description: 'Telas de proteção para diversos fins', link: '/services/tela' },
  { icon: Film, title: 'Pelicula', description: 'Películas de proteção', link: '/services/pelicula' },
  { icon: Package, title: 'Kit', description: 'Kits completos de proteção', link: '/services/kit' },
  { icon: Fence, title: 'Alambrado', description: 'Alambrados de segurança', link: '/services/alambrado' },
  { icon: Lock, title: 'Securifor', description: 'Sistema Securifor de proteção', link: '/services/securifor' },
  { icon: Fence, title: 'Nylofor', description: 'Gradil Nylofor para segurança', link: '/services/nylofor' },
  { icon: Fence, title: 'Concertina', description: 'Concertinas de segurança', link: '/services/concertina' },
  { icon: Mountain, title: 'Talude', description: 'Proteção para taludes', link: '/services/talude' }
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {serviceList.map((service, index) => (
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
      </div>
    </section>
  );
};

export default Services;
