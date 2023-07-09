import { Box, Flex, Group, Image, Text } from '@mantine/core'
import { useStyles } from './About.styles'
import { ImageWithFrame } from './partials/ImageWithFrame/ImageWithFrame'
import { useTranslation } from 'react-i18next'
import { useElementSize } from '@mantine/hooks'

export function About() {
  const { classes } = useStyles()

  const { t } = useTranslation('translation', { keyPrefix: 'about' })

  return (
    <Group grow>
      <ImageWithFrame
        frameSrc="frame.png"
        imageSrc="https://res.cloudinary.com/wewix/image/upload/v1688924153/JPEG_image-35CE9FE57F8B-1_vakwli.jpg"
      />
      <Text fz="xl" fw={500} sx={{ whiteSpace: 'break-spaces' }} py={100}>
        {t('text')}
      </Text>
    </Group>
  )
}
