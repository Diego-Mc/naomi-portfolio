import { MantineThemeOverride, rem } from '@mantine/core'

export const defaultTheme: MantineThemeOverride = {
  fontFamily: 'Assistant',
  lineHeight: '150%',
  black: '#4E3822',
  white: '#fffdf6',
  dir: 'rtl',
  headings: {
    fontFamily: 'Galil',
    sizes: {
      h1: { fontSize: rem(100) },
      h2: { fontSize: rem(60) },
      h3: { fontSize: rem(36) },
      h4: { fontSize: rem(24) },
    },
  },
  globalStyles: (theme) => ({
    html: {},
  }),
}
