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
    
    const username = validate.dec.userFind.username
    const name = req.body.name
    const description = req.body.description
    const image = req.body.image
    const url = req.body.url
    const rss = req.body.rss

    db.findOneAndUpdate({ username }, {$push:{podcastSubscribed: {
      name, description, image, url, rss }
      }}).then(
      res.status(201).send({podcastSubscribed: [{
        name, description, image, url, rss
        }]})
      )
  },

  addEpisode(req, res, next) {
    const validate = valToken.validateToken(req, res)

    const title = req.body.title
    const description = req.body.description
    const image = req.body.image
    const duration = req.body.duration || ''
    const url = req.body.url || ''

    const podcastId = req.params.pod
    const username = validate.dec.userFind.username

    db.findOneAndUpdate(
      { username, 'podcastSubscribed._id':podcastId}, { $push: {'podcastSubscribed.$.episodes':{
        title, description, image, duration, url
      }}},
        (err, result) => {
          if(err) res.status(404).send('podcast not finded')
          else res.status(201).send('registered with success')
      }
    )

  
  }
}