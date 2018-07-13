process.env.NODE_ENV = 'test';
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('./../src/config/config').SERVER
const db_test = require('./../src/config/config').DB_TEST

const users = require('./users')
const podcasts = require('./podcasts')

const should = chai.should()
let token = ''
chai.use(chaiHttp)
let podcastId = ''

describe('Routes test', () => {
  before((done) => {
    mongoose.connect(db_test, () => {
      mongoose.connection.db.dropDatabase()
    })

    done()
  })
  
  // after(function () {
  //   server.close();
  // });

  describe('register page', () => {
    it('should register a valid user', (done) => {
      chai.request(server)
        .post('/oapi/register')
        .send(users[8])
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
    it('should register a user that already registered', (done) => {
      chai.request(server)
        .post('/oapi/register')
        .send(users[8])
        .end((err, res) => {
          res.should.have.status(400)
          done()
        })
    })
  })
  describe('login page', () => {
    it('should return a token to login page', (done) => {
      chai.request(server)
        .post('/oapi/login')
        .send(users[10])
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property('token')
          token = res.body.token;
          done()
        }) 
    })
    it('should return a error, user or password do not exists', (done) => {
      chai.request(server)
        .post('/oapi/login')
        .send(users[11])
        .end((err, res) => {
          res.should.have.status(404)
          done()
        }) 
    })
  })

  describe('logged user page', () => {
    it('should return a user using a valid token', (done) => {
      chai.request(server)
        .post('/api/user')
        .send({'token': token})
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property('username')
          res.body.should.have.property('email')
          res.body.should.have.property('avatar')
          res.body.should.have.property('podcastSubscribed')
          res.body.should.have.property('socialNetworks')
          done()
        })
    })
    it('should not return a user, using an invalid token', (done) => {
      chai.request(server)
        .post('/api/user')
        .send({'token': 'asdfqwer1234'})
        .end((err, res) => {
          res.should.have.status(401)
          done()
        })
    })
  })

  describe('non logged user page', () => {
    it('should return a valid user', (done) => {
      chai.request(server)
        .get('/oapi/user/gleider1')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property('username')
          res.body.should.have.property('email')
          res.body.should.have.property('avatar')
          res.body.should.have.property('podcastSubscribed')
          res.body.should.have.property('socialNetworks')
          done()
        })
    })
    it('should return a invalid user', (done) => {
      chai.request(server)
        .get('/oapi/user/abcdef')
        .end((err, res) => {
          res.should.have.status(404)
          done()
        })
    })
  })

  describe('add podcasts to users', () => {
    it('should add a podcast to a valid user', (done) => {
      chai.request(server)
        .put('/api/addpodcast')
        .send({'token':token})
        .send(podcasts[0])
        .end((err, res) => {
          res.should.have.status(201)
          res.body.podcastSubscribed[0].should.have.property('name')
          res.body.podcastSubscribed[0].should.have.property('description')
          res.body.podcastSubscribed[0].should.have.property('image')
          res.body.podcastSubscribed[0].should.have.property('url')
          res.body.podcastSubscribed[0].should.have.property('rss')
          done()
        })
    })

    it('should add other podcast to same user', (done)=> {
      chai.request(server)
        .put('/api/addpodcast')
        .send({'token':token})
        .send(podcasts[1])
        .end((err, res) => {
          res.should.have.status(201)
          res.body.podcastSubscribed[0].should.have.property('name').eql('newpod2')
          done()
        })
    })  
  })

  // describe('add episodes to podcasts', () => {
  //   it('should add a episode to a specific podcast', (done) => {
  //     console.log('podcastId = ', podcastId)
  //     chai.request(server)
  //       .put(`/api/${podcastId}/addepisode`)
  //       .send({'token':token})
  //       .send(episode1)
  //       .end((err, res) => {
  //         res.should.have.status(201)
  //         done()
  //       })
  //   })
  // })

})