import { Flex, Group, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { MARGINS_X } from '../../theme'
import { IconBrandInstagram } from '@tabler/icons-react'
import { ReactComponent as Logo } from '../../assets/naomi-logo.svg'

export function Footer() {
  const { t } = useTranslation('footer')

  return (
    <Group grow sx={{ backgroundColor: 'white' }} py={16} px={MARGINS_X}>
      <Text ta="start" fz="xs">
        {t('copyText')}
      </Text>
      <Logo height={40} />
      <Flex justify="flex-end" onClick={() => console.log('open insta')}>
        <IconBrandInstagram />
      </Flex>
    </Group>
  )
}
