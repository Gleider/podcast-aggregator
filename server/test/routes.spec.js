process.env.NODE_ENV = 'test';
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = "http://localhost:3000"

const users = require('./users')

const should = chai.should()
let token = ''
chai.use(chaiHttp)

userRegister = {
  'username':'gleider1',
  'email':'gleider1@gmail.com',
  'name':'Gleider1',
  'password':'abc12345',
  'confirmPassword':'abc12345'
}

userLogin = {
  'username':'gleider1',
  'password':'abc12345'
}

userLoginInv = {
  'username':'gleider66',
  'password':'abc12345'
}

describe('Routes test', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost/podcastdb', () => {
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
        .send(userRegister)
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
    it('should register a user that already registered', (done) => {
      chai.request(server)
        .post('/oapi/register')
        .send(userRegister)
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
        .send(userLogin)
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
        .send(userLoginInv)
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

})