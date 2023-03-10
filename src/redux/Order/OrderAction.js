import { ORDER_ERROR, ORDER_LIST } from './OrderTypes'
import axios from 'axios'

export const listOrders = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/order`)
    dispatch({
      type: ORDER_LIST,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: ORDER_ERROR,
      payload: message,
    })
  }
}