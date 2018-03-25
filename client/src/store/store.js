import {createStore, combineReducers} from 'redux'

import usdBalanceReducer from '../reducers/usd-balance-reducer'
import btcBalanceReducer from '../reducers/btc-balance-reducer'
import userInputReducer from '../reducers/user-input-reducer'
import lastPriceReducer from '../reducers/last-price-reducer'
import quoteReducer from '../reducers/quote-reducer'

const allReducers = combineReducers({
  usdBalance: usdBalanceReducer,
  btcBalance: btcBalanceReducer,
  lastPrice: lastPriceReducer,
  userInput: userInputReducer,
  quote: quoteReducer
})

const store = createStore(
  allReducers,
  {
    usdBalance: 156.12,
    btcBalance: 0.00000000,
    lastPrice: 9000,
    userInput: '',
    quote: ''
  },
  window.devToolsExtension && window.
    devToolsExtension()
)

export default store;
