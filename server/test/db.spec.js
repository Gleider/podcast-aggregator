process.env.NODE_ENV = 'test';

const mongoose = require('mongoose')
const db = require('../src/api/db/db')
const chai = require('chai')
const chaiHttp = require('chai-http')
const users = require('./users')
const server = "http://localhost:3003"
//const server = require('../src/config/server') //maybe this is the problem
const should = chai.should()

chai.use(chaiHttp)

describe('User test', () => {
  beforeEach((done) => {
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
        .send(users[1])
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.have.property('userName')
          done()
        })
        
    })
  })

  describe('method /PUT', () => {

  })

  describe('method /DELETE', () => {

  })
})