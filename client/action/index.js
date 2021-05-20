export const SELECT_SIZE = 'SELECT_SIZE'

export const navigate = target => {
  console.log('clicked')
  return {
    type: 'NAVIGATE',
    target// Open Cartlist
  }
}

export const selectSize = size => {
  return {
    type: 'SELECT_SIZE',
    size // small, medium or large
  }
}

export const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    product
  }
}
