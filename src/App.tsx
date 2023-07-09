import { Grid, MantineProvider, createEmotionCache } from '@mantine/core'
import { defaultTheme } from './theme'
import { Hero } from './components/Hero/Hero'
import stylisRTLPlugin from 'stylis-plugin-rtl'
import { MyWorks } from './components/MyWorks/MyWorks'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [stylisRTLPlugin],
})

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={defaultTheme}
      emotionCache={rtlCache}>
      <Grid dir="rtl">
        <Hero />
        <MyWorks />
        <About />
        <Contact />
      </Grid>
    </MantineProvider>
  )
}
