export const animations = {
  scaleUp: {
    initial: {
      scale: 0,
      opacity: 0,
    },
    final: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
      },
    },
  },

  slideFromTop: {
    initial: {
      y: '-10vw',
      opacity: 0,
    },

    final: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 40,
      },
    },
  },

  slideFromRight: {
    initial: {
      x: '-100vw',
      opacity: 0,
    },

    final: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 30,
      },
    },
  },

  slideFromLeft: {
    initial: {
      x: '10vw',
      opacity: 0,
    },

    final: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 40,
      },
    },
  },

  opacity: {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration: 1.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { ease: 'easeInOut' },
    },
  },
};
