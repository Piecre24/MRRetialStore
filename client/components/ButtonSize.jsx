import React from 'react'
import { connect } from 'react-redux'

import { selectSize } from '../action/index'

const ButtonSize = (props) => {
  return (
    <>
      <div className = 'size-title' >
        <h4>SIZE</h4>
        <h4 className ='required-star'>*</h4>
        <span className = {props.size === 'error' ? 'show-error' : 'hide-error' } > please pick a size</span>
      </div>
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
