import { MantineThemeOverride, rem } from '@mantine/core'

export const defaultTheme: MantineThemeOverride = {
  fontFamily: 'Rubik',
  lineHeight: 'normal',
  black: '#4E3822',
  white: '#FCF2EC',
  dir: 'rtl',
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
