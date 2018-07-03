const valToken = require('./loginRoute')
const db = require('../db/dbService')

module.exports = {
  userPost(req, res, next) {
    const validate = valToken.validateToken(req, res)
    
    const username = validate.dec.userFind.username
    const email = validate.dec.userFind.email
    const avatar = validate.dec.userFind.avatar
    const podcastSubscribed = validate.dec.userFind.podcastUsbscribed || []
    const socialNetworks = validate.dec.userFind.socialNetworks || []

    res.status(200).send({ username, email, avatar, podcastSubscribed, socialNetworks })

  },

  userGet(req, res, next) {
    //'/user/:id'
    const username = req.params.id
    db.findOne({ username }).then(userFind => {
      if (userFind){
        const email = userFind.email
        const name = userFind.name
        const avatar = userFind.avatar
        const podcastSubscribed = userFind.podcastSubscribed || []
        const socialNetworks = userFind.podcastNetworks || []
        res.status(200).send({ username, email, name, avatar, podcastSubscribed, socialNetworks })
      } else {
        res.status(404).send('user not registered' )
      }
    })
  },

  addPodcast(req, res, next) {
    const validate = valToken.validateToken(req, res)
    username = validate.dec.userFind.username
    db.findOneAndUpdate({ username }, {$push:{podcastSubscribed: {
      name: "podcastname",
      description: "this is a podcast about...",
      image: "www.linktoimage.com",
      url: "www.urltopodcast.com",
      rss: "www.rsslink.com"
  }}}).then(
      res.status(201).send({podcastSubscribed: [{
            name: "podcastname",
            description: "this is a podcast about...",
            image: "www.linktoimage.com",
            url: "www.urltopodcast.com",
            rss: "www.rsslink.com"
        }]})
      )
  }
}