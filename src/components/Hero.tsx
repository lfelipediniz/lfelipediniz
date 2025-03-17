
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  const { language } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full text-center space-y-6 animate-fade-in-slow">
        <div className="flex justify-center mb-6">
          <Avatar className="h-36 w-36 border-2 border-primary/20">
            <AvatarImage 
              src="https://avatars.githubusercontent.com/u/61145881?v=4" 
              alt="Luiz Felipe Diniz Costa" 
            />
            <AvatarFallback>LFD</AvatarFallback>
          </Avatar>
        </div>
        <p className="text-lg font-medium text-foreground/70 animate-slide-up [animation-delay:200ms]">
          {t('hero.greeting', language)}
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-gradient animate-slide-up [animation-delay:300ms]">
          {t('hero.name', language)}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/80 animate-slide-up [animation-delay:400ms]">
          {t('hero.title', language)}
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-slide-up [animation-delay:500ms]">
          {t('hero.subtitle', language)}
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-up [animation-delay:600ms]">
          <Button asChild className="rounded-full px-6 py-6 h-auto text-base transition-all duration-300 hover:bg-primary/90">
            <a href="#about">
              {t('nav.about', language)} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            className="rounded-full px-6 py-6 h-auto text-base border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
          >
            <a 
              href="https://bit.ly/luiz-felipe-curriculo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FileDown className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              {t('hero.download', language)}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
