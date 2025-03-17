import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Importando o botão novamente

export function Projects() {
  const { language } = useLanguage();
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showAll, setShowAll] = useState(false); // Controla a exibição de todos os projetos

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/lfelipediniz/repos"
        );
        const data = await response.json();
        // Ordena os repositórios pela data de atualização (mais recente primeiro)
        const sortedRepos = data.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        setRepos(sortedRepos); // Exibe todos os repositórios
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const handleShowAllClick = () => {
    setShowAll(true); // Exibe todos os projetos
  };

  const handleShowLessClick = () => {
    setShowAll(false); // Exibe apenas os 6 primeiros projetos
  };

  const displayedRepos = showAll ? repos : repos.slice(0, 6); // Exibe os 6 primeiros ou todos

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
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedRepos.map((repo) => (
              <Card
                key={repo.id}
                className="overflow-hidden transition-all hover:shadow-md flex flex-col justify-between"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {repo.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm">
                    {repo.description || t("projects.empty", language)}
                  </p>
                </CardContent>
                <Button
                  asChild
                  className="mt-4 self-start mb-4 ml-auto mr-3 button-soft"
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.view", language)}{" "}
                    <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
          <br />
          <div className="mt-4 text-center">
            {!showAll ? (
              <p
                onClick={handleShowAllClick}
                className="hover:underline cursor-pointer"
                style={{ color: "var(--primary)" }}
              >
                {t("projects.viewAll", language)}{" "}
              </p>
            ) : (
              <p
                onClick={handleShowLessClick}
                className="hover:underline cursor-pointer"
                style={{ color: "var(--primary)" }}
              >
                {t("projects.viewLess", language)}{" "}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
