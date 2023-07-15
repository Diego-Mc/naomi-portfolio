import { Box, Space, Stack, ThemeIcon, Title } from '@mantine/core'
import { Headline } from '../Headline/Headline'
import { MARGIN_X } from '../../theme'
import { Steps } from './partials/Steps/Steps'
import { useTranslation } from 'react-i18next'

export function ArtProcess() {
  const { t } = useTranslation('artProcess')

  return (
    <Box py={64}>
      <Headline title={t('title')} mx={MARGIN_X} />
      <Stack px={MARGIN_X} spacing={64} mt={64}>
        <Steps />
        <Stack sx={{ alignSelf: 'center' }} align="center" spacing={16}>
          <Stack spacing={4} align="center">
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
          </Stack>
          <Title order={2} mt={12}>
            {t('lastStep')}
          </Title>
        </Stack>
      </Stack>
    </Box>
  )
}
