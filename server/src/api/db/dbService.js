const db = require('./db')

db.methods(['get', 'post', 'put', 'delete'])
db.updateOptions({ new: true, runValidators: true })

db.route('count', (req, res, next) => {
  db.count((error, value) => {
    if(error) {
      res.status(500).json({ errors: [error]})
    } else {
      res.json({value})
    }
  })
})

module.exports = db