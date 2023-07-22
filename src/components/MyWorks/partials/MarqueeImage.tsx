import { Badge, Box, Modal, Transition, useMantineTheme } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { memo, useState } from 'react'
import { useStyles } from './MarqueeImage.styles'
import { IconArrowLeft, IconArrowRight, IconBook } from '@tabler/icons-react'
import { ArtworksSchema } from '../../../schemas/firestore/artworks.schema'
import { useTranslation } from 'react-i18next'
import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel'

export const MarqueeImage = memo(function MarqueeImage(props: ArtworksSchema) {
  const { alt, title, url, tagGroup, urls } = props

  const { t } = useTranslation('myWorks')

  const [opened, { open, close }] = useDisclosure(false)

  const theme = useMantineTheme()

  const { classes } = useStyles()

  const isMobile = useMediaQuery('(max-width: 50em)')

  const TRANSITION_DURATION = 200
  const [embla, setEmbla] = useState<Embla | null>(null)

  useAnimationOffsetEffect(embla, TRANSITION_DURATION)

  const imageUrl = url ?? urls?.[0]

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size="xl"
        title={title ?? t(`tags.${tagGroup}`, { count: 1 })}
        fullScreen={isMobile}
        transitionProps={{ duration: TRANSITION_DURATION }}
        overlayProps={{
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}>
        {urls ? (
          <Carousel
            getEmblaApi={setEmbla}
            slideSize="100%"
            styles={{
              control: {
                '&[data-inactive]': {
                  opacity: 0,
                  cursor: 'default',
                },
              },
            }}
            nextControlIcon={<IconArrowLeft size={16} />}
            previousControlIcon={<IconArrowRight size={16} />}>
            {urls.map((url) => (
              <Carousel.Slide key={url}>
                <img
                  key={title}
                  alt={alt}
                  src={url}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        ) : (
          <img
            key={title}
            alt={alt}
            src={imageUrl}
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </Modal>

      <Box className={classes.wrapper} onClick={open}>
        <img key={title} alt={alt} src={imageUrl} style={{ maxWidth: 400 }} />
        <Badge
          lh="normal"
          pos="absolute"
          sx={{ bottom: 0, left: 0, margin: 20 }}>
          {t(`tags.${tagGroup}`, { count: 1 })}
        </Badge>
      </Box>
    </>
  )
})
