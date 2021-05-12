function extractMockToken (tokenString, rejected = 'unauthorised') {
  const unAuthorised = rejected
  if (!tokenString) {
    return unAuthorised
  }
  const tokens = tokenString.split(' ')
  if (tokens[0]?.toLowerCase() === 'bearer') {
    try {
      tokens.shift()
      let jsonStr = ''
      tokens.forEach(token => {
        console.log(token)
        if (token === ':' || token === '{' || token === '}') {
          jsonStr += token
        } else {
          jsonStr += `"${token}"`
        }
      })
      console.log('json str', jsonStr, JSON.parse(jsonStr))

      return JSON.parse(jsonStr)
    } catch {
      return unAuthorised
    }
  } else {
    return unAuthorised
  }
}

module.exports = extractMockToken
