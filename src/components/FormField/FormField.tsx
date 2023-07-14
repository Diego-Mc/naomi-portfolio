import { UseFormReturnType } from '@mantine/form'
import { TextInput, Textarea } from '@mantine/core'
import { TFunction } from 'i18next'

type Props<T> = {
  type?: 'input' | 'textarea'
  withAsterisk?: boolean
  withLabel?: boolean
  form: UseFormReturnType<T>
  formValue: Extract<keyof T, string>
  t: TFunction
}

export const FormField = <T,>(props: Props<T>) => {
  const {
    form,
    formValue,
    type = 'input',
    withAsterisk = true,
    t,
    withLabel = true,
  } = props

  const fieldProps = {
    label: withLabel ? t(`${formValue}.label`) : null,
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
