const connection = require('./connection')

function isAdmin (db = connection) {

}

function getUser (sub, db = connection) {
  return db('users')
    .where('id', '=', sub)
}

module.exports = {
  isAdmin,
  getUser
}
