export const NAVIGATE = 'NAVIGATE'

const initialPage = 'home'

const activePage = (state = 'home', action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.target
    default:
      return state
  }
}

export default activePage
