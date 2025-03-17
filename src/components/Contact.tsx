
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const { language } = useLanguage();
  
  const contacts = [
    {
      type: "email",
      title: t('contact.email', language),
      value: "lfediniz@gmail.com",
      icon: Mail,
      href: "mailto:lfediniz@gmail.com",
    },
    {
      type: "linkedin",
      title: t('contact.linkedin', language),
      value: "lfelipediniz",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lfelipediniz/",
    },
    {
      type: "github",
      title: t('contact.github', language),
      value: "lfelipediniz",
      icon: Github,
      href: "https://github.com/lfelipediniz",
    },
  ];

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">{t('contact.title', language)}</h2>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-center mb-10 text-lg">
          {t('contact.description', language)}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <Card key={contact.type} className="overflow-hidden transition-all hover:shadow-md text-center">
              <CardHeader className="pb-2 flex items-center justify-center">
                <contact.icon className="h-8 w-8 mb-4" />
                <CardTitle>{contact.title}</CardTitle>
                <CardDescription className="truncate max-w-full">
                  {contact.value}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a 
                    href={contact.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-all hover:text-primary"
                  >
                    {contact.type === "email" ? "Send Email" : `Visit ${contact.title}`}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
