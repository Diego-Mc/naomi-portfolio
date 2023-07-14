import { Group, Stack, Title, useMantineTheme } from '@mantine/core'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { MARGIN_X } from '../../theme'

type Props = {
  title: string
  cta?: {
    text: string
    href: string
  }
}

export function Headline(props: Props) {
  const { cta, title } = props

  const { dir } = useMantineTheme()

  return (
    <Stack spacing={0} mx={MARGIN_X}>
      {cta ? (
        <Group spacing={0} align="flex-end">
          <Title order={5} onClick={() => console.log('go to', cta.href)}>
            {cta.text}
          </Title>
          {dir === 'ltr' ? (
            <IconChevronRight size={20} />
          ) : (
            <IconChevronLeft size={20} />
          )}
        </Group>
      ) : null}
      <Title order={3}>{title}</Title>
    </Stack>
  )
}
