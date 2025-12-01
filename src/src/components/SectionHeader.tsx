import { AnimatedSection } from "./AnimatedSection";

interface SectionHeaderProps {
  title: string;
  delay?: number;
}

export function SectionHeader({ title, delay = 0 }: SectionHeaderProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl mb-2">
          <span className="text--vs-muted">{"<"}</span>
          <span className="text--vs-blue">{title}</span>
          <span className="text--vs-muted">{" />"}</span>
        </h2>
        <div className="h-1 w-20 bg--primary rounded"></div>
      </div>
    </AnimatedSection>
  );
}
