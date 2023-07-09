import { Box, Image, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import Marquee from 'react-marquee-slider'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { firestore } from '../../../firebase'
import { collection } from 'firebase/firestore'

export function MyWorks() {
  const { t } = useTranslation('translation', { keyPrefix: 'myWorks' })

  const [values, loading, error] = useCollectionDataOnce(
    collection(firestore, 'artworks')
  )

  if (!values) return null

  return (
    <Box style={{ height: '1000px' }}>
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
