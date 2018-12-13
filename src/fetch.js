const fetch = require('node-fetch')
const qs = require('querystring')
const debug = require('debug')('client')

const base = `https://api.github.com`
const NEXT_RE = /&page=(\d+)>; rel="next"/
const PREV_RE = /&page=(\d+)>; rel="prev"/

module.exports = async (path, params, args) => {
  if (!process.env.TOKEN) {
    const msg = '[ERR] Env var "TOKEN" required'
    const err = new Error(msg)
    return { err }
  }

  params = params || {}
  params.access_token = process.env.TOKEN
  params = `${qs.stringify(params)}`

  const url = `${base}/${path}?${params}`

  debug(url)

  let res
  let data

  try {
    res = await fetch(url, args)
    data = await res.json()
  } catch (err) {
    return { err }
  }

  let next = null
  let prev = null

  const link = res.headers.get('link')

  if (link) {
    link.split(',').forEach(line => {
      const matchNext = NEXT_RE.exec(line)
      if (matchNext) next = Number(matchNext[1])

      const matchPrev = PREV_RE.exec(line)
      if (matchPrev) prev = Number(matchPrev[1])
    })
  }

  return { data, next, prev }
}
