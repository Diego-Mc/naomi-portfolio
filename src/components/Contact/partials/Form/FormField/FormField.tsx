import { UseFormReturnType } from '@mantine/form'
import { FormValues } from '../Form'
import { TextInput, Textarea } from '@mantine/core'
import { useTranslation } from 'react-i18next'

type Props = {
  type?: 'input' | 'textarea'
  withAsterisk?: boolean
  form: UseFormReturnType<FormValues>
  formValue: keyof FormValues
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
