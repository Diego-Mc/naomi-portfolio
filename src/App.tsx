import { MantineProvider, Text } from '@mantine/core'
import { defaultTheme } from './theme'
import { useTranslation } from 'react-i18next'

export default function App() {
  const { t } = useTranslation()

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={defaultTheme}>
      <Text>{t('test')}</Text>
    </MantineProvider>
  )
}
