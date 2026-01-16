
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { HighContrastToggle } from "./HighContrastToggle";
import { useState, useEffect } from "react";

export function Header() {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 glass border-b border-border/50" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-lg font-display font-bold text-foreground"
          >
            Luiz Felipe Diniz Costa
          </a>
          
          <div className="flex items-center space-x-1 sm:space-x-4">
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
                  {t('nav.home', language)}
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
                  {t('nav.about', language)}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">
                  {t('nav.projects', language)}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
                  {t('nav.contact', language)}
                </a>
              </li>
            </ul>
            
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
              <HighContrastToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
