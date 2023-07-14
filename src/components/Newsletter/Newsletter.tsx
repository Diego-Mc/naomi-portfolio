import { Box, Center, Grid, Group, Stack, Text, Title } from '@mantine/core'
import { Form } from './partials/Form/Form'
import { useTranslation } from 'react-i18next'
import { MARGIN_X } from '../../theme'

// TODO: for UX: save info to localstorage after encryption, include date and check it before applying, if expired remove. on send also remove.

export function Newsletter() {
  const { t } = useTranslation('newsletter')

  return (
    <Grid columns={12} mx={MARGIN_X}>
      <Grid.Col span={5}>
        <Stack h="100%">
          <Title order={3} ta="center">
            {t('ctaMessage')}
          </Title>
          <Title order={5} ta="center">
            {t('ctaMessage')}
          </Title>
        </Stack>
      </Grid.Col>
      <Grid.Col span={6} offset={1}>
        <Form />
      </Grid.Col>
    </Grid>
  )
}
