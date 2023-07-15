import { Box, Stack, ThemeIcon, Title } from '@mantine/core'
import { Headline } from '../Headline/Headline'
import { MARGIN_X } from '../../theme'
import { Steps } from './partials/Steps/Steps'
import { useTranslation } from 'react-i18next'

export function ArtProcess() {
  const { t } = useTranslation('artProcess')

  return (
    <Stack px={MARGIN_X}>
      <Headline title={t('title')} />
      <Steps />
      <Stack sx={{ alignSelf: 'center' }} align="center" spacing={4}>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, #FCF2EC, transparent)',
            }}
          />
          <Box sx={{ border: '1px dashed black', height: 60 }} />
        </Box>
        <ThemeIcon>4</ThemeIcon>
        <Title order={2} mt={12}>
          {t('lastStep')}
        </Title>
      </Stack>
    </Stack>
  )
}
