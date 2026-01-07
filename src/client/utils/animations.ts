// Reusable Framer Motion animation variants

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

// Helper function to create fade-in-up with custom delay
export const fadeInUpWithDelay = (delay: number) => ({
  ...fadeInUp,
  transition: { duration: 0.6, delay },
});

// Standard transition durations
export const transitions = {
  fast: { duration: 0.3 },
  normal: { duration: 0.6 },
  slow: { duration: 0.9 },
};

// Stagger children animation
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
