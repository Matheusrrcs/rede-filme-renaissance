
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cat, Home, Waves, Shield, Building, 
  BookOpen, Bird, Grid, Film, Package,
  Fence, Lock, Mountain, Baby, MoveDown, 
  Bath, Construction, Trees, Play, ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const serviceList = [
  { icon: Cat, title: 'Animais', description: 'Proteção para animais de estimação', link: '/services/animais' },
  { icon: Home, title: 'Varandas', description: 'Proteção para varandas e sacadas', link: '/services/varandas' },
  { icon: Play, title: 'Quadras', description: 'Redes para quadras esportivas', link: '/services/quadras' },
  { icon: Waves, title: 'Piscinas', description: 'Proteção para áreas de piscina', link: '/services/piscinas' },
  { icon: Baby, title: 'Crianças', description: 'Segurança para crianças e bebês', link: '/services/criancas' },
  { icon: MoveDown, title: 'Escadas', description: 'Proteção para escadarias', link: '/services/escadas' },
  { icon: Bath, title: 'Morcegos', description: 'Prevenção contra morcegos', link: '/services/morcegos' },
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

const AllServices = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link to="/#services" className="inline-flex items-center text-red-600 hover:text-red-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para página inicial
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Todos os Nossos Serviços
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossa lista completa de serviços de proteção e segurança para diversas necessidades.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {serviceList.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader className="flex flex-col items-center pb-3">
                <service.icon className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle className="text-lg text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center pt-0">
                <Link to={service.link}>
                  <Button 
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  >
                    Ver Detalhes
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
