import api from "../../../api/config";

export const getUsers = (data) => {
  return api.get("users");
};

export const getCertainUserInfo = (login, info) => {
  return api.get(`users/${login}/${info}`);
};
