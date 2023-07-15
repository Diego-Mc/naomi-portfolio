import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => {
  return {
    mainTitle: {
      [theme.fn.smallerThan('md')]: {
        fontSize: theme.headings.sizes.h2.fontSize,
      },
    },
    subTitle: {
      [theme.fn.smallerThan('md')]: {
        fontSize: theme.headings.sizes.h5.fontSize,
      },
    },
    titlesContainer: {
      height: '100vh',
    },
    imageFg: {
      position: 'absolute',
      bottom: 0,
      pointerEvents: 'none',
    },
    titlesImage: {
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    },
    imageBg: {
      backgroundPosition: 'bottom',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    },
    imageTop: {
      backgroundPosition: 'top',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    },
  }
})
