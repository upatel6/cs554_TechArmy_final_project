import axios from "axios";
import {
  proxyEndpoint,
  coincapHost,
  serverHost,
  apiUsers,
  apiSession
} from "./urls";
import { COINCAP_KEY } from "./env";

export const CoinCapApi = async ({ path, query, offset } = {}) => {
  const newQuery = offset ? `?start=${offset}&limit=10` : query;
  const Opts = {
    method: "get",
    url: proxyEndpoint + coincapHost + path + newQuery,
    withCredentials: false,
    headers: {
      "X-CMC_PRO_API_KEY": COINCAP_KEY,
    }
  };

  try {
    // console.log(Opts)
      const { data } = await axios(Opts);
      console.log(data);    
  
    return data;
  } catch (error) {
    console.error("API FETCH ERROR", error.message);
    return {};
  }
};

export const UserApi = async (method, path, payload = {}) => {
  const Opts = {
    method,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    url: serverHost + apiUsers + path,
    withCredentials: false,
    data: payload,  };

  try {
    const { data } = await axios(Opts);
    return data;
  } catch (error) {
    console.error("USER FETCH ERROR", error.message);
    return {};
  }
};

export const SessionApi = async (method, path, payload = {}) => {
  const Opts = {
    method,
    url: serverHost + apiSession + path,
    withCredentials: true,
    data: payload
  };

  try {
    const { data } = await axios(Opts);
    console.log(data);
    return data;
  } catch (error) {
    console.error("SESSION FETCH ERROR", error.message);
    return {};
  }
};
