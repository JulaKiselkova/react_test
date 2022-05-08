import api from "../api/config";

export class UserServiceApi {
  static instance = new UserServiceApi();
  static getAll() {
    return api.get("users");
  }

  static getByLogin(login) {
    return api.get(`users/${login}`);
  }

  static getInfoByLogin(login, info) {
    return api.get(`users/${login}/${info}`);
  }
}

export default UserServiceApi.instance;
