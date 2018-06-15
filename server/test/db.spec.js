process.env.NODE_ENV = 'test';

const mongoose = require('mongoose')
const db = require('../src/api/db/db')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../src/api/db/dbService')
const should = chai.should()

chai.use(chaiHttp)

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

})

describe('method /PUT', () => {

})

describe('method /DELETE', () => {

})