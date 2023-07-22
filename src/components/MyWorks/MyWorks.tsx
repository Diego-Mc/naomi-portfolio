import {
  Badge,
  Box,
  Center,
  Flex,
  SegmentedControl,
  Space,
  Stack,
  Text,
  Transition,
} from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { ArtworksSchema } from '../../schemas/firestore/artworks.schema'
import db from '../../db'
import { Marquee } from 'dynamic-marquee-react'
import { Headline } from '../Headline/Headline'
import { MARGINS_X } from '../../theme'
import {
  IconBook,
  IconBrush,
  IconCode,
  IconExternalLink,
  IconEye,
  IconKeyframe,
  IconKeyframes,
} from '@tabler/icons-react'
import { useState } from 'react'
import { MarqueeImage } from './partials/MarqueeImage'

export function MyWorks() {
  const { t } = useTranslation('myWorks')

  const [workType, setWorkType] = useState('all')

  const [values] = useCollectionDataOnce<ArtworksSchema>(db.artworks)

  if (!values) return null

  return (
    <Stack py={42} spacing={32} sx={{ backgroundColor: 'white' }}>
      <Flex justify="space-between" align="center">
        <Headline
          title={t('title')}
          mx={MARGINS_X}
          // cta={{ text: t('cta'), href: 'www.google.com' }} //TODO: add when page is ready
        />
        <SegmentedControl
          mx={MARGINS_X}
          color="black"
          bg="transparent"
          radius={999}
          value={workType}
          onChange={setWorkType}
          data={[
            {
              value: 'all',
              label: (
                <Center>
                  <IconEye size="1rem" />
                  <Box tt="uppercase" ml={10}>
                    {t('tags.all')}
                  </Box>
                </Center>
              ),
            },
            {
              value: 'drawings',
              label: (
                <Center>
                  <IconBrush size="1rem" />
                  <Box tt="uppercase" ml={10}>
                    {t('tags.drawings')}
                  </Box>
                </Center>
              ),
            },
            {
              value: 'comics',
              label: (
                <Center>
                  <IconBook size="1rem" />
                  <Box tt="uppercase" ml={10}>
                    {t('tags.comics')}
                  </Box>
                </Center>
              ),
            },
            {
              value: 'animations',
              label: (
                <Center>
                  <IconKeyframes size="1rem" />
                  <Box tt="uppercase" ml={10}>
                    {t('tags.animations')}
                  </Box>
                </Center>
              ),
            },
          ]}
        />
      </Flex>
      <Marquee startOnScreen>
        {values
          .filter(({ tagGroup }) => workType === 'all' || tagGroup === workType)
          .map(({ url, alt, title, tagGroup, urls }) => (
            <MarqueeImage
              key={url}
              url={url}
              urls={urls}
              alt={alt}
              title={title}
              tagGroup={tagGroup}
            />
          ))}
      </Marquee>
      <Space />
    </Stack>
  )
}
