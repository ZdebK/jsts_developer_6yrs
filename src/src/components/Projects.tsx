import { ExternalLink, Github, Folder } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

function ProjectCard({ title, description, technologies, github, demo }: ProjectProps) {
  return (
    <Card className="card--interactive flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="icon-container--warning">
          <Folder className="w-6 h-6" />
        </div>
        <div className="flex gap-2">
          {github && (
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-[#2d2d30] hover:text-[#007acc]"
            >
              <Github className="w-5 h-5" />
            </Button>
          )}
          {demo && (
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-[#2d2d30] hover:text-[#007acc]"
            >
              <ExternalLink className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
      
      <h3 className="text--tertiary mb-3">{title}</h3>
      <p className="text mb-4 flex-1">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text--muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </Card>
  );
}

export function Projects() {
  const { t } = useLanguage();
  
  const projects: ProjectProps[] = [
    {
      title: t("projects.mes.title"),
      description: t("projects.mes.desc"),
      technologies: ["Node.js", "PostgreSQL", "HTML", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: t("projects.puppeteer.title"),
      description: t("projects.puppeteer.desc"),
      technologies: ["Node.js", "Puppeteer", "Cucumber"],
      github: "#",
      demo: "#",
    },
    {
      title: t("projects.aws.title"),
      description: t("projects.aws.desc"),
      technologies: ["Node.js", "AWS SDK", "JavaScript"],
      github: "#",
      demo: "#",
    },
    {
      title: t("projects.zus.title"),
      description: t("projects.zus.desc"),
      technologies: ["React", "HTML", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: t("projects.ai.title"),
      description: t("projects.ai.desc"),
      technologies: ["React", "Node.js", "AI", "Figma API"],
      github: "#",
      demo: "#",
    },
    {
      title: t("projects.shop.title"),
      description: t("projects.shop.desc"),
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker", "WordPress"],
      github: "#",
    },
  ];

  return (
    <section id="projects" className="section section--with-bg">
      <div className="container--large">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-2">
              <span className="text--muted">{"<"}</span>
              <span className="text--secondary">{t("projects.title")}</span>
              <span className="text--muted">{" />"}</span>
            </h2>
            <div className="divider"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
