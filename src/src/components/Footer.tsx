import { Heart, Code } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 px-4 border-t border--default bg--card-dark">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4 text--vs-muted">
          <Code className="w-4 h-4" />
          <span>{t("common:footer.made")}</span>
          <Heart className="w-4 h-4 text--error fill--error" />
          <span>{t("common:footer.and")}</span>
        </div>
        <p className="text--vs-muted">
          © {new Date().getFullYear()} {t("hero.name")}. {t("common:footer.rights")}
        </p>
        <div className="mt-4 text--vs-muted">
          <span className="text--vs-blue">{"// "}</span>
          {t("common:footer.designed")}
        </div>
      </div>
    </footer>
  );
}
