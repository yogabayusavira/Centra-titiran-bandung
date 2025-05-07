import React from "react";
import { Instagram, Facebook } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <h3 className="text-xl font-bold text-white mb-4">Centra Computer Titiran</h3>
            <p className="mb-4">
              Servis laptop, Macbook, komputer & printer profesional. Dipercaya sejak 2013 dengan teknisi berpengalaman dan harga terjangkau.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com/centracomputer.titiran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Servis Laptop</a></li>
              <li><a href="#" className="hover:text-white">Servis Macbook</a></li>
              <li><a href="#" className="hover:text-white">Servis Komputer</a></li>
              <li><a href="#" className="hover:text-white">Servis Printer</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold text-white mb-4">Kontak & Lokasi</h4>
            <address className="not-italic">
              <p className="mb-2">Jl. Titiran No.10, Bandung</p>
              <p className="mb-2">Telepon: 0878-1200-1104</p>
              <p className="mb-2">WhatsApp: 0878-1200-1104</p>
              <p>Senin–Sabtu: 09.30–19.00 WIB</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Centra Computer Titiran. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;