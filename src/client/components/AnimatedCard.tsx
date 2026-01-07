import { ReactNode } from "react";
import { Card } from "./ui/card";
import { AnimatedSection } from "./AnimatedSection";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hover?: boolean;
}

export function AnimatedCard({ children, delay = 0, className = "", hover = true }: AnimatedCardProps) {
  const cardClass = hover ? "card card--hover" : "card";
  
  return (
    <AnimatedSection delay={delay}>
      <Card className={`${cardClass} ${className}`.trim()}>
        {children}
      </Card>
    </AnimatedSection>
  );
}
