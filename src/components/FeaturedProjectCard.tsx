import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe, Play } from "lucide-react";

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
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    return url.split('v=')[1] || url.split('/').pop() || '';
  };

  const videoId = getVideoId(youtubeUrl);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
      <div className="relative aspect-video w-full bg-black/5">
        {!isPlaying ? (
          <button
            onClick={() => setIsPlaying(true)}
            className="group relative w-full h-full flex items-center justify-center cursor-pointer overflow-hidden"
            aria-label={`Play video for ${title}`}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={`Thumbnail for ${title}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition-transform duration-300 group-hover:scale-110 pl-1">
              <Play className="w-8 h-8 fill-current" />
            </div>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={title}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
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
