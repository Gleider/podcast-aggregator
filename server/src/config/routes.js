const express = require('express')
const login = require('../api/routes/loginRoute')
const register = require('../api/routes/registerRoute')

module.exports = (server) => {
  const router = express.Router()
  const nav = express.Router()

  server.use('/api', router)
  server.use('', nav)

  
  const DataBase = require('../api/db/dbService')
  DataBase.register(router, '/db')

 
  // navegation methods
  // login routes
  nav.route('/login').get(login.loginGet)
  nav.route('/login').post(login.loginPost)

  // register routes
  nav.route('/register').get(register.registerGet)
  nav.route('/register').post(register.registerPost)

  nav.route('/logout').get((req, res, next) => {
    res.send('logout page')
  })

  nav.route('/user/:id').get((req, res, next) => {
    res.send('user page')
  })

  nav.route('/podcast/tags').get((req, res, next) => {
    res.send('podcast page')
  })

  nav.route('/podcast/tags/:id').get((req, res, next) => {
    res.send('podcast tag page')
  })

  nav.route('/podcast/:id').get((req, res, next) => {
    res.send('podcast name page')
  })

  nav.route('/podcast/search').get((req, res, next) => {
    res.send('podcast search page')
  })

  nav.route('/podcast/:podcast/:id').get((req, res, next) => {
    res.send('episode page')
  })

  nav.route('/podcast/top').get((req, res, next) => {
    res.send('top page')
  })

  // just logged

  nav.route('/podcast/:id/subscribe').post((req, res, next) => {
    res.send('Subscribe podcast page')
  })

  nav.route('/user/profile').get((req, res, next) => {
    res.send('profile page')
  })

  nav.route('/user/profile').put((req, res, next) => {
    res.send('profile page')
  })

  nav.route('user/list').get((req, res, next) => {
    res.send('list podcast page')
  })

  nav.route('user/list').put((req, res, next) => {
    res.send('list podcast page')
  })

  nav.route('user/list').delete((req, res, next) => {
    res.send('list podcast page')
  })
}