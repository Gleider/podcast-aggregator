// valid: simple
const user1 = {
  "username": "Gleider1",
  "password": "abc1234",
  "name": "Gleider Mackedanz",
  "email": "gleider1@gmail.com"
}
// invalid: without email
const user2 = {
  "username": "Gleider2",
  "password": "abc1234",
  "name": "Gleider Mackedanz2"
}

// invalid: already have the username
const user3 = {
  "username": "Gleider1",
  "password": "abc1234",
  "name": "Gleider Mackedanz 3",
  "email": "gleider3@gmail.com"
}

// valid: register complete with one podcast added
  const user4 = {
    "username": "Gleider4",
    "password": "abc1234",
    "name": "Gleider Mackedanz 3",
    "email": "gleider4@gmail.com",
    "birth": "1986-07-26",
    "image": "www.imag.com",
    "avatar": "www.linktoavatar.com",
    "about": "informations about me",
    "podcastSubscribed": {
      "name": "podcastname",
      "description": "this is a podcast about...",
      "image": "www.linktoimage.com",
      "url": "www.urltopodcast.com",
      "rss": "www.rsslink.com"
    }
  }
  

const user = [user1, user2, user3, user4]


module.exports = user