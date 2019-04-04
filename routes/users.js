const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  let interests = db.
  res.render('form', )
})

router.post('/', (req, res) => {
  let form = req.body;

})

router.get('/friends', (req, res) => {
  res.render()
})

router.get('/friends/:id', (req, res) => {
  let id = req.params.id;

})

module.exports = router
