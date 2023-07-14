import { Affix, Group, Text, Transition } from '@mantine/core'
import { useHeadroom } from '@mantine/hooks'
import { useTranslation } from 'react-i18next'
import { HEADER_HEIGHT } from '../../theme'
import { useStyles } from './Header.styles'

export function Header() {
  const { t } = useTranslation('header')
  const isPinned = useHeadroom({ fixedAt: 120 })
  const { classes } = useStyles()

  return (
    <Affix position={{ top: 0, left: 0, right: 0 }}>
      <Transition transition="slide-down" mounted={isPinned}>
        {(transitionStyles) => (
          <Group
            grow
            className={classes.header}
            style={transitionStyles}
            h={HEADER_HEIGHT}>
            <Text ta="center">{t('myWorks')}</Text>
            <Text ta="center">{t('about')}</Text>
            <Text ta="center">LOGO</Text>
            <Text ta="center">{t('contact')}</Text>
            <Text ta="center">{t('process')}</Text>
          </Group>
        )}
      </Transition>
    </Affix>
  )
}
