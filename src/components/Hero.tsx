
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const whatsappLink = "https://wa.me/6287812001104?text=Halo%20Centra%20Computer%20Titiran%2C%20saya%20ingin%20konsultasi%20tentang%20";

  return (
    <section className="relative bg-gradient-to-br from-centra-blue to-centra-dark-blue text-white py-16 md:py-24">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-6 bg-white text-centra-blue hover:bg-white/90 text-base py-1.5 px-4 font-medium">
            Service Laptop & Komputer Terpercaya Sejak 2013
          </Badge>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Gratis Cek Kondisi Laptop + Jemput Antar Servisan!
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Centra Computer Titiran – Solusi Cepat & Aman untuk Laptop, Macbook & Printer Anda di Bandung.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              size="lg" 
              className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white font-semibold text-lg px-6 py-6 rounded-lg w-full sm:w-auto"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="mr-2" size={22} />
              WhatsApp Sekarang
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white hover:bg-white/90 text-centra-blue border-2 border-white font-semibold text-lg px-6 py-6 rounded-lg w-full sm:w-auto"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Lokasi & Informasi
            </Button>
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
    </section>
  );
};

export default Hero;
