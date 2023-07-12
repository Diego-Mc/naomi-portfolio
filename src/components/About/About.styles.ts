import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles(() => {
  return {
    text: {
      whiteSpace: 'break-spaces',
      paddingBlock: rem(100),
    },
    container: {
      marginInlineEnd: rem(50),
    },
  }
})
