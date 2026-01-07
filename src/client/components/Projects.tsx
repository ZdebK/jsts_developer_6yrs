import { ExternalLink, Github, Folder } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";
import { getStaggerDelay } from "../utils/constants";

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
              asChild
              variant="ghost"
              size="icon"
              className="button--icon-hover"
            >
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="View GitHub repository">
                <Github className="w-5 h-5" />
              </a>
            </Button>
          )}
          {demo && (
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="button--icon-hover"
            >
              <a href={demo} target="_blank" rel="noopener noreferrer" aria-label="View demo">
                <ExternalLink className="w-5 h-5" />
              </a>
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
      title: t("projects:mes.title"),
      description: t("projects:mes.desc"),
      technologies: ["Node.js", "PostgreSQL", "HTML", "CSS"],
    },
    {
      title: t("projects:puppeteer.title"),
      description: t("projects:puppeteer.desc"),
      technologies: ["Node.js", "Puppeteer", "Cucumber"],
    },
    {
      title: t("projects:aws.title"),
      description: t("projects:aws.desc"),
      technologies: ["Node.js", "AWS SDK", "JavaScript"],
      github: "https://github.com/ZdebK/projektopol",
      demo: "https://github.com/ZdebK/projektopol/blob/master/media/demo.mp4",
    },
    {
      title: t("projects:zus.title"),
      description: t("projects:zus.desc"),
      technologies: ["React", "HTML", "CSS"],
      github: "https://github.com/ZdebK/projectPOLX2",
      demo: "https://github.com/ZdebK/projectPOLX2/tree/main/demo",
    },
    {
      title: t("projects:ai.title"),
      description: t("projects:ai.desc"),
      technologies: ["React", "Node.js", "AI", "Figma API", "Vitest", "Playwright"
      ],
      github: "https://github.com/ZdebK/jsts_developer_6yrs",
      demo: "https://zdebk.github.io/jsts_developer_6yrs",
    },
    {
      title: t("projects:shop.title"),
      description: t("projects:shop.desc"),
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker", "WordPress"],
    },
    {
      title: t("projects:weather.title"),
      description: t("projects:weather.desc"),
      technologies: ["Node.js", "GraphQL", "PostgreSQL", "React", "Weatherstack API"],
      github: "https://github.com/ZdebK/wheather_app"
    },
    {
      title: t("projects:where2watch.title"),
      description: t("projects:where2watch.desc"),
      technologies: ["React 17", "Tailwind CSS", "PostgreSQL", "NestJS", "Node.js", "TypeORM"],
      github: "https://github.com/ZdebK/where2watch"
    }
  ];

  return (
    <section id="projects" className="section section--with-bg">
      <div className="container--large">
        <SectionHeader title={t("projects:title")} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={getStaggerDelay(index)}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
