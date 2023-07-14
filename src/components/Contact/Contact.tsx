import { Box, Center, Group, Stack, Text, Title } from '@mantine/core'
import { Form } from './partials/Form/Form'
import { useTranslation } from 'react-i18next'

// TODO: for UX: save info to localstorage after encryption, include date and check it before applying, if expired remove. on send also remove.

export function Contact() {
  const { t } = useTranslation('contact')

  return (
    <Group w="100%">
      <Center sx={{ flexGrow: 1 }}>
        <Stack align="center">
          <Title order={3}>{t('ctaMessage')}</Title>
          <Text mb={20}>{t('ctaDescription')}</Text>
          <Text>{t('ctaEnd')}</Text>
        </Stack>
      </Center>
      <Box mx={50} sx={{ flexBasis: 560, flexShrink: 1 }}>
        <Form />
      </Box>
    </Group>
  )
}
