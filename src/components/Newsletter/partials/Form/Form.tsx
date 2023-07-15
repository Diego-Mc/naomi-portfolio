import { useForm, isEmail } from '@mantine/form'
import { Box } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { FormField } from '../../../FormField/FormField'

// TODO: for UX: save info to localstorage after encryption, include date and check it before applying, if expired remove. on send also remove.

//TODO: might be moved to functions.types depending on implementation
type NewsletterFormValues = {
  email: string
}

export function Form() {
  const { t } = useTranslation('newsletter')

  const form = useForm<NewsletterFormValues>({
    initialValues: {
      email: '',
    },

    validate: {
      email: isEmail(t('email.error')),
    },
  })

  // const { mutate } = useSendMail()

  const handleSubmit = (values: NewsletterFormValues) => {
    // mutate(values)
    console.log(values) //TODO: replace with logger
  }

  return (
    <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
      <FormField form={form} formValue="email" t={t} withLabel={false} />
    </Box>
  )
}
