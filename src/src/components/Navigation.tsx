import { Code2, Menu, X, Newspaper } from "lucide-react";
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
    if (id === "blog") {
      navigate("/blog");
      setMobileMenuOpen(false);
      return;
    }
    const onHome = location.pathname === "/" || location.pathname === import.meta.env.BASE_URL;
    if (onHome) {
      scrollToSection(id);
    } else {
      // Navigate to home with hash to trigger browser scroll
      window.location.href = `${import.meta.env.BASE_URL}#${id}`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#252526] border-b border-[#3e3e42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-[#007acc]" />
            <span className="text-[#4ec9b0]">portfolio.tsx</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="px-4 py-2 hover:bg-[#2d2d30] rounded transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Distinct Blog CTA placed after Contact */}
            <button
              onClick={() => handleNavigate("blog")}
              className="ml-2 px-4 py-2 border border-[#007acc] text-[#007acc] hover:bg-[#1f2937]/40 rounded inline-flex items-center gap-2 transition-colors"
              aria-label="Blog"
            >
              <Newspaper className="w-4 h-4" />
              {t("nav.blog")}
            </button>
            
            {/* Language Toggle */}
            <div className="ml-2 flex items-center gap-1 border-l border-[#3e3e42] pl-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("pl")}
                className={`px-2 py-1 ${
                  language === "pl"
                    ? "bg-[#007acc] text-white"
                    : "hover:bg-[#2d2d30]"
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
                    ? "bg-[#007acc] text-white"
                    : "hover:bg-[#2d2d30]"
                }`}
              >
                🇬🇧
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-[#2d2d30] rounded"
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
        <div className="md:hidden bg-[#252526] border-t border-[#3e3e42]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="block w-full text-left px-3 py-2 hover:bg-[#2d2d30] rounded transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile distinct Blog CTA after Contact */}
            <button
              onClick={() => handleNavigate("blog")}
              className="mt-1 w-full px-3 py-2 bg-[#007acc] text-white rounded inline-flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              <Newspaper className="w-4 h-4" />
              {t("nav.blog")}
            </button>
            
            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-2 px-3 py-2 border-t border-[#3e3e42] mt-2 pt-3">
              <span className="text-[#858585]">Language:</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage("pl")}
                className={`px-3 py-1 ${
                  language === "pl"
                    ? "bg-[#007acc] text-white"
                    : "hover:bg-[#2d2d30]"
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
                    ? "bg-[#007acc] text-white"
                    : "hover:bg-[#2d2d30]"
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
