import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => {
  return {
    carouselContainer: {
      overflow: 'hidden',
    },
    carouselOverflowContainer: {
      display: 'flex',
      flexWrap: 'nowrap',
      width: '100%',
      '& > *': {
        flexShrink: 0,
        width: '200px !important',
      },
    },
  }
})
