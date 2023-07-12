import { Box, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { ArtworksSchema } from '../../schemas/firestore/artworks.schema'
import db from '../../db'
import { Marquee } from 'dynamic-marquee-react'

export function MyWorks() {
  const { t } = useTranslation('myWorks')

  const [values] = useCollectionDataOnce<ArtworksSchema>(db.artworks)

  if (!values) return null

  return (
    <Box sx={{ width: '100%' }}>
      <Title order={2}>{t('title')}</Title>
      {/* button */}
      <Marquee startOnScreen>
        {values.map(({ url, alt, title }) => (
          <img key={title} alt={alt} src={url} width={400} />
        ))}
      </Marquee>
    </Box>
  )
}
