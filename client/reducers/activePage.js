export const NAVIGATE = 'NAVIGATE'

const initial = 'noCart'

const activePage = (state = initial, action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.target
    default:
      return state
  }
}

export default activePage
