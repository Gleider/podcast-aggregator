process.env.NODE_ENV = 'test';

const mongoose = require('mongoose')
const db = require('../src/api/db/db')
const chai = require('chai')
const chaiHttp = require('chai-http')
const users = require('./users')
const server = "http://localhost:3003"
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
        .get('/api/db')
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
          console.log(res.body)
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
  
  })

  describe('method /PUT', () => {

  })

  describe('method /DELETE', () => {

  })
})