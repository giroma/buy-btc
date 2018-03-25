import {UPDATE_QUOTE} from '../actions/form-actions'

export default function quoteReducer(state = '', {type, payload}) {
  switch (type) {
    case UPDATE_QUOTE:
      return payload.quote
      default:
        return state
  }
}
