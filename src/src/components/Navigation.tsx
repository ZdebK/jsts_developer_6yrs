import { Code2, Menu, X, BookOpen } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: t("nav.about") },
    { id: "experience", label: t("nav.experience") },
    { id: "education", label: t("nav.education") },
    { id: "skills", label: t("nav.skills") },
    { id: "projects", label: t("nav.projects") },
    { id: "contact", label: t("nav.contact") },
  ];

  const handleNavigate = (id: string) => {
    if (id === "learn") {
      navigate("/learn");
      setMobileMenuOpen(false);
      return;
    }
    const onHome = location.pathname === "/" || location.pathname === import.meta.env.BASE_URL;
    if (onHome) {
      scrollToSection(id);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg--card-dark border-b border--default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text--primary" />
            <span className="text--vs-cyan">portfolio.tsx</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="px-4 py-2 button--icon-hover rounded transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Distinct Learn CTA placed after Contact */}
            <button
              onClick={() => handleNavigate("learn")}
              className="ml-2 px-4 py-2 border border--primary-color text--primary button--icon-hover rounded inline-flex items-center gap-2 transition-colors"
              aria-label="Learn"
            >
              <BookOpen className="w-4 h-4" />
              {t("common:nav.learn")}
            </button>
            
            {/* Language Toggle */}
            <div className="ml-2 flex items-center gap-1 border-l border--default pl-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("pl")}
                className={`px-2 py-1 ${
                  language === "pl"
                    ? "bg--primary text-white"
                    : "button--icon-hover"
                }`}
              >
                🇵🇱
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 ${
                  language === "en"
                    ? "bg--primary text-white"
                    : "button--icon-hover"
                }`}
              >
                🇬🇧
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 button--icon-hover rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg--card-dark border-t border--default">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="block w-full text-left px-3 py-2 button--icon-hover rounded transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile distinct Learn CTA after Contact */}
            <button
              onClick={() => handleNavigate("learn")}
              className="mt-1 w-full px-3 py-2 bg--primary text-white rounded inline-flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              <BookOpen className="w-4 h-4" />
              {t("common:nav.learn")}
            </button>
            
            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-2 px-3 py-2 border-t border--default mt-2 pt-3">
              <span className="text--vs-muted">Language:</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("pl")}
                className={`px-3 py-1 ${
                  language === "pl"
                    ? "bg--primary text-white"
                    : "button--icon-hover"
                }`}
              >
                🇵🇱 PL
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 ${
                  language === "en"
                    ? "bg--primary text-white"
                    : "button--icon-hover"
                }`}
              >
                🇬🇧 EN
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
