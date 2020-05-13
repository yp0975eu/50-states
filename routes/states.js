const express = require('express')
const States = require('../models').States

const router = express.Router()

router.get('/states', function(req, res, next) {
  const order = {
    order: ['name']
  }
  States.findAll(order).then( states => {
    res.json(states)
  }).catch(err => next(err))
})

router.patch('/state/:name', function(req, res, next) {
  const update = {
    visited: req.body.visited
  }
  const select = {
    where: {
      name: req.params.name
    }
  }
  States.update(update, select).then( rows => {
    if (rows) {
      return res.send('ok')
    } else {
      res.status(404).send()
    }
  }).catch(err => next(err))
})

router.get('/states/:name', function(req, res, next) {

  States.findOne({where: {name: req.params.name}}).then( state => {
    if (state) {
      return res.json(state)
    } else {
      res.status(404).send()
    }
  }).catch(err => next(err))
})

module.exports = router