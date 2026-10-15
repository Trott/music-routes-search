'use strict'

const individuals = require('music-routes-data/data/individuals')

const lunr = require('lunr')

// threads vs. no threads?

function index (data) {
  return lunr(function () {
    this.ref('id')
    this.field('text')

    data.forEach(function (doc) {
      this.add({ id: doc._id, text: doc.names.join('\n') })
    }, this)
  })
}

const individualIdx = index(individuals)

const fs = require('fs')
const path = require('path')

const ifErr = (err) => { if (err) throw err }

const indexesPath = path.resolve(path.join(__dirname, '..', 'indexes'))

fs.writeFile(`${indexesPath}/individualIdx.json`, JSON.stringify(individualIdx), ifErr)
