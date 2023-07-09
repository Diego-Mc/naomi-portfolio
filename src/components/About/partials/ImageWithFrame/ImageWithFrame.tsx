import { Box } from '@mantine/core'
import { useStyles } from './ImageWithFrame.styles'
import { useElementSize } from '@mantine/hooks'

type Props = {
  frameSrc: string
  imageSrc: string
  height: number
}

export function ImageWithFrame(props: Props) {
  const { frameSrc, imageSrc, height } = props

  const { classes } = useStyles()

  return (
    <Box className={classes.frameContainer} h={height}>
      <Box className={classes.imageContainer}>
        <img className={classes.image} src={imageSrc} />
      </Box>
      <img className={classes.frame} src={frameSrc} />
    </Box>
  )
}
