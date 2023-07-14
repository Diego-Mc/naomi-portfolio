import { Box } from '@mantine/core'
import { useStyles } from './ImageWithFrame.styles'

type Props = {
  frameSrc: string
  imageSrc: string
  maw?: string | number
}

export function ImageWithFrame(props: Props) {
  const { frameSrc, imageSrc, maw } = props

  const { classes } = useStyles()

  return (
    <Box className={classes.frameContainer} maw={maw}>
      <Box className={classes.imageContainer}>
        <img className={classes.image} src={imageSrc} />
      </Box>
      <img className={classes.frame} src={frameSrc} />
    </Box>
  )
}
