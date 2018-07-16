const express = require('express')
const login = require('../api/routes/loginRoute')
const register = require('../api/routes/registerRoute')
const user = require('../api/routes/userRoute')
const search = require('../api/routes/searchRoute')
const auth = require('./auth')
const path = require('path')

const app = express()

module.exports = (server) => {

  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  const openApi = express.Router()
  server.use('/oapi', openApi)

  openApi.use(express.static(__dirname + '../../../../client'));
  
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

  openApi.get('/search', search.generalSearch)

  openApi.get('/top', search.topSearch)

  openApi.get('/tag', search.tagSearch)

  openApi.get('/alltags', search.allTags)

  openApi.get('/test/:id', user.userGet)
  // openApi.get('/test', function(req, res) {
  //   res.sendFile(path.join(__dirname + '../../../../client/index.html'));
  // });

}