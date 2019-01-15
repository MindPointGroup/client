const pkg = require('../package.json')
const path = require('path')

function toCamel (s) {
  s = s.replace(/\//g, '-')

  const replacer = (_, c) => c.toUpperCase()
  return s.replace(/-(\w)/g, replacer)
}

function getVersion (s, fallback) {
  const match = /^\/(v\d+)/.exec(s)
  if (match) return match[1]
  return fallback || ''
}

function stripVersion (s) {
  return s.replace(/^\/(v\d+)/, (_, v) => ``)
}

const header = `
const Fetch = require('fetch')
const validateProps = require('./validate-props')
const { default: Amplify } = require('aws-amplify')

const fetch = new Fetch({
  root: '${pkg.config.url}',
  auth: Amplify.Auth
})
`

module.exports = async args => {
  const {
    defs
  } = args

  if (!defs.length) return ''

  const docstext = []

  const sourcetext = [
    `//`,
    `// DO NOT EDIT! GENERATED FILE!`,
    `//`,
    header,
    `const api = module.exports = {}`,
    ``,
    `const validators = {}`,
    ``
  ]

  for (const def of defs) {
    //
    // Validator cache
    //
    const validators = {}

    //
    // Namespace each api
    //
    const title = toCamel(def.title)
    const ns = `api.${title}`

    docstext.push(`# ${def.title}\n`)

    //
    // ensure ns is an object and all paths are objects
    //
    const nsobj = {}

    //
    // Ensure that if there are individual versions, we
    // include them in the namespace object.
    //
    for (const mapping of def.paths) {
      const version = getVersion(mapping.path, def.basePath)
      nsobj[version] = {}

      const fn = mapping.function

      //
      // Check if there is a validator for this lambda function,
      // if there is cache it, we will call it in the source text.
      //
      let sig = {}

      if (!validators[fn]) {
        const p = path.join(
          __dirname,
          '..',
          'tmp',
          def.name,
          'handlers',
          fn,
          'validate.js'
        )

        try {
          const validator = require(p)

          const mock = {
            body: {},
            mock: true,
            path: mapping.path,
            method: mapping.method
          }

          const { data } = await validator(mock)
          sig = data
          sourcetext.push(`validators['${fn}'] = ${validator.toString()}`, '')
        } catch (err) {
          console.log(` WARN │ Unable to parse validator for ${fn}`)
          continue
        }

        const id = [mapping.method, fn, mapping.path].join('/')
        validators[id] = sig || ''
      }
    }

    const o = JSON.stringify(nsobj, 2, 2).replace(/"/g, '\'')
    sourcetext.push(`${ns} = ${o}`, '')

    //
    // Add each path under each namespace
    //
    def.paths.forEach(mapping => {
      mapping.path = mapping.path.replace(/\/$/, '')

      const version = getVersion(mapping.path, def.basePath)
      const name = toCamel(stripVersion(mapping.path))
      const p = mapping.path
      const method = (mapping.method || 'get').toLowerCase()
      const httpMethod = method.toUpperCase()

      docstext.push(`## ${httpMethod} /${def.basePath}${p}`)

      const chain = `${ns}.${version}.${method}${name}`
      const validator = []

      if (validators[mapping.function]) {
        validator.push(
          ``,
          `  // Validation`,
          `  const p = { body, path, method: '${httpMethod}' }`,
          `  const { err } = await validators['${mapping.function}'](p)`,
          `  if (err) return { err }`,
          ``
        )
      }

      sourcetext.push([
        `${chain} = async body => {`,
        `  const path = '${mapping.path}'`,

        `${validator ? validator.join('\n') : ''}`,

        `  // Request`,
        `  const params = {`,
        `    method: '${httpMethod}',`,
        `    body`,
        `  }`,
        ``,
        `  return fetch.request(path, params)`,
        `}`,
        ``
      ].join('\n'))

      //
      // Turn the error object into a literal to demo the method signature
      //
      const id = [mapping.method, mapping.function, mapping.path].join('/')
      let sig = validators[id] || ''

      if (sig) {
        sig = JSON.stringify(validators[id], 2, 2)
      }

      docstext.push(
        ``,
        `\`\`\`js`,
        `const { res, err, data } = await ${chain}(${sig})`,
        `\`\`\``,
        ``
      )
    })
  }

  return {
    source: sourcetext.join('\n'),
    docs: docstext.join('\n')
  }
}
