
import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GalleryHorizontal } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/220540c2-2fc4-4761-9347-cf133cd47528.png",
      alt: "Centra Computer staff providing home service"
    },
    {
      src: "/lovable-uploads/4f4ba6d9-b2fb-446b-b167-3067a7f7c4cc.png",
      alt: "Technician repairing device"
    },
    {
      src: "/lovable-uploads/caa1fbcc-a523-48f3-85f5-7ec3d139e1e8.png",
      alt: "Circuit board repair with microscope"
    },
    {
      src: "/lovable-uploads/015992de-cbcd-48a3-a27a-36f58bfda525.png",
      alt: "Centra Computer store front"
    },
    {
      src: "/lovable-uploads/d05cebb0-ae8a-47c0-9acd-b4986604f71e.png",
      alt: "Centra Computer staff"
    },
    {
      src: "/lovable-uploads/9f600518-a375-495d-9522-9a36d21c5f09.png",
      alt: "Technician on service call"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-centra-blue/10 text-centra-blue hover:bg-centra-blue/20 text-sm py-1 px-3">
            Galeri
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Aktivitas Kami
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Lihat berbagai aktivitas layanan dan fasilitas Centra Computer
          </p>
        </div>

        {/* Mobile view: Simple grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <AspectRatio ratio={3/4} className="bg-slate-50">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="object-cover w-full h-full rounded-lg" 
                />
              </AspectRatio>
            </div>
          ))}
        </div>

        {/* Desktop view: Carousel */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-xl shadow-md">
                    <AspectRatio ratio={3/4} className="bg-slate-50">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative translate-y-0 left-0 mr-2" />
              <CarouselNext className="relative translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>

        <div className="flex justify-center items-center mt-8 gap-1.5 text-centra-blue">
          <GalleryHorizontal className="h-5 w-5" />
          <span className="font-medium">Swipe untuk melihat lebih banyak</span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
