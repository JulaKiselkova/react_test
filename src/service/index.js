import api from "../api/config";

export class UserServiceApi {
  static instance = new UserServiceApi();
  static getAll() {
    return api.get("users");
  }

  static getByLogin(login) {
    return api.get(`users/${login}?per_page=100`);
  }

  static getInfoByLogin(login, info) {
    return api.get(`users/${login}/${info}?per_page=100`);
    //return api.get(`users/${login}/${info}?per_page=100?page=${page}`);
  }
}

export default UserServiceApi.instance;
