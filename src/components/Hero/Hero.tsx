import { BackgroundImage, Box, Center, Image, Text, Title } from '@mantine/core'
import { useStyles } from './Hero.styles'
import { useTranslation } from 'react-i18next'

export function Hero() {
  const { classes } = useStyles()

  const { t } = useTranslation('hero')

  return (
    <BackgroundImage src={'bg5.png'} className={classes.imageBg}>
      <BackgroundImage src={'top5.png'} className={classes.imageTop}>
        {/* TODO: find a way to create this image so we will have translations - if it's an optimized way, another option is to recreate the effect with javascript */}
        {/* <BackgroundImage src={'test.png'} className={classes.titlesImage}> */}
        <Center className={classes.titlesContainer}>
          <Box>
            <Text className={classes.subTitle} size={'xl'} mb={0}>
              {t('profession')}
            </Text>
            <Title className={classes.mainTitle} order={1}>
              {t('fullName')}
            </Title>
          </Box>
          <Image src={'fg.png'} className={classes.imageFg} />
        </Center>
        {/* </BackgroundImage> */}
      </BackgroundImage>
    </BackgroundImage>
  )
}
