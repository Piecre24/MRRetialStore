export const SELECT_SIZE = 'SELECT_SIZE'

const offbutton = 'none'
// selecting the size of the t-shirt
const selectSize = (state = offbutton, action) => {
  switch (action.type) {
    case SELECT_SIZE:
      return action.size
    default:
      return state
  }
}

export default selectSize
