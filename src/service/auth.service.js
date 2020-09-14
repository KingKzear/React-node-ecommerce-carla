import {get, post} from './request'
import { AUTH_URL } from './apiUrls'

class AuthService {
  login(username, password) {
    return post({
      url: AUTH_URL() + "signin", 
      data: { username, password }
    })
     
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return post({
      url: `${AUTH_URL()}signup`,
      data: {
        username,
        email,
        password,
        roles: ['administrator'] 
      }
  });
  }
}

export default new AuthService();