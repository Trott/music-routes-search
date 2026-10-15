'use strict'

const assert = require('assert')

const { search } = require('../index.js')

const checkResults = (results) => {
  assert.ok(results.length > 0)
  results.forEach((val) => {
    assert.ok(/^[\w\s]+$/.test(val.ref), `Invalid ref format: ${val.ref}`)
    assert.strictEqual(typeof val.score, 'number')
    assert.ok(typeof val.matchData, 'object')
  })
}

checkResults(search('Chrissie Hynde', 'individual'))
assert.throws(() => {
  search('Fhqwhgads', 'Strong Bad')
})

assert.throws(() => {
  search('Fhqwhgads')
})

for (const index of ['artist', 'release', 'track']) {
  assert.throws(() => search('Chrissie Hynde', index))
}
