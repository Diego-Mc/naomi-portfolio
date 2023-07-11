import { useForm, isEmail, hasLength } from '@mantine/form'
import { Button, Group, Box } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { FormField } from '../../../FormField/FormField'
import { useSendMail } from '../../../../services/useSendMail'
import { ContactFormValues } from '../../../../../firebase.functions.types'

// TODO: for UX: save info to localstorage after encryption, include date and check it before applying, if expired remove. on send also remove.

export function Form() {
  const { t } = useTranslation('contact')

  const form = useForm<ContactFormValues>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },

    //TODO: replace with zod validation
    validate: {
      name: hasLength({ min: 2 }, t('name.error', { min: 2 })),
      email: isEmail(t('email.error')),
      subject: hasLength(
        { min: 2, max: 20 },
        t('subject.error', { min: 2, max: 20 })
      ),
      message: hasLength({ min: 20 }, t('message.error', { min: 20 })),
    },
  })

  const { mutate } = useSendMail()

  const handleSubmit = (values: ContactFormValues) => {
    mutate(values)
    console.log(values) //TODO: replace with logger
  }

  return (
    <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
      <FormField form={form} formValue="name" t={t} />
      <FormField form={form} formValue="email" t={t} />
      <FormField form={form} formValue="subject" t={t} />
      <FormField form={form} formValue="message" type="textarea" t={t} />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  )
}
