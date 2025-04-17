
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="sticky top-0 z-50 w-full glass-effect">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient-to-r from-rede-primary to-rede-secondary">
                <span className="text-rede-primary">Rede</span>
                <span className="text-rede-secondary font-bold">Filme</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="/" className="nav-link active">Home</a>
            <a href="/filmes" className="nav-link">Filmes</a>
            <a href="/series" className="nav-link">Séries</a>
            <a href="/noticias" className="nav-link">Notícias</a>
            <a href="/criticas" className="nav-link">Críticas</a>
            <a href="/streaming" className="nav-link">Streaming</a>
          </nav>
          
          {/* Search and Mobile Menu Buttons */}
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <Search className="h-5 w-5 text-rede-dark" />
            </Button>
            
            <button 
              className="md:hidden flex items-center"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-rede-dark" />
              ) : (
                <Menu className="h-6 w-6 text-rede-dark" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3 bg-white">
            <a href="/" className="nav-link active">Home</a>
            <a href="/filmes" className="nav-link">Filmes</a>
            <a href="/series" className="nav-link">Séries</a>
            <a href="/noticias" className="nav-link">Notícias</a>
            <a href="/criticas" className="nav-link">Críticas</a>
            <a href="/streaming" className="nav-link">Streaming</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
