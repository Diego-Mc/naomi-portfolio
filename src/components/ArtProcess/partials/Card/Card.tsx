import { Box, Center, Grid, Stack, Text, Title } from '@mantine/core'
import { IconPhone } from '@tabler/icons-react'

type Props = {
  title: string
  description: string
  imgUrl: string
}

export function Card(props: Props) {
  const { title, description, imgUrl } = props

  return (
    <Grid align="center" columns={12} justify="center" py={36}>
      <Grid.Col span={4} md={12}>
        <Center>
          <IconPhone />
        </Center>
      </Grid.Col>
      <Grid.Col
        span={8}
        md={12}
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Stack maw={{ md: 200 }} spacing={8}>
          <Title ta={{ md: 'center' }} order={4}>
            {title}
          </Title>
          <Text ta={{ md: 'center' }}>{description}</Text>
        </Stack>
      </Grid.Col>
    </Grid>
  )
}
