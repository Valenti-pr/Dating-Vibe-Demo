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

export const likeButtonTap = {
  whileTap: { scale: 0.97 }
};

export const likeHeartPop = {
  animate: { scale: [1, 1.25, 1] },
  transition: { type: "spring", stiffness: 300, damping: 16 }
};

export const numberBump = {
  hidden: { y: 6, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  }
};

export const floatingCard = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 4 + i * 0.7,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

export const likePill = {
  notLiked: {
    boxShadow: "0 0 0 rgba(0,0,0,0)",
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
  liked: {
    boxShadow: "0 0 0 1px rgba(255,255,255,0.18), 0 0 40px rgba(236,72,153,0.18)",
    transition: { type: "spring", stiffness: 300, damping: 25 }
  }
};

export const buttonPress = {
  whileTap: { scale: 0.98 }
};

export const layoutSpring = {
  type: "spring",
  stiffness: 300,
  damping: 25
} as const;

