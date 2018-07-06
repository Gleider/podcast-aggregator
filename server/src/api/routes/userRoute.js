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
    const podcastId = req.params.pod
    const podcast = validate.dec.userFind.podcastSubscribed
    const username = validate.dec.userFind.username
    
    const episode = {
      'title':'episode1',
      'description':'this is a description',
      'image':'www.linktoimage.com'
    }
    //res.status(200).send(podcast[0]._id)
    db.findOne({ username }).then((user) => {
      //podcast = user.podcastSubscribed
      res.status(200).send(podcast)
    }
    //   db.findOneAndUpdate({ 'name':'newpod1' }, { $push:{episodes:{
    //   episode
    // }}}).then(res.status(201).send({episodes:{
    //   episode
    // }}))
    
  )
    
    
    //db.findOneAndUpdate({ })
  }
}