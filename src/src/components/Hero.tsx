import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { AnimatedElement } from "./AnimatedElement";
import { getSequentialDelay } from "../utils/constants";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section section--full-height">
      <div className="container text-center">
        <AnimatedElement className="mb-6">
        </AnimatedElement>
        
        <AnimatedElement as="h1" delay={getSequentialDelay(1)} className="text-5xl md:text-7xl mb-4">
          <span className="text--tertiary">{t("hero.name").split(" ")[0]}</span>{" "}
          <span className="text--secondary">{t("hero.name").split(" ")[1]}</span>
        </AnimatedElement>
        
        <AnimatedElement as="h2" delay={getSequentialDelay(2)} className="text-2xl md:text-3xl mb-6 text--accent">
          {t("hero.title")}
        </AnimatedElement>
        
        <AnimatedElement delay={getSequentialDelay(3)} className="flex items-center justify-center gap-2 mb-8 text--muted">
          <MapPin className="w-4 h-4" />
          <span>{t("hero.location")}</span>
        </AnimatedElement>
        
        <AnimatedElement as="p" delay={getSequentialDelay(4)} className="text-lg mb-8 max-w-2xl mx-auto text">
          {t("hero.description")}
        </AnimatedElement>
        
        <AnimatedElement delay={getSequentialDelay(5)} className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            className="btn--primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-4 h-4 mr-2" />
            {t("hero.contact")}
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="btn--outline"
          >
            <a href="https://github.com/ZdebK" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="btn--outline"
          >
            <a href="https://www.linkedin.com/in/kas-elzbieciak/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </AnimatedElement>
        
        <AnimatedElement delay={getSequentialDelay(6)} className="mt-6 text--vs-orange">
        </AnimatedElement>
      </div>
    </section>
  );
}
