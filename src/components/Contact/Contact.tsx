import { Anchor, Box, Center, Grid, Stack, Text, Title } from '@mantine/core'
import { Form } from './partials/Form/Form'
import { useTranslation } from 'react-i18next'
import { MARGINS_X } from '../../theme'
import { Headline } from '../Headline/Headline'

// TODO: for UX: save info to localstorage after encryption, include date and check it before applying, if expired remove. on send also remove.

export function Contact() {
  const { t } = useTranslation('contact')

  return (
    <Box sx={{ backgroundColor: 'white' }} py={64}>
      <Headline title={t('title')} mx={MARGINS_X} />
      <Grid columns={12} mx={MARGINS_X} mt={32} gutter={40}>
        <Grid.Col span={12} md={6} offsetMd={1}>
          <Center h="100%">
            <Stack align="center" spacing={32} ta="center">
              <Title order={4}>{t('ctaMessage')}</Title>
              <Box>
                <Text>{t('ctaDescription')}</Text>
                <Anchor
                  sx={{ color: 'inherit' }}
                  href="mailto:naomi@naomikrispel.com">
                  <Text>naomi@naomikrispel.com</Text>
                </Anchor>
              </Box>
              <Text>{t('ctaEnd')}</Text>
            </Stack>
          </Center>
        </Grid.Col>
        <Grid.Col span={12} md={5} orderMd={-1}>
          <Box>
            <Form />
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
