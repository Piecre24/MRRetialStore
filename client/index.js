import React from 'react'
import ReactDOM from 'react-dom'

// Libaries that will be use
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { HashRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'

import App from './components/App'
import reducers from './reducers'

// Redux stuffs
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

document.addEventListener('DOMContentLoaded', () => {
  // Provider makes the redux store to be free to any nested components
  ReactDOM.render(
    <Router>
      <Provider store = {store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById('app')

  )
})
