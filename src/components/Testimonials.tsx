
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const whatsappTestimonials = [
    "/lovable-uploads/56c964a1-2c15-45aa-b3d4-e490cd179c88.png",
    "/lovable-uploads/fd66d095-a67d-4041-85af-97dc2adfc2c8.png",
    "/lovable-uploads/57570b69-250f-4777-b388-683ad87ecfaf.png",
    "/lovable-uploads/cc34d3f2-135c-44d8-966b-1ca56a9d1364.png",
    "/lovable-uploads/95adab9a-36ec-4ba0-ace1-abbfb7199945.png",
    "/lovable-uploads/990bc7dc-ad04-46c2-9435-d8f4de3e421b.png"
  ];
  
  const googleTestimonials = [
    "/lovable-uploads/8f88c22d-9662-4571-9899-c8da79610d9d.png",
    "/lovable-uploads/701242f6-01c2-4d54-aa4e-1952903b6caa.png",
    "/lovable-uploads/fc3bc50b-f6ec-4c56-8b0d-2f8fea26f7be.png",
    "/lovable-uploads/078e06e2-8cbd-44c5-8f80-109b373495dd.png",
    "/lovable-uploads/eeca3601-e719-446e-9599-19d10c128a1a.png",
    "/lovable-uploads/307af6c0-8b5e-4e20-9cc2-4bb8830ef28c.png",
    "/lovable-uploads/bd46b0d4-9601-4e82-b130-da9b19f163d6.png"
  ];
  
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-centra-blue/10 text-centra-blue hover:bg-centra-blue/20 text-sm py-1 px-3">
            Apa Kata Mereka
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Testimoni Pelanggan
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Berdasarkan pengalaman nyata pelanggan yang telah menggunakan layanan kami
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">WhatsApp Testimonials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatsappTestimonials.map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={src} 
                  alt={`WhatsApp Testimonial ${index + 1}`} 
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Google Reviews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {googleTestimonials.map((src, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-3">
                  <img 
                    src={src} 
                    alt={`Google Review ${index + 1}`} 
                    className="w-full h-auto object-cover rounded"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button variant="default" className="bg-centra-blue hover:bg-centra-blue/90" onClick={() => window.open("https://maps.app.goo.gl/e1WQ6tFpWefPnXMn6", "_blank")}>
            Lihat Lebih Banyak Review <ExternalLink className="ml-1" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
