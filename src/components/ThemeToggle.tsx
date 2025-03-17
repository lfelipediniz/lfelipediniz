
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is only rendered client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative overflow-hidden rounded-full w-10 h-10 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <Sun className={`h-5 w-5 transition-all ${theme === 'light' ? 'scale-100 opacity-100' : 'scale-0 opacity-0 absolute'}`} />
      <Moon className={`h-5 w-5 transition-all ${theme === 'dark' ? 'scale-100 opacity-100' : 'scale-0 opacity-0 absolute'}`} />
    </Button>
  );
}
