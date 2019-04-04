const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllInterests()
  .then(interests => {
    console.log(interests)
    res.render('form', {interests: interests})
  }).catch(error => {
    res.send('you have an error');
    console.log('err:', error)
  })
  
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
