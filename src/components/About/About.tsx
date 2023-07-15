import { Box, Center, Grid, Stack, Text } from '@mantine/core'
import { useStyles } from './About.styles'
import { ImagesWithFrame } from './partials/ImageWithFrame/ImageWithFrame'
import { useTranslation } from 'react-i18next'
import { MARGIN_X } from '../../theme'
import { Headline } from '../Headline/Headline'

const images = [
  'https://res.cloudinary.com/wewix/image/upload/v1688924153/JPEG_image-35CE9FE57F8B-1_vakwli.jpg',
  'https://res.cloudinary.com/wewix/image/upload/v1689437728/JPEG_image-FAD10B1D4CB2-1_hat7be.jpg',
]

export function About() {
  const { classes } = useStyles()

  const { t } = useTranslation('about')

  return (
    <Box py={64}>
      <Headline title={t('title')} mx={MARGIN_X} />
      <Grid columns={12} gutter={24} mx={MARGIN_X}>
        <Grid.Col span={12} lg={6}>
          <Center>
            <ImagesWithFrame maw={500} images={images} />
          </Center>
        </Grid.Col>
        <Grid.Col span={12} lg={6}>
          <Center h="100%">
            <Stack maw={500} className={classes.text} spacing={24}>
              <Text fw={700}>{t('text.p1')}</Text>
              <Text>{t('text.p2')}</Text>
              <Text>{t('text.p3')}</Text>
              <Text>{t('text.p4')}</Text>
              <Text>{t('text.p5')}</Text>
            </Stack>
          </Center>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
