const express = require('express')
const login = require('../api/routes/loginRoute')
const register = require('../api/routes/registerRoute')
const user = require('../api/routes/userRoute')
const auth = require('./auth')

module.exports = (server) => {

  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  const openApi = express.Router()
  server.use('/oapi', openApi)
  
  protectedApi.use(auth)

  const DataBase = require('../api/db/dbService')
  DataBase.register(openApi, '/db')
  
  openApi.post('/login', login.loginPost)

  openApi.get('/login', login.loginGet)

  openApi.post('/register', register.registerPost)

  openApi.get('/register', register.registerGet)

  protectedApi.post('/user', user.userPost)

  openApi.get('/user/:id', user.userGet)

  protectedApi.put('/addpodcast', user.addPodcast)

  protectedApi.put('/:pod/addepisode', user.addEpisode)

  protectedApi.put('/addnetwork', user.addNetwork)

}