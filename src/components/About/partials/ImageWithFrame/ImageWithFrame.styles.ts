import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => {
  return {
    frameContainer: {
      position: 'relative',
      width: '100%',
      aspectRatio: '83 / 100', //TODO: replace with actual image size
      scale: '0.8',
    },
    imageContainer: {
      position: 'absolute',
      width: '60%',
      height: '80%',
      top: '10%',
      left: '20%',
      '-webkit-mask-image': 'url(cut-01.svg)',
      '-webkit-mask-position': 'center',
      '-webkit-mask-size': 'auto 126%',
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      pointerEvents: 'none',
    },
    frame: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
    },
  }
})
