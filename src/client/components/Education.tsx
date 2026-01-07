import { GraduationCap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { SectionHeader } from "./SectionHeader";
import { AnimatedCard } from "./AnimatedCard";
import { getStaggerDelay } from "../utils/Constants";

export function Education() {
  const { t } = useLanguage();
  
  const education = [
    {
      degree: t("education:master"),
      school: t("education:school"),
      period: t("education:period1"),
      description: t("education:master_spec"),
    },
    {
      degree: t("education:bachelor"),
      school: t("education:school"),
      period: t("education:period2"),
      description: t("education:bachelor_spec"),
    },
  ];

  return (
    <section id="education" className="section section--with-bg">
      <div className="container">
        <SectionHeader title={t("education:title")} />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {education.map((edu, index) => (
            <AnimatedCard key={index} delay={getStaggerDelay(index)} className="h-full">
              <div className="flex items-start gap-4">
                  <div className="icon-container--accent">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text--tertiary mb-1">{edu.degree}</h3>
                    <p className="text--accent mb-2">{edu.school}</p>
                    <p className="text--muted mb-2">{edu.period}</p>
                    <p className="text">{edu.description}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
