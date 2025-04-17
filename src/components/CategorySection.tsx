
import { Film, Tv, Newspaper, Star, PlayCircle, TrendingUp } from 'lucide-react';

const categories = [
  { name: 'Filmes', icon: Film, href: '/filmes' },
  { name: 'Séries', icon: Tv, href: '/series' },
  { name: 'Notícias', icon: Newspaper, href: '/noticias' },
  { name: 'Críticas', icon: Star, href: '/criticas' },
  { name: 'Streaming', icon: PlayCircle, href: '/streaming' },
  { name: 'Tendências', icon: TrendingUp, href: '/tendencias' },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-rede-light/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto mb-12">Explore por Categorias</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <a 
              key={category.name}
              href={category.href}
              className="flex flex-col items-center p-5 rounded-lg bg-white shadow-card card-hover text-center"
            >
              <div className="w-12 h-12 rounded-full bg-rede-light flex items-center justify-center mb-3">
                <category.icon className="h-6 w-6 text-rede-primary" />
              </div>
              <span className="font-medium text-rede-dark">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
