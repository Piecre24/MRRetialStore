import React from 'react'
import { connect } from 'react-redux'

import { addToCart } from '../action/index'

const AddCartButton = (props) => {
  return (
    <>
      <div className= 'add-to-cart'>
        <a href ='#' onClick={() => props.dispatchAdd(props.size)}>ADD TO CART</a>
      </div>
    </>

  )
}

const dispatchToAddCart = (dispatch) => {
  return {
    dispatchAdd: (size) => dispatch(addToCart(size))
  }
}
const mapStateToProps = (state) => {
  return {
    size: state.selectSize
  }
}

export default connect(mapStateToProps, dispatchToAddCart)(AddCartButton)
