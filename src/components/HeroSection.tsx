
import React, { useState, useRef } from 'react';
import { ShieldCheck, Phone, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center mb-4 space-x-2">
            <ShieldCheck className="h-8 w-8 text-white" />
            <span className="text-lg font-medium">Proteção Profissional</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções Completas em Redes de Proteção
          </h1>
          <p className="text-lg text-white/80 mb-8">
            Oferecemos serviços especializados em redes de proteção para diversos ambientes. 
            Segurança, qualidade e tranquilidade para você.
          </p>
          <div className="flex space-x-4">
            <Button size="lg" className="bg-yellow-500 text-white hover:bg-yellow-400">
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white bg-white/10 hover:bg-white/30 hover:text-red-600 flex items-center"
            >
              <Phone className="mr-2" /> Contato
            </Button>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="relative rounded-lg shadow-xl overflow-hidden">
            <video 
              ref={videoRef}
              className="object-cover h-[500px] w-full"
              muted
              loop
              poster="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1280&q=80"
            >
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
            
            <button 
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center text-red-600 transition-transform transform group-hover:scale-110">
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8 ml-1" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
