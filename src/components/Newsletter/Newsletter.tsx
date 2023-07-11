import { Box, Group, Text, Title } from '@mantine/core'
import { Form } from './partials/Form/Form'
import { useTranslation } from 'react-i18next'

// TODO: for UX: save info to localstorage after encryption, include date and check it before applying, if expired remove. on send also remove.

export function Newsletter() {
  const { t } = useTranslation('newsletter')

  return (
    <Group grow w="100%">
      <Form />
      <Box>
        <Title order={3}>{t('ctaMessage')}</Title>
        <Text>{t('ctaDescription')}</Text>
        <Text>{t('ctaEnd')}</Text>
      </Box>
    </Group>
  )
}
