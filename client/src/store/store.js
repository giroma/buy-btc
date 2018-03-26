import {createStore, combineReducers} from 'redux'
//import all the reducers
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
//create store with initial states
const store = createStore(
  allReducers,
  {
    usdBalance: 156.12,
    btcBalance: 0.00000000,
    lastPrice: undefined,
    userInput: '',
    quote: ''
  },
  window.devToolsExtension && window. //allows browser redux dev tools to work
    devToolsExtension()
)

export default store;
