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
      position: 'relative',
    },
    imageFg: {
      position: 'absolute',
      bottom: 0,
      pointerEvents: 'none',
      left: 0,
      height: '50%',
      [theme.fn.smallerThan('sm')]: {
        height: '40%',
      },
    },
    titlesImage: {
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    },
    imageBg: {
      backgroundPosition: 'bottom',
      backgroundSize: 'auto 40%',
      backgroundRepeat: 'repeat-x',
      backgroundAttachment: 'fixed',
      [theme.fn.smallerThan('sm')]: {
        backgroundAttachment: 'initial',
      },
    },
  }
})
