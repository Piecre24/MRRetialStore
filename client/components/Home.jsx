import React from 'react'
import { connect } from 'react-redux'

import ButtonSize from './ButtonSize'

import whitetee from '../../server/public/image/classic-tee.png'

class Home extends React.Component {
  render () {
    return (
      <>
        <div className= 'product-content'>
          <div className = 'image-placing'>
            <div className = 'whiteT-img'><img src={whitetee} width="460" height= "345" alt="img" /></div>
          </div>

          <div className= 'product-description'>
            <h2>Classic Tee</h2>
            <div className='price-tag'><hr/><h4>$75.00</h4><hr/></div>
            <p> Dolor sit amet, consectetur adips elit. Haec et tu ita posuisti, et verba vestra sunt.
              Quod autem retione actum est, id officum applamus dolor sit amet, id officium appellamus dolor
              sit amet, consectetur adipiscing elit. Hae et tu ita possuisti, et verba vestra sunt. Quod autem ration actum est,
              id officuim applamus. </p>
            <ButtonSize />
            <div className= 'add-to-cart'>
              <a href ='#'>ADD TO CART</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    size: state.selectSize
  }
}

export default connect(mapStateToProps)(Home)
