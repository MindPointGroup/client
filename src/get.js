const fs = require('fs')
const path = require('path')
const fetch = require('./fetch')
const compile = require('./compile')
const pkg = require('../package.json')
const { spawnSync } = require('child_process')

async function getRepos () {
  const params = {
    per_page: 100
  }

  const url = `orgs/${pkg.config.org}/repos`
  let repos = []

  while (true) {
    const { err, data, next } = await fetch(url, params)

    if (err) {
      return { err }
    }

    repos = [...repos, ...data]

    if (!next) break

    params.page = next
  }

  return { data: repos }
}

async function getRepoSync (repo, branch) {
  let exists = true
  let args = null
  const opts = {}

  try {
    fs.statSync(`${__dirname}/../tmp/${repo.name}`)
  } catch (err) {
    exists = false
  }

  const target = `${__dirname}/../tmp/${repo.name}`

  if (exists) {
    args = [
      `pull`,
      `--rebase`,
      `origin`,
      'master'
    ]

    opts.cwd = target 
  } else {
    args = [
      `clone`,
      `ssh://git@github.com/${pkg.config.org}/${repo.name}`,
      `tmp/${repo.name}`
    ]
  }

  {
    console.log(` INFO │ Analyzing ${repo.name}`)
    const r = spawnSync('git', args, opts)

    if (r.status > 0) {
      console.log(`  ERR │ ${r.stderr.toString()}`)
      process.exit(r.status)
    }
  }

  {
    opts.cwd = target
    console.log(` INFO │ Checking out ${branch}`)
    const r = spawnSync('git', ['checkout', branch], opts)

    if (r.status > 0) {
      console.log(`  ERR │ ${r.stderr.toString()}`)
      process.exit(r.status)
    }
  }
}

module.exports = async (args = {}) => {
  const {
    pattern,
    branch
  } = args

  const { err, data: repos } = await getRepos()

  if (err) {
    return { err }
  }

  console.log(` INFO │ Found ${repos.length} repos`)

  const defs = []
  const re = new RegExp(pattern)

  for (const i in repos) {
    let repo = repos[i]

    if (pattern && !re.exec(repo.name)) {
      continue
    }

    await getRepoSync(repo, branch)

    let def = null

    try {
      def = require(path.resolve(`tmp/${repo.name}/api.js`))
    } catch (err) {
      if (!err.message.includes('find module')) {
        console.warn(` WARN │ ${err.message}.`)
      }
    }

    try {
      def = require(path.resolve(`tmp/${repo.name}/api/index.js`))
    } catch (err) {
      console.warn(` WARN │ ${err.message}.`)
    }

    if (!def) {
      console.log(` WARN │ No def found for ${repo.name}`)
      continue
    }

    def.name = repo.name

    defs.push(def)
  }

  try {
    const { source, docs } = await compile({ defs })
    fs.writeFileSync(`${__dirname}/../index.js`, source)
    fs.writeFileSync(`${__dirname}/../API.md`, docs)
  } catch (err) {
    console.log(`  ERR │ Unable to write (${err.message})`, err.stack)
  }

  return { data: { defs, repos } }
}
