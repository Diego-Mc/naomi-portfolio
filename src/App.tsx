import { Box, MantineProvider, Stack, createEmotionCache } from '@mantine/core'
import { defaultTheme } from './theme'
import { Hero } from './components/Hero/Hero'
import stylisRTLPlugin from 'stylis-plugin-rtl'
import { MyWorks } from './components/MyWorks/MyWorks'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ArtProcess } from './components/ArtProcess/ArtProcess'
import { useScrollIntoView } from '@mantine/hooks'

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [stylisRTLPlugin],
})

export default function App() {
  const heroNavOptions = useScrollIntoView<HTMLDivElement>({ offset: 60 })
  const myWorksNavOptions = useScrollIntoView<HTMLDivElement>({ offset: 60 })
  const aboutNavOptions = useScrollIntoView<HTMLDivElement>({ offset: 60 })
  const contactNavOptions = useScrollIntoView<HTMLDivElement>({ offset: 60 })
  const artProcessNavOptions = useScrollIntoView<HTMLDivElement>({ offset: 60 })

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={defaultTheme}
      emotionCache={rtlCache}>
      <Header
        scrollers={{
          hero: heroNavOptions.scrollIntoView,
          myWorks: myWorksNavOptions.scrollIntoView,
          about: aboutNavOptions.scrollIntoView,
          contact: contactNavOptions.scrollIntoView,
          artProcess: artProcessNavOptions.scrollIntoView,
        }}
      />
      <Stack dir="rtl" spacing={0}>
        <Box ref={heroNavOptions.targetRef}>
          <Hero />
        </Box>
        <Box ref={myWorksNavOptions.targetRef}>
          <MyWorks />
        </Box>
        <Box ref={aboutNavOptions.targetRef}>
          <About />
        </Box>
        <Box ref={contactNavOptions.targetRef}>
          <Contact />
        </Box>
        <Box ref={artProcessNavOptions.targetRef}>
          <ArtProcess />
        </Box>
        {/* TODO: add newsletter once a solid plan for it is up */}
        {/* <Newsletter /> */}
        <Footer />
      </Stack>
    </MantineProvider>
  )
}
