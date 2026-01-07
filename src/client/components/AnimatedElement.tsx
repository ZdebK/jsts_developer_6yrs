
import { motion, HTMLMotionProps } from "motion/react";
import { ReactNode, ElementType } from "react";


interface AnimatedElementProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  as?: ElementType
}

export function AnimatedElement({ 
  children, 
  delay = 0, 
  duration = 0.6,
  as = "div",
  ...props 
}: AnimatedElementProps) {
  // Use motion's dynamic component rendering
  const MotionComponent = motion(as as ElementType);
  return (
    <MotionComponent
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
