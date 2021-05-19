export const SELECT_SIZE = 'SELECT_SIZE'

export const navigate = target => {
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
