import React from 'react'
import { connect } from 'react-redux'

import { selectSize } from '../action/index'

const ButtonSize = (props) => {
//   mediumS = () => {
//     this.props.dispatch(selectSize('meduim'))
//   }

  //   largeS = () => {
  //     this.props.dispatch(selectSize('large'))
  //   }

  return (
    <>
      <div className = 'size-title' ><h4>size*</h4></div>
      <div className= 'buttons-size'>
        <a href ='#' className={props.size === 'small' ? 'small-size-on' : 'small-size'} onClick={() => props.dispatchSize('small')}>S</a>
        <a href ='#' className={props.size === 'medium' ? 'medium-size-on' : 'medium-size'} onClick={() => props.dispatchSize('medium')}>M</a>
        <a href ='#' className={props.size === 'large' ? 'large-size-on' : 'large-size'} onClick={() => props.dispatchSize('large')}>L</a>
      </div>
    </>

  )
}
const dispatchToProps = (dispatch) => {
  return {
    dispatchSize: (size) => dispatch(selectSize(size))
  }
}
const mapStateToProps = (state) => {
  return {
    size: state.selectSize
  }
}

export default connect(mapStateToProps, dispatchToProps)(ButtonSize)
