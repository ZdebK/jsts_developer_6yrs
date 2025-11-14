import { Briefcase, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";

interface ExperienceItemProps {
  position: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  delay?: number;
}

function ExperienceItem({ position, company, period, description, technologies, delay = 0 }: ExperienceItemProps) {
  return (
    <AnimatedSection delay={delay}>
      <Card className="card card--hover">
        <div className="flex items-start gap-4">
          <div className="icon-container--primary">
            <Briefcase className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1">
              <span className="text--tertiary">{position}</span>
            </h3>
            <p className="text--accent mb-2">{company}</p>
            <div className="flex items-center gap-2 text--muted mb-4">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
            <ul className="space-y-2 mb-4">
              {description.map((item, index) => (
                <li key={index} className="text mb-2 flex gap-2">
                  <span className="text-[#007acc]">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#007acc]/10 text-[#569cd6] rounded border border-[#007acc]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </AnimatedSection>
  );
}

export function Experience() {
  const { t } = useLanguage();
  
  const experiences: ExperienceItemProps[] = [
    {
      position: t("exp.senior"),
      company: t("exp.company1"),
      period: t("exp.period1"),
      description: [
        t("exp.desc1.1"),
        t("exp.desc1.2"),
        t("exp.desc1.3"),
        t("exp.desc1.4"),
        t("exp.desc1.5"),
        t("exp.desc1.6"),
        t("exp.desc1.7"),
        t("exp.desc1.8"),
        t("exp.desc1.9"),
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      position: t("exp.full"),
      company: t("exp.company2"),
      period: t("exp.period2"),
      description: [
        t("exp.desc2.1"),
        t("exp.desc2.2"),
        t("exp.desc2.3"),
        t("exp.desc2.4"),
        t("exp.desc2.5"),
        t("exp.desc2.6"),
      ],
      technologies: ["Angular", "Java", "Microsoft Cognitive Services", "REST API", "Skype/Slack API"],
    },
    {
      position: t("exp.intern"),
      company: t("exp.company3"),
      period: t("exp.period3"),
      description: [
        t("exp.desc3.1"),
        t("exp.desc3.2"),
        t("exp.desc3.3"),
      ],
      technologies: ["HTML", "CSS", "Drupal"],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-2">
              <span className="text--muted">{"<"}</span>
              <span className="text--secondary">{t("exp.title")}</span>
              <span className="text--muted">{" />"}</span>
            </h2>
            <div className="divider"></div>
          </div>
        </AnimatedSection>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
