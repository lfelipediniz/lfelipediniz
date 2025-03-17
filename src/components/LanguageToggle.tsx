
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is only rendered client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
      className="font-medium text-sm"
      aria-label="Toggle language"
    >
      <span className="sr-only">Toggle language</span>
      {language === 'en' ? 'PT' : 'EN'}
    </Button>
  );
}
