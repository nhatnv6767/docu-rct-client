import { createContext } from 'react'

const initialState = {
  cartItems: [],
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
  increaseQuantity: (index) => {},
  decreaseQuantity: (index) => {},
  emptyCart: () => {},
}

export default createContext(initialState)