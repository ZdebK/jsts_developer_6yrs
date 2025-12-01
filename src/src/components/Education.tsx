import { GraduationCap, Calendar, Award } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { SectionHeader } from "./SectionHeader";
import { AnimatedCard } from "./AnimatedCard";
import { getStaggerDelay, ANIMATION_DELAYS } from "../utils/constants";

export function Education() {
  const { t } = useLanguage();
  
  const education = [
    {
      degree: t("edu.master"),
      school: t("edu.school"),
      period: t("edu.period1"),
      description: t("edu.master.spec"),
    },
    {
      degree: t("edu.bachelor"),
      school: t("edu.school"),
      period: t("edu.period2"),
      description: t("edu.bachelor.spec"),
    },
  ];

  const certifications: string[] = [
    // "AWS Certified Developer",
    // "Google Cloud Professional Developer",
    // "MongoDB Certified Developer",
    // "Scrum Master Certification",
  ];

  return (
    <section id="education" className="section section--with-bg">
      <div className="container">
        <SectionHeader title={t("edu.title")} />

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

        {/* Certifications section commented out - not real certifications
        <AnimatedSection delay={ANIMATION_DELAYS.NORMAL}>
          <Card className="card">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text--vs-orange" />
              <h3 className="text--tertiary">{t("edu.certs")}</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text"
                >
                  <span className="text--primary">▹</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedSection>
        */}
      </div>
    </section>
  );
}
