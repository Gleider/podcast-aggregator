const db = require('../db/dbService')

module.exports = {
    loginGet(req, res, next) {
    res.send('login page...')
  },

  loginPost(req, res, next){
    const user = req.body.username
    const pass = req.body.password

    db.findOne({username: user}).then(userFind => {
      if(userFind) {
        res.send('user finded')
      } else{
        res.status(404).json({ username: 'user not found' })
      }
    })
  }
}
