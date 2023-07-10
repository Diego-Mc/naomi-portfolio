type Constraint = { length: number }

export const isValidPhoneNumber =
  (constraint: Constraint, errorMessage: string) => (value: string) => {
    const matches = value.match(/\d/g)
    return matches && matches.length === constraint.length ? null : errorMessage
  }
