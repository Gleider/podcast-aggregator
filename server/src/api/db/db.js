const restful = require('node-restful')
const mongoose = restful.mongoose

const episodeSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Episode title is required'] 
  },
  description: { 
    type: String, required: [true, 'Episode description is required'] 
  },
  image: { 
    type: String, 
    required: [true, 'Episode image is required'] 
  },
  duration: { 
    type: String 
  },
  url: { 
    type: String 
  }
})

const podcastSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Podcast name is required'], 
    minlength: 2, 
    maxlength: 100 
  },
  description: { 
    type: String, 
    required: [true, 'Podcast description is required'] 
  },
  image: { 
    type: String, 
    required: [true, 'Podcast image is required'] 
  },
  url: { 
    type: String, 
    required: [true, 'Podcast url is required'] 
  },
  rss: { 
    type: String, 
    required: [true, 'Podcast rss is required'] 
  },
  episodes: [episodeSchema]

})

const socialNetworkSchema = new mongoose.Schema({
  facebook: { 
    type: String 
  },
  twitter: { 
    type: String 
  },
  instagram: { 
    type: String 
  }
})

const userSchema = new mongoose.Schema({
  username: { 
    type: String,
    required: [true, 'Username is required'],
    lowercase: true, 
    minlength: 3, 
    unique: true 
  },
  password: {
    type: String, 
    required: [true, 'Password is required'], 
    minlength: 5, 
    maxlength: 30 
  },
     //match: /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{5,}$/
  name: { 
    type: String, 
    required: [true, 'Name is required'], 
    minlength: 2, 
    maxlength: 20 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    minlength: 7, 
    lowercase: true, 
    unique: true 
  },
  birth: { 
    type: Date 
  },
  image: { 
    type: String
  },
  avatar: { 
    type: String 
  },
  about: { 
    type: String 
  },
  podcastSubscribed: [podcastSchema],
  socialNetwork: [socialNetworkSchema],
  history: { 
    type: String 
  }

})

module.exports = restful.model('podcastdb', userSchema)
