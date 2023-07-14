import { Box, Group, Text } from '@mantine/core'
import { useStyles } from './About.styles'
import { ImageWithFrame } from './partials/ImageWithFrame/ImageWithFrame'
import { useTranslation } from 'react-i18next'

export function About() {
  const { classes } = useStyles()

  const { t } = useTranslation('about')

  return (
    <Group noWrap>
      <Box sx={{ flexBasis: 560, flexShrink: 1 }}>
        <ImageWithFrame
          frameSrc="frame.png"
          imageSrc="https://res.cloudinary.com/wewix/image/upload/v1688924153/JPEG_image-35CE9FE57F8B-1_vakwli.jpg"
        />
      </Box>
      <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
        <Text fz="xl" fw={500} className={classes.text}>
          {t('text')}
        </Text>
      </Box>
    </Group>
  )
}
