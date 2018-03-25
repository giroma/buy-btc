import {UPDATE_BTC_BALANCE} from '../actions/balance-actions'

export default function btcBalanceReducer(state = '', {type, payload}) {
  switch (type) {
    case UPDATE_BTC_BALANCE:
      return payload.btcBalance
      default:
        return state
  }
}
