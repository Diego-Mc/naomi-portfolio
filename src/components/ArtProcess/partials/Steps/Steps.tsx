import { Box, Flex, Group, Stack, ThemeIcon } from '@mantine/core'
import { Card } from '../Card/Card'
import { useTranslation } from 'react-i18next'

export function Steps() {
  const { t } = useTranslation('artProcess')

  return (
    <Stack>
      <Flex align="center" wrap="nowrap">
        <Box sx={{ flexGrow: 0.5, border: '1px dashed transparent' }} />
        <Box sx={{ flexBasis: 26, flexShrink: 0 }}>
          <ThemeIcon>1</ThemeIcon>
        </Box>
        <Box sx={{ flexGrow: 1, border: '1px dashed black' }} />
        <Box sx={{ flexBasis: 26, flexShrink: 0 }}>
          <ThemeIcon>2</ThemeIcon>
        </Box>
        <Box sx={{ flexGrow: 1, border: '1px dashed black' }} />
        <Box sx={{ flexBasis: 26, flexShrink: 0 }}>
          <ThemeIcon>3</ThemeIcon>
        </Box>
        <Box sx={{ flexGrow: 0.5, border: '1px dashed transparent' }} />
      </Flex>
      <Flex align="center" justify="space-around" wrap="nowrap">
        <Card
          title={t('cards.contact.title')}
          description={t('cards.contact.description')}
          imgUrl=""
        />
        <Card
          title={t('cards.sketches.title')}
          description={t('cards.sketches.description')}
          imgUrl=""
        />
        <Card
          title={t('cards.fixes.title')}
          description={t('cards.fixes.description')}
          imgUrl=""
        />
      </Flex>
    </Stack>
  )
}
