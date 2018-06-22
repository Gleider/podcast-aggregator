const express = require('express')

module.exports = (server) => {
  const router = express.Router()
  const nav = express.Router()

  server.use('/api', router)
  server.use('', nav)

  const DataBase = require('../api/db/dbService')
  DataBase.register(router, '/db')

 
  // navegation methods
  nav.route('/login').get((req, res, next) => {
    res.send('login page..')
  })

  nav.route('/login').post((req, res, next) => {
    res.send('login page..')
  })

  nav.route('/logout').get((req, res, next) => {
    res.send('logout page')
  })

  nav.route('/logout').post((req, res, next) => {
    res.send('logout page')
  })

  nav.route('/register').get((req, res, next) => {
    res.send('register page')
  })

  nav.route('/register').post((req, res, next) => {
    res.send('register page')
  })

  nav.route('/user/:id').get((req, res, next) => {
    res.send('user page')
  })

  nav.route('/podcast/tags').get((req, res, next) => {
    res.send('podcast page')
  })

  nav.route('/podcast/:id').get((req, res, next) => {
    res.send('podcast name page')
  })
}