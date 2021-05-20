import React from 'react'
import { connect } from 'react-redux'

import CartProduct from './CartProduct'

const cartlist = (props) => {
  return (
    <div className={props.cartCheck === 'noCart' ? 'cart-list' : 'cart-list-dropdown'}>
      {props.item.map(product => {
        return (
          // product={product} brings the state towards CartProduct
          <CartProduct key={product.size} product={product}/>
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

export default connect(mapStateToProps)(cartlist)
