import { GraduationCap, Award } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";

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
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-2">
              <span className="text--muted">{"<"}</span>
              <span className="text--secondary">{t("edu.title")}</span>
              <span className="text--muted">{" />"}</span>
            </h2>
            <div className="divider"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {education.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="card card--hover h-full">
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
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications section commented out - not real certifications
        <AnimatedSection delay={0.2}>
          <Card className="card">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[#ce9178]" />
              <h3 className="text--tertiary">{t("edu.certs")}</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text"
                >
                  <span className="text-[#007acc]">▹</span>
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
