import React from 'react'
import { connect } from 'react-redux'

import whitetee from '../../server/public/image/classic-tee.png'
import { navigate } from '../action/index'

class Home extends React.Component {
  smallS = () => {
    this.props.dispatch(navigate('small'))
  }

  mediumS = () => {
    this.props.dispatch(navigate('meduim'))
  }

  largeS = () => {
    this.props.dispatch(navigate('largeS'))
  }

  render () {
    return (
      <>
        <div className= 'product-content'>
          <div className = 'image-placing'>
            <div className = 'whiteT-img'><img src={whitetee} alt="img" /></div>
          </div>

          <div className= 'product-description'>
            <h2>Classic Tee</h2>
            <div className='price-tag'><h4>$75.00</h4></div>
            <p> Dolor sit amet, consectetur adips elit. Haec et tu ita posuisti, et verba vestra sunt.
              Quod autem retione actum est, id officum applamus dolor sit amet, id officium appellamus dolor
              sit amet, consectetur adipiscing elit. Hae et tu ita possuisti, et verba vestra sunt. Quod autem ration actum est,
              id officuim applamus. </p>
            <div className = 'size-title' ><h4>size*</h4></div>
            <div className= 'buttons-size'>
              <a href ='#' className='small-size' onClick={this.smallS}>S</a>
              <a href ='#' className='meduim-size' onClick={this.mediumS}>M</a>
              <a href ='#' className='large-size' onClick={this.largeS}>L</a>
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

const mapStateToProps = (state) => {
  return {
    size: state.size
  }
}

export default connect(mapStateToProps)(Home)
