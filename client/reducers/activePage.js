export const NAVIGATE = 'NAVIGATE'

let initial = 'noCart'

const activePage = (state = initial, action) => {
  switch (action.type) {
    case NAVIGATE:
      return cartStatus(action.target)
    default:
      return state
  }
}

// function that sees if its cart is visible
function cartStatus (status) {
  let on = false
  // need to debug
  if (initial !== status) {
    initial = 'cart'
    on = true
  } else {
    initial = 'noCart'
    on = false
  }
  if (on) {
    return status
  } else {
    status = 'noCart'
    return status
  }
}

export default activePage
