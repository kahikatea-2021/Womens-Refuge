import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import store from './store'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain="dev-xfbt5qv8.au.auth0.com"
      clientId="97odAuGdEYSDcteYHbDf98Nnco9tXUHi"
      redirectUri='http://localhost:3000'
      audience="https://dev-xfbt5qv8.au.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <Provider store={store}>
        <App />
      </Provider>,
    </Auth0Provider>,
    document.getElementById('app')
  )
})
