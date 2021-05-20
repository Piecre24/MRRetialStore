import React from 'react'
import { connect } from 'react-redux'

const cartlist = (props) => {
  return (
    <div className={props.cartCheck === 'noCart' ? 'cart-list' : 'cart-list-dropdown'}>
      <p>HELLO WORLD!</p>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartCheck: state.activePage
  }
}
export default connect(mapStateToProps)(cartlist)
