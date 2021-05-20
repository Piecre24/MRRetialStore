export const ADD_TO_CART = 'ADD_TO_CART'

// selecting add to cart
const addToCart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return getNewProduct(state, action.id)
    default:
      return state
  }
}

function getNewProduct (product, id) {
  let exists = false
  const newCart = product.map(item => {
    if (item.id === id) {
      item.id += 1
      exists = true
    }
    return item
  })
  console.log(product)
  if (exists) {
    return newCart
  } else {
    newCart.push({ id: id, quantity: 1 })
    return newCart
  }
}

export default addToCart
