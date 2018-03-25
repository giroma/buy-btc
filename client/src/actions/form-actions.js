export const UPDATE_USER_INPUT = 'form:updateUserInput';
export const UPDATE_LAST_PRICE = 'form:updateLastPrice';
export const UPDATE_QUOTE = 'form:updateQuote';

export function updateUserInput(newInputAmount) {
  return {
    type: UPDATE_USER_INPUT,
    payload: {
      userInput: newInputAmount
    }
  };
}

export function updateLastPrice(lastPrice) {
  return {
    type: UPDATE_LAST_PRICE,
    payload: {
      lastPrice: lastPrice
    }
  };
}

export function updateQuote(newQuote) {
  return {
    type: UPDATE_QUOTE,
    payload: {
      quote: newQuote
    }
  };
}
