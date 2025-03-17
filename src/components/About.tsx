
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Code } from "lucide-react";

export function About() {
  const { language } = useLanguage();
  
  const skills = [
    { name: 'Python', color: 'bg-blue-500' },
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'React', color: 'bg-sky-500' },
    { name: 'C++', color: 'bg-indigo-500' },
    { name: 'Machine Learning', color: 'bg-purple-500' },
    { name: 'Data Science', color: 'bg-emerald-500' },
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">{t('about.title', language)}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                {t('about.education.title', language)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">{t('about.education.usp', language)}</h4>
                <p className="text-sm text-muted-foreground">{t('about.education.usp.date', language)}</p>
              </div>
              <div>
                <h4 className="font-medium">{t('about.education.etec', language)}</h4>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                {t('about.skills.title', language)}
              </CardTitle>
              <CardDescription>
                {t('about.skills.description', language)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill.name} className={`${skill.color} hover:${skill.color}/90 text-white`}>
                    {skill.name}
                  </Badge>
                ))}
              </div>
              <p className="text-sm">{t('about.skills.focus', language)}</p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              {t('about.experience.title', language)}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-medium">{t('about.experience.fusp.title', language)}</h4>
              <p className="text-sm text-muted-foreground">{t('about.experience.fusp.date', language)}</p>
              <p className="text-sm">{t('about.experience.fusp.description', language)}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">{t('about.experience.data.title', language)}</h4>
              <p className="text-sm text-muted-foreground">{t('about.experience.data.date', language)}</p>
              <p className="text-sm">{t('about.experience.data.description', language)}</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">{t('about.experience.semcomp.title', language)}</h4>
              <p className="text-sm text-muted-foreground">{t('about.experience.semcomp.date', language)}</p>
              <p className="text-sm">{t('about.experience.semcomp.description', language)}</p>
            </div>
            
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
