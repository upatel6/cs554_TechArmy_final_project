import { CoinCapApi, UserApi } from "../api/axiosCall";
import { coincapLatestPath, coincapLimitQuery } from "../api/urls";

export const getCOINCAPCoins = async (offset = 0) => {
  const data = await CoinCapApi({
    path: coincapLatestPath,
    query: coincapLimitQuery,
    offset
  });
  if (data) {
    return data;
  } else {
    return {};
  }
};

export const decreaseUserCoinList = async symbol => {
  const remove = confirm("Are you sure?");
  if (remove) {
    const userData = localStorage.getItem("userData");
    let userId;
    if (userData) {
      userId = userData.split("%")[0];
    }
    const data = await UserApi("get", `/${userId}`);
    let coins;
    if (data) {
      coins = data.user.coins;
    }
    coins.splice(coins.indexOf(symbol), 1);
    const response = await UserApi("put", `/${userId}`, { coins });
    if (response) {
      return response;
    } else {
      return {};
    }
  } else {
    return {};
  }
};
