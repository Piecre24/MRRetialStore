import React from 'react'
import { connect } from 'react-redux'

const cartlist = (props) => {
  return (
    <div className='cart-list'>
      <p className= 'add-cart'></p>
      {/* {props.products.map(product => {
        return (
          hi
        )
      })} */}

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps)(cartlist)
