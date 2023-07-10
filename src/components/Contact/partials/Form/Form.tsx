import { useForm, isEmail, hasLength } from '@mantine/form'
import { Button, Group, TextInput, Box, Textarea } from '@mantine/core'
import { isValidPhoneNumber } from '../../../../utils/validation.utils'
import { useTranslation } from 'react-i18next'
import { FormField } from './FormField/FormField'

// TODO: for UX: save info to localstorage after encryption, include date and check it before applying, if expired remove. on send also remove.

export type FormValues = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function Form() {
  const { t } = useTranslation('contact')

  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },

    validate: {
      name: hasLength({ min: 2 }, t('name.error', { min: 2 })),
      email: isEmail(t('email.error')),
      phone: isValidPhoneNumber(
        { length: 10 },
        t('phone.error', { length: 10 })
      ),
      subject: hasLength(
        { min: 2, max: 20 },
        t('subject.error', { min: 2, max: 20 })
      ),
      message: hasLength({ min: 20 }, t('message.error', { min: 20 })),
    },
  })

  const handleSubmit = (values: FormValues) => {
    console.log(values)
    const responseValues = {
      email: values.email,
      subject: values.subject,
      message: values.message,
    }
    fetch('https://us-central1-naomi-store.cloudfunctions.net/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(responseValues),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error))
  }

  return (
    <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
      <FormField form={form} formValue="name" />
      <FormField form={form} formValue="email" />
      <FormField form={form} formValue="phone" withAsterisk={false} />
      <FormField form={form} formValue="subject" />
      <FormField form={form} formValue="message" type="textarea" />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  )
}
