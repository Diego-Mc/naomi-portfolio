import { MantineProvider, Stack, createEmotionCache } from '@mantine/core'
import { defaultTheme } from './theme'
import { Hero } from './components/Hero/Hero'
import stylisRTLPlugin from 'stylis-plugin-rtl'
import { MyWorks } from './components/MyWorks/MyWorks'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ArtProcess } from './components/ArtProcess/ArtProcess'

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
      <Header />
      <Stack dir="rtl" spacing={0}>
        <Hero />
        <MyWorks />
        <About />
        <Contact />
        <ArtProcess />
        {/* TODO: add newsletter once a solid plan for it is up */}
        {/* <Newsletter /> */}
        <Footer />
      </Stack>
    </MantineProvider>
  )
}
