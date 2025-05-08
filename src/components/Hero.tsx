
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Star } from "lucide-react";

const Hero = () => {
  const whatsappLink = "https://wa.me/6287812001104?text=Halo%20Centra%20Computer%20Titiran%2C%20saya%20dari%20landing%20page%20ingin%20konsultasi";
  
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
          
          {/* Rating display under the WhatsApp button */}
          <div className="mt-5 flex justify-center">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-5 py-3">
              <div className="flex">
                {Array(5).fill(null).map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="font-bold text-white">4.9/5.0</span>
              <span className="text-white/90">berdasarkan 200+ ulasan Google</span>
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
