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

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "Scrum Master Certification",
  ];

  return (
    <section id="education" className="py-20 px-4 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-2">
              <span className="text-[#858585]">{"<"}</span>
              <span className="text-[#569cd6]">{t("edu.title")}</span>
              <span className="text-[#858585]">{" />"}</span>
            </h2>
            <div className="h-1 w-20 bg-[#007acc] rounded"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {education.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="p-6 bg-[#252526] border-[#3e3e42] hover:border-[#007acc] transition-colors h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#4ec9b0]/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-[#4ec9b0]" />
                  </div>
                  <div>
                    <h3 className="text-[#dcdcaa] mb-1">{edu.degree}</h3>
                    <p className="text-[#4ec9b0] mb-2">{edu.school}</p>
                    <p className="text-[#858585] mb-2">{edu.period}</p>
                    <p className="text-[#d4d4d4]">{edu.description}</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <Card className="p-6 bg-[#252526] border-[#3e3e42]">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-[#ce9178]" />
              <h3 className="text-[#dcdcaa]">{t("edu.certs")}</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[#d4d4d4]"
                >
                  <span className="text-[#007acc]">▹</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
