import { MantineThemeOverride, rem } from '@mantine/core'

export const defaultTheme: MantineThemeOverride = {
  fontFamily: 'Galil',
  lineHeight: '150%',
  black: '#4E3822',
  white: '#ffffff',
  dir: 'rtl',
  headings: {
    sizes: {
      h1: { fontSize: rem(100) },
      h2: { fontSize: rem(60) },
      h3: { fontSize: rem(36) },
      h4: { fontSize: rem(24) },
    },
  },
  globalStyles: (theme) => ({
    html: {
      fontSize: '24px',
    },
  }),
}
