
import React, { useState } from 'react';
import { Menu, X, FileText, HardHat, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: 'Início', href: '/', icon: <FileText className="h-4 w-4" /> },
    { label: 'Serviços', href: '#services', icon: <FileText className="h-4 w-4" /> },
    { label: 'Empresa', href: '#about', icon: <FileText className="h-4 w-4" /> },
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
    { label: 'Instagram', href: 'https://www.instagram.com/redefilme', target: '_blank', icon: <FileText className="h-4 w-4" /> }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-red-600">REDE</span>
          <span className="text-yellow-500">FILME</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            item.target ? (
              <a 
                key={item.href} 
                href={item.href} 
                target={item.target}
                className="flex items-center gap-2 text-gray-800 hover:text-red-600 transition-colors"
              >
                {item.icon}
                {item.label}
              </a>
            ) : (
              <Link 
                key={item.href} 
                to={item.href} 
                className="flex items-center gap-2 text-gray-800 hover:text-red-600 transition-colors"
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
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <nav className="flex flex-col p-4 space-y-2">
            {menuItems.map((item) => (
              item.target ? (
                <a 
                  key={item.href} 
                  href={item.href}
                  target={item.target}
                  className="flex items-center gap-2 py-2 text-gray-800 hover:bg-red-50 rounded"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={item.href} 
                  to={item.href}
                  className="flex items-center gap-2 py-2 text-gray-800 hover:bg-red-50 rounded"
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
