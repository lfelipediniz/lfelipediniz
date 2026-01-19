import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";

export function HighContrastToggle() {
  const { theme, setTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is only rendered client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isHighContrast = theme === 'high-contrast';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isHighContrast ? 'light' : 'high-contrast')}
      className={`relative overflow-hidden transition-all duration-300 w-10 h-10 ${
        isHighContrast 
          ? 'rounded-md border-2 border-[hsl(60,100%,50%)] bg-transparent' 
          : 'rounded-md border border-input hover:bg-accent hover:text-accent-foreground'
      }`}
      aria-label="Toggle High Contrast"
      title={t('header.toggleHighContrast', language)}
    >
      <span className="sr-only">Toggle High Contrast</span>
      <Eye className={`h-5 w-5 transition-all ${theme === 'light' ? 'text-[hsl(0,100%,35%)]' : 'text-[hsl(60,100%,50%)]'} ${!isHighContrast ? 'scale-100 opacity-100' : 'scale-0 opacity-0 absolute'}`} />
      <EyeOff className={`h-5 w-5 transition-all ${theme === 'light' ? 'text-[hsl(0,100%,35%)]' : 'text-[hsl(60,100%,50%)]'} ${isHighContrast ? 'scale-100 opacity-100' : 'scale-0 opacity-0 absolute'}`} />
    </Button>
  );
}
