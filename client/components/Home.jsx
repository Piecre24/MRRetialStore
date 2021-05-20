import React from 'react'
import { connect } from 'react-redux'

import ButtonSize from './ButtonSize'
import AddCartButton from './AddCartButton'

import whitetee from '../../server/public/image/classic-tee.png'

class Home extends React.Component {
  render () {
    return (
      <>
        <div className= 'title-boilerplate'>
          <h1>Reactssdasdas BoilerPlate</h1>
          <p> This can be used fors future projects and its open source</p>
          <div className= 'buttons'>
            <a href="https://github.com/Piecre24/Boilerplate-2.0" className="button-github"> Github</a>
            <a href="" className="button-code">Code</a>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    size: state.selectSize
  }
}

export default connect(mapStateToProps)(Home)
