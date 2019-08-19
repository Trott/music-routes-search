'use strict'

const lunr = require('lunr')

const path = require('path')

const indexesDir = path.resolve(__dirname, 'indexes')

const indexes = {};
['artist', 'individual', 'release', 'track'].forEach((val) => { indexes[val] = lunr.Index.load(require(path.join(indexesDir, `${val}Idx.json`))) })

// move to test
let results

results = indexes.artist.search('Chrissie Hynde')
results.forEach((result) => {
  console.log('artist', result.ref, result.score)
})

results = indexes.individual.search('Chrissie Hynde')
results.forEach((result) => {
  console.log('individual', result.ref, result.score)
})

results = indexes.release.search('Days')
results.forEach((result) => {
  console.log('release', result.ref, result.score)
})

results = indexes.track.search('Steak')
results.forEach((result) => {
  console.log('track', result.ref, result.score)
})

// end tests

// const search = async (val) => {
// }
