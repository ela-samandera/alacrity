import { ApolloProvider } from '@apollo/react-hooks'
import 'fontsource-roboto'
import React from 'react'
import ReactDOM from 'react-dom'
import apolloClient from './apolloClient'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
