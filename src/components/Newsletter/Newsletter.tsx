import { Box, Center, Grid, Group, Stack, Text, Title } from '@mantine/core'
import { Form } from './partials/Form/Form'
import { useTranslation } from 'react-i18next'
import { MARGIN_X } from '../../theme'
import { useStyles } from './Newsletter.styles'

// TODO: for UX: save info to localstorage after encryption, include date and check it before applying, if expired remove. on send also remove.

export function Newsletter() {
  const { t } = useTranslation('newsletter')

  const { classes } = useStyles()

  return (
    <Grid columns={12} px={MARGIN_X} className={classes.container} py={32}>
      <Grid.Col span={12} lg={5} orderLg={-1}>
        <Stack h="100%">
          <Title order={3} ta="center">
            {t('ctaMessage')}
          </Title>
          <Title order={5} ta="center">
            {t('ctaMessage')}
          </Title>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12} lg={6} offsetLg={1}>
        <Form />
      </Grid.Col>
    </Grid>
  )
}
