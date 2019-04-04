const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  let interests = db.getAllInterests()
  res.render('form', {interests: interests})
})

router.post('/', (req, res) => {
  let person = req.body;
  db.addPerson(person);
})

router.get('/friends', (req, res) => {
  let people = db.getPeople()
  res.render('listpeople', {people: people})
})

router.get('/friends/:id', (req, res) => {
  let id = req.params.id;
  let person = db.getPerson(id)
  res.render('profile', person)
})

module.exports = router
