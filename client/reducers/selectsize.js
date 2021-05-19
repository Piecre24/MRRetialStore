export const SELECT_SIZE = 'SELECT SIZE'

// selecting the size of the t-shirt
const selectedSize = (state = 'none', action) => {
  switch (action.type) {
    case SELECT_SIZE:
      return action.target
    default:
      return state
  }
}

export default selectedSize
