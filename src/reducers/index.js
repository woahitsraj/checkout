import { combineReducers } from 'redux'

import cartReducer from './reducer_cart'

const rootReducer = combineReducers({
  cart: cartReducer
})

export default rootReducer
