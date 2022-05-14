import { UserApi, SessionApi } from "../api/axiosCall";

export const updateUser = async user => {
  const userData = localStorage.getItem("userData");
  let userId;
  if (userData) {
    userId = userData.split("%")[0];
    const data = await UserApi("put", `/${userId}`, user);
    if (data) {
      console.log(data);
      const userDataString = `${data.user._id}%${data.user.firstName}%${
        data.user.email
      }`;
      localStorage.setItem("userData", userDataString);
      return data;
    } else {
      return {};
    }
  }
  return {};
};

export const deleteUser = async id => {
  if (id) {
    const data = await SessionApi("delete", `/users/${id}`);
    if (data) {
      localStorage.clear();
      return data;
    } else {
      return {};
    }
  } else {
    return {};
  }
};
