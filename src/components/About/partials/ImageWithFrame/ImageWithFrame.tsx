import { Box } from '@mantine/core'
import { useStyles } from './ImageWithFrame.styles'

type Props = {
  frameSrc: string
  imageSrc: string
}

export function ImageWithFrame(props: Props) {
  const { frameSrc, imageSrc } = props

  const { classes } = useStyles()

  return (
    <Box className={classes.frameContainer}>
      <Box className={classes.imageContainer}>
        <img className={classes.image} src={imageSrc} />
      </Box>
      <img className={classes.frame} src={frameSrc} />
    </Box>
  )
}
