import { Heart, Code } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 px-4 border-t border-[#3e3e42] bg-[#252526]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4 text-[#858585]">
          <Code className="w-4 h-4" />
          <span>{t("footer.made")}</span>
          <Heart className="w-4 h-4 text-[#f48771] fill-[#f48771]" />
          <span>{t("footer.and")}</span>
        </div>
        <p className="text-[#858585]">
          © {new Date().getFullYear()} {t("hero.name")}. {t("footer.rights")}
        </p>
        <div className="mt-4 text-[#858585]">
          <span className="text-[#569cd6]">{"// "}</span>
          {t("footer.designed")}
        </div>
      </div>
    </footer>
  );
}
