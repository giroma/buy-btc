import {UPDATE_LAST_PRICE} from '../actions/form-actions'

export default function lastPriceReducer(state = '', {type, payload}) {
  switch (type) {
    case UPDATE_LAST_PRICE:
      return payload.lastPrice
      default:
        return state
  }
}
