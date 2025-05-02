
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Harganya jauh lebih terjangkau & cepat. Laptop saya kembali seperti baru dalam 2 hari saja.",
      location: "Ujung Berung",
      rating: 5
    },
    {
      quote: "Teknisi datang langsung & jelaskan detail kerusakan dengan sabar. Komunikasinya jelas dan tidak membingungkan.",
      location: "Banjaran",
      rating: 5
    },
    {
      quote: "Awalnya ragu, tapi super amanah & transparan. Servis laptop error blue screen langsung tuntas. Rekomendasikan!",
      location: "Tangerang",
      rating: 5
    },
    {
      quote: "Laptop bermasalah saat meeting penting, teknisi Centra datang langsung ke kantor dalam 1 jam. Sangat membantu!",
      location: "Dago, Bandung",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(null)
      .map((_, i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ));
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 text-lg mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="bg-centra-blue/10 h-8 w-8 rounded-full flex items-center justify-center text-centra-blue font-bold mr-3">
                    {testimonial.location.charAt(0)}
                  </div>
                  <div className="text-sm text-gray-500">Pelanggan dari {testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-2 bg-white rounded-full px-5 py-3 shadow-sm border border-gray-100">
            <div className="flex">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-gray-800">4.9/5.0</span>
            <span className="text-gray-500">berdasarkan 100+ ulasan Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
