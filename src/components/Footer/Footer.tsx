import { Anchor, Grid, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { MARGINS_X } from '../../theme'
import { IconBrandInstagram } from '@tabler/icons-react'
import { ReactComponent as Logo } from '../../assets/naomi-logo.svg'
import { useWindowScroll } from '@mantine/hooks'

export function Footer() {
  const { t } = useTranslation('footer')

  const [_, scrollTo] = useWindowScroll()

  return (
    <Grid
      columns={12}
      sx={{ backgroundColor: 'white' }}
      py={16}
      px={MARGINS_X}
      justify="center"
      align="center">
      <Grid.Col span={2}>
        <Logo
          height={40}
          onClick={() => scrollTo({ y: 0 })}
          style={{ cursor: 'pointer' }}
        />
      </Grid.Col>
      <Grid.Col span={8}>
        <Text ta="center" fz="xs">
          {t('copyText')}
        </Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Anchor
          href="https://www.instagram.com/naomisstrawberry"
          color="inherit"
          target="_blank">
          <IconBrandInstagram />
        </Anchor>
      </Grid.Col>
    </Grid>
  )
}
