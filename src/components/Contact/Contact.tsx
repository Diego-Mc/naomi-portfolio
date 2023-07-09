import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from '@mantine/form'
import {
  Button,
  Group,
  TextInput,
  NumberInput,
  Box,
  Textarea,
} from '@mantine/core'
import { isValidPhoneNumber } from '../../utils/validation.utils'

// TODO: for UX: save info to localstorage after encryption, include date and check it before applying, if expired remove. on send also remove.

export function Contact() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      topic: '',
      message: '',
    },

    validate: {
      name: hasLength({ min: 2 }, 'Name must be at least 2 characters long'),
      email: isEmail('Invalid email'),
      phone: isValidPhoneNumber('Phone number must have 10 digits'),
      topic: hasLength(
        { min: 2, max: 20 },
        'Topic must be 2-20 characters long'
      ),
      message: hasLength(
        { min: 20 },
        'message must be at least 20 characters long'
      ),
    },
  })

  return (
    <Box
      component="form"
      maw={400}
      mx="auto"
      onSubmit={form.onSubmit((x) => console.log(x))}>
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        {...form.getInputProps('name')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your phone"
        placeholder="Your phone"
        withAsterisk
        mt="md"
        {...form.getInputProps('phone')}
      />
      <TextInput
        label="Your topic"
        placeholder="Your topic"
        withAsterisk
        mt="md"
        {...form.getInputProps('topic')}
      />
      <Textarea
        label="Your message"
        placeholder="Your message"
        withAsterisk
        mt="md"
        {...form.getInputProps('message')}
      />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  )
}
