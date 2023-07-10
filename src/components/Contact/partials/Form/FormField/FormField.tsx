import { UseFormReturnType } from '@mantine/form'
import { TextInput, Textarea } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { ContactFormValues } from '../../../../../../firebase.functions.types'

type Props = {
  type?: 'input' | 'textarea'
  withAsterisk?: boolean
  form: UseFormReturnType<ContactFormValues>
  formValue: keyof ContactFormValues
}

export function FormField(props: Props) {
  const { form, formValue, type = 'input', withAsterisk = true } = props

  const { t } = useTranslation('contact')

  const fieldProps = {
    label: t(`${formValue}.label`),
    placeholder: t(`${formValue}.placeholder`),
    withAsterisk,
    mt: 'md',
    ...form.getInputProps(`${formValue}`),
  }

  switch (type) {
    case 'input':
      return <TextInput {...fieldProps} />
    case 'textarea':
      return <Textarea {...fieldProps} />
  }
}
