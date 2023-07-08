import { MantineProvider, Text, createEmotionCache } from '@mantine/core'
import { defaultTheme } from './theme'
import { useTranslation } from 'react-i18next'
import { Hero } from './components/Hero/Hero'
import stylisRTLPlugin from 'stylis-plugin-rtl'
import { MyWorks } from './components/MyWorks/MyWorks'

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [stylisRTLPlugin],
})

export default function App() {
  const { t } = useTranslation()

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={defaultTheme}
      emotionCache={rtlCache}>
      <div dir="rtl">
        <Hero />
        <MyWorks />
      </div>
    </MantineProvider>
  )
}
