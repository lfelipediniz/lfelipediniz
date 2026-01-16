
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ThemeProvider } from "@/hooks/useTheme";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Projects } from "@/components/Projects";

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <footer className="py-6 border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Luiz Felipe Diniz Costa
            </div>
          </footer>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
