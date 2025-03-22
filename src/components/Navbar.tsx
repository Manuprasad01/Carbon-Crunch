
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
    )}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 overflow-hidden rounded-full">
            <img 
              src="/images/logo.png" 
              alt="Carboncrunch Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-gray-800">Carboncrunch</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'Blog', 'About Us', 'Contact'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
              className="text-sm text-gray-600 hover:text-carbon-green transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <Link 
            to="/login" 
            className="text-sm font-medium px-4 py-1.5 rounded-full bg-green-50 text-carbon-green hover:bg-green-100 transition-colors"
          >
            Login
          </Link>
          <Link 
            to="/get-started" 
            className="text-sm text-white font-medium px-4 py-1.5 rounded-full bg-carbon-green hover:bg-green-600 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
