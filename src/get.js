const fs = require('fs')
const fetch = require('./fetch')
const compile = require('./compile')
const pkg = require('../package.json')
const { spawnSync } = require('child_process')
const GH_ACTION_RUN = !!process.env.GITHUB_WORKFLOW

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

async function getRepoSync (repo) {
  let exists = true
  let args = null
  const opts = {}

  try {
    fs.statSync(`${__dirname}/../tmp/${repo.name}`)
  } catch (err) {
    exists = false
  }

  if (exists) {
    args = [
      `pull`,
      `--rebase`,
      `origin`,
      'master'
    ]

    opts.cwd = `${__dirname}/../tmp/${repo.name}`
  } else {
    const url = GH_ACTION_RUN ?
          `https://defionscode:${process.env.TOKEN}@github.com/${pkg.config.org}/${repo.name}.git` :
          `ssh://git@github.com/${pkg.config.org}/${repo.name}`
    args = [
      `clone`,
      `--depth=1`,
      url,
      `tmp/${repo.name}`
    ]
  }

  console.log(` INFO │ Analyzing ${repo.name}`)
  const r = spawnSync('git', args, opts)

  if (r.status > 0) {
    console.log(`  ERR │ ${r.stderr.toString()}`)
    process.exit(r.status)
  }
}

module.exports = async (args = {}) => {
  const {
    pattern
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

    await getRepoSync(repo)

    let def = null

    try {
      def = require(`../tmp/${repo.name}/api.js`)
    } catch (err) {
    }

    try {
      def = require(`../tmp/${repo.name}/api/index.js`)
    } catch (err) {
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
