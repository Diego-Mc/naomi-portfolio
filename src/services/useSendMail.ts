// hooks/useSendMail.ts
import { useMutation } from 'react-query'
import { EmailInput } from '../../firebase.functions.types'

const sendMail = async (emailInput: EmailInput) => {
  const response = await fetch(
    'https://us-central1-naomi-store.cloudfunctions.net/sendMail',
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
