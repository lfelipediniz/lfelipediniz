import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe, ArrowRight } from "lucide-react";

interface FeaturedProjectCardProps {
  title: string;
  description: string;
  youtubeUrl: string;
  githubUrl: string;
  siteUrl?: string;
  date: string;
}

export function FeaturedProjectCard({
  title,
  description,
  youtubeUrl,
  githubUrl,
  siteUrl,
  date,
}: FeaturedProjectCardProps) {
  // Extract video ID from YouTube URL
  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
      <div className="relative aspect-video w-full">
        <iframe
          src={getYoutubeEmbedUrl(youtubeUrl)}
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <span className="text-sm text-muted-foreground whitespace-nowrap">{date}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <p className="text-muted-foreground text-sm flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 mt-auto pt-4">
          <Button asChild variant="outline" size="sm" className="gap-2">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          {siteUrl && (
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a href={siteUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
                Site
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
