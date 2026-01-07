import { motion, HTMLMotionProps } from "motion/react";
import { ReactNode } from "react";

interface AnimatedElementProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimatedElement({ 
  children, 
  delay = 0, 
  duration = 0.6,
  as = "div",
  ...props 
}: AnimatedElementProps) {
  const Component = motion[as] as typeof motion.div;
  
  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </Component>
  );
}
