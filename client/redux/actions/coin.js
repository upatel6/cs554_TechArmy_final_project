import { coinTypes } from "./types/coin";
import { getCOINCAPCoins, decreaseUserCoinList } from "../../functions/dashboard";
import { getUser, increaseUserCoinList } from "../../functions/index";

export const requestCOINCAPCoins = (offset = 0) => async dispatch => {
  try{
    dispatch({ type: coinTypes.FETCHING_COINS });
  const { data } = await getCOINCAPCoins(offset);
  console.log(data);
  if (Object.keys(data).length !== 0) {
    return dispatch({
      type: coinTypes.GET_COINCAP_COINS_SUCCESS,
      message: "Success",
      payload: data
    });
  }
}catch(e){
  console.log('error message')
}
return dispatch({
  type: coinTypes.GET_USER_COINS_ERROR,
  message: "No coins returned"
});
};

export const requestUserCoins = id => async dispatch => {
  dispatch({ type: coinTypes.FETCHING_COINS });
  const data = await getUser(id);
  if (Object.keys(data).length !== 0) {
    return dispatch({
      type: coinTypes.GET_USER_COINS_SUCCESS,
      message: data.message,
      payload: data.user.coins
    });
  }
  return dispatch({
    type: coinTypes.GET_USER_COINS_ERROR,
    message: "No coins returned for user"
  });
};

export const deleteUserCoin = symbol => async dispatch => {
  dispatch({ type: coinTypes.FETCHING_COINS });
  const data = await decreaseUserCoinList(symbol);
  if (Object.keys(data).length !== 0) {
    return dispatch({
      type: coinTypes.UPDATE_USER_COINS_SUCCESS,
      message: data.message,
      payload: data.user.coins
    });
  }
  return dispatch({
    type: coinTypes.UPDATE_USER_COINS_ERROR,
    message: "User coin not removed!"
  });
};

export const addUserCoin = symbol => async dispatch => {
  dispatch({ type: coinTypes.FETCHING_COINS });
  const data = await increaseUserCoinList(symbol);
  if (Object.keys(data).length !== 0) {
    return dispatch({
      type: coinTypes.UPDATE_USER_COINS_SUCCESS,
      message: data.message,
      payload: data.user.coins
    });
  }
  return dispatch({
    type: coinTypes.UPDATE_USER_COINS_ERROR,
    message: "User coin not added!"
  });
};
