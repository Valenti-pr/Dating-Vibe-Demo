export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

export const cardHover = {
  whileHover: { y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" },
  whileTap: { scale: 0.97 }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const themeToggleIcon = {
  hidden: { rotateY: 90, opacity: 0, scale: 0.9 },
  visible: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
  exit: {
    rotateY: -90,
    opacity: 0,
    scale: 0.9,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  }
};

