import { Box } from '@mantine/core'
import { useStyles } from './ImageWithFrame.styles'
import ImageSwitcher from '../../../ImageSwitcher/ImageSwitcher'

type Props = {
  images: string[]
  maw?: string | number
}

export function ImagesWithFrame(props: Props) {
  const { images, maw } = props

  const { classes } = useStyles()

  return (
    <Box className={classes.frameContainer} maw={maw}>
      <Box className={classes.imageContainer}>
        <ImageSwitcher
          images={images}
          interval={3000}
          className={classes.image}
        />
      </Box>
      <img className={classes.frame} src={'frame.svg'} />
    </Box>
  )
}
