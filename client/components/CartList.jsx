import React from 'react'
import { connect } from 'react-redux'

import { addToCart } from '../action'

import CartProduct from './CartProduct'

const cartlist = (props) => {
  return (
    <div className={props.cartCheck === 'noCart' ? 'cart-list' : 'cart-list-dropdown'}>
      {props.item.map(product => {
        return (
          <CartProduct key={product.size} product={product} addToCart={props.addToCart}/>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartCheck: state.activePage,
    item: state.addToCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (size) => {
      dispatch(addToCart(size))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(cartlist)
