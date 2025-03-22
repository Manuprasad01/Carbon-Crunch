
// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
// import { cn } from '../lib/utils';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-center pb-6">
          <Link to="#" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-carbon-green rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">C</span>
            </div> */}
             <div className="w-8 h-8 overflow-hidden rounded-full">
            <img 
              src={logo}
              alt="Carboncrunch Logo" 
              className="w-full h-full object-cover"
            />
          </div>
            <span className="text-xl font-semibold text-gray-800">Carboncrunch</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Case Studies', 'Reviews'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-gray-500 hover:text-carbon-green transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Team', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-gray-500 hover:text-carbon-green transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Blog', 'Guides', 'Events', 'Help Center'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-gray-500 hover:text-carbon-green transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Terms', 'Privacy', 'Cookies', 'Settings'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-gray-500 hover:text-carbon-green transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Carboncrunch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
