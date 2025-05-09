
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";

const CommonIssues = () => {
  const issues = [{
    title: "Laptop Mati Total",
    description: "Laptop tidak menyala sama sekali atau menyala sebentar lalu mati"
  }, {
    title: "Overheat & Lemot",
    description: "Laptop cepat panas atau lambat saat digunakan untuk kegiatan sehari-hari"
  }, {
    title: "LCD & Keyboard Rusak",
    description: "Layar bergaris, mati, atau keyboard error dan tidak berfungsi dengan baik"
  }, {
    title: "Data Backup & Anti Virus",
    description: "Penyelamatan data penting dan proteksi dari virus atau malware berbahaya"
  }, {
    title: "Service Mesin & Software",
    description: "Perbaikan hardware rusak dan installasi ulang sistem operasi yang bermasalah"
  }, {
    title: "Printer Bermasalah",
    description: "Printer tidak menyala, macet, hasil cetakan buruk, atau error lainnya"
  }];

  const whatsappLink = "https://wa.me/6287812001104?text=Halo%20Centra%20Computer%20Titiran%2C%20saya%20dari%20landing%20page%20ingin%20konsultasi";
  
  return (
    <section id="issues" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mt-12 text-center">
          <div className="bg-centra-blue rounded-xl p-6 md:p-10 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              99% Kerusakan Bisa Kami Perbaiki!
            </h3>
            <p className="text-white/80 mb-6 text-lg">
              Konsultasikan masalah laptop, komputer atau printer Anda kepada tim teknisi kami untuk solusi terbaik.
            </p>
            <Button 
              size="lg" 
              className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white font-semibold px-6 py-2 w-auto" 
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="mr-2" size={22} />
              Konsultasi Gratis Via WhatsApp
            </Button>
            
            {/* Rating display under the WhatsApp button */}
            <div className="mt-5 flex justify-center">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-5 py-3">
                <div className="flex">
                  {Array(5).fill(null).map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9/5.0</span>
                <span className="text-white/90">berdasarkan 200+ ulasan Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonIssues;
