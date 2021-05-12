const express = require('express')

const router = express.Router()

const checkJwt = require('../checkJwtMiddleware')

// const app = express()
// const jwt = require('express-jwt')
// const jwtAuthz = require('express-jwt-authz')
// const jwksRsa = require('jwks-rsa')

// // Authorization middleware. When used, the
// // Access Token must exist and be verified against
// // the Auth0 JSON Web Key Set
// const checkJwt = jwt({
//   // Dynamically provide a signing key
//   // based on the kid in the header and
//   // the signing keys provided by the JWKS endpoint.
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://dev-onpk9d05.au.auth0.com/.well-known/jwks.json'
//   }),

//   // Validate the audience and the issuer.
//   audience: 'https://eda-finalproject-safehouses.com',
//   issuer: ['https://dev-onpk9d05.au.auth0.com/'],
//   algorithms: ['RS256']
// })

module.exports = router

router.get('/', checkJwt, (req, res) => {
  res.send('hello from a protected place.')
})
