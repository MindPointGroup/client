const type = v => ({}).toString.call(v).slice(8, -1)

module.exports = (props, body, mock) => {
  if (mock) return { data: props }

  const data = {}
  const errors = {}

  for (const [prop, rule] of Object.entries(props)) {
    const value = body[prop]
    const isUndefined = typeof value === 'undefined'

    if (rule.required && isUndefined) {
      errors[prop] = `property of type ${rule.type} required`
      continue
    }

    if (rule.type && !isUndefined && rule.type !== type(value)) {
      errors[prop] = `expected type ${rule.type}`
      continue
    }

    data[prop] = value
  }

  if (Object.keys(errors).length) {
    return { err: errors }
  }

  return { data }
}
