import { BackgroundImage, Box, Center, Title } from '@mantine/core'
import { useStyles } from './Hero.styles'
import { useTranslation } from 'react-i18next'

export function Hero() {
  const { classes } = useStyles()

  const { t } = useTranslation('hero')

  return (
    <BackgroundImage src={'hero-bg.png'} className={classes.imageBg}>
      <BackgroundImage src={'statues.png'} className={classes.imageTop}>
        {/* TODO: find a way to create this image so we will have translations - if it's an optimized way, another option is to recreate the effect with javascript */}
        {/* <BackgroundImage src={'test.png'} className={classes.titlesImage}> */}
        <Center className={classes.titlesContainer}>
          <Box mt={{ base: '-30vh', md: 0 }}>
            <Title order={4} className={classes.subTitle} px={6}>
              {t('profession')}
            </Title>
            <Title className={classes.mainTitle} order={1}>
              {t('fullName')}
            </Title>
          </Box>
          <img src={'naomi.png'} className={classes.imageFg} />
        </Center>
        {/* </BackgroundImage> */}
      </BackgroundImage>
    </BackgroundImage>
  )
}
