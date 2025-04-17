
import { Play, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-rede-dark">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070')",
          backgroundPosition: "center 25%",
          filter: "brightness(0.3)"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-rede-dark/90 to-transparent" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <div className="flex items-center mb-4 space-x-2">
            <span className="px-3 py-1 bg-rede-accent text-white text-sm rounded-full font-medium">Em destaque</span>
            <span className="flex items-center text-white/80 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date().toLocaleDateString('pt-BR')}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-montserrat">
            Duna: Parte 2 supera expectativas e conquista bilheteria mundial
          </h1>
          
          <p className="text-white/80 text-lg mb-6">
            Épico de ficção científica dirigido por Denis Villeneuve já arrecadou mais de $630 milhões globalmente, tornando-se um dos maiores sucessos de 2024.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-rede-secondary hover:bg-rede-primary text-white">
              Leia a matéria
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Play className="mr-2 h-5 w-5" /> Assistir trailer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
