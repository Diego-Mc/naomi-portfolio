import { Box, Center, Grid, Stack, Text, Title } from '@mantine/core'
import { Form } from './partials/Form/Form'
import { useTranslation } from 'react-i18next'
import { MARGIN_X } from '../../theme'

// TODO: for UX: save info to localstorage after encryption, include date and check it before applying, if expired remove. on send also remove.

export function Contact() {
  const { t } = useTranslation('contact')

  return (
    <Grid columns={12} px={MARGIN_X}>
      <Grid.Col span={5}>
        <Box>
          <Form />
        </Box>
      </Grid.Col>
      <Grid.Col span={6} offset={1}>
        <Center h="100%">
          <Stack align="center" spacing={64} ta="center">
            <Title order={3}>{t('ctaMessage')}</Title>
            <Text>{t('ctaDescription')}</Text>
            <Text>{t('ctaEnd')}</Text>
          </Stack>
        </Center>
      </Grid.Col>
    </Grid>
  )
}
