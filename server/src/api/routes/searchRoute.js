const podcastSearch = require('podcast-search')

module.exports = {
  generalSearch(req, res, next) {
    const search = req.query.q
    podcastSearch.search(search).then(data => {
      if(data) res.status(200).send(data[0])
      else res.status(404).send('error')
    })
  },

  topSearch(req, res, next) {
    const num = req.query.n || 10
    podcastSearch.top(num).then(data => {
      if(data) res.status(200).send(data)
      else res.status(404).send('error')
    })
  },

  tagSearch(req, res, next) {
    const q = req.query.q
    const n = req.query.n
    podcastSearch.tagName(q, n).then(data => {
      if(data) res.status(200).send(data)
      else res.status(404).send('error')
    })
  },

  allTags(req, res, next) {
    podcastSearch.listTags(150).then(data => {
      if(data) res.status(200).send(data)
      else res.status(404).send('error')
    })
  }
}