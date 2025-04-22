
import React, { useState, useEffect } from 'react';
import { ChevronUp, MessageSquare } from 'lucide-react';
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
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full w-14 h-14 bg-rede-primary hover:bg-rede-secondary shadow-lg transition-all duration-300 animate-fade-in group"
        >
          <ChevronUp className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
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
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 group"
        >
          <MessageSquare className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingButtons;
