import { Code, Database, Wrench, Cloud } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

export function Skills() {
  const { t } = useLanguage();
  
  const skillCategories: SkillCategory[] = [
    {
      title: t("skills.frontend"),
      icon: <Code className="w-6 h-6" />,
      color: "#569cd6",
      skills: [
        "React",
        "Angular",
        "TypeScript",
        "JavaScript",
        "SCSS/Sass",
        "HTML/CSS",
        "Vite",
        "Redux",
      ],
    },
    {
      title: t("skills.backend"),
      icon: <Database className="w-6 h-6" />,
      color: "#4ec9b0",
      skills: [
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "REST API",
        "Microservices",
        "npm/yarn",
        "JWT",
        "AWS SDK",
      ],
    },
    {
      title: t("skills.devops"),
      icon: <Cloud className="w-6 h-6" />,
      color: "#ce9178",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Git",
        "GitHub Actions",
        "PM2",
        "Nginx",
      ],
    },
    {
      title: t("skills.other"),
      icon: <Wrench className="w-6 h-6" />,
      color: "#dcdcaa",
      skills: [
        "Agile/Scrum",
        "TDD",
        "Microservices",
        "Puppeteer",
        "Mocha/Chai",
        "JMeter",
        "Figma",
        "Jira",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-2">
              <span className="text-[#858585]">{"<"}</span>
              <span className="text-[#569cd6]">{t("skills.title")}</span>
              <span className="text-[#858585]">{" />"}</span>
            </h2>
            <div className="h-1 w-20 bg-[#007acc] rounded"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card
                className="p-6 bg-[#252526] border-[#3e3e42] hover:border-[#007acc] transition-all hover:scale-105 h-full"
              >
                <div
                  className="flex items-center gap-3 mb-4"
                  style={{ color: category.color }}
                >
                  {category.icon}
                  <h3>{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 text-[#d4d4d4]"
                    >
                      <span className="text-[#007acc]">•</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 p-6 bg-[#252526] border border-[#3e3e42] rounded-lg">
            <p className="text-center text-[#858585]">
              <span className="text-[#569cd6]">const</span>{" "}
              <span className="text-[#4ec9b0]">skills</span>{" "}
              <span className="text-[#858585]">=</span>{" "}
              <span className="text-[#ce9178]">[</span>
              <span className="text-[#d4d4d4]">"ciągłe uczenie się"</span>
              <span className="text-[#858585]">,</span>{" "}
              <span className="text-[#d4d4d4]">"rozwiązywanie problemów"</span>
              <span className="text-[#858585]">,</span>{" "}
              <span className="text-[#d4d4d4]">"praca zespołowa"</span>
              <span className="text-[#ce9178]">]</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
