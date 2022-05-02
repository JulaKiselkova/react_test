import api from "../api/config";

export class UserServiceApi {
  static instance = new UserServiceApi();
  static getAll() {
    return api.get("users");
  }

  static getByLogin(login) {
    return api.get(`users/${login}`);
  }
}

export default UserServiceApi.instance;
