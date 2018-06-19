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
  // valid: register complete with two podcast added
  const user5 = {
    "username": "Gleider5",
    "password": "abc1234",
    "name": "Gleider Mackedanz 5",
    "email": "gleider5@gmail.com",
    "birth": "1986-07-26",
    "image": "www.imag.com",
    "avatar": "www.linktoavatar.com",
    "about": "informations about me",
    "podcastSubscribed": [{
      "name": "podcastname",
      "description": "this is a podcast about...",
      "image": "www.linktoimage.com",
      "url": "www.urltopodcast.com",
      "rss": "www.rsslink.com"
    },{
      "name": "podcastname2",
      "description": "this is a podcast about...",
      "image": "www.linktoimage2.com",
      "url": "www.urltopodcast2.com",
      "rss": "www.rsslink2.com"
    }]

  }
  // valid: register complete with one podcast added and one episode
  const user6 = {
    "username": "Gleider6",
    "password": "abc1234",
    "name": "Gleider Mackedanz 6",
    "email": "gleider6@gmail.com",
    "birth": "1986-07-26",
    "image": "www.imag.com",
    "avatar": "www.linktoavatar.com",
    "about": "informations about me",
    "podcastSubscribed": [{
      "name": "podcastname",
      "description": "this is a podcast about...",
      "image": "www.linktoimage.com",
      "url": "www.urltopodcast.com",
      "rss": "www.rsslink.com",
      "episodes": [{
        "title": "episodetitle",
        "description": "episodedescription",
        "image": "www.linktoimage.com",
        "duration": "60min",
        "url": "www.episodeurl.com"
      }]
    }]
  }
    // valid: register complete with one podcast added and two episodes
  const user7 = {
    "username": "Gleider7",
    "password": "abc1234",
    "name": "Gleider Mackedanz 7",
    "email": "gleider7@gmail.com",
    "birth": "1986-07-26",
    "image": "www.imag.com",
    "avatar": "www.linktoavatar.com",
    "about": "informations about me",
    "podcastSubscribed": [{
      "name": "podcastname",
      "description": "this is a podcast about...",
      "image": "www.linktoimage.com",
      "url": "www.urltopodcast.com",
      "rss": "www.rsslink.com",
      "episodes": [{
        "title": "episodetitle",
        "description": "episodedescription",
        "image": "www.linktoimage.com",
        "duration": "60min",
        "url": "www.episodeurl.com"
      }, {
        "title": "episodetitle2",
        "description": "episodedescription2",
        "image": "www.linktoimage2.com",
        "duration": "60min",
        "url": "www.episodeurl2.com"
      }]
    }]
  }
  // valid: register complete with one podcast added, two episodes and a social network user
  const user8 = {
    "username": "Gleider8",
    "password": "abc1234",
    "name": "Gleider Mackedanz 8",
    "email": "gleider8@gmail.com",
    "birth": "1986-07-26",
    "image": "www.imag.com",
    "avatar": "www.linktoavatar.com",
    "about": "informations about me",
    "socialNetwork": {
      "facebook": "www.facebook.com/gleider",
      "twitter": "www.twitter.com/gleider",
      "instagram": "www.instagram.com/gleider"
    },
    "podcastSubscribed": [{
      "name": "podcastname",
      "description": "this is a podcast about...",
      "image": "www.linktoimage.com",
      "url": "www.urltopodcast.com",
      "rss": "www.rsslink.com",
      "episodes": [{
        "title": "episodetitle",
        "description": "episodedescription",
        "image": "www.linktoimage.com",
        "duration": "60min",
        "url": "www.episodeurl.com"
      }, {
        "title": "episodetitle2",
        "description": "episodedescription2",
        "image": "www.linktoimage2.com",
        "duration": "60min",
        "url": "www.episodeurl2.com"
      }]
    }]
  }
const user = [user1, user2, user3, user4, user5, user6, user7, user8]


module.exports = user