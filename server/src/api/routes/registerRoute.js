const db = require('../db/dbService')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const env = require('../../.env')
const user = require('../db/db')

module.exports = {
  registerGet(req, res, next) {
    res.send('register page')
  },

  registerPost(req, res, next){
    const username = req.body.username
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    const avatar = req.body.avatar || 0

    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    if(!bcrypt.compareSync(confirmPassword, passwordHash)){
      return res.status(400).send({ errors: ["Passwords don't match"]})
    }
    db.findOne({ username }).then(userFind => {
      if(userFind) {
        return res.status(400).send({ errors: ['User already exists']})
      } else {
        const newUser = {
          "username": username,
          "email": email,
          "name": name,
          "password": passwordHash,
          "avatar": avatar
        }
        db.create(newUser, (err) => {
          if(err){
            res.send(err)
            return res.status(400).send({ err: ['Database error']})
          } else {
            res.json({ username })
          }
        })
        
      }
    })
  }
}