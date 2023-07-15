import { Box, Stack, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { ArtworksSchema } from '../../schemas/firestore/artworks.schema'
import db from '../../db'
import { Marquee } from 'dynamic-marquee-react'
import { Headline } from '../Headline/Headline'
import { MARGIN_X } from '../../theme'

export function MyWorks() {
  const { t } = useTranslation('myWorks')

  const [values] = useCollectionDataOnce<ArtworksSchema>(db.artworks)

  if (!values) return null

  return (
    <Stack py={64} spacing={32} sx={{ backgroundColor: 'white' }}>
      <Headline
        title={t('title')}
        mx={MARGIN_X}
        cta={{ text: t('cta'), href: 'www.google.com' }}
      />
      <Marquee startOnScreen>
        {values.map(({ url, alt, title }) => (
          <img
            key={title}
            alt={alt}
            src={url}
            style={{ maxWidth: 400, marginInline: 5 }}
          />
        ))}
      </Marquee>
    </Stack>
  )
}
