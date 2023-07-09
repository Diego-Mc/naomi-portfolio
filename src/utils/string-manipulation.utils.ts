export const formatPhoneNumber = (value: string) => {
  return Number(value.replace(/\D/g, ''))
}
