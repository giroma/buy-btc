import {UPDATE_USD_BALANCE} from '../actions/balance-actions'

export default function usdBalanceReducer(state = '', {type, payload}) {
  switch (type) {
    case UPDATE_USD_BALANCE:
      return payload.usdBalance
      default:
        return state
  }
}
