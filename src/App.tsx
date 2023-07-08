import { MantineProvider, Text } from '@mantine/core'
import { defaultTheme } from './theme'

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={defaultTheme}>
      <Text>Naomi's portfolio</Text>
    </MantineProvider>
  )
}
