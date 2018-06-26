process.env.NODE_ENV = 'test';

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = "http://localhost:3003"
//const server = require('../src/config/server')
const should = chai.should()
//server.close();
chai.use(chaiHttp)

describe('Routes test', () => {
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
  })
})