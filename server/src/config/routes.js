const express = require('express')
const login = require('../api/routes/loginRoute')
const register = require('../api/routes/registerRoute')
const user = require('../api/routes/userRoute')
const search = require('../api/routes/searchRoute')
const auth = require('./auth')
const path = require('path')
const bodyParser = require('body-parser')


const app = express()

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

  openApi.get('/search', search.generalSearch)

  openApi.get('/top', search.topSearch)

  openApi.get('/tag', search.tagSearch)

  openApi.get('/alltags', search.allTags)
  
//openApi.use(express.static('../../../client'))
var options = {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['htm', 'html'],
  index: 'index.html',
  lastModified: true,
  maxAge: '1d',
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
    res.header('Cache-Control', 'public, max-age=1d');
  }
};

openApi.use(bodyParser.urlencoded({ extended: true }));
openApi.use(bodyParser.json());

  openApi.use('/test', express.static(__dirname + '../../../client', options))
  // openApi.use('/test', (req, res) => {
    
  //   res.sendFile(path.resolve(__dirname, '../../../client'), 'index.html')
  //   res.end()
  // })
}