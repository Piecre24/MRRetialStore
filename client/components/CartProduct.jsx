import React from 'react'

import whitetee from '../../server/public/image/classic-tee.png'
const CartProduct = (props) => {
  const item = props.product
  return (
    <div className='item'>
      <div className = 'WT-C'><img src={whitetee} alt="img" /></div>
      <div className = 'item-description'>
        <p className='item-name'>Classic Tee</p>
        <div className='item-quantity'><span>{item.quantity}x <h3>$75</h3></span></div>
        <p className='item-sizee'>Size: {item.size}</p>
      </div>

    </div>

  )
}

export default CartProduct
