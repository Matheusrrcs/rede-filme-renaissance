
import React, { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add smooth scrolling to all elements
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const toggleVisibility = () => {
      // If user scrolled down more than 300px, show the button
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 flex flex-col gap-3 md:gap-4 z-50">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full w-12 h-12 md:w-14 md:h-14 bg-yellow-500 hover:bg-rede-secondary shadow-lg transition-all duration-300 animate-fade-in group"
        >
          <ChevronUp className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
        </Button>
      )}
      
      <a 
        href="https://wa.me/5500000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <Button
          size="icon"
          className="rounded-full w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 group"
        >
          <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingButtons;
