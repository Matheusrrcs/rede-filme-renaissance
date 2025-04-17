
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
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full bg-rede-primary shadow-lg hover:bg-rede-secondary transition-all duration-300 animate-fade-in"
        >
          <ChevronUp className="h-5 w-5" />
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
          className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingButtons;
