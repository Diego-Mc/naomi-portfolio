import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => {
  return {
    wrapper: {
      transition: 'transform 0.2s',
      transform: 'scale(0.95)',
      position: 'relative',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1)',
      },
    },
  }
})
