const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
}

function displayForm (db = connection) {
  //
  return
}

function postForm (db = connection) {
  //
  return
}

function getPerson (id, db = connection) {
  //
  return
}
