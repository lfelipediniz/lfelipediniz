import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";

export function HighContrastToggle() {
  const { theme, setTheme } = useTheme();
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
      className="relative overflow-hidden rounded-full w-10 h-10 transition-all duration-300"
      aria-label="Toggle High Contrast"
      title="High Contrast Mode"
    >
      <span className="sr-only">Toggle High Contrast</span>
      <Eye className={`h-5 w-5 transition-all ${!isHighContrast ? 'scale-100 opacity-100' : 'scale-0 opacity-0 absolute'}`} />
      <EyeOff className={`h-5 w-5 transition-all ${isHighContrast ? 'scale-100 opacity-100' : 'scale-0 opacity-0 absolute'}`} />
    </Button>
  );
}
