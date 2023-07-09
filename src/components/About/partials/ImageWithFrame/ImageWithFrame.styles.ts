import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => {
  return {
    frameContainer: {
      position: 'relative',
      width: '100%',
    },
    imageContainer: {
      position: 'absolute',
      width: '50%',
      height: '80%',
      top: '10%',
      left: '25%',
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    frame: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  }
})
