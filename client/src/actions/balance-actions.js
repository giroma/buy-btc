export const UPDATE_USD_BALANCE = 'balance:updateUsdBalance';
export const UPDATE_BTC_BALANCE = 'balance:updateBtcBalance';

export function updateUsdBalance(newUsdBalance) {
  return {
    type: UPDATE_USD_BALANCE,
    payload: {
      usdBalance: newUsdBalance
    }
  };
}

export function updateBtcBalance(newBtcBalance) {
  return {
    type: UPDATE_BTC_BALANCE,
    payload: {
      btcBalance: newBtcBalance
    }
  };
}
