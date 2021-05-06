function toLowerCaseValue (db, value) {
  return db.raw(`LOWER(${value})`)
}

module.exports = {
  toLowerCaseValue
}
