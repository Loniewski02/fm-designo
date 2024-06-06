export const staggerVariants = {
  initial: {
    scale: 0,
  },
  animate: (index: number) => ({
    scale: 1,
    transition: {
      delay: index * 0.1,
    },
  }),
};
