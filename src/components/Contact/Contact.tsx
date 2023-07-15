import { Box, Center, Grid, Stack, Text, Title } from '@mantine/core'
import { Form } from './partials/Form/Form'
import { useTranslation } from 'react-i18next'
import { MARGIN_X } from '../../theme'
import { Headline } from '../Headline/Headline'

// TODO: for UX: save info to localstorage after encryption, include date and check it before applying, if expired remove. on send also remove.

export function Contact() {
  const { t } = useTranslation('contact')

  return (
    <Box sx={{ backgroundColor: 'white' }} py={64}>
      <Headline title={t('title')} mx={MARGIN_X} />
      <Grid columns={12} px={MARGIN_X} mt={32}>
        <Grid.Col span={12} lg={6} offsetLg={1}>
          <Center h="100%">
            <Stack align="center" spacing={64} ta="center">
              <Title order={3}>{t('ctaMessage')}</Title>
              <Text>{t('ctaDescription')}</Text>
              <Text>{t('ctaEnd')}</Text>
            </Stack>
          </Center>
        </Grid.Col>
        <Grid.Col span={12} lg={5} orderLg={-1}>
          <Box>
            <Form />
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
