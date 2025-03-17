import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Projects() {
  const { language } = useLanguage();
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch("https://api.github.com/users/lfelipediniz/repos");
        const data = await response.json();
        // Ordena os repositórios pela data de atualização (mais recente primeiro)
        const sortedRepos = data.sort(
          (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        // Seleciona apenas os 5 mais recentes
        setRepos(sortedRepos.slice(0, 5));
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="section-container py-20 px-4">
      <h2 className="section-title mb-8">{t("projects.title", language)}</h2>
      {loading ? (
        <p>{t("projects.loading", language)}</p>
      ) : error ? (
        <p>{t("projects.error", language)}</p>
      ) : repos.length === 0 ? (
        <p>{t("projects.empty", language)}</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <Card key={repo.id} className="overflow-hidden transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{repo.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {repo.description || t("projects.empty", language)}
                </p>
                <Button asChild className="mt-4">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {t("projects.view", language)} <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
