const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllInterests: getAllInterests,
  addPerson: addPerson,
  getPerson: getPerson,
  getPeople: getPeople
}

function getAllInterests (db = connection) {
  //returns an array of all interests
  return db('interest').select()
}

function addPerson (person, db = connection) {
  // adds a new person to the people table
  return db('people').insert(person)
}

function getPerson (id, db = connection) {
  //gets a particular person from the people table
  return db('people').where('id', id)
}
function getPeople(db = connection) {
  //returns the list of all persons from the people table
  return db('people').select()
}
