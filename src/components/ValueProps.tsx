
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, Check, Map, Star, Truck, User } from "lucide-react";

const ValueProps = () => {
  const valueProps = [
    {
      icon: <Calendar className="h-10 w-10 text-centra-blue" />,
      title: "Dipercaya Sejak 2013",
      description: "Lebih dari 10 tahun pengalaman melayani pelanggan di Bandung"
    },
    {
      icon: <Star className="h-10 w-10 text-centra-blue" />,
      title: "Google Rating 4.9",
      description: "Dari ratusan ulasan pelanggan puas di Google Maps"
    },
    {
      icon: <User className="h-10 w-10 text-centra-blue" />,
      title: "Teknisi Profesional",
      description: "Tim ahli berpengalaman dengan standar kualitas tinggi"
    },
    {
      icon: <Check className="h-10 w-10 text-centra-blue" />,
      title: "Garansi Resmi",
      description: "Garansi untuk semua layanan servis yang kami berikan"
    },
    {
      icon: <Map className="h-10 w-10 text-centra-blue" />,
      title: "Harga Terjangkau",
      description: "Biaya servis transparan tanpa biaya tersembunyi"
    },
    {
      icon: <Truck className="h-10 w-10 text-centra-blue" />,
      title: "Gratis Antar Jemput",
      description: "Layanan pickup & delivery untuk area Bandung"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-centra-blue/10 text-centra-blue hover:bg-centra-blue/20 text-sm py-1 px-3">Keunggulan Kami</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mengapa Memilih Centra Computer?</h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Kami hadir dengan solusi terbaik untuk kebutuhan servis laptop, komputer, dan printer di Bandung
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md flex flex-col items-center text-center"
            >
              <div className="p-3 bg-blue-50 rounded-full mb-4">
                {prop.icon}
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="bg-centra-blue/5 border border-centra-blue/20 rounded-lg p-4 md:p-6 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:w-auto">
                <div className="bg-white shadow-sm p-3 rounded-lg inline-flex items-center justify-center">
                  <div className="text-4xl font-bold text-centra-blue">11+</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Tahun Melayani Masyarakat Bandung</h3>
                <p className="text-gray-600">
                  Dipercaya sejak 2013, Centra Computer telah membantu ribuan pelanggan menyelesaikan masalah pada laptop, komputer, dan printer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
