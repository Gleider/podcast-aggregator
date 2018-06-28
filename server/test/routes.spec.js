process.env.NODE_ENV = 'test';

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = "http://localhost:3003"

const users = require('../src/api/db/db')

const should = chai.should()

chai.use(chaiHttp)

describe('Routes test', () => {
  // after(function () {
  //   server.close();
  // });

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
          res.should.have.status(200)
          res.text.should.eqls('user not finded')
          done()
        })
    })
  })
})