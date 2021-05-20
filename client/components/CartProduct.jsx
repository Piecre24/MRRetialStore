import React from 'react'

const CartProduct = (props) => {
//   const { size, quantity } = props.item
  console.log(props.item)
  return (
    <div className='item'>
      <p className='item-name'>Classic Tee</p>
      {/* <p className='item quantity'>{quantity}</p>
      <p>{size}</p> */}
    </div>

  )
}

export default CartProduct
