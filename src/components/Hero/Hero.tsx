import { Box, Center, Text, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useStyles } from './Hero.styles'

export function Hero() {
  const { t } = useTranslation('translation', { keyPrefix: 'hero' })

  const { classes } = useStyles()

  return (
    <Center className={classes.titlesContainer}>
      <Box>
        <Text className={classes.subTitle} size={'xl'}>
          {t('profession')}
        </Text>
        <Title className={classes.mainTitle} order={1}>
          {t('fullName')}
        </Title>
      </Box>
    </Center>
  )
}
