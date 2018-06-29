const db = require('../db/dbService')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const user = require('./user')
const env = require('../../.env')


module.exports = {
    loginGet(req, res, next) {
    res.send('login page...')
  },

  loginPost(req, res, next){
    const user = req.body.username
    const pass = req.body.password

    db.findOne({ username: user }).then(userFind => {
      if(userFind && bcrypt.compareSync(pass, userFind.password)) {
        const token = jwt.sign(userFind, env.authSecret, {
          expiresIn: "1 day"
        })
        const { username } = userFind
        res.json({ username, token })
      } else{
        res.status(404).json({ username: 'user not found' })
      }
    })
  },

  /*validateToken = (req, res, next) => {
    const token = req.body.token || ''
    jwt.verify(token, env.authSecret, (err, decoded) {
      return res.status(200).send({ valid: !err })
    })
  }*/

}
