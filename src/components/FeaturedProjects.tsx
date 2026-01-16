import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { FeaturedProjectCard } from "./FeaturedProjectCard";

export function FeaturedProjects() {
  const { language } = useLanguage();

  const projects = [
    {
      title: "Grind ICMC",
      description: t("projects.grind.description", language),
      youtubeUrl: "https://www.youtube.com/watch?v=1odrxT0l5Pc",
      githubUrl: "https://github.com/Grind-ICMC",
      siteUrl: "https://grindicmc.netlify.app/",
      date: t("projects.grind.date", language),
    },
    {
      title: "Vox",
      description: t("projects.vox.description", language),
      youtubeUrl: "https://www.youtube.com/watch?v=xgcCpoKeptg",
      githubUrl: "https://github.com/lfelipediniz/Vox",
      date: t("projects.vox.date", language),
    },
    {
      title: "Tá Certo Isso AI?",
      description: t("projects.tacerto.description", language),
      youtubeUrl: "https://youtu.be/Tr7s_vxDnKk",
      githubUrl: "https://github.com/TaCertoIssoAI",
      siteUrl: "https://tacertoissoai.com.br/",
      date: t("projects.tacerto.date", language),
    },
    {
      title: "Risum",
      description: t("projects.risum.description", language),
      youtubeUrl: "https://www.youtube.com/watch?v=Jtxi2K-Cvvw",
      githubUrl: "https://github.com/Risum-Corporation",
      date: t("projects.risum.date", language),
    },
  ];

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-6">{t("projects.featured.title", language)}</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <FeaturedProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
