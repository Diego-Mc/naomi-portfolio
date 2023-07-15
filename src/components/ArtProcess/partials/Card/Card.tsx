import {
  BackgroundImage,
  Center,
  Grid,
  Stack,
  Text,
  Title,
} from '@mantine/core'

type Props = {
  title: string
  description: string
  imageUrl: string
  backgroundUrl: string
}

export function Card(props: Props) {
  const { title, description, imageUrl, backgroundUrl } = props

  return (
    <Grid align="center" columns={12} justify="center" py={36}>
      <Grid.Col span={4} md={12}>
        <Center px={16} sx={{ transform: 'scale(0.8)' }}>
          <BackgroundImage src={backgroundUrl}>
            <img src={imageUrl} />
          </BackgroundImage>
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
