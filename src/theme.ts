import { MantineThemeOverride, rem } from '@mantine/core'

export const defaultTheme: MantineThemeOverride = {
  fontFamily: 'Rubik',
  lineHeight: 'normal',
  black: '#4E3822',
  white: '#FCF2EC',
  dir: 'rtl',
  colors: {
    brand: [
      '#FEFEFE', //white
      '#DDD0C8', //light bg
      '#FCF2EC', //bg
      '#BFA18E', //dark bg
      '#323232', //dark gray
      '#000000', //black
      '#4E3822', //brown
      '#278B72', //green
      '#E65B69', //red
      '#C50E82', //to set
    ],
  },
  primaryColor: 'brand',
  primaryShade: 5,
  headings: {
    fontFamily: 'Galil',
    sizes: {
      h1: { fontSize: rem(100), lineHeight: 'normal' },
      h2: { fontSize: rem(60), lineHeight: 'normal' },
      h3: { fontSize: rem(36), lineHeight: 'normal' },
      h4: { fontSize: rem(24), lineHeight: 'normal' },
      h5: { fontSize: rem(16), lineHeight: 'normal' },
    },
  },
  globalStyles: () => ({
    html: {},
  }),
}

export const MARGIN_X = 80
export const HEADER_HEIGHT = 80
