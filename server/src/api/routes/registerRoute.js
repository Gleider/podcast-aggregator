const db = require('../db/dbService')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
//const user = require('./user')
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
    db.findOnde({ username: user }).then(userFind => {
      if(userFind) {
        return res.status(400).send({ errors: ['User already exists']})
      } else {
        const newUser = new user({ username, email, password: passwordHash, name, avatar })
        user.save(err => {
          if(err){
            return res.status(400).send({ err: ['Database error']})
          } else {
            res.json({ username, token })
          }
        })
      }
    })

      res.send('register page')
  },

  validateToken(req, res, next) {
    const token = req.body.token || ''
    jwt.verify(token, env.authSecret, (err, decoded) => {
      return res.status(200).send({ valid: !err })
    })
  }
}