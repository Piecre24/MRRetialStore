import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../action/index'

class header extends React.Component {
  opencart = () => {
    this.props.dispatch(navigate('cart'))
  }

  render () {
    return (
      <>
        <div className = 'header-class'>
          <a href ='#' onClick={this.opencart} className = 'mycart'>My Cart</a>
        </div>

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(header)
