
import React, { useState } from 'react';
import { Menu, X, Shield, HardHat, Calculator, Home, Phone, Map, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: 'Início', href: '/rede-filme-renaissance', icon: <Home className="h-4 w-4" /> },
    { label: 'Serviços', href: '#services', icon: <Shield className="h-4 w-4" /> },
    { label: 'Empresa', href: '#about', icon: <Map className="h-4 w-4" /> },
    { 
      label: 'Orçamento Online', 
      href: '/orcamento-online', 
      icon: <Calculator className="h-4 w-4" />
    },
    { 
      label: 'Instalador Autorizado', 
      href: '/instalador-autorizado', 
      icon: <HardHat className="h-4 w-4" />
    },
    { label: 'Instagram', href: 'https://www.instagram.com/redefilme', target: '_blank', icon: <MessageCircle className="h-4 w-4" /> }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/rede-filme-renaissance" className="text-xl md:text-2xl font-bold">
          <span className="text-red-600">REDE</span>
          <span className="text-yellow-500">FILME</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          {menuItems.map((item) => (
            item.target ? (
              <a 
                key={item.href} 
                href={item.href} 
                target={item.target}
                className="flex items-center gap-2 text-sm lg:text-base text-gray-800 hover:text-red-600 transition-colors"
              >
                {item.icon}
                {item.label}
              </a>
            ) : (
              <Link 
                key={item.href} 
                to={item.href} 
                className="flex items-center gap-2 text-sm lg:text-base text-gray-800 hover:text-red-600 transition-colors"
              >
                {item.icon}
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            className="relative z-50"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-white z-40">
          <nav className="flex flex-col p-4 space-y-3">
            {menuItems.map((item) => (
              item.target ? (
                <a 
                  key={item.href} 
                  href={item.href}
                  target={item.target}
                  className="flex items-center gap-3 py-3 text-lg text-gray-800 hover:bg-red-50 rounded-lg px-4"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={item.href} 
                  to={item.href}
                  className="flex items-center gap-3 py-3 text-lg text-gray-800 hover:bg-red-50 rounded-lg px-4"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
