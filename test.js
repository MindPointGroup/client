const test = require('tape')
const get = require('./src/get')
const pkg = require('./package.json')

test('sanity', t => {
  t.ok(true)
  t.end()
})

let token = process.env.TOKEN

test('fail to connect to github (no token)', async t => {
  delete process.env.TOKEN

  const { err } = await get(pkg.config)

  t.ok(err, 'correct error from missing token')
  t.ok(err.message.includes('required'), 'correct error message')

  process.env.TOKEN = token
  t.end()
})

test('successfully create api', async t => {
  const { err, data } = await get(pkg.config)

  t.ok(!err)

  try {
    const api = await require('.')

    //
    // There should be as many endpoints properly collected
    // as there are definitions in the repos that were cloned.
    //
    const compiledAPICount = Object.keys(api).length

    t.equal(compiledAPICount, data.defs.length, 'correct number of apis')
  } catch (err) {
    t.fail(err, 'unable to include api, malformed api definiton')
  }

  t.end()
})
