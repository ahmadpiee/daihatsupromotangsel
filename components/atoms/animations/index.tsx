import styled from '@emotion/styled'

export const Hide = styled.div`
  overflow: hidden;
`

// framer motion
// const easing = [0.6, -0.09, 0.06, 0.99];

export const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const fadeInUp = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.75,
    },
  },
}

export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    x: 300,
    transition: {
      duration: 0.5,
    },
  },
}

export const titleAnimation = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const photoAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.75,
    },
  },
}

export const animateContainer = {
  hidden: { x: 100 },
  show: {
    x: 0,
    transition: { duration: 0.75, ease: 'easeOut', staggerChildren: 0.75 },
  },
}
