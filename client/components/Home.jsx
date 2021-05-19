import React from 'react'

import whitetee from '../../server/public/image/classic-tee.png'

class Home extends React.Component {
  render () {
    return (
      <>
        <div className= 'product-content'>
          <h3>Classic Tee</h3>
          <div className='price-tag'><p>$75.00</p></div>
          <p> This is where the description would be written </p>
          <div className = 'image-placing'>
            <div className = 'whiteT-img'><img src={whitetee} alt="img" /></div>
          </div>

          <div className= 'buttons-size'>
            <a href ='#'>S</a>
            <a href ='#'>M</a>
            <a href ='#'>L</a>
          </div>
        </div>
      </>
    )
  }
}

export default Home
