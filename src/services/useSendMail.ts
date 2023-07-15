// hooks/useSendMail.ts
import { useMutation } from 'react-query'
import { ContactFormValues } from '../../common/types/firebase.functions.types'

const sendMail = async (emailInput: ContactFormValues) => {
  if (import.meta.env.DEV) {
    console.log(
      'YOU ARE IN DEVELOPMENT MODE - you "sent" an email with this info: ',
      emailInput
    )
    return {}
  }

  const response = await fetch(
    'https://us-central1-naomi-store.cloudfunctions.net/sendEmail',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailInput),
    }
  )

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json()
}

export const useSendMail = () => {
  return useMutation(sendMail)
}
