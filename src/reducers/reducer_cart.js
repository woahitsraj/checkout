import { CHANGE_QUANTITY, DELETE_PRODUCT } from '../actions/action_cart'

const product = {
  name: 'Oversize Blazer',
  brand: 'Brand',
  color: 'black',
  size: '36',
  price: 1750
}

const defaultState = [
  {
    product,
    quantity: 1
  },
  {
    product,
    quantity: 1
  }
]

export default function (state = defaultState, action) {
  switch (action.type) {
    case CHANGE_QUANTITY:
      return state.map((item, index) => {
        if (index === action.index) {
          return {
            ...item,
            quantity: action.quantity
          }
        } else return item
      })
    case DELETE_PRODUCT:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}
