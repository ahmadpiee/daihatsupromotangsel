import { extendTheme } from '@chakra-ui/react'
import { ChakraConfig } from '@utils/dist/interface/chakra-config'
import { mode } from '@chakra-ui/theme-tools'

const config: ChakraConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const colors = {
  black: {
    main: '#0a0a0a',
    dark: '#000',
    light: '#141414',
  },
  blue: {
    main: '#001aff',
    light: '#12bddb',
  },
  white: {
    main: '#FFFFFF',
  },
  pinkGradient:
    'radial-gradient(circle, rgba(242,246,255,1) 0%, rgba(179,119,193,1) 100%)',
  whiteGradient:
    'linear-gradient(90deg, rgba(233,233,233,1) 0%, rgba(255,255,255,1) 50%, rgba(233,233,233,1) 100%)',
  darkGradient:
    'linear-gradient(90deg, rgba(38,47,58,1) 0%, rgba(16,17,26,1) 50%, rgba(38,47,58,1) 100%)',
  BlueTopFade:
    'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(255,255,255,1) 100%)',
  GreyTopFade:
    'linear-gradient(0deg, rgba(77,77,77,1) 0%, rgba(255,255,255,1) 100%)',
  BlackTopFade:
    'linear-gradient(0deg, rgba(0,0,0,1) 23%, rgba(255,255,255,1) 100%)',
  facebook: '#1977F3',
  twitter: '#1DA1F2',
}

const styles = {
  global: (props: any) => ({
    body: {
      color: mode(colors.black.light, 'whiteAlpha.900')(props),
      bg: mode(
        colors.whiteGradient,
        colors.darkGradient, // dark mode
      )(props),
    },
  }),
}

const theme = extendTheme({
  config,
  styles,
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'DM Sans', sans-serif`,
    // arabic: `'Noto Naskh Arabic', sans-serif`,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
})

export default theme
