import { Group, Text } from '@mantine/core'
import { useStyles } from './About.styles'
import { ImageWithFrame } from './partials/ImageWithFrame/ImageWithFrame'
import { useTranslation } from 'react-i18next'

export function About() {
  const { classes } = useStyles()

  const { t } = useTranslation('about')

  return (
    <Group grow className={classes.container}>
      <ImageWithFrame
        frameSrc="frame.png"
        imageSrc="https://res.cloudinary.com/wewix/image/upload/v1688924153/JPEG_image-35CE9FE57F8B-1_vakwli.jpg"
      />
      <Text fz="xl" fw={500} className={classes.text}>
        {t('text')}
      </Text>
    </Group>
  )
}
