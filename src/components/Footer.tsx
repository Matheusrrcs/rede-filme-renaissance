
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, url: '#' },
    { icon: Instagram, url: '#' },
    { icon: Twitter, url: '#' },
    { icon: Linkedin, url: '#' }
  ];

  const quickLinks = [
    { label: 'Início', url: '#home' },
    { label: 'Serviços', url: '#services' },
    { label: 'Empresa', url: '#about' },
    { label: 'Contato', url: '#contact' }
  ];

  return (
    <footer className="bg-red-700 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Rede Proteção</h3>
          <p className="text-white/80">
            Soluções completas em redes de proteção, garantindo segurança e tranquilidade para sua família e empresa.
          </p>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">Links Rápidos</h4>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-white/80 hover:text-yellow-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contato</h4>
          <address className="not-italic text-white/80">
            <p>Av. Luis Viana, 6462</p>
            <p>Wall Street, Paralela</p>
            <p>Salvador - CEP: 41.730-101</p>
            <p className="mt-4">Tel: (71) 99990-9797</p>
            <p>Email: contato@redefilme.com</p>
          </address>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-red-600 text-center">
        <p className="text-white/60">
          © {currentYear} Rede Proteção. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
