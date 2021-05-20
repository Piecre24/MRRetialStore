import React from 'react'

import whitetee from '../../server/public/image/classic-tee.png'
const CartProduct = (props) => {
  const item = props.product
  return (
    <div className='item'>
      <div className = 'WT-C'><img src={whitetee} alt="img" /></div>
      <p className='item-name'>Classic Tee</p>
      <p className='item-sizee'>{item.size}</p>
      <p className='item quantity'>{item.quantity}x</p>

    </div>

  )
}

export default CartProduct
