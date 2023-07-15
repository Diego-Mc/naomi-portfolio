import { Stack, Text, Title } from '@mantine/core'
import { IconPhone } from '@tabler/icons-react'

type Props = {
  title: string
  description: string
  imgUrl: string
}

export function Card(props: Props) {
  const { title, description, imgUrl } = props

  return (
    <Stack align="center">
      <IconPhone />
      <Title maw={240} ta="center" order={4}>
        {title}
      </Title>
      <Text maw={240} ta="center">
        {description}
      </Text>
    </Stack>
  )
}
