import { easeInOut } from "framer-motion";

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
};
export const fadeSide = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay:0.3,
      duration:0.3,
      ease: easeInOut,
    },
  },
};
export const fadeSideleft = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay:0.3,
      duration:0.3,
      ease: easeInOut,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
