import { Box, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'

export function MyWorks() {
  const { t } = useTranslation('translation', { keyPrefix: 'myWorks' })

  return (
    <Box>
      <Title order={2}>{t('title')}</Title>
      {/* button */}
      {/* sliding images */}
    </Box>
  )
}
