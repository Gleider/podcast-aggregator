const db = require('./db')

db.methods(['get', 'post', 'put', 'delete'])
db.updateOptions({ new: true, runValidators: true })

module.exports = db