import { combineReducers } from 'redux'
import OrderReducer from './Order/OrderReducer'
import productReducer from './Product/ProductReducer'
import PasswordReducer from './ResetPassword/PasswordReducer'

export default combineReducers({
  productReducer,
  OrderReducer,
  PasswordReducer,
})