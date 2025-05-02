
import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Berapa lama proses servis laptop/komputer?",
      answer: "Waktu servis bervariasi tergantung tingkat kerusakan. Servis ringan seperti instalasi ulang selesai dalam 1-2 jam. Untuk kerusakan hardware biasanya 1-3 hari kerja. Kami selalu memberikan estimasi waktu yang jelas sebelum memulai servis."
    },
    {
      question: "Apakah ada garansi untuk servis yang dilakukan?",
      answer: "Ya, semua servis yang kami lakukan mendapatkan garansi resmi. Garansi untuk software minimal 7 hari dan untuk hardware minimal 30 hari tergantung jenis perbaikan. Detail garansi akan dijelaskan sebelum memulai servis."
    },
    {
      question: "Bagaimana cara booking servis di Centra Computer?",
      answer: "Anda bisa menghubungi kami melalui WhatsApp atau telepon di 0878-1200-1104. Tim kami akan merespon cepat dan membantu Anda dengan konsultasi gratis, dilanjutkan dengan jemput servis gratis untuk area Bandung."
    },
    {
      question: "Di mana lokasi Centra Computer Titiran?",
      answer: "Lokasi kami berada di Jl. Titiran No.10, Bandung. Anda bisa datang langsung atau gunakan layanan jemput-antar gratis kami untuk area Bandung. Tim teknisi juga bisa datang ke lokasi Anda untuk pengecekan dan perbaikan."
    },
    {
      question: "Apakah ada biaya pengecekan perangkat?",
      answer: "Tidak, kami menyediakan layanan pengecekan GRATIS untuk semua jenis laptop, komputer, dan printer. Anda hanya membayar jika setuju dengan estimasi biaya perbaikan yang kami berikan setelah pengecekan."
    },
    {
      question: "Apakah jasa servis tersedia untuk semua merek laptop?",
      answer: "Ya, kami melayani servis untuk semua merek laptop (Asus, Acer, Lenovo, HP, Dell, dll), MacBook, serta berbagai jenis printer. Tim teknisi kami terlatih untuk menangani berbagai jenis perangkat dengan berbagai masalah."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-centra-blue/10 text-centra-blue hover:bg-centra-blue/20 text-sm py-1 px-3">
            Info Tambahan
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pertanyaan Umum
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Jawaban untuk pertanyaan yang sering ditanyakan oleh pelanggan
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm border">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-0">
                <AccordionTrigger className="px-6 py-4 text-gray-800 hover:text-centra-blue hover:no-underline font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-10 text-center text-gray-600">
          <p className="text-lg">
            Punya pertanyaan lain? <a href="https://wa.me/6287812001104" className="text-centra-blue font-semibold hover:underline">Hubungi tim kami</a> untuk informasi lebih lanjut.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
