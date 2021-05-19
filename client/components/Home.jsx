import React from 'react'

import whitetee from '../../server/public/image/classic-tee.png'

class Home extends React.Component {
  render () {
    return (
      <>
        <div className= 'product-content'>
          <div className = 'image-placing'>
            <div className = 'whiteT-img'><img src={whitetee} alt="img" /></div>
          </div>

          <div className= 'product-description'>
            <h3>Classic Tee</h3>
            <div className='price-tag'><p>$75.00</p></div>
            <p> Dolor sit amet, consectetur adips elit. Haec et tu ita posuisti, et verba vestra sunt.
              Quod autem retione actum est, id officum applamus dolor sit amet, id officium appellamus dolor
              sit amet, consectetur adipiscing elit. Hae et tu ita possuisti, et verba vestra sunt. Quod autem ration actum est,
              id officuim applamus. </p>

            <div className= 'buttons-size'>
              <a href ='#'>S</a>
              <a href ='#'>M</a>
              <a href ='#'>L</a>
            </div>

            <div className= 'add-to-cart'>
              <a href ='#'>ADD TO CART</a>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default Home
