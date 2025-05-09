import React from "react";
import { Instagram, Facebook } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-white mb-4">Centra Computer Titiran</h3>
          <p className="mb-4 max-w-lg">
            Servis laptop, Macbook, komputer & printer profesional. Dipercaya sejak 2013 dengan teknisi berpengalaman dan harga terjangkau.
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <a href="https://instagram.com/centracomputer.titiran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/titiran.servicelaptopterbaikdibandung" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </a>
          </div>
          
          <address className="not-italic text-center mb-6">
            
            
            
            
          </address>
        </div>
        
        <div className="border-t border-gray-800 mt-4 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Centra Computer Titiran. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;