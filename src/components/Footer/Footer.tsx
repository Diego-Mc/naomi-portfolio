import { Flex, Group, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { MARGIN_X } from '../../theme'
import { IconBrandInstagram } from '@tabler/icons-react'

export function Footer() {
  const { t } = useTranslation('footer')

  return (
    <Group grow sx={{ backgroundColor: 'white' }} py={16} px={MARGIN_X}>
      <Text ta="start" fz="xs">
        {t('copyText')}
      </Text>
      <Text ta="center">LOGO</Text>
      <Flex justify="flex-end" onClick={() => console.log('open insta')}>
        <IconBrandInstagram />
      </Flex>
    </Group>
  )
}
