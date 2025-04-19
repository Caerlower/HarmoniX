
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-harmonix-purple to-harmonix-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-white font-display font-bold text-xl">HarmoniX</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a>
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#use-cases" className="text-gray-300 hover:text-white transition">Use Cases</a>
              <a href="#team" className="text-gray-300 hover:text-white transition">Team</a>
              <button className="btn-primary">
                Start Minting
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#how-it-works" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
            >
              How It Works
            </a>
            <a 
              href="#features" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
            >
              Features
            </a>
            <a 
              href="#use-cases" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
            >
              Use Cases
            </a>
            <a 
              href="#team" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
            >
              Team
            </a>
            <div className="pt-2">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-full btn-primary"
              >
                Start Minting
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
