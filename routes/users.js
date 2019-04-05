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
  let personObj = {};
  let person = req.body;
  let interests = ['basketball', 'photography', 'dancing','writing', 'hiking', 'racing', 'gaming', 'geocaching', 'scrapbooking']
  personObj.name = person.name;
  interests.forEach((interest) => {
    if(person[interest] == "on") {
      personObj[interest] = true;
    } else {
      personObj[interest] = false;
    }
  })
  
  db.addPerson(personObj)
  .then(() => {res.redirect('/friends');})
  .catch(error => {
    console.log('error: ', error)
  })
})

router.get('/friends', (req, res) => {
  let people = db.getPeople()
  .then(interests => {
  res.render('listpeople', {people: people})
}).catch(error => {
  res.send('you have an error');
    console.log('err:', error)
  })
  
})

router.get('/friends/:id', (req, res) => {
  let id = req.params.id;
  let person = db.getPerson(id)
  res.render('profile', person)
})

module.exports = router
