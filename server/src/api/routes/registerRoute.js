const db = require('../db/dbService')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const user = require('./user')
const env = require('../../.env')

module.exports = {
  registerGet(req, res, next) {
    res.send('register page')
  },

  registerPost(req, res, next){
      res.send('register page')
  }
}