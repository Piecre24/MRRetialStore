import React from 'react'

const CartProduct = (props) => {
  const item = props.product
  return (
    <div className='item'>
      <p className='item-name'>Classic Tee</p>
      <p>{item.size}</p>
      <p className='item quantity'>{item.quantity}</p>

    </div>

  )
}

export default CartProduct
