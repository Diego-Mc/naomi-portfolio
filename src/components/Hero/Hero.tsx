import { BackgroundImage, Box, Center, Image } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useStyles } from './Hero.styles'

export function Hero() {
  const { t } = useTranslation('hero')

  const { classes } = useStyles()

  return (
    <BackgroundImage src={'bg.png'} className={classes.imageBg}>
      <BackgroundImage src={'top.png'} className={classes.imageTop}>
        {/* TODO: find a way to create this image so we will have translations - if it's an optimized way, another option is to recreate the effect with javascript */}
        <BackgroundImage src={'test.png'} className={classes.titlesImage}>
          <Center className={classes.titlesContainer}>
            <Box>
              {/* <Text className={classes.subTitle} size={'xl'}>
                {t('profession')}
              </Text>
              <Title className={classes.mainTitle} order={1}>
                {t('fullName')}
              </Title> */}
            </Box>
            <Image src={'fg.png'} className={classes.imageFg} />
          </Center>
        </BackgroundImage>
      </BackgroundImage>
    </BackgroundImage>
  )
}
