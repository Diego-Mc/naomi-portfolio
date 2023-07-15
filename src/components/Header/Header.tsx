import { Affix, Group, Text, Transition } from '@mantine/core'
import { useHeadroom, useScrollIntoView } from '@mantine/hooks'
import { useTranslation } from 'react-i18next'
import { HEADER_HEIGHT } from '../../theme'
import { useStyles } from './Header.styles'
import { ReactComponent as Logo } from '../../assets/naomi-logo.svg'

type Props = {
  scrollers: {
    hero: ReturnType<typeof useScrollIntoView>['scrollIntoView']
    myWorks: ReturnType<typeof useScrollIntoView>['scrollIntoView']
    about: ReturnType<typeof useScrollIntoView>['scrollIntoView']
    contact: ReturnType<typeof useScrollIntoView>['scrollIntoView']
    artProcess: ReturnType<typeof useScrollIntoView>['scrollIntoView']
  }
}

export function Header(props: Props) {
  const { t } = useTranslation('header')
  const { scrollers } = props
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
            <Text
              onClick={() => scrollers.myWorks()}
              ta="center"
              sx={{ cursor: 'pointer' }}>
              {t('myWorks')}
            </Text>
            <Text
              onClick={() => scrollers.about()}
              ta="center"
              sx={{ cursor: 'pointer' }}>
              {t('about')}
            </Text>
            <Logo
              onClick={() => scrollers.hero()}
              height={40}
              style={{ cursor: 'pointer' }}
            />
            <Text
              onClick={() => scrollers.contact()}
              ta="center"
              sx={{ cursor: 'pointer' }}>
              {t('contact')}
            </Text>
            <Text
              onClick={() => scrollers.artProcess()}
              ta="center"
              sx={{ cursor: 'pointer' }}>
              {t('process')}
            </Text>
          </Group>
        )}
      </Transition>
    </Affix>
  )
}
