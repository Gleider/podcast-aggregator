// valid: simple
const user1 = {
  "username": "Gleider1",
  "password": "abc1234",
  "name": "Gleider Mackedanz",
  "email": "gleider3@gmail.com"
}
// invalid: without email
const user2 = {
  "username": "Gleider2",
  "password": "abc1234",
  "name": "Gleider Mackedanz2"
}

// invalid: already have the username
const user3 = {
  "username": "Gleider1",
  "password": "abc1234",
  "name": "Gleider Mackedanz 3",
  "email": "gleider3@gmail.com"
}

const user = [user1, user2, user3]


module.exports = user