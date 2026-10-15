import lunr = require('lunr')
import individualIndex = require('./indexes/individualIdx.json')

type MusicRoutesIndexes = 'individual'

const indexes = {
  individual: lunr.Index.load(individualIndex)
}

const search = (val: string, index: MusicRoutesIndexes): lunr.Index.Result[] => {
  return indexes[index].search(val)
}

export { search }
