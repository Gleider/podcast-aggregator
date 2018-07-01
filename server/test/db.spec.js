process.env.NODE_ENV = 'test';

const mongoose = require('mongoose')
const db = require('../src/api/db/db')
const chai = require('chai')
const chaiHttp = require('chai-http')
const users = require('./users')
const server = "http://localhost:3000"
const should = chai.should()

chai.use(chaiHttp)

describe('User test', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost/podcastdb', () => {
      mongoose.connection.db.dropDatabase()
    })
    done()
  })
  

  describe('method /GET', () => {
    it('should return a array', (done) => {
      chai.request(server)
        .get('/oapi/db')
        .end((error, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
        done()
        })
        
    })
  })

  describe('method /POST', () => {
    it('should send to database a valid data', (done) => {
      chai.request(server)
        .post('/api/db')
        .send(users[0])
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.have.property('username')
          res.body.should.have.property('password')
          res.body.should.have.property('name')
          res.body.should.have.property('email')
          done()
        })
    })

    it('should send to database a invalid data, without email', (done) => {
      chai.request(server)
        .post('/api/db')
        .send(users[1])
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.have.property('errors')
          res.body.errors.email.should.have.property('message').eql('Email is required')
          
          done()
        })
    })

    it('should send to database a invalid data, already has the username', (done) => {
      chai.request(server)
        .post ('/api/db')
        .send(users[2])
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.have.property('errors')
         
          done()
        })
    })

    it('should send to database a valid register with a podcast registered', (done) => {
      chai.request(server)
        .post('/api/db')
        .send(users[3])
        .end((err, res) => {
          res.should.have.status(201)
          done()
        })
    })

    it('should send to database a valid register with two podcast registered', (done) => {
      chai.request(server)
        .post('/api/db')
        .send(users[4])
        .end((err, res) => {
          res.should.have.status(201)
          done()
        })
    })

    it('should send to database a valid register with a podcast and a episode', (done) => {
      chai.request(server)
        .post('/api/db')
        .send(users[5])
        .end((err, res) => {
          res.should.have.status(201)
          done()
        })
    })

    it('should send to database a valid register with a podcast and two episodes', (done) => {
      chai.request(server)
        .post('/api/db')
        .send(users[6])
        .end((err, res) => {
          res.should.have.status(201)
          done()
        })
    })

    it('should send to database a valid register with a podcast, two episodes e social networks', (done) => {
      chai.request(server)
        .post('/api/db')
        .send(users[7])
        .end((err, res) => {
          res.should.have.status(201)
          done()
        })
    })
  
  })

  describe('method /PUT', () => {
    it('should modify the name on database', (done) => {
      db.findOne({'email': 'gleider1@gmail.com'}, '_id', (err, data) => {
        if(err) return handleError(err)
        chai.request(server)
          .put(`/api/db/${data._id}`)
          .send({name: 'Gleider de Campos'})
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.have.property('name').eql('Gleider de Campos')
            done()
          })
      })
    })

    it('should add a new podcast to a given user', (done) => {
      db.findOne({'email': 'gleider1@gmail.com'}, '_id', (err, data) => {
        if(err) return handleError(err)
        chai.request(server)
          .put(`/api/db/${data._id}`)
          .send({podcastSubscribed: [{
            name: "podcastname",
            description: "this is a podcast about...",
            image: "www.linktoimage.com",
            url: "www.urltopodcast.com",
            rss: "www.rsslink.com",
          }]})
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
    })

    it('should add a new podcast where already have one', (done) => {
      update = {
              name: "podcastname2",
              description: "this is a podcast about...",
              image: "www.linktoimage2.com",
              url: "www.urltopodcast2.com",
              rss: "www.rsslink2.com"
            }
      db.findOneAndUpdate({'email': 'gleider1@gmail.com'}, {$push: {podcastSubscribed: update}}, (err, data) => {
        if(err) return handleError(err)
        chai.request(server)
          .put(`/api/db/${data._id}`)
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
      })
    })
  })

  describe('method /DELETE', () => {
    it('should delete a user with all informations', (done) => {
      db.findOne({'email': 'gleider7@gmail.com'}, '_id', (err, data) => {
        if(err) return handleError(err)
        chai.request(server)
          .delete(`/api/db/${data._id}`)
          .end((err, res) => {
            res.should.have.status(204)
            done()
          })
      })
    })
  })
})