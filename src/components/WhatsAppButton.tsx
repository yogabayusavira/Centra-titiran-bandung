
import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/6287812001104?text=Halo%20Centra%20Computer%20Titiran%2C%20saya%20ingin%20konsultasi%20tentang%20";
  
  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-50 bg-whatsapp-green hover:bg-whatsapp-green/90 text-white rounded-full p-3.5 shadow-lg flex items-center justify-center transition-transform hover:scale-105"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
