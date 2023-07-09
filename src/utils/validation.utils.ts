export const isValidPhoneNumber = (error: string) => (value: string) => {
  const matches = value.match(/\d/g)
  return matches && matches.length === 10 ? null : error
}
