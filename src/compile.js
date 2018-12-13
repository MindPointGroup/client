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

module.exports = args => {
  const {
    defs
  } = args

  if (!defs.length) return ''

  const docstext = []

  const sourcetext = [
    `//`,
    `// DO NOT EDIT! GENERATED FILE!`,
    `//`,
    `const fetch = require('fetch')`,
    `const api = module.exports = {}`
  ]

  for (const def of defs) {
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
    def.paths.forEach(mapping => {
      const version = getVersion(mapping.path, def.basePath)
      nsobj[version] = {}
    })

    const o = JSON.stringify(nsobj, 2, 2).replace(/"/g, '\'')
    sourcetext.push(`${ns} = ${o}`)

    //
    // Add each path under each namespace
    //
    def.paths.forEach(mapping => {
      mapping.path = mapping.path.replace(/\/$/, '')

      const version = getVersion(mapping.path, def.basePath)
      const name = toCamel(stripVersion(mapping.path))
      const p = mapping.path
      const method = (mapping.method || 'get').toLowerCase()

      docstext.push(`## ${method.toUpperCase()} /${def.basePath}${p}`)

      const chain = `${ns}.${version}.${method}${name}`

      sourcetext.push([
        `${chain} = body => {`,
        `  const params = {`,
        `    method: '${method}',`,
        `    body`,
        `  }`,
        ``,
        `  return fetch.request('${p}', params)`,
        `}`,
        ``
      ].join('\n'))

      docstext.push(
        ``,
        `\`\`\`js`,
        `const { res, err, data } = await ${chain}({})`,
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
