import { Box, Image, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import Marquee from 'react-marquee-slider'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { ArtworksSchema } from '../../schemas/firestore/artworks.schema'
import db from '../../db'

export function MyWorks() {
  const { t } = useTranslation('translation', { keyPrefix: 'myWorks' })

  const [values, loading, error] = useCollectionDataOnce<ArtworksSchema>(
    db.artworks
  )

  if (!values) return null

  return (
    <Box>
      <Title order={2}>{t('title')}</Title>
      {/* button */}
      <Marquee
        velocity={30}
        direction="rtl"
        onFinish={() => null}
        onInit={() => null}
        resetAfterTries={5}
        scatterRandomly={false}>
        {values.map(({ url, alt, title }) => (
          <Image key={title} alt={alt} src={url} maw={200} />
        ))}
      </Marquee>
    </Box>
  )
}
