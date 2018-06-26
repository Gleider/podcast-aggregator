process.env.NODE_ENV = 'test';

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = "http://localhost:3003"

const should = chai.should()

chai.use(chaiHttp)

describe('Routes test', () => {
  describe('login page', () => {
    it('should get a login page', (done) => {
      chai.request(server)
        .get('/login')
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
  })
})