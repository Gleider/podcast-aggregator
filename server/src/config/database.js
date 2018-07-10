const mongoose = require('mongoose')
const db_test = require('./config').DB_TEST
mongoose.Promise = global.Promise

module.exports = mongoose.connect(db_test)