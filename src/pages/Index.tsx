
import React from "react";
import Hero from "../components/Hero";
import ValueProps from "../components/ValueProps";
import Testimonials from "../components/Testimonials";
import CommonIssues from "../components/CommonIssues";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Hero />
        <ValueProps />
        <Testimonials />
        <CommonIssues />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
