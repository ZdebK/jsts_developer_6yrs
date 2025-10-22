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
    <Card className="p-6 bg-[#252526] border-[#3e3e42] hover:border-[#007acc] transition-all hover:scale-105 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-[#c586c0]/10 rounded-lg">
          <Folder className="w-6 h-6 text-[#c586c0]" />
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
      
      <h3 className="text-[#dcdcaa] mb-3">{title}</h3>
      <p className="text-[#d4d4d4] mb-4 flex-1">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-[#858585]"
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
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.desc"),
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      github: "#",
      demo: "#",
    },
    {
      title: t("projects.task.title"),
      description: t("projects.task.desc"),
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "AWS"],
      github: "#",
      demo: "#",
    },
    {
      title: t("projects.social.title"),
      description: t("projects.social.desc"),
      technologies: ["React", "D3.js", "Express", "Redis", "Chart.js"],
      github: "#",
      demo: "#",
    },
    {
      title: t("projects.weather.title"),
      description: t("projects.weather.desc"),
      technologies: ["Vue.js", "OpenWeather API", "Leaflet", "PWA"],
      github: "#",
      demo: "#",
    },
    {
      title: t("projects.blog.title"),
      description: t("projects.blog.desc"),
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: t("projects.fitness.title"),
      description: t("projects.fitness.desc"),
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl mb-2">
              <span className="text-[#858585]">{"<"}</span>
              <span className="text-[#569cd6]">{t("projects.title")}</span>
              <span className="text-[#858585]">{" />"}</span>
            </h2>
            <div className="h-1 w-20 bg-[#007acc] rounded"></div>
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
