
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const whatsappLink = "https://wa.me/6287812001104?text=Halo%20Centra%20Computer%20Titiran%2C%20saya%20ingin%20konsultasi%20tentang%20";
  
  return <section className="relative mt-16 md:mt-20 bg-centra-blue text-white py-16 md:py-24 overflow-hidden">
      {/* Background image with blue tint overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1679501072696-9e7c538d71f9?q=80&w=1974')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 1
    }} />
      <div className="absolute inset-0 bg-gradient-to-br from-centra-blue to-centra-dark-blue opacity-90 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-6 bg-white text-centra-blue hover:bg-white/90 text-base py-1.5 px-4 font-medium">
            Service Laptop & Komputer Terpercaya Sejak 2013
          </Badge>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Gratis Cek Kondisi Laptop
&
Gratis Antar Jemput Daerah Bandung</h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90">Gratis konsultasi dengan admin kami tentang kondisi laptop anda klik disini</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white font-semibold text-lg px-6 py-6 rounded-lg w-full sm:w-auto" onClick={() => window.open(whatsappLink, "_blank")}>
              <MessageCircle className="mr-2" size={22} />
              WhatsApp Sekarang
            </Button>
          </div>
          
          {/* Added element from testimonials */}
          <div className="mt-6">
            <div className="flex items-center gap-2 bg-white rounded-full px-5 py-3 shadow-sm border border-gray-100 mx-auto inline-flex">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden flex items-center justify-center">
                    <span className="text-xs text-gray-500 font-medium">👤</span>
                  </div>
                ))}
              </div>
              <span className="text-gray-800 text-sm font-medium">Konsultasi Gratis Via WhatsApp</span>
            </div>
          </div>
          
          <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="font-medium">
              <span className="text-whatsapp-green font-bold">✓</span> Konsultasi Gratis &nbsp; 
              <span className="text-whatsapp-green font-bold">✓</span> Jemput Antar Gratis &nbsp;
              <span className="text-whatsapp-green font-bold">✓</span> Bergaransi
            </p>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
