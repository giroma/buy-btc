import {UPDATE_USER_INPUT} from '../actions/form-actions'

export default function userInputReducer(state = '', {type, payload}) {
  switch (type) {
    case UPDATE_USER_INPUT:
      return payload.userInput
      default:
        return state
  }
}
