process.env.NODE_ENV = 'test';
const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = "http://localhost:3000"

const users = require('./users')

const should = chai.should()

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
/*
  describe('login page', () => {
    
    it('should get a login page', (done) => {
      chai.request(server)
        .get('/login')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })
    it('should post a valid user to login page', (done) => {
      
      chai.request(server)
        .post('/login')
        .send({username:'gleider1'})
        .end((err, res) => {
          res.should.have.status(200)
          res.text.should.eqls('user finded')
          done()
        })
    })
    it('should post an invalid user to login page', (done) => {
      chai.request(server)
        .post('/login')
        .send({username:'test'})
        .end((err, res) => {
          res.should.have.status(404)
          res.should.be.json
          res.body.should.have.property('username').eqls('user not found')
          
          done()
        })
    })
  })*/
})