
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-centra-blue/10 text-centra-blue hover:bg-centra-blue/20 text-sm py-1 px-3">
            Hubungi Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Lokasi & Kontak
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Kunjungi toko kami atau manfaatkan layanan jemput-antar gratis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <Card className="border-none shadow-sm h-full">
              <CardContent className="p-0">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Centra Computer Titiran</h3>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-centra-blue mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">Jl. Titiran No.10, Bandung</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Phone className="h-5 w-5 text-centra-blue mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">0878-1200-1104</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <MessageCircle className="h-5 w-5 text-centra-blue mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">0878-1200-1104</p>
                        <p className="text-sm text-gray-500">Respon cepat via WhatsApp</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Clock className="h-5 w-5 text-centra-blue mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">Senin–Sabtu: 07.00–20.00 WIB</p>
                        <p className="text-sm text-gray-500">Dilayani oleh customer service kami</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center pt-2">
                      <p className="text-gray-600 mr-3">Social Media:</p>
                      <a 
                        href="https://instagram.com/centracomputer.titiran" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-centra-blue mr-3"
                      >
                        <Instagram size={20} />
                      </a>
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-centra-blue"
                      >
                        <Facebook size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white w-full"
                      onClick={() => window.open("https://wa.me/6287812001104", "_blank")}
                    >
                      <MessageCircle className="mr-2" size={18} />
                      Hubungi via WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-7">
            <div className="h-full rounded-xl overflow-hidden border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6885351430728!2d107.64944107476883!3d-6.927743693051591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e80be50278b1%3A0x6317f9ab7f3b5e0a!2sJl.%20Titiran%20No.10%2C%20Turangga%2C%20Kec.%20Lengkong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040264!5e0!3m2!1sen!2sid!4v1683531160149!5m2!1sen!2sid" 
                width="100%"
                height="100%"
                style={{ minHeight: '350px', border: 0 }}
                title="Centra Computer Titiran Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
