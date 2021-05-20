export const ADD_TO_CART = 'ADD_TO_CART'

// selecting add to cart
const addToCart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return getNewProduct(state, action.product)
    default:
      return state
  }
}

function getNewProduct (product, size) {
  let exists = false
  const newCart = product.map(item => {
    console.log(item)
    if (item.size === size) {
      // if size exist, adds another quantity
      item.quantity += 1
      exists = true
    }
    return item
  })
  if (exists) {
    return newCart
  } else {
    newCart.push({ size: size, quantity: 1 })
    return newCart
  }
}

export default addToCart
