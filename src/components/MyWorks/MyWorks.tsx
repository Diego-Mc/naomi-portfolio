import { Box, Image, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { ArtworksSchema } from '../../schemas/firestore/artworks.schema'
import db from '../../db'
import Marquee from 'react-fast-marquee'

export function MyWorks() {
  const { t } = useTranslation('myWorks')

  const [values] = useCollectionDataOnce<ArtworksSchema>(db.artworks)

  if (!values) return null

  return (
    <Box>
      <Title order={2}>{t('title')}</Title>
      {/* button */}
      <Marquee speed={30}>
        {values.map(({ url, alt, title }) => (
          <Image key={title} alt={alt} src={url} maw={200} />
        ))}
      </Marquee>
    </Box>
  )
}
