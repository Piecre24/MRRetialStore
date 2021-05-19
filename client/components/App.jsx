import React from 'react'
import { connect } from 'react-redux'

import Home from './Home'
import Header from './Header'

const App = (props) => {
  return (
    <div className='app'>
      <Header />
    </div>
  )
}

export default App
