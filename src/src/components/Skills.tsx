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
        "GraphQL",
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
              <span className="text--vs-muted">{"{<}"}</span>
              <span className="text--vs-blue">{t("skills.title")}</span>
              <span className="text--vs-muted">{" />"}</span>
            </h2>
            <div className="h-1 w-20 bg--primary rounded"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card
                className="p-6 bg--card-dark border--default hover:border--hover transition-all hover:scale-105 h-full"
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
                      className="flex items-center gap-2 text--vs-light"
                    >
                      <span className="text--primary">•</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 p-6 bg--card-dark border border--default rounded-lg">
            <p className="text-center text--vs-muted">
              <span className="text--vs-blue">const</span>{" "}
              <span className="text--vs-cyan">skills</span>{" "}
              <span className="text--vs-muted">=</span>{" "}
              <span className="text--vs-orange">[</span>
              <span className="text--vs-light">"ciągłe uczenie się"</span>
              <span className="text--vs-muted">,</span>{" "}
              <span className="text--vs-light">"rozwiązywanie problemów"</span>
              <span className="text--vs-muted">,</span>{" "}
              <span className="text--vs-light">"praca zespołowa"</span>
              <span className="text--vs-orange">]</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
