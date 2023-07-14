import { Affix, Group, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

export function Header() {
  const { t } = useTranslation('header')

  return (
    <Affix position={{ top: 0, left: 0, right: 0 }}>
      <Group grow sx={{ backgroundColor: 'white' }} py={32}>
        <Text ta="center">{t('myWorks')}</Text>
        <Text ta="center">{t('about')}</Text>
        <Text ta="center">LOGO</Text>
        <Text ta="center">{t('contact')}</Text>
        <Text ta="center">{t('process')}</Text>
      </Group>
    </Affix>
  )
}
