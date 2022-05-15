import { SessionApi, UserApi } from "../api/axiosCall";
import fuzzy from "fuzzy";

export const getUser = async id => {
  const data = await UserApi("get", `/${id}`);
  if (data) {
    return data;
  } else {
    return {};
  }
};

export const increaseUserCoinList = async symbol => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    const userId = userData.split("%")[0];
    const data = await UserApi("get", `/${userId}`);
    let coins;
    if (data) {
      coins = [...data.user.coins, symbol];
    }
    const response = await UserApi("put", `/${userId}`, { coins });
    if (response) {
      return response;
    } else {
      return {};
    }
  } else {
    alert("Must Have An Account In Order To Add To Favorites!!");
    return {};
  }
};


export const signinUser = async user => {
  const data = await SessionApi("post", "/signin", user);
  if (Object.keys(data).length !== 0) {
    const { user } = data;
    const userDataString = `${user._id}%${user.firstName}%${user.email}`;
    localStorage.setItem("userData", userDataString);
    return data;
  } else {
    return {};
  }
};


export const signupUser = async user => {
  const data = await UserApi("post", "/signup", user);
  if (data) {
    return data;
  } else {
    return {};
  }
};


export const signoutUser = async () => {
  const data = await SessionApi("get", "/signout");
  if (data) {
    localStorage.clear();
    return data;
  } else {
    return {};
  }
};


export const findMatches = (input, coins) => {
  if (input && coins) {
    const options = { extract: coin => coin.name };
    const resultstable = fuzzy.filter(input, coins, options);
    const matches = resultstable.map(result => result.original);
    return matches;
  } else {
    return [];
  }
};
