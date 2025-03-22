
import  { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import image1 from '../assets/image1.png'

const HeroSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          observer.unobserve(entry.target);
        }
      });
    });
    
    const blurDivs = document.querySelectorAll('.blur-load');
    blurDivs.forEach(div => {
      observer.observe(div);
    });
    
    return () => {
      blurDivs.forEach(div => {
        observer.unobserve(div);
      });
    };
  }, []);

  return (
    <section className="pt-28 pb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 bg-black text-white text-xs font-medium rounded-full mb-5">
              NEW FEATURES
            </span>
            {/* <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Optimize your eco reporting with <span className="text-carbon-orange bg-orange-100 px-3 py-1 rounded-md">CARBON CRUNCH</span>
            </h1> */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
              Optimize your eco reporting with
            </h1>
            <div className="text-white bg-carbon-orange px-3 py-2 rounded-full inline-block mb-4">
              <span className="text-4xl md:text-5xl font-bold">CARBON CRUNCH</span>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              25% Accurate Carbon Calculations Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/free-calculator" className="btn-secondary">
                Free Calculator
              </Link>
              <Link to="/book-demo" className="btn-primary">
                Book Demo
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div 
              className="blur-load relative rounded-xl overflow-hidden shadow-xl"
              style={{ backgroundImage: `url( ${image1})`}}
            >
              <img 
                ref={imageRef}
                src={image1} 
                alt="Sprouting plant representing carbon footprint reduction" 
                className="w-full h-auto object-cover rounded-xl hero-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
