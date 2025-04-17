
import React from 'react';
import { Users, CheckCircle, Target } from 'lucide-react';

const About = () => {
  const features = [
    { 
      icon: Users, 
      title: 'Equipe Especializada', 
      description: 'Profissionais treinados e certificados em instalação de redes de proteção.'
    },
    { 
      icon: CheckCircle, 
      title: 'Qualidade Garantida', 
      description: 'Utilizamos materiais de alta qualidade e técnicas modernas de instalação.'
    },
    { 
      icon: Target, 
      title: 'Soluções Personalizadas', 
      description: 'Adaptamos nossos serviços para atender às necessidades específicas de cada cliente.'
    }
  ];

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            Sobre Nossa Empresa
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Somos uma empresa especializada em venda e instalação de redes de proteção, 
            comprometida com a segurança e o bem-estar de nossos clientes. 
            Nossa equipe é formada por supervisores, montadores e projetistas altamente treinados.
          </p>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <feature.icon className="h-8 w-8 text-red-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <img 
            src="https://images.unsplash.com/photo-1593786685410-5a74c7c6dd24" 
            alt="Equipe de Trabalho" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
