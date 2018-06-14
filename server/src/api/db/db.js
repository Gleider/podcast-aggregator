const restful = require('node-restful')
const mongoose = restful.mongoose

const episodeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imagem: { type: String, required: true },
  duration: { type: String },
  url: { type: String }
})

const podcastSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 100 },
  description: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
  rss: { type: String, required: true },
  episodes: [episodeSchema]

})

const socialNetworkSchema = new mongoose.Schema({
  facebook: { type: String },
  twitter: { type: String },
  instagram: { type: String }
})

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, lowercase: true, minlength: 3, maxlength: 20, index: { unique: true }},
  password: { type: String, required: true, minlength: 5, maxlength: 30, match: /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{5,}$/ },
  name: { type: String, required: true, minlength: 2, maxlength: 20 },
  email: { type: String, required: true, minlength: 7, lowercase: true, unique: true, match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ },
  birth: { type: Date },
  image: { type: String},
  avatar: { type: String },
  about: { type: String },
  podcastSubscribed: [podcastSchema],
  socialNetwork: [socialNetworkSchema],
  history: { type: String }

})

module.exports = restful.model('podcastdb', userSchema)
