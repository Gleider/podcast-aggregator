const express = require('express')
const login = require('../api/routes/loginRoute')
const register = require('../api/routes/registerRoute')
const auth = require('./auth')

module.exports = (server) => {
  /*const router = express.Router()
  const nav = express.Router()*/

  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  const openApi = express.Router()
  server.use('/oapi', openApi)
  
  protectedApi.use(auth)

  const DataBase = require('../api/db/dbService')
  DataBase.register(openApi, '/db')

  // navegation methods
  // login routes
  
  openApi.post('/login', login.loginPost)
  openApi.get('/login', login.loginGet)
  // server.route('/login').get(login.loginGet)
  // server.route('/login').post(login.loginPost)

  // // register routes
  openApi.post('/register', register.registerPost)
  openApi.get('/register', register.registerGet)
  // server.route('/register').get(register.registerGet)
  // server.route('/register').post(register.registerPost)
  openApi.post('/validateToken', login.validateToken)
/*
  server.route('/logout').get((req, res, next) => {
    res.send('logout page')
  })

  server.route('/user/:id').get((req, res, next) => {
    res.send('user page')
  })

  server.route('/podcast/tags').get((req, res, next) => {
    res.send('podcast page')
  })

  server.route('/podcast/tags/:id').get((req, res, next) => {
    res.send('podcast tag page')
  })

  server.route('/podcast/:id').get((req, res, next) => {
    res.send('podcast name page')
  })

  server.route('/podcast/search').get((req, res, next) => {
    res.send('podcast search page')
  })

  server.route('/podcast/:podcast/:id').get((req, res, next) => {
    res.send('episode page')
  })

  server.route('/podcast/top').get((req, res, next) => {
    res.send('top page')
  })

  // just logged

  server.route('/podcast/:id/subscribe').post((req, res, next) => {
    res.send('Subscribe podcast page')
  })

  server.route('/user/profile').get((req, res, next) => {
    res.send('profile page')
  })

  server.route('/user/profile').put((req, res, next) => {
    res.send('profile page')
  })

  server.route('user/list').get((req, res, next) => {
    res.send('list podcast page')
  })

  server.route('user/list').put((req, res, next) => {
    res.send('list podcast page')
  })

  server.route('user/list').delete((req, res, next) => {
    res.send('list podcast page')
  })*/
}