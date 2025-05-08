
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const whatsappLink = "https://wa.me/6287812001104?text=Halo%20Centra%20Computer%20Titiran%2C%20saya%20dari%20landing%20page%20ingin%20konsultasi";
  
  const navigationMenuTriggerStyle = cn(
    "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-centra-blue focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  );

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm border-b">
      <div className="container-custom py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/8416ef54-e12c-439e-b22f-5d0050979d6a.png" alt="Centra Titiran Logo" className="h-12 w-12" />
          <span className="font-heading font-bold text-xl md:text-2xl text-centra-dark-blue">Centra Titiran</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle} 
                  onClick={() => scrollToSection("services")}
                  href="#services"
                >
                  Layanan
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle} 
                  onClick={() => scrollToSection("testimonials")}
                  href="#testimonials"
                >
                  Testimoni
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle} 
                  onClick={() => scrollToSection("issues")}
                  href="#issues"
                >
                  Kerusakan
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle} 
                  onClick={() => scrollToSection("faq")}
                  href="#faq"
                >
                  FAQ
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle} 
                  onClick={() => scrollToSection("contact")}
                  href="#contact"
                >
                  Kontak
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button 
            size="sm"
            className="bg-whatsapp-green hover:bg-whatsapp-green/90 text-white font-medium"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <MessageCircle className="mr-1" size={18} />
            WhatsApp
          </Button>
        </div>

        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden"
          onClick={() => scrollToSection("contact")}
        >
          Kontak
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
