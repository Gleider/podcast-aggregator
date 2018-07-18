const valToken = require('./loginRoute')
const db = require('../db/dbService')
const path = require('path')
//const server = require('../../config/server')


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
    const username = req.params.id

    return db.findOne({ username }).then(userFind => {
      if (userFind){
        const email = userFind.email
        const name = userFind.name
        const avatar = userFind.avatar
        const podcastSubscribed = userFind.podcastSubscribed || []
        const socialNetworks = userFind.podcastNetworks || []
        //res.status(200).send({ username, email, name, avatar, podcastSubscribed, socialNetworks })
        //res.sendFile(path.join(__dirname + '../../../../../client/index.html'))
        return { username, email, name, avatar, podcastSubscribed, socialNetworks }
        //res.status(200).send(__dirname + '../../../../client')
        

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
  },
  addNetwork(req, res, next) {
    const validate = valToken.validateToken(req, res)

    const facebook = req.body.facebook || ''
    const instagram = req.body.instagram || ''
    const twitter = req.body.twitter || ''
    const username = validate.dec.userFind.username

    db.findOneAndUpdate(
      { username }, { $push: { socialNetwork:{
        facebook, instagram, twitter
      }}},
        (err, result) => {
          if(err) res.status(404).send('error')
          else res.status(201).send('registered with success')
      }
    )
  }
}